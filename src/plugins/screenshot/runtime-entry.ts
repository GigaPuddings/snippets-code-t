import { defineAsyncComponent } from 'vue';
import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'window',
    path: '/screenshot',
    name: 'Screenshot',
    component: defineAsyncComponent(() => import('./pages/screenshot/index.vue'))
  });
  context.registerRoute({
    target: 'window',
    path: '/pin',
    name: 'Pin',
    component: defineAsyncComponent(() => import('./pages/pin/index.vue'))
  });
};

