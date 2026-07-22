import { businessApplication } from '@/backend/application/business.application';
import { createApiResponse, wrapApiHandler } from '../../../lib/api-envelope';

export const GET = wrapApiHandler(async () => {
  const businesses = await businessApplication.businessesList();
  return createApiResponse(businesses);
});
