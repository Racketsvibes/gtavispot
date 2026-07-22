import { db } from '../db';
import { mapMarkers, locations } from '../db/schema';
import { eq } from 'drizzle-orm';

async function run() {
  console.log('🔍 Querying map markers from database...');
  const markers = await db.select().from(mapMarkers);
  console.log(`Total markers in database: ${markers.length}`);
  
  if (markers.length > 0) {
    console.log('Sample markers:');
    for (let i = 0; i < Math.min(markers.length, 5); i++) {
      const m = markers[i];
      const [loc] = await db.select().from(locations).where(eq(locations.id, m.locationId));
      console.log(`- ID: ${m.id}, Location: ${loc?.name || 'Unknown'}, Type: ${m.markerType}, Lat: ${m.latitude}, Lng: ${m.longitude}, Status: ${m.status}`);
    }
  }
  process.exit(0);
}

run();
