<template>
  <div class="toolbar-container">
    <!-- 第一个面板：工具选择 + 操作按钮 -->
    <div class="toolbar-panel first-panel">
      <!-- 工具选择区域 -->
      <div class="tool-section">
        <button
          v-for="tool in tools"
          :key="tool.type"
          @click="onToolSelect(tool.type)"
          :class="['tool-btn', { active: currentTool === tool.type }]"
          :title="tool.title"
        >
          <component :is="tool.icon" theme="outline" size="18" :strokeWidth="3"/>
        </button>
      </div>

      <!-- 分隔线 -->
      <div class="toolbar-divider"></div>

      <!-- 操作按钮区域 -->
      <div class="action-section">
        <button
          @click="onUndo"
          :disabled="!canUndo"
          class="action-btn undo"
          title="撤销"
        >
        <return theme="outline" size="18" :strokeWidth="3"/>
        </button>

        <button
          @click="onDelete"
          :disabled="!canDelete"
          class="action-btn delete"
          title="删除选中"
        >
        <delete-four theme="outline" size="18" :strokeWidth="3"/>
        </button>

        <button
          @click="onSave"
          class="action-btn save"
          title="保存"
        >
        <download theme="outline" size="18" :strokeWidth="3"/>
        </button>

        <button
          @click="onConfirm"
          class="action-btn confirm"
          title="确认"
        >
        <check theme="outline" size="18" :strokeWidth="3"/>
        </button>

        <button
          @click="onCancel"
          class="action-btn cancel"
          title="取消"
        >
        <close theme="outline" size="18" :strokeWidth="3"/>
        </button>
      </div>
    </div>

    <!-- 第二个面板：样式设置区域 -->
    <div v-if="showStyleSettings" class="toolbar-panel second-panel">
      <div class="style-section">
      <!-- 线宽设置 -->
      <div v-if="showLineWidth" class="style-group">
        <div class="line-width-selector">
          <button
            v-for="width in lineWidths"
            :key="width"
            @click="onLineWidthChange(width)"
            :class="['width-btn', { active: currentLineWidth === width }]"
            :title="`${width}px`"
          >
            <div class="line-preview" :style="{ height: `${width}px`, backgroundColor: currentColor }"></div>
          </button>
        </div>
      </div>

      <!-- 颜色设置 -->
      <div v-if="showColors" class="style-group color-picker-group">
        <button
          @click="toggleColorPicker($event)"
          class="color-trigger-btn"
          :style="{ backgroundColor: currentColor }"
          title="选择颜色"
        >
          <div class="color-trigger-inner"></div>
        </button>
        
        <!-- 颜色选择器面板 -->
        <div v-if="showColorPicker" class="color-picker-panel">
          <div class="color-row">
            <!-- 预设颜色：红、绿、蓝 -->
            <button
              v-for="color in presetColors"
              :key="color"
              @click="selectColor(color)"
              :class="['color-btn', { active: currentColor === color }]"
              :style="{ backgroundColor: color }"
              :title="color"
            ></button>
            
            <!-- 自定义颜色选择器 -->
            <div class="custom-color-wrapper">
              <button
                @click="openCustomColorPicker"
                class="color-btn custom-color-btn"
                :class="{ active: !presetColors.includes(currentColor) }"
                title="自定义颜色"
              >
                <Platte theme="outline" size="14" :strokeWidth="3"/>
              </button>
              <input
                ref="colorInputRef"
                type="color"
                @change="onCustomColorChange"
                :value="currentColor"
                class="color-input-hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 文字大小设置 -->
      <div v-if="showTextSize" class="style-group">
        <div class="text-size-selector">
          <button
            v-for="size in textSizes"
            :key="size"
            @click="onTextSizeChange(size)"
            :class="['size-btn', { active: currentTextSize === size }]"
            :title="`${size}px`"
          >
            <span class="size-text" :style="{ fontSize: `${size}px` }">A</span>
          </button>
        </div>
      </div>

      <!-- 马赛克大小设置 -->
      <div v-if="showMosaicSize" class="style-group">
        <div class="mosaic-size-selector">
          <button
            v-for="size in mosaicSizes"
            :key="size"
            @click="onMosaicSizeChange(size)"
            :class="['size-btn', { active: currentMosaicSize === size }]"
            :title="`${size}px`"
          >
            <div class="mosaic-preview" :style="{
              width: `${Math.min(size * 0.8, 20)}px`,
              height: `${Math.min(size * 0.8, 20)}px`,
              backgroundColor: 'rgba(220, 220, 220, 0.7)',
              borderRadius: '50%'
            }"></div>
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, watch } from 'vue'
import { ToolType } from '../core/types'
import { MoveOne, RectangleOne, ArrowLeftUp, Write, Mosaic, FontSize, Return, DeleteFour, Download, Check, Close, Platte, Pushpin } from '@icon-park/vue-next'

