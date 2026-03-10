<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { setupBaseEventListeners, cleanupBaseEventListeners, type BaseEventListeners } from '@/utils/app-init';
import { logger } from './utils/logger';

const eventListeners = ref<BaseEventListeners | null>(null);

onMounted(async () => {
  logger.info('[App] 🎬 App 组件已挂载，设置基础事件监听器');
  // 只设置基础事件监听器（语言变更）
  eventListeners.value = await setupBaseEventListeners();
  logger.info('[App] ✅ 基础事件监听器设置完成');
});

onUnmounted(() => {
  logger.info('[App] 🛑 App 组件卸载，清理事件监听器');
  if (eventListeners.value) {
    cleanupBaseEventListeners(eventListeners.value);
  }
});
</script>
