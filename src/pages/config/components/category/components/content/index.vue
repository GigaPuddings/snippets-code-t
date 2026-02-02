<template>
  <main class="content-container transparent-input">
    <div class="content-header">
      <div class="content-title">
        <el-input
          ref="titleInputRef"
          v-model="state.title"
          placeholder=""
          @input="handleTitleInput"
          @change="handleTitleChange"
        />
        
        <!-- 编辑器控制按钮（仅笔记类型显示） -->
        <div v-if="currentEditorType === 'note'" class="editor-controls">
          <!-- 阅读模式切换按钮 -->
          <button 
            v-if="editorViewMode !== 'reading'" 
            class="control-btn"
            @click="toggleToReadingMode"
            :title="$t('noteEditor.toggleReading')"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z" />
            </svg>
          </button>
          
          <button 
            v-else 
            class="control-btn"
            @click="toggleToEditingMode"
            :title="$t('noteEditor.toggleEditing')"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
          </button>

          <!-- 大纲按钮 -->
          <button 
            class="control-btn"
            @click="toggleOutline"
            :title="$t('noteEditor.outline')"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- 标签输入 -->
      <div v-if="state.currentContent" class="content-tags">
        <TagInput
          v-model="state.tags"
          :existing-tags="allTags"
          @update:model-value="handleTagsChange"
        />
      </div>
    </div>
    
    <!-- 创建新笔记确认对话框 -->
    <ConfirmDialog
      v-model="showCreateNoteDialog"
      :title="$t('common.tip')"
      :confirm-text="$t('common.create')"
      :cancel-text="$t('common.cancel')"
      @confirm="confirmCreateNote"
    >
      <div>{{ t('category.createNoteConfirm', { name: pendingNoteName }) }}</div>
    </ConfirmDialog>
    
    <!-- 未保存更改确认对话框 -->
    <ConfirmDialog
      v-model="showUnsavedDialog"
      :title="$t('common.warning')"
      :confirm-text="$t('common.save')"
      :cancel-text="$t('category.discardChanges')"
      type="warning"
      @confirm="confirmSaveBeforeNavigation"
      @cancel="discardChangesAndNavigate"
    >
      <div>{{ t('category.unsavedChanges') }}</div>
    </ConfirmDialog>
    
    <!-- 编辑器加载指示器 -->
    <div v-if="state.isEditorLoading" class="editor-loading">
      <div class="loading-spinner"></div>
      <span>{{ t('category.loadingEditor') }}</span>
    </div>
    
    <!-- 编辑器错误提示 -->
    <div v-else-if="state.editorError" class="editor-error">
      <span class="error-icon">⚠</span>
      <span>{{ state.editorError }}</span>
      <el-button size="small" @click="retryLoadEditor">{{ t('category.retry') }}</el-button>
    </div>
    
    <!-- CodeMirror 代码编辑器 (type === 'code') -->
    <CodeMirrorEditor
      v-else-if="currentEditorType === 'code'"
      :key="'code-editor'"
      :code="state.editorContent"
      :codeStyle="{ height: 'calc(100vh - 108px)', overflowY: 'auto' }"
      @update:code="handleEditorChange"
      :dark="isDark"
    />
    
    <!-- TipTap 富文本编辑器 (type === 'note') -->
    <TipTapEditor
      v-else-if="currentEditorType === 'note'"
      ref="tipTapEditorRef"
      :key="'note-editor'"
      :content="state.editorContent"
      :codeStyle="{ height: 'calc(100vh - 108px)', overflowY: 'auto' }"
      :show-view-toggle="true"
      :show-editor-actions="false"
      @update:content="handleEditorChange"
      @wikilink-click="handleWikilinkClick"
      @view-mode-change="handleViewModeChange"
      @outline-toggle="handleOutlineToggle"
      :dark="isDark"
    />
  </main>
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';
import { getFragmentContent, editFragment, searchFragmentContent, addFragment, getFragmentList } from '@/api/fragment';
import { debounce } from '@/utils';
import { parseFragment } from '@/utils/fragment';
import { handleSaveError, handleLoadError, handleEditorError } from '@/utils/errorHandler';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';
import TagInput from '@/components/TagInput/index.vue';
import { useRouter } from 'vue-router';
import { ConfirmDialog } from '@/components/UI';

