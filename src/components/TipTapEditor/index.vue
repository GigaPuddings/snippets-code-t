<template>
  <main class="editor-container" :class="{ 'dark-theme': props.dark }">
    <!-- 主编辑区域（左侧） -->
    <div class="editor-main">
      <!-- 富文本编辑器视图 -->
      <div v-show="viewMode === 'preview' || viewMode === 'reading'" class="editor-content" @contextmenu="handleContextMenu">
        <editor-content :editor="editor" />
      </div>
      
      <!-- 源码编辑器视图 -->
      <SourceEditor
        ref="sourceEditorRef"
        v-show="viewMode === 'source'"
        :content="sourceContent"
        :dark="props.dark"
        @update:content="handleSourceContentChange"
        @contextmenu="handleSourceContextMenu"
        @scroll="handleSourceScroll"
      />
      
      <!-- 搜索面板 -->
      <SearchPanel
        ref="searchPanelRef"
        :show="showSearch"
        :dark="props.dark"
        @close="closeSearch"
        @search="handleSearch"
        @next="findNext"
        @previous="findPrevious"
      />
      
      <!-- 右上角功能按钮 -->
      <EditorActions
        v-if="props.showEditorActions"
        :view-mode="viewMode"
        @outline-click="toggleOutline"
        @reading-mode-click="toggleToReadingMode"
        @editing-mode-click="toggleToEditingMode"
      />
      
      <!-- 底部状态栏 -->
      <EditorStatusBar
        :word-count="wordCount"
        :char-count="charCount"
        :view-mode="viewMode"
        :show-view-toggle="props.showViewToggle"
        :show-backlink-button="!!props.currentTitle"
        :backlink-count="backlinkCount"
        :dark="props.dark"
        @view-mode-change="handleViewModeCommand"
        @toggle-backlinks="toggleBacklinks"
      />
    </div>
    
    <!-- 大纲面板（右侧） -->
    <OutlinePanel
      :show="showOutline"
      :headings="headings"
      :dark="props.dark"
      :current-pos="currentCursorPos"
      :visible-heading-index="visibleHeadingIndex"
      @close="closeOutline"
      @heading-click="jumpToHeading"
      @update-visible-heading="updateVisibleHeading"
    />
    
    <!-- 右键上下文菜单 -->
    <TipTapContextMenu ref="contextMenuRef" :editor="editor ?? null" :dark="props.dark" :view-mode="viewMode" :source-editor-ref="sourceEditorRef" />
    
    <!-- 反向链接面板 -->
    <BacklinkPanel
      :show="showBacklinks"
      :dark="props.dark"
      :current-title="props.currentTitle"
      :current-fragment-id="props.currentFragmentId"
      @close="closeBacklinks"
      @navigate="handleBacklinkNavigate"
    />
  </main>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import { TextSelection } from '@tiptap/pm/state';
import { handleEditorError } from '@/utils/error-handler';
import { markdownToHtml, jsonToMarkdown } from './utils/markdown';
import { createEditorExtensions } from './config/extensions';
import { getWorkspaceRoot } from '@/api/markdown';
import TipTapContextMenu from './TipTapContextMenu.vue';
import EditorStatusBar from './components/EditorStatusBar.vue';
import OutlinePanel from './components/OutlinePanel.vue';
import EditorActions from './components/EditorActions.vue';
import SourceEditor from './components/SourceEditor.vue';
import BacklinkPanel from './components/BacklinkPanel.vue';
import { useEditorBacklinks } from './composables/useEditorBacklinks';
import {
  useEditorImageUpload,
  type ImageUploadEditor
} from './composables/useEditorImageUpload';
import { useEditorLinks } from './composables/useEditorLinks';
import { useEditorOutline } from './composables/useEditorOutline';
import { useEditorPersistenceBridge } from './composables/useEditorPersistenceBridge';
import { useEditorSearch } from './composables/useEditorSearch';
import { useEditorSessionScroll } from './composables/useEditorSessionScroll';
import { useEditorViewMode } from './composables/useEditorViewMode';
import { SearchPanel } from '@/components/UI';
import type { CSSProperties, Ref } from 'vue';
import type { EditorView } from '@tiptap/pm/view';
import modal from '@/utils/modal';

