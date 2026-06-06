import type { BuiltinPlugin } from '../types';

export const systemThemePlugin: BuiltinPlugin = {
  id: 'system-theme',
  nameKey: 'plugins.systemTheme.name',
  descriptionKey: 'plugins.systemTheme.description',
  category: 'appearance',
  enabledByDefault: true,
  routeNames: ['DarkMode'],
  hotkeys: ['dark_mode'],
  trayItems: ['dark_mode']
};
