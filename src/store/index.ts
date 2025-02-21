import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';
import { emit } from '@tauri-apps/api/event';
// import { defaultSearchEngines } from '@/utils/search-engines';

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
    dbBackup: 'A', // 数据库备份
    theme: 'auto', // 主题
    autoStart: false, // 开机自启
    searchEngines: [],
    defaultSearchEngines: []
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

        // 获取搜索引擎配置
        this.searchEngines = await invoke('get_search_engines');
        this.defaultSearchEngines = await invoke('get_default_engines');
      } catch (error) {
        console.error('初始化数据失败:', error);
      }

      try {
        // 获取快捷键配置
        const [searchHotkey, configHotkey] = (await invoke(
          'get_shortcuts'
        )) as [string, string];
        this.searchHotkey = searchHotkey;
        this.configHotkey = configHotkey;
      } catch (error) {
        console.error('获取快捷键配置失败:', error);
        ElMessage.error('获取快捷键配置失败');
      }
    },

    // 更新搜索引擎配置
    async updateSearchEngines(engines: SearchEngineConfig[]) {
      try {
        await invoke('update_search_engines', { engines });
        // 通知所有窗口更新搜索引擎配置
        this.searchEngines = engines;
        await emit('search-engines-updated', engines);
      } catch (error) {
        console.error('更新搜索引擎配置失败:', error);
        ElMessage.error('更新搜索引擎配置失败');
      }
    }
  },
  persist: {
    pick: ['theme', 'dbPath']
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
