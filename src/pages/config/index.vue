<template>
  <div class="config">
    <router-view v-slot="{ Component, route: slotRoute }">
      <template v-if="Component">
        <keep-alive>
          <component
            v-if="shouldKeepAliveConfigChild(slotRoute)"
            :is="Component"
            :key="getConfigChildKey(slotRoute)"
          />
        </keep-alive>
        <component
          v-if="!shouldKeepAliveConfigChild(slotRoute)"
          :is="Component"
          :key="getConfigChildKey(slotRoute)"
        />
      </template>
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
import type { RouteLocationNormalizedLoaded, RouteRecordNormalized } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { logger } from '@/utils/logger';
import modal from '@/utils/modal';
import { usePluginStore } from '@/store';
import { pluginHostComponents, type ConfigHostContext } from '@/plugins/host-components';
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
const getPluginRouteId = (currentRoute: RouteLocationNormalizedLoaded) =>
  currentRoute.matched
    .map((record) => record.meta.pluginId)
    .find((pluginId): pluginId is string => typeof pluginId === 'string');

const getConfigChildRecord = (
  currentRoute: RouteLocationNormalizedLoaded
): RouteRecordNormalized | null => {
  const configRecordIndex = currentRoute.matched.findIndex(
    (record) => record.name === 'Config'
  );
  if (configRecordIndex < 0) {
    return currentRoute.matched[0] ?? null;
  }

  return currentRoute.matched[configRecordIndex + 1] ?? null;
};

const shouldKeepAliveConfigChild = (currentRoute: RouteLocationNormalizedLoaded) =>
  Boolean(getConfigChildRecord(currentRoute)?.meta.keepAlive)
  && !getPluginRouteId(currentRoute);

const getConfigChildKey = (currentRoute: RouteLocationNormalizedLoaded) => {
  const pluginId = getPluginRouteId(currentRoute);
  if (pluginId) {
    return `${currentRoute.fullPath}:${pluginId}:${pluginStore.runtimeRevision}`;
  }

  const record = getConfigChildRecord(currentRoute);
  return String(record?.name ?? record?.path ?? currentRoute.fullPath);
};
const configHostContext = reactive<ConfigHostContext>({
  shouldInit: null,
  isPluginEnabled: (pluginId) => pluginStore.isEnabled(pluginId),
  navigateTo: (path) => router.push(path)
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
