import type { Composer } from 'vue-i18n';
import { logger as defaultLogger } from '@/utils/logger';

type ModalMsg = (
  message: string,
  type: 'success' | 'info' | 'warning' | 'error',
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center',
  duration?: number
) => void;

type GitConflictFeedbackLogger = {
  info: (...args: unknown[]) => void;
};

export interface GitConflictFeedbackDeps {
  t: Composer['t'];
  modalMsg: ModalMsg;
  dispatchRefreshData?: (source: string) => void;
  logger?: GitConflictFeedbackLogger;
}

const defaultDispatchRefreshData = (source: string) => {
  window.dispatchEvent(new CustomEvent('refresh-data', {
    detail: { source }
  }));
};

const resolveDeps = (deps: GitConflictFeedbackDeps) => ({
  t: deps.t,
  modalMsg: deps.modalMsg,
  dispatchRefreshData: deps.dispatchRefreshData ?? defaultDispatchRefreshData,
  logger: deps.logger ?? defaultLogger
});

export function createGitConflictFeedback(deps: GitConflictFeedbackDeps) {
  const {
    t,
    modalMsg,
    dispatchRefreshData,
    logger
  } = resolveDeps(deps);

  const notifyForcePushResolved = () => {
    modalMsg(t('settings.gitSync.forcePushSuccess'), 'success', 'bottom-right');
    dispatchRefreshData('force-push');
  };

  const notifyForcePullResolved = () => {
    modalMsg(t('settings.gitSync.forcePullSuccess'), 'success', 'bottom-right');
    dispatchRefreshData('force-pull');
  };

  const notifyManualMergeResolved = () => {
    modalMsg(t('settings.gitSync.mergeSuccess'), 'success', 'bottom-right');
    dispatchRefreshData('manual-merge');
    logger.info('[GitSync] 手动合并完成，自动同步已由后端恢复');
  };

  const notifyAutoSyncResumed = (source: 'conflict-dialog' | 'manual-merge') => {
    modalMsg(t('settings.gitSync.autoSyncResumed'), 'info', 'bottom-right');
    if (source === 'manual-merge') {
      logger.info('[GitSync] 用户从手动合并中选择恢复自动同步');
    } else {
      logger.info('[GitSync] 用户选择恢复自动同步');
    }
  };

  return {
    notifyForcePushResolved,
    notifyForcePullResolved,
    notifyManualMergeResolved,
    notifyAutoSyncResumed
  };
}
