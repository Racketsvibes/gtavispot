import { knowledgeEngine } from '../knowledge/engine';
import { StatisticsBuilder } from './statistics.application';
import { RecommendationEngine } from './recommendation.application';
import { WeaponPageV1 } from './page-contracts';
import { weaponRepository } from '../repositories/weapon.repository';
import { DbWeapon } from '../types/database';

export class WeaponApplication {
  /**
   * Orchestrates the loading of all components required to render a weapon page profile.
   */
  async weaponPage(slug: string): Promise<WeaponPageV1> {
    const weapon = await knowledgeEngine.weapon(slug);

    const [statistics, recommendations] = await Promise.all([
      StatisticsBuilder.buildEntityStats('weapon', weapon.id),
      RecommendationEngine.buildRecommendations('weapon', weapon.id),
    ]);

    return {
      version: 'v1',
      weapon,
      statistics,
      recommendations,
    };
  }

  /**
   * Returns a listing of all published weapons.
   */
  async weaponsList(): Promise<DbWeapon[]> {
    return weaponRepository.findPublished();
  }
}

export const weaponApplication = new WeaponApplication();
