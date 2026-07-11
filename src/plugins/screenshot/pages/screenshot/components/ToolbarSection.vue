<template>
  <div ref="toolbarContainerRef" class="toolbar-container">
    <!-- 第一个面板：工具选择 + 操作按钮 -->
    <div class="toolbar-panel first-panel">
      <!-- 工具选择区域 -->
      <div class="tool-section">
        <template v-for="tool in tools" :key="tool.type">
          <button
            @click="onToolSelect(tool.type)"
            :class="['tool-btn', { active: currentTool === tool.type }]"
            :title="tool.title"
            :aria-pressed="currentTool === tool.type"
          >
            <component :is="tool.icon" theme="outline" size="18" :strokeWidth="2.5"/>
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
        <return theme="outline" size="18" :strokeWidth="2.5"/>
        </button>

        <button
          @click="onRedo"
          :disabled="!canRedo"
          class="action-btn redo"
          :title="t('screenshot.redo')"
        >
        <go-on theme="outline" size="18" :strokeWidth="2.5"/>
        </button>

        <button
          @click="onDelete"
          :disabled="!canDelete"
          class="action-btn delete"
          :title="t('screenshot.delete')"
        >
        <delete-four theme="outline" size="18" :strokeWidth="2.5"/>
        </button>

        <button
          @click="onCancel"
          class="action-btn cancel"
          :title="t('screenshot.cancel')"
        >
        <close theme="outline" size="18" :strokeWidth="2.5"/>
        </button>

        <button
          @click="onSave"
          class="action-btn save"
          :title="t('screenshot.save')"
        >
        <download theme="outline" size="18" :strokeWidth="2.5"/>
        </button>

        <button
          @click="onConfirm"
          class="action-btn confirm"
          :title="t('screenshot.confirm')"
        >
        <check theme="outline" size="18" :strokeWidth="2.5"/>
        </button>
      </div>
    </div>

    <!-- 第二个面板：样式设置区域 -->
    <div v-if="showStyleSettings" class="toolbar-panel second-panel">
      <div class="style-section">
        <!-- 线宽设置 -->
        <div v-if="showLineWidth" class="style-group">
          <span class="style-label">{{ t('screenshot.lineWidth') }}</span>
          <div class="line-width-selector">
            <button
              v-for="width in lineWidths"
              :key="width"
              @click="onLineWidthChange(width)"
              :class="['width-btn', { active: currentLineWidth === width }]"
              :title="`${width}px`"
              :aria-pressed="currentLineWidth === width"
            >
              <span class="line-preview" :style="{ height: `${width}px`, backgroundColor: currentColor }"></span>
            </button>
          </div>
          <span class="style-value">{{ currentLineWidth }} px</span>
        </div>

        <div v-if="showLineWidth && showColors" class="style-divider"></div>

        <!-- 不透明度设置 -->
        <div v-if="showOpacity" class="style-group opacity-group">
          <span class="style-label">{{ t('screenshot.opacity') }}</span>
          <input
            class="opacity-slider"
            type="range"
            min="10"
            max="100"
            step="5"
            :value="Math.round(currentOpacity * 100)"
            :style="{
              '--opacity-color': currentColor,
              '--opacity-progress': `${Math.round(currentOpacity * 100)}%`
            }"
            :title="`${Math.round(currentOpacity * 100)}%`"
            :aria-label="t('screenshot.opacity')"
            @input="onOpacityChange"
          />
          <span class="style-value">{{ Math.round(currentOpacity * 100) }}%</span>
        </div>

        <div v-if="showOpacity && showColors" class="style-divider"></div>

        <!-- 颜色设置 -->
        <div v-if="showColors" class="style-group color-picker-group">
          <span class="style-label">{{ t('screenshot.color') }}</span>
          <div class="color-row">
            <button
              v-for="color in presetColors"
              :key="color"
              @click="selectColor(color)"
              :class="['color-btn', { active: currentColor === color }]"
              :style="{ backgroundColor: color }"
              :title="color"
              :aria-pressed="currentColor === color"
            ></button>
            
            <div class="custom-color-wrapper">
              <button
                class="color-btn custom-color-btn"
                :class="{ active: !presetColors.includes(currentColor) }"
                :title="t('screenshot.customColor')"
              >
                <Platte theme="outline" size="13" :strokeWidth="2.5"/>
              </button>
              <input
                type="color"
                @change="onCustomColorChange"
                :value="currentColor"
                class="color-input-hidden"
                :title="t('screenshot.customColor')"
                :aria-label="t('screenshot.customColor')"
              />
            </div>
          </div>
        </div>

        <!-- 文字大小设置 -->
        <div v-if="showTextSize" class="style-group">
          <span class="style-label">{{ t('screenshot.fontSize') }}</span>
          <div class="text-size-selector">
            <button
              v-for="size in textSizes"
              :key="size"
              @click="onTextSizeChange(size)"
              :class="['size-btn', { active: currentTextSize === size }]"
              :title="`${size}px`"
              :aria-pressed="currentTextSize === size"
            >
              <span class="size-text" :style="{ fontSize: `${Math.min(size, 18)}px` }">A</span>
            </button>
          </div>
          <span class="style-value">{{ currentTextSize }} px</span>
        </div>

        <!-- 马赛克大小设置 -->
        <div v-if="showMosaicSize" class="style-group">
          <span class="style-label">{{ t('screenshot.mosaicSize') }}</span>
          <div class="mosaic-size-selector">
            <button
              v-for="size in mosaicSizes"
              :key="size"
              @click="onMosaicSizeChange(size)"
              :class="['size-btn', { active: currentMosaicSize === size }]"
              :title="`${t('screenshot.brush')} ${size * 3}px`"
              :aria-pressed="currentMosaicSize === size"
            >
              <span class="mosaic-preview" :style="{
                width: `${Math.min(size * 1.25, 18)}px`,
                height: `${Math.min(size * 1.25, 18)}px`
              }"></span>
            </button>
          </div>
          <span class="style-value">{{ currentMosaicSize * 3 }} px</span>
        </div>

        <!-- 翻译引擎选择 -->
        <div v-if="showTranslateEngine" class="style-group">
          <span class="style-label">{{ t('screenshot.engine') }}</span>
          <div class="translate-engine-selector">
            <button
              v-for="engine in translateEngines"
              :key="engine.value"
              @click="selectTranslateEngine(engine.value)"
              :class="['engine-btn', { active: currentTranslateEngine === engine.value }]"
              :title="engine.label"
              :aria-pressed="currentTranslateEngine === engine.value"
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
import { computed, nextTick, ref, watch } from 'vue'
import { ToolType } from '../core/types'
import { 
  MoveOne, 
  RectangleOne, 
  Round,
  Minus,
  ArrowRightUp,
  Write, 
  Mosaic, 
  FontSize, 
  Return, 
  GoOn,
  DeleteFour, 
  Download, 
  Check, 
  Close, 
  Platte, 
  Pushpin, 
  Translate, 
  TextRecognition
} from '@icon-park/vue-next'

