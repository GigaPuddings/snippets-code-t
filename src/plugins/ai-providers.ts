import {
  aiProviderRegistry,
  ensureBuiltinAiProvidersRegistered,
  type AiChatRequest,
  type AiChatResponse,
  type AiChatStreamDeltaHandler,
  type AiChatStreamOptions,
  type AiProvider,
  type AiProviderCapability,
  type AiProviderStatus,
  type AiTranslateRequest,
  type AiTranslateResponse
} from '@/ai';

export type RuntimeAiProviderStatus = Omit<AiProviderStatus, 'providerId'> &
  Partial<Pick<AiProviderStatus, 'providerId'>>;
export type RuntimeAiChatResponse = Omit<AiChatResponse, 'providerId'> &
  Partial<Pick<AiChatResponse, 'providerId'>>;
export type RuntimeAiTranslateResponse = Omit<
  AiTranslateResponse,
  'providerId'
> &
  Partial<Pick<AiTranslateResponse, 'providerId'>>;

export interface RuntimeAiProviderRegistration {
  id: string;
  label: string;
  capabilities: readonly AiProviderCapability[];
  priority?: number;
  getStatus?(): Promise<RuntimeAiProviderStatus>;
  start?(): Promise<RuntimeAiProviderStatus>;
  chat(request: AiChatRequest): Promise<RuntimeAiChatResponse>;
  streamChat?(
    request: AiChatRequest,
    onDelta: AiChatStreamDeltaHandler,
    options?: AiChatStreamOptions
  ): Promise<RuntimeAiChatResponse>;
  cancelChatStream?(requestId: string): Promise<boolean>;
  translate?(request: AiTranslateRequest): Promise<RuntimeAiTranslateResponse>;
}

const normalizeProviderStatus = (
  providerId: string,
  status: RuntimeAiProviderStatus
): AiProviderStatus => ({
  ...status,
  providerId,
  available: status.available ?? false
});

const normalizeChatResponse = (
  providerId: string,
  response: RuntimeAiChatResponse
): AiChatResponse => ({
  ...response,
  providerId
});

const normalizeTranslateResponse = (
  providerId: string,
  response: RuntimeAiTranslateResponse
): AiTranslateResponse => ({
  ...response,
  providerId
});

export const registerPluginAiProvider = (
  pluginId: string,
  provider: RuntimeAiProviderRegistration
): void => {
  const providerId = provider.id.trim();
  const getStatus = provider.getStatus;
  const start = provider.start;
  const streamChat = provider.streamChat;
  const cancelChatStream = provider.cancelChatStream;
  const translate = provider.translate;
  ensureBuiltinAiProvidersRegistered();
  const nextProvider = {
    id: providerId,
    label: provider.label,
    pluginId,
    capabilities: provider.capabilities,
    priority: provider.priority,
    getStatus: getStatus
      ? async (): Promise<AiProviderStatus> =>
          normalizeProviderStatus(providerId, await getStatus())
      : undefined,
    start: start
      ? async (): Promise<AiProviderStatus> =>
          normalizeProviderStatus(providerId, await start())
      : undefined,
    chat: async (request): Promise<AiChatResponse> =>
      normalizeChatResponse(providerId, await provider.chat(request)),
    streamChat: streamChat
      ? async (request, onDelta, options): Promise<AiChatResponse> =>
          normalizeChatResponse(
            providerId,
            await streamChat(request, onDelta, options)
          )
      : undefined,
    cancelChatStream: cancelChatStream
      ? async (requestId): Promise<boolean> => await cancelChatStream(requestId)
      : undefined,
    translate: translate
      ? async (request): Promise<AiTranslateResponse> =>
          normalizeTranslateResponse(providerId, await translate(request))
      : undefined
  } satisfies AiProvider;

  aiProviderRegistry.register(nextProvider);
};

export const unregisterAiProvidersForPlugin = (pluginId: string): void => {
  aiProviderRegistry.unregisterPlugin(pluginId);
};
