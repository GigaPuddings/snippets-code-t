<template>
  <div class="screenshot-container" ref="containerRef">

    <div v-if="selectionRect" class="mask-layers">
      <div class="mask-top" :style="topMaskStyle"></div>
      <div class="mask-bottom" :style="bottomMaskStyle"></div>
      <div class="mask-left" :style="leftMaskStyle"></div>
      <div class="mask-right" :style="rightMaskStyle"></div>
    </div>
    <div v-else class="mask-full"></div>

    <canvas ref="canvasRef" class="drawing-canvas" @mousedown="handleMouseDown" @mousemove="handleMouseMove"
      @mouseup="handleMouseUp" @dblclick="handleDoubleClick" @contextmenu.prevent @dragstart.prevent
      @selectstart.prevent></canvas>

    <!-- 尺寸信息显示 -->
    <div v-if="selectionRect && showSizeInfo" class="size-info" :style="sizeInfoStyle">
      <span class="size-text">{{ sizeInfoText }}</span>
    </div>

    <!-- 工具栏 -->
    <div v-if="selectionRect && currentOperation !== OperationType.Drawing" class="toolbar" :style="toolbarStyle">
      <div class="tool-section">
        <button @click="setTool(ToolType.Select)" :class="['tool-btn', { active: currentTool === ToolType.Select }]"
          title="选择工具">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6L43 25L24 27L13.9948 44L8 6Z" fill="none" stroke="currentColor" stroke-width="3"
              stroke-linejoin="round" />
          </svg>
        </button>

        <button @click="setTool(ToolType.Rectangle)"
          :class="['tool-btn', { active: currentTool === ToolType.Rectangle }]" title="矩形工具">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"
              fill="none" stroke="currentColor" stroke-width="3" />
          </svg>
        </button>

        <button @click="setTool(ToolType.Arrow)" :class="['tool-btn', { active: currentTool === ToolType.Arrow }]"
          title="箭头工具">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 11L36.4559 36.4558" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M29 11H11V29" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>

        <button @click="setTool(ToolType.Pen)" :class="['tool-btn', { active: currentTool === ToolType.Pen }]"
          title="画笔工具">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
            <path d="M27.9521 12.3872L36.4374 20.8725" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>

        <button @click="setTool(ToolType.Mosaic)" :class="['tool-btn', { active: currentTool === ToolType.Mosaic }]"
          title="马赛克工具">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 36H36V44H44V36Z" fill="currentColor" />
            <path d="M28 36H20V44H28V36Z" fill="currentColor" />
            <path d="M12 36H4V44H12V36Z" fill="currentColor" />
            <path d="M44 20H36V28H44V20Z" fill="currentColor" />
            <path d="M28 20H20V28H28V20Z" fill="currentColor" />
            <path d="M12 20H4V28H12V20Z" fill="currentColor" />
            <path d="M44 4H36V12H44V4Z" fill="currentColor" />
            <path d="M28 4H20V12H28V4Z" fill="currentColor" />
            <path d="M12 4H4V12H12V4Z" fill="currentColor" />
            <path d="M20 12H12V20H20V12Z" fill="currentColor" />
            <path d="M20 28H12V36H20V28Z" fill="currentColor" />
            <path d="M36 12H28V20H36V12Z" fill="currentColor" />
            <path d="M36 28H28V36H36V28Z" fill="currentColor" />
          </svg>
        </button>

        <button @click="setTool(ToolType.Text)" :class="['tool-btn', { active: currentTool === ToolType.Text }]"
          title="文字工具">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8H32" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            <path d="M28 21H44" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            <path d="M18 42L18 8" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            <path d="M36 42L36 21" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <!-- 分隔线 -->
      <div v-if="currentTool !== ToolType.Select" class="toolbar-divider"></div>

      <!-- 样式设置 -->
      <div class="style-section" v-if="currentTool !== ToolType.Select">
        <!-- 通用粗细设置（矩形、箭头、画笔工具共用） -->
        <div v-if="[ToolType.Rectangle, ToolType.Arrow, ToolType.Pen].includes(currentTool)" class="style-group">
          <div class="line-width-selector">
            <button v-for="width in [2, 3, 5, 8]" :key="width" @click="lineWidth = width"
              :class="['width-btn', { active: lineWidth === width }]" :title="`${width}px`">
              <div class="line-preview" :style="{ height: `${width}px`, backgroundColor: strokeColor }"></div>
            </button>
          </div>
        </div>

        <!-- 马赛克工具粗细设置 -->
        <div v-if="currentTool === ToolType.Mosaic" class="style-group">
          <div class="mosaic-size-selector">
            <button v-for="size in [18, 24, 30]" :key="size" @click="updateMosaicSize(size)"
              :class="['size-btn', { active: mosaicSize === size }]" :title="`${size}px`">
              <div class="mosaic-preview" :style="{
                width: `${size}px`,
                height: `${size}px`
              }"></div>
            </button>
          </div>
        </div>

        <!-- 通用颜色设置（矩形、箭头、画笔、文字工具共用） -->
        <div v-if="[ToolType.Rectangle, ToolType.Arrow, ToolType.Pen, ToolType.Text].includes(currentTool)"
          class="style-group">
          <div class="color-selector">
            <button
              v-for="color in ['#ff4444', '#44ff44', '#4444ff', '#ffff44', '#ff44ff', '#44ffff', '#ffffff', '#000000']"
              :key="color" @click="updateColor(color)" :class="['color-btn', { active: getCurrentColor() === color }]"
              :style="{ backgroundColor: color }" :title="color"></button>
          </div>
        </div>

        <!-- 文字工具特有设置 -->
        <div v-if="currentTool === ToolType.Text" class="style-group">
          <div class="text-size-selector">
            <button v-for="size in [12, 14, 16, 18, 20, 24]" :key="size" @click="textSize = size"
              :class="['size-btn', { active: textSize === size }]" :title="`${size}px`">
              <span class="size-text" :style="{ fontSize: `${size}px` }">A</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="toolbar-divider"></div>

      <!-- 操作按钮 -->
      <div class="action-section">
        <button @click="undoAnnotation" :disabled="annotations.length === 0" class="action-btn undo" title="撤销">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9998 8L6 14L12.9998 21" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
              stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <button @click="deleteSelectedAnnotation" :disabled="!selectedAnnotation" class="action-btn delete"
          title="删除选中">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 11L40 11" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M18 5L30 5" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z" fill="none"
              stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
          </svg>
        </button>

        <button @click="saveScreenshot" class="action-btn save" title="保存">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 24.0083V42H42V24" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M33 23L24 32L15 23" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M23.9917 6V32" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>

        <button @click="confirmSelection" class="action-btn confirm" title="确认">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 24L20 34L40 14" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>

        <button @click="closeWindow" class="action-btn cancel" title="取消">
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 14L34 34" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M14 34L34 14" stroke="currentColor" stroke-width="3" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="!selectionRect" class="instructions">
      <p>拖拽鼠标选择截图区域</p>
      <p class="hint">按ESC键关闭</p>
    </div>

    <!-- 文字输入框 -->
    <div v-if="isTextInputVisible" class="text-input-container" :style="textInputStyle">
      <input ref="textInputRef" v-model="textInput" type="text" class="text-input" :style="{
        color: strokeColor,
        fontSize: textSize + 'px',
        borderColor: strokeColor
      }" @keydown.enter="confirmTextInput" @keydown.escape="cancelTextInput" @blur="confirmTextInput" autofocus />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { invoke } from '@tauri-apps/api/core'

interface Rect {
  x: number
  y: number
  width: number
  height: number
}

enum OperationType {
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
  DrawingText = 'drawing-text',
  DrawingMosaic = 'drawing-mosaic'
}

// 工具类型枚举
enum ToolType {
  Select = 'select',
  Rectangle = 'rectangle',
  Arrow = 'arrow',
  Pen = 'pen',
  Mosaic = 'mosaic',
  Text = 'text'
}

// 标注对象接口
interface Annotation {
  id: string
  type: ToolType
  points: { x: number, y: number }[]
  style: {
    color: string
    lineWidth: number
  }
  selected?: boolean
  hovered?: boolean
  // 文字特有属性
  text?: string
  fontSize?: number
  // 马赛克特有属性
  mosaicSize?: number
}

const containerRef = ref<HTMLDivElement>()
const canvasRef = ref<HTMLCanvasElement>()
const selectionRect = ref<Rect | null>(null)
const isDrawing = ref(false)
const currentOperation = ref<OperationType>(OperationType.None)
const startPoint = ref({ x: 0, y: 0 })
const lastMousePos = ref({ x: 0, y: 0 })

// 标注相关状态
const currentTool = ref<ToolType>(ToolType.Select)
const annotations = ref<Annotation[]>([])
const currentAnnotation = ref<Annotation | null>(null)
const selectedAnnotation = ref<Annotation | null>(null)
const hoveredAnnotation = ref<Annotation | null>(null)
const draggedAnnotation = ref<Annotation | null>(null)
const draggedControlPoint = ref<number | null>(null)
const dragOffset = ref({ x: 0, y: 0 })
const lineWidth = ref(3)
const strokeColor = ref('#ff4444')
const showGuides = ref(true)
const showSizeInfo = ref(true)

// 文字工具相关状态
const textInput = ref('')
const textSize = ref(16)
const isTextInputVisible = ref(false)
const textInputPosition = ref({ x: 0, y: 0 })
const textInputRef = ref<HTMLInputElement>()

// 马赛克工具相关状态
const mosaicSize = ref(18)

const topMaskStyle = computed(() => {
  if (!selectionRect.value) return {}
  const { y } = selectionRect.value
  return {
    top: '0',
    left: '0',
    right: '0',
    height: `${y}px`
  }
})

const bottomMaskStyle = computed(() => {
  if (!selectionRect.value) return {}
  const { y, height } = selectionRect.value
  return {
    top: `${y + height}px`,
    left: '0',
    right: '0',
    bottom: '0'
  }
})

const leftMaskStyle = computed(() => {
  if (!selectionRect.value) return {}
  const { x, y, height } = selectionRect.value
  return {
    top: `${y}px`,
    left: '0',
    width: `${x}px`,
    height: `${height}px`
  }
})

const rightMaskStyle = computed(() => {
  if (!selectionRect.value) return {}
  const { x, y, width, height } = selectionRect.value
  return {
    top: `${y}px`,
    left: `${x + width}px`,
    right: '0',
    height: `${height}px`
  }
})

