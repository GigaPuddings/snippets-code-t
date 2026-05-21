<template>
  <div class="config">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    
    <GitSyncRuntimeMount
      :runtime="gitSyncRuntime"
      :should-init="gitSyncRuntimeShouldInit"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { logger } from '@/utils/logger';
import modal from '@/utils/modal';
import { usePluginStore } from '@/store';
import GitSyncRuntimeMount from '@/plugins/git-sync/components/GitSyncRuntimeMount.vue';
import { useGitSyncRuntimeFacade } from '@/plugins/git-sync/useGitSyncRuntimeFacade';
import { useConfigNavigationEvents } from './composables/useConfigNavigationEvents';
import { useConfigStartup } from './composables/useConfigStartup';
import { useConfigLifecycle } from './composables/useConfigLifecycle';

const { t } = useI18n();
const pluginStore = usePluginStore();

defineOptions({
  name: 'Config'
});

const router = useRouter();

const gitSyncRuntime = useGitSyncRuntimeFacade({
  t,
  modalMsg: modal.msg.bind(modal),
  routeToGitSettings: () => router.push('/config/category/settings?tab=gitSync'),
  isPluginEnabled: () => pluginStore.isEnabled('git-sync'),
  logger
});
const gitSyncRuntimeShouldInit = ref<boolean | null>(null);
const configNavigationEvents = useConfigNavigationEvents({
  router,
  t,
  modalMsg: modal.msg.bind(modal)
});
const configStartup = useConfigStartup({
  initializePlugins: () => pluginStore.initialize(),
  onReadyNavigationCheck: configNavigationEvents.checkPendingNavigationRequests,
  onShouldInit: (shouldInit) => {
    gitSyncRuntimeShouldInit.value = shouldInit;
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
