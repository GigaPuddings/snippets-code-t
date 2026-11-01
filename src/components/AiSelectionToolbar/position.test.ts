import { describe, expect, it } from 'vitest';
import { selectionToolbarPosition } from './position';

describe('selection toolbar positioning', () => {
  const size = { width: 156, height: 38 };
  const viewport = { width: 1000, height: 700 };

  it('sits to the right of the selected text instead of covering the line above', () => {
    expect(
      selectionToolbarPosition({ x: 420, y: 400, bottom: 420 }, size, viewport)
    ).toEqual({ left: 428, top: 400 });
  });

  it('moves below the selection when there is no space on the right', () => {
    expect(
      selectionToolbarPosition({ x: 960, y: 400, bottom: 420 }, size, viewport)
    ).toEqual({ left: 836, top: 428 });
  });

  it('stays within the viewport at the bottom edge', () => {
    expect(
      selectionToolbarPosition({ x: 960, y: 670, bottom: 690 }, size, viewport)
    ).toEqual({ left: 836, top: 624 });
  });

  it('clamps offscreen anchors after a selection extends outside the visible editor', () => {
    const result = selectionToolbarPosition(
      { x: -20, y: -50, bottom: -30 },
      size,
      viewport
    );
    expect(result).toEqual({ left: 8, top: 8 });
  });
});
