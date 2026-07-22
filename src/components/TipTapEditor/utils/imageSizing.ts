import type { Editor } from '@tiptap/core';

export const MIN_IMAGE_SCALE_PERCENT = 25;
export const MAX_IMAGE_SCALE_PERCENT = 200;

export function clampImageScalePercent(value: number): number {
  if (!Number.isFinite(value)) return 100;
  return Math.min(MAX_IMAGE_SCALE_PERCENT, Math.max(MIN_IMAGE_SCALE_PERCENT, Math.round(value)));
}

export function resolveImageScalePercent(
  attrs: Record<string, unknown>,
  naturalWidth: number | null,
  defaultScalePercent: number
): number {
  const storedScale = Number(attrs['data-image-scale']);
  if (Number.isFinite(storedScale) && storedScale > 0) {
    return clampImageScalePercent(storedScale);
  }

  const legacyWidth = Number(attrs.width);
  if (naturalWidth && Number.isFinite(legacyWidth) && legacyWidth > 0) {
    return clampImageScalePercent((legacyWidth / naturalWidth) * 100);
  }

  return clampImageScalePercent(defaultScalePercent);
}

export function countLocalImages(editor: Editor): number {
  let count = 0;
  editor.state.doc.descendants((node) => {
    if (node.type.name === 'localImage') count += 1;
  });
  return count;
}

export function applyImageScalePercent(
  editor: Editor,
  imagePosition: number | undefined,
  scalePercent: number,
  applyToAll: boolean
): number {
  const normalizedScale = clampImageScalePercent(scalePercent);
  const transaction = editor.state.tr;
  let changed = 0;

  editor.state.doc.descendants((node, position) => {
    if (node.type.name !== 'localImage') return;
    if (!applyToAll && position !== imagePosition) return;

    transaction.setNodeMarkup(position, undefined, {
      ...node.attrs,
      width: null,
      height: null,
      'data-image-scale': normalizedScale
    });
    changed += 1;
  });

  if (changed > 0) editor.view.dispatch(transaction);
  return changed;
}
