<template>
  <div class="preview-window">
    <!-- 标题栏 -->
    <div class="preview-header" data-tauri-drag-region>
      <span class="snippet-title" data-tauri-drag-region>
        {{ snippet?.title || $t('snippetPreview.untitled') }}
      </span>
      <div class="header-actions" data-tauri-drag-region="false">
        <button 
          class="detail-btn" 
          @click="handleOpenDetail" 
          :title="$t('snippetPreview.openDetail') || '详细查看'"
          data-tauri-drag-region="false"
        >
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </button>
        <button class="close-btn" @click="handleClose" title="Esc" data-tauri-drag-region="false">×</button>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-if="isLoading" class="preview-loading">
      <div class="loading-spinner"></div>
      <span>{{ $t('common.loading') || '加载中...' }}</span>
    </div>

    <!-- 内容区域 -->
    <div v-else class="preview-content">
      <!-- 笔记类型 - 使用 TipTap 富文本编辑器 -->
      <TipTapEditor
        v-if="snippet?.type === 'note' && snippet?.content"
        ref="noteEditorRef"
        :content="snippet.content"
        :dark="isDark"
        :disabled="true"
        :autofocus="false"
        :showViewToggle="false"
        :showEditorActions="false"
        :showContextMenu="false"
        :codeStyle="{ height: '100%', overflow: 'auto' }"
      />
      
      <!-- 代码类型 - 使用 CodeMirror -->
      <CodeMirrorEditor
        v-else-if="snippet?.content"
        ref="codeEditorRef"
        :code="displayContent"
        :dark="isDark"
        :disabled="true"
        :codeStyle="{ height: '100%', overflow: 'auto' }"
      />
      
      <div v-else class="empty-content">
        {{ $t('snippetPreview.noContent') || '无内容' }}
      </div>
    </div>

    <!-- 底部操作栏 -->
    <div class="preview-footer">
      <div class="footer-hint">
        <kbd>Enter</kbd> {{ $t('snippetPreview.copyAndClose') }}
        <span class="divider">|</span>
        <kbd>Esc</kbd> {{ $t('snippetPreview.close') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { invoke } from '@tauri-apps/api/core';
import { getCurrentWindow } from '@tauri-apps/api/window';
import { emit, listen } from '@tauri-apps/api/event';
import { useConfigurationStore } from '@/store';
import { processTemplate, previewTemplate } from '@/utils/templateParser';
import CodeMirrorEditor from '@/components/CodeMirrorEditor/index.vue';
import TipTapEditor from '@/components/TipTapEditor/index.vue';

const route = useRoute();
const store = useConfigurationStore();

const snippet = ref<ContentType | null>(null);
const isLoading = ref(true);
const codeEditorRef = ref<InstanceType<typeof CodeMirrorEditor> | null>(null);
const noteEditorRef = ref<InstanceType<typeof TipTapEditor> | null>(null);

// 主题计算 - 与 content 页面保持一致
const isDark = computed(() => {
  return store.theme === 'auto'
    ? document.documentElement.classList.contains('dark')
    : store.theme === 'dark';
});

// 预览内容（处理模板变量显示）
const displayContent = computed(() => {
  if (!snippet.value?.content) return '';
  return previewTemplate(snippet.value.content);
});

// 应用主题到 document
const applyTheme = () => {
  const shouldBeDark = store.theme === 'dark' || 
    (store.theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (shouldBeDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// 从 URL 参数获取片段数据
onMounted(async () => {
  // 应用主题
  applyTheme();
  
  // 监听主题变化事件
  await listen('theme-changed', (event: any) => {
    if (event.payload?.theme) {
      store.theme = event.payload.theme;
    }
    applyTheme();
  });

  // 监听系统主题变化
  await listen('dark-mode-changed', (event: any) => {
    if (store.theme === 'auto') {
      store.syncSystemThemeStyle(event.payload.isDark);
      applyTheme();
    }
  });
  
  // 解析片段数据
  const snippetData = route.query.data as string;
  
  if (snippetData) {
    try {
      // 还原 URL 安全的 base64 编码：将 - 替换回 +，_ 替换回 /，补齐 =
      let base64 = snippetData.replace(/-/g, '+').replace(/_/g, '/');
      // 补齐 padding
      while (base64.length % 4) {
        base64 += '=';
      }
      const decoded = decodeURIComponent(atob(base64));
      snippet.value = JSON.parse(decoded);
    } catch (e) {
      console.error('Failed to parse snippet data:', e);
    }
  }

  document.addEventListener('keydown', handleKeyDown);
  
  // 等待渲染完成
  await nextTick();
  isLoading.value = false;
  
  // 通知后端窗口已准备好
  if (snippet.value) {
    await emit('preview-ready');
  }
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});

// 键盘事件
const handleKeyDown = async (e: KeyboardEvent) => {
  if (e.code === 'Escape') {
    handleClose();
  } else if (e.code === 'Enter') {
    e.preventDefault();
    await handleCopy();
  }
};

// 复制并粘贴（支持选中部分文本）
const handleCopy = async () => {
  if (!snippet.value) return;
  
  let textToCopy: string;
  
  // 根据类型获取选中的文本
  if (snippet.value.type === 'note') {
    // 笔记类型：从 TipTap 编辑器获取文本
    const selectedText = noteEditorRef.value?.getEditor()?.state.doc.textBetween(
      noteEditorRef.value?.getEditor()?.state.selection.from || 0,
      noteEditorRef.value?.getEditor()?.state.selection.to || 0,
      '\n'
    ) || '';
    
    if (selectedText) {
      textToCopy = selectedText;
    } else {
      // 没有选中文本，复制全部内容（纯文本）
      textToCopy = noteEditorRef.value?.getText() || snippet.value.content;
    }
  } else {
    // 代码类型：从 CodeMirror 获取文本
    const selectedText = codeEditorRef.value?.getSelection() || '';
    
    if (selectedText) {
      textToCopy = selectedText;
    } else {
      // 没有选中文本，复制全部内容并处理模板变量
      const result = await processTemplate(snippet.value.content);
      textToCopy = result.content;
    }
  }
  
  try {
    await navigator.clipboard.writeText(textToCopy);
    handleClose();
    // 插入到上一个窗口
    setTimeout(async () => {
      await invoke('insert_text_to_last_window', { text: textToCopy });
    }, 100);
  } catch (err) {
    console.error('Copy failed:', err);
  }
};

// 打开详细查看 - 跳转到配置窗口
const handleOpenDetail = async () => {
  if (!snippet.value) {
    console.error('[Preview] No snippet data available');
    return;
  }
  
  const fragmentId = snippet.value.id;
  const categoryId = snippet.value.category_id;
  
  try {
    // 存储导航数据到 localStorage
    const navigationData = {
      fragmentId,
      categoryId,
      timestamp: Date.now()
    };
    localStorage.setItem('pendingNavigation', JSON.stringify(navigationData));
    
    // 调用异步 command 打开配置窗口
    await invoke('show_hide_window_command', { 
      label: 'config',
      context: 'preview_navigation'
    });
    
    // 关闭预览窗口
    await handleClose();
  } catch (err) {
    console.error('[Preview] Failed to open config window:', err);
    // 失败时清除导航数据
    localStorage.removeItem('pendingNavigation');
  }
};

// 关闭窗口
const handleClose = async () => {
  const win = getCurrentWindow();
  await win.close();
};
</script>

<style lang="scss" scoped>
.preview-window {
  @apply flex flex-col h-screen overflow-hidden;
  background: var(--search-bg-color);
  
  .preview-header {
    @apply flex items-center justify-between px-3 py-2 flex-shrink-0;
    background: var(--categories-panel-bg);
    border-bottom: 1px solid var(--search-border-color);
    
    .snippet-title {
      @apply font-medium text-sm truncate flex-1 select-none;
      color: var(--search-text-color);
      max-width: 300px;
    }
    
    .header-actions {
      @apply flex items-center gap-1;
      position: relative;
      z-index: 100;
    }
    
    .detail-btn {
      @apply w-6 h-6 flex items-center justify-center rounded transition-colors cursor-pointer;
      color: var(--search-info-text-color);
      background: transparent;
      border: none;
      position: relative;
      z-index: 101;
      
      &:hover {
        background: var(--categories-panel-bg-hover);
        color: var(--el-color-primary);
      }
      
      &:active {
        transform: scale(0.95);
      }
      
      svg {
        @apply flex-shrink-0;
        pointer-events: none;
      }
    }
    
    .close-btn {
      @apply w-6 h-6 flex items-center justify-center rounded transition-colors text-lg leading-none cursor-pointer;
      color: var(--search-info-text-color);
      background: transparent;
      border: none;
      
      &:hover {
        background: var(--categories-panel-bg-hover);
        color: var(--search-text-color);
      }
    }
  }
  
  .preview-loading {
    @apply flex-1 flex flex-col items-center justify-center gap-3;
    color: var(--search-info-text-color);
    
    .loading-spinner {
      @apply w-6 h-6 border-2 rounded-full animate-spin;
      border-color: var(--search-border-color);
      border-top-color: var(--el-color-primary);
    }
  }
  
  .preview-content {
    @apply flex-1 overflow-hidden;
    
    .empty-content {
      @apply flex items-center justify-center h-full text-sm;
      color: var(--search-placeholder);
    }
  }
  
  .preview-footer {
    @apply flex items-center justify-center px-3 py-1.5 flex-shrink-0;
    background: var(--categories-panel-bg);
    border-top: 1px solid var(--search-border-color);
    
    .footer-hint {
      @apply flex items-center gap-2 text-xs;
      color: var(--search-info-text-color);
      
      kbd {
        @apply px-1.5 py-0.5 rounded text-[10px] font-mono;
        background: var(--categories-panel-bg-hover);
        color: var(--search-text-color);
      }
      
      .divider {
        @apply mx-1 opacity-50;
      }
    }
  }
}

// TipTap 编辑器样式覆盖 - 预览模式优化（小窗口适配）
:deep(.editor-container) {
  height: 100%;
  
  .editor-main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .editor-content {
    flex: 1;
    height: 100% !important;
    overflow-y: auto;
    overflow-x: hidden;
    
    .tiptap {
      height: auto !important;
      min-height: 100%;
      padding: 12px 16px;
      font-size: 13px;
      line-height: 1.6;
      word-wrap: break-word;
      word-break: break-word;
      overflow-wrap: break-word;
    }
  }
  
  // 强制隐藏状态栏
  .editor-status {
    display: none !important;
  }
}

// 针对小窗口优化各级标题和元素的大小
:deep(.tiptap-editor) {
  // 全局自动换行设置
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  
  h1 {
    @apply text-xl font-bold mb-3 mt-4;
    word-wrap: break-word;
  }

  h2 {
    @apply text-lg font-bold mb-2.5 mt-3.5;
    word-wrap: break-word;
  }

  h3 {
    @apply text-base font-bold mb-2 mt-3;
    word-wrap: break-word;
  }

  h4 {
    @apply text-sm font-bold mb-2 mt-2.5;
    word-wrap: break-word;
  }

  h5 {
    @apply text-sm font-bold mb-1.5 mt-2;
    word-wrap: break-word;
  }

  h6 {
    @apply text-xs font-bold mb-1.5 mt-2;
    word-wrap: break-word;
  }

  p {
    @apply mb-2 leading-relaxed;
    font-size: 13px;
    word-wrap: break-word;
    word-break: break-word;
  }

  code {
    @apply px-1 py-0.5 rounded text-xs;
    word-wrap: break-word;
    word-break: break-all;
    white-space: pre-wrap;
  }

  pre {
    @apply rounded p-3 mb-3;
    font-size: 12px;
    overflow-x: hidden;
    overflow-y: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    
    code {
      @apply p-0 text-xs;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-all;
    }
  }

  ul, ol {
    @apply mb-3 pl-4;
    font-size: 13px;

    li {
      @apply mb-1;
      word-wrap: break-word;
      word-break: break-word;
    }
  }

  blockquote {
    @apply border-l-4 pl-3 mb-3;
    font-size: 13px;
    word-wrap: break-word;
  }

  table {
    @apply mb-3;
    font-size: 12px;
    table-layout: fixed;
    width: 100%;
    overflow-x: hidden;

    th, td {
      @apply px-2 py-1.5;
      word-wrap: break-word;
      word-break: break-word;
      overflow-wrap: break-word;
    }
  }

  .task-list {
    .task-item {
      @apply mb-1.5;
      font-size: 13px;
      word-wrap: break-word;
    }
  }
  
  // 链接自动换行
  a {
    word-wrap: break-word;
    word-break: break-all;
  }
  
  // 确保所有内容不超出容器
  * {
    max-width: 100%;
  }
}

// CodeMirror 容器样式覆盖
:deep(.code-editor-container) {
  height: 100%;
  
  .editor-content {
    height: calc(100% - 24px);
  }
  
  .editor-status {
    @apply h-6 text-xs;
  }
}
</style>
