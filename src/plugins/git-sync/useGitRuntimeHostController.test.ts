import { describe, expect, it, vi } from 'vitest';
import { useGitRuntimeHostController } from './useGitRuntimeHostController';
import type { GitSyncRuntimeHost } from './gitSyncRuntimeHost';

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

describe('useGitRuntimeHostController', () => {
  it('sets up host, marks runtime ready, and resets conflict handled through runtime listeners', async () => {
    const host = createHost();
    const setupHost = vi.fn(async () => host);
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
      setupHost: vi.fn(async () => host),
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
});
