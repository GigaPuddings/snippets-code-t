import { invoke as tauriInvoke } from '@tauri-apps/api/core';
import type {
  ContentType,
  MarkdownFile,
  SearchEngine,
  SearchHistoryItem
} from '@/types';
import { isContentType } from '@/utils/type-guards';
import { isURL, normalizeURL } from '@/utils/url';
import type { SearchSourceProvider } from '@/plugins/search';
import { searchSourceProviders } from '@/plugins/search-providers';
import {
  createDefaultSearchResult,
  createEngineShortcutResult,
  findSearchEngine
} from '@/plugins/search-engines/searchRuntime';
import { rankSearchResults, type SearchHistoryMeta } from '@/search/ranking';

export type UniversalSearchIntent =
  | 'empty'
  | 'url-open'
  | 'engine-shortcut'
  | 'results';

export type UniversalSearchDomain =
  | 'workspace'
  | 'apps'
  | 'files'
  | 'bookmarks'
  | 'tools'
  | 'web';

export interface UniversalSearchSourceDescriptor {
  source: string;
  domain: UniversalSearchDomain;
  pluginId?: string;
}

export const UNIVERSAL_SEARCH_SOURCES: UniversalSearchSourceDescriptor[] = [
  { source: 'markdown', domain: 'workspace' },
  { source: 'app', domain: 'apps', pluginId: 'local-launcher' },
  { source: 'bookmark', domain: 'bookmarks', pluginId: 'local-launcher' },
  { source: 'file', domain: 'files', pluginId: 'desktop-files' },
  { source: 'quick-tools', domain: 'tools', pluginId: 'quick-tools' },
  { source: 'engine-shortcut', domain: 'web', pluginId: 'search-engines' },
  { source: 'default-search', domain: 'web', pluginId: 'search-engines' },
  { source: 'url-open', domain: 'web' }
];

export interface UniversalSearchRequest {
  text: string;
  deepSearch: boolean;
  searchEngines: SearchEngine[];
}

export interface UniversalSearchProviderError {
  pluginId: string;
  source?: string;
  query: string;
  error: unknown;
}

export interface UniversalSearchCommandError {
  command: 'search_markdown_files_optimized' | 'get_search_history';
  query: string;
  error: unknown;
}

export interface UniversalSearchRuntime {
  invoke?: typeof tauriInvoke;
  providers?: SearchSourceProvider[];
  isPluginEnabled(pluginId: string): boolean;
  shouldContinue?: () => boolean;
  onProviderError?: (error: UniversalSearchProviderError) => void;
  onCommandError?: (error: UniversalSearchCommandError) => void;
}

export interface UniversalSearchResponse {
  intent: UniversalSearchIntent;
  items: ContentType[];
}

const SOURCE_PLUGIN_IDS = new Map(
  UNIVERSAL_SEARCH_SOURCES.flatMap((source) =>
    source.pluginId ? [[source.source, source.pluginId] as const] : []
  )
);

export const getUniversalSearchResultSource = (item: ContentType): string =>
  typeof item.metadata?.source === 'string'
    ? item.metadata.source
    : (item.summarize ?? 'text');

export const removeDisabledPluginResults = (
  results: ContentType[],
  isPluginEnabled: (pluginId: string) => boolean
): ContentType[] =>
  results.filter((item) => {
    const pluginId = SOURCE_PLUGIN_IDS.get(
      getUniversalSearchResultSource(item)
    );
    return !pluginId || isPluginEnabled(pluginId);
  });

export const withUniversalSearchSource = (
  item: ContentType,
  source: string,
  index = 0
): ContentType => ({
  ...item,
  id: `${source}:${String(item.id)}`,
  metadata: {
    ...(item.metadata ?? {}),
    raw_id: item.id,
    source,
    source_index: index
  }
});

const createUrlOpenResult = (url: string): ContentType => ({
  id: 'url-open',
  title: '在浏览器中打开',
  content: url,
  summarize: 'search',
  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOCAxM3Y2YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjhhMiAyIDAgMCAxIDItMmg2Ij48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjEwIiB5MT0iMTQiIHgyPSIyMSIgeTI9IjMiPjwvbGluZT48L3N2Zz4='
});

export const isWorkspaceSearchUnavailableError = (error: unknown): boolean => {
  const message = error instanceof Error ? error.message : String(error);
  const normalized = message.toLowerCase();

  return [
    '工作区未设置',
    '工作区未配置',
    'workspace not set',
    'workspace is not set',
    'workspace root',
    '索引管理器未初始化',
    'index manager'
  ].some((keyword) => normalized.includes(keyword.toLowerCase()));
};

const markdownFileToSearchItem = (file: MarkdownFile): ContentType => ({
  id: file.id,
  title: file.title,
  content: file.content || '',
  file_path: file.filePath,
  summarize: file.type === 'code' ? 'code' : 'note',
  type: file.type,
  category_id: file.categoryId,
  category_name: file.categoryName,
  tags: file.tags,
  score: file.score,
  created_at: file.created,
  updated_at: file.modified
});

