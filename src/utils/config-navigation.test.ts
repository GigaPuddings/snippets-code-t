import { describe, expect, it, vi } from 'vitest';
import { createMemoryHistory, createRouter } from 'vue-router';
import {
  getConfigContentPath,
  navigateConfigRoute,
  openConfigSettings
} from './config-navigation';

const router = () =>
  createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: {} },
      { path: '/config/category/settings', component: {} },
      { path: '/config/category/contentList/:cid?/content/:id', component: {} }
    ]
  });

describe('shared config navigation', () => {
  it('opens root content without an undefined category and preserves zero as a category', async () => {
    const target = router();
    const id = 'markdown:E:\\笔记\\a # 100%.md';
    await navigateConfigRoute(target, getConfigContentPath(id));
    expect(target.currentRoute.value.params).toMatchObject({
      cid: '',
      id: 'E:/笔记/a # 100%.md'
    });
    await navigateConfigRoute(target, getConfigContentPath(id, 0));
    expect(target.currentRoute.value.params.cid).toBe('0');
  });

  it('encodes folder segments and applies content encoding exactly once', async () => {
    const target = router();
    await navigateConfigRoute(target, {
      path: getConfigContentPath('markdown:one%20two.md', 'Vue / TS'),
      query: { preview: '1', skipReload: 'true' }
    });
    expect(target.currentRoute.value.params).toMatchObject({
      cid: 'Vue / TS',
      id: 'one%20two.md'
    });
    expect(target.currentRoute.value.query).toEqual({
      preview: '1',
      skipReload: 'true'
    });
    expect(() => getConfigContentPath(undefined)).toThrow();
  });

  it('propagates aborted settings navigation and allows retry, including an already-open page', async () => {
    const target = router();
    await target.push('/');
    const stop = target.beforeEach(() => false);
    await expect(openConfigSettings(target, 'data')).rejects.toBeDefined();
    stop();
    await openConfigSettings(target, 'data');
    expect(target.currentRoute.value.query).toEqual({ tab: 'data' });
    await expect(openConfigSettings(target, 'data')).resolves.toBeUndefined();
  });

  it('preserves push/replace behavior and rejects dynamic import failures', async () => {
    const target = { push: vi.fn(), replace: vi.fn() };
    await navigateConfigRoute(target, '/config/workbench', true);
    expect(target.replace).toHaveBeenCalledWith('/config/workbench');
    expect(target.push).not.toHaveBeenCalled();
    target.push.mockRejectedValueOnce(new Error('import failed'));
    await expect(openConfigSettings(target, 'plugins')).rejects.toThrow(
      'import failed'
    );
  });
});