const toolbarStyle = computed(() => {
  if (!selectionRect.value) return {}

  const { x, y, height } = selectionRect.value
  const toolbarHeight = 40
  const margin = 8
  let toolbarWidth = 442
  
  if (currentTool.value === ToolType.Text) {
    // 文字工具
    toolbarWidth = Math.min(916, window.innerWidth - 2 * margin)
  } else if (currentTool.value === ToolType.Mosaic) {
    // 马赛克工具
    toolbarWidth = Math.min(572, window.innerWidth - 2 * margin)
  } else if (currentTool.value !== ToolType.Select) {
    // 其他绘图工具
    toolbarWidth = Math.min(844, window.innerWidth - 2 * margin)
  }

  let top = y + height + margin
  if (top + toolbarHeight > window.innerHeight) {
    top = y - toolbarHeight - margin
  }

  let left = x
  if (left + toolbarWidth > window.innerWidth) {
    left = window.innerWidth - toolbarWidth - margin
  }
  if (left < margin) {
    left = margin
  }
  if (toolbarWidth > window.innerWidth - 2 * margin) {
    left = margin 
    toolbarWidth = window.innerWidth - 2 * margin
  }

  return {
    left: `${left}px`,
    top: `${top}px`
  }
})

// 尺寸信息样式
const sizeInfoStyle = computed(() => {
  if (!selectionRect.value) return {}

  const { x, y, width, height } = selectionRect.value
  const offset = 10

  let left = x - offset
  let top = y - offset
  let transform = 'translateY(-100%)'

  if (left < 10) {
    left = x + width + offset
    transform = 'translateY(-100%)'
  }

  if (top < 30) {
    top = y + height + offset
    transform = 'translateY(0)'
  }

  return {
    left: `${left}px`,
    top: `${top}px`,
    transform: transform
  }
})

// 尺寸信息文本
const sizeInfoText = computed(() => {
  if (!selectionRect.value) return ''

  const { width, height } = selectionRect.value
  return `${Math.round(width)} × ${Math.round(height)}`
})

// 文字输入框样式
const textInputStyle = computed(() => {
  const estimatedHeight = textSize.value + 20
  return {
    left: `${textInputPosition.value.x}px`,
    top: `${textInputPosition.value.y - estimatedHeight / 2}px`
  }
})

const originalImageData = ref<ImageData | null>(null)

const initCanvas = async () => {
  if (!canvasRef.value || !containerRef.value) return

  const canvas = canvasRef.value
  const container = containerRef.value

  const screenWidth = window.screen.width
  const screenHeight = window.screen.height

  canvas.width = screenWidth
  canvas.height = screenHeight

  canvas.style.width = container.clientWidth + 'px'
  canvas.style.height = container.clientHeight + 'px'

  // 捕获全屏图像数据
  try {
    const result = await invoke('capture_screen_area', {
      x: 0,
      y: 0,
      width: screenWidth,
      height: screenHeight
    }) as {
      image: string,
      adjusted_width: number,
      adjusted_height: number
    }

    if (result && result.image) {
      const img = new Image()
      img.onload = () => {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(img, 0, 0, screenWidth, screenHeight)
          originalImageData.value = ctx.getImageData(0, 0, screenWidth, screenHeight)
          ctx.clearRect(0, 0, screenWidth, screenHeight)
        }
      }
      img.src = `data:image/png;base64,${result.image}`
    }
  } catch (error) {
    console.error('Failed to capture initial screen data:', error)
  }
}

// 绘制所有内容
const drawSelection = () => {
  if (!canvasRef.value || !selectionRect.value) return

  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  drawAnnotations(ctx)

  if (currentAnnotation.value) {
    drawCurrentAnnotation(ctx)
  }

  drawSelectionBox(ctx)
}

// 绘制选择框和控制点
const drawSelectionBox = (ctx: CanvasRenderingContext2D) => {
  if (!selectionRect.value) return

  const { x, y, width, height } = selectionRect.value

  // 始终绘制蓝色边框
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 1
  ctx.setLineDash([])
  ctx.strokeRect(x, y, width, height)

  if (showGuides.value) {
    // 绘制辅助线
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 1
    ctx.setLineDash([4, 4])

    const thirdWidth = width / 3
    const thirdHeight = height / 3

    ctx.beginPath()
    ctx.moveTo(x + thirdWidth, y)
    ctx.lineTo(x + thirdWidth, y + height)
    ctx.moveTo(x + thirdWidth * 2, y)
    ctx.lineTo(x + thirdWidth * 2, y + height)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(x, y + thirdHeight)
    ctx.lineTo(x + width, y + thirdHeight)
    ctx.moveTo(x, y + thirdHeight * 2)
    ctx.lineTo(x + width, y + thirdHeight * 2)
    ctx.stroke()

    // 绘制控制点
    ctx.setLineDash([])
    ctx.fillStyle = '#3b82f6'
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 2

    const handleSize = 8
    const handles = [
      { x: x - handleSize / 2, y: y - handleSize / 2 },
      { x: x + width - handleSize / 2, y: y - handleSize / 2 },
      { x: x - handleSize / 2, y: y + height - handleSize / 2 },
      { x: x + width - handleSize / 2, y: y + height - handleSize / 2 },
      { x: x + width / 2 - handleSize / 2, y: y - handleSize / 2 },
      { x: x + width / 2 - handleSize / 2, y: y + height - handleSize / 2 },
      { x: x - handleSize / 2, y: y + height / 2 - handleSize / 2 },
      { x: x + width - handleSize / 2, y: y + height / 2 - handleSize / 2 }
    ]

    handles.forEach(handle => {
      ctx.fillRect(handle.x, handle.y, handleSize, handleSize)
      ctx.strokeRect(handle.x, handle.y, handleSize, handleSize)
    })
  }
}

// 绘制所有标注
const drawAnnotations = (ctx: CanvasRenderingContext2D) => {
  annotations.value.forEach(annotation => {
    // 绘制悬停效果
    drawAnnotationHover(ctx, annotation)

    ctx.strokeStyle = annotation.style.color
    ctx.lineWidth = annotation.style.lineWidth
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.setLineDash([])

    switch (annotation.type) {
      case ToolType.Rectangle:
        drawRectangleAnnotation(ctx, annotation)
        break
      case ToolType.Arrow:
        drawArrowAnnotation(ctx, annotation)
        break
      case ToolType.Pen:
        drawPenAnnotation(ctx, annotation)
        break
      case ToolType.Text:
        drawTextAnnotation(ctx, annotation)
        break
      case ToolType.Mosaic:
        drawMosaicAnnotation(ctx, annotation)
        break
    }
  })
}

// 绘制当前正在绘制的标注
const drawCurrentAnnotation = (ctx: CanvasRenderingContext2D) => {
  if (!currentAnnotation.value) return

  ctx.strokeStyle = currentAnnotation.value.style.color
  ctx.lineWidth = currentAnnotation.value.style.lineWidth
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.setLineDash([])

  switch (currentAnnotation.value.type) {
    case ToolType.Rectangle:
      drawRectangleAnnotation(ctx, currentAnnotation.value)
      break
    case ToolType.Arrow:
      drawArrowAnnotation(ctx, currentAnnotation.value)
      break
    case ToolType.Pen:
      drawPenAnnotation(ctx, currentAnnotation.value)
      break
    case ToolType.Text:
      drawTextAnnotation(ctx, currentAnnotation.value)
      break
    case ToolType.Mosaic:
      drawMosaicAnnotation(ctx, currentAnnotation.value)
      break
  }
}

// 绘制矩形标注
const drawRectangleAnnotation = (ctx: CanvasRenderingContext2D, annotation: Annotation) => {
  if (annotation.points.length >= 2) {
    const start = annotation.points[0]
    const end = annotation.points[annotation.points.length - 1]
    const width = end.x - start.x
    const height = end.y - start.y

    ctx.strokeRect(start.x, start.y, width, height)

    if (annotation.selected) {
      drawAnnotationHandles(ctx, annotation)
    }
  }
}

// 绘制箭头标注
const drawArrowAnnotation = (ctx: CanvasRenderingContext2D, annotation: Annotation) => {
  if (annotation.points.length >= 2) {
    const start = annotation.points[0]
    const end = annotation.points[annotation.points.length - 1]

    // 绘制线条
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()

    // 绘制箭头头部
    const angle = Math.atan2(end.y - start.y, end.x - start.x)
    const arrowLength = 15
    const arrowAngle = Math.PI / 6

    ctx.beginPath()
    ctx.moveTo(end.x, end.y)
    ctx.lineTo(
      end.x - arrowLength * Math.cos(angle - arrowAngle),
      end.y - arrowLength * Math.sin(angle - arrowAngle)
    )
    ctx.moveTo(end.x, end.y)
    ctx.lineTo(
      end.x - arrowLength * Math.cos(angle + arrowAngle),
      end.y - arrowLength * Math.sin(angle + arrowAngle)
    )
    ctx.stroke()

    if (annotation.selected) {
      drawAnnotationHandles(ctx, annotation)
    }
  }
}

// 绘制画笔标注
const drawPenAnnotation = (ctx: CanvasRenderingContext2D, annotation: Annotation) => {
  if (annotation.points.length > 1) {
    ctx.beginPath()
    ctx.moveTo(annotation.points[0].x, annotation.points[0].y)

    for (let i = 1; i < annotation.points.length; i++) {
      ctx.lineTo(annotation.points[i].x, annotation.points[i].y)
    }

    ctx.stroke()

    if (annotation.selected) {
      drawAnnotationHandles(ctx, annotation)
    }
  }
}

// 绘制文字标注
const drawTextAnnotation = (ctx: CanvasRenderingContext2D, annotation: Annotation) => {
  if (annotation.text && annotation.points.length > 0) {
    // 如果正在编辑这个文字标注，不绘制
    if (selectedAnnotation.value && selectedAnnotation.value.id === annotation.id && isTextInputVisible.value) {
      return
    }

    ctx.font = `${annotation.fontSize || textSize.value}px sans-serif`
    ctx.fillStyle = annotation.style.color
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'

    // 计算文本的边界框
    const textMetrics = ctx.measureText(annotation.text)
    const textWidth = textMetrics.width

    // 确保文本框在选择框内
    const textX = annotation.points[0].x + 4
    const textY = annotation.points[0].y - 8

    // 调整文本位置，使其居中或左对齐
    if (textX + textWidth > selectionRect.value!.x + selectionRect.value!.width) {
      ctx.textAlign = 'right'
    } else {
      ctx.textAlign = 'left'
    }

    ctx.fillText(annotation.text, textX, textY)

    if (annotation.selected) {
      drawAnnotationHandles(ctx, annotation)
    }
  }
}

