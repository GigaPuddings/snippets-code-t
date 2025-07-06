import { searchContent, addSearchHistory, getSearchHistory } from '@/database';
import { debounce } from '@/utils';
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { onMounted, ref, watch } from 'vue';

export function useSearch() {
  const searchText = ref('');
  const searchResults = ref<ContentType[]>([]);
  const searchEngines = ref<SearchEngineConfig[]>([]);

  // 处理搜索引擎快捷方式
  const handleEngineSearch = async (text: string, forceSearch = false) => {
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
  };

  const clearSearch = () => {
    searchText.value = '';
    searchResults.value = [];
  };

  // 搜索
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

    // 使用后端模糊搜索应用
    const appResults = (await invoke('search_apps', {
      query
    })) as ContentType[];
    results.push(...appResults);

    // 使用后端模糊搜索书签
    const bookmarkResults = (await invoke('search_bookmarks', {
      query
    })) as ContentType[];
    results.push(...bookmarkResults.slice(0, 10));

    // 根据历史记录排序
    const history = await getSearchHistory();
    if (history.length > 0) {
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

    // 默认搜索引擎选项始终显示
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
  }, 300);

  // 处理回车键搜索
  const handleEnterSearch = async () => {
    const text = searchText.value.trim();
    if (!text) return;

    if (searchResults.value.length > 0) return;

    const isEngineSearch = await handleEngineSearch(text, true);
    if (isEngineSearch) return;

    const defaultEngine = searchEngines.value.find((e) => e.enabled);
    if (defaultEngine) {
      const searchUrl = defaultEngine.url.replace(
        '%s',
        encodeURIComponent(text)
      );
      // add history
      addSearchHistory({
        id: 'default-search',
        title: `使用 ${defaultEngine.name} 搜索: ${text}`,
        content: searchUrl,
        summarize: 'search',
        icon: defaultEngine.icon
      });
      await invoke('open_url', { url: searchUrl });
      searchText.value = '';
      invoke('show_hide_window_command', { label: 'search' });
    }
  };

  watch(searchText, () => {
    debouncedSearch();
  });

  // 合并初始化和事件监听
  onMounted(async () => {
    // 获取搜索引擎
    await invoke('get_search_engines').then((engines) => {
      searchEngines.value = engines as SearchEngineConfig[];
    });

    // 监听搜索引擎更新
    await listen('search-engines-updated', (event: any) => {
      if (event.payload) {
        searchEngines.value = event.payload;
      }
    });
  });

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
