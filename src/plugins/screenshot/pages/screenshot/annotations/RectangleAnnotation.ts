import { BaseAnnotation } from '../core/BaseAnnotation';
import type {
  AnnotationData,
  AnnotationStyle,
  DrawingContext,
  Point,
  Rect
} from '../core/types';
import { ToolType } from '../core/types';
import { distance, getRectCenter, rectFromPoints } from '../utils/geometry';

// Clockwise from the top-left corner. The last handle rotates the shape.
const HANDLE_AXES = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0]
];
export const RECTANGLE_ROTATION_HANDLE = 8;

const rotatePoint = (point: Point, center: Point, angle: number): Point => ({
  x:
    center.x +
    (point.x - center.x) * Math.cos(angle) -
    (point.y - center.y) * Math.sin(angle),
  y:
    center.y +
    (point.x - center.x) * Math.sin(angle) +
    (point.y - center.y) * Math.cos(angle)
});

export class RectangleAnnotation extends BaseAnnotation {
  constructor(startPoint: Point, style: AnnotationStyle) {
    super({
      id: Math.random().toString(36).slice(2, 11),
      type: ToolType.Rectangle,
      points: [startPoint],
      style
    });
  }

  protected getMinPoints(): number {
    return 2;
  }

  private localBounds(data: AnnotationData = this.data): Rect | null {
    return data.points.length < 2
      ? null
      : rectFromPoints(data.points[0], data.points[data.points.length - 1]);
  }

  private drawOutline(
    context: DrawingContext,
    scale: number,
    offset: Point,
    hover = false
  ): void {
    const bounds = this.localBounds();
    if (!bounds) return;
    const { ctx } = context;
    const center = getRectCenter(bounds);
    ctx.save();
    this.applyOpacity(ctx);
    ctx.translate(center.x * scale - offset.x, center.y * scale - offset.y);
    ctx.rotate(this.data.rotation || 0);
    ctx.strokeStyle = hover ? '#3b82f6' : this.data.style.color;
    ctx.lineWidth = (hover ? 2 : this.data.style.lineWidth) * scale;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.setLineDash(hover ? [4, 4] : []);
    ctx.strokeRect(
      (-bounds.width * scale) / 2,
      (-bounds.height * scale) / 2,
      bounds.width * scale,
      bounds.height * scale
    );
    ctx.restore();
  }

  draw(context: DrawingContext): void {
    this.drawOutline(context, 1, { x: 0, y: 0 });
  }

  drawToScreenshot(context: DrawingContext): void {
    this.drawOutline(context, context.scale, context.offset);
  }

  hitTest(point: Point, tolerance = 8): boolean {
    const bounds = this.localBounds();
    if (!bounds) return false;
    const local = rotatePoint(
      point,
      getRectCenter(bounds),
      -(this.data.rotation || 0)
    );
    const padding = tolerance + this.data.style.lineWidth / 2;
    return (
      local.x >= bounds.x - padding &&
      local.x <= bounds.x + bounds.width + padding &&
      local.y >= bounds.y - padding &&
      local.y <= bounds.y + bounds.height + padding &&
      Math.min(
        Math.abs(local.x - bounds.x),
        Math.abs(local.x - bounds.x - bounds.width),
        Math.abs(local.y - bounds.y),
        Math.abs(local.y - bounds.y - bounds.height)
      ) <= padding
    );
  }

  getControlPoints(): Point[] {
    const bounds = this.localBounds();
    if (!bounds) return [];
    const center = getRectCenter(bounds);
    return [
      ...HANDLE_AXES.map(([x, y]) => ({
        x: center.x + (x * bounds.width) / 2,
        y: center.y + (y * bounds.height) / 2
      })),
      { x: center.x, y: bounds.y - 28 }
    ].map((point) => rotatePoint(point, center, this.data.rotation || 0));
  }

  getBounds(): Rect | null {
    const corners = this.getControlPoints().filter(
      (_, i) => i < 8 && i % 2 === 0
    );
    if (!corners.length) return null;
    const x = Math.min(...corners.map((point) => point.x));
    const y = Math.min(...corners.map((point) => point.y));
    return {
      x,
      y,
      width: Math.max(...corners.map((point) => point.x)) - x,
      height: Math.max(...corners.map((point) => point.y)) - y
    };
  }

