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
import { getCurrentWindow } from '@tauri-apps/api/window';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { logger } from '@/utils/logger';
import { initCleanupCache, checkShouldInitialize } from '@/utils/app-init';
import modal from '@/utils/modal';
import { usePluginStore } from '@/store';
import GitSyncRuntimeMount from '@/plugins/git-sync/components/GitSyncRuntimeMount.vue';
import { useGitSyncRuntimeFacade } from '@/plugins/git-sync/useGitSyncRuntimeFacade';
import { useConfigNavigationEvents } from './composables/useConfigNavigationEvents';

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

// 通知后端前端已准备完成
onMounted(async () => {
  const initStart = performance.now();
  logger.info('[Config] ========== Config 页面初始化开始 ==========', {
    ts: Date.now()
  });

  nextTick(() => {
    logger.info('[Config] emit config_ready after first render', {
      initCostMs: Math.round(performance.now() - initStart),
      ts: Date.now()
    });
    getCurrentWindow().emit('config_ready');
    configNavigationEvents.checkPendingNavigationRequests();
  });

  await pluginStore.initialize();

  // 全局初始化防抖与缓存清理不属于 Git 插件本身。
  const shouldInit = await checkShouldInitialize();
  if (shouldInit) {
    await initCleanupCache();
  }
  gitSyncRuntimeShouldInit.value = shouldInit;
  
  const initCostMs = Math.round(performance.now() - initStart);
  logger.info('[Config] ========== Config 页面初始化完成 ==========', {
    initCostMs,
    ts: Date.now()
  });
  

  await configNavigationEvents.setup();
  
});

// 清理事件监听器
onUnmounted(async () => {
  logger.info('[Config] 🧹 开始清理 Config 页面资源...');
  configNavigationEvents.cleanup();

  logger.info('[Config] ✅ Config 页面资源清理完成');
});
</script>

<style scoped lang="scss">
.config {
  @apply relative z-50 bg-content h-full flex justify-start;
}
</style>
