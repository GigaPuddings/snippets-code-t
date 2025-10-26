import { BaseAnnotation } from './BaseAnnotation'
import { DrawingEngine } from './DrawingEngine'
import { CoordinateSystem } from './CoordinateSystem'
import { EventHandler } from './EventHandler'
import { AnnotationFactory } from './AnnotationFactory'
import { Point, Rect, ToolType, AnnotationStyle, OperationType, ColorInfo, ColorPickerState } from './types'
import { invoke } from '@tauri-apps/api/core'
import { Window } from '@tauri-apps/api/window'

// 窗口信息接口
interface WindowInfo {
  x: number
  y: number
  width: number
  height: number
  title: string
  z_order: number  // 原始窗口层级
  is_fullscreen: boolean  // 是否为全屏窗口
  display_order: number  // 实际显示层级（考虑全屏和遮挡后），值越小层级越高
}

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

  // 窗口吸附相关
  private allWindows: WindowInfo[] = []
  private snapThreshold = 30 // 吸附阈值（像素）
  private snappedWindow: WindowInfo | null = null
  private showSnapPreview = false
  
  // 点击拖拽区分
  private pendingSnapWindow: WindowInfo | null = null
  private dragStartPosition: Point | null = null
  private dragThreshold = 5 // 拖拽阈值（像素）

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
    this.loadAllWindows()
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

  // 加载所有窗口信息
  private async loadAllWindows(): Promise<void> {
    try {
      const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number, isFullscreen: boolean }
      const windows = await invoke('get_all_windows') as WindowInfo[]
      const scale = windowInfo?.scale || 1
      
      // 加载窗口信息，保持吸附功能启用
      this.allWindows = windows
        .filter(win => {
          // 过滤掉截图窗口本身和无效窗口
          return this.isValidWindow(win)
        })
        .map(win => ({
          ...win,
          // 根据缩放因子调整坐标和大小
          x: Math.round(win.x / scale),
          y: Math.round(win.y / scale),
          width: Math.round(win.width / scale),
          height: Math.round(win.height / scale)
        }))
        .filter(win => {
          // 过滤掉在屏幕外的窗口
          return win.x >= -win.width && 
                 win.y >= -win.height &&
                 win.x < window.innerWidth + win.width &&
                 win.y < window.innerHeight + win.height
        })
      
    } catch (error) {
      console.error('Failed to load windows:', error)
      this.allWindows = []
    }
  }

  // 检查窗口是否有效
  private isValidWindow(win: WindowInfo): boolean {
    // 基本检查
    if (!win.title || win.width < 100 || win.height < 100) {
      return false
    }
    
    // 过滤截图相关窗口
    if (win.title.includes('screenshot') || 
        win.title.includes('截图') ||
        win.title.includes('Screenshot')) {
      return false
    }
    
    // 过滤系统和无关窗口
    const systemTitles = [
      'Program Manager', 'Desktop Window Manager', 'Windows Security',
      'Task Manager', 'Settings', 'Microsoft Store', 'Calculator',
      'Windows Input Experience', 'Microsoft Text Input Application',
      'Windows Shell Experience Host', 'Action Center', 'Volume Control',
      'Network Connections', 'Cortana', 'Search', 'Start', 'Taskbar',
      'System Tray', 'Notification Area', 'Clock', 'Volume', 'Network',
      'Battery', 'Power', 'Language Bar', 'Input Method Editor',
      'Windows PowerShell', 'Command Prompt', 'cmd.exe', 'powershell.exe'
    ]
    
    // 检查是否为系统窗口
    for (const sysTitle of systemTitles) {
      if (win.title === sysTitle || win.title.startsWith(sysTitle)) {
        return false
      }
    }
    
    // 过滤驱动程序相关窗口
    if (win.title.startsWith('NVIDIA') ||
        win.title.startsWith('Intel') ||
        win.title.startsWith('AMD') ||
        win.title.startsWith('Realtek') ||
        win.title.includes('Driver') ||
        win.title.includes('Graphics')) {
      return false
    }
    
    // 过滤Windows服务相关窗口
    if (win.title.includes('Background Task Host') ||
        win.title.includes('Runtime Broker') ||
        win.title.includes('Service Host') ||
        win.title.includes('Windows Modules Installer') ||
        win.title.includes('System Interrupts') ||
        win.title.includes('Registry') ||
        win.title.includes('dwm.exe') ||
        win.title.includes('explorer.exe') ||
        win.title.includes('winlogon.exe')) {
      return false
    }
    
    // 过滤空标题或只有特殊字符的标题
    const cleanTitle = win.title.trim().replace(/[^\w\s\u4e00-\u9fa5]/g, '')
    if (cleanTitle.length < 2) {
      return false
    }
    
    return true
  }

  // 检测鼠标是否接近窗口边缘
  private detectNearbyWindow(mousePos: Point): WindowInfo | null {
    if (this.allWindows.length === 0) return null

    // 收集所有候选窗口及其距离
    const candidates: Array<{ window: WindowInfo; distance: number }> = []

    for (const window of this.allWindows) {
      // 检查鼠标是否在窗口内部
      const isInWindow = mousePos.x >= window.x && 
                        mousePos.x <= window.x + window.width &&
                        mousePos.y >= window.y && 
                        mousePos.y <= window.y + window.height

      if (isInWindow) {
        candidates.push({ window, distance: 0 })
        continue
      }

      // 计算到窗口边缘的最短距离
      const distToLeft = Math.abs(mousePos.x - window.x)
      const distToRight = Math.abs(mousePos.x - (window.x + window.width))
      const distToTop = Math.abs(mousePos.y - window.y)
      const distToBottom = Math.abs(mousePos.y - (window.y + window.height))
      const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom)
      
      if (minDist <= this.snapThreshold) {
        candidates.push({ window, distance: minDist })
      }
    }

    if (candidates.length === 0) return null

    // 选择窗口：优先选择 display_order 最小的（实际层级最高），然后选择距离最近的
    return candidates.reduce((best, current) => {
      // 按实际显示层级选择（display_order 越小，层级越高）
      if (current.window.display_order < best.window.display_order) return current
      if (current.window.display_order === best.window.display_order && current.distance < best.distance) return current
      return best
    }).window
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
            // 记录拖拽起始位置
            this.dragStartPosition = { ...mousePos }
            
            // 检查是否有窗口吸附
            if (this.snappedWindow) {
              // 先记录待定的吸附窗口，等待判断是点击还是拖拽
              this.pendingSnapWindow = this.snappedWindow
              // 暂时不创建选择框，等mousemove或mouseup时决定
            } else {
              // 没有吸附窗口，直接开始自定义框选
              this.selectionRect = {
                x: mousePos.x,
                y: mousePos.y,
                width: 0,
                height: 0
              }
              this.onStateChange?.()
            }
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
          
        case OperationType.Pinning:
          // 贴图模式
          if (this.selectionRect) {
            this.createPinWindow()
            this.eventHandler.stopDrawing() // 贴图不需要绘制状态
          }
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
      
      // 检查是否处于待定吸附状态且开始拖拽
      if (this.pendingSnapWindow && this.dragStartPosition && !this.selectionRect) {
        const dragDistance = Math.sqrt(
          Math.pow(mousePos.x - this.dragStartPosition.x, 2) + 
          Math.pow(mousePos.y - this.dragStartPosition.y, 2)
        )
        
        if (dragDistance > this.dragThreshold) {
          // 超过拖拽阈值，切换到自定义框选模式
          this.selectionRect = {
            x: this.dragStartPosition.x,
            y: this.dragStartPosition.y,
            width: 0,
            height: 0
          }
          this.pendingSnapWindow = null // 清除待定状态
          this.onStateChange?.()
        }
      }
      
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
      // 非绘制状态时检测窗口吸附
      if (this.currentTool === ToolType.Select && !this.selectionRect) {
        const nearbyWindow = this.detectNearbyWindow(mousePos)
        
        if (nearbyWindow !== this.snappedWindow) {
          this.snappedWindow = nearbyWindow
          this.showSnapPreview = !!nearbyWindow
          this.draw()
        }
      }
      
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
      
      // 检查是否处于待定吸附状态（说明是点击而非拖拽）
      if (this.pendingSnapWindow && !this.selectionRect) {
        // 使用窗口吸附
        this.selectionRect = {
          x: this.pendingSnapWindow.x,
          y: this.pendingSnapWindow.y,
          width: this.pendingSnapWindow.width,
          height: this.pendingSnapWindow.height
        }
      }
      
      // 清理待定状态
      this.pendingSnapWindow = null
      this.dragStartPosition = null
      
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

    // 绘制窗口吸附预览
    if (this.showSnapPreview && this.snappedWindow && !this.selectionRect) {
      this.drawSnapPreview()
    }

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

  // 绘制窗口吸附预览
  private drawSnapPreview(): void {
    if (!this.snappedWindow) return
    
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return
    
    ctx.save()
    
    // 绘制半透明的高亮框
    ctx.strokeStyle = '#00a8ff'
    ctx.lineWidth = 2
    ctx.setLineDash([5, 5])
    ctx.fillStyle = 'rgba(0, 168, 255, 0.1)'
    
    ctx.fillRect(
      this.snappedWindow.x,
      this.snappedWindow.y,
      this.snappedWindow.width,
      this.snappedWindow.height
    )
    
    ctx.strokeRect(
      this.snappedWindow.x,
      this.snappedWindow.y,
      this.snappedWindow.width,
      this.snappedWindow.height
    )
    
    // 显示窗口标题
    if (this.snappedWindow.title) {
      ctx.setLineDash([])
      ctx.font = '12px sans-serif'
      ctx.fillStyle = '#00a8ff'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      
      const titleX = this.snappedWindow.x + this.snappedWindow.width / 2
      const titleY = this.snappedWindow.y - 5
      
      // 绘制文字背景
      const metrics = ctx.measureText(this.snappedWindow.title)
      const padding = 4
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillRect(
        titleX - metrics.width / 2 - padding,
        titleY - 12 - padding,
        metrics.width + padding * 2,
        16
      )
      
      // 绘制文字
      ctx.fillStyle = '#00a8ff'
      ctx.fillText(this.snappedWindow.title, titleX, titleY)
    }
    
    ctx.restore()
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
    
    // 重置窗口吸附状态
    this.snappedWindow = null
    this.showSnapPreview = false
    this.pendingSnapWindow = null
    this.dragStartPosition = null
    
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

  // 创建贴图窗口
  async createPinWindow(): Promise<void> {
    if (!this.selectionRect) return
    
    try {
      // 1. 获取当前选区的截图数据
      const { x, y, width, height } = this.selectionRect
      
      // 获取窗口信息进行坐标转换
      const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
      const scale = windowInfo?.scale || 1
      
      // 计算实际屏幕坐标
      const screenX = Math.round(windowInfo.x + x * scale)
      const screenY = Math.round(windowInfo.y + y * scale)
      const screenWidth = Math.round(width * scale)
      const screenHeight = Math.round(height * scale)
      
      // 2. 捕获屏幕区域
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
      
      // 3. 处理标注并生成最终图像
      const finalImage = await this.renderWithAnnotations(result, scale)
      
      // 4. 创建贴图窗口
      await invoke('create_pin_window', {
        imageData: finalImage,
        x: screenX,
        y: screenY,
        width: screenWidth,
        height: screenHeight
      })
      
      // 5. 关闭截图窗口
      this.onStateChange?.()
      setTimeout(() => {
        const appWindow = new Window('screenshot')
        appWindow.close()
      }, 100)
      
    } catch (error) {
      console.error('Failed to create pin window:', error)
      throw error
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

