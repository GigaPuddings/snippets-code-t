import { searchFragmentContent } from '@/api/fragment';
import { debounce } from '@/utils';
import { isURL, normalizeURL } from '@/utils/url';
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { onMounted, ref, watch, type Ref, type ComputedRef, computed } from 'vue';
import type { ContentType, SearchEngine, SearchHistoryItem } from '@/types';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import { isContentType } from '@/utils/type-guards';

/**
 * 搜索功能配置选项
 */
export interface UseSearchOptions {
  /** 防抖延迟时间（毫秒） */
  debounceMs?: number;
  /** 初始搜索查询 */
  initialQuery?: string;
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
  /** 是否有搜索结果（计算属性） */
  hasResults: ComputedRef<boolean>;
  /** 处理回车键搜索 */
  handleEnterSearch: () => Promise<void>;
  /** 清除搜索 */
  clearSearch: () => void;
  /** 添加搜索历史 */
  addSearchHistory: (id: string) => void;
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
  const { debounceMs = 300, initialQuery = '' } = options;

  const searchText = ref(initialQuery);
  const searchResults = ref<ContentType[]>([]);
  const searchEngines = ref<SearchEngine[]>([]);

  const hasResults = computed(() => searchResults.value.length > 0);

  /**
   * 处理搜索引擎快捷方式
   * @param text - 搜索文本
   * @param forceSearch - 是否强制搜索
   * @returns 是否匹配到搜索引擎
   */
  const handleEngineSearch = async (text: string, forceSearch = false): Promise<boolean> => {
    try {
      const parts = text.trim().split(/\s+/);
      if ((parts.length >= 2 || forceSearch) && parts.length > 0) {
        const keyword = parts[0];
        const query = parts.slice(1).join(' ');

        // 先检查是否匹配名称
        let engine = searchEngines.value.find((e) => e.name === keyword);

        // 如果名称没有匹配到，再检查是否匹配关键词
        if (!engine) {
          engine = searchEngines.value.find((e) => e.keyword === keyword);
        }

        if (engine) {
          if (!forceSearch) {
            searchResults.value = [
              {
                id: `search-${engine.id}`,
                title: `使用 ${engine.name} 搜索: ${query}`,
                content: engine.url.replace(
                  '%s',
                  encodeURIComponent(query || '')
                ),
                summarize: 'search',
                icon: engine.icon
              }
            ];
            return true;
          }
          const searchUrl = engine.url.replace(
            '%s',
            encodeURIComponent(query || '')
          );
          await invoke('open_url', { url: searchUrl });
          searchText.value = '';
          invoke('show_hide_window_command', { label: 'search' });
          return true;
        }
      }
      return false;
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
    searchText.value = '';
    searchResults.value = [];
  };

  /**
   * 防抖搜索函数
   */
  const debouncedSearch = debounce(async () => {
    try {
      if (!searchText.value.trim()) {
        searchResults.value = [];
        return;
      }

      const query = searchText.value.toLowerCase();
      const results: ContentType[] = [];

      // 1. 优先检查是否为 URL
      if (isURL(searchText.value)) {
        const normalizedUrl = normalizeURL(searchText.value);
        results.push({
          id: 'url-open',
          title: `在浏览器中打开`,
          content: normalizedUrl,
          summarize: 'search',
          icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOCAxM3Y2YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjhhMiAyIDAgMCAxIDItMmg2Ij48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjEwIiB5MT0iMTQiIHgyPSIyMSIgeTI9IjMiPjwvbGluZT48L3N2Zz4='
        });
        searchResults.value = results;
        return;
      }

      // 2. 检查是否是搜索引擎快捷方式
      const isEngineSearch = await handleEngineSearch(searchText.value);
      if (isEngineSearch) return;

      // 3. 搜索本地内容
      // 搜索代码片段
      const codeResults = await searchCode(query);
      results.push(...codeResults);

      // 使用后端模糊搜索应用
      const appResults = await invoke<ContentType[]>('search_apps', { query });
      if (Array.isArray(appResults)) {
        results.push(...appResults.filter(isContentType));
      }

      // 使用后端模糊搜索书签
      const bookmarkResults = await invoke<ContentType[]>('search_bookmarks', { query });
      if (Array.isArray(bookmarkResults)) {
        results.push(...bookmarkResults.filter(isContentType).slice(0, 10));
      }

      // 根据历史记录排序
      const history = await invoke<SearchHistoryItem[]>('get_search_history');
      if (Array.isArray(history) && history.length > 0) {
        const historyMap = new Map(
          history.map((h) => [
            h.id,
            { usage_count: h.usage_count, last_used_at: h.last_used_at }
          ])
        );

        results.sort((a, b) => {
          const aHistory = historyMap.get(String(a.id));
          const bHistory = historyMap.get(String(b.id));

          if (aHistory && !bHistory) return -1;
          if (!aHistory && bHistory) return 1;
          if (aHistory && bHistory) {
            if (bHistory.usage_count !== aHistory.usage_count) {
              return bHistory.usage_count - aHistory.usage_count;
            }
            return (
              new Date(bHistory.last_used_at).getTime() -
              new Date(aHistory.last_used_at).getTime()
            );
          }
          return 0;
        });
      }

      // 4. 默认搜索引擎选项（仅在非 URL 时显示）
      const defaultEngine = searchEngines.value.find((e) => e.enabled);
      if (defaultEngine) {
        results.unshift({
          id: 'default-search',
          title: `使用 ${defaultEngine.name} 搜索: ${query}`,
          content: defaultEngine.url.replace('%s', encodeURIComponent(query)),
          summarize: 'search',
          icon: defaultEngine.icon
        });
      }

      searchResults.value = results;
    } catch (error) {
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
        addSearchHistory('url-open');
        searchText.value = '';
        invoke('show_hide_window_command', { label: 'search' });
        return;
      }

      // 2. 检查是否是搜索引擎快捷方式
      const isEngineSearch = await handleEngineSearch(text, true);
      if (isEngineSearch) return;

      // 3. 使用默认搜索引擎
      const defaultEngine = searchEngines.value.find((e) => e.enabled);
      if (defaultEngine) {
        const searchUrl = defaultEngine.url.replace(
          '%s',
          encodeURIComponent(text)
        );
        // add history
        addSearchHistory('default-search');
        await invoke('open_url', { url: searchUrl });
        searchText.value = '';
        invoke('show_hide_window_command', { label: 'search' });
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

  /**
   * 添加搜索历史
   * @param id - 搜索项 ID
   */
  const addSearchHistory = (id: string): void => {
    invoke('add_search_history', { id }).catch((error) => {
      ErrorHandler.log(error, {
        type: ErrorType.DATABASE_ERROR,
        operation: 'addSearchHistory',
        details: { id },
        timestamp: new Date()
      });
    });
  };

  watch(searchText, () => {
    debouncedSearch();
  });

  // 合并初始化和事件监听
  onMounted(async () => {
    try {
      // 获取搜索引擎
      const engines = await invoke<SearchEngine[]>('get_search_engines');
      if (Array.isArray(engines)) {
        searchEngines.value = engines;
      }

      // 监听搜索引擎更新
      await listen('search-engines-updated', (event: { payload: unknown }) => {
        if (Array.isArray(event.payload)) {
          searchEngines.value = event.payload as SearchEngine[];
        }
      });
    } catch (error) {
      ErrorHandler.handle(error, {
        type: ErrorType.API_ERROR,
        operation: 'useSearch.onMounted',
        timestamp: new Date()
      });
    }
  });

  return {
    searchText,
    searchResults,
    searchEngines,
    hasResults,
    handleEnterSearch,
    clearSearch,
    addSearchHistory
  };
}

/**
 * 搜索代码片段
 * @param query - 搜索查询
 * @returns 搜索结果列表
 */
async function searchCode(query: string): Promise<ContentType[]> {
  try {
    const codeResults = await searchFragmentContent(query);
    return Array.isArray(codeResults) ? codeResults.filter(isContentType) : [];
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'searchCode',
      details: { query },
      timestamp: new Date()
    });
    return [];
  }
}
