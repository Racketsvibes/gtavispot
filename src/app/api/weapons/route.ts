import { weaponApplication } from '@/backend/application/weapon.application';
import { createApiResponse, wrapApiHandler } from '../../../lib/api-envelope';

export const GET = wrapApiHandler(async () => {
  const weapons = await weaponApplication.weaponsList();
  return createApiResponse(weapons);
});
