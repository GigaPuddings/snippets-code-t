import {
  chatWithLocalAi,
  getLocalAiStatus,
  startLocalAiService,
  translateWithLocalAi,
  type LocalAiServiceStatus
} from '@/api/localAi';
import type {
  AiChatRequest,
  AiProvider,
  AiProviderStatus,
  AiTranslateRequest
} from './providerRegistry';

export const LOCAL_AI_PROVIDER_ID = 'local-ai';

const fileNameFromPath = (path: string | null | undefined): string => {
  if (!path) return '';
  return path.split(/[\\/]/).filter(Boolean).pop() || '';
};

const toProviderStatus = (status: LocalAiServiceStatus): AiProviderStatus => ({
  providerId: LOCAL_AI_PROVIDER_ID,
  available: status.healthy || status.running || !status.lastError,
  running: status.running,
  healthy: status.healthy,
  modelName: fileNameFromPath(status.modelPath),
  modelPath: status.modelPath,
  runtimePath: status.runtimePath,
  baseUrl: status.baseUrl,
  lastError: status.lastError
});

export const localAiProvider: AiProvider = {
  id: LOCAL_AI_PROVIDER_ID,
  label: 'Local AI',
  pluginId: 'local-ai',
  capabilities: ['chat', 'vision', 'translation'],
  priority: 100,
  async getStatus() {
    try {
      return toProviderStatus(await getLocalAiStatus());
    } catch (error) {
      return {
        providerId: LOCAL_AI_PROVIDER_ID,
        available: false,
        healthy: false,
        lastError: error instanceof Error ? error.message : String(error)
      };
    }
  },
  async start() {
    return toProviderStatus(await startLocalAiService());
  },
  async chat(request: AiChatRequest) {
    const response = await chatWithLocalAi(request);
    return {
      providerId: LOCAL_AI_PROVIDER_ID,
      content: response.content
    };
  },
  async translate(request: AiTranslateRequest) {
    return {
      providerId: LOCAL_AI_PROVIDER_ID,
      text: await translateWithLocalAi(request.text, request.from, request.to)
    };
  }
};
