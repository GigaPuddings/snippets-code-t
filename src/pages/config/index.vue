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
import { readMarkdownFile } from '@/api/markdown';
import { logger } from '@/utils/logger';
import { initCleanupCache, checkShouldInitialize } from '@/utils/app-init';
import modal from '@/utils/modal';
import { usePluginStore } from '@/store';
import GitSyncRuntimeMount from '@/plugins/git-sync/components/GitSyncRuntimeMount.vue';
import { useGitSyncRuntimeFacade } from '@/plugins/git-sync/useGitSyncRuntimeFacade';

const { t } = useI18n();
const pluginStore = usePluginStore();

defineOptions({
  name: 'Config'
});

const router = useRouter();
const PENDING_NAVIGATION_TTL = 30_000;

// 监听导航到设置页面的事件
let unlisten: (() => void) | null = null;
let unlistenFragment: (() => void) | null = null;
let unlistenCheckNav: (() => void) | null = null;
let unlistenOpenFromSystem: (() => void) | null = null;

const gitSyncRuntime = useGitSyncRuntimeFacade({
  t,
  modalMsg: modal.msg.bind(modal),
  routeToGitSettings: () => router.push('/config/category/settings?tab=gitSync'),
  isPluginEnabled: () => pluginStore.isEnabled('git-sync'),
  logger
});
const gitSyncRuntimeShouldInit = ref<boolean | null>(null);

// 检查是否有待处理的导航
const normalizePendingFragmentId = (id: unknown) => String(id ?? '').replace(/^markdown:/i, '');

const checkPendingNavigation = () => {
  const pendingNav = localStorage.getItem('pendingNavigation');

  if (pendingNav) {
    try {
      const { fragmentId, categoryId, timestamp } = JSON.parse(pendingNav);

      // 检查时间戳，只处理近期的导航请求
      if (Date.now() - timestamp < PENDING_NAVIGATION_TTL) {
        // 清除标记
        localStorage.removeItem('pendingNavigation');
        // 导航到对应的片段 - 修正路由路径（需要对文件路径进行编码）
        const targetPath = `/config/category/contentList/${categoryId}/content/${encodeURIComponent(normalizePendingFragmentId(fragmentId))}`;
        router.push(targetPath);
      } else {
        // 过期的导航请求，清除
        localStorage.removeItem('pendingNavigation');
      }
    } catch (err) {
      console.error('Failed to parse pending navigation:', err);
      localStorage.removeItem('pendingNavigation');
    }
  }
};

const checkPendingSnippetOpen = () => {
  const pendingSnippet = localStorage.getItem('pendingSnippetOpen');

  if (pendingSnippet) {
    try {
      const { fragmentId, content, categoryId, timestamp } = JSON.parse(pendingSnippet);

      if (Date.now() - timestamp < PENDING_NAVIGATION_TTL) {
        localStorage.removeItem('pendingSnippetOpen');
        const targetPath = `/config/category/contentList/${categoryId}/content/${encodeURIComponent(normalizePendingFragmentId(fragmentId))}`;
        router.push({
          path: targetPath,
          query: content ? { preview: '1' } : undefined
        });
      } else {
        localStorage.removeItem('pendingSnippetOpen');
      }
    } catch (err) {
      console.error('Failed to parse pending snippet open:', err);
      localStorage.removeItem('pendingSnippetOpen');
    }
  }
};

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
    checkPendingNavigation();
    checkPendingSnippetOpen();
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
  

  // 监听导航到设置页面的事件
  const currentWindow = getCurrentWindow();
  
  unlisten = await currentWindow.listen('navigate-to-settings', () => {
    // 导航到设置页面
    router.push('/config/category/settings');
  });
  
  // 监听导航到片段详情的事件
  unlistenFragment = await currentWindow.listen('navigate-to-fragment', (event: any) => {
    const { fragmentId, categoryId } = event.payload;
    // 导航到对应的分类和片段 - 修正路由路径（需要对文件路径进行编码）
    router.push(`/config/category/contentList/${categoryId}/content/${encodeURIComponent(fragmentId)}`);
  });

  // 监听「从系统打开 Markdown 文件」事件（双击/文件关联打开）
  // 后端会在 config_ready 后派发，避免窗口尚未就绪
  unlistenOpenFromSystem = await currentWindow.listen('open-markdown-from-system', async (event: any) => {
    const filePath = event.payload?.file_path as string | undefined;
    if (!filePath) return;
    try {
      const file = await readMarkdownFile(filePath);
      const fragmentId = file.filePath || filePath;
      router.push(`/config/category/contentList/${file.categoryId}/content/${encodeURIComponent(fragmentId)}`);
    } catch (e: any) {
      modal.msg(`${t('common.failed') || 'Failed'}: ${e?.message || e}`, 'error', 'bottom-right');
    }
  });
  
  // 监听窗口显示事件，每次显示时检查待处理的导航
  await currentWindow.onFocusChanged(({ payload: focused }) => {
    if (focused) {
      checkPendingNavigation();
    }
  });
  
  // 监听自定义的导航检查事件（从预览窗口或搜索窗口触发）
  unlistenCheckNav = await currentWindow.listen('check-pending-navigation', () => {
    checkPendingNavigation();
    checkPendingSnippetOpen();
  });
  
});

// 清理事件监听器
onUnmounted(async () => {
  logger.info('[Config] 🧹 开始清理 Config 页面资源...');
  
  // 清理其他事件监听器
  if (unlisten) {
    unlisten();
  }
  if (unlistenFragment) {
    unlistenFragment();
  }
  if (unlistenCheckNav) {
    unlistenCheckNav();
  }
  if (unlistenOpenFromSystem) {
    unlistenOpenFromSystem();
  }

  logger.info('[Config] ✅ Config 页面资源清理完成');
});
</script>

<style scoped lang="scss">
.config {
  @apply relative z-50 bg-content h-full flex justify-start;
}
</style>
