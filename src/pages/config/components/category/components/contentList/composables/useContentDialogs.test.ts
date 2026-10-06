import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  route: {
    params: {} as { cid?: string; id?: string },
    query: {} as { view?: string },
    path: '/config/category/contentList',
    fullPath: '/config/category/contentList'
  },
  store: {
    categories: [] as Array<{ id: string | number; name: string }>,
    contents: [] as ContentType[],
    categorySort: 'name'
  },
  addFragment: vi.fn(),
  getCategories: vi.fn(),
  getFragmentList: vi.fn(),
  getFavoriteFragments: vi.fn(),
  deleteFragment: vi.fn(),
  moveFragmentToCategory: vi.fn(),
  requestOpenFragmentCategoryMove: vi.fn(),
  replace: vi.fn(),
  push: vi.fn(),
  success: vi.fn(),
  error: vi.fn()
}));

vi.mock('vue', async (original) => ({
  ...(await original<typeof import('vue')>()),
  inject: (_key: string, fallback: unknown) => fallback
}));
vi.mock('vue-router', () => ({
  useRoute: () => mocks.route,
  useRouter: () => ({ replace: mocks.replace, push: mocks.push })
}));
vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => (key === 'nav.uncategorized' ? '未分类' : key)
  })
}));
vi.mock('@/store', () => ({
  useConfigurationStore: () => mocks.store,
  usePluginStore: () => ({})
}));
vi.mock('@/api/fragment', () => ({
  addFragment: mocks.addFragment,
  getCategories: mocks.getCategories,
  getFragmentList: mocks.getFragmentList,
  getFavoriteFragments: mocks.getFavoriteFragments,
  deleteFragment: mocks.deleteFragment,
  moveFragmentToCategory: mocks.moveFragmentToCategory,
  getUncategorizedId: vi.fn().mockResolvedValue(0)
}));
vi.mock('@/utils/modal', () => ({
  default: { error: mocks.error, success: mocks.success }
}));
vi.mock('@/utils/wikilink-updater', () => ({
  findBacklinks: vi.fn().mockResolvedValue([]),
  updateBacklinks: vi.fn()
}));
vi.mock('@/utils/fragmentTypeConversion', () => ({}));
vi.mock('@/utils/fragmentCategoryMove', () => ({
  requestOpenFragmentCategoryMove: mocks.requestOpenFragmentCategoryMove
}));

import { useContentDialogs } from './useContentDialogs';

function navigate(cid?: string) {
  mocks.route.params = cid === undefined ? {} : { cid };
  mocks.route.path = `/config/category/contentList${cid === undefined ? '' : `/${cid}`}`;
  mocks.route.fullPath = mocks.route.path;
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.useFakeTimers();
  vi.stubGlobal('window', { dispatchEvent: vi.fn() });
  mocks.store.categories = [
    { id: 0, name: '未分类' },
    { id: '12', name: '工作' }
  ];
  mocks.store.contents = [];
  mocks.route.query = {};
  mocks.getCategories.mockImplementation(async () => mocks.store.categories);
  mocks.getFragmentList.mockResolvedValue([]);
  mocks.getFavoriteFragments.mockResolvedValue([]);
  mocks.deleteFragment.mockResolvedValue(undefined);
  mocks.requestOpenFragmentCategoryMove.mockResolvedValue(null);
  mocks.addFragment.mockResolvedValue('工作/New Fragment.md');
  mocks.replace.mockImplementation(
    async (target: string | { path: string }) => {
      const path = typeof target === 'string' ? target : target.path;
      mocks.route.path = path;
      mocks.route.fullPath = path;
    }
  );
  navigate();
});

