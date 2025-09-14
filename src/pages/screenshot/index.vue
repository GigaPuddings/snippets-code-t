<template>
  <div class="screenshot-container" ref="containerRef">
    <!-- 遮罩层 -->
    <div v-if="state.selectionRect" class="mask-layers">
      <div class="mask-top" :style="topMaskStyle"></div>
      <div class="mask-bottom" :style="bottomMaskStyle"></div>
      <div class="mask-left" :style="leftMaskStyle"></div>
      <div class="mask-right" :style="rightMaskStyle"></div>
    </div>
    <div v-else class="mask-full"></div>

    <!-- 画布 -->
    <canvas ref="canvasRef" class="drawing-canvas"></canvas>

    <!-- 尺寸信息 -->
    <div v-if="state.selectionRect && showSizeInfo" class="size-info" :style="sizeInfoStyle">
      <span class="size-text">{{ sizeInfoText }}</span>
    </div>

    <!-- 工具栏 -->
    <ToolbarSection v-if="state.selectionRect && !isDrawing" :style="toolbarStyle" class="toolbar"
      :current-tool="state.currentTool" :current-color="state.currentStyle.color"
      :current-line-width="state.currentStyle.lineWidth" :current-text-size="state.textSize"
      :current-mosaic-size="state.mosaicSize" :can-undo="state.hasAnnotations" :can-delete="!!state.selectedAnnotation"
      @tool-select="handleToolSelect" @color-change="handleColorChange" @line-width-change="handleLineWidthChange"
      @text-size-change="handleTextSizeChange" @mosaic-size-change="handleMosaicSizeChange" @undo="handleUndo"
      @delete="handleDelete" @save="handleSave" @confirm="handleConfirm" @cancel="handleCancel" />

    <!-- 提示信息 -->
    <div v-if="!state.selectionRect" class="instructions">
      <p>拖拽鼠标选择截图区域</p>
      <p class="hint">按ESC键关闭</p>
    </div>

    <!-- 文字输入框 -->
    <div v-if="isTextInputVisible" class="text-input-container" :style="textInputStyle">
      <input ref="textInputRef" v-model="textInput" type="text" class="text-input" :style="{
        color: state.currentStyle.color,
        fontSize: state.textSize + 'px',
        borderColor: state.currentStyle.color
      }" @keydown.enter="confirmTextInput" @keydown.escape="cancelTextInput" @blur="confirmTextInput" autofocus />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { Window } from '@tauri-apps/api/window'
import { ScreenshotManager } from './core/ScreenshotManager'
import { ToolType, ColorInfo } from './core/types'
import ToolbarSection from './components/ToolbarSection.vue'

// 组件引用
const containerRef = ref<HTMLDivElement>()
const canvasRef = ref<HTMLCanvasElement>()
const textInputRef = ref<HTMLInputElement>()
const appWindow = ref<Window | null>(null)

// 截图管理器
let screenshotManager: ScreenshotManager | null = null

// 组件状态
const showSizeInfo = ref(true)
const isTextInputVisible = ref(false)
const textInput = ref('')
const textInputPosition = ref({ x: 0, y: 0 })

// 响应式状态
const state = ref({
  selectionRect: null as any,
  annotations: [] as any[],
  currentTool: ToolType.Select,
  currentStyle: { color: '#ff4444', lineWidth: 3 },
  textSize: 16,
  mosaicSize: 15,
  hasSelection: false,
  hasAnnotations: false,
  selectedAnnotation: null as any,
  isDrawing: false // 将绘制状态也放到响应式状态中
})

// 计算属性 - 从状态获取绘制状态
const isDrawing = computed(() => state.value.isDrawing)

// 计算属性 - 遮罩样式
const topMaskStyle = computed(() => {
  if (!state.value.selectionRect) return {}
  const { y } = state.value.selectionRect
  return {
    top: '0',
    left: '0',
    right: '0',
    height: `${y}px`
  }
})

