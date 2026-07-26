import { weaponRepository } from '../repositories/weapon.repository';
import { mediaRepository } from '../repositories/media.repository';
import { WeaponWithRelations } from '../types/database';
import { EntityNotFoundError } from '../errors';

export class WeaponService {
  async getWeaponBySlug(slug: string): Promise<WeaponWithRelations> {
    const weapon = await weaponRepository.findBySlug(slug);
    if (!weapon) {
      throw new EntityNotFoundError('weapon', slug);
    }

    const [heroMedia, gallery] = await Promise.all([
      mediaRepository.findHero('weapon', weapon.id),
      mediaRepository.findGallery('weapon', weapon.id),
    ]);

    return {
      ...weapon,
      heroMedia,
      gallery,
    };
  }
}

export const weaponService = new WeaponService();
