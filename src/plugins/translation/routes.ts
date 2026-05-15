import type { RouteRecordRaw } from 'vue-router';

export const translationRoutes: RouteRecordRaw[] = [
  {
    path: '/translate',
    name: 'Translate',
    component: () => import('./pages/translate/index.vue'),
    meta: { pluginId: 'translation' }
  }
];
