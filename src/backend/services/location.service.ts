import { locationRepository } from '../repositories/location.repository';
import { mediaRepository } from '../repositories/media.repository';
import { mapMarkerRepository } from '../repositories/map-marker.repository';
import { LocationWithRelations } from '../types/database';
import { EntityNotFoundError } from '../errors';

export class LocationService {
  async getLocationBySlug(slug: string): Promise<LocationWithRelations> {
    const location = await locationRepository.findBySlug(slug);
    if (!location) {
      throw new EntityNotFoundError('location', slug);
    }

    const [heroMedia, businesses, characters, mapMarkers, media] = await Promise.all([
      mediaRepository.findHero('location', location.id),
      locationRepository.findBusinesses(location.id),
      locationRepository.findCharacters(location.id),
      mapMarkerRepository.findByLocation(location.id),
      locationRepository.findMedia(location.id),
    ]);

    return {
      ...location,
      heroMedia,
      businesses,
      characters,
      mapMarkers,
      media,
    };
  }
}

export const locationService = new LocationService();