const { t } = useI18n();

// 懒加载 TipTap 编辑器（优化版本）
const TipTapEditor = defineAsyncComponent({
  loader: () => import('@/components/TipTapEditor/index.vue'),
  loadingComponent: undefined,
  errorComponent: undefined,
  delay: 100,
  timeout: 10000,
  onError(error, retry, fail) {
    console.error('Failed to load TipTap editor:', error);
    handleEditorError(error, 'TipTap lazy loading');
    
    // 提供重试机会
    if (state.editorLoadRetries < 3) {
      state.editorLoadRetries++;
      setTimeout(() => retry(), 1000);
    } else {
      fail();
    }
  }
});

// 组件状态集中管理
const state = reactive({
  title: '',
  editorContent: '',
  currentContent: null as ContentType | null,
  isLoading: false,
  isInitializing: true,
  contentChanged: false,
  isEditorLoading: false,
  editorError: null as string | null,
  lastSavedAt: null as Date | null,
  autoSaveEnabled: true,
  tags: [] as string[],
  editorLoadRetries: 0
});

const route = useRoute();
const router = useRouter();
const store = useConfigurationStore();
const isDark = computed(() => {
  return store.theme === 'auto'
    ? document.documentElement.classList.contains('dark')
    : store.theme === 'dark';
});

// 对话框状态
const showCreateNoteDialog = ref(false);
const showUnsavedDialog = ref(false);
const pendingNoteName = ref('');
const pendingNavigationId = ref<string | null>(null);

// 获取所有已存在的标签（用于自动完成）
const allTags = computed(() => {
  const tagsSet = new Set<string>();
  store.contents.forEach((content: ContentType) => {
    if (content.tags && Array.isArray(content.tags)) {
      content.tags.forEach(tag => tagsSet.add(tag));
    }
  });
  return Array.from(tagsSet);
});

defineOptions({
  name: 'Content'
});

// 计算当前应该显示的编辑器类型
const currentEditorType = computed(() => {
  if (!state.currentContent) return 'code';
  
  // 使用 parseFragment 确保类型字段存在
  const parsed = parseFragment(state.currentContent);
  return parsed.type;
});

// 重试加载编辑器
const retryLoadEditor = () => {
  state.editorError = null;
  state.editorLoadRetries = 0;
  state.isEditorLoading = true;
  
  nextTick(() => {
    state.isEditorLoading = false;
  });
};

// 更新 store 中的内容
const updateStore = (data: Partial<ContentType>) => {
  if (!state.currentContent) return;

  const index = store.contents.findIndex(
    (item) => item.id === state.currentContent?.id
  );

  if (index !== -1) {
    store.contents[index] = {
      ...store.contents[index],
      ...data
    };
  }
};

// TipTap 编辑器引用
const tipTapEditorRef = ref<any>(null);
// 标题输入框引用
const titleInputRef = ref<any>(null);

// 编辑器视图模式状态
const editorViewMode = ref<'reading' | 'preview' | 'source'>('preview');

// 处理视图模式变化
const handleViewModeChange = (mode: 'reading' | 'preview' | 'source') => {
  editorViewMode.value = mode;
};

// 处理大纲切换
const handleOutlineToggle = () => {
  // 大纲状态由编辑器内部管理
};

// 切换到阅读模式
const toggleToReadingMode = () => {
  if (tipTapEditorRef.value) {
    tipTapEditorRef.value.setViewMode('reading');
  }
};

// 切换到编辑模式
const toggleToEditingMode = () => {
  if (tipTapEditorRef.value) {
    tipTapEditorRef.value.setViewMode('preview');
  }
};

// 切换大纲
const toggleOutline = () => {
  if (tipTapEditorRef.value) {
    tipTapEditorRef.value.toggleOutline();
  }
};

