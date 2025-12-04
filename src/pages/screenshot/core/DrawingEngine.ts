import { BaseAnnotation } from './BaseAnnotation'
import { DrawingContext, Rect, CoordinateTransform, ColorPickerState } from './types'

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
  drawSelectionBox(rect: Rect, showGuides: boolean = true) {
    const { x, y, width, height } = rect

    // 绘制虚线边框
    this.ctx.strokeStyle = '#3b82f6'
    this.ctx.lineWidth = 2
    this.ctx.setLineDash([6, 6])
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
    this.ctx.fillStyle = '#ffffff'
    this.ctx.strokeStyle = '#3b82f6'
    this.ctx.lineWidth = 2

    const handleRadius = 4
    const handles = [
      { x: x, y: y },
      { x: x + width, y: y },
      { x: x, y: y + height },
      { x: x + width, y: y + height },
      { x: x + width / 2, y: y },
      { x: x + width / 2, y: y + height },
      { x: x, y: y + height / 2 },
      { x: x + width, y: y + height / 2 }
    ]

    handles.forEach(handle => {
      this.ctx.beginPath()
      this.ctx.arc(handle.x, handle.y, handleRadius, 0, Math.PI * 2)
      this.ctx.fill()
      this.ctx.stroke()
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
    const uiWidth = 150
    const uiHeight = 190
    const margin = 20
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
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)'
    this.ctx.lineWidth = 1
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.2)'
    this.ctx.shadowBlur = 10
    this.ctx.beginPath()
    this.ctx.roundRect(uiX, uiY, uiWidth, uiHeight, 8)
    this.ctx.fill()
    this.ctx.stroke()
    this.ctx.shadowColor = 'transparent'
    
    // 绘制放大镜
    const previewSize = 100
    const previewX = uiX + (uiWidth - previewSize) / 2
    const previewY = uiY + 15
    
    // 绘制放大镜边框
    this.ctx.strokeStyle = '#ccc'
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

    // 绘制放大镜中心定位框（当前选取的像素）
    // 使用实际像素大小，确保定位框与像素网格精确对齐
    const centerPixelIndex = Math.floor(actualPixelCount / 2)
    const boxX = previewX + centerPixelIndex * pixelSize
    const boxY = previewY + centerPixelIndex * pixelSize
    
    // 绘制白色外框（增强对比度）
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'
    this.ctx.lineWidth = 2
    this.ctx.strokeRect(
      boxX - 1, 
      boxY - 1, 
      pixelSize + 2, 
      pixelSize + 2
    )
    
    // 绘制黑色内框
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)'
    this.ctx.lineWidth = 1
    this.ctx.strokeRect(
      boxX, 
      boxY, 
      pixelSize, 
      pixelSize
    )
    
    // 绘制颜色和文本信息
    this.ctx.fillStyle = '#333'
    this.ctx.font = '12px "SF Mono", "Consolas", "Monaco", monospace'
    let textY = previewY + previewSize + 25

    if (colorInfo) {
      // 颜色块
      this.ctx.fillStyle = colorInfo.hex
      this.ctx.fillRect(uiX + 15, textY - 13, 16, 16)
      this.ctx.strokeStyle = '#ccc'
      this.ctx.strokeRect(uiX + 15, textY - 13, 16, 16)
      
      // 颜色值
      this.ctx.fillStyle = '#333'
      const colorText = showFormat === 'hex'
        ? colorInfo.hex
        : `${colorInfo.rgb.r}, ${colorInfo.rgb.g}, ${colorInfo.rgb.b}`
      this.ctx.fillText(colorText, uiX + 40, textY)
      textY += 20
    }

    // 坐标
    this.ctx.fillStyle = '#666'
    this.ctx.font = '12px Arial'
    this.ctx.fillText(`X: ${Math.round(mousePosition.x)}, Y: ${Math.round(mousePosition.y)}`, uiX + 15, textY)
    textY += 20
    
    // 提示
    this.ctx.font = '12px Arial'
    const helpText = isCopied ? '已复制!' : 'Q:复制 Shift:切换'
    this.ctx.fillStyle = isCopied ? '#00A000' : '#888'
    this.ctx.fillText(helpText, uiX + 15, textY)
    
    this.ctx.restore()
  }
}
