<template>
  <AppMain />
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';
import { listen } from '@tauri-apps/api/event';
const store = useConfigurationStore();

onMounted(async () => {
  // 初始化配置
  await store.initialize();

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