interface Props {
  codeStyle?: CSSProperties;
  dark?: boolean;
  content?: string;
  placeholder?: string;
  autofocus?: boolean;
  disabled?: boolean;
  autoDestroy?: boolean;
  showViewToggle?: boolean;
  showEditorActions?: boolean;
  showContextMenu?: boolean;
  currentTitle?: string;
  currentFragmentId?: number | string;
}

defineOptions({
  name: 'TipTapEditor'
});

const props = withDefaults(defineProps<Props>(), {
  codeStyle: () => ({}),
  dark: false,
  content: '',
  placeholder: 'Start writing...',
  autofocus: false,
  disabled: false,
  autoDestroy: true,
  showViewToggle: true,
  showEditorActions: true,
  showContextMenu: true,
  currentTitle: '',
  currentFragmentId: undefined
});

const emits = defineEmits<{
  'update:content': [value: string];
  ready: [payload: any];
  change: [value: string];
  focus: [];
  blur: [];
  'wikilink-click': [noteName: string];
  'view-mode-change': [mode: 'reading' | 'preview' | 'source'];
  'outline-toggle': [show: boolean];
  'backlink-navigate': [fragmentId: number | string, searchTitle: string];
  'scroll-position': [scrollTop: number];
}>();

// Refs
const contextMenuRef = ref<InstanceType<typeof TipTapContextMenu> | null>(null);
const sourceEditorRef = ref<InstanceType<typeof SourceEditor> | null>(null);
const searchPanelRef = ref<InstanceType<typeof SearchPanel> | null>(null);
const wordCount = ref(0);
const charCount = ref(0);
const sourceContent = ref('');
const workspaceRoot = ref<string>('');

// Wikilink 点击处理
const handleWikilinkClick = (noteName: string) => {
  emits('wikilink-click', noteName);
};

const {
  showBacklinks,
  backlinkCount,
  toggleBacklinks,
  closeBacklinks,
  handleBacklinkNavigate
} = useEditorBacklinks({
  currentTitle: toRef(props, 'currentTitle'),
  currentFragmentId: toRef(props, 'currentFragmentId'),
  emitNavigate: (fragmentId, searchTitle) => {
    emits('backlink-navigate', fragmentId, searchTitle);
  }
});

// 更新统计信息
const updateStats = (text: string) => {
  // 字符数：所有字符（包括空格、换行等）
  charCount.value = text.length;
  
  // 词数统计：中文按字数，英文按单词数
  const trimmedText = text.trim();
  
  if (!trimmedText) {
    wordCount.value = 0;
    return;
  }
  
  // 中文字符（汉字）
  const chineseChars = trimmedText.match(/[\u4e00-\u9fa5]/g) || [];
  
  // 英文单词（连续的字母数字字符）
  const englishWords = trimmedText.match(/[a-zA-Z0-9]+/g) || [];
  
  // 总词数 = 中文字符数 + 英文单词数
  wordCount.value = chineseChars.length + englishWords.length;
};

const {
  showOutline,
  headings,
  visibleHeadingIndex,
  currentCursorPos,
  setCurrentCursorPos,
  extractHeadingsFromSource,
  setupScrollListener,
  cleanupScrollListener,
  refreshSourceOutline,
  refreshEditorOutline,
  handleSourceScroll,
  jumpToHeading,
  updateVisibleHeading,
  toggleOutline,
  closeOutline
} = useEditorOutline({
  sourceContent,
  getEditor: () => editor.value,
  getViewMode: () => viewMode.value,
  getSourceEditor: () => sourceEditorRef.value,
  emitOutlineToggle: (show) => emits('outline-toggle', show),
  emitScrollPosition: (scrollTop) => emits('scroll-position', scrollTop)
});

const {
  handleLinkClick,
  setupAnchorClickInterceptor,
  cleanupAnchorClickInterceptor
} = useEditorLinks({
  getEditor: () => editor.value
});

const editorPersistenceBridge = useEditorPersistenceBridge({
  sourceContent,
  workspaceRoot,
  emitContentChange: (value) => {
    emits('update:content', value);
    emits('change', value);
  },
  updateStats,
  isOutlineVisible: () => showOutline.value,
  refreshSourceOutline: () => extractHeadingsFromSource(),
  handleError: handleEditorError
});

const handleImageUpload = async (file: File, _view: EditorView) => {
  await editorImageUpload.handleImageUpload(file);
};

