import type { Editor } from '@tiptap/core';
import { TextSelection } from '@tiptap/pm/state';
import type { Node as ProseMirrorNode } from '@tiptap/pm/model';

type ListKind = 'bulletList' | 'orderedList' | 'taskList';

const getSelectionText = (editor: Editor): string => {
  const { state } = editor;
  const { from, to, empty } = state.selection;

  if (empty) {
    return '';
  }

  return state.doc.textBetween(from, to, '\n', '\n').replace(/\r\n/g, '\n');
};

const setSelectionAfterInsertedNode = (
  tr: Editor['state']['tr'],
  originalTo: number
) => {
  const nextPos = Math.min(tr.doc.content.size, tr.mapping.map(originalTo, 1));
  tr.setSelection(TextSelection.near(tr.doc.resolve(nextPos), 1));
};

const replaceSelectionWithNode = (editor: Editor, node: ProseMirrorNode): boolean => {
  const { from, to } = editor.state.selection;

  return editor
    .chain()
    .focus()
    .command(({ tr }) => {
      tr.replaceRangeWith(from, to, node);
      setSelectionAfterInsertedNode(tr, to);
      tr.scrollIntoView();
      return true;
    })
    .run();
};

export const toggleCodeBlockForSelection = (editor: Editor): boolean => {
  const { state } = editor;

  if (state.selection.empty || editor.isActive('codeBlock')) {
    return editor.chain().focus().toggleNode('codeBlock', 'paragraph').run();
  }

  const codeBlockType = state.schema.nodes.codeBlock;
  if (!codeBlockType) {
    return false;
  }

  const selectedText = getSelectionText(editor).replace(/\n+$/, '');
  const codeBlock = codeBlockType.create(
    null,
    selectedText ? state.schema.text(selectedText) : undefined
  );

  return replaceSelectionWithNode(editor, codeBlock);
};

const runDefaultListToggle = (editor: Editor, kind: ListKind): boolean => {
  const itemType = kind === 'taskList' ? 'taskItem' : 'listItem';
  return editor.chain().focus().toggleList(kind, itemType).run();
};

export const toggleListForSelection = (editor: Editor, kind: ListKind): boolean => {
  const { state } = editor;

  if (state.selection.empty || editor.isActive(kind)) {
    return runDefaultListToggle(editor, kind);
  }

  const selectedText = getSelectionText(editor);
  const lines = selectedText
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return runDefaultListToggle(editor, kind);
  }

  const listType = state.schema.nodes[kind];
  const itemType = state.schema.nodes[kind === 'taskList' ? 'taskItem' : 'listItem'];
  const paragraphType = state.schema.nodes.paragraph;

  if (!listType || !itemType || !paragraphType) {
    return runDefaultListToggle(editor, kind);
  }

  const listItems = lines.map(line => {
    const paragraph = paragraphType.create(null, state.schema.text(line));
    const attrs = kind === 'taskList' ? { checked: false } : null;
    return itemType.create(attrs, paragraph);
  });
  const listAttrs = kind === 'orderedList' ? { start: 1 } : null;
  const listNode = listType.create(listAttrs, listItems);

  return replaceSelectionWithNode(editor, listNode);
};
