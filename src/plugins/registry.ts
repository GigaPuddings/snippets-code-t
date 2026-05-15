import type { BuiltinPlugin, PluginId, PluginStateMap } from './types';
import { attachmentsPlugin } from './attachments/manifest';
import { desktopFilesPlugin } from './desktop-files/manifest';
import { gitSyncPlugin } from './git-sync/manifest';
import { localLauncherPlugin } from './local-launcher/manifest';
import { screenshotPlugin } from './screenshot/manifest';
import { searchEnginesPlugin } from './search-engines/manifest';
import { systemThemePlugin } from './system-theme/manifest';
import { todoPlugin } from './todo/manifest';
import { translationPlugin } from './translation/manifest';

export const BUILTIN_PLUGINS: BuiltinPlugin[] = [
  translationPlugin,
  screenshotPlugin,
  todoPlugin,
  systemThemePlugin,
  localLauncherPlugin,
  desktopFilesPlugin,
  searchEnginesPlugin,
  gitSyncPlugin,
  attachmentsPlugin
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
