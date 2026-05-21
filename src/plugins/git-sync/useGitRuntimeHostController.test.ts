import { describe, expect, it, vi } from 'vitest';
import {
  useGitRuntimeHostController,
  type SetupGitRuntimeHostControllerDeps
} from './useGitRuntimeHostController';
import type { GitSyncRuntimeHost } from './gitSyncRuntimeHost';
import { useGitRuntimeState } from './useGitRuntimeState';

const t = ((key: string) => key) as any;

const createHost = (): GitSyncRuntimeHost => ({
  gitListeners: null,
  runtimeListeners: {
    conflict: vi.fn(),
    repoNotFound: vi.fn(),
    resetConflictHandled: vi.fn()
  },
  autoSyncWindowListeners: null
});

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

describe('useGitRuntimeHostController', () => {
  it('sets up host, marks runtime ready, and resets conflict handled through runtime listeners', async () => {
    const host = createHost();
    const setupHost = vi.fn(async (_deps: SetupGitRuntimeHostControllerDeps) => host);
    const controller = useGitRuntimeHostController({
      setupHost,
      cleanupHost: vi.fn(),
      logger: { info: vi.fn() }
    });

    await controller.setup({
      t,
      shouldInit: true,
      isConflictDialogVisible: vi.fn(() => false),
      onConflictDetected: vi.fn(),
      onRepoNotFound: vi.fn(),
      isPluginEnabled: vi.fn(() => true)
    });
    controller.resetConflictHandled();

    expect(controller.ready.value).toBe(true);
    expect(controller.host.value).toMatchObject({
      gitListeners: null,
      autoSyncWindowListeners: null
    });
    expect(setupHost).toHaveBeenCalledWith(expect.objectContaining({
      t,
      shouldInit: true
    }));
    expect(host.runtimeListeners?.resetConflictHandled).toHaveBeenCalled();
  });

  it('cleans up host and clears ready state', async () => {
    const host = createHost();
    const cleanupHost = vi.fn(async () => undefined);
    const isPluginEnabled = vi.fn(() => true);
    const controller = useGitRuntimeHostController({
      setupHost: vi.fn(async (_deps: SetupGitRuntimeHostControllerDeps) => host),
      cleanupHost,
      logger: { info: vi.fn() }
    });

    await controller.setup({
      t,
      shouldInit: false,
      isConflictDialogVisible: vi.fn(() => false),
      onConflictDetected: vi.fn(),
      onRepoNotFound: vi.fn(),
      isPluginEnabled
    });
    await controller.cleanup(isPluginEnabled);

    expect(cleanupHost).toHaveBeenCalledWith(expect.objectContaining({
      host,
      isPluginEnabled
    }));
    expect(controller.ready.value).toBe(false);
    expect(controller.host.value).toBeNull();
  });

  it('sets up host callbacks from runtime state', async () => {
    const host = createHost();
    const setupHost = vi.fn(async (_deps: SetupGitRuntimeHostControllerDeps) => host);
    const state = useGitRuntimeState({ t, storage: createStorage() });
    const controller = useGitRuntimeHostController({
      setupHost,
      cleanupHost: vi.fn(),
      logger: { info: vi.fn() }
    });

    await controller.setupWithState({
      t,
      shouldInit: true,
      state,
      isPluginEnabled: vi.fn(() => true)
    });
    const setupArg = setupHost.mock.calls[0][0];

    expect(setupArg.isConflictDialogVisible()).toBe(false);
    setupArg.onConflictDetected({
      conflictFiles: ['a.md'],
      untrackedFiles: ['b.md']
    });
    setupArg.onRepoNotFound({
      remoteUrl: 'git@example.com/repo.git',
      operation: 'pull'
    });

    expect(state.dialogs.conflictFiles.value).toEqual(['a.md']);
    expect(state.dialogs.untrackedFiles.value).toEqual(['b.md']);
    expect(state.dialogs.showConflictDialog.value).toBe(true);
    expect(state.repoNotFound.visible.value).toBe(true);
    expect(state.repoNotFound.info.value).toEqual({
      remoteUrl: 'git@example.com/repo.git',
      operation: 'pull'
    });
  });
});
