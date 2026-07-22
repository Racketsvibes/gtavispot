import { weaponApplication } from '@/backend/application/weapon.application';
import { createApiResponse, wrapApiHandler } from '../../../../lib/api-envelope';

export const GET = wrapApiHandler(async (request: Request, { params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const page = await weaponApplication.weaponPage(slug);
  return createApiResponse(page);
});
