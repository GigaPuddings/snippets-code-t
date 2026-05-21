import { describe, expect, it, vi } from 'vitest';
import { useConfigNavigationEvents } from './useConfigNavigationEvents';

const t = ((key: string) => key) as any;

const createStorage = () => {
  const data = new Map<string, string>();
  return {
    getItem: vi.fn((key: string) => data.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => {
      data.set(key, value);
    }),
    removeItem: vi.fn((key: string) => {
      data.delete(key);
    })
  };
};

const createRouter = () => ({
  push: vi.fn()
});

const createWindow = () => {
  const listeners = new Map<string, (event: { payload: any }) => void | Promise<void>>();
  const unlisteners: Array<ReturnType<typeof vi.fn>> = [];
  const focusUnlisten = vi.fn();

  return {
    listeners,
    unlisteners,
    focusUnlisten,
    window: {
      listen: vi.fn(async (event: string, handler: (event: { payload: any }) => void | Promise<void>) => {
        const unlisten = vi.fn();
        listeners.set(event, handler);
        unlisteners.push(unlisten);
        return unlisten;
      }),
      onFocusChanged: vi.fn(async (handler: (event: { payload: boolean }) => void | Promise<void>) => {
        listeners.set('tauri://focus', handler);
        return focusUnlisten;
      })
    }
  };
};

describe('useConfigNavigationEvents', () => {
  it('routes pending navigation requests and clears storage', () => {
    const storage = createStorage();
    const router = createRouter();
    storage.setItem('pendingNavigation', JSON.stringify({
      fragmentId: 'markdown:snippet.md',
      categoryId: 'frontend',
      timestamp: Date.now()
    }));

    const navigationEvents = useConfigNavigationEvents({
      router: router as any,
      t,
      modalMsg: vi.fn(),
      storage
    });

    navigationEvents.checkPendingNavigation();

    expect(router.push).toHaveBeenCalledWith({
      path: '/config/category/contentList/frontend/content/snippet.md',
      query: undefined
    });
    expect(storage.removeItem).toHaveBeenCalledWith('pendingNavigation');
  });

  it('routes pending snippet preview requests', () => {
    const storage = createStorage();
    const router = createRouter();
    storage.setItem('pendingSnippetOpen', JSON.stringify({
      fragmentId: 'snippet.md',
      content: 'const a = 1;',
      categoryId: 'frontend',
      timestamp: Date.now()
    }));

    const navigationEvents = useConfigNavigationEvents({
      router: router as any,
      t,
      modalMsg: vi.fn(),
      storage
    });

    navigationEvents.checkPendingSnippetOpen();

    expect(router.push).toHaveBeenCalledWith({
      path: '/config/category/contentList/frontend/content/snippet.md',
      query: { preview: '1' }
    });
    expect(storage.removeItem).toHaveBeenCalledWith('pendingSnippetOpen');
  });

  it('registers window navigation listeners and cleans them up', async () => {
    const router = createRouter();
    const { window, listeners, unlisteners, focusUnlisten } = createWindow();
    const readMarkdownFile = vi.fn(async () => ({
      filePath: 'notes.md',
      categoryId: 'docs'
    }) as any);
    const storage = createStorage();
    const navigationEvents = useConfigNavigationEvents({
      router: router as any,
      t,
      modalMsg: vi.fn(),
      storage,
      getWindow: () => window,
      readMarkdownFile
    });

    await navigationEvents.setup();
    await listeners.get('navigate-to-settings')?.({ payload: undefined });
    await listeners.get('navigate-to-fragment')?.({
      payload: {
        fragmentId: 'markdown:snippet.md',
        categoryId: 'frontend'
      }
    });
    await listeners.get('open-markdown-from-system')?.({
      payload: {
        file_path: 'C:/tmp/notes.md'
      }
    });
    navigationEvents.cleanup();

    expect(window.listen).toHaveBeenCalledTimes(4);
    expect(window.onFocusChanged).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith('/config/category/settings');
    expect(router.push).toHaveBeenCalledWith({
      path: '/config/category/contentList/frontend/content/snippet.md',
      query: undefined
    });
    expect(router.push).toHaveBeenCalledWith({
      path: '/config/category/contentList/docs/content/notes.md',
      query: undefined
    });
    expect(unlisteners.every((unlisten) => unlisten.mock.calls.length === 1)).toBe(true);
    expect(focusUnlisten).toHaveBeenCalledTimes(1);
  });
});