  drawSelection({ ctx }: DrawingContext): void {
    const handles = this.getControlPoints();
    if (!handles.length) return;
    ctx.save();
    ctx.setLineDash([]);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(handles[1].x, handles[1].y);
    ctx.lineTo(handles[8].x, handles[8].y);
    ctx.stroke();
    handles.forEach((point, index) => {
      if (index === RECTANGLE_ROTATION_HANDLE) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.fillRect(point.x - 3, point.y - 3, 6, 6);
        ctx.strokeRect(point.x - 3, point.y - 3, 6, 6);
      }
    });
    ctx.restore();
  }

  drawHover(context: DrawingContext): void {
    this.drawOutline(context, 1, { x: 0, y: 0 }, true);
  }

  getControlPointAtPosition(point: Point, tolerance = 8): number | null {
    if (!this.data.selected) return null;
    const handles = this.getControlPoints();
    if (!handles.length) return null;
    // Choose the closest handle when a small shape has overlapping hit areas.
    const index = handles.reduce(
      (best, handle, i) =>
        distance(point, handle) < distance(point, handles[best]) ? i : best,
      0
    );
    return distance(point, handles[index]) <= tolerance ? index : null;
  }

  getControlPointCursor(index: number): string {
    if (index === RECTANGLE_ROTATION_HANDLE) return 'grab';
    const [x, y] = HANDLE_AXES[index];
    const angle = Math.atan2(y, x) + (this.data.rotation || 0);
    const direction = ((Math.round(angle / (Math.PI / 4)) % 4) + 4) % 4;
    return ['ew-resize', 'nwse-resize', 'ns-resize', 'nesw-resize'][direction];
  }

  updateControlPoint(
    index: number,
    point: Point,
    initial: AnnotationData = this.data,
    snapRotation = false
  ): void {
    const bounds = this.localBounds(initial);
    if (!bounds) return;
    const center = getRectCenter(bounds);
    const rotation = initial.rotation || 0;
    if (index === RECTANGLE_ROTATION_HANDLE) {
      const angle =
        Math.atan2(point.y - center.y, point.x - center.x) + Math.PI / 2;
      const step = Math.PI / 12;
      this.updateData({
        points: initial.points.map((position) => ({ ...position })),
        rotation: snapRotation ? Math.round(angle / step) * step : angle
      });
      return;
    }
    if (!HANDLE_AXES[index]) return;
    const local = rotatePoint(point, center, -rotation);
    const [x, y] = HANDLE_AXES[index];
    let left = bounds.x,
      right = bounds.x + bounds.width,
      top = bounds.y,
      bottom = bounds.y + bounds.height;
    if (x < 0) left = Math.min(local.x, right - 4);
    if (x > 0) right = Math.max(local.x, left + 4);
    if (y < 0) top = Math.min(local.y, bottom - 4);
    if (y > 0) bottom = Math.max(local.y, top + 4);
    const nextCenter = rotatePoint(
      { x: (left + right) / 2, y: (top + bottom) / 2 },
      center,
      rotation
    );
    const width = right - left,
      height = bottom - top;
    this.updateData({
      points: [
        { x: nextCenter.x - width / 2, y: nextCenter.y - height / 2 },
        { x: nextCenter.x + width / 2, y: nextCenter.y + height / 2 }
      ],
      rotation
    });
  }

  constrainToBounds(selection: Rect): void {
    let bounds = this.getBounds();
    const local = this.localBounds();
    if (!bounds || !local) return;
    // Keep the rotation and aspect ratio when the rotated extent exceeds the crop.
    const ratio = Math.min(
      1,
      selection.width / bounds.width,
      selection.height / bounds.height
    );
    if (ratio < 1) {
      const center = getRectCenter(local);
      this.updateData({
        points: [
          {
            x: center.x - (local.width * ratio) / 2,
            y: center.y - (local.height * ratio) / 2
          },
          {
            x: center.x + (local.width * ratio) / 2,
            y: center.y + (local.height * ratio) / 2
          }
        ]
      });
      const updatedBounds = this.getBounds();
      if (!updatedBounds) return;
      bounds = updatedBounds;
    }
    this.move(
      Math.max(
        selection.x,
        Math.min(bounds.x, selection.x + selection.width - bounds.width)
      ) - bounds.x,
      Math.max(
        selection.y,
        Math.min(bounds.y, selection.y + selection.height - bounds.height)
      ) - bounds.y
    );
  }
}
