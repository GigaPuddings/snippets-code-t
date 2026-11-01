export interface SelectionAnchor {
  x: number;
  y: number;
  bottom: number;
}

/** Prefer the empty space after the selection, then below it. */
export function selectionToolbarPosition(
  anchor: SelectionAnchor,
  size: { width: number; height: number },
  viewport: { width: number; height: number }
): { left: number; top: number } {
  const gap = 8;
  const maxLeft = Math.max(gap, viewport.width - size.width - gap);
  const maxTop = Math.max(gap, viewport.height - size.height - gap);
  const fitsRight = anchor.x + gap <= maxLeft;
  const preferredTop = fitsRight ? anchor.y : anchor.bottom + gap;
  return {
    left: Math.max(gap, Math.min(anchor.x + gap, maxLeft)),
    top: Math.max(
      gap,
      Math.min(
        preferredTop <= maxTop ? preferredTop : anchor.y - size.height - gap,
        maxTop
      )
    )
  };
}
