import { loadPluginRegistry } from './loader';
import type { RegisteredPlugin } from './protocol';
import type { PluginId, PluginStateMap } from './types';

export const REGISTERED_PLUGINS: RegisteredPlugin[] = loadPluginRegistry();

export const BUILTIN_PLUGINS: RegisteredPlugin[] = REGISTERED_PLUGINS.filter((plugin) => plugin.source === 'builtin');

export const INSTALLED_PLUGINS: RegisteredPlugin[] = REGISTERED_PLUGINS;

export const PLUGIN_IDS = INSTALLED_PLUGINS.map((plugin) => plugin.id);

export const DEFAULT_PLUGIN_STATES = INSTALLED_PLUGINS.reduce((states, plugin) => {
  states[plugin.id] = plugin.enabledByDefault;
  return states;
}, {} as PluginStateMap);

export const isPluginId = (value: string): value is PluginId => (
  PLUGIN_IDS.includes(value as PluginId)
);

export const getPluginById = (id: PluginId): RegisteredPlugin | undefined => (
  INSTALLED_PLUGINS.find((plugin) => plugin.id === id)
);

export const getPluginByRouteName = (routeName: string): RegisteredPlugin | undefined => (
  INSTALLED_PLUGINS.find((plugin) => plugin.routeNames?.includes(routeName))
);

export const getPluginBySettingsTab = (tabId: string): RegisteredPlugin | undefined => (
  INSTALLED_PLUGINS.find((plugin) => plugin.settingsTabs?.includes(tabId))
);

export const getPluginByHotkey = (hotkeyName: string): RegisteredPlugin | undefined => (
  INSTALLED_PLUGINS.find((plugin) => plugin.hotkeys?.includes(hotkeyName))
);
