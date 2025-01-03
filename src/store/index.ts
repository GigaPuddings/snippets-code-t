import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';

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
    async initialize() {
      try {
        // 本地已安装应用集合
        this.apps = (await invoke('get_installed_apps')) || [];
        // 浏览器书签集合
        this.bookmarks = (await invoke('get_browser_bookmarks')) || [];
      } catch (error) {
        console.error('初始化数据失败:', error);
      }
    }
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
