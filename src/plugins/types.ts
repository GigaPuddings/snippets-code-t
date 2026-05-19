export type BuiltinPluginId =
  | 'translation'
  | 'screenshot'
  | 'todo'
  | 'system-theme'
  | 'local-launcher'
  | 'desktop-files'
  | 'search-engines'
  | 'git-sync'
  | 'attachments';

export type PluginId = BuiltinPluginId | (string & {});

export type PluginCategory = 'capture' | 'automation' | 'search' | 'sync' | 'editor' | 'appearance';

export interface BuiltinPlugin {
  id: PluginId;
  version?: string;
  nameKey: string;
  fallbackName?: string;
  descriptionKey: string;
  fallbackDescription?: string;
  category: PluginCategory;
  enabledByDefault: boolean;
  routeNames?: string[];
  settingsTabs?: string[];
  hotkeys?: string[];
  searchSources?: string[];
  dependencies?: string[];
  resourceHintKey?: string;
}

export type PluginStateMap = Record<string, boolean>;
