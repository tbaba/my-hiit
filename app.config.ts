import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    ...(config.extra ?? {}),
    supabaseUrl: process.env.SUPABASE_PROJECT_URL,
    supabaseAnonKey: process.env.SUPABASE_API_KEY,
  },
}) as ExpoConfig;
