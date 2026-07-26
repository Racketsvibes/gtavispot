import { businessRepository } from '../repositories/business.repository';
import { mediaRepository } from '../repositories/media.repository';
import { locationRepository } from '../repositories/location.repository';
import { BusinessWithRelations } from '../types/database';
import { EntityNotFoundError } from '../errors';

export class BusinessService {
  async getBusinessBySlug(slug: string): Promise<BusinessWithRelations> {
    const business = await businessRepository.findBySlug(slug);
    if (!business) {
      throw new EntityNotFoundError('business', slug);
    }

    const [heroMedia, location] = await Promise.all([
      mediaRepository.findHero('business', business.id),
      business.locationId ? locationRepository.findById(business.locationId) : Promise.resolve(null),
    ]);

    return {
      ...business,
      heroMedia,
      location,
    };
  }
}

export const businessService = new BusinessService();
