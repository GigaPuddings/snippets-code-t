import type { Editor } from '@tiptap/core';
import { Schema } from '@tiptap/pm/model';
import { EditorState, TextSelection, type Transaction } from '@tiptap/pm/state';
import { describe, expect, it, vi } from 'vitest';
import {
  createTableMarkdown,
  getCurrentTableInfo,
  resizeCurrentTable,
  setCurrentTableColumnAlignment
} from './tableCommands';

const schema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: { content: 'inline*', group: 'block' },
    text: { group: 'inline' },
    table: { content: 'tableRow+', group: 'block' },
    tableRow: { content: '(tableCell | tableHeader)+' },
    tableCell: { content: 'block+', attrs: { textAlign: { default: null } } },
    tableHeader: { content: 'block+', attrs: { textAlign: { default: null } } }
  }
});

const cell = (value: string, header = false) => schema.node(
  header ? 'tableHeader' : 'tableCell',
  null,
  [schema.node('paragraph', null, value ? schema.text(value) : undefined)]
);

const createTableEditor = () => {
  const table = schema.node('table', null, [
    schema.node('tableRow', null, [cell('A', true), cell('B', true)]),
    schema.node('tableRow', null, [cell('C'), cell('D')])
  ]);
  const doc = schema.node('doc', null, [table]);
  let cursor = -1;
  doc.descendants((node, pos) => {
    if (node.type.name === 'paragraph' && node.textContent === 'D') cursor = pos + 2;
  });
  const state = EditorState.create({ schema, doc, selection: TextSelection.create(doc, cursor) });
  const dispatched: { transaction?: Transaction } = {};
  const editor = {
    state,
    view: {
      dispatch: vi.fn((transaction: Transaction) => {
        dispatched.transaction = transaction;
      })
    },
    commands: { focus: vi.fn() }
  } as unknown as Editor;

  return { editor, dispatched };
};

describe('tableCommands', () => {
  it('creates a Markdown table with the requested row and column counts', () => {
    const markdown = createTableMarkdown(4, 3);
    const lines = markdown.split('\n');

    expect(lines).toHaveLength(5);
    expect(lines[1]).toBe('| --- | --- | --- |');
    expect(lines.filter(line => line === '|  |  |  |')).toHaveLength(4);
  });

  it('reads the active table dimensions and selected cell position', () => {
    const { editor } = createTableEditor();
    const info = getCurrentTableInfo(editor);

    expect(info).toMatchObject({ rows: 2, columns: 2, rowIndex: 1, columnIndex: 1 });
  });

  it('resizes from the bottom and right while preserving existing cells', () => {
    const { editor, dispatched } = createTableEditor();

    expect(resizeCurrentTable(editor, 3, 3)).toBe(true);
    const table = dispatched.transaction?.doc.firstChild;

    expect(table?.childCount).toBe(3);
    expect(table?.child(0).childCount).toBe(3);
    expect(table?.child(0).child(0).textContent).toBe('A');
    expect(table?.child(1).child(1).textContent).toBe('D');
    expect(table?.child(2).child(2).textContent).toBe('');
  });

  it('applies alignment to the selected Markdown table column', () => {
    const { editor, dispatched } = createTableEditor();

    expect(setCurrentTableColumnAlignment(editor, 'center')).toBe(true);
    const table = dispatched.transaction?.doc.firstChild;

    expect(table?.child(0).child(0).attrs.textAlign).toBeNull();
    expect(table?.child(0).child(1).attrs.textAlign).toBe('center');
    expect(table?.child(1).child(1).attrs.textAlign).toBe('center');
  });
});
