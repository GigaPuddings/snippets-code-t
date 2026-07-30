import { describe, expect, it } from 'vitest';
import { ToolType } from '../core/types';
import { clampCornerRadius, constrainShapeEndPoint } from './geometry';

describe('constrainShapeEndPoint', () => {
  it.each([ToolType.Rectangle, ToolType.Ellipse])(
    'keeps %s width and height equal while Shift is held',
    (type) => {
      expect(
        constrainShapeEndPoint(type, { x: 10, y: 10 }, { x: 34, y: 22 }, true)
      ).toEqual({ x: 34, y: 34 });
    }
  );

  it('snaps a line to the nearest 45 degree angle', () => {
    const end = constrainShapeEndPoint(
      ToolType.Line,
      { x: 0, y: 0 },
      { x: 30, y: 4 },
      true
    );
    expect(end.y).toBeCloseTo(0);
    expect(end.x).toBeCloseTo(Math.hypot(30, 4));
  });

  it('does not constrain shapes without Shift', () => {
    expect(
      constrainShapeEndPoint(
        ToolType.Rectangle,
        { x: 0, y: 0 },
        { x: 30, y: 12 },
        false
      )
    ).toEqual({ x: 30, y: 12 });
  });
});

describe('clampCornerRadius', () => {
  it('limits the radius to half of the shortest side', () => {
    expect(clampCornerRadius(40, 100, 30)).toBe(15);
  });
});
