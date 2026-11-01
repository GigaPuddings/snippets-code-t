/** Query presence controls the native window size; result count and preview do not. */
export function getQuickSearchWindowHeight(
  hasQuery: boolean,
  availableHeight: number
): number {
  const collapsedHeight = 58;
  if (!hasQuery) return collapsedHeight;
  // 300px for six result rows, plus 142px for input, tabs, footer and borders.
  return Math.max(collapsedHeight, Math.min(442, availableHeight - 16));
}