// 绘制马赛克标注
const drawMosaicAnnotation = (ctx: CanvasRenderingContext2D, annotation: Annotation) => {
  if (!originalImageData.value) return;

  const brushSize = annotation.mosaicSize || 18;
  const mosaicBlockSize = 8; // 马赛克块大小
  const { data, width, height } = originalImageData.value;

  ctx.save();

  // 限制在截图区域内
  if (selectionRect.value) {
    ctx.rect(
      selectionRect.value.x,
      selectionRect.value.y,
      selectionRect.value.width,
      selectionRect.value.height
    );
    ctx.clip();
  }

  // 创建已处理区域的记录，避免重复处理
  const processedBlocks = new Set();

  // 遍历所有点，创建连续的马赛克路径
  for (let i = 0; i < annotation.points.length; i++) {
    const { x, y } = annotation.points[i];

    // 在当前点周围应用马赛克效果
    const startX = Math.max(0, Math.floor(x - brushSize / 2));
    const startY = Math.max(0, Math.floor(y - brushSize / 2));
    const endX = Math.min(width, Math.ceil(x + brushSize / 2));
    const endY = Math.min(height, Math.ceil(y + brushSize / 2));

    // 按马赛克块大小对齐坐标
    const alignedStartX = Math.floor(startX / mosaicBlockSize) * mosaicBlockSize;
    const alignedStartY = Math.floor(startY / mosaicBlockSize) * mosaicBlockSize;
    const alignedEndX = Math.ceil(endX / mosaicBlockSize) * mosaicBlockSize;
    const alignedEndY = Math.ceil(endY / mosaicBlockSize) * mosaicBlockSize;

    for (let blockY = alignedStartY; blockY < alignedEndY; blockY += mosaicBlockSize) {
      for (let blockX = alignedStartX; blockX < alignedEndX; blockX += mosaicBlockSize) {
        const blockKey = `${blockX}_${blockY}`;

        // 避免重复处理同一个块
        if (processedBlocks.has(blockKey)) continue;

        // 检查是否在画笔范围内（圆形区域）
        const blockCenterX = blockX + mosaicBlockSize / 2;
        const blockCenterY = blockY + mosaicBlockSize / 2;
        const distance = Math.sqrt(Math.pow(blockCenterX - x, 2) + Math.pow(blockCenterY - y, 2));

        if (distance <= brushSize / 2) {
          processedBlocks.add(blockKey);

          // 计算这个马赛克块的平均颜色
          let totalR = 0, totalG = 0, totalB = 0;
          let pixelCount = 0;

          const blockEndX = Math.min(width, blockX + mosaicBlockSize);
          const blockEndY = Math.min(height, blockY + mosaicBlockSize);

          for (let py = blockY; py < blockEndY; py++) {
            for (let px = blockX; px < blockEndX; px++) {
              if (px >= 0 && px < width && py >= 0 && py < height) {
                const index = (py * width + px) * 4;
                totalR += data[index];
                totalG += data[index + 1];
                totalB += data[index + 2];
                pixelCount++;
              }
            }
          }

          if (pixelCount > 0) {
            const avgR = Math.round(totalR / pixelCount);
            const avgG = Math.round(totalG / pixelCount);
            const avgB = Math.round(totalB / pixelCount);
            const lightR = Math.min(255, avgR + 80);
            const lightG = Math.min(255, avgG + 80);
            const lightB = Math.min(255, avgB + 80);
            const finalR = Math.max(lightR, 180);
            const finalG = Math.max(lightG, 180);
            const finalB = Math.max(lightB, 180);

            ctx.fillStyle = `rgb(${finalR}, ${finalG}, ${finalB})`;
            ctx.fillRect(blockX, blockY, mosaicBlockSize, mosaicBlockSize);
          }
        }
      }
    }
  }

  ctx.restore();

  // 马赛克不显示选中状态
}

// 绘制标注控制点
const drawAnnotationHandles = (ctx: CanvasRenderingContext2D, annotation: Annotation) => {
  // 马赛克不显示选中状态
  if (annotation.type === ToolType.Mosaic) {
    return
  }

  const handleSize = 6
  ctx.fillStyle = '#3b82f6'
  ctx.strokeStyle = '#ffffff'
  ctx.lineWidth = 1

  if (annotation.type === ToolType.Pen) {
    // 画笔显示边界框
    const bounds = getAnnotationBounds(annotation)
    if (bounds) {
      ctx.setLineDash([2, 2])
      ctx.strokeStyle = '#3b82f6'
      ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height)
      ctx.setLineDash([])
    }
  } else if (annotation.type === ToolType.Text) {
    // 文字显示精确的边界框
    if (annotation.text && annotation.points.length > 0) {
      const fontSize = annotation.fontSize || textSize.value
      const textMetrics = ctx.measureText(annotation.text)
      const textWidth = textMetrics.width

      const textX = annotation.points[0].x + 4
      const textY = annotation.points[0].y - 8

      ctx.setLineDash([2, 2])
      ctx.strokeStyle = '#3b82f6'
      ctx.strokeRect(textX, textY, textWidth, fontSize)
      ctx.setLineDash([])
    }
  } else {
    // 其他类型显示控制点
    annotation.points.forEach(point => {
      ctx.fillRect(point.x - handleSize / 2, point.y - handleSize / 2, handleSize, handleSize)
      ctx.strokeRect(point.x - handleSize / 2, point.y - handleSize / 2, handleSize, handleSize)
    })
  }
}

// 绘制标注悬停效果
const drawAnnotationHover = (ctx: CanvasRenderingContext2D, annotation: Annotation) => {
  if (!annotation.hovered) return

  // 马赛克不显示悬停效果
  if (annotation.type === ToolType.Mosaic) {
    return
  }

  // 只有在选择工具模式下才显示悬停效果
  if (currentTool.value !== ToolType.Select) {
    return
  }

  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2
  ctx.setLineDash([4, 4])

  switch (annotation.type) {
    case ToolType.Rectangle:
      if (annotation.points.length >= 2) {
        const start = annotation.points[0]
        const end = annotation.points[annotation.points.length - 1]
        const width = end.x - start.x
        const height = end.y - start.y
        ctx.strokeRect(start.x, start.y, width, height)
      }
      break

    case ToolType.Arrow:
      if (annotation.points.length >= 2) {
        const start = annotation.points[0]
        const end = annotation.points[annotation.points.length - 1]
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
      }
      break

    case ToolType.Pen:
      if (annotation.points.length > 1) {
        ctx.beginPath()
        ctx.moveTo(annotation.points[0].x, annotation.points[0].y)
        for (let i = 1; i < annotation.points.length; i++) {
          ctx.lineTo(annotation.points[i].x, annotation.points[i].y)
        }
        ctx.stroke()
      }
      break

    case ToolType.Text:
      if (annotation.points.length > 0) {
        const textPoint = annotation.points[0]
        const fontSize = annotation.fontSize || textSize.value

        // 创建临时canvas来计算文字宽度
        const tempCanvas = document.createElement('canvas')
        const tempCtx = tempCanvas.getContext('2d')
        if (tempCtx && annotation.text) {
          tempCtx.font = `${fontSize}px sans-serif`
          const textMetrics = tempCtx.measureText(annotation.text)
          const textWidth = textMetrics.width

          // 使用与绘制文字相同的定位逻辑
          const textX = textPoint.x + 4
          const textY = textPoint.y - 8

          ctx.strokeRect(textX, textY, textWidth, fontSize)
        }
      }
      break
  }

  ctx.setLineDash([])
}

// 获取标注边界框
const getAnnotationBounds = (annotation: Annotation) => {
  if (annotation.points.length === 0) return null

  let minX = annotation.points[0].x
  let maxX = annotation.points[0].x
  let minY = annotation.points[0].y
  let maxY = annotation.points[0].y

  annotation.points.forEach(point => {
    minX = Math.min(minX, point.x)
    maxX = Math.max(maxX, point.x)
    minY = Math.min(minY, point.y)
    maxY = Math.max(maxY, point.y)
  })

  // 对于文字，需要考虑文字大小
  if (annotation.type === ToolType.Text && annotation.text) {
    const fontSize = annotation.fontSize || textSize.value
    // 使用与绘制文字相同的定位逻辑
    const textX = minX + 4
    const textY = minY - 8

    // 创建临时canvas来计算文字宽度
    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')
    if (tempCtx) {
      tempCtx.font = `${fontSize}px sans-serif`
      const textMetrics = tempCtx.measureText(annotation.text)
      const textWidth = textMetrics.width

      maxX = Math.max(maxX, textX + textWidth)
      maxY = Math.max(maxY, textY + fontSize)
    }
  }

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  }
}

// 清除所有选中状态
const clearSelection = () => {
  annotations.value.forEach(annotation => {
    annotation.selected = false
    annotation.hovered = false
  })
  selectedAnnotation.value = null
  hoveredAnnotation.value = null
}

// 删除选中的标注
const deleteSelectedAnnotation = () => {
  if (selectedAnnotation.value) {
    const index = annotations.value.findIndex(a => a.id === selectedAnnotation.value!.id)
    if (index !== -1) {
      annotations.value.splice(index, 1)
      selectedAnnotation.value = null
      drawSelection()
    }
  }
}

// 获取鼠标位置
const getMousePosition = (event: MouseEvent) => {
  if (!canvasRef.value) return { x: 0, y: 0 }

  const rect = canvasRef.value.getBoundingClientRect()
  const canvas = canvasRef.value

  // 计算缩放比例
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height

  // 转换坐标到canvas坐标系
  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY
  }
}

