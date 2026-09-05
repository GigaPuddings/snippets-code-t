import {
  aiProviderRegistry,
  type AiChatRequest,
  type AiChatResponse,
  type AiChatStreamDeltaHandler,
  type AiChatStreamOptions,
  type AiProvider,
  type AiProviderCapability,
  type AiProviderRegistry,
  type AiProviderStatus,
  type AiTranslateRequest,
  type AiTranslateResponse
} from './providerRegistry';
import { LOCAL_AI_PROVIDER_ID } from './localAiProvider';
import { ensureBuiltinAiProvidersRegistered } from './builtinProviders';
import { withAiRequestContext } from './context';
import {
  collectContextForProvider,
  defaultChatContextInput,
  defaultTranslationContextInput,
  type AiContextCollectionControl,
  type AiContextCollectionProviderOptions
} from './requestContext';
import {
  getAiProviderPreferences,
  type AiProviderPreferenceMap
} from './preferences';

export interface AiProviderRequestOptions
  extends AiContextCollectionProviderOptions {
  providerId?: string;
  capability?: AiProviderCapability;
  registry?: AiProviderRegistry;
  providerPreferences?: AiProviderPreferenceMap;
  contextCollection?: AiContextCollectionControl;
}

export interface AiProviderChatStreamOptions
  extends AiProviderRequestOptions,
    AiChatStreamOptions {}

export const createAiChatStreamRequestId = (): string =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;

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
  const context = await collectContextForProvider(
    options,
    capability,
    'chat',
    provider.id,
    defaultChatContextInput(request)
  );
  const response = await provider.chat(withAiRequestContext(request, context));
  return {
    ...response,
    providerId: response.providerId || provider.id
  };
};

const providerStreamOptionsFrom = (
  options: AiProviderChatStreamOptions
): AiChatStreamOptions => ({
  requestId: options.requestId,
  onStats: options.onStats
});

export const streamChatWithAi = async (
  request: AiChatRequest,
  onDelta: AiChatStreamDeltaHandler,
  options: AiProviderChatStreamOptions = {}
): Promise<AiChatResponse> => {
  const capability = capabilityForRequest(request, options.capability);
  const provider = await resolveProvider(options, capability);
  const context = await collectContextForProvider(
    options,
    capability,
    'chat',
    provider.id,
    defaultChatContextInput(request)
  );
  const requestWithContext = withAiRequestContext(request, context);
  const response = provider.streamChat
    ? await provider.streamChat(
        requestWithContext,
        onDelta,
        providerStreamOptionsFrom(options)
      )
    : await provider.chat(requestWithContext);

  if (!provider.streamChat && response.content) {
    onDelta(response.content);
  }

  return {
    ...response,
    providerId: response.providerId || provider.id
  };
};

export const cancelAiChatStream = async (
  requestId: string,
  options: AiProviderRequestOptions = {}
): Promise<boolean> => {
  const provider = await resolveProvider(options, options.capability ?? 'chat');
  return provider.cancelChatStream
    ? await provider.cancelChatStream(requestId)
    : false;
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

  const context = await collectContextForProvider(
    options,
    'translation',
    'translation',
    provider.id,
    defaultTranslationContextInput(request)
  );
  const response = await provider.translate(
    withAiRequestContext(request, context)
  );
  return {
    ...response,
    providerId: response.providerId || provider.id
  };
};
