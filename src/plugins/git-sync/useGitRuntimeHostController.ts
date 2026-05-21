import { ref } from 'vue';
import type { Composer } from 'vue-i18n';
import { logger as defaultLogger } from '@/utils/logger';
import {
  cleanupConfiguredGitSyncRuntimeHost,
  setupConfiguredGitSyncRuntimeHost,
  type GitSyncRuntimeHost
} from './gitSyncRuntimeHost';
import type {
  GitConflictRuntimeEvent,
  GitRepoNotFoundRuntimeEvent
} from './gitSyncRuntime';

type GitRuntimeHostControllerLogger = {
  info: (message: string, data?: unknown, ...args: unknown[]) => void;
};

type GitRuntimeHostWindow = {
  listen: (
    event: 'tauri://show' | 'tauri://hide',
    handler: () => void | Promise<void>
  ) => Promise<() => void>;
  isVisible: () => Promise<boolean>;
};

export interface SetupGitRuntimeHostControllerDeps {
  t: Composer['t'];
  shouldInit: boolean;
  isConflictDialogVisible: () => boolean;
  onConflictDetected: (event: GitConflictRuntimeEvent) => void | Promise<void>;
  onRepoNotFound: (event: GitRepoNotFoundRuntimeEvent) => void | Promise<void>;
  autoSyncWindow?: GitRuntimeHostWindow;
  isPluginEnabled?: () => boolean;
}

export interface GitRuntimeHostControllerDeps {
  logger?: GitRuntimeHostControllerLogger;
  setupHost?: typeof setupConfiguredGitSyncRuntimeHost;
  cleanupHost?: typeof cleanupConfiguredGitSyncRuntimeHost;
}

export function useGitRuntimeHostController(deps: GitRuntimeHostControllerDeps = {}) {
  const logger = deps.logger ?? defaultLogger;
  const setupHost = deps.setupHost ?? setupConfiguredGitSyncRuntimeHost;
  const cleanupHost = deps.cleanupHost ?? cleanupConfiguredGitSyncRuntimeHost;
  const ready = ref(false);
  const host = ref<GitSyncRuntimeHost | null>(null);

  const setup = async (setupDeps: SetupGitRuntimeHostControllerDeps) => {
    ready.value = true;
    host.value = await setupHost({
      ...setupDeps,
      logger
    });
    logger.info('[GitSync] runtime host 已设置');
  };

  const cleanup = async (isPluginEnabled?: () => boolean) => {
    if (!host.value) return;

    await cleanupHost({
      host: host.value,
      isPluginEnabled,
      logger
    });
    host.value = null;
    ready.value = false;
  };

  const resetConflictHandled = () => {
    host.value?.runtimeListeners?.resetConflictHandled();
  };

  return {
    ready,
    host,
    setup,
    cleanup,
    resetConflictHandled
  };
}

export type GitRuntimeHostController = ReturnType<typeof useGitRuntimeHostController>;
