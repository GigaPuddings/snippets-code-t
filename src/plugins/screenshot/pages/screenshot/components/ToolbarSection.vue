<template>
  <div class="toolbar-container">
    <!-- 第一个面板：工具选择 + 操作按钮 -->
    <div class="toolbar-panel first-panel">
      <!-- 工具选择区域 -->
      <div class="tool-section">
        <template v-for="tool in tools" :key="tool.type">
          <button
            @click="onToolSelect(tool.type)"
            :class="['tool-btn', { active: currentTool === tool.type }]"
            :title="tool.title"
          >
            <component :is="tool.icon" theme="outline" size="18" :strokeWidth="3"/>
          </button>
        </template>
      </div>

      <!-- 分隔线 -->
      <div class="toolbar-divider"></div>

      <!-- 操作按钮区域 -->
      <div class="action-section">
        <button
          @click="onUndo"
          :disabled="!canUndo"
          class="action-btn undo"
          :title="t('screenshot.undo')"
        >
        <return theme="outline" size="18" :strokeWidth="3"/>
        </button>

        <button
          @click="onDelete"
          :disabled="!canDelete"
          class="action-btn delete"
          :title="t('screenshot.delete')"
        >
        <delete-four theme="outline" size="18" :strokeWidth="3"/>
        </button>

        <button
          @click="onSave"
          class="action-btn save"
          :title="t('screenshot.save')"
        >
        <download theme="outline" size="18" :strokeWidth="3"/>
        </button>

        <button
          @click="onConfirm"
          class="action-btn confirm"
          :title="t('screenshot.confirm')"
        >
        <check theme="outline" size="18" :strokeWidth="3"/>
        </button>

        <button
          @click="onCancel"
          class="action-btn cancel"
          :title="t('screenshot.cancel')"
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
          @click="toggleColorPicker"
          class="color-trigger-btn"
          :style="{ backgroundColor: currentColor }"
          :title="t('screenshot.colorPicker')"
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
                :title="t('screenshot.customColor')"
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
            :title="`${t('screenshot.brush')} ${size * 3}px`"
          >
            <div class="mosaic-preview" :style="{
              width: `${Math.min(size * 1.5, 24)}px`,
              height: `${Math.min(size * 1.5, 24)}px`,
              backgroundColor: 'rgba(100, 100, 100, 0.5)',
              borderRadius: '50%'
            }"></div>
          </button>
        </div>
      </div>

      <!-- 翻译引擎选择 -->
      <div v-if="showTranslateEngine" class="style-group">
        <div class="translate-engine-selector">
          <button
            v-for="engine in translateEngines"
            :key="engine.value"
            @click="selectTranslateEngine(engine.value)"
            :class="['engine-btn', { active: currentTranslateEngine === engine.value }]"
            :title="engine.label"
          >
            {{ engine.short }}
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ToolType } from '../core/types'
import { 
  MoveOne, 
  RectangleOne, 
  ArrowLeftUp, 
  Write, 
  Mosaic, 
  FontSize, 
  Return, 
  DeleteFour, 
  Download, 
  Check, 
  Close, 
  Platte, 
  Pushpin, 
  Translate, 
  TextRecognition
} from '@icon-park/vue-next'

// 颜色选择器状态
const showColorPicker = ref(false)

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

interface Props {
  currentTool: ToolType
  currentColor: string
  currentLineWidth: number
  currentTextSize: number
  currentMosaicSize: number
  canUndo: boolean
  canDelete: boolean
  currentTranslateEngine?: 'google' | 'bing' | 'offline'
}

interface Emits {
  (e: 'tool-select', tool: ToolType): void
  (e: 'color-change', color: string): void
  (e: 'line-width-change', width: number): void
  (e: 'text-size-change', size: number): void
  (e: 'mosaic-size-change', size: number): void
  (e: 'translate-engine-change', engine: 'google' | 'bing' | 'offline'): void
  (e: 'undo'): void
  (e: 'delete'): void
  (e: 'save'): void
  (e: 'confirm'): void
  (e: 'cancel'): void
}

const props = withDefaults(defineProps<Props>(), {
  currentTranslateEngine: 'bing'
})
const emit = defineEmits<Emits>()

