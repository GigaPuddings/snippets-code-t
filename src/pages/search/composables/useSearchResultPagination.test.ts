import { afterEach, describe, expect, it, vi } from 'vitest';
import { effectScope, nextTick, ref, type EffectScope } from 'vue';
import type { ContentType } from '@/types';
import { useSearchResultPagination } from './useSearchResultPagination';

const scopes: EffectScope[] = [];
afterEach(() => {
  scopes.splice(0).forEach((scope) => scope.stop());
  vi.useRealTimers();
});

function harness(count = 69) {
  const results = ref<ContentType[]>(
    Array.from({ length: count }, (_, id) => ({
      id,
      title: 'Result ' + id,
      content: ''
    }))
  );
  const selectedId = ref<string | number | null>(count ? 0 : null);
  const onSelect = vi.fn((item: ContentType | null) => {
    selectedId.value = item?.id ?? null;
  });
  const scope = effectScope();
  scopes.push(scope);
  const paging = scope.run(() =>
    useSearchResultPagination(results, selectedId, onSelect)
  )!;
  return { results, selectedId, onSelect, ...paging };
}

describe('six-row quick search pagination', () => {
  it('retains all results, shows six per page and handles the short final page', () => {
    const state = harness();
    expect(state.page.value).toMatchObject({
      count: 12,
      start: 1,
      end: 6,
      total: 69
    });
    expect(state.pageItems.value.map((item) => item.id)).toEqual([
      0, 1, 2, 3, 4, 5
    ]);
    expect(state.changePage(-1)).toBe(false);
    for (let i = 0; i < 11; i++) expect(state.changePage(1)).toBe(true);
    expect(state.page.value).toMatchObject({
      index: 11,
      start: 67,
      end: 69,
      total: 69
    });
    expect(state.pageItems.value.map((item) => item.id)).toEqual([66, 67, 68]);
    expect(state.selectedId.value).toBe(66);
    expect(state.changePage(1)).toBe(false);
  });

  it('keeps empty and short result sets on a single valid page', () => {
    const empty = harness(0);
    expect(empty.page.value).toMatchObject({
      count: 0,
      start: 0,
      end: 0,
      total: 0
    });
    expect(empty.changePage(1)).toBe(false);
    const short = harness(3);
    expect(short.pageItems.value).toHaveLength(3);
    expect(short.page.value.count).toBe(1);
    expect(short.changePage(1)).toBe(false);
  });

  it('follows keyboard selection across page boundaries and returns to page one', async () => {
    const state = harness(14);
    state.selectedId.value = 6;
    await nextTick();
    expect(state.page.value.index).toBe(1);
    expect(state.pageItems.value[0].id).toBe(6);
    state.selectedId.value = 5;
    await nextTick();
    expect(state.page.value.index).toBe(0);
    state.selectedId.value = 13;
    await nextTick();
    expect(state.page.value.index).toBe(2);
    state.resetPage();
    expect(state.page.value.index).toBe(0);
    expect(state.selectedId.value).toBe(0);
  });

  it('preserves a selected id through asynchronous reordering and repairs removed results', async () => {
    const state = harness(20);
    state.changePage(1);
    state.results.value = [
      { id: 'new', title: 'New', content: '' },
      ...state.results.value
    ];
    await nextTick();
    expect(state.selectedId.value).toBe(6);
    expect(state.pageItems.value.some((item) => item.id === 6)).toBe(true);
    state.results.value = state.results.value.slice(0, 3);
    await nextTick();
    expect(state.page.value.index).toBe(0);
    expect(
      state.pageItems.value.some((item) => item.id === state.selectedId.value)
    ).toBe(true);
    expect(state.page.value.end).toBe(3);
    state.results.value = [];
    await nextTick();
    expect(state.selectedId.value).toBe(null);
    expect(state.page.value).toMatchObject({ count: 0, start: 0, end: 0 });
  });

  it('shows fifteen results in two full six-item pages and a short final page', () => {
    const state = harness(15);
    expect(state.page.value).toMatchObject({
      start: 1,
      end: 6,
      count: 3,
      size: 6
    });
    state.changePage(1);
    expect(state.page.value).toMatchObject({ start: 7, end: 12, size: 6 });
    expect(state.pageItems.value).toHaveLength(6);
    state.changePage(1);
    expect(state.page.value).toMatchObject({ start: 13, end: 15, size: 6 });
    expect(state.pageItems.value).toHaveLength(3);
  });

  it('turns one page for a wheel burst and lets a reverse gesture return immediately', () => {
    vi.useFakeTimers();
    vi.setSystemTime(1000);
    const state = harness(20);
    const wheel = (deltaY: number, extra = {}) => ({
      deltaX: 0,
      deltaY,
      deltaMode: 0,
      ctrlKey: false,
      preventDefault: vi.fn(),
      ...extra
    });
    const first = wheel(120);
    state.handleWheel(first);
    expect(state.page.value.index).toBe(1);
    expect(first.preventDefault).toHaveBeenCalledOnce();
    state.handleWheel(wheel(120));
    expect(state.page.value.index).toBe(1);
    state.handleWheel(wheel(-120));
    expect(state.page.value.index).toBe(0);
    state.handleWheel(wheel(120, { ctrlKey: true }));
    state.handleWheel(wheel(30, { deltaX: 100 }));
    expect(state.page.value.index).toBe(0);
    vi.advanceTimersByTime(400);
    state.handleWheel(wheel(16));
    state.handleWheel(wheel(16));
    state.handleWheel(wheel(16));
    expect(state.page.value.index).toBe(1);
  });
});
