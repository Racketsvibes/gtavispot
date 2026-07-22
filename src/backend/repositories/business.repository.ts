import { BaseRepository } from './base.repository';
import { businesses } from '../db/schema';
import { DbBusiness } from '../types/database';

export class BusinessRepository extends BaseRepository<
  typeof businesses,
  DbBusiness,
  typeof businesses.$inferInsert
> {
  constructor() {
    super(businesses, 'businesses');
  }
}

export const businessRepository = new BusinessRepository();
