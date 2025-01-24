import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';
import { emit } from '@tauri-apps/api/event';
import { defaultSearchEngines } from '@/utils/search-engines';

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
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iI0ZGQzEwNyIgZD0iTTQzLjYxMSAyMC4wODNIMjRWMjloMTEuMzAzYy0xLjY0OSA0LjY1Ny02LjA4IDgtMTEuMzAzIDgtNi42MjcgMC0xMi01LjM3My0xMi0xMnM1LjM3My0xMiAxMi0xMmMzLjA1OSAwIDUuODQyIDEuMTU0IDcuOTYxIDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0NiA2LjA1MyAyOS4yNjggNCAyNCA0IDEyLjk1NSA0IDQgMTIuOTU1IDQgMjRzOC45NTUgMjAgMjAgMjAgMjAtOC45NTUgMjAtMjBjMC0xLjM0MS0uMTM4LTIuNjUtLjM4OS0zLjkxN3oiLz48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNNi4zMDYgMTQuNjkxbDYuNTcxIDQuODE5QzE0LjY1NSAxNS4xMDggMTguOTYxIDEyIDI0IDEyYzMuMDU5IDAgNS44NDIgMS4xNTQgNy45NjEgMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2IDYuMDUzIDI5LjI2OCA0IDI0IDQgMTYuMzE4IDQgOS42NTYgOC4zMzcgNi4zMDYgMTQuNjkxeiIvPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0yNCA0NGM1LjE2NiAwIDkuODYtMS45NzcgMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QTExLjkxIDExLjkxIDAgMCAxIDI0IDM1Yy01LjIwMiAwLTkuNjE5LTMuMzE3LTExLjI4My03Ljk0NmwtNi41MjIgNS4wMjVDOS41MDUgMzkuNTU2IDE2LjIyNyA0NCAyNCA0NHoiLz48cGF0aCBmaWxsPSIjMTk3NkQyIiBkPSJNNDMuNjExIDIwLjA4M0gyNFYyOWgxMS4zMDNhMTIuMDQgMTIuMDQgMCAwIDEtNC4wODcgNS41NzFsNi4xOSA1LjIzOEMzNi45NzEgMzkuMjA1IDQ0IDM0IDQ0IDI0YzAtMS4zNDEtLjEzOC0yLjY1LS4zODktMy45MTd6Ii8+PC9zdmc+',
        url: 'https://www.google.com/search?q=%s',
        enabled: true
      }
    ],
    defaultSearchEngines
  }),
  actions: {
    // 初始化配置
    async initialize() {
      console.log('初始化配置');
      try {
        if (this.apps.length === 0 && this.bookmarks.length === 0) {
          this.apps = (await invoke('get_installed_apps')) || []; // 获取本地已安装应用
          this.bookmarks = (await invoke('get_browser_bookmarks')) || []; // 获取浏览器书签
          this.dbPath = (await invoke('get_db_path')) || ''; // 获取数据库路径
          console.log('this.dbPath', this.dbPath);
        }
      } catch (error) {
        console.error('初始化数据失败:', error);
      }
    },

    // 更新搜索引擎配置
    async updateSearchEngines(engines: SearchEngineConfig[]) {
      this.searchEngines = engines;
      // 广播更新事件到所有窗口
      await emit('search-engines-updated', engines);
    }
  },
  persist: {
    pick: ['searchHotkey', 'configHotkey', 'theme', 'searchEngines']
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
