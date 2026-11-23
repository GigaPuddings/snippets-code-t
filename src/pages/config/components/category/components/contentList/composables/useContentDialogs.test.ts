import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import type { ContentEditor } from '@/components/ContentItem/contentEditor';

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
  deleteFragment: vi.fn(),
  moveFragmentToCategory: vi.fn(),
  activeEditor: { value: null as ContentEditor | null },
  readMarkdownFile: vi.fn(),
  updateMarkdownFile: vi.fn(),
  requestOpenFragmentCategoryMove: vi.fn(),
  replace: vi.fn(),
  push: vi.fn(),
  success: vi.fn(),
  error: vi.fn()
}));

vi.mock('vue', async (original) => ({
  ...(await original<typeof import('vue')>()),
  inject: (_key: string, fallback: unknown) =>
    fallback === null ? mocks.activeEditor : fallback
}));
vi.mock('vue-router', () => ({
  useRoute: () => mocks.route,
  useRouter: () => ({ replace: mocks.replace, push: mocks.push })
}));
vi.mock('vue-i18n', async (original) => ({
  ...(await original<typeof import('vue-i18n')>()),
  useI18n: () => ({
    t: (key: string) => (key === 'nav.uncategorized' ? '未分类' : key)
  })
}));
vi.mock('@/store', () => ({
  useConfigurationStore: () => mocks.store,
  usePluginStore: () => ({ initialized: true, isEnabled: () => false })
}));
vi.mock('@/api/markdown', () => ({
  getWorkspaceRoot: vi.fn().mockResolvedValue('C:/Notes'),
  readMarkdownFile: mocks.readMarkdownFile,
  updateMarkdownFile: mocks.updateMarkdownFile
}));
vi.mock('@/api/fragment', () => ({
  addFragment: mocks.addFragment,
  getCategories: mocks.getCategories,
  getFragmentList: mocks.getFragmentList,
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
  mocks.activeEditor.value = null;
  mocks.route.query = {};
  mocks.getCategories.mockImplementation(async () => mocks.store.categories);
  mocks.getFragmentList.mockResolvedValue([]);
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

describe('tag context during content changes', () => {
  for (const withBacklinks of [false, true]) {
    it(`keeps the tag view after ${withBacklinks ? 'backlink' : 'regular'} deletion`, async () => {
      const target: ContentType = {
        id: '工作/note.md',
        title: 'Note',
        type: 'note',
        content: ''
      };
      const remaining: ContentType = {
        id: '未分类/code.md',
        title: 'Code',
        type: 'code',
        content: ''
      };
      mocks.route.query = { view: 'tags' };
      mocks.route.params.id = String(target.id);
      mocks.store.contents = [target, remaining];
      mocks.getFragmentList.mockResolvedValue([remaining]);
      const dialogs = useContentDialogs();
      await dialogs.handleDelete(target);
      if (withBacklinks) {
        await dialogs.confirmDeleteWithBacklinks(false);
      } else {
        await dialogs.confirmDelete();
      }
      expect(mocks.deleteFragment).toHaveBeenCalledWith(target.id);
      expect(mocks.getFragmentList).toHaveBeenCalledWith(undefined, '');
      expect(mocks.store.contents).toEqual([remaining]);
      expect(mocks.push).toHaveBeenCalledWith({
        path: '/config/category/contentList',
        query: { view: 'tags' }
      });
      expect(mocks.error).not.toHaveBeenCalled();
    });
  }

  it('preserves tags and scope when moving a file', async () => {
    const target: ContentType = {
      id: '未分类/note.md',
      title: 'Note',
      type: 'note',
      content: '',
      category_id: 0,
      tags: ['work']
    };
    mocks.route.query = { view: 'tags' };
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
      tags: ['work'],
      type: 'note'
    });
    expect(mocks.replace).toHaveBeenCalledWith({
      path: '/config/category/contentList/12',
      query: { view: 'tags' }
    });
    expect(mocks.error).not.toHaveBeenCalled();
  });
});

describe('moving a tagged result', () => {
  it.each([
    [
      ['Work', 'Keep'],
      ['Review', 'Keep']
    ],
    [
      ['Work', 'Keep', 'Review'],
      ['Keep', 'Review']
    ]
  ])('replaces only the source tag in %j', async (tags, expected) => {
    vi.stubGlobal('localStorage', { getItem: () => null });
    const id = 'Docs/Snippet.md';
    mocks.readMarkdownFile.mockResolvedValue({
      id,
      tags,
      language: 'typescript',
      framework: 'vue',
      kind: 'example',
      contentRevision: 'latest'
    });
    mocks.store.contents = [
      { id, title: 'Snippet', content: 'draft cache', tags }
    ];
    await useContentDialogs().moveContentTag(id, 'Work', 'Review');
    expect(mocks.updateMarkdownFile).toHaveBeenCalledExactlyOnceWith(
      id,
      undefined,
      {
        tags: expected,
        language: 'typescript',
        framework: 'vue',
        kind: 'example'
      },
      { expectedRevision: 'latest', expectedWorkspaceRoot: 'C:/Notes' }
    );
    expect(mocks.store.contents[0]).toMatchObject({
      tags: expected,
      content: 'draft cache'
    });
  });
});

describe('editing tag groups', () => {
  const note = 'Docs/Note.md';
  const snippet = 'Docs/Snippet.md';
  const tagged = (id: string, tags: string[]): ContentType => ({
    id,
    title: id,
    content: '',
    tags
  });

  beforeEach(() => {
    vi.stubGlobal('localStorage', { getItem: () => null });
    mocks.route.query = { view: 'tags' };
    mocks.store.contents = [
      tagged(note, ['Work', 'Keep']),
      tagged(snippet, ['Work', 'Review'])
    ];
    mocks.readMarkdownFile.mockImplementation(async (id) => ({
      tags: mocks.store.contents.find((item) => item.id === id)?.tags,
      contentRevision: id
    }));
    mocks.updateMarkdownFile.mockResolvedValue(null);
  });

  it('renames the group and merges its tag on a file already in the destination', async () => {
    expect(
      await useContentDialogs().changeContentTags(
        [note, snippet],
        'Work',
        'Review'
      )
    ).toBe(true);
    expect(mocks.store.contents.map((item) => item.tags)).toEqual([
      ['Review', 'Keep'],
      ['Review']
    ]);
  });

  it('routes unlinking an open note through the editor and leaves the route intact', async () => {
    mocks.route.params.id = note;
    const changeTag = vi.fn().mockResolvedValue(undefined);
    mocks.activeEditor.value = {
      id: note,
      title: 'Note',
      workspaceRoot: 'C:/Notes',
      rename: vi.fn(),
      changeTag
    };
    expect(
      await useContentDialogs().changeContentTags([note], 'Work', null)
    ).toBe(true);
    expect(changeTag).toHaveBeenCalledWith('Work', null);
    expect(mocks.updateMarkdownFile).not.toHaveBeenCalled();
    expect(mocks.replace).not.toHaveBeenCalled();
    expect(mocks.store.contents[1].tags).toEqual(['Work', 'Review']);
  });

  it('reports partial writes and only updates tags on committed files', async () => {
    mocks.updateMarkdownFile.mockRejectedValueOnce(
      new Error('revision conflict')
    );
    expect(
      await useContentDialogs().changeContentTags([note, snippet], 'Work', null)
    ).toBe(false);
    expect(mocks.store.contents.map((item) => item.tags)).toEqual([
      ['Work', 'Keep'],
      ['Review']
    ]);
    expect(mocks.error).toHaveBeenCalledOnce();
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
        const title = type === 'note' ? '章节笔记' : '代码片段';
        const filePath = `工作/${title}.md`;
        mocks.addFragment.mockResolvedValue(filePath);
        dialogs.openCreateDialog(type);
        expect(dialogs.creationType.value).toBe(type);
        expect(dialogs.showCreateDialog.value).toBe(true);
        expect(mocks.addFragment).not.toHaveBeenCalled();
        await dialogs.confirmCreation(`  ${title}  `);
        expect(dialogs.showCreateDialog.value).toBe(false);
        expect(mocks.addFragment).toHaveBeenCalledWith({
          categoryId: cid === '12' ? 12 : '未分类',
          fragmentType: type,
          metadata: { title }
        });
        expect(mocks.replace).toHaveBeenCalledWith(
          `/config/category/contentList${cid === undefined ? '' : `/${cid}`}/content/${encodeURIComponent(filePath)}`
        );
        expect(mocks.store.contents[0]).toMatchObject({
          type,
          title,
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
    dialogs.openCreateDialog('note');
    const creation = dialogs.confirmCreation('Note');
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
    dialogs.openCreateDialog('code');
    await dialogs.confirmCreation('Snippet');
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
    dialogs.openCreateDialog('note');
    const first = dialogs.confirmCreation('Note');
    await dialogs.confirmCreation('Duplicate');
    dialogs.openCreateDialog('code');
    expect(dialogs.creationType.value).toBe('note');
    expect(mocks.addFragment).toHaveBeenCalledTimes(1);
    resolveWrite('未分类/New Fragment.md');
    await first;
  });

  it('a delayed refresh cannot replace the contents of a different folder', async () => {
    const dialogs = useContentDialogs();
    dialogs.openCreateDialog('note');
    await dialogs.confirmCreation('Note');
    navigate('12');
    mocks.store.contents = [
      { id: '工作/existing.md', title: 'Existing', content: '' }
    ];
    await vi.advanceTimersByTimeAsync(1300);
    expect(mocks.getFragmentList).not.toHaveBeenCalled();
    expect(mocks.store.contents[0].title).toBe('Existing');
  });

  it('cancels without writing and retries a failed creation in the chosen folder', async () => {
    const dialogs = useContentDialogs();
    dialogs.openCreateDialog('code', '12');
    await dialogs.confirmCreation('   ');
    dialogs.showCreateDialog.value = false;
    await dialogs.confirmCreation('Cancelled');
    expect(mocks.addFragment).not.toHaveBeenCalled();
    expect(mocks.replace).not.toHaveBeenCalled();
    dialogs.openCreateDialog('code', '12');
    mocks.addFragment.mockRejectedValueOnce(new Error('Write failed'));
    await dialogs.confirmCreation('Retry');
    expect(dialogs.showCreateDialog.value).toBe(true);
    await dialogs.confirmCreation('Retry');
    expect(mocks.addFragment).toHaveBeenLastCalledWith({
      categoryId: 12,
      fragmentType: 'code',
      metadata: { title: 'Retry' }
    });
    expect(dialogs.showCreateDialog.value).toBe(false);
  });
});
