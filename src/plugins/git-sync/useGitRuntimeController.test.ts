import { describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import { useGitRuntimeController, type GitRuntimeControllerDeps } from './useGitRuntimeController';
import { useGitRuntimeState } from './useGitRuntimeState';

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

const createRuntimeState = () => {
  const state = useGitRuntimeState({
    t,
    storage: createStorage(),
    logger: { info: vi.fn() }
  });

  state.dialogs.setConflictFiles({
    conflictFiles: ['a.md'],
    untrackedFiles: ['untracked.md']
  });
  return state;
};

const createDeps = (overrides: Partial<GitRuntimeControllerDeps> = {}): GitRuntimeControllerDeps => ({
  t,
  modalMsg: vi.fn(),
  routeToGitSettings: vi.fn(),
  resetConflictHandled: vi.fn(),
  state: createRuntimeState(),
  logger: {
    info: vi.fn(),
    error: vi.fn()
  },
  ...overrides
});

describe('useGitRuntimeController', () => {
  it('wires portal loading and manual merge conflict flow', async () => {
    const deps = createDeps();
    const controller = useGitRuntimeController(deps);
    const setConflictDialogLoading = vi.fn();

    controller.gitSyncRuntimePortalRef.value = {
      setConflictDialogLoading,
      setManualMergeLoading: vi.fn()
    };

    await nextTick();
    await controller.handleConflictResolution('manual-merge');

    expect(deps.resetConflictHandled).toHaveBeenCalled();
    expect(setConflictDialogLoading).toHaveBeenCalledWith(true);
    expect(setConflictDialogLoading).toHaveBeenLastCalledWith(false);
    expect(deps.state.dialogs.showConflictDialog.value).toBe(false);
    expect(deps.state.dialogs.showManualMergeDialog.value).toBe(true);
  });

  it('routes to git settings for repo not found reconfiguration', async () => {
    const deps = createDeps();
    const controller = useGitRuntimeController(deps);

    await controller.handleRepoNotFoundReconfig();

    expect(deps.state.repoNotFound.visible.value).toBe(false);
    expect(deps.routeToGitSettings).toHaveBeenCalled();
  });

  it('ignores repo not found and shows feedback', () => {
    const deps = createDeps();
    deps.state.repoNotFound.open({
      remoteUrl: 'git@example.com/repo.git',
      operation: 'pull'
    });
    const controller = useGitRuntimeController(deps);

    controller.handleRepoNotFoundIgnore();

    expect(deps.state.repoNotFound.visible.value).toBe(false);
    expect(deps.state.repoNotFound.info.value).toEqual({
      remoteUrl: '',
      operation: ''
    });
    expect(deps.modalMsg).toHaveBeenCalledWith(
      'settings.gitSync.repoNotFoundIgnored',
      'info',
      'bottom-right'
    );
  });

  it('reports conflict flow errors through modal feedback', async () => {
    const deps = createDeps();
    deps.state.confirm.confirmForcePull = vi.fn(async () => {
      throw new Error('pull failed');
    });
    const controller = useGitRuntimeController(deps);

    controller.gitSyncRuntimePortalRef.value = {
      setConflictDialogLoading: vi.fn(),
      setManualMergeLoading: vi.fn()
    };

    await nextTick();
    await controller.handleConflictResolution('force-pull');

    expect(deps.logger?.error).toHaveBeenCalledWith('[GitSync] 冲突处理失败:', expect.any(Error));
    expect(deps.modalMsg).toHaveBeenCalledWith(
      'settings.gitSync.conflictResolutionFailed: pull failed',
      'error',
      'top-right'
    );
  });
});
