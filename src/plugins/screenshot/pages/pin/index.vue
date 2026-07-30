<template>
  <div
    :class="['pin-container', { 'ocr-mode': mode === 'ocr' }]"
    ref="containerRef"
    @contextmenu.prevent="handleContextMenu"
    @wheel.capture="handleContainerWheel"
  >
    <!-- 图片容器 -->
    <div
      v-if="imageBlobUrl && mode === 'pin'"
      class="image-wrapper"
      :style="imageWrapperStyle"
      @wheel.capture="handleWheel"
      @contextmenu.prevent="handleContextMenu"
      data-tauri-drag-region
      @mousedown="handleMouseDown"
    >
      <img
        :src="imageBlobUrl"
        :alt="$t('screenshot.pin')"
        :style="imageStyle"
        @load="handleImageLoad"
        draggable="false"
        data-tauri-drag-region
      />
    </div>

    <section
      v-if="mode === 'ocr'"
      class="ocr-shell"
      @contextmenu.prevent="handleContextMenu"
    >
      <header class="ocr-header">
        <div
          class="ocr-titlebar"
          data-tauri-drag-region
          @mousedown="handleMouseDown"
        >
          <div class="ocr-title-copy" data-tauri-drag-region>
            <div class="ocr-window-title" data-tauri-drag-region>
              <text-recognition theme="outline" size="18" />
              <span data-tauri-drag-region>{{ $t('pin.ocrResult') }}</span>
            </div>
            <div class="ocr-source-inline" data-tauri-drag-region>
              <span class="ocr-source-name" data-tauri-drag-region>
                {{ ocrFileName }}
              </span>
              <span class="ocr-meta-dot" data-tauri-drag-region>·</span>
              <span data-tauri-drag-region>{{ ocrImageMeta }}</span>
            </div>
          </div>

          <div class="ocr-title-actions">
            <div
              class="ocr-engine-status"
              :class="`is-${recognitionEngine}`"
              :title="recognitionModelTitle"
            >
              <Loading
                v-if="ocrLoading"
                class="ocr-loading-icon"
                size="14"
                theme="outline"
              />
              <Magic v-else size="14" theme="outline" />
              <span>{{ recognitionSourceLabel }}</span>
            </div>

            <div class="ocr-window-controls">
              <button
                class="ocr-window-btn"
                :title="
                  isAlwaysOnTop ? $t('pin.togglePin') : $t('pin.pinWindow')
                "
                @click.stop="handleToggleAlwaysOnTop"
              >
                <component
                  :is="isAlwaysOnTop ? Pushpin : Pin"
                  size="18"
                  theme="outline"
                />
              </button>
              <span class="ocr-window-divider"></span>
              <button
                class="ocr-window-btn"
                :title="$t('pin.minimize')"
                @click.stop="handleMinimize"
              >
                <Minus size="18" theme="outline" />
              </button>
              <button
                class="ocr-window-btn"
                :title="$t('pin.maximize')"
                @click.stop="handleToggleMaximize"
              >
                <Square size="14" theme="outline" :strokeWidth="5" />
              </button>
              <button
                class="ocr-window-btn"
                :title="$t('pin.close')"
                @click.stop="handleClose"
              >
                <Close size="14" theme="outline" :strokeWidth="6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main class="ocr-reading-surface" @mousedown.stop>
        <Splitter
          class="ocr-result-layout"
          default-size="44%"
          min-size="26%"
          max-size="72%"
          :second-collapsed="isResultPaneCollapsed"
        >
          <template #first>
            <section class="ocr-preview-pane">
              <header class="ocr-pane-header">
                <div class="ocr-pane-heading">
                  <strong>{{ $t('pin.sourceImage') }}</strong>
                  <span>{{ imageSelectionHint }}</span>
                </div>
                <div class="ocr-pane-header-actions">
                  <span
                    v-if="ocrSelectableBlocks.length > 0"
                    class="ocr-ready-badge"
                  >
                    {{ $t('pin.imageTextSelectable') }}
                  </span>
                  <button
                    v-if="isResultPaneCollapsed"
                    type="button"
                    class="ocr-panel-toggle"
                    :title="$t('pin.showAiPanel')"
                    @click.stop="isResultPaneCollapsed = false"
                  >
                    <Left size="14" theme="outline" />
                    <span>{{ $t('pin.showAiPanel') }}</span>
                  </button>
                </div>
              </header>

              <div class="ocr-preview-canvas">
                <div class="ocr-preview-stage">
                  <img
                    ref="ocrPreviewImageRef"
                    :src="imageBlobUrl || imageData"
                    :alt="$t('pin.ocrSourceAlt')"
                    @load="handleImageLoad"
                  />
                  <div
                    v-if="ocrSelectionHighlights.length > 0"
                    class="ocr-selection-highlight-layer"
                    aria-hidden="true"
                  >
                    <span
                      v-for="highlight in ocrSelectionHighlights"
                      :key="highlight.id"
                      class="ocr-selection-highlight"
                      :style="getOcrSelectionHighlightStyle(highlight)"
                    ></span>
                  </div>
                  <div
                    v-if="ocrSelectableBlocks.length > 0"
                    class="ocr-text-overlay"
                    @pointerdown="handleOcrOverlayPointerDown"
                    @pointermove="handleOcrOverlayPointerMove"
                    @pointerup="handleOcrOverlayPointerUp"
                    @pointercancel="handleOcrOverlayPointerCancel"
                    @pointerleave="handleOcrOverlayPointerLeave"
                  >
                    <span
                      v-for="(block, index) in ocrSelectableBlocks"
                      :key="block.id"
                      class="ocr-overlay-block"
                      :class="{
                        hovered: hoveredOcrBlockIndex === index,
                        selected: selectedOcrBlockIndexes.has(index)
                      }"
                      :data-selection-index="index"
                      :style="getOcrOverlayStyle(block)"
                      v-text="block.text.trim()"
                    ></span>
                  </div>
                </div>
              </div>
            </section>
          </template>

          <template #second>
            <section class="ocr-record-pane">
              <header class="ocr-pane-header result-header">
                <div class="ocr-pane-heading">
                  <strong>{{ $t('pin.aiRecognizedText') }}</strong>
                  <span v-if="ocrText.trim()">
                    {{
                      $t('pin.resultStats', {
                        sections: ocrRecords.length,
                        characters: ocrText.length
                      })
                    }}
                  </span>
                  <span v-else>{{ ocrStatusText }}</span>
                </div>
                <div class="ocr-pane-header-actions">
                  <CustomButton
                    class="ocr-inline-copy"
                    type="text"
                    :title="$t('pin.copyText')"
                    :disabled="!ocrText.trim()"
                    @click.stop="handleCopyOcrText"
                  >
                    <Copy size="15" theme="outline" />
                    <span>{{ $t('pin.copyAll') }}</span>
                  </CustomButton>
                  <button
                    type="button"
                    class="ocr-panel-toggle icon-only"
                    :title="$t('pin.hideAiPanel')"
                    @click.stop="isResultPaneCollapsed = true"
                  >
                    <Right size="14" theme="outline" />
                  </button>
                </div>
              </header>

              <div v-if="ocrLoading && !ocrText.trim()" class="ocr-state">
                <div class="ocr-ai-orbit">
                  <Magic size="22" theme="outline" />
                </div>
                <strong>{{ $t('pin.aiReadingImage') }}</strong>
                <span>{{ $t('pin.aiReadingHint') }}</span>
              </div>
              <div
                v-else-if="ocrError && !ocrText.trim()"
                class="ocr-state error"
              >
                <strong>{{ ocrError }}</strong>
                <span>{{ $t('pin.aiOcrRetryHint') }}</span>
              </div>
              <div v-else-if="!ocrText.trim()" class="ocr-state muted">
                {{ $t('pin.noTextRecognized') }}
              </div>

              <div v-else ref="ocrResultScrollRef" class="ocr-result-scroll">
                <section
                  v-if="ocrSelectionTranslation"
                  class="ocr-selection-translation"
                >
                  <div class="ocr-translation-section">
                    <span class="ocr-translation-label">
                      {{ $t('pin.selectedText') }}
                    </span>
                    <div class="ocr-translation-source">
                      {{ ocrSelectionTranslation.sourceText }}
                    </div>
                  </div>
                  <div class="ocr-translation-section result">
                    <span class="ocr-translation-label">
                      {{ translationResultLabel }}
                    </span>
                    <div
                      class="ocr-selection-translation-editor"
                      contenteditable="plaintext-only"
                      spellcheck="false"
                      v-text="ocrSelectionTranslation.translatedText"
                      @blur="handleSelectionTranslationInput"
                    ></div>
                  </div>
                </section>

                <article
                  v-for="(record, index) in ocrRecords"
                  :key="record.id"
                  class="ocr-record-item"
                  :class="[`is-${record.kind}`, { selected: record.selected }]"
                >
                  <header class="ocr-record-header">
                    <button
                      type="button"
                      class="ocr-record-select"
                      :class="{ selected: record.selected }"
                      :aria-pressed="record.selected"
                      :title="$t('pin.selectSection')"
                      @click.stop="toggleOcrRecordSelection(record.id)"
                    >
                      <Check v-if="record.selected" size="11" theme="outline" />
                      <span v-else>{{ index + 1 }}</span>
                    </button>
                    <span class="ocr-record-kind">
                      {{ getOcrSectionLabel(record.kind) }}
                    </span>
                    <span v-if="record.confidence > 0" class="ocr-record-score">
                      {{ Math.round(record.confidence) }}%
                    </span>
                  </header>

                  <div class="ocr-record-text">
                    <template
                      v-for="(
                        segment, segmentIndex
                      ) in getSynchronizedTextSegments(record)"
                      :key="`${record.id}-sync-${segmentIndex}`"
                    >
                      <mark
                        v-if="segment.highlighted"
                        class="ocr-sync-highlight"
                      >
                        {{ segment.text }}
                      </mark>
                      <span v-else>{{ segment.text }}</span>
                    </template>
                  </div>

                  <div
                    v-if="record.translatedText"
                    class="ocr-record-translation"
                  >
                    <span class="ocr-translation-label">
                      {{ translationResultLabel }}
                    </span>
                    <div
                      class="ocr-record-text translated"
                      v-text="record.translatedText"
                    ></div>
                  </div>
                </article>
              </div>
            </section>
          </template>
        </Splitter>
      </main>

      <footer class="ocr-action-bar">
        <CustomButton
          class="ocr-action-btn primary"
          type="text"
          :title="$t('pin.copyText')"
          :disabled="!ocrText.trim()"
          @click.stop="handleCopyOcrText"
        >
          <Copy size="18" theme="outline" :strokeWidth="2.5" />
          <span>
            {{
              selectedOcrRecordCount > 0
                ? `${$t('pin.copyText')} (${selectedOcrRecordCount})`
                : $t('pin.copyText')
            }}
          </span>
        </CustomButton>
        <div ref="translateMenuAnchorRef" class="translate-btn-group relative">
          <CustomButton
            class="ocr-action-btn translate-main"
            type="text"
            :title="$t('pin.translate')"
            :disabled="!ocrText.trim() || isTranslating"
            @click.stop="handleTranslateOcr"
          >
            <Translate
              v-if="!isTranslating"
              size="18"
              theme="outline"
              :strokeWidth="2.5"
            />
            <Loading
              v-else
              class="ocr-loading-icon"
              size="18"
              theme="outline"
              :strokeWidth="2.5"
            />
            <span>{{ $t('pin.translate') }}</span>
          </CustomButton>
          <CustomButton
            class="ocr-action-btn translate-arrow"
            type="text"
            :disabled="!ocrText.trim() || isTranslating"
            @click.stop="toggleTranslateMenu"
          >
            <Down size="14" theme="outline" :strokeWidth="2.7" />
          </CustomButton>
          <!-- 翻译引擎菜单 -->
          <div
            v-if="showTranslateMenu"
            class="translate-menu ocr-floating-menu"
            :style="translateMenuStyle"
          >
            <div
              v-for="engine in translateEngines"
              :key="engine.value"
              class="menu-item"
              @click="selectTranslateEngine(engine.value)"
              :class="{ active: currentTranslateEngine === engine.value }"
            >
              <span class="engine-label">{{ engine.label }}</span>
              <component
                v-if="currentTranslateEngine === engine.value"
                :is="Check"
                class="menu-item-icon"
                size="16"
              />
            </div>
          </div>
        </div>
        <div
          ref="ocrLanguageMenuAnchorRef"
          class="ocr-engine-btn-group relative"
        >
          <CustomButton
            class="ocr-action-btn ocr-engine-main"
            type="text"
            :title="$t('pin.ocrLanguage')"
            :disabled="ocrLoading"
            @click.stop="toggleOcrLanguageMenu"
          >
            <TextRecognition size="18" theme="outline" :strokeWidth="2.5" />
            <span>{{ currentOcrLanguageLabel }}</span>
          </CustomButton>
          <CustomButton
            class="ocr-action-btn ocr-engine-arrow"
            type="text"
            :disabled="ocrLoading"
            @click.stop="toggleOcrLanguageMenu"
          >
            <Down size="14" theme="outline" :strokeWidth="3" />
          </CustomButton>
          <div
            v-if="showOcrLanguageMenu"
            class="ocr-engine-menu ocr-floating-menu"
            :style="ocrLanguageMenuStyle"
          >
            <div
              v-for="language in ocrLanguages"
              :key="language.value"
              class="menu-item"
              @click="selectOcrLanguage(language.value)"
              :class="{ active: currentOcrLanguage === language.value }"
            >
              <span class="engine-label">{{ language.label }}</span>
              <component
                v-if="currentOcrLanguage === language.value"
                :is="Check"
                class="menu-item-icon"
                size="16"
              />
            </div>
          </div>
        </div>
        <div class="ocr-engine-btn-group relative">
          <CustomButton
            class="ocr-action-btn ocr-engine-main"
            type="text"
            :title="$t('pin.recognizeAgain')"
            :disabled="ocrLoading || !imageData"
            @click.stop="recognizeCurrentImage"
          >
            <Magic size="17" theme="outline" :strokeWidth="2.5" />
            <span>{{ $t('pin.aiRecognizeAgain') }}</span>
          </CustomButton>
        </div>
        <CustomButton
          class="ocr-action-btn"
          type="text"
          :title="$t('pin.saveAsText')"
          :disabled="!ocrText.trim()"
          @click.stop="handleSaveOcrText"
        >
          <Save size="18" theme="outline" :strokeWidth="2.5" />
          <span>{{ $t('pin.saveAsText') }}</span>
        </CustomButton>
        <span class="ocr-action-divider"></span>
        <CustomButton
          class="ocr-action-btn more"
          type="text"
          :title="$t('pin.more')"
          @click.stop="handleMoreActions"
        >
          <More size="18" theme="outline" :strokeWidth="2.7" />
        </CustomButton>
      </footer>
    </section>

    <div v-if="showZoomInfo" class="zoom-info">
      {{ Math.round(scale * 100) }}%
    </div>

    <!-- 右键菜单 -->
    <div v-if="showContextMenu" class="context-menu" :style="contextMenuStyle">
      <div class="menu-item" @click="handleToggleAlwaysOnTop">
        <component
          class="menu-item-icon"
          :is="isAlwaysOnTop ? Pin : Pushpin"
          size="18"
          :strokeWidth="3"
        />
        <span>
          {{ isAlwaysOnTop ? $t('pin.togglePin') : $t('pin.pinWindow') }}
        </span>
      </div>
      <div class="menu-item" @click="handleResetZoom">
        <Redo
          class="menu-item-icon"
          size="18"
          theme="outline"
          :strokeWidth="3"
        />
        <span>{{ $t('pin.resetZoom') }}</span>
      </div>
      <div class="menu-item" @click="handleCopyImage">
        <Copy
          class="menu-item-icon"
          size="18"
          theme="outline"
          :strokeWidth="3"
        />
        <span>{{ $t('pin.copyImage') }}</span>
      </div>
      <div class="menu-item" @click="handleSaveImage">
        <Save
          class="menu-item-icon"
          size="18"
          theme="outline"
          :strokeWidth="3"
        />
        <span>{{ $t('pin.saveImage') }}</span>
      </div>
      <div
        v-if="mode === 'ocr' && ocrText.trim()"
        class="menu-item"
        @click="handleCopyOcrText"
      >
        <Copy
          class="menu-item-icon"
          size="18"
          theme="outline"
          :strokeWidth="3"
        />
        <span>{{ $t('pin.copyText') }}</span>
      </div>
      <div class="menu-divider"></div>
      <div class="menu-item danger" @click="handleClose">
        <Close
          class="menu-item-icon"
          size="18"
          theme="outline"
          :strokeWidth="3"
        />
        <span>{{ $t('pin.closePin') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  computed,
  nextTick,
  watch,
  type CSSProperties
} from 'vue';
import { Window, LogicalSize } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import { useI18n } from 'vue-i18n';
import {
  Pin,
  Pushpin,
  Redo,
  Copy,
  Save,
  Close,
  Loading,
  TextRecognition,
  Minus,
  Square,
  Down,
  Translate,
  More,
  Check,
  Magic,
  Left,
  Right
} from '@icon-park/vue-next';
import { logger, ocrDiagnosticLogger } from '@/utils/logger';
import modal from '@/utils/modal';
import CustomButton from '@/components/UI/CustomButton.vue';
import Splitter from '@/components/Splitter/index.vue';
import {
  translateOffline,
  getModelCacheInfo,
  warmupOfflineTranslator
} from '@/plugins/translation/utils/offlineTranslator';
import {
  canTranslateDetectedLanguage,
  detectTranslationLanguage
} from '@/utils/text';
import {
  buildSelectedOcrText,
  findNearestOcrCharacterOffset,
  findNearestOcrSelectionHit,
  getOcrTextSelectionSegments,
  type OcrTextSelectionRange
} from '@/plugins/screenshot/pages/screenshot/core/OcrTextSelection';
import type {
  OcrTextBlock as LayoutOcrTextBlock,
  Rect
} from '@/plugins/screenshot/pages/screenshot/core/types';
import {
  recognizeImageWithLocalAi,
  type AiOcrResult,
  type AiOcrSectionKind
} from '@/plugins/screenshot/utils/aiOcr';

const { t } = useI18n();

const containerRef = ref<HTMLDivElement>();
const ocrPreviewImageRef = ref<HTMLImageElement>();
const ocrResultScrollRef = ref<HTMLElement>();
const appWindow = ref<Window | null>(null);

const imageData = ref<string>('');
const imageBlobUrl = ref<string>('');
const mode = ref<'pin' | 'ocr'>('pin');
const ocrText = ref('');
const ocrRecords = ref<OcrRecord[]>([]);
const ocrGeometryRecords = ref<OcrRecord[]>([]);
const ocrLoading = ref(false);
const ocrError = ref('');
const recognitionEngine = ref<'pending' | 'ai'>('pending');
const recognitionModelName = ref('');
const ocrFileName = ref('');
const imageWidth = ref(0);
const imageHeight = ref(0);
const ocrPreviewImageSize = ref({ width: 0, height: 0 });
const initialWindowSize = ref({ width: 0, height: 0 });

const ocrSelectionTranslation = ref<{
  sourceText: string;
  translatedText: string;
} | null>(null);
// Umi-OCR-style selection: track block and character endpoints instead of DOM Selection.
const ocrOverlaySelection = ref<OcrTextSelectionRange | null>(null);
const isSelectingOcrOverlay = ref(false);
const hoveredOcrBlockIndex = ref<number | null>(null);
const isResultPaneCollapsed = ref(false);
let ocrOverlayPointerId: number | null = null;
let ocrOverlayPointerStart: { x: number; y: number } | null = null;

const isTranslating = ref(false);
const showTranslateMenu = ref(false);
const translateMenuAnchorRef = ref<HTMLElement>();
const translateMenuStyle = ref<CSSProperties>({});
type TranslateEngine = 'google' | 'bing' | 'offline' | 'local-ai';
const currentTranslateEngine = ref<TranslateEngine>('bing');
const showOcrLanguageMenu = ref(false);
const ocrLanguageMenuAnchorRef = ref<HTMLElement>();
const ocrLanguageMenuStyle = ref<CSSProperties>({});
type OcrLanguageValue = 'auto' | 'zh' | 'zh-tw' | 'en' | 'ja' | 'ko';
const currentOcrLanguage = ref<OcrLanguageValue>('auto');

type PinOcrTextBlock = LayoutOcrTextBlock & {
  confidence?: number;
};

interface OcrRecord {
  id: string;
  kind: AiOcrSectionKind;
  text: string;
  sourceText: string;
  translatedText: string;
  bbox: Rect;
  blocks: PinOcrTextBlock[];
  confidence: number;
  selected: boolean;
}

type OcrSelectableBlock = PinOcrTextBlock & {
  id: string;
  recordId: string;
  separator: string;
};

interface OcrSelectionHighlight {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

interface OcrOverlayMetrics {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  boundaries: number[];
  renderedWidth: number;
}

const translateEngines = computed(() => [
  { value: 'google' as const, label: 'Google', short: 'G' },
  { value: 'bing' as const, label: t('translate.bingTranslate'), short: 'B' },
  {
    value: 'offline' as const,
    label: t('translate.offlineTranslate'),
    short: t('translate.offlineMark')
  },
  {
    value: 'local-ai' as const,
    label: t('translate.localAiTranslate'),
    short: 'AI'
  }
]);

const ocrLanguages = computed(() => [
  { value: 'auto' as const, label: t('pin.ocrLanguageAuto') },
  { value: 'zh' as const, label: t('pin.ocrLanguageZh') },
  { value: 'zh-tw' as const, label: t('pin.ocrLanguageZhTw') },
  { value: 'en' as const, label: t('pin.ocrLanguageEn') },
  { value: 'ja' as const, label: t('pin.ocrLanguageJa') },
  { value: 'ko' as const, label: t('pin.ocrLanguageKo') }
]);

const normalizeOcrLanguage = (language: unknown): OcrLanguageValue => {
  const normalized =
    typeof language === 'string' ? language.trim().toLowerCase() : '';
  if (
    normalized === 'auto' ||
    normalized === 'zh' ||
    normalized === 'zh-tw' ||
    normalized === 'en' ||
    normalized === 'ja' ||
    normalized === 'ko'
  ) {
    return normalized;
  }
  return 'auto';
};

const currentOcrLanguageLabel = computed(() => {
  return (
    ocrLanguages.value.find((item) => item.value === currentOcrLanguage.value)
      ?.label || t('pin.ocrLanguageAuto')
  );
});

const translationResultLabel = computed(() => t('pin.translationResult'));

const updateFloatingMenuStyle = (
  anchor: HTMLElement | undefined,
  target: typeof translateMenuStyle
) => {
  if (!anchor) {
    target.value = {};
    return;
  }

  const rect = anchor.getBoundingClientRect();
  const estimatedMenuWidth = 180;
  const viewportPadding = 8;
  const left = Math.min(
    Math.max(
      rect.left + rect.width / 2,
      viewportPadding + estimatedMenuWidth / 2
    ),
    window.innerWidth - viewportPadding - estimatedMenuWidth / 2
  );

  target.value = {
    left: `${left}px`,
    bottom: `${Math.max(8, window.innerHeight - rect.top + 8)}px`
  };
};

const updateFloatingMenuStyles = () => {
  if (showTranslateMenu.value) {
    updateFloatingMenuStyle(translateMenuAnchorRef.value, translateMenuStyle);
  }
  if (showOcrLanguageMenu.value) {
    updateFloatingMenuStyle(
      ocrLanguageMenuAnchorRef.value,
      ocrLanguageMenuStyle
    );
  }
};

const scale = ref(1);
const showZoomInfo = ref(false);
const isResizing = ref(false);
let zoomInfoTimer: ReturnType<typeof setTimeout> | null = null;
let ocrPreviewResizeObserver: ResizeObserver | null = null;

const showContextMenu = ref(false);
const contextMenuPosition = ref({ x: 0, y: 0 });
const isAlwaysOnTop = ref(true);
const windowSize = ref({ width: 0, height: 0 });

let unlistenImageData: (() => void) | null = null;
let ocrRequestId = 0;
const lastAppliedPayloadKey = ref('');
const imageWrapperStyle = computed(() => ({
  width: '100%',
  height: mode.value === 'ocr' ? 'auto' : '100%',
  flex: mode.value === 'ocr' ? '1 1 auto' : undefined,
  minHeight: mode.value === 'ocr' ? '120px' : undefined,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
}));

// 计算图片样式（窗口缩放模式：图片始终填充窗口，不使用 CSS scale）
const imageStyle = computed(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain' as const
}));

