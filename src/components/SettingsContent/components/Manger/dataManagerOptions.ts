type Translate = (key: string) => string;

export interface DataManagerOption {
  value: string;
  label: string;
}

export const createIndexOptions: (t: Translate) => DataManagerOption[] = (
  t
) => [
  { value: 'all', label: t('dataManager.indexAll') },
  { value: 'apps', label: t('dataManager.indexApps') },
  { value: 'bookmarks', label: t('dataManager.indexBookmarks') },
  { value: 'desktopFiles', label: t('dataManager.indexDesktopFiles') }
];

export const createHistoryOptions: (t: Translate) => DataManagerOption[] = (
  t
) => [
  { value: 'all', label: t('dataManager.historyAll') },
  { value: 'apps', label: t('dataManager.historyApps') },
  { value: 'bookmarks', label: t('dataManager.historyBookmarks') },
  { value: 'desktopFiles', label: t('dataManager.historyDesktopFiles') },
  { value: 'markdown', label: t('dataManager.historyMarkdown') }
];
