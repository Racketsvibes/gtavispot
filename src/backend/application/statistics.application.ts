import { PageStatisticsV1 } from './page-contracts';
import { db } from '../db';
import { entityMedia, relationships } from '../db/schema';
import { eq, and, or, sql } from 'drizzle-orm';

export class StatisticsBuilder {
  /**
   * Aggregates relation statistics (counts of screenshots, connected entities) for an entity.
   */
  static async buildEntityStats(entityType: string, entityId: string): Promise<PageStatisticsV1> {
    const [imagesResult] = await db
      .select({ value: sql<number>`count(*)` })
      .from(entityMedia)
      .where(
        and(
          eq(entityMedia.entityType, entityType),
          eq(entityMedia.entityId, entityId)
        )
      );

    const [relResult] = await db
      .select({ value: sql<number>`count(*)` })
      .from(relationships)
      .where(
        or(
          and(
            eq(relationships.fromEntityType, entityType),
            eq(relationships.fromEntityId, entityId)
          ),
          and(
            eq(relationships.toEntityType, entityType),
            eq(relationships.toEntityId, entityId)
          )
        )
      );

    return {
      imagesCount: Number(imagesResult?.value || 0),
      relationshipsCount: Number(relResult?.value || 0),
    };
  }
}
