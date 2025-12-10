import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';

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
            children: [
              {
                path: 'contentList/:cid?',
                component: () =>
                  import(
                    '@/pages/config/components/category/components/contentList/index.vue'
                  ),
                name: 'ContentList',
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
            name: 'Local'
          },
          {
            path: 'retrieve',
            component: () =>
              import('@/pages/config/components/retrieve/index.vue'),
            name: 'Retrieve'
          },
          // {
          //   path: 'summarize',
          //   component: () =>
          //     import('@/pages/config/components/summarize/index.vue'),
          //   name: 'Summarize'
          // },
          {
            path: 'todo',
            component: () => import('@/pages/config/components/todo/index.vue'),
            name: 'Todo'
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
        component: () => import('@/pages/translate/index.vue')
      },
      {
        path: '/dark-mode',
        name: 'DarkMode',
        component: () => import('@/pages/dark-mode/index.vue')
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
    component: () => import('@/pages/screenshot/index.vue')
  },
  {
    path: '/pin',
    name: 'Pin',
    component: () => import('@/pages/pin/index.vue')
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('@/pages/setup/index.vue')
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('@/pages/preview/index.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
