import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { effectScope, nextTick, reactive, type EffectScope } from 'vue';
import { useContentList } from './useContentList';

const mocks = vi.hoisted(() => ({
  route: {} as { params: { cid?: string }; query: { view?: string } },
  store: {} as { contents: ContentType[] },
  getFragmentList: vi.fn(),
  error: vi.fn()
}));

vi.mock('vue-router', () => ({ useRoute: () => mocks.route }));
vi.mock('@/store', () => ({ useConfigurationStore: () => mocks.store }));
vi.mock('@/api/fragment', () => ({ getFragmentList: mocks.getFragmentList }));
vi.mock('@/utils/modal', () => ({ default: { error: mocks.error } }));

let scope: EffectScope;
const item = (id: string, type: 'note' | 'code'): ContentType => ({
  id,
  title: id,
  type,
  content: ''
});
const flush = async () => {
  await nextTick();
  await Promise.resolve();
};

beforeEach(() => {
  vi.clearAllMocks();
  mocks.route = reactive({ params: {}, query: {} });
  mocks.store = reactive({ contents: [] });
  mocks.getFragmentList.mockResolvedValue([]);
  scope = effectScope();
});
afterEach(() => scope.stop());

describe('content scope', () => {
  it('does not overwrite a new scope with a late folder response', async () => {
    let resolveFolder!: (items: ContentType[]) => void;
    mocks.route.params.cid = '1';
    mocks.getFragmentList.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveFolder = resolve;
        })
    );
    const latest = item('Other/note.md', 'note');
    mocks.getFragmentList.mockResolvedValue([latest]);
    const list = scope.run(useContentList)!;

    mocks.route.query.view = 'tags';
    await flush();
    resolveFolder([item('Docs/old.md', 'note')]);
    await flush();
    expect(list.contents.value).toEqual([latest]);
  });
});

describe('tag scope', () => {
  it('groups tagged documents across folders and keeps each membership', async () => {
    mocks.route.query = { view: 'tags' };
    mocks.route.params = { cid: '1' };
    const note = {
      ...item('Docs/note.md', 'note'),
      tags: [' Team ', 'Design', 'Team']
    };
    const code = { ...item('Code/snippet.md', 'code'), tags: ['Team'] };
    mocks.getFragmentList.mockResolvedValue([
      note,
      code,
      item('untagged.md', 'note')
    ]);
    const list = scope.run(useContentList)!;
    await flush();
    expect(mocks.getFragmentList).toHaveBeenCalledExactlyOnceWith(
      undefined,
      ''
    );
    expect(list.tagGroups.value).toEqual([
      { tag: 'Design', contents: [note] },
      { tag: 'Team', contents: [note, code] }
    ]);

    mocks.store.contents[0].tags = ['Review'];
    expect(list.tagGroups.value).toEqual([
      { tag: 'Review', contents: [note] },
      { tag: 'Team', contents: [code] }
    ]);
  });
});
