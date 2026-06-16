import type { RouteRecordRaw } from 'vue-router';

export const localAiConfigRoutes: RouteRecordRaw[] = [
  {
    path: 'local-ai',
    name: 'LocalAiChat',
    component: () => import('./pages/chat/index.vue'),
    meta: { pluginId: 'local-ai' }
  },
  {
    path: 'local-ai/settings',
    name: 'LocalAiSettings',
    component: () => import('./settings/index.vue'),
    meta: { pluginId: 'local-ai' }
  }
];
