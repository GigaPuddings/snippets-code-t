import { Editor } from '@tiptap/core';
import { Schema } from '@tiptap/pm/model';
import { EditorState, TextSelection, type Transaction } from '@tiptap/pm/state';
import StarterKit from '@tiptap/starter-kit';
import { describe, expect, it, vi } from 'vitest';
import {
  continueOrderedListAfterTable,
  continueOrderedListOnMarkerSpace,
  exitBulletListOnMarkerSpace,
  handleCodeBlockExitShortcut,
  insertCodeBlockNewline,
  insertOrderedListParagraph,
  insertTextBlockBracePairNewline
} from './CustomEnterBehavior';

const schema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: { content: 'inline*', group: 'block' },
    hardBreak: { inline: true, group: 'inline', selectable: false },
    codeBlock: { content: 'text*', group: 'block', code: true, marks: '' },
    text: { group: 'inline' },
    orderedList: {
      attrs: { start: { default: 1 } },
      content: 'listItem+',
      group: 'block'
    },
    bulletList: { content: 'listItem+', group: 'block' },
    listItem: { content: 'paragraph block*' },
    table: { content: 'tableRow+', group: 'block' },
    tableRow: { content: '(tableCell | tableHeader)+' },
    tableCell: { content: 'block+' },
    tableHeader: { content: 'block+' }
  }
});

function createListEditor(
  doc: ReturnType<typeof schema.node>,
  cursor: number
): Editor {
  const editor = new Editor({
    extensions: [StarterKit],
    content: doc.toJSON()
  });
  editor.commands.setTextSelection(cursor);
  return editor;
}

function findCursorAtEnd(
  doc: ReturnType<typeof schema.node>,
  text: string
): number {
  let cursor = -1;
  doc.descendants((node, pos) => {
    if (node.type.name === 'paragraph' && node.textContent === text) {
      cursor = pos + 1 + node.content.size;
    }
  });
  return cursor;
}

function findCodeBlockCursor(
  doc: ReturnType<typeof schema.node>,
  offset: number
): number {
  let cursor = -1;
  doc.descendants((node, pos) => {
    if (node.type.name === 'codeBlock' && cursor < 0) {
      cursor = pos + 1 + offset;
    }
  });
  return cursor;
}

