import { BaseRepository } from './base.repository';
import { characters, media, entityMedia, locations, vehicles, entityAliases, relationships } from '../db/schema';
import { DbCharacter, DbMedia, DbLocation, DbVehicle, DbAlias, RelationshipType, EntityType } from '../types/database';
import { db } from '../db';
import { eq, and, or } from 'drizzle-orm';

export class CharacterRepository extends BaseRepository<
  typeof characters,
  DbCharacter,
  typeof characters.$inferInsert
> {
  constructor() {
    super(characters, 'characters');
  }

  async findGallery(characterId: string): Promise<DbMedia[]> {
    return db
      .select({
        id: media.id,
        slug: media.slug,
        title: media.title,
        mediaType: media.mediaType,
        provider: media.provider,
        storageProvider: media.storageProvider,
        storageKey: media.storageKey,
        cdnUrl: media.cdnUrl,
        thumbnailUrl: media.thumbnailUrl,
        youtubeId: media.youtubeId,
        width: media.width,
        height: media.height,
        duration: media.duration,
        copyright: media.copyright,
        altText: media.altText,
        caption: media.caption,
        hash: media.hash,
        sourceId: media.sourceId,
        status: media.status,
        createdAt: media.createdAt,
        updatedAt: media.updatedAt,
      })
      .from(media)
      .innerJoin(entityMedia, eq(entityMedia.mediaId, media.id))
      .where(
        and(
          eq(entityMedia.entityType, 'character'),
          eq(entityMedia.entityId, characterId)
        )
      );
  }

  async findLocations(characterId: string): Promise<DbLocation[]> {
    return db
      .select({
        id: locations.id,
        slug: locations.slug,
        name: locations.name,
        region: locations.region,
        category: locations.category,
        description: locations.description,
        latitude: locations.latitude,
        longitude: locations.longitude,
        heroMediaId: locations.heroMediaId,
        isOfficial: locations.isOfficial,
        displayOrder: locations.displayOrder,
        status: locations.status,
        createdAt: locations.createdAt,
        updatedAt: locations.updatedAt,
      })
      .from(locations)
      .innerJoin(
        relationships,
        and(
          eq(relationships.toEntityType, 'location'),
          eq(relationships.toEntityId, locations.id)
        )
      )
      .where(
        and(
          eq(relationships.fromEntityType, 'character'),
          eq(relationships.fromEntityId, characterId)
        )
      );
  }

  async findVehicles(characterId: string): Promise<DbVehicle[]> {
    return db
      .select({
        id: vehicles.id,
        slug: vehicles.slug,
        name: vehicles.name,
        brand: vehicles.brand,
        vehicleClass: vehicles.vehicleClass,
        description: vehicles.description,
        heroMediaId: vehicles.heroMediaId,
        isOfficial: vehicles.isOfficial,
        displayOrder: vehicles.displayOrder,
        status: vehicles.status,
        createdAt: vehicles.createdAt,
        updatedAt: vehicles.updatedAt,
      })
      .from(vehicles)
      .innerJoin(
        relationships,
        and(
          eq(relationships.toEntityType, 'vehicle'),
          eq(relationships.toEntityId, vehicles.id)
        )
      )
      .where(
        and(
          eq(relationships.fromEntityType, 'character'),
          eq(relationships.fromEntityId, characterId)
        )
      );
  }

  async findRelationships(characterId: string): Promise<{
    relationshipType: RelationshipType;
    entityType: EntityType;
    entityId: string;
  }[]> {
    const outgoing = await db
      .select({
        relationshipType: relationships.relationshipType,
        entityType: relationships.toEntityType,
        entityId: relationships.toEntityId,
      })
      .from(relationships)
      .where(
        and(
          eq(relationships.fromEntityType, 'character'),
          eq(relationships.fromEntityId, characterId)
        )
      );

    const incoming = await db
      .select({
        relationshipType: relationships.relationshipType,
        entityType: relationships.fromEntityType,
        entityId: relationships.fromEntityId,
      })
      .from(relationships)
      .where(
        and(
          eq(relationships.toEntityType, 'character'),
          eq(relationships.toEntityId, characterId)
        )
      );

    return [
      ...outgoing.map(o => ({ ...o, relationshipType: o.relationshipType as RelationshipType, entityType: o.entityType as EntityType })),
      ...incoming.map(i => ({ ...i, relationshipType: i.relationshipType as RelationshipType, entityType: i.entityType as EntityType }))
    ];
  }

  async findAliases(characterId: string): Promise<DbAlias[]> {
    return db
      .select()
      .from(entityAliases)
      .where(
        and(
          eq(entityAliases.entityType, 'character'),
          eq(entityAliases.entityId, characterId)
        )
      );
  }
}

export const characterRepository = new CharacterRepository();
