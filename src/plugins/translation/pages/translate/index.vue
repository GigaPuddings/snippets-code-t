<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import modal from '@/utils/modal';
import googleIcon from '@/assets/svg/google.svg';
import bingIcon from '@/assets/svg/bing.svg';
import { useI18n } from 'vue-i18n';
import { logger } from '@/utils/logger';
import { processTextForTranslation, detectLanguage } from '@/utils/text';
import { usePluginStore } from '@/store';
import {
  translateOffline,
  canUseOfflineTranslation,
  isModelCached,
  warmupOfflineTranslator,
  cancelOfflineTranslation
} from '@/plugins/translation/utils/offlineTranslator';
import {
  Pushpin,
  CloseSmall,
  Switch as SwitchIcon,
  VolumeUp,
  Delete,
  Up,
  Down,
  Copy
} from '@icon-park/vue-next';

const { t } = useI18n();
const pluginStore = usePluginStore();

const appWindow = getCurrentWindow();

// 组件和状态
const translating = ref(false);
const sourceText = ref('');
const sourceLanguage = ref('auto');
const targetLanguage = ref('zh');
const isPinned = ref(false);
const showDeleteButton = ref(false);
const sourceTextArea = ref();
const offlineModelAvailable = ref(false);
const localAiAvailable = ref(false);

// IME 输入法组合状态（中文输入时为 true）
const isComposing = ref(false);
// 翻译请求代际标记，用于丢弃过期的翻译结果
let translateGeneration = 0;

// 多引擎翻译结果
interface TranslationResult {
  engine: string;
  name: string;
  text: string;
  loading: boolean;
  expanded: boolean;
}

const translationResults = ref<TranslationResult[]>([
  {
    engine: 'bing',
    name: '',
    text: '',
    loading: false,
    expanded: true
  },
  {
    engine: 'google',
    name: '',
    text: '',
    loading: false,
    expanded: true
  },
  {
    engine: 'offline',
    name: '',
    text: '',
    loading: false,
    expanded: true
  },
  {
    engine: 'local-ai',
    name: '',
    text: '',
    loading: false,
    expanded: true
  }
]);

// 过滤可用的翻译结果（离线翻译需要模型已下载）
const availableResults = computed(() => {
  return translationResults.value.filter((r) => {
    if (r.engine === 'offline') {
      return offlineModelAvailable.value;
    }
    if (r.engine === 'local-ai') {
      return localAiAvailable.value;
    }
    return true;
  });
});

// Computed translation names
const getEngineName = (engine: string) => {
  if (engine === 'bing') return t('translate.bingTranslate');
  if (engine === 'google') return t('translate.googleTranslate');
  if (engine === 'offline') return t('translate.offlineTranslate');
  if (engine === 'local-ai') return t('translate.localAiTranslate');
  return engine;
};

// Language options - computed for i18n
const languageOptions = computed(() => [
  { value: 'auto', label: t('translate.languages.auto') },
  { value: 'zh', label: t('translate.languages.zh') },
  { value: 'zh_tw', label: t('translate.languages.zh_tw') },
  { value: 'en', label: t('translate.languages.en') },
  { value: 'ja', label: t('translate.languages.ja') },
  { value: 'ko', label: t('translate.languages.ko') },
  { value: 'fr', label: t('translate.languages.fr') },
  { value: 'de', label: t('translate.languages.de') },
  { value: 'ru', label: t('translate.languages.ru') },
  { value: 'es', label: t('translate.languages.es') },
  { value: 'pt_pt', label: t('translate.languages.pt_pt') },
  { value: 'pt_br', label: t('translate.languages.pt_br') },
  { value: 'vi', label: t('translate.languages.vi') },
  { value: 'id', label: t('translate.languages.id') },
  { value: 'th', label: t('translate.languages.th') },
  { value: 'ar', label: t('translate.languages.ar') }
]);

// 监听窗口失焦
let blurTimeout: ReturnType<typeof setTimeout> | null = null;
let unlisten: (() => void) | null = null;

// 防抖变量
let translateTimeout: ReturnType<typeof setTimeout> | null = null;

