import { BaseAnnotation } from './BaseAnnotation'
import { DrawingEngine } from './DrawingEngine'
import { CoordinateSystem } from './CoordinateSystem'
import { EventHandler } from './EventHandler'
import { AnnotationFactory } from './AnnotationFactory'
import { Point, Rect, ToolType, AnnotationStyle, OperationType, ColorInfo, ColorPickerState } from './types'
import { invoke } from '@tauri-apps/api/core'

// 截图管理器 - 统一管理截图功能
export class ScreenshotManager {
  private canvas: HTMLCanvasElement
  private coordinateSystem: CoordinateSystem
  private drawingEngine: DrawingEngine
  private eventHandler: EventHandler
  
  // 状态管理
  private selectionRect: Rect | null = null
  private annotations: BaseAnnotation[] = []
  private currentAnnotation: BaseAnnotation | null = null
  private selectedAnnotation: BaseAnnotation | null = null
  private hoveredAnnotation: BaseAnnotation | null = null
  
  // 拖拽状态
  private draggedAnnotation: BaseAnnotation | null = null
  private dragStartPoint: Point | null = null
  private resizingAnnotation: BaseAnnotation | null = null
  private resizeStartBounds: { x: number, y: number, width: number, height: number } | null = null
  private resizeOperation: OperationType | null = null
  
  // 工具设置
  private currentTool: ToolType = ToolType.Select
  private currentStyle: AnnotationStyle = { color: '#ff4444', lineWidth: 3 }
  private textSize = 16
  private mosaicSize = 15
  private showGuides = true

  // 取色器状态
  private colorPickerState: ColorPickerState = {
    isActive: false,
    isVisible: false, // 默认不可见
    mousePosition: { x: 0, y: 0 },
    showFormat: 'hex',
    zoomFactor: 15, // 提升放大倍数
    isCopied: false
  }

  // 节流相关状态
  private throttleTimer: number | null = null
  private lastThrottledTimestamp = 0
  private readonly throttleInterval = 50 // ms, 20 FPS

  // 回调函数
  private onStateChange?: () => void
  private onTextInputRequest?: (position: Point, existingAnnotation?: BaseAnnotation) => void
  private onColorPicked?: (colorInfo: ColorInfo) => void

  constructor(
    canvas: HTMLCanvasElement, 
    onStateChange?: () => void,
    onTextInputRequest?: (position: Point, existingAnnotation?: BaseAnnotation) => void,
    onColorPicked?: (colorInfo: ColorInfo) => void
  ) {
    this.canvas = canvas
    this.onStateChange = onStateChange
    this.onTextInputRequest = onTextInputRequest
    this.onColorPicked = onColorPicked
    
    this.coordinateSystem = new CoordinateSystem(canvas)
    this.drawingEngine = new DrawingEngine(canvas, this.coordinateSystem)
    this.eventHandler = new EventHandler(canvas, this.coordinateSystem)

    // 绑定鼠标事件
    this.bindMouseEvents()

    this.initCanvas()
  }

  // 初始化画布
  private initCanvas(): void {
    const container = this.canvas.parentElement
    if (!container) return

    // 画布尺寸应该与容器一致，不需要屏幕尺寸
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight

    this.canvas.width = containerWidth
    this.canvas.height = containerHeight
    this.canvas.style.width = containerWidth + 'px'
    this.canvas.style.height = containerHeight + 'px'

    this.coordinateSystem.updateCanvasRect(this.canvas)
  }

  // 事件处理器引用（用于清理）
  private mouseDownHandler = this.handleMouseDown.bind(this)
  private mouseMoveHandler = this.handleMouseMove.bind(this)
  private mouseUpHandler = this.handleMouseUp.bind(this)
  private doubleClickHandler = this.handleDoubleClick.bind(this)

  // 绑定鼠标事件
  private bindMouseEvents(): void {
    this.canvas.addEventListener('mousedown', this.mouseDownHandler)
    this.canvas.addEventListener('mousemove', this.mouseMoveHandler)
    this.canvas.addEventListener('mouseup', this.mouseUpHandler)
    this.canvas.addEventListener('dblclick', this.doubleClickHandler)
  }

