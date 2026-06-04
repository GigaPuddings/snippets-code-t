import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'window',
    path: '/screenshot',
    name: 'Screenshot',
    component: () => import('./pages/screenshot/index.vue')
  });
  context.registerRoute({
    target: 'window',
    path: '/pin',
    name: 'Pin',
    component: () => import('./pages/pin/index.vue')
  });
};

