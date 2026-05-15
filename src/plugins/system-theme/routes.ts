import type { RouteRecordRaw } from 'vue-router';

export const systemThemeRoutes: RouteRecordRaw[] = [
  {
    path: '/dark-mode',
    name: 'DarkMode',
    component: () => import('./pages/dark-mode/index.vue'),
    meta: { pluginId: 'system-theme' }
  }
];
