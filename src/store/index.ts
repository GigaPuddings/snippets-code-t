import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';
import { logger } from '@/utils/logger';
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
    screenshotHotkey: '', // 截图快捷键
    darkModeHotkey: '', // Auto Dark Mode快捷键
    dbPath: null, // 数据库路径
    dbBackup: 'A', // 数据库备份
    theme: 'auto', // 主题
    language: 'zh-CN', // 界面语言
    autoStart: false, // 开机自启
    autoUpdateCheck: false, // 检查更新
    autoHideOnBlur: true // 搜索窗口失焦时是否自动隐藏
  }),
  actions: {
    // 初始化配置
    async initialize() {
      // 获取数据库路径
      try {
        this.dbPath = (await invoke('get_db_path')) || '';
      } catch (error) {
        logger.error('获取数据库路径失败:', error);
      }

      // 获取快捷键配置
      try {
        const [
          searchHotkey,
          configHotkey,
          translateHotkey,
          selectionTranslateHotkey,
          screenshotHotkey,
          darkModeHotkey
        ]: [string, string, string, string, string, string] = await invoke('get_shortcuts');
        this.searchHotkey = searchHotkey;
        this.configHotkey = configHotkey;
        this.translateHotkey = translateHotkey;
        this.selectionTranslateHotkey = selectionTranslateHotkey || '';
        this.screenshotHotkey = screenshotHotkey || '';
        this.darkModeHotkey = darkModeHotkey || '';

        // 如果没有获取到划词翻译快捷键，可能是旧版本，尝试单独获取
        if (!this.selectionTranslateHotkey) {
          try {
            this.selectionTranslateHotkey = await invoke(
              'get_selection_translate_shortcut'
            );
          } catch (e) {
            logger.error('获取划词翻译快捷键失败，可能尚未设置');
            this.selectionTranslateHotkey = '';
          }
        }
      } catch (error) {
        logger.error('获取快捷键配置失败:', error);
      }

      // 获取自动检查更新设置
      try {
        this.autoUpdateCheck = await invoke('get_auto_update_check');
      } catch (error) {
        logger.error('获取自动检查失败:', error);
      }

      // 获取自动失焦隐藏设置
      try {
        this.autoHideOnBlur = await invoke('get_auto_hide_on_blur');
      } catch (error) {
        logger.error('获取自动失焦隐藏设置:', error);
      }

      // 从后端获取语言设置（现在存储在数据库中）
      try {
        const language = await invoke<string>('get_language');
        if (language && (language === 'zh-CN' || language === 'en-US')) {
          this.language = language;
        }
      } catch (error) {
        logger.error('获取语言设置失败:', error);
      }
    },

    // 更新主题并立即应用
    updateTheme(newTheme: 'auto' | 'dark' | 'light') {
      this.theme = newTheme;
      this.applyTheme();
    },

    // 应用主题到DOM
    applyTheme() {
      const root = document.documentElement;
      const isDark = 
        this.theme === 'dark' || 
        (this.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    },

    // 同步系统主题样式（仅在 auto 模式下生效，不修改 store.theme）
    // 用于响应 Windows 系统主题变化
    syncSystemThemeStyle(isDark: boolean) {
      // 从 localStorage 获取最新的 theme 值，确保跨窗口同步
      // 因为不同窗口的 store 实例不会自动同步
      let currentTheme = this.theme;
      try {
        const stored = localStorage.getItem('configuration');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.theme) {
            currentTheme = parsed.theme;
            // 同步到当前 store 实例
            this.theme = currentTheme;
          }
        }
      } catch (e) {
        // 解析失败时使用当前 store 值
      }

      if (currentTheme === 'auto') {
        const root = document.documentElement;
        if (isDark) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      }
    }
  },
  persist: {
    pick: ['theme', 'dbPath']
  }
});

// 导出类型以便在其他地方使用
export type StoreType = ReturnType<typeof useConfigurationStore>;
