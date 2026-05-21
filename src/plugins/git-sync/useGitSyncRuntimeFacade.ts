import type { Composer } from 'vue-i18n';
import type { MessagePosition } from '@/utils/modal';
import { logger as defaultLogger } from '@/utils/logger';
import { useGitRuntimeController } from './useGitRuntimeController';
import {
  useGitRuntimeHostController,
  type GitRuntimeHostControllerDeps
} from './useGitRuntimeHostController';
import { useGitRuntimeState, type GitRuntimeStateDeps } from './useGitRuntimeState';

type GitSyncRuntimeLogger = {
  info: (message: string, data?: unknown, ...args: unknown[]) => void;
  error: (message: string, data?: unknown) => void;
};

type ModalMsg = (
  message: string,
  type?: 'success' | 'warning' | 'info' | 'error',
  position?: MessagePosition,
  duration?: number
) => void;

type GitRuntimeWindow = {
  listen: (
    event: 'tauri://show' | 'tauri://hide',
    handler: () => void | Promise<void>
  ) => Promise<() => void>;
  isVisible: () => Promise<boolean>;
};

export interface GitSyncRuntimeFacadeDeps {
  t: Composer['t'];
  modalMsg: ModalMsg;
  routeToGitSettings: () => unknown | Promise<unknown>;
  isPluginEnabled: () => boolean;
  logger?: GitSyncRuntimeLogger;
  stateDeps?: Omit<GitRuntimeStateDeps, 't'>;
  hostControllerDeps?: Omit<GitRuntimeHostControllerDeps, 'logger'>;
}

export interface SetupGitSyncRuntimeFacadeDeps {
  shouldInit: boolean;
  autoSyncWindow?: GitRuntimeWindow;
}

export function useGitSyncRuntimeFacade(deps: GitSyncRuntimeFacadeDeps) {
  const logger = deps.logger ?? defaultLogger;
  const state = useGitRuntimeState({
    t: deps.t,
    ...deps.stateDeps
  });
  const hostController = useGitRuntimeHostController({
    ...deps.hostControllerDeps,
    logger
  });
  const controller = useGitRuntimeController({
    t: deps.t,
    modalMsg: deps.modalMsg,
    routeToGitSettings: deps.routeToGitSettings,
    resetConflictHandled: hostController.resetConflictHandled,
    state,
    logger
  });

  const setup = async ({ shouldInit, autoSyncWindow }: SetupGitSyncRuntimeFacadeDeps) => {
    if (!deps.isPluginEnabled()) {
      logger.info('[Config] Git 同步插件未启用，跳过 Git 事件监听和自动同步初始化');
      return;
    }

    await hostController.setupWithState({
      t: deps.t,
      shouldInit,
      state,
      autoSyncWindow,
      isPluginEnabled: deps.isPluginEnabled
    });
  };

  const restoreConflictDialogState = () => state.dialogs.restoreConflictDialogState();
  const cleanup = () => hostController.cleanup(deps.isPluginEnabled);

  return {
    state,
    controller,
    portalRef: controller.gitSyncRuntimePortalRef,
    ready: hostController.ready,
    setup,
    restoreConflictDialogState,
    cleanup
  };
}

export type GitSyncRuntimeFacade = ReturnType<typeof useGitSyncRuntimeFacade>;
