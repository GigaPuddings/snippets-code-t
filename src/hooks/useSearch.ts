import { useConfigurationStore } from '@/store';
import { debounce } from '@/utils';
import { searchContent } from '@/database/search';

export default function useSearch() {
  const store = useConfigurationStore();
  let apps: ContentType[] = [];
  let bookmarks: ContentType[] = [];

  const handleInput = debounce(async (searchValue: string) => {
    console.log('searchValue', searchValue);

    apps = store.apps;
    bookmarks = store.bookmarks;

    // 包含中文搜索、字母大小写匹配
    apps = apps.filter(
      (app: ContentType) =>
        app.title.includes(searchValue) ||
        app.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    bookmarks = bookmarks.filter(
      (bookmark: ContentType) =>
        bookmark.title.includes(searchValue) ||
        bookmark.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        bookmark.content.includes(searchValue) ||
        bookmark.content.toLowerCase().includes(searchValue.toLowerCase())
    );

    const result = searchValue ? await searchContent(searchValue) : [];

    store.data = [...apps, ...bookmarks, ...result];
  }, 500);

  return {
    handleInput
  };
}
