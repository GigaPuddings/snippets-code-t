import { nextTick, ref, type Ref } from 'vue';

export interface Heading {
  level: number;
  text: string;
  pos: number;
}

type EditorViewMode = 'reading' | 'preview' | 'source';

interface OutlineEditor {
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
    if (!editor) {
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
    if (!editor || headings.value.length === 0) {
      visibleHeadingIndex.value = -1;
      return;
    }

    const scrollContainer = editor.view.dom;
    const scrollTop = scrollContainer.scrollTop;
    const viewportCenter = scrollTop + scrollContainer.clientHeight * 0.2;
    const allHeadingElements = scrollContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingElementMap = new Map<number, HTMLElement>();

    allHeadingElements.forEach((el: Element) => {
      const headingEl = el as HTMLElement;
      const text = headingEl.textContent?.trim() || '';
      const matchIndex = headings.value.findIndex((h, idx) => {
        if (headingElementMap.has(idx)) return false;
        return h.text === text;
      });

      if (matchIndex >= 0) {
        headingElementMap.set(matchIndex, headingEl);
      }
    });

    let closestIndex = -1;
    let closestDistance = Infinity;
    headings.value.forEach((_heading, index) => {
      const element = headingElementMap.get(index);
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
    if (!editor) return;

    if (scrollCleanup) {
      scrollCleanup();
    }

    const scrollContainer = editor.view.dom;
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
    if (!editor) return;

    try {
      const scrollContainer = editor.view.dom;
      const targetHeading = headings.value.find(h => h.pos === pos);
      if (!targetHeading) {
        console.warn('Target heading not found for pos:', pos);
        return;
      }

      let targetElement: HTMLElement | null = null;
      scrollContainer.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el: Element) => {
        const headingEl = el as HTMLElement;
        const text = headingEl.textContent?.trim() || '';
        if (text === targetHeading.text && !targetElement) {
          targetElement = headingEl;
        }
      });

      if (targetElement) {
        let elementTop = 0;
        let currentElement: HTMLElement | null = targetElement;

        while (currentElement && currentElement !== scrollContainer) {
          elementTop += currentElement.offsetTop;
          currentElement = currentElement.offsetParent as HTMLElement | null;
          if (currentElement === scrollContainer) break;
        }

        scrollContainer.scrollTop = Math.max(0, elementTop - HEADING_SCROLL_OFFSET);
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