  // 鼠标按下处理
  private handleMouseDown(event: MouseEvent): void {
    event.preventDefault()
    event.stopPropagation()

    const mousePos = this.coordinateSystem.getCanvasPosition(event)
    const operationType = this.eventHandler.getOperationType(
      mousePos, 
      this.currentTool, 
      this.selectionRect, 
      this.annotations
    )

    // 开始绘制操作
    if (operationType !== OperationType.None) {
      this.eventHandler.setCurrentOperation(operationType)
      this.eventHandler.startDrawing(mousePos)
      
      // 根据操作类型执行相应操作
      switch (operationType) {
        case OperationType.Drawing:
          if (!this.selectionRect && this.currentTool === ToolType.Select) {
            // 创建选择框
            this.selectionRect = {
              x: mousePos.x,
              y: mousePos.y,
              width: 0,
              height: 0
            }
            this.onStateChange?.()
          }
          break

        case OperationType.DrawingRect:
        case OperationType.DrawingArrow:
        case OperationType.DrawingPen:
        case OperationType.DrawingMosaic:
          this.startAnnotation(mousePos)
          break

        case OperationType.DrawingText:
          this.startTextInput(mousePos)
          this.eventHandler.stopDrawing() // 文字输入不需要绘制状态
          break

        case OperationType.ColorPicking:
          this.handleColorPicking(mousePos)
          this.eventHandler.stopDrawing() // 取色不需要绘制状态
          break

        case OperationType.EditingAnnotation:
          this.selectAnnotationAtPoint(mousePos)
          // 如果是文字标注，开始编辑
          if (this.selectedAnnotation && this.selectedAnnotation.getData().type === ToolType.Text) {
            this.startTextInput(this.selectedAnnotation.getData().points[0], this.selectedAnnotation)
          }
          break

        case OperationType.MovingAnnotation:
          this.startAnnotationDrag(mousePos)
          break

        case OperationType.ResizingAnnotationNW:
        case OperationType.ResizingAnnotationSE:
          this.startAnnotationResize(mousePos, operationType)
          break

        case OperationType.Moving:
        case OperationType.ResizingNW:
        case OperationType.ResizingNE:
        case OperationType.ResizingSW:
        case OperationType.ResizingSE:
        case OperationType.ResizingN:
        case OperationType.ResizingS:
        case OperationType.ResizingW:
        case OperationType.ResizingE:
          // 选择框操作，不需要额外处理
          break
      }
    }
  }

  // 鼠标移动处理
  private handleMouseMove(event: MouseEvent): void {
    const mousePos = this.coordinateSystem.getCanvasPosition(event)
    const drawingState = this.eventHandler.getDrawingState()

    if (drawingState.isDrawing) {
      // 更新鼠标位置
      this.eventHandler.updateMousePosition(mousePos)
      
      if (this.currentAnnotation) {
        // 更新当前标注
        this.updateCurrentAnnotation(mousePos)
      } else if (this.draggedAnnotation) {
        // 拖拽标注
        this.updateAnnotationDrag(mousePos)
      } else if (this.resizingAnnotation) {
        // 缩放标注
        this.updateAnnotationResize(mousePos)
      } else if (this.selectionRect && this.currentTool === ToolType.Select) {
        // 更新选择框
        this.updateSelectionRect(mousePos, drawingState)
      }
      this.draw()
      this.onStateChange?.()
    } else {
      // 更新悬停状态
      this.updateHoverState(mousePos)
      
      // 如果在取色模式下，更新鼠标位置并实时获取颜色预览
      if (this.currentTool === ToolType.ColorPicker && this.selectionRect) {
        // 检查鼠标是否在选择区域内
        const isInside = this.coordinateSystem.isPointInRect(mousePos, this.selectionRect)
        
        if (isInside) {
          this.colorPickerState.isVisible = true
          // 1. 立即更新UI位置
          this.colorPickerState.mousePosition = mousePos
          this.draw() // 立即重绘以移动UI
          
          // 2. 使用节流更新UI内容（放大镜图像和颜色）
          this.throttledUpdateColorPreview(mousePos)
        } else {
          // 如果鼠标移出区域，则隐藏UI
          if (this.colorPickerState.isVisible) {
            this.colorPickerState.isVisible = false
            this.draw()
          }
        }
      }
    }
  }

