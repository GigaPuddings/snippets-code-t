import { invoke as tauriInvoke } from '@tauri-apps/api/core';
import type {
  ContentType,
  MarkdownFile,
  SearchEngine,
  SearchHistoryItem
} from '@/types';
import { isContentType } from '@/utils/type-guards';
import { isURL, normalizeURL } from '@/utils/url';
import type { SearchSourceResult } from '@/plugins/search';
import {
  getEnabledSearchSourceProviders,
  searchSourceRegistry
} from '@/plugins/search-providers';
import {
  createDefaultSearchResult,
  createEngineShortcutResult,
  findSearchEngine
} from '@/plugins/search-engines/searchRuntime';
import { rankSearchResults, type SearchHistoryMeta } from '@/search/ranking';
import { getUniversalSearchSourcePluginId } from './sourceCatalog';
import type {
  SearchSourceRegistration,
  SearchSourceRegistry
} from './sourceRegistry';

export { UNIVERSAL_SEARCH_SOURCES } from './sourceCatalog';

export type UniversalSearchIntent =
  | 'empty'
  | 'url-open'
  | 'engine-shortcut'
  | 'results';

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
  providers?: SearchSourceRegistration[];
  registry?: SearchSourceRegistry;
  isPluginEnabled(pluginId: string): boolean;
  shouldContinue?: () => boolean;
  onProviderError?: (error: UniversalSearchProviderError) => void;
  onCommandError?: (error: UniversalSearchCommandError) => void;
}

export interface UniversalSearchResponse {
  intent: UniversalSearchIntent;
  items: ContentType[];
}

interface ProviderSearchOutput {
  provider: SearchSourceRegistration;
  results: SearchSourceResult[];
}

export const getUniversalSearchResultSource = (item: ContentType): string =>
  typeof item.metadata?.source === 'string'
    ? item.metadata.source
    : (item.summarize ?? 'text');

export const removeDisabledPluginResults = (
  results: ContentType[],
  isPluginEnabled: (pluginId: string) => boolean
): ContentType[] =>
  results.filter((item) => {
    const pluginId = getUniversalSearchSourcePluginId(
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
  provider: SearchSourceRegistration,
  text: string,
  runtime: UniversalSearchRuntime
): Promise<ProviderSearchOutput> => {
  const registry =
    runtime.registry ?? (runtime.providers ? undefined : searchSourceRegistry);
  const startedAt = Date.now();
  registry?.markSearching(provider, startedAt);

  try {
    const result = await runProviderWithOptionalTimeout(provider, text);
    registry?.markSuccess(provider, startedAt);
    return {
      provider,
      results: Array.isArray(result) ? result : []
    };
  } catch (error) {
    registry?.markFailure(provider, error, startedAt);
    runtime.onProviderError?.({
      pluginId: provider.pluginId,
      source: provider.source,
      query: text,
      error
    });
    return { provider, results: [] };
  }
};

const runProviderWithOptionalTimeout = (
  provider: SearchSourceRegistration,
  text: string
): Promise<SearchSourceResult[]> => {
  const searchPromise = provider.search(text);
  if (!provider.timeoutMs || provider.timeoutMs <= 0) {
    return searchPromise;
  }

  return new Promise((resolve, reject) => {
    const timer = globalThis.setTimeout(() => {
      reject(new Error(`搜索源 ${provider.pluginId}:${provider.source} 超时`));
    }, provider.timeoutMs);

    searchPromise
      .then((result) => {
        globalThis.clearTimeout(timer);
        resolve(result);
      })
      .catch((error) => {
        globalThis.clearTimeout(timer);
        reject(error);
      });
  });
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
  const enabledProviders =
    runtime.providers?.filter((provider) =>
      runtime.isPluginEnabled(String(provider.pluginId))
    ) ?? getEnabledSearchSourceProviders(runtime.isPluginEnabled);
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

  for (const providerOutput of providerResultGroups) {
    for (const sourceResult of providerOutput.results) {
      const source =
        typeof sourceResult.source === 'string' && sourceResult.source
          ? sourceResult.source
          : providerOutput.provider.source;
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