const ocrImageMeta = computed(() => {
  if (imageWidth.value > 0 && imageHeight.value > 0) {
    return `${imageWidth.value} × ${imageHeight.value}`;
  }
  return t('pin.screenshotPreview');
});

const ocrStatusText = computed(() => {
  if (ocrLoading.value) return t('pin.recognizing');
  if (ocrError.value) return t('pin.recognizeFailed');
  if (ocrText.value.trim()) return t('pin.recognizeSuccess');
  return t('pin.noTextRecognized');
});

const recognitionSourceLabel = computed(() => {
  if (ocrLoading.value) return t('pin.aiRecognizing');
  if (recognitionEngine.value === 'ai') return t('pin.aiVision');
  return t('pin.aiVision');
});

const recognitionModelTitle = computed(() => {
  const source = recognitionSourceLabel.value;
  return recognitionModelName.value
    ? `${source} · ${recognitionModelName.value}`
    : source;
});

const selectedOcrRecords = computed(() =>
  ocrRecords.value.filter((record) => record.selected)
);

const ocrSelectableBlocks = computed<OcrSelectableBlock[]>(() =>
  ocrGeometryRecords.value.flatMap((record) =>
    record.blocks.filter(hasBlockGeometry).map((block, index) => ({
      ...block,
      id: `${record.id}-block-${index}`,
      recordId: record.id,
      separator: getOcrBlockSeparator(block, record.blocks[index + 1])
    }))
  )
);

