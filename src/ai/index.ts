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

export interface AiProviderRequestOptions {
  providerId?: string;
  capability?: AiProviderCapability;
  registry?: AiProviderRegistry;
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

const resolveProvider = (
  options: AiProviderRequestOptions,
  capability: AiProviderCapability
): AiProvider => {
  const registry = options.registry ?? aiProviderRegistry;
  if (!options.registry) {
    ensureBuiltinAiProvidersRegistered(registry);
  }

  const provider = options.providerId
    ? registry.require(options.providerId)
    : registry.getDefault({ capability });

  if (!provider) {
    throw new Error(`没有可用的 ${capability} AI provider`);
  }
  if (!provider.capabilities.includes(capability)) {
    throw new Error(`AI provider ${provider.id} 不支持 ${capability}`);
  }
  return provider;
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
  const provider = resolveProvider(options, capability);
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
  const provider = resolveProvider(
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
