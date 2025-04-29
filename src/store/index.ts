import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';
import modal from '@/utils/modal';
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
    translateHotkey: '', // 翻译快捷键
    selectionTranslateHotkey: '', // 划词翻译快捷键
    dbPath: null, // 数据库路径
    dbBackup: 'A', // 数据库备份
    theme: 'auto', // 主题
    autoStart: false, // 开机自启
    autoUpdateCheck: false, // 检查更新
    autoHideOnBlur: true // 搜索窗口失焦时是否自动隐藏
  }),
  actions: {
    // 初始化配置
    async initialize() {
      console.log('初始化配置');

      // 获取数据库路径
      try {
        // if (typeof this.dbPath !== 'string') {
        this.dbPath = (await invoke('get_db_path')) || '';
        console.log('this.dbPath', this.dbPath);
        // }
      } catch (error) {
        console.error('获取数据库路径失败:', error);
        modal.msg('获取数据库路径失败', 'error');
      }

      // 获取快捷键配置
      try {
        const [
          searchHotkey,
          configHotkey,
          translateHotkey,
          selectionTranslateHotkey
        ]: [string, string, string, string] = await invoke('get_shortcuts');
        this.searchHotkey = searchHotkey;
        this.configHotkey = configHotkey;
        this.translateHotkey = translateHotkey;
        this.selectionTranslateHotkey = selectionTranslateHotkey || '';

        // 如果没有获取到划词翻译快捷键，可能是旧版本，尝试单独获取
        if (!this.selectionTranslateHotkey) {
          try {
            this.selectionTranslateHotkey = await invoke(
              'get_selection_translate_shortcut'
            );
          } catch (e) {
            console.error('获取划词翻译快捷键失败，可能尚未设置');
            this.selectionTranslateHotkey = '';
          }
        }
      } catch (error) {
        console.error('获取快捷键配置失败:', error);
        modal.msg('获取快捷键配置失败', 'error');
      }

      // 获取自动检查更新设置
      try {
        this.autoUpdateCheck = await invoke('get_auto_update_check');
      } catch (error) {
        console.error('获取自动检查失败:', error);
        modal.msg('获取自动检查失败', 'error');
      }

      // 获取自动失焦隐藏设置
      try {
        this.autoHideOnBlur = await invoke('get_auto_hide_on_blur');
      } catch (error) {
        console.error('获取自动失焦隐藏设置:', error);
        modal.msg('获取自动失焦隐藏设置失败', 'error');
      }
    }
  },
  persist: {
    pick: ['theme', 'dbPath']
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
