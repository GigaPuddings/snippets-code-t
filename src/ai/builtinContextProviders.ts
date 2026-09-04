import {
  getWorkspaceRoot,
  searchMarkdownFiles as searchWorkspaceMarkdownFiles
} from '@/api/markdown';
import type { MarkdownFile } from '@/types';
import type { AiContextItemInput } from './context';
import {
  aiContextProviderRegistry,
  type AiContextCollectionRequest,
  type AiContextProviderRegistration,
  type AiContextProviderRegistry,
  type AiContextProviderResult
} from './contextRegistry';

export const WORKSPACE_AI_CONTEXT_PROVIDER_ID = 'workspace';
export const SELECTION_AI_CONTEXT_PROVIDER_ID = 'selection';
export const SEARCH_AI_CONTEXT_PROVIDER_ID = 'workspace-search';

const MAX_SEARCH_CONTEXT_RESULTS = 5;
const SEARCH_CONTEXT_SNIPPET_CHARS = 900;

export interface BuiltinAiContextProviderRuntime {
  getWorkspaceRoot?: () => Promise<string>;
  searchMarkdownFiles?: (query: string) => Promise<MarkdownFile[]>;
}

const inputText = (
  request: AiContextCollectionRequest,
  key: string
): string | undefined => {
  const value = request.input?.[key];
  const normalized = typeof value === 'string' ? value.trim() : '';
  return normalized || undefined;
};

const inputNumber = (
  request: AiContextCollectionRequest,
  key: string
): number | undefined => {
  const value = request.input?.[key];
  return typeof value === 'number' && Number.isFinite(value)
    ? value
    : undefined;
};

const compactMetadata = (
  metadata: Record<string, unknown>
): Record<string, unknown> | undefined => {
  const entries = Object.entries(metadata).filter(
    ([, value]) => value !== undefined && value !== null && value !== ''
  );
  return entries.length ? Object.fromEntries(entries) : undefined;
};

const createWorkspaceProvider = (
  runtime: BuiltinAiContextProviderRuntime
): AiContextProviderRegistration => ({
  id: WORKSPACE_AI_CONTEXT_PROVIDER_ID,
  label: 'Workspace Context',
  kinds: ['workspace'],
  capabilities: ['chat', 'translation'],
  priority: 100,
  async collect(request): Promise<AiContextProviderResult> {
    const items: AiContextItemInput[] = [];
    const currentContent = inputText(request, 'currentContent');
    const currentTitle = inputText(request, 'currentTitle');
    const currentFilePath = inputText(request, 'currentFilePath');

    if (currentContent) {
      items.push({
        kind: 'workspace',
        title: currentTitle ?? 'Current workspace item',
        source: currentFilePath ?? 'workspace.current',
        content: currentContent,
        metadata: compactMetadata({
          filePath: currentFilePath,
          type: inputText(request, 'currentType')
        })
      });
    }

    const explicitRoot = inputText(request, 'workspaceRoot');
    const workspaceRoot =
      explicitRoot ??
      (await (runtime.getWorkspaceRoot ?? getWorkspaceRoot)().catch(() => ''));
    if (workspaceRoot) {
      items.push({
        kind: 'workspace',
        title: 'Workspace root',
        source: 'workspace.root',
        content: `Workspace root: ${workspaceRoot}`
      });
    }

    return items;
  }
});

const createSelectionProvider = (): AiContextProviderRegistration => ({
  id: SELECTION_AI_CONTEXT_PROVIDER_ID,
  label: 'Selection Context',
  kinds: ['selection'],
  capabilities: ['chat', 'translation'],
  priority: 120,
  collect(request): AiContextProviderResult {
    const selectionText =
      inputText(request, 'selectionText') ?? inputText(request, 'selectedText');
    if (!selectionText) return undefined;

    return {
      kind: 'selection',
      title: inputText(request, 'selectionTitle') ?? 'Current selection',
      source: inputText(request, 'selectionSource') ?? 'selection',
      content: selectionText,
      metadata: compactMetadata({
        language: inputText(request, 'selectionLanguage'),
        filePath: inputText(request, 'selectionFilePath'),
        startLine: inputNumber(request, 'selectionStartLine'),
        endLine: inputNumber(request, 'selectionEndLine')
      })
    };
  }
});

const snippetAroundQuery = (
  content: string,
  query: string,
  maxChars: number
): string => {
  const normalized = content.trim();
  if (normalized.length <= maxChars) return normalized;

  const lowerContent = normalized.toLowerCase();
  const keyword = query
    .toLowerCase()
    .split(/\s+/)
    .find((token) => token.length >= 2);
  const matchIndex = keyword ? lowerContent.indexOf(keyword) : -1;
  const start =
    matchIndex > 0 ? Math.max(0, matchIndex - Math.floor(maxChars / 3)) : 0;
  const end = Math.min(normalized.length, start + maxChars);
  return `${start > 0 ? '...' : ''}${normalized.slice(start, end)}${
    end < normalized.length ? '...' : ''
  }`;
};

const markdownFileToContextItem = (
  file: MarkdownFile,
  query: string
): AiContextItemInput => ({
  kind: 'search',
  title: file.title || 'Untitled',
  source: file.filePath || file.id,
  content: snippetAroundQuery(
    file.content || '',
    query,
    SEARCH_CONTEXT_SNIPPET_CHARS
  ),
  metadata: compactMetadata({
    filePath: file.filePath,
    category: file.categoryName,
    type: file.type,
    score: file.score
  })
});

const createSearchProvider = (
  runtime: BuiltinAiContextProviderRuntime
): AiContextProviderRegistration => ({
  id: SEARCH_AI_CONTEXT_PROVIDER_ID,
  label: 'Workspace Search Context',
  kinds: ['search'],
  capabilities: ['chat', 'translation'],
  priority: 80,
  async collect(request): Promise<AiContextProviderResult> {
    const query =
      inputText(request, 'query') ?? inputText(request, 'searchQuery');
    if (!query) return undefined;

    const files = await (
      runtime.searchMarkdownFiles ?? searchWorkspaceMarkdownFiles
    )(query).catch(() => []);
    return files
      .slice(0, MAX_SEARCH_CONTEXT_RESULTS)
      .map((file) => markdownFileToContextItem(file, query));
  }
});

const hasCoreProvider = (
  registry: AiContextProviderRegistry,
  id: string
): boolean =>
  registry.list().some((provider) => provider.id === id && !provider.pluginId);

export const ensureBuiltinAiContextProvidersRegistered = (
  registry: AiContextProviderRegistry = aiContextProviderRegistry,
  runtime: BuiltinAiContextProviderRuntime = {}
): void => {
  const providers = [
    createSelectionProvider(),
    createWorkspaceProvider(runtime),
    createSearchProvider(runtime)
  ];

  for (const provider of providers) {
    if (!hasCoreProvider(registry, provider.id)) {
      registry.register(provider);
    }
  }
};