  // 鼠标抬起处理
  private handleMouseUp(_event: MouseEvent): void {
    const drawingState = this.eventHandler.getDrawingState()
    
    if (drawingState.isDrawing) {
      // 结束绘制状态
      this.eventHandler.stopDrawing()
      
      // 完成标注
      this.finishAnnotation()
      
      // 完成标注拖拽
      this.finishAnnotationDrag()
      
      // 完成标注缩放
      this.finishAnnotationResize()
      
      // 如果选择区域太小，清除选择
      if (this.selectionRect && 
          (Math.abs(this.selectionRect.width) < 10 || Math.abs(this.selectionRect.height) < 10)) {
        this.selectionRect = null
      } else if (this.selectionRect) {
        // 标准化选择框（处理负宽高）
        if (this.selectionRect.width < 0) {
          this.selectionRect.x += this.selectionRect.width
          this.selectionRect.width = Math.abs(this.selectionRect.width)
        }
        if (this.selectionRect.height < 0) {
          this.selectionRect.y += this.selectionRect.height
          this.selectionRect.height = Math.abs(this.selectionRect.height)
        }
      }
      
      this.draw()
      this.onStateChange?.()
    }
  }

  // 双击处理
  private handleDoubleClick(event: MouseEvent): void {
    const mousePos = this.coordinateSystem.getCanvasPosition(event)
    const clickedAnnotation = this.eventHandler.getAnnotationAtPoint(mousePos, this.annotations)
    
    if (clickedAnnotation?.getData().type === ToolType.Text) {
      // 编辑文字标注
      this.clearSelection()
      clickedAnnotation.updateData({ selected: true })
      this.selectedAnnotation = clickedAnnotation
      this.startTextInput(mousePos, clickedAnnotation)
    }
  }

  // 更新选择框
  private updateSelectionRect(mousePos: Point, drawingState: any): void {
    if (!this.selectionRect) return

    const currentOperation = drawingState.currentOperation
    const deltaX = mousePos.x - drawingState.lastMousePos.x
    const deltaY = mousePos.y - drawingState.lastMousePos.y



    switch (currentOperation) {
      case OperationType.Drawing:
        // 创建新选择框
        this.selectionRect.width = mousePos.x - drawingState.startPoint.x
        this.selectionRect.height = mousePos.y - drawingState.startPoint.y
        break

      case OperationType.Moving:
        // 移动选择框
        this.selectionRect.x += deltaX
        this.selectionRect.y += deltaY
        break

      case OperationType.ResizingNW:
        this.selectionRect.x += deltaX
        this.selectionRect.y += deltaY
        this.selectionRect.width -= deltaX
        this.selectionRect.height -= deltaY
        break

      case OperationType.ResizingNE:
        this.selectionRect.y += deltaY
        this.selectionRect.width += deltaX
        this.selectionRect.height -= deltaY
        break

      case OperationType.ResizingSW:
        this.selectionRect.x += deltaX
        this.selectionRect.width -= deltaX
        this.selectionRect.height += deltaY
        break

      case OperationType.ResizingSE:
        this.selectionRect.width += deltaX
        this.selectionRect.height += deltaY
        break

      case OperationType.ResizingN:
        this.selectionRect.y += deltaY
        this.selectionRect.height -= deltaY
        break

      case OperationType.ResizingS:
        this.selectionRect.height += deltaY
        break

      case OperationType.ResizingW:
        this.selectionRect.x += deltaX
        this.selectionRect.width -= deltaX
        break

      case OperationType.ResizingE:
        this.selectionRect.width += deltaX
        break
    }

    // 确保最小尺寸
    if (this.selectionRect.width < 10) {
      this.selectionRect.width = 10
    }
    if (this.selectionRect.height < 10) {
      this.selectionRect.height = 10
    }


  }

  // 选择指定位置的标注
  private selectAnnotationAtPoint(mousePos: Point): void {
    const annotationAtPoint = this.eventHandler.getAnnotationAtPoint(mousePos, this.annotations)
    
    if (annotationAtPoint && annotationAtPoint !== this.selectedAnnotation) {
      // 清除之前的选择状态
      if (this.selectedAnnotation) {
        this.selectedAnnotation.updateData({ selected: false })
      }

      // 设置新的选择状态
      this.selectedAnnotation = annotationAtPoint
      this.selectedAnnotation.updateData({ selected: true })
      
      // 如果是文字标注，可以进入编辑模式
      if (this.selectedAnnotation.getData().type === ToolType.Text) {
        this.startTextInput(mousePos, this.selectedAnnotation)
      }

      this.draw()
      this.onStateChange?.()

    }
  }

