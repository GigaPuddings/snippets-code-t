import { BaseAnnotation } from './BaseAnnotation'
import { CoordinateSystem } from './CoordinateSystem'
import { Point, Rect, OperationType, ToolType } from './types'

// 事件处理器 - 统一管理鼠标事件和交互逻辑
export class EventHandler {
  private coordinateSystem: CoordinateSystem
  private canvas: HTMLCanvasElement
  private isDrawing = false
  private currentOperation = OperationType.None
  private startPoint: Point = { x: 0, y: 0 }
  private lastMousePos: Point = { x: 0, y: 0 }
  
  constructor(
    canvas: HTMLCanvasElement,
    coordinateSystem: CoordinateSystem
  ) {
    this.canvas = canvas
    this.coordinateSystem = coordinateSystem
    this.bindEvents()
  }

  private preventDefault = (e: Event): void => {
    e.preventDefault()
  }

  private bindEvents(): void {
    // 基本事件防止默认行为
    this.canvas.addEventListener('contextmenu', this.preventDefault)
    this.canvas.addEventListener('dragstart', this.preventDefault)
    this.canvas.addEventListener('selectstart', this.preventDefault)
  }

  unbind(): void {
    // 移除基本事件监听器
    this.canvas.removeEventListener('contextmenu', this.preventDefault)
    this.canvas.removeEventListener('dragstart', this.preventDefault)
    this.canvas.removeEventListener('selectstart', this.preventDefault)
  }

  getOperationType(
    mousePos: Point,
    currentTool: ToolType,
    selectionRect: Rect | null,
    annotations: BaseAnnotation[]
  ): OperationType {
    // 检查是否在标注上
    const annotationAtPoint = this.getAnnotationAtPoint(mousePos, annotations)

    // 如果不是选择工具，根据工具类型返回对应操作
    if (currentTool !== ToolType.Select) {
      if (!selectionRect) return OperationType.Drawing

      // 检查点是否在选择框内，只有在选择框内才能标注
      const isInRect = this.coordinateSystem.isPointInRect(mousePos, selectionRect)
      
      if (isInRect) {
        return this.getDrawingOperationType(currentTool)
      }

      return OperationType.None
    }

    // 选择工具逻辑
    if (annotationAtPoint) {
      // 马赛克标注不允许编辑
      if (annotationAtPoint.getData().type === ToolType.Mosaic) {
        return OperationType.None
      }
      
      // 检查是否点击在控制点上
      const controlPointOperation = this.getAnnotationControlPointOperation(mousePos, annotationAtPoint)
      if (controlPointOperation !== OperationType.None) {
        return controlPointOperation
      }
      
      // 默认为移动操作（包括文字标注）
      return OperationType.MovingAnnotation
    }

    if (!selectionRect) return OperationType.Drawing

    // 检查选择框的缩放和移动操作
    return this.getSelectionOperationType(mousePos, selectionRect, annotations.length > 0)
  }

  // 获取绘图操作类型
  private getDrawingOperationType(toolType: ToolType): OperationType {
    const operationMap: Record<ToolType, OperationType> = {
      [ToolType.Rectangle]: OperationType.DrawingRect,
      [ToolType.Arrow]: OperationType.DrawingArrow,
      [ToolType.Pen]: OperationType.DrawingPen,
      [ToolType.Text]: OperationType.DrawingText,
      [ToolType.Mosaic]: OperationType.DrawingMosaic,
      [ToolType.ColorPicker]: OperationType.ColorPicking,
      [ToolType.Pin]: OperationType.Pinning,
      [ToolType.Translate]: OperationType.None,
      [ToolType.Select]: OperationType.None
    }

    return operationMap[toolType] || OperationType.Drawing
  }

