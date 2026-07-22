import { knowledgeEngine } from '../knowledge/engine';
import { StatisticsBuilder } from './statistics.application';
import { RecommendationEngine } from './recommendation.application';
import { LocationPageV1 } from './page-contracts';
import { locationRepository } from '../repositories/location.repository';
import { DbLocation } from '../types/database';

export class LocationApplication {
  /**
   * Orchestrates the loading of all components required to render a location page profile.
   */
  async locationPage(slug: string): Promise<LocationPageV1> {
    const location = await knowledgeEngine.location(slug);

    const [statistics, recommendations] = await Promise.all([
      StatisticsBuilder.buildEntityStats('location', location.id),
      RecommendationEngine.buildRecommendations('location', location.id),
    ]);

    return {
      version: 'v1',
      location,
      statistics,
      recommendations,
    };
  }

  /**
   * Returns a listing of all published locations.
   */
  async locationsList(): Promise<DbLocation[]> {
    return locationRepository.findPublished();
  }
}

export const locationApplication = new LocationApplication();