  // 开始标注拖拽
  private startAnnotationDrag(mousePos: Point): void {
    const annotationAtPoint = this.eventHandler.getAnnotationAtPoint(mousePos, this.annotations)
    
    if (annotationAtPoint) {
      this.draggedAnnotation = annotationAtPoint
      this.dragStartPoint = mousePos
      
      // 确保标注被选中
      if (this.selectedAnnotation !== annotationAtPoint) {
        if (this.selectedAnnotation) {
          this.selectedAnnotation.updateData({ selected: false })
        }
        this.selectedAnnotation = annotationAtPoint
        this.selectedAnnotation.updateData({ selected: true })
      }
      

    }
  }

  // 更新标注拖拽
  private updateAnnotationDrag(mousePos: Point): void {
    if (!this.draggedAnnotation || !this.dragStartPoint) return

    const deltaX = mousePos.x - this.dragStartPoint.x
    const deltaY = mousePos.y - this.dragStartPoint.y
    
    // 计算新的位置（相对于起始点）
    this.draggedAnnotation.move(deltaX, deltaY)
    
    // 边界检查：确保不超出选择框
    this.constrainAnnotationToBounds(this.draggedAnnotation)
    
    // 更新拖拽起始点为当前位置，这样下次移动是相对的
    this.dragStartPoint = mousePos
  }

  // 完成标注拖拽
  private finishAnnotationDrag(): void {
    if (this.draggedAnnotation) {
      this.draggedAnnotation = null
      this.dragStartPoint = null
    }
  }

  // 开始标注缩放
  private startAnnotationResize(mousePos: Point, operation: OperationType): void {
    const annotationAtPoint = this.eventHandler.getAnnotationAtPoint(mousePos, this.annotations)
    
    if (annotationAtPoint) {
      this.resizingAnnotation = annotationAtPoint
      this.resizeOperation = operation
      
      const bounds = annotationAtPoint.getBounds()
      if (bounds) {
        this.resizeStartBounds = { ...bounds }
      }
      
      // 确保标注被选中
      if (this.selectedAnnotation !== annotationAtPoint) {
        if (this.selectedAnnotation) {
          this.selectedAnnotation.updateData({ selected: false })
        }
        this.selectedAnnotation = annotationAtPoint
        this.selectedAnnotation.updateData({ selected: true })
      }
    }
  }

  // 更新标注缩放
  private updateAnnotationResize(mousePos: Point): void {
    if (!this.resizingAnnotation || !this.resizeStartBounds || !this.resizeOperation) return

    const data = this.resizingAnnotation.getData()
    if (data.points.length < 2) return

    const startPoint = data.points[0]
    
    // 根据缩放操作更新终点
    // let newEndPoint: Point

    switch (this.resizeOperation) {
      case OperationType.ResizingAnnotationNW:
        // 起点拖拽：起点移动，终点不变
        this.resizingAnnotation.updateData({
          points: [mousePos, data.points[1]]
        })
        break

      case OperationType.ResizingAnnotationSE:
        // 终点拖拽：终点移动，起点不变
        this.resizingAnnotation.updateData({
          points: [startPoint, mousePos]
        })
        break
    }

    // 边界检查：确保不超出选择框
    this.constrainAnnotationToBounds(this.resizingAnnotation)
  }

  // 完成标注缩放
  private finishAnnotationResize(): void {
    if (this.resizingAnnotation) {
      this.resizingAnnotation = null
      this.resizeStartBounds = null
      this.resizeOperation = null
    }
  }

