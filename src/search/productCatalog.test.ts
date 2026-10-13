import { describe, expect, it } from 'vitest';
import { buildProductSearchCatalog } from './productCatalog';
import { rankSearchResults } from './ranking';
import { isProductSearchAction } from './productActions';

const t = (key: string) =>
  ({
    'nav.aiChat': 'AI 对话',
    'settings.ai.menu': 'AI 能力',
    'titlebar.userCenter': '个人中心'
  })[key] ?? key;

describe('product search catalog', () => {
  it('includes every core setting and the separate profile route', () => {
    const items = buildProductSearchCatalog(t, [], () => false);
    for (const id of [
      'workbench',
      'general',
      'ai',
      'plugins',
      'shortcut',
      'data',
      'developer'
    ]) {
      expect(
        items.find((item) => item.id === `setting:${id}`)?.searchAction
      ).toEqual({ kind: 'settings', tabId: id });
    }
    expect(items.find((item) => item.id === 'page:user')?.searchAction).toEqual(
      { kind: 'page', routeName: 'User' }
    );
    expect(
      items.every((item) => isProductSearchAction(item.searchAction))
    ).toBe(true);
  });
  it('only offers enabled plugin pages and starts an empty AI conversation', () => {
    expect(
      buildProductSearchCatalog(t, [], () => false).some(
        (item) => item.id === 'page:aiChat'
      )
    ).toBe(false);
    const enabled = buildProductSearchCatalog(t, [], (id) => id === 'local-ai');
    expect(enabled.find((item) => item.id === 'page:aiChat')).toMatchObject({
      searchAction: { kind: 'new-chat' },
      metadata: { plugin_id: 'local-ai' }
    });
    expect(enabled.some((item) => item.id === 'page:launcher')).toBe(false);
  });
  it('matches hotkey and pinyin aliases without indexing configuration values', () => {
    const items = buildProductSearchCatalog(t, [], () => false);
    expect(
      rankSearchResults(items, 'hotkeys', new Map(), { deepSearch: false })[0]
        ?.id
    ).toBe('setting:shortcut');
    expect(
      rankSearchResults(items, 'grzx', new Map(), { deepSearch: false })[0]?.id
    ).toBe('page:user');
  });
  it('rejects arbitrary executable actions and unbounded route parameters', () => {
    expect(
      isProductSearchAction({ kind: 'command', command: 'delete_all_data' })
    ).toBe(false);
    expect(
      isProductSearchAction({
        kind: 'page',
        routeName: 'Local',
        query: { x: 1 }
      })
    ).toBe(false);
    expect(
      isProductSearchAction({ kind: 'conversation', conversationId: '\nchat' })
    ).toBe(false);
  });
});
