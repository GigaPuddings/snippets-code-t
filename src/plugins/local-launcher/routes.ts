import type { RouteRecordRaw } from 'vue-router';

export const localLauncherConfigRoutes: RouteRecordRaw[] = [
  {
    path: 'local',
    name: 'Local',
    component: () => import('./pages/config/index.vue'),
    meta: { pluginId: 'local-launcher' }
  }
];
