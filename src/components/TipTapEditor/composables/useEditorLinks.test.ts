import { describe, expect, it, vi } from 'vitest';
import { useEditorLinks } from './useEditorLinks';

const createMouseEvent = () => ({
  preventDefault: vi.fn(),
  stopPropagation: vi.fn(),
  stopImmediatePropagation: vi.fn()
}) as unknown as MouseEvent;

const createLinkTarget = (href: string) => {
  const link = {
    getAttribute: vi.fn((name: string) => (name === 'href' ? href : null))
  };

  return {
    closest: vi.fn((selector: string) => (selector === 'a' ? link : null))
  } as unknown as HTMLElement;
};

describe('useEditorLinks', () => {
  it('scrolls to a direct anchor target', () => {
    const anchor = {
      id: 'intro',
      offsetTop: 240,
      getAttribute: vi.fn(() => null)
    };
    const scrollContainer = {
      scrollTop: 0,
      querySelectorAll: vi.fn((selector: string) => (selector === '[id], a[name]' ? [anchor] : []))
    } as unknown as HTMLElement;
    const event = createMouseEvent();
    Object.defineProperty(event, 'target', {
      value: createLinkTarget('#intro')
    });

    const links = useEditorLinks({
      getEditor: () => null
    });

    const handled = links.handleLinkClick({ dom: scrollContainer }, event);

    expect(handled).toBe(true);
    expect(scrollContainer.scrollTop).toBe(120);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(event.stopImmediatePropagation).toHaveBeenCalledTimes(1);
  });

  it('falls back to generated heading anchors', () => {
    const headingElement = {
      textContent: 'Usage Guide',
      offsetTop: 360,
      offsetParent: null
    };
    const scrollContainer = {
      scrollTop: 0,
      querySelectorAll: vi.fn((selector: string) => {
        if (selector === '[id], a[name]') return [];
        if (selector === 'h1, h2, h3, h4, h5, h6') return [headingElement];
        return [];
      })
    } as unknown as HTMLElement;
    const editor = {
      state: {
        doc: {
          descendants: vi.fn((callback: (node: any, pos: number) => void) => {
            callback({
              type: { name: 'heading' },
              attrs: { level: 2 },
              textContent: 'Usage Guide'
            }, 4);
          })
        }
      }
    };
    const event = createMouseEvent();
    Object.defineProperty(event, 'target', {
      value: createLinkTarget('#usage-guide')
    });

    const links = useEditorLinks({
      getEditor: () => editor
    });

    const handled = links.handleLinkClick({ dom: scrollContainer }, event);

    expect(handled).toBe(true);
    expect(scrollContainer.scrollTop).toBe(240);
  });

  it('opens external links with normalized protocol', () => {
    const openExternalUrl = vi.fn(async () => undefined);
    const event = createMouseEvent();
    Object.defineProperty(event, 'target', {
      value: createLinkTarget('example.com/docs')
    });
    const links = useEditorLinks({
      getEditor: () => null,
      openExternalUrl
    });

    const handled = links.handleLinkClick({ dom: {} as HTMLElement }, event);

    expect(handled).toBe(true);
    expect(openExternalUrl).toHaveBeenCalledWith('https://example.com/docs');
  });

  it('ignores relative links', () => {
    const openExternalUrl = vi.fn(async () => undefined);
    const event = createMouseEvent();
    Object.defineProperty(event, 'target', {
      value: createLinkTarget('/docs/local')
    });
    const links = useEditorLinks({
      getEditor: () => null,
      openExternalUrl
    });

    expect(links.handleLinkClick({ dom: {} as HTMLElement }, event)).toBe(false);
    expect(openExternalUrl).not.toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('installs and cleans the anchor capture listener', () => {
    const editorElement = {
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    } as unknown as HTMLElement;
    const links = useEditorLinks({
      getEditor: () => null
    });

    links.setupAnchorClickInterceptor(editorElement);
    links.cleanupAnchorClickInterceptor();

    expect(editorElement.addEventListener).toHaveBeenCalledWith('click', expect.any(Function), true);
    expect(editorElement.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function), true);
  });
});
