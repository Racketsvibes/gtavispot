import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Expose the current pathname to the root layout so it can render the
// correct <html lang> on the server (e.g. "es" for /es/ routes).
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    // Run on pages only; skip static assets, images and API routes.
    '/((?!api|_next/static|_next/image|favicon.ico|images|tiles|.*\\..*).*)',
  ],
};
