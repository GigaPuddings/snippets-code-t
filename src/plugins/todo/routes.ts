import type { RouteRecordRaw } from 'vue-router';

export const todoConfigRoutes: RouteRecordRaw[] = [
  {
    path: 'todo',
    name: 'Todo',
    component: () => import('@/pages/config/components/todo/index.vue'),
    meta: { pluginId: 'todo' }
  }
];
