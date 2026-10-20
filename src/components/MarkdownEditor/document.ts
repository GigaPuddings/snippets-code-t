import {
  EditorState,
  Text,
  type Extension,
  type TransactionSpec
} from '@codemirror/state';
import { insertNewlineContinueMarkup } from '@codemirror/lang-markdown';
import { isolateHistory } from '@codemirror/commands';
import { markdownLanguageSupport } from '@/utils/markdown-language';
import { syntaxTree } from '@codemirror/language';
import type { EditorView } from '@codemirror/view';
import type { SyntaxNode } from '@lezer/common';

export type ViewMode = 'preview' | 'source' | 'reading';
export interface DocumentSelection {
  from: number;
  to: number;
  text: string;
  documentId: string;
  revision: number;
}

export function createDocumentState(
  content: string,
  extensions: Extension[] = []
) {
  return EditorState.create({
    doc: content,
    extensions: [
      EditorState.lineSeparator.of(content.includes('\r\n') ? '\r\n' : '\n'),
      markdownLanguageSupport(),
      ...extensions
    ]
  });
}

export function ancestorAt(
  state: EditorState,
  names: string[],
  pos = state.selection.main.head
): SyntaxNode | null {
  let node: SyntaxNode | null = syntaxTree(state).resolveInner(pos, -1);
  while (node) {
    if (names.includes(node.name)) return node;
    node = node.parent;
  }
  return null;
}

