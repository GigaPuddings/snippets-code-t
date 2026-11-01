import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { effectScope, nextTick, type EffectScope } from 'vue';
import type { ContentType } from '@/types';

const mocks = vi.hoisted(() => ({
  mounted: [] as Array<() => Promise<void>>,
  unmounted: [] as Array<() => void>,
  runUniversalSearch: vi.fn(),
  isEnabled: vi.fn(() => false),
  initialize: vi.fn(async () => undefined)
}));

vi.mock('vue', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue')>()),
  onMounted: (callback: () => Promise<void>) => mocks.mounted.push(callback),
  onUnmounted: (callback: () => void) => mocks.unmounted.push(callback)
}));
vi.mock('@/utils', () => ({
  debounce: (callback: (...args: unknown[]) => unknown) =>
    Object.assign(callback, { cancel: vi.fn() })
}));
vi.mock('@/store', () => ({
  usePluginStore: () => ({
    plugins: [],
    runtimeRevision: 0,
    isEnabled: mocks.isEnabled,
    initialize: mocks.initialize
  })
}));
vi.mock('@/i18n', () => ({
  default: { global: { t: (key: string) => key, locale: { value: 'zh-CN' } } }
}));
vi.mock('@/search/productCatalog', () => ({
  buildProductSearchCatalog: () => []
}));
vi.mock('@/search/universalSearch', () => ({
  runUniversalSearch: mocks.runUniversalSearch,
  UNIVERSAL_SEARCH_SOURCES: [],
  removeDisabledPluginResults: (items: ContentType[]) => items
}));
vi.mock('@/plugins/search-engines/searchRuntime', () => ({
  findSearchEngine: vi.fn(),
  getDefaultSearchEngine: vi.fn(),
  listenSearchEngineUpdates: vi.fn(),
  loadSearchEngines: vi.fn(),
  openSearchEngine: vi.fn()
}));
vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn() }));
vi.mock('@tauri-apps/api/event', () => ({
  listen: async () => () => undefined
}));
vi.mock('@/utils/error-handler', () => ({
  ErrorHandler: { handle: vi.fn() },
  ErrorType: {}
}));

import { useSearch } from './useSearch';
import { invoke } from '@tauri-apps/api/core';
import { loadSearchEngines } from '@/plugins/search-engines/searchRuntime';

const result: ContentType = {
  id: 'general-settings',
  title: '通用设置',
  content: '',
  summarize: 'settings'
};
let scope: EffectScope;

beforeEach(() => {
  vi.clearAllMocks();
  mocks.isEnabled.mockReturnValue(false);
  mocks.mounted.length = 0;
  mocks.unmounted.length = 0;
  mocks.runUniversalSearch.mockReset().mockResolvedValue({ items: [result] });
  scope = effectScope();
});
afterEach(() => {
  mocks.unmounted.forEach((cleanup) => cleanup());
  scope.stop();
});

async function mountSearch(showRecentActionsOnEmpty: boolean) {
  const search = scope.run(() => useSearch({ showRecentActionsOnEmpty }))!;
  await Promise.all(mocks.mounted.map((mount) => mount()));
  await nextTick();
  return search;
}

describe('quick search with a collapsed empty query', () => {
  it('keeps workspace-only callers out of product catalogs, plugin setup, and browser actions', async () => {
    mocks.isEnabled.mockReturnValue(true);
    const search = scope.run(() =>
      useSearch({ scope: 'workspace', showRecentActionsOnEmpty: false })
    )!;
    await Promise.all(mocks.mounted.map((mount) => mount()));
    expect(mocks.initialize).not.toHaveBeenCalled();
    expect(loadSearchEngines).not.toHaveBeenCalled();
    mocks.runUniversalSearch.mockResolvedValue({ items: [] });
    search.searchText.value = 'github.com';
    await nextTick();
    await nextTick();
    expect(mocks.runUniversalSearch.mock.lastCall?.[0]).toEqual(
      expect.objectContaining({ text: 'github.com', scope: 'workspace' })
    );
    expect(
      mocks.runUniversalSearch.mock.lastCall?.[1].navigationItems
    ).toBeUndefined();
    await search.handleEnterSearch();
    expect(invoke).not.toHaveBeenCalled();
  });

  it('does not load results on mount or for whitespace-only input', async () => {
    const search = await mountSearch(false);
    search.searchText.value = '   ';
    await nextTick();
    expect(mocks.runUniversalSearch).not.toHaveBeenCalled();
    expect(search.searchResults.value).toEqual([]);
    expect(search.isSearching.value).toBe(false);
  });

  it('clearing a running query discards both partial and final late results', async () => {
    const search = await mountSearch(false);
    let complete!: (response: { items: ContentType[] }) => void;
    mocks.runUniversalSearch.mockImplementationOnce(
      () => new Promise((resolve) => (complete = resolve))
    );
    search.searchText.value = '设置';
    await nextTick();
    expect(search.isSearching.value).toBe(true);
    const runtime = mocks.runUniversalSearch.mock.calls[0][1];

    search.clearSearch();
    await nextTick();
    expect(search.isSearching.value).toBe(false);
    runtime.onPartialResponse({ items: [result] });
    complete({ items: [result] });
    await nextTick();
    expect(search.searchResults.value).toEqual([]);
    expect(mocks.runUniversalSearch).toHaveBeenCalledTimes(1);
  });

  it('keeps recent actions available to other callers that opt in', async () => {
    const search = await mountSearch(true);
    expect(mocks.runUniversalSearch).toHaveBeenCalledTimes(1);
    expect(search.searchResults.value).toEqual([result]);
  });

  it('keeps existing results while a refresh publishes a temporary partial response', async () => {
    const search = await mountSearch(false);
    search.searchText.value = '设置';
    await nextTick();
    await nextTick();
    expect(search.searchResults.value).toEqual([result]);
    let complete!: (response: { items: ContentType[] }) => void;
    mocks.runUniversalSearch.mockImplementationOnce(
      () => new Promise((resolve) => (complete = resolve))
    );
    search.toggleDeepSearch();
    await nextTick();
    const runtime = mocks.runUniversalSearch.mock.calls[1][1];
    runtime.onPartialResponse({ items: [{ ...result, id: 'temporary-menu' }] });
    expect(search.searchResults.value).toEqual([result]);
    complete({ items: [result, { ...result, id: 'new-result' }] });
    await nextTick();
    expect(search.searchResults.value).toHaveLength(2);
  });
  it('can broaden an empty title-match result without changing the query', async () => {
    mocks.runUniversalSearch.mockResolvedValueOnce({ items: [] });
    const search = await mountSearch(false);
    search.searchText.value = '正文中的词';
    await nextTick();
    await nextTick();
    expect(search.searchResults.value).toEqual([]);
    search.toggleDeepSearch();
    await nextTick();
    await nextTick();
    expect(search.searchText.value).toBe('正文中的词');
    expect(search.deepSearchEnabled.value).toBe(true);
    expect(mocks.runUniversalSearch.mock.lastCall?.[0]).toEqual(
      expect.objectContaining({ deepSearch: true })
    );
    expect(search.searchResults.value).toEqual([result]);
  });
});
