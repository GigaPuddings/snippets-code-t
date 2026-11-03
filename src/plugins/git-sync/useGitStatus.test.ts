import { afterEach, describe, expect, it, vi } from 'vitest';
import i18n from '@/i18n';
import {
  cleanupGitStatusListener,
  setupGitStatusListener,
  useGitStatus
} from './useGitStatus';
import { listen } from '@tauri-apps/api/event';
import { getGitStatus } from './api';
import { getGitSettings } from '@/api/appConfig';
import type { GitSettings } from '@/types/models';

vi.mock('@/plugins/git-sync/api', () => ({ getGitStatus: vi.fn() }));
vi.mock('@/api/appConfig', () => ({ getGitSettings: vi.fn() }));
vi.mock('@tauri-apps/api/event', () => ({ listen: vi.fn() }));

const status = useGitStatus();
const originalLocale = i18n.global.locale.value;
afterEach(() => {
  cleanupGitStatusListener();
  vi.useRealTimers();
  i18n.global.locale.value = originalLocale;
  status.gitSettings.value = null;
  status.gitStatus.value = null;
  status.lastSyncTime.value = null;
  status._setSyncState('disabled');
});

describe('Git synchronization failures', () => {
  it('clears the previous workspace failure and ignores its pending status response', async () => {
    vi.useFakeTimers();
    const handlers = new Map<
      string,
      (event: { payload: { success: boolean } }) => void
    >();
    vi.mocked(listen).mockImplementation(async (name, handler) => {
      handlers.set(
        name,
        handler as (event: { payload: { success: boolean } }) => void
      );
      return () => {};
    });
    const clean = {
      is_repo: true,
      has_remote: true,
      has_changes: false,
      changed_files: [],
      branch: 'main',
      main_branch: 'main',
      available_branches: ['main'],
      has_other_branches: false
    };
    let resolveOld!: (value: typeof clean) => void;
    vi.mocked(getGitStatus)
      .mockReset()
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolveOld = resolve;
          })
      )
      .mockResolvedValue(clean);
    vi.mocked(getGitSettings).mockResolvedValue({
      enabled: true
    } as GitSettings);
    status.gitSettings.value = { enabled: true } as GitSettings;
    status._setSyncState('idle');
    setupGitStatusListener();
    await Promise.resolve();
    const pending = status.refreshStatus();
    handlers.get('git-sync-complete')?.({ payload: { success: false } });
    handlers.get('workspace-root-changed')?.({ payload: { success: false } });
    await vi.advanceTimersByTimeAsync(0);
    expect(status.syncState.value).toBe('synced');
    resolveOld({ ...clean, has_changes: true, branch: 'old-workspace' });
    await pending;
    await vi.advanceTimersByTimeAsync(1000);
    expect(status.gitStatus.value?.branch).toBe('main');
    expect(status.syncState.value).toBe('synced');
    expect(getGitStatus).toHaveBeenCalledTimes(2);
  });

  it('keeps the failed operation visible through local refresh and clears it on successful sync', async () => {
    vi.useFakeTimers();
    const handlers = new Map<
      string,
      (event: { payload: { success: boolean } }) => void
    >();
    vi.mocked(listen).mockImplementation(async (name, handler) => {
      handlers.set(
        name,
        handler as (event: { payload: { success: boolean } }) => void
      );
      return () => {};
    });
    vi.mocked(getGitStatus).mockResolvedValue({
      is_repo: true,
      has_remote: true,
      has_changes: false,
      changed_files: [],
      branch: 'main',
      main_branch: 'main',
      available_branches: ['main'],
      has_other_branches: false
    });
    status.gitSettings.value = { enabled: true } as GitSettings;
    setupGitStatusListener();
    await Promise.resolve();
    const complete = handlers.get('git-sync-complete');
    expect(complete).toBeDefined();
    complete?.({ payload: { success: false } });
    await vi.advanceTimersByTimeAsync(1000);
    expect(status.syncState.value).toBe('error');
    await status.refreshStatus();
    expect(status.syncState.value).toBe('error');
    complete?.({ payload: { success: true } });
    await vi.advanceTimersByTimeAsync(1000);
    expect(status.syncState.value).toBe('synced');
  });
});

describe('Git status locale', () => {
  it('describes committed changes as waiting to sync', () => {
    status.gitSettings.value = { enabled: true } as GitSettings;
    status._setSyncState('has_changes');
    expect(status.stateDescription.value).toBe(
      i18n.global.t('settings.gitSync.status.waitingSync')
    );
  });
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
