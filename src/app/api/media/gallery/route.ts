import { mediaApplication } from '@/backend/application/media.application';
import { createApiResponse, wrapApiHandler } from '../../../../lib/api-envelope';

export const GET = wrapApiHandler(async () => {
  const collections = await mediaApplication.mediaCollections();
  return createApiResponse(collections.screenshots);
});
