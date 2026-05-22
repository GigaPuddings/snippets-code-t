import { describe, expect, it, vi } from 'vitest';
import { useGitConflictFlow, type GitConflictFlowDeps } from './useGitConflictFlow';

const createDeps = (overrides: Partial<GitConflictFlowDeps> = {}): GitConflictFlowDeps => {
  const conflictDialog = {
    value: {
      setLoading: vi.fn()
    }
  };
  const manualMerge = {
    value: {
      setLoading: vi.fn()
    }
  };

  return {
    conflictDialogRef: conflictDialog,
    manualMergeRef: manualMerge,
    resetConflictHandled: vi.fn(),
    confirmForcePush: vi.fn(async () => true),
    confirmForcePull: vi.fn(async () => true),
    confirmCancelConflict: vi.fn(async () => 'secondary' as const),
    closeConflictDialog: vi.fn(),
    openManualMergeDialog: vi.fn(),
    closeManualMergeDialog: vi.fn(),
    clearConflictFiles: vi.fn(),
    backToConflictDialog: vi.fn(),
    getUntrackedFiles: vi.fn(() => ['untracked.md']),
    getManualMergeInput: vi.fn((selections, editedContents) => ({
      files: ['a.md'],
      selections,
      editedContents
    })),
    feedback: {
      notifyForcePushResolved: vi.fn(),
      notifyForcePullResolved: vi.fn(),
      notifyManualMergeResolved: vi.fn(),
      notifyAutoSyncResumed: vi.fn()
    },
    resolveForcePush: vi.fn(async () => undefined),
    resolveForcePull: vi.fn(async () => undefined),
    completeMerge: vi.fn(async () => ({
      success: true,
      resolved_count: 1
    })),
    resumeAutoSync: vi.fn(async () => true),
    logger: {
      info: vi.fn(),
      error: vi.fn()
    },
    ...overrides
  };
};

describe('useGitConflictFlow', () => {
  it('runs force push flow with confirmation, resolution, feedback, and cleanup', async () => {
    const deps = createDeps();
    const flow = useGitConflictFlow(deps);

    await flow.handleConflictResolution('force-push');

    expect(deps.confirmForcePush).toHaveBeenCalled();
    expect(deps.resolveForcePush).toHaveBeenCalled();
    expect(deps.feedback.notifyForcePushResolved).toHaveBeenCalled();
    expect(deps.closeConflictDialog).toHaveBeenCalled();
    expect(deps.clearConflictFiles).toHaveBeenCalled();
    expect(deps.conflictDialogRef.value?.setLoading).toHaveBeenLastCalledWith(false);
  });

  it('runs force pull flow with untracked files', async () => {
    const deps = createDeps();
    const flow = useGitConflictFlow(deps);

    await flow.handleConflictResolution('force-pull');

    expect(deps.conflictDialogRef.value?.setLoading).toHaveBeenCalledWith(true);
    expect(deps.resolveForcePull).toHaveBeenCalledWith(['untracked.md']);
    expect(deps.feedback.notifyForcePullResolved).toHaveBeenCalled();
    expect(deps.conflictDialogRef.value?.setLoading).toHaveBeenLastCalledWith(false);
  });

  it('does not show conflict dialog loading when force pull is cancelled', async () => {
    const deps = createDeps({
      confirmForcePull: vi.fn(async () => false)
    });
    const flow = useGitConflictFlow(deps);

    await expect(flow.handleConflictResolution('force-pull')).rejects.toBe('cancel');

    expect(deps.conflictDialogRef.value?.setLoading).not.toHaveBeenCalledWith(true);
    expect(deps.conflictDialogRef.value?.setLoading).toHaveBeenLastCalledWith(false);
  });

  it('opens manual merge dialog for manual merge strategy', async () => {
    const deps = createDeps();
    const flow = useGitConflictFlow(deps);

    await flow.handleConflictResolution('manual-merge');

    expect(deps.openManualMergeDialog).toHaveBeenCalled();
    expect(deps.resolveForcePush).not.toHaveBeenCalled();
  });

  it('resumes auto sync when conflict cancel chooses resume', async () => {
    const deps = createDeps();
    const flow = useGitConflictFlow(deps);

    await flow.handleConflictCancel();

    expect(deps.clearConflictFiles).toHaveBeenCalledWith({ clearUntracked: false });
    expect(deps.resumeAutoSync).toHaveBeenCalled();
    expect(deps.feedback.notifyAutoSyncResumed).toHaveBeenCalledWith('conflict-dialog');
  });

  it('completes manual merge through merge input mapper', async () => {
    const deps = createDeps();
    const flow = useGitConflictFlow(deps);

    await flow.handleManualMergeComplete({ 0: 'local' }, { 0: 'edited' });

    expect(deps.getManualMergeInput).toHaveBeenCalledWith({ 0: 'local' }, { 0: 'edited' });
    expect(deps.completeMerge).toHaveBeenCalledWith({
      files: ['a.md'],
      selections: { 0: 'local' },
      editedContents: { 0: 'edited' }
    });
    expect(deps.feedback.notifyManualMergeResolved).toHaveBeenCalled();
  });
});
