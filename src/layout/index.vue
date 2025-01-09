<template>
  <AppMain />
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';
import { initTheme } from '@/utils/theme';
import { listen } from '@tauri-apps/api/event';

const store = useConfigurationStore();

onMounted(async () => {
  // 初始化配置
  await store.initialize();

  // 初始化主题
  initTheme();

  // 监听主题变化事件
  await listen('theme-changed', (event: any) => {
    const { isDark } = event.payload;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  });
});
</script>

<style scoped></style>