// 记录用户最近一次手动选择的目标语言
const userPreferredTarget = ref({
  forChinese: 'en',
  forEnglish: 'zh'
});

const setupListeners = async () => {
  if (isPinned.value) return;

  // 监听窗口失焦事件
  const unlistenBlur = await listen('tauri://blur', () => {
    if (blurTimeout) {
      clearTimeout(blurTimeout);
    }

    // 延迟关闭窗口，避免在拖动时关闭
    blurTimeout = setTimeout(async () => {
      if (!isPinned.value) {
        // 隐藏窗口时清理状态
        resetState();
        await appWindow.hide();
      }
    }, 100);
  });

  // 监听窗口获焦事件，取消延迟关闭
  const unlistenFocus = await listen('tauri://focus', () => {
    if (blurTimeout) {
      clearTimeout(blurTimeout);
    }
    // 窗口获得焦点时，聚焦输入框
    focusSourceTextArea();
  });

  // 监听窗口显示事件
  const unlistenShow = await listen('tauri://show', () => {
    // 窗口显示时，聚焦输入框
    focusSourceTextArea();
  });

  // 监听窗口移动事件，取消延迟关闭
  const unlistenMove = await listen('tauri://move', () => {
    if (blurTimeout) {
      clearTimeout(blurTimeout);
    }
  });

  const unlistenSelectionText = await listen('selection-text', (event: any) => {
    if (event.payload && event.payload.text) {
      handleSelectionText(event.payload.text);
    }
  });

  const unlistenResetState = await listen('reset-state', () => {
    resetState();
  });

  unlisten = () => {
    unlistenBlur();
    unlistenFocus();
    unlistenMove();
    unlistenSelectionText();
    unlistenResetState();
    unlistenShow();
  };
};

// 设置窗口置顶
const togglePin = async () => {
  isPinned.value = !isPinned.value;
  await appWindow.setAlwaysOnTop(isPinned.value);

  if (isPinned.value) {
    // 取消监听器
    if (unlisten) {
      unlisten();
      unlisten = null;
    }
  } else {
    // 重新设置监听器
    setupListeners();
  }
};

// 重置所有状态
const resetState = () => {
  sourceText.value = '';
  showDeleteButton.value = false;
  translationResults.value.forEach((result) => {
    result.text = '';
    result.loading = false;
  });
};

// 关闭窗口
const closeWindow = async () => {
  resetState();
  await appWindow.close();
};

// 交换语言
const swapLanguages = () => {
  if (sourceLanguage.value !== 'auto') {
    [sourceLanguage.value, targetLanguage.value] = [
      targetLanguage.value,
      sourceLanguage.value
    ];
    translateAll();
  }
};

// 清空输入
const clearInput = () => {
  sourceText.value = '';
  translationResults.value.forEach((result) => {
    result.text = '';
    result.loading = false;
  });
  showDeleteButton.value = false;
};

// 复制结果
const copyResult = async (text: string) => {
  if (text) {
    await navigator.clipboard.writeText(text);
    modal.success(t('translate.copiedToClipboard'));
  }
};

const updateResultText = (result: TranslationResult, event: Event) => {
  const target = event.target as HTMLElement | null;
  if (target) {
    result.text = target.innerText.trim();
  }
};

// 朗读文本
const speakText = (text: string, lang: string) => {
  if (!text) return;

  const utterance = new SpeechSynthesisUtterance(text);

  // 设置语言
  const langCode =
    lang === 'zh'
      ? 'zh-CN'
      : lang === 'zh_tw'
        ? 'zh-TW'
        : lang === 'en'
          ? 'en-US'
          : lang;

  utterance.lang = langCode;
  window.speechSynthesis.speak(utterance);
};

// 自动设置目标语言
const autoSetTargetLanguage = () => {
  // 只有当源语言为自动检测时才执行
  if (sourceLanguage.value !== 'auto') return;

  // 检测文本语言
  const detectedLang = detectLanguage(sourceText.value);

  // 根据检测到的语言类型设置目标语言
  if (detectedLang === 'zh') {
    // 中文输入，使用用户首选的英文目标语言
    targetLanguage.value = userPreferredTarget.value.forChinese;
  } else if (detectedLang === 'en') {
    // 英文输入，使用用户首选的中文目标语言
    targetLanguage.value = userPreferredTarget.value.forEnglish;
  }
};

