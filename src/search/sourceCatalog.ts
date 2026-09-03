export type UniversalSearchDomain =
  | 'workspace'
  | 'apps'
  | 'files'
  | 'bookmarks'
  | 'tools'
  | 'web';

export interface UniversalSearchSourceDescriptor {
  source: string;
  domain: UniversalSearchDomain;
  pluginId?: string;
  priority: number;
  timeoutMs?: number;
}

export const UNIVERSAL_SEARCH_SOURCES: UniversalSearchSourceDescriptor[] = [
  { source: 'markdown', domain: 'workspace', priority: 80 },
  {
    source: 'local-launcher',
    domain: 'apps',
    pluginId: 'local-launcher',
    priority: 70
  },
  { source: 'app', domain: 'apps', pluginId: 'local-launcher', priority: 70 },
  {
    source: 'bookmark',
    domain: 'bookmarks',
    pluginId: 'local-launcher',
    priority: 50
  },
  {
    source: 'desktop-files',
    domain: 'files',
    pluginId: 'desktop-files',
    priority: 40
  },
  { source: 'file', domain: 'files', pluginId: 'desktop-files', priority: 40 },
  {
    source: 'quick-tools',
    domain: 'tools',
    pluginId: 'quick-tools',
    priority: 100
  },
  {
    source: 'engine-shortcut',
    domain: 'web',
    pluginId: 'search-engines',
    priority: 90
  },
  {
    source: 'default-search',
    domain: 'web',
    pluginId: 'search-engines',
    priority: 0
  },
  { source: 'url-open', domain: 'web', priority: 110 }
];

export const getUniversalSearchSourceDescriptor = (
  source: string
): UniversalSearchSourceDescriptor | undefined =>
  UNIVERSAL_SEARCH_SOURCES.find((item) => item.source === source);

export const getUniversalSearchSourcePluginId = (
  source: string
): string | undefined => getUniversalSearchSourceDescriptor(source)?.pluginId;

export const getUniversalSearchSourcePriority = (source: string): number =>
  getUniversalSearchSourceDescriptor(source)?.priority ?? 0;
