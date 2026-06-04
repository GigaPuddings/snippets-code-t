import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'config',
    path: 'todo',
    name: 'Todo',
    component: () => import('./pages/config/index.vue')
  });
};

