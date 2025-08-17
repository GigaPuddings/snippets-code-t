import { BaseAnnotation } from './BaseAnnotation'
import { DrawingContext, Rect, CoordinateTransform } from './types'

// 绘制引擎 - 统一处理所有绘制逻辑
export class DrawingEngine {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private coordinateTransform: CoordinateTransform

  constructor(canvas: HTMLCanvasElement, coordinateTransform: CoordinateTransform) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')!
    this.coordinateTransform = coordinateTransform
  }

  // 清空画布
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  // 绘制选择框
  drawSelectionBox(rect: Rect, showGuides: boolean = true) {
    const { x, y, width, height } = rect

    // 绘制蓝色边框
    this.ctx.strokeStyle = '#3b82f6'
    this.ctx.lineWidth = 1
    this.ctx.setLineDash([])
    this.ctx.strokeRect(x, y, width, height)

    if (showGuides) {
      this.drawGuides(rect)
      this.drawHandles(rect)
    }
  }

  // 绘制辅助线
  private drawGuides(rect: Rect) {
    const { x, y, width, height } = rect
    
    this.ctx.strokeStyle = '#3b82f6'
    this.ctx.lineWidth = 1
    this.ctx.setLineDash([4, 4])

    const thirdWidth = width / 3
    const thirdHeight = height / 3

    this.ctx.beginPath()
    // 垂直线
    this.ctx.moveTo(x + thirdWidth, y)
    this.ctx.lineTo(x + thirdWidth, y + height)
    this.ctx.moveTo(x + thirdWidth * 2, y)
    this.ctx.lineTo(x + thirdWidth * 2, y + height)
    // 水平线
    this.ctx.moveTo(x, y + thirdHeight)
    this.ctx.lineTo(x + width, y + thirdHeight)
    this.ctx.moveTo(x, y + thirdHeight * 2)
    this.ctx.lineTo(x + width, y + thirdHeight * 2)
    this.ctx.stroke()
  }

  // 绘制控制点
  private drawHandles(rect: Rect) {
    const { x, y, width, height } = rect
    
    this.ctx.setLineDash([])
    this.ctx.fillStyle = '#3b82f6'
    this.ctx.strokeStyle = '#ffffff'
    this.ctx.lineWidth = 2

    const handleSize = 8
    const handles = [
      { x: x - handleSize / 2, y: y - handleSize / 2 },
      { x: x + width - handleSize / 2, y: y - handleSize / 2 },
      { x: x - handleSize / 2, y: y + height - handleSize / 2 },
      { x: x + width - handleSize / 2, y: y + height - handleSize / 2 },
      { x: x + width / 2 - handleSize / 2, y: y - handleSize / 2 },
      { x: x + width / 2 - handleSize / 2, y: y + height - handleSize / 2 },
      { x: x - handleSize / 2, y: y + height / 2 - handleSize / 2 },
      { x: x + width - handleSize / 2, y: y + height / 2 - handleSize / 2 }
    ]

    handles.forEach(handle => {
      this.ctx.fillRect(handle.x, handle.y, handleSize, handleSize)
      this.ctx.strokeRect(handle.x, handle.y, handleSize, handleSize)
    })
  }

  // 绘制标注列表
  drawAnnotations(annotations: BaseAnnotation[], selectionBounds?: Rect) {
    const context = this.createDrawingContext(selectionBounds)
    
    annotations.forEach(annotation => {
      const data = annotation.getData()
      
      // 绘制悬停效果
      if (data.hovered) {
        annotation.drawHover(context)
      }
      
      // 绘制标注本体
      annotation.draw(context)
      
      // 绘制选中状态
      if (data.selected) {
        annotation.drawSelection(context)
        
        // 为矩形和箭头标注绘制控制点
        if (data.type === 'rectangle' || data.type === 'arrow') {
          this.drawAnnotationHandles(annotation)
        }
      }
    })
  }

  // 绘制当前正在创建的标注
  drawCurrentAnnotation(annotation: BaseAnnotation, selectionBounds?: Rect) {
    const context = this.createDrawingContext(selectionBounds)
    annotation.draw(context)
  }

  // 创建绘制上下文
  private createDrawingContext(bounds?: Rect): DrawingContext {
    return {
      ctx: this.ctx,
      scale: 1,
      offset: { x: 0, y: 0 },
      bounds: bounds || { x: 0, y: 0, width: this.canvas.width, height: this.canvas.height }
    }
  }

  // 为截图创建绘制上下文
  createScreenshotContext(targetCtx: CanvasRenderingContext2D, scale: number, bounds: Rect): DrawingContext {
    return {
      ctx: targetCtx,
      scale,
      offset: { x: bounds.x * scale, y: bounds.y * scale },
      bounds
    }
  }

  // 获取坐标转换器
  getCoordinateTransform(): CoordinateTransform {
    return this.coordinateTransform
  }

  // 获取画布
  getCanvas(): HTMLCanvasElement {
    return this.canvas
  }

  // 获取上下文
  getContext(): CanvasRenderingContext2D {
    return this.ctx
  }

  // 绘制标注控制点
  private drawAnnotationHandles(annotation: BaseAnnotation) {
    const data = annotation.getData()
    
    // 马赛克不需要控制点
    if (data.type === 'mosaic') {
      return
    }

    // 文字标注不需要控制点
    if (data.type === 'text') {
      return
    }

    // 矩形和箭头标注只显示起点和终点控制点
    if (data.type === 'rectangle' || data.type === 'arrow') {
      if (data.points.length >= 2) {
        const start = data.points[0]
        const end = data.points[data.points.length - 1]
        const handleSize = 8
        
        this.ctx.save()
        this.ctx.setLineDash([])
        this.ctx.fillStyle = '#3b82f6'
        this.ctx.strokeStyle = '#ffffff'
        this.ctx.lineWidth = 2

        // 起点控制点
        this.ctx.fillRect(start.x - handleSize / 2, start.y - handleSize / 2, handleSize, handleSize)
        this.ctx.strokeRect(start.x - handleSize / 2, start.y - handleSize / 2, handleSize, handleSize)

        // 终点控制点
        this.ctx.fillRect(end.x - handleSize / 2, end.y - handleSize / 2, handleSize, handleSize)
        this.ctx.strokeRect(end.x - handleSize / 2, end.y - handleSize / 2, handleSize, handleSize)
        
        this.ctx.restore()
      }
    }
  }
}
