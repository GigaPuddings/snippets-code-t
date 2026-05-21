import { listen as tauriListen, type UnlistenFn } from '@tauri-apps/api/event';
import { logger as defaultLogger } from '@/utils/logger';
import { pauseAutoSync as pauseGitAutoSync } from './api';
import { decodeGitConflictFilePath } from './conflictState';

type GitSyncRuntimeLogger = {
  info: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

type ListenFn = typeof tauriListen;

export interface GitConflictRuntimeEvent {
  conflictFiles: string[];
  untrackedFiles: string[];
}

export interface GitRepoNotFoundRuntimeEvent {
  remoteUrl: string;
  operation: string;
}

export interface GitSyncRuntimeListeners {
  conflict: UnlistenFn | null;
  repoNotFound: UnlistenFn | null;
  resetConflictHandled: () => void;
}

export interface GitSyncRuntimeDeps {
  listen?: ListenFn;
  pauseAutoSync?: typeof pauseGitAutoSync;
  logger?: GitSyncRuntimeLogger;
  isConflictDialogVisible?: () => boolean;
  onConflictDetected: (event: GitConflictRuntimeEvent) => void | Promise<void>;
  onRepoNotFound: (event: GitRepoNotFoundRuntimeEvent) => void | Promise<void>;
}

const resolveDeps = (deps: GitSyncRuntimeDeps) => ({
  listen: deps.listen ?? tauriListen,
  pauseAutoSync: deps.pauseAutoSync ?? pauseGitAutoSync,
  logger: deps.logger ?? defaultLogger,
  isConflictDialogVisible: deps.isConflictDialogVisible ?? (() => false),
  onConflictDetected: deps.onConflictDetected,
  onRepoNotFound: deps.onRepoNotFound
});

export async function setupGitSyncRuntimeListeners(
  deps: GitSyncRuntimeDeps
): Promise<GitSyncRuntimeListeners> {
  const {
    listen,
    pauseAutoSync,
    logger,
    isConflictDialogVisible,
    onConflictDetected,
    onRepoNotFound
  } = resolveDeps(deps);

  const listeners: GitSyncRuntimeListeners = {
    conflict: null,
    repoNotFound: null,
    resetConflictHandled: () => {
      hasConflictBeenHandled = false;
    }
  };
  let hasConflictBeenHandled = false;

  try {
    listeners.conflict = await listen<{ conflict_files: string[]; untracked_files?: string[] }>(
      'git-conflict-detected',
      async (event) => {
        if (hasConflictBeenHandled && isConflictDialogVisible()) {
          logger.info('[GitSync] 冲突事件已处理，跳过重复事件');
          return;
        }

        logger.info('[GitSync] 收到冲突事件:', event.payload);
        hasConflictBeenHandled = true;

        const conflictFiles = event.payload.conflict_files.map(decodeGitConflictFilePath);
        const untrackedFiles = (event.payload.untracked_files || []).map(decodeGitConflictFilePath);

        logger.info('[GitSync] 解码后的冲突文件:', conflictFiles);
        logger.info('[GitSync] 解码后的未跟踪文件:', untrackedFiles);

        try {
          await pauseAutoSync();
          logger.info('[GitSync] 已暂停自动同步，等待冲突解决');
        } catch (error) {
          logger.error('[GitSync] 暂停自动同步失败:', error);
        }

        await onConflictDetected({
          conflictFiles,
          untrackedFiles
        });
      }
    );
    logger.info('[GitSync] Git 冲突事件监听器已设置');
  } catch (error) {
    logger.error('[GitSync] 设置冲突事件监听器失败:', error);
  }

  try {
    listeners.repoNotFound = await listen<{ remote_url: string; operation: string }>(
      'git-repo-not-found',
      async (event) => {
        logger.info('[GitSync] 收到仓库不存在事件:', event.payload);

        try {
          await pauseAutoSync();
          logger.info('[GitSync] 已暂停自动同步，等待仓库重新配置');
        } catch (error) {
          logger.error('[GitSync] 暂停自动同步失败:', error);
        }

        await onRepoNotFound({
          remoteUrl: event.payload.remote_url,
          operation: event.payload.operation
        });
      }
    );
    logger.info('[GitSync] Git 仓库不存在事件监听器已设置');
  } catch (error) {
    logger.error('[GitSync] 设置仓库不存在事件监听器失败:', error);
  }

  return listeners;
}

export function cleanupGitSyncRuntimeListeners(listeners: GitSyncRuntimeListeners): void {
  if (listeners.conflict) listeners.conflict();
  if (listeners.repoNotFound) listeners.repoNotFound();
}
