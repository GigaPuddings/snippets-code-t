import { Schema, type Node as ProseMirrorNode } from '@tiptap/pm/model';
import { EditorState, NodeSelection, TextSelection } from '@tiptap/pm/state';
import { describe, expect, it } from 'vitest';
import {
  findClosestLocalImagePosition,
  insertTextAfterSelectedImage,
  normalizeTextAfterLocalImages,
  setTextSelectionAfterImage,
  setTextSelectionAfterUploadedImage
} from './imageCursor';

const schema = new Schema({
  nodes: {
    doc: { content: 'block+' },
    paragraph: { content: 'inline*', group: 'block' },
    text: { group: 'inline' },
    localImage: {
      attrs: { 'data-original-path': { default: null } },
      group: 'inline',
      inline: true,
      atom: true
    }
  }
});

function createImage(path = '../assets/image.png'): ProseMirrorNode {
  return schema.node('localImage', { 'data-original-path': path });
}

describe('image cursor placement', () => {
  it('creates a trailing paragraph and places a text cursor inside it', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, createImage())
    ]);
    const transaction = EditorState.create({ schema, doc }).tr;

    expect(setTextSelectionAfterImage(transaction, 1)).toBe(true);
    expect(transaction.doc.childCount).toBe(2);
    expect(transaction.doc.child(1).type.name).toBe('paragraph');
    expect(transaction.selection.$from.parent.type.name).toBe('paragraph');
    expect(transaction.selection.$from.parentOffset).toBe(0);
  });

  it('reuses the existing paragraph after an image', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, createImage()),
      schema.node('paragraph')
    ]);
    const transaction = EditorState.create({ schema, doc }).tr;

    expect(
      setTextSelectionAfterUploadedImage(transaction, '../assets/image.png')
    ).toBe(true);
    expect(transaction.doc.childCount).toBe(2);
    expect(transaction.selection.$from.parent).toBe(transaction.doc.child(1));
  });

  it('finds the matching uploaded image closest to the current selection', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, createImage()),
      schema.node('paragraph', null, createImage('../assets/other.png')),
      schema.node('paragraph', null, createImage())
    ]);

    expect(findClosestLocalImagePosition(doc, '../assets/image.png', 7)).toBe(
      7
    );
  });
});

describe('image cursor recovery', () => {
  it('moves text typed after an image into the following paragraph', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, [createImage(), schema.text('`')]),
      schema.node('paragraph')
    ]);
    const state = EditorState.create({
      schema,
      doc,
      selection: TextSelection.create(doc, 3)
    });

    const transaction = normalizeTextAfterLocalImages(state);

    expect(transaction).not.toBeNull();
    expect(transaction?.doc.child(0).childCount).toBe(1);
    expect(transaction?.doc.child(1).textContent).toBe('`');
    expect(transaction?.selection.$from.parent).toBe(transaction?.doc.child(1));
    expect(transaction?.selection.$from.parentOffset).toBe(1);
  });

  it('redirects text input when the image node is still selected', () => {
    const doc = schema.node('doc', null, [
      schema.node('paragraph', null, createImage()),
      schema.node('paragraph')
    ]);
    const state = EditorState.create({
      schema,
      doc,
      selection: NodeSelection.create(doc, 1)
    });

    const transaction = insertTextAfterSelectedImage(state, 'hello');

    expect(transaction).not.toBeNull();
    expect(transaction?.doc.child(0).child(0).type.name).toBe('localImage');
    expect(transaction?.doc.child(1).textContent).toBe('hello');
    expect(transaction?.selection.$from.parent).toBe(transaction?.doc.child(1));
  });
});
