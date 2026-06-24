import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { getGitSettings } from '@/api/appConfig';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';
import type { Composer } from 'vue-i18n';
import {
  checkGitRepo,
  ensureGitignore,
  gitPull,
  initGitRepository,
  pauseAutoSync,
  startAutoSync
} from './api';
import { useGitStatus } from './useGitStatus';

export interface GitEventListeners {
  gitSyncSuccess: UnlistenFn | null;
  gitSyncError: UnlistenFn | null;
  gitPullCompleted: UnlistenFn | null;
  gitSyncComplete: UnlistenFn | null;
  fileCreated: UnlistenFn | null;
  fileModified: UnlistenFn | null;
  fileDeleted: UnlistenFn | null;
  filesChangedBatch: UnlistenFn | null;
  dirsChangedBatch: UnlistenFn | null;
}

export async function setupGitEventListeners(t: Composer['t']): Promise<GitEventListeners> {
  const currentWindow = getCurrentWindow();
  const windowLabel = currentWindow.label;

  const { refreshStatus, refreshSettings, _setLastSyncTime } = useGitStatus();

  logger.info(`[GitSync] [${windowLabel}] 设置 Git 事件监听器...`);

  const listeners: GitEventListeners = {
    gitSyncSuccess: null,
    gitSyncError: null,
    gitPullCompleted: null,
    gitSyncComplete: null,
    fileCreated: null,
    fileModified: null,
    fileDeleted: null,
    filesChangedBatch: null,
    dirsChangedBatch: null
  };

  let isProcessingPull = false;
  let isProcessingFileEvent = false;

  try {
    listeners.gitSyncSuccess = await listen<string>('git-sync-success', (event) => {
      modal.msg(event.payload, 'success', 'bottom-right');
    });

    listeners.gitSyncComplete = await listen<{ success: boolean; last_sync_time?: string }>('git-sync-complete', async (event) => {
      if (event.payload.success && event.payload.last_sync_time) {
        _setLastSyncTime(event.payload.last_sync_time);
      }

      await refreshSettings();
      await refreshStatus();
    });

    listeners.gitSyncError = await listen<string>('git-sync-error', (event) => {
      const errorMsg = event.payload;
      logger.error(`[GitSync] [${windowLabel}] Git 自动同步失败:`, errorMsg);

      if (errorMsg.includes('would be overwritten by merge') || errorMsg.includes('Please commit your changes')) {
        const conflictMatch = errorMsg.match(/following files? would be overwritten[^:]*:\s*([^\n]+(?:\n\t[^\n]+)*)/);
        if (conflictMatch) {
          const files = conflictMatch[1].split('\n').map(f => f.trim()).filter(f => f);
          modal.msg(t('settings.gitSync.conflictError', { files: files.join(', ') }), 'error', 'top-right', 5000);
        } else {
          modal.msg(t('settings.gitSync.conflictError', { files: '未知文件' }), 'error', 'top-right', 5000);
        }
      } else if (errorMsg.includes('unmerged files') || errorMsg.includes('unresolved conflict')) {
        modal.msg(t('settings.gitSync.unresolvedConflict'), 'error', 'top-right', 5000);
      } else {
        modal.msg(errorMsg.split('\n')[0] || errorMsg, 'error', 'top-right', 5000);
      }
    });

    listeners.gitPullCompleted = await listen<number>('git-pull-completed', async (event) => {
      if (isProcessingPull) return;
      isProcessingPull = true;
      try {
        window.dispatchEvent(
          new CustomEvent('refresh-data', {
            detail: { source: 'git-pull', filesCount: event.payload },
          })
        );
      } finally {
        setTimeout(() => { isProcessingPull = false; }, 2000);
      }
    });

    listeners.fileCreated = await listen<{ path: string }>('file-created', (event) => {
      if (isProcessingFileEvent) return;
      isProcessingFileEvent = true;
      window.dispatchEvent(new CustomEvent('refresh-data', {
        detail: { source: 'file-created', path: event.payload.path }
      }));
      setTimeout(() => { isProcessingFileEvent = false; }, 2000);
    });

    listeners.fileModified = await listen<{ path: string }>('file-modified', (event) => {
      if (isProcessingFileEvent) return;
      isProcessingFileEvent = true;
      window.dispatchEvent(new CustomEvent('refresh-data', {
        detail: { source: 'file-modified', path: event.payload.path }
      }));
      setTimeout(() => { isProcessingFileEvent = false; }, 2000);
    });

    listeners.fileDeleted = await listen<{ path: string }>('file-deleted', (event) => {
      if (isProcessingFileEvent) return;
      isProcessingFileEvent = true;
      window.dispatchEvent(new CustomEvent('refresh-data', {
        detail: { source: 'file-deleted', path: event.payload.path }
      }));
      setTimeout(() => { isProcessingFileEvent = false; }, 2000);
    });

    listeners.filesChangedBatch = await listen<{
      created: string[],
      modified: string[],
      deleted: string[],
      renamed: Array<{ from: string; to: string }>,
    }>('files-changed-batch', (event) => {
      if (isProcessingFileEvent) return;
      isProcessingFileEvent = true;
      const { created, modified, deleted, renamed } = event.payload;
      window.dispatchEvent(new CustomEvent('refresh-data', {
        detail: {
          source: 'files-changed-batch',
          created, modified, deleted, renamed,
          totalCount: created.length + modified.length + deleted.length + (renamed?.length ?? 0)
        }
      }));
      setTimeout(() => { isProcessingFileEvent = false; }, 2000);
    });

    listeners.dirsChangedBatch = await listen<{
      created: string[],
      deleted: string[],
      renamed: Array<{ from: string; to: string }>,
    }>('dirs-changed-batch', (event) => {
      const { created, deleted, renamed } = event.payload;
      logger.info(`[GitSync] dirs-changed-batch: +${created.length} -${deleted.length} r${renamed?.length ?? 0}`);
      window.dispatchEvent(new CustomEvent('refresh-categories', {
        detail: { source: 'dirs-changed-batch', created, deleted, renamed }
      }));
    });

    logger.info(`[GitSync] [${windowLabel}] 所有 Git 事件监听器设置完成`);
  } catch (error) {
    logger.error(`[GitSync] [${windowLabel}] 设置 Git 事件监听器失败:`, error);
  }

  return listeners;
}

