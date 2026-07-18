import { TextSelection, type EditorState, type Transaction } from '@tiptap/pm/state';

/**
 * 光标位于文档首个代码块开头时，在代码块前插入普通段落。
 */
export function insertParagraphBeforeFirstCodeBlock(
  state: EditorState
): Transaction | null {
  const { selection } = state;
  const { $from } = selection;
  if (
    !selection.empty ||
    $from.parent.type.name !== 'codeBlock' ||
    $from.parentOffset !== 0
  ) {
    return null;
  }

  const codeBlockPosition = $from.before($from.depth);
  if (codeBlockPosition !== 0) return null;

  const paragraphType = state.schema.nodes.paragraph;
  if (!paragraphType) return null;

  const transaction = state.tr.insert(0, paragraphType.create());
  transaction.setSelection(TextSelection.create(transaction.doc, 1));
  return transaction.scrollIntoView();
}

/**
 * 删除文档开头、且后面紧邻代码块的空段落，保留代码块本身。
 */
export function removeLeadingEmptyParagraphBeforeCodeBlock(
  state: EditorState
): Transaction | null {
  const { selection } = state;
  const { $from } = selection;
  if (
    !selection.empty ||
    $from.parent.type.name !== 'paragraph' ||
    $from.parent.content.size !== 0
  ) {
    return null;
  }

  const paragraphPosition = $from.before($from.depth);
  if (paragraphPosition !== 0) return null;

  const paragraphEnd = paragraphPosition + $from.parent.nodeSize;
  const nextNode = state.doc.nodeAt(paragraphEnd);
  if (nextNode?.type.name !== 'codeBlock') return null;

  const transaction = state.tr.delete(paragraphPosition, paragraphEnd);
  transaction.setSelection(TextSelection.create(transaction.doc, 1));
  return transaction.scrollIntoView();
}
