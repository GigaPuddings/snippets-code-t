import { searchContent } from '@/database/search';
import { useConfigurationStore } from '@/store';

export function useSearch() {
  const store = useConfigurationStore();
  const searchText = ref('');
  const searchResults = ref<ContentType[]>([]);

  async function updateSearchResults() {
    if (!searchText.value.trim()) return searchResults.value = [];

    const query = searchText.value.toLowerCase();
    const results: ContentType[] = [];

    // 搜索代码片段
    const codeResults = await searchCode(query);
    results.push(...codeResults);

    // 搜索书签
    const bookmarkResults = await searchBookmark(store.bookmarks, query);
    results.push(...bookmarkResults);

    // 搜索应用
    const appResults = await searchApp(store.apps, query);
    results.push(...appResults);

    // 根据匹配度排序
    searchResults.value = results.sort((a, b) => {
      // 标题完全匹配的排在最前面
      if (a.title.toLowerCase() === query) return -1;
      if (b.title.toLowerCase() === query) return 1;

      // 标题开头匹配的排第二
      const aStartsWithTitle = a.title.toLowerCase().startsWith(query);
      const bStartsWithTitle = b.title.toLowerCase().startsWith(query);
      if (aStartsWithTitle && !bStartsWithTitle) return -1;
      if (!aStartsWithTitle && bStartsWithTitle) return 1;

      // 内容匹配的排最后
      const aMatchContent = a.content?.toLowerCase().includes(query);
      const bMatchContent = b.content?.toLowerCase().includes(query);
      if (aMatchContent && !bMatchContent) return -1;
      if (!aMatchContent && bMatchContent) return 1;

      return 0;
    });
  }

  watch(searchText, async () => {
    await updateSearchResults();
  });

  return {
    searchText,
    searchResults
  };
}

// 搜索代码片段
async function searchCode(query: string) {
  const codeResults = await searchContent(query);
  return codeResults;
}

// 搜索书签
async function searchBookmark(store: ContentType[], query: string) {
  const bookmarkResults = store.filter(
    (bookmark: ContentType) =>
      bookmark.title.toLowerCase().includes(query) ||
      bookmark.content.toLowerCase().includes(query)
  );
  return bookmarkResults;
}

// 搜索应用
async function searchApp(store: ContentType[], query: string) {
  const appResults = store.filter((app: ContentType) =>
    app.title.toLowerCase().includes(query)
  );
  return appResults;
}
