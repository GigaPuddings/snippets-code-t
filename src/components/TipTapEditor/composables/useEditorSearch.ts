import { ref, type Ref } from 'vue';

export interface SearchMatch {
  from: number;
  to: number;
}

/**
 * TipTap 编辑器搜索功能 Composable
 *
 * @param editor - 编辑器实例
 * @returns 搜索相关的状态和方法
 */
export function useEditorSearch(editor: Ref<any | null>) {
  const showSearch = ref(false);
  const searchMatches = ref<SearchMatch[]>([]);
  const currentSearchIndex = ref(-1);

  /**
   * 打开搜索面板
   */
  const openSearch = () => {
    showSearch.value = true;
  };

  /**
   * 关闭搜索面板
   */
  const closeSearch = () => {
    showSearch.value = false;
    clearSearchHighlights();
  };

  /**
   * 执行搜索
   */
  const handleSearch = (query: string, matchCase: boolean) => {
    if (!editor.value || !query) {
      clearSearchHighlights();
      return;
    }

    const doc = editor.value.state.doc;
    const matches: SearchMatch[] = [];
    const flags = matchCase ? 'g' : 'gi';
    const searchRegex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);

    doc.descendants((node: any, pos: number) => {
      if (node.isText && node.text) {
        searchRegex.lastIndex = 0;
        let match;
        while ((match = searchRegex.exec(node.text)) !== null) {
          matches.push({
            from: pos + match.index,
            to: pos + match.index + match[0].length
          });
        }
      }
    });

    searchMatches.value = matches;
    currentSearchIndex.value = matches.length > 0 ? 0 : -1;

    if (matches.length > 0) {
      scrollToMatch(0);
    }
  };

  /**
   * 查找下一个匹配
   */
  const findNext = () => {
    if (searchMatches.value.length === 0) return;
    currentSearchIndex.value = (currentSearchIndex.value + 1) % searchMatches.value.length;
    scrollToMatch(currentSearchIndex.value);
  };

  /**
   * 查找上一个匹配
   */
  const findPrevious = () => {
    if (searchMatches.value.length === 0) return;
    currentSearchIndex.value = currentSearchIndex.value <= 0
      ? searchMatches.value.length - 1
      : currentSearchIndex.value - 1;
    scrollToMatch(currentSearchIndex.value);
  };

  /**
   * 滚动到指定匹配位置
   */
  const scrollToMatch = (index: number) => {
    if (!editor.value || index < 0 || index >= searchMatches.value.length) return;

    const match = searchMatches.value[index];
    editor.value.commands.setTextSelection({ from: match.from, to: match.to });
    editor.value.commands.focus();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!editor.value) return;

        const { view } = editor.value;
        const scrollContainer = view.dom as HTMLElement;
        const domSelection = window.getSelection();

        if (!domSelection || domSelection.rangeCount === 0) {
          const coords = view.coordsAtPos(match.from);
          const containerRect = scrollContainer.getBoundingClientRect();
          const relativeTop = coords.top - containerRect.top + scrollContainer.scrollTop;

          scrollContainer.scrollTo({
            top: Math.max(0, relativeTop - 100),
            behavior: 'smooth'
          });
          return;
        }

        const range = domSelection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const relativeTop = rect.top - containerRect.top + scrollContainer.scrollTop;
        const isVisible = rect.top >= containerRect.top && rect.bottom <= containerRect.bottom;

        if (!isVisible) {
          scrollContainer.scrollTo({
            top: Math.max(0, relativeTop - 100),
            behavior: 'smooth'
          });
        }
      });
    });
  };

  /**
   * 清除搜索高亮
   */
  const clearSearchHighlights = () => {
    searchMatches.value = [];
    currentSearchIndex.value = -1;
    editor.value?.commands.blur();
  };

  return {
    showSearch,
    searchMatches,
    currentSearchIndex,
    openSearch,
    closeSearch,
    handleSearch,
    findNext,
    findPrevious,
    scrollToMatch,
    clearSearchHighlights
  };
}
