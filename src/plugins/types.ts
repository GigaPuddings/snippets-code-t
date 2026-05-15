export type PluginId =
  | 'translation'
  | 'screenshot'
  | 'todo'
  | 'system-theme'
  | 'local-launcher'
  | 'desktop-files'
  | 'search-engines'
  | 'git-sync'
  | 'attachments';

export type PluginCategory = 'capture' | 'automation' | 'search' | 'sync' | 'editor' | 'appearance';

export interface BuiltinPlugin {
  id: PluginId;
  nameKey: string;
  descriptionKey: string;
  category: PluginCategory;
  enabledByDefault: boolean;
  routeNames?: string[];
  settingsTabs?: string[];
  hotkeys?: string[];
  searchSources?: string[];
  resourceHintKey?: string;
}

export type PluginStateMap = Record<PluginId, boolean>;
