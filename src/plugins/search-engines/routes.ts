import type { RouteRecordRaw } from 'vue-router';

export const searchEnginesConfigRoutes: RouteRecordRaw[] = [
  {
    path: 'retrieve',
    name: 'Retrieve',
    component: () => import('@/pages/config/components/retrieve/index.vue'),
    meta: { pluginId: 'search-engines' }
  }
];
