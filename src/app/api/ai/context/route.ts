import { aiApplication } from '@/backend/application/ai.application';
import { createApiResponse, wrapApiHandler } from '../../../../lib/api-envelope';
import { entityTypeSchema, slugSchema } from '@/backend/validation';
import { z } from 'zod';

const aiContextQuerySchema = z.object({
  entityType: entityTypeSchema,
  slug: slugSchema,
});

export const GET = wrapApiHandler(async (request: Request) => {
  const url = new URL(request.url);
  const entityType = url.searchParams.get('entityType') || '';
  const slug = url.searchParams.get('slug') || '';

  const validated = aiContextQuerySchema.parse({ entityType, slug });

  const context = await aiApplication.aiContext(validated.entityType, validated.slug);
  return createApiResponse(context);
});
