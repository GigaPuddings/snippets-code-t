import type { BuiltinPlugin, PluginId, PluginStateMap } from './types';

export const BUILTIN_PLUGINS: BuiltinPlugin[] = [
  {
    id: 'translation',
    nameKey: 'plugins.translation.name',
    descriptionKey: 'plugins.translation.description',
    category: 'automation',
    enabledByDefault: true,
    routeNames: ['Translate'],
    settingsTabs: ['translation'],
    hotkeys: ['translate', 'selection_translate'],
    searchSources: [],
    resourceHintKey: 'plugins.translation.resourceHint'
  },
  {
    id: 'screenshot',
    nameKey: 'plugins.screenshot.name',
    descriptionKey: 'plugins.screenshot.description',
    category: 'capture',
    enabledByDefault: true,
    routeNames: ['Screenshot', 'Pin'],
    hotkeys: ['screenshot'],
    resourceHintKey: 'plugins.screenshot.resourceHint'
  },
  {
    id: 'todo',
    nameKey: 'plugins.todo.name',
    descriptionKey: 'plugins.todo.description',
    category: 'automation',
    enabledByDefault: true,
    routeNames: ['Todo'],
    settingsTabs: ['todo']
  },
  {
    id: 'system-theme',
    nameKey: 'plugins.systemTheme.name',
    descriptionKey: 'plugins.systemTheme.description',
    category: 'appearance',
    enabledByDefault: true,
    routeNames: ['DarkMode'],
    hotkeys: ['dark_mode']
  },
  {
    id: 'local-launcher',
    nameKey: 'plugins.localLauncher.name',
    descriptionKey: 'plugins.localLauncher.description',
    category: 'search',
    enabledByDefault: true,
    routeNames: ['Local'],
    settingsTabs: ['local'],
    searchSources: ['apps', 'bookmarks']
  },
  {
    id: 'desktop-files',
    nameKey: 'plugins.desktopFiles.name',
    descriptionKey: 'plugins.desktopFiles.description',
    category: 'search',
    enabledByDefault: true,
    searchSources: ['desktop-files']
  },
  {
    id: 'search-engines',
    nameKey: 'plugins.searchEngines.name',
    descriptionKey: 'plugins.searchEngines.description',
    category: 'search',
    enabledByDefault: true,
    routeNames: ['Retrieve'],
    settingsTabs: ['retrieve'],
    searchSources: ['web-search']
  },
  {
    id: 'git-sync',
    nameKey: 'plugins.gitSync.name',
    descriptionKey: 'plugins.gitSync.description',
    category: 'sync',
    enabledByDefault: true,
    settingsTabs: ['gitSync']
  },
  {
    id: 'attachments',
    nameKey: 'plugins.attachments.name',
    descriptionKey: 'plugins.attachments.description',
    category: 'editor',
    enabledByDefault: true,
    settingsTabs: ['attachment']
  }
];

export const PLUGIN_IDS = BUILTIN_PLUGINS.map((plugin) => plugin.id);

export const DEFAULT_PLUGIN_STATES = BUILTIN_PLUGINS.reduce((states, plugin) => {
  states[plugin.id] = plugin.enabledByDefault;
  return states;
}, {} as PluginStateMap);

export const isPluginId = (value: string): value is PluginId => (
  PLUGIN_IDS.includes(value as PluginId)
);

export const getPluginById = (id: PluginId): BuiltinPlugin | undefined => (
  BUILTIN_PLUGINS.find((plugin) => plugin.id === id)
);

export const getPluginByRouteName = (routeName: string): BuiltinPlugin | undefined => (
  BUILTIN_PLUGINS.find((plugin) => plugin.routeNames?.includes(routeName))
);

export const getPluginBySettingsTab = (tabId: string): BuiltinPlugin | undefined => (
  BUILTIN_PLUGINS.find((plugin) => plugin.settingsTabs?.includes(tabId))
);

export const getPluginByHotkey = (hotkeyName: string): BuiltinPlugin | undefined => (
  BUILTIN_PLUGINS.find((plugin) => plugin.hotkeys?.includes(hotkeyName))
);
