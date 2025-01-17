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
