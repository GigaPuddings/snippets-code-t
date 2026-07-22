import { Schema } from '@tiptap/pm/model';
import { EditorState, TextSelection, type Transaction } from '@tiptap/pm/state';
import { describe, expect, it } from 'vitest';
import {
  boldStarInputRegex,
  boldUnderscoreInputRegex,
  convertCompletedInlineMarkdown,
  createProtectedCodeBlockInputRule,
  italicStarInputRegex,
  italicUnderscoreInputRegex
} from './EnhancedMarkdown';

const schema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: { content: 'inline*', group: 'block' },
    text: { group: 'inline' },
    localImage: { group: 'inline', inline: true, atom: true },
    codeBlock: { content: 'text*', group: 'block', code: true }
  },
  marks: {
    bold: { inclusive: false },
    italic: { inclusive: false }
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

describe('inline Markdown input rules', () => {
  it.each([
    [boldStarInputRegex, '前缀**加粗**', '加粗'],
    [boldUnderscoreInputRegex, '前缀__加粗__', '加粗'],
    [italicStarInputRegex, '前缀*斜体*', '斜体'],
    [italicUnderscoreInputRegex, '前缀_斜体_', '斜体']
  ])('keeps the unwrapped text in the final capture group', (regex, input, content) => {
    const match = regex.exec(input);

    expect(match).not.toBeNull();
    expect(match?.at(-1)).toBe(content);
  });

  it('does not treat bold delimiters as italic input', () => {
    expect(italicStarInputRegex.test('**加粗**')).toBe(false);
    expect(italicUnderscoreInputRegex.test('__加粗__')).toBe(false);
  });

  it.each([
    ['*斜体*', 'italic', '斜体'],
    ['**加粗**', 'bold', '加粗']
  ])('converts completed %s syntax after a document transaction', (input, markName, content) => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, schema.text(input))
    ]);
    const state = EditorState.create({
      schema,
      doc,
      selection: TextSelection.create(doc, input.length + 1)
    });

    const transaction = convertCompletedInlineMarkdown(state);

    expect(transaction).not.toBeNull();
    expect(transaction?.doc.textContent).toBe(content);
    expect(transaction?.doc.firstChild?.firstChild?.marks[0]?.type.name).toBe(markName);
    expect(transaction?.storedMarks).toEqual([]);
  });

  it('keeps following text outside the converted italic mark', () => {
    const input = '*斜体*';
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, schema.text(input))
    ]);
    const state = EditorState.create({
      schema,
      doc,
      selection: TextSelection.create(doc, input.length + 1)
    });
    const converted = convertCompletedInlineMarkdown(state);
    expect(converted).not.toBeNull();

    const convertedState = state.apply(converted as Transaction);
    const withPlainText = convertedState.apply(convertedState.tr.insertText('普通文本'));
    const paragraph = withPlainText.doc.firstChild;

    expect(paragraph?.childCount).toBe(2);
    expect(paragraph?.child(0).marks[0]?.type.name).toBe('italic');
    expect(paragraph?.child(1).marks).toHaveLength(0);
  });
});