const imageSelectionHint = computed(() =>
  ocrSelectableBlocks.value.length > 0
    ? t('pin.dragToSelectText')
    : ocrLoading.value
      ? t('pin.imageSelectionPreparing')
      : t('pin.imageSelectionUnavailable')
);

const ocrSelectionSegments = computed(() =>
  getOcrTextSelectionSegments(
    ocrSelectableBlocks.value,
    ocrOverlaySelection.value
  )
);

const selectedOcrBlockIndexes = computed(
  () => new Set(ocrSelectionSegments.value.map((segment) => segment.blockIndex))
);

const selectedOcrFragmentsByRecord = computed(() => {
  const fragments = new Map<string, string[]>();
  for (const segment of ocrSelectionSegments.value) {
    const block = ocrSelectableBlocks.value[segment.blockIndex];
    const selectedText = block?.text.slice(segment.start, segment.end).trim();
    if (!block || !selectedText) {
      continue;
    }
    const recordFragments = fragments.get(block.recordId) || [];
    recordFragments.push(selectedText);
    fragments.set(block.recordId, recordFragments);
  }
  return fragments;
});

const selectedOcrFragments = computed(() =>
  [...selectedOcrFragmentsByRecord.value.values()].flat()
);

const selectedOcrOverlayText = computed(() =>
  buildSelectedOcrText(ocrSelectableBlocks.value, ocrOverlaySelection.value)
);

const ocrSelectionHighlights = computed<OcrSelectionHighlight[]>(() =>
  ocrSelectionSegments.value.map((segment) => {
    const block = ocrSelectableBlocks.value[segment.blockIndex];
    const metrics = getOcrOverlayMetrics(block);
    const start = metrics.boundaries[segment.start] || 0;
    const end = metrics.boundaries[segment.end] || metrics.renderedWidth;
    const startRatio = start / metrics.renderedWidth;
    const endRatio = end / metrics.renderedWidth;
    return {
      id: `${block.id}-${segment.start}-${segment.end}`,
      left: block.x + block.width * startRatio,
      top: block.y,
      width: block.width * Math.max(0, endRatio - startRatio),
      height: block.height
    };
  })
);

const selectedOcrRecordCount = computed(() => selectedOcrRecords.value.length);

