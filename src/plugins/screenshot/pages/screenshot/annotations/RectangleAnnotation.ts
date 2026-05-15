import { BaseAnnotation } from '../core/BaseAnnotation'
import { DrawingContext, Point, ToolType } from '../core/types'
import { distance } from '../utils/geometry'

export class RectangleAnnotation extends BaseAnnotation {
  constructor(startPoint: Point, style: { color: string, lineWidth: number }) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: ToolType.Rectangle,
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
    const start = this.data.points[0]
    const end = this.data.points[this.data.points.length - 1]
    const width = end.x - start.x
    const height = end.y - start.y

    ctx.save()
    ctx.strokeStyle = this.data.style.color
    ctx.lineWidth = this.data.style.lineWidth
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.setLineDash([])
    
    ctx.strokeRect(start.x, start.y, width, height)
    ctx.restore()
  }

  drawToScreenshot(context: DrawingContext): void {
    if (this.data.points.length < 2) return

    const { ctx, scale, offset } = context
    const start = this.data.points[0]
    const end = this.data.points[this.data.points.length - 1]

    // 转换为相对于截图区域的坐标
    const relativeStart = {
      x: start.x * scale - offset.x,
      y: start.y * scale - offset.y
    }
    const width = (end.x - start.x) * scale
    const height = (end.y - start.y) * scale

    ctx.save()
    ctx.strokeStyle = this.data.style.color
    ctx.lineWidth = this.data.style.lineWidth * scale
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.setLineDash([])
    
    ctx.strokeRect(relativeStart.x, relativeStart.y, width, height)
    ctx.restore()
  }

  hitTest(point: Point, tolerance: number = 8): boolean {
    if (this.data.points.length < 2) return false

    const start = this.data.points[0]
    const end = this.data.points[this.data.points.length - 1]
    const minX = Math.min(start.x, end.x)
    const maxX = Math.max(start.x, end.x)
    const minY = Math.min(start.y, end.y)
    const maxY = Math.max(start.y, end.y)

    return point.x >= minX - tolerance && 
           point.x <= maxX + tolerance &&
           point.y >= minY - tolerance && 
           point.y <= maxY + tolerance
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
    const width = end.x - start.x
    const height = end.y - start.y

    ctx.save()
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 2
    ctx.setLineDash([4, 4])
    
    ctx.strokeRect(start.x, start.y, width, height)
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
