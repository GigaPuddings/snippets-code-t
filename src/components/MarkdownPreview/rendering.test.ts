import { afterEach, expect, it, vi } from 'vitest';
import { observePreviewCodeBlocks } from './rendering';

afterEach(() => vi.unstubAllGlobals());

it('highlights only nearby blocks, preserves selections and cancels work on cleanup', () => {
  const frames = new Map<number, FrameRequestCallback>();
  let nextFrame = 0;
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    frames.set(++nextFrame, callback);
    return nextFrame;
  });
  vi.stubGlobal('cancelAnimationFrame', (id: number) => frames.delete(id));
  const flush = () => {
    const pending = [...frames.values()];
    frames.clear();
    pending.forEach((callback) => callback(0));
  };
  let notify!: IntersectionObserverCallback;
  const disconnect = vi.fn();
  const unobserve = vi.fn();
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback: IntersectionObserverCallback) {
        notify = callback;
      }
      observe = vi.fn();
      unobserve = unobserve;
      disconnect = disconnect;
    }
  );
  const blocks = Array.from({ length: 100 }, () => {
    const code = {};
    return { isConnected: true, querySelector: () => code };
  });
  let selected = false;
  const document = Object.assign(new EventTarget(), {
    getSelection: () => ({
      isCollapsed: !selected,
      containsNode: () => selected
    })
  });
  const host = {
    ownerDocument: document,
    querySelectorAll: () => blocks
  } as unknown as HTMLElement;
  const highlight = vi.fn();
  const cleanup = observePreviewCodeBlocks(host, highlight);
  expect(highlight).not.toHaveBeenCalled();
  const visible = (index: number) =>
    notify(
      [
        {
          target: blocks[index],
          isIntersecting: true
        } as unknown as IntersectionObserverEntry
      ],
      {} as IntersectionObserver
    );
  selected = true;
  visible(0);
  flush();
  expect(highlight).not.toHaveBeenCalled();
  expect(frames.size).toBe(0);
  selected = false;
  document.dispatchEvent(new Event('selectionchange'));
  flush();
  expect(highlight).toHaveBeenCalledTimes(1);
  expect(unobserve).toHaveBeenCalledWith(blocks[0]);
  visible(99);
  cleanup();
  flush();
  expect(highlight).toHaveBeenCalledTimes(1);
  expect(disconnect).toHaveBeenCalledOnce();
});
