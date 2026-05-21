import { getGitSettings as loadGitSettings } from '@/api/appConfig';
import { logger as defaultLogger } from '@/utils/logger';
import {
  getAutoSyncStatus as loadAutoSyncStatus,
  startAutoSync as startGitAutoSync,
  stopAutoSync as stopGitAutoSync
} from './api';

type GitAutoSyncLogger = {
  info: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

export interface GitAutoSyncLifecycleDeps {
  isPluginEnabled?: () => boolean;
  getGitSettings?: typeof loadGitSettings;
  getAutoSyncStatus?: typeof loadAutoSyncStatus;
  startAutoSync?: typeof startGitAutoSync;
  stopAutoSync?: typeof stopGitAutoSync;
  logger?: GitAutoSyncLogger;
}

const resolveDeps = (deps: GitAutoSyncLifecycleDeps = {}) => ({
  isPluginEnabled: deps.isPluginEnabled ?? (() => true),
  getGitSettings: deps.getGitSettings ?? loadGitSettings,
  getAutoSyncStatus: deps.getAutoSyncStatus ?? loadAutoSyncStatus,
  startAutoSync: deps.startAutoSync ?? startGitAutoSync,
  stopAutoSync: deps.stopAutoSync ?? stopGitAutoSync,
  logger: deps.logger ?? defaultLogger
});

export async function startAutoSyncForVisibleWindow(
  deps: GitAutoSyncLifecycleDeps = {}
): Promise<boolean> {
  const {
    isPluginEnabled,
    getGitSettings,
    getAutoSyncStatus,
    startAutoSync,
    logger
  } = resolveDeps(deps);

  if (!isPluginEnabled()) {
    return false;
  }

  try {
    const gitSettings = await getGitSettings();

    if (!gitSettings.enabled || !gitSettings.auto_sync) {
      return false;
    }

    const isRunning = await getAutoSyncStatus();

    if (isRunning) {
      logger.info('[GitSync] 窗口显示，自动同步已在运行');
      return false;
    }

    await startAutoSync();
    logger.info('[GitSync] 窗口显示，已启动自动同步');
    return true;
  } catch (error) {
    logger.error('[GitSync] 启动自动同步失败:', error);
    return false;
  }
}

export async function stopAutoSyncForHiddenWindow(
  deps: GitAutoSyncLifecycleDeps = {}
): Promise<boolean> {
  const {
    isPluginEnabled,
    getAutoSyncStatus,
    stopAutoSync,
    logger
  } = resolveDeps(deps);

  if (!isPluginEnabled()) {
    return false;
  }

  try {
    const isRunning = await getAutoSyncStatus();

    if (!isRunning) {
      return false;
    }

    await stopAutoSync();
    logger.info('[GitSync] 窗口隐藏，已停止自动同步');
    return true;
  } catch (error) {
    logger.error('[GitSync] 停止自动同步失败:', error);
    return false;
  }
}
