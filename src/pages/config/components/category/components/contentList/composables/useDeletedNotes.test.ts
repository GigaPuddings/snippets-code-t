import { effectScope, nextTick, type EffectScope } from 'vue';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  getDeletedNotes,
  readDeletedNote,
  restoreDeletedNote,
  type DeletedNote
} from '@/api/markdown';
import { remainingTrashDays, useDeletedNotes } from './useDeletedNotes';

const lifecycle = vi.hoisted(() => ({
  mounted: [] as Array<() => void>,
  unmount: [] as Array<() => void>,
  push: vi.fn()
}));
vi.mock('vue', async (original) => ({
  ...(await original<typeof import('vue')>()),
  onMounted: (fn: () => void) => lifecycle.mounted.push(fn),
  onBeforeUnmount: (fn: () => void) => lifecycle.unmount.push(fn)
}));
vi.mock('vue-router', () => ({ useRouter: () => ({ push: lifecycle.push }) }));
vi.mock('@/api/markdown', () => ({
  getDeletedNotes: vi.fn(),
  readDeletedNote: vi.fn(),
  restoreDeletedNote: vi.fn()
}));
const note = (id: string): DeletedNote => ({
  id,
  title: id,
  originalPath: `分类/${id}.md`,
  deletedAt: '2026-10-19T00:00:00Z',
  expiresAt: '2026-11-18T00:00:00Z'
});
const settle = async (): Promise<void> => {
  await Promise.resolve();
  await nextTick();
  await Promise.resolve();
};
let scope: EffectScope;
function start() {
  scope = effectScope();
  const state = scope.run(useDeletedNotes)!;
  lifecycle.mounted.forEach((fn) => fn());
  return state;
}
beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-10-19T00:00:00Z'));
  vi.stubGlobal('window', new EventTarget());
  lifecycle.mounted = [];
  lifecycle.unmount = [];
  vi.clearAllMocks();
  vi.mocked(getDeletedNotes).mockResolvedValue([note('a'), note('b')]);
  vi.mocked(readDeletedNote).mockResolvedValue({
    content: '# body',
    type: 'note'
  });
  lifecycle.push.mockResolvedValue(undefined);
});
afterEach(() => {
  lifecycle.unmount.forEach((fn) => fn());
  scope?.stop();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('deleted note retention and selection', () => {
  it('rounds partial days up and handles expired or invalid deadlines', () => {
    const now = Date.now();
    expect(remainingTrashDays('2026-11-18T00:00:00Z', now)).toBe(30);
    expect(remainingTrashDays('2026-10-19T00:00:01Z', now)).toBe(1);
    expect(remainingTrashDays('2026-10-19T00:00:00Z', now)).toBe(0);
    expect(remainingTrashDays('2026-10-18T00:00:00Z', now)).toBe(0);
    expect(remainingTrashDays(undefined, now)).toBeNull();
    expect(remainingTrashDays('invalid', now)).toBeNull();
  });
  it('automatically previews the first entry and ignores an older preview response', async () => {
    let resolveA!: (value: { content: string; type: 'note' }) => void;
    vi.mocked(readDeletedNote).mockImplementation((id) =>
      id === 'a'
        ? new Promise((resolve) => {
            resolveA = resolve;
          })
        : Promise.resolve({ content: 'B body', type: 'code' })
    );
    const state = start();
    await settle();
    expect(state.selectedId.value).toBe('a');
    state.selectedId.value = 'b';
    await settle();
    resolveA({ content: 'outdated A', type: 'note' });
    await settle();
    expect(state.preview.value).toEqual({ content: 'B body', type: 'code' });
    expect(restoreDeletedNote).not.toHaveBeenCalled();
  });
  it('keeps selection on refresh and moves to the next item when the selected entry expires', async () => {
    const state = start();
    await settle();
    state.selectedId.value = 'b';
    state.refresh();
    await settle();
    expect(state.selectedId.value).toBe('b');
    vi.mocked(getDeletedNotes).mockResolvedValue([note('a')]);
    await vi.advanceTimersByTimeAsync(60_000);
    expect(state.selectedId.value).toBe('a');
    vi.mocked(getDeletedNotes).mockResolvedValue([]);
    state.refresh();
    await settle();
    expect(state.selectedNote.value).toBeUndefined();
    expect(state.preview.value).toBeUndefined();
  });
  it('preserves the list and selection when refreshing fails', async () => {
    const state = start();
    await settle();
    vi.mocked(getDeletedNotes).mockRejectedValueOnce('unavailable');
    state.refresh();
    await settle();
    expect(state.notes.value).toHaveLength(2);
    expect(state.selectedId.value).toBe('a');
    expect(state.error.value).toBe('unavailable');
  });
  it('can retry a failed preview without losing selection', async () => {
    vi.mocked(readDeletedNote).mockRejectedValueOnce('read failed');
    const state = start();
    await settle();
    expect(state.previewError.value).toBe('read failed');
    state.retryPreview();
    await settle();
    expect(state.selectedId.value).toBe('a');
    expect(state.preview.value?.content).toBe('# body');
    expect(state.previewError.value).toBe('');
  });
  it('guards repeated restores and navigates to the restored path only after success', async () => {
    let finish!: (path: string) => void;
    vi.mocked(restoreDeletedNote).mockImplementation(
      () =>
        new Promise((resolve) => {
          finish = resolve;
        })
    );
    const state = start();
    await settle();
    const pending = state.restore('b');
    await state.restore('b');
    expect(restoreDeletedNote).toHaveBeenCalledExactlyOnceWith('b');
    expect(lifecycle.push).not.toHaveBeenCalled();
    finish('D:/工作区/分类/b.md');
    await pending;
    expect(lifecycle.push).toHaveBeenCalledWith(
      '/config/category/contentList/content/' +
        encodeURIComponent('D:/工作区/分类/b.md')
    );
  });
});
