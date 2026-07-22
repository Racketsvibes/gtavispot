import { characterApplication } from '@/backend/application/character.application';
import { createApiResponse, wrapApiHandler } from '../../../../lib/api-envelope';

export const GET = wrapApiHandler(async (request: Request, { params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const page = await characterApplication.characterPage(slug);
  return createApiResponse(page);
});
