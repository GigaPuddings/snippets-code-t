<script lang="ts" setup>
import { Translate } from '@icon-park/vue-next';
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { ElMessage } from 'element-plus';
import googleIcon from '@/assets/svg/google.svg';
import bingIcon from '@/assets/svg/bing.svg';

const appWindow = getCurrentWindow();

// 组件和状态
const translating = ref(false);
const sourceText = ref('');
const sourceLanguage = ref('auto');
const targetLanguage = ref('zh');
const isPinned = ref(false);
const showDeleteButton = ref(false);

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
    name: '必应翻译',
    text: '',
    loading: false,
    expanded: true
  },
  {
    engine: 'google',
    name: '谷歌翻译',
    text: '',
    loading: false,
    expanded: true
  }
]);

// 语言选项
const languageOptions = [
  { value: 'auto', label: '自动检测' },
  { value: 'zh', label: '简体中文' },
  { value: 'zh_tw', label: '繁体中文' },
  { value: 'en', label: '英语' },
  { value: 'ja', label: '日语' },
  { value: 'ko', label: '韩语' },
  { value: 'fr', label: '法语' },
  { value: 'de', label: '德语' },
  { value: 'ru', label: '俄语' },
  { value: 'es', label: '西班牙语' },
  { value: 'pt_pt', label: '葡萄牙语' },
  { value: 'pt_br', label: '巴西葡萄牙语' },
  { value: 'vi', label: '越南语' },
  { value: 'id', label: '印尼语' },
  { value: 'th', label: '泰语' },
  { value: 'ar', label: '阿拉伯语' }
];

// 监听窗口失焦
let blurTimeout: ReturnType<typeof setTimeout> | null = null;
let unlisten: (() => void) | null = null;

// 防抖变量
let translateTimeout: ReturnType<typeof setTimeout> | null = null;

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
  });

  // 监听窗口移动事件，取消延迟关闭
  const unlistenMove = await listen('tauri://move', () => {
    if (blurTimeout) {
      clearTimeout(blurTimeout);
    }
  });

  // 监听划词翻译消息
  const unlistenSelectionText = await listen('selection-text', (event: any) => {
    sourceText.value = event.payload.text || '';
    if (sourceText.value.trim()) {
      translateAll();
    }
  });

  // 监听重置状态消息
  const unlistenResetState = await listen('reset-state', () => {
    resetState();
  });

  unlisten = () => {
    unlistenBlur();
    unlistenFocus();
    unlistenMove();
    unlistenSelectionText();
    unlistenResetState();
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
  await appWindow.hide();
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
  });
  showDeleteButton.value = false;
};

