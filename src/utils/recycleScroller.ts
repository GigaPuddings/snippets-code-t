export interface RecycleScrollerInstance {
  $el?: HTMLElement;
  updateVisibleItems?: (checkItem: boolean) => unknown;
  scrollToItem?: (index: number) => void;
  scrollToPosition?: (position: number) => void;
}

/**
 * vue-virtual-scroller 2.0.0-beta.8 does not watch every fixed-size input and
 * can keep a stale recycled pool after replacing or prepending items. Refresh
 * once immediately and once after layout/programmatic scrolling has settled.
 */
export function refreshRecycleScroller(
  scroller: RecycleScrollerInstance | null | undefined
): void {
  if (!scroller?.updateVisibleItems) return;

  scroller.updateVisibleItems(true);
  requestAnimationFrame(() => {
    scroller.updateVisibleItems?.(true);
  });
}
