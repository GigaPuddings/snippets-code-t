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
      :current-translate-engine="translateEngine"
      @tool-select="handleToolSelect" @color-change="handleColorChange" @line-width-change="handleLineWidthChange"
      @text-size-change="handleTextSizeChange" @mosaic-size-change="handleMosaicSizeChange"
      @translate-engine-change="handleTranslateEngineChange"
      @undo="handleUndo" @delete="handleDelete" @save="handleSave" @confirm="handleConfirm" @cancel="handleCancel" />

    <!-- 加载提示 - 仅在初始化时显示 -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>{{ $t('screenshotTool.loading') }}</p>
    </div>

    <!-- 提示信息 -->
    <div v-if="!state.selectionRect && !isLoading" class="instructions">
      <p>{{ $t('screenshotTool.dragToSelect') }}</p>
      <p class="hint">{{ $t('screenshotTool.pressEscToClose') }}</p>
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
import { listen } from '@tauri-apps/api/event'
import { invoke } from '@tauri-apps/api/core'
import { ScreenshotManager } from './core/ScreenshotManager'
import { ToolType, ColorInfo } from './core/types'
import ToolbarSection from './components/ToolbarSection.vue'
import { logger } from '@/utils/logger'

// 组件引用
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
const isLoading = ref(true) // 加载状态
const isProcessing = ref(false) // 处理中状态（复制/保存）
const translateEngine = ref<'google' | 'bing' | 'offline'>('bing') // 翻译引擎

// 响应式状态
const state = ref({
  selectionRect: null as any,
  annotations: [] as any[],
  currentTool: ToolType.Select,
  currentStyle: { color: '#ff4444', lineWidth: 3 },
  textSize: 16,
  mosaicSize: 5,
  hasSelection: false,
  hasAnnotations: false,
  selectedAnnotation: null as any,
  isDrawing: false // 将绘制状态也放到响应式状态中
})

const unlisten = ref<() => void>()

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
  const firstPanelHeight = 48  // 第一个面板的高度
  const secondPanelHeight = 48 // 第二个面板的高度
  const panelGap = 8 // 两个面板之间的间隙
  const margin = 10
  
  // 根据工具类型计算需要的总高度
  const hasSecondPanel = ![ToolType.Select, ToolType.ColorPicker, ToolType.Pin].includes(state.value.currentTool)
  const toolbarHeight = hasSecondPanel ? firstPanelHeight + secondPanelHeight + panelGap : firstPanelHeight
  
  // 第一个面板实际宽度（包含所有按钮 + padding + gap + margin）
  const firstPanelWidth = 510
  
  // 估算第二个面板的宽度（根据工具类型）
  let secondPanelWidth = 0
  if (hasSecondPanel) {
    if (state.value.currentTool === ToolType.Text) {
      secondPanelWidth = 380 // 线宽(4个) + 颜色(按钮) + 文字大小(6个) + gaps
    } else if (state.value.currentTool === ToolType.Mosaic) {
      secondPanelWidth = 250 // 马赛克大小(4个) + gaps
    } else {
      secondPanelWidth = 320 // 线宽(4个) + 颜色(按钮) + gaps
    }
  }
  
  // 使用较宽的面板作为总宽度
  const toolbarWidth = Math.max(firstPanelWidth, secondPanelWidth)

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
    top = Math.max(y + height - toolbarHeight - margin, y + 10)
  }

  // 计算左侧位置
  let left: number
  
  // 计算屏幕可用区域
  const screenLeftEdge = margin
  const screenRightEdge = window.innerWidth - margin
  const availableWidth = screenRightEdge - screenLeftEdge
  
  // 如果工具栏太宽，超过整个屏幕可用宽度
  if (toolbarWidth > availableWidth) {
    left = screenLeftEdge
  } else {
    // 策略：优先对齐选区左边，确保不超出边界
    left = x
    
    // 严格检查右边界（留出少量安全边距避免浮点误差）
    const safetyMargin = 5
    if (left + toolbarWidth > screenRightEdge - safetyMargin) {
      // 如果超出，计算能放置工具栏的最右位置
      left = screenRightEdge - toolbarWidth - safetyMargin
    }
    
    // 检查左边界
    if (left < screenLeftEdge) {
      left = screenLeftEdge
    }
    
    // 最终验证：确保工具栏完全在屏幕内
    const finalRightEdge = left + toolbarWidth
    if (finalRightEdge > screenRightEdge) {
      // 如果还超出（理论上不应该），强制调整
      left = screenRightEdge - toolbarWidth
      // 再次确保左边界
      if (left < screenLeftEdge) {
        left = screenLeftEdge
      }
    }
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
  // 贴图工具特殊处理：如果有选区，立即执行贴图操作
  if (tool === ToolType.Pin && state.value.selectionRect) {
    handlePin()
    return
  }
  
  screenshotManager?.setTool(tool)
}

