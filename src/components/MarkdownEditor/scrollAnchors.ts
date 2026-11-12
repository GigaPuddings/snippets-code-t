export interface ScrollLayout {
  maxScroll: number;
  headingCount: number;
  headingTop: (index: number) => number;
  partialOutline?: boolean;
  matchesHeading?: (index: number) => boolean;
}

function sectionBounds(layout: ScrollLayout, heading: number) {
  const nextHeading = heading + 1;
  if (layout.partialOutline && nextHeading === layout.headingCount) return;
  if (heading >= 0 && layout.matchesHeading?.(heading) === false) return;
  if (
    nextHeading < layout.headingCount &&
    layout.matchesHeading?.(nextHeading) === false
  )
    return;
  const start = heading < 0 ? 0 : layout.headingTop(heading);
  const end =
    nextHeading < layout.headingCount
      ? layout.headingTop(nextHeading)
      : layout.maxScroll;
  return { start, end: Math.min(end, layout.maxScroll) };
}

export function captureScrollAnchor(top: number, layout: ScrollLayout) {
  const scrollTop = Math.max(0, Math.min(top, layout.maxScroll));
  let from = 0;
  let to = layout.headingCount;
  while (from < to) {
    const middle = (from + to) >>> 1;
    if (layout.headingTop(middle) <= scrollTop) from = middle + 1;
    else to = middle;
  }
  const heading = from - 1;
  const bounds = sectionBounds(layout, heading);
  const sectionProgress =
    bounds &&
    (bounds.end > bounds.start
      ? (scrollTop - bounds.start) / (bounds.end - bounds.start)
      : 0);
  return {
    heading,
    headingCount: layout.headingCount,
    sectionProgress,
    documentProgress: layout.maxScroll ? scrollTop / layout.maxScroll : 0
  };
}

export function restoreScrollAnchor(
  anchor: ReturnType<typeof captureScrollAnchor>,
  layout: ScrollLayout
): number {
  const fallback = anchor.documentProgress * layout.maxScroll;
  if (
    anchor.documentProgress === 0 ||
    anchor.documentProgress === 1 ||
    anchor.sectionProgress === undefined ||
    anchor.headingCount !== layout.headingCount
  ) {
    return fallback;
  }
  const bounds = sectionBounds(layout, anchor.heading);
  if (!bounds) return fallback;
  const { start, end } = bounds;
  return Math.min(
    layout.maxScroll,
    start + Math.max(0, end - start) * anchor.sectionProgress
  );
}
