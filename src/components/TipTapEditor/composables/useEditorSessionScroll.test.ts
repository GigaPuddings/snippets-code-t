import { nextTick } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useEditorSessionScroll } from './useEditorSessionScroll';

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

const createRect = (overrides: Partial<DOMRect> = {}) => ({
  x: 0,
  y: 0,
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0,
  toJSON: vi.fn(),
  ...overrides
}) as DOMRect;

const createScrollContainer = (overrides: Record<string, unknown> = {}) => ({
  scrollTop: 80,
  querySelectorAll: vi.fn(() => []),
  getBoundingClientRect: vi.fn(() => createRect({ height: 400 })),
  ...overrides
}) as unknown as HTMLElement;

const createEditor = (scrollContainer: HTMLElement) => ({
  view: {
    dom: scrollContainer
  }
});

describe('useEditorSessionScroll', () => {
  it('reads the current editor scroll position', () => {
    const scrollContainer = createScrollContainer({ scrollTop: 128 });
    const sessionScroll = useEditorSessionScroll({
      getEditor: () => createEditor(scrollContainer)
    });

    expect(sessionScroll.getScrollPosition()).toBe(128);
  });

  it('restores a non-negative scroll position on next tick', async () => {
    const scrollContainer = createScrollContainer({ scrollTop: 0 });
    const sessionScroll = useEditorSessionScroll({
      getEditor: () => createEditor(scrollContainer)
    });

    sessionScroll.setScrollPosition(-20);
    await nextTick();

    expect(scrollContainer.scrollTop).toBe(0);

    sessionScroll.setScrollPosition(240);
    await nextTick();

    expect(scrollContainer.scrollTop).toBe(240);
  });

  it('scrolls to a rendered wikilink decoration and highlights it', async () => {
    vi.useFakeTimers();
    const overlay = {
      style: { cssText: '' },
      remove: vi.fn()
    };
    const styleElement = {};
    const appendHead = vi.fn();
    const appendBody = vi.fn();
    vi.stubGlobal('document', {
      getElementById: vi.fn(() => null),
      createElement: vi.fn((tag: string) => (tag === 'style' ? styleElement : overlay)),
      createTreeWalker: vi.fn(),
      createRange: vi.fn(),
      head: { appendChild: appendHead },
      body: { appendChild: appendBody }
    });

    const wikilinkElement = {
      textContent: '[[Button Patterns]]',
      offsetTop: 300,
      offsetParent: null,
      tagName: 'SPAN',
      parentElement: null,
      classList: { contains: vi.fn(() => false) },
      getBoundingClientRect: vi.fn(() => createRect({ left: 10, top: 20, width: 120, height: 20 }))
    };
    const scrollContainer = createScrollContainer({
      scrollTop: 0,
      querySelectorAll: vi.fn((selector: string) => (selector === '.wikilink-decoration' ? [wikilinkElement] : [])),
      getBoundingClientRect: vi.fn(() => createRect({ height: 400 }))
    });
    const sessionScroll = useEditorSessionScroll({
      getEditor: () => createEditor(scrollContainer)
    });

    sessionScroll.scrollToWikilink('Button Patterns');
    await nextTick();

    expect(scrollContainer.scrollTop).toBe(30);

    vi.advanceTimersByTime(200);
    expect(appendHead).toHaveBeenCalledWith(styleElement);
    expect(appendBody).toHaveBeenCalledWith(overlay);

    vi.advanceTimersByTime(2000);
    expect(overlay.remove).toHaveBeenCalledTimes(1);
  });

  it('does nothing when no editor is available', async () => {
    const sessionScroll = useEditorSessionScroll({
      getEditor: () => null
    });

    expect(sessionScroll.getScrollPosition()).toBe(0);
    sessionScroll.setScrollPosition(100);
    sessionScroll.scrollToWikilink('Missing');
    await nextTick();

    expect(sessionScroll.getScrollPosition()).toBe(0);
  });
});