describe('ordered list paragraphs', () => {
  const paragraph = (text = '') =>
    schema.node('paragraph', null, text ? schema.text(text) : undefined);
  const orderedDoc = (...paragraphs: ReturnType<typeof schema.node>[]) =>
    schema.node('doc', null, [
      schema.node('orderedList', { start: 10 }, [
        schema.node('listItem', null, paragraphs)
      ])
    ]);

  it('continues with unnumbered body text and keeps one list item', () => {
    const doc = orderedDoc(paragraph('问题'));
    const editor = createListEditor(doc, findCursorAtEnd(doc, '问题'));

    expect(insertOrderedListParagraph(editor)).toBe(true);
    editor.commands.insertContent({ type: 'text', text: '正文' });
    const list = editor.state.doc.firstChild!;
    expect(list.attrs.start).toBe(10);
    expect(list.childCount).toBe(1);
    expect(
      list.firstChild?.content.content.map((node) => node.textContent)
    ).toEqual(['问题', '正文']);
    expect(() => editor.state.doc.check()).not.toThrow();
    editor.destroy();
  });

  it('splits in the middle of a numbered paragraph without creating a new number', () => {
    const doc = orderedDoc(paragraph('问题正文'));
    const editor = createListEditor(doc, findCursorAtEnd(doc, '问题正文') - 2);

    expect(insertOrderedListParagraph(editor)).toBe(true);
    expect(editor.state.doc.firstChild?.childCount).toBe(1);
    expect(
      editor.state.doc.firstChild?.firstChild?.content.content.map(
        (node) => node.textContent
      )
    ).toEqual(['问题', '正文']);
    editor.destroy();
  });

  it('leaves the list when Enter is pressed on its empty body paragraph', () => {
    const doc = orderedDoc(paragraph('问题'), paragraph());
    const editor = createListEditor(doc, findCursorAtEnd(doc, ''));

    expect(insertOrderedListParagraph(editor)).toBe(true);
    expect(
      editor.state.doc.content.content.map((node) => node.type.name)
    ).toEqual(['orderedList', 'paragraph']);
    expect(editor.state.doc.firstChild?.firstChild?.childCount).toBe(1);
    expect(editor.state.selection.$from.depth).toBe(1);
    expect(() => editor.state.doc.check()).not.toThrow();
    editor.destroy();
  });

  it('leaves an empty nested ordered list without creating an outer number', () => {
    const doc = schema.node('doc', null, [
      schema.node('orderedList', null, [
        schema.node('listItem', null, [
          paragraph('父问题'),
          schema.node('orderedList', null, [
            schema.node('listItem', null, [paragraph('子问题'), paragraph()])
          ])
        ])
      ])
    ]);
    const editor = createListEditor(doc, findCursorAtEnd(doc, ''));

    expect(insertOrderedListParagraph(editor)).toBe(true);
    expect(editor.state.doc.firstChild?.childCount).toBe(1);
    expect(editor.state.selection.$from.node(-1).type.name).toBe('listItem');
    expect(() => editor.state.doc.check()).not.toThrow();
    editor.destroy();
  });

  it('creates the next item only after its marker is entered, preserving later content', () => {
    const doc = orderedDoc(
      paragraph('问题'),
      paragraph('11.'),
      paragraph('后续正文')
    );
    const editor = createListEditor(doc, findCursorAtEnd(doc, '11.'));

    expect(continueOrderedListOnMarkerSpace(editor)).toBe(true);
    const list = editor.state.doc.firstChild!;
    expect(list.childCount).toBe(2);
    expect(list.child(0).textContent).toBe('问题');
    expect(list.child(1).child(0).textContent).toBe('');
    expect(list.child(1).child(1).textContent).toBe('后续正文');
    expect(editor.state.selection.$from.parent.textContent).toBe('');
    expect(() => editor.state.doc.check()).not.toThrow();
    editor.destroy();
  });

  it('does not consume an unrelated marker or a marker in the numbered title', () => {
    for (const paragraphs of [
      [paragraph('11.')],
      [paragraph('问题'), paragraph('12.')]
    ]) {
      const doc = orderedDoc(...paragraphs);
      const editor = createListEditor(
        doc,
        findCursorAtEnd(doc, paragraphs.at(-1)!.textContent)
      );
      const original = editor.getJSON();

      expect(continueOrderedListOnMarkerSpace(editor)).toBe(false);
      expect(editor.getJSON()).toEqual(original);
      editor.destroy();
    }
  });

  it('keeps nested bullet lists and table paragraphs on their existing Enter behavior', () => {
    for (const block of [
      schema.node('bulletList', null, [
        schema.node('listItem', null, [paragraph('内容')])
      ]),
      schema.node('table', null, [
        schema.node('tableRow', null, [
          schema.node('tableCell', null, [paragraph('内容')])
        ])
      ])
    ]) {
      const doc = orderedDoc(paragraph('问题'), block);
      // Tables need the test schema; this guard does not depend on editor commands.
      const state = EditorState.create({
        schema,
        doc,
        selection: TextSelection.create(doc, findCursorAtEnd(doc, '内容'))
      });
      const editor = { state } as Editor;
      expect(insertOrderedListParagraph(editor)).toBe(false);
    }
  });
});

describe('exitBulletListOnMarkerSpace', () => {
  it('removes a standalone marker and lifts the current bullet-list item', () => {
    const doc = schema.node('doc', null, [
      schema.node('bulletList', null, [
        schema.node('listItem', null, [
          schema.node('paragraph', null, schema.text('列表 1'))
        ]),
        schema.node('listItem', null, [
          schema.node('paragraph', null, schema.text('-'))
        ])
      ]),
      schema.node('paragraph', null, schema.text('其他文本'))
    ]);
    const editor = createListEditor(doc, findCursorAtEnd(doc, '-'));

    expect(exitBulletListOnMarkerSpace(editor)).toBe(true);
    expect(editor.getJSON().content?.map((node) => node.type)).toEqual([
      'bulletList',
      'paragraph',
      'paragraph'
    ]);
    expect(editor.getJSON().content?.[0].content).toHaveLength(1);
    expect(editor.getJSON().content?.[1]).toEqual({ type: 'paragraph' });
    expect(editor.state.doc.child(2).textContent).toBe('其他文本');
    expect(editor.state.selection.$from.parent.type.name).toBe('paragraph');
    editor.destroy();
  });
});

