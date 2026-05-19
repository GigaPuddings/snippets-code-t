import { BaseAnnotation } from './BaseAnnotation'
import { DrawingEngine } from './DrawingEngine'
import { CoordinateSystem } from './CoordinateSystem'
import { EventHandler } from './EventHandler'
import { AnnotationFactory } from './AnnotationFactory'
import { CanvasPool } from './CanvasPool'
import { LazyLoader } from './LazyLoader'
import { Point, Rect, ToolType, AnnotationStyle, OperationType, ColorInfo, ColorPickerState, OcrTextBlock, TranslationOverlay, SampledColor, OverlayStyle, AnnotationData } from './types'
import { invoke } from '@tauri-apps/api/core'
import { Window } from '@tauri-apps/api/window'
import { logger, ocrDiagnosticLogger } from '@/utils/logger'
import { canTranslateDetectedLanguage, detectTranslationLanguage } from '@/utils/text'
import { distance, getRectCenter } from '../utils/geometry'
import { reflowOcrBlocks, type ParagraphBlock } from './OcrLayoutReflow'
import type { DetectedLanguage } from '@/utils/text'

interface AnnotationHistorySnapshot {
  annotations: AnnotationData[]
  selectedAnnotationId: string | null
}

interface CropResult {
  image: string
  adjusted_width: number
  adjusted_height: number
  logical_x: number
  logical_y: number
  logical_width: number
  logical_height: number
}

interface CropOptions {
  padding?: number
  fillColor?: string
}

