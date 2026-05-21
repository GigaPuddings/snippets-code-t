import { nextTick } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useEditorSearch } from './useEditorSearch';

const installAnimationFrame = () => {
  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    callback(0);
    return 1;
  });
};

afterEach(() => {
  vi.unstubAllGlobals();
});

const createEditor = () => {
  const dispatch = vi.fn();
  const scrollTo = vi.fn();
  const focus = vi.fn();
  const blur = vi.fn();
  const setTextSelection = vi.fn();
  const tr = {
    insert: vi.fn(() => tr),
    delete: vi.fn(() => tr)
  };

  const editor = {
    state: {
      doc: {
        content: { size: 20 },
        descendants: vi.fn((callback: (node: any, pos: number) => void) => {
          callback({ isText: true, text: 'Alpha beta alpha' }, 1);
        })
      }
    },
    commands: {
      setTextSelection,
      focus,
      blur
    },
    view: {
      dom: {
        scrollTop: 10,
        getBoundingClientRect: vi.fn(() => ({ top: 100, bottom: 200 })),
        scrollTo
      },
      coordsAtPos: vi.fn(() => ({ top: 260, bottom: 280 })),
      dispatch,
      state: {
        schema: { text: vi.fn(() => ({ type: 'text' })) },
        tr
      }
    }
  };

  return {
    editor,
    dispatch,
    focus,
    blur,
    setTextSelection,
    scrollTo
  };
};

describe('useEditorSearch', () => {
  it('opens the panel and focuses the search input on next tick', async () => {
    const focusSearchPanel = vi.fn();
    const { editor } = createEditor();
    const search = useEditorSearch({
      getEditor: () => editor,
      focusSearchPanel
    });

    search.openSearch();
    await nextTick();

    expect(search.showSearch.value).toBe(true);
    expect(focusSearchPanel).toHaveBeenCalledTimes(1);
  });

  it('collects matches without selecting the first result automatically', () => {
    const { editor, dispatch } = createEditor();
    const updateMatchInfo = vi.fn();
    const search = useEditorSearch({
      getEditor: () => editor,
      updateMatchInfo
    });

    search.handleSearch('alpha', false);

    expect(search.searchMatches.value).toEqual([
      { from: 1, to: 6 },
      { from: 12, to: 17 }
    ]);
    expect(search.currentSearchIndex.value).toBe(-1);
    expect(updateMatchInfo).toHaveBeenCalledWith(-1, 2);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('selects and focuses the next match when navigating', () => {
    installAnimationFrame();
    const { editor, focus, setTextSelection } = createEditor();
    const updateMatchInfo = vi.fn();
    const search = useEditorSearch({
      getEditor: () => editor,
      updateMatchInfo
    });
    search.searchMatches.value = [{ from: 3, to: 7 }];

    search.findNext();

    expect(search.currentSearchIndex.value).toBe(0);
    expect(updateMatchInfo).toHaveBeenCalledWith(0, 1);
    expect(setTextSelection).toHaveBeenCalledWith({ from: 3, to: 7 });
    expect(focus).toHaveBeenCalledTimes(1);
  });

  it('clears matches and resets panel match info', () => {
    const { editor, blur } = createEditor();
    const updateMatchInfo = vi.fn();
    const search = useEditorSearch({
      getEditor: () => editor,
      updateMatchInfo
    });
    search.searchMatches.value = [{ from: 3, to: 7 }];
    search.currentSearchIndex.value = 0;

    search.clearSearchHighlights();

    expect(search.searchMatches.value).toEqual([]);
    expect(search.currentSearchIndex.value).toBe(-1);
    expect(updateMatchInfo).toHaveBeenCalledWith(-1, 0);
    expect(blur).toHaveBeenCalledTimes(1);
  });
});
