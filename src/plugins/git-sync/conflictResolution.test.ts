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

const createDeps = (
  overrides: GitConflictResolutionDeps = {}
): Required<GitConflictResolutionDeps> => ({
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
  it('preserves an intentionally empty local edit', async () => {
    let saved = 'old content';
    const deps = createDeps({
      writeConflictFile: async (_path, content) => {
        saved = content;
      }
    });
    await completeManualMerge(
      {
        files: ['a.md'],
        selections: { 0: 'local' },
        editedContents: { 0: '' }
      },
      deps
    );
    expect(saved).toBe('');
  });
  it('force pushes and resumes auto sync', async () => {
    const deps = createDeps();

    await resolveConflictWithForcePush(deps);

    expect(deps.forcePush).toHaveBeenCalled();
    expect(deps.resumeAutoSync).toHaveBeenCalled();
  });

  it('keeps untracked drafts until the backend validates and resets the remote', async () => {
    const drafts = new Set(['a.md', 'b.md']);
    const deps = createDeps({
      removeUntrackedFile: async (path) => {
        drafts.delete(path);
      }
    });

    await resolveConflictWithForcePull(['a.md', 'b.md'], deps);

    expect([...drafts]).toEqual(['a.md', 'b.md']);
    expect(deps.forcePull).toHaveBeenCalled();
    expect(deps.resumeAutoSync).toHaveBeenCalled();
  });

  it('preserves drafts and leaves auto sync paused when force pull fails', async () => {
    const drafts = new Map([['a.md', 'unsaved draft']]);
    let resumed = false;
    const deps = createDeps({
      removeUntrackedFile: async (path) => {
        drafts.delete(path);
      },
      forcePull: async () => {
        throw new Error('fetch failed');
      },
      resumeAutoSync: async () => {
        resumed = true;
      }
    });

    await expect(resolveConflictWithForcePull(['a.md'], deps)).rejects.toThrow(
      'fetch failed'
    );

    expect(drafts.get('a.md')).toBe('unsaved draft');
    expect(resumed).toBe(false);
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
    expect(deps.writeConflictFile).not.toHaveBeenCalledWith(
      'b.md',
      'ignored remote edit'
    );
    expect(deps.resolveConflictsBatch).toHaveBeenCalledWith([
      ['a.md', ConflictStrategy.KeepLocal],
      ['b.md', ConflictStrategy.KeepRemote]
    ]);
  });
});
