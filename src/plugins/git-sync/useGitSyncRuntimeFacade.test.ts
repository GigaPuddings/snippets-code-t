import { describe, expect, it, vi } from 'vitest';
import { useGitSyncRuntimeFacade } from './useGitSyncRuntimeFacade';
import type { GitSyncRuntimeHost } from './gitSyncRuntimeHost';
import type { SetupGitRuntimeHostControllerDeps } from './useGitRuntimeHostController';

const t = ((key: string) => key) as any;

const createStorage = () => {
  const data = new Map<string, string>();
  return {
    getItem: vi.fn((key: string) => data.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => {
      data.set(key, value);
    }),
    removeItem: vi.fn((key: string) => {
      data.delete(key);
    })
  };
};

const createHost = (): GitSyncRuntimeHost => ({
  gitListeners: null,
  runtimeListeners: {
    conflict: vi.fn(),
    repoNotFound: vi.fn(),
    resetConflictHandled: vi.fn()
  },
  autoSyncWindowListeners: null
});

const createFacade = (overrides: {
  enabled?: boolean;
  setupHost?: (deps: SetupGitRuntimeHostControllerDeps) => Promise<GitSyncRuntimeHost>;
  cleanupHost?: () => Promise<void>;
} = {}) => {
  const logger = {
    info: vi.fn(),
    error: vi.fn()
  };

  return {
    logger,
    facade: useGitSyncRuntimeFacade({
      t,
      modalMsg: vi.fn(),
      routeToGitSettings: vi.fn(),
      isPluginEnabled: vi.fn(() => overrides.enabled ?? true),
      logger,
      stateDeps: {
        storage: createStorage(),
        logger
      },
      hostControllerDeps: {
        setupHost: overrides.setupHost,
        cleanupHost: overrides.cleanupHost
      }
    })
  };
};

describe('useGitSyncRuntimeFacade', () => {
  it('sets up enabled git runtime with state callbacks', async () => {
    const host = createHost();
    const setupHost = vi.fn(async (_deps: SetupGitRuntimeHostControllerDeps) => host);
    const { facade } = createFacade({ setupHost });

    await facade.setup({ shouldInit: true });
    const setupArg = setupHost.mock.calls[0][0];
    setupArg.onConflictDetected({
      conflictFiles: ['a.md'],
      untrackedFiles: ['b.md']
    });

    expect(facade.ready.value).toBe(true);
    expect(facade.state.dialogs.conflictFiles.value).toEqual(['a.md']);
    expect(facade.state.dialogs.untrackedFiles.value).toEqual(['b.md']);
    expect(facade.state.dialogs.showConflictDialog.value).toBe(true);
  });

  it('skips setup when git sync plugin is disabled', async () => {
    const setupHost = vi.fn(async (_deps: SetupGitRuntimeHostControllerDeps) => createHost());
    const { facade, logger } = createFacade({
      enabled: false,
      setupHost
    });

    await facade.setup({ shouldInit: true });

    expect(setupHost).not.toHaveBeenCalled();
    expect(facade.ready.value).toBe(false);
    expect(logger.info).toHaveBeenCalledWith('[Config] Git 同步插件未启用，跳过 Git 事件监听和自动同步初始化');
  });

  it('restores persisted conflict dialog state', () => {
    const storage = createStorage();
    storage.setItem('git-conflict-state', JSON.stringify({
      conflictFiles: ['persisted.md'],
      timestamp: Date.now()
    }));
    const facade = useGitSyncRuntimeFacade({
      t,
      modalMsg: vi.fn(),
      routeToGitSettings: vi.fn(),
      isPluginEnabled: vi.fn(() => true),
      stateDeps: {
        storage,
        logger: { info: vi.fn() }
      },
      hostControllerDeps: {
        setupHost: vi.fn(async (_deps: SetupGitRuntimeHostControllerDeps) => createHost())
      }
    });

    expect(facade.restoreConflictDialogState()).toBe(true);
    expect(facade.state.dialogs.conflictFiles.value).toEqual(['persisted.md']);
    expect(facade.state.dialogs.showConflictDialog.value).toBe(true);
  });

  it('sets up runtime and restores persisted conflict state through one entry', async () => {
    const storage = createStorage();
    storage.setItem('git-conflict-state', JSON.stringify({
      conflictFiles: ['persisted.md'],
      timestamp: Date.now()
    }));
    const setupHost = vi.fn(async (_deps: SetupGitRuntimeHostControllerDeps) => createHost());
    const facade = useGitSyncRuntimeFacade({
      t,
      modalMsg: vi.fn(),
      routeToGitSettings: vi.fn(),
      isPluginEnabled: vi.fn(() => true),
      stateDeps: {
        storage,
        logger: { info: vi.fn() }
      },
      hostControllerDeps: {
        setupHost
      }
    });

    await expect(facade.setupAndRestore({ shouldInit: true })).resolves.toBe(true);

    expect(setupHost).toHaveBeenCalled();
    expect(facade.ready.value).toBe(true);
    expect(facade.state.dialogs.conflictFiles.value).toEqual(['persisted.md']);
  });

  it('cleans up runtime host', async () => {
    const host = createHost();
    const cleanupHost = vi.fn(async () => undefined);
    const { facade } = createFacade({
      setupHost: vi.fn(async (_deps: SetupGitRuntimeHostControllerDeps) => host),
      cleanupHost
    });

    await facade.setup({ shouldInit: true });
    await facade.cleanup();

    expect(cleanupHost).toHaveBeenCalled();
    expect(facade.ready.value).toBe(false);
  });
});
