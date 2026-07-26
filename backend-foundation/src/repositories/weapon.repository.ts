import { BaseRepository } from './base.repository';
import { weapons } from '../db/schema';
import { DbWeapon } from '../types/database';

export class WeaponRepository extends BaseRepository<
  typeof weapons,
  DbWeapon,
  typeof weapons.$inferInsert
> {
  constructor() {
    super(weapons, 'weapons');
  }
}

export const weaponRepository = new WeaponRepository();