describe('exitBulletListOnMarkerSpace guards', () => {
  it('keeps a standalone marker in a normal paragraph', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, schema.text('-'))
    ]);
    const editor = createListEditor(doc, findCursorAtEnd(doc, '-'));

    expect(exitBulletListOnMarkerSpace(editor)).toBe(false);
    expect(editor.getText()).toBe('-');
    editor.destroy();
  });

  it('keeps non-marker list content unchanged', () => {
    const doc = schema.node('doc', null, [
      schema.node('bulletList', null, [
        schema.node('listItem', null, [
          schema.node('paragraph', null, schema.text('- 列表 2'))
        ])
      ])
    ]);
    const editor = createListEditor(doc, findCursorAtEnd(doc, '- 列表 2'));

    expect(exitBulletListOnMarkerSpace(editor)).toBe(false);
    expect(editor.state.doc.textContent).toBe('- 列表 2');
    editor.destroy();
  });
});

describe('code block keyboard behavior', () => {
  it('creates a visible line with one Enter immediately after fence conversion', () => {
    const doc = schema.node('doc', null, [schema.node('codeBlock')]);
    const editor = createListEditor(doc, findCodeBlockCursor(doc, 0));

    expect(insertCodeBlockNewline(editor)).toBe(true);
    expect(editor.state.doc.firstChild?.textContent).toBe('\n');
    expect(editor.state.selection.$from.parent.type.name).toBe('codeBlock');
    expect(editor.state.selection.$from.parentOffset).toBe(1);
    editor.destroy();
  });

  it('inserts the first newline immediately without leaving the code block', () => {
    const code = 'const value = 1;';
    const doc = schema.node('doc', null, [
      schema.node('codeBlock', null, schema.text(code))
    ]);
    const editor = createListEditor(doc, findCodeBlockCursor(doc, code.length));

    expect(insertCodeBlockNewline(editor)).toBe(true);
    expect(editor.state.doc.firstChild?.textContent).toBe(`${code}\n`);
    expect(editor.state.selection.$from.parent.type.name).toBe('codeBlock');
    expect(editor.state.selection.$from.parentOffset).toBe(code.length + 1);
    editor.destroy();
  });

  it('auto indents when pressing Enter between paired braces in a code block', () => {
    const code = '{}';
    const doc = schema.node('doc', null, [
      schema.node('codeBlock', null, schema.text(code))
    ]);
    const editor = createListEditor(doc, findCodeBlockCursor(doc, 1));

    expect(insertCodeBlockNewline(editor)).toBe(true);
    expect(editor.state.doc.firstChild?.textContent).toBe('{\n  \n}');
    expect(editor.state.selection.$from.parent.type.name).toBe('codeBlock');
    expect(editor.state.selection.$from.parentOffset).toBe(4);
    editor.destroy();
  });

  it('auto indents when pressing Enter between paired braces in normal text', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, schema.text('{}'))
    ]);
    const editor = createListEditor(doc, 2);

    expect(insertTextBlockBracePairNewline(editor)).toBe(true);
    expect(editor.getJSON().content?.[0].content).toEqual([
      { type: 'text', text: '{' },
      { type: 'hardBreak' },
      { type: 'text', text: '  ' },
      { type: 'hardBreak' },
      { type: 'text', text: '}' }
    ]);
    expect(editor.state.selection.$from.parent.type.name).toBe('paragraph');
    expect(editor.state.selection.from).toBe(5);
    editor.destroy();
  });

  it('exits with Ctrl+Enter only at the final line end', () => {
    const code = 'first\nsecond';
    const doc = schema.node('doc', null, [
      schema.node('codeBlock', null, schema.text(code))
    ]);
    const editor = createListEditor(doc, findCodeBlockCursor(doc, code.length));

    expect(handleCodeBlockExitShortcut(editor)).toBe(true);
    expect(editor.getJSON().content?.map((node) => node.type)).toEqual([
      'codeBlock',
      'paragraph'
    ]);
    expect(editor.state.selection.$from.parent.type.name).toBe('paragraph');
    editor.destroy();
  });

  it('consumes Ctrl+Enter without exiting from a non-final position', () => {
    const code = 'first\nsecond';
    const doc = schema.node('doc', null, [
      schema.node('codeBlock', null, schema.text(code))
    ]);
    const editor = createListEditor(doc, findCodeBlockCursor(doc, 3));

    expect(handleCodeBlockExitShortcut(editor)).toBe(true);
    expect(editor.getJSON().content?.map((node) => node.type)).toEqual([
      'codeBlock'
    ]);
    expect(editor.state.doc.firstChild?.textContent).toBe(code);
    expect(editor.state.selection.$from.parent.type.name).toBe('codeBlock');
    editor.destroy();
  });
});

