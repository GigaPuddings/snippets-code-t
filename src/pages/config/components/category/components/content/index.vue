<template>
  <main class="content-container transparent-input">
    <div class="content-header">
      <div class="content-title">
        <el-input ref="titleInputRef" v-model="state.title" placeholder="" @change="handleTitleChange" />

        <!-- 编辑器控制按钮（仅笔记类型显示） -->
        <div v-if="currentEditorType === 'note'" class="editor-controls">
          <!-- 阅读模式切换按钮 -->
          <button v-if="editorViewMode !== 'reading'" class="control-btn" @click="toggleToReadingMode"
            :title="$t('noteEditor.toggleReading')">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor"
                d="M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z" />
            </svg>
          </button>

          <button v-else class="control-btn" @click="toggleToEditingMode" :title="$t('noteEditor.toggleEditing')">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor"
                d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
          </button>

          <!-- 大纲按钮 -->
          <button class="control-btn" @click="toggleOutline" :title="$t('noteEditor.outline')">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor"
                d="M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 标签输入 -->
      <div v-if="state.currentContent" class="content-tags">
        <TagInput v-model="state.tags" :existing-tags="allTags" @update:model-value="handleTagsChange" />
      </div>
    </div>

    <!-- 创建新笔记确认对话框 -->
    <ConfirmDialog v-model="showCreateNoteDialog" :title="$t('common.tip')" :confirm-text="$t('common.create')"
      :cancel-text="$t('common.cancel')" @confirm="confirmCreateNote">
      <div>{{ t('category.createNoteConfirm', { name: pendingNoteName }) }}</div>
    </ConfirmDialog>

    <!-- 未保存更改确认对话框 -->
    <ConfirmDialog v-model="showUnsavedDialog" :title="$t('common.warning')" :confirm-text="$t('common.save')"
      :cancel-text="$t('category.discardChanges')" type="warning" @confirm="confirmSaveBeforeNavigation"
      @cancel="discardChangesAndNavigate">
      <div>{{ t('category.unsavedChanges') }}</div>
    </ConfirmDialog>

    <!-- 反向链接更新对话框 -->
    <BacklinkUpdateDialog v-model="showBacklinkDialog" :fragment-title="backlinkUpdateData?.oldTitle || ''"
      :new-fragment-title="backlinkUpdateData?.newTitle || ''" :backlink-count="backlinkStats?.count || 0"
      :backlink-fragments="backlinkStats?.fragments || []" @confirm="handleBacklinkUpdateConfirm"
      @cancel="handleBacklinkUpdateCancel" />

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
    <CodeMirrorEditor v-else-if="currentEditorType === 'code'" :key="'code-editor'" :code="state.editorContent"
      :codeStyle="{ height: 'calc(100vh - 108px)', overflowY: 'auto' }" @update:code="handleEditorChange"
      :dark="isDark" />

    <!-- TipTap 富文本编辑器 (type === 'note') -->
    <TipTapEditor v-else-if="currentEditorType === 'note'" ref="tipTapEditorRef" :key="'note-editor'"
      :content="noteEditorDisplayContent" :codeStyle="{ height: 'calc(100vh - 108px)', overflowY: 'auto' }"
      :show-view-toggle="true" :show-editor-actions="false" :current-title="state.title"
      :current-fragment-id="state.currentContent?.id" @update:content="handleEditorChange"
      @wikilink-click="handleWikilinkClick" @view-mode-change="handleViewModeChange"
      @outline-toggle="handleOutlineToggle" @backlink-navigate="handleBacklinkNavigate"
      @scroll-position="handleEditorScrollPosition" :dark="isDark" />
  </main>
</template>

