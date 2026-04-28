/**
 * 应用初始化模块
 * 负责应用启动时的各种初始化任务
 * 
 * 架构说明：
 * - App.vue: 只设置基础事件监听器（语言变更）
 * - Config 页面: 设置 Git 相关事件监听器 + Git 初始化
 */

import { invoke } from '@tauri-apps/api/core';
import { ensureGitignore } from '@/api/git';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { useGitStatus } from '@/hooks/useGitStatus';
import { setLocale, type LocaleType } from '@/i18n';
import { cleanupCache } from '@/api/markdown';
import { getGitSettings } from '@/api/appConfig';
import { gitPull, startAutoSync, pauseAutoSync } from '@/api/git';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';
import type { Composer } from 'vue-i18n';

export { closeWindowByLabel, shouldCloseWindowOnEscape } from '@/utils/window-shortcuts';

/**
 * 基础事件监听器（所有窗口通用）
 */
export interface BaseEventListeners {
  languageChange: UnlistenFn | null;
}

/**
 * Git 相关事件监听器（仅 Config 窗口）
 */
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

/**
 * 检查是否应该执行初始化（防抖机制）
 */
export async function checkShouldInitialize(): Promise<boolean> {
  try {
    await invoke('register_app_init_request');
    const shouldInitialize = await invoke<boolean>('should_execute_app_init');

    if (!shouldInitialize) {
      logger.warn('[AppInit] ⚠️ 检测到重复挂载或非最后窗口，跳过初始化');
      return false;
    }

    logger.info('[AppInit] ✅ 最后一个窗口挂载，开始初始化');
    return true;
  } catch (error) {
    logger.error('[AppInit] 防抖检查失败', error);
    return false;
  }
}

/**
 * 设置基础事件监听器（所有窗口通用）
 * 只监听语言变更事件
 */
export async function setupBaseEventListeners(): Promise<BaseEventListeners> {
  const currentWindow = getCurrentWindow();
  const windowLabel = currentWindow.label;

  logger.info(`[AppInit] [${windowLabel}] 🎧 设置基础事件监听器...`);

  const listeners: BaseEventListeners = {
    languageChange: null
  };

  // 监听语言变更事件
  listeners.languageChange = await listen<{ language: LocaleType }>('language-changed', (event) => {
    setLocale(event.payload.language);
  });

  logger.info(`[AppInit] [${windowLabel}] ✅ 基础事件监听器设置完成`);

  return listeners;
}

/**
 * 设置 Git 相关事件监听器（仅 Config 窗口）
 */
