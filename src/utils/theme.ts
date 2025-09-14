import { useConfigurationStore } from '@/store';
import { emit } from '@tauri-apps/api/event';

export const initTheme = async () => {
  const store = useConfigurationStore();

  // 应用当前主题
  store.applyTheme();

  const isDark =
    store.theme === 'dark' ||
    (store.theme === 'auto' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  // 通知其他窗口更新主题
  try {
    await emit('theme-changed', { isDark });
  } catch (error) {
    console.error('主题事件发送失败:', error);
  }

  // 监听系统主题变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', async (e) => {
    if (store.theme === 'auto') {
      store.applyTheme();
      // 通知其他窗口更新主题
      try {
        await emit('theme-changed', { isDark: e.matches });
      } catch (error) {
        console.error('主题事件发送失败:', error);
      }
    }
  });
};