// 目标语言变更处理函数
const onTargetLanguageChange = () => {
  // 记住用户的选择
  const detectedLang = detectLanguage(sourceText.value);
  if (detectedLang === 'zh') {
    userPreferredTarget.value.forChinese = targetLanguage.value;
  } else if (detectedLang === 'en') {
    userPreferredTarget.value.forEnglish = targetLanguage.value;
  }

  // 执行翻译
  translateAll();
};

// 执行单个引擎翻译
const translateWithEngine = async (engine: string, generation: number) => {
  const result = translationResults.value.find((r) => r.engine === engine);
  if (!result) return;

  // 离线翻译需要检查模型是否可用
  if (engine === 'offline' && !offlineModelAvailable.value) {
    return;
  }
  if (engine === 'local-ai' && !localAiAvailable.value) {
    return;
  }

  result.loading = true;
  result.text = '';

  // 获取当前源文本
  const textToTranslate = processTextForTranslation(sourceText.value);

  // 设置目标语言，对于必应翻译不能用auto
  let currentTargetLang = targetLanguage.value;

  // 如果引擎是bing且目标语言是auto，则改为en(英语)
  if (engine === 'bing' && currentTargetLang === 'auto') {
    currentTargetLang = 'en';
  }

  try {
    let translatedText: string;

    if (engine === 'offline') {
      // 离线翻译 - 懒加载模型
      // 检查内存中是否已加载
      if (!canUseOfflineTranslation()) {
        // 检查缓存是否存在
        const cached = await isModelCached();
        if (cached) {
          logger.info('[翻译窗口] 离线翻译懒加载：开始加载模型...');
          await warmupOfflineTranslator();
          logger.info('[翻译窗口] 离线翻译懒加载：模型加载完成');
        } else {
          throw new Error('离线翻译模型未下载，请在设置中下载模型');
        }
      }

      translatedText = await translateOffline(textToTranslate);
    } else {
      // 调用Rust后端进行翻译
      translatedText = await invoke<string>('translate_text', {
        text: textToTranslate,
        from: sourceLanguage.value,
        to: currentTargetLang,
        engine: engine
      });
    }

    // 检查是否是最新的翻译请求，丢弃过期结果
    if (generation !== translateGeneration) return;
    result.text = translatedText;
  } catch (error) {
    // 过期的翻译请求出错时不处理
    if (generation !== translateGeneration) return;

    // 离线翻译被取消时不显示错误
    const errorMsg = String(error);
    if (errorMsg.includes('翻译已取消')) return;

    logger.error(`[翻译] ${engine}翻译出错`, error);

    if (
      errorMsg.includes('429') ||
      errorMsg.includes('Too Many Requests')
    ) {
      result.text = t('translate.tooManyRequests');
    } else if (
      errorMsg.includes('timeout') ||
      errorMsg.includes('超时')
    ) {
      result.text = t('translate.timeout');
    } else if (
      errorMsg.includes('network') ||
      errorMsg.includes('网络')
    ) {
      result.text = t('translate.networkError');
    } else if (
      errorMsg.includes('未下载') ||
      errorMsg.includes('未激活') ||
      errorMsg.includes('运行时未安装')
    ) {
      result.text = errorMsg;
    } else {
      result.text = t('translate.translateFailed');
    }
  } finally {
    // 只有最新的翻译才能清除 loading 状态
    if (generation === translateGeneration) {
      result.loading = false;
    }
  }
};

// 执行所有翻译引擎
const translateAll = async () => {
  // 清除可能存在的防抖定时器
  if (translateTimeout) {
    clearTimeout(translateTimeout);
    translateTimeout = null;
  }

  if (!sourceText.value.trim()) {
    translationResults.value.forEach((result) => {
      result.text = '';
      result.loading = false;
    });
    translating.value = false;
    return;
  }

  // 取消之前正在进行的离线翻译，避免 ONNX 模型推理并发导致内存暴涨
  cancelOfflineTranslation();

  // 增加代际标记，使之前发起的翻译结果失效
  const currentGeneration = ++translateGeneration;

  // 翻译前自动设置目标语言
  autoSetTargetLanguage();

  translating.value = true;

  // 并行翻译所有可用引擎
  const promises = availableResults.value.map((result) =>
    translateWithEngine(result.engine, currentGeneration)
  );

  await Promise.all(promises);

  // 只有最新的翻译才能清除翻译状态
  if (currentGeneration === translateGeneration) {
    translating.value = false;
  }
};