// 获取编辑器元数据
const getEditorMetadata = (): FragmentMetadata => {
  const metadata = state.currentContent?.metadata || {};
  
  if (currentEditorType.value === 'note' && tipTapEditorRef.value) {
    const editor = tipTapEditorRef.value.getEditor();
    if (editor) {
      // 获取字数统计
      const text = editor.getText();
      const wordCount = text.trim().split(/\s+/).filter((word: string) => word.length > 0).length;
      
      // 获取光标位置
      const { from } = editor.state.selection;
      
      return {
        ...metadata,
        wordCount,
        lastCursorPosition: from,
        updatedAt: new Date().toISOString()
      };
    }
  } else if (currentEditorType.value === 'code') {
    // 代码片段元数据
    return {
      ...metadata,
      updatedAt: new Date().toISOString()
    };
  }
  
  return metadata;
};

// 序列化内容（根据 format 字段）
const serializeContent = (content: string, _format: ContentFormat): string => {
  // 当前实现中，TipTap 已经输出 HTML，CodeMirror 输出纯文本
  // 这里可以根据需要进行格式转换
  // 目前保持原格式
  return content;
};

// 处理标签变更
const handleTagsChange = (newTags: string[]) => {
  if (state.isInitializing) return;
  
  state.tags = newTags;
  state.contentChanged = true;
  debouncedSave();
};

// 保存内容的核心逻辑
const saveContent = async (data: Partial<ContentType> = {}) => {
  if (!state.currentContent || state.isLoading) return;

  try {
    state.isLoading = true;

    // 获取编辑器元数据
    const metadata = getEditorMetadata();
    
    // 序列化内容
    const serializedContent = serializeContent(
      state.editorContent,
      state.currentContent.format || 'plain'
    );

    // 准备更新参数（用于 store）
    const updateParams = {
      ...state.currentContent,
      title: state.title,
      content: serializedContent,
      metadata,
      tags: state.tags,
      ...data,
      fragmentType: state.currentContent.type || 'code'
    };

    // 准备 API 参数（category_id 转换为 null 而不是 undefined）
    const apiParams = {
      ...updateParams,
      category_id: state.currentContent.category_id ?? null
    };

    await editFragment(apiParams);
    updateStore(updateParams);

    // 更新当前内容的引用
    state.currentContent = {
      ...state.currentContent,
      ...updateParams
    };
    state.contentChanged = false;
    state.lastSavedAt = new Date();
  } catch (error) {
    handleSaveError(error, 'saveContent');
    // Re-throw to allow caller to handle if needed
    throw error;
  } finally {
    state.isLoading = false;
  }
};

// 使用 useDebounceFn 代替普通的 debounce
const debouncedSave = debounce(saveContent, 300);

// 处理内容变更的通用函数
const handleContentChange = (
  value: string,
  field: 'title' | 'content',
  currentValue?: string
) => {
  if (state.isInitializing) return;

  if (value !== currentValue) {
    state.contentChanged = true;
    if (field === 'title') {
      state.title = value;
      // 标题变更时立即更新 store，提升用户体验
      updateStore({ title: value });
    } else {
      state.editorContent = value;
    }

    debouncedSave();
  }
};

// 处理标题输入（实时更新 store，不保存到数据库）
const handleTitleInput = (value: string) => {
  if (state.isInitializing) return;
  
  state.title = value;
  // 实时更新 store 中的标题，让 contentList 立即看到变化
  updateStore({ title: value });
};

// 处理标题变更（失焦时保存到数据库）
const handleTitleChange = (value: string) => {
  if (state.isInitializing) return;
  
  if (value !== state.currentContent?.title) {
    state.contentChanged = true;
    debouncedSave();
  }
};

// 处理编辑器内容变更
const handleEditorChange = (value: string) =>
  handleContentChange(value, 'content', state.currentContent?.content);

