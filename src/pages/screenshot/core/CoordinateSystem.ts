import { Point, Rect, CoordinateTransform } from './types'

// 坐标系统 - 统一处理坐标转换
export class CoordinateSystem implements CoordinateTransform {
  private scale: number
  private canvasRect: DOMRect
  private canvasSize: { width: number, height: number } // 逻辑尺寸
  private physicalSize: { width: number, height: number } // 物理尺寸

  constructor(canvas: HTMLCanvasElement) {
    // 获取逻辑尺寸（CSS 尺寸）
    this.canvasRect = canvas.getBoundingClientRect()
    this.canvasSize = { 
      width: this.canvasRect.width, 
      height: this.canvasRect.height 
    }
    // 获取物理尺寸
    this.physicalSize = { 
      width: canvas.width, 
      height: canvas.height 
    }
    this.scale = this.calculateScale()
  }

  // 更新画布矩形信息
  updateCanvasRect(canvas: HTMLCanvasElement) {
    this.canvasRect = canvas.getBoundingClientRect()
    this.canvasSize = { 
      width: this.canvasRect.width, 
      height: this.canvasRect.height 
    }
    this.physicalSize = { 
      width: canvas.width, 
      height: canvas.height 
    }
    this.scale = this.calculateScale()
  }

  // 计算缩放比例（DPI）
  private calculateScale(): number {
    return this.physicalSize.width / this.canvasRect.width
  }

  // 从鼠标事件获取画布坐标
  getCanvasPosition(event: MouseEvent): Point {
    // 对于截图应用，画布坐标应该直接对应鼠标位置
    return {
      x: event.clientX - this.canvasRect.left,
      y: event.clientY - this.canvasRect.top
    }
  }

  // 逻辑像素转物理像素
  logicalToPhysical(point: Point): Point {
    return {
      x: point.x * this.scale,
      y: point.y * this.scale
    }
  }

  // 物理像素转逻辑像素
  physicalToLogical(point: Point): Point {
    return {
      x: point.x / this.scale,
      y: point.y / this.scale
    }
  }

  // 逻辑坐标转相对坐标（相对于截图区域）
  logicalToRelative(point: Point, bounds: Rect): Point {
    return {
      x: point.x - bounds.x,
      y: point.y - bounds.y
    }
  }

  // 相对坐标转逻辑坐标
  relativeToLogical(point: Point, bounds: Rect): Point {
    return {
      x: point.x + bounds.x,
      y: point.y + bounds.y
    }
  }

  // 矩形逻辑坐标转物理坐标
  rectLogicalToPhysical(rect: Rect): Rect {
    return {
      x: rect.x * this.scale,
      y: rect.y * this.scale,
      width: rect.width * this.scale,
      height: rect.height * this.scale
    }
  }

  // 限制点在画布范围内
  clampToCanvas(point: Point): Point {
    return {
      x: Math.max(0, Math.min(this.canvasSize.width, point.x)),
      y: Math.max(0, Math.min(this.canvasSize.height, point.y))
    }
  }

  // 限制矩形在画布范围内
  clampRectToCanvas(rect: Rect): Rect {
    const x = Math.max(0, rect.x)
    const y = Math.max(0, rect.y)
    const width = Math.min(this.canvasSize.width - x, rect.width)
    const height = Math.min(this.canvasSize.height - y, rect.height)

    return { x, y, width, height }
  }

  // 获取画布尺寸
  getCanvasSize(): { width: number, height: number } {
    return { ...this.canvasSize }
  }

  // 获取缩放比例
  getScale(): number {
    return this.scale
  }

  // 计算两点间距离
  distance(point1: Point, point2: Point): number {
    const dx = point1.x - point2.x
    const dy = point1.y - point2.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  // 检查点是否在矩形内
  isPointInRect(point: Point, rect: Rect, tolerance: number = 0): boolean {
    return point.x >= rect.x - tolerance &&
           point.x <= rect.x + rect.width + tolerance &&
           point.y >= rect.y - tolerance &&
           point.y <= rect.y + rect.height + tolerance
  }

  // 检查点是否在线段附近
  isPointNearLine(point: Point, start: Point, end: Point, tolerance: number = 8): boolean {
    const A = point.x - start.x
    const B = point.y - start.y
    const C = end.x - start.x
    const D = end.y - start.y

    const dot = A * C + B * D
    const lenSq = C * C + D * D

    if (lenSq === 0) {
      return this.distance(point, start) <= tolerance
    }

    const param = dot / lenSq
    let closestPoint: Point

    if (param < 0) {
      closestPoint = start
    } else if (param > 1) {
      closestPoint = end
    } else {
      closestPoint = {
        x: start.x + param * C,
        y: start.y + param * D
      }
    }

    return this.distance(point, closestPoint) <= tolerance
  }
}
