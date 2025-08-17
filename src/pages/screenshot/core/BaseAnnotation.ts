import { AnnotationData, Point, DrawingContext } from './types'

// 标注基类
export abstract class BaseAnnotation {
  protected data: AnnotationData

  constructor(data: AnnotationData) {
    this.data = data
  }

  // 获取标注数据
  getData(): AnnotationData {
    return this.data
  }

  // 更新标注数据
  updateData(updates: Partial<AnnotationData>) {
    this.data = { ...this.data, ...updates }
  }

  // 添加点
  addPoint(point: Point) {
    this.data.points.push(point)
  }

  // 更新最后一个点
  updateLastPoint(point: Point) {
    if (this.data.points.length > 0) {
      this.data.points[this.data.points.length - 1] = point
    }
  }

  // 抽象方法：绘制标注
  abstract draw(context: DrawingContext): void

  // 抽象方法：绘制到截图canvas
  abstract drawToScreenshot(context: DrawingContext): void

  // 抽象方法：检测点击命中
  abstract hitTest(point: Point, tolerance?: number): boolean

  // 抽象方法：获取边界框
  abstract getBounds(): { x: number, y: number, width: number, height: number } | null

  // 抽象方法：绘制选中状态
  abstract drawSelection(context: DrawingContext): void

  // 抽象方法：绘制悬停状态
  abstract drawHover(context: DrawingContext): void

  // 移动标注
  move(deltaX: number, deltaY: number) {
    this.data.points.forEach(point => {
      point.x += deltaX
      point.y += deltaY
    })
  }

  // 检查是否有效
  isValid(): boolean {
    return this.data.points.length >= this.getMinPoints()
  }

  // 获取最小点数
  protected abstract getMinPoints(): number

  // 生成唯一ID
  protected generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  }
}
