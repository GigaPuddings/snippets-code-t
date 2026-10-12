import type { LauncherSettings } from '@/plugins/local-launcher/types';

export interface LauncherIndexResult {
  generation: number;
  status: 'success' | 'partial' | 'failed';
  appsCount: number | null;
  bookmarksCount: number | null;
  errors: string[];
  manual: boolean;
  notificationWindow: string | null;
  notificationError: string | null;
}

export interface LauncherIndexState {
  running: boolean;
  lastResult: LauncherIndexResult | null;
}

type Translate = (
  key: string,
  values?: Record<string, string | number>
) => string;

export const formatLauncherIndexResult = (
  result: LauncherIndexResult,
  t: Translate
): {
  title: string;
  message: string;
  type: 'success' | 'warning' | 'error';
} => {
  const keys = {
    success: 'local.rescanComplete',
    partial: 'local.rescanPartial',
    failed: 'local.rescanFailed'
  };
  const title = t(keys[result.status]);
  const counts = t('local.rescanCounts', {
    apps: result.appsCount ?? '—',
    bookmarks: result.bookmarksCount ?? '—'
  });
  return {
    title,
    message: `${title} · ${counts}${result.errors.length ? ` · ${result.errors[0]}` : ''}`,
    type:
      result.status === 'partial'
        ? 'warning'
        : result.status === 'failed'
          ? 'error'
          : 'success'
  };
};

export const shouldShowLauncherIndexToast = (
  result: LauncherIndexResult,
  windowLabel: string
): boolean => result.manual && result.notificationWindow === windowLabel;

export const launcherSettingsFromInput = (
  showAuxiliary: boolean,
  roots: string
): LauncherSettings => ({
  show_auxiliary: showAuxiliary,
  scan_roots: [
    ...new Set(
      roots
        .split('\n')
        .map((root) => root.trim())
        .filter(Boolean)
    )
  ]
});
