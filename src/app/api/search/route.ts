import { searchApplication } from '@/backend/application/search.application';
import { createApiResponse, wrapApiHandler } from '../../../lib/api-envelope';
import { searchSchema } from '@/backend/validation';

export const GET = wrapApiHandler(async (request: Request) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  const limit = url.searchParams.get('limit') || '20';
  const offset = url.searchParams.get('offset') || '0';

  const validated = searchSchema.parse({ query, limit, offset });

  const searchPage = await searchApplication.searchPage(
    validated.query || '',
    validated.limit,
    validated.offset
  );

  return createApiResponse(searchPage);
});
