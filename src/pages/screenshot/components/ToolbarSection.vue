<template>
  <div class="toolbar-section">
    <!-- 工具选择区域 -->
    <div class="tool-section">
      <button
        v-for="tool in tools"
        :key="tool.type"
        @click="onToolSelect(tool.type)"
        :class="['tool-btn', { active: currentTool === tool.type }]"
        :title="tool.title"
      >
        <component :is="tool.icon" />
      </button>
    </div>

    <!-- 分隔线 -->
    <div v-if="showStyleSettings" class="toolbar-divider"></div>

    <!-- 样式设置区域 -->
    <div v-if="showStyleSettings" class="style-section">
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
      <div v-if="showColors" class="style-group">
        <div class="color-selector">
          <button
            v-for="color in colors"
            :key="color"
            @click="onColorChange(color)"
            :class="['color-btn', { active: currentColor === color }]"
            :style="{ backgroundColor: color }"
            :title="color"
          ></button>
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
        <UndoIcon />
      </button>

      <button
        @click="onDelete"
        :disabled="!canDelete"
        class="action-btn delete"
        title="删除选中"
      >
        <DeleteIcon />
      </button>

      <button
        @click="onSave"
        class="action-btn save"
        title="保存"
      >
        <SaveIcon />
      </button>

      <button
        @click="onConfirm"
        class="action-btn confirm"
        title="确认"
      >
        <ConfirmIcon />
      </button>

      <button
        @click="onCancel"
        class="action-btn cancel"
        title="取消"
      >
        <CancelIcon />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { ToolType } from '../core/types'

// 图标组件
const SelectIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M8 6L43 25L24 27L13.9948 44L8 6Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linejoin': 'round' })
])

const RectangleIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' })
])

const ArrowIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M11 11L36.4559 36.4558', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
  h('path', { d: 'M29 11H11V29', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const PenIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linejoin': 'round' }),
  h('path', { d: 'M27.9521 12.3872L36.4374 20.8725', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const MosaicIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M44 36H36V44H44V36Z', fill: 'currentColor' }),
  h('path', { d: 'M28 36H20V44H28V36Z', fill: 'currentColor' }),
  h('path', { d: 'M12 36H4V44H12V36Z', fill: 'currentColor' }),
  h('path', { d: 'M44 20H36V28H44V20Z', fill: 'currentColor' })
])

const TextIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M4 8H32', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round' }),
  h('path', { d: 'M28 21H44', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round' }),
  h('path', { d: 'M18 42L18 8', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round' })
])

const UndoIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M12.9998 8L6 14L12.9998 21', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const DeleteIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M8 11L40 11', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const SaveIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M6 24.0083V42H42V24', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const ConfirmIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M10 24L20 34L40 14', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

const CancelIcon = () => h('svg', { width: '20', height: '20', viewBox: '0 0 48 48', fill: 'none' }, [
  h('path', { d: 'M14 14L34 34', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
  h('path', { d: 'M14 34L34 14', stroke: 'currentColor', 'stroke-width': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
])

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
  { type: ToolType.Select, icon: SelectIcon, title: '选择工具' },
  { type: ToolType.Rectangle, icon: RectangleIcon, title: '矩形工具' },
  { type: ToolType.Arrow, icon: ArrowIcon, title: '箭头工具' },
  { type: ToolType.Pen, icon: PenIcon, title: '画笔工具' },
  { type: ToolType.Mosaic, icon: MosaicIcon, title: '马赛克工具' },
  { type: ToolType.Text, icon: TextIcon, title: '文字工具' }
]

// 样式配置
const lineWidths = [2, 3, 5, 8]
const colors = ['#ff4444', '#44ff44', '#4444ff', '#ffff44', '#ff44ff', '#44ffff', '#ffffff', '#000000']
const textSizes = [12, 14, 16, 18, 20, 24]
const mosaicSizes = [10, 15, 20, 25]

// 计算属性
const showStyleSettings = computed(() => props.currentTool !== ToolType.Select)

const showLineWidth = computed(() => 
  [ToolType.Rectangle, ToolType.Arrow, ToolType.Pen].includes(props.currentTool)
)

const showColors = computed(() => 
  [ToolType.Rectangle, ToolType.Arrow, ToolType.Pen, ToolType.Text].includes(props.currentTool)
)

const showTextSize = computed(() => props.currentTool === ToolType.Text)

const showMosaicSize = computed(() => props.currentTool === ToolType.Mosaic)

// 事件处理
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
</script>

<style scoped lang="scss">
.toolbar-section {
  @apply flex items-center gap-3 bg-white rounded-lg shadow-lg px-2 py-1 border border-gray-200;
  min-width: 400px;
  max-width: 980px;

  .tool-section {
    @apply flex items-center gap-1;

    .tool-btn {
      @apply w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 border border-gray-300 bg-white hover:bg-gray-50;

      &.active {
        @apply bg-blue-500 text-white border-blue-500;
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

      .line-width-selector,
      .color-selector,
      .text-size-selector,
      .mosaic-size-selector {
        @apply flex gap-1;
      }

      .width-btn,
      .size-btn {
        @apply w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200;

        &.active {
          @apply border-blue-500 bg-blue-50;
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
        @apply bg-gray-100;
      }

      &:active:not(:disabled) {
        @apply transform scale-95;
      }
    }
  }
}
</style>
