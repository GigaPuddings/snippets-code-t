import type { BuiltinPlugin } from '../types';

export const wallpaperSwitcherPlugin: BuiltinPlugin = {
  id: 'wallpaper-switcher',
  nameKey: 'plugins.wallpaperSwitcher.name',
  descriptionKey: 'plugins.wallpaperSwitcher.description',
  category: 'appearance',
  enabledByDefault: true,
  routeNames: ['WallpaperSwitcher'],
  hotkeys: ['wallpaper_switcher'],
  trayItems: ['wallpaper_switcher']
};