// 折叠/展开翻译结果
const toggleExpand = (result: TranslationResult) => {
  result.expanded = !result.expanded;
};

// 监听输入变化，自动翻译
const handleInput = () => {
  // IME 输入法组合中不处理，避免中文输入过程中触发翻译
  if (isComposing.value) return;

  showDeleteButton.value = !!sourceText.value;

  // 防抖处理
  if (translateTimeout) {
    clearTimeout(translateTimeout);
  }

  // 如果文本非空，则安排翻译
  if (sourceText.value.trim()) {
    translateTimeout = setTimeout(() => {
      translateAll();
    }, 500);
  } else {
    // 文本为空时清空翻译结果
    translationResults.value.forEach((result) => {
      result.text = '';
      result.loading = false;
    });
  }
};

// IME 输入法组合事件处理
const onCompositionStart = () => {
  isComposing.value = true;
};

const onCompositionEnd = () => {
  isComposing.value = false;
  // Element Plus 在 compositionend 后会自动触发 input 事件，
  // handleInput 会在此时被调用
};

// 防止重复翻译的标记
let lastTranslatedText = '';
let isTranslating = false;

// 添加一个新方法专门用于处理selection-text事件
const handleSelectionText = (text: string) => {
  if (!text) {
    return;
  }

  if (text === lastTranslatedText && isTranslating) {
    return;
  }

  lastTranslatedText = text;
  isTranslating = true;

  sourceText.value = text;
  showDeleteButton.value = true;

  autoSetTargetLanguage();

  translateAll().finally(() => {
    setTimeout(() => {
      isTranslating = false;
    }, 2000);
  });

  focusSourceTextArea();
};

// 翻译结果回来处理
const translateBack = (result: TranslationResult) => {
  // 设置结果文本为新的源文本
  sourceText.value = result.text;

  // 检测新源文本的语言，然后自动设置语言
  const detectedLang = detectLanguage(sourceText.value);

  // 保存当前源语言和目标语言
  const oldSourceLang = sourceLanguage.value;
  const oldTargetLang = targetLanguage.value;

  if (oldSourceLang === 'auto') {
    // 如果原来是自动检测，保持自动检测
    sourceLanguage.value = 'auto';

    // 根据检测到的语言设置新的目标语言
    if (detectedLang === 'zh') {
      targetLanguage.value = userPreferredTarget.value.forChinese;
    } else {
      targetLanguage.value = userPreferredTarget.value.forEnglish;
    }
  } else {
    // 如果原来不是自动检测，则交换语言
    sourceLanguage.value = oldTargetLang;
    targetLanguage.value =
      oldSourceLang === 'auto'
        ? detectedLang === 'zh'
          ? 'en'
          : 'zh'
        : oldSourceLang;
  }

  // 执行翻译
  translateAll();
};

// 聚焦输入框
const focusSourceTextArea = () => {
  // 使用更多次尝试和更长的延迟来确保输入框能够获得焦点
  const attemptFocus = (attempts = 0) => {
    if (attempts > 5) return; // 最多尝试5次

    if (sourceTextArea.value) {
      sourceTextArea.value.focus();
    } else {
      // 延迟时间随尝试次数增加
      const delay = 100 * (attempts + 1);
      setTimeout(() => attemptFocus(attempts + 1), delay);
    }
  };

  // 先立即尝试聚焦
  if (sourceTextArea.value) {
    sourceTextArea.value.focus();
  }

  // 然后使用nextTick确保DOM已更新后再次尝试
  nextTick(() => {
    attemptFocus();
  });
};

const onSourceLanguageChange = () => {
  autoSetTargetLanguage();
  translateAll();
};