export function extractHeadings(state: EditorState) {
  const headings: Array<{ level: number; text: string; pos: number }> = [];
  syntaxTree(state).iterate({
    enter(node) {
      if (!/^(ATX|Setext)Heading[1-6]$/.test(node.name)) return;
      const raw = state.doc.sliceString(node.from, node.to);
      headings.push({
        level: Number(node.name.at(-1)),
        text: raw
          .replace(/^#{1,6}\s+/, '')
          .replace(/\n[=-]+\s*$/, '')
          .replace(/\s+#+\s*$/, ''),
        pos: node.from
      });
    }
  });
  return headings;
}

/** A click below a terminal, closed fence creates an editable prose paragraph. */
export function trailingCodeParagraph(
  state: EditorState
): TransactionSpec | null {
  if (state.readOnly) return null;
  const end = state.doc.length;
  const code = ancestorAt(state, ['FencedCode'], end);
  if (code?.to !== end || code.getChildren('CodeMark').length !== 2)
    return null;
  return {
    changes: { from: end, insert: Text.of(['', '', '']) },
    selection: { anchor: end + 2 },
    scrollIntoView: true,
    annotations: isolateHistory.of('full'),
    userEvent: 'input'
  };
}

/** Keep the product's explicit rule: Enter in an ordered item continues prose. */
export function insertMarkdownNewline(
  view: Pick<EditorView, 'state' | 'dispatch'>
): boolean {
  const { state } = view;
  const selection = state.selection.main;
  if (state.readOnly) return false;
  if (ancestorAt(state, ['FencedCode', 'CodeBlock'])) return false;
  const dispatch = (spec: TransactionSpec): void =>
    view.dispatch(
      state.update(spec, { scrollIntoView: true, userEvent: 'input' })
    );
  const line = state.doc.lineAt(selection.from);
  const emptyTask = /^(\s*)[-+*]\s+\[[ xX]\]\s*$/.exec(line.text);
  if (
    emptyTask &&
    ancestorAt(state, ['BulletList'], line.from + emptyTask[1].length + 1)
  ) {
    dispatch({
      changes: { from: line.from, to: selection.to, insert: emptyTask[1] },
      selection: { anchor: line.from + emptyTask[1].length },
      userEvent: 'input'
    });
    return true;
  }
  const quotePrefix = /^(?:[ \t]*>[ \t]?)+/.exec(line.text)?.[0] || '';
  const bodyLine = line.text.slice(quotePrefix.length);
  const ordered = /^(\s*)(\d+[.)])(\s+)(.*)$/.exec(bodyLine);
  const list = ancestorAt(state, ['OrderedList', 'BulletList']);
  const inOrdered =
    (list?.name === 'OrderedList' ? list : null) ||
    (!bodyLine.trim() &&
      line.number > 1 &&
      ancestorAt(
        state,
        ['OrderedList'],
        state.doc.line(line.number - 1).to - 1
      ));
  if (ordered && inOrdered) {
    if (!ordered[4].trim()) {
      dispatch({
        changes: { from: line.from, to: selection.to, insert: quotePrefix },
        selection: { anchor: line.from + quotePrefix.length }
      });
    } else {
      const indent =
        quotePrefix +
        ordered[1] +
        ' '.repeat(ordered[2].length + ordered[3].length);
      dispatch(state.replaceSelection(Text.of(['', indent])));
    }
    return true;
  }
  if (inOrdered) {
    if (!bodyLine.trim()) {
      const parentItem =
        inOrdered.parent?.name === 'ListItem' ? inOrdered.parent : null;
      const parentMark = parentItem?.getChild('ListMark');
      let indent = quotePrefix;
      if (parentMark) {
        const parentLine = state.doc.lineAt(parentMark.from);
        const gap =
          /^[ \t]*/.exec(
            state.doc.sliceString(parentMark.to, parentLine.to)
          )?.[0].length || 1;
        indent =
          state.doc.sliceString(parentLine.from, parentMark.from) +
          ' '.repeat(parentMark.to - parentMark.from + gap);
      }
      const insert = Text.of([quotePrefix.trimEnd(), indent]);
      dispatch({
        changes: { from: line.from, to: selection.to, insert },
        selection: { anchor: line.from + insert.length }
      });
    } else {
      dispatch(
        state.replaceSelection(
          Text.of(['', quotePrefix + (bodyLine.match(/^\s*/)?.[0] || '')])
        )
      );
    }
    return true;
  }
  return insertNewlineContinueMarkup(view as EditorView);
}

/** Match the legacy editor: typing the next marker ends an ordered item's prose. */
export function continueOrderedListOnMarkerSpace(
  view: {
    readonly state: EditorState;
    dispatch: (transaction: TransactionSpec) => void;
  },
  from = view.state.selection.main.from,
  to = view.state.selection.main.to
): boolean {
  const { state } = view;
  if (state.readOnly || from !== to || state.selection.ranges.length !== 1)
    return false;
  if (ancestorAt(state, ['FencedCode', 'CodeBlock'], from)) return false;
  const line = state.doc.lineAt(from);
  if (from !== line.to) return false;
  let item = ancestorAt(state, ['ListItem'], from);
  while (item && state.doc.lineAt(item.from).number === line.number) {
    let parent = item.parent;
    while (parent && parent.name !== 'ListItem') parent = parent.parent;
    item = parent;
  }
  const list = item?.parent;
  if (!item || list?.name !== 'OrderedList') return false;
  const firstMark = list.getChild('ListItem')?.getChild('ListMark');
  if (!firstMark) return false;
  const marker = state.doc.sliceString(firstMark.from, firstMark.to);
  let nextNumber = Number(marker.slice(0, -1)) + 1;
  for (
    let sibling = list.firstChild;
    sibling && sibling.from !== item.from;
    sibling = sibling.nextSibling
  ) {
    if (sibling.name === 'ListItem') nextNumber++;
  }
  const parentLine = state.doc.lineAt(item.from);
  const prefix = state.doc.sliceString(parentLine.from, item.from);
  const quotePrefix = /^(?:[ \t]*>[ \t]?)+/.exec(prefix)?.[0] || '';
  if (!line.text.startsWith(quotePrefix)) return false;
  const typed = /^[ \t]*(\d+)([.)])$/.exec(line.text.slice(quotePrefix.length));
  if (!typed || Number(typed[1]) !== nextNumber || typed[2] !== marker.at(-1))
    return false;
  const insert = prefix + typed[1] + typed[2] + ' ';
  view.dispatch({
    changes: { from: line.from, to, insert },
    selection: { anchor: line.from + insert.length },
    scrollIntoView: true,
    userEvent: 'input'
  });
  return true;
}