  // 边界约束：确保标注不超出选择框
  private constrainAnnotationToBounds(annotation: BaseAnnotation): void {
    if (!this.selectionRect) return

    const bounds = annotation.getBounds()
    if (!bounds) return

    const data = annotation.getData()
    if (data.points.length < 1) return

    const selectionBounds = this.selectionRect
    let needsUpdate = false
    let newPoints = [...data.points]

    // 对于矩形和箭头标注（有两个点）
    if (data.points.length >= 2) {
      // 确保所有点都在选择框内
      for (let i = 0; i < newPoints.length; i++) {
        const point = newPoints[i]
        
        if (point.x < selectionBounds.x) {
          newPoints[i] = { ...point, x: selectionBounds.x }
          needsUpdate = true
        } else if (point.x > selectionBounds.x + selectionBounds.width) {
          newPoints[i] = { ...point, x: selectionBounds.x + selectionBounds.width }
          needsUpdate = true
        }
        
        if (point.y < selectionBounds.y) {
          newPoints[i] = { ...point, y: selectionBounds.y }
          needsUpdate = true
        } else if (point.y > selectionBounds.y + selectionBounds.height) {
          newPoints[i] = { ...point, y: selectionBounds.y + selectionBounds.height }
          needsUpdate = true
        }
      }
    }

    // 对于多点标注（画笔、马赛克）
    if (data.points.length > 2) {
      for (let i = 0; i < newPoints.length; i++) {
        const point = newPoints[i]
        
        if (point.x < selectionBounds.x || point.x > selectionBounds.x + selectionBounds.width ||
            point.y < selectionBounds.y || point.y > selectionBounds.y + selectionBounds.height) {
          // 移除超出边界的点
          newPoints.splice(i, 1)
          i--
          needsUpdate = true
        }
      }
    }

    if (needsUpdate) {
      annotation.updateData({ points: newPoints })
    }
  }

  // 更新悬停状态
  private updateHoverState(mousePos: Point): void {
    if (this.currentTool !== ToolType.Select) {
      this.updateCursor('crosshair')
      return
    }

    const annotationAtPoint = this.eventHandler.getAnnotationAtPoint(mousePos, this.annotations)
    
    if (annotationAtPoint !== this.hoveredAnnotation) {
      // 清除之前的悬停状态
      if (this.hoveredAnnotation) {
        this.hoveredAnnotation.updateData({ hovered: false })
      }

      // 设置新的悬停状态（马赛克除外）
      this.hoveredAnnotation = annotationAtPoint && annotationAtPoint.getData().type !== ToolType.Mosaic 
        ? annotationAtPoint 
        : null
      
      if (this.hoveredAnnotation) {
        this.hoveredAnnotation.updateData({ hovered: true })
      }

      this.draw()
    }

    // 更新鼠标样式
    this.updateCursorForPosition(mousePos)
  }

  // 更新鼠标样式
  private updateCursorForPosition(mousePos: Point): void {
    if (this.currentTool !== ToolType.Select) {
      this.updateCursor('crosshair')
      return
    }

    if (!this.selectionRect) {
      this.updateCursor('crosshair')
      return
    }

    const operationType = this.eventHandler.getOperationType(
      mousePos, 
      this.currentTool, 
      this.selectionRect, 
      this.annotations
    )

    const cursorMap: Record<string, string> = {
      [OperationType.Moving]: 'move',
      [OperationType.ResizingNW]: 'nw-resize',
      [OperationType.ResizingNE]: 'ne-resize',
      [OperationType.ResizingSW]: 'sw-resize',
      [OperationType.ResizingSE]: 'se-resize',
      [OperationType.ResizingN]: 'n-resize',
      [OperationType.ResizingS]: 's-resize',
      [OperationType.ResizingW]: 'w-resize',
      [OperationType.ResizingE]: 'e-resize',
      [OperationType.EditingAnnotation]: 'pointer',
      [OperationType.MovingAnnotation]: 'move',
      [OperationType.ResizingAnnotationNW]: 'nw-resize',
      [OperationType.ResizingAnnotationSE]: 'se-resize',
      [OperationType.Drawing]: 'crosshair'
    }

    const cursor = cursorMap[operationType] || 'default'
    this.updateCursor(cursor)
  }

  // 更新画布cursor样式
  private updateCursor(cursor: string): void {
    if (this.canvas.style.cursor !== cursor) {
      this.canvas.style.cursor = cursor
    }
  }

  // 绘制所有内容
  draw(): void {
    this.drawingEngine.clear()

    // 绘制所有标注
    if (this.annotations.length > 0) {
      this.drawingEngine.drawAnnotations(this.annotations, this.selectionRect || undefined)
    }

    // 绘制当前正在创建的标注
    if (this.currentAnnotation) {
      this.drawingEngine.drawCurrentAnnotation(this.currentAnnotation, this.selectionRect || undefined)
    }

    // 绘制选择框
    if (this.selectionRect) {
      this.drawingEngine.drawSelectionBox(this.selectionRect, this.showGuides)
    }

    // 绘制取色器UI
    if (this.colorPickerState.isActive && this.selectionRect) {
      this.drawingEngine.drawColorPicker(this.colorPickerState, this.selectionRect)
    }
  }

