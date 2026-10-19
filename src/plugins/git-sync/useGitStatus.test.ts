import { afterEach, describe, expect, it, vi } from 'vitest';
import i18n from '@/i18n';
import { useGitStatus } from './useGitStatus';
import type { GitSettings } from '@/types/models';

vi.mock('@/plugins/git-sync/api', () => ({ getGitStatus: vi.fn() }));
vi.mock('@/api/appConfig', () => ({ getGitSettings: vi.fn() }));

const status = useGitStatus();
const originalLocale = i18n.global.locale.value;
afterEach(() => {
  i18n.global.locale.value = originalLocale;
  status.gitSettings.value = null;
  status.gitStatus.value = null;
  status.lastSyncTime.value = null;
  status.syncState.value = 'disabled';
});

describe('Git status locale', () => {
  it('updates computed states when the locale changes', () => {
    i18n.global.locale.value = 'zh-CN';
    expect(status.stateDescription.value).toBe('Git 同步已禁用');
    i18n.global.locale.value = 'en-US';
    expect(status.stateDescription.value).toBe('Git sync is disabled');
    status.gitSettings.value = { enabled: true } as GitSettings;
    status._setSyncState('syncing');
    expect(status.stateDescription.value).toBe('Syncing...');
    status._setSyncState('error');
    expect(status.stateDescription.value).toBe('Sync Error');
    i18n.global.locale.value = 'zh-CN';
    expect(status.stateDescription.value).toBe('同步异常');
  });

  it('formats relative times with the current locale and plural form', () => {
    i18n.global.locale.value = 'en-US';
    status._setLastSyncTime(new Date(Date.now() - 90000).toISOString());
    expect(status.formattedLastSyncTime.value).toBe('1 minute ago');
    status._setLastSyncTime(new Date(Date.now() - 150000).toISOString());
    expect(status.formattedLastSyncTime.value).toBe('2 minutes ago');
    i18n.global.locale.value = 'zh-CN';
    expect(status.formattedLastSyncTime.value).toBe('2 分钟前');
    const older = new Date(Date.now() - 10 * 86400000);
    status._setLastSyncTime(older.toISOString());
    i18n.global.locale.value = 'en-US';
    expect(status.formattedLastSyncTime.value).toBe(
      older.toLocaleDateString('en-US')
    );
  });
});
