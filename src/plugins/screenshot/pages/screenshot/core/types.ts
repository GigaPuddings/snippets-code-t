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
  DrawingEllipse = 'drawing-ellipse',
  DrawingLine = 'drawing-line',
  DrawingArrow = 'drawing-arrow',
  DrawingPen = 'drawing-pen',
  EditingAnnotation = 'editing-annotation',
  MovingAnnotation = 'moving-annotation',
  ResizingAnnotationNW = 'resizing-annotation-nw',
  ResizingAnnotationSE = 'resizing-annotation-se',
  DrawingText = 'drawing-text',
  DrawingMosaic = 'drawing-mosaic',
  ColorPicking = 'color-picking',
  Pinning = 'pinning'
}

export enum ToolType {
  Select = 'select',
  Rectangle = 'rectangle',
  Ellipse = 'ellipse',
  Line = 'line',
  Arrow = 'arrow',
  Pen = 'pen',
  Mosaic = 'mosaic',
  Text = 'text',
  ColorPicker = 'color-picker',
  Ocr = 'ocr',
  Pin = 'pin',
  Translate = 'translate'
}

export interface OcrTextBlock {
  text: string
  x: number
  y: number
  width: number
  height: number
  fontSize: number
  lineHeight: number
  angle: number
  translatedText?: string
  isCodeBlock?: boolean
}

// 采样颜色信息
export interface SampledColor {
  r: number      // 0-255
  g: number      // 0-255
  b: number      // 0-255
  brightness: number  // 0-255，亮度值
}

// AI 翻译加载阶段，用于展示分步进度提示
export type AiTranslationLoadingStage = 'starting-service' | 'translating'

export interface TranslationOverlay {
  blocks: OcrTextBlock[]
  paragraphBlocks?: import('./OcrLayoutReflow').ParagraphBlock[]
  isVisible: boolean
  isLoading: boolean
  /** AI 翻译（local-ai）的加载阶段：starting-service=启动模型服务, translating=正在翻译 */
  loadingStage?: AiTranslationLoadingStage
  errorMessage?: string
  sourceLanguage: string
  targetLanguage: string
  engine: 'google' | 'bing' | 'offline' | 'local-ai'
}

export interface AnnotationStyle {
  color: string
  lineWidth: number
  opacity?: number
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

export interface ColorInfo {
  rgb: { r: number; g: number; b: number }
  hex: string
  position: Point
}

export interface ColorPickerState {
  isActive: boolean
  isVisible: boolean // 新增：控制UI是否可见
  mousePosition: Point
  colorInfo?: ColorInfo
  showFormat: 'hex' | 'rgb'
  previewImage?: ImageBitmap
  zoomFactor: number
  isCopied: boolean
}

// 覆盖层样式
export interface OverlayStyle {
  backgroundColor: string    // 背景颜色（带透明度）
  textColor: string         // 文字颜色
  borderRadius: number      // 圆角半径
  padding: number           // 内边距
}
