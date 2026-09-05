import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.window.create({
    path: '/wallpaper-switcher',
    name: 'WallpaperSwitcher',
    component: () => import('./pages/switcher/index.vue'),
    shortcutLabel: 'wallpaper_switcher'
  });
};
