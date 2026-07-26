import { BaseRepository } from './base.repository';
import { locations, businesses, characters, media, entityMedia, relationships } from '../db/schema';
import { DbLocation, DbBusiness, DbCharacter, DbMedia } from '../types/database';
import { db } from '../db';
import { eq, and, sql } from 'drizzle-orm';

export class LocationRepository extends BaseRepository<
  typeof locations,
  DbLocation,
  typeof locations.$inferInsert
> {
  constructor() {
    super(locations, 'locations');
  }

  async findBusinesses(locationId: string): Promise<DbBusiness[]> {
    return db
      .select()
      .from(businesses)
      .where(eq(businesses.locationId, locationId));
  }

  async findCharacters(locationId: string): Promise<DbCharacter[]> {
    return db
      .select({
        id: characters.id,
        slug: characters.slug,
        name: characters.name,
        officialName: characters.officialName,
        nickname: characters.nickname,
        shortDescription: characters.shortDescription,
        officialDescription: characters.officialDescription,
        heroMediaId: characters.heroMediaId,
        isOfficial: characters.isOfficial,
        displayOrder: characters.displayOrder,
        status: characters.status,
        createdAt: characters.createdAt,
        updatedAt: characters.updatedAt,
      })
      .from(characters)
      .innerJoin(
        relationships,
        and(
          eq(relationships.fromEntityType, 'character'),
          eq(relationships.fromEntityId, characters.id)
        )
      )
      .where(
        and(
          eq(relationships.toEntityType, 'location'),
          eq(relationships.toEntityId, locationId)
        )
      );
  }

  async findNearby(locationId: string, limit: number = 5): Promise<DbLocation[]> {
    const loc = await this.findById(locationId);
    if (!loc || loc.latitude === null || loc.longitude === null) return [];

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
      .where(
        sql`id != ${locationId} AND latitude IS NOT NULL AND longitude IS NOT NULL`
      )
      .orderBy(
        sql`power(latitude - ${loc.latitude}, 2) + power(longitude - ${loc.longitude}, 2)`
      )
      .limit(limit);
  }

  async findMedia(locationId: string): Promise<DbMedia[]> {
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
          eq(entityMedia.entityType, 'location'),
          eq(entityMedia.entityId, locationId)
        )
      );
  }
}

export const locationRepository = new LocationRepository();
