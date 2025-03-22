import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';

export const useConfigurationStore = defineStore('configuration', {
  state: (): StoreState => ({
    id: '', // 搜索框的 id
    data: [], // 搜索结果
    contents: [], // 搜索结果
    categories: [], // 分类集合
    editCategoryId: '', // 编辑分类的 id
    categorySort: 'asc', // 分类排序
    searchHotkey: '', // 搜索快捷键
    configHotkey: '', // 配置快捷键
    dbPath: null, // 数据库路径
    dbBackup: 'A', // 数据库备份
    theme: 'auto', // 主题
    autoStart: false // 开机自启
  }),
  actions: {
    // 初始化配置
    async initialize() {
      console.log('初始化配置');
      try {
        if (typeof this.dbPath !== 'string') {
          this.dbPath = (await invoke('get_db_path')) || ''; // 获取数据库路径
          console.log('this.dbPath', this.dbPath);
        }
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
    }
  },
  persist: {
    pick: ['theme', 'dbPath']
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
