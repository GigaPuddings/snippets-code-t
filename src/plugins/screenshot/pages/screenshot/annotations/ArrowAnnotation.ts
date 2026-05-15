import { BaseAnnotation } from '../core/BaseAnnotation'
import { DrawingContext, Point, ToolType } from '../core/types'
import { distance } from '../utils/geometry'

export class ArrowAnnotation extends BaseAnnotation {
  constructor(startPoint: Point, style: { color: string, lineWidth: number }) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: ToolType.Arrow,
      points: [startPoint],
      style
    })
  }

  protected getMinPoints(): number {
    return 2
  }

  draw(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    const { ctx } = context
    this.drawArrow(ctx, 1, { x: 0, y: 0 })
  }

  drawToScreenshot(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    const { ctx, scale, offset } = context
    this.drawArrow(ctx, scale, offset)
  }

  private drawArrow(ctx: CanvasRenderingContext2D, scale: number, offset: Point): void {
    const start = this.data.points[0]
    const end = this.data.points[this.data.points.length - 1]

    // 转换坐标
    const startPoint = {
      x: start.x * scale - offset.x,
      y: start.y * scale - offset.y
    }
    const endPoint = {
      x: end.x * scale - offset.x,
      y: end.y * scale - offset.y
    }

    ctx.save()
    ctx.strokeStyle = this.data.style.color
    ctx.lineWidth = this.data.style.lineWidth * scale
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.setLineDash([])

    // 绘制线条
    ctx.beginPath()
    ctx.moveTo(startPoint.x, startPoint.y)
    ctx.lineTo(endPoint.x, endPoint.y)
    ctx.stroke()

    // 绘制箭头头部
    const angle = Math.atan2(end.y - start.y, end.x - start.x)
    const arrowLength = 15 * scale
    const arrowAngle = Math.PI / 6

    ctx.beginPath()
    ctx.moveTo(endPoint.x, endPoint.y)
    ctx.lineTo(
      endPoint.x - arrowLength * Math.cos(angle - arrowAngle),
      endPoint.y - arrowLength * Math.sin(angle - arrowAngle)
    )
    ctx.moveTo(endPoint.x, endPoint.y)
    ctx.lineTo(
      endPoint.x - arrowLength * Math.cos(angle + arrowAngle),
      endPoint.y - arrowLength * Math.sin(angle + arrowAngle)
    )
    ctx.stroke()
    
    ctx.restore()
  }

  hitTest(point: Point, tolerance: number = 8): boolean {
    if (this.data.points.length < 2) return false

    const start = this.data.points[0]
    const end = this.data.points[this.data.points.length - 1]
    return this.isPointNearLine(point, start, end, tolerance)
  }

  private isPointNearLine(point: Point, start: Point, end: Point, tolerance: number): boolean {
    const A = point.x - start.x
    const B = point.y - start.y
    const C = end.x - start.x
    const D = end.y - start.y

    const dot = A * C + B * D
    const lenSq = C * C + D * D

    if (lenSq === 0) {
      return distance(point, start) <= tolerance
    }

    const param = dot / lenSq
    let closestPoint: Point

    if (param < 0) {
      closestPoint = start
    } else if (param > 1) {
      closestPoint = end
    } else {
      closestPoint = {
        x: start.x + param * C,
        y: start.y + param * D
      }
    }

    return distance(point, closestPoint) <= tolerance
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
    const handleSize = 6
    
    ctx.save()
    ctx.fillStyle = '#3b82f6'
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 1

    // 绘制控制点
    this.data.points.forEach(point => {
      ctx.fillRect(point.x - handleSize / 2, point.y - handleSize / 2, handleSize, handleSize)
      ctx.strokeRect(point.x - handleSize / 2, point.y - handleSize / 2, handleSize, handleSize)
    })
    
    ctx.restore()
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

  // 获取控制点位置检测
  getControlPointAtPosition(point: Point, tolerance: number = 12): number | null {
    if (!this.data.selected || this.data.points.length < 2) return null

    for (let i = 0; i < this.data.points.length; i++) {
      const controlPoint = this.data.points[i]
      if (distance(point, controlPoint) <= tolerance) {
        return i
      }
    }

    return null
  }

  // 更新控制点
  updateControlPoint(index: number, point: Point): void {
    if (index >= 0 && index < this.data.points.length) {
      this.data.points[index] = point
    }
  }
}
