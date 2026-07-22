import { db } from '../db';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as path from 'path';

async function run() {
  console.log('🚀 Running Drizzle programmatic migrations...');
  try {
    const migrationsFolder = path.resolve(__dirname, '../../drizzle');
    console.log(`📁 Migrations Folder: ${migrationsFolder}`);
    
    await migrate(db, { migrationsFolder });
    
    console.log('✅ Programmatic migrations applied successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Programmatic migration failed with error:', error);
    process.exit(1);
  }
}

run();
