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

describe('SelectionCandidateStabilizer hierarchy changes', () => {
  it('keeps the visible child when delayed detection returns its parent', () => {
    const stabilizer = new SelectionCandidateStabilizer();
    const child = { x: 80, y: 60, width: 120, height: 36 };
    const parent = { x: 40, y: 30, width: 420, height: 180 };
    stabilizer.preview(child);

    expect(stabilizer.finalize(parent)).toEqual({
      rect: child,
      changed: false
    });
  });

  it('allows delayed detection to refine a coarse candidate to a child', () => {
    const stabilizer = new SelectionCandidateStabilizer();
    const parent = { x: 40, y: 30, width: 420, height: 180 };
    const child = { x: 80, y: 60, width: 120, height: 36 };
    stabilizer.preview(parent);

    expect(stabilizer.finalize(child)).toEqual({
      rect: child,
      changed: true
    });
  });
});

describe('SelectionCandidateStabilizer hierarchy navigation', () => {
  it('orders nested candidates from child to parent and cycles both ways', () => {
    const stabilizer = new SelectionCandidateStabilizer();
    const child = { x: 80, y: 60, width: 120, height: 36 };
    const parent = { x: 40, y: 30, width: 420, height: 180 };
    const window = { x: 0, y: 0, width: 900, height: 600 };

    expect(stabilizer.setHierarchy([parent, window, child])).toEqual({
      rect: child,
      changed: true
    });
    expect(stabilizer.getHierarchyPosition()).toEqual({ index: 0, total: 3 });
    expect(stabilizer.cycleHierarchy(1)).toEqual({
      rect: parent,
      changed: true
    });
    expect(stabilizer.cycleHierarchy(1)).toEqual({
      rect: window,
      changed: true
    });
    expect(stabilizer.cycleHierarchy(-1)).toEqual({
      rect: parent,
      changed: true
    });
  });

  it('deduplicates equivalent bounds and excludes overlapping non-parents', () => {
    const stabilizer = new SelectionCandidateStabilizer();
    const child = { x: 80, y: 60, width: 120, height: 36 };
    const equivalentChild = { x: 81, y: 59, width: 121, height: 38 };
    const overlappingSibling = { x: 160, y: 50, width: 180, height: 80 };
    const parent = { x: 40, y: 30, width: 420, height: 180 };

    stabilizer.setHierarchy([
      parent,
      overlappingSibling,
      equivalentChild,
      child
    ]);

    expect(stabilizer.getHierarchyPosition()).toEqual({ index: 0, total: 2 });
    expect(stabilizer.cycleHierarchy(1)?.rect).toEqual(parent);
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
