import {
  chatWithLocalAi,
  getLocalAiStatus,
  startLocalAiService,
  translateWithLocalAi,
  type LocalAiChatRequest,
  type LocalAiMessage,
  type LocalAiServiceStatus
} from '@/api/localAi';
import { formatAiRequestContext } from './context';
import type {
  AiChatRequest,
  AiProvider,
  AiProviderStatus,
  AiRequestContext,
  AiTranslateRequest
} from './providerRegistry';

export const LOCAL_AI_PROVIDER_ID = 'local-ai';

const languageLabels: Record<string, string> = {
  auto: 'auto-detected language',
  zh: 'Simplified Chinese',
  zh_tw: 'Traditional Chinese',
  en: 'English',
  ja: 'Japanese',
  ko: 'Korean',
  fr: 'French',
  de: 'German',
  ru: 'Russian',
  es: 'Spanish',
  pt_pt: 'Portuguese (Portugal)',
  pt_br: 'Portuguese (Brazil)',
  vi: 'Vietnamese',
  id: 'Indonesian',
  th: 'Thai',
  ar: 'Arabic'
};

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

const localAiContextMessage = (
  context: AiRequestContext | null | undefined
): LocalAiMessage | null => {
  const content = formatAiRequestContext(context);
  return content ? { role: 'system', content } : null;
};

const withContextMessage = (request: AiChatRequest): LocalAiChatRequest => {
  const contextMessage = localAiContextMessage(request.context);
  const localRequest: LocalAiChatRequest = {
    messages: contextMessage
      ? [contextMessage, ...request.messages]
      : request.messages
  };
  if (request.temperature !== undefined) {
    localRequest.temperature = request.temperature;
  }
  if (request.enableThinking !== undefined) {
    localRequest.enableThinking = request.enableThinking;
  }
  if (request.maxTokens !== undefined) {
    localRequest.maxTokens = request.maxTokens;
  }
  return localRequest;
};

const contextualTranslationPrompt = (request: AiTranslateRequest): string =>
  [
    `Translate from ${languageLabels[request.from] ?? request.from} to ${
      languageLabels[request.to] ?? request.to
    }.`,
    'Preserve Markdown, code fences, inline code, URLs, numbers, and line breaks.',
    'Use the Snippets Code request context only to resolve ambiguity.',
    'Return only the translated text, with no explanations.'
  ].join(' ');

const contextualTranslationRequest = (
  request: AiTranslateRequest
): LocalAiChatRequest => {
  const contextMessage = localAiContextMessage(request.context);
  return {
    temperature: 0.2,
    enableThinking: false,
    messages: [
      {
        role: 'system',
        content: [contextualTranslationPrompt(request), contextMessage?.content]
          .filter(Boolean)
          .join('\n\n')
      },
      {
        role: 'user',
        content: request.text
      }
    ]
  };
};

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
    const response = await chatWithLocalAi(withContextMessage(request));
    return {
      providerId: LOCAL_AI_PROVIDER_ID,
      content: response.content
    };
  },
  async translate(request: AiTranslateRequest) {
    if (request.context?.items.length) {
      const response = await chatWithLocalAi(
        contextualTranslationRequest(request)
      );
      return {
        providerId: LOCAL_AI_PROVIDER_ID,
        text: response.content
      };
    }

    return {
      providerId: LOCAL_AI_PROVIDER_ID,
      text: await translateWithLocalAi(request.text, request.from, request.to)
    };
  }
};
