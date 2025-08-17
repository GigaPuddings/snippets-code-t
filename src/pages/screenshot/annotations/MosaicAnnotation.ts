import { BaseAnnotation } from '../core/BaseAnnotation'
import { DrawingContext, Point, ToolType } from '../core/types'

export class MosaicAnnotation extends BaseAnnotation {
  constructor(
    startPoint: Point, 
    style: { color: string, lineWidth: number },
    mosaicSize: number = 15
  ) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: ToolType.Mosaic,
      points: [startPoint],
      style,
      mosaicSize,
      mosaicColor: '#d0d0d0'
    })
  }

  protected getMinPoints(): number {
    return 1
  }

  // 智能添加点（高密度插值确保连续性）
  addPoint(point: Point): void {
    if (this.data.points.length > 0) {
      const lastPoint = this.data.points[this.data.points.length - 1]
      const distance = Math.sqrt(
        Math.pow(point.x - lastPoint.x, 2) +
        Math.pow(point.y - lastPoint.y, 2)
      )

      // 如果距离太大，添加更多插值点以保持连续
      if (distance > 2) {
        const steps = Math.ceil(distance / 1) // 每1像素一个插值点，确保连续性
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
    if (this.data.points.length === 0) return

    const { ctx, bounds } = context
    this.drawMosaic(ctx, 1, { x: 0, y: 0 }, bounds)
  }

  drawToScreenshot(context: DrawingContext): void {
    if (this.data.points.length === 0) return

    const { ctx, scale, offset, bounds } = context
    this.drawMosaic(ctx, scale, offset, bounds)
  }

  private drawMosaic(
    ctx: CanvasRenderingContext2D, 
    scale: number, 
    offset: Point,
    bounds: { x: number, y: number, width: number, height: number }
  ): void {
    const brushSize = (this.data.mosaicSize || 15) * scale

    ctx.save()

    // 限制在指定区域内（如果有的话）
    if (bounds && scale > 1) {
      // 截图模式：限制在截图区域内
      ctx.rect(0, 0, bounds.width * scale, bounds.height * scale)
      ctx.clip()
    } else if (bounds) {
      // 预览模式：限制在选择区域内
      ctx.rect(bounds.x, bounds.y, bounds.width, bounds.height)
      ctx.clip()
    }

    // 设置半透明的白色遮罩
    ctx.globalAlpha = 0.7
    ctx.globalCompositeOperation = 'source-over'
    ctx.strokeStyle = 'rgba(220, 220, 220, 0.3)'
    ctx.fillStyle = 'rgba(220, 220, 220, 0.3)'
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = brushSize

    if (this.data.points.length === 1) {
      // 单点时画一个圆
      const point = this.data.points[0]
      const x = point.x * scale - offset.x
      const y = point.y * scale - offset.y
      
      ctx.beginPath()
      ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2)
      ctx.fill()
    } else if (this.data.points.length > 1) {
      // 多点时画连续的路径
      const firstPoint = this.data.points[0]
      const startX = firstPoint.x * scale - offset.x
      const startY = firstPoint.y * scale - offset.y
      
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      
      // 使用二次贝塞尔曲线使路径更平滑
      for (let i = 1; i < this.data.points.length - 1; i++) {
        const point = this.data.points[i]
        const nextPoint = this.data.points[i + 1]
        
        const pointX = point.x * scale - offset.x
        const pointY = point.y * scale - offset.y
        const nextX = nextPoint.x * scale - offset.x
        const nextY = nextPoint.y * scale - offset.y
        
        const xc = (pointX + nextX) / 2
        const yc = (pointY + nextY) / 2
        ctx.quadraticCurveTo(pointX, pointY, xc, yc)
      }
      
      // 连接到最后一个点
      if (this.data.points.length > 2) {
        const lastPoint = this.data.points[this.data.points.length - 1]
        const lastX = lastPoint.x * scale - offset.x
        const lastY = lastPoint.y * scale - offset.y
        ctx.lineTo(lastX, lastY)
      } else {
        const secondPoint = this.data.points[1]
        const secondX = secondPoint.x * scale - offset.x
        const secondY = secondPoint.y * scale - offset.y
        ctx.lineTo(secondX, secondY)
      }
      
      ctx.stroke()
      
      // 在每个点上额外画圆，确保连接处平滑
      this.data.points.forEach(point => {
        const x = point.x * scale - offset.x
        const y = point.y * scale - offset.y
        
        ctx.beginPath()
        ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    ctx.restore()
  }

  hitTest(point: Point, tolerance: number = 8): boolean {
    if (this.data.points.length === 0) return false

    if (this.data.points.length === 1) {
      // 单点情况
      const start = this.data.points[0]
      const distance = Math.sqrt(
        Math.pow(point.x - start.x, 2) + 
        Math.pow(point.y - start.y, 2)
      )
      return distance <= tolerance
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

  // 马赛克不显示选中状态
  drawSelection(_context: DrawingContext): void {
    // 马赛克标注不显示选中状态
  }

  // 马赛克不显示悬停效果
  drawHover(_context: DrawingContext): void {
    // 马赛克标注不显示悬停效果
  }

  // 更新马赛克大小
  updateMosaicSize(size: number): void {
    this.data.mosaicSize = size
  }

  // 获取马赛克大小
  getMosaicSize(): number {
    return this.data.mosaicSize || 15
  }
}
