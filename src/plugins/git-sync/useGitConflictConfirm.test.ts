import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { useGitConflictConfirm } from './useGitConflictConfirm';

const t = (key: string) => key;

describe('useGitConflictConfirm', () => {
  it('confirms force push with translated dialog options', async () => {
    const confirm = useGitConflictConfirm(t);
    const promise = confirm.confirmForcePush();

    expect(confirm.visible.value).toBe(true);
    expect(confirm.options.value).toMatchObject({
      title: 'settings.gitSync.confirmForcePush',
      message: 'settings.gitSync.confirmForcePushMessage',
      primaryText: 'common.confirm',
      secondaryText: 'common.cancel',
      type: 'warning'
    });

    confirm.handleResult('primary');

    await expect(promise).resolves.toBe(true);
    expect(confirm.visible.value).toBe(false);
  });

  it('returns false when force pull confirmation is cancelled', async () => {
    const confirm = useGitConflictConfirm(t);
    const promise = confirm.confirmForcePull();

    confirm.handleResult('secondary');

    await expect(promise).resolves.toBe(false);
  });

  it('returns the raw cancel conflict result', async () => {
    const confirm = useGitConflictConfirm(t);
    const promise = confirm.confirmCancelConflict();

    await nextTick();
    expect(confirm.options.value.title).toBe('settings.gitSync.cancelConflictTitle');

    confirm.handleResult('close');

    await expect(promise).resolves.toBe('close');
  });
});