const getSynchronizedTextSegments = (record: OcrRecord) => {
  const recordFragments = selectedOcrFragmentsByRecord.value.get(record.id);
  const fragments = [...new Set(recordFragments || selectedOcrFragments.value)]
    .map((fragment) => fragment.trim())
    .filter((fragment) => fragment.length >= 2)
    .sort((left, right) => right.length - left.length);
  if (fragments.length === 0) {
    return [{ text: record.text, highlighted: false }];
  }

  const pattern = fragments
    .map((fragment) => fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const regex = new RegExp(`(${pattern})`, 'giu');
  return record.text
    .split(regex)
    .filter(Boolean)
    .map((text) => ({
      text,
      highlighted: fragments.some(
        (fragment) => fragment.toLocaleLowerCase() === text.toLocaleLowerCase()
      )
    }));
};

const getOcrSectionLabel = (kind: AiOcrSectionKind): string =>
  t(`pin.sectionKinds.${kind}`);

const getRecordDisplayText = (record: OcrRecord): string => {
  return (record.translatedText || record.text).trim();
};

const buildDisplayTextFromRecords = (records: OcrRecord[]): string => {
  return records.map(getRecordDisplayText).filter(Boolean).join('\n\n');
};

const syncOcrTextFromRecords = () => {
  ocrText.value = buildDisplayTextFromRecords(ocrRecords.value);
};

const hasBlockGeometry = (block: PinOcrTextBlock): boolean => {
  return (
    imageWidth.value > 0 &&
    imageHeight.value > 0 &&
    block.width > 0 &&
    block.height > 0
  );
};

const getOcrBlockSeparator = (
  block: PinOcrTextBlock,
  nextBlock?: PinOcrTextBlock
): string => {
  if (!nextBlock) {
    return '\n\n';
  }

  const last = block.text.trim().slice(-1);
  const next = nextBlock.text.trim().slice(0, 1);
  const cjk = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/;
  return cjk.test(last) || cjk.test(next) ? '' : ' ';
};

const getOcrOverlayStyle = (block: OcrSelectableBlock): CSSProperties => {
  if (!hasBlockGeometry(block)) {
    return {};
  }

  const left = clampPercent((block.x / imageWidth.value) * 100);
  const top = clampPercent((block.y / imageHeight.value) * 100);
  const width = clampPercent((block.width / imageWidth.value) * 100, 1);
  const height = clampPercent((block.height / imageHeight.value) * 100, 1);
  const metrics = getOcrOverlayMetrics(block);

  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${width}%`,
    height: `${height}%`,
    fontSize: `${metrics.fontSize}px`,
    lineHeight: `${metrics.lineHeight}px`,
    letterSpacing: `${metrics.letterSpacing}px`
  };
};

const getOcrSelectionHighlightStyle = (
  highlight: OcrSelectionHighlight
): CSSProperties => {
  if (imageWidth.value <= 0 || imageHeight.value <= 0) {
    return {};
  }

  return {
    left: `${clampPercent((highlight.left / imageWidth.value) * 100)}%`,
    top: `${clampPercent((highlight.top / imageHeight.value) * 100)}%`,
    width: `${clampPercent((highlight.width / imageWidth.value) * 100)}%`,
    height: `${clampPercent((highlight.height / imageHeight.value) * 100)}%`
  };
};

const ocrOverlayMetricsCache = new Map<string, OcrOverlayMetrics>();
let ocrOverlayMeasureCanvas: HTMLCanvasElement | null = null;
const OCR_OVERLAY_FONT_FAMILY =
  '"Microsoft YaHei", "PingFang SC", "Segoe UI", Arial, sans-serif';

const getOcrOverlayMetrics = (block: OcrSelectableBlock): OcrOverlayMetrics => {
  const scale = getOcrPreviewImageScale();
  const text = block.text.trim();
  const cacheKey = `${block.id}:${text}:${scale.toFixed(4)}`;
  const cached = ocrOverlayMetricsCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const targetWidth = Math.max(block.width * scale, 1);
  const targetHeight = Math.max(block.height * scale, 1);
  let fontSize = clampNumber(
    Math.min(
      (block.fontSize || block.height * 0.8) * scale,
      targetHeight * 0.86
    ),
    5,
    28
  );
  const context = getOcrOverlayMeasureContext();
  context.font = `${fontSize}px ${OCR_OVERLAY_FONT_FAMILY}`;
  let measuredWidth = Math.max(context.measureText(text).width, 1);
  if (measuredWidth > targetWidth) {
    fontSize = Math.max(5, fontSize * (targetWidth / measuredWidth));
    context.font = `${fontSize}px ${OCR_OVERLAY_FONT_FAMILY}`;
    measuredWidth = Math.max(context.measureText(text).width, 1);
  }

  const letterSpacing =
    text.length > 0
      ? Math.max(0, (targetWidth - measuredWidth) / text.length)
      : 0;
  const boundaries = Array.from({ length: text.length + 1 }, (_, offset) => {
    if (offset === 0) return 0;
    context.font = `${fontSize}px ${OCR_OVERLAY_FONT_FAMILY}`;
    return (
      context.measureText(text.slice(0, offset)).width + letterSpacing * offset
    );
  });
  const renderedWidth = Math.max(boundaries[text.length] || measuredWidth, 1);
  const metrics = {
    fontSize,
    lineHeight: targetHeight,
    letterSpacing,
    boundaries,
    renderedWidth
  };
  ocrOverlayMetricsCache.set(cacheKey, metrics);
  return metrics;
};

const getOcrOverlayMeasureContext = (): CanvasRenderingContext2D => {
  ocrOverlayMeasureCanvas ||= document.createElement('canvas');
  const context = ocrOverlayMeasureCanvas.getContext('2d');
  if (!context) {
    throw new Error(t('pin.ocrMeasureFailed'));
  }
  return context;
};

const getOcrPreviewImageScale = (): number => {
  if (
    imageWidth.value <= 0 ||
    imageHeight.value <= 0 ||
    ocrPreviewImageSize.value.width <= 0 ||
    ocrPreviewImageSize.value.height <= 0
  ) {
    return 1;
  }
  return Math.min(
    ocrPreviewImageSize.value.width / imageWidth.value,
    ocrPreviewImageSize.value.height / imageHeight.value
  );
};

const updateOcrPreviewImageMetrics = () => {
  const imageElement = ocrPreviewImageRef.value;
  ocrOverlayMetricsCache.clear();
  if (!imageElement) {
    ocrPreviewImageSize.value = { width: 0, height: 0 };
    return;
  }

  ocrPreviewImageSize.value = {
    width: imageElement.clientWidth,
    height: imageElement.clientHeight
  };
};

const clampPercent = (value: number, min = 0): number => {
  if (!Number.isFinite(value)) return min;
  return Math.min(100, Math.max(min, value));
};

const clampNumber = (value: number, min: number, max: number): number => {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
};

const formatOcrFileName = () => {
  const date = new Date();
  const pad = (value: number) => value.toString().padStart(2, '0');
  return `${t('pin.screenshotPrefix')} ${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}.${pad(date.getMinutes())}.${pad(date.getSeconds())}.png`;
};

const contextMenuStyle = computed(() => {
  const minDimension = Math.min(
    windowSize.value.width,
    windowSize.value.height
  );
  let menuScale = 1;
  if (minDimension < 300) {
    menuScale = Math.max(0.4, minDimension / 300);
  }

  return {
    left: `${contextMenuPosition.value.x}px`,
    top: `${contextMenuPosition.value.y}px`,
    transform: `scale(${menuScale})`,
    transformOrigin: 'top left'
  };
});

interface PinWindowDataPayload {
  mode?: 'pin' | 'ocr';
  imageData?: string;
  text?: string;
  blocks?: unknown[];
}

const updateImageData = (base64Data: string) => {
  imageData.value = base64Data;
  imageWidth.value = 0;
  imageHeight.value = 0;
  ocrPreviewImageSize.value = { width: 0, height: 0 };
  clearOcrOverlaySelection();
  ocrOverlayMetricsCache.clear();
  initialWindowSize.value = { width: 0, height: 0 };
  if (mode.value === 'ocr') {
    ocrFileName.value = formatOcrFileName();
  }

  if (imageBlobUrl.value) {
    URL.revokeObjectURL(imageBlobUrl.value);
    imageBlobUrl.value = '';
  }

  try {
    const base64String = base64Data.split(',')[1] || base64Data;
    const mimeMatch = base64Data.match(/data:([^;]+);/);
    const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';

    const binaryString = atob(base64String);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: mimeType });
    imageBlobUrl.value = URL.createObjectURL(blob);
  } catch (error) {
    logger.error('[PIN窗口] 转换 Blob URL 失败', error);
    imageBlobUrl.value = base64Data;
  }
};

const notifyPinWindowReady = async () => {
  await nextTick();
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  try {
    await appWindow.value?.emit('pin-window-ready');
  } catch (error) {
    logger.error('[PIN窗口] 发送 ready 事件失败', error);
  }
};

const applyPinWindowData = (payload: PinWindowDataPayload): boolean => {
  if (!payload?.imageData) {
    logger.error('[PIN窗口] 收到的事件数据格式不正确', payload);
    return false;
  }

  const nextMode = payload.mode === 'ocr' ? 'ocr' : 'pin';
  const payloadKey = `${nextMode}:${payload.imageData.length}`;
  if (payloadKey === lastAppliedPayloadKey.value) {
    return false;
  }

  lastAppliedPayloadKey.value = payloadKey;
  mode.value = nextMode;
  updateImageData(payload.imageData);
  closeContextMenu();

  if (mode.value === 'ocr') {
    setOcrTextFromPlainText(payload.text || '');
    ocrError.value = '';
    recognizeCurrentImage();
  } else {
    ocrRequestId++;
    ocrLoading.value = false;
    ocrError.value = '';
    ocrText.value = '';
    ocrRecords.value = [];
    ocrGeometryRecords.value = [];
  }

  return true;
};

const recognizeCurrentImage = async () => {
  if (!imageData.value) return;

  const requestId = ++ocrRequestId;
  clearOcrOverlaySelection();
  ocrSelectionTranslation.value = null;
  ocrOverlayMetricsCache.clear();
  ocrLoading.value = true;
  ocrError.value = '';
  recognitionEngine.value = 'pending';
  recognitionModelName.value = '';
  const startedAt = Date.now();

  ocrDiagnosticLogger.log('[Pin AI OCR] recognize start', {
    requestId,
    imageDataLength: imageData.value.length,
    imageWidth: imageWidth.value,
    imageHeight: imageHeight.value,
    language: currentOcrLanguage.value
  });

  try {
    const aiResult = await recognizeImageWithLocalAi(
      imageData.value,
      currentOcrLanguage.value
    );

    if (requestId !== ocrRequestId) return;

    await ensureOcrSourceImageSize();
    const aiRecords = createOcrRecordsFromAiResult(aiResult);
    if (aiRecords.length === 0 && !aiResult.text.trim()) {
      throw new Error('AI_OCR_EMPTY_RESPONSE');
    }
    ocrRecords.value =
      aiRecords.length > 0
        ? aiRecords
        : createRecordsFromPlainText(aiResult.text);
    ocrGeometryRecords.value = aiRecords.filter(
      (record) => record.blocks.length > 0
    );
    syncOcrTextFromRecords();
    recognitionEngine.value = 'ai';
    recognitionModelName.value = aiResult.modelName;
    ocrOverlayMetricsCache.clear();
    ocrDiagnosticLogger.log('[Pin AI OCR] recognize success', {
      requestId,
      durationMs: Date.now() - startedAt,
      engine: recognitionEngine.value,
      geometryBlocks: ocrSelectableBlocks.value.length,
      textLength: ocrText.value.length,
      textPreview: ocrText.value.slice(0, 300)
    });
  } catch (error) {
    if (requestId !== ocrRequestId) return;
    logger.error('[PIN窗口] AI OCR 识别失败', error);
    ocrDiagnosticLogger.log('[Pin AI OCR] recognize failed', {
      requestId,
      durationMs: Date.now() - startedAt,
      error: formatErrorForLog(error)
    });
    ocrError.value = t('pin.recognizeFailed');
    ocrText.value = '';
    ocrRecords.value = [];
    ocrGeometryRecords.value = [];
    modal.error(t('pin.recognizeFailed'));
  } finally {
    if (requestId === ocrRequestId) {
      ocrLoading.value = false;
    }
  }
};

const setOcrTextFromPlainText = (text: string) => {
  const normalized = text.trim();
  ocrText.value = normalized;
  ocrRecords.value = createRecordsFromPlainText(normalized);
};

const createRecordsFromPlainText = (text: string): OcrRecord[] =>
  text
    .split(/\n{2,}|\n/)
    .map((paragraph, index) => createFallbackOcrRecord(paragraph, index))
    .filter((record) => record.text.trim());

const inferOcrSectionKind = (text: string, index: number): AiOcrSectionKind => {
  if (index === 0 && text.length <= 80 && !/[。！？.!?]\s*$/.test(text)) {
    return 'title';
  }
  if (/^\s*(?:[-*+•·]|\d+[.)、）])\s+/.test(text)) {
    return 'list';
  }
  return 'paragraph';
};

const createFallbackOcrRecord = (text: string, index: number): OcrRecord => ({
  id: `plain-${Date.now()}-${index}`,
  kind: inferOcrSectionKind(text, index),
  text: text.trim(),
  sourceText: text.trim(),
  translatedText: '',
  bbox: { x: 0, y: 0, width: 0, height: 0 },
  blocks: [],
  confidence: 0,
  selected: false
});

const aiCoordinateScale = 1000;

const ensureOcrSourceImageSize = async (): Promise<void> => {
  await nextTick();
  const image = ocrPreviewImageRef.value;
  if (!image || imageWidth.value > 0 || image.naturalWidth > 0) {
    if (image?.naturalWidth && image?.naturalHeight) {
      imageWidth.value = image.naturalWidth;
      imageHeight.value = image.naturalHeight;
    }
    return;
  }

  await new Promise<void>((resolve) => {
    const finish = () => {
      window.clearTimeout(timeout);
      image.removeEventListener('load', finish);
      image.removeEventListener('error', finish);
      if (image.naturalWidth > 0 && image.naturalHeight > 0) {
        imageWidth.value = image.naturalWidth;
        imageHeight.value = image.naturalHeight;
      }
      resolve();
    };
    const timeout = window.setTimeout(finish, 1500);
    image.addEventListener('load', finish, { once: true });
    image.addEventListener('error', finish, { once: true });
  });
};

const resolveOcrSourceSize = () => {
  const naturalWidth = ocrPreviewImageRef.value?.naturalWidth || 0;
  const naturalHeight = ocrPreviewImageRef.value?.naturalHeight || 0;
  if (imageWidth.value <= 0 && naturalWidth > 0) {
    imageWidth.value = naturalWidth;
  }
  if (imageHeight.value <= 0 && naturalHeight > 0) {
    imageHeight.value = naturalHeight;
  }
  return {
    width: imageWidth.value || naturalWidth || aiCoordinateScale,
    height: imageHeight.value || naturalHeight || aiCoordinateScale
  };
};

const mergeBlockBounds = (blocks: PinOcrTextBlock[]): Rect => {
  if (blocks.length === 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  const left = Math.min(...blocks.map((block) => block.x));
  const top = Math.min(...blocks.map((block) => block.y));
  const right = Math.max(...blocks.map((block) => block.x + block.width));
  const bottom = Math.max(...blocks.map((block) => block.y + block.height));
  return {
    x: left,
    y: top,
    width: Math.max(0, right - left),
    height: Math.max(0, bottom - top)
  };
};

const createOcrRecordsFromAiResult = (result: AiOcrResult): OcrRecord[] => {
  const sourceSize = resolveOcrSourceSize();
  const xScale = sourceSize.width / aiCoordinateScale;
  const yScale = sourceSize.height / aiCoordinateScale;
  const batchId = Date.now();

  return result.sections
    .map<OcrRecord>((section, index) => {
      const blocks = (section.lines || []).map<PinOcrTextBlock>((line) => {
        const height = line.bbox.height * yScale;
        return {
          text: line.text.trim(),
          x: line.bbox.x * xScale,
          y: line.bbox.y * yScale,
          width: line.bbox.width * xScale,
          height,
          fontSize: Math.max(1, height * 0.72),
          lineHeight: Math.max(1, height),
          angle: 0,
          isCodeBlock: section.type === 'code',
          confidence: 0
        };
      });
      return {
        id: `ai-${batchId}-${index}`,
        kind: section.type,
        text: section.text.trim(),
        sourceText: section.text.trim(),
        translatedText: '',
        bbox: mergeBlockBounds(blocks),
        blocks,
        confidence: 0,
        selected: false
      };
    })
    .filter((record) => record.text);
};

const formatErrorForLog = (error: unknown): string => {
  if (error instanceof Error) {
    return `${error.name}: ${error.message}\n${error.stack || ''}`.trim();
  }
  return typeof error === 'string'
    ? error
    : JSON.stringify(error) || String(error);
};

const handleCopyOcrText = async () => {
  const text = getCopyCandidateText();
  if (!text) return;

  await copyOcrTextToClipboard(text);
};

const copyOcrTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    modal.success(t('pin.copySuccess'));
  } catch (error) {
    logger.error('[PIN窗口] 复制识别文本失败', error);
    modal.error(t('pin.copyFailed'));
  } finally {
    closeContextMenu();
  }
};

const handleSaveOcrText = async () => {
  syncOcrTextFromRecords();
  const text = ocrText.value.trim();
  if (!text) return;

  try {
    await invoke('save_text_to_file', { text });
    modal.success(t('pin.saveSuccess'));
  } catch (error: any) {
    if (error !== 'SAVE_CANCELLED') {
      logger.error('[PIN窗口] 保存文本失败', error);
      modal.error(t('pin.saveFailed'));
    }
  }
};

const getCopyCandidateText = (): string => {
  const selectedText = getSelectedTextInsideOcrSurface();
  if (selectedText) {
    return selectedText;
  }

  if (selectedOcrOverlayText.value) {
    return selectedOcrOverlayText.value;
  }

  const selectedRecordsText = buildDisplayTextFromRecords(
    selectedOcrRecords.value
  );
  if (selectedRecordsText) {
    return selectedRecordsText;
  }

  syncOcrTextFromRecords();
  return ocrText.value.trim();
};

const getSelectedTextInsideOcrSurface = (): string => {
  const selection = window.getSelection();
  const surface = containerRef.value?.querySelector('.ocr-reading-surface');
  if (!selection || selection.rangeCount === 0 || !surface) {
    return '';
  }

  for (let index = 0; index < selection.rangeCount; index += 1) {
    const range = selection.getRangeAt(index);
    const ancestor = range.commonAncestorContainer;
    if (surface.contains(ancestor)) {
      return selection.toString().trim();
    }
  }

  return '';
};

const toggleOcrRecordSelection = (recordId: string) => {
  const record = ocrRecords.value.find((item) => item.id === recordId);
  if (record) {
    record.selected = !record.selected;
  }
};

const handleSelectionTranslationInput = (event: Event) => {
  const target = event.target as HTMLElement | null;
  if (!target || !ocrSelectionTranslation.value) {
    return;
  }

  ocrSelectionTranslation.value.translatedText = target.innerText.trim();
};

const toggleTranslateMenu = async () => {
  showTranslateMenu.value = !showTranslateMenu.value;
  showOcrLanguageMenu.value = false;
  if (showTranslateMenu.value) {
    await nextTick();
    updateFloatingMenuStyles();
  }
};

const selectTranslateEngine = (engine: TranslateEngine) => {
  currentTranslateEngine.value = engine;
  showTranslateMenu.value = false;
  // 将用户选择保存到后端或本地（可选，这里先简单调用）
  invoke('set_translation_engine', { engine }).catch((err) => {
    logger.error('[PIN窗口] 保存翻译引擎设置失败', err);
  });
};

const toggleOcrLanguageMenu = async () => {
  showOcrLanguageMenu.value = !showOcrLanguageMenu.value;
  showTranslateMenu.value = false;
  if (showOcrLanguageMenu.value) {
    await nextTick();
    updateFloatingMenuStyles();
  }
};

const selectOcrLanguage = (language: OcrLanguageValue) => {
  currentOcrLanguage.value = language;
  showOcrLanguageMenu.value = false;
  invoke('set_ocr_language', { language }).catch((err) => {
    logger.error('[PIN窗口] 保存 OCR 语言设置失败', err);
  });
  if (imageData.value) {
    recognizeCurrentImage();
  }
};

const handleTranslateOcr = async () => {
  closeContextMenu();
  showTranslateMenu.value = false;
  showOcrLanguageMenu.value = false;

  if (!ocrText.value.trim() || isTranslating.value) return;

  const selectedSourceText = selectedOcrOverlayText.value.trim();
  const recordsToTranslate = selectedSourceText
    ? []
    : selectedOcrRecords.value.length > 0
      ? selectedOcrRecords.value
      : ocrRecords.value;
  const sourceText =
    selectedSourceText ||
    (recordsToTranslate.length > 0
      ? recordsToTranslate.map((record) => record.text).join('\n\n')
      : ocrText.value);
  const sourceLanguage = detectTranslationLanguage(sourceText);
  if (!canTranslateDetectedLanguage(sourceLanguage)) {
    modal.warning(t('pin.unsupportedTranslateLanguage'));
    return;
  }

  isTranslating.value = true;

  try {
    await ensureOfflineTranslatorReadyIfNeeded();

    if (selectedSourceText) {
      const translatedText = await translateOcrText(
        selectedSourceText,
        sourceLanguage
      );
      if (translatedText) {
        ocrSelectionTranslation.value = {
          sourceText: selectedSourceText,
          translatedText: translatedText.trim()
        };
      }
      modal.success(t('pin.translateSuccess'));
    } else if (recordsToTranslate.length > 0) {
      for (const record of recordsToTranslate) {
        const translatedText = await translateOcrText(
          record.text,
          sourceLanguage
        );
        if (translatedText) {
          record.translatedText = translatedText.trim();
        }
      }
      syncOcrTextFromRecords();
      modal.success(t('pin.translateSuccess'));
    } else {
      const translatedText = await translateOcrText(
        ocrText.value,
        sourceLanguage
      );
      if (translatedText) {
        setOcrTextFromPlainText(translatedText);
      }
      modal.success(t('pin.translateSuccess'));
    }
  } catch (error: any) {
    logger.error('[PIN窗口] 翻译失败', error);
    const errMsg = error instanceof Error ? error.message : String(error);
    if (errMsg !== '翻译已取消') {
      const friendlyErrors = [
        t('pin.offlineModelNotDownloaded'),
        t('pin.offlineModelNotActivated')
      ];
      modal.error(
        friendlyErrors.includes(errMsg) ? errMsg : t('pin.translateFailed')
      );
    }
  } finally {
    isTranslating.value = false;
  }
};

const ensureOfflineTranslatorReadyIfNeeded = async () => {
  if (currentTranslateEngine.value !== 'offline') {
    return;
  }

  const cacheInfo = await getModelCacheInfo();
  if (cacheInfo.isCached) {
    await warmupOfflineTranslator();
  } else {
    throw new Error(t('pin.offlineModelNotDownloaded'));
  }

  const backendActivated = await invoke<boolean>('get_offline_model_activated');
  if (!backendActivated) {
    throw new Error(t('pin.offlineModelNotActivated'));
  }
};

const translateOcrText = async (
  text: string,
  sourceLanguage: ReturnType<typeof detectTranslationLanguage>
): Promise<string> => {
  const source = text.trim();
  if (!source) {
    return '';
  }

  if (currentTranslateEngine.value === 'offline') {
    return translateOffline(source);
  }

  return (await invoke('translate_text', {
    text: source,
    from: 'auto',
    to: sourceLanguage === 'zh' ? 'en' : 'zh',
    engine: currentTranslateEngine.value
  })) as string;
};

const handleMoreActions = (event: MouseEvent) => {
  handleContextMenu(event);
};

const handleMinimize = async () => {
  if (!appWindow.value) return;
  const windowRef = appWindow.value as any;
  if (typeof windowRef.minimize === 'function') {
    await windowRef.minimize();
  }
};

const handleToggleMaximize = async () => {
  if (!appWindow.value) return;
  const windowRef = appWindow.value as any;
  const isMaximized =
    typeof windowRef.isMaximized === 'function'
      ? await windowRef.isMaximized()
      : false;

  if (isMaximized && typeof windowRef.unmaximize === 'function') {
    await windowRef.unmaximize();
  } else if (typeof windowRef.maximize === 'function') {
    await windowRef.maximize();
  }
};

const handleImageLoad = async (event: Event) => {
  const img = event.target as HTMLImageElement;
  imageWidth.value = img.naturalWidth;
  imageHeight.value = img.naturalHeight;
  if (img === ocrPreviewImageRef.value) {
    updateOcrPreviewImageMetrics();
  }

  if (appWindow.value && initialWindowSize.value.width === 0) {
    try {
      const currentSizeRaw = await appWindow.value.innerSize();
      const scaleFactor = await appWindow.value.scaleFactor();
      const logicalSize = currentSizeRaw.toLogical(scaleFactor);
      initialWindowSize.value = {
        width: logicalSize.width,
        height: logicalSize.height
      };
    } catch (error) {
      logger.error('[PIN窗口] 获取窗口初始尺寸失败', error);
    }
  }
};

const handleWheel = async (event: WheelEvent) => {
  if (!event.ctrlKey) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  if (isResizing.value) {
    return;
  }

  if (appWindow.value) {
    isResizing.value = true;

    try {
      const currentSizeRaw = await appWindow.value.innerSize();
      const currentSize = currentSizeRaw.toLogical(
        await appWindow.value.scaleFactor()
      );
      const scaleFactor = event.deltaY > 0 ? 0.95 : 1.05;

      const currentWidth = currentSize.width;
      const currentHeight = currentSize.height;
      const newWidth = Math.round(currentWidth * scaleFactor);
      const newHeight = Math.round(currentHeight * scaleFactor);

      const minSize = 50;
      const maxSize = 3000;

      if (
        newWidth >= minSize &&
        newWidth <= maxSize &&
        newHeight >= minSize &&
        newHeight <= maxSize
      ) {
        await appWindow.value.setSize(new LogicalSize(newWidth, newHeight));

        if (imageWidth.value > 0) {
          const scalePercentage = Math.round(
            (newWidth / imageWidth.value) * 100
          );
          scale.value = scalePercentage / 100;
        }

        showZoomInfo.value = true;
        showZoomIndicator();
      }
    } catch (error) {
      logger.error('[PIN窗口] 窗口缩放失败', error);
    } finally {
      setTimeout(() => {
        isResizing.value = false;
      }, 100);
    }
  }
};

const handleContainerWheel = (event: WheelEvent) => {
  if (mode.value === 'ocr' && event.ctrlKey) {
    handleWheel(event);
  }
};

const showZoomIndicator = () => {
  showZoomInfo.value = true;

  if (zoomInfoTimer) {
    clearTimeout(zoomInfoTimer);
  }

  zoomInfoTimer = setTimeout(() => {
    showZoomInfo.value = false;
  }, 1000);
};

const handleContextMenu = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
  showContextMenu.value = false;

  setTimeout(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    windowSize.value = { width: windowWidth, height: windowHeight };

    const minDimension = Math.min(windowWidth, windowHeight);
    let menuScale = 1;
    if (minDimension < 300) {
      menuScale = Math.max(0.4, minDimension / 300);
    }
    const baseMenuWidth = mode.value === 'ocr' ? 176 : 150;
    const baseMenuHeight =
      mode.value === 'ocr' && ocrText.value.trim() ? 222 : 180;
    const menuWidth = baseMenuWidth * menuScale;
    const menuHeight = baseMenuHeight * menuScale;

    let x = event.clientX;
    let y = event.clientY;

    if (x + menuWidth > windowWidth) {
      x = windowWidth - menuWidth - 5;
    }

    if (y + menuHeight > windowHeight) {
      y = windowHeight - menuHeight - 5;
    }

    x = Math.max(5, x);
    y = Math.max(5, y);

    contextMenuPosition.value = { x, y };
    showContextMenu.value = true;
  }, 10);
};

const closeContextMenu = () => {
  showContextMenu.value = false;
  showTranslateMenu.value = false;
  showOcrLanguageMenu.value = false;
};

// 切换置顶状态
const handleToggleAlwaysOnTop = async () => {
  if (!appWindow.value) return;

  isAlwaysOnTop.value = !isAlwaysOnTop.value;
  await appWindow.value.setAlwaysOnTop(isAlwaysOnTop.value);
  closeContextMenu();
};

const scaleWindowByKeyboard = async (factor: number) => {
  if (appWindow.value && !isResizing.value) {
    isResizing.value = true;
    try {
      const currentSizeRaw = await appWindow.value.innerSize();
      const currentSize = currentSizeRaw.toLogical(
        await appWindow.value.scaleFactor()
      );
      const newWidth = Math.round(currentSize.width * factor);
      const newHeight = Math.round(currentSize.height * factor);

      const minSize = 50;
      const maxSize = 3000;

      if (
        newWidth >= minSize &&
        newWidth <= maxSize &&
        newHeight >= minSize &&
        newHeight <= maxSize
      ) {
        await appWindow.value.setSize(new LogicalSize(newWidth, newHeight));

        if (imageWidth.value > 0) {
          scale.value = newWidth / imageWidth.value;
        }

        showZoomIndicator();
      }
    } catch (error) {
      logger.error('[PIN窗口] 键盘缩放失败', error);
    } finally {
      setTimeout(() => {
        isResizing.value = false;
      }, 100);
    }
  }
};

const handleResetZoom = async () => {
  if (
    appWindow.value &&
    initialWindowSize.value.width > 0 &&
    initialWindowSize.value.height > 0
  ) {
    try {
      await appWindow.value.setSize(
        new LogicalSize(
          initialWindowSize.value.width,
          initialWindowSize.value.height
        )
      );
      scale.value = 1;
      showZoomIndicator();
    } catch (error) {
      logger.error('[PIN窗口] 重置缩放失败', error);
    }
  }
  closeContextMenu();
};

const handleCopyImage = async () => {
  try {
    const imageDataToSave = imageData.value;
    closeContextMenu();

    if (appWindow.value) {
      await appWindow.value.hide();
    }

    await invoke('copy_image_to_clipboard', { imageData: imageDataToSave });

    modal.success(t('pin.copySuccess'));
    if (appWindow.value) {
      await appWindow.value.close();
    }
  } catch (error) {
    logger.error('[PIN窗口] 复制图片失败', error);
    modal.error(t('pin.copyFailed'));
    if (appWindow.value) {
      await appWindow.value.close();
    }
  }
};

const handleSaveImage = async () => {
  const imageDataToSave = imageData.value;
  closeContextMenu();

  if (appWindow.value) {
    await appWindow.value.hide();
  }

  try {
    await invoke('save_pin_image', { imageData: imageDataToSave });

    modal.success(t('pin.saveSuccess'));
    // 保存成功，关闭窗口
    if (appWindow.value) {
      await appWindow.value.close();
    }
  } catch (error: any) {
    // 检查是否是用户取消保存
    if (error === 'SAVE_CANCELLED') {
      logger.info('[PIN窗口] 用户取消保存，恢复窗口显示');
      // 用户取消保存，恢复窗口显示
      if (appWindow.value) {
        await appWindow.value.show();
      }
    } else {
      // 真正的保存失败，关闭窗口
      logger.error('[PIN窗口] 保存图片失败', error);
      modal.error(t('pin.saveFailed'));
      if (appWindow.value) {
        await appWindow.value.close();
      }
    }
  }
};

const handleClose = async () => {
  if (appWindow.value) {
    await appWindow.value.close();
  }
};

const globalContextMenuHandler = (e: MouseEvent) => {
  e.preventDefault();
};

const handleMouseDown = async (event: MouseEvent) => {
  // 只响应左键，并且只在拖拽区域（data-tauri-drag-region）上响应
  if (event.button === 0 && appWindow.value) {
    const target = event.target as HTMLElement;
    // 检查是否点击在拖拽区域或者是拖拽区域的子元素（如果有 data-tauri-drag-region 属性）
    if (
      target.hasAttribute('data-tauri-drag-region') ||
      target.closest('[data-tauri-drag-region]')
    ) {
      // 防止对按钮等交互元素的误判
      if (target.closest('button') || target.closest('.ocr-view-original')) {
        return;
      }
      try {
        await appWindow.value.startDragging();
      } catch (error) {
        logger.error('[PIN窗口] 拖拽窗口失败', error);
      }
    }
  }
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (
    !target.closest('.context-menu') &&
    !target.closest('.ocr-engine-btn-group') &&
    !target.closest('.translate-btn-group') &&
    !target.closest('.ocr-floating-menu')
  ) {
    closeContextMenu();
  }
};

const scrollSynchronizedResultIntoView = async () => {
  await nextTick();
  ocrResultScrollRef.value
    ?.querySelector<HTMLElement>('.ocr-sync-highlight')
    ?.scrollIntoView({ block: 'nearest' });
};

const handleOcrOverlayPointerDown = (event: PointerEvent) => {
  if (event.button !== 0) {
    return;
  }

  const overlay = event.currentTarget as HTMLElement;
  const point = getOcrSelectionPointAtPosition(
    overlay,
    event.clientX,
    event.clientY,
    false
  );
  window.getSelection()?.removeAllRanges();
  if (!point) {
    clearOcrOverlaySelection();
    return;
  }

  event.preventDefault();
  overlay.setPointerCapture(event.pointerId);
  ocrOverlayPointerId = event.pointerId;
  ocrOverlayPointerStart = { x: event.clientX, y: event.clientY };
  isSelectingOcrOverlay.value = true;
  hoveredOcrBlockIndex.value = point.blockIndex;
  ocrOverlaySelection.value = {
    anchor: point,
    focus: point
  };
};

const handleOcrOverlayPointerMove = (event: PointerEvent) => {
  const overlay = event.currentTarget as HTMLElement;
  const point = getOcrSelectionPointAtPosition(
    overlay,
    event.clientX,
    event.clientY,
    isSelectingOcrOverlay.value
  );
  hoveredOcrBlockIndex.value = point?.blockIndex ?? null;

  if (!isSelectingOcrOverlay.value || event.pointerId !== ocrOverlayPointerId) {
    return;
  }

  if (!point || !ocrOverlaySelection.value) {
    return;
  }

  event.preventDefault();
  ocrOverlaySelection.value = {
    anchor: ocrOverlaySelection.value.anchor,
    focus: point
  };
};

const handleOcrOverlayPointerUp = (event: PointerEvent) => {
  if (event.pointerId !== ocrOverlayPointerId) {
    return;
  }

  handleOcrOverlayPointerMove(event);
  const overlay = event.currentTarget as HTMLElement;
  if (overlay.hasPointerCapture(event.pointerId)) {
    overlay.releasePointerCapture(event.pointerId);
  }

  const pointerStart = ocrOverlayPointerStart;
  const point = getOcrSelectionPointAtPosition(
    overlay,
    event.clientX,
    event.clientY,
    true
  );
  if (
    pointerStart &&
    point &&
    Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) <
      4
  ) {
    const block = ocrSelectableBlocks.value[point.blockIndex];
    if (block) {
      ocrOverlaySelection.value = {
        anchor: { blockIndex: point.blockIndex, offset: 0 },
        focus: { blockIndex: point.blockIndex, offset: block.text.length }
      };
    }
  }

  isSelectingOcrOverlay.value = false;
  ocrOverlayPointerId = null;
  ocrOverlayPointerStart = null;
  void scrollSynchronizedResultIntoView();
};

const handleOcrOverlayPointerCancel = (event: PointerEvent) => {
  if (event.pointerId !== ocrOverlayPointerId) {
    return;
  }
  isSelectingOcrOverlay.value = false;
  ocrOverlayPointerId = null;
  ocrOverlayPointerStart = null;
};

const handleOcrOverlayPointerLeave = () => {
  if (!isSelectingOcrOverlay.value) {
    hoveredOcrBlockIndex.value = null;
  }
};

const clearOcrOverlaySelection = () => {
  ocrOverlaySelection.value = null;
  isSelectingOcrOverlay.value = false;
  hoveredOcrBlockIndex.value = null;
  ocrOverlayPointerId = null;
  ocrOverlayPointerStart = null;
};

const selectAllOcrOverlayText = () => {
  const lastBlockIndex = ocrSelectableBlocks.value.length - 1;
  if (lastBlockIndex < 0) {
    return;
  }

  window.getSelection()?.removeAllRanges();
  ocrOverlaySelection.value = {
    anchor: { blockIndex: 0, offset: 0 },
    focus: {
      blockIndex: lastBlockIndex,
      offset: ocrSelectableBlocks.value[lastBlockIndex].text.length
    }
  };
};

const getOcrSelectionPointAtPosition = (
  overlay: HTMLElement,
  clientX: number,
  clientY: number,
  allowNearest: boolean
) => {
  const elements = Array.from(
    overlay.querySelectorAll<HTMLElement>(
      '.ocr-overlay-block[data-selection-index]'
    )
  );
  const boxes = elements.map((element) => {
    const rect = element.getBoundingClientRect();
    return {
      blockIndex: Number(element.dataset.selectionIndex),
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom
    };
  });
  const hit = findNearestOcrSelectionHit(
    boxes,
    clientX,
    clientY,
    allowNearest ? Number.POSITIVE_INFINITY : 14
  );
  if (!hit) {
    return null;
  }

  const element = elements.find(
    (candidate) => Number(candidate.dataset.selectionIndex) === hit.blockIndex
  );
  const block = ocrSelectableBlocks.value[hit.blockIndex];
  if (!element || !block) {
    return null;
  }

  const rect = element.getBoundingClientRect();
  const metrics = getOcrOverlayMetrics(block);
  const xRatio = clampNumber(
    (clientX - rect.left) / Math.max(rect.width, 1),
    0,
    1
  );
  const targetWidth = xRatio * metrics.renderedWidth;
  return {
    blockIndex: hit.blockIndex,
    offset: findNearestOcrCharacterOffset(metrics.boundaries, targetWidth)
  };
};

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.altKey && event.code === 'Space') {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  if (event.key === 'Escape') {
    if (showContextMenu.value) {
      closeContextMenu();
    } else {
      handleClose();
    }
  } else if (event.ctrlKey || event.metaKey) {
    const target = event.target as HTMLElement | null;
    const isEditingText = Boolean(
      target?.closest(
        'input, textarea, [contenteditable="true"], [contenteditable="plaintext-only"]'
      )
    );
    if (
      event.key.toLowerCase() === 'c' &&
      mode.value === 'ocr' &&
      selectedOcrOverlayText.value &&
      !isEditingText
    ) {
      event.preventDefault();
      void handleCopyOcrText();
    } else if (
      event.key.toLowerCase() === 'a' &&
      mode.value === 'ocr' &&
      ocrSelectableBlocks.value.length > 0 &&
      !isEditingText
    ) {
      event.preventDefault();
      selectAllOcrOverlayText();
    } else if (event.key === '0') {
      // Ctrl/Cmd + 0 重置缩放到原始尺寸
      event.preventDefault();
      handleResetZoom();
    } else if (event.key === '=' || event.key === '+') {
      // Ctrl/Cmd + + 放大（增加 5%）
      event.preventDefault();
      scaleWindowByKeyboard(1.05);
    } else if (event.key === '-') {
      // Ctrl/Cmd + - 缩小（减少 5%）
      event.preventDefault();
      scaleWindowByKeyboard(0.95);
    }
  }
};

const hydratePinWindowData = async () => {
  if (!appWindow.value) return;

  try {
    const payload = await invoke<PinWindowDataPayload | null>(
      'get_pin_window_data',
      { label: appWindow.value.label }
    );
    if (payload) {
      const applied = applyPinWindowData(payload);
      if (applied) {
        await notifyPinWindowReady();
      }
    }
  } catch (error) {
    logger.error('[PIN窗口] 主动获取窗口数据失败', error);
  }
};

watch(
  ocrPreviewImageRef,
  (imageElement) => {
    ocrPreviewResizeObserver?.disconnect();
    ocrPreviewResizeObserver = null;

    if (!imageElement) {
      ocrPreviewImageSize.value = { width: 0, height: 0 };
      return;
    }

    updateOcrPreviewImageMetrics();
    ocrPreviewResizeObserver = new ResizeObserver(updateOcrPreviewImageMetrics);
    ocrPreviewResizeObserver.observe(imageElement);
  },
  { flush: 'post' }
);

onMounted(async () => {
  if (!containerRef.value) {
    return;
  }

  try {
    const [translationEngine, ocrLanguage] = await Promise.all([
      invoke<string>('get_translation_engine'),
      invoke<string>('get_ocr_language')
    ]);

    if (
      translationEngine === 'google' ||
      translationEngine === 'bing' ||
      translationEngine === 'offline' ||
      translationEngine === 'local-ai'
    ) {
      currentTranslateEngine.value = translationEngine;
    }
    currentOcrLanguage.value = normalizeOcrLanguage(ocrLanguage);
  } catch (error) {
    logger.error('[PIN窗口] 读取默认 OCR/翻译设置失败', error);
  }

  try {
    appWindow.value = Window.getCurrent();

    try {
      unlistenImageData = await appWindow.value.listen(
        'pin-window-data',
        (event: any) => {
          const applied = applyPinWindowData(event.payload);
          if (applied) {
            void notifyPinWindowReady();
          }
        }
      );
      await hydratePinWindowData();
    } catch (error) {
      logger.error('[PIN窗口] 设置事件监听失败', error);
    }
  } catch (error) {
    logger.error('[PIN窗口] 初始化错误', error);
    if (appWindow.value) {
      try {
        await appWindow.value.show();
      } catch (showError) {
        logger.error('[PIN窗口] 显示窗口失败', showError);
      }
    }
  }

  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeydown, true);
  document.addEventListener('contextmenu', globalContextMenuHandler, true);
  window.addEventListener('resize', updateFloatingMenuStyles);
  window.addEventListener('scroll', updateFloatingMenuStyles, true);
  window.addEventListener('blur', closeContextMenu);

  if (document.body) {
    document.body.oncontextmenu = (e) => {
      e.preventDefault();
      return false;
    };
  }
});

onUnmounted(() => {
  if (imageBlobUrl.value) {
    URL.revokeObjectURL(imageBlobUrl.value);
  }

  if (unlistenImageData) {
    unlistenImageData();
  }

  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeydown, true);
  document.removeEventListener('contextmenu', globalContextMenuHandler, true);
  window.removeEventListener('resize', updateFloatingMenuStyles);
  window.removeEventListener('scroll', updateFloatingMenuStyles, true);
  window.removeEventListener('blur', closeContextMenu);
  ocrPreviewResizeObserver?.disconnect();
  ocrPreviewResizeObserver = null;

  if (document.body) {
    document.body.oncontextmenu = null;
  }

  if (zoomInfoTimer) {
    clearTimeout(zoomInfoTimer);
  }
});
</script>

<style scoped lang="scss">
.pin-container {
  @apply w-full h-full relative overflow-hidden select-none;

  --primary-color: var(--el-color-primary);

  user-select: none;

  &.ocr-mode {
    @apply flex flex-col;

    background: transparent;
  }

  .image-wrapper {
    @apply relative z-10;
    @apply w-full h-full;

    img {
      @apply block select-none;

      user-select: none;
      -webkit-user-drag: none;
    }
  }

  // AI OCR workspace: compact source metadata, selectable image, structured result.
  .ocr-shell {
    @apply flex flex-1 flex-col min-h-0 overflow-hidden bg-ocr-shell text-ocr border border-ocr;

    backdrop-filter: blur(16px);
    border-radius: 12px;

    .ocr-header {
      @apply flex flex-shrink-0 flex-col;

      border-bottom: 1px solid
        color-mix(in srgb, var(--ocr-border) 72%, transparent);

      .ocr-titlebar {
        @apply flex items-center justify-between;

        gap: 12px;
        height: 54px;
        padding: 7px 10px 7px 14px;
      }

      .ocr-title-copy {
        @apply flex min-w-0 flex-1 items-center;

        gap: 12px;
      }

      .ocr-window-title {
        @apply flex items-center text-ocr;

        flex: 0 0 auto;
        gap: 8px;
        font-size: 14px;
        font-weight: 650;
      }

      .ocr-source-inline {
        @apply flex min-w-0 items-center text-ocr-muted;

        gap: 5px;
        font-size: 11px;
        line-height: 1;

        .ocr-source-name {
          @apply truncate;

          max-width: min(32vw, 240px);
        }

        .ocr-meta-dot {
          opacity: 0.72;
        }
      }

      .ocr-title-actions {
        @apply flex flex-shrink-0 items-center;

        gap: 10px;
      }

      .ocr-engine-status {
        @apply flex items-center rounded-full;

        gap: 5px;
        max-width: 180px;
        height: 26px;
        padding: 0 9px;
        font-size: 11px;
        font-weight: 650;
        color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 10%, transparent);
        border: 1px solid
          color-mix(in srgb, var(--primary-color) 22%, transparent);

        span {
          @apply truncate;
        }

        .ocr-loading-icon {
          flex: 0 0 auto;
          animation: spin 0.8s linear infinite;
        }
      }

      .ocr-window-controls {
        @apply flex flex-shrink-0 items-center text-ocr;

        gap: 6px;

        .ocr-window-divider {
          width: 1px;
          height: 16px;
          margin: 0 1px;
          background: var(--ocr-border);
        }

        .ocr-window-btn {
          @apply flex items-center justify-center rounded-md transition-colors duration-150;

          width: 24px;
          height: 24px;

          &:hover {
            @apply bg-ocr-panel-hover;
          }
        }
      }
    }

    .ocr-reading-surface {
      @apply relative flex-1 min-h-0 overflow-hidden;

      padding: 10px 10px 0;
      margin-top: 0;
      background: transparent;
      border: 0;
      border-radius: 0;
      box-shadow: none;

      .ocr-result-layout {
        gap: 10px;
        height: 100%;

        :deep(.splitter-divider) {
          top: 0;
          width: 10px;
          height: 100%;
          background: transparent;
        }

        :deep(.splitter-divider-line) {
          left: 5px;
          width: 2px;
          height: 28px;
          background: color-mix(in srgb, var(--ocr-border) 88%, transparent);
          border-radius: 999px;
          transition:
            height 0.15s ease,
            background-color 0.15s ease;
        }

        :deep(.splitter-divider:hover .splitter-divider-line) {
          height: 44px;
          background: var(--primary-color);
        }
      }

      .ocr-preview-pane,
      .ocr-record-pane {
        @apply min-h-0 overflow-hidden bg-ocr-panel border border-ocr;

        width: 100%;
        height: 100%;
        padding: 0;
        border-radius: 9px;
        box-shadow: var(--ocr-panel-shadow);
      }

      .ocr-preview-pane {
        @apply flex flex-col;

        position: relative;
        background: color-mix(
          in srgb,
          var(--ocr-panel-bg) 92%,
          var(--ocr-shell-bg)
        );
      }

      .ocr-pane-header {
        @apply flex flex-shrink-0 items-center justify-between;

        gap: 10px;
        min-height: 51px;
        padding: 9px 12px;
        border-bottom: 1px solid
          color-mix(in srgb, var(--ocr-border) 64%, transparent);

        .ocr-pane-heading {
          @apply flex min-w-0 flex-col;

          gap: 3px;
        }

        strong {
          font-size: 12px;
          font-weight: 650;
          color: var(--ocr-text);
        }

        span {
          font-size: 10px;
          line-height: 1.3;
          color: var(--ocr-text-muted);
        }
      }

      .ocr-pane-header-actions {
        @apply flex flex-shrink-0 items-center;

        gap: 5px;
      }

      .ocr-panel-toggle {
        @apply flex flex-shrink-0 items-center justify-center rounded-md text-ocr-secondary;

        gap: 4px;
        height: 27px;
        padding: 0 7px;
        font-size: 10px;
        background: color-mix(
          in srgb,
          var(--ocr-panel-hover-bg) 55%,
          transparent
        );
        border: 1px solid color-mix(in srgb, var(--ocr-border) 72%, transparent);

        &:hover {
          color: var(--primary-color);
          background: color-mix(
            in srgb,
            var(--primary-color) 8%,
            var(--ocr-panel-bg)
          );
          border-color: color-mix(
            in srgb,
            var(--primary-color) 28%,
            var(--ocr-border)
          );
        }

        &.icon-only {
          width: 27px;
          padding: 0;
        }
      }

      .ocr-ready-badge {
        @apply flex-shrink-0 rounded-full;

        padding: 3px 7px;
        font-weight: 600;
        color: var(--el-color-success) !important;
        background: color-mix(
          in srgb,
          var(--el-color-success) 10%,
          transparent
        );
        border: 1px solid
          color-mix(in srgb, var(--el-color-success) 22%, transparent);
      }

      .ocr-preview-canvas {
        @apply flex min-h-0 flex-1 items-center justify-center overflow-hidden;

        padding: 12px;
        background:
          linear-gradient(
              135deg,
              color-mix(in srgb, var(--ocr-border) 17%, transparent) 25%,
              transparent 25%
            )
            0 0 / 16px 16px,
          linear-gradient(
              315deg,
              color-mix(in srgb, var(--ocr-border) 17%, transparent) 25%,
              transparent 25%
            )
            0 0 / 16px 16px;
      }

      .ocr-preview-stage {
        position: relative;
        width: fit-content;
        max-width: 100%;
        margin: auto;

        img {
          display: block;
          max-width: 100%;
          max-height: calc(100vh - 194px);
          user-select: none;
          border-radius: 5px;
          box-shadow: 0 8px 24px
            color-mix(in srgb, var(--ocr-text) 12%, transparent);
        }
      }

      .ocr-text-overlay,
      .ocr-selection-highlight-layer {
        position: absolute;
        inset: 0;
      }

      .ocr-text-overlay {
        touch-action: none;
        cursor: text;
        user-select: none;
      }

      .ocr-selection-highlight-layer {
        pointer-events: none;
      }

      .ocr-selection-highlight {
        position: absolute;
        box-sizing: border-box;
        display: block;
        background: color-mix(in srgb, var(--primary-color) 34%, transparent);
        border: 1px solid
          color-mix(in srgb, var(--primary-color) 92%, transparent);
        border-radius: 2px;
        box-shadow:
          0 0 0 1px rgb(255 255 255 / 72%),
          0 0 0 2px color-mix(in srgb, var(--primary-color) 68%, transparent);
      }

      .ocr-overlay-block {
        position: absolute;
        box-sizing: border-box;
        display: block;
        padding: 0;
        overflow: visible;
        font-family: 'Microsoft YaHei', 'PingFang SC', 'Segoe UI', Arial,
          sans-serif;
        color: transparent;
        white-space: nowrap;
        pointer-events: none;
        cursor: text;
        user-select: none;
        background: color-mix(in srgb, var(--primary-color) 3%, transparent);
        border: 1px solid
          color-mix(in srgb, var(--primary-color) 24%, transparent);
        border-radius: 2px;
        transition:
          background-color 0.12s ease,
          border-color 0.12s ease,
          box-shadow 0.12s ease;

        &.hovered {
          background: color-mix(in srgb, var(--primary-color) 10%, transparent);
          border-color: color-mix(
            in srgb,
            var(--primary-color) 68%,
            transparent
          );
          box-shadow: 0 0 0 1px
            color-mix(in srgb, var(--primary-color) 15%, transparent);
        }

        &.selected {
          background: color-mix(in srgb, var(--primary-color) 12%, transparent);
          border-color: color-mix(
            in srgb,
            var(--primary-color) 84%,
            transparent
          );
        }
      }

      .ocr-record-pane {
        @apply flex flex-col;

        gap: 0;
      }

      .result-header {
        padding-left: 15px;
      }

      .ocr-inline-copy {
        @apply flex flex-shrink-0 items-center text-ocr-secondary;

        gap: 5px;
        height: 30px;
        padding: 0 9px;
        font-size: 10px;
        border-radius: 6px;

        &:hover:not(:disabled) {
          color: var(--primary-color);
          background: color-mix(in srgb, var(--primary-color) 9%, transparent);
        }
      }

      .ocr-state {
        @apply static flex min-h-0 flex-1 flex-col items-center justify-center text-center;

        gap: 7px;
        padding: 28px;
        color: var(--ocr-text-muted);
        pointer-events: auto;

        strong {
          font-size: 13px;
          font-weight: 650;
          color: var(--ocr-text-secondary);
        }

        span {
          max-width: 260px;
          font-size: 11px;
          line-height: 1.55;
        }

        &.error strong {
          color: var(--el-color-danger);
        }
      }

      .ocr-ai-orbit {
        @apply flex items-center justify-center rounded-2xl;

        width: 46px;
        height: 46px;
        color: var(--primary-color);
        background: color-mix(in srgb, var(--primary-color) 10%, transparent);
        border: 1px solid
          color-mix(in srgb, var(--primary-color) 18%, transparent);
        animation: ai-breathe 1.6s ease-in-out infinite;
      }

      .ocr-result-scroll {
        @apply min-h-0 flex-1 overflow-y-auto;

        padding: 12px 13px 16px;
        user-select: text;
        scrollbar-width: thin;
      }

      .ocr-selection-translation {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        margin: 0 0 10px;
        overflow: hidden;
        border: 1px solid
          color-mix(in srgb, var(--primary-color) 18%, var(--ocr-border));
        border-radius: 8px;

        .ocr-translation-section {
          min-width: 0;
          padding: 11px 12px;

          &.result {
            border-left: 1px solid
              color-mix(in srgb, var(--ocr-border) 62%, transparent);
          }
        }
      }

      .ocr-translation-label {
        display: block;
        margin-bottom: 5px;
        font-size: 9px;
        font-weight: 650;
        line-height: 1.2;
        color: var(--ocr-text-muted);
      }

      .ocr-translation-source,
      .ocr-selection-translation-editor {
        font-size: 12px;
        line-height: 1.65;
        color: var(--ocr-text);
        word-break: break-word;
        white-space: pre-wrap;
        user-select: text;
      }

      .ocr-selection-translation-editor {
        min-height: 22px;
        color: var(--ocr-text-secondary);
        outline: none;
      }

      .ocr-record-item {
        padding: 11px 12px 12px;
        margin-bottom: 9px;
        background: color-mix(
          in srgb,
          var(--ocr-panel-hover-bg) 38%,
          var(--ocr-panel-bg)
        );
        border: 1px solid color-mix(in srgb, var(--ocr-border) 66%, transparent);
        border-radius: 8px;
        transition:
          border-color 0.15s ease,
          background-color 0.15s ease;

        &:last-child {
          margin-bottom: 0;
          border-bottom: 1px solid
            color-mix(in srgb, var(--ocr-border) 66%, transparent);
        }

        &:hover,
        &.selected {
          background: color-mix(
            in srgb,
            var(--primary-color) 5%,
            var(--ocr-panel-bg)
          );
          border-color: color-mix(
            in srgb,
            var(--primary-color) 22%,
            var(--ocr-border)
          );
        }

        &.is-title .ocr-record-text {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.5;
        }

        &.is-list .ocr-record-text {
          padding-left: 4px;
        }

        &.is-code .ocr-record-text,
        &.is-table .ocr-record-text {
          padding: 9px 10px;
          overflow-x: auto;
          font-family: var(--font-mono, 'Cascadia Code', Consolas, monospace);
          font-size: 11px;
          line-height: 1.6;
          background: color-mix(in srgb, var(--ocr-shell-bg) 70%, transparent);
          border-radius: 6px;
        }
      }

      .ocr-record-header {
        @apply flex items-center;

        gap: 6px;
        min-width: 0;
        padding: 0;
        margin-bottom: 7px;
        cursor: default;
      }

      .ocr-record-select {
        @apply flex flex-shrink-0 items-center justify-center rounded-full;

        width: 19px;
        height: 19px;
        font-size: 9px;
        font-weight: 700;
        color: var(--ocr-text-muted);
        background: color-mix(in srgb, var(--ocr-border) 42%, transparent);

        &:hover,
        &.selected {
          color: var(--primary-color);
          background: color-mix(in srgb, var(--primary-color) 13%, transparent);
        }
      }

      .ocr-record-kind {
        @apply min-w-0 flex-1;

        font-size: 9px;
        font-weight: 650;
        color: var(--ocr-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .ocr-record-score {
        padding-top: 0;
        font-size: 9px;
        color: var(--ocr-text-muted);
      }

      .ocr-record-text {
        font-size: 13px;
        line-height: 1.72;
        color: var(--ocr-text);
        word-break: break-word;
        white-space: pre-wrap;
        user-select: text;

        .ocr-sync-highlight {
          padding: 1px 2px;
          margin: 0 -1px;
          color: color-mix(in srgb, var(--primary-color) 76%, var(--ocr-text));
          background: color-mix(in srgb, var(--primary-color) 21%, transparent);
          border: 1px solid
            color-mix(in srgb, var(--primary-color) 42%, transparent);
          border-radius: 3px;
        }

        &.translated {
          color: var(--ocr-text-secondary);
        }
      }

      .ocr-record-translation {
        padding: 9px 10px;
        margin-top: 9px;
        background: color-mix(in srgb, var(--primary-color) 5%, transparent);
        border-radius: 6px;
      }

      @media (width <= 620px) {
        .ocr-result-layout {
          flex-direction: column;
          gap: 8px;

          :deep(.first-panel) {
            width: 100% !important;
            min-width: 100% !important;
            height: 42%;
          }

          :deep(.second-panel) {
            height: 58%;
          }

          :deep(.splitter-divider) {
            display: none;
          }
        }

        .ocr-pane-header {
          min-height: 44px;
          padding-block: 7px;
        }

        .ocr-preview-canvas {
          padding: 8px;
        }

        .ocr-preview-stage img {
          max-height: 28vh;
        }
      }
    }

    .ocr-action-bar {
      @apply flex flex-shrink-0 items-center;

      gap: 4px;
      height: 46px;
      padding: 6px 8px;
      margin-bottom: 0;
      overflow: auto hidden;
      white-space: nowrap;
      background: color-mix(in srgb, var(--ocr-shell-bg) 86%, transparent);
      border-top: 1px solid
        color-mix(in srgb, var(--ocr-border) 68%, transparent);
      scrollbar-width: thin;

      .translate-btn-group,
      .ocr-engine-btn-group {
        @apply flex flex-shrink-0 items-center bg-transparent;

        border-radius: 6px;
        box-shadow: var(--ocr-panel-shadow);

        &:hover {
          @apply bg-ocr-panel-hover;
        }

        .translate-main,
        .ocr-engine-main {
          min-width: 64px;
          padding-right: 4px;
          border-right: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          box-shadow: none;
        }

        .translate-arrow,
        .ocr-engine-arrow {
          width: 26px;
          min-width: 26px;
          padding-inline: 4px;
          border-left: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          box-shadow: none;
        }

        .translate-menu,
        .ocr-engine-menu {
          position: absolute;
          bottom: 100%;
          left: 50%;
          z-index: 50;
          min-width: 130px;
          padding-block: 6px;
          margin-bottom: 8px;
          background: var(--panel-bg);
          border: 1px solid var(--panel-border);
          border-radius: 8px;
          box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
          transform: translateX(-50%);

          &.ocr-floating-menu {
            position: fixed;
            top: auto;
            right: auto;
            z-index: 9999;
          }

          .menu-item {
            @apply flex cursor-pointer items-center justify-between whitespace-nowrap rounded-md text-sm transition-colors hover:bg-panel-hover-bg;

            padding: 6px 12px;
            margin: 2px 6px;

            &.active {
              @apply text-primary font-medium;
            }

            .engine-label {
              margin-right: 16px;
            }
          }
        }
      }

      .ocr-action-btn {
        @apply flex flex-shrink-0 items-center justify-center text-ocr-secondary bg-ocr-panel border border-ocr shadow-ocr-panel;

        gap: 5px;
        min-width: 0;
        height: 32px;
        padding: 0 8px;
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        border-radius: 6px;

        span {
          word-break: keep-all;
          white-space: nowrap;
        }

        &:hover:not(:disabled) {
          @apply bg-ocr-panel-hover text-ocr;
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.42;
        }

        &.more {
          width: 32px;
          min-width: 32px;
          padding: 0;
          background: transparent;
          border-color: transparent;
          box-shadow: none;
        }
      }

      .ocr-action-btn.primary {
        color: var(--primary-color);
        background: color-mix(
          in srgb,
          var(--primary-color) 10%,
          var(--ocr-panel-bg)
        );
        border-color: color-mix(
          in srgb,
          var(--primary-color) 24%,
          var(--ocr-border)
        );
      }

      .ocr-action-divider {
        flex: 0 0 auto;
        width: 1px;
        height: 20px;
        margin-left: 1px;
        background: var(--ocr-border);
      }

      @media (width <= 560px) {
        .ocr-action-btn:not(.more) span {
          display: none;
        }

        .translate-btn-group .translate-main,
        .ocr-engine-btn-group .ocr-engine-main,
        .ocr-action-btn {
          width: 32px;
          min-width: 32px;
          padding: 0;
        }

        .translate-btn-group .translate-arrow,
        .ocr-engine-btn-group .ocr-engine-arrow {
          width: 24px;
          min-width: 24px;
        }
      }
    }

    @media (width <= 780px) {
      .ocr-header {
        .ocr-source-inline {
          display: none;
        }

        .ocr-engine-status {
          max-width: 112px;
        }
      }
    }
  }

  .zoom-info {
    @apply absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm z-30;

    pointer-events: none;
  }

  .context-menu {
    @apply fixed bg-panel rounded-lg py-2;

    z-index: 9999;
    min-width: 176px;
    border: 1px solid var(--panel-border);

    .menu-item {
      @apply px-3 py-1 hover:bg-panel-hover-bg cursor-pointer text-sm flex items-center whitespace-nowrap;

      .menu-item-icon {
        @apply mr-2 inline-block align-middle mb-[1px] flex-shrink-0;
      }

      &.danger {
        @apply text-red-500;
      }
    }

    .menu-divider {
      @apply h-px bg-panel my-1;
    }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes ai-breathe {
  0%,
  100% {
    opacity: 0.78;
    transform: scale(0.96);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
