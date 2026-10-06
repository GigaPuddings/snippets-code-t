import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { createMemoryHistory, createRouter } from 'vue-router';
import { createI18n } from 'vue-i18n';
import { describe, expect, it } from 'vitest';
import QuickNav from './index.vue';

type QuickView = 'folders' | 'all' | 'uncategorized' | 'favorites' | 'trash';

type NavigationRender = {
  html: string;
  links: {
    href: string | undefined;
    current: string | undefined;
    active: boolean;
  }[];
};

async function renderNavigation(
  path: string,
  activeView: QuickView
): Promise<NavigationRender> {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/config/category/contentList',
        component: { render: (): null => null },
        children: [
          { path: '0', component: { render: (): null => null } },
          { path: 'content/:id', component: { render: (): null => null } }
        ]
      }
    ]
  });
  await router.push(path);
  await router.isReady();
  const app = createSSRApp(QuickNav, { activeView, favoriteCount: 3 });
  app.use(router);
  app.use(
    createI18n({
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          nav: {
            quickAccess: 'Quick access',
            allSnippets: 'All snippets',
            uncategorized: 'Uncategorized',
            favorites: 'Favorites',
            recentlyDeleted: 'Recently deleted',
            favoriteCount: '{count} favorites'
          }
        }
      }
    })
  );
  const html = await renderToString(app);
  const links = [...html.matchAll(/<a\b([^>]*)>/g)].map(([, attributes]) => ({
    href: attributes.match(/\bhref="([^"]+)"/)?.[1],
    current: attributes.match(/\baria-current="([^"]+)"/)?.[1],
    active: /(?:^|\s)active(?:\s|$)/.test(
      attributes.match(/\bclass="([^"]+)"/)?.[1] ?? ''
    )
  }));
  return { html, links };
}

describe('QuickNav selection', () => {
  it('does not highlight query-based collections on initial folder browsing', async () => {
    const { links } = await renderNavigation(
      '/config/category/contentList',
      'folders'
    );
    expect(links).toHaveLength(4);
    expect(links.filter((link) => link.current === 'page')).toEqual([]);
    expect(links.filter((link) => link.active)).toEqual([]);
  });

  it.each([
    ['all', '/config/category/contentList'],
    ['uncategorized', '/config/category/contentList/0'],
    ['favorites', '/config/category/contentList?view=favorites'],
    ['trash', '/config/category/contentList?view=trash']
  ] as const)('marks only the %s collection as current', async (view, path) => {
    const { links } = await renderNavigation(path, view);
    expect(links.filter((link) => link.current === 'page')).toEqual([
      { href: path, current: 'page', active: true }
    ]);
    expect(links.filter((link) => link.active)).toHaveLength(1);
  });

  it('keeps the current collection marked when opening a nested document', async () => {
    const { links } = await renderNavigation(
      '/config/category/contentList/content/example',
      'all'
    );
    expect(links.filter((link) => link.current === 'page')).toEqual([
      {
        href: '/config/category/contentList',
        current: 'page',
        active: true
      }
    ]);
  });

  it('shows the favorite count only while the favorites collection is current', async () => {
    const favorites = await renderNavigation(
      '/config/category/contentList?view=favorites',
      'favorites'
    );
    const all = await renderNavigation('/config/category/contentList', 'all');
    expect(favorites.html).toContain('aria-label="3 favorites"');
    expect(all.html).not.toContain('aria-label="3 favorites"');
  });
});
