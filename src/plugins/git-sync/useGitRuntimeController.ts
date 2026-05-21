import { computed, ref } from 'vue';
import type { Composer } from 'vue-i18n';
import type { MessagePosition } from '@/utils/modal';
import { logger as defaultLogger } from '@/utils/logger';
import { createGitConflictFeedback } from './conflictFeedback';
import { useGitConflictFlow } from './useGitConflictFlow';
import type { GitRuntimeState } from './useGitRuntimeState';

type LoadingDialogExpose = {
  setLoading: (loading: boolean) => void;
};

type GitRuntimePortalExpose = {
  setConflictDialogLoading: (loading: boolean) => void;
  setManualMergeLoading: (loading: boolean) => void;
};

type GitRuntimeControllerLogger = {
  info: (message: string, data?: unknown, ...args: unknown[]) => void;
  error: (message: string, data?: unknown) => void;
};

type ModalMsg = (
  message: string,
  type?: 'success' | 'warning' | 'info' | 'error',
  position?: MessagePosition,
  duration?: number
) => void;

export interface GitRuntimeControllerDeps {
  t: Composer['t'];
  modalMsg: ModalMsg;
  routeToGitSettings: () => unknown | Promise<unknown>;
  resetConflictHandled: () => void;
  state: GitRuntimeState;
  logger?: GitRuntimeControllerLogger;
}

export function useGitRuntimeController(deps: GitRuntimeControllerDeps) {
  const logger = deps.logger ?? defaultLogger;
  const { dialogs, confirm, repoNotFound } = deps.state;
  const gitSyncRuntimePortalRef = ref<GitRuntimePortalExpose | null>(null);

  const conflictDialogRef = computed<LoadingDialogExpose | null>(() => {
    if (!gitSyncRuntimePortalRef.value) return null;
    return {
      setLoading: gitSyncRuntimePortalRef.value.setConflictDialogLoading
    };
  });

  const manualMergeRef = computed<LoadingDialogExpose | null>(() => {
    if (!gitSyncRuntimePortalRef.value) return null;
    return {
      setLoading: gitSyncRuntimePortalRef.value.setManualMergeLoading
    };
  });

  const feedback = createGitConflictFeedback({
    t: deps.t,
    modalMsg: deps.modalMsg
  });

  const reportConflictFlowError = (context: 'conflict' | 'manual-merge', error: unknown) => {
    if (error === 'cancel') return;

    const errorMsg = String(error).replace(/^Error:\s*/, '');

    if (context === 'manual-merge') {
      logger.error('[GitSync] 手动合并失败:', error);
      deps.modalMsg(`${deps.t('settings.gitSync.mergeFailed')}: ${errorMsg}`, 'error', 'top-right');
      return;
    }

    logger.error('[GitSync] 冲突处理失败:', error);
    deps.modalMsg(`${deps.t('settings.gitSync.conflictResolutionFailed')}: ${errorMsg}`, 'error', 'top-right');
  };

  const flow = useGitConflictFlow({
    conflictDialogRef,
    manualMergeRef,
    resetConflictHandled: deps.resetConflictHandled,
    confirmForcePush: confirm.confirmForcePush,
    confirmForcePull: confirm.confirmForcePull,
    confirmCancelConflict: confirm.confirmCancelConflict,
    closeConflictDialog: dialogs.closeConflictDialog,
    openManualMergeDialog: dialogs.openManualMergeDialog,
    closeManualMergeDialog: dialogs.closeManualMergeDialog,
    clearConflictFiles: dialogs.clearConflictFiles,
    backToConflictDialog: dialogs.backToConflictDialog,
    getUntrackedFiles: () => dialogs.untrackedFiles.value,
    getManualMergeInput: (selections, editedContents) => ({
      files: dialogs.mergeFileList.value,
      selections,
      editedContents
    }),
    feedback,
    logger
  });

  const handleConflictResolution = async (strategy: string) => {
    try {
      await flow.handleConflictResolution(strategy);
    } catch (error) {
      reportConflictFlowError('conflict', error);
    }
  };

  const handleConflictCancel = async () => {
    try {
      await flow.handleConflictCancel();
    } catch (error) {
      reportConflictFlowError('conflict', error);
    }
  };

  const handleManualMergeComplete = async (
    selections: Record<number, 'remote' | 'local'>,
    editedContents: Record<number, string>
  ) => {
    try {
      await flow.handleManualMergeComplete(selections, editedContents);
    } catch (error) {
      reportConflictFlowError('manual-merge', error);
    }
  };

  const handleManualMergeCancel = async () => {
    try {
      await flow.handleManualMergeCancel();
    } catch (error) {
      reportConflictFlowError('manual-merge', error);
    }
  };

  const handleRepoNotFoundReconfig = async () => {
    repoNotFound.close();
    logger.info('[GitSync] 用户选择重新配置仓库');
    await deps.routeToGitSettings();
  };

  const handleRepoNotFoundIgnore = () => {
    repoNotFound.ignore();
    logger.info('[GitSync] 用户选择忽略仓库不存在错误');
    deps.modalMsg(deps.t('settings.gitSync.repoNotFoundIgnored'), 'info', 'bottom-right');
  };

  return {
    gitSyncRuntimePortalRef,
    handleConflictResolution,
    handleConflictEscape: flow.handleConflictEscape,
    handleConflictCancel,
    handleManualMergeComplete,
    handleManualMergeCancel,
    handleManualMergeBack: flow.handleManualMergeBack,
    handleManualMergeEscape: flow.handleManualMergeEscape,
    handleRepoNotFoundReconfig,
    handleRepoNotFoundIgnore
  };
}

export type GitRuntimeController = ReturnType<typeof useGitRuntimeController>;
