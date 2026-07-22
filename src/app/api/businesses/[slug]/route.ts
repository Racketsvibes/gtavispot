import { businessApplication } from '@/backend/application/business.application';
import { createApiResponse, wrapApiHandler } from '../../../../lib/api-envelope';

export const GET = wrapApiHandler(async (request: Request, { params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const page = await businessApplication.businessPage(slug);
  return createApiResponse(page);
});
