import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { effectScope, nextTick, shallowRef } from 'vue';
import { useChatScroll } from './useChatScroll';

const frames = new Map<number, FrameRequestCallback>();
let nextFrame = 0;
let resized: () => void;
const observe = vi.fn();
const disconnect = vi.fn();
const removeEventListener = vi.fn();
const scopes: ReturnType<typeof effectScope>[] = [];
// Layout dimensions are read-only on a real DOM element, mutable on this test double.
type TestViewport = { -readonly [Key in keyof HTMLElement]: HTMLElement[Key] };
beforeEach(() => {
  frames.clear();
  nextFrame = 0;
  observe.mockClear();
  disconnect.mockClear();
  removeEventListener.mockClear();
  vi.stubGlobal('window', {
    requestAnimationFrame: (callback: FrameRequestCallback) => {
      frames.set(++nextFrame, callback);
      return nextFrame;
    },
    cancelAnimationFrame: (id: number) => frames.delete(id),
    addEventListener: vi.fn(),
    removeEventListener
  });
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe = observe;
      disconnect = disconnect;
      constructor(callback: () => void) {
        resized = callback;
      }
    }
  );
});
afterEach(() => {
  scopes.splice(0).forEach((scope) => scope.stop());
  vi.unstubAllGlobals();
});
const setup = () => {
  const scope = effectScope();
  scopes.push(scope);
  const list = shallowRef({
    scrollTop: 0,
    scrollHeight: 1600,
    clientHeight: 600,
    offsetWidth: 900,
    clientWidth: 884,
    getBoundingClientRect: () => ({ right: 900 })
  } as unknown as TestViewport);
  const body = shallowRef({} as HTMLElement);
  const scroll = scope.run(() => useChatScroll(list, body))!;
  return { scope, list, body, scroll };
};
const flushLayout = async () => {
  await nextTick();
  await Promise.resolve();
  const pending = [...frames.values()];
  frames.clear();
  pending.forEach((callback) => callback(0));
  await Promise.resolve();
};
const wheel = (deltaY: number) => ({ deltaY }) as WheelEvent;