describe('continueOrderedListAfterTable', () => {
  const runBehavior = (doc: ReturnType<typeof schema.node>, cursor: number) => {
    const state = EditorState.create({
      schema,
      doc,
      selection: TextSelection.create(doc, cursor)
    });
    const dispatched: { value?: Transaction } = {};
    const editor = {
      state,
      view: {
        dispatch: vi.fn((transaction: Transaction) => {
          dispatched.value = transaction;
        })
      }
    } as unknown as Editor;

    return {
      handled: continueOrderedListAfterTable(editor),
      transaction: dispatched.value
    };
  };

  it('creates the next ordered item from the empty last table cell', () => {
    const emptyParagraph = schema.node('paragraph');
    const table = schema.node('table', null, [
      schema.node('tableRow', null, [
        schema.node('tableCell', null, [emptyParagraph])
      ])
    ]);
    const doc = schema.node('doc', null, [
      schema.node('orderedList', { start: 1 }, [
        schema.node('listItem', null, [
          schema.node('paragraph', null, [schema.text('第一项')]),
          table
        ])
      ])
    ]);

    let cursor = -1;
    doc.descendants((node, pos) => {
      if (node.type.name === 'paragraph' && node.content.size === 0) {
        cursor = pos + 1;
      }
    });

    const result = runBehavior(doc, cursor);

    expect(result.handled).toBe(true);
    expect(result.transaction).toBeDefined();
    expect(result.transaction?.doc.firstChild?.type.name).toBe('orderedList');
    expect(result.transaction?.doc.firstChild?.childCount).toBe(2);
    expect(result.transaction?.selection.$from.parent.type.name).toBe(
      'paragraph'
    );
  });

  it('exits a nested table from the end of non-empty cell text with one Enter', () => {
    const cellText = '表格内容';
    const cellParagraph = schema.node('paragraph', null, schema.text(cellText));
    const table = schema.node('table', null, [
      schema.node('tableRow', null, [
        schema.node('tableCell', null, [cellParagraph])
      ])
    ]);
    const doc = schema.node('doc', null, [
      schema.node('orderedList', { start: 3 }, [
        schema.node('listItem', null, [
          schema.node('paragraph', null, [schema.text('第三项')]),
          table
        ])
      ])
    ]);

    let cursor = -1;
    doc.descendants((node, pos) => {
      if (node === cellParagraph) cursor = pos + 1 + cellText.length;
    });
    const result = runBehavior(doc, cursor);

    expect(result.handled).toBe(true);
    expect(result.transaction?.doc.firstChild?.childCount).toBe(2);
    expect(result.transaction?.doc.textContent).toContain(cellText);
  });

  it('continues numbering when a top-level table follows an ordered list', () => {
    const cellParagraph = schema.node('paragraph', null, schema.text('结果'));
    const table = schema.node('table', null, [
      schema.node('tableRow', null, [
        schema.node('tableCell', null, [cellParagraph])
      ])
    ]);
    const doc = schema.node('doc', null, [
      schema.node('orderedList', { start: 5 }, [
        schema.node('listItem', null, [
          schema.node('paragraph', null, schema.text('第五项'))
        ]),
        schema.node('listItem', null, [
          schema.node('paragraph', null, schema.text('第六项'))
        ])
      ]),
      table
    ]);

    let cursor = -1;
    doc.descendants((node, pos) => {
      if (node === cellParagraph) cursor = pos + 1 + node.content.size;
    });
    const result = runBehavior(doc, cursor);
    const continuedList = result.transaction?.doc.lastChild;

    expect(result.handled).toBe(true);
    expect(continuedList?.type.name).toBe('orderedList');
    expect(continuedList?.attrs.start).toBe(7);
  });

  it('inserts a normal paragraph after a table outside a list', () => {
    const cellParagraph = schema.node('paragraph', null, schema.text('单元格'));
    const table = schema.node('table', null, [
      schema.node('tableRow', null, [
        schema.node('tableCell', null, [cellParagraph])
      ])
    ]);
    const doc = schema.node('doc', null, [table]);

    let cursor = -1;
    doc.descendants((node, pos) => {
      if (node === cellParagraph) cursor = pos + 1 + node.content.size;
    });
    const result = runBehavior(doc, cursor);

    expect(result.handled).toBe(true);
    expect(result.transaction?.doc.lastChild?.type.name).toBe('paragraph');
  });
});
