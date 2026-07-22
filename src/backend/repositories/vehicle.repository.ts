import { BaseRepository } from './base.repository';
import { vehicles, media, entityMedia, characters, relationships } from '../db/schema';
import { DbVehicle, DbMedia, DbCharacter } from '../types/database';
import { db } from '../db';
import { eq, and } from 'drizzle-orm';

export class VehicleRepository extends BaseRepository<
  typeof vehicles,
  DbVehicle,
  typeof vehicles.$inferInsert
> {
  constructor() {
    super(vehicles, 'vehicles');
  }

  async findGallery(vehicleId: string): Promise<DbMedia[]> {
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
          eq(entityMedia.entityType, 'vehicle'),
          eq(entityMedia.entityId, vehicleId)
        )
      );
  }

  async findCharacters(vehicleId: string): Promise<DbCharacter[]> {
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
          eq(relationships.toEntityType, 'vehicle'),
          eq(relationships.toEntityId, vehicleId)
        )
      );
  }
}

export const vehicleRepository = new VehicleRepository();