// 处理 Wikilink 点击
const handleWikilinkClick = async (noteName: string) => {
  try {
    // 搜索匹配的片段（按标题搜索）
    const fragments = await searchFragmentContent(noteName);
    
    if (fragments.length > 0) {
      // 找到匹配的片段，跳转到第一个匹配项
      const targetFragment = fragments[0];
      
      // 如果有未保存的更改，先保存
      if (state.contentChanged) {
        await saveContent();
      }
      
      // 跳转到目标片段
      router.push({
        path: `/config/category/contentList/${targetFragment.category_id}/content/${targetFragment.id}`
      });
    } else {
      // 未找到匹配的片段，显示创建确认对话框
      pendingNoteName.value = noteName;
      showCreateNoteDialog.value = true;
    }
  } catch (error) {
    console.error('Failed to handle wikilink click:', error);
    ElMessage.error(t('content.handleLinkFailed'));
  }
};

// 确认创建新笔记
const confirmCreateNote = async () => {
  try {
    const noteName = pendingNoteName.value;
    
    // 用户确认创建，创建新笔记
    const currentCategoryId = typeof state.currentContent?.category_id === 'number' 
      ? state.currentContent.category_id 
      : Number(state.currentContent?.category_id) || 0;
    const newFragmentId = await addFragment({
      categoryId: currentCategoryId,
      fragmentType: 'note'
    });
    
    // 刷新内容列表
    const result = await getFragmentList(currentCategoryId);
    store.contents = result;
    
    // 跳转到新笔记并设置标题
    router.push({
      path: `/config/category/contentList/${currentCategoryId}/content/${newFragmentId}`
    });
    
    // 等待路由跳转完成后设置标题
    await nextTick();
    await nextTick();
    
    // 通过 API 更新标题
    await editFragment({
      id: newFragmentId,
      title: noteName,
      content: '',
      category_id: currentCategoryId,
      fragmentType: 'note'
    });
    
    showCreateNoteDialog.value = false;
  } catch (error) {
    console.error('Failed to create note:', error);
    ElMessage.error(t('content.createNoteFailed'));
  }
};

// 获取片段内容
const fetchContent = async () => {
  state.isInitializing = true;
  state.isEditorLoading = true;
  state.editorError = null;

  try {
    const result = await getFragmentContent(Number(route.params.id));

    if (result) {
      // 使用 parseFragment 确保所有字段存在
      const parsedContent = parseFragment(result);
      
      state.currentContent = parsedContent;
      state.title = parsedContent.title;
      state.tags = parsedContent.tags || [];
      
      // 反序列化内容（根据 format 字段）
      state.editorContent = deserializeContent(
        parsedContent.content || '',
        parsedContent.format || 'plain'
      );
      
      state.contentChanged = false;
      state.lastSavedAt = null;
      
      // 编辑器加载完成
      await nextTick();
      state.isEditorLoading = false;
      
      // 如果有保存的光标位置，恢复它
      if (parsedContent.metadata && parsedContent.metadata.lastCursorPosition && currentEditorType.value === 'note') {
        nextTick(() => {
          if (tipTapEditorRef.value) {
            const editor = tipTapEditorRef.value.getEditor();
            if (editor && parsedContent.metadata) {
              editor.commands.focus();
              editor.commands.setTextSelection(parsedContent.metadata.lastCursorPosition);
            }
          }
        });
      }
    }
  } catch (error) {
    handleLoadError(error, 'fetchContent');
    state.editorError = t('category.loadFailed');
  } finally {
    nextTick(() => {
      state.isInitializing = false;
      state.isEditorLoading = false;
    });
  }
};

// 反序列化内容（根据 format 字段）
const deserializeContent = (content: string, _format: ContentFormat): string => {
  // 当前实现中，内容已经是正确的格式
  // HTML 格式直接用于 TipTap，plain 格式直接用于 CodeMirror
  return content;
};

