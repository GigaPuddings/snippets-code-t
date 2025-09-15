import { BaseAnnotation } from './BaseAnnotation'
import { Point, ToolType } from './types'
import { RectangleAnnotation } from '../annotations/RectangleAnnotation'
import { ArrowAnnotation } from '../annotations/ArrowAnnotation'
import { PenAnnotation } from '../annotations/PenAnnotation'
import { TextAnnotation } from '../annotations/TextAnnotation'
import { MosaicAnnotation } from '../annotations/MosaicAnnotation'

// 标注工厂 - 统一创建不同类型的标注
export class AnnotationFactory {
  static createAnnotation(
    type: ToolType,
    startPoint: Point,
    style: { color: string, lineWidth: number },
    options: {
      text?: string
      fontSize?: number
      mosaicSize?: number
    } = {}
  ): BaseAnnotation | null {
    switch (type) {
      case ToolType.Rectangle:
        return new RectangleAnnotation(startPoint, style)
      
      case ToolType.Arrow:
        return new ArrowAnnotation(startPoint, style)
      
      case ToolType.Pen:
        return new PenAnnotation(startPoint, style)
      
      case ToolType.Text:
        return new TextAnnotation(
          startPoint,
          options.text || '',
          style,
          options.fontSize || 16
        )
      
      case ToolType.Mosaic:
        return new MosaicAnnotation(
          startPoint,
          style,
          options.mosaicSize || 15
        )
      
      default:
        return null
    }
  }

  // 从数据恢复标注
  static fromData(data: any): BaseAnnotation | null {
    const { type, points, style } = data
    
    if (!points || points.length === 0) return null

    const startPoint = points[0]
    const annotation = this.createAnnotation(type, startPoint, style, {
      text: data.text,
      fontSize: data.fontSize,
      mosaicSize: data.mosaicSize
    })

    if (annotation) {
      // 恢复所有点（除了第一个点，因为构造函数已经添加了）
      for (let i = 1; i < points.length; i++) {
        annotation.addPoint(points[i])
      }
      
      // 恢复其他属性
      annotation.updateData({
        id: data.id,
        selected: data.selected,
        hovered: data.hovered
      })
    }

    return annotation
  }

  // 获取工具对应的操作类型
  static getOperationType(toolType: ToolType): string {
    const operationMap = {
      [ToolType.Rectangle]: 'drawing-rect',
      [ToolType.Arrow]: 'drawing-arrow',
      [ToolType.Pen]: 'drawing-pen',
      [ToolType.Text]: 'drawing-text',
      [ToolType.Mosaic]: 'drawing-mosaic',
      [ToolType.Select]: 'none'
    } as Record<ToolType, string>;
    
    return operationMap[toolType] || 'none'
  }

  // 检查工具是否为绘图工具
  static isDrawingTool(toolType: ToolType): boolean {
    return toolType !== ToolType.Select
  }

  // 检查工具是否支持样式设置
  static supportsStyleSettings(toolType: ToolType): boolean {
    return toolType !== ToolType.Select && toolType !== ToolType.Mosaic
  }

  // 检查工具是否支持颜色设置
  static supportsColorSettings(toolType: ToolType): boolean {
    return [
      ToolType.Rectangle,
      ToolType.Arrow,
      ToolType.Pen,
      ToolType.Text
    ].includes(toolType)
  }

  // 检查工具是否支持线宽设置
  static supportsLineWidthSettings(toolType: ToolType): boolean {
    return [
      ToolType.Rectangle,
      ToolType.Arrow,
      ToolType.Pen
    ].includes(toolType)
  }

  // 检查工具是否支持文字大小设置
  static supportsTextSizeSettings(toolType: ToolType): boolean {
    return toolType === ToolType.Text
  }

  // 检查工具是否支持马赛克大小设置
  static supportsMosaicSizeSettings(toolType: ToolType): boolean {
    return toolType === ToolType.Mosaic
  }
}
