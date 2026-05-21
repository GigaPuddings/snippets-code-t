interface LinkEditorNode {
  type: { name: string };
  attrs: { level?: number };
  textContent: string;
}

interface LinkEditorView {
  dom: HTMLElement;
}

interface LinkEditor {
  state: {
    doc: {
      descendants: (callback: (node: LinkEditorNode, pos: number) => void) => void;
    };
  };
}

interface UseEditorLinksOptions {
  getEditor: () => LinkEditor | null | undefined;
  openExternalUrl?: (url: string) => Promise<void>;
  headingScrollOffset?: number;
}

const DEFAULT_HEADING_SCROLL_OFFSET = 120;

function normalizeHeadingId(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\u4e00-\u9fa5-]/g, '');
}

function isExternalLink(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('www.') ||
    /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(href)
  );
}

function toExternalUrl(href: string) {
  return href.includes('://') ? href : `https://${href}`;
}

function preventLinkDefault(event: MouseEvent) {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

function findAnchorTarget(scrollContainer: HTMLElement, anchorId: string) {
  const candidates = scrollContainer.querySelectorAll('[id], a[name]');
  for (const candidate of candidates) {
    const element = candidate as HTMLElement;
    if (element.id === anchorId || element.getAttribute('name') === anchorId) {
      return element;
    }
  }

  return null;
}

function findHeadingByAnchor(editor: LinkEditor | null | undefined, anchorId: string) {
  if (!editor) return null;

  const headings: Array<{ text: string; pos: number }> = [];
  editor.state.doc.descendants((node, pos) => {
    if (node.type.name === 'heading') {
      headings.push({
        text: node.textContent,
        pos
      });
    }
  });

  return headings.find((heading) => normalizeHeadingId(heading.text) === anchorId) ?? null;
}

function findHeadingElement(scrollContainer: HTMLElement, headingText: string) {
  let targetElement: HTMLElement | null = null;

  scrollContainer.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el: Element) => {
    const headingEl = el as HTMLElement;
    if (!targetElement && (headingEl.textContent?.trim() || '') === headingText) {
      targetElement = headingEl;
    }
  });

  return targetElement;
}

function getElementOffsetTop(element: HTMLElement, scrollContainer: HTMLElement) {
  let elementTop = 0;
  let currentElement: HTMLElement | null = element;

  while (currentElement && currentElement !== scrollContainer) {
    elementTop += currentElement.offsetTop;
    currentElement = currentElement.offsetParent as HTMLElement | null;
    if (currentElement === scrollContainer) break;
  }

  return elementTop;
}

async function openWithTauriShell(url: string) {
  const { open } = await import('@tauri-apps/plugin-shell');
  await open(url);
}

export function useEditorLinks(options: UseEditorLinksOptions) {
  const headingScrollOffset = options.headingScrollOffset ?? DEFAULT_HEADING_SCROLL_OFFSET;
  let anchorClickCleanup: (() => void) | null = null;

  const scrollToAnchor = (scrollContainer: HTMLElement, anchorId: string) => {
    const directTarget = findAnchorTarget(scrollContainer, anchorId);
    if (directTarget) {
      scrollContainer.scrollTop = Math.max(0, directTarget.offsetTop - headingScrollOffset);
      return true;
    }

    const heading = findHeadingByAnchor(options.getEditor(), anchorId);
    if (!heading) {
      console.warn('No matching heading found for anchor:', anchorId);
      return true;
    }

    const headingElement = findHeadingElement(scrollContainer, heading.text);
    if (!headingElement) {
      console.warn('Target element not found in DOM');
      return true;
    }

    scrollContainer.scrollTop = Math.max(0, getElementOffsetTop(headingElement, scrollContainer) - headingScrollOffset);
    return true;
  };

  const handleLinkClick = (view: LinkEditorView, event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    const href = link?.getAttribute('href');

    if (!href) {
      return false;
    }

    if (href.startsWith('#')) {
      preventLinkDefault(event);
      const anchorId = decodeURIComponent(href.substring(1));
      return scrollToAnchor(view.dom, anchorId);
    }

    if (!isExternalLink(href)) {
      return false;
    }

    preventLinkDefault(event);
    const externalUrl = toExternalUrl(href);
    const openExternalUrl = options.openExternalUrl ?? openWithTauriShell;
    openExternalUrl(externalUrl).catch((err) => {
      console.error('Failed to open external link:', err);
    });
    return true;
  };

  const setupAnchorClickInterceptor = (editorElement: HTMLElement) => {
    if (anchorClickCleanup) {
      anchorClickCleanup();
    }

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');

      if (href?.startsWith('#')) {
        preventLinkDefault(event);
      }
    };

    editorElement.addEventListener('click', handleAnchorClick, true);
    anchorClickCleanup = () => {
      editorElement.removeEventListener('click', handleAnchorClick, true);
      anchorClickCleanup = null;
    };
  };

  const cleanupAnchorClickInterceptor = () => {
    anchorClickCleanup?.();
  };

  return {
    handleLinkClick,
    setupAnchorClickInterceptor,
    cleanupAnchorClickInterceptor
  };
}
