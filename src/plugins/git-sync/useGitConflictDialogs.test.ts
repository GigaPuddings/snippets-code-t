import { describe, expect, it, vi } from 'vitest';
import { useGitConflictDialogs } from './useGitConflictDialogs';

class MemoryStorage implements Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> {
  private values = new Map<string, string>();

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    this.values.delete(key);
  }
}

const logger = {
  info: vi.fn()
};

describe('useGitConflictDialogs', () => {
  it('sets conflict files, persists state, and opens conflict dialog', () => {
    const storage = new MemoryStorage();
    const dialogs = useGitConflictDialogs({ storage, logger });

    dialogs.setConflictFiles({
      conflictFiles: ['a.md'],
      untrackedFiles: ['b.md']
    });

    expect(dialogs.conflictFiles.value).toEqual(['a.md']);
    expect(dialogs.untrackedFiles.value).toEqual(['b.md']);
    expect(dialogs.mergeFileList.value).toEqual(['a.md', 'b.md']);
    expect(dialogs.showConflictDialog.value).toBe(true);
    expect(storage.getItem('git-conflict-state')).toContain('a.md');
  });

  it('restores persisted conflict dialog state', () => {
    const storage = new MemoryStorage();
    const first = useGitConflictDialogs({ storage, logger });
    first.setConflictFiles({ conflictFiles: ['a.md'] });

    const second = useGitConflictDialogs({ storage, logger });

    expect(second.restoreConflictDialogState()).toBe(true);
    expect(second.conflictFiles.value).toEqual(['a.md']);
    expect(second.showConflictDialog.value).toBe(true);
  });

  it('clears conflict files and optionally preserves untracked files', () => {
    const storage = new MemoryStorage();
    const dialogs = useGitConflictDialogs({ storage, logger });
    dialogs.setConflictFiles({
      conflictFiles: ['a.md'],
      untrackedFiles: ['b.md']
    });

    dialogs.clearConflictFiles({ clearUntracked: false });

    expect(dialogs.conflictFiles.value).toEqual([]);
    expect(dialogs.untrackedFiles.value).toEqual(['b.md']);
    expect(storage.getItem('git-conflict-state')).toBeNull();
  });

  it('switches between conflict and manual merge dialogs', () => {
    const dialogs = useGitConflictDialogs({
      storage: new MemoryStorage(),
      logger
    });
    dialogs.setConflictFiles({ conflictFiles: ['a.md'] });

    dialogs.openManualMergeDialog();
    expect(dialogs.showConflictDialog.value).toBe(false);
    expect(dialogs.showManualMergeDialog.value).toBe(true);

    dialogs.backToConflictDialog();
    expect(dialogs.showConflictDialog.value).toBe(true);
    expect(dialogs.showManualMergeDialog.value).toBe(false);
  });
});
