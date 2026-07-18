import type { Node as ProseMirrorNode } from '@tiptap/pm/model';
import {
  NodeSelection,
  Plugin,
  PluginKey,
  TextSelection,
  type EditorState,
  type Transaction
} from '@tiptap/pm/state';

function findContainingTextblockDepth(
  doc: ProseMirrorNode,
  position: number
): number {
  const $position = doc.resolve(position);

  for (let depth = $position.depth; depth > 0; depth -= 1) {
    if ($position.node(depth).isTextblock) {
      return depth;
    }
  }

  return -1;
}

export function findClosestLocalImagePosition(
  doc: ProseMirrorNode,
  originalPath: string,
  anchor: number
): number | null {
  let closestPosition: number | null = null;
  let closestDistance = Number.POSITIVE_INFINITY;

  doc.descendants((node, position) => {
    if (
      node.type.name !== 'localImage' ||
      node.attrs['data-original-path'] !== originalPath
    ) {
      return true;
    }

    const distance = Math.abs(position - anchor);
    if (distance < closestDistance) {
      closestPosition = position;
      closestDistance = distance;
    }

    return false;
  });

  return closestPosition;
}

/**
 * 确保图片所在文本块后有独立段落，并把文本光标放入该段落。
 */
export function setTextSelectionAfterImage(
  transaction: Transaction,
  imagePosition: number
): boolean {
  const imageNode = transaction.doc.nodeAt(imagePosition);
  if (imageNode?.type.name !== 'localImage') {
    return false;
  }

  const textblockDepth = findContainingTextblockDepth(
    transaction.doc,
    imagePosition
  );
  if (textblockDepth < 1) {
    return false;
  }

  const $image = transaction.doc.resolve(imagePosition);
  const blockEnd = $image.after(textblockDepth);
  const paragraphType = transaction.doc.type.schema.nodes.paragraph;
  if (!paragraphType) {
    return false;
  }

  const nextNode = transaction.doc.nodeAt(blockEnd);
  if (nextNode?.type !== paragraphType) {
    const containerDepth = textblockDepth - 1;
    const container = $image.node(containerDepth);
    const insertIndex = $image.indexAfter(containerDepth);

    if (!container.canReplaceWith(insertIndex, insertIndex, paragraphType)) {
      return false;
    }

    transaction.insert(blockEnd, paragraphType.create());
  }

  transaction.setSelection(TextSelection.create(transaction.doc, blockEnd + 1));
  transaction.scrollIntoView();
  return true;
}

export function setTextSelectionAfterUploadedImage(
  transaction: Transaction,
  originalPath: string
): boolean {
  const imagePosition = findClosestLocalImagePosition(
    transaction.doc,
    originalPath,
    transaction.selection.from
  );

  return imagePosition !== null
    ? setTextSelectionAfterImage(transaction, imagePosition)
    : false;
}

/**
 * 页面回写或 NodeView 更新可能把 selection 映射回图片段。若图片后已经出现
 * 文本，把这部分内容迁移到后续普通段落，并保持文本光标的相对位置。
 */
interface TrailingTextCandidate {
  paragraphPosition: number;
  trailingFrom: number;
  trailingTo: number;
}

function collectTrailingTextCandidates(
  doc: ProseMirrorNode
): TrailingTextCandidate[] {
  const candidates: TrailingTextCandidate[] = [];

  doc.descendants((node, position) => {
    if (node.type.name !== 'paragraph') {
      return true;
    }

    let lastImageEnd = -1;
    node.forEach((child, offset) => {
      if (child.type.name === 'localImage') {
        lastImageEnd = offset + child.nodeSize;
      }
    });

    if (lastImageEnd >= 0 && lastImageEnd < node.content.size) {
      candidates.push({
        paragraphPosition: position,
        trailingFrom: position + 1 + lastImageEnd,
        trailingTo: position + 1 + node.content.size
      });
    }

    return false;
  });

  return candidates;
}

function moveTrailingTextCandidate(
  transaction: Transaction,
  candidate: TrailingTextCandidate,
  selectionFrom: number,
  selectionTo: number
): void {
  const mappedParagraphPosition = transaction.mapping.map(
    candidate.paragraphPosition
  );
  const mappedFrom = transaction.mapping.map(candidate.trailingFrom);
  const mappedTo = transaction.mapping.map(candidate.trailingTo);
  const trailingContent = transaction.doc.slice(mappedFrom, mappedTo).content;
  const selectionIsTrailing =
    selectionFrom >= candidate.trailingFrom &&
    selectionTo <= candidate.trailingTo;
  const relativeSelectionFrom = selectionFrom - candidate.trailingFrom;
  const relativeSelectionTo = selectionTo - candidate.trailingFrom;

  transaction.delete(mappedFrom, mappedTo);

  const imageParagraph = transaction.doc.nodeAt(mappedParagraphPosition);
  if (!imageParagraph) return;

  const blockEnd = mappedParagraphPosition + imageParagraph.nodeSize;
  const paragraphType = transaction.doc.type.schema.nodes.paragraph;
  const nextNode = transaction.doc.nodeAt(blockEnd);
  let insertionStart: number;

  if (nextNode?.type === paragraphType) {
    insertionStart = blockEnd + 1;
    transaction.insert(insertionStart, trailingContent);
  } else {
    const paragraph = paragraphType.create(null, trailingContent);
    transaction.insert(blockEnd, paragraph);
    insertionStart = blockEnd + 1;
  }

  if (selectionIsTrailing) {
    transaction.setSelection(
      TextSelection.create(
        transaction.doc,
        insertionStart + relativeSelectionFrom,
        insertionStart + relativeSelectionTo
      )
    );
  }
}

export function normalizeTextAfterLocalImages(
  state: EditorState
): Transaction | null {
  const candidates = collectTrailingTextCandidates(state.doc);
  if (candidates.length === 0) return null;

  const transaction = state.tr;
  const { from: selectionFrom, to: selectionTo } = state.selection;

  for (const candidate of candidates.reverse()) {
    moveTrailingTextCandidate(
      transaction,
      candidate,
      selectionFrom,
      selectionTo
    );
  }

  return transaction.docChanged ? transaction.scrollIntoView() : null;
}

export function insertTextAfterSelectedImage(
  state: EditorState,
  text: string
): Transaction | null {
  const { selection } = state;
  if (
    !(selection instanceof NodeSelection) ||
    selection.node.type.name !== 'localImage'
  ) {
    return null;
  }

  const transaction = state.tr;
  if (!setTextSelectionAfterImage(transaction, selection.from)) {
    return null;
  }

  transaction.insertText(text);
  return transaction;
}

export function createLocalImageCursorPlugin(): Plugin {
  return new Plugin({
    key: new PluginKey('localImageCursor'),
    props: {
      handleTextInput: (view, _from, _to, text): boolean => {
        const transaction = insertTextAfterSelectedImage(view.state, text);
        if (!transaction) return false;

        view.dispatch(transaction);
        return true;
      }
    },
    appendTransaction: (
      transactions,
      _oldState,
      newState
    ): Transaction | null => {
      if (!transactions.some((transaction) => transaction.docChanged)) {
        return null;
      }

      return normalizeTextAfterLocalImages(newState);
    }
  });
}