// 复制结果
const copyResult = async (text: string) => {
  if (text) {
    await navigator.clipboard.writeText(text);
    ElMessage.success('已复制到剪贴板');
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

// 处理驼峰命名转换为空格分隔
const processTextForTranslation = (text: string) => {
  // 处理驼峰命名：insertCamelCase => insert Camel Case
  return (
    text
      // 在大写字母前添加空格（如果前面有字母）
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // 处理连续大写字母后跟小写字母的情况（如：APIKey => API Key）
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
  );
};

// 执行单个引擎翻译
const translateWithEngine = async (engine: string) => {
  const result = translationResults.value.find((r) => r.engine === engine);
  if (!result) return;

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
    // 调用Rust后端进行翻译
    const translatedText = await invoke<string>('translate_text', {
      text: textToTranslate,
      from: sourceLanguage.value,
      to: currentTargetLang,
      engine: engine
    });

    result.text = translatedText;
  } catch (error) {
    console.error(`${engine}翻译出错:`, error);
    result.text = '翻译失败，请重试';
    ElMessage.error(`${engine}翻译失败: ` + error);
  } finally {
    result.loading = false;
  }
};

// 执行所有翻译引擎
const translateAll = async () => {
  if (!sourceText.value.trim()) {
    translationResults.value.forEach((result) => {
      result.text = '';
    });
    return;
  }

  translating.value = true;

  // 并行翻译所有引擎
  const promises = translationResults.value.map((result) =>
    translateWithEngine(result.engine)
  );

  await Promise.all(promises);
  translating.value = false;
};

// 折叠/展开翻译结果
const toggleExpand = (result: TranslationResult) => {
  result.expanded = !result.expanded;
};

// 监听输入变化，自动翻译
const handleInput = () => {
  showDeleteButton.value = !!sourceText.value;

  // 防抖处理
  if (translateTimeout) {
    clearTimeout(translateTimeout);
  }
  translateTimeout = setTimeout(() => {
    translateAll();
  }, 500);
};

// 翻译结果回来处理
const translateBack = (result: TranslationResult) => {
  sourceText.value = result.text;

  // 交换语言，确保目标语言不是auto
  let newSourceLang = targetLanguage.value;
  let newTargetLang = sourceLanguage.value;

  // 如果新的目标语言是auto，将其修改为'en'以避免必应翻译出错
  if (newTargetLang === 'auto') {
    newTargetLang = 'en';
  }

  sourceLanguage.value = newSourceLang;
  targetLanguage.value = newTargetLang;

  translateAll();
};

onMounted(() => {
  setupListeners();
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
  resetState();
});
</script>

<template>
  <main class="translate-window">
    <div class="header" data-tauri-drag-region>
      <div class="left-buttons">
        <div
          @click="togglePin"
          :class="['pin-button', isPinned ? 'pinned' : '']"
        >
          <span class="material-icons">push_pin</span>
        </div>
      </div>
      <div class="bg-penal text-base" data-tauri-drag-region>翻译</div>
      <div class="right-buttons">
        <div @click="closeWindow" class="material-close">
          <span class="material-icons">close</span>
        </div>
      </div>
    </div>

    <div class="translate-container">
      <!-- 语言选择区域 -->
      <div class="language-selector">
        <el-select
          v-model="sourceLanguage"
          size="small"
          @change="translateAll"
          class="lang-select"
        >
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <div size="small" @click="swapLanguages" class="swap-button">
          <span class="material-icons">swap_horiz</span>
        </div>

        <el-select
          v-model="targetLanguage"
          size="small"
          @change="translateAll"
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
          v-model="sourceText"
          type="textarea"
          :rows="2"
          placeholder="请输入要翻译的文本"
          resize="none"
          @input="handleInput"
          class="source-textarea"
        />
        <div class="source-actions">
          <div class="source-material">
            <el-tooltip content="朗读文本" placement="top" :hide-after="1000">
              <div
                @click="speakText(sourceText, sourceLanguage)"
                class="action-btn"
              >
                <span class="material-icons">volume_up</span>
              </div>
            </el-tooltip>
            <el-tooltip content="删除文本" placement="top" :hide-after="1000">
              <div
                v-if="showDeleteButton"
                @click="clearInput"
                class="action-btn"
              >
                <span class="material-icons">delete</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </div>

      <!-- 多引擎翻译结果区域 -->
      <div class="translation-results">
        <div
          v-for="result in translationResults"
          :key="result.engine"
          class="result-card"
          :class="{ 'result-expanded': result.expanded }"
        >
          <div class="result-header" @click="toggleExpand(result)">
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
              <span>{{ result.name }}</span>
            </div>
            <div class="result-controls">
              <span class="material-icons expand-icon">
                {{ result.expanded ? 'expand_less' : 'expand_more' }}
              </span>
            </div>
          </div>

          <div v-if="result.expanded" class="result-body">
            <el-skeleton v-if="result.loading" :rows="3" animated />
            <div v-else-if="result.text" class="result-text">
              {{ result.text }}
            </div>
            <div v-else class="result-empty">翻译结果将显示在这里</div>

            <div class="result-actions">
              <el-tooltip content="朗读文本" placement="top" :hide-after="1000">
                <div
                  @click="speakText(result.text, targetLanguage)"
                  class="action-btn"
                >
                  <span class="material-icons">volume_up</span>
                </div>
              </el-tooltip>

              <el-tooltip content="复制结果" placement="top" :hide-after="1000">
                <div @click="copyResult(result.text)" class="action-btn">
                  <span class="material-icons">content_copy</span>
                </div>
              </el-tooltip>

              <el-tooltip content="翻译回来" placement="top" :hide-after="1000">
                <div @click="translateBack(result)" class="action-btn">
                  <span class="material-icons">swap_vert</span>
                </div>
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
  @apply w-full h-screen flex flex-col rounded-lg overflow-hidden;
}

