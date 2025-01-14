import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';

export const useConfigurationStore = defineStore('configuration', {
  state: (): StoreState => ({
    id: '', // 搜索框的 id
    data: [], // 搜索结果
    apps: [], // 本地已安装应用集合
    bookmarks: [], // 浏览器书签集合
    contents: [], // 搜索结果
    categories: [], // 分类集合
    editCategoryId: '', // 编辑分类的 id
    categorySort: 'asc', // 分类排序
    searchHotkey: '', // 搜索快捷键
    configHotkey: '', // 配置快捷键
    dbPath: '', // 数据库路径
    dbBackup: '', // 数据库备份
    theme: 'auto', // 主题
    autoStart: false // 开机自启
  }),
  actions: {
    async initialize() {
      try {
        if (this.apps.length === 0 && this.bookmarks.length === 0) {
          // 本地已安装应用集合
          this.apps = (await invoke('get_installed_apps')) || [];
          // 浏览器书签集合
          this.bookmarks = (await invoke('get_browser_bookmarks')) || [];
          // 获取数据库路径
          this.dbPath = (await invoke('get_db_path')) || '';
        }
      } catch (error) {
        console.error('初始化数据失败:', error);
      }
    }
  },
  persist: {
    pick: ['searchHotkey', 'configHotkey', 'theme']
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