// 检测鼠标位置的操作类型
const getOperationType = (mousePos: { x: number, y: number }): OperationType => {
  // 首先检查是否在标注上
  const annotationAtPoint = getAnnotationAtPoint(mousePos)

  // 如果不是选择工具，根据工具类型返回对应操作
  if (currentTool.value !== ToolType.Select) {
    if (!selectionRect.value) return OperationType.Drawing

    const { x, y, width, height } = selectionRect.value
    if (mousePos.x < x || mousePos.x > x + width ||
      mousePos.y < y || mousePos.y > y + height) {
      return OperationType.None
    }

    switch (currentTool.value) {
      case ToolType.Rectangle:
        return OperationType.DrawingRect
      case ToolType.Arrow:
        return OperationType.DrawingArrow
      case ToolType.Pen:
        return OperationType.DrawingPen
      case ToolType.Text:
        return OperationType.DrawingText
      case ToolType.Mosaic:
        return OperationType.DrawingMosaic
      default:
        return OperationType.Drawing
    }
  }

  // 如果是选择工具且有标注在鼠标位置，返回编辑操作
  if (annotationAtPoint) {
    // 马赛克标注不允许编辑
    if (annotationAtPoint.type === ToolType.Mosaic) {
      return OperationType.None
    }

    // 检查是否在控制点上
    if (selectedAnnotation.value && selectedAnnotation.value.id === annotationAtPoint.id) {
      const controlPoint = getControlPointAtPosition(mousePos, annotationAtPoint)
      if (controlPoint !== null) {
        return OperationType.EditingAnnotation
      }
    }
    return OperationType.EditingAnnotation
  }

  if (!selectionRect.value) return OperationType.Drawing

  const { x, y, width, height } = selectionRect.value
  const handleSize = 12 // 增大检测区域

  // 如果有标注，禁用拖拽和缩放，但保持框选区域
  if (annotations.value.length > 0) {
    return OperationType.None
  }

  // 检查角点
  if (mousePos.x >= x - handleSize && mousePos.x <= x + handleSize &&
    mousePos.y >= y - handleSize && mousePos.y <= y + handleSize) {
    return OperationType.ResizingNW
  }
  if (mousePos.x >= x + width - handleSize && mousePos.x <= x + width + handleSize &&
    mousePos.y >= y - handleSize && mousePos.y <= y + handleSize) {
    return OperationType.ResizingNE
  }
  if (mousePos.x >= x - handleSize && mousePos.x <= x + handleSize &&
    mousePos.y >= y + height - handleSize && mousePos.y <= y + height + handleSize) {
    return OperationType.ResizingSW
  }
  if (mousePos.x >= x + width - handleSize && mousePos.x <= x + width + handleSize &&
    mousePos.y >= y + height - handleSize && mousePos.y <= y + height + handleSize) {
    return OperationType.ResizingSE
  }

  // 检查边界中点
  if (mousePos.x >= x + width / 2 - handleSize && mousePos.x <= x + width / 2 + handleSize &&
    mousePos.y >= y - handleSize && mousePos.y <= y + handleSize) {
    return OperationType.ResizingN
  }
  if (mousePos.x >= x + width / 2 - handleSize && mousePos.x <= x + width / 2 + handleSize &&
    mousePos.y >= y + height - handleSize && mousePos.y <= y + height + handleSize) {
    return OperationType.ResizingS
  }
  if (mousePos.x >= x - handleSize && mousePos.x <= x + handleSize &&
    mousePos.y >= y + height / 2 - handleSize && mousePos.y <= y + height / 2 + handleSize) {
    return OperationType.ResizingW
  }
  if (mousePos.x >= x + width - handleSize && mousePos.x <= x + width + handleSize &&
    mousePos.y >= y + height / 2 - handleSize && mousePos.y <= y + height / 2 + handleSize) {
    return OperationType.ResizingE
  }

  // 检查是否在选择区域内
  if (mousePos.x >= x && mousePos.x <= x + width &&
    mousePos.y >= y && mousePos.y <= y + height) {
    return OperationType.Moving
  }

  return OperationType.Drawing
}

// 获取控制点位置
const getControlPointAtPosition = (mousePos: { x: number, y: number }, annotation: Annotation): number | null => {
  if (!annotation.selected) return null

  const tolerance = 12

  switch (annotation.type) {
    case ToolType.Rectangle:
      if (annotation.points.length >= 2) {
        const start = annotation.points[0]
        const end = annotation.points[annotation.points.length - 1]

        // 检查起点和终点
        if (Math.abs(mousePos.x - start.x) <= tolerance && Math.abs(mousePos.y - start.y) <= tolerance) {
          return 0 // 起点
        }
        if (Math.abs(mousePos.x - end.x) <= tolerance && Math.abs(mousePos.y - end.y) <= tolerance) {
          return 1 // 终点
        }
      }
      break

    case ToolType.Arrow:
      if (annotation.points.length >= 2) {
        const start = annotation.points[0]
        const end = annotation.points[annotation.points.length - 1]

        // 检查起点和终点
        if (Math.abs(mousePos.x - start.x) <= tolerance && Math.abs(mousePos.y - start.y) <= tolerance) {
          return 0 // 起点
        }
        if (Math.abs(mousePos.x - end.x) <= tolerance && Math.abs(mousePos.y - end.y) <= tolerance) {
          return 1 // 终点
        }
      }
      break
  }

  return null
}



// 更新马赛克光标
const updateMosaicCursor = () => {
  if (currentTool.value !== ToolType.Mosaic || !canvasRef.value) return

  const size = mosaicSize.value
  const cursorCanvas = document.createElement('canvas')
  cursorCanvas.width = size + 4
  cursorCanvas.height = size + 4
  const ctx = cursorCanvas.getContext('2d')

  if (ctx) {
    const centerX = (size + 4) / 2
    const centerY = (size + 4) / 2
    const radius = size / 2

    // 绘制简单的白色圆形边框
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'
    ctx.lineWidth = 2
    ctx.stroke()

    const dataUrl = cursorCanvas.toDataURL('image/png')
    canvasRef.value.style.cursor = `url(${dataUrl}) ${centerX} ${centerY}, auto`
  } else {
    canvasRef.value.style.cursor = 'crosshair'
  }
}
// 更新鼠标光标
const updateCursor = (operationType: OperationType) => {
  if (!canvasRef.value) return

  if (operationType === OperationType.DrawingMosaic) {
    updateMosaicCursor()
    return
  }

  const cursorMap = {
    [OperationType.None]: 'default',
    [OperationType.Drawing]: 'crosshair',
    [OperationType.Moving]: 'move',
    [OperationType.ResizingNW]: 'nw-resize',
    [OperationType.ResizingNE]: 'ne-resize',
    [OperationType.ResizingSW]: 'sw-resize',
    [OperationType.ResizingSE]: 'se-resize',
    [OperationType.ResizingN]: 'n-resize',
    [OperationType.ResizingS]: 's-resize',
    [OperationType.ResizingW]: 'w-resize',
    [OperationType.ResizingE]: 'e-resize',
    [OperationType.DrawingRect]: 'crosshair',
    [OperationType.DrawingArrow]: 'crosshair',
    [OperationType.DrawingPen]: 'crosshair',
    [OperationType.EditingAnnotation]: 'move',
    [OperationType.DrawingText]: 'text'
  }

  canvasRef.value.style.cursor = cursorMap[operationType] || 'default'
}

// 鼠标按下事件
const handleMouseDown = (event: MouseEvent) => {
  event.preventDefault()
  event.stopPropagation()

  const mousePos = getMousePosition(event)
  const operationType = getOperationType(mousePos)

  // 如果是无效操作，直接返回，不重置状态
  if (operationType === OperationType.None) {
    return
  }

  currentOperation.value = operationType
  startPoint.value = mousePos
  lastMousePos.value = mousePos
  isDrawing.value = true

  if (operationType === OperationType.Drawing) {
    selectionRect.value = {
      x: mousePos.x,
      y: mousePos.y,
      width: 0,
      height: 0
    }
  } else if ([OperationType.DrawingRect, OperationType.DrawingArrow, OperationType.DrawingPen].includes(operationType)) {
    // 开始绘制标注
    startAnnotation(mousePos, operationType)
  } else if (operationType === OperationType.DrawingText) {
    // 开始文字输入
    startTextInput(mousePos)
  } else if (operationType === OperationType.DrawingMosaic) {
    // 开始马赛克标注
    startAnnotation(mousePos, operationType)
  } else if (operationType === OperationType.EditingAnnotation) {
    // 开始编辑标注
    const annotationAtPoint = getAnnotationAtPoint(mousePos)
    if (annotationAtPoint) {
      // 检查是否在控制点上
      const controlPoint = getControlPointAtPosition(mousePos, annotationAtPoint)
      if (controlPoint !== null && annotationAtPoint.selected) {
        // 开始拖拽控制点
        draggedControlPoint.value = controlPoint
        draggedAnnotation.value = annotationAtPoint
      } else {
        // 开始拖拽整个标注
        clearSelection()
        annotationAtPoint.selected = true
        selectedAnnotation.value = annotationAtPoint
        draggedAnnotation.value = annotationAtPoint

        // 计算拖拽偏移量
        if (annotationAtPoint.points.length > 0) {
          const firstPoint = annotationAtPoint.points[0]
          dragOffset.value = {
            x: mousePos.x - firstPoint.x,
            y: mousePos.y - firstPoint.y
          }
        }
      }

      drawSelection()
    }
  }

  // 添加全局鼠标事件监听，防止快速拖拽时丢失事件
  document.addEventListener('mousemove', handleGlobalMouseMove, { passive: false, capture: true })
  document.addEventListener('mouseup', handleGlobalMouseUp, { passive: false, capture: true })
}

// 工具函数
const setTool = (tool: ToolType) => {
  currentTool.value = tool
  // 清除所有选中状态
  clearSelection()

  // 当切换到标注工具时，隐藏辅助线
  if (tool !== ToolType.Select) {
    showGuides.value = false
    // 切换到非选择工具时，清除悬停状态
    if (hoveredAnnotation.value) {
      hoveredAnnotation.value.hovered = false
      hoveredAnnotation.value = null
    }
  } else {
    showGuides.value = true
  }

  drawSelection()
}

// 生成唯一ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

// 撤销操作
const undoAnnotation = () => {
  if (annotations.value.length > 0) {
    annotations.value.pop()
    drawSelection()
  }
}

