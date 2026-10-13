import { describe, expect, it, vi } from 'vitest';
import {
  runUniversalSearch,
  removeDisabledPluginResults
} from './universalSearch';
import { rankSearchResults, getSearchHistoryKeys } from './ranking';
import type { ContentType } from '@/types';

vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn() }));
const core: ContentType = {
  id: 'setting:ai',
  title: 'AI 能力',
  content: '',
  summarize: 'settings',
  searchAction: { kind: 'settings', tabId: 'ai' }
};
const invoke = vi.fn(
  async () => []
) as unknown as typeof import('@tauri-apps/api/core').invoke;

describe('global product search lifecycle', () => {
  it('publishes fast menu matches before a slower plugin returns and rejects late disabled results', async () => {
    let resolve!: (value: any) => void;
    let enabled = true;
    const partial = vi.fn();
    const provider = {
      pluginId: 'extension',
      source: 'extension-items',
      search: vi.fn(
        () =>
          new Promise<any>((done) => {
            resolve = done;
          })
      )
    };
    const pending = runUniversalSearch(
      { text: 'AI', deepSearch: false },
      {
        invoke,
        providers: [provider],
        navigationItems: [core],
        isPluginEnabled: () => enabled,
        onPartialResponse: partial
      }
    );
    expect(partial.mock.calls[0][0].items[0].title).toBe('AI 能力');
    await Promise.resolve();
    await Promise.resolve();
    enabled = false;
    resolve([
      {
        source: 'extension-items',
        items: [
          {
            id: 'old',
            title: 'AI 旧记录',
            content: '',
            summarize: 'conversation',
            metadata: { plugin_id: 'spoofed' }
          }
        ]
      }
    ]);
    const response = await pending;
    expect(response.items.map((item) => item.title)).toEqual(['AI 能力']);
    expect(provider.search).toHaveBeenCalledWith('AI', { deepSearch: false });
  });
  it('binds unknown source results to the registered plugin rather than trusting metadata', async () => {
    const response = await runUniversalSearch(
      { text: 'AI', deepSearch: true },
      {
        invoke,
        isPluginEnabled: () => true,
        providers: [
          {
            pluginId: 'extension',
            source: 'extension-items',
            search: async () => [
              {
                source: 'extension-items',
                items: [
                  {
                    id: '1',
                    title: 'AI',
                    content: '',
                    metadata: { plugin_id: 'fake' }
                  }
                ]
              }
            ]
          }
        ]
      }
    );
    expect(response.items[0].metadata?.plugin_id).toBe('extension');
    expect(
      removeDisabledPluginResults(response.items, (id) => id === 'fake')
    ).toEqual([]);
  });
  it('prefers relevant titles over historical fuzzy matches for main searches', () => {
    const fuzzy: ContentType = {
      id: 'old',
      title: 'A very long I record',
      content: ''
    };
    const history = new Map([
      ['old', { usage_count: 100, last_used_at: new Date().toISOString() }]
    ]);
    expect(
      rankSearchResults([fuzzy, core], 'ai', history, {
        deepSearch: false,
        preferRelevance: true
      })[0].id
    ).toBe(core.id);
  });
  it('does not merge another source history into new structured actions', () => {
    const entry: ContentType = {
      ...core,
      id: 'same-id',
      metadata: { source: 'extension-records', plugin_id: 'owner' }
    };
    expect(getSearchHistoryKeys(entry)).toEqual([
      'product:owner:extension-records:same-id'
    ]);
  });
});
