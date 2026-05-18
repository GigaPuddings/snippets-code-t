import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { usePluginStore } from '@/store';
import { configPluginRoutes, layoutPluginRoutes, windowPluginRoutes } from '@/plugins/routes';
import { installRuntimePluginRoutes } from '@/plugins/runtime';

export const Layout = () => import('@/layout/index.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/redirect/index.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/search',
    children: [
      {
        path: 'search',
        component: () => import('@/pages/search/index.vue'),
        name: 'Search'
      },
      {
        path: 'config',
        component: () => import('@/pages/config/index.vue'),
        name: 'Config',
        children: [
          {
            path: 'category',
            component: () =>
              import('@/pages/config/components/category/index.vue'),
            name: 'Category',
            redirect: '/config/category/contentList',
            meta: { keepAlive: true },
            children: [
              {
                path: 'contentList/:cid?',
                component: () =>
                  import(
                    '@/pages/config/components/category/components/contentList/index.vue'
                  ),
                name: 'ContentList',
                meta: { keepAlive: true },
                children: [
                  {
                    path: '',
                    component: () => import('@/pages/welcome/index.vue'),
                    name: 'Welcome'
                  },
                  {
                    path: 'user',
                    component: () => import('@/pages/config/components/user/index.vue'),
                    name: 'User'
                  },
                  {
                    path: 'content/:id?',
                    component: () =>
                      import(
                        '@/pages/config/components/category/components/content/index.vue'
                      ),
                    name: 'Content'
                  }
                ]
              },
              {
                path: 'settings',
                component: () =>
                  import(
                    '@/pages/config/components/category/components/settings/index.vue'
                  ),
                name: 'Settings'
              }
            ]
          },
          ...configPluginRoutes
        ]
      },
      {
        path: '/notification',
        name: 'Notification',
        component: () => import('@/pages/notification/index.vue')
      },
      {
        path: '/update',
        name: 'Update',
        component: () => import('@/pages/update/index.vue')
      },
      ...layoutPluginRoutes
    ]
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('@/pages/loading/index.vue')
  },
  ...windowPluginRoutes,
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('@/pages/setup/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/error-page/404.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(async (to) => {
  const pluginStore = usePluginStore();
  await pluginStore.initialize();

  const addedRuntimeRoutes = installRuntimePluginRoutes(router);
  if (
    addedRuntimeRoutes > 0
    && to.name === undefined
    && to.matched.some((record) => record.path === '/:pathMatch(.*)*')
  ) {
    return to.fullPath;
  }

  const pluginId = to.matched
    .map((record) => record.meta.pluginId)
    .find((id): id is string => typeof id === 'string');

  if (pluginId && !pluginStore.isEnabled(pluginId)) {
    return {
      path: '/config/category/settings',
      query: {
        tab: 'plugins',
        disabled: pluginId
      }
    };
  }

  return true;
});

export default router;
