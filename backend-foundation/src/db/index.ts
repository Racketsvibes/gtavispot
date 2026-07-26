import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from '../lib/env';

// For serverless/edge environments, we prevent multiple connections in hot-reloading
const queryClient = postgres(env.DATABASE_URL, {
  max: 10,
  ssl: 'require', // Standard for secure remote connections like Supabase
});

export const db = drizzle(queryClient);
