import { knowledgeEngine } from '../knowledge/engine';
import { StatisticsBuilder } from './statistics.application';
import { RecommendationEngine } from './recommendation.application';
import { VehiclePageV1 } from './page-contracts';
import { vehicleRepository } from '../repositories/vehicle.repository';
import { DbVehicle } from '../types/database';

export class VehicleApplication {
  /**
   * Orchestrates the loading of all components required to render a vehicle page profile.
   */
  async vehiclePage(slug: string): Promise<VehiclePageV1> {
    const vehicle = await knowledgeEngine.vehicle(slug);

    const [statistics, recommendations] = await Promise.all([
      StatisticsBuilder.buildEntityStats('vehicle', vehicle.id),
      RecommendationEngine.buildRecommendations('vehicle', vehicle.id),
    ]);

    return {
      version: 'v1',
      vehicle,
      statistics,
      recommendations,
    };
  }

  /**
   * Returns a listing of all published vehicles.
   */
  async vehiclesList(): Promise<DbVehicle[]> {
    return vehicleRepository.findPublished();
  }
}

export const vehicleApplication = new VehicleApplication();