const toolbarContainerRef = ref<HTMLElement | null>(null)

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

interface Props {
  currentTool: ToolType
  currentColor: string
  currentLineWidth: number
  currentOpacity: number
  currentTextSize: number
  currentMosaicSize: number
  canUndo: boolean
  canRedo: boolean
  canDelete: boolean
  currentTranslateEngine?: 'google' | 'bing' | 'offline' | 'local-ai'
}

interface Emits {
  (e: 'tool-select', tool: ToolType): void
  (e: 'color-change', color: string): void
  (e: 'line-width-change', width: number): void
  (e: 'opacity-change', opacity: number): void
  (e: 'text-size-change', size: number): void
  (e: 'mosaic-size-change', size: number): void
  (e: 'translate-engine-change', engine: 'google' | 'bing' | 'offline' | 'local-ai'): void
  (e: 'undo'): void
  (e: 'redo'): void
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
  { type: ToolType.Ellipse, icon: Round, title: t('screenshot.ellipse') },
  { type: ToolType.Line, icon: Minus, title: t('screenshot.line') },
  { type: ToolType.Arrow, icon: ArrowRightUp, title: t('screenshot.arrow') },
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
  { value: 'offline' as const, label: t('translate.offlineTranslate'), short: '离' },
  { value: 'local-ai' as const, label: t('translate.localAiTranslate'), short: 'AI' }
])

// 样式配置
const lineWidths = [2, 3, 5, 8]
const presetColors = [
  '#ff4444',
  '#f79009',
  '#fdb022',
  '#12b76a',
  '#06b6d4',
  '#2e90fa',
  '#7a5af8',
  '#d444f1',
  '#111827'
]
const textSizes = [12, 14, 16, 18, 20, 24]
const mosaicSizes = [8, 12, 16, 20]

// 是否显示样式设置
const showStyleSettings = computed(() => ![ToolType.Select, ToolType.ColorPicker, ToolType.Ocr, ToolType.Pin].includes(props.currentTool))

const showLineWidth = computed(() => 
  [ToolType.Rectangle, ToolType.Ellipse, ToolType.Line, ToolType.Arrow, ToolType.Pen].includes(props.currentTool)
)

