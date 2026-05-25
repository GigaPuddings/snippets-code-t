import type { PluginFrontendRuntimeContext } from '../runtime';

export const activate = (context: PluginFrontendRuntimeContext): void => {
  context.registerRoute({
    target: 'window',
    path: '/screen-recorder',
    name: 'ScreenRecorder',
    component: () => import('./pages/recorder/index.vue')
  });
};