// 监听路由参数变化
watch(
  () => route.params.id,
  async (newId, oldId) => {
    // 如果路由参数变化，先检查是否有未保存的更改
    if (oldId && state.currentContent && state.contentChanged) {
      // 显示未保存提示
      pendingNavigationId.value = newId as string;
      showUnsavedDialog.value = true;
      return;
    }
    
    // 加载新内容
    if (newId) {
      await fetchContent();
      
      // 只有在重命名操作时才聚焦标题输入框
      if (route.query.rename === 'true') {
        nextTick(() => {
          if (titleInputRef.value) {
            titleInputRef.value.focus();
            // 选中所有文本
            titleInputRef.value.select();
          }
        });
        
        // 清除 query 参数，避免下次进入时误触发
        router.replace({
          path: route.path,
          query: {}
        });
      }
    }
  },
  { immediate: true } // 立即执行一次，替代 onMounted 的逻辑
);

// 确认保存并导航
const confirmSaveBeforeNavigation = async () => {
  try {
    debouncedSave.cancel();
    await saveContent();
    showUnsavedDialog.value = false;
    
    // 执行导航
    if (pendingNavigationId.value) {
      await fetchContent();
      pendingNavigationId.value = null;
    }
  } catch (error) {
    console.error('Save before navigation failed:', error);
    ElMessage.error(t('category.saveFailed'));
  }
};

// 放弃更改并导航
const discardChangesAndNavigate = async () => {
  state.contentChanged = false;
  showUnsavedDialog.value = false;
  
  // 执行导航
  if (pendingNavigationId.value) {
    await fetchContent();
    pendingNavigationId.value = null;
  }
};

// 监听编辑器类型变化，确保内容保持不变
watch(currentEditorType, (newType, oldType) => {
  if (oldType && newType !== oldType) {
    // 内容已经在 state.editorContent 中，切换时会自动传递给新编辑器
  }
});

// 组件卸载前保存
onBeforeUnmount(async () => {
  if (state.currentContent && state.contentChanged) {
    debouncedSave.cancel();
    await saveContent();
  }
});

// 监听浏览器关闭/刷新事件
onMounted(() => {
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (state.contentChanged) {
      e.preventDefault();
      e.returnValue = '';
      return '';
    }
  };
  
  window.addEventListener('beforeunload', handleBeforeUnload);
  
  onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  });
});
</script>

<style scoped lang="scss">
@mixin common() {
  @apply outline-none bg-panel;
}

.content-container {
  @apply h-full text-xs bg-panel;

  display: grid;
  grid-template-rows: auto 1fr;

  .content-header {
    @apply border-b border-panel mx-2;
    
    .content-title {
      @apply flex items-center gap-2 h-[40px];

      :deep(input) {
        @apply text-lg text-panel pt-1 box-border;
      }
      
      .editor-controls {
        @apply flex items-center gap-1 ml-auto;
        flex-shrink: 0;
      }
    }
    
    .content-tags {
      @apply py-2;
    }
  }
}

.editor-loading {
  @apply flex flex-col items-center justify-center h-full gap-4 text-content;
  
  .loading-spinner {
    @apply w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full;
    animation: spin 1s linear infinite;
  }
  
  span {
    @apply text-base;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.editor-error {
  @apply flex flex-col items-center justify-center h-full gap-4 text-red-500;
  
  .error-icon {
    @apply text-5xl;
  }
  
  span {
    @apply text-base text-center px-4;
  }
  
  .el-button {
    @apply mt-2;
  }
}

.control-btn {
  @apply w-8 h-8 flex items-center justify-center rounded cursor-pointer;
  background: transparent;
  border: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--categories-panel-bg-hover);
  }
  
  &:active {
    transform: scale(0.95);
    background-color: var(--categories-bg-tab-active);
  }
  
  svg {
    @apply text-gray-500;
    transition: color 0.2s ease;
  }
  
  &:hover svg {
    color: var(--el-color-primary);
  }
}

:global(.dark) {
  .control-btn {
    &:hover {
      background-color: var(--categories-panel-bg-hover);
    }
    
    &:active {
      background-color: var(--categories-bg-tab-active);
    }
    
    svg {
      @apply text-gray-400;
    }
    
    &:hover svg {
      color: var(--el-color-primary);
    }
  }
}
</style>
