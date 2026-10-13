import type { ContentType } from '@/types';

export type SearchRenderRow =
  | {
      kind: 'heading';
      __rowKey: string;
      labelKey: string;
      size: number;
      offset: number;
    }
  | {
      kind: 'result';
      __rowKey: string;
      item: ContentType;
      index: number;
      size: number;
      offset: number;
    };

const groupKey = (item: ContentType): string => {
  if (item.summarize === 'navigation') return 'searchResult.functions';
  if (item.summarize === 'settings') return 'searchResult.settings';
  if (item.summarize === 'conversation') return 'searchResult.conversations';
  if (item.summarize === 'app') return 'searchResult.apps';
  if (item.summarize === 'bookmark') return 'searchResult.bookmarks';
  if (item.summarize === 'file') return 'searchResult.files';
  if (item.summarize === 'tool') return 'searchResult.tools';
  if (item.type === 'code' || item.type === 'note')
    return 'searchResult.documents';
  return 'searchResult.search';
};
const order = [
  'searchResult.functions',
  'searchResult.settings',
  'searchResult.conversations',
  'searchResult.documents',
  'searchResult.apps',
  'searchResult.bookmarks',
  'searchResult.files',
  'searchResult.tools',
  'searchResult.search'
];

export function buildSearchRenderRows(
  items: ContentType[],
  grouped: boolean,
  emptyQuery: boolean,
  itemSize = 52
): SearchRenderRow[] {
  const groups = new Map<string, ContentType[]>();
  if (emptyQuery) groups.set('searchResult.recentActions', items);
  else if (grouped && items.length) {
    groups.set('searchResult.bestMatch', [items[0]]);
    for (const key of order) {
      const matches = items.slice(1).filter((item) => groupKey(item) === key);
      if (matches.length) groups.set(key, matches);
    }
  } else groups.set('', items);
  const rows: SearchRenderRow[] = [];
  let offset = 0;
  let index = 0;
  for (const [key, entries] of groups) {
    if (!entries.length) continue;
    if (key) {
      rows.push({
        kind: 'heading',
        __rowKey: `heading:${key}`,
        labelKey: key,
        size: 28,
        offset
      });
      offset += 28;
    }
    for (const item of entries) {
      rows.push({
        kind: 'result',
        __rowKey: `${String(item.metadata?.plugin_id ?? 'core')}:${String(item.id)}`,
        item,
        index: index++,
        size: itemSize,
        offset
      });
      offset += itemSize;
    }
  }
  return rows;
}
