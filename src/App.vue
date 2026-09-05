<template>
  <router-view />
</template>

<script setup lang="ts">
import {
  setupBaseEventListeners,
  cleanupBaseEventListeners,
  type BaseEventListeners
} from '@/utils/app-init';
import {
  closeWindowByLabel,
  shouldCloseWindowOnEscape
} from '@/utils/window-shortcuts';
import { logger } from './utils/logger';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { emit } from '@tauri-apps/api/event';

const eventListeners = ref<BaseEventListeners | null>(null);

function handleGlobalEscape(event: KeyboardEvent): void {
  if (event.key !== 'Escape') return;

  const label = getCurrentWindow().label;
  if (!shouldCloseWindowOnEscape(label)) return;

  const target = event.target as HTMLElement | null;
  const isTextInput =
    !!target &&
    (target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable);

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
  window.addEventListener('keydown', handleGlobalEscape);
  if (getCurrentWindow().label === 'config') {
    try {
      await emit('config_ready');
    } catch (error) {
      logger.error('[App] Failed to report config window readiness', error);
    }
  }
  eventListeners.value = await setupBaseEventListeners();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalEscape);
  if (eventListeners.value) {
    cleanupBaseEventListeners(eventListeners.value);
  }
});
</script>
