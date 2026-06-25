import { defineStore } from 'pinia';
import { logger } from '@/utils/logger';

export interface ThemeState {
  theme: 'light' | 'dark' | 'auto';
  /** 系统偏好是否为深色（仅 theme===auto 时有效） */
  systemPrefersDark: boolean;
}

/**
 * 主题领域 Store
 *
 * 从 useConfigurationStore 中拆分，专注于主题状态与 DOM 同步逻辑。
 * useConfigurationStore 保持向后兼容的 theme / effectiveDark / applyTheme 等接口，
 * 内部委托给本 store；新代码应直接使用 useThemeStore。
 */
export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    theme: 'auto',
    systemPrefersDark: false
  }),
  getters: {
    /** 当前实际是否为深色模式 */
    effectiveDark(): boolean {
      return this.theme === 'dark' || (this.theme === 'auto' && this.systemPrefersDark);
    }
  },
  actions: {
    /** 更新主题并立即应用 */
    updateTheme(newTheme: 'auto' | 'dark' | 'light') {
      logger.debug(`[主题][ThemeStore] 更新主题：newTheme=${newTheme}`);
      this.theme = newTheme;
      this.applyTheme();
    },

    /** 应用主题到 DOM，并同步 systemPrefersDark */
    applyTheme() {
      const root = document.documentElement;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      logger.debug(
        `[主题][ThemeStore] 应用主题到 DOM：theme=${this.theme}, prefersDark=${prefersDark}`
      );
      if (this.theme === 'auto') {
        this.systemPrefersDark = prefersDark;
      }
      const isDark = this.theme === 'dark' || (this.theme === 'auto' && prefersDark);

      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    },

    /**
     * 同步系统主题样式（仅在 auto 模式下生效，不修改 store.theme）
     * 用于响应操作系统主题变化
     */
    syncSystemThemeStyle(isDark: boolean) {
      logger.debug(
        `[主题][ThemeStore] 同步系统主题样式：isDark=${isDark}, store.theme=${this.theme}`
      );

      // 尝试从 localStorage 读取最新 theme（兼容旧版 useConfigurationStore 的 persist）
      let currentTheme = this.theme;
      try {
        const stored = localStorage.getItem('configuration');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.theme) {
            currentTheme = parsed.theme;
            this.theme = currentTheme;
          }
        }
      } catch (e) {
        logger.error('从 localStorage 同步主题失败:', e);
      }

      if (currentTheme === 'auto') {
        this.systemPrefersDark = isDark;
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
    pick: ['theme']
  }
});