// 平滑更新选择框
const updateSelection = (mousePos: { x: number, y: number }) => {
  if (!isDrawing.value) return

  // 处理标注拖拽
  if (draggedAnnotation.value && currentOperation.value === OperationType.EditingAnnotation) {
    updateDraggedAnnotation(mousePos)
    drawSelection()
    return
  }

  // 处理标注绘制
  if (currentAnnotation.value) {
    updateCurrentAnnotation(mousePos)
    drawSelection()
    return
  }

  if (!selectionRect.value) return

  // 如果有标注，禁用拖拽和缩放，但不重置状态
  if (annotations.value.length > 0) {
    return
  }

  const deltaX = mousePos.x - lastMousePos.value.x
  const deltaY = mousePos.y - lastMousePos.value.y

  switch (currentOperation.value) {
    case OperationType.Drawing:
      selectionRect.value.width = mousePos.x - startPoint.value.x
      selectionRect.value.height = mousePos.y - startPoint.value.y
      break

    case OperationType.Moving:
      // 添加边界限制
      const newX = Math.max(0, Math.min(window.innerWidth - selectionRect.value.width, selectionRect.value.x + deltaX))
      const newY = Math.max(0, Math.min(window.innerHeight - selectionRect.value.height, selectionRect.value.y + deltaY))
      selectionRect.value.x = newX
      selectionRect.value.y = newY
      break

    case OperationType.ResizingNW:
      const maxDeltaX_NW = selectionRect.value.width - 10
      const maxDeltaY_NW = selectionRect.value.height - 10
      const clampedDeltaX_NW = Math.min(deltaX, maxDeltaX_NW)
      const clampedDeltaY_NW = Math.min(deltaY, maxDeltaY_NW)

      selectionRect.value.x += clampedDeltaX_NW
      selectionRect.value.y += clampedDeltaY_NW
      selectionRect.value.width -= clampedDeltaX_NW
      selectionRect.value.height -= clampedDeltaY_NW
      break

    case OperationType.ResizingNE:
      const maxDeltaY_NE = selectionRect.value.height - 10
      const clampedDeltaY_NE = Math.min(deltaY, maxDeltaY_NE)

      selectionRect.value.y += clampedDeltaY_NE
      selectionRect.value.width = Math.max(10, selectionRect.value.width + deltaX)
      selectionRect.value.height -= clampedDeltaY_NE
      break

    case OperationType.ResizingSW:
      const maxDeltaX_SW = selectionRect.value.width - 10
      const clampedDeltaX_SW = Math.min(deltaX, maxDeltaX_SW)

      selectionRect.value.x += clampedDeltaX_SW
      selectionRect.value.width -= clampedDeltaX_SW
      selectionRect.value.height = Math.max(10, selectionRect.value.height + deltaY)
      break

    case OperationType.ResizingSE:
      selectionRect.value.width = Math.max(10, selectionRect.value.width + deltaX)
      selectionRect.value.height = Math.max(10, selectionRect.value.height + deltaY)
      break

    case OperationType.ResizingN:
      const maxDeltaY_N = selectionRect.value.height - 10
      const clampedDeltaY_N = Math.min(deltaY, maxDeltaY_N)

      selectionRect.value.y += clampedDeltaY_N
      selectionRect.value.height -= clampedDeltaY_N
      break

    case OperationType.ResizingS:
      selectionRect.value.height = Math.max(10, selectionRect.value.height + deltaY)
      break

    case OperationType.ResizingW:
      const maxDeltaX_W = selectionRect.value.width - 10
      const clampedDeltaX_W = Math.min(deltaX, maxDeltaX_W)

      selectionRect.value.x += clampedDeltaX_W
      selectionRect.value.width -= clampedDeltaX_W
      break

    case OperationType.ResizingE:
      selectionRect.value.width = Math.max(10, selectionRect.value.width + deltaX)
      break
  }

  // 确保宽高不为负数并交换坐标
  if (selectionRect.value.width < 0) {
    selectionRect.value.x += selectionRect.value.width
    selectionRect.value.width = Math.abs(selectionRect.value.width)
  }
  if (selectionRect.value.height < 0) {
    selectionRect.value.y += selectionRect.value.height
    selectionRect.value.height = Math.abs(selectionRect.value.height)
  }

  // 确保不超出屏幕边界
  selectionRect.value.x = Math.max(0, Math.min(window.innerWidth - selectionRect.value.width, selectionRect.value.x))
  selectionRect.value.y = Math.max(0, Math.min(window.innerHeight - selectionRect.value.height, selectionRect.value.y))

  lastMousePos.value = mousePos

  drawSelection()
}

// 更新拖拽的标注
const updateDraggedAnnotation = (mousePos: { x: number, y: number }) => {
  if (!draggedAnnotation.value) return

  if (draggedControlPoint.value !== null) {
    // 拖拽控制点
    updateControlPoint(mousePos)
  } else {
    // 拖拽整个标注
    const deltaX = mousePos.x - lastMousePos.value.x
    const deltaY = mousePos.y - lastMousePos.value.y

    // 移动标注的所有点
    draggedAnnotation.value.points.forEach(point => {
      point.x += deltaX
      point.y += deltaY
    })
  }

  lastMousePos.value = mousePos
}

// 更新控制点位置
const updateControlPoint = (mousePos: { x: number, y: number }) => {
  if (!draggedAnnotation.value || draggedControlPoint.value === null) return

  switch (draggedAnnotation.value.type) {
    case ToolType.Rectangle:
      if (draggedAnnotation.value.points.length >= 2) {
        if (draggedControlPoint.value === 0) {
          // 拖拽起点
          draggedAnnotation.value.points[0] = { x: mousePos.x, y: mousePos.y }
        } else if (draggedControlPoint.value === 1) {
          // 拖拽终点
          draggedAnnotation.value.points[draggedAnnotation.value.points.length - 1] = { x: mousePos.x, y: mousePos.y }
        }
      }
      break

    case ToolType.Arrow:
      if (draggedAnnotation.value.points.length >= 2) {
        if (draggedControlPoint.value === 0) {
          // 拖拽起点
          draggedAnnotation.value.points[0] = { x: mousePos.x, y: mousePos.y }
        } else if (draggedControlPoint.value === 1) {
          // 拖拽终点
          draggedAnnotation.value.points[draggedAnnotation.value.points.length - 1] = { x: mousePos.x, y: mousePos.y }
        }
      }
      break
  }
}

// 鼠标移动事件
const handleMouseMove = (event: MouseEvent) => {
  event.preventDefault()
  event.stopPropagation()

  const mousePos = getMousePosition(event)

  if (!isDrawing.value) {
    // 未在绘制状态时，更新光标样式和悬停状态
    const operationType = getOperationType(mousePos)
    updateCursor(operationType)

    // 更新悬停状态（只在选择工具模式下）
    if (currentTool.value === ToolType.Select) {
      const annotationAtPoint = getAnnotationAtPoint(mousePos)
      if (annotationAtPoint !== hoveredAnnotation.value) {
        // 清除之前的悬停状态
        if (hoveredAnnotation.value) {
          hoveredAnnotation.value.hovered = false
        }

        // 设置新的悬停状态（马赛克除外）
        hoveredAnnotation.value = annotationAtPoint && annotationAtPoint.type !== ToolType.Mosaic ? annotationAtPoint : null
        if (hoveredAnnotation.value) {
          hoveredAnnotation.value.hovered = true
        }

        drawSelection()
      }
    } else {
      // 非选择工具模式下，清除所有悬停状态
      if (hoveredAnnotation.value) {
        hoveredAnnotation.value.hovered = false
        hoveredAnnotation.value = null
        drawSelection()
      }
    }
    return
  }

  // 对于画笔和马赛克工具，增加采样频率
  if (currentAnnotation.value &&
    (currentAnnotation.value.type === ToolType.Pen || currentAnnotation.value.type === ToolType.Mosaic)) {
    // 强制更新，确保不会丢失点
    updateSelection(mousePos)
  } else {
    updateSelection(mousePos)
  }
}



// 全局鼠标移动事件（用于解决快速拖拽断触问题）
const handleGlobalMouseMove = (event: MouseEvent) => {
  if (!isDrawing.value) return

  event.preventDefault()
  event.stopPropagation()

  // 转换全局坐标为 canvas 相对坐标
  if (!canvasRef.value) return

  const rect = canvasRef.value.getBoundingClientRect()
  const mousePos = {
    x: Math.max(0, Math.min(rect.width, event.clientX - rect.left)),
    y: Math.max(0, Math.min(rect.height, event.clientY - rect.top))
  }

  // 对于画笔和马赛克工具，确保高频率更新
  if (currentAnnotation.value &&
    (currentAnnotation.value.type === ToolType.Pen || currentAnnotation.value.type === ToolType.Mosaic)) {
    // 强制更新，确保不会丢失点
    updateSelection(mousePos)
  } else {
    updateSelection(mousePos)
  }
}

// 全局鼠标抬起事件
const handleGlobalMouseUp = (event?: MouseEvent) => {
  if (!isDrawing.value) return

  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  isDrawing.value = false
  currentOperation.value = OperationType.None

  // 移除全局事件监听
  document.removeEventListener('mousemove', handleGlobalMouseMove, true)
  document.removeEventListener('mouseup', handleGlobalMouseUp, true)

  // 完成标注
  finishAnnotation()

  // 清除拖拽状态
  draggedAnnotation.value = null
  draggedControlPoint.value = null
  dragOffset.value = { x: 0, y: 0 }

  // 如果选择区域太小，清除选择
  if (selectionRect.value &&
    (selectionRect.value.width < 10 || selectionRect.value.height < 10)) {
    selectionRect.value = null
    if (canvasRef.value) {
      const ctx = canvasRef.value.getContext('2d')
      ctx?.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
    }
  }
}

// 鼠标抬起事件
const handleMouseUp = () => {
  handleGlobalMouseUp()
}

// 键盘事件处理
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    if (selectionRect.value) {
      closeWindow()
    } else {
      closeWindow()
    }
  } else if (event.key === 'Delete' || event.key === 'Backspace') {
    // 删除选中的标注
    deleteSelectedAnnotation()
  }
}

