import { characterRepository } from '../repositories/character.repository';
import { mediaRepository } from '../repositories/media.repository';
import { findRelatedEntities } from '../queries/helpers';
import { CharacterWithRelations } from '../types/database';
import { EntityNotFoundError } from '../errors';

export class CharacterService {
  async getCharacterBySlug(slug: string): Promise<CharacterWithRelations> {
    const character = await characterRepository.findBySlug(slug);
    if (!character) {
      throw new EntityNotFoundError('character', slug);
    }

    const [heroMedia, gallery, aliases, locations, vehicles, relatedResolved] = await Promise.all([
      mediaRepository.findHero('character', character.id),
      characterRepository.findGallery(character.id),
      characterRepository.findAliases(character.id),
      characterRepository.findLocations(character.id),
      characterRepository.findVehicles(character.id),
      findRelatedEntities('character', character.id),
    ]);

    const relationshipMappings = relatedResolved.map(r => ({
      relationshipType: r.relationshipType,
      entityType: r.targetType,
      entityId: r.targetId,
      entityName: r.targetName,
    }));

    return {
      ...character,
      heroMedia,
      gallery,
      aliases,
      locations,
      vehicles,
      relationships: relationshipMappings,
    };
  }
}

export const characterService = new CharacterService();
