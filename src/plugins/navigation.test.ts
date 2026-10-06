import { describe, expect, it } from 'vitest';
import {
  getConfigTabLabelKey,
  isConfigNavigationPathActive
} from './navigation';

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

describe('config titlebar tab labels', () => {
  it('keeps the workspace title for nested documents', () => {
    expect(
      getConfigTabLabelKey(
        '/config/category/contentList/7/content/a-long-file-title'
      )
    ).toBe('nav.workspace');
  });
  it('distinguishes settings and personal center from workspace documents', () => {
    expect(getConfigTabLabelKey('/config/category/settings')).toBe(
      'titlebar.settings'
    );
    expect(getConfigTabLabelKey('/config/category/contentList/user')).toBe(
      'titlebar.userCenter'
    );
  });
  it('resolves every registered tab without confusing shared prefixes', () => {
    expect(getConfigTabLabelKey('/config/workbench')).toBe('nav.workbench');
    expect(getConfigTabLabelKey('/config/local')).toBe('nav.launcher');
    expect(getConfigTabLabelKey('/config/local-ai/chat/session')).toBe(
      'nav.aiChat'
    );
    expect(getConfigTabLabelKey('/config/retrieve')).toBe('nav.webSearch');
    expect(getConfigTabLabelKey('/config/todo')).toBe('nav.todo');
  });
  it('does not invent a title for unknown routes', () => {
    expect(getConfigTabLabelKey('/config/unknown')).toBeUndefined();
  });
});
