import { describe, expect, it, vi } from 'vitest';
import { useGitRuntimeState } from './useGitRuntimeState';

const t = ((key: string, params?: Record<string, string>) => (
  params ? `${key}:${params.url}:${params.operation}` : key
)) as any;

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

describe('useGitRuntimeState', () => {
  it('groups conflict, confirm, and repo-not-found runtime state', () => {
    const storage = createStorage();
    const state = useGitRuntimeState({ t, storage });

    state.dialogs.setConflictFiles({
      conflictFiles: ['a.md'],
      untrackedFiles: ['b.md']
    });
    state.repoNotFound.open({
      remoteUrl: 'git@example.com/repo.git',
      operation: 'pull'
    });
    state.confirm.handleResult('close');

    expect(state.dialogs.showConflictDialog.value).toBe(true);
    expect(state.dialogs.mergeFileList.value).toEqual(['a.md', 'b.md']);
    expect(state.repoNotFound.visible.value).toBe(true);
    expect(state.repoNotFound.message.value).toBe(
      'settings.gitSync.repoNotFoundMessage:git@example.com/repo.git:pull'
    );
    expect(state.confirm.visible.value).toBe(false);
  });
});
