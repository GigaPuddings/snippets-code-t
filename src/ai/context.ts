import type {
  AiChatRequest,
  AiContextItem,
  AiContextKind,
  AiRequestContext,
  AiTranslateRequest
} from './providerRegistry';

export const AI_CONTEXT_ITEM_MAX_LENGTH = 4000;
export const AI_CONTEXT_MAX_ITEMS = 12;

export interface AiContextItemInput {
  kind: AiContextKind;
  content: string | null | undefined;
  title?: string | null;
  source?: string | null;
  metadata?: Record<string, unknown> | null;
}

export interface AiContextOptions {
  maxItemLength?: number;
  maxItems?: number;
}

type AiContextShortcutOptions = Omit<AiContextItemInput, 'kind' | 'content'> &
  AiContextOptions;

const normalizeOptionalText = (
  value: string | null | undefined
): string | undefined => {
  const normalized = value?.trim();
  return normalized || undefined;
};

const truncateContent = (content: string, maxLength: number): string => {
  if (maxLength <= 0 || content.length <= maxLength) return content;

  const suffix = '\n[truncated]';
  if (maxLength <= suffix.length) {
    return content.slice(0, maxLength);
  }

  return `${content.slice(0, maxLength - suffix.length).trimEnd()}${suffix}`;
};

const normalizeMetadata = (
  metadata: Record<string, unknown> | null | undefined
): Record<string, unknown> | undefined =>
  metadata && Object.keys(metadata).length > 0 ? { ...metadata } : undefined;

const createItemOptions = (
  options: AiContextShortcutOptions
): AiContextOptions => ({
  maxItemLength: options.maxItemLength,
  maxItems: options.maxItems
});

const createSingleItemContext = (
  kind: AiContextKind,
  content: string | null | undefined,
  options: AiContextShortcutOptions
): AiRequestContext | undefined =>
  createAiRequestContext(
    [
      {
        kind,
        content,
        title: options.title,
        source: options.source,
        metadata: options.metadata
      }
    ],
    createItemOptions(options)
  );

export const createAiContextItem = (
  input: AiContextItemInput,
  options: AiContextOptions = {}
): AiContextItem | null => {
  const content = normalizeOptionalText(input.content);
  if (!content) return null;

  const maxItemLength = options.maxItemLength ?? AI_CONTEXT_ITEM_MAX_LENGTH;
  const item: AiContextItem = {
    kind: input.kind,
    content: truncateContent(content, maxItemLength)
  };
  const title = normalizeOptionalText(input.title);
  const source = normalizeOptionalText(input.source);
  const metadata = normalizeMetadata(input.metadata);
  if (title) item.title = title;
  if (source) item.source = source;
  if (metadata) item.metadata = metadata;
  return item;
};

export const createAiRequestContext = (
  items: readonly AiContextItemInput[],
  options: AiContextOptions = {}
): AiRequestContext | undefined => {
  const maxItems = options.maxItems ?? AI_CONTEXT_MAX_ITEMS;
  const normalizedItems = items
    .map((item) => createAiContextItem(item, options))
    .filter((item): item is AiContextItem => Boolean(item))
    .slice(0, Math.max(0, maxItems));

  return normalizedItems.length > 0 ? { items: normalizedItems } : undefined;
};

export const normalizeAiRequestContext = (
  context: AiRequestContext | null | undefined,
  options: AiContextOptions = {}
): AiRequestContext | undefined =>
  createAiRequestContext(context?.items ?? [], options);

export const mergeAiRequestContexts = (
  contexts: readonly (AiRequestContext | null | undefined)[],
  options: AiContextOptions = {}
): AiRequestContext | undefined =>
  createAiRequestContext(
    contexts.flatMap((context) => context?.items ?? []),
    options
  );

export const createSelectionAiContext = (
  content: string | null | undefined,
  options: AiContextShortcutOptions = {}
): AiRequestContext | undefined =>
  createSingleItemContext('selection', content, options);

export const createWorkspaceAiContext = (
  content: string | null | undefined,
  options: AiContextShortcutOptions = {}
): AiRequestContext | undefined =>
  createSingleItemContext('workspace', content, options);

export const createSearchAiContext = (
  content: string | null | undefined,
  options: AiContextShortcutOptions = {}
): AiRequestContext | undefined =>
  createSingleItemContext('search', content, options);

const contextKindLabels: Record<AiContextKind, string> = {
  workspace: 'Workspace',
  selection: 'Selection',
  search: 'Search'
};

const contextHeadingFor = (item: AiContextItem, index: number): string => {
  const title = item.title ? ` - ${item.title}` : '';
  const source = item.source ? ` (${item.source})` : '';
  return `### ${index + 1}. ${contextKindLabels[item.kind]}${title}${source}`;
};

export const formatAiRequestContext = (
  context: AiRequestContext | null | undefined,
  options: AiContextOptions = {}
): string => {
  const normalized = normalizeAiRequestContext(context, options);
  if (!normalized) return '';

  return [
    'Snippets Code request context. Use these references only when relevant, and treat the user message as the source of intent.',
    ...normalized.items.map((item, index) =>
      [contextHeadingFor(item, index), item.content].join('\n')
    )
  ].join('\n\n');
};

export const withAiRequestContext = <
  T extends AiChatRequest | AiTranslateRequest
>(
  request: T,
  context: AiRequestContext | null | undefined,
  options: AiContextOptions = {}
): T => {
  const mergedContext = mergeAiRequestContexts(
    [request.context, context],
    options
  );
  if (!mergedContext) {
    const requestWithoutContext = { ...request };
    delete requestWithoutContext.context;
    return requestWithoutContext;
  }

  return {
    ...request,
    context: mergedContext
  };
};