type TranslationLanguage = 'zh' | 'en'

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
  
  // 编辑状态
  private editingAnnotation: BaseAnnotation | null = null

  // 标注历史记录（用于撤销/恢复）
  private annotationUndoStack: AnnotationHistorySnapshot[] = []
  private annotationRedoStack: AnnotationHistorySnapshot[] = []
  private pendingDragSnapshot: AnnotationHistorySnapshot | null = null
  private pendingResizeSnapshot: AnnotationHistorySnapshot | null = null
  
  // 工具设置
  private currentTool: ToolType = ToolType.Select
  private currentStyle: AnnotationStyle = { color: '#ff4444', lineWidth: 3 }
  private textSize = 16
  private mosaicSize = 5
  private showGuides = true

  // 取色器状态
  private colorPickerState: ColorPickerState = {
    isActive: false,
    isVisible: false, // 默认不可见
    mousePosition: { x: 0, y: 0 },
    showFormat: 'hex',
    zoomFactor: 40, // 放大倍数，平衡精确度和预览范围
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
  private readonly throttleInterval = 33 // ms, 30 FPS (优化性能)

  // 按键状态
  private isShiftPressed = false

  // 背景图像（预捕获的屏幕）
  private backgroundImage: HTMLImageElement | null = null
  // 是否正在加载完整背景图
  private isLoadingBackground = false

  // 翻译覆盖层状态
  private translationOverlay: TranslationOverlay = {
    blocks: [],
    isVisible: false,
    isLoading: false,
    sourceLanguage: 'auto',
    targetLanguage: 'zh',
    engine: 'bing' // 默认值，实际值由组件初始化时从后端获取并设置
  }

  // 离线模型后端激活状态
  private offlineModelActivated = false

  // Canvas 池
  private canvasPool = CanvasPool.getInstance()

  // 回调函数
  private onStateChange?: () => void
  private onTextInputRequest?: (position: Point, existingAnnotation?: BaseAnnotation) => void
  private onColorPicked?: (colorInfo: ColorInfo) => void

  // 背景重载标记（用于避免重复加载）
  private backgroundReloadPending = false

  // 公开方法：触发背景图重新加载（响应 preview-ready 事件）
  public triggerBackgroundReload(): void {
    if (this.backgroundReloadPending) return
    this.backgroundReloadPending = true

    // 重置加载状态，强制重新加载
    this.isLoadingBackground = false

    // 清除旧的背景图像引用
    if (this.backgroundImage) {
      this.backgroundImage.onload = null
      this.backgroundImage.onerror = null
      this.backgroundImage = null
    }

    // 异步重新加载背景
    this.loadScreenBackground().finally(() => {
      this.backgroundReloadPending = false
    })
  }

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

    // 初始化画布（必须首先执行，设置画布尺寸）
    this.initCanvas()

    // 并行加载窗口列表和屏幕背景
    Promise.all([
      this.loadAllWindows().then(() => {
        // 窗口列表加载完成后，检测初始鼠标位置附近的窗口
        this.detectInitialWindowSnap()
      }),
      this.loadScreenBackground()
    ])

    // 预加载非关键模块
    LazyLoader.preloadModules()
  }

  private cloneAnnotationData(data: AnnotationData): AnnotationData {
    return {
      ...data,
      points: data.points.map(point => ({ ...point })),
      style: { ...data.style },
      selected: false,
      hovered: false
    }
  }

  private createHistorySnapshot(): AnnotationHistorySnapshot {
    return {
      annotations: this.annotations.map(annotation => this.cloneAnnotationData(annotation.getData())),
      selectedAnnotationId: this.selectedAnnotation?.getData().id || null
    }
  }

  private pushAnnotationHistory(): void {
    this.annotationUndoStack.push(this.createHistorySnapshot())
    this.annotationRedoStack = []
  }

  private restoreHistorySnapshot(snapshot: AnnotationHistorySnapshot): void {
    this.annotations = snapshot.annotations
      .map(data => AnnotationFactory.fromData(this.cloneAnnotationData(data)))
      .filter((annotation): annotation is BaseAnnotation => annotation !== null)

    this.selectedAnnotation = null
    this.hoveredAnnotation = null
    this.draggedAnnotation = null
    this.resizingAnnotation = null
    this.editingAnnotation = null

    if (snapshot.selectedAnnotationId) {
      const selectedAnnotation = this.annotations.find(annotation => annotation.getData().id === snapshot.selectedAnnotationId)
      if (selectedAnnotation) {
        selectedAnnotation.updateData({ selected: true })
        this.selectedAnnotation = selectedAnnotation
      }
    }

    this.draw()
    this.onStateChange?.()
  }

  // 初始化画布
  private initCanvas(): void {
    const container = this.canvas.parentElement
    if (!container) return

    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight

    // 【DPI修复】获取设备像素比 (DPR)
    const dpr = window.devicePixelRatio || 1

    // 1. 设置 Canvas 的【物理像素尺寸】为：逻辑尺寸 * DPR
    this.canvas.width = Math.round(containerWidth * dpr)
    this.canvas.height = Math.round(containerHeight * dpr)

    // 2. 设置 Canvas 的【CSS 显示尺寸】为逻辑尺寸（保持不变）
    this.canvas.style.width = containerWidth + 'px'
    this.canvas.style.height = containerHeight + 'px'

    // 3. 缩放绘图上下文，解决标注和文字的坐标对应问题
    const ctx = this.canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
    }

    // 4. 【优化】在背景图加载前先显示半透明遮罩，避免黑屏
    // 这样用户立即开始截图时不会看到黑色背景
    this.drawPendingState()

    this.coordinateSystem.updateCanvasRect(this.canvas)
  }

  // 绘制等待状态（背景图加载前的中间状态）
  private drawPendingState(): void {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    // 使用与遮罩层一致的半透明黑色
    ctx.save()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    ctx.restore()
  }

  // 加载预捕获的屏幕背景图像
  private async loadScreenBackground(): Promise<void> {
    // 防止重复加载
    if (this.isLoadingBackground) return
    this.isLoadingBackground = true

    try {
      // 清除旧的背景图像引用
      if (this.backgroundImage) {
        this.backgroundImage.onload = null
        this.backgroundImage.onerror = null
        this.backgroundImage = null
      }

      // 1. 优先加载预览图（快速显示）
      await this.loadPreviewImage()

      // 2. 再加载完整背景图（高质量）
      await this.loadFullBackgroundImage()

    } catch (error) {
      logger.error('[截图] 加载屏幕背景失败', error)
      this.createFallbackBackground()
    } finally {
      this.isLoadingBackground = false
    }
  }

  // 加载预览图（等待但不显示）
  // 注意：预览图只用于等待，不作为背景显示（避免模糊）
  private async loadPreviewImage(): Promise<void> {
    const maxWaitTime = 5000  // 预览图最多等待5秒
    const checkInterval = 100   // 每100ms检查一次
    let waitedTime = 0

    while (waitedTime < maxWaitTime) {
      try {
        // 尝试获取预览图（JPEG格式，小体积）
        const previewData = await invoke('get_screenshot_preview') as string

        // 检查是否有效（非空字符串）
        if (previewData && previewData.trim().length > 0) {
          // 预览图数据已可用，但不作为背景显示
          // 直接返回，让 loadFullBackgroundImage 继续
          return
        }
        // 预览图不可用，等待后重试
        await new Promise(resolve => setTimeout(resolve, checkInterval))
        waitedTime += checkInterval
      } catch (error: any) {
        const errorMsg = error?.toString() || ''
        // 检查是否是"不可用"或"正在捕获"的错误，如果是则等待重试
        if (errorMsg.includes('No screenshot preview available') ||
            errorMsg.includes('being captured') ||
            errorMsg.includes('Preview load timeout')) {
          await new Promise(resolve => setTimeout(resolve, checkInterval))
          waitedTime += checkInterval
          continue
        }
        // 其他错误，继续尝试加载完整图
          break
      }
    }

    // 等待超时，让完整图继续加载
  }

  // 加载完整背景图（高质量PNG）
  private async loadFullBackgroundImage(): Promise<void> {
    const maxWaitTime = 5000  // 完整图等待时间更长
    const checkInterval = 100
    let waitedTime = 0

    while (waitedTime < maxWaitTime) {
      try {
        const base64Image = await invoke('get_screenshot_background') as string
        if (base64Image) {
          const img = new Image()

          await new Promise<void>((resolve, reject) => {
            const timeout = setTimeout(() => {
              img.onload = null
              img.onerror = null
              reject(new Error('Image load timeout'))
            }, 5000)

            img.onload = () => {
              clearTimeout(timeout)
              this.backgroundImage = img
              this.draw()
              resolve()
            }

            img.onerror = (error) => {
              clearTimeout(timeout)
              reject(error)
            }

            // 后端现在返回PNG格式
            img.src = `data:image/png;base64,${base64Image}`
          })

          return
        }
      } catch (error: any) {
        if (error?.toString().includes('No screenshot background available') ||
            error?.toString().includes('being captured')) {
          await new Promise(resolve => setTimeout(resolve, checkInterval))
          waitedTime += checkInterval
          continue
        }
        throw error
      }
    }

    this.createFallbackBackground()
  }

  // 创建后备背景（当背景图加载失败时使用）
  private createFallbackBackground(): void {
    try {
      // 使用更轻量的方式创建后备背景
      const img = new Image()
      img.width = 1
      img.height = 1
      
      // 创建1x1像素的透明图像作为占位符
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
        ctx.fillRect(0, 0, 1, 1)
        img.src = canvas.toDataURL()
      }
      
      img.onload = () => {
        this.backgroundImage = img
        this.draw()
      }
    } catch (error) {
      logger.error('[截图] 创建后备背景失败', error)
    }
  }

  // 绘制背景图像（支持预览图和完整图）
  private drawBackground(): void {
    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    // 只使用完整背景图（不再使用预览图）
    if (!this.backgroundImage) return

    ctx.save()

    // 【关键】重置变换矩阵，强制使用物理像素坐标系 (1:1)
    // 这样可以确保背景图的每一个像素都精确对应屏幕的一个物理像素，绝不模糊
    ctx.setTransform(1, 0, 0, 1, 0, 0)

    // 禁用平滑（虽然这里已经是点对点绘制，但加上保险）
    ctx.imageSmoothingEnabled = false

    // 直接绘制填满整个物理 Canvas
    // 注意：这里的 width/height 已经是乘以 DPR 后的物理尺寸
    ctx.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height)

    // 恢复之前的绘图状态（恢复 scale，以便后续绘制标注）
    ctx.restore()
  }

  // 加载所有窗口信息（使用预缓存数据 + 重试机制）
  private async loadAllWindows(): Promise<void> {
    try {
      // 【优化】优先使用预缓存的数据，添加重试机制确保缓存就绪
      // 预缓存在 hotkey_screenshot() 中已完成
      let windowInfo: { x: number, y: number, scale: number, isFullscreen: boolean } = { x: 0, y: 0, scale: 1, isFullscreen: false }
      let windows: WindowInfo[] = []

      // 重试配置
      const maxRetries = 10
      const retryDelay = 50 // ms

      // 首次尝试前等待一小段时间，让后端预加载完成
      await new Promise(resolve => setTimeout(resolve, 100))

      for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
          // 尝试从缓存获取
          const [cachedMonitor, cachedWindows] = await Promise.all([
            invoke('get_cached_monitor_info') as Promise<{ x: number, y: number, scale: number, width: number, height: number }>,
            invoke('get_cached_window_list') as Promise<WindowInfo[]>
          ])

          windowInfo = {
            x: cachedMonitor.x,
            y: cachedMonitor.y,
            scale: cachedMonitor.scale,
            isFullscreen: false
          }
          windows = cachedWindows
          break // 成功获取，退出重试循环
        } catch (error) {
          if (attempt < maxRetries - 1) {
            // 还有重试次数，等待后重试
            await new Promise(resolve => setTimeout(resolve, retryDelay))
            continue
          }
          // 最后一个尝试也失败，回退到实时获取
              const results = await Promise.all([
            invoke('get_window_info') as Promise<{ x: number, y: number, scale: number, isFullscreen: boolean }>,
            invoke('get_all_windows') as Promise<WindowInfo[]>
          ])
          windowInfo = results[0]
          windows = results[1]
        }
      }

      const scale = windowInfo?.scale || 1
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight


      // 使用单次遍历优化性能
      this.allWindows = windows
        .filter(win => this.isValidWindow(win))
        .map(win => ({
          ...win,
          x: Math.round(win.x / scale),
          y: Math.round(win.y / scale),
          width: Math.round(win.width / scale),
          height: Math.round(win.height / scale)
        }))
        .filter(win =>
          win.x >= -win.width &&
          win.y >= -win.height &&
          win.x < screenWidth + win.width &&
          win.y < screenHeight + win.height
        )

    } catch (error) {
      logger.error('[截图] 加载窗口列表失败', error)
      this.allWindows = []
    }
  }

  // 检测初始窗口吸附（在窗口打开时立即调用）
  private async detectInitialWindowSnap(): Promise<void> {
    try {
      // 【优化】等待窗口列表加载完成
      const maxWaitTime = 500 // 最大等待500ms
      const checkInterval = 50 // 每50ms检查一次
      let waitedTime = 0

      while (this.allWindows.length === 0 && waitedTime < maxWaitTime) {
        await new Promise(resolve => setTimeout(resolve, checkInterval))
        waitedTime += checkInterval
      }

      // 如果没有窗口列表，直接返回
      if (this.allWindows.length === 0) {
        return
      }

      // 【优化】优先使用预缓存的显示器信息
      let windowInfo: { x: number, y: number, scale: number }
      try {
        const cachedMonitor = await invoke('get_cached_monitor_info') as { x: number, y: number, scale: number, width: number, height: number }
        windowInfo = {
          x: cachedMonitor.x,
          y: cachedMonitor.y,
          scale: cachedMonitor.scale
        }
      } catch {
        // 缓存不可用，实时获取
        windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
      }

      // 尝试获取鼠标位置，如果失败则使用屏幕中心作为初始位置
      let canvasMousePos: Point
      try {
        const mouseInfo = await invoke('get_mouse_position') as { x: number, y: number }
        const scale = windowInfo?.scale || 1

        // 转换为canvas坐标
        canvasMousePos = {
          x: Math.round((mouseInfo.x - windowInfo.x) / scale),
          y: Math.round((mouseInfo.y - windowInfo.y) / scale)
        }
      } catch (error) {
        // 如果获取鼠标位置失败，使用屏幕中心
        canvasMousePos = {
          x: Math.round(this.canvas.width / (window.devicePixelRatio || 1) / 2),
          y: Math.round(this.canvas.height / (window.devicePixelRatio || 1) / 2)
        }
      }

      // 检测鼠标位置附近的窗口
      const nearbyWindow = this.detectNearbyWindow(canvasMousePos)

      if (nearbyWindow) {
        this.snappedWindow = nearbyWindow
        this.showSnapPreview = true
        this.draw()
      } else {
      }
    } catch (error) {
      logger.error('[截图] 初始窗口吸附检测失败', error)
      // 失败不影响正常使用，用户移动鼠标后会重新检测
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

  private detectNearbyWindow(mousePos: Point): WindowInfo | null {
    if (this.allWindows.length === 0) return null

    // 找出所有候选窗口（鼠标在窗口内或接近窗口边缘）
    const candidates: Array<{ window: WindowInfo; distance: number }> = []

    for (const window of this.allWindows) {
      const isInWindow = mousePos.x >= window.x && 
                        mousePos.x <= window.x + window.width &&
                        mousePos.y >= window.y && 
                        mousePos.y <= window.y + window.height

      if (isInWindow) {
        candidates.push({ window, distance: 0 })
        continue
      }

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

    // 按照优先级排序：
    // 1. 优先选择 display_order 最小的（最顶层）
    // 2. 如果 display_order 相同，优先选择距离最近的
    // 3. 如果距离也相同，优先选择全屏窗口
    return candidates.reduce((best, current) => {
      if (current.window.display_order < best.window.display_order) return current
      if (current.window.display_order > best.window.display_order) return best
      
      if (current.distance < best.distance) return current
      if (current.distance > best.distance) return best
      
      if (current.window.is_fullscreen && !best.window.is_fullscreen) return current
      
      return best
    }).window
  }


  // 事件处理器引用（用于清理）
  private mouseDownHandler = this.handleMouseDown.bind(this)
  private mouseMoveHandler = this.handleMouseMove.bind(this)
  private mouseUpHandler = this.handleMouseUp.bind(this)
  private doubleClickHandler = this.handleDoubleClick.bind(this)
  private keyDownHandler = this.handleKeyDownInternal.bind(this)
  private keyUpHandler = this.handleKeyUp.bind(this)

  // 绑定鼠标事件
  private bindMouseEvents(): void {
    this.canvas.addEventListener('mousedown', this.mouseDownHandler)
    this.canvas.addEventListener('mousemove', this.mouseMoveHandler)
    this.canvas.addEventListener('mouseup', this.mouseUpHandler)
    this.canvas.addEventListener('dblclick', this.doubleClickHandler)
    
    // 绑定键盘事件
    window.addEventListener('keydown', this.keyDownHandler)
    window.addEventListener('keyup', this.keyUpHandler)
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
        // 使用工具函数计算拖拽距离
        const dragDistance = distance(mousePos, this.dragStartPosition)
        
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
      
      // 清理待定状态和吸附预览状态
      this.pendingSnapWindow = null
      this.dragStartPosition = null
      this.snappedWindow = null
      this.showSnapPreview = false
      
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

  // 键盘按下处理（内部）
  private handleKeyDownInternal(event: KeyboardEvent): void {
    if (event.key === 'Shift') {
      this.isShiftPressed = true
    }
  }

  // 键盘抬起处理
  private handleKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Shift') {
      this.isShiftPressed = false
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
      this.pendingDragSnapshot = this.createHistorySnapshot()
      
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
      if (this.pendingDragSnapshot) {
        const currentData = this.draggedAnnotation.getData()
        const previousData = this.pendingDragSnapshot.annotations.find(data => data.id === currentData.id)
        const hasMoved = previousData ? JSON.stringify(previousData.points) !== JSON.stringify(currentData.points) : false

        if (hasMoved) {
          this.annotationUndoStack.push(this.pendingDragSnapshot)
          this.annotationRedoStack = []
        }

        this.pendingDragSnapshot = null
      }
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
      this.pendingResizeSnapshot = this.createHistorySnapshot()
      
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
      if (this.pendingResizeSnapshot) {
        const currentData = this.resizingAnnotation.getData()
        const previousData = this.pendingResizeSnapshot.annotations.find(data => data.id === currentData.id)
        const hasResized = previousData ? JSON.stringify(previousData.points) !== JSON.stringify(currentData.points) : false

        if (hasResized) {
          this.annotationUndoStack.push(this.pendingResizeSnapshot)
          this.annotationRedoStack = []
        }

        this.pendingResizeSnapshot = null
      }
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
      // 为不同工具设置不同的光标
      this.updateToolCursor()
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

  // 根据当前工具更新光标样式
  private updateToolCursor(): void {
    switch (this.currentTool) {
      case ToolType.Pen:
        // 画笔：圆形光标，显示画笔粗细（类似Snipaste等专业工具）
        this.updateCursor(this.createCircleCursor(this.currentStyle.lineWidth, this.currentStyle.color))
        break
      
      case ToolType.Mosaic:
        // 马赛克：圆形光标，显示实际笔刷大小（块大小 * 3）
        this.updateCursor(this.createCircleCursor(this.mosaicSize * 3, '#666'))
        break
      
      case ToolType.ColorPicker:
        // 取色器：使用十字光标
        this.updateCursor('crosshair')
        break
      
      case ToolType.Rectangle:
      case ToolType.Arrow:
      case ToolType.Text:
        // 其他绘图工具：使用十字光标
        this.updateCursor('crosshair')
        break
      
      default:
        this.updateCursor('default')
    }
  }

  // 创建圆形光标（用于画笔和马赛克）
  private createCircleCursor(size: number, color: string = '#666'): string {
    const radius = Math.max(size / 2, 2)
    const diameter = radius * 2 + 4 // 加4像素的边距
    const center = diameter / 2
    
    // 创建SVG光标
    const svg = `
      <svg width="${diameter}" height="${diameter}" xmlns="http://www.w3.org/2000/svg">
        <!-- 外圈：显示工具大小 -->
        <circle cx="${center}" cy="${center}" r="${radius}" 
                fill="none" stroke="${color}" stroke-width="1.5" opacity="0.8"/>
        <!-- 中心点：精确定位 -->
        <circle cx="${center}" cy="${center}" r="1" fill="${color}" opacity="0.9"/>
      </svg>
    `
    
    const encodedSvg = encodeURIComponent(svg)
    return `url('data:image/svg+xml;utf8,${encodedSvg}') ${center} ${center}, crosshair`
  }

  // 绘制所有内容
  draw(): void {
    this.drawingEngine.clear()

    // 在完整背景图加载前，先绘制等待状态
    if (!this.backgroundImage) {
      this.drawPendingState()
      return
    }

    // 绘制背景图像
    this.drawBackground()
    
    // 【遮罩层】绘制选择区域外的半透明遮罩
    if (this.selectionRect) {
      this.drawingEngine.drawMask(this.selectionRect)
    }

    // 绘制窗口吸附预览
    if (this.showSnapPreview && this.snappedWindow && !this.selectionRect) {
      this.drawSnapPreview()
    }

    // 绘制所有标注（过滤掉正在编辑的注释）
    if (this.annotations.length > 0) {
      const visibleAnnotations = this.editingAnnotation 
        ? this.annotations.filter(a => a.getData().id !== this.editingAnnotation!.getData().id)
        : this.annotations
      this.drawingEngine.drawAnnotations(visibleAnnotations, this.selectionRect || undefined)
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

    // 绘制翻译覆盖层
    if (this.translationOverlay.isVisible && this.selectionRect) {
      this.drawTranslationOverlay()
    }
  }

  // 绘制翻译覆盖层（智能排版）
  private drawTranslationOverlay(): void {
    if (!this.selectionRect) return

    const ctx = this.canvas.getContext('2d')
    if (!ctx) return

    ctx.save()

    const { x, y, width, height } = this.selectionRect
    const padding = 8

    // 如果正在加载，显示加载状态
    if (this.translationOverlay.isLoading) {
      const centerX = x + width / 2
      const centerY = y + height / 2
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillRect(x, y, width, height)
      
      ctx.font = '16px "Microsoft YaHei", sans-serif'
      ctx.fillStyle = '#ffffff'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('正在识别翻译...', centerX, centerY)
      
      ctx.restore()
      return
    }

    // 如果翻译失败，显示错误提示
    if (this.translationOverlay.errorMessage) {
      const centerX = x + width / 2
      const centerY = y + height / 2
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(x, y, width, height)
      
      ctx.font = '16px "Microsoft YaHei", sans-serif'
      ctx.fillStyle = '#ff6b6b'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(this.translationOverlay.errorMessage, centerX, centerY)
      
      ctx.restore()
      return
    }

    // 没有翻译内容时不绘制
    if (this.translationOverlay.blocks.length === 0) {
      ctx.restore()
      return
    }

    // 1. 采样整个选区的背景颜色
    const sampleRect: Rect = { x, y, width, height }
    const sampledColor = this.sampleRegionColor(sampleRect)
    
    // 2. 计算统一的背景色和文字色
    const isDarkBackground = sampledColor.brightness < 128
    let backgroundColor: string
    let textColor: string
    
    if (isDarkBackground) {
      const bgR = Math.max(0, Math.round(sampledColor.r * 0.1))
      const bgG = Math.max(0, Math.round(sampledColor.g * 0.1))
      const bgB = Math.max(0, Math.round(sampledColor.b * 0.1))
      backgroundColor = `rgba(${bgR}, ${bgG}, ${bgB}, 0.95)`
      textColor = 'rgba(255, 255, 255, 0.9)'
    } else {
      const bgR = Math.min(255, Math.round(sampledColor.r + (255 - sampledColor.r) * 0.95))
      const bgG = Math.min(255, Math.round(sampledColor.g + (255 - sampledColor.g) * 0.95))
      const bgB = Math.min(255, Math.round(sampledColor.b + (255 - sampledColor.b) * 0.95))
      backgroundColor = `rgba(${bgR}, ${bgG}, ${bgB}, 0.95)`
      textColor = 'rgba(0, 0, 0, 0.85)'
    }

    // 3. 绘制统一的背景覆盖整个选区
    ctx.fillStyle = backgroundColor
    ctx.fillRect(x, y, width, height)

    // 4. 按语义段落渲染翻译文本，使用段落覆盖区域和原文字体大小
    ctx.fillStyle = textColor
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'

    const renderBlocks = this.translationOverlay.paragraphBlocks?.length
      ? this.translationOverlay.paragraphBlocks
      : this.translationOverlay.blocks.map((block): ParagraphBlock => ({
        text: block.text,
        translatedText: block.translatedText,
        blocks: [block],
        bbox: {
          x: block.x,
          y: block.y,
          width: block.width,
          height: block.height
        },
        isCodeBlock: block.isCodeBlock,
        isStructuredBlock: false,
        fontSize: block.fontSize,
        lineHeight: block.lineHeight,
        angle: block.angle
      }))

    const structuredBlocks = renderBlocks.filter((block) => block.isStructuredBlock)
    const naturalBlocks = renderBlocks.filter((block) => !block.isStructuredBlock)

    if (naturalBlocks.length > 0) {
      this.drawFlowedTranslationBlocks(ctx, naturalBlocks, x, y, padding, width, height)
    }

    for (const block of structuredBlocks) {
      this.drawStructuredTranslationBlock(ctx, block, x, y, padding, width, height)
    }

    ctx.restore()
  }

  private drawFlowedTranslationBlocks(
    ctx: CanvasRenderingContext2D,
    paragraphs: ParagraphBlock[],
    selectionX: number,
    selectionY: number,
    padding: number,
    selectionWidth: number,
    selectionHeight: number
  ): void {
    const visibleParagraphs = [...paragraphs]
      .filter((paragraph) => (paragraph.translatedText || paragraph.text).trim())
      .sort((a, b) => {
        const yDiff = a.bbox.y - b.bbox.y
        return Math.abs(yDiff) > 4 ? yDiff : a.bbox.x - b.bbox.x
      })

    if (visibleParagraphs.length === 0) {
      return
    }

    const availableHeight = Math.max(24, selectionHeight - padding * 2)
    const selectionRightPadding = padding

    const buildLayouts = (scale: number, forceFullWidth: boolean, compact: boolean) => {
      return visibleParagraphs.map((paragraph) => {
        const text = (paragraph.translatedText || paragraph.text).trim()
        const baseFontSize = Math.max(12, Math.min(paragraph.fontSize || 16, 48))
        const fontSize = Math.max(8, Math.round(baseFontSize * scale))
        const fontFamily = paragraph.isCodeBlock
          ? '"Consolas", "Monaco", monospace'
          : '"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", sans-serif'
        const originalInset = Math.max(
          padding,
          Math.min(paragraph.bbox.x + padding, selectionWidth * 0.38)
        )
        const leftInset = forceFullWidth ? padding : originalInset
        const maxWidth = Math.max(48, selectionWidth - leftInset - selectionRightPadding)
        const rawLineHeight = paragraph.lineHeight || fontSize * 1.35
        const lineHeight = Math.max(
          fontSize * (compact ? 1.04 : 1.14),
          Math.min(rawLineHeight * scale, fontSize * (compact ? 1.18 : 1.42))
        )

        ctx.font = `${fontSize}px ${fontFamily}`
        return {
          text,
          fontSize,
          fontFamily,
          lineHeight,
          paragraphGap: compact ? Math.max(1, lineHeight * 0.16) : Math.max(3, lineHeight * 0.35),
          x: selectionX + leftInset,
          lines: this.wrapTextToLines(ctx, text, maxWidth)
        }
      })
    }

    const getLayoutHeight = (layouts: ReturnType<typeof buildLayouts>): number => {
      return layouts.reduce((height, layout, index) => {
        const gap = index === layouts.length - 1 ? 0 : layout.paragraphGap
        return height + layout.lines.length * layout.lineHeight + gap
      }, 0)
    }

    let layouts = buildLayouts(1, false, false)
    let layoutHeight = getLayoutHeight(layouts)

    if (layoutHeight > availableHeight) {
      const fitScale = Math.max(0.56, availableHeight / layoutHeight)
      layouts = buildLayouts(fitScale, false, false)
      layoutHeight = getLayoutHeight(layouts)
    }

    if (layoutHeight > availableHeight) {
      layouts = buildLayouts(1, true, false)
      layoutHeight = getLayoutHeight(layouts)
    }

    if (layoutHeight > availableHeight) {
      const fitScale = Math.max(0.38, (availableHeight / layoutHeight) * 0.96)
      layouts = buildLayouts(fitScale, true, true)
      layoutHeight = getLayoutHeight(layouts)
    }

    if (layoutHeight > availableHeight) {
      const fitScale = Math.max(0.3, (availableHeight / layoutHeight) * 0.94)
      layouts = buildLayouts(fitScale, true, true)
      layoutHeight = getLayoutHeight(layouts)
    }

    const firstSourceY = Math.min(...visibleParagraphs.map((paragraph) => paragraph.bbox.y))
    const sourceStartY = selectionY + Math.max(padding, Math.min(firstSourceY, selectionHeight - padding))
    const bottomLimit = selectionY + selectionHeight - padding
    let currentY = sourceStartY + layoutHeight > bottomLimit
      ? selectionY + padding
      : sourceStartY

    for (const layout of layouts) {
      ctx.font = `${layout.fontSize}px ${layout.fontFamily}`
      for (const line of layout.lines) {
        ctx.fillText(line, layout.x, currentY)
        currentY += layout.lineHeight
      }
      currentY += layout.paragraphGap
    }
  }

  private drawStructuredTranslationBlock(
    ctx: CanvasRenderingContext2D,
    paragraph: ParagraphBlock,
    selectionX: number,
    selectionY: number,
    padding: number,
    selectionWidth: number,
    selectionHeight: number
  ): void {
    const sortedBlocks = [...paragraph.blocks].sort((a, b) => a.x - b.x)
    const fontSize = Math.max(12, Math.min(paragraph.fontSize || 14, 32))
    const lineHeight = paragraph.lineHeight || fontSize * 1.35
    ctx.font = `${fontSize}px "Consolas", "Monaco", monospace`

    for (const sourceBlock of sortedBlocks) {
      const text = sourceBlock.translatedText || sourceBlock.text
      if (!text.trim()) continue

      const blockX = selectionX + sourceBlock.x + Math.min(4, padding)
      const blockY = selectionY + sourceBlock.y
      const nextColumn = sortedBlocks.find((item) => item.x > sourceBlock.x)
      const maxWidth = nextColumn
        ? Math.max(sourceBlock.width, nextColumn.x - sourceBlock.x - 8)
        : Math.max(sourceBlock.width, selectionWidth - sourceBlock.x - padding)
      const lines = this.wrapTextToLines(ctx, text.trim(), maxWidth)
      let currentY = blockY

      for (const line of lines) {
        if (currentY + fontSize > selectionY + selectionHeight) break
        ctx.fillText(line, blockX, currentY)
        currentY += lineHeight
      }
    }
  }

  /**
   * 将文字按宽度换行，返回行数组
   */
  private wrapTextToLines(
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ): string[] {
    const normalizedText = text.replace(/\s+/g, ' ').trim()
    if (!normalizedText) {
      return []
    }

    const lines: string[] = []
    const tokens = /\s/.test(normalizedText)
      ? normalizedText.split(/(\s+)/).filter((token) => token.length > 0)
      : Array.from(normalizedText)
    let line = ''

    const pushLongToken = (token: string) => {
      let chunk = ''
      for (const char of Array.from(token)) {
        const testChunk = chunk + char
        if (ctx.measureText(testChunk).width > maxWidth && chunk !== '') {
          lines.push(chunk)
          chunk = char
        } else {
          chunk = testChunk
        }
      }

      line = chunk
    }

    for (const token of tokens) {
      const isWhitespace = /^\s+$/.test(token)
      const normalizedToken = isWhitespace ? ' ' : token
      const testLine = line + normalizedToken

      if (ctx.measureText(testLine).width <= maxWidth) {
        line = testLine
        continue
      }

      if (line.trim()) {
        lines.push(line.trimEnd())
        line = ''
      }

      if (isWhitespace) {
        continue
      }

      if (ctx.measureText(normalizedToken).width > maxWidth) {
        pushLongToken(normalizedToken)
      } else {
        line = normalizedToken
      }
    }

    if (line.trim()) {
      lines.push(line.trimEnd())
    }

    return lines
  }

  /**
   * 从背景图像采样指定区域的平均颜色
   * @param rect 采样区域（相对于canvas的坐标）
   * @param sampleSize 采样点数量（默认16）
   * @returns 采样得到的颜色信息，包含RGB值和亮度值
   */
  public sampleRegionColor(rect: Rect, sampleSize: number = 16): SampledColor {
    // 默认返回值（白色背景）
    const defaultColor: SampledColor = { r: 255, g: 255, b: 255, brightness: 255 }
    
    if (!this.backgroundImage) {
      return defaultColor
    }

    // 从 Canvas 池获取临时 canvas
    const dpr = window.devicePixelRatio || 1
    const physicalWidth = Math.round(rect.width * dpr)
    const physicalHeight = Math.round(rect.height * dpr)
    
    const tempCanvas = this.canvasPool.acquire(physicalWidth, physicalHeight)
    const tempCtx = tempCanvas.getContext('2d')
    if (!tempCtx) {
      this.canvasPool.release(tempCanvas)
      return defaultColor
    }

    // 计算背景图像中对应的区域
    // 背景图像是全屏截图，需要根据canvas位置计算
    const bgWidth = this.backgroundImage.width
    const bgHeight = this.backgroundImage.height
    const canvasWidth = this.canvas.width / dpr
    const canvasHeight = this.canvas.height / dpr

    // 计算缩放比例
    const scaleX = bgWidth / canvasWidth
    const scaleY = bgHeight / canvasHeight

    // 计算在背景图像中的源区域
    const srcX = rect.x * scaleX
    const srcY = rect.y * scaleY
    const srcWidth = rect.width * scaleX
    const srcHeight = rect.height * scaleY

    // 绘制背景图像的对应区域到临时canvas
    try {
      tempCtx.drawImage(
        this.backgroundImage,
        srcX, srcY, srcWidth, srcHeight,
        0, 0, physicalWidth, physicalHeight
      )
    } catch (error) {
      logger.error('[截图] 采样区域绘制失败', error)
      this.canvasPool.release(tempCanvas)
      return defaultColor
    }

    // 获取像素数据
    let imageData: ImageData
    try {
      imageData = tempCtx.getImageData(0, 0, physicalWidth, physicalHeight)
    } catch (error) {
      logger.error('[截图] 获取像素数据失败', error)
      this.canvasPool.release(tempCanvas)
      return defaultColor
    }

    const data = imageData.data

    // 计算采样点的位置（均匀分布在区域内）
    // 使用 4x4 网格采样（共16个点）
    const gridSize = Math.ceil(Math.sqrt(sampleSize))
    const stepX = physicalWidth / (gridSize + 1)
    const stepY = physicalHeight / (gridSize + 1)

    let totalR = 0
    let totalG = 0
    let totalB = 0
    let sampleCount = 0

    for (let row = 1; row <= gridSize; row++) {
      for (let col = 1; col <= gridSize; col++) {
        if (sampleCount >= sampleSize) break

        const x = Math.floor(col * stepX)
        const y = Math.floor(row * stepY)

        // 确保坐标在有效范围内
        if (x >= 0 && x < physicalWidth && y >= 0 && y < physicalHeight) {
          const index = (y * physicalWidth + x) * 4
          
          if (index >= 0 && index + 2 < data.length) {
            totalR += data[index]
            totalG += data[index + 1]
            totalB += data[index + 2]
            sampleCount++
          }
        }
      }
    }

    // 释放 canvas 回池
    this.canvasPool.release(tempCanvas)

    // 计算平均值
    if (sampleCount === 0) {
      return defaultColor
    }

    const avgR = Math.round(totalR / sampleCount)
    const avgG = Math.round(totalG / sampleCount)
    const avgB = Math.round(totalB / sampleCount)

    // 使用 getBrightness 方法计算亮度值
    const brightness = this.getBrightness(avgR, avgG, avgB)

    return {
      r: avgR,
      g: avgG,
      b: avgB,
      brightness
    }
  }

  /**
   * 计算颜色的亮度值
   * 使用标准公式: brightness = 0.299*R + 0.587*G + 0.114*B
   * @param r 红色分量 (0-255)
   * @param g 绿色分量 (0-255)
   * @param b 蓝色分量 (0-255)
   * @returns 亮度值 (0-255)
   */
  public getBrightness(r: number, g: number, b: number): number {
    // 确保输入值在有效范围内
    const clampedR = Math.max(0, Math.min(255, r))
    const clampedG = Math.max(0, Math.min(255, g))
    const clampedB = Math.max(0, Math.min(255, b))
    
    // 使用标准亮度计算公式
    // 这个公式基于人眼对不同颜色的敏感度：绿色最敏感，红色次之，蓝色最不敏感
    return Math.round(0.299 * clampedR + 0.587 * clampedG + 0.114 * clampedB)
  }

  /**
   * 根据采样颜色计算覆盖层样式
   * 深色背景（亮度 < 128）：使用深色半透明背景 + 浅色文字
   * 浅色背景（亮度 >= 128）：使用浅色半透明背景 + 深色文字
   * @param sampledColor 采样得到的背景颜色
   * @returns 覆盖层样式
   */
  public calculateOverlayStyle(sampledColor: SampledColor): OverlayStyle {
    const { brightness } = sampledColor
    const isDarkBackground = brightness < 128

    // 根据背景亮度计算透明度（0.85-0.95）
    // 背景越暗或越亮（极端值），透明度越高，以确保文字可读性
    const normalizedBrightness = brightness / 255
    const distanceFromMiddle = Math.abs(normalizedBrightness - 0.5) * 2 // 0-1
    const alpha = 0.85 + distanceFromMiddle * 0.1 // 0.85-0.95

    let backgroundColor: string
    let textColor: string

    if (isDarkBackground) {
      // 深色背景：使用深色半透明背景（亮度 < 64）+ 浅色文字
      // 背景色基于原色调整，使其更暗
      const bgR = Math.max(0, Math.round(sampledColor.r * 0.2))
      const bgG = Math.max(0, Math.round(sampledColor.g * 0.2))
      const bgB = Math.max(0, Math.round(sampledColor.b * 0.2))
      backgroundColor = `rgba(${bgR}, ${bgG}, ${bgB}, ${alpha})`
      
      // 浅色文字（白色或接近白色）
      textColor = 'rgba(255, 255, 255, 0.95)'
    } else {
      // 浅色背景：使用浅色半透明背景（亮度 >= 200）+ 深色文字
      // 背景色基于原色调整，使其更亮
      const bgR = Math.min(255, Math.round(sampledColor.r + (255 - sampledColor.r) * 0.8))
      const bgG = Math.min(255, Math.round(sampledColor.g + (255 - sampledColor.g) * 0.8))
      const bgB = Math.min(255, Math.round(sampledColor.b + (255 - sampledColor.b) * 0.8))
      backgroundColor = `rgba(${bgR}, ${bgG}, ${bgB}, ${alpha})`
      
      // 深色文字（黑色或接近黑色）
      textColor = 'rgba(0, 0, 0, 0.9)'
    }

    return {
      backgroundColor,
      textColor,
      borderRadius: 3, // 轻微圆角（2-4px范围内）
      padding: 4       // 内边距
    }
  }

  /**
   * 检测指定区域是否为纯色（颜色方差小于阈值）
   * 通过计算采样点的颜色方差来判断区域是否为纯色
   * @param rect 检测区域（相对于canvas的坐标）
   * @param threshold 方差阈值，默认100，方差小于此值认为是纯色
   * @param sampleSize 采样点数量，默认16
   * @returns 是否为纯色区域
   */
  public isUniformColor(rect: Rect, threshold: number = 100, sampleSize: number = 16): boolean {
    if (!this.backgroundImage) {
      return false
    }

    // 从 Canvas 池获取临时 canvas
    const dpr = window.devicePixelRatio || 1
    const physicalWidth = Math.round(rect.width * dpr)
    const physicalHeight = Math.round(rect.height * dpr)
    
    const tempCanvas = this.canvasPool.acquire(physicalWidth, physicalHeight)
    const tempCtx = tempCanvas.getContext('2d')
    if (!tempCtx) {
      this.canvasPool.release(tempCanvas)
      return false
    }

    // 计算背景图像中对应的区域
    const bgWidth = this.backgroundImage.width
    const bgHeight = this.backgroundImage.height
    const canvasWidth = this.canvas.width / dpr
    const canvasHeight = this.canvas.height / dpr

    // 计算缩放比例
    const scaleX = bgWidth / canvasWidth
    const scaleY = bgHeight / canvasHeight

    // 计算在背景图像中的源区域
    const srcX = rect.x * scaleX
    const srcY = rect.y * scaleY
    const srcWidth = rect.width * scaleX
    const srcHeight = rect.height * scaleY

    // 绘制背景图像的对应区域到临时canvas
    try {
      tempCtx.drawImage(
        this.backgroundImage,
        srcX, srcY, srcWidth, srcHeight,
        0, 0, physicalWidth, physicalHeight
      )
    } catch (error) {
      logger.error('[截图] isUniformColor: 采样区域绘制失败', error)
      this.canvasPool.release(tempCanvas)
      return false
    }

    // 获取像素数据
    let imageData: ImageData
    try {
      imageData = tempCtx.getImageData(0, 0, physicalWidth, physicalHeight)
    } catch (error) {
      logger.error('[截图] isUniformColor: 获取像素数据失败', error)
      this.canvasPool.release(tempCanvas)
      return false
    }

    const data = imageData.data

    // 计算采样点的位置（均匀分布在区域内）
    const gridSize = Math.ceil(Math.sqrt(sampleSize))
    const stepX = physicalWidth / (gridSize + 1)
    const stepY = physicalHeight / (gridSize + 1)

    // 收集采样点的颜色值
    const samples: Array<{ r: number; g: number; b: number }> = []

    for (let row = 1; row <= gridSize; row++) {
      for (let col = 1; col <= gridSize; col++) {
        if (samples.length >= sampleSize) break

        const x = Math.floor(col * stepX)
        const y = Math.floor(row * stepY)

        // 确保坐标在有效范围内
        if (x >= 0 && x < physicalWidth && y >= 0 && y < physicalHeight) {
          const index = (y * physicalWidth + x) * 4
          
          if (index >= 0 && index + 2 < data.length) {
            samples.push({
              r: data[index],
              g: data[index + 1],
              b: data[index + 2]
            })
          }
        }
      }
    }

    // 释放 canvas 回池
    this.canvasPool.release(tempCanvas)

    // 如果采样点不足，无法判断
    if (samples.length < 2) {
      return false
    }

    // 计算每个通道的平均值
    const avgR = samples.reduce((sum, s) => sum + s.r, 0) / samples.length
    const avgG = samples.reduce((sum, s) => sum + s.g, 0) / samples.length
    const avgB = samples.reduce((sum, s) => sum + s.b, 0) / samples.length

    // 计算每个通道的方差
    const varianceR = samples.reduce((sum, s) => sum + Math.pow(s.r - avgR, 2), 0) / samples.length
    const varianceG = samples.reduce((sum, s) => sum + Math.pow(s.g - avgG, 2), 0) / samples.length
    const varianceB = samples.reduce((sum, s) => sum + Math.pow(s.b - avgB, 2), 0) / samples.length

    // 计算总方差（三个通道方差的平均值）
    const totalVariance = (varianceR + varianceG + varianceB) / 3

    // 方差小于阈值则认为是纯色
    return totalVariance < threshold
  }

  /**
   * 根据OCR块高度估算合适的字体大小
   * 基础公式: fontSize = blockHeight * 0.8
   * 边界约束: fontSize = clamp(fontSize, 12, blockHeight * 0.85)
   * @param blockHeight OCR块的高度
   * @returns 估算的字体大小
   */
  public estimateFontSize(blockHeight: number): number {
    // 处理异常输入
    if (blockHeight <= 0) {
      return 12 // 返回最小字体大小
    }

    // 基础公式：字体大小为块高度的80%
    const baseFontSize = blockHeight * 0.8

    // 计算最大字体大小（块高度的85%）
    const maxFontSize = blockHeight * 0.85

    // 边界约束：最小12px，最大为块高度的85%
    const minFontSize = 12
    const clampedFontSize = Math.max(minFontSize, Math.min(baseFontSize, maxFontSize))

    return Math.round(clampedFontSize)
  }

  /**
   * 根据文字内容和块宽度调整字体大小
   * 测量文字宽度，如果超出块宽度则缩小字体
   * 最小字体不低于12px
   * @param text 文字内容
   * @param blockWidth 块宽度
   * @param initialFontSize 初始字体大小
   * @param ctx Canvas上下文（用于测量文字宽度）
   * @returns 调整后的字体大小
   */
  public fitTextToWidth(
    text: string,
    blockWidth: number,
    initialFontSize: number,
    ctx: CanvasRenderingContext2D
  ): number {
    const minFontSize = 12
    const padding = 4 // 内边距

    // 处理异常输入
    if (!text || text.length === 0) {
      return initialFontSize
    }
    if (blockWidth <= 0) {
      return minFontSize
    }
    if (initialFontSize <= minFontSize) {
      return minFontSize
    }

    // 可用宽度（减去两侧内边距）
    const availableWidth = blockWidth - padding * 2

    // 如果可用宽度太小，返回最小字体
    if (availableWidth <= 0) {
      return minFontSize
    }

    let fontSize = initialFontSize

    // 保存当前字体设置
    const originalFont = ctx.font

    // 逐步缩小字体直到文字适合宽度或达到最小字体
    while (fontSize > minFontSize) {
      ctx.font = `${fontSize}px sans-serif`
      const textWidth = ctx.measureText(text).width

      if (textWidth <= availableWidth) {
        break
      }

      // 缩小字体（每次减少1px）
      fontSize -= 1
    }

    // 恢复原始字体设置
    ctx.font = originalFont

    // 确保不低于最小字体
    return Math.max(fontSize, minFontSize)
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
      
      const center = getRectCenter(this.snappedWindow)
      const titleX = center.x
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
    
    // 切换工具时清除翻译覆盖层
    if (tool !== ToolType.Translate && this.translationOverlay.isVisible) {
      this.clearTranslationOverlay()
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
    
    // 【光标更新】切换工具时更新光标样式
    if (tool !== ToolType.Select) {
      this.updateToolCursor()
    }
    
    this.draw()
    this.onStateChange?.()
  }

  // 执行翻译（供外部调用）
  executeTranslation(): void {
    if (this.currentTool === ToolType.Translate && this.selectionRect) {
      // 同步设置isLoading，防止blur事件关闭窗口
      this.translationOverlay.isLoading = true
      this.translationOverlay.isVisible = true
      this.draw()
      this.onStateChange?.()
      this.performOcrTranslation()
    }
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
        // 画笔工具：正常绘制，不做实时约束
        this.currentAnnotation.addPoint(point)
        break
      
      case ToolType.Mosaic:
        // 马赛克需要添加所有点
        this.currentAnnotation.addPoint(point)
        break
    }
  }

  // 完成标注创建
  finishAnnotation(): void {
    if (this.currentAnnotation) {
      const data = this.currentAnnotation.getData()
      
      // 画笔工具 + Shift键：智能识别并矫正
      if (data.type === ToolType.Pen && this.isShiftPressed && data.points.length >= 3) {
        this.smartCorrectPenAnnotation()
      }
      
      const isValid = this.currentAnnotation.isValid()
      
      if (isValid) {
        this.pushAnnotationHistory()
        this.annotations.push(this.currentAnnotation)
        this.onStateChange?.()
      }
    }
    this.currentAnnotation = null
  }

  // 智能识别并矫正画笔标注
  private smartCorrectPenAnnotation(): void {
    if (!this.currentAnnotation) return
    
    const data = this.currentAnnotation.getData()
    const points = data.points
    
    if (points.length < 3) return // 至少需要3个点才进行识别
    
    // 计算边界
    let minX = points[0].x, maxX = points[0].x
    let minY = points[0].y, maxY = points[0].y
    
    points.forEach(p => {
      minX = Math.min(minX, p.x)
      maxX = Math.max(maxX, p.x)
      minY = Math.min(minY, p.y)
      maxY = Math.max(maxY, p.y)
    })
    
    const width = maxX - minX
    const height = maxY - minY
    
    // 计算路径的总长度
    let pathLength = 0
    for (let i = 1; i < points.length; i++) {
      // 使用工具函数计算距离
      pathLength += distance(points[i - 1], points[i])
    }
    
    // 判断是否为直线（使用工具函数计算直线距离）
    const straightLineLength = distance(points[0], points[points.length - 1])
    const straightness = straightLineLength / pathLength
    const aspectRatio = Math.max(width, height) / Math.max(Math.min(width, height), 1)
    
    // 直线识别条件：直线度 > 0.85 或 宽高比 > 5
    if (straightness > 0.85 || aspectRatio > 5) {
      const startPoint = points[0]
      const endPoint = points[points.length - 1]
      this.currentAnnotation.updateData({ points: [startPoint, endPoint] })
      return
    }
    
    // 如果不是直线，保持原始路径不变
  }

  // 撤销最后一个操作（标注或翻译）
  undoAnnotation(): void {
    // 优先撤销翻译覆盖层
    if (this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0) {
      this.clearTranslationOverlay()
      return
    }

    if (this.annotationUndoStack.length === 0) {
      return
    }

    this.annotationRedoStack.push(this.createHistorySnapshot())
    const previousSnapshot = this.annotationUndoStack.pop()
    if (!previousSnapshot) {
      return
    }

    this.restoreHistorySnapshot(previousSnapshot)
  }

  // 恢复最后一次撤销的操作
  redoAnnotation(): void {
    if (this.annotationRedoStack.length === 0) {
      return
    }

    this.annotationUndoStack.push(this.createHistorySnapshot())
    const nextSnapshot = this.annotationRedoStack.pop()
    if (!nextSnapshot) {
      return
    }

    this.restoreHistorySnapshot(nextSnapshot)
  }

  // 删除选中的标注
  deleteSelectedAnnotation(): void {
    if (this.selectedAnnotation) {
      const index = this.annotations.findIndex(a => a.getData().id === this.selectedAnnotation!.getData().id)
      if (index !== -1) {
        this.pushAnnotationHistory()
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
      this.pushAnnotationHistory()
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
    if (!this.selectionRect) {
      throw new Error('没有选择区域')
    }

    try {
      const { x, y, width, height } = this.selectionRect

      // 获取窗口信息
      const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
      const scale = windowInfo?.scale || 1

      // 从背景图像裁剪选区
      const captureResult = await this.cropFromBackground(x, y, width, height)

      if (!captureResult?.image) {
        throw new Error('无法从背景图像裁剪选区')
      }

      // 处理标注并生成最终图像
      const finalImage = await this.renderWithAnnotations(captureResult, scale, action)

      // 执行相应操作
      if (action === 'copy') {
        await invoke('copy_to_clipboard', { image: finalImage })
      } else {
        await invoke('save_screenshot_to_file', { image: finalImage })
      }
      
    } catch (error: any) {
      const actionText = action === 'save' ? '保存' : '复制'
      logger.error(`[截图] ${actionText}截图失败`, error)
      
      // 重新抛出错误，让调用方处理
      throw new Error(`${actionText}截图失败: ${error?.message || error?.toString() || '未知错误'}`)
    }
  }

  // 从背景图像裁剪指定区域
  private async cropFromBackground(
    x: number, 
    y: number, 
    width: number, 
    height: number,
    options: CropOptions = {}
  ): Promise<CropResult> {
    return new Promise(async (resolve, reject) => {
      // 设置超时处理，避免无限等待
      const timeoutId = setTimeout(() => {
        reject(new Error('裁剪背景图像超时'))
      }, 10000) // 10秒超时
      
      try {
        // 如果背景图像还没加载，等待一段时间
        if (!this.backgroundImage) {
          const maxWaitTime = 3000
          const checkInterval = 100
          let waitedTime = 0
          
          while (!this.backgroundImage && waitedTime < maxWaitTime) {
            await new Promise(resolve => setTimeout(resolve, checkInterval))
            waitedTime += checkInterval
          }
          
          if (!this.backgroundImage) {
            throw new Error('背景图像加载超时')
          }
        }

        // 计算裁剪区域（考虑设备像素比）
        const dpr = window.devicePixelRatio || 1
        const padding = Math.max(0, options.padding || 0)
        const logicalCanvasWidth = this.canvas.width / dpr
        const logicalCanvasHeight = this.canvas.height / dpr
        const requestedX = x - padding
        const requestedY = y - padding
        const requestedWidth = width + padding * 2
        const requestedHeight = height + padding * 2
        const cropWidth = Math.max(1, Math.round(requestedWidth * dpr))
        const cropHeight = Math.max(1, Math.round(requestedHeight * dpr))

        const sourceLogicalX = Math.max(0, requestedX)
        const sourceLogicalY = Math.max(0, requestedY)
        const sourceLogicalRight = Math.min(logicalCanvasWidth, requestedX + requestedWidth)
        const sourceLogicalBottom = Math.min(logicalCanvasHeight, requestedY + requestedHeight)
        const sourceLogicalWidth = Math.max(0, sourceLogicalRight - sourceLogicalX)
        const sourceLogicalHeight = Math.max(0, sourceLogicalBottom - sourceLogicalY)

        const cropX = Math.round(sourceLogicalX * dpr)
        const cropY = Math.round(sourceLogicalY * dpr)
        const sourceWidth = Math.min(
          this.canvas.width - cropX,
          Math.round(sourceLogicalWidth * dpr)
        )
        const sourceHeight = Math.min(
          this.canvas.height - cropY,
          Math.round(sourceLogicalHeight * dpr)
        )
        const destX = Math.round((sourceLogicalX - requestedX) * dpr)
        const destY = Math.round((sourceLogicalY - requestedY) * dpr)

        // 创建临时canvas进行裁剪
        const tempCanvas = document.createElement('canvas')
        tempCanvas.width = cropWidth
        tempCanvas.height = cropHeight
        const tempCtx = tempCanvas.getContext('2d', {
          alpha: true,
          desynchronized: false,
          willReadFrequently: false
        })

        if (!tempCtx) {
          throw new Error('无法获取2D绘图上下文')
        }

        // 设置高质量渲染
        tempCtx.imageSmoothingEnabled = false // 裁剪时禁用平滑，保持像素精确

        if (options.fillColor) {
          tempCtx.fillStyle = options.fillColor
          tempCtx.fillRect(0, 0, cropWidth, cropHeight)
        }
        
        // 从背景图像裁剪指定区域
        if (sourceWidth > 0 && sourceHeight > 0) {
          tempCtx.drawImage(
            this.backgroundImage,
            cropX, cropY, sourceWidth, sourceHeight,
            destX, destY, sourceWidth, sourceHeight
          )
        }

        // 使用最高质量的 PNG 编码
        const dataUrl = tempCanvas.toDataURL('image/png', 1.0)
        const base64 = dataUrl.replace(/^data:image\/png;base64,/, '')

        clearTimeout(timeoutId)
        resolve({
          image: base64,
          adjusted_width: cropWidth,
          adjusted_height: cropHeight,
          logical_x: requestedX,
          logical_y: requestedY,
          logical_width: requestedWidth,
          logical_height: requestedHeight
        })
      } catch (err: any) {
        clearTimeout(timeoutId)
        reject(new Error(`裁剪背景图像失败: ${err.message || err}`))
      }
    })
  }

  // 渲染带标注的图像
  private async renderWithAnnotations(
    captureResult: CropResult,
    scale: number,
    action: 'copy' | 'save'
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      // 设置超时处理
      const timeoutId = setTimeout(() => {
        reject(new Error('渲染标注超时'))
      }, 15000) // 15秒超时
      
      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = captureResult.adjusted_width
      tempCanvas.height = captureResult.adjusted_height
      const tempCtx = tempCanvas.getContext('2d', {
        alpha: true,
        desynchronized: false,
        willReadFrequently: false
      })

      if (!tempCtx) {
        clearTimeout(timeoutId)
        reject(new Error('无法获取2D绘图上下文'))
        return
      }

      // 设置高质量渲染
      tempCtx.imageSmoothingEnabled = true
      tempCtx.imageSmoothingQuality = 'high'

      const img = new Image()
      img.onload = () => {
        try {
          tempCtx.drawImage(img, 0, 0)

          if (this.annotations.length > 0 && this.selectionRect) {
            const annotationScale = captureResult.logical_width > 0
              ? captureResult.adjusted_width / captureResult.logical_width
              : scale
            const annotationBounds = {
              x: captureResult.logical_x,
              y: captureResult.logical_y,
              width: captureResult.logical_width,
              height: captureResult.logical_height
            }
            const context = this.drawingEngine.createScreenshotContext(
              tempCtx,
              annotationScale,
              annotationBounds
            )

            this.annotations.forEach((annotation, index) => {
              try {
                annotation.drawToScreenshot(context)
              } catch (err) {
                logger.error(`[截图] 绘制标注 ${index} 失败`, err)
              }
            })
          }

          // 根据操作类型选择编码方式
          let dataUrl: string
          if (action === 'copy') {
            // 复制到剪贴板：使用 PNG 格式（高质量，避免压缩损失）
            dataUrl = tempCanvas.toDataURL('image/png')
          } else {
            // 保存到文件：使用 PNG 格式（高质量，无损）
            dataUrl = tempCanvas.toDataURL('image/png')
          }
          
          clearTimeout(timeoutId)
          resolve(dataUrl)
        } catch (err: any) {
          logger.error('[截图] 绘制过程出错', err)
          // 即使出错也尝试返回基本图像
          try {
            const dataUrl = tempCanvas.toDataURL('image/png')
            clearTimeout(timeoutId)
            resolve(dataUrl)
          } catch (fallbackErr) {
            clearTimeout(timeoutId)
            reject(new Error(`渲染失败: ${err.message || err}`))
          }
        }
      }

      img.onerror = (err) => {
        logger.error('[截图] 图像加载失败', err)
        clearTimeout(timeoutId)
        reject(new Error('图像加载失败'))
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
      // 有标注或有翻译覆盖层时都可以撤销
      hasAnnotations: this.annotations.length > 0 || (this.translationOverlay.isVisible && this.translationOverlay.blocks.length > 0),
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
    // 如果当前工具是画笔且更新了颜色或线宽，需要更新光标
    if (this.currentTool === ToolType.Pen && (updates.color || updates.lineWidth)) {
      this.updateToolCursor()
    }
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
    // 如果当前工具是马赛克，需要更新光标
    if (this.currentTool === ToolType.Mosaic) {
      this.updateToolCursor()
    }
    this.onStateChange?.()
  }

  // 删除指定标注
  deleteAnnotation(annotation: BaseAnnotation): void {
    const index = this.annotations.findIndex(a => a === annotation)
    if (index !== -1) {
      this.pushAnnotationHistory()
      this.annotations.splice(index, 1)
      if (this.selectedAnnotation === annotation) {
        this.selectedAnnotation = null
      }
      if (this.editingAnnotation === annotation) {
        this.editingAnnotation = null
      }
      this.draw()
      this.onStateChange?.()
    }
  }

  // 更新文字标注内容
  updateTextAnnotation(annotation: BaseAnnotation, text: string): void {
    if (annotation.getData().type === ToolType.Text) {
      if (annotation.getData().text === text) {
        this.clearEditingAnnotation()
        return
      }

      this.pushAnnotationHistory()
      annotation.updateData({ text })
      this.clearEditingAnnotation() // 清除编辑状态
      this.draw()
      this.onStateChange?.()
    }
  }

  // 设置正在编辑的文字注释
  setEditingAnnotation(annotation: BaseAnnotation | null): void {
    this.editingAnnotation = annotation
    this.draw()
  }

  // 清除编辑状态
  clearEditingAnnotation(): void {
    this.editingAnnotation = null
    this.draw()
  }

  async createPinWindow(): Promise<void> {
    return this.createPinLikeWindow('pin')
  }

  async createOcrPinWindow(): Promise<void> {
    return this.createPinLikeWindow('ocr')
  }

  // 创建贴图/文字识别复用窗口
  private async createPinLikeWindow(mode: 'pin' | 'ocr'): Promise<void> {
    if (!this.selectionRect) return
    
    try {
      // 1. 获取当前选区的截图数据
      const { x, y, width, height } = this.selectionRect
      
      // 获取窗口信息进行坐标转换
      const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
      const scale = windowInfo?.scale || 1
      
      // 计算实际屏幕坐标（用于贴图窗口定位）
      const screenX = Math.round(windowInfo.x + x * scale)
      const screenY = Math.round(windowInfo.y + y * scale)
      const screenWidth = Math.round(width * scale)
      const screenHeight = Math.round(height * scale)
      const screenRight = Math.round(windowInfo.x + window.innerWidth * scale)
      const expandedX = mode === 'ocr'
        ? Math.round(screenX - Math.max(0, screenWidth - screenWidth) / 2)
        : screenX
      const pinWindowX = mode === 'ocr'
        ? Math.max(windowInfo.x, Math.min(expandedX, screenRight - screenWidth))
        : screenX
      
      // 2. 从背景图像裁剪选区，而不是重新截屏
      const cropOptions: CropOptions = {}

      const captureResult = await this.cropFromBackground(x, y, width, height, cropOptions)
      
      if (!captureResult?.image) {
        throw new Error('Failed to crop from background image')
      }
      
      // 3. 处理标注并生成最终图像（贴图使用 PNG 格式）
      const finalImage = await this.renderWithAnnotations(captureResult, scale, 'save')
      
      // 4. 创建贴图窗口
      await invoke('create_pin_window', {
        mode,
        imageData: finalImage,
        x: pinWindowX,
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
      logger.error(`[截图] 创建${mode === 'ocr' ? '文字识别' : '贴图'}窗口失败`, error)
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
      logger.error('[截图] 获取像素颜色失败', error)
    }
  }

  // 实时更新颜色预览（鼠标移动时调用）
  private async updateColorPreview(mousePos: Point): Promise<void> {
    if (!this.selectionRect) return

    try {
      const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
      const scale = windowInfo?.scale || 1
      // 抓取的像素数量应该等于 zoomFactor，这样才能正确等比例放大
      const captureSize = this.colorPickerState.zoomFactor
      const halfCaptureSize = Math.floor(captureSize / 2)
      
      const screenX = Math.round(windowInfo.x + mousePos.x * scale)
      const screenY = Math.round(windowInfo.y + mousePos.y * scale)

      const result = await invoke('get_screen_preview', {
        x: screenX - halfCaptureSize,
        y: screenY - halfCaptureSize,
        width: captureSize,
        height: captureSize
      }) as { image: string }

      const img = new Image()
      img.src = `data:image/png;base64,${result.image}`
      await img.decode()
      
      const imageBitmap = await createImageBitmap(img)
      this.colorPickerState.previewImage = imageBitmap

      // 从预览图像中心获取颜色，避免额外API调用
      const offscreenCanvas = new OffscreenCanvas(captureSize, captureSize)
      const ctx = offscreenCanvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(imageBitmap, 0, 0, captureSize, captureSize)
        const pixelData = ctx.getImageData(halfCaptureSize, halfCaptureSize, 1, 1).data
        const colorData = { r: pixelData[0], g: pixelData[1], b: pixelData[2] }
        const hex = this.rgbToHex(colorData.r, colorData.g, colorData.b)
        this.colorPickerState.colorInfo = { rgb: colorData, hex, position: mousePos }
      }

      this.draw()
    } catch (error) {
      logger.error('[截图] 更新颜色预览失败', error)
    }
  }

  // 节流版本的颜色预览更新
  private throttledUpdateColorPreview(mousePos: Point): void {
    const now = Date.now()
    if (now - this.lastThrottledTimestamp < this.throttleInterval) {
      return
    }
    this.lastThrottledTimestamp = now
    
    // 使用requestAnimationFrame优化渲染性能
    if (this.throttleTimer) {
      cancelAnimationFrame(this.throttleTimer)
    }
    this.throttleTimer = requestAnimationFrame(() => {
      this.updateColorPreview(mousePos)
      this.throttleTimer = null
    })
  }

  // RGB 转 HEX
  private rgbToHex(r: number, g: number, b: number): string {
    const toHex = (n: number) => {
      const hex = Math.max(0, Math.min(255, Math.round(n))).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
  }

  // ==================== OCR翻译功能 ====================

  // 执行OCR识别和翻译
  async performOcrTranslation(): Promise<void> {
    if (!this.selectionRect || !this.backgroundImage) {
      return
    }

    try {
      const pipelineStartedAt = performance.now()
      let cropDurationMs = 0
      let ocrLoadDurationMs = 0
      let ocrDurationMs = 0
      let reflowDurationMs = 0
      let translationDurationMs = 0
      
      // 1. 从已有的背景图像中提取选区，避免重新捕获屏幕导致窗口闪烁
      const { x, y, width, height } = this.selectionRect
      const dpr = window.devicePixelRatio || 1
      
      // 从 Canvas 池获取临时 canvas
      const srcWidth = width * dpr
      const srcHeight = height * dpr
      const tempCanvas = this.canvasPool.acquire(srcWidth, srcHeight)
      const tempCtx = tempCanvas.getContext('2d')
      if (!tempCtx) {
        this.canvasPool.release(tempCanvas)
        throw new Error('无法创建临时canvas')
      }
      
      // 计算在背景图像中的对应区域（考虑DPR）
      const srcX = x * dpr
      const srcY = y * dpr
      
      // 从背景图像中裁剪选区
      const cropStartedAt = performance.now()
      tempCtx.drawImage(
        this.backgroundImage,
        srcX, srcY, srcWidth, srcHeight,
        0, 0, srcWidth, srcHeight
      )
      cropDurationMs = Math.round(performance.now() - cropStartedAt)

      // 2. 懒加载 OCR 模块并执行识别
      const ocrLoadStartedAt = performance.now()
      const { recognizeFromCanvas } = await LazyLoader.loadOCR()
      ocrLoadDurationMs = Math.round(performance.now() - ocrLoadStartedAt)
      const ocrStartedAt = performance.now()
      const ocrResult = await recognizeFromCanvas(tempCanvas)
      ocrDurationMs = Math.round(performance.now() - ocrStartedAt)
      
      // 释放 canvas 回池
      this.canvasPool.release(tempCanvas)
      const ocrTimingData = {
        cropDurationMs,
        ocrModuleLoadDurationMs: ocrLoadDurationMs,
        ocrRecognitionDurationMs: ocrDurationMs,
        confidence: ocrResult.confidence,
        rawLineCount: ocrResult.blocks.length,
        textLength: ocrResult.full_text.trim().length
      }
      logger.info('[OCR] 识别耗时统计', ocrTimingData)
      ocrDiagnosticLogger.log('[OCR] recognition timing', ocrTimingData)

      // 3. 将 OCR 行重组成语义段落，翻译单位不再是单行文本
      const blocks = ocrResult.blocks
      const reflowStartedAt = performance.now()
      const paragraphs = reflowOcrBlocks(blocks)
      reflowDurationMs = Math.round(performance.now() - reflowStartedAt)
      const fullText = paragraphs.map((paragraph) => paragraph.text).join('\n\n')
      const reflowLogData = {
        rawLineCount: blocks.length,
        paragraphCount: paragraphs.length,
        durationMs: reflowDurationMs,
        paragraphs: paragraphs.map((paragraph, index) => ({
          index,
          text: paragraph.text,
          blockCount: paragraph.blocks.length,
          isCodeBlock: Boolean(paragraph.isCodeBlock),
          isStructuredBlock: Boolean(paragraph.isStructuredBlock),
          bbox: paragraph.bbox,
          sourceBlocks: paragraph.blocks.map((block) => ({
            text: block.text,
            x: block.x,
            y: block.y,
            width: block.width,
            height: block.height
          }))
        }))
      }

      logger.info('[OCR] 版面重组完成', reflowLogData)
      ocrDiagnosticLogger.log('[OCR] layout reflow complete', reflowLogData)

      if (!fullText || !fullText.trim()) {
        this.translationOverlay.isLoading = false
        this.translationOverlay.isVisible = false
        this.draw()
        this.onStateChange?.()
        return
      }

      // 4. 翻译
      const selectedTranslationEngine = this.translationOverlay.engine
      this.translationOverlay.sourceLanguage = 'auto'
      this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(detectTranslationLanguage(fullText))

      // 判断文本是否是代码/命令（不应翻译）
      const isCodeBlock = (text: string): boolean => {
        const trimmed = text.trim()
        if (trimmed.match(/^(sudo|npm|yarn|pip|git|cd|ls|cat|chmod|chown|mkdir|rm|cp|mv|curl|wget|brew|apt|yum|dnf|sh|SH|Bash|PowerShell|Fish|Yarn|pnpm|deno|bun|Cargo)\s+\S+/) && 
            !trimmed.match(/^(If|When|Click|Please|You|After|Before|Then|Open|Go|Download)/i)) {
          return true
        }
        return false
      }

      let translationError = ''
      const detectedLanguage = detectTranslationLanguage(fullText)
      const languageLogData = {
        detectedLanguage,
        textLength: fullText.trim().length,
        textPreview: fullText.trim().slice(0, 500)
      }
      logger.info('[OCR] 翻译语言检测完成', languageLogData)
      ocrDiagnosticLogger.log('[OCR] translation language detected', languageLogData)

      if (canTranslateDetectedLanguage(detectedLanguage)) {
        this.translationOverlay.sourceLanguage = detectedLanguage
        this.translationOverlay.targetLanguage = this.getAutoTargetLanguage(detectedLanguage)
      }

      type ParagraphTranslationResult = {
        index: number
        skipped: boolean
        cancelled: boolean
        durationMs: number
        errorMessage?: string
      }

      const offlineTranslatorPromise =
        selectedTranslationEngine === 'offline'
          ? LazyLoader.loadOfflineTranslator()
          : null

      const getTranslationErrorMessage = (errMsg: string): string => {
        if (errMsg.includes('插件') && errMsg.includes('未启用')) {
          return errMsg.includes('translation')
            ? 'OCR识别已完成，但翻译插件未启用，请在插件设置中安装并启用 Translation 插件'
            : errMsg
        }

        if (selectedTranslationEngine === 'offline') {
          if (errMsg.includes('未激活') || errMsg.includes('未下载') || errMsg.includes('运行时未安装')) {
            return errMsg
          }
          if (errMsg.includes('超时')) {
            return '模型加载超时，请重试'
          }
          return errMsg.includes('离线翻译暂仅支持')
            ? errMsg
            : '离线翻译失败: ' + errMsg.substring(0, 50)
        }

        if (errMsg.includes('timeout') || errMsg.includes('超时')) {
          return '翻译超时，请检查网络连接'
        }

        if (errMsg.includes('network') || errMsg.includes('网络') || errMsg.includes('请求') || errMsg.includes('令牌')) {
          return '翻译失败，请检查网络连接'
        }

        if (errMsg.trim()) {
          return errMsg.slice(0, 80)
        }

        return '翻译失败，请检查网络连接'
      }

      const loadOfflineTranslator = async () => {
        if (!offlineTranslatorPromise) {
          throw new Error('离线翻译模块未加载')
        }

        const {
          translateOffline,
          canUseOfflineTranslation,
          warmupOfflineTranslator,
          getModelCacheInfo
        } = await offlineTranslatorPromise

        const memoryLoaded = canUseOfflineTranslation()
        if (this.offlineModelActivated && !memoryLoaded) {
          const cacheInfo = await getModelCacheInfo()
          if (cacheInfo.isCached) {
            await warmupOfflineTranslator()
          } else {
            throw new Error('离线翻译模型未下载，请在设置-翻译配置中下载模型')
          }
        } else if (!this.offlineModelActivated) {
          throw new Error('离线翻译模型未激活，请在设置-翻译配置中激活模型')
        }

        return translateOffline
      }

      const translateText = async (
        text: string,
        sourceLanguage: DetectedLanguage,
        targetLanguage: TranslationLanguage
      ): Promise<string> => {
        if (!text.trim()) {
          return text
        }

        if (selectedTranslationEngine === 'offline') {
          if (sourceLanguage !== 'en' || targetLanguage !== 'zh') {
            throw new Error('离线翻译暂仅支持英译中，请切换 Google 或 Bing 进行中译英')
          }

          const translateOffline = await loadOfflineTranslator()
          return translateOffline(text)
        }

        return (await invoke('translate_text', {
          text,
          from: sourceLanguage,
          to: targetLanguage,
          engine: selectedTranslationEngine
        })) as string
      }

      const isStructuredIdentifierKey = (text: string): boolean => {
        const trimmed = text.trim()
        if (/^(?:option|description|name|value|type|default|example|required)$/i.test(trimmed)) {
          return false
        }

        return /^[A-Za-z_][A-Za-z0-9_-]{1,32}$/.test(trimmed)
      }

      const translateStructuredText = async (
        text: string,
        paragraphIndex: number,
        blockIndex: number
      ): Promise<string> => {
        const trimmed = text.trim()
        if (!trimmed || isCodeBlock(trimmed)) {
          return text
        }

        const inlineTableMatch = text.match(/^(\s*)(\S+)(\s{2,})(.+?)(\s*)$/)
        if (inlineTableMatch) {
          const [, leadingSpace, leftText, spacer, rightText, trailingSpace] = inlineTableMatch
          const leftLanguage = detectTranslationLanguage(leftText)
          const leftTranslated = isStructuredIdentifierKey(leftText) || !canTranslateDetectedLanguage(leftLanguage)
            ? leftText
            : await translateText(leftText, leftLanguage, this.getAutoTargetLanguage(leftLanguage))
          const rightLanguage = detectTranslationLanguage(rightText)
          const rightTranslated = canTranslateDetectedLanguage(rightLanguage) && !isCodeBlock(rightText)
            ? await translateText(rightText, rightLanguage, this.getAutoTargetLanguage(rightLanguage))
            : rightText
          return `${leadingSpace}${leftTranslated}${spacer}${rightTranslated}${trailingSpace}`
        }

        if (isStructuredIdentifierKey(trimmed)) {
          return text
        }

        const blockSourceLanguage = detectTranslationLanguage(trimmed)
        if (!canTranslateDetectedLanguage(blockSourceLanguage)) {
          return text
        }

        const blockTargetLanguage = this.getAutoTargetLanguage(blockSourceLanguage)
        const translatedBlock = await translateText(trimmed, blockSourceLanguage, blockTargetLanguage)
        const structuredBlockLogData = {
          paragraphIndex,
          blockIndex,
          sourceLanguage: blockSourceLanguage,
          targetLanguage: blockTargetLanguage,
          sourceText: trimmed,
          translatedText: translatedBlock.slice(0, 200)
        }
        logger.info('[OCR] 结构化块翻译完成', structuredBlockLogData)
        ocrDiagnosticLogger.log('[OCR] structured block translation complete', structuredBlockLogData)
        return translatedBlock
      }

      const translateParagraph = async (
        paragraph: ParagraphBlock,
        index: number
      ): Promise<ParagraphTranslationResult> => {
        const paragraphStartedAt = performance.now()
        const finish = (
          result: Omit<ParagraphTranslationResult, 'index' | 'durationMs'>
        ): ParagraphTranslationResult => ({
          index,
          durationMs: Math.round(performance.now() - paragraphStartedAt),
          ...result
        })

        const paragraphSourceLanguage = detectTranslationLanguage(paragraph.text)
        const paragraphTargetLanguage = this.getAutoTargetLanguage(paragraphSourceLanguage)

        const paragraphLanguageLogData = {
          index,
          text: paragraph.text,
          sourceLanguage: paragraphSourceLanguage,
          targetLanguage: paragraphTargetLanguage,
          engine: selectedTranslationEngine,
          structured: Boolean(paragraph.isStructuredBlock)
        }
        logger.info('[OCR] 段落翻译方向', paragraphLanguageLogData)
        ocrDiagnosticLogger.log('[OCR] paragraph translation direction', paragraphLanguageLogData)

        if (!canTranslateDetectedLanguage(paragraphSourceLanguage)) {
          paragraph.translatedText = paragraph.text
          const skippedResult = finish({
            skipped: true,
            cancelled: false,
            errorMessage: '部分文本暂不支持翻译，已保留原文'
          })
          const skipLogData = {
            index,
            detectedLanguage: paragraphSourceLanguage,
            durationMs: skippedResult.durationMs,
            text: paragraph.text
          }
          logger.warn('[OCR] 跳过不支持的段落语言', skipLogData)
          ocrDiagnosticLogger.log('[OCR] skip unsupported paragraph language', skipLogData)
          return skippedResult
        }

        try {
          if (paragraph.isStructuredBlock && paragraph.blocks.length > 0) {
            const translateBlock = async (block: OcrTextBlock, blockIndex: number): Promise<string> => {
              const translatedBlock = await translateStructuredText(block.text, index, blockIndex)
              block.translatedText = translatedBlock
              return translatedBlock
            }

            const translatedSegments: string[] = []
            if (selectedTranslationEngine === 'offline') {
              for (let blockIndex = 0; blockIndex < paragraph.blocks.length; blockIndex += 1) {
                translatedSegments.push(await translateBlock(paragraph.blocks[blockIndex], blockIndex))
              }
            } else {
              translatedSegments.push(
                ...(await Promise.all(
                  paragraph.blocks.map((block, blockIndex) => translateBlock(block, blockIndex))
                ))
              )
            }

            paragraph.translatedText = translatedSegments.join(' ')
          } else if (isCodeBlock(paragraph.text) || paragraph.isCodeBlock) {
            paragraph.translatedText = paragraph.text
            const skipReason = paragraph.isCodeBlock ? 'code_block' : 'command_like_text'
            const skippedResult = finish({ skipped: true, cancelled: false })
            const skipLogData = {
              index,
              reason: skipReason,
              durationMs: skippedResult.durationMs,
              text: paragraph.text
            }
            logger.info('[OCR] 跳过代码段翻译', skipLogData)
            ocrDiagnosticLogger.log('[OCR] skip code paragraph translation', skipLogData)
            return skippedResult
          } else {
            paragraph.translatedText = await translateText(
              paragraph.text,
              paragraphSourceLanguage,
              paragraphTargetLanguage
            )
          }

          const translatedResult = finish({ skipped: false, cancelled: false })
          const completeLogData = {
            index,
            durationMs: translatedResult.durationMs,
            sourceLanguage: paragraphSourceLanguage,
            targetLanguage: paragraphTargetLanguage,
            engine: selectedTranslationEngine,
            structured: Boolean(paragraph.isStructuredBlock),
            sourceLength: paragraph.text.length,
            translatedLength: (paragraph.translatedText || '').length,
            translatedPreview: (paragraph.translatedText || '').slice(0, 300)
          }
          logger.info('[OCR] 段落翻译完成', completeLogData)
          ocrDiagnosticLogger.log('[OCR] paragraph translation complete', completeLogData)
          return translatedResult
        } catch (err) {
          const errMsg = err instanceof Error ? err.message : String(err)

          if (errMsg === '翻译已取消') {
            return finish({ skipped: false, cancelled: true })
          }

          paragraph.translatedText = paragraph.text
          const errorMessage = getTranslationErrorMessage(errMsg)
          const failedResult = finish({
            skipped: false,
            cancelled: false,
            errorMessage
          })
          const errorLogData = {
            index,
            durationMs: failedResult.durationMs,
            sourceLanguage: paragraphSourceLanguage,
            targetLanguage: paragraphTargetLanguage,
            engine: selectedTranslationEngine,
            error: errMsg,
            structured: Boolean(paragraph.isStructuredBlock),
            text: paragraph.text
          }
          logger.error('[OCR] 段落翻译失败', errorLogData)
          ocrDiagnosticLogger.log('[OCR] paragraph translation failed', errorLogData)
          return failedResult
        }
      }

      const translationStartedAt = performance.now()
      let translationResults: ParagraphTranslationResult[] = []
      if (selectedTranslationEngine === 'offline') {
        for (let index = 0; index < paragraphs.length; index += 1) {
          const result = await translateParagraph(paragraphs[index], index)
          translationResults.push(result)
          if (result.cancelled) {
            return
          }
          if (result.errorMessage) {
            translationError = result.errorMessage
            break
          }
        }
      } else {
        translationResults = await Promise.all(
          paragraphs.map((paragraph, index) => translateParagraph(paragraph, index))
        )
        if (translationResults.some((result) => result.cancelled)) {
          return
        }
        translationError = translationResults.find((result) => result.errorMessage)?.errorMessage || ''
      }
      translationDurationMs = Math.round(performance.now() - translationStartedAt)
      const translationTimingData = {
        durationMs: translationDurationMs,
        engine: selectedTranslationEngine,
        paragraphCount: paragraphs.length,
        translatedParagraphCount: translationResults.filter((result) => !result.skipped && !result.errorMessage).length,
        skippedParagraphCount: translationResults.filter((result) => result.skipped).length,
        failedParagraphCount: translationResults.filter((result) => Boolean(result.errorMessage)).length
      }
      logger.info('[OCR] 翻译耗时统计', translationTimingData)
      ocrDiagnosticLogger.log('[OCR] translation timing', translationTimingData)

      // 5. 将段落 bbox 和尺寸转换到 canvas 坐标系，overlay 以段落为单位绘制
      // 注意：OCR 坐标是基于高 DPR 图像的，需要除以 DPR 转换到 canvas 坐标
      const displayParagraphs = paragraphs.map((paragraph) => this.toDisplayParagraph(paragraph, dpr))
      const translatedBlocks = displayParagraphs.map((paragraph) => this.toLegacyOverlayBlock(paragraph))

      this.translationOverlay.blocks = translatedBlocks
      this.translationOverlay.paragraphBlocks = displayParagraphs
      this.translationOverlay.isLoading = false
      this.translationOverlay.errorMessage = translationError || undefined
      const pipelineTimingData = {
        cropDurationMs,
        ocrModuleLoadDurationMs: ocrLoadDurationMs,
        ocrRecognitionDurationMs: ocrDurationMs,
        reflowDurationMs,
        translationDurationMs,
        totalDurationMs: Math.round(performance.now() - pipelineStartedAt),
        rawLineCount: blocks.length,
        paragraphCount: paragraphs.length,
        engine: selectedTranslationEngine
      }
      logger.info('[OCR] 截图翻译总耗时统计', pipelineTimingData)
      ocrDiagnosticLogger.log('[OCR] pipeline timing', pipelineTimingData)
      this.draw()
      this.onStateChange?.()

    } catch (error) {
      logger.error('[OCR] OCR翻译失败:', error)
      const errMsg = error instanceof Error ? error.message : String(error)
      this.translationOverlay.isLoading = false
      this.translationOverlay.isVisible = true
      this.translationOverlay.errorMessage = this.getOcrTranslationErrorMessage(errMsg)
      this.draw()
      this.onStateChange?.()
    }
  }

  private getOcrTranslationErrorMessage(message: string): string {
    if (message.includes('OCR_RECOGNITION_LOW_QUALITY')) {
      return 'OCR识别质量过低，请重新选择更清晰或方向正确的文本区域'
    }

    if (message.includes('RAPIDOCR_UNAVAILABLE')) {
      return 'RapidOCR 未配置，无法识别截图文字'
    }

    return message ? message.slice(0, 80) : 'OCR翻译失败'
  }

  private getAutoTargetLanguage(sourceLanguage: DetectedLanguage): TranslationLanguage {
    return sourceLanguage === 'zh' ? 'en' : 'zh'
  }

  private toDisplayParagraph(paragraph: ParagraphBlock, dpr: number): ParagraphBlock {
    return {
      ...paragraph,
      blocks: paragraph.blocks.map((block) => ({
        ...block,
        x: block.x / dpr,
        y: block.y / dpr,
        width: block.width / dpr,
        height: block.height / dpr,
        fontSize: block.fontSize / dpr,
        lineHeight: block.lineHeight / dpr
      })),
      bbox: {
        x: paragraph.bbox.x / dpr,
        y: paragraph.bbox.y / dpr,
        width: paragraph.bbox.width / dpr,
        height: paragraph.bbox.height / dpr
      },
      fontSize: paragraph.fontSize ? paragraph.fontSize / dpr : undefined,
      lineHeight: paragraph.lineHeight ? paragraph.lineHeight / dpr : undefined
    }
  }

  private toLegacyOverlayBlock(paragraph: ParagraphBlock): OcrTextBlock {
    return {
      text: paragraph.text,
      x: paragraph.bbox.x,
      y: paragraph.bbox.y,
      width: paragraph.bbox.width,
      height: paragraph.bbox.height,
      fontSize: paragraph.fontSize || 16,
      lineHeight: paragraph.lineHeight || (paragraph.fontSize || 16) * 1.4,
      angle: paragraph.angle || 0,
      translatedText: paragraph.translatedText || paragraph.text,
      isCodeBlock: paragraph.isCodeBlock
    }
  }

  // 清除翻译覆盖层
  async clearTranslationOverlay(): Promise<void> {
    // 懒加载并取消正在进行的离线翻译
    try {
      const { cancelOfflineTranslation } = await LazyLoader.loadOfflineTranslator()
      cancelOfflineTranslation()
    } catch (error) {
      // 如果模块未加载，忽略错误
    }
    
    this.translationOverlay = {
      blocks: [],
      paragraphBlocks: [],
      isVisible: false,
      isLoading: false,
      sourceLanguage: 'auto',
      targetLanguage: 'zh',
      engine: this.translationOverlay.engine  // 保留用户选择的引擎
    }
    this.draw()
    this.onStateChange?.()
  }

  // 获取翻译状态
  getTranslationState(): TranslationOverlay {
    return this.translationOverlay
  }

  // 设置翻译引擎
  setTranslationEngine(engine: 'google' | 'bing' | 'offline'): void {
    this.translationOverlay.engine = engine
    this.onStateChange?.()
  }

  // 设置离线模型激活状态
  setOfflineModelActivated(activated: boolean): void {
    this.offlineModelActivated = activated
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
    // 取消正在进行的离线翻译（异步，不等待）
    LazyLoader.loadOfflineTranslator()
      .then(({ cancelOfflineTranslation }) => cancelOfflineTranslation())
      .catch(() => {})
    
    // 清理 Canvas 池
    this.canvasPool.clear()
    
    // 清理节流定时器
    if (this.throttleTimer) {
      cancelAnimationFrame(this.throttleTimer)
      this.throttleTimer = null
    }

    // 清理背景图像引用，释放内存
    if (this.backgroundImage) {
      this.backgroundImage.onload = null
      this.backgroundImage.onerror = null
      this.backgroundImage.src = ''
      this.backgroundImage = null
    }
    
    // 清理标注数组
    this.annotations.forEach(annotation => {
      // 如果标注有清理方法，调用它
      if (typeof (annotation as any).destroy === 'function') {
        (annotation as any).destroy()
      }
    })
    this.annotations = []
    this.annotationUndoStack = []
    this.annotationRedoStack = []
    this.pendingDragSnapshot = null
    this.pendingResizeSnapshot = null
    this.currentAnnotation = null
    this.selectedAnnotation = null
    this.hoveredAnnotation = null
    this.draggedAnnotation = null
    this.resizingAnnotation = null
    this.editingAnnotation = null
    
    // 清理选择框
    this.selectionRect = null
    
    // 清理拖拽状态
    this.dragStartPoint = null
    this.resizeStartBounds = null
    this.resizeOperation = null
    this.pendingSnapWindow = null
    this.dragStartPosition = null
    this.snappedWindow = null
    
    // 清理窗口信息
    this.allWindows = []
    
    // 清理翻译覆盖层
    this.translationOverlay.blocks = []
    this.translationOverlay.paragraphBlocks = []
    this.translationOverlay.isVisible = false
    this.translationOverlay.isLoading = false
    
    // 清理取色器状态
    if (this.colorPickerState.previewImage) {
      this.colorPickerState.previewImage.close?.()  // 释放ImageBitmap
      this.colorPickerState.previewImage = undefined
    }
    this.colorPickerState.isActive = false
    this.colorPickerState.isVisible = false
    this.colorPickerState.isCopied = false
    this.colorPickerState.colorInfo = undefined

    // 清理事件处理器
    this.eventHandler.unbind()
    
    // 清理鼠标事件监听器
    this.canvas.removeEventListener('mousedown', this.mouseDownHandler)
    this.canvas.removeEventListener('mousemove', this.mouseMoveHandler)
    this.canvas.removeEventListener('mouseup', this.mouseUpHandler)
    this.canvas.removeEventListener('dblclick', this.doubleClickHandler)
    
    // 清理键盘事件监听器
    window.removeEventListener('keydown', this.keyDownHandler)
    window.removeEventListener('keyup', this.keyUpHandler)
    
    // 清理回调函数引用
    this.onStateChange = undefined
    this.onTextInputRequest = undefined
    this.onColorPicked = undefined
    
    // 清理画布上下文（如果需要）
    const ctx = this.canvas.getContext('2d')
    if (ctx) {
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      ctx.restore()
    }
  }
}