const showColors = computed(() => 
  [ToolType.Rectangle, ToolType.Ellipse, ToolType.Line, ToolType.Arrow, ToolType.Pen, ToolType.Text].includes(props.currentTool)
)

const showOpacity = computed(() =>
  [
    ToolType.Rectangle,
    ToolType.Ellipse,
    ToolType.Line,
    ToolType.Arrow,
    ToolType.Pen,
    ToolType.Mosaic,
    ToolType.Text
  ].includes(props.currentTool)
)

const showTextSize = computed(() => props.currentTool === ToolType.Text)

const showMosaicSize = computed(() => props.currentTool === ToolType.Mosaic)

const showTranslateEngine = computed(() => props.currentTool === ToolType.Translate)

// 事件处理函数
const onToolSelect = (tool: ToolType) => emit('tool-select', tool)
const onColorChange = (color: string) => emit('color-change', color)
const onLineWidthChange = (width: number) => emit('line-width-change', width)
const onOpacityChange = (event: Event) => {
  emit('opacity-change', Number((event.target as HTMLInputElement).value) / 100)
}
const onTextSizeChange = (size: number) => emit('text-size-change', size)
const onMosaicSizeChange = (size: number) => emit('mosaic-size-change', size)
const onUndo = () => emit('undo')
const onRedo = () => emit('redo')
const onDelete = () => emit('delete')
const onSave = () => emit('save')
const onConfirm = () => emit('confirm')
const onCancel = () => emit('cancel')

// 翻译引擎选择处理
const selectTranslateEngine = (engine: 'google' | 'bing' | 'offline' | 'local-ai') => {
  emit('translate-engine-change', engine)
}

const selectColor = (color: string) => {
  onColorChange(color)
}

// 处理自定义颜色变化
const onCustomColorChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.value) {
    onColorChange(input.value)
    // 不关闭面板，用户可能想继续选择
  }
}

const getToolbarSize = () => {
  const rect = toolbarContainerRef.value?.getBoundingClientRect()
  return {
    width: rect?.width ?? 590,
    height: rect?.height ?? 50
  }
}

watch(() => props.currentTool, () => {
  nextTick(() => {
    window.dispatchEvent(new CustomEvent('screenshot-toolbar-resize', {
      detail: getToolbarSize()
    }))
  })
}, { immediate: true })

defineExpose({
  getToolbarSize
})
</script>

