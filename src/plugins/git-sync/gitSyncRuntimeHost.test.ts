import { describe, expect, it, vi } from 'vitest';
import {
  cleanupConfiguredGitSyncRuntimeHost,
  cleanupGitSyncRuntimeHost,
  setupConfiguredGitSyncRuntimeHost,
  setupGitSyncRuntimeHost,
  type GitSyncRuntimeHost
} from './gitSyncRuntimeHost';

const t = ((key: string) => key) as any;

const createDeps = () => ({
  t,
  shouldInit: true,
  setupGitEventListeners: vi.fn(async () => ({
    gitSyncSuccess: vi.fn(),
    gitSyncError: null,
    gitPullCompleted: null,
    gitSyncComplete: null,
    fileCreated: null,
    fileModified: null,
    fileDeleted: null,
    filesChangedBatch: null,
    dirsChangedBatch: null
  })),
  setupGitSyncRuntimeListeners: vi.fn(async () => ({
    conflict: vi.fn(),
    repoNotFound: vi.fn(),
    resetConflictHandled: vi.fn()
  })),
  ensureWorkspaceGitignore: vi.fn(async () => undefined),
  initGitSync: vi.fn(async () => true),
  isConflictDialogVisible: vi.fn(() => false),
  onConflictDetected: vi.fn(),
  onRepoNotFound: vi.fn(),
  scheduleStartupRefresh: vi.fn(),
  autoSyncWindow: {
    listen: vi.fn(async (
      _event: 'tauri://show' | 'tauri://hide',
      _handler: () => void | Promise<void>
    ) => vi.fn()),
    isVisible: vi.fn(async () => false)
  },
  startAutoSyncForVisibleWindow: vi.fn(async () => true),
  stopAutoSyncForHiddenWindow: vi.fn(async () => true),
  isPluginEnabled: vi.fn(() => true),
  logger: {
    info: vi.fn()
  }
});