const createSearchHistoryMap = (
  history: SearchHistoryItem[]
): Map<string, SearchHistoryMeta> =>
  new Map(
    history.map((item) => [
      item.id,
      {
        usage_count: item.usage_count,
        last_used_at: item.last_used_at
      }
    ])
  );

const shouldKeepSearching = (runtime: UniversalSearchRuntime): boolean =>
  runtime.shouldContinue?.() ?? true;

const getInvoke = (runtime: UniversalSearchRuntime): typeof tauriInvoke =>
  runtime.invoke ?? tauriInvoke;

const searchMarkdown = async (
  query: string,
  runtime: UniversalSearchRuntime
): Promise<ContentType[]> => {
  const invoke = getInvoke(runtime);

  try {
    const markdownResults = await invoke<MarkdownFile[]>(
      'search_markdown_files_optimized',
      { query }
    );
    return Array.isArray(markdownResults)
      ? markdownResults.map(markdownFileToSearchItem)
      : [];
  } catch (error) {
    if (!isWorkspaceSearchUnavailableError(error)) {
      runtime.onCommandError?.({
        command: 'search_markdown_files_optimized',
        query,
        error
      });
    }
    return [];
  }
};

const loadSearchHistory = async (
  query: string,
  runtime: UniversalSearchRuntime
): Promise<SearchHistoryItem[]> => {
  const invoke = getInvoke(runtime);

  try {
    const history = await invoke<SearchHistoryItem[]>('get_search_history');
    return Array.isArray(history) ? history : [];
  } catch (error) {
    runtime.onCommandError?.({
      command: 'get_search_history',
      query,
      error
    });
    return [];
  }
};

const searchProvider = async (
  provider: SearchSourceProvider,
  text: string,
  runtime: UniversalSearchRuntime
) => {
  try {
    return await provider.search(text);
  } catch (error) {
    runtime.onProviderError?.({
      pluginId: provider.pluginId,
      source: provider.source,
      query: text,
      error
    });
    return [];
  }
};

export const runUniversalSearch = async (
  request: UniversalSearchRequest,
  runtime: UniversalSearchRuntime
): Promise<UniversalSearchResponse> => {
  const text = request.text.trim();
  if (!text) {
    return { intent: 'empty', items: [] };
  }

  if (isURL(text)) {
    return {
      intent: 'url-open',
      items: [
        withUniversalSearchSource(
          createUrlOpenResult(normalizeURL(text)),
          'url-open',
          0
        )
      ]
    };
  }

  if (runtime.isPluginEnabled('search-engines')) {
    const engineMatch = findSearchEngine(request.searchEngines, text, false);
    if (engineMatch) {
      return {
        intent: 'engine-shortcut',
        items: [
          withUniversalSearchSource(
            createEngineShortcutResult(engineMatch.engine, engineMatch.query),
            'engine-shortcut',
            0
          )
        ]
      };
    }
  }

  const query = text.toLowerCase();
  const providers = runtime.providers ?? searchSourceProviders;
  const enabledProviders = providers.filter((provider) =>
    runtime.isPluginEnabled(provider.pluginId)
  );
  const providerSearches = enabledProviders.map((provider) =>
    searchProvider(provider, text, runtime)
  );

  const [markdownResults, providerResultGroups, history] = await Promise.all([
    searchMarkdown(query, runtime),
    Promise.all(providerSearches),
    loadSearchHistory(query, runtime)
  ]);
  if (!shouldKeepSearching(runtime)) {
    return { intent: 'results', items: [] };
  }

  const results = markdownResults.map((item, index) =>
    withUniversalSearchSource(item, 'markdown', index)
  );

  for (const sourceResults of providerResultGroups) {
    for (const sourceResult of sourceResults) {
      const source =
        typeof sourceResult.source === 'string' && sourceResult.source
          ? sourceResult.source
          : 'unknown';
      const items = Array.isArray(sourceResult.items) ? sourceResult.items : [];
      results.push(
        ...items
          .filter(isContentType)
          .map((item, index) => withUniversalSearchSource(item, source, index))
      );
    }
  }

  const defaultEngine = runtime.isPluginEnabled('search-engines')
    ? request.searchEngines.find((engine) => engine.enabled)
    : undefined;
  const defaultSearchResult = defaultEngine
    ? withUniversalSearchSource(
        createDefaultSearchResult(defaultEngine, query),
        'default-search',
        0
      )
    : null;

  return {
    intent: 'results',
    items: [
      ...rankSearchResults(results, query, createSearchHistoryMap(history), {
        deepSearch: request.deepSearch
      }),
      ...(defaultSearchResult ? [defaultSearchResult] : [])
    ]
  };
};
