import { debounce } from '@/utils';
import { isURL, normalizeURL } from '@/utils/url';
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { onMounted, ref, watch, type Ref, type ComputedRef, computed } from 'vue';
import type { ContentType, SearchEngine, SearchHistoryItem, MarkdownFile } from '@/types';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import { isContentType } from '@/utils/type-guards';

interface SearchHistoryMeta {
  usage_count: number;
  last_used_at: string;
}

interface RankedSearchItem {
  item: ContentType;
  score: number;
  sourceIndex: number;
  history?: SearchHistoryMeta;
}

const SOURCE_TIE_BREAKER: Record<string, number> = {
  app: 4,
  file: 3,
  bookmark: 2,
  markdown: 1,
  'default-search': 0,
  search: 0
};

const normalizeSearchValue = (value: unknown): string => String(value ?? '').trim().toLowerCase();

const getSearchTokens = (query: string): string[] => {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) return [];

  const tokens = normalizedQuery
    .split(/[\s/\\._\-:]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  return Array.from(new Set([normalizedQuery, ...tokens]));
};

const getFileNameParts = (item: ContentType): string[] => {
  const paths = [item.file_path, item.content].filter(Boolean).map(String);

  return paths.flatMap((path) => {
    const fileName = path.split(/[\\/]/).pop() ?? '';
    const stem = fileName.replace(/\.[^.]+$/, '');
    return [fileName, stem].filter(Boolean);
  });
};

const getSearchableText = (item: ContentType): string => [
  item.title,
  item.content,
  item.file_path,
  item.category_name,
  ...(item.tags ?? [])
].filter(Boolean).join(' ');

const getSource = (item: ContentType): string => {
  const source = item.metadata?.source;
  return typeof source === 'string' ? source : item.summarize ?? 'text';
};

const getLiteralSearchableText = (item: ContentType): string => {
  if (getSource(item) === 'app') {
    return [item.title, ...getFileNameParts(item)].filter(Boolean).join(' ');
  }

  return getSearchableText(item);
};

const getRawId = (item: ContentType): string => String(item.metadata?.raw_id ?? item.id);

const getBackendScore = (item: ContentType): number => (
  typeof item.score === 'number' && Number.isFinite(item.score) ? item.score : 0
);

const calculateSearchRelevance = (item: ContentType, query: string): number => {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) return 0;

  const tokens = getSearchTokens(normalizedQuery);
  const title = normalizeSearchValue(item.title);
  const content = normalizeSearchValue(item.content);
  const filePath = normalizeSearchValue(item.file_path);
  const fileNames = getFileNameParts(item).map(normalizeSearchValue);
  const tags = (item.tags ?? []).map(normalizeSearchValue);
  const category = normalizeSearchValue(item.category_name);
  const source = getSource(item);
  const searchableText = normalizeSearchValue(getLiteralSearchableText(item));
  const backendScore = getBackendScore(item);

  let score = Math.min(backendScore, 200);

  if (title === normalizedQuery) score += 10000;
  if (fileNames.some((fileName) => fileName === normalizedQuery)) score += 9500;
  if (title.startsWith(normalizedQuery)) score += 8500;
  if (fileNames.some((fileName) => fileName.startsWith(normalizedQuery))) score += 8000;
  if (title.includes(normalizedQuery)) score += 6500;
  if (fileNames.some((fileName) => fileName.includes(normalizedQuery))) score += 6000;
  if (tags.some((tag) => tag === normalizedQuery)) score += 4000;
  if (category === normalizedQuery) score += 3000;
  if (source !== 'app' && content.includes(normalizedQuery)) score += 1800;
  if (source !== 'app' && filePath.includes(normalizedQuery)) score += 1500;

  const meaningfulTokens = tokens.filter((token) => token !== normalizedQuery);
  if (meaningfulTokens.length > 0) {
    const titleTokenMatches = meaningfulTokens.filter((token) => title.includes(token)).length;
    const fileTokenMatches = meaningfulTokens.filter((token) => fileNames.some((fileName) => fileName.includes(token))).length;
    const textTokenMatches = meaningfulTokens.filter((token) => searchableText.includes(token)).length;

    score += titleTokenMatches * 700;
    score += fileTokenMatches * 650;
    score += textTokenMatches * 120;

    if (textTokenMatches === meaningfulTokens.length) {
      score += 500;
    }
  }

  return score;
};

const isRelevantSearchResult = (item: ContentType, query: string): boolean => {
  if (item.summarize === 'search') return true;

  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) return false;

  const searchableText = normalizeSearchValue(getLiteralSearchableText(item));
  if (searchableText.includes(normalizedQuery)) return true;

  const tokens = getSearchTokens(normalizedQuery).filter((token) => token !== normalizedQuery);
  if (tokens.length > 0 && tokens.some((token) => searchableText.includes(token))) {
    return true;
  }

  return getBackendScore(item) >= 40;
};

