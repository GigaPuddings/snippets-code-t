// 核心类型定义
export interface Point {
  x: number
  y: number
}

export interface Rect {
  x: number
  y: number
  width: number
  height: number
}

export enum OperationType {
  None = 'none',
  Drawing = 'drawing',
  Moving = 'moving',
  ResizingNW = 'resizing-nw',
  ResizingNE = 'resizing-ne',
  ResizingSW = 'resizing-sw',
  ResizingSE = 'resizing-se',
  ResizingN = 'resizing-n',
  ResizingS = 'resizing-s',
  ResizingW = 'resizing-w',
  ResizingE = 'resizing-e',
  DrawingRect = 'drawing-rect',
  DrawingArrow = 'drawing-arrow',
  DrawingPen = 'drawing-pen',
  EditingAnnotation = 'editing-annotation',
  MovingAnnotation = 'moving-annotation',
  ResizingAnnotationNW = 'resizing-annotation-nw',
  ResizingAnnotationSE = 'resizing-annotation-se',
  DrawingText = 'drawing-text',
  DrawingMosaic = 'drawing-mosaic'
}

export enum ToolType {
  Select = 'select',
  Rectangle = 'rectangle',
  Arrow = 'arrow',
  Pen = 'pen',
  Mosaic = 'mosaic',
  Text = 'text'
}

export interface AnnotationStyle {
  color: string
  lineWidth: number
}

export interface AnnotationData {
  id: string
  type: ToolType
  points: Point[]
  style: AnnotationStyle
  selected?: boolean
  hovered?: boolean
  // 扩展属性
  text?: string
  fontSize?: number
  mosaicSize?: number
  mosaicColor?: string
}

export interface DrawingContext {
  ctx: CanvasRenderingContext2D
  scale: number
  offset: Point
  bounds: Rect
}

export interface CoordinateTransform {
  logicalToPhysical(point: Point): Point
  physicalToLogical(point: Point): Point
  logicalToRelative(point: Point, bounds: Rect): Point
}
