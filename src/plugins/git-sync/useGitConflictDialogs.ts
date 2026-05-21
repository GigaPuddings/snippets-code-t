import { computed, ref } from 'vue';
import { logger as defaultLogger } from '@/utils/logger';
import {
  clearGitConflictState,
  restoreGitConflictState,
  saveGitConflictState
} from './conflictState';

type GitConflictDialogsLogger = {
  info: (...args: unknown[]) => void;
};

type ConflictStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

export interface GitConflictDialogsDeps {
  storage?: ConflictStorage;
  logger?: GitConflictDialogsLogger;
}

export interface SetGitConflictFilesInput {
  conflictFiles: string[];
  untrackedFiles?: string[];
}

export function useGitConflictDialogs(deps: GitConflictDialogsDeps = {}) {
  const storage = deps.storage ?? sessionStorage;
  const logger = deps.logger ?? defaultLogger;

  const showConflictDialog = ref(false);
  const showManualMergeDialog = ref(false);
  const conflictFiles = ref<string[]>([]);
  const untrackedFiles = ref<string[]>([]);
  const mergeFileList = computed(() => [...conflictFiles.value, ...untrackedFiles.value]);

  const persistConflictState = () => {
    saveGitConflictState(storage, conflictFiles.value);
  };

  const restoreConflictDialogState = (): boolean => {
    const restoredState = restoreGitConflictState(storage);
    if (!restoredState) return false;

    conflictFiles.value = restoredState.conflictFiles;
    showConflictDialog.value = true;
    logger.info('[GitSync] 恢复冲突状态，显示对话框');
    return true;
  };

  const setConflictFiles = ({
    conflictFiles: nextConflictFiles,
    untrackedFiles: nextUntrackedFiles = []
  }: SetGitConflictFilesInput) => {
    conflictFiles.value = nextConflictFiles;
    untrackedFiles.value = nextUntrackedFiles;
    persistConflictState();
    showConflictDialog.value = true;
  };

  const clearConflictFiles = (options: { clearUntracked?: boolean } = {}) => {
    clearGitConflictState(storage);
    conflictFiles.value = [];
    if (options.clearUntracked !== false) {
      untrackedFiles.value = [];
    }
  };

  const closeConflictDialog = () => {
    showConflictDialog.value = false;
  };

  const openManualMergeDialog = () => {
    showConflictDialog.value = false;
    showManualMergeDialog.value = true;
  };

  const closeManualMergeDialog = () => {
    showManualMergeDialog.value = false;
  };

  const backToConflictDialog = () => {
    showManualMergeDialog.value = false;
    showConflictDialog.value = true;
  };

  return {
    showConflictDialog,
    showManualMergeDialog,
    conflictFiles,
    untrackedFiles,
    mergeFileList,
    persistConflictState,
    restoreConflictDialogState,
    setConflictFiles,
    clearConflictFiles,
    closeConflictDialog,
    openManualMergeDialog,
    closeManualMergeDialog,
    backToConflictDialog
  };
}
