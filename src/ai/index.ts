import {
  aiProviderRegistry,
  type AiChatRequest,
  type AiChatResponse,
  type AiProvider,
  type AiProviderCapability,
  type AiProviderRegistry,
  type AiProviderStatus,
  type AiTranslateRequest,
  type AiTranslateResponse
} from './providerRegistry';
import { LOCAL_AI_PROVIDER_ID, localAiProvider } from './localAiProvider';
import {
  getAiProviderPreferences,
  type AiProviderPreferenceMap
} from './preferences';

export {
  aiProviderRegistry,
  createAiProviderRegistry,
  AiProviderRegistry
} from './providerRegistry';
export type {
  AiChatRequest,
  AiChatResponse,
  AiContentPart,
  AiContextItem,
  AiContextKind,
  AiMessage,
  AiProvider,
  AiProviderCapability,
  AiProviderListOptions,
  AiProviderStatus,
  AiRequestContext,
  AiTranslateRequest,
  AiTranslateResponse
} from './providerRegistry';
export { LOCAL_AI_PROVIDER_ID, localAiProvider } from './localAiProvider';
export {
  AI_PROVIDER_CAPABILITIES,
  AI_PROVIDER_PREFERENCES_CONFIG_KEY,
  getAiProviderPreferences,
  isAiProviderCapability,
  normalizeAiProviderPreferences,
  saveAiProviderPreferences,
  setAiProviderPreference
} from './preferences';
export type { AiProviderPreferenceMap } from './preferences';

export interface AiProviderRequestOptions {
  providerId?: string;
  capability?: AiProviderCapability;
  registry?: AiProviderRegistry;
  isPluginEnabled?: (pluginId: string) => boolean;
  providerPreferences?: AiProviderPreferenceMap;
}

const requestUsesVision = (request: AiChatRequest): boolean =>
  request.messages.some(
    (message) =>
      Array.isArray(message.content) &&
      message.content.some((part) => part.type === 'image_url')
  );

const capabilityForRequest = (
  request: AiChatRequest,
  capability?: AiProviderCapability
): AiProviderCapability =>
  capability ?? (requestUsesVision(request) ? 'vision' : 'chat');

export const ensureBuiltinAiProvidersRegistered = (
  registry = aiProviderRegistry
): void => {
  if (!registry.get(LOCAL_AI_PROVIDER_ID)) {
    registry.register(localAiProvider);
  }
};

const resolvePreferredProviderId = async (
  options: AiProviderRequestOptions,
  capability: AiProviderCapability
): Promise<string | undefined> => {
  if (options.providerId) return options.providerId;
  if (options.providerPreferences) {
    return options.providerPreferences[capability]?.trim() || undefined;
  }
  if (options.registry) return undefined;

  const preferences: AiProviderPreferenceMap =
    await getAiProviderPreferences().catch(() => ({}));
  return preferences[capability]?.trim() || undefined;
};

const isProviderEnabled = (
  provider: AiProvider,
  isPluginEnabled?: (pluginId: string) => boolean
): boolean =>
  !provider.pluginId || !isPluginEnabled || isPluginEnabled(provider.pluginId);

const isUsableProvider = (
  provider: AiProvider | undefined,
  capability: AiProviderCapability,
  options: AiProviderRequestOptions
): provider is AiProvider =>
  Boolean(
    provider &&
      isProviderEnabled(provider, options.isPluginEnabled) &&
      provider.capabilities.includes(capability)
  );

const resolveCandidateProvider = (
  registry: AiProviderRegistry,
  options: AiProviderRequestOptions,
  capability: AiProviderCapability,
  preferredProviderId?: string
): AiProvider | undefined => {
  if (!preferredProviderId) {
    return registry.getDefault({
      capability,
      isPluginEnabled: options.isPluginEnabled
    });
  }

  return options.providerId
    ? registry.require(preferredProviderId)
    : registry.get(preferredProviderId);
};

const throwExplicitProviderError = (
  provider: AiProvider,
  capability: AiProviderCapability,
  isPluginEnabled?: (pluginId: string) => boolean
): never => {
  if (!isProviderEnabled(provider, isPluginEnabled)) {
    throw new Error(`AI provider ${provider.id} 当前不可用`);
  }
  throw new Error(`AI provider ${provider.id} 不支持 ${capability}`);
};

const resolveProvider = async (
  options: AiProviderRequestOptions,
  capability: AiProviderCapability
): Promise<AiProvider> => {
  const registry = options.registry ?? aiProviderRegistry;
  if (!options.registry) {
    ensureBuiltinAiProvidersRegistered(registry);
  }

  const preferredProviderId = await resolvePreferredProviderId(
    options,
    capability
  );
  const provider = resolveCandidateProvider(
    registry,
    options,
    capability,
    preferredProviderId
  );

  if (isUsableProvider(provider, capability, options)) {
    return provider;
  }

  if (options.providerId && provider) {
    throwExplicitProviderError(provider, capability, options.isPluginEnabled);
  }

  const fallbackProvider = registry.getDefault({
    capability,
    isPluginEnabled: options.isPluginEnabled
  });
  if (fallbackProvider) return fallbackProvider;
  throw new Error(`没有可用的 ${capability} AI provider`);
};

export const getAiProviderStatus = async (
  providerId = LOCAL_AI_PROVIDER_ID,
  registry = aiProviderRegistry
): Promise<AiProviderStatus> => {
  if (registry === aiProviderRegistry) {
    ensureBuiltinAiProvidersRegistered(registry);
  }

  const provider = registry.require(providerId);
  if (provider.getStatus) {
    return await provider.getStatus();
  }
  return {
    providerId: provider.id,
    available: true,
    healthy: true
  };
};

export const startAiProvider = async (
  providerId = LOCAL_AI_PROVIDER_ID,
  registry = aiProviderRegistry
): Promise<AiProviderStatus> => {
  if (registry === aiProviderRegistry) {
    ensureBuiltinAiProvidersRegistered(registry);
  }

  const provider = registry.require(providerId);
  if (!provider.start) {
    throw new Error(`AI provider ${provider.id} 不支持启动`);
  }
  return await provider.start();
};

export const chatWithAi = async (
  request: AiChatRequest,
  options: AiProviderRequestOptions = {}
): Promise<AiChatResponse> => {
  const capability = capabilityForRequest(request, options.capability);
  const provider = await resolveProvider(options, capability);
  const response = await provider.chat(request);
  return {
    ...response,
    providerId: response.providerId || provider.id
  };
};

export const translateWithAi = async (
  request: AiTranslateRequest,
  options: Omit<AiProviderRequestOptions, 'capability'> = {}
): Promise<AiTranslateResponse> => {
  const provider = await resolveProvider(
    {
      ...options,
      capability: 'translation'
    },
    'translation'
  );
  if (!provider.translate) {
    throw new Error(`AI provider ${provider.id} 不支持 translate`);
  }

  const response = await provider.translate(request);
  return {
    ...response,
    providerId: response.providerId || provider.id
  };
};
