<template>
  <div class="preview-window">
    <!-- 标题栏 -->
    <div class="preview-header" data-tauri-drag-region>
      <span class="snippet-title" data-tauri-drag-region>
        {{ snippet?.title || $t('snippetPreview.untitled') }}
      </span>
      <button class="close-btn" @click="handleClose" title="Esc">×</button>
    </div>

    <!-- 加载状态 -->
    <div v-if="isLoading" class="preview-loading">
      <div class="loading-spinner"></div>
      <span>{{ $t('common.loading') || '加载中...' }}</span>
    </div>

    <!-- 代码内容 - 使用 CodeMirror -->
    <div v-else class="preview-content">
      <CodeMirrorEditor
        ref="editorRef"
        v-if="snippet?.content"
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

const route = useRoute();
const store = useConfigurationStore();

const snippet = ref<ContentType | null>(null);
const isLoading = ref(true);
const editorRef = ref<InstanceType<typeof CodeMirrorEditor> | null>(null);

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
  
  // 检查是否有选中的文本
  const selectedText = editorRef.value?.getSelection() || '';
  
  let textToCopy: string;
  if (selectedText) {
    // 如果有选中文本，直接使用选中的内容（不处理模板变量）
    textToCopy = selectedText;
  } else {
    // 没有选中文本，复制全部内容并处理模板变量
    const result = await processTemplate(snippet.value.content);
    textToCopy = result.content;
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

// CodeMirror 容器样式覆盖
:deep(.editor-container) {
  height: 100%;
  
  .editor-content {
    height: calc(100% - 24px);
  }
  
  .editor-status {
    @apply h-6 text-xs;
  }
}
</style>