const {
  showSearch,
  searchMatches,
  currentSearchIndex,
  openSearch,
  closeSearch,
  handleSearch,
  findNext,
  findPrevious
} = useEditorSearch({
  getEditor: () => editor.value,
  focusSearchPanel: () => searchPanelRef.value?.focus(),
  updateMatchInfo: (currentIndex, total) => {
    searchPanelRef.value?.updateMatchInfo(currentIndex, total);
  }
});

const {
  getScrollPosition,
  setScrollPosition,
  scrollToWikilink
} = useEditorSessionScroll({
  getEditor: () => editor.value
});

// 初始化编辑器
const editor = useEditor({
  content: props.content,
  editable: !props.disabled,
  autofocus: props.autofocus,
  extensions: createEditorExtensions(handleWikilinkClick, {
    getMatches: () => searchMatches.value,
    getCurrentIndex: () => currentSearchIndex.value
  }),
  onUpdate: ({ editor }) => {
    try {
      editorPersistenceBridge.handleEditorUpdate(editor);
      setCurrentCursorPos(editor.state.selection.from);
    } catch (error) {
      handleEditorError(error, 'TipTap onUpdate');
    }
  },
  onSelectionUpdate: ({ editor }) => {
    setCurrentCursorPos(editor.state.selection.from);
  },
  onFocus: () => emits('focus'),
  onBlur: () => emits('blur'),
  onCreate: ({ editor }) => {
    try {
      const text = editor.getText();
      updateStats(text);
      emits('ready', editor);
      setCurrentCursorPos(editor.state.selection.from);
      
      const editorElement = editor.view.dom;
      setupAnchorClickInterceptor(editorElement);
      
      // 添加编辑器级别的键盘事件监听器
      const handleEditorKeyDown = (event: KeyboardEvent) => {
        // Ctrl+F 或 Cmd+F 打开搜索
        if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
          event.preventDefault();
          event.stopPropagation();
          openSearch();
        }
      };
      editorElement.addEventListener('keydown', handleEditorKeyDown, true);
      
      // 如果大纲面板已打开，设置滚动监听
      if (showOutline.value) {
        nextTick(() => {
          setupScrollListener();
        });
      }
    } catch (error) {
      handleEditorError(error, 'TipTap onCreate');
    }
  },
  editorProps: {
    attributes: {
      class: props.dark ? 'tiptap-editor dark' : 'tiptap-editor',
      spellcheck: 'false'
    },
    handleClick: (view, _pos, event) => handleLinkClick(view, event),
    handlePaste: (view, event) => {
      const { state } = view;
      const $from = state.selection.$from;
      const inCodeBlock = $from.parent.type.name === 'codeBlock';

      // 代码块内只能存纯文本：多行/Markdown 粘贴走 insertContent 会落到块外，必须只插纯文本
      if (inCodeBlock) {
        const plain = event.clipboardData?.getData('text/plain');
        if (plain !== undefined && plain !== null) {
          event.preventDefault();
          const { from, to } = state.selection;
          const tr = state.tr.insertText(plain, from, to);
          view.dispatch(tr);
          return true;
        }
        const cbItems = event.clipboardData?.items;
        if (cbItems) {
          for (let j = 0; j < cbItems.length; j++) {
            if (cbItems[j].type.startsWith('image/')) {
              event.preventDefault();
              return true;
            }
          }
        }
        return false;
      }

      // 首先检查是否有图片
      const items = event.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.type.startsWith('image/')) {
            event.preventDefault();
            const file = item.getAsFile();
            if (file && props.currentFragmentId) {
              handleImageUpload(file, view);
            }
            return true;
          }
        }
      }
      
      // 如果没有图片，处理文本粘贴
      const text = event.clipboardData?.getData('text/plain');
      if (!text) return false;
      
      // 改进的 Markdown 检测策略：
      // 1. 检查是否包含明显的 Markdown 语法
      // 2. 或者包含多行文本（可能是从 Markdown 文档复制的）
      const hasMarkdownSyntax = /^#{1,6}\s|^\*\*|^\*|^-\s|^>\s|^```|^\d+\.\s|^-\s\[[ x]\]|\*\*.*\*\*|__.*__|`.*`|\[.*\]\(.*\)|^---$|^\|.*\|/m.test(text);
      const isMultiLine = text.includes('\n');
      
      // 如果包含 Markdown 语法或者是多行文本，尝试作为 Markdown 解析
      if (hasMarkdownSyntax || isMultiLine) {
        try {
          const html = markdownToHtml(text, workspaceRoot.value);
          view.dispatch(view.state.tr.insertText(''));
          if (editor.value) {
            editor.value.commands.insertContent(html);
          }
          return true;
        } catch (error) {
          console.error('Failed to parse pasted Markdown:', error);
          return false;
        }
      }
      
      return false;
    },
    handleDrop: (view, event) => {
      const files = event.dataTransfer?.files;
      if (!files || files.length === 0) return false;
      
      const imageFiles = Array.from(files).filter(file => 
        file.type.startsWith('image/')
      );
      
      if (imageFiles.length > 0 && props.currentFragmentId) {
        event.preventDefault();
        
        // 获取拖放位置
        const pos = view.posAtCoords({ left: event.clientX, top: event.clientY });
        if (pos) {
          // 设置光标到拖放位置
          view.dispatch(view.state.tr.setSelection(
            TextSelection.create(view.state.doc, pos.pos)
          ));
        }
        
        // 上传所有图片
        for (const file of imageFiles) {
          handleImageUpload(file, view);
        }
        
        return true;
      }
      
      return false;
    }
  },
  enableInputRules: true,
  enablePasteRules: true,
  enableCoreExtensions: true,
  injectCSS: false
});

