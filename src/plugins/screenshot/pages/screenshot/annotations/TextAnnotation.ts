import { BaseAnnotation } from '../core/BaseAnnotation'
import { DrawingContext, Point, ToolType } from '../core/types'

export class TextAnnotation extends BaseAnnotation {
  constructor(
    position: Point,
    text: string,
    style: { color: string, lineWidth: number },
    fontSize: number = 16
  ) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: ToolType.Text,
      points: [position],
      style,
      text,
      fontSize
    })
  }

  protected getMinPoints(): number {
    return 1
  }

  // 更新文字内容
  updateText(text: string): void {
    this.data.text = text
  }

  // 更新字体大小
  updateFontSize(fontSize: number): void {
    this.data.fontSize = fontSize
  }

  draw(context: DrawingContext): void {
    if (!this.data.text || this.data.points.length === 0) return

    const { ctx } = context
    this.drawText(ctx, 1, { x: 0, y: 0 }, context.bounds)
  }

  drawToScreenshot(context: DrawingContext): void {
    if (!this.data.text || this.data.points.length === 0) return

    const { ctx, scale, offset, bounds } = context
    this.drawText(ctx, scale, offset, bounds)
  }

  private drawText(
    ctx: CanvasRenderingContext2D,
    scale: number,
    offset: Point,
    _bounds: { x: number, y: number, width: number, height: number }
  ): void {
    const fontSize = (this.data.fontSize || 16) * scale
    const position = this.data.points[0]

    ctx.save()
    ctx.font = `${fontSize}px sans-serif`
    ctx.fillStyle = this.data.style.color
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'

    // 计算文本位置
    const textX = (position.x + 4) * scale - offset.x
    const textY = (position.y - 8) * scale - offset.y


    ctx.fillText(this.data.text!, textX, textY)
    ctx.restore()
  }

  hitTest(point: Point, tolerance: number = 8): boolean {
    if (!this.data.text || this.data.points.length === 0) return false

    const position = this.data.points[0]
    const fontSize = this.data.fontSize || 16

    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')
    if (!tempCtx) return false

    tempCtx.font = `${fontSize}px sans-serif`
    const textMetrics = tempCtx.measureText(this.data.text)
    const textWidth = textMetrics.width

    const textX = position.x + 4
    const textY = position.y - 8

    return point.x >= textX - tolerance &&
      point.x <= textX + textWidth + tolerance &&
      point.y >= textY - tolerance &&
      point.y <= textY + fontSize + tolerance
  }

  getBounds() {
    if (!this.data.text || this.data.points.length === 0) return null

    const position = this.data.points[0]
    const fontSize = this.data.fontSize || 16

    // 创建临时canvas来计算文字宽度
    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')
    if (!tempCtx) return null

    tempCtx.font = `${fontSize}px sans-serif`
    const textMetrics = tempCtx.measureText(this.data.text)
    const textWidth = textMetrics.width

    const textX = position.x + 4
    const textY = position.y - 8

    return {
      x: textX,
      y: textY,
      width: textWidth,
      height: fontSize
    }
  }

  drawSelection(context: DrawingContext): void {
    if (!this.data.text || this.data.points.length === 0) return

    const { ctx, scale, offset } = context
    const position = this.data.points[0]
    const fontSize = (this.data.fontSize || 16) * scale

    const textX = (position.x + 4) * scale - offset.x
    const textY = (position.y - 8) * scale - offset.y

    // 计算文字宽度
    ctx.save()
    ctx.font = `${fontSize}px sans-serif`
    const textMetrics = ctx.measureText(this.data.text)
    const textWidth = textMetrics.width

    // 绘制选择框
    ctx.setLineDash([2, 2])
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 1
    ctx.strokeRect(textX, textY, textWidth, fontSize)
    ctx.restore()
  }

  drawHover(context: DrawingContext): void {
    if (!this.data.text || this.data.points.length === 0) return

    const { ctx, scale, offset } = context
    const position = this.data.points[0]
    const fontSize = (this.data.fontSize || 16) * scale

    const textX = (position.x + 4) * scale - offset.x
    const textY = (position.y - 8) * scale - offset.y

    // 计算文字宽度
    ctx.save()
    ctx.font = `${fontSize}px sans-serif`
    const textMetrics = ctx.measureText(this.data.text)
    const textWidth = textMetrics.width

    // 绘制悬停框
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 2
    ctx.setLineDash([4, 4])
    ctx.strokeRect(textX, textY, textWidth, fontSize)
    ctx.restore()
  }

  // 获取文字内容
  getText(): string {
    return this.data.text || ''
  }

  // 获取字体大小
  getFontSize(): number {
    return this.data.fontSize || 16
  }

  // 检查是否为空文字
  isEmpty(): boolean {
    return !this.data.text || this.data.text.trim().length === 0
  }

  // 重写isValid方法
  isValid(): boolean {
    return this.data.points.length >= this.getMinPoints() && !this.isEmpty()
  }
}
