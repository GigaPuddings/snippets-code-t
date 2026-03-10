<template>
  <AppMain />
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';
import { listen } from '@tauri-apps/api/event';
import { invoke } from '@tauri-apps/api/core';
import { logger } from '@/utils/logger';

const store = useConfigurationStore();

onMounted(async () => {
  // 检查是否已完成首次设置
  try {
    const isSetupCompleted = await invoke<boolean>('is_setup_completed');
    
    // 只有在 setup 完成后才初始化配置
    if (isSetupCompleted) {
      await store.initialize();
    }
  } catch (error) {
    logger.error('检查 setup 状态失败:', error);
  }

  // 监听主题变化事件（用户在通用设置中切换主题）
  await listen('theme-changed', (event: any) => {
    // 同步 store.theme 值，确保跨窗口一致
    if (event.payload?.theme) {
      store.theme = event.payload.theme;
    }
    store.applyTheme();
  });

  // 监听系统主题变化事件（Windows 注册表主题切换）
  // 仅在 auto 模式下同步样式，不修改 store.theme
  await listen('dark-mode-changed', (event: any) => {
    store.syncSystemThemeStyle(event.payload.isDark);
  });
});
</script>

<style scoped></style>
