<template>
  <div class="config">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <component
      v-for="hostComponent in configHostComponents"
      :key="`${hostComponent.pluginId}:${hostComponent.id}`"
      :is="hostComponent.component"
      :config-host-context="configHostContext"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { logger } from '@/utils/logger';
import modal from '@/utils/modal';
import { usePluginStore } from '@/store';
import { pluginHostComponents } from '@/plugins/host-components';
import { useConfigNavigationEvents } from './composables/useConfigNavigationEvents';
import { useConfigStartup } from './composables/useConfigStartup';
import { useConfigLifecycle } from './composables/useConfigLifecycle';

const { t } = useI18n();
const pluginStore = usePluginStore();

defineOptions({
  name: 'Config'
});

const router = useRouter();
const configHostComponents = computed(() => {
  pluginStore.runtimeRevision;
  return pluginHostComponents.filter((component) => component.target === 'config');
});
const configHostContext = reactive<{ shouldInit: boolean | null }>({
  shouldInit: null
});
const configNavigationEvents = useConfigNavigationEvents({
  router,
  t,
  modalMsg: modal.msg.bind(modal)
});
const configStartup = useConfigStartup({
  initializePlugins: () => pluginStore.initialize(),
  onReadyNavigationCheck: configNavigationEvents.checkPendingNavigationRequests,
  onShouldInit: (shouldInit) => {
    configHostContext.shouldInit = shouldInit;
  },
  logger
});
const configLifecycle = useConfigLifecycle({
  startup: configStartup,
  navigationEvents: configNavigationEvents,
  logger
});

// 通知后端前端已准备完成
onMounted(async () => {
  await configLifecycle.start();
});

// 清理事件监听器
onUnmounted(() => {
  configLifecycle.cleanup();
});
</script>

<style scoped lang="scss">
.config {
  @apply relative z-50 bg-content h-full flex justify-start;
}
</style>
