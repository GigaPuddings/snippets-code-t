import type { RouteRecordRaw } from 'vue-router';

export const screenRecorderWindowRoutes: RouteRecordRaw[] = [
  {
    path: '/screen-recorder',
    name: 'ScreenRecorder',
    component: () => import('./pages/recorder/index.vue'),
    meta: { pluginId: 'screen-recorder' }
  }
];
