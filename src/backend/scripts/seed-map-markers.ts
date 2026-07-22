import { db } from '../db';
import { mapMarkers, locations } from '../db/schema';
import { eq } from 'drizzle-orm';

async function run() {
  console.log('🌱 Starting Custom Map Markers Seeder...');
  
  // 1. Clear any existing markers
  await db.delete(mapMarkers);
  console.log('🗑️ Cleared existing map markers.');

  // 2. Fetch location records to resolve IDs dynamically
  const dbLocations = await db.select().from(locations);
  const findLocId = (slug: string) => {
    const loc = dbLocations.find(l => l.slug === slug);
    if (!loc) {
      console.warn(`⚠️ Warning: Location with slug "${slug}" not found in database!`);
      return null;
    }
    return loc.id;
  };

  const viceCityId = findLocId('vice-city');
  const keysId = findLocId('leonida-keys');
  const grassriversId = findLocId('grassrivers');
  const portGellhornId = findLocId('port-gellhorn');
  const ambrosiaId = findLocId('ambrosia');
  const mountKalagaId = findLocId('mount-kalaga');

  const markersToSeed = [];

  // --- Vice City Markers ---
  if (viceCityId) {
    markersToSeed.push(
      {
        locationId: viceCityId,
        latitude: 10.0,
        longitude: 30.0,
        markerType: 'location',
        priority: 10,
        zoomLevel: 1,
        status: 'published' as const,
      },
      {
        locationId: viceCityId,
        latitude: 5.0,
        longitude: 35.0,
        markerType: 'shop',
        priority: 5,
        zoomLevel: 2,
        status: 'published' as const,
      },
      {
        locationId: viceCityId,
        latitude: 15.0,
        longitude: 25.0,
        markerType: 'shop',
        priority: 5,
        zoomLevel: 2,
        status: 'published' as const,
      },
      {
        locationId: viceCityId,
        latitude: 0.0,
        longitude: 40.0,
        markerType: 'shop',
        priority: 5,
        zoomLevel: 3,
        status: 'published' as const,
      },
      {
        locationId: viceCityId,
        latitude: 8.0,
        longitude: 42.0,
        markerType: 'collectibles',
        priority: 2,
        zoomLevel: 3,
        status: 'published' as const,
      },
      {
        locationId: viceCityId,
        latitude: -2.0,
        longitude: 28.0,
        markerType: 'character',
        priority: 8,
        zoomLevel: 2,
        status: 'published' as const,
      },
      {
        locationId: viceCityId,
        latitude: 8.0,
        longitude: 20.0,
        markerType: 'character',
        priority: 8,
        zoomLevel: 2,
        status: 'published' as const,
      }
    );
  }

  // --- Leonida Keys Markers ---
  if (keysId) {
    markersToSeed.push(
      {
        locationId: keysId,
        latitude: -45.0,
        longitude: 60.0,
        markerType: 'location',
        priority: 10,
        zoomLevel: 1,
        status: 'published' as const,
      },
      {
        locationId: keysId,
        latitude: -50.0,
        longitude: 55.0,
        markerType: 'collectibles',
        priority: 2,
        zoomLevel: 3,
        status: 'published' as const,
      },
      {
        locationId: keysId,
        latitude: -40.0,
        longitude: 65.0,
        markerType: 'shop',
        priority: 5,
        zoomLevel: 2,
        status: 'published' as const,
      }
    );
  }

  // --- Grassrivers Markers ---
  if (grassriversId) {
    markersToSeed.push(
      {
        locationId: grassriversId,
        latitude: -20.0,
        longitude: -40.0,
        markerType: 'location',
        priority: 10,
        zoomLevel: 1,
        status: 'published' as const,
      },
      {
        locationId: grassriversId,
        latitude: -25.0,
        longitude: -30.0,
        markerType: 'stunts',
        priority: 4,
        zoomLevel: 2,
        status: 'published' as const,
      },
      {
        locationId: grassriversId,
        latitude: -15.0,
        longitude: -50.0,
        markerType: 'collectibles',
        priority: 2,
        zoomLevel: 3,
        status: 'published' as const,
      }
    );
  }

  // --- Port Gellhorn Markers ---
  if (portGellhornId) {
    markersToSeed.push(
      {
        locationId: portGellhornId,
        latitude: 30.0,
        longitude: -70.0,
        markerType: 'location',
        priority: 10,
        zoomLevel: 1,
        status: 'published' as const,
      },
      {
        locationId: portGellhornId,
        latitude: 25.0,
        longitude: -75.0,
        markerType: 'shop',
        priority: 5,
        zoomLevel: 2,
        status: 'published' as const,
      },
      {
        locationId: portGellhornId,
        latitude: 35.0,
        longitude: -65.0,
        markerType: 'stunts',
        priority: 4,
        zoomLevel: 2,
        status: 'published' as const,
      }
    );
  }

  // --- Ambrosia Markers ---
  if (ambrosiaId) {
    markersToSeed.push(
      {
        locationId: ambrosiaId,
        latitude: 45.0,
        longitude: -10.0,
        markerType: 'location',
        priority: 10,
        zoomLevel: 1,
        status: 'published' as const,
      },
      {
        locationId: ambrosiaId,
        latitude: 40.0,
        longitude: -5.0,
        markerType: 'collectibles',
        priority: 2,
        zoomLevel: 3,
        status: 'published' as const,
      }
    );
  }

  // --- Mount Kalaga Markers ---
  if (mountKalagaId) {
    markersToSeed.push(
      {
        locationId: mountKalagaId,
        latitude: -50.0,
        longitude: -20.0,
        markerType: 'location',
        priority: 10,
        zoomLevel: 1,
        status: 'published' as const,
      },
      {
        locationId: mountKalagaId,
        latitude: -55.0,
        longitude: -15.0,
        markerType: 'stunts',
        priority: 4,
        zoomLevel: 2,
        status: 'published' as const,
      },
      {
        locationId: mountKalagaId,
        latitude: -45.0,
        longitude: -25.0,
        markerType: 'character',
        priority: 8,
        zoomLevel: 2,
        status: 'published' as const,
      }
    );
  }

  console.log(`📡 Inserting ${markersToSeed.length} custom markers into the database...`);
  for (const m of markersToSeed) {
    await db.insert(mapMarkers).values(m);
  }

  console.log('🎉 Seeding completed successfully!');
  process.exit(0);
}

run();
