import { mapApplication } from '@/backend/application/map.application';
import { createApiResponse, wrapApiHandler } from '../../../lib/api-envelope';

export const GET = wrapApiHandler(async () => {
  const data = await mapApplication.mapData();
  return createApiResponse(data);
});
