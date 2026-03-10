import { ref, type Ref } from 'vue';

export interface Heading {
  level: number;
  text: string;
  pos: number;
}

/**
 * TipTap 编辑器大纲功能 Composable
 *
 * @param editor - 编辑器实例
 * @param viewMode - 当前视图模式
 * @returns 大纲相关的状态和方法
 */
export function useEditorOutline(
  editor: Ref<any | null>,
  viewMode: Ref<'reading' | 'preview' | 'source'>,
  sourceContent: Ref<string>
) {
  const showOutline = ref(false);
  const headings = ref<Heading[]>([]);
  const visibleHeadingIndex = ref(-1);
  const currentCursorPos = ref(0);

  // 标题跳转时的顶部偏移量
  const HEADING_SCROLL_OFFSET = 120;

  /**
   * 从 TipTap 文档中提取标题
   */
  const extractHeadings = () => {
    if (!editor.value) {
      headings.value = [];
      return;
    }

    const newHeadings: Heading[] = [];

    editor.value.state.doc.descendants((node: any, pos: number) => {
      if (node.type.name === 'heading') {
        newHeadings.push({
          level: node.attrs.level,
          text: node.textContent,
          pos: pos
        });
      }
    });

    headings.value = newHeadings;
  };

  /**
   * 从源码中提取标题
   */
  const extractHeadingsFromSource = () => {
    const lines = sourceContent.value.split('\n');
    const newHeadings: Heading[] = [];

    lines.forEach((line, index) => {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        newHeadings.push({
          level,
          text,
          pos: index
        });
      }
    });

    headings.value = newHeadings;
  };

  /**
   * 提取标题（根据视图模式自动选择）
   */
  const extractHeadingsAuto = () => {
    if (viewMode.value === 'source') {
      extractHeadingsFromSource();
    } else {
      extractHeadings();
    }
  };

  /**
   * 计算可视区域内的标题（预览模式）
   */
  const updateVisibleHeading = () => {
    // 源码模式使用专门的函数
    if (viewMode.value === 'source') {
      return;
    }

    if (!editor.value || headings.value.length === 0) {
      visibleHeadingIndex.value = -1;
      return;
    }

    const scrollContainer = editor.value.view.dom as HTMLElement;
    if (!scrollContainer) {
      visibleHeadingIndex.value = -1;
      return;
    }

    const scrollTop = scrollContainer.scrollTop;
    const viewportHeight = scrollContainer.clientHeight;
    const viewportCenter = scrollTop + viewportHeight * 0.2;

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

      if (element) {
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
      }
    });

    visibleHeadingIndex.value = closestIndex;
  };

  /**
   * 跳转到指定标题
   */
  const jumpToHeading = (pos: number) => {
    if (!editor.value) return;

    try {
      const scrollContainer = editor.value.view.dom as HTMLElement;
      const allHeadingElements = scrollContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');

      const targetHeading = headings.value.find(h => h.pos === pos);
      if (!targetHeading) {
        console.warn('Target heading not found for pos:', pos);
        return;
      }

      let targetElement: HTMLElement | null = null;
      allHeadingElements.forEach((el: Element) => {
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

        const targetScroll = Math.max(0, elementTop - HEADING_SCROLL_OFFSET);
        scrollContainer.scrollTop = targetScroll;
      } else {
        console.warn('Target element not found in DOM');
      }
    } catch (error) {
      console.error('Failed to scroll to heading:', error);
    }
  };

  /**
   * 切换大纲面板
   */
  const toggleOutline = () => {
    showOutline.value = !showOutline.value;
    if (showOutline.value) {
      extractHeadingsAuto();
    }
    return showOutline.value;
  };

  return {
    showOutline,
    headings,
    visibleHeadingIndex,
    currentCursorPos,
    extractHeadings,
    extractHeadingsFromSource,
    extractHeadingsAuto,
    updateVisibleHeading,
    jumpToHeading,
    toggleOutline
  };
}
