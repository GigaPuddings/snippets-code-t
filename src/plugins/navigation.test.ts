import { describe, expect, it } from 'vitest';
import { isConfigNavigationPathActive } from './navigation';

describe('config navigation path matching', () => {
  it('matches the workbench home route without capturing workspace routes', () => {
    expect(
      isConfigNavigationPathActive('/config/workbench', '/config/workbench')
    ).toBe(true);
    expect(
      isConfigNavigationPathActive(
        '/config/category/contentList',
        '/config/workbench'
      )
    ).toBe(false);
  });

  it('matches the tab route and its nested routes', () => {
    expect(
      isConfigNavigationPathActive(
        '/config/category/contentList/frontend/content/example',
        '/config/category/contentList'
      )
    ).toBe(true);
  });

  it('does not match another route that only shares a path prefix', () => {
    expect(
      isConfigNavigationPathActive('/config/local-ai/chat', '/config/local')
    ).toBe(false);
    expect(
      isConfigNavigationPathActive(
        '/config/local-ai/chat',
        '/config/local-ai/chat'
      )
    ).toBe(true);
  });
});
