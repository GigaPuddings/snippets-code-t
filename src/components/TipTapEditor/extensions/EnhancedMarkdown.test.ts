import { Schema } from '@tiptap/pm/model';
import { EditorState, type Transaction } from '@tiptap/pm/state';
import { describe, expect, it } from 'vitest';
import { createProtectedCodeBlockInputRule } from './EnhancedMarkdown';

const schema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: { content: 'inline*', group: 'block' },
    text: { group: 'inline' },
    localImage: { group: 'inline', inline: true, atom: true },
    codeBlock: { content: 'text*', group: 'block', code: true }
  }
});

function runCodeBlockRule(
  doc: ReturnType<typeof schema.node>,
  range: { from: number; to: number }
): { result: void | null; transaction: Transaction } {
  const editorState = EditorState.create({ schema, doc });
  const transaction = editorState.tr;
  const state = {
    doc: editorState.doc,
    tr: transaction
  } as EditorState;
  const match = Object.assign(['``` ', ''], {
    index: 0,
    input: '``` '
  });

  const result = createProtectedCodeBlockInputRule(
    schema.nodes.codeBlock
  ).handler({
    state,
    range,
    match: match as never,
    commands: {} as never,
    chain: (() => undefined) as never,
    can: (() => undefined) as never
  });

  return { result, transaction };
}

describe('createProtectedCodeBlockInputRule', () => {
  it('keeps an inline attachment when a code fence is typed in the same paragraph', () => {
    const image = schema.node('localImage');
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, [image, schema.text('```')])
    ]);

    const { result, transaction } = runCodeBlockRule(doc, { from: 2, to: 5 });

    expect(result).toBeNull();
    expect(transaction.doc.firstChild?.child(0).type.name).toBe('localImage');
  });

  it('still converts a text-only fence to a code block', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, schema.text('```'))
    ]);

    const { result, transaction } = runCodeBlockRule(doc, { from: 1, to: 4 });

    expect(result).toBeUndefined();
    expect(transaction.doc.firstChild?.type.name).toBe('codeBlock');
  });

  it('converts a fence in the paragraph after an image without removing the image', () => {
    const image = schema.node('localImage');
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, image),
      schema.node('paragraph', null, schema.text('```'))
    ]);

    const { result, transaction } = runCodeBlockRule(doc, { from: 4, to: 7 });

    expect(result).toBeUndefined();
    expect(transaction.doc.child(0).child(0).type.name).toBe('localImage');
    expect(transaction.doc.child(1).type.name).toBe('codeBlock');
  });
});
