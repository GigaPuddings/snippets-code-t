import { BaseAnnotation } from '../core/BaseAnnotation'
import { AnnotationStyle, DrawingContext, Point, ToolType } from '../core/types'

export class EllipseAnnotation extends BaseAnnotation {
  constructor(startPoint: Point, style: AnnotationStyle) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: ToolType.Ellipse,
      points: [startPoint],
      style
    })
  }

  protected getMinPoints(): number {
    return 2
  }

  draw(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    this.drawEllipse(context.ctx, 1, { x: 0, y: 0 })
  }

  drawToScreenshot(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    this.drawEllipse(context.ctx, context.scale, context.offset)
  }

  private drawEllipse(ctx: CanvasRenderingContext2D, scale: number, offset: Point): void {
    const bounds = this.getBounds()
    if (!bounds) return

    const centerX = (bounds.x + bounds.width / 2) * scale - offset.x
    const centerY = (bounds.y + bounds.height / 2) * scale - offset.y
    const radiusX = Math.max(bounds.width * scale / 2, 0.5)
    const radiusY = Math.max(bounds.height * scale / 2, 0.5)

    ctx.save()
    this.applyOpacity(ctx)
    ctx.strokeStyle = this.data.style.color
    ctx.lineWidth = this.data.style.lineWidth * scale
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.setLineDash([])
    ctx.beginPath()
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }

  hitTest(point: Point, tolerance: number = 8): boolean {
    const bounds = this.getBounds()
    if (!bounds) return false

    const radiusX = bounds.width / 2
    const radiusY = bounds.height / 2
    if (radiusX < 1 || radiusY < 1) {
      return point.x >= bounds.x - tolerance &&
        point.x <= bounds.x + bounds.width + tolerance &&
        point.y >= bounds.y - tolerance &&
        point.y <= bounds.y + bounds.height + tolerance
    }

    const centerX = bounds.x + radiusX
    const centerY = bounds.y + radiusY
    const normalizedDistance = Math.sqrt(
      ((point.x - centerX) ** 2) / (radiusX ** 2) +
      ((point.y - centerY) ** 2) / (radiusY ** 2)
    )

    return Math.abs(normalizedDistance - 1) * Math.min(radiusX, radiusY) <= tolerance
  }

  getBounds() {
    if (this.data.points.length < 2) return null

    const start = this.data.points[0]
    const end = this.data.points[this.data.points.length - 1]
    const minX = Math.min(start.x, end.x)
    const maxX = Math.max(start.x, end.x)
    const minY = Math.min(start.y, end.y)
    const maxY = Math.max(start.y, end.y)

    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    }
  }

  drawSelection(context: DrawingContext): void {
    const { ctx } = context
    const bounds = this.getBounds()
    if (!bounds) return

    ctx.save()
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 1
    ctx.setLineDash([3, 3])
    ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height)
    ctx.restore()
  }

  drawHover(context: DrawingContext): void {
    const { ctx } = context
    const bounds = this.getBounds()
    if (!bounds) return

    ctx.save()
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 2
    ctx.setLineDash([4, 4])
    ctx.beginPath()
    ctx.ellipse(
      bounds.x + bounds.width / 2,
      bounds.y + bounds.height / 2,
      Math.max(bounds.width / 2, 0.5),
      Math.max(bounds.height / 2, 0.5),
      0,
      0,
      Math.PI * 2
    )
    ctx.stroke()
    ctx.restore()
  }
}
