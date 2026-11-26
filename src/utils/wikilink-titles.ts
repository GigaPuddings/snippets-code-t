import type { MarkdownFile } from '@/types/models';

type WikiLinkFile = Pick<
  MarkdownFile,
  'id' | 'filePath' | 'title' | 'categoryName'
>;

export interface WikiLinkTarget {
  path: string;
  title: string;
  folder: string;
  destination: string;
}

export function splitWikiLink(text: string) {
  const separator = text.indexOf('|');
  const address = (
    separator < 0 ? text : text.slice(0, separator).replace(/\\$/, '')
  ).trim();
  return {
    address,
    label: separator < 0 ? address : text.slice(separator + 1).trim() || address
  };
}

function normalizedPath(path: string) {
  const parts: string[] = [];
  for (const part of path.replace(/\\/g, '/').split('/')) {
    if (part === '..') {
      if (!parts.length) return;
      parts.pop();
    } else if (part && part !== '.') parts.push(part);
  }
  return parts.join('/');
}

export function indexWikiLinkTitles(
  files: readonly WikiLinkFile[],
  workspaceRoot = ''
) {
  const root = workspaceRoot.replace(/\\/g, '/').replace(/\/$/, '');
  const windows = /^[a-z]:|^\/\//i.test(root);
  const key = (path: string) => (windows ? path.toLowerCase() : path);
  function vaultPath(path: string) {
    const full = path.replace(/\\/g, '/');
    return root && key(full).startsWith(key(root) + '/')
      ? full.slice(root.length + 1)
      : full;
  }
  const paths = new Map<string, WikiLinkTarget>();
  const titles = new Map<string, WikiLinkTarget[]>();
  const stems = new Map<string, WikiLinkTarget[]>();
  function add(index: typeof titles, name: string, target: WikiLinkTarget) {
    const group = index.get(name);
    if (group) group.push(target);
    else index.set(name, [target]);
  }
  for (const file of files) {
    const path = file.filePath || file.id;
    if (!path) continue;
    const relative = vaultPath(path);
    const stem = relative
      .slice(relative.lastIndexOf('/') + 1)
      .replace(/\.md$/i, '');
    const title = file.title.trim() || stem;
    const target = {
      title,
      path,
      folder: file.categoryName,
      destination: title
    };
    paths.set(key(relative), target);
    add(titles, title.toLowerCase(), target);
    add(stems, stem.toLowerCase(), target);
  }
  for (const target of paths.values()) {
    if (
      (titles.get(target.title.toLowerCase())?.length ?? 0) > 1 ||
      /[#?|[\]/\\%]/.test(target.title) ||
      /\.md$/i.test(target.title)
    ) {
      target.destination =
        '/' + vaultPath(target.path).replace(/[%#?|[\]]/g, encodeURIComponent);
    }
  }
  function resolve(
    raw: string,
    source: string,
    wiki = true
  ): WikiLinkTarget | 'ambiguous' | undefined {
    const address = wiki ? splitWikiLink(raw).address : raw;
    let name = address.split(/[?#]/, 1)[0].trim();
    if (!name && address.startsWith('#'))
      return paths.get(key(vaultPath(source)));
    try {
      name = decodeURIComponent(name).replace(/\\/g, '/');
    } catch {
      return;
    }
    if (!name || name.startsWith('//')) return;
    const unique = (group?: WikiLinkTarget[]) =>
      group && group.length > 1 ? ('ambiguous' as const) : group?.[0];
    const hasExtension = /\.md$/i.test(name);
    if (wiki && !hasExtension && !name.includes('/')) {
      const lookup = name.toLowerCase();
      return unique(titles.get(lookup) ?? stems.get(lookup));
    }
    if (name.includes(':')) return;
    const filename = hasExtension ? name : name + '.md';
    const local = /^\.\.?\//.test(name);
    const folder = vaultPath(source).split('/').slice(0, -1).join('/');
    const bases =
      name.startsWith('/') || (wiki && name.includes('/') && !local)
        ? ['']
        : local
          ? [folder]
          : [folder, ''];
    for (const base of bases) {
      const relative = normalizedPath(base + '/' + filename);
      const result = relative && paths.get(key(relative));
      if (result) return result;
    }
    if (wiki && !name.includes('/'))
      return unique(stems.get(name.slice(0, -3).toLowerCase()));
    return undefined;
  }
  const candidates = [...paths.values()].sort(
    (a, b) => a.title.localeCompare(b.title) || a.path.localeCompare(b.path)
  );
  return { resolve, candidates };
}

export function matchWikiLinkTitles(
  index: ReturnType<typeof indexWikiLinkTitles>,
  query: string,
  limit = 7
): WikiLinkTarget[] {
  const key = query.trim().toLowerCase();
  const groups: WikiLinkTarget[][] = [[], [], []];
  for (const item of index.candidates) {
    const title = item.title.toLowerCase();
    if (title.includes(key))
      groups[title === key ? 0 : title.startsWith(key) ? 1 : 2].push(item);
  }
  return groups.flat().slice(0, limit);
}
