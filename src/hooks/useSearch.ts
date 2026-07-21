import { debounce } from '@/utils';
import { isURL, normalizeURL } from '@/utils/url';
import { invoke } from '@tauri-apps/api/core';
import {
  onMounted,
  onUnmounted,
  ref,
  watch,
  type Ref,
  type ComputedRef,
  computed
} from 'vue';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import type {
  ContentType,
  SearchEngine,
  SearchHistoryItem,
  MarkdownFile
} from '@/types';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import { usePluginStore } from '@/store';
import { searchSourceProviders } from '@/plugins/search-providers';
import {
  rankSearchResults,
  type SearchHistoryMeta
} from './searchRanking';

const isWorkspaceSearchUnavailableError = (error: unknown): boolean => {
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

/**
 * 搜索功能配置选项
 */
export interface UseSearchOptions {
  /** 防抖延迟时间（毫秒） */
  debounceMs?: number;
  /** 初始搜索查询 */
  initialQuery?: string;
  /** 是否默认启用深度检索 */
  initialDeepSearch?: boolean;
}

/**
 * 搜索功能返回值
 */
export interface UseSearchReturn {
  /** 搜索文本（响应式） */
  searchText: Ref<string>;
  /** 搜索结果列表（响应式） */
  searchResults: Ref<ContentType[]>;
  /** 搜索引擎列表（响应式） */
  searchEngines: Ref<SearchEngine[]>;
  /** 是否启用深度检索 */
  deepSearchEnabled: Ref<boolean>;
  /** 是否有搜索结果（计算属性） */
  hasResults: ComputedRef<boolean>;
  /** 处理回车键搜索 */
  handleEnterSearch: () => Promise<void>;
  /** 清除搜索 */
  clearSearch: () => void;
  /** 切换深度检索 */
  toggleDeepSearch: () => void;
  /** 添加搜索历史 */
  addSearchHistory: (id: string) => Promise<void>;
}

/**
 * 搜索功能组合式函数
 * 提供搜索文本、搜索结果、搜索引擎等功能
 *
 * @param options - 搜索配置选项
 * @returns 搜索相关的状态和方法
 *
 * @example
 * ```typescript
 * const { searchText, searchResults, handleEnterSearch, clearSearch } = useSearch({
 *   debounceMs: 300
 * });
 * ```
 */
export function useSearch(options: UseSearchOptions = {}): UseSearchReturn {
  const {
    debounceMs = 300,
    initialQuery = '',
    initialDeepSearch = false
  } = options;

  const searchText = ref(initialQuery);
  const searchResults = ref<ContentType[]>([]);
  const searchEngines = ref<SearchEngine[]>([]);
  const deepSearchEnabled = ref(initialDeepSearch);
  const pluginStore = usePluginStore();
  let unlistenSearchEngineUpdates: UnlistenFn | null = null;
  let isSearchActive = true;
  let searchRequestVersion = 0;

  const hasResults = computed(() => searchResults.value.length > 0);

  const nextSearchRequest = (): number => {
    searchRequestVersion += 1;
    return searchRequestVersion;
  };

  const isLatestSearchRequest = (requestVersion: number): boolean =>
    isSearchActive && requestVersion === searchRequestVersion;

  const withSourceId = (
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

  const loadSearchEngines = async (): Promise<SearchEngine[]> => {
    if (!pluginStore.isEnabled('search-engines')) {
      return [];
    }

    const engines = await invoke<SearchEngine[]>('get_search_engines');
    return Array.isArray(engines) ? engines : [];
  };

  const listenSearchEngineUpdates = async (
    onUpdate: (engines: SearchEngine[]) => void
  ): Promise<UnlistenFn> => (
    listen('search-engines-updated', (event: { payload: unknown }) => {
      if (Array.isArray(event.payload)) {
        onUpdate(event.payload as SearchEngine[]);
      }
    })
  );

  const findSearchEngine = (
    engines: SearchEngine[],
    text: string,
    forceSearch = false
  ): { engine: SearchEngine; query: string } | null => {
    const parts = text.trim().split(/\s+/);
    if (!((parts.length >= 2 || forceSearch) && parts.length > 0)) {
      return null;
    }

    const keyword = parts[0];
    const query = parts.slice(1).join(' ');
    const engine =
      engines.find((item) => item.name === keyword) ??
      engines.find((item) => item.keyword === keyword);

    return engine ? { engine, query } : null;
  };

  const createEngineShortcutResult = (
    engine: SearchEngine,
    query: string
  ): ContentType => ({
    id: `search-${engine.id}`,
    title: `使用 ${engine.name} 搜索: ${query}`,
    content: engine.url.replace('%s', encodeURIComponent(query || '')),
    summarize: 'search',
    icon: engine.icon
  });

  const openSearchEngine = async (
    engine: SearchEngine,
    query: string
  ): Promise<void> => {
    const searchUrl = engine.url.replace('%s', encodeURIComponent(query || ''));
    await invoke('open_url', { url: searchUrl });
    await invoke('show_hide_window_command', { label: 'search' });
  };

  const getDefaultSearchEngine = (
    engines: SearchEngine[]
  ): SearchEngine | undefined => (
    pluginStore.isEnabled('search-engines')
      ? engines.find((engine) => engine.enabled)
      : undefined
  );

  const createDefaultSearchResult = (
    engine: SearchEngine,
    query: string
  ): ContentType => ({
    id: 'default-search',
    title: `使用 ${engine.name} 搜索: ${query}`,
    content: engine.url.replace('%s', encodeURIComponent(query)),
    summarize: 'search',
    icon: engine.icon
  });

  /**
   * 处理搜索引擎快捷方式
   * @param text - 搜索文本
   * @param forceSearch - 是否强制搜索
   * @returns 是否匹配到搜索引擎
   */
  const handleEngineSearch = async (
    text: string,
    forceSearch = false,
    requestVersion?: number
  ): Promise<boolean> => {
    if (!pluginStore.isEnabled('search-engines')) {
      return false;
    }

    try {
      const match = findSearchEngine(searchEngines.value, text, forceSearch);
      if (!match) {
        return false;
      }

      if (!forceSearch) {
        if (
          requestVersion !== undefined &&
          !isLatestSearchRequest(requestVersion)
        ) {
          return true;
        }

        searchResults.value = [
          withSourceId(
            createEngineShortcutResult(match.engine, match.query),
            'engine-shortcut',
            0
          )
        ];
        return true;
      }

      await openSearchEngine(match.engine, match.query);
      searchText.value = '';
      return true;
    } catch (error) {
      ErrorHandler.handle(error, {
        type: ErrorType.UNKNOWN_ERROR,
        operation: 'handleEngineSearch',
        details: { text, forceSearch },
        timestamp: new Date()
      });
      return false;
    }
  };

  /**
   * 清除搜索
   */
  const clearSearch = (): void => {
    nextSearchRequest();
    searchText.value = '';
    searchResults.value = [];
  };

  const toggleDeepSearch = (): void => {
    deepSearchEnabled.value = !deepSearchEnabled.value;
  };

  const cleanupSearchEngineUpdates = (): void => {
    unlistenSearchEngineUpdates?.();
    unlistenSearchEngineUpdates = null;
  };

  const syncSearchEngineRuntime = async (): Promise<void> => {
    cleanupSearchEngineUpdates();

    if (!pluginStore.isEnabled('search-engines')) {
      if (isSearchActive) {
        searchEngines.value = [];
      }
      return;
    }

    if (!isSearchActive) return;

    const engines = await loadSearchEngines();
    if (!isSearchActive) return;

    searchEngines.value = engines;
    unlistenSearchEngineUpdates = await listenSearchEngineUpdates((engines) => {
      if (!isSearchActive) return;
      searchEngines.value = engines;
    });
  };

  /**
   * 防抖搜索函数
   */
  const debouncedSearch = debounce(async (requestVersion: number) => {
    try {
      const text = searchText.value.trim();
      if (!text) {
        if (isLatestSearchRequest(requestVersion)) {
          searchResults.value = [];
        }
        return;
      }

      const query = text.toLowerCase();
      const matchOptions = { deepSearch: deepSearchEnabled.value };
      const results: ContentType[] = [];

      // 1. 优先检查是否为 URL
      if (isURL(text)) {
        const normalizedUrl = normalizeURL(text);
        if (!isLatestSearchRequest(requestVersion)) return;

        results.push(
          withSourceId(
            {
              id: 'url-open',
              title: `在浏览器中打开`,
              content: normalizedUrl,
              summarize: 'search',
              icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOCAxM3Y2YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjhhMiAyIDAgMCAxIDItMmg2Ij48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjEwIiB5MT0iMTQiIHgyPSIyMSIgeTI9IjMiPjwvbGluZT48L3N2Zz4='
            },
            'url-open',
            results.length
          )
        );
        if (!isLatestSearchRequest(requestVersion)) return;
        searchResults.value = results;
        return;
      }

      // 2. 检查是否是搜索引擎快捷方式
      const isEngineSearch = await handleEngineSearch(
        text,
        false,
        requestVersion
      );
      if (!isLatestSearchRequest(requestVersion)) return;
      if (isEngineSearch) return;

      // 3. 本地内容、插件搜索源和历史权重彼此独立，并行执行可避免
      // 慢插件把整次快速搜索串行阻塞。
      const enabledProviders = searchSourceProviders.filter((provider) =>
        pluginStore.isEnabled(provider.pluginId)
      );
      const providerSearches = enabledProviders.map(async (provider) => {
        try {
          return await provider.search(text);
        } catch (error) {
          if (isLatestSearchRequest(requestVersion)) {
            ErrorHandler.handle(
              error,
              {
                type: ErrorType.API_ERROR,
                operation: 'searchSourceProvider',
                details: {
                  pluginId: provider.pluginId,
                  source: provider.source,
                  query: text
                },
                timestamp: new Date()
              },
              {
                showNotification: false
              }
            );
          }
          return [];
        }
      });
      const historyRequest = invoke<SearchHistoryItem[]>(
        'get_search_history'
      ).catch((error) => {
        if (isLatestSearchRequest(requestVersion)) {
          ErrorHandler.log(error, {
            type: ErrorType.DATABASE_ERROR,
            operation: 'getSearchHistory',
            details: { query: text },
            timestamp: new Date()
          });
        }
        return [] as SearchHistoryItem[];
      });
      const [codeResults, providerResultGroups, history] = await Promise.all([
        searchCode(query),
        Promise.all(providerSearches),
        historyRequest
      ]);
      if (!isLatestSearchRequest(requestVersion)) return;

      results.push(
        ...codeResults.map((item, index) =>
          withSourceId(item, 'markdown', index)
        )
      );

      for (const sourceResults of providerResultGroups) {
        for (const sourceResult of sourceResults) {
          results.push(
            ...sourceResult.items.map((item, index) =>
              withSourceId(item, sourceResult.source, index)
            )
          );
        }
      }

      // 根据本次查询相关度和历史记录排序
      const historyMap =
        Array.isArray(history) && history.length > 0
          ? new Map(
              history.map((h) => [
                h.id,
                { usage_count: h.usage_count, last_used_at: h.last_used_at }
              ])
            )
          : new Map<string, SearchHistoryMeta>();

      // 4. 默认搜索引擎选项（仅在非 URL 时显示）
      let defaultSearchResult: ContentType | null = null;
      if (pluginStore.isEnabled('search-engines')) {
        if (!isLatestSearchRequest(requestVersion)) return;

        const defaultEngine = getDefaultSearchEngine(searchEngines.value);
        if (defaultEngine) {
          defaultSearchResult = withSourceId(
            createDefaultSearchResult(defaultEngine, query),
            'default-search',
            0
          );
        }
      }

      if (!isLatestSearchRequest(requestVersion)) return;

      searchResults.value = [
        ...rankSearchResults(results, query, historyMap, matchOptions),
        ...(defaultSearchResult ? [defaultSearchResult] : [])
      ];
    } catch (error) {
      if (!isLatestSearchRequest(requestVersion)) return;

      ErrorHandler.handle(error, {
        type: ErrorType.API_ERROR,
        operation: 'debouncedSearch',
        details: { query: searchText.value },
        timestamp: new Date()
      });
      searchResults.value = [];
    }
  }, debounceMs);

  /**
   * 添加搜索历史
   * @param id - 搜索项 ID
   */
  const addSearchHistory = async (id: string): Promise<void> => {
    try {
      await invoke('add_search_history', { id });
    } catch (error) {
      ErrorHandler.log(error, {
        type: ErrorType.DATABASE_ERROR,
        operation: 'addSearchHistory',
        details: { id },
        timestamp: new Date()
      });
    }
  };

  /**
   * 处理回车键搜索
   */
  const handleEnterSearch = async (): Promise<void> => {
    try {
      const text = searchText.value.trim();
      if (!text) return;

      if (searchResults.value.length > 0) return;

      // 1. 优先检查是否为 URL
      if (isURL(text)) {
        const normalizedUrl = normalizeURL(text);
        await invoke('open_url', { url: normalizedUrl });
        await addSearchHistory('url-open');
        searchText.value = '';
        await invoke('show_hide_window_command', { label: 'search' });
        return;
      }

      // 2. 检查是否是搜索引擎快捷方式
      const isEngineSearch = await handleEngineSearch(text, true);
      if (isEngineSearch) return;

      // 3. 使用默认搜索引擎
      if (pluginStore.isEnabled('search-engines')) {
        const defaultEngine = getDefaultSearchEngine(searchEngines.value);
        if (defaultEngine) {
          // add history
          await addSearchHistory('default-search');
          await openSearchEngine(defaultEngine, text);
          searchText.value = '';
        }
      }
    } catch (error) {
      ErrorHandler.handle(error, {
        type: ErrorType.TAURI_COMMAND_ERROR,
        operation: 'handleEnterSearch',
        details: { text: searchText.value },
        timestamp: new Date()
      });
    }
  };

  watch(searchText, () => {
    debouncedSearch(nextSearchRequest());
  });

  watch(deepSearchEnabled, () => {
    if (searchText.value.trim()) {
      debouncedSearch(nextSearchRequest());
    }
  });

  // 合并初始化和事件监听
  onMounted(async () => {
    try {
      await pluginStore.initialize();
      await syncSearchEngineRuntime();
    } catch (error) {
      ErrorHandler.handle(error, {
        type: ErrorType.API_ERROR,
        operation: 'useSearch.onMounted',
        timestamp: new Date()
      });
    }
  });

  watch(
    () =>
      [
        pluginStore.isEnabled('search-engines'),
        pluginStore.runtimeRevision
      ] as const,
    async () => {
      try {
        await syncSearchEngineRuntime();
        if (searchText.value.trim()) {
          debouncedSearch(nextSearchRequest());
        }
      } catch (error) {
        ErrorHandler.handle(error, {
          type: ErrorType.API_ERROR,
          operation: 'useSearch.syncSearchEngineRuntime',
          timestamp: new Date()
        });
      }
    }
  );

  onUnmounted(() => {
    isSearchActive = false;
    nextSearchRequest();
    debouncedSearch.cancel();
    cleanupSearchEngineUpdates();
  });

  return {
    searchText,
    searchResults,
    searchEngines,
    deepSearchEnabled,
    hasResults,
    handleEnterSearch,
    clearSearch,
    toggleDeepSearch,
    addSearchHistory
  };
}

/**
 * 搜索代码片段和笔记（使用 Markdown 文件搜索）
 * @param query - 搜索查询
 * @returns 搜索结果列表
 */
async function searchCode(query: string): Promise<ContentType[]> {
  try {
    // 使用新的 Markdown 文件搜索（已支持全文搜索和中文分词）
    const markdownResults = await invoke<MarkdownFile[]>(
      'search_markdown_files_optimized',
      { query }
    );
    if (Array.isArray(markdownResults) && markdownResults.length > 0) {
      return markdownResults.map((file: MarkdownFile) => ({
        id: file.id,
        title: file.title,
        content: file.content || '',
        file_path: file.filePath,
        summarize: file.type === 'code' ? ('code' as const) : ('note' as const),
        type: file.type,
        category_id: file.categoryId,
        category_name: file.categoryName,
        tags: file.tags,
        score: file.score,
        created_at: file.created,
        updated_at: file.modified
      }));
    }
    return [];
  } catch (error) {
    if (isWorkspaceSearchUnavailableError(error)) {
      return [];
    }

    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'searchCode',
      details: { query },
      timestamp: new Date()
    });
    return [];
  }
}
