import { nextTick } from 'vue';

interface SessionScrollEditor {
  view: {
    dom: HTMLElement;
  };
}

interface UseEditorSessionScrollOptions {
  getEditor: () => SessionScrollEditor | null | undefined;
}

function getElementOffsetTop(element: HTMLElement, scrollContainer: HTMLElement) {
  let elementOffsetTop = 0;
  let currentElement: HTMLElement | null = element;

  while (currentElement && currentElement !== scrollContainer) {
    elementOffsetTop += currentElement.offsetTop;
    currentElement = currentElement.offsetParent as HTMLElement | null;
    if (currentElement === scrollContainer) break;
  }

  return elementOffsetTop;
}

function isInsideWikilink(element: HTMLElement, scrollContainer: HTMLElement) {
  let parent: HTMLElement | null = element;

  while (parent && parent !== scrollContainer) {
    if (parent.classList.contains('wikilink-decoration')) {
      return true;
    }
    parent = parent.parentElement;
  }

  return false;
}

function isInsideCodeBlock(element: HTMLElement, scrollContainer: HTMLElement) {
  let checkElement: HTMLElement | null = element;

  while (checkElement && checkElement !== scrollContainer) {
    if (
      checkElement.tagName === 'PRE' ||
      checkElement.classList.contains('code-block-wrapper') ||
      checkElement.classList.contains('hljs')
    ) {
      return true;
    }
    checkElement = checkElement.parentElement;
  }

  return false;
}

function ensureHighlightStyle() {
  if (document.getElementById('highlight-animation-style')) {
    return;
  }

  const style = document.createElement('style');
  style.id = 'highlight-animation-style';
  style.textContent = `
    @keyframes highlight-pulse {
      0% { background-color: rgba(255, 235, 59, 0.6); box-shadow: 0 0 0 0 rgba(255, 235, 59, 0.4); }
      50% { background-color: rgba(255, 235, 59, 0.4); box-shadow: 0 0 0 4px rgba(255, 235, 59, 0.2); }
      100% { background-color: rgba(255, 235, 59, 0); box-shadow: 0 0 0 0 rgba(255, 235, 59, 0); }
    }
  `;
  document.head.appendChild(style);
}

function createHighlight(rect: DOMRect) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    left: ${rect.left}px;
    top: ${rect.top}px;
    width: ${rect.width}px;
    height: ${rect.height}px;
    background-color: rgba(255, 235, 59, 0.3);
    border-radius: 2px;
    pointer-events: none;
    z-index: 9999;
    animation: highlight-pulse 1.5s ease-out;
  `;

  ensureHighlightStyle();
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 2000);
}

function findWikilinkDecoration(scrollContainer: HTMLElement, searchTitle: string) {
  const wikilinkElements = scrollContainer.querySelectorAll('.wikilink-decoration');
  for (const element of wikilinkElements) {
    const cleanText = (element.textContent || '').replace(/\[\[|\]\]/g, '').trim();
    if (cleanText === searchTitle) {
      return {
        targetElement: element as HTMLElement,
        highlightRange: null as Range | null
      };
    }
  }

  return null;
}

function findPlainTextMatch(scrollContainer: HTMLElement, searchTitle: string) {
  const walker = document.createTreeWalker(scrollContainer, NodeFilter.SHOW_TEXT, null);
  let node: Node | null;

  while ((node = walker.nextNode())) {
    const textContent = node.textContent || '';
    const index = textContent.indexOf(searchTitle);
    if (index === -1) continue;

    const parentElement = node.parentElement;
    if (!parentElement || isInsideWikilink(parentElement, scrollContainer)) {
      continue;
    }

    let highlightRange: Range | null = null;
    try {
      const range = document.createRange();
      range.setStart(node, index);
      range.setEnd(node, index + searchTitle.length);
      if (range.getClientRects().length > 0) {
        highlightRange = range;
      }
    } catch (error) {
      // Ignore range creation errors.
    }

    return {
      targetElement: parentElement,
      highlightRange
    };
  }

  return null;
}

export function useEditorSessionScroll(options: UseEditorSessionScrollOptions) {
  const getScrollContainer = () => options.getEditor()?.view.dom;

  const getScrollPosition = () => getScrollContainer()?.scrollTop ?? 0;

  const setScrollPosition = (scrollTop: number) => {
    if (!options.getEditor()) return;

    nextTick(() => {
      const scrollContainer = getScrollContainer();
      if (scrollContainer) {
        scrollContainer.scrollTop = Math.max(0, scrollTop);
      }
    });
  };

  const scrollToWikilink = (searchTitle: string) => {
    if (!options.getEditor()) return;

    nextTick(() => {
      try {
        const scrollContainer = getScrollContainer();
        if (!scrollContainer) return;

        const match =
          findWikilinkDecoration(scrollContainer, searchTitle) ??
          findPlainTextMatch(scrollContainer, searchTitle);

        if (!match) return;

        const { targetElement, highlightRange } = match;
        const targetRect = targetElement.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const elementOffsetTop = getElementOffsetTop(targetElement, scrollContainer);
        const targetPositionInViewport = containerRect.height / 2;
        const scrollAdjustment = isInsideCodeBlock(targetElement, scrollContainer) ? 580 : -80;
        const newScrollTop = elementOffsetTop - targetPositionInViewport + targetRect.height / 2 + scrollAdjustment;
        scrollContainer.scrollTop = Math.max(0, newScrollTop);

        setTimeout(() => {
          if (highlightRange) {
            Array.from<DOMRect>(highlightRange.getClientRects()).forEach(createHighlight);
          } else {
            createHighlight(targetElement.getBoundingClientRect());
          }
        }, 200);
      } catch (error) {
        console.error('Failed to scroll to wikilink:', error);
      }
    });
  };

  return {
    getScrollPosition,
    setScrollPosition,
    scrollToWikilink
  };
}
