import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';

export const useConfigurationStore = defineStore('configuration', {
  state: (): StoreState => ({
    id: '',
    data: [],
    apps: [],
    bookmarks: [],
    contents: [],
    categories: [],
    editCategoryId: '',
    categorySort: 'asc',
    searchHotkey: 'Alt+M',
    configHotkey: 'Alt+P'
  }),
  actions: {
    async initialize() {
      try {
        if (this.apps.length === 0 && this.bookmarks.length === 0) {
          // 本地已安装应用集合
          this.apps = (await invoke('get_installed_apps')) || [];
          // 浏览器书签集合
          this.bookmarks = (await invoke('get_browser_bookmarks')) || [];
        }
      } catch (error) {
        console.error('初始化数据失败:', error);
      }
    }
  },
  persist: {
    pick: ['searchHotkey', 'configHotkey']
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
