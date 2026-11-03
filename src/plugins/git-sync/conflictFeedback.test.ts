import { describe, expect, it, vi } from 'vitest';
import { createGitConflictFeedback } from './conflictFeedback';

const cases = [
  [
    'notifyForcePushResolved',
    'settings.gitSync.forcePushSuccess',
    'force-push'
  ],
  [
    'notifyForcePullResolved',
    'settings.gitSync.forcePullSuccess',
    'force-pull'
  ],
  ['notifyManualMergeResolved', 'settings.gitSync.mergeSuccess', 'manual-merge']
] as const;

describe('git conflict feedback', () => {
  it.each(cases)(
    '%s notifies the user and refreshes data',
    (action, message, source) => {
      const modalMsg = vi.fn();
      const dispatchRefreshData = vi.fn();
      const feedback = createGitConflictFeedback({
        t: ((key: string) => key) as any,
        modalMsg,
        dispatchRefreshData,
        logger: { info: vi.fn() }
      });

      feedback[action]();

      expect(modalMsg).toHaveBeenCalledWith(message, 'success', 'bottom-right');
      expect(dispatchRefreshData).toHaveBeenCalledWith(source);
    }
  );
});
