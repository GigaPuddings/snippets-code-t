import { describe, expect, it, vi } from 'vitest';
import { createGitConflictFeedback } from './conflictFeedback';

const t = ((key: string) => key) as any;

const createDeps = () => ({
  t,
  modalMsg: vi.fn(),
  dispatchRefreshData: vi.fn(),
  logger: {
    info: vi.fn()
  }
});

describe('git conflict feedback', () => {
  it('notifies force push resolution and refreshes data', () => {
    const deps = createDeps();
    const feedback = createGitConflictFeedback(deps);

    feedback.notifyForcePushResolved();

    expect(deps.modalMsg).toHaveBeenCalledWith(
      'settings.gitSync.forcePushSuccess',
      'success',
      'bottom-right'
    );
    expect(deps.dispatchRefreshData).toHaveBeenCalledWith('force-push');
  });

  it('notifies force pull resolution and refreshes data', () => {
    const deps = createDeps();
    const feedback = createGitConflictFeedback(deps);

    feedback.notifyForcePullResolved();

    expect(deps.modalMsg).toHaveBeenCalledWith(
      'settings.gitSync.forcePullSuccess',
      'success',
      'bottom-right'
    );
    expect(deps.dispatchRefreshData).toHaveBeenCalledWith('force-pull');
  });

  it('notifies manual merge resolution and logs backend resume', () => {
    const deps = createDeps();
    const feedback = createGitConflictFeedback(deps);

    feedback.notifyManualMergeResolved();

    expect(deps.modalMsg).toHaveBeenCalledWith(
      'settings.gitSync.mergeSuccess',
      'success',
      'bottom-right'
    );
    expect(deps.dispatchRefreshData).toHaveBeenCalledWith('manual-merge');
    expect(deps.logger.info).toHaveBeenCalledWith(
      '[GitSync] 手动合并完成，自动同步已由后端恢复'
    );
  });

  it('notifies resumed auto sync from manual merge flow', () => {
    const deps = createDeps();
    const feedback = createGitConflictFeedback(deps);

    feedback.notifyAutoSyncResumed('manual-merge');

    expect(deps.modalMsg).toHaveBeenCalledWith(
      'settings.gitSync.autoSyncResumed',
      'info',
      'bottom-right'
    );
    expect(deps.logger.info).toHaveBeenCalledWith(
      '[GitSync] 用户从手动合并中选择恢复自动同步'
    );
  });
});