const editorImageUpload = useEditorImageUpload({
  editor: editor as unknown as Ref<ImageUploadEditor | null | undefined>,
  workspaceRoot,
  getCurrentFragmentId: () => props.currentFragmentId,
  notifySuccess: (message) => modal.success(message),
  notifyError: (message) => modal.error(message)
});

const {
  viewMode,
  toggleViewMode,
  handleViewModeCommand,
  toggleToReadingMode,
  toggleToEditingMode
} = useEditorViewMode({
  sourceContent,
  enterSourceMode: () => {
    cleanupScrollListener();

    if (editor.value) {
      const json = editor.value.getJSON();
      sourceContent.value = jsonToMarkdown(json);
    }
  },
  applySourceContent: () => editorPersistenceBridge.applySourceContentToEditor(editor.value),
  setEditorEditable: (editable) => {
    if (editor.value) {
      editor.value.setEditable(editable);
    }
  },
  isOutlineVisible: () => showOutline.value,
  refreshSourceOutline: () => {
    refreshSourceOutline();
  },
  refreshEditorOutline: () => {
    refreshEditorOutline();
  },
  emitViewModeChange: (mode) => emits('view-mode-change', mode)
});

// 源码内容变更
const handleSourceContentChange = (value: string) => {
  editorPersistenceBridge.emitSourceContentChange(value);
};

// 处理右键菜单
const handleContextMenu = (event: MouseEvent) => {
  if (!props.showContextMenu) {
    return;
  }
  event.preventDefault();
  contextMenuRef.value?.show(event);
};

const handleSourceContextMenu = (event: MouseEvent) => {
  if (!props.showContextMenu) {
    return;
  }
  event.preventDefault();
  contextMenuRef.value?.show(event);
};

// 监听内容变化
watch(() => props.content, (newContent) => {
  editorPersistenceBridge.syncIncomingContent(newContent, editor.value);
});

// 监听禁用状态变化
watch(() => props.disabled, (disabled) => {
  if (editor.value) {
    editor.value.setEditable(!disabled);
  }
});

// 监听暗色模式变化
watch(() => props.dark, (isDark) => {
  if (editor.value) {
    const editorElement = editor.value.view.dom;
    if (isDark) {
      editorElement.classList.add('dark');
    } else {
      editorElement.classList.remove('dark');
    }
  }
});

// 键盘快捷键
const handleKeyDown = (event: KeyboardEvent) => {
  const target = event.target as HTMLElement;

  // 检查是否在搜索面板中（输入框等），不拦截任何按键，让用户正常输入和移动光标
  if (target.closest('.search-panel') !== null) {
    return;
  }

  // 检查事件目标是否在 CodeMirror 编辑器中
  const isInCodeMirror = target.closest('.cm-editor') !== null;

  // 如果在 CodeMirror 编辑器中，不拦截事件，让 CodeMirror 自己处理
  if (isInCodeMirror) {
    return;
  }

  // Ctrl+F 或 Cmd+F 打开搜索
  if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
    event.preventDefault();
    event.stopPropagation();
    openSearch();
    return;
  }
  // Esc 关闭搜索
  if (event.key === 'Escape' && showSearch.value) {
    event.preventDefault();
    event.stopPropagation();
    closeSearch();
  }
};

