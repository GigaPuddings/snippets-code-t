import { BaseAnnotation } from '../core/BaseAnnotation'
import { DrawingContext, Point, ToolType } from '../core/types'
import { distance } from '../utils/geometry'

export class MosaicAnnotation extends BaseAnnotation {
  // 缓存离屏 Canvas 以减少 GC 压力（静态复用）
  private static helperCanvas: HTMLCanvasElement | null = null
  private static helperCtx: CanvasRenderingContext2D | null = null

  constructor(
    startPoint: Point, 
    style: { color: string, lineWidth: number },
    mosaicSize: number = 5 // 马赛克块的大小（参考专业工具，4-6px效果最佳）
  ) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: ToolType.Mosaic,
      points: [startPoint],
      style,
      mosaicSize,
      mosaicColor: 'transparent' // 真实马赛克不需要颜色，颜色源自底图
    })
  }

  protected getMinPoints(): number {
    return 1
  }

  addPoint(point: Point): void {
    if (this.data.points.length > 0) {
      const lastPoint = this.data.points[this.data.points.length - 1]
      const dist = distance(point, lastPoint)

      if (dist > 2) {
        const steps = Math.ceil(dist / 2) 
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
    this.renderRealMosaic(ctx, 1, { x: 0, y: 0 }, bounds)
  }

  drawToScreenshot(context: DrawingContext): void {
    if (this.data.points.length === 0) return

    const { ctx, scale, offset, bounds } = context
    this.renderRealMosaic(ctx, scale, offset, bounds)
  }

  /**
   * 核心渲染逻辑：真实像素化马赛克
   * 使用 ImageData 直接操作像素，避免坐标转换问题
   */
  private renderRealMosaic(
    ctx: CanvasRenderingContext2D, 
    _scale: number, 
    _offset: Point,
    clipBounds?: { x: number, y: number, width: number, height: number }
  ): void {
    // 1. 初始化辅助 Canvas
    if (!MosaicAnnotation.helperCanvas) {
      MosaicAnnotation.helperCanvas = document.createElement('canvas')
      MosaicAnnotation.helperCtx = MosaicAnnotation.helperCanvas.getContext('2d', { willReadFrequently: true })
    }
    const helperCanvas = MosaicAnnotation.helperCanvas!
    const helperCtx = MosaicAnnotation.helperCtx!

    // 2. 获取 DPI 和计算参数
    const dpr = window.devicePixelRatio || 1
    const mosaicSize = this.data.mosaicSize || 5
    // 物理像素的马赛克块大小
    const physicalBlockSize = Math.max(Math.round(mosaicSize * dpr), 2)
    // 笔刷大小（逻辑像素）
    const brushSize = mosaicSize * 3

    // 3. 计算包围盒（逻辑坐标）
    const rawBounds = this.getBounds()
    if (!rawBounds) return

    // 4. 扩展包围盒（加上笔刷半径）
    const padding = brushSize
    const logicalX = Math.floor(rawBounds.x - padding)
    const logicalY = Math.floor(rawBounds.y - padding)
    const logicalWidth = Math.ceil(rawBounds.width + padding * 2)
    const logicalHeight = Math.ceil(rawBounds.height + padding * 2)

    if (logicalWidth <= 0 || logicalHeight <= 0) return

    // 5. 转换为物理坐标
    const physicalX = Math.floor(logicalX * dpr)
    const physicalY = Math.floor(logicalY * dpr)
    const physicalWidth = Math.ceil(logicalWidth * dpr)
    const physicalHeight = Math.ceil(logicalHeight * dpr)

    // 6. 边界检查
    const canvasWidth = ctx.canvas.width
    const canvasHeight = ctx.canvas.height
    
    const srcX = Math.max(0, physicalX)
    const srcY = Math.max(0, physicalY)
    const srcWidth = Math.min(physicalWidth, canvasWidth - srcX)
    const srcHeight = Math.min(physicalHeight, canvasHeight - srcY)

    if (srcWidth <= 0 || srcHeight <= 0) return

    // 7. 从主画布获取像素数据
    let imageData: ImageData
    try {
      // 保存当前变换，重置后获取像素
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      imageData = ctx.getImageData(srcX, srcY, srcWidth, srcHeight)
      ctx.restore()
    } catch (e) {
      return
    }

    const data = imageData.data

    // 8. 对齐到全局网格
    const gridOffsetX = srcX % physicalBlockSize
    const gridOffsetY = srcY % physicalBlockSize

    // 9. 在原位置应用马赛克效果
    for (let blockY = -gridOffsetY; blockY < srcHeight; blockY += physicalBlockSize) {
      for (let blockX = -gridOffsetX; blockX < srcWidth; blockX += physicalBlockSize) {
        // 计算当前块的有效范围
        const startX = Math.max(0, blockX)
        const startY = Math.max(0, blockY)
        const endX = Math.min(srcWidth, blockX + physicalBlockSize)
        const endY = Math.min(srcHeight, blockY + physicalBlockSize)

        if (startX >= endX || startY >= endY) continue

        // 计算块内平均颜色
        let r = 0, g = 0, b = 0, count = 0
        for (let y = startY; y < endY; y++) {
          for (let x = startX; x < endX; x++) {
            const idx = (y * srcWidth + x) * 4
            r += data[idx]
            g += data[idx + 1]
            b += data[idx + 2]
            count++
          }
        }

        if (count > 0) {
          r = Math.round(r / count)
          g = Math.round(g / count)
          b = Math.round(b / count)

          // 将块内所有像素设置为平均色
          for (let y = startY; y < endY; y++) {
            for (let x = startX; x < endX; x++) {
              const idx = (y * srcWidth + x) * 4
              data[idx] = r
              data[idx + 1] = g
              data[idx + 2] = b
              // alpha 保持不变
            }
          }
        }
      }
    }

    // 10. 设置 helperCanvas 并绘制马赛克图像
    helperCanvas.width = srcWidth
    helperCanvas.height = srcHeight
    helperCtx.putImageData(imageData, 0, 0)

    // 11. 使用笔触路径裁剪
    helperCtx.globalCompositeOperation = 'destination-in'
    helperCtx.lineCap = 'round'
    helperCtx.lineJoin = 'round'
    helperCtx.lineWidth = brushSize * dpr
    helperCtx.fillStyle = '#000000'
    helperCtx.strokeStyle = '#000000'

    // 绘制路径（物理坐标系）
    this.drawPathPhysical(helperCtx, dpr, srcX, srcY)

    // 12. 绘制回主画布
    ctx.save()
    ctx.setTransform(1, 0, 0, 1, 0, 0)  // 重置变换，直接操作物理像素
    
    if (clipBounds) {
      ctx.beginPath()
      ctx.rect(
        clipBounds.x * dpr, 
        clipBounds.y * dpr, 
        clipBounds.width * dpr, 
        clipBounds.height * dpr
      )
      ctx.clip()
    }

    ctx.drawImage(helperCanvas, srcX, srcY)
    ctx.restore()
  }

  // 在物理坐标系中绘制路径
  private drawPathPhysical(
    ctx: CanvasRenderingContext2D,
    dpr: number,
    offsetX: number,
    offsetY: number
  ): void {
    if (this.data.points.length < 1) return

    ctx.beginPath()

    // 转换到 helperCanvas 的局部坐标
    const toLocalX = (p: Point) => p.x * dpr - offsetX
    const toLocalY = (p: Point) => p.y * dpr - offsetY

    if (this.data.points.length === 1) {
      const p = this.data.points[0]
      ctx.arc(toLocalX(p), toLocalY(p), ctx.lineWidth / 2, 0, Math.PI * 2)
      ctx.fill()
    } else {
      const startP = this.data.points[0]
      ctx.moveTo(toLocalX(startP), toLocalY(startP))

      for (let i = 1; i < this.data.points.length - 1; i++) {
        const p = this.data.points[i]
        const nextP = this.data.points[i + 1]
        const xc = (toLocalX(p) + toLocalX(nextP)) / 2
        const yc = (toLocalY(p) + toLocalY(nextP)) / 2
        ctx.quadraticCurveTo(toLocalX(p), toLocalY(p), xc, yc)
      }

      const lastP = this.data.points[this.data.points.length - 1]
      ctx.lineTo(toLocalX(lastP), toLocalY(lastP))
      ctx.stroke()
    }
  }

  hitTest(point: Point, tolerance: number = 8): boolean {
    if (this.data.points.length === 0) return false
    if (this.data.points.length === 1) {
      return distance(point, this.data.points[0]) <= (this.data.mosaicSize || 5) / 2 + tolerance
    }
    for (let i = 0; i < this.data.points.length - 1; i++) {
      const start = this.data.points[i]
      const end = this.data.points[i + 1]
      if (this.isPointNearLine(point, start, end, (this.data.mosaicSize || 5) / 2 + tolerance)) {
        return true
      }
    }
    return false
  }

  getBounds() {
    if (this.data.points.length === 0) return null
    let minX = this.data.points[0].x
    let maxX = this.data.points[0].x
    let minY = this.data.points[0].y
    let maxY = this.data.points[0].y
    for(const point of this.data.points) {
      minX = Math.min(minX, point.x)
      maxX = Math.max(maxX, point.x)
      minY = Math.min(minY, point.y)
      maxY = Math.max(maxY, point.y)
    }
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    }
  }

  private isPointNearLine(point: Point, start: Point, end: Point, tolerance: number): boolean {
    const A = point.x - start.x
    const B = point.y - start.y
    const C = end.x - start.x
    const D = end.y - start.y
    const dot = A * C + B * D
    const lenSq = C * C + D * D
    let param = -1
    if (lenSq !== 0) param = dot / lenSq
    let xx, yy
    if (param < 0) {
      xx = start.x
      yy = start.y
    } else if (param > 1) {
      xx = end.x
      yy = end.y
    } else {
      xx = start.x + param * C
      yy = start.y + param * D
    }
    const dx = point.x - xx
    const dy = point.y - yy
    return (dx * dx + dy * dy) <= tolerance * tolerance
  }

  drawSelection(_context: DrawingContext): void {}
  drawHover(_context: DrawingContext): void {}
  updateMosaicSize(size: number): void { this.data.mosaicSize = size }
  getMosaicSize(): number { return this.data.mosaicSize || 5 }
}
