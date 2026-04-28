<template>
  <router-view />
</template>

<script setup lang="ts">
import { setupBaseEventListeners, cleanupBaseEventListeners, type BaseEventListeners } from '@/utils/app-init';
import { closeWindowByLabel, shouldCloseWindowOnEscape } from '@/utils/window-shortcuts';
import { logger } from './utils/logger';
import { getCurrentWindow } from '@tauri-apps/api/window';

const eventListeners = ref<BaseEventListeners | null>(null);

function handleGlobalEscape(event: KeyboardEvent) {
  if (event.key !== 'Escape') return;

  const label = getCurrentWindow().label;
  if (!shouldCloseWindowOnEscape(label)) return;

  const target = event.target as HTMLElement | null;
  const isTextInput = !!target && (
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.isContentEditable
  );

  if (isTextInput) {
    event.preventDefault();
    event.stopPropagation();
  }

  event.preventDefault();
  event.stopPropagation();
  closeWindowByLabel(label).catch((error) => {
    logger.error(`[App] Esc 关闭窗口失败 (${label})`, error);
  });
}

onMounted(async () => {
  eventListeners.value = await setupBaseEventListeners();
  window.addEventListener('keydown', handleGlobalEscape, true);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalEscape, true);
  if (eventListeners.value) {
    cleanupBaseEventListeners(eventListeners.value);
  }
});
</script>
