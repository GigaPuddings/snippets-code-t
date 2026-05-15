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
        alt="贴图"
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
          <div class="ocr-window-title" data-tauri-drag-region>
            <text-recognition theme="outline" size="18" />
            <span data-tauri-drag-region>{{ $t('pin.ocrResult') }}</span>
          </div>

          <div class="ocr-window-controls">
            <button
              class="ocr-window-btn"
              :title="isAlwaysOnTop ? $t('pin.togglePin') : $t('pin.pinWindow')"
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

        <div
          class="ocr-source-card"
          data-tauri-drag-region
          @mousedown="handleMouseDown"
        >
          <div class="ocr-source-thumb" data-tauri-drag-region>
            <img
              v-if="imageBlobUrl"
              :src="imageBlobUrl"
              alt="OCR preview"
              @load="handleImageLoad"
              draggable="false"
            />
          </div>

          <div class="ocr-source-meta" data-tauri-drag-region>
            <div class="ocr-source-name" data-tauri-drag-region>
              {{ ocrFileName }}
            </div>
            <div class="ocr-source-status" data-tauri-drag-region>
              <span data-tauri-drag-region>{{ ocrImageMeta }}</span>
              <span class="ocr-status-separator" data-tauri-drag-region></span>
              <span data-tauri-drag-region>{{ ocrStatusText }}</span>
              <span
                v-if="!ocrLoading && !ocrError && ocrText.trim()"
                class="ocr-status-check"
                data-tauri-drag-region
              >
                ✓
              </span>
            </div>
          </div>

          <button
            class="ocr-view-original"
            :title="
              showOriginalImage ? $t('pin.viewResult') : $t('pin.viewOriginal')
            "
            @click.stop="handleViewOriginal"
          >
            <component
              :is="showOriginalImage ? TextRecognition : Picture"
              size="24"
              theme="outline"
              :strokeWidth="2.6"
            />
            <span>
              {{
                showOriginalImage
                  ? $t('pin.viewResult')
                  : $t('pin.viewOriginal')
              }}
            </span>
          </button>
        </div>
      </header>

      <main class="ocr-reading-surface">
        <div v-if="showOriginalImage" class="ocr-original-image">
          <img :src="imageBlobUrl || imageData" alt="original" />
        </div>
        <template v-else>
          <div v-if="ocrLoading" class="ocr-state">
            <Loading
              class="ocr-loading-icon"
              size="20"
              theme="outline"
              :strokeWidth="3"
            />
            <span>{{ $t('pin.recognizing') }}</span>
          </div>
          <div v-else-if="ocrError" class="ocr-state error">{{ ocrError }}</div>
          <div v-else-if="!ocrText.trim()" class="ocr-state muted">
            {{ $t('pin.noTextRecognized') }}
          </div>

          <div v-else class="ocr-text-content">
            <p v-for="(paragraph, index) in ocrParagraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </template>
      </main>

      <footer class="ocr-action-bar">
        <CustomButton
          class="ocr-action-btn"
          type="text"
          :title="$t('pin.copyText')"
          :disabled="!ocrText.trim()"
          @click.stop="handleCopyOcrText"
        >
          <Copy size="22" theme="outline" :strokeWidth="2.7" />
          <span>{{ $t('pin.copyText') }}</span>
        </CustomButton>
        <div class="translate-btn-group relative">
          <CustomButton
            class="ocr-action-btn translate-main"
            type="text"
            :title="$t('pin.translate')"
            :disabled="!ocrText.trim() || isTranslating"
            @click.stop="handleTranslateOcr"
          >
            <Translate
              v-if="!isTranslating"
              size="22"
              theme="outline"
              :strokeWidth="2.7"
            />
            <Loading
              v-else
              class="ocr-loading-icon"
              size="22"
              theme="outline"
              :strokeWidth="2.7"
            />
            <span>{{ $t('pin.translate') }}</span>
          </CustomButton>
          <CustomButton
            class="ocr-action-btn translate-arrow"
            type="text"
            :disabled="!ocrText.trim() || isTranslating"
            @click.stop="toggleTranslateMenu"
          >
            <Down size="17" theme="outline" :strokeWidth="2.8" />
          </CustomButton>
          <!-- 翻译引擎菜单 -->
          <div v-if="showTranslateMenu" class="translate-menu">
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
        <div class="ocr-engine-btn-group relative">
          <CustomButton
            class="ocr-action-btn ocr-engine-main"
            type="text"
            :title="$t('pin.ocrLanguage')"
            :disabled="ocrLoading"
            @click.stop="toggleOcrLanguageMenu"
          >
            <TextRecognition size="22" theme="outline" :strokeWidth="2.7" />
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
          <div v-if="showOcrLanguageMenu" class="ocr-engine-menu">
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
            <Refresh size="22" theme="outline" :strokeWidth="2.7" />
            <span>{{ $t('pin.recognizeAgain') }}</span>
          </CustomButton>
        </div>
        <CustomButton
          class="ocr-action-btn"
          type="text"
          :title="$t('pin.saveAsText')"
          :disabled="!ocrText.trim()"
          @click.stop="handleSaveOcrText"
        >
          <Save size="22" theme="outline" :strokeWidth="2.7" />
          <span>{{ $t('pin.saveAsText') }}</span>
        </CustomButton>
        <span class="ocr-action-divider"></span>
        <CustomButton
          class="ocr-action-btn more"
          type="text"
          :title="$t('pin.more')"
          @click.stop="handleMoreActions"
        >
          <More size="22" theme="outline" :strokeWidth="2.8" />
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
import { ref, onMounted, onUnmounted, computed } from 'vue';
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
  Refresh,
  Loading,
  TextRecognition,
  Minus,
  Square,
  Picture,
  Down,
  Translate,
  More,
  Check
} from '@icon-park/vue-next';
import { logger, ocrDiagnosticLogger } from '@/utils/logger';
import modal from '@/utils/modal';
import CustomButton from '@/components/UI/CustomButton.vue';
import {
  translateOffline,
  getModelCacheInfo,
  warmupOfflineTranslator
} from '@/utils/offlineTranslator';
import {
  canTranslateDetectedLanguage,
  detectTranslationLanguage
} from '@/utils/text';

