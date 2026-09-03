import { describe, expect, it, vi } from 'vitest';
import type { ContentType, MarkdownFile, SearchEngine } from '@/types';
import type { SearchSourceProvider } from '@/plugins/search';

vi.mock('@tauri-apps/api/core', () => ({
  invoke: vi.fn()
}));

import {
  removeDisabledPluginResults,
  runUniversalSearch,
  withUniversalSearchSource
} from './universalSearch';
import { SearchSourceRegistry } from './sourceRegistry';

type Invoke = typeof import('@tauri-apps/api/core').invoke;

const engine: SearchEngine = {
  id: 1,
  name: 'Google',
  keyword: 'g',
  url: 'https://google.com/search?q=%s',
  enabled: true
};

const markdownFile = (overrides: Partial<MarkdownFile> = {}): MarkdownFile => ({
  id: 'markdown-1',
  title: 'Code Modal',
  content: 'Reusable modal snippet',
  categoryId: 1,
  categoryName: 'Frontend',
  tags: ['vue'],
  created: '2026-01-01T00:00:00.000Z',
  modified: '2026-01-02T00:00:00.000Z',
  type: 'code',
  favorite: false,
  filePath: 'D:\\Snippets\\frontend\\modal.md',
  score: 8,
  ...overrides
});

const contentItem = (
  id: string,
  title: string,
  summarize: ContentType['summarize'],
  content = title
): ContentType => ({
  id,
  title,
  content,
  summarize,
  score: 100
});

const createInvoke = (
  handlers: Record<string, unknown | ((payload?: unknown) => unknown)>
): Invoke =>
  vi.fn(async (command: string, payload?: unknown) => {
    const handler = handlers[command];
    if (handler instanceof Error) {
      throw handler;
    }
    if (typeof handler === 'function') {
      return handler(payload);
    }
    return handler;
  }) as unknown as Invoke;