onMounted(async () => {
  try {
    await pluginStore.initialize();
    localAiAvailable.value = pluginStore.isEnabled('local-ai');
  } catch (error) {
    logger.warn('[翻译窗口] 获取本地 AI 插件状态失败:', error);
    localAiAvailable.value = false;
  }

  // 从后端检查离线翻译模型是否已激活（不自动预热，使用懒加载）
  try {
    const backendActivated = await invoke<boolean>(
      'get_offline_model_activated'
    );
    logger.info(`[翻译窗口] 离线模型后端激活状态: ${backendActivated}`);
    // 只设置后端激活状态，不自动预热模型
    // 模型会在实际使用离线翻译时懒加载
    offlineModelAvailable.value = backendActivated;
  } catch (error) {
    logger.error('[翻译窗口] 获取离线模型激活状态失败:', error);
    offlineModelAvailable.value = false;
  }

  // 先设置监听器，等待所有监听器设置完成
  await setupListeners();

  // 组件挂载后自动设置目标语言（如果有文本）
  if (sourceText.value.trim()) {
    autoSetTargetLanguage();
  }

  // 组件挂载后也聚焦输入框
  focusSourceTextArea();

  await nextTick();

  setTimeout(() => {
    appWindow.emit('translate_ready');
  }, 100);
});

onUnmounted(() => {
  if (unlisten) {
    unlisten();
  }
  if (blurTimeout) {
    clearTimeout(blurTimeout);
  }
  if (translateTimeout) {
    clearTimeout(translateTimeout);
  }
  // 取消正在进行的离线翻译，释放资源
  cancelOfflineTranslation();
  resetState();
});
</script>

