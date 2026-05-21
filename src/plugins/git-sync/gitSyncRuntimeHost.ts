import type { Composer } from 'vue-i18n';
import type { GitEventListeners } from './lifecycle';
import type {
  GitConflictRuntimeEvent,
  GitRepoNotFoundRuntimeEvent,
  GitSyncRuntimeListeners
} from './gitSyncRuntime';

type GitSyncRuntimeHostLogger = {
  info: (message: string, data?: unknown, ...args: unknown[]) => void;
};

type GitSyncAutoSyncWindow = {
  listen: (
    event: 'tauri://show' | 'tauri://hide',
    handler: () => void | Promise<void>
  ) => Promise<() => void>;
  isVisible: () => Promise<boolean>;
};

type GitSyncAutoSyncLifecycleFn = (deps: {
  isPluginEnabled?: () => boolean;
}) => Promise<boolean>;

export interface GitSyncAutoSyncWindowListeners {
  show: (() => void) | null;
  hide: (() => void) | null;
}

export interface GitSyncRuntimeHost {
  gitListeners: GitEventListeners | null;
  runtimeListeners: GitSyncRuntimeListeners | null;
  autoSyncWindowListeners: GitSyncAutoSyncWindowListeners | null;
}

export interface GitSyncRuntimeHostDeps {
  t: Composer['t'];
  shouldInit: boolean;
  setupGitEventListeners: (t: Composer['t']) => Promise<GitEventListeners>;
  setupGitSyncRuntimeListeners: (deps: {
    isConflictDialogVisible: () => boolean;
    onConflictDetected: (event: GitConflictRuntimeEvent) => void | Promise<void>;
    onRepoNotFound: (event: GitRepoNotFoundRuntimeEvent) => void | Promise<void>;
  }) => Promise<GitSyncRuntimeListeners>;
  ensureWorkspaceGitignore: () => Promise<void>;
  initGitSync: (t: Composer['t']) => Promise<boolean>;
  isConflictDialogVisible: () => boolean;
  onConflictDetected: (event: GitConflictRuntimeEvent) => void | Promise<void>;
  onRepoNotFound: (event: GitRepoNotFoundRuntimeEvent) => void | Promise<void>;
  autoSyncWindow?: GitSyncAutoSyncWindow;
  startAutoSyncForVisibleWindow?: GitSyncAutoSyncLifecycleFn;
  stopAutoSyncForHiddenWindow?: GitSyncAutoSyncLifecycleFn;
  isPluginEnabled?: () => boolean;
  scheduleStartupRefresh?: () => void;
  logger?: GitSyncRuntimeHostLogger;
}

export interface CleanupGitSyncRuntimeHostDeps {
  host: GitSyncRuntimeHost;
  cleanupGitEventListeners: (listeners: GitEventListeners) => void;
  cleanupGitSyncRuntimeListeners: (listeners: GitSyncRuntimeListeners) => void;
  stopAutoSyncForHiddenWindow?: GitSyncAutoSyncLifecycleFn;
  isPluginEnabled?: () => boolean;
  logger?: GitSyncRuntimeHostLogger;
}

const defaultScheduleStartupRefresh = () => {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('refresh-data', {
      detail: { source: 'startup-pull' }
    }));
  }, 500);
};

export async function setupGitSyncRuntimeHost(
  deps: GitSyncRuntimeHostDeps
): Promise<GitSyncRuntimeHost> {
  const logger = deps.logger;
  const host: GitSyncRuntimeHost = {
    gitListeners: null,
    runtimeListeners: null,
    autoSyncWindowListeners: null
  };

  host.gitListeners = await deps.setupGitEventListeners(deps.t);
  logger?.info('[GitSync] Git 事件监听器已设置');

  host.runtimeListeners = await deps.setupGitSyncRuntimeListeners({
    isConflictDialogVisible: deps.isConflictDialogVisible,
    onConflictDetected: deps.onConflictDetected,
    onRepoNotFound: deps.onRepoNotFound
  });
  logger?.info('[GitSync] Git runtime 事件监听器已设置');

  await deps.ensureWorkspaceGitignore();

  if (deps.shouldInit) {
    const shouldRefresh = await deps.initGitSync(deps.t);
    if (shouldRefresh) {
      (deps.scheduleStartupRefresh ?? defaultScheduleStartupRefresh)();
    }
  }

  if (
    deps.autoSyncWindow &&
    deps.startAutoSyncForVisibleWindow &&
    deps.stopAutoSyncForHiddenWindow
  ) {
    host.autoSyncWindowListeners = await setupAutoSyncWindowLifecycle(deps);
  }

  return host;
}

export async function cleanupGitSyncRuntimeHost(
  deps: CleanupGitSyncRuntimeHostDeps
): Promise<void> {
  if (deps.host.gitListeners) {
    deps.cleanupGitEventListeners(deps.host.gitListeners);
    deps.logger?.info('[GitSync] Git 事件监听器已清理');
  }

  if (deps.host.runtimeListeners) {
    deps.cleanupGitSyncRuntimeListeners(deps.host.runtimeListeners);
    deps.logger?.info('[GitSync] Git runtime 事件监听器已清理');
  }

  if (deps.host.autoSyncWindowListeners) {
    deps.host.autoSyncWindowListeners.show?.();
    deps.host.autoSyncWindowListeners.hide?.();
    deps.logger?.info('[GitSync] Git 自动同步窗口监听器已清理');
  }

  if (deps.stopAutoSyncForHiddenWindow) {
    await deps.stopAutoSyncForHiddenWindow({
      isPluginEnabled: deps.isPluginEnabled
    });
  }
}

async function setupAutoSyncWindowLifecycle(
  deps: GitSyncRuntimeHostDeps
): Promise<GitSyncAutoSyncWindowListeners> {
  const autoSyncWindow = deps.autoSyncWindow;
  const startAutoSyncForVisibleWindow = deps.startAutoSyncForVisibleWindow;
  const stopAutoSyncForHiddenWindow = deps.stopAutoSyncForHiddenWindow;

  if (!autoSyncWindow || !startAutoSyncForVisibleWindow || !stopAutoSyncForHiddenWindow) {
    return {
      show: null,
      hide: null
    };
  }

  const startAutoSync = async () => {
    await startAutoSyncForVisibleWindow({
      isPluginEnabled: deps.isPluginEnabled
    });
  };
  const stopAutoSync = async () => {
    await stopAutoSyncForHiddenWindow({
      isPluginEnabled: deps.isPluginEnabled
    });
  };

  const show = await autoSyncWindow.listen('tauri://show', async () => {
    deps.logger?.info('[GitSync] 窗口显示事件触发');
    await startAutoSync();
  });

  const hide = await autoSyncWindow.listen('tauri://hide', async () => {
    deps.logger?.info('[GitSync] 窗口隐藏事件触发');
    await stopAutoSync();
  });

  if (await autoSyncWindow.isVisible()) {
    await startAutoSync();
  }

  return {
    show,
    hide
  };
}
