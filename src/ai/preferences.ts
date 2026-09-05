import { getAppConfig, updateAppConfig } from '@/api/appConfig';
import type { AppConfig } from '@/types/models';
import type { AiProviderCapability } from './providerRegistry';

export const AI_PROVIDER_PREFERENCES_CONFIG_KEY = 'ai_provider_preferences';

export const AI_PROVIDER_CAPABILITIES = [
  'chat',
  'vision',
  'translation'
] as const satisfies readonly AiProviderCapability[];

export type AiProviderPreferenceMap = Partial<
  Record<AiProviderCapability, string>
>;

const aiProviderCapabilitySet = new Set<AiProviderCapability>(
  AI_PROVIDER_CAPABILITIES
);

export const isAiProviderCapability = (
  value: string
): value is AiProviderCapability =>
  aiProviderCapabilitySet.has(value as AiProviderCapability);

const normalizeProviderId = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const providerId = value.trim();
  return providerId || undefined;
};

export const normalizeAiProviderPreferences = (
  value: unknown
): AiProviderPreferenceMap => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  const preferences: AiProviderPreferenceMap = {};
  for (const capability of AI_PROVIDER_CAPABILITIES) {
    const providerId = normalizeProviderId(
      (value as Partial<Record<AiProviderCapability, unknown>>)[capability]
    );
    if (providerId) {
      preferences[capability] = providerId;
    }
  }
  return preferences;
};

export const getAiProviderPreferences =
  async (): Promise<AiProviderPreferenceMap> => {
    const config = await getAppConfig();
    return normalizeAiProviderPreferences(config.ai_provider_preferences);
  };

export const saveAiProviderPreferences = async (
  preferences: AiProviderPreferenceMap
): Promise<void> => {
  const config = await getAppConfig();
  await updateAppConfig({
    ...config,
    [AI_PROVIDER_PREFERENCES_CONFIG_KEY]:
      normalizeAiProviderPreferences(preferences)
  } as AppConfig);
};

export const setAiProviderPreference = async (
  capability: AiProviderCapability,
  providerId: string | null
): Promise<AiProviderPreferenceMap> => {
  const preferences = await getAiProviderPreferences();
  const normalizedProviderId = normalizeProviderId(providerId);

  if (normalizedProviderId) {
    preferences[capability] = normalizedProviderId;
  } else {
    delete preferences[capability];
  }

  await saveAiProviderPreferences(preferences);
  return preferences;
};