<style scoped lang="scss">
.toolbar-container {
  @apply flex flex-col gap-2 items-start;
  font-family: Inter, 'Segoe UI', Arial, sans-serif;
  color: #101828;

  .toolbar-panel {
    @apply flex items-center;
    background: rgb(255 255 255 / 98%);
    backdrop-filter: blur(18px);
    border: 1px solid rgb(16 24 40 / 8%);
    box-shadow: 0 8px 22px rgb(16 24 40 / 16%), 0 2px 6px rgb(16 24 40 / 8%);

    &.first-panel {
      @apply py-[7px] px-2.5 overflow-x-auto rounded-xl;
      width: max-content;
      max-width: calc(100vw - 20px);
    }

    &.second-panel {
      @apply py-2 px-3 overflow-x-auto overflow-y-hidden min-h-[52px] rounded-xl;
      width: fit-content;
      min-width: auto;
      max-width: calc(100vw - 20px);
      background: rgb(255 255 255 / 92%);
      backdrop-filter: blur(22px);
      border-color: rgb(255 255 255 / 46%);
      box-shadow: 0 10px 24px rgb(16 24 40 / 14%), 0 2px 6px rgb(16 24 40 / 6%);
    }
  }

  .tool-section {
    @apply flex gap-0.5 items-center;

    .tool-btn {
      @apply flex items-center justify-center w-[34px] h-[34px] cursor-pointer bg-transparent border-0 rounded-[7px];
      color: #101828;
      transition: background-color 140ms ease, box-shadow 140ms ease, transform 140ms ease;

      &.active {
        color: #101828;
        background: #dcecff;
        box-shadow: inset 0 0 0 1px rgb(46 144 250 / 9%);
      }

      &:hover:not(.active) {
        background: #f2f4f7;
      }

      &:active {
        @apply scale-[0.94];
      }

      &:focus-visible {
        outline: 2px solid #84caff;
        outline-offset: 1px;
      }
    }
  }

  .toolbar-divider {
    @apply w-px h-5 mx-0.5;
    background: rgb(16 24 40 / 12%);
  }

  .style-section {
    @apply flex gap-3 items-center;

    .style-group {
      @apply flex gap-2 items-center;

      .line-width-selector,
      .text-size-selector,
      .mosaic-size-selector,
      .translate-engine-selector {
        @apply flex gap-[3px] items-center;
      }

      .width-btn,
      .size-btn,
      .engine-btn {
        @apply flex items-center justify-center w-7 h-7 cursor-pointer bg-transparent border-0 rounded-md;
        color: #475467;
        transition: background-color 140ms ease, box-shadow 140ms ease;

        &.active {
          color: #175cd3;
          background: #eaf4ff;
          box-shadow: inset 0 0 0 1px rgb(46 144 250 / 12%);
        }

        &:hover:not(.active) {
          background: #f2f4f7;
        }

        &:focus-visible {
          outline: 2px solid #84caff;
          outline-offset: 1px;
        }

        .line-preview {
          @apply w-[17px] min-h-[2px] rounded-full;
        }

        .size-text {
          @apply leading-none;
          color: inherit;
        }

        .mosaic-preview {
          @apply inline-block rounded-full;
          background: rgb(71 84 103 / 58%);
        }
      }

      .engine-btn {
        @apply w-[30px] text-[11px] font-semibold;
      }

      .color-btn {
        @apply w-[18px] h-[18px] p-0 cursor-pointer rounded-full;
        border: 1px solid rgb(16 24 40 / 10%);
        transition: box-shadow 140ms ease, transform 140ms ease;

        &.active {
          border-color: #fff;
          box-shadow: 0 0 0 2px #84caff;
          @apply scale-[1.08];
        }

        &:hover {
          @apply scale-[1.12];
        }

        &:focus-visible {
          outline: 2px solid #84caff;
          outline-offset: 2px;
        }
      }

      &.color-picker-group {
        .color-row {
          @apply flex gap-[7px] items-center;
        }
      }
    }
  }

  .action-section {
    @apply flex gap-0.5 items-center;

    .action-btn {
      @apply flex items-center justify-center w-[34px] h-[34px] cursor-pointer bg-transparent border-0 rounded-[7px];
      color: #101828;
      transition: background-color 140ms ease, color 140ms ease, transform 140ms ease;

      &:disabled {
        color: #d0d5dd;
        @apply cursor-not-allowed;
      }

      &:hover:not(:disabled) {
        background: #f2f4f7;
      }

      &:active:not(:disabled) {
        @apply scale-[0.94];
      }

      &:focus-visible {
        outline: 2px solid #84caff;
        outline-offset: 1px;
      }
    }
  }

  .style-label {
    @apply text-[11px] whitespace-nowrap;
    color: #98a2b3;
  }

  .style-value {
    @apply min-w-[32px] text-xs text-right whitespace-nowrap;
    color: #475467;
  }

  .style-divider {
    @apply w-px h-[22px];
    background: rgb(16 24 40 / 10%);
  }

  .opacity-slider {
    @apply w-[72px] h-1 cursor-pointer rounded-full outline-none;
    appearance: none;
    background: linear-gradient(
      to right,
      var(--opacity-color) 0,
      var(--opacity-color) var(--opacity-progress),
      rgb(208 213 221 / 76%) var(--opacity-progress),
      rgb(208 213 221 / 76%) 100%
    );

    &::-webkit-slider-thumb {
      @apply w-[13px] h-[13px] cursor-pointer rounded-full;
      appearance: none;
      background: var(--opacity-color);
      border: 2px solid #fff;
      box-shadow: 0 1px 4px rgb(16 24 40 / 24%);
    }

    &::-moz-range-track {
      @apply h-1 bg-transparent rounded-full;
    }

    &::-moz-range-progress {
      @apply h-1 rounded-full;
      background: var(--opacity-color);
    }

    &::-moz-range-thumb {
      @apply w-[11px] h-[11px] cursor-pointer rounded-full;
      background: var(--opacity-color);
      border: 2px solid #fff;
      box-shadow: 0 1px 4px rgb(16 24 40 / 24%);
    }

    &:focus-visible {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--opacity-color) 22%, transparent);
    }
  }

  .custom-color-wrapper {
    @apply relative flex;

    .color-input-hidden {
      @apply absolute inset-0 z-[1] w-full h-full cursor-pointer opacity-0;
    }
  }

  .custom-color-btn {
    @apply relative flex items-center justify-center pointer-events-none;
    color: #344054;
    background: conic-gradient(#f04438, #fdb022, #12b76a, #2e90fa, #7a5af8, #f04438);

    &::before {
      @apply absolute inset-[3px];
      content: '';
      background: #fff;
      @apply rounded-full;
    }

    svg {
      @apply relative z-[1];
    }
  }
}
</style>
