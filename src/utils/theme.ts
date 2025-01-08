import { useConfigurationStore } from '@/store';
import { emit } from '@tauri-apps/api/event';

export const initTheme = async () => {
  const store = useConfigurationStore();
  const root = document.documentElement;

  const theme = store.theme;

  const isDark =
    theme === 'dark' ||
    (theme === 'auto' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

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
      if (e.matches) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      // 通知其他窗口更新主题
      try {
        await emit('theme-changed', { isDark: e.matches });
      } catch (error) {
        console.error('主题事件发送失败:', error);
      }
    }
  });
};
