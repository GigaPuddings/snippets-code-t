import { logger as defaultLogger } from '@/utils/logger';
import {
  completeManualMerge,
  resolveConflictWithForcePull,
  resolveConflictWithForcePush,
  resumeAutoSyncAfterConflict,
  type ManualMergeInput
} from './conflictResolution';

type LoadingDialogExpose = {
  setLoading: (loading: boolean) => void;
};

type LoadingDialogRef = {
  value: LoadingDialogExpose | null;
};

type GitConflictFlowLogger = {
  info: (message: string, data?: unknown, ...args: unknown[]) => void;
  error: (message: string, data?: unknown) => void;
};

type GitConflictFlowFeedback = {
  notifyForcePushResolved: () => void;
  notifyForcePullResolved: () => void;
  notifyManualMergeResolved: () => void;
  notifyAutoSyncResumed: (source: 'conflict-dialog' | 'manual-merge') => void;
};

export interface GitConflictFlowDeps {
  conflictDialogRef: LoadingDialogRef;
  manualMergeRef: LoadingDialogRef;
  resetConflictHandled: () => void;
  confirmForcePush: () => Promise<boolean>;
  confirmForcePull: () => Promise<boolean>;
  confirmCancelConflict: () => Promise<'primary' | 'secondary' | 'close'>;
  closeConflictDialog: () => void;
  openManualMergeDialog: () => void;
  closeManualMergeDialog: () => void;
  clearConflictFiles: (options?: { clearUntracked?: boolean }) => void;
  backToConflictDialog: () => void;
  getUntrackedFiles: () => string[];
  getManualMergeInput: (
    selections: Record<number, 'remote' | 'local'>,
    editedContents: Record<number, string>
  ) => ManualMergeInput;
  feedback: GitConflictFlowFeedback;
  resolveForcePush?: typeof resolveConflictWithForcePush;
  resolveForcePull?: typeof resolveConflictWithForcePull;
  completeMerge?: typeof completeManualMerge;
  resumeAutoSync?: typeof resumeAutoSyncAfterConflict;
  logger?: GitConflictFlowLogger;
}

export function useGitConflictFlow(deps: GitConflictFlowDeps) {
  const logger = deps.logger ?? defaultLogger;
  const resolveForcePush = deps.resolveForcePush ?? resolveConflictWithForcePush;
  const resolveForcePull = deps.resolveForcePull ?? resolveConflictWithForcePull;
  const completeMerge = deps.completeMerge ?? completeManualMerge;
  const resumeAutoSync = deps.resumeAutoSync ?? resumeAutoSyncAfterConflict;

  const handleConflictResolution = async (strategy: string) => {
    if (!deps.conflictDialogRef.value) return;

    deps.resetConflictHandled();
    deps.conflictDialogRef.value.setLoading(true);

    try {
      if (strategy === 'force-push') {
        if (!(await deps.confirmForcePush())) throw 'cancel';

        await resolveForcePush();
        deps.feedback.notifyForcePushResolved();
        deps.closeConflictDialog();
        deps.clearConflictFiles();
      } else if (strategy === 'force-pull') {
        if (!(await deps.confirmForcePull())) throw 'cancel';

        await resolveForcePull(deps.getUntrackedFiles());
        deps.feedback.notifyForcePullResolved();
        deps.closeConflictDialog();
        deps.clearConflictFiles();
      } else if (strategy === 'manual-merge') {
        deps.openManualMergeDialog();
      }
    } finally {
      deps.conflictDialogRef.value?.setLoading(false);
    }
  };

  const handleConflictEscape = () => {
    deps.closeConflictDialog();
    deps.resetConflictHandled();
  };

  const handleConflictCancel = async () => {
    const result = await deps.confirmCancelConflict();

    deps.closeConflictDialog();
    deps.resetConflictHandled();

    if (result === 'secondary') {
      deps.clearConflictFiles({ clearUntracked: false });
      const resumed = await resumeAutoSync();
      if (resumed) {
        deps.feedback.notifyAutoSyncResumed('conflict-dialog');
      }
    } else {
      logger.info('[GitSync] 用户选择稍后处理冲突');
    }
  };

  const handleManualMergeComplete = async (
    selections: Record<number, 'remote' | 'local'>,
    editedContents: Record<number, string>
  ) => {
    if (!deps.manualMergeRef.value) return;

    deps.resetConflictHandled();
    deps.manualMergeRef.value.setLoading(true);

    try {
      await completeMerge(deps.getManualMergeInput(selections, editedContents));
      deps.feedback.notifyManualMergeResolved();
      deps.closeManualMergeDialog();
      deps.clearConflictFiles();
    } finally {
      deps.manualMergeRef.value?.setLoading(false);
    }
  };

  const handleManualMergeCancel = async () => {
    const result = await deps.confirmCancelConflict();

    deps.closeManualMergeDialog();
    deps.resetConflictHandled();

    if (result === 'secondary') {
      deps.clearConflictFiles();
      const resumed = await resumeAutoSync();
      if (resumed) {
        deps.feedback.notifyAutoSyncResumed('manual-merge');
      }
    } else {
      logger.info('[GitSync] 用户选择稍后处理手动合并');
    }
  };

  const handleManualMergeBack = () => {
    deps.backToConflictDialog();
    logger.info('[GitSync] 用户从手动合并返回到冲突对话框');
  };

  const handleManualMergeEscape = () => {
    deps.closeManualMergeDialog();
    deps.resetConflictHandled();
  };

  return {
    handleConflictResolution,
    handleConflictEscape,
    handleConflictCancel,
    handleManualMergeComplete,
    handleManualMergeCancel,
    handleManualMergeBack,
    handleManualMergeEscape
  };
}
