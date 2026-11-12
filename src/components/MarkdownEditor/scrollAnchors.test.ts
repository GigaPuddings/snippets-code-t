import { describe, expect, it } from 'vitest';
import { captureScrollAnchor, restoreScrollAnchor } from './scrollAnchors';

function layout(maxScroll: number, headings: number[] = []) {
  return {
    maxScroll,
    headingCount: headings.length,
    headingTop: (index: number) => headings[index]
  };
}

describe('Markdown scroll anchors', () => {
  it('keeps the reader halfway through the same section when section heights differ', () => {
    const editing = layout(1600, [20, 400, 800]);
    const reading = layout(2400, [32, 900, 1100]);
    const anchor = captureScrollAnchor(600, editing);
    expect(restoreScrollAnchor(anchor, reading)).toBe(1000);
    expect(
      restoreScrollAnchor(captureScrollAnchor(1000, reading), editing)
    ).toBe(600);
  });

  it('preserves document progress when the outlines cannot be paired', () => {
    const anchor = captureScrollAnchor(750, layout(1000, [20, 750]));
    expect(restoreScrollAnchor(anchor, layout(2000))).toBe(1500);
  });

  it('uses document progress past the last known boundary of a partial outline', () => {
    const editing = { ...layout(1600, [20, 400]), partialOutline: true };
    const reading = { ...layout(2400, [32, 900]), partialOutline: true };
    expect(
      restoreScrollAnchor(captureScrollAnchor(800, editing), reading)
    ).toBe(1200);
  });

  it('keeps the document bottom when the last heading is below the top of the viewport', () => {
    const anchor = captureScrollAnchor(800, layout(800, [20, 950]));
    expect(restoreScrollAnchor(anchor, layout(1200, [32, 1250]))).toBe(1200);
  });
});
