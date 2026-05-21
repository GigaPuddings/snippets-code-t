<template>
  <div class="config">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    
    <!-- 全局冲突对话框 -->
    <GitConflictDialog
      v-if="isGitSyncRuntimeReady"
      v-model="showConflictDialog"
      :conflict-files="conflictFiles"
      :untracked-files="untrackedFiles"
      @confirm="handleConflictResolution"
      @cancel="handleConflictCancel"
      @escape="handleConflictEscape"
      ref="conflictDialogRef"
    />
    
    <!-- 手动合并对话框：同时包含冲突文件与未跟踪文件，以便都能展示远程/本地对比 -->
    <GitManualMerge
      v-if="isGitSyncRuntimeReady"
      v-model="showManualMergeDialog"
      :conflict-files="mergeFileList"
      @complete="handleManualMergeComplete"
      @cancel="handleManualMergeCancel"
      @back="handleManualMergeBack"
      @escape="handleManualMergeEscape"
      ref="manualMergeRef"
    />

    <!-- 仓库不存在对话框 -->
    <ConfirmChoiceDialog
      v-model="gitRepoNotFoundDialogVisible"
      :title="t('settings.gitSync.repoNotFoundTitle')"
      :message="gitRepoNotFoundMessage"
      :primary-text="t('settings.gitSync.repoNotFoundReconfig')"
      :secondary-text="t('settings.gitSync.repoNotFoundIgnore')"
      type="warning"
      @primary="handleRepoNotFoundReconfig"
      @secondary="handleRepoNotFoundIgnore"
      @close="handleRepoNotFoundIgnore"
    />

    <!-- 自定义确认框 -->
    <ConfirmChoiceDialog
      v-model="gitConflictConfirmVisible"
      :title="gitConflictConfirmOptions.title"
      :message="gitConflictConfirmOptions.message"
      :primary-text="gitConflictConfirmOptions.primaryText"
      :secondary-text="gitConflictConfirmOptions.secondaryText"
      :type="gitConflictConfirmOptions.type"
      @primary="handleGitConflictConfirmResult('primary')"
      @secondary="handleGitConflictConfirmResult('secondary')"
      @close="handleGitConflictConfirmResult('close')"
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
import ConfirmChoiceDialog from '@/components/UI/ConfirmChoiceDialog.vue';
import modal from '@/utils/modal';
import { usePluginStore } from '@/store';
import { useGitConflictDialogs } from '@/plugins/git-sync/useGitConflictDialogs';
import { useGitConflictConfirm } from '@/plugins/git-sync/useGitConflictConfirm';
import { useGitRepoNotFoundDialog } from '@/plugins/git-sync/useGitRepoNotFoundDialog';
import { createGitConflictFeedback } from '@/plugins/git-sync/conflictFeedback';
import { useGitConflictFlow } from '@/plugins/git-sync/useGitConflictFlow';
import {
  cleanupGitSyncRuntimeHost,
  setupGitSyncRuntimeHost,
  type GitSyncRuntimeHost
} from '@/plugins/git-sync/gitSyncRuntimeHost';

type GitLifecycle = typeof import('@/plugins/git-sync/lifecycle');
type GitAutoSyncLifecycle = typeof import('@/plugins/git-sync/autoSyncLifecycle');
type GitSyncRuntime = typeof import('@/plugins/git-sync/gitSyncRuntime');

interface LoadingDialogExpose {
  setLoading: (loading: boolean) => void;
}

let gitLifecyclePromise: Promise<GitLifecycle> | null = null;
let gitAutoSyncLifecyclePromise: Promise<GitAutoSyncLifecycle> | null = null;
let gitSyncRuntimePromise: Promise<GitSyncRuntime> | null = null;

const loadGitLifecycle = async (): Promise<GitLifecycle> => {
  gitLifecyclePromise ??= import('@/plugins/git-sync/lifecycle');
  return gitLifecyclePromise;
};

const loadGitAutoSyncLifecycle = async (): Promise<GitAutoSyncLifecycle> => {
  gitAutoSyncLifecyclePromise ??= import('@/plugins/git-sync/autoSyncLifecycle');
  return gitAutoSyncLifecyclePromise;
};

