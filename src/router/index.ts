import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { usePluginStore } from '@/store';
import { isPluginId } from '@/plugins/registry';
import type { PluginId } from '@/plugins/types';

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
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/error-page/404.vue')
  },
  {
    path: '/',
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
          {
            path: 'local',
            component: () =>
              import('@/pages/config/components/local/index.vue'),
            name: 'Local',
            meta: { pluginId: 'local-launcher' }
          },
          {
            path: 'retrieve',
            component: () =>
              import('@/pages/config/components/retrieve/index.vue'),
            name: 'Retrieve',
            meta: { pluginId: 'search-engines' }
          },
          {
            path: 'todo',
            component: () => import('@/pages/config/components/todo/index.vue'),
            name: 'Todo',
            meta: { pluginId: 'todo' }
          }
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
      {
        path: '/translate',
        name: 'Translate',
        component: () => import('@/pages/translate/index.vue'),
        meta: { pluginId: 'translation' }
      },
      {
        path: '/dark-mode',
        name: 'DarkMode',
        component: () => import('@/pages/dark-mode/index.vue'),
        meta: { pluginId: 'system-theme' }
      }
    ]
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('@/pages/loading/index.vue')
  },
  {
    path: '/screenshot',
    name: 'Screenshot',
    component: () => import('@/pages/screenshot/index.vue'),
    meta: { pluginId: 'screenshot' }
  },
  {
    path: '/pin',
    name: 'Pin',
    component: () => import('@/pages/pin/index.vue'),
    meta: { pluginId: 'screenshot' }
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('@/pages/setup/index.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(async (to) => {
  const pluginStore = usePluginStore();
  await pluginStore.initialize();

  const pluginId = to.matched
    .map((record) => record.meta.pluginId)
    .find((id): id is PluginId => typeof id === 'string' && isPluginId(id));

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
