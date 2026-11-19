import { getSearchQuery } from '@codemirror/search';
import {
  Decoration,
  ViewPlugin,
  type DecorationSet,
  type EditorView,
  type ViewUpdate
} from '@codemirror/view';

const matchMark = Decoration.mark({ class: 'cm-searchMatch' });
const currentMatchMark = Decoration.mark({
  class: 'cm-searchMatch cm-searchMatch-selected'
});

function searchHighlights(editor: EditorView): DecorationSet {
  const { state, visibleRanges } = editor;
  const query = getSearchQuery(state);
  if (!query.valid) return Decoration.none;
  const selection = state.selection.main;
  const ranges = [];
  for (const { from, to } of visibleRanges) {
    const cursor = query.getCursor(state, from, to);
    for (let match = cursor.next(); !match.done; match = cursor.next()) {
      const { from, to } = match.value;
      const mark =
        from === selection.from && to === selection.to
          ? currentMatchMark
          : matchMark;
      ranges.push(mark.range(from, to));
    }
  }
  return Decoration.set(ranges, true);
}

export const editorSearchHighlights = ViewPlugin.define(
  (editor) => ({
    decorations: searchHighlights(editor),
    update(update: ViewUpdate): void {
      if (
        update.docChanged ||
        update.selectionSet ||
        update.viewportChanged ||
        getSearchQuery(update.startState) !== getSearchQuery(update.state)
      )
        this.decorations = searchHighlights(update.view);
    }
  }),
  { decorations: (plugin) => plugin.decorations }
);
