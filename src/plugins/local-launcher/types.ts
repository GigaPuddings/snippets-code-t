export interface LauncherEntry {
  id: string;
  title: string;
  content: string;
  icon?: string | null;
  summarize: string;
  usage_count: number;
  metadata?: {
    aliases: string[];
    discovery_source: string;
    auxiliary: boolean;
  };
  sources?: BookmarkSource[];
}

export interface BookmarkSource {
  browser: string;
  profile: string;
  profile_key: string;
  node_id: string;
  folder_path: string[];
  storage_path: string;
  url: string;
  title: string;
}

export interface LauncherSettings {
  show_auxiliary: boolean;
  scan_roots: string[];
}

export interface LauncherExclusion {
  kind: string;
  target: string;
  title: string;
}
export interface BookmarkDeleteStatus {
  profile_key: string;
  node_id: string;
  available: boolean;
  reason: string | null;
}

export const bookmarkSourceKey = (
  source: Pick<BookmarkSource, 'profile_key' | 'node_id'>
): string => JSON.stringify([source.profile_key, source.node_id]);

export const bookmarkSourceLabel = (source: BookmarkSource): string =>
  [source.browser, source.profile, source.folder_path.join(' / ')]
    .filter(Boolean)
    .join(' · ');
