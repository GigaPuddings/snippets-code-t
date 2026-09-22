import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { usePluginStore } from '@/store';
import {
  configPluginRoutes,
  getRuntimeRoutePluginCandidates,
  layoutPluginRoutes,
  windowPluginRoutes
} from '@/plugins/routes';
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
        redirect: '/config/workbench',
        children: [
          {
            path: 'workbench',
            component: () => import('@/pages/workbench/index.vue'),
            name: 'Workbench'
          },
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
                    component: () =>
                      import('@/pages/config/components/user/index.vue'),
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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const isUnresolvedRuntimeRoute = (route: {
  name?: unknown;
  matched: Array<{ path: string }>;
}): boolean =>
  route.name === undefined &&
  route.matched.some((record) => record.path === '/:pathMatch(.*)*');

router.beforeEach(async (to) => {
  const pluginStore = usePluginStore();
  await pluginStore.initialize();

  let addedRuntimeRoutes = installRuntimePluginRoutes(router);
  if (addedRuntimeRoutes > 0 && isUnresolvedRuntimeRoute(to)) {
    return to.fullPath;
  }

  if (isUnresolvedRuntimeRoute(to)) {
    // A native shortcut opens a fresh WebView. Load the plugin that owns the
    // requested route first instead of blocking the window on every enabled
    // plugin runtime (several megabytes in a production installation).
    const candidates = getRuntimeRoutePluginCandidates(
      to.path,
      pluginStore.plugins.filter((plugin) => pluginStore.isEnabled(plugin.id))
    );
    for (const plugin of candidates) {
      await pluginStore.loadEnabledPluginEntry(String(plugin.id));
      installRuntimePluginRoutes(router);
      if (!isUnresolvedRuntimeRoute(router.resolve(to.fullPath))) {
        return to.fullPath;
      }
    }

    await pluginStore.loadEnabledPluginEntries();
    addedRuntimeRoutes = installRuntimePluginRoutes(router);
    if (addedRuntimeRoutes > 0) {
      return to.fullPath;
    }
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