// 工具配置
const tools = computed(() => [
  { type: ToolType.Select, icon: MoveOne, title: t('screenshot.select') },
  { type: ToolType.Rectangle, icon: RectangleOne, title: t('screenshot.rectangle') },
  { type: ToolType.Arrow, icon: ArrowLeftUp, title: t('screenshot.arrow') },
  { type: ToolType.Pen, icon: Write, title: t('screenshot.pen') },
  { type: ToolType.Mosaic, icon: Mosaic, title: t('screenshot.mosaic') },
  { type: ToolType.Text, icon: FontSize, title: t('screenshot.text') },
  { type: ToolType.ColorPicker, icon: Platte, title: t('screenshot.colorPicker') },
  { type: ToolType.Ocr, icon: TextRecognition, title: t('screenshot.ocr') },
  { type: ToolType.Translate, icon: Translate, title: t('screenshot.translate') },
  { type: ToolType.Pin, icon: Pushpin, title: t('screenshot.pin') }
])

// 翻译引擎配置
const translateEngines = computed(() => [
  { value: 'google' as const, label: 'Google', short: 'G' },
  { value: 'bing' as const, label: t('translate.bingTranslate'), short: 'B' },
  { value: 'offline' as const, label: t('translate.offlineTranslate'), short: '离' }
])

// 样式配置
const lineWidths = [2, 3, 5, 8]
// 预设颜色：红、绿、蓝
const presetColors = ['#ff4444', '#44ff44', '#4444ff']
const textSizes = [12, 14, 16, 18, 20, 24]
const mosaicSizes = [5, 8, 10, 15]

// 是否显示样式设置
const showStyleSettings = computed(() => ![ToolType.Select, ToolType.ColorPicker, ToolType.Ocr, ToolType.Pin].includes(props.currentTool))

const showLineWidth = computed(() => 
  [ToolType.Rectangle, ToolType.Arrow, ToolType.Pen].includes(props.currentTool)
)

const showColors = computed(() => 
  [ToolType.Rectangle, ToolType.Arrow, ToolType.Pen, ToolType.Text].includes(props.currentTool)
)

const showTextSize = computed(() => props.currentTool === ToolType.Text)

const showMosaicSize = computed(() => props.currentTool === ToolType.Mosaic)

const showTranslateEngine = computed(() => props.currentTool === ToolType.Translate)

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

// 翻译引擎选择处理
const selectTranslateEngine = (engine: 'google' | 'bing' | 'offline') => {
  emit('translate-engine-change', engine)
}

// 颜色选择器方法
const toggleColorPicker = () => {
  showColorPicker.value = !showColorPicker.value
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
    @apply flex items-center gap-3 bg-white rounded-lg shadow-lg px-2 py-1 border border-gray-200;

    &.first-panel {
      min-width: 400px;
      max-width: 980px;
    }

    &.second-panel {
      width: fit-content;
      min-width: auto;
    }
  }

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
      @apply flex items-center gap-2;

      .line-width-selector,
      .color-selector,
      .text-size-selector,
      .mosaic-size-selector,
      .translate-engine-selector {
        @apply flex gap-1;
      }

      .width-btn,
      .size-btn,
      .engine-btn {
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

      .engine-btn {
        @apply text-xs font-medium;
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
          @apply w-8 h-8 rounded border border-gray-300 cursor-pointer transition-all duration-200 flex items-center justify-center relative;

          &:hover {
            @apply transform scale-105;
          }

          .color-trigger-inner {
            @apply w-6 h-6 rounded;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
          }
        }

        .color-picker-panel {
          @apply absolute left-0 p-2 z-50 border border-gray-200 bg-white rounded-lg shadow-lg;
          top: calc(100% + 8px);

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
            background: linear-gradient(135deg, #ff595e 0%, #8ac926 45%, #1982c4 100%);
            position: relative;
            pointer-events: none;
            
            &::before {
              content: '';
              position: absolute;
              inset: 2px;
              background: var(--el-bg-color);
              border-radius: 2px;
            }
            
            svg {
              position: relative;
              z-index: 1;
              color: var(--el-text-color-primary);
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
        @apply bg-gray-100;
      }

      &:active:not(:disabled) {
        @apply transform scale-95;
      }
    }
  }
}
</style>
