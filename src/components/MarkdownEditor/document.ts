import {
  EditorState,
  Text,
  type ChangeSpec,
  type Extension,
  type TransactionSpec
} from '@codemirror/state';
import { insertNewlineContinueMarkupCommand } from '@codemirror/lang-markdown';
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
    doc: Text.of(content.split(/\r\n?|\n/)),
    extensions: [
      EditorState.lineSeparator.of(content.includes('\r\n') ? '\r\n' : '\n'),
      // lineSeparator controls serialization and string insertion. Commands,
      // attachments and paste may use a different separator, so repair embedded
      // separators into Text lines in the same transaction (including undo).
      EditorState.transactionFilter.of((transaction) => {
        if (!transaction.docChanged) return transaction;
        const changes: ChangeSpec[] = [];
        transaction.changes.iterChanges((_from, _to, from, _end, inserted) => {
          let position = from;
          inserted.toJSON().forEach((line, index) => {
            for (const match of line.matchAll(/\r\n?|\n/g)) {
              const start = position + match.index;
              // A CR before an existing Text line break belongs to that CRLF.
              const beforeBreak =
                match[0] === '\r' &&
                match.index === line.length - 1 &&
                index < inserted.lines - 1;
              changes.push({
                from: start,
                to: start + match[0].length,
                insert: beforeBreak ? '' : Text.of(['', ''])
              });
            }
            position += line.length + 1;
          });
        });
        return changes.length
          ? [transaction, { changes, sequential: true }]
          : transaction;
      }),
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

export const insertMarkdownNewline = insertNewlineContinueMarkupCommand();

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

/** Insert a block fence on its own line, even when the caret is indented. */
export function insertFencedCodeBlock(view: {
  readonly state: EditorState;
  dispatch: (transaction: TransactionSpec) => void;
  focus: () => void;
}) {
  const { state } = view;
  if (state.readOnly) return;
  const { from, to } = state.selection.main;
  const firstLine = state.doc.lineAt(from);
  const lastLine = state.doc.lineAt(to);
  const before = state.doc.sliceString(firstLine.from, from);
  const endsAtLineStart = to > from && lastLine.from === to;
  const after = endsAtLineStart ? '' : state.doc.sliceString(to, lastLine.to);
  const replaceFrom = before.trim() ? from : firstLine.from;
  const replaceTo = after.trim() || endsAtLineStart ? to : lastLine.to;
  const selected = state.doc.sliceString(from, to);
  const code = endsAtLineStart ? selected.slice(0, -1) : selected;
  const leading = before.trim() ? '\n' : '';
  const trailing =
    after.trim() || (endsAtLineStart && to < state.doc.length) ? '\n' : '';
  const insert = Text.of(
    `${leading}\`\`\`\n${code}\n\`\`\`${trailing}`.split('\n')
  );
  const anchor = replaceFrom + leading.length + 4;
  view.dispatch({
    changes: { from: replaceFrom, to: replaceTo, insert },
    selection: { anchor, head: anchor + code.length },
    scrollIntoView: true,
    userEvent: 'input.format'
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