// 处理截图的核心函数
const processScreenshot = async (action: 'copy' | 'save') => {
  if (!selectionRect.value || !canvasRef.value) return

  try {
    const { x, y, width, height } = selectionRect.value

    // 获取窗口位置信息
    const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
    const scale = windowInfo?.scale || 1

    // 计算实际的屏幕坐标（考虑窗口位置和缩放）
    const screenX = Math.round(windowInfo.x + x * scale)
    const screenY = Math.round(windowInfo.y + y * scale)
    const screenWidth = Math.round(width * scale)
    const screenHeight = Math.round(height * scale)

    // 使用Rust端捕获屏幕内容
    const result = await invoke('capture_screen_area', {
      x: screenX,
      y: screenY,
      width: screenWidth,
      height: screenHeight
    }) as {
      image: string,
      adjusted_width: number,
      adjusted_height: number,
      original_width: number,
      original_height: number
    }

    if (!result || !result.image) {
      console.error('Failed to capture screen area')
      return
    }

    // 使用调整后的尺寸创建临时canvas来处理图像
    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = result.adjusted_width
    tempCanvas.height = result.adjusted_height
    const tempCtx = tempCanvas.getContext('2d')

    if (!tempCtx) {
      console.error('Failed to get 2D context from temporary canvas')
      return
    }

    // 标注的坐标是基于逻辑像素的，需要转换为物理像素
    const logicalToPhysicalScale = scale

    // 创建图像对象
    const img = new Image()
    img.onload = async () => {
      // 绘制屏幕内容
      tempCtx.drawImage(img, 0, 0)

      // 如果有标注，绘制标注到临时canvas
      if (annotations.value.length > 0) {
        // 设置透明背景
        tempCtx.globalCompositeOperation = 'source-over'

        // 绘制所有标注
        annotations.value.forEach(annotation => {
          tempCtx.strokeStyle = annotation.style.color
          tempCtx.lineWidth = annotation.style.lineWidth
          tempCtx.lineCap = 'round'
          tempCtx.lineJoin = 'round'
          tempCtx.setLineDash([])

          switch (annotation.type) {
            case ToolType.Rectangle:
              if (annotation.points.length >= 2) {
                const start = annotation.points[0]
                const end = annotation.points[annotation.points.length - 1]

                // 将逻辑像素坐标转换为物理像素坐标
                const startPhysicalX = start.x * logicalToPhysicalScale
                const startPhysicalY = start.y * logicalToPhysicalScale
                const endPhysicalX = end.x * logicalToPhysicalScale
                const endPhysicalY = end.y * logicalToPhysicalScale

                // 计算相对于截图区域的坐标
                const relativeX = startPhysicalX - (x * logicalToPhysicalScale)
                const relativeY = startPhysicalY - (y * logicalToPhysicalScale)
                const rectWidth = endPhysicalX - startPhysicalX
                const rectHeight = endPhysicalY - startPhysicalY

                tempCtx.strokeRect(relativeX, relativeY, rectWidth, rectHeight)
              }
              break
            case ToolType.Arrow:
              if (annotation.points.length >= 2) {
                const start = annotation.points[0]
                const end = annotation.points[annotation.points.length - 1]

                // 将逻辑像素坐标转换为物理像素坐标
                const startPhysicalX = start.x * logicalToPhysicalScale
                const startPhysicalY = start.y * logicalToPhysicalScale
                const endPhysicalX = end.x * logicalToPhysicalScale
                const endPhysicalY = end.y * logicalToPhysicalScale

                // 计算相对于截图区域的坐标
                const relativeStartX = startPhysicalX - (x * logicalToPhysicalScale)
                const relativeStartY = startPhysicalY - (y * logicalToPhysicalScale)
                const relativeEndX = endPhysicalX - (x * logicalToPhysicalScale)
                const relativeEndY = endPhysicalY - (y * logicalToPhysicalScale)

                // 绘制线条
                tempCtx.beginPath()
                tempCtx.moveTo(relativeStartX, relativeStartY)
                tempCtx.lineTo(relativeEndX, relativeEndY)
                tempCtx.stroke()

                // 绘制箭头头部
                const angle = Math.atan2(end.y - start.y, end.x - start.x)
                const arrowLength = 15
                const arrowAngle = Math.PI / 6

                tempCtx.beginPath()
                tempCtx.moveTo(relativeEndX, relativeEndY)
                tempCtx.lineTo(
                  relativeEndX - arrowLength * Math.cos(angle - arrowAngle),
                  relativeEndY - arrowLength * Math.sin(angle - arrowAngle)
                )
                tempCtx.moveTo(relativeEndX, relativeEndY)
                tempCtx.lineTo(
                  relativeEndX - arrowLength * Math.cos(angle + arrowAngle),
                  relativeEndY - arrowLength * Math.sin(angle + arrowAngle)
                )
                tempCtx.stroke()
              }
              break
            case ToolType.Pen:
              if (annotation.points.length > 1) {
                tempCtx.beginPath()
                const firstPoint = annotation.points[0]

                // 将逻辑像素坐标转换为物理像素坐标
                const firstPhysicalX = firstPoint.x * logicalToPhysicalScale
                const firstPhysicalY = firstPoint.y * logicalToPhysicalScale
                const relativeFirstX = firstPhysicalX - (x * logicalToPhysicalScale)
                const relativeFirstY = firstPhysicalY - (y * logicalToPhysicalScale)

                tempCtx.moveTo(relativeFirstX, relativeFirstY)

                for (let i = 1; i < annotation.points.length; i++) {
                  const point = annotation.points[i]
                  const pointPhysicalX = point.x * logicalToPhysicalScale
                  const pointPhysicalY = point.y * logicalToPhysicalScale
                  const relativePointX = pointPhysicalX - (x * logicalToPhysicalScale)
                  const relativePointY = pointPhysicalY - (y * logicalToPhysicalScale)

                  tempCtx.lineTo(relativePointX, relativePointY)
                }

                tempCtx.stroke()
              }
              break
            case ToolType.Text:
              if (annotation.text && annotation.points.length > 0) {
                tempCtx.font = `${annotation.fontSize || textSize.value}px sans-serif`
                tempCtx.fillStyle = annotation.style.color
                tempCtx.textAlign = 'left'
                tempCtx.textBaseline = 'top'

                // 计算文本的边界框
                const textMetrics = tempCtx.measureText(annotation.text)
                const textWidth = textMetrics.width
                const textX = (annotation.points[0].x + 4) * logicalToPhysicalScale
                const textY = (annotation.points[0].y - 8) * logicalToPhysicalScale

                // 计算相对于截图区域的坐标
                const relativeTextX = textX - (selectionRect.value!.x * logicalToPhysicalScale)
                const relativeTextY = textY - (selectionRect.value!.y * logicalToPhysicalScale)

                // 调整文本位置，使其居中或左对齐
                if (relativeTextX + textWidth > width * logicalToPhysicalScale) {
                  tempCtx.textAlign = 'right'
                } else {
                  tempCtx.textAlign = 'left'
                }

                tempCtx.fillText(annotation.text, relativeTextX, relativeTextY)
              }
              break
            case ToolType.Mosaic:
              if (annotation.points.length > 1) {
                const mosaicSize = annotation.mosaicSize || 18;
                const mosaicBlockSize = 8;

                tempCtx.globalCompositeOperation = 'source-over';

                const processedBlocks = new Set();

                for (let i = 0; i < annotation.points.length; i++) {
                  const point = annotation.points[i];

                  const pointPhysicalX = point.x * logicalToPhysicalScale;
                  const pointPhysicalY = point.y * logicalToPhysicalScale;

                  const relativeX = pointPhysicalX - (selectionRect.value!.x * logicalToPhysicalScale);
                  const relativeY = pointPhysicalY - (selectionRect.value!.y * logicalToPhysicalScale);

                  const startX = Math.max(0, Math.floor(relativeX - mosaicSize / 2));
                  const startY = Math.max(0, Math.floor(relativeY - mosaicSize / 2));
                  const endX = Math.min(result.adjusted_width, Math.ceil(relativeX + mosaicSize / 2));
                  const endY = Math.min(result.adjusted_height, Math.ceil(relativeY + mosaicSize / 2));

                  const alignedStartX = Math.floor(startX / mosaicBlockSize) * mosaicBlockSize;
                  const alignedStartY = Math.floor(startY / mosaicBlockSize) * mosaicBlockSize;
                  const alignedEndX = Math.ceil(endX / mosaicBlockSize) * mosaicBlockSize;
                  const alignedEndY = Math.ceil(endY / mosaicBlockSize) * mosaicBlockSize;

                  for (let blockY = alignedStartY; blockY < alignedEndY; blockY += mosaicBlockSize) {
                    for (let blockX = alignedStartX; blockX < alignedEndX; blockX += mosaicBlockSize) {
                      const blockKey = `${blockX}_${blockY}`;

                      if (processedBlocks.has(blockKey)) continue;

                      const blockCenterX = blockX + mosaicBlockSize / 2;
                      const blockCenterY = blockY + mosaicBlockSize / 2;
                      const distance = Math.sqrt(Math.pow(blockCenterX - relativeX, 2) + Math.pow(blockCenterY - relativeY, 2));

                      if (distance <= mosaicSize / 2) {
                        processedBlocks.add(blockKey);

                        let totalR = 0, totalG = 0, totalB = 0;
                        let pixelCount = 0;

                        const imgData = tempCtx.getImageData(blockX, blockY, mosaicBlockSize, mosaicBlockSize);
                        const data = imgData.data;

                        for (let py = 0; py < mosaicBlockSize; py++) {
                          for (let px = 0; px < mosaicBlockSize; px++) {
                            if (blockX + px < result.adjusted_width && blockY + py < result.adjusted_height) {
                              const index = (py * mosaicBlockSize + px) * 4;
                              totalR += data[index];
                              totalG += data[index + 1];
                              totalB += data[index + 2];
                              pixelCount++;
                            }
                          }
                        }

                        if (pixelCount > 0) {
                          const avgR = Math.round(totalR / pixelCount);
                          const avgG = Math.round(totalG / pixelCount);
                          const avgB = Math.round(totalB / pixelCount);
                          const lightR = Math.min(255, avgR + 80);
                          const lightG = Math.min(255, avgG + 80);
                          const lightB = Math.min(255, avgB + 80);
                          const finalR = Math.max(lightR, 180);
                          const finalG = Math.max(lightG, 180);
                          const finalB = Math.max(lightB, 180);

                          tempCtx.fillStyle = `rgb(${finalR}, ${finalG}, ${finalB})`;
                          tempCtx.fillRect(blockX, blockY, mosaicBlockSize, mosaicBlockSize);
                        }
                      }
                    }
                  }
                }
              }
              break
          }
        })
      }

      // 使用透明背景的PNG格式
      const dataUrl = tempCanvas.toDataURL('image/png')
      const base64 = dataUrl.replace(/^data:image\/(png|jpeg);base64,/, '')

      // 根据action执行不同的操作
      if (action === 'copy') {
        await invoke('copy_to_clipboard', { image: base64 })
        closeWindow()
      } else if (action === 'save') {
        const saveResult = await invoke('save_screenshot_to_file', { image: base64 })
        console.log('保存结果:', saveResult)
        closeWindow()
      }
    }

    img.onerror = () => {
      console.error('Failed to load captured image')
    }

    // 设置图像源
    img.src = `data:image/png;base64,${result.image}`

  } catch (error) {
    console.error(`Failed to capture or ${action} screenshot:`, error)
  }
}

