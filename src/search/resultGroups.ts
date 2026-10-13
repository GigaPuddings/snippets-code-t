import type { ContentType } from '@/types';

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

/** Keep the best match first and the existing group order without inserting heading rows. */
export function orderSearchResults(
  items: ContentType[],
  grouped: boolean
): ContentType[] {
  if (!grouped || items.length === 0) return items;
  const groups = new Map<string, ContentType[]>();
  for (const item of items.slice(1)) {
    const key = groupKey(item);
    const entries = groups.get(key) ?? [];
    entries.push(item);
    groups.set(key, entries);
  }
  return [items[0], ...order.flatMap((key) => groups.get(key) ?? [])];
}
