import { locationApplication } from '@/backend/application/location.application';
import { createApiResponse, wrapApiHandler } from '../../../lib/api-envelope';

export const GET = wrapApiHandler(async () => {
  const locations = await locationApplication.locationsList();
  return createApiResponse(locations);
});
