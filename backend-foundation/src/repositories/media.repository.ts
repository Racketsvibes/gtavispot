import { BaseRepository } from './base.repository';
import { media, entityMedia } from '../db/schema';
import { DbMedia, MediaType } from '../types/database';
import { db } from '../db';
import { eq, and } from 'drizzle-orm';

export class MediaRepository extends BaseRepository<
  typeof media,
  DbMedia,
  typeof media.$inferInsert
> {
  constructor() {
    super(media, 'media');
  }

  async findHero(entityType: string, entityId: string): Promise<DbMedia | null> {
    const [result] = await db
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
          eq(entityMedia.entityType, entityType),
          eq(entityMedia.entityId, entityId),
          eq(entityMedia.role, 'hero')
        )
      )
      .limit(1);

    return result || null;
  }

  async findGallery(entityType: string, entityId: string): Promise<DbMedia[]> {
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
          eq(entityMedia.entityType, entityType),
          eq(entityMedia.entityId, entityId),
          eq(entityMedia.role, 'gallery')
        )
      );
  }

  async findByType(mediaType: MediaType): Promise<DbMedia[]> {
    return db
      .select()
      .from(media)
      .where(eq(media.mediaType, mediaType));
  }

  async findByEntity(entityType: string, entityId: string): Promise<DbMedia[]> {
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
          eq(entityMedia.entityType, entityType),
          eq(entityMedia.entityId, entityId)
        )
      );
  }
}

export const mediaRepository = new MediaRepository();
