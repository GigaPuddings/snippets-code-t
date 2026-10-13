/** Query presence controls the native window size; result count and preview do not. */
export function getQuickSearchWindowHeight(
  hasQuery: boolean,
  availableHeight: number
): number {
  const collapsedHeight = 58;
  if (!hasQuery) return collapsedHeight;
  return Math.max(collapsedHeight, Math.min(464, availableHeight - 16));
}
