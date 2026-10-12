import { describe, expect, it } from 'vitest';
import {
  formatLauncherIndexResult,
  launcherSettingsFromInput,
  shouldShowLauncherIndexToast,
  type LauncherIndexResult
} from './launcher-index';

const result = (
  status: LauncherIndexResult['status'] = 'success'
): LauncherIndexResult => ({
  generation: 1,
  status,
  appsCount: 0,
  bookmarksCount: 0,
  errors: [],
  manual: true,
  notificationWindow: 'config',
  notificationError: null
});
const translate = (
  key: string,
  values?: Record<string, string | number>
): string =>
  key === 'local.rescanCounts'
    ? `${values?.apps} apps, ${values?.bookmarks} bookmarks`
    : key;

describe('launcher scan feedback', () => {
  it('reports zero counts and separates successful, partial and failed results', () => {
    expect(formatLauncherIndexResult(result(), translate)).toMatchObject({
      type: 'success',
      message: expect.stringContaining('0 apps, 0 bookmarks')
    });
    expect(formatLauncherIndexResult(result('partial'), translate).type).toBe(
      'warning'
    );
    const failed = result('failed');
    failed.appsCount = null;
    failed.errors = ['Database write failed'];
    expect(formatLauncherIndexResult(failed, translate)).toMatchObject({
      type: 'error',
      message: expect.stringContaining('Database write failed')
    });
    expect(formatLauncherIndexResult(failed, translate).message).toContain(
      '— apps'
    );
  });
  it('automatic and background jobs do not create foreground or duplicate window toasts', () => {
    expect(shouldShowLauncherIndexToast(result(), 'config')).toBe(true);
    expect(shouldShowLauncherIndexToast(result(), 'main')).toBe(false);
    expect(
      shouldShowLauncherIndexToast({ ...result(), manual: false }, 'config')
    ).toBe(false);
    expect(
      shouldShowLauncherIndexToast(
        { ...result(), notificationWindow: null },
        'config'
      )
    ).toBe(false);
  });
  it('rescans use the current edited configuration after trimming and deduplicating roots', () => {
    expect(
      launcherSettingsFromInput(
        true,
        ' E:\\Apps \r\n\nE:\\Apps\n D:\\Portable '
      )
    ).toEqual({
      show_auxiliary: true,
      scan_roots: ['E:\\Apps', 'D:\\Portable']
    });
  });
});
