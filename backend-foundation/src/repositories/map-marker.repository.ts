import { BaseRepository } from './base.repository';
import { mapMarkers } from '../db/schema';
import { DbMapMarker } from '../types/database';

import { db } from '../db';
import { eq } from 'drizzle-orm';

export class MapMarkerRepository extends BaseRepository<
  typeof mapMarkers,
  DbMapMarker,
  typeof mapMarkers.$inferInsert
> {
  constructor() {
    super(mapMarkers, 'map_markers');
  }

  async findByLocation(locationId: string): Promise<DbMapMarker[]> {
    return db
      .select()
      .from(mapMarkers)
      .where(eq(mapMarkers.locationId, locationId));
  }
}

export const mapMarkerRepository = new MapMarkerRepository();
