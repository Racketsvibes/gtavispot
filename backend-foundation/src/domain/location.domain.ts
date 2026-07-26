import { DbLocation, DbBusiness, DbMapMarker } from '../types/database';
import { ValidationError } from '../errors';

export class LocationDomain {
  /**
   * Enforces that a business belongs to a valid location.
   */
  static validateBusiness(business: DbBusiness, location: DbLocation | null | undefined): void {
    if (!business.locationId) {
      throw new ValidationError({ locationId: ['A business must belong to a location.'] });
    }
    if (!location) {
      throw new ValidationError({ location: [`Orphaned business: Mapped location with ID "${business.locationId}" does not exist.`] });
    }
  }

  /**
   * Enforces that a map marker has valid coordinates and belongs to a location.
   */
  static validateMapMarker(marker: DbMapMarker, location: DbLocation | null | undefined): void {
    if (!location) {
      throw new ValidationError({ location: [`Orphaned map marker: Mapped location with ID "${marker.locationId}" does not exist.`] });
    }
    if (marker.latitude === null || marker.longitude === null) {
      throw new ValidationError({ coordinates: ['A map marker must contain valid latitude and longitude coordinates.'] });
    }
  }
}
