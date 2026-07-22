import { characterApplication } from '@/backend/application/character.application';
import { createApiResponse, wrapApiHandler } from '../../../lib/api-envelope';

export const GET = wrapApiHandler(async () => {
  const characters = await characterApplication.charactersList();
  return createApiResponse(characters);
});
