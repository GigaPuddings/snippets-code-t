import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'window',
    path: '/wallpaper-switcher',
    name: 'WallpaperSwitcher',
    component: () => import('./pages/switcher/index.vue')
  });
  context.registerRoute({
    target: 'window',
    path: '/wallpaper-wallhaven',
    name: 'WallpaperWallhaven',
    component: () => import('./pages/wallhaven/index.vue')
  });
  context.registerWindowShortcut({
    label: 'wallpaper_switcher'
  });
};
