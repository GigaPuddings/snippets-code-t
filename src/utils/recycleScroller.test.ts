import { afterEach, describe, expect, it, vi } from 'vitest';
import { refreshRecycleScroller } from './recycleScroller';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('refreshRecycleScroller', () => {
  it('refreshes the recycled pool before and after the next layout frame', () => {
    let nextFrame: FrameRequestCallback | undefined;
    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((callback: FrameRequestCallback) => {
        nextFrame = callback;
        return 1;
      })
    );
    const updateVisibleItems = vi.fn();

    refreshRecycleScroller({ updateVisibleItems });

    expect(updateVisibleItems).toHaveBeenCalledTimes(1);
    expect(updateVisibleItems).toHaveBeenLastCalledWith(true);

    nextFrame?.(0);
    expect(updateVisibleItems).toHaveBeenCalledTimes(2);
    expect(updateVisibleItems).toHaveBeenLastCalledWith(true);
  });

  it('ignores an unavailable scroller instance', () => {
    expect(() => refreshRecycleScroller(null)).not.toThrow();
  });
});