<script setup lang="ts">
import { useConfigurationStore } from '@/store';
import { getFragmentContent, editFragment, addFragment, getFragmentList } from '@/api/fragment';
import { searchMarkdownFiles } from '@/api/markdown';
import { debounce } from '@/utils';
import { logger } from '@/utils/logger';
import { parseFragment } from '@/utils/fragment';
import { handleSaveError, handleLoadError, handleEditorError } from '@/utils/error-handler';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import TagInput from '@/components/TagInput/index.vue';
import { useRouter } from 'vue-router';
import { ConfirmDialog } from '@/components/UI';
import { findBacklinks, getBacklinkStats } from '@/utils/wikilink-updater';
import BacklinkUpdateDialog from '@/components/UI/BacklinkUpdateDialog.vue';
import { htmlToMarkdown, createTurndownService, markdownToHtml, jsonToMarkdown } from '@/components/TipTapEditor/utils/markdown';
import { getWorkspaceRoot, syncAttachmentsOnRename, cleanupUnusedAttachments } from '@/api/markdown';
import { notifyFileEdit } from '@/api/git';

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

// 工作区根目录
const workspaceRoot = ref<string>('');

// 笔记编辑器展示用内容：始终传 HTML。若 state.editorContent 已是 HTML（如旧文件）则原样传，否则按 Markdown 转 HTML
const noteEditorDisplayContent = computed(() => {
  const c = state.editorContent;
  if (!c || currentEditorType.value !== 'note') return c ?? '';
  if (c.trimStart().startsWith('<') && c.includes('</')) return c;
  try {
    return markdownToHtml(c, workspaceRoot.value);
  } catch {
    return c;
  }
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

// 反向链接更新对话框状态
const showBacklinkDialog = ref(false);
const backlinkUpdateData = ref<{
  oldTitle: string;
  newTitle: string;
} | null>(null);
const backlinkStats = ref<{
  count: number;
  fragments: Array<{ id: number | string; title: string; occurrences: number }>;
} | null>(null);

// 保存原始标题用于检测变化
const originalTitle = ref<string>('');

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

// 用户滚动时的处理
const handleEditorScrollPosition = (_scrollTop: number) => {
  if (!state.currentContent) return;
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
const serializeContent = (content: string, _format: ContentFormat, editorType: 'code' | 'note'): string => {
  // 如果是笔记类型，需要将内容转换为 Markdown 保存
  if (editorType === 'note') {
    // 检查内容是否为空或仅包含空白
    if (!content || content.trim() === '' || content === '<p></p>') {
      return '';
    }

    // 检测当前是否处于源码模式
    const isSourceMode = tipTapEditorRef.value?.getViewMode() === 'source';

    // 如果处于源码模式，content 已经是 Markdown 格式，直接返回
    if (isSourceMode) {
      return content;
    }

    // 检测内容是否为 HTML（需要转换）；否则假定已是 Markdown，直接返回
    const isHtmlContent = content.trim().startsWith('<') && content.includes('</');

    // 编辑器未就绪时的回退：绝不把 HTML 写入磁盘，统一转为 Markdown
    if (!tipTapEditorRef.value) {
      if (isHtmlContent) {
        try {
          const turndownService = createTurndownService();
          return htmlToMarkdown(content, turndownService);
        } catch (error) {
          console.error('[Content] HTML 转 Markdown 失败:', error);
          return content;
        }
      }
      return content;
    }

    // 内容已是 Markdown（TipTapEditor 现在会发射 Markdown），直接返回
    if (!isHtmlContent) {
      return content;
    }

    try {
      // 从 TipTap 编辑器获取 Markdown 内容
      const editor = tipTapEditorRef.value.getEditor();
      if (editor) {
        // 使用 JSON 格式转换，而不是 HTML
        // 因为 TipTap 的 getHTML() 会丢失任务列表的结构
        const json = editor.getJSON();

        // 检查 JSON 是否为空
        if (!json || !json.content || json.content.length === 0) {
          return '';
        }

        const markdown = jsonToMarkdown(json);

        return markdown;
      } else {
        return content;
      }
    } catch (error) {
      console.error('[Content] Markdown 转换失败:', error);
      return content;
    }
  }

  // 代码片段保持纯文本格式
  return content;
};

// 处理标签变更
const handleTagsChange = (newTags: string[]) => {
  if (state.isInitializing) return;

  state.tags = newTags;
  state.contentChanged = true;
  debouncedSave();
};

// 保存内容的核心逻辑（提取公共部分）
const performSave = async (data: Partial<ContentType> = {}, options: { updateRoute?: boolean } = {}) => {
  if (!state.currentContent) return;

  const { updateRoute = true } = options;

  // 检测标题是否改变
  const titleChanged = state.title !== originalTitle.value;
  const oldTitle = originalTitle.value;
  const newTitle = state.title;

  // 序列化当前编辑器内容
  const editorType = currentEditorType.value || 'code';
  const serializedContent = serializeContent(
    state.editorContent,
    state.currentContent.format || 'plain',
    editorType
  );

  // 比较内容是否真的发生变化（类似 Obsidian 的做法）
  const originalContent = state.currentContent.content || '';
  const contentChanged = serializedContent !== originalContent;

  // 如果标题和内容都没有变化，则跳过保存（不更新 modified 时间）
  if (!titleChanged && !contentChanged) {
    logger.info('[performSave] 内容无变化，跳过保存');
    return;
  }

  // 获取编辑器元数据（仅在内容变化时更新）
  const metadata = getEditorMetadata();

  // 标题改变且内容有变化时，如果是 Markdown 格式，同步附件
  let finalContent = serializedContent;
  if (titleChanged && contentChanged && oldTitle && state.currentContent.format === 'markdown') {
    try {
      const updatedContent = await syncAttachmentsOnRename(oldTitle, newTitle, finalContent);

      // 只有在内容实际改变时才显示通知（说明有附件被同步）
      if (updatedContent !== finalContent) {
        finalContent = updatedContent;

        // 更新编辑器内容以反映路径变化
        if (editorType === 'note') {
          const updatedHtml = markdownToHtml(updatedContent, workspaceRoot.value);
          state.editorContent = updatedHtml;

          if (tipTapEditorRef.value) {
            const editor = tipTapEditorRef.value.getEditor();
            if (editor) {
              editor.commands.setContent(updatedHtml);
            }
          }
        }

        // 显示成功通知（右上角）
        modal.success(t('settings.attachment.syncSuccessMessage'), 'top-right');
      }
    } catch (error) {
      console.error('[performSave] 附件同步失败:', error);

      // 显示错误通知（右上角）
      modal.error(t('settings.attachment.syncErrorMessage'), 'top-right');

      // 继续保存，即使附件同步失败
    }
  }

  // 准备更新参数（用于 store）
  const updateParams = {
    ...state.currentContent,
    title: state.title,
    content: finalContent,
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

  const newPath = await editFragment(apiParams);

  // 清理未使用的附件（如果是 Markdown 格式）
  if (state.currentContent.format === 'markdown') {
    try {
      const deletedCount = await cleanupUnusedAttachments(state.title, finalContent);
      // 只有在实际删除了文件时才显示通知
      if (deletedCount > 0) {
        modal.success(
          t('settings.attachment.unusedCleanupSuccessMessage', { count: deletedCount }),
          'top-right'
        );
      }
    } catch (error) {
      console.error('[performSave] 清理未使用附件失败:', error);
      // 不阻止保存操作
    }
  }

  // 如果文件被重命名，需要更新 store
  if (newPath && newPath !== state.currentContent.id) {
    // 更新 store 中的文件 ID（路径）
    const oldId = state.currentContent.id;
    const contentIndex = store.contents.findIndex(c => c.id === oldId);
    if (contentIndex !== -1) {
      store.contents[contentIndex] = {
        ...store.contents[contentIndex],
        ...updateParams,
        id: newPath
      };
    }

    // 更新当前内容的 ID（文件路径）
    state.currentContent = {
      ...state.currentContent,
      ...updateParams,
      id: newPath
    };

    // 只有在 updateRoute 为 true 时才更新路由
    if (updateRoute) {
      // 更新路由到新路径，但添加 skipReload 标记避免重新加载内容
      const cid = route.params.cid as string | undefined;
      const targetPath = cid
        ? `/config/category/contentList/${cid}/content/${encodeURIComponent(newPath)}`
        : `/config/category/contentList/content/${encodeURIComponent(newPath)}`;

      // 使用 replace 更新路由，添加 skipReload 查询参数
      router.replace({
        path: targetPath,
        query: { skipReload: 'true' }
      });
    } else {
      // 跳过路由更新
    }
  } else {
    updateStore(updateParams);

    // 更新当前内容的引用
    state.currentContent = {
      ...state.currentContent,
      ...updateParams
    };
  }

  state.contentChanged = false;
  state.lastSavedAt = new Date();

  // 更新原始标题
  originalTitle.value = state.title;

  // 通知自动同步管理器（如果启用）
  try {
    await notifyFileEdit();
  } catch (error) {
    // 静默失败，不影响保存流程
    console.debug('[performSave] 通知自动同步失败:', error);
  }
};

// 保存内容的核心逻辑
const saveContent = async (data: Partial<ContentType> = {}) => {
  if (!state.currentContent || state.isLoading) return;

  try {
    state.isLoading = true;

    // 检测标题是否改变
    const titleChanged = state.title !== originalTitle.value;

    // 如果标题改变，检查是否有反向链接
    if (titleChanged && originalTitle.value) {
      const backlinks = await findBacklinks(originalTitle.value);

      if (backlinks.length > 0) {
        // 有反向链接，显示对话框让用户确认
        backlinkUpdateData.value = {
          oldTitle: originalTitle.value,
          newTitle: state.title
        };

        // 加载反向链接统计信息
        backlinkStats.value = await getBacklinkStats(originalTitle.value);

        showBacklinkDialog.value = true;
        state.isLoading = false;

        // 等待用户确认，不继续保存
        return;
      }
    }

    await performSave(data);
  } catch (error) {
    console.error('[Content] 保存失败:', error);
    handleSaveError(error, 'saveContent');
    throw error;
  } finally {
    state.isLoading = false;
  }
};

// 使用 debounce，保留 cancel 方法
const debouncedSave = debounce(saveContent as (...args: unknown[]) => unknown, 300);

// 处理反向链接更新确认
const handleBacklinkUpdateConfirm = async () => {
  showBacklinkDialog.value = false;

  try {
    await saveContentWithoutBacklinkCheck();
    backlinkUpdateData.value = null;
    backlinkStats.value = null;
  } catch (error) {
    console.error('[Content] 保存当前片段失败:', error);
    modal.error(t('category.saveFailed'));
  }
};

// 处理反向链接更新取消
const handleBacklinkUpdateCancel = async () => {
  showBacklinkDialog.value = false;

  try {
    await saveContentWithoutBacklinkCheck();
    backlinkUpdateData.value = null;
    backlinkStats.value = null;
  } catch (error) {
    console.error('[Content] 保存当前片段失败:', error);
    modal.error(t('category.saveFailed'));
  }
};

// 保存内容但不检查反向链接（用于反向链接对话框确认后）
const saveContentWithoutBacklinkCheck = async (data: Partial<ContentType> = {}) => {
  if (!state.currentContent || state.isLoading) return;

  try {
    state.isLoading = true;
    await performSave(data);
    modal.success(t('category.saveSuccess'));
  } catch (error) {
    console.error('[Content] 保存失败:', error);
    handleSaveError(error, 'saveContent');
    throw error;
  } finally {
    state.isLoading = false;
  }
};

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

// 处理标题变更（失焦时触发防抖保存）
const handleTitleChange = (value: string) => {
  if (state.isInitializing) return;

  const original = originalTitle.value ?? state.currentContent?.title;
  if (value !== original) {
    debouncedSave();
  }
};

// 处理编辑器内容变更
const handleEditorChange = (value: string) => {
  if (state.isInitializing) return;

  handleContentChange(value, 'content', state.currentContent?.content);
};

// 处理 Wikilink 点击
const handleWikilinkClick = async (noteName: string) => {
  try {
    // 搜索匹配的 Markdown 文件（按标题搜索）
    const fragments = await searchMarkdownFiles(noteName);

    if (fragments.length > 0) {
      // 精确匹配标题（不区分大小写）
      const exactMatch = fragments.find(f => f.title.toLowerCase() === noteName.toLowerCase());
      const targetFragment = exactMatch || fragments[0];

      // 如果有未保存的更改，先保存（取消防抖，避免 300ms 后重复保存）
      if (state.contentChanged) {
        debouncedSave.cancel();
        await saveContent();
      }

      // 判断当前是否在"所有片段"视图
      const isAllSnippetsView = !route.params.cid;

      // 构建正确的路由路径，保持当前的 cid 上下文
      const targetPath = isAllSnippetsView
        ? `/config/category/contentList/content/${encodeURIComponent(targetFragment.id)}`
        : `/config/category/contentList/${route.params.cid}/content/${encodeURIComponent(targetFragment.id)}`;

      // 跳转到目标片段
      router.push(targetPath);
    } else {
      // 未找到匹配的片段，显示创建确认对话框
      pendingNoteName.value = noteName;
      showCreateNoteDialog.value = true;
    }
  } catch (error) {
    console.error('Failed to handle wikilink click:', error);
    modal.error(t('content.handleLinkFailed'));
  }
};

// 处理反向链接导航
const handleBacklinkNavigate = async (fragmentId: number | string, searchTitle: string) => {
  try {
    // 如果有未保存的更改，先保存（取消防抖，避免 300ms 后重复保存）
    if (state.contentChanged) {
      debouncedSave.cancel();
      await saveContent();
    }

    // 获取目标片段信息
    const targetFragment = await getFragmentContent(fragmentId);

    if (targetFragment) {
      // 判断当前是否在"所有片段"视图
      const isAllSnippetsView = !route.params.cid;

      // 构建目标路径（需要对文件路径进行 URL 编码），保持当前的 cid 上下文
      const encodedFragmentId = encodeURIComponent(String(fragmentId));
      const targetPath = isAllSnippetsView
        ? `/config/category/contentList/content/${encodedFragmentId}`
        : `/config/category/contentList/${route.params.cid}/content/${encodedFragmentId}`;

      // 使用 replace 导航
      await router.replace({
        path: targetPath,
        replace: true
      });

      // 等待路由完全切换
      await nextTick();

      // 等待编辑器加载完成（带超时和详细日志）
      const waitForEditor = () => {
        return new Promise<boolean>((resolve) => {
          let attempts = 0;
          const maxAttempts = 30; // 最多尝试30次，每次100ms，总共3秒

          const checkEditor = () => {
            attempts++;

            // 等待编辑器加载完成且引用存在
            if (!state.isEditorLoading && tipTapEditorRef.value && currentEditorType.value === 'note') {
              resolve(true);
            } else if (attempts >= maxAttempts) {
              console.warn('[Content] 等待编辑器超时，状态:', {
                isEditorLoading: state.isEditorLoading,
                hasTipTapRef: !!tipTapEditorRef.value,
                editorType: currentEditorType.value,
                attempts
              });
              resolve(false);
            } else {
              // 继续等待
              setTimeout(checkEditor, 100);
            }
          };

          checkEditor();
        });
      };

      const editorReady = await waitForEditor();

      // 如果是笔记类型且编辑器准备好了，滚动到对应的 wikilink
      if (editorReady && tipTapEditorRef.value && searchTitle) {
        tipTapEditorRef.value.scrollToWikilink(searchTitle);
      } else if (!editorReady) {
        console.warn('[Content] 编辑器未准备好，无法滚动');
      } else if (!searchTitle) {
        console.warn('[Content] 没有提供搜索标题');
      } else {
        console.warn('[Content] 无法滚动到 wikilink，编辑器引用不存在或非笔记类型');
      }
    } else {
      console.error('[Content] 未找到目标片段');
    }
  } catch (error) {
    console.error('[Content] 反向链接导航失败:', error);
    modal.error(t('content.handleLinkFailed'));
  }
};

// 确认创建新笔记
const confirmCreateNote = async () => {
  try {
    const noteName = pendingNoteName.value;

    // 用户确认创建，创建新笔记
    // 优先从路由参数获取分类ID，如果没有则从当前内容获取
    let currentCategoryId: number;

    if (route.params.cid) {
      // 从路由参数获取分类ID
      currentCategoryId = Number(route.params.cid);
    } else if (state.currentContent?.category_id) {
      // 从当前内容获取分类ID
      currentCategoryId = typeof state.currentContent.category_id === 'number'
        ? state.currentContent.category_id
        : Number(state.currentContent.category_id);
    } else {
      // 默认为未分类（ID: 0）
      currentCategoryId = 0;
    }

    const newFragmentId = await addFragment({
      categoryId: currentCategoryId,
      fragmentType: 'note'
    });

    // 刷新内容列表
    const result = await getFragmentList(currentCategoryId);
    store.contents = result;

    // 跳转到新笔记并设置标题（保持当前的 cid 上下文）
    const currentCid = route.params.cid || currentCategoryId;
    router.push({
      path: `/config/category/contentList/${currentCid}/content/${encodeURIComponent(newFragmentId)}`
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
    modal.error(t('content.createNoteFailed'));
  }
};

// 按指定 ID 获取片段内容（用于外部变更重载，避免 route.params.id 与 state.currentContent.id 不一致）
const fetchContentById = async (id: string) => {
  state.isInitializing = true;
  // 不切换 isEditorLoading，保持 TipTap 挂载，让其 watch 到 content 变化后 setContent
  state.editorError = null;

  try {
    const result = await getFragmentContent(id);
    if (result) {
      const parsedContent = parseFragment(result);
      state.currentContent = parsedContent;
      state.title = parsedContent.title;
      state.tags = parsedContent.tags || [];
      originalTitle.value = parsedContent.title;
      const newContent = deserializeContent(
        parsedContent.content || '',
        parsedContent.format || 'plain'
      );
      state.editorContent = newContent;
      state.contentChanged = false;
      state.lastSavedAt = null;
      // 若 TipTap watch 未触发，显式 setContent
      await nextTick();
      if (currentEditorType.value === 'note' && tipTapEditorRef.value) {
        const editor = tipTapEditorRef.value.getEditor();
        if (editor && editor.getHTML() !== newContent) {
          editor.commands.setContent(newContent);
        }
      }
    }
  } catch (error) {
    console.error('[Content] 内容加载失败:', error);
    handleLoadError(error, 'fetchContentById');
    state.editorError = t('category.loadFailed');
  } finally {
    nextTick(() => { state.isInitializing = false; });
  }
};

// 获取片段内容（使用 route.params.id）
const fetchContent = async () => {
  state.isInitializing = true;
  state.isEditorLoading = true;
  state.editorError = null;

  try {
    const result = await getFragmentContent(route.params.id as string);

    if (result) {
      // 使用 parseFragment 确保所有字段存在
      const parsedContent = parseFragment(result);

      state.currentContent = parsedContent;
      state.title = parsedContent.title;
      state.tags = parsedContent.tags || [];

      // 保存原始标题用于检测变化
      originalTitle.value = parsedContent.title;

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

      // 如果是新建的笔记（标题是 "New Fragment"），全选标题让用户修改
      if (parsedContent.title === 'New Fragment' && titleInputRef.value) {
        nextTick(() => {
          const inputElement = titleInputRef.value?.$el?.querySelector('input') || titleInputRef.value?.input;
          if (inputElement) {
            inputElement.focus();
            inputElement.select();
          }
        });
      } else if (parsedContent.metadata && parsedContent.metadata.lastCursorPosition && currentEditorType.value === 'note') {
        // 如果有保存的光标位置，恢复它
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
    console.error('[Content] 内容加载失败:', error);
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
const deserializeContent = (content: string, format: ContentFormat): string => {
  // 兼容性处理：检测内容是否为 HTML
  const isHtmlContent = content.trim().startsWith('<') && content.includes('</');

  if (isHtmlContent) {
    return content;
  }

  // 如果编辑器类型是笔记，需要转换为 HTML 供 TipTap 使用
  // 支持 format 为 'plain' 或 'markdown'
  if (currentEditorType.value === 'note' && (format === 'plain' || format === 'markdown' || !format)) {
    try {
      const html = markdownToHtml(content, workspaceRoot.value);
      return html;
    } catch (error) {
      console.error('[Content] Markdown 转 HTML 失败:', error);
      return content;
    }
  }

  // 其他情况直接返回
  return content;
};

// 监听路由参数变化
watch(
  () => route.params.id,
  async (newId, oldId) => {
    // 如果有 skipReload 查询参数，说明是重命名操作，不重新加载内容
    if (route.query.skipReload === 'true') {
      // 使用 nextTick 延迟清除查询参数，避免触发额外的路由变化
      nextTick(() => {
        router.replace({
          path: route.path,
          query: {}
        });
      });
      return;
    }

    // 如果路由参数变化，先自动保存当前内容（如果有更改）
    if (oldId && state.currentContent && state.contentChanged) {
      try {
        // 取消 debounce，立即保存
        debouncedSave.cancel();
        // 保存时不更新路由，让用户的导航正常进行
        await performSave({}, { updateRoute: false });
      } catch (error) {
        console.error('[Content] 切换前自动保存失败:', error);
        // 即使保存失败，也继续导航（避免卡住）
      }
    }

    // 加载新内容（但不在初始化时执行，由 onMounted 处理）
    if (newId && oldId !== undefined) {
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
  }
  // 移除 immediate: true，改为在 onMounted 中手动调用 fetchContent
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
    modal.error(t('category.saveFailed'));
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

// 处理外部文件变更（Git Pull、手动合并等）
const handleRefreshData = async (event: Event) => {
  const customEvent = event as CustomEvent;
  const source = customEvent.detail?.source;

  // git-pull 事件跳过，等待 files-changed-batch
  if (source === 'git-pull') return;

  if (!state.currentContent) {
    console.log('[Content] ⏭️ refresh-data: 无当前内容，跳过');
    return;
  }

  const currentFileId = state.currentContent.id as string;
  let shouldReload = false;

  if (source === 'files-changed-batch') {
    const { modified, created, deleted } = customEvent.detail || {};
    const changedFiles = [...(modified || []), ...(created || [])];
    const deletedFiles = deleted || [];
    console.log('[Content] 📦 files-changed-batch, 当前文件:', currentFileId, '变更文件:', changedFiles, '删除文件:', deletedFiles);

    const normalizedId = currentFileId.replace(/\\/g, '/');
    const isCurrentDeleted = deletedFiles.some((f: string) => {
      const normalizedF = f.replace(/\\/g, '/');
      return normalizedId === normalizedF || normalizedId.endsWith(normalizedF) || normalizedF.endsWith(normalizedId);
    });

    if (isCurrentDeleted) {
      // 当前打开的文件已被删除，导航回分类列表（欢迎页）
      console.log('[Content] ⚠️ 当前文件已被删除，导航回分类列表');
      if (!state.contentChanged) {
        await router.push('/config/category');
      }
      return;
    }

    shouldReload = changedFiles.some((f: string) => {
      const normalizedF = f.replace(/\\/g, '/');
      return normalizedId === normalizedF || normalizedId.endsWith(normalizedF) || normalizedF.endsWith(normalizedId);
    });
  } else if (source === 'force-pull' || source === 'manual-merge' || source === 'force-push') {
    shouldReload = true;
  }

  if (shouldReload) {
    if (state.contentChanged) {
      console.log('[Content] ⚠️ 当前文件被外部修改，但存在未保存的本地更改，跳过重载');
    } else {
      console.log('[Content] 🔄 检测到当前文件被外部修改，重新加载内容');
      await fetchContentById(currentFileId);
    }
  }
};

// 监听目录变更事件（外部编辑器创建/删除/重命名文件夹）
const handleDirsChanged = async (event: Event) => {
  const customEvent = event as CustomEvent<{
    source: string;
    created: string[];
    deleted: string[];
    renamed: Array<{ from: string; to: string }>;
  }>;
  const { deleted } = customEvent.detail;
  console.log(`[Content] dirs-changed-batch: -${deleted.length}，检查当前内容是否受影响`);

  if (!state.currentContent) {
    console.log('[Content] ⏭️ dirs-changed: 无当前内容，跳过');
    return;
  }

  const currentFileId = state.currentContent.id as string;

  // 检查当前文件的路径是否在被删除的目录中
  const normalizedCurrentId = currentFileId.replace(/\\/g, '/');
  const wsRoot = workspaceRoot.value.replace(/\\/g, '/');
  const isInDeletedDir = deleted.some((deletedPath: string) => {
    // deletedPath 是相对路径，需拼接 workspaceRoot 转绝对路径后再比较
    const absDeletedPath = deletedPath.startsWith('/') || deletedPath.match(/^[A-Za-z]:/)
      ? deletedPath.replace(/\\/g, '/')
      : `${wsRoot}/${deletedPath}`.replace(/\\/g, '/').replace(/\/+/g, '/');
    return normalizedCurrentId === absDeletedPath ||
      normalizedCurrentId.startsWith(absDeletedPath + '/');
  });

  if (isInDeletedDir) {
    console.log('[Content] ⚠️ 当前文件所在的目录被删除');
    if (state.contentChanged) {
      console.log('[Content] ⚠️ 存在未保存的更改，提示用户');
    } else {
      console.log('[Content] 🔄 当前文件所在的目录被删除，导航回分类列表');
      await router.push('/config/category');
    }
  }
};

// 组件卸载前保存
onBeforeUnmount(async () => {
  if (state.currentContent && state.contentChanged) {
    debouncedSave.cancel();
    await saveContent();
  }
});

// 监听浏览器关闭/刷新事件
onMounted(async () => {
  // 注册清理函数（必须在 await 之前）
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (state.contentChanged) {
      e.preventDefault();
      e.returnValue = '';
    }
  };

  window.addEventListener('beforeunload', handleBeforeUnload);
  window.addEventListener('refresh-data', handleRefreshData);
  window.addEventListener('refresh-categories', handleDirsChanged);

  onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    window.removeEventListener('refresh-data', handleRefreshData);
    window.removeEventListener('refresh-categories', handleDirsChanged);
  });

  // 获取工作区根目录（必须在加载内容之前完成）
  try {
    workspaceRoot.value = await getWorkspaceRoot();

    // 保存到 localStorage 供图片组件使用
    if (workspaceRoot.value) {
      localStorage.setItem('workspaceRoot', workspaceRoot.value);
    }

    // 如果有路由参数，加载内容
    if (route.params.id) {
      await fetchContent();
    }
  } catch (error) {
    console.error('Failed to get workspace root:', error);
  }
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
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
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
