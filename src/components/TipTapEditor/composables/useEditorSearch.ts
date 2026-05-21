import { nextTick, ref } from 'vue';

export interface SearchMatch {
  from: number;
  to: number;
}

interface UseEditorSearchOptions {
  getEditor: () => any | null | undefined;
  focusSearchPanel?: () => void;
  updateMatchInfo?: (currentIndex: number, total: number) => void;
}

export function useEditorSearch(options: UseEditorSearchOptions) {
  const showSearch = ref(false);
  const searchMatches = ref<SearchMatch[]>([]);
  const currentSearchIndex = ref(-1);

  const openSearch = () => {
    showSearch.value = true;
    nextTick(() => {
      options.focusSearchPanel?.();
    });
  };

  const closeSearch = () => {
    showSearch.value = false;
    clearSearchHighlights();
  };

  const handleSearch = (query: string, matchCase: boolean) => {
    const editor = options.getEditor();

    if (!editor || !query) {
      clearSearchHighlights();
      return;
    }

    const doc = editor.state.doc;
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

    searchMatches.value = [...matches];
    currentSearchIndex.value = -1;
    options.updateMatchInfo?.(currentSearchIndex.value, matches.length);

    if (editor.view && matches.length > 0) {
      const view = editor.view;
      const { state } = view;
      const tr = state.tr;
      if (doc.content.size > 0) {
        const tempText = state.schema.text('\u200B');
        if (tempText) {
          tr.insert(doc.content.size, tempText);
          tr.delete(doc.content.size, doc.content.size + 1);
          view.dispatch(tr);
        }
      }
    }
  };

  const findNext = () => {
    if (searchMatches.value.length === 0) return;

    if (currentSearchIndex.value === -1) {
      currentSearchIndex.value = 0;
    } else {
      currentSearchIndex.value = (currentSearchIndex.value + 1) % searchMatches.value.length;
    }

    options.updateMatchInfo?.(currentSearchIndex.value, searchMatches.value.length);
    scrollToMatch(currentSearchIndex.value, true);
  };

  const findPrevious = () => {
    if (searchMatches.value.length === 0) return;

    if (currentSearchIndex.value === -1) {
      currentSearchIndex.value = searchMatches.value.length - 1;
    } else {
      currentSearchIndex.value = currentSearchIndex.value <= 0
        ? searchMatches.value.length - 1
        : currentSearchIndex.value - 1;
    }

    options.updateMatchInfo?.(currentSearchIndex.value, searchMatches.value.length);
    scrollToMatch(currentSearchIndex.value, true);
  };

  const scrollToMatch = (index: number, shouldFocusEditor: boolean = false) => {
    const editor = options.getEditor();
    if (!editor || index < 0 || index >= searchMatches.value.length) return;

    const match = searchMatches.value[index];
    editor.commands.setTextSelection({ from: match.from, to: match.to });

    if (shouldFocusEditor) {
      editor.commands.focus();
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const currentEditor = options.getEditor();
        if (!currentEditor) return;

        const { view } = currentEditor;
        const scrollContainer = view.dom as HTMLElement;
        const coords = view.coordsAtPos(match.from);
        const containerRect = scrollContainer.getBoundingClientRect();
        const relativeTop = coords.top - containerRect.top + scrollContainer.scrollTop;
        const isVisible =
          coords.top >= containerRect.top && coords.bottom <= containerRect.bottom;

        if (!isVisible) {
          scrollContainer.scrollTo({
            top: Math.max(0, relativeTop - 100),
            behavior: 'smooth'
          });
        }
      });
    });
  };

  const clearSearchHighlights = () => {
    searchMatches.value = [];
    currentSearchIndex.value = -1;
    options.updateMatchInfo?.(-1, 0);
    options.getEditor()?.commands.blur();
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