  // 设置工具
  setTool(tool: ToolType): void {
    this.currentTool = tool
    this.clearSelection()
    
    // 切换到标注工具时隐藏辅助线
    this.showGuides = tool === ToolType.Select
    
    // 管理取色器状态
    this.colorPickerState.isActive = tool === ToolType.ColorPicker
    if (!this.colorPickerState.isActive) {
      // 重置取色器状态
      this.colorPickerState.isVisible = false
      this.colorPickerState.colorInfo = undefined
    }
    
    // 清除悬停状态
    if (tool !== ToolType.Select && this.hoveredAnnotation) {
      this.hoveredAnnotation.updateData({ hovered: false })
      this.hoveredAnnotation = null
    }
    
    this.draw()
    this.onStateChange?.()
  }

  // 开始创建标注
  startAnnotation(point: Point): void {
    if (!AnnotationFactory.isDrawingTool(this.currentTool)) {
      return
    }

    // 如果是文字工具，直接触发文字输入
    if (this.currentTool === ToolType.Text) {
      this.startTextInput(point)
      return
    }

    this.currentAnnotation = AnnotationFactory.createAnnotation(
      this.currentTool,
      point,
      this.currentStyle,
      {
        fontSize: this.textSize,
        mosaicSize: this.mosaicSize
      }
    )
  }

  // 更新当前标注
  updateCurrentAnnotation(point: Point): void {
    if (!this.currentAnnotation) {
      return
    }

    const data = this.currentAnnotation.getData()
    
    switch (data.type) {
      case ToolType.Rectangle:
      case ToolType.Arrow:
        // 矩形和箭头只需要起点和终点
        if (data.points.length === 1) {
          // 如果只有起点，添加终点
          this.currentAnnotation.addPoint(point)
        } else {
          // 如果已有两个点，更新最后一个点
          this.currentAnnotation.updateLastPoint(point)
        }
        break
        
      case ToolType.Pen:
      case ToolType.Mosaic:
        // 画笔和马赛克需要添加所有点
        this.currentAnnotation.addPoint(point)
        break
    }
  }

  // 完成标注创建
  finishAnnotation(): void {
    if (this.currentAnnotation) {
      const isValid = this.currentAnnotation.isValid()
      
      if (isValid) {
        this.annotations.push(this.currentAnnotation)
        this.onStateChange?.()
      }
    }
    this.currentAnnotation = null
  }

  // 撤销最后一个标注
  undoAnnotation(): void {
    if (this.annotations.length > 0) {
      this.annotations.pop()
      this.draw()
      this.onStateChange?.()
    }
  }

  // 删除选中的标注
  deleteSelectedAnnotation(): void {
    if (this.selectedAnnotation) {
      const index = this.annotations.findIndex(a => a.getData().id === this.selectedAnnotation!.getData().id)
      if (index !== -1) {
        this.annotations.splice(index, 1)
        this.selectedAnnotation = null
        this.draw()
        this.onStateChange?.()
      }
    }
  }

  // 清除所有选中状态
  clearSelection(): void {
    this.annotations.forEach(annotation => {
      annotation.updateData({ selected: false, hovered: false })
    })
    this.selectedAnnotation = null
    this.hoveredAnnotation = null
  }

  // 创建文字标注
  createTextAnnotation(point: Point, text: string): void {
    if (!text.trim()) return

    const textAnnotation = AnnotationFactory.createAnnotation(
      ToolType.Text,
      point,
      this.currentStyle,
      {
        text: text.trim(),
        fontSize: this.textSize
      }
    )

    if (textAnnotation && textAnnotation.isValid()) {
      this.annotations.push(textAnnotation)
      this.draw()
      this.onStateChange?.()
    }
  }

  // 开始文字输入
  private startTextInput(point: Point, existingAnnotation?: BaseAnnotation): void {
    this.onTextInputRequest?.(point, existingAnnotation)
  }