  // 获取选择框操作类型
  private getSelectionOperationType(
    mousePos: Point,
    selectionRect: Rect,
    hasAnnotations: boolean
  ): OperationType {
    const { x, y, width, height } = selectionRect
    const handleSize = 12

    // 如果有标注，禁用拖拽和缩放
    if (hasAnnotations) {
      return OperationType.None
    }

    // 检查角点
    if (this.isInHandle(mousePos, { x: x, y: y }, handleSize)) {
      return OperationType.ResizingNW
    }
    if (this.isInHandle(mousePos, { x: x + width, y: y }, handleSize)) {
      return OperationType.ResizingNE
    }
    if (this.isInHandle(mousePos, { x: x, y: y + height }, handleSize)) {
      return OperationType.ResizingSW
    }
    if (this.isInHandle(mousePos, { x: x + width, y: y + height }, handleSize)) {
      return OperationType.ResizingSE
    }

    // 检查边界中点
    if (this.isInHandle(mousePos, { x: x + width / 2, y: y }, handleSize)) {
      return OperationType.ResizingN
    }
    if (this.isInHandle(mousePos, { x: x + width / 2, y: y + height }, handleSize)) {
      return OperationType.ResizingS
    }
    if (this.isInHandle(mousePos, { x: x, y: y + height / 2 }, handleSize)) {
      return OperationType.ResizingW
    }
    if (this.isInHandle(mousePos, { x: x + width, y: y + height / 2 }, handleSize)) {
      return OperationType.ResizingE
    }

    // 检查是否在选择区域内
    if (this.coordinateSystem.isPointInRect(mousePos, selectionRect)) {
      return OperationType.Moving
    }

    return OperationType.Drawing
  }

  // 检查是否在控制点范围内
  private isInHandle(mousePos: Point, handlePos: Point, handleSize: number): boolean {
    return Math.abs(mousePos.x - handlePos.x) <= handleSize &&
           Math.abs(mousePos.y - handlePos.y) <= handleSize
  }

  // 获取指定位置的标注
  getAnnotationAtPoint(mousePos: Point, annotations: BaseAnnotation[]): BaseAnnotation | null {
    // 从后往前检查（后绘制的优先）
    for (let i = annotations.length - 1; i >= 0; i--) {
      const annotation = annotations[i]
      if (annotation.hitTest(mousePos)) {
        return annotation
      }
    }
    return null
  }

  // 获取标注控制点操作类型
  private getAnnotationControlPointOperation(mousePos: Point, annotation: BaseAnnotation): OperationType {
    const data = annotation.getData()
    
    // 马赛克不需要编辑
    if (data.type === ToolType.Mosaic) {
      return OperationType.None
    }

    // 文字标注不需要控制点缩放，只需要移动
    if (data.type === ToolType.Text) {
      return OperationType.None
    }

    // 矩形和箭头标注支持控制点缩放
    if (data.type === ToolType.Rectangle || data.type === ToolType.Arrow) {
      if (data.points.length >= 2) {
        const start = data.points[0]
        const end = data.points[data.points.length - 1]
        const handleSize = 8
        const tolerance = 6

        // 检查起点和终点控制点
        const startDistance = Math.sqrt(
          Math.pow(mousePos.x - start.x, 2) + 
          Math.pow(mousePos.y - start.y, 2)
        )
        const endDistance = Math.sqrt(
          Math.pow(mousePos.x - end.x, 2) + 
          Math.pow(mousePos.y - end.y, 2)
        )

        if (startDistance <= handleSize + tolerance) {
          return OperationType.ResizingAnnotationNW // 起点拖拽
        }
        if (endDistance <= handleSize + tolerance) {
          return OperationType.ResizingAnnotationSE // 终点拖拽
        }
      }
    }

    return OperationType.None
  }

  // 获取绘制状态
  getDrawingState(): {
    isDrawing: boolean
    currentOperation: OperationType
    startPoint: Point
    lastMousePos: Point
  } {
    return {
      isDrawing: this.isDrawing,
      currentOperation: this.currentOperation,
      startPoint: this.startPoint,
      lastMousePos: this.lastMousePos
    }
  }

  // 设置操作类型
  setCurrentOperation(operation: OperationType): void {
    this.currentOperation = operation
  }

  // 开始绘制操作
  startDrawing(startPoint: Point): void {
    this.isDrawing = true
    this.startPoint = startPoint
    this.lastMousePos = startPoint
  }

  // 结束绘制操作
  stopDrawing(): void {
    this.isDrawing = false
    this.currentOperation = OperationType.None
  }

  // 更新鼠标位置
  updateMousePosition(mousePos: Point): void {
    this.lastMousePos = mousePos
  }
}
