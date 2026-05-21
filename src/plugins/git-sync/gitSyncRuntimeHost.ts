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

export interface GitSyncRuntimeHost {
  gitListeners: GitEventListeners | null;
  runtimeListeners: GitSyncRuntimeListeners | null;
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
  scheduleStartupRefresh?: () => void;
  logger?: GitSyncRuntimeHostLogger;
}

export interface CleanupGitSyncRuntimeHostDeps {
  host: GitSyncRuntimeHost;
  cleanupGitEventListeners: (listeners: GitEventListeners) => void;
  cleanupGitSyncRuntimeListeners: (listeners: GitSyncRuntimeListeners) => void;
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
    runtimeListeners: null
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

  return host;
}

export function cleanupGitSyncRuntimeHost(
  deps: CleanupGitSyncRuntimeHostDeps
): void {
  if (deps.host.gitListeners) {
    deps.cleanupGitEventListeners(deps.host.gitListeners);
    deps.logger?.info('[GitSync] Git 事件监听器已清理');
  }

  if (deps.host.runtimeListeners) {
    deps.cleanupGitSyncRuntimeListeners(deps.host.runtimeListeners);
    deps.logger?.info('[GitSync] Git runtime 事件监听器已清理');
  }
}
