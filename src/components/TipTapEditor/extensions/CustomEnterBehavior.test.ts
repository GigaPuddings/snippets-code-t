import type { Editor } from '@tiptap/core';
import { Schema } from '@tiptap/pm/model';
import { EditorState, TextSelection, type Transaction } from '@tiptap/pm/state';
import { describe, expect, it, vi } from 'vitest';
import { continueOrderedListAfterTable } from './CustomEnterBehavior';

const schema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: { content: 'inline*', group: 'block' },
    text: { group: 'inline' },
    orderedList: {
      attrs: { start: { default: 1 } },
      content: 'listItem+',
      group: 'block'
    },
    listItem: { content: 'paragraph block*' },
    table: { content: 'tableRow+', group: 'block' },
    tableRow: { content: '(tableCell | tableHeader)+' },
    tableCell: { content: 'block+' },
    tableHeader: { content: 'block+' }
  }
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
    expect(result.transaction?.selection.$from.parent.type.name).toBe('paragraph');
  });

  it('exits a nested table from the end of non-empty cell text with one Enter', () => {
    const cellText = '表格内容';
    const cellParagraph = schema.node('paragraph', null, schema.text(cellText));
    const table = schema.node('table', null, [
      schema.node('tableRow', null, [schema.node('tableCell', null, [cellParagraph])])
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
      schema.node('tableRow', null, [schema.node('tableCell', null, [cellParagraph])])
    ]);
    const doc = schema.node('doc', null, [
      schema.node('orderedList', { start: 5 }, [
        schema.node('listItem', null, [schema.node('paragraph', null, schema.text('第五项'))]),
        schema.node('listItem', null, [schema.node('paragraph', null, schema.text('第六项'))])
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
      schema.node('tableRow', null, [schema.node('tableCell', null, [cellParagraph])])
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