// 确认选择（复制到剪贴板）
const confirmSelection = async () => {
  await processScreenshot('copy')
}

// 保存截图到文件
const saveScreenshot = async () => {
  await processScreenshot('save')
}

// // 生成截图数据
// const generateScreenshotData = async (): Promise<string | null> => {
//   if (!selectionRect.value || !canvasRef.value) return null

//   try {
//     const { x, y, width, height } = selectionRect.value

//     // 获取窗口位置信息
//     const windowInfo = await invoke('get_window_info') as { x: number, y: number, scale: number }
//     const scale = windowInfo?.scale || 1

//     // 计算实际的屏幕坐标（考虑窗口位置和缩放）
//     const screenX = Math.round(windowInfo.x + x * scale)
//     const screenY = Math.round(windowInfo.y + y * scale)
//     const screenWidth = Math.round(width * scale)
//     const screenHeight = Math.round(height * scale)

//     // 使用Rust端捕获屏幕内容
//     const result = await invoke('capture_screen_area', {
//       x: screenX,
//       y: screenY,
//       width: screenWidth,
//       height: screenHeight
//     }) as {
//       image: string,
//       adjusted_width: number,
//       adjusted_height: number,
//       original_width: number,
//       original_height: number
//     }

//     if (!result || !result.image) {
//       console.error('Failed to capture screen area')
//       return null
//     }

//     // 使用调整后的尺寸创建临时canvas来处理图像
//     const tempCanvas = document.createElement('canvas')
//     tempCanvas.width = result.adjusted_width
//     tempCanvas.height = result.adjusted_height
//     const tempCtx = tempCanvas.getContext('2d')

//     if (!tempCtx) {
//       console.error('Failed to get 2D context from temporary canvas')
//       return null
//     }

//     // 标注的坐标是基于逻辑像素的，需要转换为物理像素
//     const logicalToPhysicalScale = scale

//     // 创建图像对象
//     const img = new Image()
    
//     return new Promise((resolve, reject) => {
//       img.onload = async () => {
//         // 绘制屏幕内容
//         tempCtx.drawImage(img, 0, 0)

//         // 如果有标注，绘制标注到临时canvas
//         if (annotations.value.length > 0) {
//           // 设置透明背景
//           tempCtx.globalCompositeOperation = 'source-over'

//           // 绘制所有标注（使用与processScreenshot相同的逻辑）
//           annotations.value.forEach(annotation => {
//             tempCtx.strokeStyle = annotation.style.color
//             tempCtx.lineWidth = annotation.style.lineWidth
//             tempCtx.lineCap = 'round'
//             tempCtx.lineJoin = 'round'
//             tempCtx.setLineDash([])

//             // 这里简化处理，只处理基本图形，复杂的马赛克等可以后续添加
//             switch (annotation.type) {
//               case ToolType.Rectangle:
//                 if (annotation.points.length >= 2) {
//                   const start = annotation.points[0]
//                   const end = annotation.points[annotation.points.length - 1]
//                   const startPhysicalX = start.x * logicalToPhysicalScale
//                   const startPhysicalY = start.y * logicalToPhysicalScale
//                   const endPhysicalX = end.x * logicalToPhysicalScale
//                   const endPhysicalY = end.y * logicalToPhysicalScale
//                   const relativeX = startPhysicalX - (x * logicalToPhysicalScale)
//                   const relativeY = startPhysicalY - (y * logicalToPhysicalScale)
//                   const rectWidth = endPhysicalX - startPhysicalX
//                   const rectHeight = endPhysicalY - startPhysicalY
//                   tempCtx.strokeRect(relativeX, relativeY, rectWidth, rectHeight)
//                 }
//                 break
//               // 可以添加更多标注类型的处理
//             }
//           })
//         }

//         // 使用透明背景的PNG格式
//         const dataUrl = tempCanvas.toDataURL('image/png')
//         const base64 = dataUrl.split(',')[1]
//         resolve(base64)
//       }

//       img.onerror = () => {
//         console.error('Failed to load captured image')
//         reject(new Error('Failed to load captured image'))
//       }

//       // 设置图像源
//       img.src = `data:image/png;base64,${result.image}`
//     })
//   } catch (error) {
//     console.error('Failed to generate screenshot data:', error)
//     return null
//   }
// }



// 重置所有状态
const resetState = () => {
  selectionRect.value = null
  isDrawing.value = false
  currentOperation.value = OperationType.None
  startPoint.value = { x: 0, y: 0 }
  lastMousePos.value = { x: 0, y: 0 }
  currentTool.value = ToolType.Select
  annotations.value = []
  currentAnnotation.value = null
  selectedAnnotation.value = null
  hoveredAnnotation.value = null
  draggedAnnotation.value = null
  draggedControlPoint.value = null
  dragOffset.value = { x: 0, y: 0 }
  lineWidth.value = 3
  strokeColor.value = '#ff4444'
  showGuides.value = true
  showSizeInfo.value = true

  // 重置文字工具状态
  textInput.value = ''
  textSize.value = 16
  isTextInputVisible.value = false
  textInputPosition.value = { x: 0, y: 0 }
  mosaicSize.value = 18

  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
    }
  }
}

// 关闭窗口
const closeWindow = async () => {
  resetState()
  await invoke('close_screenshot_window')
}

// 生命周期
onMounted(() => {
  nextTick(async () => {
    await initCanvas()
    document.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', initCanvas)
    await invoke('emit_screenshot_ready')
  })
})

// 开始标注
const startAnnotation = (mousePos: { x: number, y: number }, operationType: OperationType) => {
  const toolType = operationType === OperationType.DrawingRect ? ToolType.Rectangle :
    operationType === OperationType.DrawingArrow ? ToolType.Arrow :
      operationType === OperationType.DrawingPen ? ToolType.Pen :
        operationType === OperationType.DrawingMosaic ? ToolType.Mosaic :
          ToolType.Pen

  currentAnnotation.value = {
    id: generateId(),
    type: toolType,
    points: [mousePos],
    style: {
      color: strokeColor.value,
      lineWidth: lineWidth.value
    },
    // 马赛克特有属性
    mosaicSize: toolType === ToolType.Mosaic ? mosaicSize.value : undefined
  }
}

// 更新当前标注
const updateCurrentAnnotation = (mousePos: { x: number, y: number }) => {
  if (!currentAnnotation.value) return

  switch (currentAnnotation.value.type) {
    case ToolType.Rectangle:
    case ToolType.Arrow:
      // 矩形和箭头只需要起点和终点
      if (currentAnnotation.value.points.length === 1) {
        currentAnnotation.value.points.push(mousePos)
      } else {
        currentAnnotation.value.points[1] = mousePos
      }
      break
    case ToolType.Pen:
    case ToolType.Mosaic:
      // 画笔和马赛克需要记录所有点，并添加插值点防止卡顿
      if (currentAnnotation.value.points.length > 0) {
        const lastPoint = currentAnnotation.value.points[currentAnnotation.value.points.length - 1]
        const distance = Math.sqrt(
          Math.pow(mousePos.x - lastPoint.x, 2) +
          Math.pow(mousePos.y - lastPoint.y, 2)
        )

        // 如果距离太大，添加插值点
        if (distance > 10) {
          const steps = Math.ceil(distance / 5) // 每5像素一个插值点
          for (let i = 1; i < steps; i++) {
            const t = i / steps
            const interpX = lastPoint.x + (mousePos.x - lastPoint.x) * t
            const interpY = lastPoint.y + (mousePos.y - lastPoint.y) * t
            currentAnnotation.value.points.push({ x: interpX, y: interpY })
          }
        }
      }
      currentAnnotation.value.points.push(mousePos)
      break
    case ToolType.Text:
      // 文字需要记录所有点
      currentAnnotation.value.points.push(mousePos)
      break
  }
}

// 完成标注
const finishAnnotation = () => {
  if (currentAnnotation.value) {
    // 过滤掉太小的标注
    const isValid = (currentAnnotation.value.type === ToolType.Pen || currentAnnotation.value.type === ToolType.Mosaic)
      ? currentAnnotation.value.points.length > 2
      : currentAnnotation.value.points.length >= 2

    if (isValid) {
      annotations.value.push(currentAnnotation.value)
    }

    currentAnnotation.value = null
  }
}

// 开始文字输入
const startTextInput = (mousePos: { x: number, y: number }) => {
  textInputPosition.value = mousePos
  isTextInputVisible.value = true
  textInput.value = ''
  nextTick(() => {
    textInputRef.value?.focus()
  })
}

// 确认文字输入
const confirmTextInput = () => {
  if (textInput.value.trim()) {
    if (selectedAnnotation.value && selectedAnnotation.value.type === ToolType.Text) {
      // 更新已存在的文字标注
      selectedAnnotation.value.text = textInput.value
      selectedAnnotation.value.fontSize = textSize.value
      selectedAnnotation.value.style.color = strokeColor.value
      selectedAnnotation.value.selected = false
      selectedAnnotation.value = null
    } else {
      // 创建新的文字标注
      const textAnnotation: Annotation = {
        id: generateId(),
        type: ToolType.Text,
        points: [textInputPosition.value],
        style: {
          color: strokeColor.value,
          lineWidth: 1
        },
        text: textInput.value,
        fontSize: textSize.value
      }

      annotations.value.push(textAnnotation)
    }

    drawSelection()
  }

  // 隐藏文字输入框
  isTextInputVisible.value = false
  textInput.value = ''
}

// 取消文字输入
const cancelTextInput = () => {
  isTextInputVisible.value = false
  textInput.value = ''
}

