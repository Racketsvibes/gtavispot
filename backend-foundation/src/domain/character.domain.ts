import { DbCharacter, DbMedia } from '../types/database';
import { logger } from '../lib/logger';
import { ValidationError } from '../errors';
import { slugSchema } from '../validation';

export class CharacterDomain {
  /**
   * Validates a character record according to GTA VI Knowledge Engine rules.
   */
  static validate(character: DbCharacter, heroMedia: DbMedia | null | undefined): void {
    // 1. Slug validation
    const slugParsed = slugSchema.safeParse(character.slug);
    if (!slugParsed.success) {
      throw new ValidationError({ slug: [slugParsed.error.message] });
    }

    // 2. Business Rule: Every character should always have exactly one hero image.
    if (!heroMedia) {
      logger.warn(`Character "${character.name}" (ID: ${character.id}) is missing a primary hero image!`);
    }

    // 3. Status rule
    if (!character.status) {
      throw new ValidationError({ status: ['Status is required.'] });
    }
  }
}
