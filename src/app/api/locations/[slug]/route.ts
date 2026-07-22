import { locationApplication } from '@/backend/application/location.application';
import { createApiResponse, wrapApiHandler } from '../../../../lib/api-envelope';

export const GET = wrapApiHandler(async (request: Request, { params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const page = await locationApplication.locationPage(slug);
  return createApiResponse(page);
});