// 更新颜色
const updateColor = (color: string) => {
  strokeColor.value = color
  drawSelection()
}

// 获取当前选中的颜色
const getCurrentColor = () => {
  return strokeColor.value
}

// 检测鼠标是否在标注上
const getAnnotationAtPoint = (mousePos: { x: number, y: number }): Annotation | null => {
  for (let i = annotations.value.length - 1; i >= 0; i--) {
    const annotation = annotations.value[i]
    if (isPointInAnnotation(mousePos, annotation)) {
      return annotation
    }
  }
  return null
}

// 检测点是否在标注内
const isPointInAnnotation = (point: { x: number, y: number }, annotation: Annotation): boolean => {
  const tolerance = 8 // 检测容差

  switch (annotation.type) {
    case ToolType.Rectangle:
      if (annotation.points.length >= 2) {
        const start = annotation.points[0]
        const end = annotation.points[annotation.points.length - 1]
        const minX = Math.min(start.x, end.x)
        const maxX = Math.max(start.x, end.x)
        const minY = Math.min(start.y, end.y)
        const maxY = Math.max(start.y, end.y)

        return point.x >= minX - tolerance && point.x <= maxX + tolerance &&
          point.y >= minY - tolerance && point.y <= maxY + tolerance
      }
      break

    case ToolType.Arrow:
      if (annotation.points.length >= 2) {
        const start = annotation.points[0]
        const end = annotation.points[annotation.points.length - 1]
        return isPointNearLine(point, start, end, tolerance)
      }
      break

    case ToolType.Pen:
      if (annotation.points.length > 1) {
        // 检查是否在画笔路径附近
        for (let i = 0; i < annotation.points.length - 1; i++) {
          const start = annotation.points[i]
          const end = annotation.points[i + 1]
          if (isPointNearLine(point, start, end, tolerance)) {
            return true
          }
        }
        // 如果路径太短，检查是否在起点附近
        if (annotation.points.length === 1) {
          const start = annotation.points[0]
          const distance = Math.sqrt(Math.pow(point.x - start.x, 2) + Math.pow(point.y - start.y, 2))
          return distance <= tolerance
        }
      }
      break

    case ToolType.Text:
      if (annotation.points.length > 0) {
        const textPoint = annotation.points[0]
        const tempCanvas = document.createElement('canvas')
        const tempCtx = tempCanvas.getContext('2d')
        if (tempCtx && annotation.text) {
          const fontSize = annotation.fontSize || textSize.value
          tempCtx.font = `${fontSize}px sans-serif`
          const textMetrics = tempCtx.measureText(annotation.text)
          const textWidth = textMetrics.width
          const textHeight = fontSize
          const textX = textPoint.x + 4
          const textY = textPoint.y - 8

          return point.x >= textX - tolerance &&
            point.x <= textX + textWidth + tolerance &&
            point.y >= textY - tolerance &&
            point.y <= textY + textHeight + tolerance
        }
      }
      break

    case ToolType.Mosaic:
      if (annotation.points.length > 1) {
        // 检查是否在马赛克路径附近
        for (let i = 0; i < annotation.points.length - 1; i++) {
          const start = annotation.points[i]
          const end = annotation.points[i + 1]
          if (isPointNearLine(point, start, end, tolerance)) {
            return true
          }
        }
        if (annotation.points.length === 1) {
          const start = annotation.points[0]
          const distance = Math.sqrt(Math.pow(point.x - start.x, 2) + Math.pow(point.y - start.y, 2))
          return distance <= tolerance
        }
      } else if (annotation.points.length === 1) {
        const start = annotation.points[0]
        const distance = Math.sqrt(Math.pow(point.x - start.x, 2) + Math.pow(point.y - start.y, 2))
        return distance <= tolerance
      }
      break
  }

  return false
}

// 检测点是否在线段附近
const isPointNearLine = (point: { x: number, y: number }, start: { x: number, y: number }, end: { x: number, y: number }, tolerance: number): boolean => {
  const A = point.x - start.x
  const B = point.y - start.y
  const C = end.x - start.x
  const D = end.y - start.y

  const dot = A * C + B * D
  const lenSq = C * C + D * D

  if (lenSq === 0) {
    return Math.sqrt(A * A + B * B) <= tolerance
  }

  const param = dot / lenSq

  let xx, yy
  if (param < 0) {
    xx = start.x
    yy = start.y
  } else if (param > 1) {
    xx = end.x
    yy = end.y
  } else {
    xx = start.x + param * C
    yy = start.y + param * D
  }

  const dx = point.x - xx
  const dy = point.y - yy
  const distance = Math.sqrt(dx * dx + dy * dy)

  return distance <= tolerance
}

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', initCanvas)

  document.removeEventListener('mousemove', handleGlobalMouseMove, true)
  document.removeEventListener('mouseup', handleGlobalMouseUp, true)
})

// 双击事件处理
const handleDoubleClick = (event: MouseEvent) => {
  event.preventDefault()
  event.stopPropagation()

  const mousePos = getMousePosition(event)
  const annotationAtPoint = getAnnotationAtPoint(mousePos)

  if (annotationAtPoint && annotationAtPoint.type === ToolType.Text) {
    clearSelection()
    annotationAtPoint.selected = true
    selectedAnnotation.value = annotationAtPoint

    // 设置文字输入位置和内容
    textInputPosition.value = annotationAtPoint.points[0]
    textInput.value = annotationAtPoint.text || ''
    textSize.value = annotationAtPoint.fontSize || textSize.value
    strokeColor.value = annotationAtPoint.style.color

    // 显示文字输入框
    isTextInputVisible.value = true
    nextTick(() => {
      textInputRef.value?.focus()
      textInputRef.value?.select()
    })

    drawSelection()
  }
}

// 更新马赛克大小
const updateMosaicSize = (size: number) => {
  mosaicSize.value = size
  if (selectedAnnotation.value && selectedAnnotation.value.type === ToolType.Mosaic) {
    selectedAnnotation.value.mosaicSize = size
    drawSelection()
  }
}
</script>

<style scoped lang="scss">
.screenshot-container {
  @apply h-screen w-screen fixed inset-0 select-none;
  z-index: 9999;
  overflow: hidden;
}

.mask-layers {
  @apply absolute inset-0 pointer-events-none;
  z-index: 1;
}

.mask-full {
  @apply absolute inset-0 pointer-events-none;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.mask-top,
.mask-bottom,
.mask-left,
.mask-right {
  @apply absolute pointer-events-none;
  background: rgba(0, 0, 0, 0.6);
}

.drawing-canvas {
  @apply absolute inset-0 cursor-crosshair touch-none select-none;
  z-index: 2;
}

.instructions {
  @apply absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white pointer-events-none;

  p {
    @apply text-xl mb-2 drop-shadow-lg;

    &.hint {
      @apply text-sm opacity-70;
    }
  }
}

.size-info {
  @apply absolute pointer-events-none z-10;

  .size-text {
    @apply text-white px-3 py-2 text-center rounded-md text-sm font-mono whitespace-nowrap;
    min-width: 60px;
  }
}

.toolbar {
  @apply absolute flex items-center gap-3 z-10 bg-white rounded-lg shadow-lg px-2 py-1 border border-gray-200;
  min-width: 400px;
  max-width: 980px;

  .tool-section {
    @apply flex items-center gap-1;

    .tool-btn {
      @apply w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200;

      &.active {
        @apply bg-blue-500 text-white border-blue-500;

        svg {
          @apply text-white;
        }
      }

      svg {
        @apply text-gray-600;
      }

      &:hover:not(.active) {
        @apply bg-gray-100 border-gray-400;
      }
    }
  }

  .toolbar-divider {
    @apply w-[2px] h-8 bg-gray-300;
  }

  .style-section {
    @apply flex items-center gap-4;

    .style-group {
      @apply flex flex-col gap-2;

      .line-width-selector {
        @apply flex gap-1;

        .width-btn {
          @apply w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200;

          &.active {
            @apply border-blue-500 bg-blue-50;
          }

          .line-preview {
            @apply rounded-full;
            width: 20px;
          }
        }
      }

      .color-selector {
        @apply flex gap-1;

        .color-btn {
          @apply w-6 h-6 rounded border border-gray-300 cursor-pointer transition-all duration-200;

          &.active {
            @apply border-gray-500 transform scale-110;
          }

      &:hover {
        @apply transform scale-105;
      }
    }
  }

      /* 文字工具特有设置 */
      .text-size-selector {
        @apply flex gap-1;

        .size-btn {
          @apply w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200;

          &.active {
            @apply border-blue-500 bg-blue-50;
          }

          .size-text {
            @apply text-gray-600;
          }
        }
      }

      /* 文字工具特有设置 */
      .text-color-selector {
        @apply flex gap-1;

        .color-btn {
          @apply w-6 h-6 rounded border border-gray-300 cursor-pointer transition-all duration-200;

          &.active {
            @apply border-gray-500 transform scale-110;
          }

          &:hover {
            @apply transform scale-105;
          }
        }
      }

      /* 马赛克工具特有设置 */
      .mosaic-size-selector {
        @apply flex gap-1;

        .size-btn {
          @apply w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200;

          &.active {
            @apply border-blue-500 bg-blue-50;
          }

          .mosaic-preview {
            @apply rounded-full bg-gray-200 inline-block;
          }
        }
      }
    }
  }

  .action-section {
    @apply flex items-center gap-2;

    .action-btn {
      @apply w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200;

      &:disabled {
        svg {
          @apply text-gray-300;
        }
      }

      &.save {
        svg {
          @apply text-blue-500;
        }
      }

      &.confirm {
        svg {
          @apply text-green-500;
        }
      }

      &.delete {
        svg {
          @apply text-red-500;
        }
      }

      &.cancel {
        svg {
          @apply text-red-500;
        }
      }

      &:hover:not(:disabled) {
        @apply bg-gray-100;
      }

      &:active:not(:disabled) {
        @apply transform scale-95;
      }
    }
  }
}

// 避免在拖拽时选中文本
* {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.text-input-container {
  @apply absolute z-20;

  .text-input {
    @apply min-w-24 outline-none px-2 py-1 border-2 rounded bg-transparent border-solid font-serif;
    min-width: 100px;

    &::placeholder {
      @apply text-gray-400;
    }

    &:focus {
      @apply outline-none bg-transparent;
    }
  }
}
</style>
