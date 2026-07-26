import { mediaRepository } from '../repositories/media.repository';
import { sourceRepository } from '../repositories/source.repository';
import { db } from '../db';
import { entityMedia } from '../db/schema';
import { findEntity } from '../queries/helpers';
import { MediaWithRelations, EntityType } from '../types/database';
import { EntityNotFoundError } from '../errors';
import { eq } from 'drizzle-orm';

export class MediaService {
  async getMediaBySlug(slug: string): Promise<MediaWithRelations> {
    const mediaItem = await mediaRepository.findBySlug(slug);
    if (!mediaItem) {
      throw new EntityNotFoundError('media', slug);
    }

    const [source, dbEntities] = await Promise.all([
      mediaItem.sourceId ? sourceRepository.findById(mediaItem.sourceId) : Promise.resolve(null),
      db.select().from(entityMedia).where(eq(entityMedia.mediaId, mediaItem.id)),
    ]);

    const resolvedEntities = [];
    for (const em of dbEntities) {
      const entity = await findEntity(em.entityType as EntityType, em.entityId);
      if (entity) {
        resolvedEntities.push({
          id: em.entityId,
          type: em.entityType as EntityType,
          name: entity.name || entity.title || 'Unnamed',
          role: em.role,
        });
      }
    }

    return {
      ...mediaItem,
      source,
      entities: resolvedEntities,
    };
  }
}

export const mediaService = new MediaService();
