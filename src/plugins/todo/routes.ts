import type { RouteRecordRaw } from 'vue-router';

export const todoConfigRoutes: RouteRecordRaw[] = [
  {
    path: 'todo',
    name: 'Todo',
    component: () => import('./pages/config/index.vue'),
    meta: { pluginId: 'todo' }
  }
];
