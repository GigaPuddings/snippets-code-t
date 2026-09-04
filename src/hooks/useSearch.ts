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
import type { ContentType, SearchEngine } from '@/types';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import { usePluginStore } from '@/store';
import {
  removeDisabledPluginResults,
  runUniversalSearch,
  UNIVERSAL_SEARCH_SOURCES
} from '@/search/universalSearch';
import {
  findSearchEngine,
  getDefaultSearchEngine,
  listenSearchEngineUpdates,
  loadSearchEngines,
  openSearchEngine
} from '@/plugins/search-engines/searchRuntime';

export { removeDisabledPluginResults } from '@/search/universalSearch';

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
  const searchPluginIds = Array.from(
    new Set(
      UNIVERSAL_SEARCH_SOURCES.flatMap((source) =>
        source.pluginId ? [source.pluginId] : []
      )
    )
  );
  let unlistenSearchEngineUpdates: UnlistenFn | null = null;
  let unlistenLocalLauncherUpdates: UnlistenFn | null = null;
  let unlistenSearchHistoryCleared: UnlistenFn | null = null;
  let isSearchActive = true;
  let searchRequestVersion = 0;

  const hasResults = computed(() => searchResults.value.length > 0);

  const nextSearchRequest = (): number => {
    searchRequestVersion += 1;
    return searchRequestVersion;
  };

  const isLatestSearchRequest = (requestVersion: number): boolean =>
    isSearchActive && requestVersion === searchRequestVersion;

  const openEngineShortcut = async (text: string): Promise<boolean> => {
    if (!pluginStore.isEnabled('search-engines')) {
      return false;
    }

    try {
      const match = findSearchEngine(searchEngines.value, text, true);
      if (!match) {
        return false;
      }

      await openSearchEngine(match.engine, match.query);
      searchText.value = '';
      return true;
    } catch (error) {
      ErrorHandler.handle(error, {
        type: ErrorType.UNKNOWN_ERROR,
        operation: 'openEngineShortcut',
        details: { text },
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

    const engines = await loadSearchEngines(pluginStore);
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
      const response = await runUniversalSearch(
        {
          text,
          deepSearch: deepSearchEnabled.value
        },
        {
          invoke,
          isPluginEnabled: (pluginId) => pluginStore.isEnabled(pluginId),
          shouldContinue: () => isLatestSearchRequest(requestVersion),
          onProviderError: (providerError) => {
            if (!isLatestSearchRequest(requestVersion)) return;
            ErrorHandler.handle(
              providerError.error,
              {
                type: ErrorType.API_ERROR,
                operation: 'searchSourceProvider',
                details: {
                  pluginId: providerError.pluginId,
                  source: providerError.source,
                  query: providerError.query
                },
                timestamp: new Date()
              },
              {
                showNotification: false
              }
            );
          },
          onCommandError: (commandError) => {
            if (!isLatestSearchRequest(requestVersion)) return;
            if (commandError.command === 'get_search_history') {
              ErrorHandler.log(commandError.error, {
                type: ErrorType.DATABASE_ERROR,
                operation: 'getSearchHistory',
                details: { query: commandError.query },
                timestamp: new Date()
              });
              return;
            }

            ErrorHandler.handle(commandError.error, {
              type: ErrorType.API_ERROR,
              operation: 'searchMarkdown',
              details: { query: commandError.query },
              timestamp: new Date()
            });
          }
        }
      );
      if (!isLatestSearchRequest(requestVersion)) return;

      searchResults.value = response.items;
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

  const refreshCurrentSearch = (): void => {
    if (searchText.value.trim()) {
      debouncedSearch(nextSearchRequest());
    }
  };

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
      const isEngineSearch = await openEngineShortcut(text);
      if (isEngineSearch) return;

      // 3. 使用默认搜索引擎
      if (pluginStore.isEnabled('search-engines')) {
        const defaultEngine = getDefaultSearchEngine(
          pluginStore,
          searchEngines.value
        );
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
    // 输入内容改变后立即卸载上一轮虚拟结果列表。仅重置 scrollTop 会让
    // RecycleScroller 继续复用旧行，异步结果回来时可能保留过期的 slot index，
    // 从而造成快捷键编号间断。新结果返回后列表会从首行重新挂载。
    searchResults.value = [];
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
      unlistenLocalLauncherUpdates = await listen(
        'local-launcher-index-updated',
        refreshCurrentSearch
      );
      unlistenSearchHistoryCleared = await listen(
        'search-history-cleared',
        refreshCurrentSearch
      );
    } catch (error) {
      ErrorHandler.handle(error, {
        type: ErrorType.API_ERROR,
        operation: 'useSearch.onMounted',
        timestamp: new Date()
      });
    }
  });

  watch(
    () => [
      pluginStore.runtimeRevision,
      ...searchPluginIds.map((pluginId) => pluginStore.isEnabled(pluginId))
    ],
    async () => {
      try {
        debouncedSearch.cancel();
        nextSearchRequest();
        searchResults.value = removeDisabledPluginResults(
          searchResults.value,
          (pluginId) => pluginStore.isEnabled(pluginId)
        );
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
    unlistenLocalLauncherUpdates?.();
    unlistenLocalLauncherUpdates = null;
    unlistenSearchHistoryCleared?.();
    unlistenSearchHistoryCleared = null;
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
