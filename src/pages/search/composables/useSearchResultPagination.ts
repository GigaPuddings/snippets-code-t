import { computed, ref, watch, toValue, type MaybeRefOrGetter } from 'vue';
import type { ContentType } from '@/types';

export const QUICK_SEARCH_PAGE_SIZE = 6;

export interface SearchResultPage {
  index: number;
  count: number;
  size: number;
  start: number;
  end: number;
  total: number;
}

type WheelInput = Pick<
  WheelEvent,
  'deltaX' | 'deltaY' | 'deltaMode' | 'ctrlKey' | 'preventDefault'
>;

export function useSearchResultPagination(
  results: MaybeRefOrGetter<ContentType[]>,
  selectedId: MaybeRefOrGetter<string | number | null | undefined>,
  onSelect: (item: ContentType | null) => void
) {
  const pageIndex = ref(0);
  const items = computed(() => toValue(results));
  const pageCount = computed(() =>
    Math.ceil(items.value.length / QUICK_SEARCH_PAGE_SIZE)
  );
  const pageItems = computed(() =>
    items.value.slice(
      pageIndex.value * QUICK_SEARCH_PAGE_SIZE,
      (pageIndex.value + 1) * QUICK_SEARCH_PAGE_SIZE
    )
  );
  const page = computed<SearchResultPage>(() => ({
    index: pageIndex.value,
    count: pageCount.value,
    size: QUICK_SEARCH_PAGE_SIZE,
    start: items.value.length
      ? pageIndex.value * QUICK_SEARCH_PAGE_SIZE + 1
      : 0,
    end: Math.min(
      (pageIndex.value + 1) * QUICK_SEARCH_PAGE_SIZE,
      items.value.length
    ),
    total: items.value.length
  }));

  function ensureItemVisible(index: number): void {
    if (index >= 0 && index < items.value.length)
      pageIndex.value = Math.floor(index / QUICK_SEARCH_PAGE_SIZE);
  }

  function resetPage(): void {
    pageIndex.value = 0;
    onSelect(items.value[0] ?? null);
  }

  function changePage(direction: 1 | -1): boolean {
    const next = pageIndex.value + direction;
    if (next < 0 || next >= pageCount.value) return false;
    pageIndex.value = next;
    onSelect(pageItems.value[0] ?? null);
    return true;
  }

  watch(
    [items, () => toValue(selectedId)],
    () => {
      const index = items.value.findIndex(
        (item) => item.id === toValue(selectedId)
      );
      if (index >= 0) {
        ensureItemVisible(index);
      } else {
        pageIndex.value = Math.min(
          pageIndex.value,
          Math.max(0, pageCount.value - 1)
        );
        const fallback = pageItems.value[0] ?? null;
        if (fallback || toValue(selectedId) != null) onSelect(fallback);
      }
    },
    { immediate: true }
  );

  let wheelDelta = 0;
  let lastWheelAt = 0;
  let lastTurnAt = Number.NEGATIVE_INFINITY;
  let lastTurnDirection = 0;

  function handleWheel(event: WheelInput): void {
    if (
      event.ctrlKey ||
      Math.abs(event.deltaY) <= Math.abs(event.deltaX) ||
      pageCount.value <= 1
    )
      return;
    event.preventDefault();
    const now = Date.now();
    const direction = Math.sign(event.deltaY) as 1 | -1;
    if (direction === lastTurnDirection && now - lastTurnAt < 300) return;
    if (now - lastWheelAt > 160 || Math.sign(wheelDelta) !== direction)
      wheelDelta = 0;
    lastWheelAt = now;
    const multiplier =
      event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 312 : 1;
    wheelDelta += event.deltaY * multiplier;
    if (Math.abs(wheelDelta) < 48) return;
    wheelDelta = 0;
    if (changePage(direction)) {
      lastTurnAt = now;
      lastTurnDirection = direction;
    }
  }

  return {
    page,
    pageItems,
    pageIndex,
    ensureItemVisible,
    resetPage,
    changePage,
    handleWheel
  };
}
