import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { effectScope, nextTick, reactive, type EffectScope } from 'vue';

const mocks = vi.hoisted(() => ({
  route: {} as { params: { cid?: string }; query: { view?: string } },
  store: {} as { contents: ContentType[]; favoriteCount: number | null },
  getFavoriteFragments: vi.fn(),
  getFragmentList: vi.fn(),
  getFragmentContent: vi.fn(),
  toggleFavorite: vi.fn(),
  error: vi.fn(),
  dispatchEvent: vi.fn()
}));
vi.mock('vue-router', () => ({ useRoute: () => mocks.route }));
vi.mock('@/store', () => ({ useConfigurationStore: () => mocks.store }));
vi.mock('@/api/fragment', () => ({
  getFavoriteFragments: mocks.getFavoriteFragments,
  getFragmentList: mocks.getFragmentList,
  getFragmentContent: mocks.getFragmentContent
}));
vi.mock('@/api/markdown', () => ({ toggleFavorite: mocks.toggleFavorite }));
vi.mock('@/utils/modal', () => ({ default: { error: mocks.error } }));
vi.mock('@/utils/logger', () => ({ logger: { warn: vi.fn() } }));

import { useContentList } from './useContentList';
import {
  applyFavoriteChange,
  useContentFavorites,
  type FavoriteChangeDetail
} from '@/composables/useContentFavorites';

let scope: EffectScope;
const item = (
  id: string,
  type: 'note' | 'code',
  favorite = true
): ContentType =>
  ({ id, title: id, type, favorite, content: '' }) as ContentType;
const flush = async () => {
  await nextTick();
  await Promise.resolve();
};

beforeEach(() => {
  vi.clearAllMocks();
  mocks.route = reactive({ params: {}, query: { view: 'favorites' } });
  mocks.store = reactive({ contents: [], favoriteCount: null });
  mocks.getFavoriteFragments.mockResolvedValue([]);
  mocks.getFragmentList.mockResolvedValue([]);
  mocks.getFragmentContent.mockResolvedValue({
    updated_at: '2026-10-05T08:00:00Z'
  });
  mocks.toggleFavorite.mockResolvedValue(undefined);
  vi.stubGlobal('window', { dispatchEvent: mocks.dispatchEvent });
  scope = effectScope();
});
afterEach(() => {
  scope.stop();
  vi.unstubAllGlobals();
});

