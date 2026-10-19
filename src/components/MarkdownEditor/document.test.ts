import { describe, expect, it } from 'vitest';
import {
  Compartment,
  type Transaction,
  type TransactionSpec
} from '@codemirror/state';
import { history, undo, redo } from '@codemirror/commands';
import { syntaxTree } from '@codemirror/language';
import { EditorView } from '@codemirror/view';
import {
  createDocumentState,
  continueOrderedListOnMarkerSpace,
  clearSelectionFormatting,
  extractHeadings,
  insertMarkdownNewline,
  prefixSelection,
  wrapSelection,
  selectionIsCurrent
} from './document';
import { livePreview, previewTargets } from './preview';

function pressEnter(text: string, position = text.length) {
  let state = createDocumentState(text);
  state = state.update({ selection: { anchor: position } }).state;
  const view = {
    get state() {
      return state;
    },
    dispatch(transaction: Transaction | TransactionSpec) {
      state =
        'state' in transaction
          ? transaction.state
          : state.update(transaction).state;
    }
  };
  const handled = insertMarkdownNewline(
    view as Parameters<typeof insertMarkdownNewline>[0]
  );
  return {
    handled,
    content: state.sliceDoc(),
    position: state.selection.main.head
  };
}

function commandView(text: string, from: number, to = from) {
  let state = createDocumentState(text);
  state = state.update({ selection: { anchor: from, head: to } }).state;
  return {
    get state() {
      return state;
    },
    dispatch(transaction: Transaction | TransactionSpec) {
      state =
        'state' in transaction
          ? transaction.state
          : state.update(transaction).state;
    },
    focus() {}
  };
}

const options = {
  workspaceRoot: '',
  onImage() {},
  onLink() {},
  codeLanguageLabel: 'Edit language',
  copyCodeLabel: 'Copy',
  plainTextLabel: 'Plain Text',
  imageScale: 100,
  responsiveImages: true,
  showImagePath: false
};

function previewMarkers(content: string) {
  let state = createDocumentState(content + '\n\nEND', [livePreview(options)]);
  state = state.update({ selection: { anchor: state.doc.length } }).state;
  const markers: string[] = [];
  for (const decorations of state.facet(EditorView.decorations)) {
    if (typeof decorations === 'function') continue;
    decorations.between(0, state.doc.length, (_from, _to, decoration) => {
      const widget = decoration.spec.widget;
      if (widget && typeof widget.text === 'string') markers.push(widget.text);
    });
  }
  return markers;
}

