import { nextTick, ref, type Ref } from 'vue';

export interface Heading {
  level: number;
  text: string;
  pos: number;
}

type EditorViewMode = 'reading' | 'preview' | 'source';

interface OutlineEditor {
  isDestroyed?: boolean;
  state: {
    doc: {
      descendants: (callback: (node: any, pos: number) => void) => void;
    };
    selection?: { from: number };
  };
  view: {
    dom: HTMLElement;
  };
}

interface SourceEditorHandle {
  getTextarea: () => HTMLTextAreaElement | null;
  scrollToLine: (line: number) => void;
}

interface UseEditorOutlineOptions {
  sourceContent: Ref<string>;
  getEditor: () => OutlineEditor | null | undefined;
  getViewMode: () => EditorViewMode;
  getSourceEditor: () => SourceEditorHandle | null | undefined;
  emitOutlineToggle: (show: boolean) => void;
  emitScrollPosition: (scrollTop: number) => void;
}

const HEADING_SCROLL_OFFSET = 120;

function getEditorScrollContainer(editor: OutlineEditor): HTMLElement {
  const container = editor.view.dom.closest?.('.editor-content') as HTMLElement | null | undefined;
  return container || editor.view.dom;
}

function debounce<T extends (...args: Parameters<T>) => void>(fn: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn(...args);
      timeout = null;
    }, wait);
  };
}

