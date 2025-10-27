<script lang="ts" setup>
import { invoke } from '@tauri-apps/api/core';
import { listen } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { ElMessage } from 'element-plus';
import googleIcon from '@/assets/svg/google.svg';
import bingIcon from '@/assets/svg/bing.svg';
import { nextTick, onMounted, onUnmounted, ref } from 'vue';

const appWindow = getCurrentWindow();

// 组件和状态
const translating = ref(false);
const sourceText = ref('');
const sourceLanguage = ref('auto');
const targetLanguage = ref('zh');
const isPinned = ref(false);
const showDeleteButton = ref(false);
const sourceTextArea = ref();

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

  // 监听划词翻译消息
  const unlistenSelectionText = await listen('selection-text', (event: any) => {
    console.log('🔔 收到划词翻译消息:', event.payload);
    if (event.payload && event.payload.text) {
      console.log('📝 选中的文本:', event.payload.text);
      handleSelectionText(event.payload.text);
    } else {
      console.warn('⚠️ 收到的消息没有文本内容');
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
    unlistenShow();
  };
  
  console.log('✅ 所有监听器设置完成');
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

// 检测文本语言类型（简单判断是中文还是英文）
const detectLanguage = (text: string) => {
  if (!text) return 'unknown';

  // 中文字符范围
  const chineseRegex = /[\u4e00-\u9fa5]/;
  // 英文字符范围（包括常见标点符号）
  const englishRegex = /[a-zA-Z0-9]/;

  // 统计中英文字符数量
  let chineseCount = 0;
  let englishCount = 0;

  for (let i = 0; i < text.length; i++) {
    if (chineseRegex.test(text[i])) {
      chineseCount++;
    } else if (englishRegex.test(text[i])) {
      englishCount++;
    }
  }

  // 根据字符数量比例判断语言类型
  // 如果包含中文字符，优先认为是中文
  if (chineseCount > 0) {
    // 如果英文字符数量明显多于中文（比例超过2倍），则判断为英文
    if (englishCount > chineseCount * 2) {
      return 'en';
    }
    return 'zh';
  } else if (englishCount > 0) {
    return 'en';
  } else {
    // 对于无法识别的语言，默认按英文处理
    return 'en';
  }
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
    
    // 根据不同的错误提供更友好的提示
    const errorMessage = String(error);
    if (errorMessage.includes('429') || errorMessage.includes('Too Many Requests')) {
      result.text = '请求过于频繁，请稍后再试';
    } else if (errorMessage.includes('timeout') || errorMessage.includes('超时')) {
      result.text = '翻译超时，请检查网络连接';
    } else if (errorMessage.includes('network') || errorMessage.includes('网络')) {
      result.text = '网络连接失败，请检查网络';
    } else {
      result.text = '翻译失败，请重试';
    }
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

  // 翻译前自动设置目标语言
  autoSetTargetLanguage();

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

  // 如果文本非空，则安排翻译
  if (sourceText.value.trim()) {
    translateTimeout = setTimeout(() => {
      translateAll();
    }, 500);
  } else {
    // 文本为空时清空翻译结果
    translationResults.value.forEach((result) => {
      result.text = '';
    });
  }
};

// 防止重复翻译的标记
let lastTranslatedText = '';
let isTranslating = false;

// 添加一个新方法专门用于处理selection-text事件
const handleSelectionText = (text: string) => {
  if (!text) {
    console.warn('⚠️ handleSelectionText: 文本为空');
    return;
  }

  // 防止重复翻译相同的文本
  if (text === lastTranslatedText && isTranslating) {
    console.log('⏭️ 跳过重复翻译:', text);
    return;
  }

  console.log('✅ 处理选中文本:', text);
  lastTranslatedText = text;
  isTranslating = true;
  
  sourceText.value = text;
  showDeleteButton.value = true;

  // 先自动设置目标语言，再执行翻译
  console.log('🔄 自动设置目标语言...');
  autoSetTargetLanguage();
  
  // 立即触发翻译，不使用防抖
  console.log('🚀 开始翻译...');
  translateAll().finally(() => {
    // 翻译完成后，延迟重置标记，避免过早重置
    setTimeout(() => {
      isTranslating = false;
    }, 2000);
  });

  // 确保输入框获得焦点
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
  // 先设置监听器，等待所有监听器设置完成
  await setupListeners();
  
  // 组件挂载后自动设置目标语言（如果有文本）
  if (sourceText.value.trim()) {
    autoSetTargetLanguage();
  }
  
  // 组件挂载后也聚焦输入框
  focusSourceTextArea();
  
  // 确保DOM更新完成后，再通知后端前端已准备完成
  await nextTick();
  
  // 添加一个小延迟确保所有初始化完成
  setTimeout(() => {
    console.log('前端准备完成，发送 translate_ready 事件');
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

        <div size="small" @click="swapLanguages" class="swap-button">
          <span class="material-icons">swap_horiz</span>
        </div>

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
            <el-tooltip
              v-if="showDeleteButton"
              content="删除文本"
              placement="top"
              :hide-after="1000"
            >
              <div @click="clearInput" class="action-btn">
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
  src: url('https://fonts.gstatic.com/s/materialicons/v143/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2')
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
