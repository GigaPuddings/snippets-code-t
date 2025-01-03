import { defineStore } from 'pinia';
import { uuid } from '@/utils';

export const useConfigurationStore = defineStore('configuration', {
  state: () => ({
    id: '' as string | number,
    data: [] as ContentType[],
    apps: [] as ContentType[],
    bookmarks: [] as ContentType[],
    contents: [] as ContentType[],
    categories: [] as CategoryType[],
    editCategoryId: '',
    categorySort: 'asc' as const
  }),
  actions: {
    // 转换书签数据
    transformBookmarks(bookmarks: BookmarkInfo[]) {
      this.bookmarks = bookmarks.map((bookmark) => ({
        id: uuid(),
        title: bookmark.title,
        content: bookmark.url,
        type: 'bookmark'
      }));
    }
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