export async function setupGitEventListeners(t: Composer['t']): Promise<GitEventListeners> {
  const currentWindow = getCurrentWindow();
  const windowLabel = currentWindow.label;

  // 与标题栏共用同一 Git 状态（保证指示器和设置页一致）
  const { refreshStatus, refreshSettings, _setLastSyncTime } = useGitStatus();

  logger.info(`[AppInit] [${windowLabel}] 🎧 设置 Git 事件监听器...`);

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
    // Git 自动同步成功
    listeners.gitSyncSuccess = await listen<string>('git-sync-success', (event) => {
      modal.msg(event.payload, 'success', 'bottom-right');
    });

    // Git 同步完成（手动/自动 pull & push 后都会触发）
    listeners.gitSyncComplete = await listen<{ success: boolean; last_sync_time?: string }>('git-sync-complete', async (event) => {
      if (event.payload.success && event.payload.last_sync_time) {
        _setLastSyncTime(event.payload.last_sync_time);
      }

      // 为了兼容性，收到事件后主动刷新一次设置和状态
      await refreshSettings();
      await refreshStatus();
    });

    // Git 自动同步失败
    listeners.gitSyncError = await listen<string>('git-sync-error', (event) => {
      const errorMsg = event.payload;
      logger.error(`[AppInit] [${windowLabel}] Git 自动同步失败:`, errorMsg);

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

    // Git Pull 完成（后端会先发送 files-changed-batch，此处作兜底确保刷新）
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

    // 文件创建
    listeners.fileCreated = await listen<{ path: string }>('file-created', (event) => {
      if (isProcessingFileEvent) return;
      isProcessingFileEvent = true;
      window.dispatchEvent(new CustomEvent('refresh-data', {
        detail: { source: 'file-created', path: event.payload.path }
      }));
      setTimeout(() => { isProcessingFileEvent = false; }, 2000);
    });

    // 文件修改
    listeners.fileModified = await listen<{ path: string }>('file-modified', (event) => {
      if (isProcessingFileEvent) return;
      isProcessingFileEvent = true;
      window.dispatchEvent(new CustomEvent('refresh-data', {
        detail: { source: 'file-modified', path: event.payload.path }
      }));
      setTimeout(() => { isProcessingFileEvent = false; }, 2000);
    });

    // 文件删除
    listeners.fileDeleted = await listen<{ path: string }>('file-deleted', (event) => {
      if (isProcessingFileEvent) return;
      isProcessingFileEvent = true;
      window.dispatchEvent(new CustomEvent('refresh-data', {
        detail: { source: 'file-deleted', path: event.payload.path }
      }));
      setTimeout(() => { isProcessingFileEvent = false; }, 2000);
    });

    // 批量文件变更（含 renamed 字段）
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

    // 目录批量变更（分类文件夹创建 / 删除 / 重命名）
    listeners.dirsChangedBatch = await listen<{
      created: string[],
      deleted: string[],
      renamed: Array<{ from: string; to: string }>,
    }>('dirs-changed-batch', (event) => {
      const { created, deleted, renamed } = event.payload;
      logger.info(`[AppInit] dirs-changed-batch: +${created.length} -${deleted.length} r${renamed?.length ?? 0}`);
      window.dispatchEvent(new CustomEvent('refresh-categories', {
        detail: { source: 'dirs-changed-batch', created, deleted, renamed }
      }));
    });

    logger.info(`[AppInit] [${windowLabel}] 🎉 所有 Git 事件监听器设置完成`);

  } catch (error) {
    logger.error(`[AppInit] [${windowLabel}] ❌ 设置 Git 事件监听器失败:`, error);
  }

  return listeners;
}

/**
 * 清理缓存
 */
export async function initCleanupCache(): Promise<void> {
  try {
    const removedCount = await cleanupCache();
    if (removedCount > 0) {
      logger.info(`[AppInit] 清理了 ${removedCount} 个已删除文件的元数据`);
    }
  } catch (error) {
    logger.error('[AppInit] 清理缓存失败', error);
  }
}

/**
 * 确保工作区存在 .gitignore，不存在则用默认内容创建
 */
export async function ensureWorkspaceGitignore(): Promise<void> {
  try {
    const root = await invoke<string | null>('get_workspace_root_path');
    if (!root) return;
    const created = await ensureGitignore();
    if (created) {
      logger.info('[AppInit] 已为工作区自动创建 .gitignore');
    }
  } catch (error) {
    logger.debug('[AppInit] 确保 .gitignore 跳过或失败', error);
  }
}

/**
 * Git 同步初始化
 */
export async function initGitSync(t: Composer['t']): Promise<boolean> {
  try {
    const gitSettings = await getGitSettings();

    const isFullyConfigured = gitSettings.enabled &&
      gitSettings.user_name &&
      gitSettings.user_email &&
      gitSettings.token &&
      gitSettings.remote_url;

    if (!isFullyConfigured) {
      return false;
    }

    // 启动时自动拉取
    let shouldRefresh = false;
    let pullFailed = false;
    if (gitSettings.pull_on_start) {
      try {
        const result = await gitPull();
        if (result.success && !result.has_conflicts && result.files_updated > 0) {
          modal.msg(t('settings.gitSync.pullSuccess', { count: result.files_updated }), 'success', 'bottom-right');
          shouldRefresh = true;
        } else if (result.has_conflicts) {
          // 冲突由事件监听器处理
        } else if (!result.success) {
          // 拉取失败（如远程仓库不存在）
          pullFailed = true;
        }
      } catch (error) {
        // 拉取异常（如网络错误、仓库不存在等）
        pullFailed = true;
        logger.error('[AppInit] 启动时拉取失败', error);
      }
    }

    // 启动自动同步管理器
    if (gitSettings.auto_sync) {
      await startAutoSync();
      // 如果启动时拉取失败，暂停自动同步，等待用户处理
      if (pullFailed) {
        try {
          await pauseAutoSync();
        } catch (e) {
          logger.error('[AppInit] 暂停自动同步失败', e);
        }
      }
    }

    return shouldRefresh;
  } catch (error) {
    logger.error('[AppInit] Git 同步初始化失败', error);
    return false;
  }
}

/**
 * 清理基础事件监听器
 */
export function cleanupBaseEventListeners(listeners: BaseEventListeners): void {
  if (listeners.languageChange) {
    listeners.languageChange();
  }
}

/**
 * 清理 Git 事件监听器
 */
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
