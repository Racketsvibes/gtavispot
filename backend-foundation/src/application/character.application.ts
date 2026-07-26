import { knowledgeEngine } from '../knowledge/engine';
import { StatisticsBuilder } from './statistics.application';
import { RecommendationEngine } from './recommendation.application';
import { CharacterPageV1 } from './page-contracts';
import { characterRepository } from '../repositories/character.repository';
import { DbCharacter } from '../types/database';

export class CharacterApplication {
  /**
   * Orchestrates the loading of all components required to render a character page profile.
   */
  async characterPage(slug: string): Promise<CharacterPageV1> {
    const character = await knowledgeEngine.character(slug);

    const [statistics, recommendations] = await Promise.all([
      StatisticsBuilder.buildEntityStats('character', character.id),
      RecommendationEngine.buildRecommendations('character', character.id),
    ]);

    return {
      version: 'v1',
      character,
      statistics,
      recommendations,
      relatedCharacters: [], // Resolved programmatically in VM
      relatedLocations: character.locations,
    };
  }

  /**
   * Returns a listing of all published characters.
   */
  async charactersList(): Promise<DbCharacter[]> {
    return characterRepository.findPublished();
  }
}

export const characterApplication = new CharacterApplication();
