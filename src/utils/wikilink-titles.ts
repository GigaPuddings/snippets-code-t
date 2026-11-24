import type { MarkdownFile } from '@/types/models';

type WikiLinkFile = Pick<
  MarkdownFile,
  'id' | 'filePath' | 'title' | 'categoryName'
>;

export interface WikiLinkTarget {
  path: string;
  title: string;
  folder: string;
}

export const wikiLinkTitleKey = (title: string): string =>
  title.trim().toLowerCase();

export function indexWikiLinkTitles(
  files: readonly WikiLinkFile[]
): ReadonlyMap<string, WikiLinkTarget> {
  const titles = new Map<string, WikiLinkTarget>();
  for (const file of files) {
    const path = file.filePath || file.id;
    const title = file.title.trim();
    if (!path || !title || /[\]\r\n]/.test(title)) continue;
    const key = wikiLinkTitleKey(title);
    const previous = titles.get(key);
    // Title-only links need the same destination even if the file list reorders.
    if (!previous || path < previous.path)
      titles.set(key, { path, title, folder: file.categoryName });
  }
  return new Map(
    [...titles].sort(([, left], [, right]) =>
      left.title.localeCompare(right.title)
    )
  );
}

export function matchWikiLinkTitles(
  titles: ReadonlyMap<string, WikiLinkTarget>,
  query: string,
  limit = 7
): WikiLinkTarget[] {
  const key = wikiLinkTitleKey(query);
  const exact = titles.get(key);
  const prefix: WikiLinkTarget[] = [];
  const includes: WikiLinkTarget[] = [];
  for (const [title, target] of titles) {
    if (target === exact) continue;
    if (title.startsWith(key)) prefix.push(target);
    else if (includes.length < limit && title.includes(key))
      includes.push(target);
    if (prefix.length >= limit) break;
  }
  return [...(exact ? [exact] : []), ...prefix, ...includes].slice(0, limit);
}