const bottomMaskStyle = computed(() => {
  if (!state.value.selectionRect) return {}
  const { y, height } = state.value.selectionRect
  return {
    top: `${y + height}px`,
    left: '0',
    right: '0',
    bottom: '0'
  }
})

const leftMaskStyle = computed(() => {
  if (!state.value.selectionRect) return {}
  const { x, y, height } = state.value.selectionRect
  return {
    top: `${y}px`,
    left: '0',
    width: `${x}px`,
    height: `${height}px`
  }
})

const rightMaskStyle = computed(() => {
  if (!state.value.selectionRect) return {}
  const { x, y, width, height } = state.value.selectionRect
  return {
    top: `${y}px`,
    left: `${x + width}px`,
    right: '0',
    height: `${height}px`
  }
})

// 工具栏样式
const toolbarStyle = computed(() => {
  if (!state.value.selectionRect) return {}

  const { x, y, height } = state.value.selectionRect
  const toolbarHeight = 40
  const margin = 8
  let toolbarWidth = 442

  // 根据工具类型调整宽度
  if (state.value.currentTool === ToolType.Text) {
    toolbarWidth = Math.min(916, window.innerWidth - 2 * margin)
  } else if (state.value.currentTool === ToolType.Mosaic) {
    toolbarWidth = Math.min(572, window.innerWidth - 2 * margin)
  } else if (state.value.currentTool !== ToolType.Select && state.value.currentTool !== ToolType.ColorPicker) {
    toolbarWidth = Math.min(844, window.innerWidth - 2 * margin)
  }

  // 决定工具栏位置
  let top: number
  // 1. 优先尝试放在选区下方
  if (y + height + toolbarHeight + margin < window.innerHeight) {
    top = y + height + margin
  } 
  // 2. 否则，尝试放在选区上方
  else if (y - toolbarHeight - margin > 0) {
    top = y - toolbarHeight - margin
  }
  // 3. 如果上下都没空间，则放在选区内部的底部
  else {
    top = y + height - toolbarHeight - margin
  }


  let left = x
  if (left + toolbarWidth > window.innerWidth) {
    left = window.innerWidth - toolbarWidth - margin
  }
  if (left < margin) {
    left = margin
  }

  return {
    left: `${left}px`,
    top: `${top}px`
  }
})

// 尺寸信息样式
const sizeInfoStyle = computed(() => {
  if (!state.value.selectionRect) return {}

  const { x, y, width, height } = state.value.selectionRect
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
  if (!state.value.selectionRect) return ''
  const { width, height } = state.value.selectionRect
  return `${Math.round(width)} × ${Math.round(height)}`
})

// 文字输入框样式
const textInputStyle = computed(() => {
  const estimatedHeight = state.value.textSize + 20
  return {
    left: `${textInputPosition.value.x}px`,
    top: `${textInputPosition.value.y - estimatedHeight / 2}px`
  }
})

// 事件处理函数
const handleToolSelect = (tool: ToolType) => {
  screenshotManager?.setTool(tool)
}

const handleColorChange = (color: string) => {
  screenshotManager?.updateStyle({ color })
}

const handleLineWidthChange = (lineWidth: number) => {
  screenshotManager?.updateStyle({ lineWidth })
}

const handleTextSizeChange = (size: number) => {
  screenshotManager?.updateTextSize(size)
}

const handleMosaicSizeChange = (size: number) => {
  screenshotManager?.updateMosaicSize(size)
}

const handleUndo = () => {
  screenshotManager?.undoAnnotation()
}

const handleDelete = () => {
  screenshotManager?.deleteSelectedAnnotation()
}

const handleSave = async () => {
  try {
    await screenshotManager?.processScreenshot('save')
    closeWindow()
  } catch (error) {
    console.error('保存失败:', error)
  }
}

const handleConfirm = async () => {
  try {
    await screenshotManager?.processScreenshot('copy')
    closeWindow()
  } catch (error) {
    console.error('复制失败:', error)
  }
}

const handleCancel = () => {
  closeWindow()
}

// 文字输入处理
let editingAnnotation: any = null