describe('chat scroll restoration and follow behavior', () => {
  it('keeps the visible reading position after earlier messages are prepended', async () => {
    const { list, scroll } = setup();
    await flushLayout();
    list.value.scrollTop = 100;
    await scroll.preserveScrollPosition(() => {
      list.value.scrollHeight += 800;
    });
    expect(list.value.scrollTop).toBe(900);
    resized();
    await flushLayout();
    expect(list.value.scrollTop).toBe(900);
    expect(scroll.showJumpToBottom.value).toBe(true);
  });
  it('does not apply an earlier-page anchor after switching conversations', async () => {
    const { list, scroll } = setup();
    await flushLayout();
    const prepend = scroll.preserveScrollPosition(() => {
      list.value.scrollHeight += 800;
    });
    list.value.scrollHeight = 900;
    scroll.forceScrollToBottom();
    await flushLayout();
    await prepend;
    expect(list.value.scrollTop).toBe(300);
    expect(scroll.showJumpToBottom.value).toBe(false);
  });
  it('observes the permanent content and viewport, including restored completed messages', async () => {
    const { list, body } = setup();
    await flushLayout();
    expect(observe.mock.calls.map(([target]) => target)).toEqual([
      list.value,
      body.value
    ]);
    expect(list.value.scrollTop).toBe(1000);
    // A restored full answer gets laid out after the initial mount frame.
    list.value.scrollHeight = 3100;
    resized();
    await flushLayout();
    expect(list.value.scrollTop).toBe(2500);
    // Note chips / a taller composer reduce the available viewport.
    list.value.clientHeight = 420;
    resized();
    await flushLayout();
    expect(list.value.scrollTop).toBe(2680);
  });
  it('does not snap back when the user scrolls upward within the former 96px threshold', async () => {
    const { list, scroll } = setup();
    await flushLayout();
    scroll.handleMessageWheel(wheel(-32));
    list.value.scrollTop -= 32;
    scroll.handleMessageScroll();
    list.value.scrollHeight += 300;
    resized();
    await flushLayout();
    expect(list.value.scrollTop).toBe(968);
    expect(scroll.showJumpToBottom.value).toBe(true);
    scroll.forceScrollToBottom();
    await flushLayout();
    expect(list.value.scrollTop).toBe(1300);
    expect(scroll.showJumpToBottom.value).toBe(false);
  });
  it('waits for the layout frame and uses its current height, coalescing repeated requests', async () => {
    const { list, scroll } = setup();
    await flushLayout();
    let settled = false;
    const first = scroll.scrollToBottom({ force: true }).then(() => {
      settled = true;
    });
    const second = scroll.scrollToBottom();
    await nextTick();
    expect(settled).toBe(false);
    expect(frames.size).toBe(1);
    list.value.scrollHeight = 4200;
    await flushLayout();
    await Promise.all([first, second]);
    expect(settled).toBe(true);
    expect(list.value.scrollTop).toBe(3600);
  });
  it('recognizes native scrollbar scrolling without pointer events, but preserves follow after a layout clamp', async () => {
    const { list, scroll } = setup();
    await flushLayout();
    // Collapsing a disclosure clamps the native scroll position to the new bottom.
    list.value.scrollHeight = 1200;
    list.value.scrollTop = 600;
    scroll.handleMessageScroll();
    list.value.scrollHeight = 1400;
    resized();
    await flushLayout();
    expect(list.value.scrollTop).toBe(800);
    // A native scrollbar drag still pauses when pointerdown isn't dispatched.
    list.value.scrollTop = 500;
    scroll.handleMessageScroll();
    list.value.scrollHeight = 1700;
    resized();
    await flushLayout();
    expect(list.value.scrollTop).toBe(500);
    expect(scroll.showJumpToBottom.value).toBe(true);
  });
  it('lets upward user input cancel even a forced jump pending nextTick or a frame', async () => {
    const { list, scroll } = setup();
    await flushLayout();
    const waitingTick = scroll.scrollToBottom({ force: true });
    scroll.handleMessageWheel(wheel(-30));
    list.value.scrollTop = 970;
    await flushLayout();
    await waitingTick;
    expect(list.value.scrollTop).toBe(970);
    const waitingFrame = scroll.scrollToBottom({ force: true });
    await nextTick();
    scroll.handleMessageKeydown({ key: 'PageUp' } as KeyboardEvent);
    await flushLayout();
    await waitingFrame;
    expect(list.value.scrollTop).toBe(970);
  });
  it('preserves manual reading through resize and resumes only when the user reaches the bottom', async () => {
    const { list, scroll } = setup();
    await flushLayout();
    scroll.handleMessagePointerDown({ clientX: 895 } as PointerEvent);
    list.value.scrollTop = 500;
    scroll.handleMessageScroll();
    list.value.scrollHeight += 500;
    resized();
    await flushLayout();
    expect(list.value.scrollTop).toBe(500);
    expect(scroll.showJumpToBottom.value).toBe(true);
    // Complete the pointer interaction using the registered window callback.
    const finish = vi
      .mocked(window.addEventListener)
      .mock.calls.find(([type]) => type === 'pointerup')![1] as () => void;
    finish();
    list.value.scrollTop = 1500;
    scroll.handleMessageScroll();
    expect(scroll.showJumpToBottom.value).toBe(false);
    list.value.scrollHeight += 100;
    resized();
    await flushLayout();
    expect(list.value.scrollTop).toBe(1600);
  });
  it('disconnects observers, cancels frames and settles waiting callers on disposal', async () => {
    const { scope, list, scroll } = setup();
    await flushLayout();
    const pending = scroll.scrollToBottom({ force: true });
    await nextTick();
    scope.stop();
    resized();
    await flushLayout();
    await pending;
    expect(frames.size).toBe(0);
    expect(list.value.scrollTop).toBe(1000);
    expect(disconnect).toHaveBeenCalled();
    expect(removeEventListener.mock.calls.map(([type]) => type)).toEqual([
      'pointerup',
      'pointercancel',
      'resize',
      'focus'
    ]);
  });
});