// 颜色选择器状态
const showColorPicker = ref(false)

interface Props {
  currentTool: ToolType
  currentColor: string
  currentLineWidth: number
  currentTextSize: number
  currentMosaicSize: number
  canUndo: boolean
  canDelete: boolean
}

interface Emits {
  (e: 'tool-select', tool: ToolType): void
  (e: 'color-change', color: string): void
  (e: 'line-width-change', width: number): void
  (e: 'text-size-change', size: number): void
  (e: 'mosaic-size-change', size: number): void
  (e: 'undo'): void
  (e: 'delete'): void
  (e: 'save'): void
  (e: 'confirm'): void
  (e: 'cancel'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 工具配置
const tools = [
  { type: ToolType.Select, icon: MoveOne, title: '选择工具' },
  { type: ToolType.Rectangle, icon: RectangleOne, title: '矩形工具' },
  { type: ToolType.Arrow, icon: ArrowLeftUp, title: '箭头工具' },
  { type: ToolType.Pen, icon: Write, title: '画笔工具' },
  { type: ToolType.Mosaic, icon: Mosaic, title: '马赛克工具' },
  { type: ToolType.Text, icon: FontSize, title: '文字工具' },
  { type: ToolType.ColorPicker, icon: Platte, title: '取色工具' },
  { type: ToolType.Pin, icon: Pushpin, title: '贴图工具' }
]

// 样式配置
const lineWidths = [2, 3, 5, 8]
// 预设颜色：红、绿、蓝
const presetColors = ['#ff4444', '#44ff44', '#4444ff']
const textSizes = [12, 14, 16, 18, 20, 24]
const mosaicSizes = [10, 15, 20, 25]

// 自定义颜色选择器引用
const colorInputRef = ref<HTMLInputElement | null>(null)

// 是否显示样式设置
const showStyleSettings = computed(() => ![ToolType.Select, ToolType.ColorPicker, ToolType.Pin].includes(props.currentTool))

const showLineWidth = computed(() => 
  [ToolType.Rectangle, ToolType.Arrow, ToolType.Pen].includes(props.currentTool)
)

const showColors = computed(() => 
  [ToolType.Rectangle, ToolType.Arrow, ToolType.Pen, ToolType.Text].includes(props.currentTool)
)

const showTextSize = computed(() => props.currentTool === ToolType.Text)

const showMosaicSize = computed(() => props.currentTool === ToolType.Mosaic)

// 事件处理函数
const onToolSelect = (tool: ToolType) => emit('tool-select', tool)
const onColorChange = (color: string) => emit('color-change', color)
const onLineWidthChange = (width: number) => emit('line-width-change', width)
const onTextSizeChange = (size: number) => emit('text-size-change', size)
const onMosaicSizeChange = (size: number) => emit('mosaic-size-change', size)
const onUndo = () => emit('undo')
const onDelete = () => emit('delete')
const onSave = () => emit('save')
const onConfirm = () => emit('confirm')
const onCancel = () => emit('cancel')

// 颜色选择器方法
const toggleColorPicker = (event: MouseEvent) => {
  showColorPicker.value = !showColorPicker.value
  
  if (showColorPicker.value) {
    // 计算颜色面板的位置
    nextTick(() => {
      const triggerBtn = event.currentTarget as HTMLElement
      const secondPanel = triggerBtn.closest('.second-panel') as HTMLElement
      const colorPanel = triggerBtn.parentElement?.querySelector('.color-picker-panel') as HTMLElement
      
      if (secondPanel && colorPanel) {
        const secondPanelRect = secondPanel.getBoundingClientRect()
        const panelGap = 8 // 与第二面板的间距
        
        // 对齐第二面板的左边缘
        colorPanel.style.left = `${secondPanelRect.left}px`
        colorPanel.style.top = `${secondPanelRect.bottom + panelGap}px`
      }
    })
  }
}

const selectColor = (color: string) => {
  onColorChange(color)
  showColorPicker.value = false
}

// 打开自定义颜色选择器（现在input已经覆盖在按钮上，不需要手动点击）
const openCustomColorPicker = () => {
  // 不需要做任何事，input 已经覆盖在按钮上了
}

// 处理自定义颜色变化
const onCustomColorChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.value) {
    onColorChange(input.value)
    // 不关闭面板，用户可能想继续选择
  }
}

