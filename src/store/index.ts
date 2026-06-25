import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';
import { logger } from '@/utils/logger';
import { getEditorSettings, updateEditorSettings } from '@/api/appConfig';
import { useHotkeyStore } from './hotkeys';
import { useThemeStore } from './theme';

export const useConfigurationStore = defineStore('configuration', {
  state: (): StoreState => ({
    id: '', // 搜索框的 id
    data: [], // 搜索结果
    contents: [], // 搜索结果
    categories: [], // 分类集合
    editCategoryId: '', // 编辑分类的 id
    categorySort: 'asc', // 分类排序
    // 快捷键 —— 委托给 useHotkeyStore，此处保留以兼容现有组件
    searchHotkey: '',
    configHotkey: '',
    translateHotkey: '',
    selectionTranslateHotkey: '',
    screenshotHotkey: '',
    screenRecorderHotkey: '',
    darkModeHotkey: '',
    wallpaperSwitcherHotkey: '',
    pluginHotkeys: {},
    dbPath: null, // 数据库路径
    dbBackup: 'A', // 数据库备份
    theme: 'auto', // 主题
    systemPrefersDark: false, // 系统是否深色
    language: 'zh-CN', // 界面语言
    autoStart: false, // 开机自启
    autoUpdateCheck: false, // 检查更新
    autoHideOnBlur: true, // 搜索窗口失焦时是否自动隐藏
    editorLineNumbers: true, // 富文本编辑器是否显示行号
    editorLineHeight: 1.6 // 编辑器行距
  }),
  getters: {
    /** 当前实际是否为深色模式（委托给 useThemeStore） */
    effectiveDark(): boolean {
      return useThemeStore().effectiveDark;
    }
  },
  actions: {
    // 初始化配置
    async initialize() {
      // 获取数据库路径
      try {
        this.dbPath = (await invoke('get_db_path')) || '';
      } catch (error) {
        logger.error('获取数据库路径失败:', error);
      }

      // 委托给 useHotkeyStore 初始化快捷键
      const hotkeyStore = useHotkeyStore();
      await hotkeyStore.initialize();
      // 同步到本 state 以兼容直接读取 this.searchHotkey 等的组件
      this.searchHotkey = hotkeyStore.searchHotkey;
      this.configHotkey = hotkeyStore.configHotkey;
      this.translateHotkey = hotkeyStore.translateHotkey;
      this.selectionTranslateHotkey = hotkeyStore.selectionTranslateHotkey;
      this.screenshotHotkey = hotkeyStore.screenshotHotkey;
      this.screenRecorderHotkey = hotkeyStore.screenRecorderHotkey;
      this.darkModeHotkey = hotkeyStore.darkModeHotkey;
      this.wallpaperSwitcherHotkey = hotkeyStore.wallpaperSwitcherHotkey;
      this.pluginHotkeys = hotkeyStore.pluginHotkeys;

      // 委托给 useThemeStore 初始化主题
      const themeStore = useThemeStore();
      this.theme = themeStore.theme;
      this.systemPrefersDark = themeStore.systemPrefersDark;

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

      try {
        const editorSettings = await getEditorSettings();
        this.editorLineNumbers = editorSettings.lineNumbers;
        this.editorLineHeight = editorSettings.lineHeight || 1.6;
      } catch (error) {
        logger.error('获取编辑器显示设置失败:', error);
      }
    },

    async updateEditorLineNumbers(value: boolean) {
      const previous = this.editorLineNumbers;
      this.editorLineNumbers = value;

      try {
        await updateEditorSettings({
          lineNumbers: value,
          lineHeight: this.editorLineHeight
        });
      } catch (error) {
        this.editorLineNumbers = previous;
        logger.error('更新编辑器行号设置失败:', error);
        throw error;
      }
    },

    async updateEditorLineHeight(value: number) {
      const previous = this.editorLineHeight;
      const nextValue = Math.min(2, Math.max(1.2, Number(value) || 1.6));
      this.editorLineHeight = nextValue;

      try {
        await updateEditorSettings({
          lineNumbers: this.editorLineNumbers,
          lineHeight: nextValue
        });
      } catch (error) {
        this.editorLineHeight = previous;
        logger.error('更新编辑器行距设置失败:', error);
        throw error;
      }
    },

    // 更新主题并立即应用（委托给 useThemeStore）
    updateTheme(newTheme: 'auto' | 'dark' | 'light') {
      const themeStore = useThemeStore();
      themeStore.updateTheme(newTheme);
      this.theme = themeStore.theme;
      this.systemPrefersDark = themeStore.systemPrefersDark;
    },

    // 应用主题到DOM（委托给 useThemeStore）
    applyTheme() {
      const themeStore = useThemeStore();
      // 同步当前 theme 到 themeStore
      themeStore.theme = this.theme;
      themeStore.applyTheme();
      this.systemPrefersDark = themeStore.systemPrefersDark;
    },

    // 同步系统主题样式（委托给 useThemeStore）
    syncSystemThemeStyle(isDark: boolean) {
      const themeStore = useThemeStore();
      themeStore.syncSystemThemeStyle(isDark);
      this.theme = themeStore.theme;
      this.systemPrefersDark = themeStore.systemPrefersDark;
    }
  },
  persist: {
    pick: ['theme', 'dbPath']
  }
});

export type StoreType = ReturnType<typeof useConfigurationStore>;

export { useLayoutStore } from './layout';
export { usePluginStore } from './plugins';
export { useHotkeyStore } from './hotkeys';
export { useThemeStore } from './theme';