const loadGitSyncRuntime = async (): Promise<GitSyncRuntime> => {
  gitSyncRuntimePromise ??= import('@/plugins/git-sync/gitSyncRuntime');
  return gitSyncRuntimePromise;
};

const GitConflictDialog = defineAsyncComponent(() => import('@/plugins/git-sync/components/GitConflictDialog/index.vue'));
const GitManualMerge = defineAsyncComponent(() => import('@/plugins/git-sync/components/GitManualMerge/index.vue'));

const { t } = useI18n();
const pluginStore = usePluginStore();

defineOptions({
  name: 'Config'
});

const router = useRouter();
const PENDING_NAVIGATION_TTL = 30_000;
const isGitSyncRuntimeReady = ref(false);

// 监听导航到设置页面的事件
let unlisten: (() => void) | null = null;
let unlistenFragment: (() => void) | null = null;
let unlistenCheckNav: (() => void) | null = null;
let unlistenOpenFromSystem: (() => void) | null = null;

// Git 事件监听器
let gitRuntimeHost: GitSyncRuntimeHost | null = null;

const {
  showConflictDialog,
  showManualMergeDialog,
  conflictFiles,
  untrackedFiles,
  mergeFileList,
  restoreConflictDialogState,
  setConflictFiles,
  clearConflictFiles,
  closeConflictDialog,
  openManualMergeDialog,
  closeManualMergeDialog,
  backToConflictDialog
} = useGitConflictDialogs();
const {
  visible: gitConflictConfirmVisible,
  options: gitConflictConfirmOptions,
  handleResult: handleGitConflictConfirmResult,
  confirmForcePush,
  confirmForcePull,
  confirmCancelConflict
} = useGitConflictConfirm(t);
const {
  visible: gitRepoNotFoundDialogVisible,
  message: gitRepoNotFoundMessage,
  open: openGitRepoNotFoundDialog,
  close: closeGitRepoNotFoundDialog,
  ignore: ignoreGitRepoNotFoundDialog
} = useGitRepoNotFoundDialog(t);
const {
  notifyForcePushResolved,
  notifyForcePullResolved,
  notifyManualMergeResolved,
  notifyAutoSyncResumed
} = createGitConflictFeedback({
  t,
  modalMsg: modal.msg
});
const conflictDialogRef = ref<LoadingDialogExpose | null>(null);
const manualMergeRef = ref<LoadingDialogExpose | null>(null);

const resetGitConflictHandled = () => {
  gitRuntimeHost?.runtimeListeners?.resetConflictHandled();
};

const reportConflictFlowError = (context: 'conflict' | 'manual-merge', error: unknown) => {
  if (error === 'cancel') return;

  if (context === 'manual-merge') {
    logger.error('[Config] 手动合并失败:', error);
    const errorMsg = String(error).replace(/^Error:\s*/, '');
    modal.msg(`${t('settings.gitSync.mergeFailed')}: ${errorMsg}`, 'error', 'top-right');
    return;
  }

  logger.error('[Config] 冲突处理失败:', error);
  const errorMsg = String(error).replace(/^Error:\s*/, '');
  modal.msg(`${t('settings.gitSync.conflictResolutionFailed')}: ${errorMsg}`, 'error', 'top-right');
};

const gitConflictFlow = useGitConflictFlow({
  conflictDialogRef,
  manualMergeRef,
  resetConflictHandled: resetGitConflictHandled,
  confirmForcePush,
  confirmForcePull,
  confirmCancelConflict,
  closeConflictDialog,
  openManualMergeDialog,
  closeManualMergeDialog,
  clearConflictFiles,
  backToConflictDialog,
  getUntrackedFiles: () => untrackedFiles.value,
  getManualMergeInput: (selections, editedContents) => ({
    files: mergeFileList.value,
    selections,
    editedContents
  }),
  feedback: {
    notifyForcePushResolved,
    notifyForcePullResolved,
    notifyManualMergeResolved,
    notifyAutoSyncResumed
  },
  logger
});

const handleConflictResolution = async (strategy: string) => {
  try {
    await gitConflictFlow.handleConflictResolution(strategy);
  } catch (error) {
    reportConflictFlowError('conflict', error);
  }
};

