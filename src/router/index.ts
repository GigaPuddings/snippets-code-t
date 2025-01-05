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
                    path: 'content/:id?',
                    component: () =>
                      import(
                        '@/pages/config/components/category/components/content/index.vue'
                      ),
                    name: 'Content'
                  }
                ]
              }
            ]
          },
          {
            path: 'summarize',
            component: () =>
              import('@/pages/config/components/summarize/index.vue'),
            name: 'Summarize'
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
