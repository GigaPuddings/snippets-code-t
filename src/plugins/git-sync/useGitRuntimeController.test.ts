import { describe, expect, it, vi } from 'vitest';
import { nextTick, ref } from 'vue';
import { useGitRuntimeController, type GitRuntimeControllerDeps } from './useGitRuntimeController';

const t = ((key: string) => key) as any;

const createDeps = (overrides: Partial<GitRuntimeControllerDeps> = {}): GitRuntimeControllerDeps => ({
  t,
  modalMsg: vi.fn(),
  routeToGitSettings: vi.fn(),
  resetConflictHandled: vi.fn(),
  dialogs: {
    untrackedFiles: ref(['untracked.md']),
    mergeFileList: ref(['a.md']),
    clearConflictFiles: vi.fn(),
    closeConflictDialog: vi.fn(),
    openManualMergeDialog: vi.fn(),
    closeManualMergeDialog: vi.fn(),
    backToConflictDialog: vi.fn()
  },
  confirm: {
    confirmForcePush: vi.fn(async () => true),
    confirmForcePull: vi.fn(async () => true),
    confirmCancelConflict: vi.fn(async () => 'secondary' as const)
  },
  repoNotFound: {
    close: vi.fn(),
    ignore: vi.fn()
  },
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
    expect(deps.dialogs.openManualMergeDialog).toHaveBeenCalled();
  });

  it('routes to git settings for repo not found reconfiguration', async () => {
    const deps = createDeps();
    const controller = useGitRuntimeController(deps);

    await controller.handleRepoNotFoundReconfig();

    expect(deps.repoNotFound.close).toHaveBeenCalled();
    expect(deps.routeToGitSettings).toHaveBeenCalled();
  });

  it('ignores repo not found and shows feedback', () => {
    const deps = createDeps();
    const controller = useGitRuntimeController(deps);

    controller.handleRepoNotFoundIgnore();

    expect(deps.repoNotFound.ignore).toHaveBeenCalled();
    expect(deps.modalMsg).toHaveBeenCalledWith(
      'settings.gitSync.repoNotFoundIgnored',
      'info',
      'bottom-right'
    );
  });

  it('reports conflict flow errors through modal feedback', async () => {
    const deps = createDeps({
      confirm: {
        confirmForcePush: vi.fn(async () => true),
        confirmForcePull: vi.fn(async () => {
          throw new Error('pull failed');
        }),
        confirmCancelConflict: vi.fn(async () => 'secondary' as const)
      }
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