const rankSearchResults = (
  items: ContentType[],
  query: string,
  historyMap: Map<string, SearchHistoryMeta>
): ContentType[] => items
  .filter((item) => isRelevantSearchResult(item, query))
  .map<RankedSearchItem>((item, index) => {
    const history = historyMap.get(getRawId(item));
    const historyScore = history ? Math.min(history.usage_count, 20) * 8 : 0;
    const score = calculateSearchRelevance(item, query) + historyScore;

    return {
      item: {
        ...item,
        metadata: {
          ...(item.metadata ?? {}),
          search_score: score,
          history_usage_count: history?.usage_count ?? 0
        }
      },
      score,
      sourceIndex: index,
      history
    };
  })
  .sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;

    const aHistoryTime = a.history ? new Date(a.history.last_used_at).getTime() : 0;
    const bHistoryTime = b.history ? new Date(b.history.last_used_at).getTime() : 0;
    if (bHistoryTime !== aHistoryTime) return bHistoryTime - aHistoryTime;

    const sourceDelta = (SOURCE_TIE_BREAKER[getSource(b.item)] ?? 0) - (SOURCE_TIE_BREAKER[getSource(a.item)] ?? 0);
    if (sourceDelta !== 0) return sourceDelta;

    return a.sourceIndex - b.sourceIndex;
  })
  .map(({ item }) => item);

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

  const withSourceId = (item: ContentType, source: string, index = 0): ContentType => ({
    ...item,
    id: `${source}:${String(item.id)}`,
    metadata: {
      ...(item.metadata ?? {}),
      raw_id: item.id,
      source,
      source_index: index
    }
  });

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
              withSourceId({
                id: `search-${engine.id}`,
                title: `使用 ${engine.name} 搜索: ${query}`,
                content: engine.url.replace(
                  '%s',
                  encodeURIComponent(query || '')
                ),
                summarize: 'search',
                icon: engine.icon
              }, 'engine-shortcut', 0)
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
        results.push(withSourceId({
          id: 'url-open',
          title: `在浏览器中打开`,
          content: normalizedUrl,
          summarize: 'search',
          icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOCAxM3Y2YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjhhMiAyIDAgMCAxIDItMmg2Ij48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz0iMTUgMyAyMSAzIDIxIDkiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjEwIiB5MT0iMTQiIHgyPSIyMSIgeTI9IjMiPjwvbGluZT48L3N2Zz4='
        }, 'url-open', results.length));
        searchResults.value = results;
        return;
      }

      // 2. 检查是否是搜索引擎快捷方式
      const isEngineSearch = await handleEngineSearch(searchText.value);
      if (isEngineSearch) return;

      // 3. 搜索本地内容
      // 搜索代码片段
      const codeResults = await searchCode(query);
      results.push(...codeResults.map((item, index) => withSourceId(item, 'markdown', index)));

      // 使用后端模糊搜索应用
      const appResults = await invoke<ContentType[]>('search_apps', { query });
      if (Array.isArray(appResults)) {
        results.push(...appResults.filter(isContentType).map((item, index) => withSourceId(item, 'app', index)));
      }

      // 使用后端模糊搜索书签
      const bookmarkResults = await invoke<ContentType[]>('search_bookmarks', { query });
      if (Array.isArray(bookmarkResults)) {
        results.push(...bookmarkResults.filter(isContentType).slice(0, 10).map((item, index) => withSourceId(item, 'bookmark', index)));
      }

      // 搜索桌面常用文件
      const desktopFileResults = await invoke<ContentType[]>('search_desktop_files', { query });
      if (Array.isArray(desktopFileResults)) {
        results.push(...desktopFileResults.filter(isContentType).map((item, index) => withSourceId(item, 'file', index)));
      }

      // 根据本次查询相关度和历史记录排序
      const history = await invoke<SearchHistoryItem[]>('get_search_history');
      const historyMap = Array.isArray(history) && history.length > 0
        ? new Map(
          history.map((h) => [
            h.id,
            { usage_count: h.usage_count, last_used_at: h.last_used_at }
          ])
        )
        : new Map<string, SearchHistoryMeta>();

      // 4. 默认搜索引擎选项（仅在非 URL 时显示）
      const defaultEngine = searchEngines.value.find((e) => e.enabled);
      let defaultSearchResult: ContentType | null = null;
      if (defaultEngine) {
        defaultSearchResult = withSourceId({
          id: 'default-search',
          title: `使用 ${defaultEngine.name} 搜索: ${query}`,
          content: defaultEngine.url.replace('%s', encodeURIComponent(query)),
          summarize: 'search',
          icon: defaultEngine.icon
        }, 'default-search', 0);
      }

      searchResults.value = [
        ...(defaultSearchResult ? [defaultSearchResult] : []),
        ...rankSearchResults(results, query, historyMap)
      ];
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
 * 搜索代码片段和笔记（使用 Markdown 文件搜索）
 * @param query - 搜索查询
 * @returns 搜索结果列表
 */
async function searchCode(query: string): Promise<ContentType[]> {
  try {
    // 使用新的 Markdown 文件搜索（已支持全文搜索和中文分词）
    const markdownResults = await invoke<MarkdownFile[]>('search_markdown_files_optimized', { query });
    if (Array.isArray(markdownResults) && markdownResults.length > 0) {
      return markdownResults.map((file: MarkdownFile) => ({
        id: file.id,
        title: file.title,
        content: file.content || '',
        file_path: file.filePath,
        summarize: file.type === 'code' ? 'code' as const : 'note' as const,
        type: file.type,
        category_id: file.categoryId,
        category_name: file.categoryName,
        tags: file.tags,
        created_at: file.created,
        updated_at: file.modified,
      }));
    }
    return [];
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
