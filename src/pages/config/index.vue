<template>
  <div class="config">
    <Transition name="config-startup">
      <div v-if="isStarting" class="config-startup" aria-live="polite">
        <div class="config-startup__card">
          <div class="config-startup__copy">
            <strong>{{ t('settings.loadingRepository') }}</strong>
            <small>{{ t('settings.loadingRepositoryHint') }}</small>
          </div>
          <span class="config-startup__percent">{{ startupProgress }}%</span>
          <div class="config-startup__track">
            <i :style="{ width: `${startupProgress}%` }"></i>
          </div>
        </div>
      </div>
    </Transition>
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

<script lang="ts">
// This module is evaluated once per webview. Config may be unmounted when the
// titlebar switches to a layout-level plugin route, but that is not a new
// repository startup for the current window.
let hasCompletedInitialConfigStartup = false;
</script>

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
const isStarting = ref(!hasCompletedInitialConfigStartup);
const startupProgress = ref(12);

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
  const shouldShowStartupProgress = !hasCompletedInitialConfigStartup;
  const timer = shouldShowStartupProgress
    ? window.setInterval(() => {
      startupProgress.value = Math.min(88, startupProgress.value + 8);
    }, 110)
    : null;
  try {
    await configLifecycle.start();
    hasCompletedInitialConfigStartup = true;
    if (!shouldShowStartupProgress) return;

    startupProgress.value = 100;
    window.setTimeout(() => {
      isStarting.value = false;
    }, 160);
  } catch (error) {
    logger.warn('[Config] startup failed', error);
    isStarting.value = false;
  } finally {
    if (timer !== null) window.clearInterval(timer);
  }
});

// 清理事件监听器
onUnmounted(() => {
  configLifecycle.cleanup();
});
</script>

<style scoped lang="scss">
.config {
  @apply relative z-50 flex h-full min-h-0 w-full justify-start bg-content;
}

.config-startup {
  @apply absolute inset-0 z-[100] flex items-center justify-center;
  background-color: var(--categories-content-bg);

  &__card {
    @apply grid w-[min(25rem,76vw)] grid-cols-[minmax(0,1fr)_auto] items-end gap-x-4 gap-y-2 text-panel;
  }

  &__copy { @apply flex min-w-0 flex-col gap-0.5; }
  &__copy strong { @apply text-sm font-medium; }
  &__copy small { @apply truncate text-xs; color: var(--categories-info-text-color); }
  &__percent { @apply text-xs tabular-nums; color: var(--categories-info-text-color); }
  &__track { @apply col-span-2 h-1 w-full overflow-hidden; background-color: var(--categories-border-color); }

  &__track i {
    @apply block h-full;
    background-color: var(--el-color-primary);
    transition: width 0.18s ease-out;
  }
}

.config-startup-enter-active,
.config-startup-leave-active { transition: opacity 0.18s ease; }
.config-startup-enter-from,
.config-startup-leave-to { opacity: 0; }
</style>
