<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { setLocale, type LocaleType } from '@/i18n';

let unlistenLanguageChange: UnlistenFn | null = null;

onMounted(async () => {
  // 监听语言变更事件，同步所有窗口的语言设置
  unlistenLanguageChange = await listen<{ language: LocaleType }>('language-changed', (event) => {
    setLocale(event.payload.language);
  });
});

onUnmounted(() => {
  if (unlistenLanguageChange) {
    unlistenLanguageChange();
  }
});
</script>