// 监听工具切换，关闭颜色面板
watch(() => props.currentTool, () => {
  if (showColorPicker.value) {
    showColorPicker.value = false
  }
})
</script>

<style scoped lang="scss">
.toolbar-container {
  @apply flex flex-col gap-2;

  .toolbar-panel {
    @apply flex items-center gap-3 bg-white dark:bg-panel rounded-lg shadow-lg px-2 py-2 border dark:border-panel;

    &.first-panel {
      min-width: 400px;
    }

    &.second-panel {
      width: fit-content;
      min-width: auto;
    }
  }

  .tool-section {
    @apply flex items-center gap-1;

    .tool-btn {
      @apply w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 border dark:border-panel bg-white dark:bg-content hover:bg-gray-50 dark:hover:bg-hover;

      &.active {
        @apply text-white !bg-blue-500 border-blue-500;
        
        // 暗黑模式下使用更柔和的蓝色
        &:is(.dark *) {
          @apply border-blue-500/80 !bg-blue-600/90;
        }
      }
    }
  }

  .toolbar-divider {
    @apply w-[1px] h-5 bg-gray-300;
  }

  .style-section {
    @apply flex items-center gap-4;

    .style-group {
      @apply flex items-center gap-2;

      .line-width-selector,
      .color-selector,
      .text-size-selector,
      .mosaic-size-selector {
        @apply flex gap-1;
      }

      .width-btn,
      .size-btn {
        @apply w-8 h-8 flex items-center justify-center rounded border border-gray-300 dark:border-panel bg-white dark:bg-content hover:bg-gray-50 dark:hover:bg-hover transition-all duration-200;

        &.active {
          @apply border-blue-500 bg-blue-50;
          
          // 暗黑模式下使用更和谐的背景
          &:is(.dark *) {
            @apply border-blue-500/70 bg-blue-600/20;
          }
        }

        .line-preview {
          @apply rounded-full;
          width: 20px;
        }

        .size-text {
          @apply text-gray-600;
        }

        .mosaic-preview {
          @apply rounded-full bg-gray-200 inline-block;
        }
      }

      .color-btn {
        @apply w-6 h-6 rounded border border-gray-300 cursor-pointer transition-all duration-200;

        &.active {
          @apply border-gray-500 transform scale-110;
        }

        &:hover {
          @apply transform scale-105;
        }
      }

      // 颜色选择器组
      &.color-picker-group {
        @apply relative;

        .color-trigger-btn {
          @apply w-8 h-8 rounded border-2 border-gray-300 dark:border-panel cursor-pointer transition-all duration-200 flex items-center justify-center relative;

          &:hover {
            @apply border-blue-500 transform scale-105;
          }

          .color-trigger-inner {
            @apply w-6 h-6 rounded border border-white/50;
          }
        }

        .color-picker-panel {
          @apply fixed bg-white dark:bg-panel rounded-lg shadow-xl border dark:border-panel p-2 z-50;

          .color-row {
            @apply flex items-center gap-2;
          }
          
          .custom-color-wrapper {
            @apply relative;
            
            .color-input-hidden {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              cursor: pointer;
              z-index: 10;
            }
          }
          
          .custom-color-btn {
            @apply flex items-center justify-center;
            background: linear-gradient(135deg, #ff0000 0%, #00ff00 50%, #0000ff 100%);
            position: relative;
            pointer-events: none;
            
            &::before {
              content: '';
              position: absolute;
              inset: 2px;
              background: white;
              border-radius: 2px;
            }
            
            &:is(.dark *)::before {
              background: #1a1a1a;
            }
            
            svg {
              position: relative;
              z-index: 1;
            }
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
        @apply text-gray-300 cursor-not-allowed;
      }

      &.save {
        @apply text-blue-500;
      }

      &.confirm {
        @apply text-green-500;
      }

      &.delete,
      &.cancel {
        @apply text-red-500;
      }

      &:hover:not(:disabled) {
        @apply bg-gray-100 dark:bg-hover;
      }

      &:active:not(:disabled) {
        @apply transform scale-95;
      }
    }
  }
}
</style>