// 生命周期
onMounted(async () => {
  // 获取工作区根目录
  try {
    workspaceRoot.value = await getWorkspaceRoot();
    // 保存到 localStorage 供图片组件使用
    if (workspaceRoot.value) {
      localStorage.setItem('workspaceRoot', workspaceRoot.value);
    }
  } catch (error) {
    console.error('Failed to get workspace root:', error);
  }
  
  // 使用捕获阶段监听，优先级更高
  document.addEventListener('keydown', handleKeyDown, true);
});

// 清理
onBeforeUnmount(() => {
  try {
    document.removeEventListener('keydown', handleKeyDown, true);
    cleanupScrollListener();
    cleanupAnchorClickInterceptor();
    if (editor.value) {
      // 先检查 editor 是否已经被销毁
      if (!editor.value.isDestroyed) {
        editor.value.destroy();
      }
    }
  } catch (error) {
    console.error('Error destroying TipTap editor:', error);
  }
});

// 暴露方法
defineExpose({
  getEditor: () => editor.value,
  getHTML: () => editor.value?.getHTML() || '',
  getText: () => editor.value?.getText() || '',
  getJSON: () => editor.value?.getJSON() || null,
  setViewMode: toggleViewMode,
  toggleOutline: toggleOutline,
  toggleBacklinks: toggleBacklinks,
  openSearch: openSearch,
  getViewMode: () => viewMode.value,
  getScrollPosition,
  setScrollPosition,
  scrollToWikilink
});
</script>

