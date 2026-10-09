import { describe, expect, it, vi } from 'vitest';
import { AnnotationFactory } from '../core/AnnotationFactory';
import type { DrawingContext } from '../core/types';
import {
  RectangleAnnotation,
  RECTANGLE_ROTATION_HANDLE
} from './RectangleAnnotation';

const rectangle = () => {
  const annotation = new RectangleAnnotation(
    { x: 100, y: 100 },
    { color: '#ff4444', lineWidth: 3 }
  );
  annotation.addPoint({ x: 200, y: 160 });
  annotation.updateData({ selected: true });
  return annotation;
};

it('hits the rectangle outline, leaves its interior available for drawing, and detects all nine handles', () => {
  const annotation = rectangle();
  expect(annotation.hitTest({ x: 150, y: 100 })).toBe(true);
  expect(annotation.hitTest({ x: 150, y: 130 })).toBe(false);
  annotation.getControlPoints().forEach((point, index) => {
    expect(annotation.getControlPointAtPosition(point)).toBe(index);
  });
  expect(annotation.getControlPoints()).toHaveLength(9);
});

describe('rectangle resize anchors', () => {
  const axes = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0]
  ];
  it.each(axes.map((axis, index) => ({ axis, index })))(
    'resizes handle $index without moving its opposite anchor',
    ({ axis: [x, y], index }) => {
      const annotation = rectangle();
      const opposite = (index + 4) % 8;
      const anchor = annotation.getControlPoints()[opposite];
      const handle = annotation.getControlPoints()[index];
      annotation.updateControlPoint(index, {
        x: handle.x + x * 20,
        y: handle.y + y * 20
      });
      expect(annotation.getControlPoints()[opposite]).toEqual(anchor);
      expect(annotation.getBounds()?.width).toBe(x ? 120 : 100);
      expect(annotation.getBounds()?.height).toBe(y ? 80 : 60);
    }
  );
});

it('keeps the opposite edge fixed when resizing a rotated rectangle', () => {
  const annotation = rectangle();
  annotation.updateData({ rotation: Math.PI / 2 });
  const initial = structuredClone(annotation.getData());
  const anchor = annotation.getControlPoints()[7];
  const edge = annotation.getControlPoints()[3];
  annotation.updateControlPoint(3, { x: edge.x, y: edge.y + 20 }, initial);
  expect(annotation.getControlPoints()[7].x).toBeCloseTo(anchor.x);
  expect(annotation.getControlPoints()[7].y).toBeCloseTo(anchor.y);
  expect(annotation.getBounds()?.height).toBeCloseTo(120);
  expect(annotation.getData().rotation).toBe(Math.PI / 2);
});

it('rotates, hit-tests, restores history data and exports using the same angle at device scale', () => {
  const annotation = rectangle();
  annotation.updateControlPoint(RECTANGLE_ROTATION_HANDLE, { x: 240, y: 130 });
  expect(annotation.getData().rotation).toBeCloseTo(Math.PI / 2);
  expect(annotation.hitTest({ x: 120, y: 130 })).toBe(true);
  expect(annotation.hitTest({ x: 150, y: 130 })).toBe(false);
  const restored = AnnotationFactory.fromData(
    structuredClone(annotation.getData())
  );
  expect(restored?.getData().rotation).toBeCloseTo(Math.PI / 2);
  const ctx = {
    save: vi.fn(),
    restore: vi.fn(),
    translate: vi.fn(),
    rotate: vi.fn(),
    setLineDash: vi.fn(),
    strokeRect: vi.fn(),
    globalAlpha: 1
  };
  const context = {
    ctx,
    scale: 2,
    offset: { x: 20, y: 40 },
    bounds: { x: 10, y: 20, width: 300, height: 300 }
  } as unknown as DrawingContext;
  restored?.drawToScreenshot(context);
  expect(ctx.translate).toHaveBeenCalledWith(280, 220);
  expect(ctx.rotate).toHaveBeenCalledWith(Math.PI / 2);
  expect(ctx.strokeRect).toHaveBeenCalledWith(-100, -60, 200, 120);
});

it('fits a rotated rectangle inside the crop without losing rotation or distorting its aspect ratio', () => {
  const annotation = rectangle();
  annotation.updateData({ rotation: Math.PI / 4 });
  annotation.constrainToBounds({ x: 10, y: 20, width: 80, height: 80 });
  const bounds = annotation.getBounds()!;
  expect(bounds.x).toBeGreaterThanOrEqual(10 - 0.00001);
  expect(bounds.y).toBeGreaterThanOrEqual(20 - 0.00001);
  expect(bounds.x + bounds.width).toBeLessThanOrEqual(90.00001);
  expect(bounds.y + bounds.height).toBeLessThanOrEqual(100.00001);
  expect(annotation.getData().rotation).toBe(Math.PI / 4);
  const [start, end] = annotation.getData().points;
  expect((end.x - start.x) / (end.y - start.y)).toBeCloseTo(100 / 60);
});

it('snaps rotation with Shift and updates directional resize cursors after rotation', () => {
  const annotation = rectangle();
  expect(annotation.getControlPointCursor(3)).toBe('ew-resize');
  annotation.updateControlPoint(
    8,
    { x: 250, y: 150 },
    annotation.getData(),
    true
  );
  expect(annotation.getData().rotation! / (Math.PI / 12)).toBeCloseTo(
    Math.round(annotation.getData().rotation! / (Math.PI / 12))
  );
  annotation.updateData({ rotation: Math.PI / 2 });
  expect(annotation.getControlPointCursor(3)).toBe('ns-resize');
});
