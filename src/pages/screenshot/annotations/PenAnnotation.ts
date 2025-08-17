import { BaseAnnotation } from '../core/BaseAnnotation'
import { DrawingContext, Point, ToolType } from '../core/types'

export class PenAnnotation extends BaseAnnotation {
  constructor(startPoint: Point, style: { color: string, lineWidth: number }) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: ToolType.Pen,
      points: [startPoint],
      style
    })
  }

  protected getMinPoints(): number {
    return 2
  }

  // 智能添加点（带插值）
  addPoint(point: Point): void {
    if (this.data.points.length > 0) {
      const lastPoint = this.data.points[this.data.points.length - 1]
      const distance = Math.sqrt(
        Math.pow(point.x - lastPoint.x, 2) +
        Math.pow(point.y - lastPoint.y, 2)
      )

      // 如果距离太大，添加插值点防止断线
      if (distance > 5) {
        const steps = Math.ceil(distance / 3)
        for (let i = 1; i < steps; i++) {
          const t = i / steps
          const interpX = lastPoint.x + (point.x - lastPoint.x) * t
          const interpY = lastPoint.y + (point.y - lastPoint.y) * t
          this.data.points.push({ x: interpX, y: interpY })
        }
      }
    }
    this.data.points.push(point)
  }

  draw(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    const { ctx } = context
    this.drawPath(ctx, 1, { x: 0, y: 0 })
  }

  drawToScreenshot(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    const { ctx, scale, offset } = context
    this.drawPath(ctx, scale, offset)
  }

  private drawPath(ctx: CanvasRenderingContext2D, scale: number, offset: Point): void {
    ctx.save()
    ctx.strokeStyle = this.data.style.color
    ctx.lineWidth = this.data.style.lineWidth * scale
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.setLineDash([])

    ctx.beginPath()
    
    // 转换第一个点
    const firstPoint = this.data.points[0]
    const startX = firstPoint.x * scale - offset.x
    const startY = firstPoint.y * scale - offset.y
    ctx.moveTo(startX, startY)

    // 绘制路径
    for (let i = 1; i < this.data.points.length; i++) {
      const point = this.data.points[i]
      const x = point.x * scale - offset.x
      const y = point.y * scale - offset.y
      ctx.lineTo(x, y)
    }

    ctx.stroke()
    ctx.restore()
  }

  hitTest(point: Point, tolerance: number = 8): boolean {
    if (this.data.points.length < 2) {
      // 单点情况
      if (this.data.points.length === 1) {
        const start = this.data.points[0]
        const distance = Math.sqrt(
          Math.pow(point.x - start.x, 2) + 
          Math.pow(point.y - start.y, 2)
        )
        return distance <= tolerance
      }
      return false
    }

    // 检查是否在路径附近
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const start = this.data.points[i]
      const end = this.data.points[i + 1]
      if (this.isPointNearLine(point, start, end, tolerance)) {
        return true
      }
    }

    return false
  }

  private isPointNearLine(point: Point, start: Point, end: Point, tolerance: number): boolean {
    const A = point.x - start.x
    const B = point.y - start.y
    const C = end.x - start.x
    const D = end.y - start.y

    const dot = A * C + B * D
    const lenSq = C * C + D * D

    if (lenSq === 0) {
      const distance = Math.sqrt(A * A + B * B)
      return distance <= tolerance
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

    const dx = point.x - closestPoint.x
    const dy = point.y - closestPoint.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    return distance <= tolerance
  }

  getBounds() {
    if (this.data.points.length === 0) return null

    let minX = this.data.points[0].x
    let maxX = this.data.points[0].x
    let minY = this.data.points[0].y
    let maxY = this.data.points[0].y

    this.data.points.forEach(point => {
      minX = Math.min(minX, point.x)
      maxX = Math.max(maxX, point.x)
      minY = Math.min(minY, point.y)
      maxY = Math.max(maxY, point.y)
    })

    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    }
  }

  drawSelection(context: DrawingContext): void {
    const bounds = this.getBounds()
    if (!bounds) return

    const { ctx } = context
    
    ctx.save()
    ctx.setLineDash([2, 2])
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 1
    ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height)
    ctx.restore()
  }

  drawHover(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    const { ctx } = context
    
    ctx.save()
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 2
    ctx.setLineDash([4, 4])
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    ctx.beginPath()
    ctx.moveTo(this.data.points[0].x, this.data.points[0].y)
    
    for (let i = 1; i < this.data.points.length; i++) {
      ctx.lineTo(this.data.points[i].x, this.data.points[i].y)
    }
    
    ctx.stroke()
    ctx.restore()
  }
}
