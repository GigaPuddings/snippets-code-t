<template>
  <el-config-provider :locale="elementLocale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
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

const eventListeners = ref<BaseEventListeners | null>(null);
const { locale } = useI18n();
const elementLocale = computed(() => (locale.value === 'zh-CN' ? zhCn : en));

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
  eventListeners.value = await setupBaseEventListeners();
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalEscape);
  if (eventListeners.value) {
    cleanupBaseEventListeners(eventListeners.value);
  }
});
</script>
