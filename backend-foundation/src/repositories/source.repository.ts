import { BaseRepository } from './base.repository';
import { sources } from '../db/schema';
import { DbSource } from '../types/database';

export class SourceRepository extends BaseRepository<
  typeof sources,
  DbSource,
  typeof sources.$inferInsert
> {
  constructor() {
    super(sources, 'sources');
  }
}

export const sourceRepository = new SourceRepository();
