import { describe, expect, it } from 'vitest';
import {
  SelectionCandidateStabilizer,
  areSelectionRectsEquivalent
} from './SelectionCandidateStabilizer';

describe('SelectionCandidateStabilizer', () => {
  it('keeps the confirmed element while a visual preview is temporarily empty', () => {
    const stabilizer = new SelectionCandidateStabilizer();
    const element = { x: 20, y: 30, width: 100, height: 40 };

    expect(stabilizer.finalize(element)).toEqual({
      rect: element,
      changed: true
    });
    expect(stabilizer.preview(null)).toEqual({
      rect: element,
      changed: false
    });
  });

  it('clears the held element after the final detector confirms no candidate', () => {
    const stabilizer = new SelectionCandidateStabilizer();
    stabilizer.finalize({ x: 20, y: 30, width: 100, height: 40 });

    expect(stabilizer.finalize(null)).toEqual({
      rect: null,
      changed: true
    });
  });

  it('updates a nearly identical precise rect without triggering a second redraw', () => {
    const stabilizer = new SelectionCandidateStabilizer();
    stabilizer.preview({ x: 20, y: 30, width: 100, height: 40 });
    const preciseRect = { x: 21, y: 29, width: 102, height: 42 };

    expect(stabilizer.finalize(preciseRect)).toEqual({
      rect: preciseRect,
      changed: false
    });
    expect(
      stabilizer.preview({ x: 20, y: 30, width: 100, height: 40 })
    ).toEqual({
      rect: preciseRect,
      changed: false
    });
  });

  it('ignores a coarse visual expansion after a precise element is confirmed', () => {
    const stabilizer = new SelectionCandidateStabilizer();
    const button = { x: 20, y: 30, width: 100, height: 40 };
    stabilizer.finalize(button);

    expect(stabilizer.preview({ x: 0, y: 0, width: 500, height: 300 })).toEqual(
      {
        rect: button,
        changed: false
      }
    );
  });
});

describe('areSelectionRectsEquivalent', () => {
  it('keeps materially different nested elements distinct', () => {
    expect(
      areSelectionRectsEquivalent(
        { x: 20, y: 30, width: 200, height: 80 },
        { x: 40, y: 40, width: 80, height: 30 }
      )
    ).toBe(false);
  });
});