export function useEditorOutline(options: UseEditorOutlineOptions) {
  const showOutline = ref(false);
  const headings = ref<Heading[]>([]);
  const visibleHeadingIndex = ref(-1);
  const currentCursorPos = ref(0);
  let scrollCleanup: (() => void) | null = null;
  let sourceScrollCleanup: (() => void) | null = null;

  const extractHeadings = () => {
    const editor = options.getEditor();
    if (!editor || editor.isDestroyed) {
      headings.value = [];
      return;
    }

    const newHeadings: Heading[] = [];
    editor.state.doc.descendants((node: any, pos: number) => {
      if (node.type.name === 'heading') {
        newHeadings.push({
          level: node.attrs.level,
          text: node.textContent,
          pos
        });
      }
    });

    headings.value = newHeadings;
  };

  const extractHeadingsFromSource = () => {
    const newHeadings: Heading[] = [];

    options.sourceContent.value.split('\n').forEach((line, index) => {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        newHeadings.push({
          level: match[1].length,
          text: match[2].trim(),
          pos: index
        });
      }
    });

    headings.value = newHeadings;
  };

  const extractHeadingsAuto = () => {
    if (options.getViewMode() === 'source') {
      extractHeadingsFromSource();
    } else {
      extractHeadings();
    }
  };

  const updateVisibleHeadingInSource = () => {
    const sourceEditor = options.getSourceEditor();
    if (!sourceEditor || headings.value.length === 0) {
      visibleHeadingIndex.value = -1;
      return;
    }

    const textarea = sourceEditor.getTextarea();
    if (!textarea) {
      visibleHeadingIndex.value = -1;
      return;
    }

    const computedStyle = window.getComputedStyle(textarea);
    const fontSize = parseFloat(computedStyle.fontSize);
    const lineHeight = fontSize * 1.5;
    const currentLine = Math.floor(textarea.scrollTop / lineHeight);

    let closestIndex = -1;
    for (let i = headings.value.length - 1; i >= 0; i--) {
      if (headings.value[i].pos <= currentLine) {
        closestIndex = i;
        break;
      }
    }

    visibleHeadingIndex.value = closestIndex;
  };

  const updateVisibleHeading = () => {
    if (options.getViewMode() === 'source') {
      updateVisibleHeadingInSource();
      return;
    }

    const editor = options.getEditor();
    if (!editor || editor.isDestroyed || headings.value.length === 0) {
      visibleHeadingIndex.value = -1;
      return;
    }

    const scrollContainer = getEditorScrollContainer(editor);
    const scrollTop = scrollContainer.scrollTop;
    const viewportCenter = scrollTop + scrollContainer.clientHeight * 0.2;
    const allHeadingElements = Array.from(
      editor.view.dom.querySelectorAll('h1, h2, h3, h4, h5, h6')
    ) as HTMLElement[];

    let closestIndex = -1;
    let closestDistance = Infinity;
    headings.value.forEach((_heading, index) => {
      const element = allHeadingElements[index];
      if (!element) return;

      const elementRect = element.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      const elementTop = elementRect.top - containerRect.top + scrollTop;

      if (elementTop <= viewportCenter) {
        const distance = viewportCenter - elementTop;
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });

    visibleHeadingIndex.value = closestIndex;
  };

  const setupSourceScrollListener = () => {
    const sourceEditor = options.getSourceEditor();
    if (!sourceEditor) return;

    if (sourceScrollCleanup) {
      sourceScrollCleanup();
    }

    const textarea = sourceEditor.getTextarea();
    if (!textarea) return;

    const debouncedUpdate = debounce(updateVisibleHeadingInSource, 100);
    textarea.addEventListener('scroll', debouncedUpdate);
    updateVisibleHeadingInSource();

    sourceScrollCleanup = () => {
      textarea.removeEventListener('scroll', debouncedUpdate);
    };
  };

  const cleanupSourceScrollListener = () => {
    if (sourceScrollCleanup) {
      sourceScrollCleanup();
      sourceScrollCleanup = null;
    }
  };

  const setupScrollListener = () => {
    const editor = options.getEditor();
    if (!editor || editor.isDestroyed) return;

    if (scrollCleanup) {
      scrollCleanup();
    }

    const scrollContainer = getEditorScrollContainer(editor);
    const debouncedUpdate = debounce(updateVisibleHeading, 100);
    const debouncedEmitScroll = debounce(() => {
      options.emitScrollPosition(scrollContainer.scrollTop);
    }, 400);

    scrollContainer.addEventListener('scroll', debouncedUpdate);
    scrollContainer.addEventListener('scroll', debouncedEmitScroll);
    updateVisibleHeading();

    scrollCleanup = () => {
      scrollContainer.removeEventListener('scroll', debouncedUpdate);
      scrollContainer.removeEventListener('scroll', debouncedEmitScroll);
    };
  };

  const cleanupScrollListener = () => {
    if (scrollCleanup) {
      scrollCleanup();
      scrollCleanup = null;
    }
    cleanupSourceScrollListener();
  };

  const refreshSourceOutline = () => {
    extractHeadingsFromSource();
    setupSourceScrollListener();
  };

  const refreshEditorOutline = () => {
    extractHeadings();
    setupScrollListener();
  };

  const handleSourceScroll = () => {
    if (showOutline.value) {
      updateVisibleHeadingInSource();
    }
  };

  const toggleOutline = () => {
    showOutline.value = !showOutline.value;
    options.emitOutlineToggle(showOutline.value);

    if (showOutline.value) {
      extractHeadingsAuto();
      if (options.getViewMode() === 'source') {
        nextTick(setupSourceScrollListener);
      } else if (options.getEditor()) {
        nextTick(setupScrollListener);
      }
    } else {
      cleanupScrollListener();
    }
  };

  const closeOutline = () => {
    showOutline.value = false;
    options.emitOutlineToggle(false);
    cleanupScrollListener();
  };

  const jumpToHeading = (pos: number) => {
    if (options.getViewMode() === 'source') {
      options.getSourceEditor()?.scrollToLine(pos);
      return;
    }

    const editor = options.getEditor();
    if (!editor || editor.isDestroyed) return;

    try {
      const scrollContainer = getEditorScrollContainer(editor);
      const targetHeading = headings.value.find(h => h.pos === pos);
      if (!targetHeading) {
        console.warn('Target heading not found for pos:', pos);
        return;
      }

      const targetIndex = headings.value.findIndex(h => h.pos === targetHeading.pos);
      const headingElements = Array.from(
        editor.view.dom.querySelectorAll('h1, h2, h3, h4, h5, h6')
      ) as HTMLElement[];
      const targetElement = headingElements[targetIndex];

      if (targetElement) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const targetRect = targetElement.getBoundingClientRect();
        const elementTop = targetRect.top - containerRect.top + scrollContainer.scrollTop;
        scrollContainer.scrollTop = Math.max(0, elementTop - HEADING_SCROLL_OFFSET);
        updateVisibleHeading();
      } else {
        console.warn('Target element not found in DOM');
      }
    } catch (error) {
      console.error('Failed to scroll to heading:', error);
    }
  };

  const setCurrentCursorPos = (pos: number) => {
    currentCursorPos.value = pos;
  };

  return {
    showOutline,
    headings,
    visibleHeadingIndex,
    currentCursorPos,
    setCurrentCursorPos,
    extractHeadings,
    extractHeadingsFromSource,
    extractHeadingsAuto,
    updateVisibleHeading,
    updateVisibleHeadingInSource,
    setupScrollListener,
    setupSourceScrollListener,
    cleanupScrollListener,
    refreshSourceOutline,
    refreshEditorOutline,
    handleSourceScroll,
    jumpToHeading,
    toggleOutline,
    closeOutline
  };
}
