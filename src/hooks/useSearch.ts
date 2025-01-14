import { searchContent } from '@/database/search';
import { useConfigurationStore } from '@/store';
import { calculateSimilarity } from '@/utils';
import { debounce } from '@/utils';

export function useSearch() {
  const store = useConfigurationStore();
  const searchText = ref('');
  const searchResults = ref<ContentType[]>([]);

  const debouncedSearch = debounce(async () => {
    if (!searchText.value.trim()) return (searchResults.value = []);

    const query = searchText.value.toLowerCase();
    const results: ContentType[] = [];

    // 搜索代码片段
    const codeResults = await searchCode(query);
    results.push(...codeResults);

    // 搜索应用
    const appResults = await searchApp(store.apps, query);
    results.push(...appResults);

    // 搜索书签
    const bookmarkResults = await searchBookmark(store.bookmarks, query);
    results.push(...bookmarkResults.slice(0, 10));

    // 根据匹配度排序
    searchResults.value = results;
  }, 300);

  watch(searchText, async () => {
    await debouncedSearch();
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
  const bookmarkResults = store
    .map((item) => {
      // 计算相似度分数
      const titleScore = calculateSimilarity(item.title.toLowerCase(), query);
      const contentScore = item.content
        ? calculateSimilarity(item.content.toLowerCase(), query)
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
      calculateSimilarity(app.title.toLowerCase(), query) > 0.5
  );
  return appResults;
}
