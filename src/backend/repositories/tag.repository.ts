import { BaseRepository } from './base.repository';
import { tags } from '../db/schema';
import { DbTag } from '../types/database';

export class TagRepository extends BaseRepository<
  typeof tags,
  DbTag,
  typeof tags.$inferInsert
> {
  constructor() {
    super(tags, 'tags');
  }
}

export const tagRepository = new TagRepository();
