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
  const listeners = new Map<
    string,
    (event: { payload: any }) => void | Promise<void>
  >();
  const unlisteners: Array<ReturnType<typeof vi.fn>> = [];
  const focusUnlisten = vi.fn();

  return {
    listeners,
    unlisteners,
    focusUnlisten,
    window: {
      listen: vi.fn(
        async (
          event: string,
          handler: (event: { payload: any }) => void | Promise<void>
        ) => {
          const unlisten = vi.fn();
          listeners.set(event, handler);
          unlisteners.push(unlisten);
          return unlisten;
        }
      ),
      onFocusChanged: vi.fn(
        async (
          handler: (event: { payload: boolean }) => void | Promise<void>
        ) => {
          listeners.set('tauri://focus', handler);
          return focusUnlisten;
        }
      )
    }
  };
};

describe('useConfigNavigationEvents', () => {
  it('opens uncategorized content and an empty snippet preview through the same route', () => {
    const storage = createStorage();
    const router = createRouter();
    const events = useConfigNavigationEvents({
      router: router as any,
      t,
      modalMsg: vi.fn(),
      storage
    });
    storage.setItem(
      'pendingNavigation',
      JSON.stringify({
        fragmentId: 'markdown:C:\\Notes\\a.md',
        timestamp: Date.now()
      })
    );
    events.checkPendingNavigation();
    expect(router.push).toHaveBeenLastCalledWith({
      path: '/config/category/contentList/content/C%3A%2FNotes%2Fa.md',
      query: undefined
    });
    storage.setItem(
      'pendingSnippetOpen',
      JSON.stringify({
        fragmentId: 'empty.md',
        content: '',
        timestamp: Date.now()
      })
    );
    events.checkPendingSnippetOpen();
    expect(router.push).toHaveBeenLastCalledWith({
      path: '/config/category/contentList/content/empty.md',
      query: { preview: '1' }
    });
  });
  it('routes pending navigation requests and clears storage', () => {
    const storage = createStorage();
    const router = createRouter();
    storage.setItem(
      'pendingNavigation',
      JSON.stringify({
        fragmentId: 'markdown:snippet.md',
        categoryId: 'frontend',
        timestamp: Date.now()
      })
    );

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
    storage.setItem(
      'pendingSnippetOpen',
      JSON.stringify({
        fragmentId: 'snippet.md',
        content: 'const a = 1;',
        categoryId: 'frontend',
        timestamp: Date.now()
      })
    );

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
    const readMarkdownFile = vi.fn(
      async () =>
        ({
          filePath: 'notes.md',
          categoryId: 'docs'
        }) as any
    );
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
    await listeners.get('navigate-to-settings-tab')?.({ payload: 'plugins' });
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

    expect(window.listen).toHaveBeenCalledTimes(5);
    expect(window.onFocusChanged).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith('/config/category/settings');
    expect(router.push).toHaveBeenCalledWith({
      path: '/config/category/settings',
      query: { tab: 'plugins' }
    });
    expect(router.push).toHaveBeenCalledWith({
      path: '/config/category/contentList/frontend/content/snippet.md',
      query: undefined
    });
    expect(router.push).toHaveBeenCalledWith({
      path: '/config/category/contentList/docs/content/notes.md',
      query: undefined
    });
    expect(
      unlisteners.every((unlisten) => unlisten.mock.calls.length === 1)
    ).toBe(true);
    expect(focusUnlisten).toHaveBeenCalledTimes(1);
  });
  it('handles a settings import error without an unhandled rejection and permits the next attempt', async () => {
    const router = createRouter();
    router.push
      .mockRejectedValueOnce(
        new TypeError(
          'Failed to fetch dynamically imported module: /settings.vue'
        )
      )
      .mockResolvedValue(undefined);
    const { window, listeners } = createWindow();
    const modalMsg = vi.fn();
    const navigationEvents = useConfigNavigationEvents({
      router: router as any,
      t,
      modalMsg,
      storage: createStorage(),
      getWindow: () => window
    });
    await navigationEvents.setup();
    await expect(
      listeners.get('navigate-to-settings')?.({ payload: undefined })
    ).resolves.toBeUndefined();
    expect(modalMsg).toHaveBeenCalledWith(
      expect.stringContaining('Failed to fetch dynamically imported module'),
      'error',
      'bottom-right'
    );
    await listeners.get('navigate-to-settings-tab')?.({ payload: 'plugins' });
    expect(router.push).toHaveBeenLastCalledWith({
      path: '/config/category/settings',
      query: { tab: 'plugins' }
    });
    expect(modalMsg).toHaveBeenCalledOnce();
    navigationEvents.cleanup();
  });
});
