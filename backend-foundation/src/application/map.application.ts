import { locationRepository } from '../repositories/location.repository';
import { mapMarkerRepository } from '../repositories/map-marker.repository';
import { businessRepository } from '../repositories/business.repository';
import { characterRepository } from '../repositories/character.repository';

export class MapApplication {
  /**
   * Aggregates all published coordinates, locations, and characters for map visualization.
   */
  async mapData(): Promise<any> {
    const locations = await locationRepository.findPublished();
    const locationIds = locations.map(l => l.id);

    const allMarkers = await mapMarkerRepository.findAll();
    const activeMarkers = allMarkers.filter(m => locationIds.includes(m.locationId));

    const allBusinesses = await businessRepository.findAll();
    const activeBusinesses = allBusinesses.filter(b => b.locationId && locationIds.includes(b.locationId));

    const charactersList = await characterRepository.findPublished();

    return {
      locations,
      markers: activeMarkers,
      businesses: activeBusinesses,
      characters: charactersList,
    };
  }
}

export const mapApplication = new MapApplication();
