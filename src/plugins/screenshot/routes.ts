import type { RouteRecordRaw } from 'vue-router';

export const screenshotWindowRoutes: RouteRecordRaw[] = [
  {
    path: '/screenshot',
    name: 'Screenshot',
    component: () => import('./pages/screenshot/index.vue'),
    meta: { pluginId: 'screenshot' }
  },
  {
    path: '/pin',
    name: 'Pin',
    component: () => import('./pages/pin/index.vue'),
    meta: { pluginId: 'screenshot' }
  }
];
