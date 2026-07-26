import { z } from 'zod';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

// Load variables if running in a non-Next.js node environment (e.g. Drizzle migrations)
if (typeof window === 'undefined') {
  const envPath = path.resolve(__dirname, '../../.env');
  dotenv.config({ path: envPath });
}

const envSchema = z.object({
  DATABASE_URL: z.string().url({ message: 'DATABASE_URL must be a valid PostgreSQL connection URL' }),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url({ message: 'NEXT_PUBLIC_SUPABASE_URL must be a valid URL' }),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, { message: 'NEXT_PUBLIC_SUPABASE_ANON_KEY cannot be empty' }),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, { message: 'SUPABASE_SERVICE_ROLE_KEY cannot be empty' }),
});

const parsed = envSchema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
});

if (!parsed.success) {
  const errors = parsed.error.format();
  const formattedErrors = Object.entries(errors)
    .filter(([key]) => key !== '_errors')
    .map(([key, val]) => {
      const err = val as { _errors: string[] };
      return `${key}: ${err._errors.join(', ')}`;
    })
    .join('\n');

  throw new Error(`❌ Invalid environment variables:\n${formattedErrors}`);
}

export const env = parsed.data;