const startTextInput = (position: { x: number, y: number }, existingAnnotation?: any) => {
  // 如果是编辑已有标注，使用标注的实际绘制位置
  if (existingAnnotation && existingAnnotation.getData().type === 'text') {
    const annotationData = existingAnnotation.getData()
    textInputPosition.value = {
      x: annotationData.points[0].x,
      y: annotationData.points[0].y
    }
  } else {
    // 新增时使用用户点击的位置
    textInputPosition.value = position
  }

  isTextInputVisible.value = true
  editingAnnotation = existingAnnotation || null

  // 如果是编辑已有标注，预填充文字
  if (existingAnnotation && existingAnnotation.getData().text) {
    textInput.value = existingAnnotation.getData().text
  } else {
    textInput.value = ''
  }

  nextTick(() => {
    textInputRef.value?.focus()
    // 如果是编辑模式，选中所有文字
    if (editingAnnotation) {
      textInputRef.value?.select()
    }
  })
}

const confirmTextInput = () => {
  if (textInput.value.trim()) {
    if (editingAnnotation) {
      // 更新已有的文字标注
      screenshotManager?.updateTextAnnotation(editingAnnotation, textInput.value)
    } else {
      // 创建新的文字标注
      screenshotManager?.createTextAnnotation(textInputPosition.value, textInput.value)
    }
  } else if (editingAnnotation) {
    // 如果文字为空且是编辑模式，删除标注
    screenshotManager?.deleteAnnotation(editingAnnotation)
  }
  cancelTextInput()
}

const cancelTextInput = () => {
  isTextInputVisible.value = false
  textInput.value = ''
  editingAnnotation = null
}

// 处理颜色取样
const handleColorPicked = (colorInfo: ColorInfo) => {
  // 自动复制HEX值到剪贴板
  if (navigator.clipboard) {
    navigator.clipboard.writeText(colorInfo.hex).catch(error => {
      console.warn('Failed to copy color to clipboard:', error)
    })
  }
}

// 键盘事件处理
const handleKeydown = (event: KeyboardEvent) => {
  // 让ScreenshotManager先处理键盘事件
  if (screenshotManager?.handleKeyDown(event)) {
    event.preventDefault()
    return
  }

  if (event.key === 'Escape') {
    closeWindow()
  } else if (event.key === 'Delete' || event.key === 'Backspace') {
    handleDelete()
  }
}

// 关闭窗口
const closeWindow = async () => {
  screenshotManager?.destroy()
  appWindow.value?.close()
}

// 状态更新回调
const handleStateChange = () => {
  const newState = screenshotManager?.getState()
  if (newState) {
    state.value = newState
  }
}

// 生命周期
onMounted(async () => {
  if (!canvasRef.value) return

  appWindow.value = new Window('screenshot')
  await appWindow.value.emit('screenshot_ready')

  // 初始化截图管理器
  screenshotManager = new ScreenshotManager(
    canvasRef.value,
    handleStateChange,
    startTextInput,
    handleColorPicked
  )

  // 添加键盘事件监听
  document.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', () => {
    // 重新初始化画布尺寸
  })
})

onUnmounted(() => {
  screenshotManager?.destroy()
  document.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', () => { })
})
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
  @apply absolute z-10;
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

// 颜色信息显示
.color-info-container {
  @apply absolute z-30;
  
  .color-info {
    @apply bg-white dark:bg-panel rounded-lg shadow-lg p-3 border dark:border-panel flex items-center gap-3 min-w-48;
    
    .color-preview {
      @apply w-8 h-8 rounded border border-gray-300 dark:border-panel flex-shrink-0;
    }
    
    .color-details {
      @apply flex-1 space-y-1;
      
      .color-value {
        @apply flex items-center gap-2 text-sm;
        
        .label {
          @apply font-medium text-gray-600 dark:text-gray-400 w-8;
        }
        
        .value {
          @apply font-mono text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-100 dark:hover:bg-hover px-1 rounded;
          font-size: 12px;
        }
      }
    }
    
    .color-tip {
      @apply text-xs text-gray-500 dark:text-gray-400 text-center;
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
</style>