<template>
  <main class="translate-window">
    <div class="header" data-tauri-drag-region>
      <div class="left-buttons">
        <el-tooltip
          :content="$t('pin.pinWindow')"
          placement="bottom"
          :hide-after="1000"
          popper-class="themed-tooltip-popper"
        >
          <button
            type="button"
            :aria-label="$t('pin.pinWindow')"
            @mousedown.stop
            @click="togglePin"
            :class="['window-action', 'pin-button', isPinned ? 'pinned' : '']"
          >
            <Pushpin :size="18" />
          </button>
        </el-tooltip>
      </div>
      <div class="window-title" data-tauri-drag-region>
        {{ $t('translate.title') }}
      </div>
      <div class="right-buttons">
        <el-tooltip
          :content="$t('pin.close')"
          placement="bottom"
          :hide-after="1000"
          popper-class="themed-tooltip-popper"
        >
          <button
            type="button"
            :aria-label="$t('pin.close')"
            @mousedown.stop
            @click="closeWindow"
            class="window-action material-close"
          >
            <CloseSmall :size="22" />
          </button>
        </el-tooltip>
      </div>
    </div>

    <div class="translate-container">
      <!-- 语言选择区域 -->
      <div class="language-selector">
        <el-select
          v-model="sourceLanguage"
          size="small"
          @change="onSourceLanguageChange"
          class="lang-select"
        >
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-tooltip
          :content="$t('translate.translateBack')"
          placement="top"
          :hide-after="1000"
          popper-class="themed-tooltip-popper"
        >
          <button
            type="button"
            :aria-label="$t('translate.translateBack')"
            :disabled="sourceLanguage === 'auto'"
            @click="swapLanguages"
            class="swap-button"
          >
            <SwitchIcon :size="22" />
          </button>
        </el-tooltip>

        <el-select
          v-model="targetLanguage"
          size="small"
          @change="onTargetLanguageChange"
          class="lang-select"
        >
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <!-- 源文本输入区域 -->
      <div class="source-area">
        <el-input
          ref="sourceTextArea"
          v-model="sourceText"
          type="textarea"
          :rows="2"
          :placeholder="$t('translate.inputPlaceholder')"
          resize="none"
          @input="handleInput"
          @compositionstart="onCompositionStart"
          @compositionend="onCompositionEnd"
          class="source-textarea"
        />
        <div class="source-actions">
          <div class="source-material">
            <el-tooltip
              :content="$t('translate.speakText')"
              placement="top"
              :hide-after="1000"
              popper-class="themed-tooltip-popper"
            >
              <button
                type="button"
                @click="speakText(sourceText, sourceLanguage)"
                class="action-btn"
              >
                <VolumeUp :size="18" />
              </button>
            </el-tooltip>
            <el-tooltip
              v-if="showDeleteButton"
              :content="$t('translate.deleteText')"
              placement="top"
              :hide-after="1000"
              popper-class="themed-tooltip-popper"
            >
              <button type="button" @click="clearInput" class="action-btn">
                <Delete :size="18" />
              </button>
            </el-tooltip>
          </div>
        </div>
      </div>

      <!-- 多引擎翻译结果区域 -->
      <div class="translation-results">
        <div
          v-for="result in availableResults"
          :key="result.engine"
          class="result-card"
          :class="{ 'result-expanded': result.expanded }"
        >
          <button
            type="button"
            class="result-header"
            @click="toggleExpand(result)"
          >
            <div class="result-title">
              <img
                v-if="result.engine === 'google'"
                :src="googleIcon"
                class="engine-icon"
                alt="Google"
              />
              <img
                v-else-if="result.engine === 'bing'"
                :src="bingIcon"
                class="engine-icon"
                alt="Bing"
              />
              <span v-else-if="result.engine === 'offline'" class="offline-icon">离</span>
              <span v-else class="offline-icon ai-icon">AI</span>
              <span>{{ getEngineName(result.engine) }}</span>
            </div>
            <div class="result-controls">
              <component
                :is="result.expanded ? Up : Down"
                :size="18"
                class="expand-icon"
              />
            </div>
          </button>

          <div v-if="result.expanded" class="result-body">
            <el-skeleton v-if="result.loading" :rows="3" animated />
            <div
              v-else-if="result.text"
              class="result-text"
              contenteditable="plaintext-only"
              spellcheck="false"
              v-text="result.text"
              @blur="updateResultText(result, $event)"
            ></div>
            <div v-else class="result-empty">
              {{ $t('translate.resultPlaceholder') }}
            </div>

            <div class="result-actions">
              <el-tooltip
                :content="$t('translate.speakText')"
                placement="top"
                :hide-after="1000"
                popper-class="themed-tooltip-popper"
              >
                <button
                  type="button"
                  @click="speakText(result.text, targetLanguage)"
                  class="action-btn"
                >
                  <VolumeUp :size="18" />
                </button>
              </el-tooltip>

              <el-tooltip
                :content="$t('translate.copyResult')"
                placement="top"
                :hide-after="1000"
                popper-class="themed-tooltip-popper"
              >
                <button
                  type="button"
                  @click="copyResult(result.text)"
                  class="action-btn"
                >
                  <Copy :size="18" />
                </button>
              </el-tooltip>

              <el-tooltip
                :content="$t('translate.translateBack')"
                placement="top"
                :hide-after="1000"
                popper-class="themed-tooltip-popper"
              >
                <button
                  type="button"
                  @click="translateBack(result)"
                  class="action-btn rotate-icon"
                >
                  <SwitchIcon :size="18" />
                </button>
              </el-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.translate-window {
  @apply w-full h-screen flex flex-col overflow-hidden rounded-lg;

  color: var(--el-text-color-primary);
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-light);
}

