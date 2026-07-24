import { nextTick, ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import { useEditorOutline } from './useEditorOutline';

const createScrollContainer = () => {
  const listeners = new Map<string, EventListener>();
  const heading = {
    textContent: 'Intro',
    offsetTop: 240,
    offsetParent: null,
    getBoundingClientRect: vi.fn(() => ({ top: 260 }))
  } as unknown as HTMLElement;

  const outerContainer = {
    scrollTop: 0,
    clientHeight: 500,
    addEventListener: vi.fn((event: string, listener: EventListener) => {
      listeners.set(event, listener);
    }),
    removeEventListener: vi.fn((event: string) => {
      listeners.delete(event);
    }),
    getBoundingClientRect: vi.fn(() => ({ top: 100 }))
  } as unknown as HTMLElement;

  const editorDom = {
    scrollTop: 0,
    clientHeight: 500,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    querySelectorAll: vi.fn(() => [heading]),
    getBoundingClientRect: vi.fn(() => ({ top: 100 })),
    closest: vi.fn((selector: string) => (selector === '.editor-content' ? outerContainer : null))
  } as unknown as HTMLElement;

  return { container: outerContainer, editorDom, heading, listeners };
};

const createEditor = () => {
  const { container, editorDom } = createScrollContainer();
  return {
    editor: {
      state: {
        doc: {
          descendants: vi.fn((callback: (node: any, pos: number) => void) => {
            callback({ type: { name: 'heading' }, attrs: { level: 2 }, textContent: 'Intro' }, 4);
          })
        }
      },
      view: { dom: editorDom }
    },
    container
  };
};

const createOutline = (mode: 'reading' | 'preview' | 'source' = 'preview') => {
  const sourceContent = ref('# Source Intro\n\n## Details');
  const { editor, container } = createEditor();
  const viewMode = ref(mode);
  const textarea = {
    scrollTop: 30,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn()
  } as unknown as HTMLTextAreaElement;
  const sourceEditor = {
    getTextarea: vi.fn(() => textarea),
    scrollToLine: vi.fn()
  };
  const emitOutlineToggle = vi.fn();
  const emitScrollPosition = vi.fn();

  const outline = useEditorOutline({
    sourceContent,
    getEditor: () => editor,
    getViewMode: () => viewMode.value,
    getSourceEditor: () => sourceEditor,
    emitOutlineToggle,
    emitScrollPosition
  });

  return {
    ...outline,
    sourceContent,
    viewMode,
    editor,
    container,
    textarea,
    sourceEditor,
    emitOutlineToggle,
    emitScrollPosition
  };
};

describe('useEditorOutline', () => {
  it('extracts headings from the TipTap document', () => {
    const outline = createOutline();

    outline.extractHeadings();

    expect(outline.headings.value).toEqual([{ level: 2, text: 'Intro', pos: 4 }]);
  });

  it('extracts headings from source markdown', () => {
    const outline = createOutline('source');

    outline.extractHeadingsFromSource();

    expect(outline.headings.value).toEqual([
      { level: 1, text: 'Source Intro', pos: 0 },
      { level: 2, text: 'Details', pos: 2 }
    ]);
  });

  it('toggles outline and emits visibility changes', async () => {
    const outline = createOutline();

    outline.toggleOutline();
    await nextTick();

    expect(outline.showOutline.value).toBe(true);
    expect(outline.emitOutlineToggle).toHaveBeenCalledWith(true);
    expect(outline.headings.value).toEqual([{ level: 2, text: 'Intro', pos: 4 }]);
    expect(outline.container.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('jumps to source lines while in source mode', () => {
    const outline = createOutline('source');

    outline.jumpToHeading(2);

    expect(outline.sourceEditor.scrollToLine).toHaveBeenCalledWith(2);
  });

  it('jumps headings by scrolling the editor content container', () => {
    const outline = createOutline();

    outline.extractHeadings();
    outline.jumpToHeading(4);

    expect(outline.container.scrollTop).toBe(40);
    expect(outline.editor.view.dom.scrollTop).toBe(0);
  });

  it('closes outline and cleans scroll listeners', async () => {
    const outline = createOutline();
    outline.toggleOutline();
    await nextTick();

    outline.closeOutline();

    expect(outline.showOutline.value).toBe(false);
    expect(outline.emitOutlineToggle).toHaveBeenCalledWith(false);
    expect(outline.container.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('does not access the view after the editor is destroyed', async () => {
    const outline = createOutline();
    Object.assign(outline.editor, { isDestroyed: true });
    Object.defineProperty(outline.editor, 'view', {
      get: () => {
        throw new Error('destroyed view accessed');
      }
    });

    outline.toggleOutline();
    await nextTick();

    expect(outline.headings.value).toEqual([]);
    expect(outline.container.addEventListener).not.toHaveBeenCalled();
  });
});
