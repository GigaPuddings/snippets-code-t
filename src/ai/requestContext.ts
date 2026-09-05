import { ensureBuiltinAiContextProvidersRegistered } from './builtinContextProviders';
import {
  aiContextProviderRegistry,
  collectAiRequestContext,
  type AiContextCollectionOptions,
  type AiContextProviderRegistry
} from './contextRegistry';
import type {
  AiChatRequest,
  AiContentPart,
  AiProviderCapability,
  AiRequestContext,
  AiTranslateRequest
} from './providerRegistry';

export type AiContextCollectionControl =
  | boolean
  | Omit<
      AiContextCollectionOptions,
      'capability' | 'operation' | 'providerId' | 'isPluginEnabled'
    >;

export interface AiContextCollectionProviderOptions {
  contextRegistry?: AiContextProviderRegistry;
  contextCollection?: AiContextCollectionControl;
  isPluginEnabled?: (pluginId: string) => boolean;
}

const textFromContentPart = (part: AiContentPart): string =>
  part.type === 'text' ? part.text : '';

const textFromMessageContent = (
  content: AiChatRequest['messages'][number]['content']
): string =>
  Array.isArray(content)
    ? content.map(textFromContentPart).filter(Boolean).join('\n')
    : content;

const latestUserText = (request: AiChatRequest): string | undefined => {
  for (let index = request.messages.length - 1; index >= 0; index -= 1) {
    const message = request.messages[index];
    if (message.role !== 'user') continue;

    const text = textFromMessageContent(message.content).trim();
    if (text) return text;
  }
  return undefined;
};

export const defaultChatContextInput = (
  request: AiChatRequest
): Record<string, unknown> => {
  const query = latestUserText(request);
  return query ? { query } : {};
};

export const defaultTranslationContextInput = (
  request: AiTranslateRequest
): Record<string, unknown> => ({
  query: request.text,
  selectionText: request.text,
  from: request.from,
  to: request.to
});

const normalizeContextCollectionControl = (
  control: AiContextCollectionControl | undefined
):
  | Omit<
      AiContextCollectionOptions,
      'capability' | 'operation' | 'providerId' | 'isPluginEnabled'
    >
  | undefined => {
  if (control === undefined || control === false) return undefined;
  return control === true ? {} : control;
};

export const collectContextForProvider = async (
  options: AiContextCollectionProviderOptions,
  capability: AiProviderCapability,
  operation: AiContextCollectionOptions['operation'],
  providerId: string,
  fallbackInput: Record<string, unknown>
): Promise<AiRequestContext | undefined> => {
  const contextCollection = normalizeContextCollectionControl(
    options.contextCollection
  );
  if (!contextCollection) return undefined;

  const registry = options.contextRegistry ?? aiContextProviderRegistry;
  if (!options.contextRegistry) {
    ensureBuiltinAiContextProvidersRegistered(registry);
  }

  return await collectAiRequestContext(
    {
      ...contextCollection,
      capability,
      operation,
      providerId,
      isPluginEnabled: options.isPluginEnabled,
      input: {
        ...fallbackInput,
        ...(contextCollection.input ?? {})
      }
    },
    registry
  );
};
