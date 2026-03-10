import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';

export interface SearchMatch {
  from: number;
  to: number;
}

export interface SearchHighlightOptions {
  getMatches: () => SearchMatch[];
  getCurrentIndex: () => number;
}

/**
 * 搜索高亮扩展 - 使用 Decoration 显示搜索结果
 */
export const SearchHighlight = Extension.create<SearchHighlightOptions>({
  name: 'searchHighlight',

  addOptions() {
    return {
      getMatches: () => [],
      getCurrentIndex: () => -1
    };
  },

  addProseMirrorPlugins() {
    const { getMatches, getCurrentIndex } = this.options;

    return [
      new Plugin({
        key: new PluginKey('searchHighlight'),
        props: {
          decorations: (state) => {
            const matches = getMatches();
            if (!matches || matches.length === 0) {
              return DecorationSet.empty;
            }

            const currentIndex = getCurrentIndex();
            const decorations: Decoration[] = [];

            for (let i = 0; i < matches.length; i++) {
              const match = matches[i];
              const isCurrent = i === currentIndex;
              const decoration = Decoration.inline(match.from, match.to, {
                class: isCurrent
                  ? 'search-highlight search-highlight-current'
                  : 'search-highlight'
              });
              decorations.push(decoration);
            }

            return DecorationSet.create(state.doc, decorations);
          }
        }
      })
    ];
  }
});