  // 截图并处理标注
  async processScreenshot(action: 'copy' | 'save'): Promise<void> {
    if (!this.selectionRect) return

    try {
      const { x, y, width, height } = this.selectionRect

      // 获取窗口信息
      const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
      const scale = windowInfo?.scale || 1

      // 计算实际屏幕坐标
      const screenX = Math.round(windowInfo.x + x * scale)
      const screenY = Math.round(windowInfo.y + y * scale)
      const screenWidth = Math.round(width * scale)
      const screenHeight = Math.round(height * scale)

      // 捕获屏幕区域
      const result = await invoke('capture_screen_area', {
        x: screenX,
        y: screenY,
        width: screenWidth,
        height: screenHeight
      }) as {
        image: string,
        adjusted_width: number,
        adjusted_height: number
      }

      if (!result?.image) {
        throw new Error('Failed to capture screen area')
      }

      // 处理标注并生成最终图像
      const finalImage = await this.renderWithAnnotations(result, scale)

      // 执行相应操作
      if (action === 'copy') {
        await invoke('copy_to_clipboard', { image: finalImage })
      } else {
        await invoke('save_screenshot_to_file', { image: finalImage })
      }
    } catch (error) {
      console.error(`Failed to ${action} screenshot:`, error)
      throw error
    }
  }

