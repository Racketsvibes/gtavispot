import { characterRepository } from '../repositories/character.repository';
import { locationRepository } from '../repositories/location.repository';
import { vehicleRepository } from '../repositories/vehicle.repository';
import { weaponRepository } from '../repositories/weapon.repository';
import { businessRepository } from '../repositories/business.repository';
import { mediaRepository } from '../repositories/media.repository';
import { db } from '../db';
import { entityAliases, relationships } from '../db/schema';
import { eq, and, or } from 'drizzle-orm';
import { DbMedia, DbAlias, EntityType, RelationshipType } from '../types/database';

/**
 * Resolves a generic entity by type and ID using concrete repositories.
 */
export async function findEntity(entityType: EntityType, entityId: string): Promise<any | null> {
  switch (entityType) {
    case 'character':
      return characterRepository.findById(entityId);
    case 'location':
      return locationRepository.findById(entityId);
    case 'vehicle':
      return vehicleRepository.findById(entityId);
    case 'weapon':
      return weaponRepository.findById(entityId);
    case 'business':
      return businessRepository.findById(entityId);
    case 'media':
      return mediaRepository.findById(entityId);
    default:
      return null;
  }
}

/**
 * Resolves the hero image for a specific entity.
 */
export async function findHeroImage(entityType: EntityType, entityId: string): Promise<DbMedia | null> {
  return mediaRepository.findHero(entityType, entityId);
}

/**
 * Resolves the gallery media for a specific entity.
 */
export async function findGallery(entityType: EntityType, entityId: string): Promise<DbMedia[]> {
  return mediaRepository.findGallery(entityType, entityId);
}

/**
 * Resolves aliases associated with a specific entity.
 */
export async function findAliases(entityType: EntityType, entityId: string): Promise<DbAlias[]> {
  return db
    .select()
    .from(entityAliases)
    .where(
      and(
        eq(entityAliases.entityType, entityType),
        eq(entityAliases.entityId, entityId)
      )
    );
}

/**
 * Finds all semantically related entities, resolving target names dynamically.
 */
export async function findRelatedEntities(
  entityType: EntityType,
  entityId: string
): Promise<{
  relationshipId: string;
  relationshipType: RelationshipType;
  targetType: EntityType;
  targetId: string;
  targetName: string;
}[]> {
  const relationsList = await db
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

  const resolved = [];

  for (const rel of relationsList) {
    const isOutgoing = rel.fromEntityType === entityType && rel.fromEntityId === entityId;
    const targetType = (isOutgoing ? rel.toEntityType : rel.fromEntityType) as EntityType;
    const targetId = isOutgoing ? rel.toEntityId : rel.fromEntityId;

    let targetName = 'Unknown';
    const target = await findEntity(targetType, targetId);
    if (target) {
      targetName = target.name || target.title || 'Unnamed';
    }

    resolved.push({
      relationshipId: rel.id,
      relationshipType: rel.relationshipType as RelationshipType,
      targetType,
      targetId,
      targetName,
    });
  }

  return resolved;
}
