import { describe, expect, it, vi } from 'vitest';
import {
  cleanupGitSyncRuntimeListeners,
  setupGitSyncRuntimeListeners,
  type GitSyncRuntimeDeps
} from './gitSyncRuntime';

type Handler = (event: { payload: any }) => void | Promise<void>;

const createHarness = () => {
  const handlers = new Map<string, Handler>();
  const unlistenFns = new Map<string, ReturnType<typeof vi.fn>>();
  const listen = vi.fn(async (eventName: string, handler: Handler) => {
    const unlisten = vi.fn();
    handlers.set(eventName, handler);
    unlistenFns.set(eventName, unlisten);
    return unlisten;
  }) as unknown as GitSyncRuntimeDeps['listen'];

  return {
    listen,
    handlers,
    unlistenFns
  };
};

const logger = {
  info: vi.fn(),
  error: vi.fn()
};

describe('git sync runtime listeners', () => {
  it('decodes conflict payload, pauses auto sync, and forwards UI state', async () => {
    const harness = createHarness();
    const pauseAutoSync = vi.fn(async () => undefined);
    const onConflictDetected = vi.fn();
    const onRepoNotFound = vi.fn();

    await setupGitSyncRuntimeListeners({
      listen: harness.listen,
      pauseAutoSync,
      logger,
      onConflictDetected,
      onRepoNotFound
    });

    await harness.handlers.get('git-conflict-detected')?.({
      payload: {
        conflict_files: ['"notes/\\346\\265\\213\\350\\257\\225.md"'],
        untracked_files: ['"draft.md"']
      }
    });

    expect(pauseAutoSync).toHaveBeenCalled();
    expect(onConflictDetected).toHaveBeenCalledWith({
      conflictFiles: ['notes/测试.md'],
      untrackedFiles: ['draft.md']
    });
  });

  it('skips duplicate conflict events while conflict dialog is visible', async () => {
    const harness = createHarness();
    const onConflictDetected = vi.fn();

    await setupGitSyncRuntimeListeners({
      listen: harness.listen,
      pauseAutoSync: vi.fn(async () => undefined),
      logger,
      isConflictDialogVisible: () => true,
      onConflictDetected,
      onRepoNotFound: vi.fn()
    });

    await harness.handlers.get('git-conflict-detected')?.({
      payload: { conflict_files: ['a.md'] }
    });
    await harness.handlers.get('git-conflict-detected')?.({
      payload: { conflict_files: ['b.md'] }
    });

    expect(onConflictDetected).toHaveBeenCalledTimes(1);
    expect(onConflictDetected).toHaveBeenCalledWith({
      conflictFiles: ['a.md'],
      untrackedFiles: []
    });
  });

  it('allows conflict events again after resetting handled state', async () => {
    const harness = createHarness();
    const onConflictDetected = vi.fn();

    const listeners = await setupGitSyncRuntimeListeners({
      listen: harness.listen,
      pauseAutoSync: vi.fn(async () => undefined),
      logger,
      isConflictDialogVisible: () => true,
      onConflictDetected,
      onRepoNotFound: vi.fn()
    });

    await harness.handlers.get('git-conflict-detected')?.({
      payload: { conflict_files: ['a.md'] }
    });
    listeners.resetConflictHandled();
    await harness.handlers.get('git-conflict-detected')?.({
      payload: { conflict_files: ['b.md'] }
    });

    expect(onConflictDetected).toHaveBeenCalledTimes(2);
  });

  it('pauses auto sync and forwards repo-not-found payload', async () => {
    const harness = createHarness();
    const pauseAutoSync = vi.fn(async () => undefined);
    const onRepoNotFound = vi.fn();

    await setupGitSyncRuntimeListeners({
      listen: harness.listen,
      pauseAutoSync,
      logger,
      onConflictDetected: vi.fn(),
      onRepoNotFound
    });

    await harness.handlers.get('git-repo-not-found')?.({
      payload: {
        remote_url: 'git@example.com:owner/repo.git',
        operation: 'pull'
      }
    });

    expect(pauseAutoSync).toHaveBeenCalled();
    expect(onRepoNotFound).toHaveBeenCalledWith({
      remoteUrl: 'git@example.com:owner/repo.git',
      operation: 'pull'
    });
  });

  it('cleans up registered runtime listeners', async () => {
    const harness = createHarness();

    const listeners = await setupGitSyncRuntimeListeners({
      listen: harness.listen,
      pauseAutoSync: vi.fn(async () => undefined),
      logger,
      onConflictDetected: vi.fn(),
      onRepoNotFound: vi.fn()
    });

    cleanupGitSyncRuntimeListeners(listeners);

    expect(harness.unlistenFns.get('git-conflict-detected')).toHaveBeenCalled();
    expect(harness.unlistenFns.get('git-repo-not-found')).toHaveBeenCalled();
  });
});