describe('git sync runtime host', () => {
  it('sets up configured host from plugin runtime modules', async () => {
    const deps = createDeps();

    await setupConfiguredGitSyncRuntimeHost({
      t,
      shouldInit: true,
      isConflictDialogVisible: deps.isConflictDialogVisible,
      onConflictDetected: deps.onConflictDetected,
      onRepoNotFound: deps.onRepoNotFound,
      autoSyncWindow: deps.autoSyncWindow,
      isPluginEnabled: deps.isPluginEnabled,
      scheduleStartupRefresh: deps.scheduleStartupRefresh,
      loadGitLifecycle: async () => ({
        setupGitEventListeners: deps.setupGitEventListeners,
        cleanupGitEventListeners: vi.fn(),
        ensureWorkspaceGitignore: deps.ensureWorkspaceGitignore,
        initGitSync: deps.initGitSync
      } as any),
      loadGitSyncRuntime: async () => ({
        setupGitSyncRuntimeListeners: deps.setupGitSyncRuntimeListeners,
        cleanupGitSyncRuntimeListeners: vi.fn()
      } as any),
      loadGitAutoSyncLifecycle: async () => ({
        startAutoSyncForVisibleWindow: deps.startAutoSyncForVisibleWindow,
        stopAutoSyncForHiddenWindow: deps.stopAutoSyncForHiddenWindow
      } as any)
    });

    expect(deps.setupGitEventListeners).toHaveBeenCalledWith(t);
    expect(deps.setupGitSyncRuntimeListeners).toHaveBeenCalled();
    expect(deps.ensureWorkspaceGitignore).toHaveBeenCalled();
    expect(deps.initGitSync).toHaveBeenCalledWith(t);
    expect(deps.autoSyncWindow.listen).toHaveBeenCalledWith('tauri://show', expect.any(Function));
  });

  it('sets up event listeners, runtime listeners, gitignore, init, and startup refresh', async () => {
    const deps = createDeps();

    const host = await setupGitSyncRuntimeHost(deps);

    expect(deps.setupGitEventListeners).toHaveBeenCalledWith(t);
    expect(deps.setupGitSyncRuntimeListeners).toHaveBeenCalledWith({
      isConflictDialogVisible: deps.isConflictDialogVisible,
      onConflictDetected: deps.onConflictDetected,
      onRepoNotFound: deps.onRepoNotFound
    });
    expect(deps.ensureWorkspaceGitignore).toHaveBeenCalled();
    expect(deps.initGitSync).toHaveBeenCalledWith(t);
    expect(deps.scheduleStartupRefresh).toHaveBeenCalled();
    expect(deps.autoSyncWindow.listen).toHaveBeenCalledWith('tauri://show', expect.any(Function));
    expect(deps.autoSyncWindow.listen).toHaveBeenCalledWith('tauri://hide', expect.any(Function));
    expect(host.gitListeners).not.toBeNull();
    expect(host.runtimeListeners).not.toBeNull();
  });

  it('skips init when global app init is not required', async () => {
    const deps = {
      ...createDeps(),
      shouldInit: false
    };

    await setupGitSyncRuntimeHost(deps);

    expect(deps.initGitSync).not.toHaveBeenCalled();
    expect(deps.scheduleStartupRefresh).not.toHaveBeenCalled();
  });

  it('starts auto sync when the window is visible on setup', async () => {
    const deps = createDeps();
    deps.autoSyncWindow.isVisible.mockResolvedValue(true);

    await setupGitSyncRuntimeHost(deps);

    expect(deps.startAutoSyncForVisibleWindow).toHaveBeenCalledWith({
      isPluginEnabled: deps.isPluginEnabled
    });
  });

  it('handles auto sync window show and hide events', async () => {
    const handlers: Record<string, () => void | Promise<void>> = {};
    const deps = createDeps();
    deps.autoSyncWindow.listen.mockImplementation(async (event, handler) => {
      handlers[event] = handler;
      return vi.fn();
    });

    await setupGitSyncRuntimeHost(deps);
    await handlers['tauri://show']();
    await handlers['tauri://hide']();

    expect(deps.startAutoSyncForVisibleWindow).toHaveBeenCalledWith({
      isPluginEnabled: deps.isPluginEnabled
    });
    expect(deps.stopAutoSyncForHiddenWindow).toHaveBeenCalledWith({
      isPluginEnabled: deps.isPluginEnabled
    });
  });

  it('cleans up host listeners', async () => {
    const gitCleanup = vi.fn();
    const runtimeCleanup = vi.fn();
    const showCleanup = vi.fn();
    const hideCleanup = vi.fn();
    const stopAutoSync = vi.fn(async () => true);
    const isPluginEnabled = vi.fn(() => true);
    const host: GitSyncRuntimeHost = {
      gitListeners: {
        gitSyncSuccess: vi.fn(),
        gitSyncError: null,
        gitPullCompleted: null,
        gitSyncComplete: null,
        fileCreated: null,
        fileModified: null,
        fileDeleted: null,
        filesChangedBatch: null,
        dirsChangedBatch: null
      },
      runtimeListeners: {
        conflict: vi.fn(),
        repoNotFound: vi.fn(),
        resetConflictHandled: vi.fn()
      },
      autoSyncWindowListeners: {
        show: showCleanup,
        hide: hideCleanup
      }
    };

    await cleanupGitSyncRuntimeHost({
      host,
      cleanupGitEventListeners: gitCleanup,
      cleanupGitSyncRuntimeListeners: runtimeCleanup,
      stopAutoSyncForHiddenWindow: stopAutoSync,
      isPluginEnabled
    });

    expect(gitCleanup).toHaveBeenCalledWith(host.gitListeners);
    expect(runtimeCleanup).toHaveBeenCalledWith(host.runtimeListeners);
    expect(showCleanup).toHaveBeenCalled();
    expect(hideCleanup).toHaveBeenCalled();
    expect(stopAutoSync).toHaveBeenCalledWith({
      isPluginEnabled
    });
  });

  it('cleans up configured host from plugin runtime modules', async () => {
    const gitCleanup = vi.fn();
    const runtimeCleanup = vi.fn();
    const stopAutoSync = vi.fn(async () => true);
    const isPluginEnabled = vi.fn(() => true);
    const host: GitSyncRuntimeHost = {
      gitListeners: {
        gitSyncSuccess: vi.fn(),
        gitSyncError: null,
        gitPullCompleted: null,
        gitSyncComplete: null,
        fileCreated: null,
        fileModified: null,
        fileDeleted: null,
        filesChangedBatch: null,
        dirsChangedBatch: null
      },
      runtimeListeners: {
        conflict: vi.fn(),
        repoNotFound: vi.fn(),
        resetConflictHandled: vi.fn()
      },
      autoSyncWindowListeners: null
    };

    await cleanupConfiguredGitSyncRuntimeHost({
      host,
      isPluginEnabled,
      loadGitLifecycle: async () => ({
        setupGitEventListeners: vi.fn(),
        cleanupGitEventListeners: gitCleanup,
        ensureWorkspaceGitignore: vi.fn(),
        initGitSync: vi.fn()
      } as any),
      loadGitSyncRuntime: async () => ({
        setupGitSyncRuntimeListeners: vi.fn(),
        cleanupGitSyncRuntimeListeners: runtimeCleanup
      } as any),
      loadGitAutoSyncLifecycle: async () => ({
        startAutoSyncForVisibleWindow: vi.fn(),
        stopAutoSyncForHiddenWindow: stopAutoSync
      } as any)
    });

    expect(gitCleanup).toHaveBeenCalledWith(host.gitListeners);
    expect(runtimeCleanup).toHaveBeenCalledWith(host.runtimeListeners);
    expect(stopAutoSync).toHaveBeenCalledWith({
      isPluginEnabled
    });
  });
});
