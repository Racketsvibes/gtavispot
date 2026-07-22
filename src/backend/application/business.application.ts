import { knowledgeEngine } from '../knowledge/engine';
import { StatisticsBuilder } from './statistics.application';
import { BusinessPageV1 } from './page-contracts';
import { businessRepository } from '../repositories/business.repository';
import { DbBusiness } from '../types/database';

export class BusinessApplication {
  /**
   * Orchestrates the loading of all components required to render a business page profile.
   */
  async businessPage(slug: string): Promise<BusinessPageV1> {
    const business = await knowledgeEngine.business(slug);

    const statistics = await StatisticsBuilder.buildEntityStats('business', business.id);

    return {
      version: 'v1',
      business,
      statistics,
      relatedBusinesses: [],
    };
  }

  /**
   * Returns a listing of all published businesses.
   */
  async businessesList(): Promise<DbBusiness[]> {
    return businessRepository.findPublished();
  }
}

export const businessApplication = new BusinessApplication();
