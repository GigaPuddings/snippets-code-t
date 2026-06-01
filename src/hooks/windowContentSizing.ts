const WINDOW_HEIGHT_TOLERANCE = 1;

export function normalizeWindowContentHeight(contentHeight: number): number {
  if (!Number.isFinite(contentHeight)) {
    return 1;
  }

  return Math.max(1, Math.ceil(contentHeight));
}

export function shouldUpdateWindowHeight(
  currentHeight: number,
  targetHeight: number
): boolean {
  return (
    targetHeight > currentHeight ||
    currentHeight - targetHeight > WINDOW_HEIGHT_TOLERANCE
  );
}
