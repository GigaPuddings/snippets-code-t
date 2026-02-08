import { searchFragmentContent } from '@/api/fragment';
import { debounce } from '@/utils';
import { isURL, normalizeURL } from '@/utils/url';
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
    const history = (await invoke('get_search_history')) as SearchHistoryItem[];
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
  }, 300);

  // 处理回车键搜索
  const handleEnterSearch = async () => {
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
  };

  const addSearchHistory = (id: string) => {
    invoke('add_search_history', { id });
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
  const codeResults = await searchFragmentContent(query);
  return codeResults;
}