<style lang="scss" scoped>
.editor-container {
  @apply relative overflow-hidden flex h-full;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.editor-main {
  @apply flex-1 flex flex-col overflow-hidden;
  transition: width 0.3s ease;
}

.editor-content {
  @apply flex-1 overflow-auto cursor-text;
  transition: background-color 0.3s ease;
  padding-bottom: 0;
  
  :deep(.ProseMirror) {
    min-height: 100%;
    height: 100%;
  }
}

.dark-theme {
  :deep(.editor-status) {
    background-color: var(--statusbar-bg);
    border-color: var(--statusbar-border);
    color: var(--statusbar-text);
  }

  :deep(.action-btn) {
    color: var(--editor-text-secondary);

    &:hover {
      background-color: var(--editor-hover-bg);
      color: var(--editor-text);
    }
  }

  :deep(.view-toggle-btn) {
    &:hover {
      background-color: var(--editor-hover-bg);
    }
  }

  :deep(.code-block-wrapper) {
    border-color: rgba(255, 255, 255, 0.12) !important;
    background: rgba(255, 255, 255, 0.05) !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  }
}

.editor-content > div {
 @apply h-[calc(100vh-150px)];
}

:deep(.tiptap-editor) {
  @apply outline-none overflow-y-auto;
  min-height: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-wrap;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.dark {
    background-color: var(--editor-bg);
    color: var(--editor-text);

    h1, h2, h3, h4, h5, h6 {
      color: var(--editor-text);
      transition: color 0.3s ease;
    }

    code {
      background-color: var(--editor-hover-bg);
      color: var(--el-color-primary);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* 代码块内的 code 不应用内联样式 */
    pre code {
      @apply bg-transparent text-inherit p-0 rounded-none;
    }

    /* 代码块样式已移至 CodeBlockComponent.vue */
    pre {
      @apply mb-4;
    }

    /* 暗色编辑区：代码块关键词高亮 */
    pre code .hljs-keyword,
    .code-block-wrapper .hljs-keyword {
      color: #c4b5fd !important;
      font-weight: 600 !important;
    }
    pre code .hljs-string,
    .code-block-wrapper .hljs-string {
      color: #4ade80 !important;
    }
    pre code .hljs-number,
    .code-block-wrapper .hljs-number {
      color: #fb923c !important;
    }
    pre code .hljs-comment,
    .code-block-wrapper .hljs-comment {
      color: #9ca3af !important;
      font-style: italic !important;
    }

    blockquote {
      border-left-color: var(--panel-border);
      color: var(--panel-text-secondary);
      transition: border-color 0.3s ease, color 0.3s ease;
    }

    hr {
      @apply border-[#727377];
      transition: border-color 0.3s ease;
    }

    a {
      @apply text-[#82AAFF];
      transition: color 0.3s ease;

      &:hover {
        @apply text-[#9CB4FF];
      }
    }

    .wikilink-decoration {
      @apply text-purple-400;
      background-color: rgba(168, 85, 247, 0.15);

      &:hover {
        @apply text-purple-300;
        background-color: rgba(168, 85, 247, 0.25);
      }
    }

    .wikilink-bracket-hidden {
      @apply opacity-0;
      font-size: 0;
      width: 0;
      display: inline-block;
      overflow: hidden;
    }

    .markdown-link-bracket-hidden {
      @apply opacity-0;
      font-size: 0;
      width: 0;
      display: inline-block;
      overflow: hidden;
    }

    .markdown-link-text {
      @apply text-[#82AAFF] underline;
      transition: color 0.2s ease;

      &:hover {
        @apply text-[#9CB4FF];
      }
    }

    .invalid-link {
      @apply text-[#9ca3af];
      font-family: inherit;
      font-size: inherit;
      cursor: text;
    }

    code.invalid-link-display,
    span.invalid-link-text {
      @apply bg-transparent text-[#9ca3af];
      padding: 0;
      font-family: inherit;
      font-size: inherit;
      cursor: text;
      border-radius: 0;
    }

    table {
      @apply border-[#727377];
      transition: border-color 0.3s ease;

      th, td {
        @apply border-[#727377];
        transition: border-color 0.3s ease, background-color 0.3s ease;
      }

      th {
        @apply bg-[#282d32];
      }
    }

    .task-list {
      input[type="checkbox"] {
        @apply border-[#727377];
        transition: border-color 0.3s ease;

        &:checked {
          @apply bg-[#5d6dfd] border-[#5d6dfd];
        }
      }
    }

    // TipTap 标准任务列表暗色模式
    ul[data-type="taskList"],
    ul.task-list {
      li[data-type="taskItem"],
      li.task-item {
        > label {
          input[type="checkbox"] {
            @apply border-[#727377];
            transition: border-color 0.3s ease;

            &:checked {
              @apply bg-[#5d6dfd] border-[#5d6dfd];
            }
          }
        }
      }
    }

    ::selection {
      @apply bg-[#5d6dfd] bg-opacity-40;
    }
  }

  h1 {
    @apply font-bold mb-4 mt-8;
    font-size: 2em;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  h2 {
    @apply font-bold mb-3 mt-7;
    font-size: 1.6em;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  h3 {
    @apply font-bold mb-3 mt-6;
    font-size: 1.4em;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  h4 {
    @apply font-bold mb-2 mt-5;
    font-size: 1.2em;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  h5 {
    @apply font-bold mb-2 mt-4;
    font-size: 1.1em;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  h6 {
    @apply font-bold mb-2 mt-3;
    font-size: 1em;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  p {
    line-height: 1.7;
    transition: color 0.3s ease;
  }

  strong {
    @apply font-bold;
  }

  em {
    @apply italic;
  }

  s {
    @apply line-through;
  }

  code {
    @apply bg-content text-red-600 rounded text-sm font-mono;
    padding: 0.2em 0.4em;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* 代码块内的 code 不应用内联样式 */
  pre code {
    @apply bg-transparent text-inherit p-0 rounded-none;
  }

  pre code .ProseMirror-trailingBreak {
    display: none;
  }

  /* 代码块样式已移至 CodeBlockComponent.vue */
  pre {
    @apply mb-5;
  }

  /* 亮色编辑区：代码块关键词高亮 */
  pre code .hljs-keyword,
  .code-block-wrapper .hljs-keyword {
    color: #7c3aed !important;
    font-weight: 600 !important;
  }
  pre code .hljs-string,
  .code-block-wrapper .hljs-string {
    color: #16a34a !important;
  }
  pre code .hljs-number,
  .code-block-wrapper .hljs-number {
    color: #ea580c !important;
  }
  pre code .hljs-comment,
  .code-block-wrapper .hljs-comment {
    color: #6b7280 !important;
    font-style: italic !important;
  }

  ul:not([data-type="taskList"]) {
    @apply mb-5;
    padding-left: 1.5rem !important;
    list-style: disc !important;
    list-style-position: outside !important;

    li {
      @apply mb-2;
      line-height: 1.7;
      transition: color 0.3s ease;
      display: list-item !important;
      list-style: inherit !important;
    }
  }

  ol {
    @apply mb-5;
    padding-left: 1.5rem !important;
    list-style: decimal !important;
    list-style-position: outside !important;

    li {
      @apply mb-2;
      line-height: 1.7;
      transition: color 0.3s ease;
      display: list-item !important;
      list-style: inherit !important;
    }
  }

  .task-list {
    @apply list-none pl-0 mb-5;

    .task-item {
      @apply flex items-start mb-2;

      > label {
        @apply flex items-center mr-2;

        input[type="checkbox"] {
          @apply mr-2 cursor-pointer;
          width: 16px;
          height: 16px;
          transition: border-color 0.3s ease, background-color 0.3s ease;

          &:checked {
            @apply bg-blue-600 border-blue-600;
          }
        }
      }

      > div {
        @apply flex-1;
        line-height: 1.7;
      }
    }
  }

  // TipTap 标准任务列表样式
  ul[data-type="taskList"],
  ul.task-list {
    @apply list-none mb-5;
    padding-left: 0 !important;
    list-style: none !important;

    li[data-type="taskItem"],
    li.task-item {
      @apply mb-2;
      display: flex !important;
      align-items: center !important;
      list-style: none !important;

      > label {
        margin-right: 6px;
        flex-shrink: 0;
        display: flex !important;
        align-items: center !important;
        height: 16px;

        input[type="checkbox"] {
          @apply cursor-pointer;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          margin: 0;
          transition: border-color 0.3s ease, background-color 0.3s ease;

          &:checked {
            @apply bg-blue-600 border-blue-600;
          }
        }

        // 隐藏 TipTap 自动添加的空 span
        > span {
          display: none;
        }
      }

      > div {
        flex: 1;
        line-height: 1.7;

        > p {
          margin-bottom: 0;
          line-height: 1.7;
        }
      }
    }
  }

  blockquote {
    @apply border-l-4 border-panel pl-4 italic text-panel-text-secondary mb-5;
    line-height: 1.7;
    transition: border-color 0.3s ease, color 0.3s ease;
  }

  hr {
    @apply border-t border-panel my-8;
    transition: border-color 0.3s ease;
  }

  a {
    @apply text-blue-600 underline cursor-pointer;
    transition: color 0.3s ease;

    &:hover {
      @apply text-blue-800;
    }
  }

  .wikilink-decoration {
    @apply text-purple-600 cursor-pointer;
    background-color: rgba(147, 51, 234, 0.1);
    padding: 2px 4px;
    border-radius: 3px;
    transition: all 0.2s ease;
    font-weight: 500;

    &:hover {
      @apply text-purple-800;
      background-color: rgba(147, 51, 234, 0.2);
    }
  }

  .wikilink-bracket-hidden {
    @apply opacity-0;
    font-size: 0;
    width: 0;
    display: inline-block;
    overflow: hidden;
  }

  .markdown-link-bracket-hidden {
    @apply opacity-0;
    font-size: 0;
    width: 0;
    display: inline-block;
    overflow: hidden;
  }

  .markdown-link-text {
    @apply text-blue-600 underline cursor-pointer;
    transition: color 0.2s ease;

    &:hover {
      @apply text-blue-800;
    }
  }

  .invalid-link {
    @apply text-panel-text-secondary;
    font-family: inherit;
    font-size: inherit;
    cursor: text;
  }

  code.invalid-link-display,
  span.invalid-link-text {
    @apply bg-transparent text-panel-text-secondary;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: text;
    border-radius: 0;
  }

  table {
    @apply border-collapse w-full mb-5 border border-panel;
    transition: border-color 0.3s ease;

    th, td {
      @apply border border-panel px-4 py-2 text-left;
      line-height: 1.6;
      transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    }

    th {
      @apply bg-content font-bold;
    }
  }

  &:focus {
    @apply outline-none;
  }

  p.is-editor-empty:first-child::before {
    @apply text-panel-text-secondary float-left h-0 pointer-events-none;
    content: attr(data-placeholder);
    transition: color 0.3s ease;
  }

  ::selection {
    @apply bg-blue-200;
  }

  :deep(.search-highlight) {
    @apply bg-yellow-200 rounded px-0.5;
  }

  :deep(.search-highlight-current) {
    @apply bg-amber-300 font-medium;
  }

  &.dark {
    :deep(.search-highlight) {
      @apply bg-yellow-600/40 text-yellow-100;
    }

    :deep(.search-highlight-current) {
      @apply bg-amber-500/50;
    }
  }
}
</style>
