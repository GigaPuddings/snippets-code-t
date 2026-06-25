import { defineStore } from 'pinia';
import { invoke } from '@tauri-apps/api/core';
import { logger } from '@/utils/logger';

export interface HotkeyState {
  searchHotkey: string;
  configHotkey: string;
  translateHotkey: string;
  selectionTranslateHotkey: string;
  screenshotHotkey: string;
  screenRecorderHotkey: string;
  darkModeHotkey: string;
  wallpaperSwitcherHotkey: string;
  pluginHotkeys: Record<string, string>;
}

/**
 * 快捷键领域 Store
 *
 * 从 useConfigurationStore 中拆分，专注于快捷键的读取与存储。
 * useConfigurationStore.initialize() 内部会调用 useHotkeyStore.initialize()，
 * 保证向后兼容；新代码应直接使用 useHotkeyStore。
 */
export const useHotkeyStore = defineStore('hotkeys', {
  state: (): HotkeyState => ({
    searchHotkey: '',
    configHotkey: '',
    translateHotkey: '',
    selectionTranslateHotkey: '',
    screenshotHotkey: '',
    screenRecorderHotkey: '',
    darkModeHotkey: '',
    wallpaperSwitcherHotkey: '',
    pluginHotkeys: {}
  }),
  actions: {
    /** 从后端拉取快捷键配置并填充 state */
    async initialize() {
      try {
        const hotkeyMap = await invoke<Record<string, string>>('get_hotkey_config_map');
        this.pluginHotkeys = hotkeyMap;
        this.searchHotkey = hotkeyMap.search || '';
        this.configHotkey = hotkeyMap.config || '';
        this.translateHotkey = hotkeyMap.translate || '';
        this.selectionTranslateHotkey = hotkeyMap.selection_translate || '';
        this.screenshotHotkey = hotkeyMap.screenshot || '';
        this.screenRecorderHotkey = hotkeyMap.screen_recorder || '';
        this.darkModeHotkey = hotkeyMap.dark_mode || '';
        this.wallpaperSwitcherHotkey = hotkeyMap.wallpaper_switcher || '';
      } catch (error) {
        logger.error('获取快捷键配置失败:', error);
      }
    },

    /** 更新单个快捷键字段并同步 pluginHotkeys */
    setHotkey(key: string, value: string) {
      switch (key) {
        case 'search':
          this.searchHotkey = value;
          break;
        case 'config':
          this.configHotkey = value;
          break;
        case 'translate':
          this.translateHotkey = value;
          break;
        case 'selection_translate':
          this.selectionTranslateHotkey = value;
          break;
        case 'screenshot':
          this.screenshotHotkey = value;
          break;
        case 'screen_recorder':
          this.screenRecorderHotkey = value;
          break;
        case 'dark_mode':
          this.darkModeHotkey = value;
          break;
        case 'wallpaper_switcher':
          this.wallpaperSwitcherHotkey = value;
          break;
        default:
          break;
      }
      this.pluginHotkeys = { ...this.pluginHotkeys, [key]: value };
    }
  }
});
