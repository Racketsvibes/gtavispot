import { BaseRepository } from './base.repository';
import { relationships } from '../db/schema';
import { DbRelationship, RelationshipType } from '../types/database';
import { db } from '../db';
import { eq, and, or } from 'drizzle-orm';
import { appCache } from '../cache';

export class RelationshipRepository extends BaseRepository<
  typeof relationships,
  DbRelationship,
  typeof relationships.$inferInsert
> {
  constructor() {
    super(relationships, 'relationships');
  }

  async connect(
    fromEntityType: string,
    fromEntityId: string,
    relationshipType: RelationshipType,
    toEntityType: string,
    toEntityId: string
  ): Promise<DbRelationship> {
    const [existing] = await db
      .select()
      .from(relationships)
      .where(
        and(
          eq(relationships.fromEntityType, fromEntityType),
          eq(relationships.fromEntityId, fromEntityId),
          eq(relationships.relationshipType, relationshipType),
          eq(relationships.toEntityType, toEntityType),
          eq(relationships.toEntityId, toEntityId)
        )
      )
      .limit(1);

    if (existing) return existing;

    const [result] = await db
      .insert(relationships)
      .values({
        fromEntityType,
        fromEntityId,
        relationshipType,
        toEntityType,
        toEntityId,
      })
      .returning();

    appCache.deletePattern('relationships:');
    return result;
  }

  async disconnect(relationshipId: string): Promise<boolean> {
    return this.delete(relationshipId);
  }

  async findIncoming(toEntityType: string, toEntityId: string): Promise<DbRelationship[]> {
    return db
      .select()
      .from(relationships)
      .where(
        and(
          eq(relationships.toEntityType, toEntityType),
          eq(relationships.toEntityId, toEntityId)
        )
      );
  }

  async findOutgoing(fromEntityType: string, fromEntityId: string): Promise<DbRelationship[]> {
    return db
      .select()
      .from(relationships)
      .where(
        and(
          eq(relationships.fromEntityType, fromEntityType),
          eq(relationships.fromEntityId, fromEntityId)
        )
      );
  }

  async findRelated(entityType: string, entityId: string): Promise<DbRelationship[]> {
    return db
      .select()
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
  }
}

export const relationshipRepository = new RelationshipRepository();
