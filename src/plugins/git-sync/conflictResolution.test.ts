import { describe, expect, it, vi } from 'vitest';
import { ConflictStrategy } from './api';
import {
  completeManualMerge,
  resolveConflictWithForcePull,
  resolveConflictWithForcePush,
  resumeAutoSyncAfterConflict,
  type GitConflictResolutionDeps
} from './conflictResolution';

const logger = {
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn()
};

const createDeps = (overrides: GitConflictResolutionDeps = {}): Required<GitConflictResolutionDeps> => ({
  forcePush: vi.fn(async () => ({
    success: true,
    files_pushed: 1,
    commit_hash: 'abc123',
    message: 'ok'
  })),
  forcePull: vi.fn(async () => ({
    success: true,
    files_updated: 1,
    has_conflicts: false,
    conflict_files: [],
    message: 'ok'
  })),
  removeUntrackedFile: vi.fn(async () => undefined),
  resumeAutoSync: vi.fn(async () => undefined),
  resolveConflictsBatch: vi.fn(async () => ({
    success: true,
    resolved_count: 2
  })),
  writeConflictFile: vi.fn(async () => undefined),
  logger,
  ...overrides
});

describe('git conflict resolution actions', () => {
  it('force pushes and resumes auto sync', async () => {
    const deps = createDeps();

    await resolveConflictWithForcePush(deps);

    expect(deps.forcePush).toHaveBeenCalled();
    expect(deps.resumeAutoSync).toHaveBeenCalled();
  });

  it('force pulls after removing untracked files', async () => {
    const deps = createDeps();

    await resolveConflictWithForcePull(['a.md', 'b.md'], deps);

    expect(deps.removeUntrackedFile).toHaveBeenCalledWith('a.md');
    expect(deps.removeUntrackedFile).toHaveBeenCalledWith('b.md');
    expect(deps.forcePull).toHaveBeenCalled();
    expect(deps.resumeAutoSync).toHaveBeenCalled();
  });

  it('continues force pull when removing an untracked file fails', async () => {
    const deps = createDeps({
      removeUntrackedFile: vi
        .fn()
        .mockRejectedValueOnce(new Error('locked'))
        .mockResolvedValueOnce(undefined)
    });

    await resolveConflictWithForcePull(['a.md', 'b.md'], deps);

    expect(deps.forcePull).toHaveBeenCalled();
    expect(deps.logger.warn).toHaveBeenCalled();
  });

  it('returns false when auto sync resume fails', async () => {
    const deps = createDeps({
      resumeAutoSync: vi.fn(async () => {
        throw new Error('failed');
      })
    });

    await expect(resumeAutoSyncAfterConflict(deps)).resolves.toBe(false);
  });

  it('writes edited local content and resolves manual merge selections', async () => {
    const deps = createDeps();

    await expect(
      completeManualMerge(
        {
          files: ['a.md', 'b.md'],
          selections: {
            0: 'local',
            1: 'remote'
          },
          editedContents: {
            0: 'edited local',
            1: 'ignored remote edit'
          }
        },
        deps
      )
    ).resolves.toEqual({
      success: true,
      resolved_count: 2
    });

    expect(deps.writeConflictFile).toHaveBeenCalledWith('a.md', 'edited local');
    expect(deps.writeConflictFile).not.toHaveBeenCalledWith('b.md', 'ignored remote edit');
    expect(deps.resolveConflictsBatch).toHaveBeenCalledWith([
      ['a.md', ConflictStrategy.KeepLocal],
      ['b.md', ConflictStrategy.KeepRemote]
    ]);
  });
});
