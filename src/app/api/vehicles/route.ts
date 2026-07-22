import { vehicleApplication } from '@/backend/application/vehicle.application';
import { createApiResponse, wrapApiHandler } from '../../../lib/api-envelope';

export const GET = wrapApiHandler(async () => {
  const vehicles = await vehicleApplication.vehiclesList();
  return createApiResponse(vehicles);
});
