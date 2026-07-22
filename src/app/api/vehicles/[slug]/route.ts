import { vehicleApplication } from '@/backend/application/vehicle.application';
import { createApiResponse, wrapApiHandler } from '../../../../lib/api-envelope';

export const GET = wrapApiHandler(async (request: Request, { params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const page = await vehicleApplication.vehiclePage(slug);
  return createApiResponse(page);
});