describe('Markdown source document', () => {
  it.each([
    ['1. question\n   2.', '1. question\n2. '],
    ['1. question\n   answer\n   2.', '1. question\n   answer\n2. '],
    ['3. first\n1. second\n   5.', '3. first\n1. second\n5. '],
    ['1. parent\n   1. child\n      2.', '1. parent\n   1. child\n   2. '],
    ['> 1. question\n>    2.', '> 1. question\n> 2. ']
  ])(
    'promotes an explicitly typed next number from prose to a sibling: %s',
    (source, expected) => {
      const view = commandView(source, source.length);
      expect(
        continueOrderedListOnMarkerSpace(
          view as Parameters<typeof continueOrderedListOnMarkerSpace>[0]
        )
      ).toBe(true);
      expect(view.state.sliceDoc()).toBe(expected);
    }
  );

  it.each([
    '1. question\n   1.',
    '1. question\n   answer 2.',
    '1. question\n   4.',
    '```\n1. code\n   2.\n```'
  ])('leaves nested or literal markers alone: %s', (source) => {
    const view = commandView(
      source,
      source.endsWith('```') ? source.length - 4 : source.length
    );
    expect(
      continueOrderedListOnMarkerSpace(
        view as Parameters<typeof continueOrderedListOnMarkerSpace>[0]
      )
    ).toBe(false);
    expect(view.state.sliceDoc()).toBe(source);
  });
  it.each([
    ['1. first\n1. second\n1. third', ['1.', '2.', '3.']],
    ['3. first\n9. second\n20. third', ['3.', '4.', '5.']],
    ['0. first\n0. second', ['0.', '1.']],
    ['1) first\n2) second', ['1.', '2.']],
    [
      '1. parent\n   3. child\n   1. next child\n1. sibling',
      ['1.', '3.', '4.', '2.']
    ],
    ['> 1. first\n> 1. second', ['1.', '2.']]
  ])(
    'renders ordered markers with reading-view numbering: %s',
    (source, expected) => {
      expect(previewMarkers(source)).toEqual(expected);
    }
  );
  it('preserves CRLF, indentation, hard breaks, blank lines and HTML across preview changes and undo', () => {
    const original =
      '\r\n    indented code\r\n\r\n1. question  \r\n   answer\r\n\r\n<img src="../assets/Java/image.png" data-image-scale="75">\r\n\r\n';
    const mode = new Compartment();
    let state = createDocumentState(original, [history(), mode.of([])]);
    for (const extension of [livePreview(options), [], livePreview(options)]) {
      state = state.update({ effects: mode.reconfigure(extension) }).state;
      expect(state.sliceDoc()).toBe(original);
    }
    state = state.update({ changes: { from: 0, insert: '修改' } }).state;
    const target = {
      get state() {
        return state;
      },
      dispatch(transaction: Transaction | TransactionSpec) {
        state =
          'state' in transaction
            ? transaction.state
            : state.update(transaction).state;
      }
    };
    expect(undo(target)).toBe(true);
    expect(state.sliceDoc()).toBe(original);
    expect(redo(target)).toBe(true);
    expect(state.sliceDoc()).toBe('修改' + original);
  });

  it('continues numbered items as prose without generating another number', () => {
    expect(pressEnter('1. question').content).toBe('1. question\n   ');
    expect(pressEnter('1. question\n   answer').content).toBe(
      '1. question\n   answer\n   '
    );
    expect(pressEnter('1. question\n   ').content).toBe('1. question\n\n');
    expect(pressEnter('1. ').content).toBe('');
    expect(pressEnter('1. parent\n   1. child').content).toBe(
      '1. parent\n   1. child\n      '
    );
  });

  it('exits only the current ordered-list level and preserves quote containers', () => {
    expect(pressEnter('1. parent\n   1. child\n      ').content).toBe(
      '1. parent\n   1. child\n\n   '
    );
    expect(pressEnter('> 1. question').content).toBe('> 1. question\n>    ');
    expect(pressEnter('> 1. question\n>    ').content).toBe(
      '> 1. question\n>\n> '
    );
  });

  it('keeps bullet continuation while leaving letter prefixes and code to normal text commands', () => {
    expect(pressEnter('- item').content).toBe('- item\n- ');
    expect(pressEnter('- [ ] item').content).toBe('- [ ] item\n- [ ] ');
    expect(pressEnter('a. answer').handled).toBe(false);
    expect(pressEnter('i. answer').handled).toBe(false);
    expect(pressEnter('```java\n1. answer\n```', 17).handled).toBe(false);
  });

  it('exits empty task items instead of inserting a blank line before the marker', () => {
    expect(pressEnter('- [ ] ').content).toBe('');
    expect(pressEnter('- [x] ').content).toBe('');
    expect(pressEnter('- [ ] first\n- [ ] ').content).toBe('- [ ] first\n');
  });

  it('recognizes headings, GFM tables and wiki links only outside code', () => {
    const state = createDocumentState(
      '# 标题\n\n[[Java]] and `[[literal]]`\n\n```\n[[code]]\n```\n\n| A | B |\n| --- | --- |\n| a | b |'
    );
    expect(extractHeadings(state)).toEqual([
      { level: 1, text: '标题', pos: 0 }
    ]);
    const links: string[] = [];
    syntaxTree(state).iterate({
      enter(node) {
        if (node.name === 'WikiLink')
          links.push(state.doc.sliceString(node.from, node.to));
      }
    });
    expect(links).toEqual(['[[Java]]']);
    expect(previewTargets(state).map((target) => target.kind)).toEqual([
      'table'
    ]);
    expect(() =>
      createDocumentState('# 标题\n\n[[Java]] and **强调**\n\n末尾', [
        livePreview(options)
      ])
    ).not.toThrow();
  });

  it('rejects stale AI and clipboard replacement snapshots after edits or navigation', () => {
    const snapshot = {
      from: 1,
      to: 3,
      text: '选区',
      documentId: 'Java.md',
      revision: 5
    };
    expect(selectionIsCurrent(snapshot, 'Java.md', 5)).toBe(true);
    expect(selectionIsCurrent(snapshot, 'Java.md', 6)).toBe(false);
    expect(selectionIsCurrent(snapshot, 'Other.md', 5)).toBe(false);
  });

  it('toggles existing inline marks using the text selection or caret inside them', () => {
    const view = commandView('**bold**', 2, 6);
    wrapSelection(view as Parameters<typeof wrapSelection>[0], '**');
    expect(view.state.sliceDoc()).toBe('bold');
    expect(
      view.state.sliceDoc(
        view.state.selection.main.from,
        view.state.selection.main.to
      )
    ).toBe('bold');
    const caret = commandView('__bold__', 4);
    wrapSelection(caret as Parameters<typeof wrapSelection>[0], '**');
    expect(caret.state.sliceDoc()).toBe('bold');
    const code = commandView('`a*b`', 1, 4);
    wrapSelection(code as Parameters<typeof wrapSelection>[0], '`');
    expect(code.state.sliceDoc()).toBe('a*b');
  });

  it('does not prefix the next unselected line when a selection ends at its start', () => {
    const view = commandView('one\ntwo\nthree', 0, 4);
    prefixSelection(view as Parameters<typeof prefixSelection>[0], '> ');
    expect(view.state.sliceDoc()).toBe('> one\ntwo\nthree');
  });

  it('clears parsed inline marks while preserving literal characters and fenced code', () => {
    const source = '**bold** and `a*b` and 2 * 3\n\n```\n**literal**\n```';
    const view = commandView(source, 0, source.length);
    clearSelectionFormatting(
      view as Parameters<typeof clearSelectionFormatting>[0]
    );
    expect(view.state.sliceDoc()).toBe(
      'bold and a*b and 2 * 3\n\n```\n**literal**\n```'
    );
  });

  it('clears only the selected part of an inline format', () => {
    const view = commandView('**abcdef**', 4, 6);
    clearSelectionFormatting(
      view as Parameters<typeof clearSelectionFormatting>[0]
    );
    expect(view.state.sliceDoc()).toBe('**ab**cd**ef**');
    expect(
      view.state.sliceDoc(
        view.state.selection.main.from,
        view.state.selection.main.to
      )
    ).toBe('cd');
  });
});
