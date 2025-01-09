<template>
  <router-view />
</template>

<script setup lang="ts">
import { initTheme } from '@/utils/theme';
import { listen } from '@tauri-apps/api/event';
onMounted(async () => {
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