.header {
  @apply relative select-none w-full flex justify-between items-center h-9 px-4 z-50;

  background-color: rgba(var(--categories-panel-bg-rgb), 0.9);
  border-bottom: 1px solid rgba(var(--categories-border-color-rgb), 0.8);
  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
}

.left-buttons,
.right-buttons {
  @apply flex items-center gap-2 pt-1 z-10;
}

.pin-button,
.material-close {
  @apply cursor-pointer text-content;
}

.pinned {
  @apply text-[var(--el-color-primary)];

  .material-icons {
    transform: rotate(45deg);
  }
}

.translate-container {
  @apply flex flex-col flex-1 px-2 py-3 gap-3 overflow-y-auto bg-panel;
}

.language-selector {
  @apply flex gap-3 items-center justify-between pt-1 bg-content rounded-md;
}

.lang-select {
  @apply h-full w-28;
}

.swap-button {
  @apply flex items-center justify-center text-[var(--el-color-primary)] cursor-pointer;
}

.source-area {
  @apply relative rounded-md bg-[rgb(240,239,239)] dark:bg-content;

  box-shadow: 0 2px 10px rgb(0 0 0 / 5%);
}

.source-textarea {
  :deep(.el-textarea__inner) {
    @apply p-3 rounded-md transition-all bg-transparent duration-300 ease-in-out resize-none border border-search;
  }
}

.source-actions {
  @apply flex items-center justify-between px-2 py-1;

  /* position: absolute;
  bottom: 8px;
  left: 8px; */
}

.source-material {
  @apply flex items-center gap-2 rounded-md;
}

.translation-results {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.result-card {
  overflow: hidden;
  background-color: var(--el-bg-color-overlay);
  border: 1px solid var(--el-border-color-light);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
  transition: all 0.3s ease;
}

.result-expanded {
  box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
}

.result-header {
  @apply flex items-center justify-between cursor-pointer px-3 py-1 bg-content transition-colors duration-200 hover:bg-[var(--el-fill-color)];
}

.result-title {
  @apply flex items-center gap-2 py-[2px] text-[15px] text-xs text-[var(--el-text-color-primary)];
}

.engine-icon {
  @apply w-4 h-4;
}

.result-controls {
  @apply flex items-center;

  .expand-icon {
    @apply text-[var(--el-text-color-secondary)] transition-transform duration-300;
  }
}

.result-body {
  @apply border-t border-[var(--el-border-color-lighter)] p-[6px];
}

.result-text {
  @apply max-h-32 overflow-y-auto whitespace-pre-wrap break-words text-[15px] text-[var(--el-text-color-primary)] py-[2px];
}

.result-empty {
  @apply text-[var(--el-text-color-secondary)] min-h-16 flex items-center justify-center italic;
}

.result-actions {
  @apply flex justify-end gap-2 mt-1;
}

.action-btn {
  @apply flex items-center justify-center text-[var(--el-color-primary)] hover:bg-content dark:hover:bg-zinc-800 px-1 rounded-md cursor-pointer;
}

.material-icons {
  @apply text-xl;
}
</style>

<style>
/* fallback */
@font-face {
  font-family: 'Material Icons';
  font-family: 'Material Icons', sans-serif;
  font-style: normal;
  font-weight: 400;
  src: url("https://fonts.gstatic.com/s/materialicons/v143/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2")
    format('woff2');
  font-display: block;
}

.material-icons {
  display: inline-block;
  font-family: 'Material Icons';
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
</style>
