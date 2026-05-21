import { describe, expect, it, vi } from 'vitest';
import {
  cleanupGitSyncRuntimeHost,
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
  logger: {
    info: vi.fn()
  }
});

describe('git sync runtime host', () => {
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

  it('cleans up host listeners', () => {
    const gitCleanup = vi.fn();
    const runtimeCleanup = vi.fn();
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
      }
    };

    cleanupGitSyncRuntimeHost({
      host,
      cleanupGitEventListeners: gitCleanup,
      cleanupGitSyncRuntimeListeners: runtimeCleanup
    });

    expect(gitCleanup).toHaveBeenCalledWith(host.gitListeners);
    expect(runtimeCleanup).toHaveBeenCalledWith(host.runtimeListeners);
  });
});