const { t } = useI18n();

const containerRef = ref<HTMLDivElement>();
const appWindow = ref<Window | null>(null);

const imageData = ref<string>('');
const imageBlobUrl = ref<string>('');
const mode = ref<'pin' | 'ocr'>('pin');
const ocrText = ref('');
const ocrLoading = ref(false);
const ocrError = ref('');
const ocrFileName = ref('');
const imageWidth = ref(0);
const imageHeight = ref(0);
const initialWindowSize = ref({ width: 0, height: 0 });

const showOriginalImage = ref(false);

const isTranslating = ref(false);
const showTranslateMenu = ref(false);
const currentTranslateEngine = ref<'google' | 'bing' | 'offline'>('bing');
const showOcrLanguageMenu = ref(false);
type OcrLanguageValue = 'auto' | 'zh' | 'zh-tw' | 'en' | 'ja' | 'ko';
const currentOcrLanguage = ref<OcrLanguageValue>('auto');

const translateEngines = computed(() => [
  { value: 'google' as const, label: 'Google', short: 'G' },
  { value: 'bing' as const, label: t('translate.bingTranslate'), short: 'B' },
  {
    value: 'offline' as const,
    label: t('translate.offlineTranslate'),
    short: '离'
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

const scale = ref(1);
const showZoomInfo = ref(false);
const isResizing = ref(false);
let zoomInfoTimer: ReturnType<typeof setTimeout> | null = null;

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

const ocrParagraphs = computed(() => {
  return ocrText.value
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
});

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

const applyPinWindowData = (payload: PinWindowDataPayload) => {
  if (!payload?.imageData) {
    logger.error('[PIN窗口] 收到的事件数据格式不正确', payload);
    return;
  }

  const nextMode = payload.mode === 'ocr' ? 'ocr' : 'pin';
  const payloadKey = `${nextMode}:${payload.imageData.length}`;
  if (payloadKey === lastAppliedPayloadKey.value) {
    return;
  }

  lastAppliedPayloadKey.value = payloadKey;
  mode.value = nextMode;
  updateImageData(payload.imageData);
  closeContextMenu();

  if (mode.value === 'ocr') {
    ocrText.value = payload.text || '';
    ocrError.value = '';
    if (!payload.text) {
      recognizeCurrentImage();
    }
  } else {
    ocrRequestId++;
    ocrLoading.value = false;
    ocrError.value = '';
    ocrText.value = '';
  }
};

const recognizeCurrentImage = async () => {
  if (!imageData.value) return;

  const requestId = ++ocrRequestId;
  ocrLoading.value = true;
  ocrError.value = '';
  const startedAt = Date.now();

  ocrDiagnosticLogger.log('[Pin OCR] recognize start', {
    requestId,
    imageDataLength: imageData.value.length,
    imageWidth: imageWidth.value,
    imageHeight: imageHeight.value,
    language: currentOcrLanguage.value
  });

  try {
    ocrDiagnosticLogger.log('[Pin OCR] invoking RapidOCR backend', {
      requestId,
      language: currentOcrLanguage.value
    });
    const result = await invoke<any>('recognize_text_from_image', {
      imageData: imageData.value,
      engine: 'rapidocr',
      language: currentOcrLanguage.value
    });
    const text = extractTextFromOcrResult(result);
    ocrDiagnosticLogger.log('[Pin OCR] backend OCR success', {
      requestId,
      resultEngine: result?.engine,
      resultLanguage: result?.language,
      confidence: result?.confidence,
      blocks: Array.isArray(result?.blocks) ? result.blocks.length : 0,
      textLength: text.trim().length
    });

    if (requestId !== ocrRequestId) return;
    ocrText.value = text.trim();
    ocrDiagnosticLogger.log('[Pin OCR] recognize success', {
      requestId,
      durationMs: Date.now() - startedAt,
      textLength: ocrText.value.length,
      textPreview: ocrText.value.slice(0, 300)
    });
  } catch (error) {
    if (requestId !== ocrRequestId) return;
    logger.error('[PIN窗口] OCR 识别失败', error);
    ocrDiagnosticLogger.log('[Pin OCR] recognize failed', {
      requestId,
      durationMs: Date.now() - startedAt,
      error: formatErrorForLog(error)
    });
    ocrError.value = t('pin.recognizeFailed');
    ocrText.value = '';
    modal.error(t('pin.recognizeFailed'));
  } finally {
    if (requestId === ocrRequestId) {
      ocrLoading.value = false;
    }
  }
};

const extractTextFromOcrResult = (result: any): string => {
  if (typeof result === 'string') {
    return result;
  }
  if (result?.text) {
    return result.text;
  }
  if (result?.full_text) {
    return result.full_text;
  }
  if (Array.isArray(result?.blocks)) {
    return result.blocks
      .map((block: any) => block?.text)
      .filter(Boolean)
      .join('\n');
  }
  return '';
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
  const text = ocrText.value.trim();
  if (!text) return;

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
  const text = ocrText.value.trim();
  if (!text) return;

  try {
    await invoke('save_text_to_file', { text })
    modal.success(t('pin.saveSuccess'));
  } catch (error: any) {
    if (error !== 'SAVE_CANCELLED') {
      logger.error('[PIN窗口] 保存文本失败', error);
      modal.error(t('pin.saveFailed'));
    }
  }
};

const toggleTranslateMenu = () => {
  showTranslateMenu.value = !showTranslateMenu.value;
  showOcrLanguageMenu.value = false;
};

const selectTranslateEngine = (engine: 'google' | 'bing' | 'offline') => {
  currentTranslateEngine.value = engine;
  showTranslateMenu.value = false;
  // 将用户选择保存到后端或本地（可选，这里先简单调用）
  invoke('set_translation_engine', { engine }).catch((err) => {
    logger.error('[PIN窗口] 保存翻译引擎设置失败', err);
  });
};

const toggleOcrLanguageMenu = () => {
  showOcrLanguageMenu.value = !showOcrLanguageMenu.value;
  showTranslateMenu.value = false;
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

  const sourceLanguage = detectTranslationLanguage(ocrText.value);
  if (!canTranslateDetectedLanguage(sourceLanguage)) {
    modal.warning(t('pin.unsupportedTranslateLanguage'));
    return;
  }

  isTranslating.value = true;

  try {
    let translatedText = '';

    if (currentTranslateEngine.value === 'offline') {
      const cacheInfo = await getModelCacheInfo();
      if (cacheInfo.isCached) {
        await warmupOfflineTranslator();
      } else {
        throw new Error('离线翻译模型未下载，请在设置-翻译配置中下载模型');
      }

      const backendActivated = await invoke<boolean>(
        'get_offline_model_activated'
      );
      if (!backendActivated) {
        throw new Error('离线翻译模型未激活，请在设置-翻译配置中激活模型');
      }

      translatedText = await translateOffline(ocrText.value);
    } else {
      translatedText = (await invoke('translate_text', {
        text: ocrText.value,
        from: 'auto',
        to: 'zh',
        engine: currentTranslateEngine.value
      })) as string;
    }

    if (translatedText) {
      ocrText.value = translatedText;
      modal.success(t('pin.translateSuccess'));
    }
  } catch (error: any) {
    logger.error('[PIN窗口] 翻译失败', error);
    const errMsg = error instanceof Error ? error.message : String(error);
    if (errMsg !== '翻译已取消') {
      modal.error(errMsg || t('pin.translateFailed'));
    }
  } finally {
    isTranslating.value = false;
  }
};

const handleViewOriginal = () => {
  showOriginalImage.value = !showOriginalImage.value;
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
  if (!target.closest('.context-menu') && !target.closest('.ocr-engine-btn-group')) {
    closeContextMenu();
  }
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
    if (event.key === '0') {
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
      applyPinWindowData(payload);
    }
  } catch (error) {
    logger.error('[PIN窗口] 主动获取窗口数据失败', error);
  }
};

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
      translationEngine === 'offline'
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
          applyPinWindowData(event.payload);
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
  window.removeEventListener('blur', closeContextMenu);

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
  user-select: none;
  -webkit-user-select: none;

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

  .ocr-shell {
    @apply flex flex-col flex-1 min-h-0 overflow-hidden bg-ocr-shell text-ocr border border-ocr;
    border-radius: 10px;
    backdrop-filter: blur(16px);

    .ocr-header {
      @apply flex flex-col flex-shrink-0;

      .ocr-titlebar {
        @apply flex items-center justify-between;
        height: 40px;
        padding: 0 10px;

        .ocr-window-title {
          @apply flex items-center min-w-0 text-ocr;
          gap: 8px;
          font-size: 15px;
          font-weight: 500;
        }

        .ocr-window-controls {
          @apply flex items-center flex-shrink-0 text-ocr;
          gap: 10px;

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

      .ocr-source-card {
        @apply flex items-center bg-ocr-panel border border-ocr shadow-ocr-panel;
        height: 92px;
        padding: 10px 14px;
        border-radius: 8px;

        .ocr-source-thumb {
          @apply flex-shrink-0 overflow-hidden;
          width: 126px;
          height: 70px;
          padding: 0;
          background: var(--ocr-panel-hover-bg);
          border: 1px solid var(--ocr-border);
          border-radius: 6px;

          img {
            @apply w-full h-full object-contain block;
            user-select: none;
            -webkit-user-drag: none;
          }
        }

        .ocr-source-meta {
          @apply min-w-0 flex-1;
          margin-left: 14px;

          .ocr-source-name {
            @apply truncate;
            font-size: 15px;
            font-weight: 600;
            line-height: 1.25;
            color: var(--ocr-text);
          }

          .ocr-source-status {
            @apply flex items-center text-ocr-muted;
            margin-top: 8px;
            font-size: 12px;
            line-height: 1;

            .ocr-status-separator {
              @apply w-px mx-2;
              height: 13px;
              background: var(--ocr-border);
            }

            .ocr-status-check {
              @apply inline-flex items-center justify-center rounded-full text-xs text-white;
              width: 16px;
              height: 16px;
              margin-left: 7px;
              background: #20b24a;
              font-size: 0;

              &::before {
                width: 8px;
                height: 5px;
                content: '';
                border-bottom: 2px solid #fff;
                border-left: 2px solid #fff;
                transform: rotate(-45deg) translate(1px, -1px);
              }
            }
          }
        }

        .ocr-view-original {
          @apply flex items-center flex-shrink-0 text-ocr-secondary transition-colors duration-150 rounded-md;
          gap: 6px;
          padding: 6px 0 6px 10px;
          font-size: 13px;
          font-weight: 500;

          &:hover {
            @apply text-ocr;
          }
        }
      }
    }

    .ocr-reading-surface {
      @apply relative flex-1 min-h-0 overflow-auto bg-ocr-panel border border-ocr shadow-ocr-panel;
      margin-top: 6px;
      border-radius: 8px;

      .ocr-original-image {
        @apply w-full h-full flex items-center justify-center;
        padding: 18px;

        img {
          @apply max-w-full max-h-full object-contain;
          border-radius: 6px;
        }
      }
      .ocr-state {
        @apply absolute z-10 flex items-center gap-2;
        left: 20px;
        top: 18px;
        color: var(--ocr-text-muted);
        font-size: 14px;
        pointer-events: none;

        &.error {
          color: #dc2626;
        }

        &.muted {
          color: #9ca3af;
        }

        .ocr-loading-icon {
          animation: spin 0.8s linear infinite;
        }
      }

      .ocr-text-content {
        @apply w-full whitespace-pre-wrap;
        padding: 22px 22px 20px;
        font-size: 15px;
        line-height: 1.75;
        color: var(--ocr-text);
        letter-spacing: 0;

        p {
          // 允许复制
          @apply select-text;
          margin: 0 0 22px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .ocr-action-bar {
      @apply flex items-center flex-shrink-0 mb-1;
      gap: 6px;
      height: 54px;
      padding: 8px 8px 0;

      .translate-btn-group,
      .ocr-engine-btn-group {
        @apply flex items-center bg-transparent;
        border-radius: 6px;
        box-shadow: var(--ocr-panel-shadow);

        &:hover {
          @apply bg-ocr-panel-hover;
        }

        .translate-main,
        .ocr-engine-main {
          @apply pr-1 hover:bg-transparent;
          min-width: 86px;
          border-right: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          box-shadow: none;
        }

        .translate-arrow,
        .ocr-engine-arrow {
          @apply px-1 hover:bg-transparent;
          min-width: 30px;
          width: 30px;
          border-left: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          box-shadow: none;
        }

        .translate-menu,
        .ocr-engine-menu {
          @apply absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-panel rounded-lg py-1.5 shadow-lg border z-50;
          min-width: 130px;
          border-color: var(--panel-border);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

          .menu-item {
            @apply px-3 py-1.5 mx-1.5 my-0.5 rounded-md hover:bg-panel-hover-bg cursor-pointer text-sm flex items-center justify-between whitespace-nowrap transition-colors;

            &.active {
              @apply text-primary font-medium;
              background-color: transparent;
            }

            .engine-label {
              @apply mr-4;
            }
          }
        }
      }

      .ocr-action-btn {
        @apply flex items-center justify-center text-ocr-secondary bg-ocr-panel border border-ocr shadow-ocr-panel;
        gap: 6px;
        min-width: 92px;
        height: 38px;
        padding: 0 10px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 500;
        line-height: 1;

        &:hover:not(:disabled) {
          @apply bg-ocr-panel-hover text-ocr;
        }

        &:disabled {
          opacity: 0.42;
          cursor: not-allowed;
        }

        &.more {
          min-width: 36px;
          width: 36px;
          padding: 0;
          background: transparent;
          border-color: transparent;
          box-shadow: none;
        }
      }

      .ocr-action-divider {
        width: 1px;
        height: 24px;
        margin-left: 1px;
        background: var(--ocr-border);
      }
    }
  }

  .zoom-info {
    @apply absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm z-30;
    pointer-events: none;
  }

  .context-menu {
    @apply fixed bg-panel rounded-lg py-2;
    min-width: 176px;
    border: 1px solid var(--panel-border);
    z-index: 9999;

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
</style>
