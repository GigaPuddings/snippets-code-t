import { describe, expect, it } from 'vitest';
import { useGitRepoNotFoundDialog } from './useGitRepoNotFoundDialog';

const t = ((key: string, params?: unknown) => {
  if (!params || typeof params !== 'object') return key;
  const values = params as Record<string, string>;
  return `${key}:${values.url}:${values.operation}`;
}) as any;

describe('useGitRepoNotFoundDialog', () => {
  it('opens dialog with repo-not-found info and translated message', () => {
    const dialog = useGitRepoNotFoundDialog(t);

    dialog.open({
      remoteUrl: 'git@example.com:owner/repo.git',
      operation: 'pull'
    });

    expect(dialog.visible.value).toBe(true);
    expect(dialog.info.value).toEqual({
      remoteUrl: 'git@example.com:owner/repo.git',
      operation: 'pull'
    });
    expect(dialog.message.value).toBe(
      'settings.gitSync.repoNotFoundMessage:git@example.com:owner/repo.git:pull'
    );
  });

  it('closes and resets info when ignored', () => {
    const dialog = useGitRepoNotFoundDialog(t);
    dialog.open({
      remoteUrl: 'git@example.com:owner/repo.git',
      operation: 'push'
    });

    dialog.ignore();

    expect(dialog.visible.value).toBe(false);
    expect(dialog.info.value).toEqual({
      remoteUrl: '',
      operation: ''
    });
  });
});
