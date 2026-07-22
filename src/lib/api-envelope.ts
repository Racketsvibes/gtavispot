import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { ZodError } from 'zod';
import { rateLimiter, getClientIp } from './rate-limiter';
import { AppError } from '@/backend/errors';

export interface ApiResponseEnvelope<T = any> {
  success: boolean;
  data: T | null;
  meta: {
    timestamp: string;
    etag?: string;
    [key: string]: any;
  };
  errors: string[] | null;
}

export function generateEtag(data: any): string {
  const content = typeof data === 'string' ? data : JSON.stringify(data);
  return `W/"${crypto.createHash('sha1').update(content).digest('hex')}"`;
}

/**
 * Wraps dynamic data in the standardized GTAVISPOT Response Envelope,
 * calculating ETag and Cache-Control parameters.
 */
export function createApiResponse<T>(
  data: T,
  statusCode = 200,
  headers: Record<string, string> = {}
): Response {
  const body: ApiResponseEnvelope<T> = {
    success: true,
    data,
    meta: {
      timestamp: new Date().toISOString(),
    },
    errors: null,
  };

  const jsonStr = JSON.stringify(body);
  const etag = generateEtag(jsonStr);
  body.meta.etag = etag;

  const responseHeaders = new Headers(headers);
  responseHeaders.set('Content-Type', 'application/json');
  responseHeaders.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');
  responseHeaders.set('ETag', etag);

  return new NextResponse(JSON.stringify(body), {
    status: statusCode,
    headers: responseHeaders,
  });
}

/**
 * Handles conditional GET validation requests.
 */
export function checkConditionalGet(request: Request, etag: string): Response | null {
  const ifNoneMatch = request.headers.get('If-None-Match');
  if (ifNoneMatch === etag || ifNoneMatch === etag.replace('W/', '')) {
    return new Response(null, {
      status: 304,
      headers: {
        'ETag': etag,
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=30',
      },
    });
  }
  return null;
}

/**
 * Creates unified error responses.
 */
export function createApiError(
  message: string | string[],
  statusCode = 400
): Response {
  const messages = Array.isArray(message) ? message : [message];
  const body: ApiResponseEnvelope<null> = {
    success: false,
    data: null,
    meta: {
      timestamp: new Date().toISOString(),
    },
    errors: messages,
  };

  return new NextResponse(JSON.stringify(body), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

/**
 * A higher-order function that wraps API route handlers, applying:
 * 1. Client IP rate limiting (60req/min)
 * 2. Security headers (Frame options, CSP, no-sniff, referrer policy)
 * 3. Consistent JSON error structures for validations and runtime exceptions.
 */
export function wrapApiHandler(handler: (request: Request, context: any) => Promise<Response>) {
  return async (request: Request, context: any) => {
    try {
      const ip = getClientIp(request);
      const rlResult = rateLimiter.check(ip);

      const headers: Record<string, string> = {
        'X-RateLimit-Limit': rlResult.limit.toString(),
        'X-RateLimit-Remaining': rlResult.remaining.toString(),
        'X-RateLimit-Reset': rlResult.reset.toString(),
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Security-Policy': "default-src 'self'",
      };

      if (rlResult.limited) {
        return new NextResponse(
          JSON.stringify({
            success: false,
            data: null,
            meta: { timestamp: new Date().toISOString() },
            errors: ['Too many requests. Please try again later.'],
          }),
          {
            status: 429,
            headers,
          }
        );
      }

      const response = await handler(request, context);

      // Inject standard headers on success responses
      for (const [key, val] of Object.entries(headers)) {
        response.headers.set(key, val);
      }

      return response;
    } catch (error: any) {
      console.error('API Error:', error);

      if (error instanceof ZodError) {
        const issues = error.issues.map((e: any) => `${e.path.join('.')}: ${e.message}`);
        return createApiError(issues, 422);
      }

      if (error instanceof AppError) {
        return createApiError(error.message, error.statusCode);
      }

      return createApiError('Internal Server Error.', 500);
    }
  };
}
