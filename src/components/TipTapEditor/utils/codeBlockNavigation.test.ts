import { Schema } from '@tiptap/pm/model';
import { EditorState, TextSelection } from '@tiptap/pm/state';
import { describe, expect, it } from 'vitest';
import {
  insertParagraphBeforeFirstCodeBlock,
  removeLeadingEmptyParagraphBeforeCodeBlock
} from './codeBlockNavigation';

const schema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: { content: 'text*', group: 'block' },
    codeBlock: { content: 'text*', group: 'block', code: true },
    text: {}
  }
});

describe('code block navigation', () => {
  it('inserts a paragraph before a leading code block', () => {
    const doc = schema.node('doc', null, [
      schema.node('codeBlock', null, schema.text('const value = 1;'))
    ]);
    const state = EditorState.create({
      schema,
      doc,
      selection: TextSelection.create(doc, 1)
    });

    const transaction = insertParagraphBeforeFirstCodeBlock(state);

    expect(transaction).not.toBeNull();
    expect(transaction?.doc.childCount).toBe(2);
    expect(transaction?.doc.child(0).type.name).toBe('paragraph');
    expect(transaction?.doc.child(1).type.name).toBe('codeBlock');
    expect(transaction?.selection.from).toBe(1);
  });

  it('does not insert above a code block that is not the first node', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, schema.text('before')),
      schema.node('codeBlock', null, schema.text('code'))
    ]);
    const codeBlockStart = doc.child(0).nodeSize + 1;
    const state = EditorState.create({
      schema,
      doc,
      selection: TextSelection.create(doc, codeBlockStart)
    });

    expect(insertParagraphBeforeFirstCodeBlock(state)).toBeNull();
  });

  it('removes a leading empty paragraph while preserving the code block', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph'),
      schema.node('codeBlock', null, schema.text('code'))
    ]);
    const state = EditorState.create({
      schema,
      doc,
      selection: TextSelection.create(doc, 1)
    });

    const transaction = removeLeadingEmptyParagraphBeforeCodeBlock(state);

    expect(transaction).not.toBeNull();
    expect(transaction?.doc.childCount).toBe(1);
    expect(transaction?.doc.firstChild?.type.name).toBe('codeBlock');
    expect(transaction?.doc.firstChild?.textContent).toBe('code');
    expect(transaction?.selection.from).toBe(1);
  });

  it('keeps a non-empty paragraph above the code block', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, schema.text('keep me')),
      schema.node('codeBlock', null, schema.text('code'))
    ]);
    const state = EditorState.create({
      schema,
      doc,
      selection: TextSelection.create(doc, 1)
    });

    expect(removeLeadingEmptyParagraphBeforeCodeBlock(state)).toBeNull();
  });
});
