import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'config',
    path: 'retrieve',
    name: 'Retrieve',
    component: () => import('./pages/config/index.vue')
  });
};