describe('favorite context during content changes', () => {
  for (const withBacklinks of [false, true]) {
    it(`keeps only favorites after ${withBacklinks ? 'backlink' : 'regular'} deletion`, async () => {
      const target: ContentType = {
        id: '工作/note.md',
        title: 'Note',
        type: 'note',
        content: '',
        favorite: true
      };
      const remaining: ContentType = {
        id: '未分类/code.md',
        title: 'Code',
        type: 'code',
        content: '',
        favorite: true
      };
      mocks.route.query = { view: 'favorites' };
      mocks.route.params.id = String(target.id);
      mocks.store.contents = [target, remaining];
      mocks.getFavoriteFragments.mockResolvedValue([remaining]);
      const dialogs = useContentDialogs();
      await dialogs.handleDelete(target);
      if (withBacklinks) {
        await dialogs.confirmDeleteWithBacklinks(false);
      } else {
        await dialogs.confirmDelete();
      }
      expect(mocks.deleteFragment).toHaveBeenCalledWith(target.id);
      expect(mocks.getFragmentList).not.toHaveBeenCalled();
      expect(mocks.store.contents).toEqual([remaining]);
      expect(mocks.push).toHaveBeenCalledWith({
        path: '/config/category/contentList',
        query: { view: 'favorites' }
      });
      expect(mocks.error).not.toHaveBeenCalled();
    });
  }

  it('preserves favorite metadata and scope when moving a file', async () => {
    const target: ContentType = {
      id: '未分类/note.md',
      title: 'Note',
      type: 'note',
      content: '',
      category_id: 0,
      favorite: true
    };
    mocks.route.query = { view: 'favorites' };
    mocks.store.contents = [target];
    mocks.moveFragmentToCategory.mockResolvedValue({
      ...target,
      id: '工作/note.md',
      category_id: '12'
    });
    const dialogs = useContentDialogs();
    await dialogs.handleChangeCategory(target);
    await dialogs.confirmCategoryChange('12');
    expect(mocks.moveFragmentToCategory).toHaveBeenCalledWith(target.id, '12');
    expect(mocks.store.contents[0]).toMatchObject({
      id: '工作/note.md',
      favorite: true,
      type: 'note'
    });
    expect(mocks.replace).toHaveBeenCalledWith({
      path: '/config/category/contentList/12',
      query: { view: 'favorites' }
    });
    expect(mocks.error).not.toHaveBeenCalled();
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('new content ownership', () => {
  for (const type of ['note', 'code'] as const) {
    for (const cid of [undefined, '0', '12']) {
      it(`${type} keeps ${cid ?? 'All'} context and writes to its target`, async () => {
        navigate(cid);
        const dialogs = useContentDialogs();
        await dialogs.handleTypeConfirm(type);
        expect(mocks.addFragment).toHaveBeenCalledWith({
          categoryId: cid === '12' ? 12 : '未分类',
          fragmentType: type,
          metadata: { title: 'New Fragment' }
        });
        expect(mocks.replace).toHaveBeenCalledWith(
          `/config/category/contentList${cid === undefined ? '' : `/${cid}`}/content/%E5%B7%A5%E4%BD%9C%2FNew%20Fragment.md`
        );
        expect(mocks.store.contents[0]).toMatchObject({
          type,
          category_id: cid === '12' ? 12 : 0
        });
      });
    }
  }

  it('freezes the chosen folder and does not steal a changed view', async () => {
    navigate('12');
    const dialogs = useContentDialogs();
    let resolveCategories!: (
      categories: Array<{ id: string | number; name: string }>
    ) => void;
    mocks.getCategories.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveCategories = resolve;
        })
    );
    const creation = dialogs.handleTypeConfirm('note');
    navigate('0');
    resolveCategories(mocks.store.categories);
    await creation;
    expect(mocks.addFragment.mock.calls[0][0].categoryId).toBe(12);
    expect(mocks.replace).not.toHaveBeenCalled();
    expect(mocks.store.contents).toEqual([]);
  });

  it('rejects a deleted folder instead of creating an uncategorized file', async () => {
    navigate('12');
    const dialogs = useContentDialogs();
    mocks.getCategories.mockResolvedValue([{ id: 0, name: '未分类' }]);
    await dialogs.handleTypeConfirm('code');
    expect(mocks.addFragment).not.toHaveBeenCalled();
    expect(mocks.error).toHaveBeenCalledWith(
      'fragmentType.creationFolderMissing'
    );
  });

  it('prevents duplicate writes while creation is in flight', async () => {
    let resolveWrite!: (path: string) => void;
    mocks.addFragment.mockImplementation(
      () =>
        new Promise<string>((resolve) => {
          resolveWrite = resolve;
        })
    );
    const dialogs = useContentDialogs();
    const first = dialogs.handleTypeConfirm('note');
    await dialogs.handleTypeConfirm('code');
    expect(mocks.addFragment).toHaveBeenCalledTimes(1);
    resolveWrite('未分类/New Fragment.md');
    await first;
  });

  it('a delayed refresh cannot replace the contents of a different folder', async () => {
    const dialogs = useContentDialogs();
    await dialogs.handleTypeConfirm('note');
    navigate('12');
    mocks.store.contents = [
      { id: '工作/existing.md', title: 'Existing', content: '' }
    ];
    await vi.advanceTimersByTimeAsync(1300);
    expect(mocks.getFragmentList).not.toHaveBeenCalled();
    expect(mocks.store.contents[0].title).toBe('Existing');
  });
});