describe('favorite scope and refresh', () => {
  it('uses favorites across categories and updates the list when a favorite is removed', async () => {
    const note = item('Docs/note.md', 'note');
    const code = item('Code/snippet.md', 'code');
    mocks.getFavoriteFragments.mockResolvedValue([note, code]);
    const list = scope.run(useContentList)!;
    await flush();
    expect(list.contents.value).toHaveLength(2);
    expect(mocks.store.favoriteCount).toBe(2);
    expect(mocks.getFragmentList).not.toHaveBeenCalled();

    mocks.getFavoriteFragments.mockResolvedValue([code]);
    await list.toggleContentFavorite(note);
    expect(mocks.toggleFavorite).toHaveBeenCalledWith('Docs/note.md', false);
    expect(note.favorite).toBe(false);
    expect(mocks.store.favoriteCount).toBe(1);
    expect(list.contents.value.map((content) => content.id)).toEqual([
      'Code/snippet.md'
    ]);
    expect(mocks.dispatchEvent.mock.calls[0][0].detail.source).toBe(
      'favorite-change'
    );
  });

  it('adds an unfavorited snippet and blocks overlapping writes for the same file', async () => {
    const code = item('Code/snippet.md', 'code', false);
    const list = scope.run(useContentList)!;
    await flush();
    let resolveWrite!: () => void;
    mocks.toggleFavorite.mockImplementation(
      () =>
        new Promise<void>((resolve) => {
          resolveWrite = resolve;
        })
    );
    const write = list.toggleContentFavorite(code);
    // A toolbar instance must share the guard with the sidebar instance.
    const toolbar = useContentFavorites();
    expect(toolbar.isFavoritePending(code.id)).toBe(true);
    await toolbar.toggleContentFavorite({ ...code });
    expect(mocks.toggleFavorite).toHaveBeenCalledExactlyOnceWith(
      'Code/snippet.md',
      true
    );
    resolveWrite();
    await write;
    expect(code.favorite).toBe(true);
    expect(toolbar.isFavoritePending(code.id)).toBe(false);
    expect(mocks.store.favoriteCount).toBe(1);
  });

  it('keeps the existing state and shows an error when persistence fails', async () => {
    const note = item('Docs/note.md', 'note');
    const list = scope.run(useContentList)!;
    await flush();
    mocks.toggleFavorite.mockRejectedValue(new Error('read only'));
    await list.toggleContentFavorite(note);
    expect(note.favorite).toBe(true);
    expect(mocks.error).toHaveBeenCalledWith('read only');
    expect(mocks.dispatchEvent).not.toHaveBeenCalled();

    // A failed request must release the per-file guard so a retry can work.
    mocks.toggleFavorite.mockResolvedValue(undefined);
    await list.toggleContentFavorite(note);
    expect(note.favorite).toBe(false);
  });

  it('clears stale all-content results and presents a favorites loading failure', async () => {
    mocks.store.contents = [item('not-favorited.md', 'code', false)];
    mocks.getFavoriteFragments.mockRejectedValue(new Error('listing failed'));
    scope.run(useContentList);
    await flush();
    expect(mocks.store.contents).toEqual([]);
    expect(mocks.store.favoriteCount).toBeNull();
    expect(mocks.error).toHaveBeenCalledWith('listing failed');
  });

  it('does not overwrite a new scope with a late favorites response', async () => {
    let resolveFavorites!: (items: ContentType[]) => void;
    mocks.getFavoriteFragments.mockImplementation(
      () =>
        new Promise<ContentType[]>((resolve) => {
          resolveFavorites = resolve;
        })
    );
    const code = item('Code/snippet.md', 'code', false);
    mocks.getFragmentList.mockResolvedValue([code]);
    const list = scope.run(useContentList)!;
    mocks.route.query = {};
    await flush();
    resolveFavorites([item('Docs/note.md', 'note')]);
    await flush();
    expect(list.contents.value.map((content) => content.id)).toEqual([
      'Code/snippet.md'
    ]);
    expect(mocks.store.favoriteCount).toBeNull();
  });

  it('updates open document metadata after removal without overwriting unsaved text', async () => {
    const listed = item('Docs/note.md', 'note');
    mocks.getFavoriteFragments.mockResolvedValue([listed]);
    const list = scope.run(useContentList)!;
    await flush();
    const open = { ...listed, content: 'unsaved draft', title: 'draft title' };
    await list.toggleContentFavorite(listed);
    expect(list.contents.value).toEqual([]);
    expect(mocks.store.favoriteCount).toBe(0);

    const change = mocks.dispatchEvent.mock.calls[0][0]
      .detail as FavoriteChangeDetail;
    applyFavoriteChange(open, change);
    expect(open).toMatchObject({
      favorite: false,
      updated_at: '2026-10-05T08:00:00Z',
      content: 'unsaved draft',
      title: 'draft title'
    });
    // The document stays open and can be favorited again from its toolbar.
    await useContentFavorites().toggleContentFavorite(open);
    expect(open.favorite).toBe(true);
    expect(mocks.store.favoriteCount).toBe(1);
  });

  it('does not update another open file when navigation changes during a write', () => {
    const open = item('Code/other.md', 'code', false);
    applyFavoriteChange(open, {
      source: 'favorite-change',
      id: 'Docs/note.md',
      favorite: true,
      updated_at: '2026-10-05T08:00:00Z'
    });
    expect(open.favorite).toBe(false);
    expect(open.updated_at).toBeUndefined();
  });

  it('keeps a successful favorite write when reading modified time fails', async () => {
    const note = item('Docs/note.md', 'note', false);
    mocks.getFragmentContent.mockRejectedValueOnce(new Error('read failed'));
    const list = scope.run(useContentList)!;
    await flush();
    await list.toggleContentFavorite(note);
    expect(note.favorite).toBe(true);
    expect(mocks.error).not.toHaveBeenCalled();
    expect(mocks.dispatchEvent.mock.calls[0][0].detail).toMatchObject({
      id: 'Docs/note.md',
      favorite: true
    });
  });

  it('does not double count when a filesystem refresh precedes the write response', async () => {
    const note = item('Docs/note.md', 'note');
    const code = item('Code/snippet.md', 'code', false);
    mocks.getFavoriteFragments.mockResolvedValue([note]);
    const list = scope.run(useContentList)!;
    await flush();
    mocks.toggleFavorite.mockImplementation(async (_id, favorite) => {
      mocks.store.contents = favorite
        ? [note, { ...code, favorite: true }]
        : [note];
      mocks.store.favoriteCount = favorite ? 2 : 1;
    });
    await list.toggleContentFavorite(code);
    expect(mocks.store.favoriteCount).toBe(2);
    await list.toggleContentFavorite(code);
    expect(mocks.store.favoriteCount).toBe(1);
  });
});
