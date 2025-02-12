import { searchContent } from '@/database/search';
import { useConfigurationStore } from '@/store';
import { calculateSimilarity, debounce } from '@/utils';
import PinyinMatch from 'pinyin-match';
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';

// 修改计算相似度的逻辑，增加拼音匹配
function calculateScoreWithPinyin(source: string, query: string): number {
  const directScore = calculateSimilarity(source.toLowerCase(), query);

  // 使用 PinyinMatch 进行匹配
  const isPinyinMatch = PinyinMatch.match(source, query);
  const pinyinScore = isPinyinMatch ? 0.8 : 0;

  return Math.max(directScore, pinyinScore);
}

export function useSearch() {
  const store = useConfigurationStore();
  const { searchEngines } = storeToRefs(store);
  const searchText = ref('');
  const searchResults = ref<ContentType[]>([]);

  // 合并初始化和事件监听
  onMounted(async () => {
    // 监听配置更新事件
    await listen('search-engines-updated', (event: any) => {
      if (event.payload) {
        store.searchEngines = event.payload;
      }
    });
  });

  // 处理搜索引擎快捷方式
  const handleEngineSearch = async (text: string, forceSearch = false) => {
    const parts = text.trim().split(/\s+/);
    // 检查是否符合快捷搜索格式，或者是强制搜索
    if ((parts.length >= 2 || forceSearch) && parts.length > 0) {
      const keyword = parts[0];
      const query = parts.slice(1).join(' ');

      // 查找匹配的搜索引擎
      const engine = searchEngines.value.find((e) => e.keyword === keyword);
      if (engine) {
        // 如果不是强制搜索，添加到搜索结果中
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
        // 强制搜索时直接执行
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
  };

  const debouncedSearch = debounce(async () => {
    if (!searchText.value.trim()) {
      searchResults.value = [];
      return;
    }

    const query = searchText.value.toLowerCase();
    const results: ContentType[] = [];

    // 先检查是否是搜索引擎快捷方式
    const isEngineSearch = await handleEngineSearch(searchText.value);
    if (isEngineSearch) return;

    // 搜索代码片段
    const codeResults = await searchCode(query);
    results.push(...codeResults);

    // 搜索应用
    const appResults = await searchApp(store.apps, query);
    results.push(...appResults);

    // 搜索书签
    const bookmarkResults = await searchBookmark(store.bookmarks, query);
    results.push(...bookmarkResults.slice(0, 10));

    // 如果没有搜索结果，并且有默认搜索引擎，则添加一个搜索建议
    if (results.length === 0) {
      const defaultEngine = searchEngines.value.find((e) => e.enabled);
      if (defaultEngine) {
        results.push({
          id: 'default-search',
          title: `使用 ${defaultEngine.name} 搜索: ${query}`,
          content: defaultEngine.url.replace('%s', encodeURIComponent(query)),
          summarize: 'search',
          icon: defaultEngine.icon
        });
      }
    }

    searchResults.value = results;
  }, 300);

  // 处理回车键搜索
  const handleEnterSearch = async () => {
    const text = searchText.value.trim();
    if (!text) return;

    // 如果有搜索结果，让 Result 组件处理
    if (searchResults.value.length > 0) return;

    // 尝试使用快捷方式搜索
    const isEngineSearch = await handleEngineSearch(text, true);
    if (isEngineSearch) return;

    // 如果没有匹配的快捷方式，使用默认搜索引擎
    const defaultEngine = searchEngines.value.find((e) => e.enabled);
    if (defaultEngine) {
      const searchUrl = defaultEngine.url.replace(
        '%s',
        encodeURIComponent(text)
      );
      await invoke('open_url', { url: searchUrl });
      searchText.value = '';
      invoke('show_hide_window_command', { label: 'search' });
    }
  };

  // 监听搜索文本变化
  watch(searchText, async () => {
    await debouncedSearch();
  });

  // 添加清除搜索文本的方法
  const clearSearch = () => {
    searchText.value = '';
    searchResults.value = [];
  };

  return {
    searchText,
    searchResults,
    handleEnterSearch,
    clearSearch
  };
}

// 搜索代码片段
async function searchCode(query: string) {
  const codeResults = await searchContent(query);
  return codeResults;
}

// 搜索书签
async function searchBookmark(store: ContentType[], query: string) {
  const bookmarkResults = store
    .map((item) => {
      // 使用拼音匹配计算分数
      const titleScore = calculateScoreWithPinyin(item.title, query);
      const contentScore = item.content
        ? calculateScoreWithPinyin(item.content, query)
        : 0;

      // 标题匹配权重更高
      const score = titleScore * 2 + contentScore;

      return {
        ...item,
        score
      };
    })
    .filter((item) => item.score > 0) // 只保留有相关性的结果
    .sort((a, b) => b.score - a.score); // 按分数降序排序

  return bookmarkResults.slice(0, 10);
}

// 搜索应用
async function searchApp(store: ContentType[], query: string) {
  const appResults = store.filter(
    (app: ContentType) =>
      PinyinMatch.match(app.title, query) ||
      calculateSimilarity(app.title.toLowerCase(), query) > 0.5
  );
  return appResults;
}