  // 渲染带标注的图像
  private async renderWithAnnotations(
    captureResult: { image: string, adjusted_width: number, adjusted_height: number },
    scale: number
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = captureResult.adjusted_width
      tempCanvas.height = captureResult.adjusted_height
      const tempCtx = tempCanvas.getContext('2d')

      if (!tempCtx) {
        reject(new Error('Failed to get 2D context'))
        return
      }

      const img = new Image()
      img.onload = () => {
        // 绘制背景图像
        tempCtx.drawImage(img, 0, 0)

        // 绘制标注
        if (this.annotations.length > 0 && this.selectionRect) {
          const context = this.drawingEngine.createScreenshotContext(
            tempCtx,
            scale,
            this.selectionRect
          )

          this.annotations.forEach(annotation => {
            annotation.drawToScreenshot(context)
          })
        }

        // 转换为base64
        const dataUrl = tempCanvas.toDataURL('image/png')
        const base64 = dataUrl.replace(/^data:image\/(png|jpeg);base64,/, '')
        resolve(base64)
      }

      img.onerror = () => {
        reject(new Error('Failed to load captured image'))
      }

      img.src = `data:image/png;base64,${captureResult.image}`
    })
  }

  // 获取当前状态
  getState() {
    return {
      selectionRect: this.selectionRect,
      annotations: this.annotations.map(a => a.getData()),
      currentTool: this.currentTool,
      currentStyle: this.currentStyle,
      textSize: this.textSize,
      mosaicSize: this.mosaicSize,
      hasSelection: !!this.selectionRect,
      hasAnnotations: this.annotations.length > 0,
      selectedAnnotation: this.selectedAnnotation?.getData() || null,
      isDrawing: this.eventHandler.getDrawingState().isDrawing
    }
  }

  // 获取绘制状态
  getDrawingState(): boolean {
    return this.eventHandler.getDrawingState().isDrawing
  }

  // 更新样式
  updateStyle(updates: Partial<AnnotationStyle>): void {
    this.currentStyle = { ...this.currentStyle, ...updates }
    this.onStateChange?.()
  }

  // 更新文字大小
  updateTextSize(size: number): void {
    this.textSize = size
    this.onStateChange?.()
  }

  // 更新马赛克大小
  updateMosaicSize(size: number): void {
    this.mosaicSize = size
    this.onStateChange?.()
  }

  // 删除指定标注
  deleteAnnotation(annotation: BaseAnnotation): void {
    const index = this.annotations.findIndex(a => a === annotation)
    if (index !== -1) {
      this.annotations.splice(index, 1)
      if (this.selectedAnnotation === annotation) {
        this.selectedAnnotation = null
      }
      this.draw()
      this.onStateChange?.()
    }
  }

  // 更新文字标注内容
  updateTextAnnotation(annotation: BaseAnnotation, text: string): void {
    if (annotation.getData().type === ToolType.Text) {
      annotation.updateData({ text })
      this.draw()
      this.onStateChange?.()
    }
  }

  // 处理颜色取样
  private async handleColorPicking(mousePos: Point): Promise<void> {
    if (!this.selectionRect) return

    try {
      // 获取窗口信息
      const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
      const scale = windowInfo?.scale || 1

      // 计算实际屏幕坐标 (相对于选择区域)
      const screenX = Math.round(windowInfo.x + (this.selectionRect.x + mousePos.x - this.selectionRect.x) * scale)
      const screenY = Math.round(windowInfo.y + (this.selectionRect.y + mousePos.y - this.selectionRect.y) * scale)

      // 调用 Tauri 命令获取像素颜色
      const colorData = await invoke('get_pixel_color', {
        x: screenX,
        y: screenY
      }) as { r: number, g: number, b: number }

      // 转换为 HEX 格式
      const hex = this.rgbToHex(colorData.r, colorData.g, colorData.b)

      const colorInfo: ColorInfo = {
        rgb: colorData,
        hex,
        position: mousePos
      }

      // 调用颜色取样回调
      this.onColorPicked?.(colorInfo)

      // 更新状态以显示 "已复制"
      this.colorPickerState.isCopied = true
      this.draw()
      setTimeout(() => {
        this.colorPickerState.isCopied = false
        this.draw()
      }, 1000)

    } catch (error) {
      console.error('Failed to get pixel color:', error)
    }
  }

  // 实时更新颜色预览（鼠标移动时调用）
  private async updateColorPreview(mousePos: Point): Promise<void> {
    if (!this.selectionRect) return

    try {
      const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
      const scale = windowInfo?.scale || 1
      const previewSize = 30 // 预览区域的像素尺寸
      const halfPreviewSize = Math.floor(previewSize / 2)
      
      const screenX = Math.round(windowInfo.x + mousePos.x * scale)
      const screenY = Math.round(windowInfo.y + mousePos.y * scale)

      const result = await invoke('get_screen_preview', {
        x: screenX - halfPreviewSize,
        y: screenY - halfPreviewSize,
        width: previewSize,
        height: previewSize
      }) as { image: string }

      const img = new Image()
      img.src = `data:image/png;base64,${result.image}`
      await img.decode()
      
      const imageBitmap = await createImageBitmap(img)
      this.colorPickerState.previewImage = imageBitmap

      // 从预览图像中心获取颜色，避免额外API调用
      const offscreenCanvas = new OffscreenCanvas(previewSize, previewSize)
      const ctx = offscreenCanvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(imageBitmap, 0, 0, previewSize, previewSize)
        const pixelData = ctx.getImageData(halfPreviewSize, halfPreviewSize, 1, 1).data
        const colorData = { r: pixelData[0], g: pixelData[1], b: pixelData[2] }
        const hex = this.rgbToHex(colorData.r, colorData.g, colorData.b)
        this.colorPickerState.colorInfo = { rgb: colorData, hex, position: mousePos }
      }

      this.draw()
    } catch (error) {
      console.error('Failed to update color preview:', error)
    }
  }

  // 节流版本的颜色预览更新
  private throttledUpdateColorPreview(mousePos: Point): void {
    const now = Date.now()
    if (now - this.lastThrottledTimestamp < this.throttleInterval) {
      // 如果仍在节流间隔内，则不执行
      return
    }
    this.lastThrottledTimestamp = now
    this.updateColorPreview(mousePos)
  }

  // RGB 转 HEX
  private rgbToHex(r: number, g: number, b: number): string {
    const toHex = (n: number) => {
      const hex = Math.max(0, Math.min(255, Math.round(n))).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
  }

  // 处理键盘事件
  handleKeyDown(event: KeyboardEvent): boolean {
    if (!this.colorPickerState.isActive) return false

    switch (event.key.toLowerCase()) {
      case 'q':
        // 直接使用当前预览的颜色信息进行复制
        if (this.colorPickerState.colorInfo) {
          this.onColorPicked?.(this.colorPickerState.colorInfo)
          // 更新状态以显示 "已复制"
          this.colorPickerState.isCopied = true
          this.draw()
          setTimeout(() => {
            this.colorPickerState.isCopied = false
            this.draw()
          }, 1000)
        }
        return true

      case 'shift':
        // Shift键：切换显示格式
        this.colorPickerState.showFormat = 
          this.colorPickerState.showFormat === 'hex' ? 'rgb' : 'hex'
        this.draw()
        return true

      default:
        return false
    }
  }

  // 销毁
  destroy(): void {
    // 清理节流定时器
    if (this.throttleTimer) {
      clearTimeout(this.throttleTimer)
      this.throttleTimer = null
    }

    this.eventHandler.unbind()
    // 清理鼠标事件监听器
    this.canvas.removeEventListener('mousedown', this.mouseDownHandler)
    this.canvas.removeEventListener('mousemove', this.mouseMoveHandler)
    this.canvas.removeEventListener('mouseup', this.mouseUpHandler)
    this.canvas.removeEventListener('dblclick', this.doubleClickHandler)
  }
}