// 处理贴图操作
const handlePin = async () => {
  try {
    await screenshotManager?.createPinWindow()
  } catch (error) {
    logger.error('[截图] 创建贴图失败', error)
  }
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

const handleTranslateEngineChange = (engine: 'google' | 'bing' | 'offline') => {
  translateEngine.value = engine
  screenshotManager?.setTranslationEngine(engine)
}

const handleUndo = () => {
  screenshotManager?.undoAnnotation()
}

const handleDelete = () => {
  screenshotManager?.deleteSelectedAnnotation()
}

const handleSave = async () => {
  if (isProcessing.value) return
  try {
    isProcessing.value = true
    await screenshotManager?.processScreenshot('save')
    closeWindow()
  } catch (error) {
    logger.error('[截图] 保存失败', error)
  } finally {
    isProcessing.value = false
  }
}

const handleConfirm = async () => {
  if (isProcessing.value) return
  try {
    isProcessing.value = true
    // 不显示 loading，直接处理
    await screenshotManager?.processScreenshot('copy')
    closeWindow()
  } catch (error) {
    logger.error('[截图] 复制失败', error)
  } finally {
    isProcessing.value = false
  }
}

const handleCancel = () => {
  // // 如果翻译覆盖层正在显示，先清除翻译覆盖层而不是关闭窗口
  // const translationState = screenshotManager?.getTranslationState()
  // if (translationState?.isVisible || translationState?.isLoading) {
  //   screenshotManager?.clearTranslationOverlay()
  //   return
  // }
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

  // 如果是编辑模式，隐藏原始注释
  if (existingAnnotation) {
    screenshotManager?.setEditingAnnotation(existingAnnotation)
  }

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
  
  // 清除编辑状态，恢复显示原始注释
  if (editingAnnotation) {
    screenshotManager?.clearEditingAnnotation()
  }
  
  editingAnnotation = null
}

// 处理颜色取样
const handleColorPicked = (colorInfo: ColorInfo) => {
  // 自动复制HEX值到剪贴板
  if (navigator.clipboard) {
    navigator.clipboard.writeText(colorInfo.hex).catch(error => {
      logger.warn('[截图] 复制颜色到剪贴板失败', error)
    })
  }
}

// 键盘事件处理
const handleKeydown = (event: KeyboardEvent) => {
  // 禁用系统快捷键
  if (event.key === 'Meta' || event.key === 'Win' || 
      (event.altKey && event.key === 'Tab') ||
      (event.altKey && event.key === 'F4')) {
    event.preventDefault()
    event.stopPropagation()
    return
  }

  // 如果文字输入框聚焦，允许所有输入（除了系统快捷键）
  if (isTextInputVisible.value && document.activeElement === textInputRef.value) {
    // Escape 键关闭输入框
    if (event.key === 'Escape') {
      cancelTextInput()
      event.preventDefault()
      return
    }
    // Enter 键确认输入
    if (event.key === 'Enter') {
      confirmTextInput()
      event.preventDefault()
      return
    }
    // Tab 键：阻止默认行为（避免焦点移动导致窗口关闭）
    if (event.key === 'Tab') {
      event.preventDefault()
      return
    }
    // 其他键（方向键、字母、数字等）允许正常输入
    // 不阻止事件传播，让输入框正常处理
    return
  }

  // 未选中区域时
  if (!state.value.selectionRect) {
    if (event.key === 'Escape') {
      closeWindow()
      return
    }
    // 屏蔽其他所有键盘事件，但不关闭窗口
    event.preventDefault()
    event.stopPropagation()
    return
  }

  // 已选中区域时，让ScreenshotManager先处理特殊键盘事件（取色器的Q/Shift）
  if (screenshotManager?.handleKeyDown(event)) {
    event.preventDefault()
    return
  }

  // 处理功能键
  if (event.key === 'Escape') {
    // // 如果翻译覆盖层正在显示，先清除翻译覆盖层而不是关闭窗口
    // const translationState = screenshotManager?.getTranslationState()
    // if (translationState?.isVisible || translationState?.isLoading) {
    //   screenshotManager?.clearTranslationOverlay()
    //   event.preventDefault()
    //   return
    // }
    closeWindow()
    return
  } else if (event.key === 'Delete' || event.key === 'Backspace') {
    handleDelete()
    event.preventDefault()
    return
  }

  // 其他键盘事件：阻止默认行为，但不关闭窗口
  // 这样可以避免意外按键导致截图窗口关闭
  if (!['Shift', 'Control', 'Alt', 'Meta'].includes(event.key)) {
    event.preventDefault()
  }
}

// 关闭窗口
const closeWindow = async () => {
  screenshotManager?.destroy()
  
  // 清理后台截图缓存，释放内存
  try {
    await invoke('clear_screenshot_background')
  } catch (error) {
    // 忽略清理错误
  }
  
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
    handleColorPicked,
    () => {
      // 背景加载完成，隐藏加载提示
      isLoading.value = false
      // logger.info('[截图] 初始化完成')
    }
  )

  // 从后端获取翻译引擎设置
  try {
    const savedEngine = await invoke<string>('get_translation_engine')
    if (savedEngine && ['google', 'bing', 'offline'].includes(savedEngine)) {
      translateEngine.value = savedEngine as 'google' | 'bing' | 'offline'
      screenshotManager?.setTranslationEngine(savedEngine as 'google' | 'bing' | 'offline')
    }
  } catch (error) {
    logger.error('[截图] 获取翻译引擎设置失败:', error)
  }

  // 从后端获取离线模型激活状态
  try {
    const backendActivated = await invoke<boolean>('get_offline_model_activated')
    screenshotManager?.setOfflineModelActivated(backendActivated)
  } catch (error) {
    logger.error('[截图] 获取离线模型激活状态失败:', error)
  }

  // 添加键盘事件监听
  document.addEventListener('keydown', handleKeydown)

  // 监听后端背景准备完成事件
  const unlistenBgReady = await listen('background-ready', () => {
    // 背景准备完成，可以触发重新加载
  })

  // 监听窗口失焦（用户切换到其他窗口）
  unlisten.value = await listen('tauri://blur', () => {
    // 如果文字输入框正在使用，不关闭窗口（可能是调出输入法）
    if (isTextInputVisible.value && document.activeElement === textInputRef.value) {
      return
    }

    // 如果正在进行OCR翻译，不关闭窗口
    const translationState = screenshotManager?.getTranslationState()
    if (translationState?.isLoading || translationState?.isVisible) {
      return
    }
    
    // 延迟一下再关闭，避免误触
    setTimeout(() => {
      // 再次检查文字输入状态
      if (!isTextInputVisible.value || document.activeElement !== textInputRef.value) {
        // 再次检查翻译状态
        const currentTranslationState = screenshotManager?.getTranslationState()
        if (currentTranslationState?.isLoading || currentTranslationState?.isVisible) {
          return
        }
        closeWindow()
      }
    }, 100)
  })
})

onUnmounted(() => {
  screenshotManager?.destroy()
  document.removeEventListener('keydown', handleKeydown)
  unlisten.value?.()
  // 注意：unlistenBgReady 也需要清理，但这里简化处理
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
    @apply text-xl mb-3 drop-shadow-lg;

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

// 加载提示
.loading-overlay {
  @apply absolute inset-0 z-50 flex flex-col items-center justify-center;
  background: rgba(0, 0, 0, 0.8);
  
  .loading-spinner {
    @apply w-12 h-12 border-4 border-white border-t-transparent rounded-full;
    animation: spin 1s linear infinite;
  }
  
  p {
    @apply text-white text-lg mt-4;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
