import { defineAsyncComponent } from 'vue';
import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'config',
    path: 'todo',
    name: 'Todo',
    component: defineAsyncComponent(() => import('./pages/config/index.vue'))
  });
};

