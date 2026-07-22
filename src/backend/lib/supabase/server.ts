import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { env } from '../env';
import { cookies } from 'next/headers';

/**
 * Creates a server-side Supabase client.
 * For client auth persistence, it reads the access token from cookies.
 */
export async function getSupabaseServerClient(): Promise<SupabaseClient> {
  const cookieStore = await cookies();
  
  // Extract Supabase session cookie if present
  // The default cookie key name is sb-<project-id>-auth-token
  const projectId = env.NEXT_PUBLIC_SUPABASE_URL.split('.')[0].replace('https://', '');
  const cookieName = `sb-${projectId}-auth-token`;
  const sessionCookie = cookieStore.get(cookieName)?.value;

  let authHeader = {};
  if (sessionCookie) {
    try {
      const parsedSession = JSON.parse(sessionCookie);
      if (parsedSession && parsedSession.access_token) {
        authHeader = { Authorization: `Bearer ${parsedSession.access_token}` };
      }
    } catch (e) {
      // Ignore JSON parsing errors
    }
  }

  const client = createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: false,
      },
      global: {
        headers: authHeader,
      },
    }
  );

  return client;
}

/**
 * Creates an admin client with bypass RLS capabilities using the service role key.
 * Should only be used in secure server contexts.
 */
export function getSupabaseAdminClient(): SupabaseClient {
  return createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}
