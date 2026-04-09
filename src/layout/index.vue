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

  // 监听主题变化事件（仅处理用户主动切换，避免与系统/后端事件形成广播风暴）
  await listen('theme-changed', (event: any) => {
    const source = event.payload?.source;
    if (source !== 'user-change') {
      return;
    }

    logger.debug(`[主题][窗口:layout] 收到用户主题切换事件：${JSON.stringify(event.payload)}`);

    // 同步 store.theme 值，确保跨窗口一致
    if (event.payload?.theme) {
      store.theme = event.payload.theme;
    }

    // 用户主动切换时，优先应用 payload.isDark（auto + 当前系统态）
    if (typeof event.payload?.isDark === 'boolean' && store.theme === 'auto') {
      store.syncSystemThemeStyle(event.payload.isDark);
      return;
    }

    store.applyTheme();
  });

  // 监听前端主题变化事件（由 theme.ts 全局监听器触发）
  // 仅在 auto 模式下同步样式，不修改 store.theme
  // await listen('theme-changed', (event: any) => {
  //   console.log('[Layout] theme-changed received:', JSON.stringify(event.payload));
  //   if (store.theme === 'auto') {
  //     store.applyTheme();
  //   }
  // });
});
</script>

<style scoped></style>
