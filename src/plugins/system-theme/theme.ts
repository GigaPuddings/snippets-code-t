import { useConfigurationStore } from '@/store';
import { emit, listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { logger } from '@/utils/logger';

let themeListenerInitialized = false;
let unlistenDarkModeChanged: UnlistenFn | null = null;
let mediaQueryCleanup: (() => void) | null = null;
let focusCleanup: (() => void) | null = null;
let visibilityCleanup: (() => void) | null = null;
let lastBackendThemeAt = 0;
let lastBackendIsDark: boolean | null = null;
let windowLabel = 'unknown';

// 托盘/模式切换后的短暂稳定期：忽略与目标态相反的瞬时事件，避免闪烁
let themeSwitchGuardUntil = 0;
let guardedTargetIsDark: boolean | null = null;
const THEME_SWITCH_GUARD_MS = 1500;

const withWindowTag = (message: string) => `[主题][窗口:${windowLabel}] ${message}`;

// 仅用于“用户主动改设置”时跨窗口同步；
// 系统变化/后端变化由各窗口本地监听 dark-mode-changed + matchMedia 处理，避免事件风暴。
export const broadcastThemeChanged = async (isDark: boolean, theme: string, source: string) => {
  try {
    await emit('theme-changed', { isDark, theme, source });
    logger.debug(withWindowTag(`已广播 theme-changed：source=${source}, isDark=${isDark}, theme=${theme}`));
  } catch (error) {
    logger.error(withWindowTag('发送 theme-changed 事件失败'), error);
  }
};

export const initTheme = async () => {
  const store = useConfigurationStore();

  try {
    windowLabel = getCurrentWindow().label || 'unknown';
  } catch {
    windowLabel = 'unknown';
  }

  const syncThemeFromStorage = () => {
    try {
      const stored = localStorage.getItem('configuration');
      if (!stored) return;
      const parsed = JSON.parse(stored);
      if (parsed?.theme === 'light' || parsed?.theme === 'dark' || parsed?.theme === 'auto') {
        if (store.theme !== parsed.theme) {
          store.theme = parsed.theme;
        }
      }
    } catch (error) {
      logger.error(withWindowTag('同步本地主题配置失败'), error);
    }
  };

  syncThemeFromStorage();
  // 每次调用都先应用一次当前主题，保证 UI 及时同步
  store.applyTheme();

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const inGuardWindow = () => Date.now() < themeSwitchGuardUntil;

  const handleMediaChange = (e: MediaQueryListEvent) => {
    if (store.theme !== 'auto') return;

    const now = Date.now();
    if (lastBackendIsDark === e.matches && now - lastBackendThemeAt < 1500) {
      logger.debug(withWindowTag(`已忽略重复 matchMedia 主题事件：isDark=${e.matches}`));
      return;
    }

    if (inGuardWindow() && guardedTargetIsDark !== null && e.matches !== guardedTargetIsDark) {
      logger.debug(withWindowTag(`稳定期内忽略反向 matchMedia 事件：isDark=${e.matches}, target=${guardedTargetIsDark}`));
      return;
    }

    logger.debug(withWindowTag(`检测到系统主题变化（matchMedia）：isDark=${e.matches}`));
    store.syncSystemThemeStyle(e.matches);
  };

  const handleWindowRefresh = () => {
    syncThemeFromStorage();
    store.applyTheme();
  };

  if (themeListenerInitialized) {
    logger.debug(withWindowTag('全局监听器已初始化，本次仅执行主题应用'));
    handleWindowRefresh();
    return;
  }

  themeListenerInitialized = true;
  logger.debug(withWindowTag('开始初始化全局主题监听器'));

  mediaQuery.addEventListener('change', handleMediaChange);
  mediaQueryCleanup = () => mediaQuery.removeEventListener('change', handleMediaChange);

  window.addEventListener('focus', handleWindowRefresh);
  window.addEventListener('visibilitychange', handleWindowRefresh);
  focusCleanup = () => window.removeEventListener('focus', handleWindowRefresh);
  visibilityCleanup = () => window.removeEventListener('visibilitychange', handleWindowRefresh);

  unlistenDarkModeChanged = await listen<{ isDark: boolean; reason?: string }>('dark-mode-changed', (event) => {
    const { isDark, reason } = event.payload;
    lastBackendThemeAt = Date.now();
    lastBackendIsDark = isDark;

    logger.debug(withWindowTag(`收到后端主题事件 dark-mode-changed：isDark=${isDark}, reason=${reason || 'unknown'}`));

    if (reason === 'tray_menu' || reason === 'auto_switch') {
      guardedTargetIsDark = isDark;
      themeSwitchGuardUntil = Date.now() + THEME_SWITCH_GUARD_MS;
      logger.debug(withWindowTag(`开启主题稳定期：target=${isDark}, duration=${THEME_SWITCH_GUARD_MS}ms`));
    }

    store.syncSystemThemeStyle(isDark);
  });
};

// 仅供测试或热更新场景使用
export const disposeThemeListeners = () => {
  unlistenDarkModeChanged?.();
  unlistenDarkModeChanged = null;
  mediaQueryCleanup?.();
  mediaQueryCleanup = null;
  focusCleanup?.();
  focusCleanup = null;
  visibilityCleanup?.();
  visibilityCleanup = null;
  themeListenerInitialized = false;
  logger.debug('[主题] 已释放全局主题监听器');
};
