import { describe, expect, it } from 'vitest';
import {
  Compartment,
  EditorState,
  type Transaction,
  type TransactionSpec
} from '@codemirror/state';
import { history, undo, redo } from '@codemirror/commands';
import { syntaxTree } from '@codemirror/language';
import { EditorView } from '@codemirror/view';
import {
  createDocumentState,
  ancestorAt,
  clearSelectionFormatting,
  extractHeadings,
  insertFencedCodeBlock,
  insertMarkdownNewline,
  prefixSelection,
  wrapSelection,
  selectionIsCurrent,
  trailingCodeParagraph
} from './document';
import {
  livePreview,
  previewTargets,
  setPreviewFocus,
  sourceRangeIsActive
} from './preview';

function pressEnter(text: string, position?: number) {
  let state = createDocumentState(text);
  state = state.update({
    selection: { anchor: position ?? state.doc.length }
  }).state;
  let lastTransaction: Transaction | undefined;
  const view = {
    get state() {
      return state;
    },
    dispatch(transaction: Transaction | TransactionSpec) {
      lastTransaction =
        'state' in transaction ? transaction : state.update(transaction);
      state = lastTransaction.state;
    }
  };
  const handled = insertMarkdownNewline(
    view as Parameters<typeof insertMarkdownNewline>[0]
  );
  return {
    handled,
    content: state.sliceDoc(),
    position: state.selection.main.head,
    scrolledIntoView: lastTransaction?.scrollIntoView ?? false
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
  it('renders the first line until the editor is actively used and hides source on blur', () => {
    const source = '# Heading\n\nText';
    let state = createDocumentState(source, [livePreview(options)]);
    const hidesHeadingMark = () => {
      let hidden = false;
      for (const decorations of state.facet(EditorView.decorations)) {
        if (typeof decorations === 'function') continue;
        decorations.between(0, 2, (from, to, decoration) => {
          if (from === 0 && to === 2 && !decoration.spec.class) hidden = true;
        });
      }
      return hidden;
    };
    expect(sourceRangeIsActive(state, 0, 9)).toBe(false);
    expect(hidesHeadingMark()).toBe(true);
    state = state.update({ effects: setPreviewFocus.of(true) }).state;
    expect(sourceRangeIsActive(state, 0, 9)).toBe(true);
    expect(hidesHeadingMark()).toBe(false);
    state = state.update({ effects: setPreviewFocus.of(false) }).state;
    expect(hidesHeadingMark()).toBe(true);
    expect(state.sliceDoc()).toBe(source);
  });

  it('reveals a keyboard-selected line while a newly loaded note starts rendered', () => {
    let state = createDocumentState('**Bold**', [livePreview(options)]);
    state = state.update({
      selection: { anchor: 3 },
      userEvent: 'select'
    }).state;
    expect(sourceRangeIsActive(state, 0, 8)).toBe(true);
    const next = createDocumentState('**Next**', [livePreview(options)]);
    expect(sourceRangeIsActive(next, 0, 8)).toBe(false);
  });

  it.each([
    '1. question',
    '1. question\n   answer',
    '1. ',
    '> 1. question',
    '- [ ] ',
    '- [x] '
  ])(
    'scrolls the new caret into view when continuing or exiting markup: %s',
    (source) => {
      expect(pressEnter(source).scrolledIntoView).toBe(true);
    }
  );

  it.each([
    '```java\nclass User {}\n```',
    '```java\nclass User {}\n```   ',
    '~~~java\nclass User {}\n~~~',
    '```\n```',
    '> ```java\n> class User {}\n> ```',
    '- item\n\n  ```java\n  class User {}\n  ```'
  ])(
    'creates undoable prose after a closed terminal code block: %s',
    (source) => {
      let state = createDocumentState(source, [history()]);
      state = state.update({ selection: { anchor: state.doc.length } }).state;
      const edit = trailingCodeParagraph(state);
      expect(edit).not.toBeNull();
      if (!edit) throw new Error('Expected a paragraph edit');
      const transaction = state.update(edit);
      expect(transaction.scrollIntoView).toBe(true);
      state = transaction.state;
      expect(state.sliceDoc()).toBe(source + '\n\n');
      expect(ancestorAt(state, ['FencedCode'])).toBeNull();
      const target = {
        get state() {
          return state;
        },
        dispatch(tr: Transaction) {
          state = tr.state;
        }
      };
      expect(undo(target)).toBe(true);
      expect(state.sliceDoc()).toBe(source);
      expect(redo(target)).toBe(true);
      expect(state.selection.main.head).toBe(state.doc.length);
    }
  );

  it.each([
    '```java\nclass User {}',
    '```java\nclass User {}\n```\n',
    '```java\nclass User {}\n```\n\nprose',
    'plain text',
    ''
  ])(
    'does not add paragraphs to open code or an existing prose position: %s',
    (source) => {
      expect(trailingCodeParagraph(createDocumentState(source))).toBeNull();
    }
  );

  it('does not add a paragraph to a read-only document', () => {
    expect(
      trailingCodeParagraph(
        createDocumentState('```\ncode\n```', [EditorState.readOnly.of(true)])
      )
    ).toBeNull();
  });

  it('preserves CRLF while creating real document lines after code and within ordered prose', () => {
    const source = '```java\r\nclass User {}\r\n```';
    const state = createDocumentState(source);
    const edit = trailingCodeParagraph(state);
    if (!edit) throw new Error('Expected a paragraph edit');
    const next = state.update(edit).state;
    expect(next.doc.lines).toBe(state.doc.lines + 2);
    expect(next.sliceDoc()).toBe(source + '\r\n\r\n');
    expect(next.selection.main.head).toBe(next.doc.length);
    expect(pressEnter('intro\r\n\r\n1. question').content).toBe(
      'intro\r\n\r\n1. question\r\n2. '
    );
    expect(pressEnter('intro\r\n\r\n1. ').content).toBe('intro\r\n\r\n');
  });

  it('parses mixed file line endings and an attachment beside prose as real lines', () => {
    const source =
      'intro\r\n\r\ntext\n<img src="images/a.png">\n### heading\n\n```js\nconst n = 1;\n```';
    const state = createDocumentState(source);
    expect(state.doc.lines).toBe(9);
    expect(extractHeadings(state).map((heading) => heading.text)).toEqual([
      'heading'
    ]);
    expect(previewTargets(state).map((target) => target.kind)).toEqual([
      'image'
    ]);
    expect(ancestorAt(state, ['FencedCode'], state.doc.length)?.name).toBe(
      'FencedCode'
    );
  });

  it.each(['\n', '\r\n'])(
    'accepts pasted or generated newlines in a %j document as one undoable edit',
    (separator) => {
      const original = `intro${separator}${separator}text`;
      let state = createDocumentState(original, [history()]);
      const insert = '\n<img src="images/a.png">\n### heading\r\n\r\n**bold**';
      state = state.update({
        changes: { from: state.doc.length, insert }
      }).state;
      expect(state.doc.lines).toBe(7);
      expect(extractHeadings(state).map((heading) => heading.text)).toEqual([
        'heading'
      ]);
      expect(previewTargets(state)).toHaveLength(1);
      const target = {
        get state() {
          return state;
        },
        dispatch(transaction: Transaction) {
          state = transaction.state;
        }
      };
      expect(undo(target)).toBe(true);
      expect(state.sliceDoc()).toBe(original);
    }
  );

  it('keeps a selection inside inserted text when normalizing its line breaks', () => {
    const state = createDocumentState('intro\r\ntext').update({
      changes: { from: 0, insert: '**a\nb**' },
      selection: { anchor: 2, head: 5 }
    }).state;
    expect(state.sliceDoc(2, 5)).toBe('a\r\nb');
    expect(state.selection.main.from).toBe(2);
    expect(state.selection.main.to).toBe(5);
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

  it('uses native numbered-list continuation and exit behavior', () => {
    expect(pressEnter('1. question').content).toBe('1. question\n2. ');
    expect(pressEnter('> 1. question').content).toBe('> 1. question\n> 2. ');
    expect(pressEnter('1. parent\n   1. child').content).toBe(
      '1. parent\n   1. child\n   2. '
    );
    expect(pressEnter('1. ').content).toBe('');
    const loose = pressEnter('1. question\n2. ').content;
    const exited = pressEnter(loose).content;
    expect(exited).toBe('1. question\n\n');
    const after = createDocumentState(
      exited + '### heading\n\n' + '```js\nconst n = 1;\n```'
    );
    expect(extractHeadings(after).map((heading) => heading.text)).toEqual([
      'heading'
    ]);
    expect(
      ancestorAt(after, ['FencedCode'], after.doc.length)?.parent?.name
    ).toBe('Document');
  });

  it('keeps bullet continuation while leaving letter prefixes and code to normal text commands', () => {
    expect(pressEnter('- item').content).toBe('- item\n- ');
    expect(pressEnter('- [ ] item').content).toBe('- [ ] item\n- [ ] ');
    expect(pressEnter('a. answer').handled).toBe(false);
    expect(pressEnter('i. answer').handled).toBe(false);
    expect(pressEnter('```java\n1. answer\n```', 17).handled).toBe(false);
  });

  it('uses native empty task item behavior', () => {
    expect(pressEnter('- [ ] ').content).toBe('');
    expect(pressEnter('- [x] ').content).toBe('');
    const loose = pressEnter('- [ ] first\n- [ ] ').content;
    expect(pressEnter(loose).content).toBe('- [ ] first\n\n');
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

  it('inserts a fenced code block at the line start without carrying indentation', () => {
    const blank = commandView('  ', 2);
    insertFencedCodeBlock(blank);
    expect(blank.state.sliceDoc()).toBe('```\n\n```');
    expect(blank.state.selection.main.head).toBe(4);

    const prose = commandView('before after', 7);
    insertFencedCodeBlock(prose);
    expect(prose.state.sliceDoc()).toBe('before \n```\n\n```\nafter');

    const selected = commandView('intro\n  code\noutro', 8, 12);
    insertFencedCodeBlock(selected);
    expect(selected.state.sliceDoc()).toBe('intro\n```\ncode\n```\noutro');

    const fullLine = commandView('first\nsecond', 0, 6);
    insertFencedCodeBlock(fullLine);
    expect(fullLine.state.sliceDoc()).toBe('```\nfirst\n```\nsecond');

    const windowsLine = commandView('  \r\nnext', 2);
    insertFencedCodeBlock(windowsLine);
    expect(windowsLine.state.sliceDoc()).toBe('```\r\n\r\n```\r\nnext');
    expect(windowsLine.state.selection.main.head).toBe(4);

    const windowsSelection = commandView('first\r\nsecond', 0, 6);
    insertFencedCodeBlock(windowsSelection);
    expect(windowsSelection.state.sliceDoc()).toBe(
      '```\r\nfirst\r\n```\r\nsecond'
    );
  });

  it('parses bold text containing Chinese parentheses inside adjacent prose', () => {
    const strongIn = (source: string) => {
      const state = createDocumentState(source);
      const strong: string[] = [];
      syntaxTree(state).iterate({
        enter(node) {
          if (node.name === 'StrongEmphasis')
            strong.push(state.doc.sliceString(node.from, node.to));
        }
      });
      return strong;
    };
    expect(strongIn('前**（文本）**后')).toEqual(['**（文本）**']);
    expect(strongIn('新增**知识库问答（RAG）**模式')).toEqual([
      '**知识库问答（RAG）**'
    ]);
    expect(strongIn('`前**（文本）**后`')).toEqual([]);
    expect(strongIn('\\**（文本）**')).toEqual([]);
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
