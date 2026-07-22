import { vehicleRepository } from '../repositories/vehicle.repository';
import { mediaRepository } from '../repositories/media.repository';
import { VehicleWithRelations } from '../types/database';
import { EntityNotFoundError } from '../errors';

export class VehicleService {
  async getVehicleBySlug(slug: string): Promise<VehicleWithRelations> {
    const vehicle = await vehicleRepository.findBySlug(slug);
    if (!vehicle) {
      throw new EntityNotFoundError('vehicle', slug);
    }

    const [heroMedia, gallery, characters] = await Promise.all([
      mediaRepository.findHero('vehicle', vehicle.id),
      vehicleRepository.findGallery(vehicle.id),
      vehicleRepository.findCharacters(vehicle.id),
    ]);

    return {
      ...vehicle,
      heroMedia,
      gallery,
      characters,
    };
  }
}

export const vehicleService = new VehicleService();
