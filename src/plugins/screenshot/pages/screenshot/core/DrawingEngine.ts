import { BaseAnnotation } from './BaseAnnotation'
import { DrawingContext, Rect, CoordinateTransform, ColorPickerState } from './types'
import { getRectCenter } from '../utils/geometry'
import { isValidRect } from '../utils/validation'

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
    // 【DPI修复】保存当前变换状态
    this.ctx.save()
    
    // 重置变换矩阵，确保清除整个物理画布
    this.ctx.setTransform(1, 0, 0, 1, 0, 0)
    
    // 清除整个物理画布（canvas.width 和 canvas.height 已经是物理尺寸）
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    
    // 恢复之前的变换状态（包括 scale）
    this.ctx.restore()
  }

  // 绘制遮罩层（选择区域外的半透明黑色遮罩）
  drawMask(selectionRect: Rect) {
    // 验证输入
    if (!isValidRect(selectionRect)) {
      console.warn('Invalid selection rect in drawMask:', selectionRect);
      return;
    }

    this.ctx.save()
    
    // 获取Canvas的逻辑尺寸
    const canvasWidth = this.canvas.width / (window.devicePixelRatio || 1)
    const canvasHeight = this.canvas.height / (window.devicePixelRatio || 1)
    
    // 使用整数坐标避免亚像素间隙（白线问题）
    const x = Math.round(selectionRect.x)
    const y = Math.round(selectionRect.y)
    const width = Math.round(selectionRect.width)
    const height = Math.round(selectionRect.height)
    
    // 使用 Path2D 和 evenodd 填充规则，一次性绘制带孔的遮罩
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
    this.ctx.beginPath()
    // 外部矩形（整个画布）
    this.ctx.rect(0, 0, canvasWidth, canvasHeight)
    // 内部矩形（选区，逆时针绘制以创建孔）
    this.ctx.moveTo(x, y)
    this.ctx.lineTo(x, y + height)
    this.ctx.lineTo(x + width, y + height)
    this.ctx.lineTo(x + width, y)
    this.ctx.closePath()
    // 使用 evenodd 填充规则
    this.ctx.fill('evenodd')
    
    this.ctx.restore()
  }

  // 绘制选择框
  drawSelectionBox(rect: Rect, showHandles: boolean = true) {
    const { x, y, width, height } = rect

    this.ctx.save()

    // 使用明暗双层虚线，让选区在深色和浅色背景上都清晰可见。
    const strokeX = Math.round(x) + 0.5
    const strokeY = Math.round(y) + 0.5
    const strokeWidth = Math.max(0, Math.round(width) - 1)
    const strokeHeight = Math.max(0, Math.round(height) - 1)

    this.ctx.lineWidth = 1
    this.ctx.setLineDash([5, 4])
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.62)'
    this.ctx.strokeRect(strokeX + 1, strokeY + 1, strokeWidth, strokeHeight)
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.96)'
    this.ctx.strokeRect(strokeX, strokeY, strokeWidth, strokeHeight)

    if (showHandles) {
      this.drawHandles(rect)
    }

    this.ctx.restore()
  }

  // 绘制控制点
  private drawHandles(rect: Rect) {
    const { x, y, width, height } = rect
    
    // 使用工具函数获取中心点和边缘中点
    const center = getRectCenter(rect)
    
    this.ctx.setLineDash([])

    const handles = [
      { x: x, y: y, width: 10, height: 10 },                  // 左上
      { x: x + width, y: y, width: 10, height: 10 },          // 右上
      { x: x, y: y + height, width: 10, height: 10 },         // 左下
      { x: x + width, y: y + height, width: 10, height: 10 }, // 右下
      { x: center.x, y: y, width: 16, height: 6 },            // 上中
      { x: center.x, y: y + height, width: 16, height: 6 },   // 下中
      { x: x, y: center.y, width: 6, height: 16 },            // 左中
      { x: x + width, y: center.y, width: 6, height: 16 }     // 右中
    ]

    handles.forEach(handle => {
      const handleX = Math.round(handle.x) - handle.width / 2
      const handleY = Math.round(handle.y) - handle.height / 2
      const radius = Math.min(handle.width, handle.height) / 2

      this.ctx.beginPath()
      this.ctx.roundRect(handleX + 1, handleY + 1, handle.width, handle.height, radius)
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.36)'
      this.ctx.fill()

      this.ctx.beginPath()
      this.ctx.roundRect(handleX, handleY, handle.width, handle.height, radius)
      this.ctx.fillStyle = '#ffffff'
      this.ctx.fill()
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
        
        // 为两点图形标注绘制控制点
        if (['rectangle', 'ellipse', 'line', 'arrow'].includes(data.type)) {
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

    // 两点图形标注只显示起点和终点控制点
    if (['rectangle', 'ellipse', 'line', 'arrow'].includes(data.type)) {
      if (data.points.length >= 2) {
        const start = data.points[0]
        const end = data.points[data.points.length - 1]
        const handleRadius = 4
        
        this.ctx.save()
        this.ctx.setLineDash([])
        this.ctx.fillStyle = '#ffffff'
        this.ctx.strokeStyle = '#3b82f6'
        this.ctx.lineWidth = 2

        // 起点控制点
        this.ctx.beginPath()
        this.ctx.arc(start.x, start.y, handleRadius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()

        // 终点控制点
        this.ctx.beginPath()
        this.ctx.arc(end.x, end.y, handleRadius, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()
        
        this.ctx.restore()
      }
    }
  }

  // 绘制取色器
  drawColorPicker(state: ColorPickerState, selectionBounds: Rect) {
    if (!state.isActive || !state.isVisible) return

    const { mousePosition, colorInfo, showFormat, previewImage, zoomFactor, isCopied } = state
    const uiWidth = 156
    const uiHeight = 188
    const margin = 18
    let uiX = mousePosition.x + margin
    let uiY = mousePosition.y + margin

    // 边界检测，防止UI超出选择框
    if (uiX + uiWidth > selectionBounds.x + selectionBounds.width) {
      uiX = mousePosition.x - uiWidth - margin
    }
    if (uiY + uiHeight > selectionBounds.y + selectionBounds.height) {
      uiY = mousePosition.y - uiHeight - margin
    }
    if (uiX < selectionBounds.x) {
      uiX = selectionBounds.x + margin
    }
    if (uiY < selectionBounds.y) {
      uiY = selectionBounds.y + margin
    }
    
    this.ctx.save()

    // 绘制UI容器
    this.ctx.fillStyle = 'rgba(250, 250, 250, 0.96)'
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.14)'
    this.ctx.lineWidth = 1
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.24)'
    this.ctx.shadowBlur = 18
    this.ctx.shadowOffsetY = 8
    this.ctx.beginPath()
    this.ctx.roundRect(uiX, uiY, uiWidth, uiHeight, 10)
    this.ctx.fill()
    this.ctx.stroke()
    this.ctx.shadowColor = 'transparent'
    this.ctx.shadowBlur = 0
    this.ctx.shadowOffsetY = 0
    
    // 绘制放大镜
    const previewSize = 108
    const previewX = uiX + (uiWidth - previewSize) / 2
    const previewY = uiY + 16
    
    // 绘制放大镜边框
    this.ctx.fillStyle = '#f3f4f6'
    this.ctx.fillRect(previewX, previewY, previewSize, previewSize)
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.26)'
    this.ctx.lineWidth = 1
    this.ctx.strokeRect(previewX, previewY, previewSize, previewSize)
    
    // 计算实际像素大小（使用实际图像尺寸，确保与像素网格对齐）
    const actualPixelCount = previewImage ? previewImage.width : zoomFactor
    const pixelSize = previewSize / actualPixelCount
    
    if (previewImage) {
      this.ctx.imageSmoothingEnabled = false
      this.ctx.drawImage(
        previewImage,
        0, 0, previewImage.width, previewImage.height,
        previewX, previewY, previewSize, previewSize
      )
      this.ctx.imageSmoothingEnabled = true
    }

    // 绘制像素网格，放大每个色块的边界，便于精确定位。
    this.ctx.beginPath()
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
    this.ctx.lineWidth = 1
    for (let i = 1; i < actualPixelCount; i++) {
      const lineOffset = previewX + i * pixelSize
      this.ctx.moveTo(lineOffset, previewY)
      this.ctx.lineTo(lineOffset, previewY + previewSize)
      const horizontalOffset = previewY + i * pixelSize
      this.ctx.moveTo(previewX, horizontalOffset)
      this.ctx.lineTo(previewX + previewSize, horizontalOffset)
    }
    this.ctx.stroke()

    this.ctx.beginPath()
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.22)'
    for (let i = 1; i < actualPixelCount; i++) {
      const lineOffset = previewX + i * pixelSize + 0.5
      this.ctx.moveTo(lineOffset, previewY)
      this.ctx.lineTo(lineOffset, previewY + previewSize)
      const horizontalOffset = previewY + i * pixelSize + 0.5
      this.ctx.moveTo(previewX, horizontalOffset)
      this.ctx.lineTo(previewX + previewSize, horizontalOffset)
    }
    this.ctx.stroke()

    // 绘制放大镜中心定位框（当前选取的像素）
    // 使用实际像素大小，确保定位框与像素网格精确对齐
    const centerPixelIndex = Math.floor(actualPixelCount / 2)
    const boxX = previewX + centerPixelIndex * pixelSize
    const boxY = previewY + centerPixelIndex * pixelSize

    // 中心色块半透明高亮，让目标格从网格中跳出来。
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.18)'
    this.ctx.fillRect(boxX, boxY, pixelSize, pixelSize)
    
    // 绘制白色外框（增强对比度）
    this.ctx.setLineDash([])
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.96)'
    this.ctx.lineWidth = 4
    this.ctx.strokeRect(
      boxX - 1, 
      boxY - 1, 
      pixelSize + 2, 
      pixelSize + 2
    )
    
    // 绘制黑色内框
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)'
    this.ctx.lineWidth = 2
    this.ctx.strokeRect(
      boxX, 
      boxY, 
      pixelSize, 
      pixelSize
    )
    
    // 绘制颜色和文本信息
    this.ctx.fillStyle = '#333'
    this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace'
    let textY = previewY + previewSize + 22

    if (colorInfo) {
      // 颜色块
      this.ctx.fillStyle = colorInfo.hex
      this.ctx.fillRect(uiX + 16, textY - 14, 20, 20)
      this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.22)'
      this.ctx.strokeRect(uiX + 16, textY - 14, 20, 20)
      
      // 颜色值
      this.ctx.fillStyle = '#111827'
      this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace'
      const colorText = showFormat === 'hex'
        ? colorInfo.hex
        : `${colorInfo.rgb.r}, ${colorInfo.rgb.g}, ${colorInfo.rgb.b}`
      this.ctx.fillText(colorText, uiX + 44, textY)
      textY += 19
    }

    // 坐标
    this.ctx.fillStyle = '#6b7280'
    this.ctx.font = '12px Arial'
    this.ctx.fillText(`X: ${Math.round(mousePosition.x)}, Y: ${Math.round(mousePosition.y)}`, uiX + 16, textY)
    textY += 17
    
    // 提示
    this.ctx.font = '12px Arial'
    const helpText = isCopied ? '已复制!' : 'Q:复制 Shift:切换'
    this.ctx.fillStyle = isCopied ? '#059669' : '#8b8f98'
    this.ctx.fillText(helpText, uiX + 16, textY)
    
    this.ctx.restore()
  }
}
