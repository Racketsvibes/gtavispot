import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from '../env';

let supabaseClientInstance: SupabaseClient | null = null;

export function getSupabaseBrowserClient(): SupabaseClient {
  if (typeof window === 'undefined') {
    throw new Error('getSupabaseBrowserClient can only be called on the client side');
  }

  if (!supabaseClientInstance) {
    supabaseClientInstance = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  }

  return supabaseClientInstance;
}
