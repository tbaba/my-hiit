import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_PROJECT_URL ?? process.env.SUPABASE_PROJECT_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_API_KEY ?? process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are missing');
}

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