export function wrapSelection(
  view: EditorView,
  before: string,
  after = before
) {
  if (view.state.readOnly) return;
  const { from, to } = view.state.selection.main;
  const text = view.state.sliceDoc(from, to);
  const nodeNames: Record<string, string[]> = {
    '**': ['StrongEmphasis'],
    '*': ['Emphasis'],
    '~~': ['Strikethrough'],
    '`': ['InlineCode']
  };
  const enclosing =
    before === after && nodeNames[before]
      ? ancestorAt(view.state, nodeNames[before], from)
      : null;
  if (enclosing && to <= enclosing.to) {
    const marks = ['EmphasisMark', 'StrikethroughMark', 'CodeMark'].flatMap(
      (name) => enclosing.getChildren(name)
    );
    if (marks.length >= 2) {
      const first = marks[0],
        last = marks[marks.length - 1];
      const contentFrom = first.to,
        contentTo = last.from;
      const start = Math.max(contentFrom, Math.min(from, contentTo));
      const end = Math.max(start, Math.min(to, contentTo));
      const delimiter = view.state.doc.sliceString(first.from, first.to);
      const body = view.state.doc.sliceString(contentFrom, contentTo);
      const left = view.state.doc.sliceString(contentFrom, start);
      const right = view.state.doc.sliceString(end, contentTo);
      const leftPart = left ? delimiter + left + delimiter : '';
      const insert =
        from === to
          ? body
          : leftPart +
            view.state.doc.sliceString(start, end) +
            (right ? delimiter + right + delimiter : '');
      const anchor =
        enclosing.from + (from === to ? start - contentFrom : leftPart.length);
      view.dispatch({
        changes: { from: enclosing.from, to: enclosing.to, insert },
        selection: { anchor, head: anchor + (from === to ? 0 : end - start) },
        scrollIntoView: true,
        userEvent: 'input.format'
      });
      view.focus();
      return;
    }
  }
  const wrapped =
    text.startsWith(before) &&
    text.endsWith(after) &&
    text.length >= before.length + after.length;
  const insert = wrapped
    ? text.slice(before.length, text.length - after.length)
    : before + text + after;
  view.dispatch({
    changes: { from, to, insert },
    selection: {
      anchor: from + (wrapped ? 0 : before.length),
      head: from + insert.length - (wrapped ? 0 : after.length)
    },
    scrollIntoView: true
  });
  view.focus();
}

export function prefixSelection(view: EditorView, prefix: string) {
  if (view.state.readOnly) return;
  const { from, to } = view.state.selection.main;
  const start = view.state.doc.lineAt(from).from;
  const end = view.state.doc.lineAt(
    to > from && view.state.doc.lineAt(to).from === to ? to - 1 : to
  ).to;
  const lines = view.state.doc.sliceString(start, end).split('\n');
  const remove = prefix && lines.every((line) => line.startsWith(prefix));
  const insert = lines
    .map((line) =>
      remove
        ? line.slice(prefix.length)
        : prefix +
          line.replace(
            /^(?:#{1,6}\s+|>\s+|[-+*]\s+(?:\[[ xX]\]\s+)?|\d+[.)]\s+)/,
            ''
          )
    )
    .join('\n');
  view.dispatch({
    changes: { from: start, to: end, insert },
    selection: { anchor: start + insert.length },
    scrollIntoView: true
  });
  view.focus();
}

export function clearSelectionFormatting(view: EditorView) {
  if (view.state.readOnly) return;
  const { from, to } = view.state.selection.main;
  if (from === to) return;
  const changes: Array<{ from: number; to?: number; insert?: string }> = [];
  let closeBeforeSelection = '';
  let reopenAfterSelection = '';
  syntaxTree(view.state).iterate({
    enter(node) {
      if (
        node.from >= to ||
        node.to <= from ||
        !['StrongEmphasis', 'Emphasis', 'Strikethrough', 'InlineCode'].includes(
          node.name
        )
      )
        return;
      const marks = ['EmphasisMark', 'StrikethroughMark', 'CodeMark'].flatMap(
        (name) => node.node.getChildren(name)
      );
      if (marks.length < 2) return;
      const first = marks[0],
        last = marks[marks.length - 1];
      if (from >= last.from || to <= first.to) return;
      const delimiter = view.state.sliceDoc(first.from, first.to);
      if (from <= first.to) changes.push({ from: first.from, to: first.to });
      else closeBeforeSelection = delimiter + closeBeforeSelection;
      if (to >= last.from) changes.push({ from: last.from, to: last.to });
      else reopenAfterSelection += delimiter;
    }
  });
  if (closeBeforeSelection)
    changes.push({ from, insert: closeBeforeSelection });
  if (reopenAfterSelection)
    changes.push({ from: to, insert: reopenAfterSelection });
  if (!changes.length) return;
  const changeSet = view.state.changes(changes.sort((a, b) => a.from - b.from));
  view.dispatch({
    changes: changeSet,
    selection: {
      anchor: changeSet.mapPos(from, 1),
      head: changeSet.mapPos(to, -1)
    },
    userEvent: 'input.format'
  });
  view.focus();
}

export function selectionIsCurrent(
  selection: DocumentSelection,
  documentId: string,
  revision: number
) {
  return selection.documentId === documentId && selection.revision === revision;
}
