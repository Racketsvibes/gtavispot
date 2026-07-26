import { RecommendationItemV1 } from './page-contracts';
import { findRelatedEntities } from '../queries/helpers';
import { EntityType } from '../types/database';

export class RecommendationEngine {
  /**
   * Builds database-driven recommendations based on entity links and shared relationships.
   */
  static async buildRecommendations(
    entityType: EntityType,
    entityId: string,
    limit: number = 3
  ): Promise<RecommendationItemV1[]> {
    const related = await findRelatedEntities(entityType, entityId);
    
    return related.slice(0, limit).map(r => ({
      id: r.targetId,
      type: r.targetType,
      slug: r.targetId,
      name: r.targetName,
      thumbnailUrl: null,
    }));
  }
}
