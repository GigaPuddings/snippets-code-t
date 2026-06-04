import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'layout',
    path: '/dark-mode',
    name: 'DarkMode',
    component: () => import('./pages/dark-mode/index.vue')
  });
  context.registerWindowShortcut({
    label: 'dark_mode'
  });
};

