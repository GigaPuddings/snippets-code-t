import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ref } from 'vue';
import {
  defaultWallpaperConfig,
  type WallhavenPage,
  type WallhavenWallpaper
} from '../api';
import { useWallhaven } from './useWallhaven';

const mocks = vi.hoisted(() => ({
  fetch: vi.fn(),
  save: vi.fn(),
  config: vi.fn()
}));
vi.mock('vue', async (original) => ({
  ...(await original<typeof import('vue')>()),
  onMounted: vi.fn(),
  onUnmounted: vi.fn()
}));
vi.mock('vue-i18n', () => ({ useI18n: () => ({ t: (key: string) => key }) }));
vi.mock('@tauri-apps/api/event', () => ({
  listen: vi.fn(async () => vi.fn())
}));
vi.mock('@/utils/modal', () => ({ default: { msg: vi.fn() } }));
vi.mock('../api', async (original) => ({
  ...(await original<typeof import('../api')>()),
  fetchWallhaven: mocks.fetch,
  saveWallpaperConfig: mocks.save,
  getWallpaperConfig: mocks.config
}));

const image = (id: string): WallhavenWallpaper => ({
  id,
  url: '',
  path: '',
  resolution: '1920x1080',
  dimensionX: 1920,
  dimensionY: 1080,
  fileType: 'image/jpeg',
  thumbs: { large: '', small: '', original: '' }
});
const page = (number: number, ids: string[], lastPage = 3): WallhavenPage => ({
  page: number,
  lastPage,
  data: ids.map(image)
});
const deferred = () => {
  let resolve!: (page: WallhavenPage) => void;
  let reject!: (error: Error) => void;
  const promise = new Promise<WallhavenPage>((yes, no) => {
    resolve = yes;
    reject = no;
  });
  return { promise, resolve, reject };
};
const feed = () =>
  useWallhaven({
    config: ref({ ...defaultWallpaperConfig(), onlineProvider: 'wallhaven' }),
    refreshStatus: vi.fn(async () => {})
  });

describe('online wallpaper feed', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.save.mockResolvedValue(undefined);
    mocks.fetch.mockResolvedValue(
      page(
        1,
        Array.from({ length: 24 }, (_, index) => `${index}`)
      )
    );
  });

  it('retains the complete source batch instead of dropping all but six images', async () => {
    const state = feed();
    await state.openWallhavenGrid();
    expect(state.wallpapers.value).toHaveLength(24);
    expect(state.hasMore.value).toBe(true);
  });

  it('appends pages, deduplicates overlapping IDs and does not save preferences on every scroll', async () => {
    const state = feed();
    await state.openWallhavenGrid();
    mocks.fetch.mockResolvedValueOnce(page(2, ['23', '24', '25']));
    await state.loadMoreWallpapers();
    expect(state.wallpapers.value).toHaveLength(26);
    expect(state.wallpapers.value[0].id).toBe('0');
    expect(mocks.save).toHaveBeenCalledTimes(1);
    expect(mocks.fetch.mock.calls[1][0].page).toBe(2);
  });

  it('allows only one append request at a time', async () => {
    const state = feed();
    await state.openWallhavenGrid();
    const next = deferred();
    mocks.fetch.mockReturnValueOnce(next.promise);
    const request = state.loadMoreWallpapers();
    await state.loadMoreWallpapers();
    expect(mocks.fetch).toHaveBeenCalledTimes(2);
    next.resolve(page(2, ['next']));
    await request;
  });

  it('keeps existing results after failure and retries the same page', async () => {
    const state = feed();
    await state.openWallhavenGrid();
    mocks.fetch.mockRejectedValueOnce(new Error('network failed'));
    await state.loadMoreWallpapers();
    expect(state.wallpapers.value).toHaveLength(24);
    expect(state.wallhavenPage.value).toBe(1);
    mocks.fetch.mockResolvedValueOnce(page(2, ['next']));
    await state.loadMoreWallpapers();
    expect(mocks.fetch.mock.calls.slice(1).map((call) => call[0].page)).toEqual(
      [2, 2]
    );
    expect(state.wallhavenError.value).toBe('');
  });

  it('does not mistake a filtered empty page for the end of the source', async () => {
    const state = feed();
    await state.openWallhavenGrid();
    mocks.fetch.mockResolvedValueOnce(page(2, []));
    await state.loadMoreWallpapers();
    expect(state.hasMore.value).toBe(true);
    mocks.fetch.mockResolvedValueOnce(page(3, ['last']));
    await state.loadMoreWallpapers();
    expect(state.hasMore.value).toBe(false);
    await state.loadMoreWallpapers();
    expect(mocks.fetch).toHaveBeenCalledTimes(3);
  });

  it('discards late results from the previous provider', async () => {
    const first = deferred(),
      second = deferred();
    mocks.fetch
      .mockReturnValueOnce(first.promise)
      .mockReturnValueOnce(second.promise);
    const state = feed();
    const request = state.openWallhavenGrid();
    await vi.waitFor(() => expect(mocks.fetch).toHaveBeenCalledTimes(1));
    const changed = state.setOnlineProvider('wallspic');
    await vi.waitFor(() => expect(mocks.fetch).toHaveBeenCalledTimes(2));
    second.resolve(page(1, ['ws-new'], 1));
    await changed;
    first.resolve(page(1, ['stale']));
    await request;
    expect(state.wallpapers.value.map((item) => item.id)).toEqual(['ws-new']);
    expect(state.onlineProvider.value).toBe('wallspic');
  });

  it('rejects a repeated page without replacing the existing feed', async () => {
    const state = feed();
    await state.openWallhavenGrid();
    mocks.fetch.mockResolvedValueOnce(page(1, ['repeated']));
    await state.loadMoreWallpapers();
    expect(state.wallpapers.value).toHaveLength(24);
    expect(state.wallhavenError.value).toBe('wallpaperSwitcher.repeatedPage');
  });

  it('uses source capabilities when switching from a Wallhaven ranking to Wallspic', async () => {
    const state = feed();
    await state.setWallhavenSource('toplist');
    await state.setOnlineProvider('wallspic');
    expect(state.wallhavenSource.value).toBe('hot');
    const count = mocks.fetch.mock.calls.length;
    await state.setWallhavenSource('favorites');
    expect(mocks.fetch).toHaveBeenCalledTimes(count);
    expect(mocks.fetch.mock.calls.at(-1)?.[0]).toMatchObject({
      provider: 'wallspic',
      source: 'hot',
      page: 1
    });
  });
});
