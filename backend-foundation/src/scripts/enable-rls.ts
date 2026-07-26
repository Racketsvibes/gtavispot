import { db } from '../db';
import { sql } from 'drizzle-orm';

const tables = [
  'sources',
  'media',
  'characters',
  'locations',
  'vehicles',
  'weapons',
  'businesses',
  'trailers',
  'entity_media',
  'relationships',
  'entity_aliases',
  'tags',
  'entity_tags',
  'map_markers',
  'image_optimization_queue'
];

async function run() {
  console.log('🔒 Enabling Row Level Security (RLS) on all Supabase tables...');
  
  for (const table of tables) {
    try {
      console.log(`- Processing table: ${table}`);
      
      // 1. Enable Row-Level Security
      await db.execute(sql.raw(`ALTER TABLE "${table}" ENABLE ROW LEVEL SECURITY;`));
      
      // 2. Drop existing policy if it exists to keep it idempotent
      await db.execute(sql.raw(`DROP POLICY IF EXISTS "Allow public read access" ON "${table}";`));
      
      // 3. Create SELECT policy for public reads (excluding queue which must remain completely private)
      if (table !== 'image_optimization_queue') {
        await db.execute(sql.raw(`CREATE POLICY "Allow public read access" ON "${table}" FOR SELECT USING (true);`));
        console.log(`  ✅ RLS enabled with public SELECT policy.`);
      } else {
        console.log(`  ✅ RLS enabled (private queue - no public policies).`);
      }
    } catch (err) {
      console.error(`  ❌ Failed for table ${table}:`, err);
    }
  }
  
  console.log('🎉 Database RLS configuration completed successfully!');
  process.exit(0);
}

run();