const handleConflictEscape = gitConflictFlow.handleConflictEscape;

const handleConflictCancel = async () => {
  try {
    await gitConflictFlow.handleConflictCancel();
  } catch (error) {
    reportConflictFlowError('conflict', error);
  }
};

// 处理仓库不存在 - 重新配置
const handleRepoNotFoundReconfig = async () => {
  closeGitRepoNotFoundDialog();
  logger.info('[Config] 用户选择重新配置仓库');

  // 导航到 Git 同步设置页面
  router.push('/config/category/settings?tab=gitSync');
};

// 处理仓库不存在 - 忽略
const handleRepoNotFoundIgnore = async () => {
  ignoreGitRepoNotFoundDialog();
  logger.info('[Config] 用户选择忽略仓库不存在错误');

  // 不恢复自动同步，让用户手动处理
  modal.msg(t('settings.gitSync.repoNotFoundIgnored'), 'info', 'bottom-right');
};

const handleManualMergeComplete = async (selections: Record<number, 'remote' | 'local'>, editedContents: Record<number, string>) => {
  try {
    await gitConflictFlow.handleManualMergeComplete(selections, editedContents);
  } catch (error) {
    reportConflictFlowError('manual-merge', error);
  }
};

const handleManualMergeCancel = async () => {
  try {
    await gitConflictFlow.handleManualMergeCancel();
  } catch (error) {
    reportConflictFlowError('manual-merge', error);
  }
};

const handleManualMergeBack = gitConflictFlow.handleManualMergeBack;

const handleManualMergeEscape = gitConflictFlow.handleManualMergeEscape;

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

  if (pluginStore.isEnabled('git-sync')) {
    isGitSyncRuntimeReady.value = true;
    const {
      ensureWorkspaceGitignore,
      initGitSync,
      setupGitEventListeners
    } = await loadGitLifecycle();
    const {
      setupGitSyncRuntimeListeners
    } = await loadGitSyncRuntime();
    const {
      startAutoSyncForVisibleWindow,
      stopAutoSyncForHiddenWindow
    } = await loadGitAutoSyncLifecycle();

    gitRuntimeHost = await setupGitSyncRuntimeHost({
      t,
      shouldInit,
      setupGitEventListeners,
      setupGitSyncRuntimeListeners,
      ensureWorkspaceGitignore,
      initGitSync,
      isConflictDialogVisible: () => showConflictDialog.value,
      onConflictDetected: ({ conflictFiles: nextConflictFiles, untrackedFiles: nextUntrackedFiles }) => {
        setConflictFiles({
          conflictFiles: nextConflictFiles,
          untrackedFiles: nextUntrackedFiles
        });
      },
      onRepoNotFound: ({ remoteUrl, operation }) => {
        openGitRepoNotFoundDialog({
          remoteUrl,
          operation
        });
      },
      autoSyncWindow: getCurrentWindow(),
      startAutoSyncForVisibleWindow,
      stopAutoSyncForHiddenWindow,
      isPluginEnabled: () => pluginStore.isEnabled('git-sync'),
      logger
    });
    logger.info('[Config] ✅ Git runtime host 已设置');
  } else {
    logger.info('[Config] Git 同步插件未启用，跳过 Git 事件监听和自动同步初始化');
  }
  
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
  
  // 恢复冲突状态（如果页面重载）
  restoreConflictDialogState();
});

// 清理事件监听器
onUnmounted(async () => {
  logger.info('[Config] 🧹 开始清理 Config 页面资源...');
  
  if (gitRuntimeHost) {
    const { cleanupGitEventListeners } = await loadGitLifecycle();
    const { cleanupGitSyncRuntimeListeners } = await loadGitSyncRuntime();
    const { stopAutoSyncForHiddenWindow } = await loadGitAutoSyncLifecycle();
    await cleanupGitSyncRuntimeHost({
      host: gitRuntimeHost,
      cleanupGitEventListeners,
      cleanupGitSyncRuntimeListeners,
      stopAutoSyncForHiddenWindow,
      isPluginEnabled: () => pluginStore.isEnabled('git-sync'),
      logger
    });
    gitRuntimeHost = null;
  }
  
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
