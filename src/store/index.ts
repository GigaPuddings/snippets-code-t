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
    autoStart: false, // 开机自启
    searchEngines: [
      {
        id: 'google',
        keyword: 'g',
        name: 'google',
        icon: 'https://www.google.com/favicon.ico',
        url: 'https://www.google.com/search?q=%s',
        enabled: true
      }
    ], // 搜索引擎配置
    defaultSearchEngines: [
      {
        id: 'github',
        keyword: 'github',
        name: 'github',
        icon: 'https://www.google.com/s2/favicons?domain=https://github.com',
        url: 'https://github.com/search?q=%s',
        enabled: false
      },
      {
        id: 'npm',
        keyword: 'npm',
        name: 'npm',
        icon: 'https://www.google.com/s2/favicons?domain=https://www.npmjs.com',
        url: 'https://www.npmjs.com/search?q=%s',
        enabled: false
      },
      {
        id: 'gitee',
        keyword: 'gitee',
        name: '码云',
        icon: 'https://www.gitee.com/favicon.ico',
        url: 'https://so.gitee.com/?q={query}',
        enabled: false
      },
      {
        id: 'google',
        keyword: 'g',
        name: 'google',
        icon: 'https://www.google.com/favicon.ico',
        url: 'https://www.google.com/search?q=%s',
        enabled: false
      },
      {
        id: 'bing',
        keyword: 'by',
        name: '必应',
        icon: 'https://www.bing.com/favicon.ico',
        url: 'https://www.bing.com/search?q=%s',
        enabled: false
      },
      {
        id: 'baidu',
        keyword: 'bd',
        name: '百度',
        icon: 'https://www.baidu.com/favicon.ico',
        url: 'https://www.baidu.com/s?wd=%s',
        enabled: false
      }
    ] // 默认搜索引擎配置
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
    },

    // 添加更新搜索引擎的 action
    updateSearchEngines(engines: SearchEngineConfig[]) {
      this.searchEngines = engines;
    }
  },
  persist: {
    pick: ['searchHotkey', 'configHotkey', 'theme', 'searchEngines']
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