export async function ensureWorkspaceGitignore(): Promise<void> {
  try {
    const root = await invoke<string | null>('get_workspace_root_path');
    if (!root) return;
    const created = await ensureGitignore();
    if (created) {
      logger.info('[GitSync] 已为工作区自动创建 .gitignore');
    }
  } catch (error) {
    logger.debug('[GitSync] 确保 .gitignore 跳过或失败', error);
  }
}

export interface InitGitSyncDeps {
  getGitSettings: typeof getGitSettings;
  checkGitRepo: typeof checkGitRepo;
  initGitRepository: typeof initGitRepository;
  gitPull: typeof gitPull;
  startAutoSync: typeof startAutoSync;
  pauseAutoSync: typeof pauseAutoSync;
  logger: Pick<typeof logger, 'info' | 'error'>;
}

const defaultInitGitSyncDeps: InitGitSyncDeps = {
  getGitSettings,
  checkGitRepo,
  initGitRepository,
  gitPull,
  startAutoSync,
  pauseAutoSync,
  logger
};

export async function initGitSync(
  t: Composer['t'],
  overrides: Partial<InitGitSyncDeps> = {}
): Promise<boolean> {
  const deps = { ...defaultInitGitSyncDeps, ...overrides };

  try {
    const gitSettings = await deps.getGitSettings();

    const isFullyConfigured = gitSettings.enabled &&
      gitSettings.user_name.trim() &&
      gitSettings.user_email.trim() &&
      gitSettings.remote_url.trim();

    if (!isFullyConfigured) {
      return false;
    }

    let shouldRefresh = false;
    let pullFailed = false;
    let shouldPull = gitSettings.pull_on_start;

    // token 不会持久化到 app.json，而是由 Git credential helper 保存。
    // 工作区的 .git 被误删时，使用持久化的远程地址重建本地仓库，
    // 并强制拉取一次以恢复工作区内容。
    if (!(await deps.checkGitRepo())) {
      deps.logger.info('[GitSync] 本地 Git 仓库缺失，开始根据已保存的远程配置恢复');
      await deps.initGitRepository(
        gitSettings.user_name,
        gitSettings.user_email,
        gitSettings.remote_url,
        gitSettings.token
      );
      shouldPull = true;
    }

    if (shouldPull) {
      try {
        const result = await deps.gitPull();
        if (result.success && !result.has_conflicts && result.files_updated > 0) {
          modal.msg(t('settings.gitSync.pullSuccess', { count: result.files_updated }), 'success', 'bottom-right');
          shouldRefresh = true;
        } else if (!result.success) {
          pullFailed = true;
        }
      } catch (error) {
        pullFailed = true;
        logger.error('[GitSync] 启动时拉取失败', error);
      }
    }

    if (gitSettings.auto_sync) {
      await deps.startAutoSync();
      if (pullFailed) {
        try {
          await deps.pauseAutoSync();
        } catch (error) {
          deps.logger.error('[GitSync] 暂停自动同步失败', error);
        }
      }
    }

    return shouldRefresh;
  } catch (error) {
    deps.logger.error('[GitSync] Git 同步初始化失败', error);
    return false;
  }
}

export function cleanupGitEventListeners(listeners: GitEventListeners): void {
  if (listeners.gitSyncSuccess) listeners.gitSyncSuccess();
  if (listeners.gitSyncError) listeners.gitSyncError();
  if (listeners.gitPullCompleted) listeners.gitPullCompleted();
  if (listeners.gitSyncComplete) listeners.gitSyncComplete();
  if (listeners.fileCreated) listeners.fileCreated();
  if (listeners.fileModified) listeners.fileModified();
  if (listeners.fileDeleted) listeners.fileDeleted();
  if (listeners.filesChangedBatch) listeners.filesChangedBatch();
  if (listeners.dirsChangedBatch) listeners.dirsChangedBatch();
}
