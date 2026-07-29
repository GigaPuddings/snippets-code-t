import { BaseAnnotation } from '../core/BaseAnnotation'
import { AnnotationStyle, DrawingContext, Point, Rect, ToolType } from '../core/types'
import { TEXT_FONT_FAMILY } from './TextAnnotation'

const DEFAULT_FONT_SIZE = 16

export const getMarkerRadius = (fontSize: number = DEFAULT_FONT_SIZE): number =>
  Math.max(12, Math.round(fontSize * 0.75))

export const getMarkerTextOrigin = (
  position: Point,
  fontSize: number = DEFAULT_FONT_SIZE
): Point => {
  const radius = getMarkerRadius(fontSize)
  return {
    x: position.x + radius + 12,
    y: position.y - fontSize / 2
  }
}

export class MarkerAnnotation extends BaseAnnotation {
  constructor(
    position: Point,
    markerNumber: number,
    text: string,
    style: AnnotationStyle,
    fontSize: number = DEFAULT_FONT_SIZE
  ) {
    super({
      id: Math.random().toString(36).substr(2, 9),
      type: ToolType.Marker,
      points: [position],
      style,
      text,
      fontSize,
      markerNumber
    })
  }

  protected getMinPoints(): number {
    return 1
  }

  draw(context: DrawingContext): void {
    this.drawMarker(context.ctx, 1, { x: 0, y: 0 })
  }

  drawToScreenshot(context: DrawingContext): void {
    this.drawMarker(context.ctx, context.scale, context.offset)
  }

  private drawMarker(
    ctx: CanvasRenderingContext2D,
    scale: number,
    offset: Point
  ): void {
    const position = this.data.points[0]
    if (!position) return

    const fontSize = (this.data.fontSize || DEFAULT_FONT_SIZE) * scale
    const radius = getMarkerRadius(this.data.fontSize || DEFAULT_FONT_SIZE) * scale
    const centerX = position.x * scale - offset.x
    const centerY = position.y * scale - offset.y
    const text = this.data.text?.trim() || ''

    ctx.save()
    this.applyOpacity(ctx)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.setLineDash([])
    this.drawMarkerFace(ctx, centerX, centerY, radius, fontSize, scale)

    if (text) {
      const logicalOrigin = getMarkerTextOrigin(
        position,
        this.data.fontSize || DEFAULT_FONT_SIZE
      )
      const textX = logicalOrigin.x * scale - offset.x
      const textY = logicalOrigin.y * scale - offset.y
      const lineY = textY + fontSize + 3 * scale

      ctx.font = `${fontSize}px ${TEXT_FONT_FAMILY}`
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'
      ctx.fillStyle = this.data.style.color
      ctx.fillText(text, textX, textY)

      const textWidth = ctx.measureText(text).width
      ctx.strokeStyle = this.data.style.color
      ctx.lineWidth = Math.max(2, this.data.style.lineWidth * scale * 0.75)
      ctx.beginPath()
      ctx.moveTo(centerX + radius * 0.72, centerY + radius * 0.72)
      ctx.lineTo(textX - 5 * scale, lineY)
      ctx.lineTo(textX + textWidth + 3 * scale, lineY)
      ctx.stroke()
    }

    ctx.restore()
  }

  private drawMarkerFace(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
    fontSize: number,
    scale: number
  ): void {
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.fillStyle = this.data.style.color
    ctx.fill()
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)'
    ctx.lineWidth = Math.max(1, scale)
    ctx.stroke()

    ctx.fillStyle = '#ffffff'
    ctx.font = `600 ${fontSize}px ${TEXT_FONT_FAMILY}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(String(this.data.markerNumber || 1), centerX, centerY + scale * 0.5)
  }

  hitTest(point: Point, tolerance: number = 8): boolean {
    const position = this.data.points[0]
    if (!position) return false

    const radius = getMarkerRadius(this.data.fontSize || DEFAULT_FONT_SIZE)
    const distance = Math.hypot(point.x - position.x, point.y - position.y)
    if (distance <= radius + tolerance) return true

    const bounds = this.getBounds()
    return !!bounds &&
      point.x >= bounds.x - tolerance &&
      point.x <= bounds.x + bounds.width + tolerance &&
      point.y >= bounds.y - tolerance &&
      point.y <= bounds.y + bounds.height + tolerance
  }

  getBounds(): Rect | null {
    const position = this.data.points[0]
    if (!position) return null

    const fontSize = this.data.fontSize || DEFAULT_FONT_SIZE
    const radius = getMarkerRadius(fontSize)
    const text = this.data.text?.trim() || ''
    let right = position.x + radius

    if (text) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.font = `${fontSize}px ${TEXT_FONT_FAMILY}`
        right = getMarkerTextOrigin(position, fontSize).x + ctx.measureText(text).width + 4
      }
    }

    return {
      x: position.x - radius,
      y: position.y - radius,
      width: right - (position.x - radius),
      height: Math.max(radius * 2, fontSize + radius)
    }
  }

  drawSelection(context: DrawingContext): void {
    this.drawStateOutline(context, '#3b82f6', [3, 3], 1)
  }

  drawHover(context: DrawingContext): void {
    this.drawStateOutline(context, '#3b82f6', [4, 4], 2)
  }

  private drawStateOutline(
    context: DrawingContext,
    color: string,
    dash: number[],
    lineWidth: number
  ): void {
    const bounds = this.getBounds()
    if (!bounds) return

    context.ctx.save()
    context.ctx.strokeStyle = color
    context.ctx.lineWidth = lineWidth
    context.ctx.setLineDash(dash)
    context.ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height)
    context.ctx.restore()
  }
}
