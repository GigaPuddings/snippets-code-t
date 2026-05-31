import { BaseAnnotation } from '../core/BaseAnnotation'
import { AnnotationStyle, DrawingContext, Point, ToolType } from '../core/types'
import { distance } from '../utils/geometry'

export class LineAnnotation extends BaseAnnotation {
  constructor(startPoint: Point, style: AnnotationStyle) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: ToolType.Line,
      points: [startPoint],
      style
    })
  }

  protected getMinPoints(): number {
    return 2
  }

  draw(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    this.drawLine(context.ctx, 1, { x: 0, y: 0 })
  }

  drawToScreenshot(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    this.drawLine(context.ctx, context.scale, context.offset)
  }

  private drawLine(ctx: CanvasRenderingContext2D, scale: number, offset: Point): void {
    const start = this.data.points[0]
    const end = this.data.points[this.data.points.length - 1]

    ctx.save()
    this.applyOpacity(ctx)
    ctx.strokeStyle = this.data.style.color
    ctx.lineWidth = this.data.style.lineWidth * scale
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.setLineDash([])
    ctx.beginPath()
    ctx.moveTo(start.x * scale - offset.x, start.y * scale - offset.y)
    ctx.lineTo(end.x * scale - offset.x, end.y * scale - offset.y)
    ctx.stroke()
    ctx.restore()
  }

  hitTest(point: Point, tolerance: number = 8): boolean {
    if (this.data.points.length < 2) return false

    const start = this.data.points[0]
    const end = this.data.points[this.data.points.length - 1]
    return this.isPointNearLine(point, start, end, tolerance)
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
    this.drawEndpoints(context.ctx)
  }

  drawHover(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    const { ctx } = context
    const start = this.data.points[0]
    const end = this.data.points[this.data.points.length - 1]

    ctx.save()
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 2
    ctx.setLineDash([4, 4])
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
    ctx.restore()
  }

  private drawEndpoints(ctx: CanvasRenderingContext2D): void {
    const handleSize = 6

    ctx.save()
    ctx.fillStyle = '#3b82f6'
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 1
    this.data.points.forEach(point => {
      ctx.fillRect(point.x - handleSize / 2, point.y - handleSize / 2, handleSize, handleSize)
      ctx.strokeRect(point.x - handleSize / 2, point.y - handleSize / 2, handleSize, handleSize)
    })
    ctx.restore()
  }

  private isPointNearLine(point: Point, start: Point, end: Point, tolerance: number): boolean {
    const deltaX = end.x - start.x
    const deltaY = end.y - start.y
    const lengthSquared = deltaX * deltaX + deltaY * deltaY

    if (lengthSquared === 0) {
      return distance(point, start) <= tolerance
    }

    const ratio = Math.max(0, Math.min(1, (
      (point.x - start.x) * deltaX + (point.y - start.y) * deltaY
    ) / lengthSquared))
    const closestPoint = {
      x: start.x + ratio * deltaX,
      y: start.y + ratio * deltaY
    }

    return distance(point, closestPoint) <= tolerance
  }
}