describe('runUniversalSearch', () => {
  it('handles URL input before running workspace or plugin providers', async () => {
    const providerSearch = vi.fn();
    const invoke = createInvoke({});

    const response = await runUniversalSearch(
      {
        text: 'github.com',
        deepSearch: false,
        searchEngines: [engine]
      },
      {
        invoke,
        providers: [
          {
            pluginId: 'local-launcher',
            source: 'local-launcher',
            search: providerSearch
          }
        ],
        isPluginEnabled: () => true
      }
    );

    expect(response.intent).toBe('url-open');
    expect(response.items).toHaveLength(1);
    expect(response.items[0].content).toBe('https://github.com');
    expect(response.items[0].metadata?.source).toBe('url-open');
    expect(providerSearch).not.toHaveBeenCalled();
    expect(invoke).not.toHaveBeenCalled();
  });

  it('handles search-engine shortcuts before running indexed sources', async () => {
    const providerSearch = vi.fn();
    const invoke = createInvoke({});

    const response = await runUniversalSearch(
      {
        text: 'g vue',
        deepSearch: false,
        searchEngines: [engine]
      },
      {
        invoke,
        providers: [
          {
            pluginId: 'local-launcher',
            source: 'local-launcher',
            search: providerSearch
          }
        ],
        isPluginEnabled: () => true
      }
    );

    expect(response.intent).toBe('engine-shortcut');
    expect(response.items[0].title).toBe('使用 Google 搜索: vue');
    expect(response.items[0].metadata?.source).toBe('engine-shortcut');
    expect(providerSearch).not.toHaveBeenCalled();
    expect(invoke).not.toHaveBeenCalled();
  });

  it('combines workspace, plugin, history, and default web search results', async () => {
    const provider: SearchSourceProvider = {
      pluginId: 'local-launcher',
      source: 'local-launcher',
      search: vi.fn(async () => [
        {
          source: 'app',
          items: [contentItem('code-app', 'Code', 'app', 'C:\\Tools\\Code.exe')]
        }
      ])
    };
    const invoke = createInvoke({
      search_markdown_files_optimized: [markdownFile()],
      get_search_history: [
        {
          id: 'app:path:c:/tools/code.exe',
          usage_count: 4,
          last_used_at: new Date().toISOString()
        }
      ]
    });

    const response = await runUniversalSearch(
      {
        text: 'code',
        deepSearch: false,
        searchEngines: [engine]
      },
      {
        invoke,
        providers: [provider],
        isPluginEnabled: () => true
      }
    );

    expect(provider.search).toHaveBeenCalledWith('code');
    expect(invoke).toHaveBeenCalledWith('search_markdown_files_optimized', {
      query: 'code'
    });
    expect(invoke).toHaveBeenCalledWith('get_search_history');
    expect(response.intent).toBe('results');
    expect(response.items.map((item) => item.metadata?.source)).toEqual([
      'app',
      'markdown',
      'default-search'
    ]);
  });

  it('isolates provider failures and keeps other provider results', async () => {
    const onProviderError = vi.fn();
    const failingProvider: SearchSourceProvider = {
      pluginId: 'broken-plugin',
      source: 'broken',
      search: vi.fn(async () => {
        throw new Error('provider failed');
      })
    };
    const healthyProvider: SearchSourceProvider = {
      pluginId: 'quick-tools',
      source: 'quick-tools',
      search: vi.fn(async () => [
        {
          source: 'quick-tools',
          items: [contentItem('calc', '1 + 1 = 2', 'tool', '2')]
        }
      ])
    };
    const invoke = createInvoke({
      search_markdown_files_optimized: [],
      get_search_history: []
    });

    const response = await runUniversalSearch(
      {
        text: '1+1',
        deepSearch: false,
        searchEngines: []
      },
      {
        invoke,
        providers: [failingProvider, healthyProvider],
        isPluginEnabled: () => true,
        onProviderError
      }
    );

    expect(onProviderError).toHaveBeenCalledWith(
      expect.objectContaining({
        pluginId: 'broken-plugin',
        source: 'broken',
        query: '1+1'
      })
    );
    expect(response.items.map((item) => item.metadata?.source)).toEqual([
      'quick-tools'
    ]);
  });

  it('records provider health in the source registry', async () => {
    const registry = new SearchSourceRegistry();
    const provider: SearchSourceProvider = {
      pluginId: 'quick-tools',
      source: 'quick-tools',
      search: vi.fn(async () => [
        {
          source: 'quick-tools',
          items: [contentItem('calc', 'calc answer', 'tool', '2')]
        }
      ])
    };
    registry.register(provider);
    const invoke = createInvoke({
      search_markdown_files_optimized: [],
      get_search_history: []
    });

    await runUniversalSearch(
      {
        text: 'calc',
        deepSearch: false,
        searchEngines: []
      },
      {
        invoke,
        providers: registry.list(),
        registry,
        isPluginEnabled: () => true
      }
    );

    expect(registry.getState('quick-tools', 'quick-tools')).toMatchObject({
      health: 'healthy',
      lastDurationMs: expect.any(Number)
    });
  });

  it('times out slow providers without blocking other search results', async () => {
    vi.useFakeTimers();
    const registry = new SearchSourceRegistry();
    const onProviderError = vi.fn();
    const slowProvider = {
      pluginId: 'slow-plugin',
      source: 'slow',
      timeoutMs: 20,
      search: vi.fn(async () => new Promise<never>(() => undefined))
    };
    const healthyProvider: SearchSourceProvider = {
      pluginId: 'quick-tools',
      source: 'quick-tools',
      search: vi.fn(async () => [
        {
          source: 'quick-tools',
          items: [contentItem('calc', 'calc answer', 'tool', '2')]
        }
      ])
    };
    registry.register(slowProvider);
    registry.register(healthyProvider);
    const invoke = createInvoke({
      search_markdown_files_optimized: [],
      get_search_history: []
    });

    const searchPromise = runUniversalSearch(
      {
        text: 'calc',
        deepSearch: false,
        searchEngines: []
      },
      {
        invoke,
        providers: registry.list(),
        registry,
        isPluginEnabled: () => true,
        onProviderError
      }
    );
    await vi.advanceTimersByTimeAsync(20);
    const response = await searchPromise;
    vi.useRealTimers();

    expect(response.items.map((item) => item.metadata?.source)).toEqual([
      'quick-tools'
    ]);
    expect(onProviderError).toHaveBeenCalledWith(
      expect.objectContaining({
        pluginId: 'slow-plugin',
        source: 'slow'
      })
    );
    expect(registry.getState('slow-plugin', 'slow')).toMatchObject({
      health: 'failed',
      lastError: '搜索源 slow-plugin:slow 超时'
    });
  });

  it('removes stale results owned by disabled plugin sources', () => {
    const results = [
      withUniversalSearchSource(contentItem('app', 'App', 'app'), 'app'),
      withUniversalSearchSource(
        contentItem('bookmark', 'Bookmark', 'bookmark'),
        'bookmark'
      ),
      withUniversalSearchSource(contentItem('file', 'File', 'file'), 'file'),
      withUniversalSearchSource(
        contentItem('tool', 'Tool', 'tool'),
        'quick-tools'
      ),
      withUniversalSearchSource(
        contentItem('default', 'Search', 'search'),
        'default-search'
      ),
      withUniversalSearchSource(
        contentItem('note', 'Note', 'note'),
        'markdown'
      ),
      withUniversalSearchSource(contentItem('url', 'URL', 'search'), 'url-open')
    ];

    expect(
      removeDisabledPluginResults(
        results,
        (pluginId) => pluginId === 'quick-tools'
      ).map((item) => item.metadata?.source)
    ).toEqual(['quick-tools', 'markdown', 'url-open']);
  });
});