.header {
  @apply relative select-none w-full grid items-center z-50 h-10 px-2;

  grid-template-columns: 1fr auto 1fr;
  background: color-mix(in srgb, var(--el-bg-color) 94%, transparent);
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.left-buttons,
.right-buttons {
  @apply flex items-center z-10;

  pointer-events: none;
}

.right-buttons {
  @apply justify-end;
}

.window-title {
  @apply text-sm font-semibold leading-none;

  pointer-events: none;
}

.window-action {
  @apply flex items-center justify-center cursor-pointer w-7 h-7 rounded;

  color: var(--el-text-color-secondary);
  pointer-events: auto;

  &:hover {
    color: var(--el-text-color-primary);
    background: var(--el-fill-color-light);
  }
}

.pin-button,
.material-close {
  color: var(--el-text-color-secondary);
}

.pinned {
  @apply text-[var(--el-color-primary)];

  svg {
    transform: rotate(45deg);
  }
}

.translate-container {
  @apply flex flex-col flex-1 min-h-0 overflow-hidden;

  background: var(--el-bg-color);
}

.language-selector {
  @apply flex flex-shrink-0 items-center justify-between gap-2 min-h-12 py-[7px] px-3;

  border-bottom: 1px solid var(--el-border-color-lighter);
}

.lang-select {
  @apply flex-1 min-w-0;

  :deep(.el-select__wrapper) {
    min-height: 32px;
    background: var(--el-fill-color-lighter);
    border-radius: 4px;
    box-shadow: none;
  }
}

.swap-button {
  @apply flex flex-shrink-0 items-center justify-center cursor-pointer w-[30px] h-[30px] rounded;

  color: var(--el-color-primary);

  &:hover:not(:disabled) {
    background: var(--el-fill-color-light);
  }

  &:disabled {
    color: var(--el-text-color-placeholder);
    cursor: not-allowed;
  }
}

.source-area {
  @apply relative flex-shrink-0 pt-2.5 px-3 pb-2;

  border-bottom: 1px solid var(--el-border-color-lighter);
  background: var(--el-bg-color);
}

.source-textarea {
  :deep(.el-textarea__inner) {
    min-height: 90px !important;
    max-height: 150px;
    padding: 10px;
    color: var(--el-text-color-primary);
    background: var(--el-fill-color-lighter);
    border: 0;
    border-radius: 4px;
    box-shadow: none;
    resize: none;

    &:focus {
      background: var(--el-fill-color-light);
      box-shadow: inset 0 0 0 1px var(--el-color-primary-light-5);
    }
  }
}

.source-actions {
  @apply flex items-center justify-end min-h-[30px] pt-1;
}

.source-material {
  @apply flex items-center gap-1;
}

.translation-results {
  @apply flex flex-1 min-h-0 flex-col overflow-y-auto;
}

.result-card {
  @apply overflow-hidden flex-shrink-0 bg-transparent;

  border-bottom: 1px solid var(--el-border-color-lighter);
}

.result-header {
  @apply flex w-full items-center justify-between cursor-pointer min-h-[42px] py-2 px-3 bg-transparent transition-colors duration-150;

  color: var(--el-text-color-primary);

  &:hover {
    background: var(--el-fill-color-lighter);
  }
}

.result-title {
  @apply flex min-w-0 items-center gap-2 text-[13px] font-semibold;
}

.engine-icon {
  @apply w-4 h-4;
}

.offline-icon {
  @apply w-4 h-4 flex items-center justify-center text-xs text-white bg-[#21834a] rounded-[3px];
}

.ai-icon {
  @apply text-[9px];

  background: var(--el-color-primary);
}

.result-controls {
  @apply flex items-center;

  .expand-icon {
    @apply text-[var(--el-text-color-secondary)] transition-transform duration-300;
  }
}

.result-body {
  @apply px-3 pb-2.5;
}

.result-text {
  @apply min-h-[66px] max-h-[180px] overflow-y-auto py-2 px-2.5 rounded outline-none text-sm leading-[1.65] whitespace-pre-wrap break-words select-text;

  color: var(--el-text-color-primary);
  background: var(--el-fill-color-lighter);

  &:focus {
    background: var(--el-fill-color-light);
    box-shadow: inset 0 0 0 1px var(--el-color-primary-light-5);
  }
}

.result-empty {
  @apply min-h-16 flex items-center justify-center text-[13px];

  color: var(--el-text-color-placeholder);
}

.result-actions {
  @apply flex justify-end gap-1 pt-[5px];
}

.action-btn {
  @apply flex items-center justify-center cursor-pointer w-7 h-7 rounded;

  color: var(--el-text-color-secondary);

  &:hover {
    color: var(--el-color-primary);
    background: var(--el-fill-color-light);
  }
}

.rotate-icon {
  @apply rotate-90;
}

@media (max-height: 560px) {
  .source-textarea :deep(.el-textarea__inner) {
    min-height: 70px !important;
    max-height: 100px;
  }

  .result-text {
    min-height: 52px;
    max-height: 120px;
  }
}
</style>
