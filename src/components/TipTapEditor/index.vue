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
      @close="showOutline = false"
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
      @close="showBacklinks = false"
      @navigate="handleBacklinkNavigate"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount, nextTick, onMounted } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import { TextSelection, NodeSelection } from '@tiptap/pm/state';
import { debounce } from '@/utils';
import { handleEditorError } from '@/utils/error-handler';
import { markdownToHtml, jsonToMarkdown } from './utils/markdown';
import { createEditorExtensions } from './config/extensions';
import { uploadImage } from '@/utils/image-upload';
import { getWorkspaceRoot } from '@/api/markdown';
import TipTapContextMenu from './TipTapContextMenu.vue';
import EditorStatusBar from './components/EditorStatusBar.vue';
import OutlinePanel from './components/OutlinePanel.vue';
import EditorActions from './components/EditorActions.vue';
import SourceEditor from './components/SourceEditor.vue';
import BacklinkPanel from './components/BacklinkPanel.vue';
import { SearchPanel } from '@/components/UI';
import type { CSSProperties } from 'vue';
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
const showOutline = ref(false);
const showBacklinks = ref(false);
const showSearch = ref(false);
const headings = ref<Array<{ level: number; text: string; pos: number }>>([]);
const viewMode = ref<'reading' | 'preview' | 'source'>('preview');
const sourceContent = ref('');
const currentCursorPos = ref(0);
const visibleHeadingIndex = ref(-1);
const backlinkCount = ref(0);
const workspaceRoot = ref<string>('');

// 防止循环更新的标志位
const isInternalUpdate = ref(false);
const lastEmittedContent = ref('');

// 搜索相关状态
const searchMatches = ref<Array<{ from: number; to: number }>>([]);
const currentSearchIndex = ref(-1);

// 常量：标题跳转时的顶部偏移量（为工具栏和状态栏留出空间）
const HEADING_SCROLL_OFFSET = 120;

// Wikilink 点击处理
const handleWikilinkClick = (noteName: string) => {
  emits('wikilink-click', noteName);
};

// 图片上传处理
const handleImageUpload = async (file: File, _view: EditorView) => {
  console.log('[handleImageUpload] 开始上传图片:', file.name);

  // 检查是否有当前笔记 ID
  if (!props.currentFragmentId) {
    console.error('[handleImageUpload] 未找到当前笔记 ID');
    modal.error('无法上传图片：未找到当前笔记');
    return;
  }

  console.log('[handleImageUpload] 当前笔记 ID:', props.currentFragmentId);

  try {
    // 上传图片
    console.log('[handleImageUpload] 调用 uploadImage');
    const attachmentInfo = await uploadImage(file, String(props.currentFragmentId));
    console.log('[handleImageUpload] 上传成功, attachmentInfo:', attachmentInfo);
    
    // 构建绝对路径
    const absolutePath = `${workspaceRoot.value}\\${attachmentInfo.relativePath.replace('../', '').replace(/\//g, '\\')}`;
    console.log('[handleImageUpload] 绝对路径:', absolutePath);
    
    // 使用 Tauri 的 convertFileSrc 转换为可访问的 URL
    const { convertFileSrc } = await import('@tauri-apps/api/core');
    const tauriUrl = convertFileSrc(absolutePath);
    console.log('[handleImageUpload] Tauri URL:', tauriUrl);
    
    // 直接插入图片节点，包含所有必要的属性
    if (editor.value) {
      console.log('[handleImageUpload] 编辑器存在，准备插入图片');
      
      // 获取当前选区
      const { from } = editor.value.state.selection;
      const $from = editor.value.state.doc.resolve(from);
      
      // 检查当前是否在段落中且段落不为空
      const isInParagraph = $from.parent.type.name === 'paragraph';
      const paragraphHasContent = $from.parent.textContent.trim().length > 0;
      
      console.log('[handleImageUpload] 插入位置:', {
        isInParagraph,
        paragraphHasContent,
        parentType: $from.parent.type.name
      });
      
      // 使用 HTML 方式插入图片，确保 VueNodeViewRenderer 能够识别
      // 不设置初始宽度，让图片自适应显示
      const imgHtml = `<img src="${tauriUrl}" alt="${file.name}" data-original-path="${attachmentInfo.relativePath}" />`;
      console.log('[handleImageUpload] 图片 HTML:', imgHtml);
      
      // 记录插入前的位置
      const insertPos = editor.value.state.selection.from;
      console.log('[handleImageUpload] 插入位置:', insertPos);
      
      if (isInParagraph && paragraphHasContent) {
        // 如果在非空段落中，先换行再插入图片
        console.log('[handleImageUpload] 在非空段落中，先换行');
        editor.value
          .chain()
          .focus()
          .command(({ tr }) => {
            // 在当前位置后插入新段落
            tr.split(tr.selection.from);
            return true;
          })
          .insertContent(imgHtml)
          .run();
      } else {
        // 如果在空段落或其他位置，直接插入
        console.log('[handleImageUpload] 直接插入图片');
        editor.value
          .chain()
          .focus()
          .insertContent(imgHtml)
          .run();
      }
      
      // 插入后选中图片
      nextTick(() => {
        if (!editor.value) return;
        
        const { state } = editor.value;
        const { doc } = state;
        
        // 从插入位置开始查找图片节点
        let imagePos = -1;
        doc.descendants((node, pos) => {
          if (node.type.name === 'image' && pos >= insertPos) {
            imagePos = pos;
            return false; // 找到后停止遍历
          }
          return true; // 继续遍历
        });
        
        console.log('[handleImageUpload] 找到图片节点位置:', imagePos);
        
        if (imagePos >= 0) {
          // 选中图片节点
          const nodeSelection = NodeSelection.create(doc, imagePos);
          editor.value.view.dispatch(
            state.tr.setSelection(nodeSelection)
          );
          console.log('[handleImageUpload] ✅ 图片已选中');
        } else {
          console.warn('[handleImageUpload] ⚠️ 未找到图片节点');
        }
      });
      
      console.log('[handleImageUpload] 图片插入完成');
    } else {
      console.error('[handleImageUpload] 编辑器不存在');
    }

    // 显示成功提示
    modal.success('图片上传成功');
  } catch (error) {
    console.error('图片上传失败:', error);
    modal.error(`图片上传失败: ${error instanceof Error ? error.message : '未知错误'}`);
  }
};

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

// 防抖更新：始终向外发射 Markdown，保证持久化到磁盘的是 Markdown 而非 HTML
// @ts-ignore - debounce 函数的类型定义不够精确
const debouncedEmitUpdate = debounce((editorInstance: Editor) => {
  try {
    const json = editorInstance.getJSON();
    const markdown = jsonToMarkdown(json);
    emits('update:content', markdown);
    emits('change', markdown);
    // 用于 watch(props.content) 时跳过由本次发射触发的回写
    lastEmittedContent.value = markdownToHtml(markdown, workspaceRoot.value);
  } catch (e) {
    handleEditorError(e, 'jsonToMarkdown on emit');
  }
}, 150);

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
      const text = editor.getText();
      isInternalUpdate.value = true;
      updateStats(text);
      debouncedEmitUpdate(editor);
      // 更新光标位置
      currentCursorPos.value = editor.state.selection.from;
      
      // 在下一个 tick 重置标志位
      nextTick(() => {
        isInternalUpdate.value = false;
      });
    } catch (error) {
      handleEditorError(error, 'TipTap onUpdate');
    }
  },
  onSelectionUpdate: ({ editor }) => {
    // 更新光标位置
    currentCursorPos.value = editor.state.selection.from;
  },
  onFocus: () => emits('focus'),
  onBlur: () => emits('blur'),
  onCreate: ({ editor }) => {
    try {
      const text = editor.getText();
      updateStats(text);
      emits('ready', editor);
      // 初始化光标位置
      currentCursorPos.value = editor.state.selection.from;
      
      // 添加全局事件监听器，在捕获阶段拦截锚点链接
      const editorElement = editor.view.dom;
      const handleAnchorClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const link = target.closest('a');
        
        if (link) {
          const href = link.getAttribute('href');
          
          // 只拦截锚点链接
          if (href && href.startsWith('#')) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            // 不执行任何操作，让 handleClick 处理
          }
        }
      };
      
      // 在捕获阶段添加监听器，优先级最高
      editorElement.addEventListener('click', handleAnchorClick, true);
      
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
    handleClick: (view, _pos, event) => {
      // 处理链接点击
      const target = event.target as HTMLElement;
      
      // 注意：.markdown-link-text 的点击已在 MarkdownLinkHandler 的 mousedown 中处理
      // 此处不再重复处理，避免双标签页问题
      
      // 检查普通的 <a> 标签链接
      const link = target.closest('a');
      
      if (link) {
        const href = link.getAttribute('href');
        
        if (href) {
          // 处理锚点链接（文档内跳转）
          if (href.startsWith('#')) {
            // 立即阻止所有默认行为和事件传播
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
            
            // 提取锚点 ID（移除开头的 #）
            const anchorId = decodeURIComponent(href.substring(1));
            
            // 首先尝试直接查找 DOM 元素（最可靠的方式）
            const scrollContainer = view.dom as HTMLElement;
            const targetElement = scrollContainer.querySelector(`[id="${anchorId}"]`) ||
                                 scrollContainer.querySelector(`a[name="${anchorId}"]`);
            
            if (targetElement) {
              // 找到了对应的元素，直接滚动到该位置
              const elementTop = (targetElement as HTMLElement).offsetTop;
              const targetScroll = Math.max(0, elementTop - HEADING_SCROLL_OFFSET);
              scrollContainer.scrollTop = targetScroll;
            } else {
              // 如果没找到 DOM 元素，尝试实时提取标题并查找
              const currentHeadings: Array<{ level: number; text: string; pos: number }> = [];
              
              if (editor.value) {
                editor.value.state.doc.descendants((node, nodePos) => {
                  if (node.type.name === 'heading') {
                    currentHeadings.push({
                      level: node.attrs.level,
                      text: node.textContent,
                      pos: nodePos
                    });
                  }
                });
              }
              
              const heading = currentHeadings.find(h => {
                // 将标题文本转换为锚点 ID 格式
                const headingId = h.text
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, '-')
                  .replace(/[^\w\u4e00-\u9fa5-]/g, '');
                return headingId === anchorId;
              });
              
              if (heading) {
                // 直接滚动到标题位置，不设置文本选择
                const allHeadingElements = scrollContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');
                let targetElement: HTMLElement | null = null;
                
                allHeadingElements.forEach((el: Element) => {
                  const headingEl = el as HTMLElement;
                  const text = headingEl.textContent?.trim() || '';
                  if (text === heading.text && !targetElement) {
                    targetElement = headingEl;
                  }
                });
                
                if (targetElement) {
                  let elementTop = 0;
                  let currentElement: HTMLElement | null = targetElement;
                  
                  while (currentElement && currentElement !== scrollContainer) {
                    elementTop += currentElement.offsetTop;
                    currentElement = currentElement.offsetParent as HTMLElement | null;
                    if (currentElement === scrollContainer) break;
                  }
                  
                  const targetScroll = Math.max(0, elementTop - HEADING_SCROLL_OFFSET);
                  scrollContainer.scrollTop = targetScroll;
                } else {
                  console.warn('Target element not found in DOM');
                }
              } else {
                console.warn('No matching heading found for anchor:', anchorId);
              }
            }
            
            return true;
          }
          // 处理外部链接
          else if (href && href.trim() !== '') {
            // 检查是否是有效的外部链接
            const isValidExternalLink = 
              href.startsWith('http://') || 
              href.startsWith('https://') || 
              href.startsWith('www.') ||
              /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(href);
            
            if (isValidExternalLink) {
              // 立即阻止所有默认行为和事件传播
              event.preventDefault();
              event.stopPropagation();
              event.stopImmediatePropagation();
              
              // 自动补全协议（如果缺少）
              let fullUrl = href;
              if (!href.includes('://')) {
                fullUrl = `https://${href}`;
              }
              
              // 使用 Tauri 的 shell 在系统默认浏览器中打开链接
              import('@tauri-apps/plugin-shell').then(({ open }) => {
                open(fullUrl).catch(err => {
                  console.error('Failed to open external link:', err);
                });
              });
              
              return true;
            }
            // 如果不是有效的外部链接（如空URL、相对路径等），不做任何处理
            // 让它显示为普通的 <a> 标签
          }
        }
      }
      
      return false;
    },
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

// 切换视图模式
const toggleViewMode = (mode: 'reading' | 'preview' | 'source') => {
  if (mode === viewMode.value) return;
  
  const wasSourceMode = viewMode.value === 'source';
  
  if (mode === 'source') {
    // 切换到源码模式：清理 TipTap 的滚动监听器
    cleanupScrollListener();
    
    if (editor.value) {
      // 使用 JSON 格式转换，而不是 HTML
      // 因为 TipTap 的 getHTML() 会丢失任务列表的结构
      const json = editor.value.getJSON();
      sourceContent.value = jsonToMarkdown(json);
    }
    viewMode.value = 'source';
    emits('view-mode-change', 'source');
    
    // 如果大纲面板已打开，提取源码中的标题并设置滚动监听
    if (showOutline.value) {
      nextTick(() => {
        extractHeadingsFromSource();
        setupSourceScrollListener();
      });
    }
  } else if (mode === 'preview') {
    if (wasSourceMode && editor.value && sourceContent.value) {
      try {
        const html = markdownToHtml(sourceContent.value, workspaceRoot.value);
        editor.value.commands.setContent(html, { emitUpdate: false });
        lastEmittedContent.value = html;
        nextTick(() => {
          emits('update:content', sourceContent.value);
          emits('change', sourceContent.value);
        });
      } catch (error) {
        console.error('Failed to parse Markdown:', error);
        handleEditorError(error, 'Markdown to HTML conversion');
      }
    }
    if (editor.value) {
      editor.value.setEditable(true);
    }
    viewMode.value = 'preview';
    emits('view-mode-change', 'preview');
    
    // 如果大纲面板已打开，重新设置滚动监听器和提取标题
    if (showOutline.value) {
      nextTick(() => {
        extractHeadings();
        setupScrollListener();
      });
    }
  } else if (mode === 'reading') {
    if (wasSourceMode && editor.value && sourceContent.value) {
      try {
        const html = markdownToHtml(sourceContent.value, workspaceRoot.value);
        editor.value.commands.setContent(html, { emitUpdate: false });
        lastEmittedContent.value = html;
        nextTick(() => {
          emits('update:content', sourceContent.value);
          emits('change', sourceContent.value);
        });
      } catch (error) {
        console.error('Failed to parse Markdown:', error);
        handleEditorError(error, 'Markdown to HTML conversion');
      }
    }
    if (editor.value) {
      editor.value.setEditable(false);
    }
    viewMode.value = 'reading';
    emits('view-mode-change', 'reading');
    
    // 如果大纲面板已打开，重新设置滚动监听器和提取标题
    if (showOutline.value) {
      nextTick(() => {
        extractHeadings();
        setupScrollListener();
      });
    }
  }
};

// 源码内容变更
const handleSourceContentChange = (value: string) => {
  sourceContent.value = value;
  // 如果大纲面板打开，重新提取标题
  if (showOutline.value) {
    extractHeadingsFromSource();
  }
  // 实时触发内容更新事件，确保父组件能够获取到源码模式下的内容
  emits('update:content', value);
  emits('change', value);
};

// 从源码中提取标题
const extractHeadingsFromSource = () => {
  const lines = sourceContent.value.split('\n');
  const newHeadings: Array<{ level: number; text: string; pos: number }> = [];
  
  lines.forEach((line, index) => {
    // 匹配 Markdown 标题格式：# 标题
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      newHeadings.push({
        level,
        text,
        pos: index // 在源码模式下，pos 表示行号
      });
    }
  });
  
  headings.value = newHeadings;
};

// 源码编辑器滚动处理
const handleSourceScroll = () => {
  if (showOutline.value) {
    updateVisibleHeadingInSource();
  }
};

// 更新源码模式下的可视标题
const updateVisibleHeadingInSource = () => {
  if (!sourceEditorRef.value || headings.value.length === 0) {
    visibleHeadingIndex.value = -1;
    return;
  }
  
  const textarea = sourceEditorRef.value.getTextarea();
  if (!textarea) {
    visibleHeadingIndex.value = -1;
    return;
  }
  
  // 计算实际行高
  const computedStyle = window.getComputedStyle(textarea);
  const fontSize = parseFloat(computedStyle.fontSize);
  const lineHeight = fontSize * 1.5; // line-height: 1.5
  
  // 计算当前可视区域的行号
  const scrollTop = textarea.scrollTop;
  const currentLine = Math.floor(scrollTop / lineHeight);
  
  // 找到最接近的标题
  let closestIndex = -1;
  for (let i = headings.value.length - 1; i >= 0; i--) {
    if (headings.value[i].pos <= currentLine) {
      closestIndex = i;
      break;
    }
  }
  
  visibleHeadingIndex.value = closestIndex;
};

// 设置源码编辑器的滚动监听
let sourceScrollCleanup: (() => void) | null = null;

const setupSourceScrollListener = () => {
  if (!sourceEditorRef.value) return;
  
  if (sourceScrollCleanup) {
    sourceScrollCleanup();
  }
  
  const textarea = sourceEditorRef.value.getTextarea();
  if (!textarea) return;
  
  const debouncedUpdate = debounce(updateVisibleHeadingInSource, 100);
  textarea.addEventListener('scroll', debouncedUpdate);
  updateVisibleHeadingInSource();
  
  sourceScrollCleanup = () => {
    textarea.removeEventListener('scroll', debouncedUpdate);
  };
};

const cleanupSourceScrollListener = () => {
  if (sourceScrollCleanup) {
    sourceScrollCleanup();
    sourceScrollCleanup = null;
  }
};

// 处理视图模式切换命令
const handleViewModeCommand = (command: 'reading' | 'preview' | 'source') => {
  toggleViewMode(command);
};

// 切换到阅读模式
const toggleToReadingMode = () => {
  toggleViewMode('reading');
};

// 切换到编辑模式
const toggleToEditingMode = () => {
  toggleViewMode('preview');
};

// 切换大纲
const toggleOutline = () => {
  showOutline.value = !showOutline.value;
  emits('outline-toggle', showOutline.value);
  if (showOutline.value) {
    extractHeadings();
    // 设置滚动监听器
    if (editor.value) {
      nextTick(() => {
        setupScrollListener();
      });
    }
  } else {
    // 清理滚动监听器
    cleanupScrollListener();
  }
};

// 切换反向链接面板
const toggleBacklinks = () => {
  showBacklinks.value = !showBacklinks.value;
};

// 搜索功能
const openSearch = () => {
  showSearch.value = true;
  nextTick(() => {
    searchPanelRef.value?.focus();
  });
};

const closeSearch = () => {
  showSearch.value = false;
  clearSearchHighlights();
};

const handleSearch = (query: string, matchCase: boolean) => {
  if (!editor.value || !query) {
    clearSearchHighlights();
    return;
  }

  const doc = editor.value.state.doc;
  const matches: Array<{ from: number; to: number }> = [];
  const flags = matchCase ? 'g' : 'gi';
  const searchRegex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);

  doc.descendants((node, pos) => {
    if (node.isText && node.text) {
      searchRegex.lastIndex = 0;
      let match;
      while ((match = searchRegex.exec(node.text)) !== null) {
        matches.push({
          from: pos + match.index,
          to: pos + match.index + match[0].length
        });
      }
    }
  });

  // 更新搜索匹配结果
  searchMatches.value = [...matches];
  currentSearchIndex.value = -1; // 不自动选中第一个，保持 -1 表示未选中状态

  searchPanelRef.value?.updateMatchInfo(currentSearchIndex.value, matches.length);

  // 强制触发 Decoration 更新
  if (editor.value?.view && matches.length > 0) {
    const view = editor.value.view;
    const { state } = view;
    const tr = state.tr;
    if (doc.content.size > 0) {
      const tempText = state.schema.text('\u200B');
      if (tempText) {
        tr.insert(doc.content.size, tempText);
        tr.delete(doc.content.size, doc.content.size + 1);
        view.dispatch(tr);
      }
    }
  }
};

const findNext = () => {
  if (searchMatches.value.length === 0) return;

  // 如果当前没有选中任何匹配项（-1），则从第一个开始
  if (currentSearchIndex.value === -1) {
    currentSearchIndex.value = 0;
  } else {
    currentSearchIndex.value = (currentSearchIndex.value + 1) % searchMatches.value.length;
  }

  searchPanelRef.value?.updateMatchInfo(currentSearchIndex.value, searchMatches.value.length);
  scrollToMatch(currentSearchIndex.value, true);
};

const findPrevious = () => {
  if (searchMatches.value.length === 0) return;

  // 如果当前没有选中任何匹配项（-1），则从最后一个开始
  if (currentSearchIndex.value === -1) {
    currentSearchIndex.value = searchMatches.value.length - 1;
  } else {
    currentSearchIndex.value = currentSearchIndex.value <= 0
      ? searchMatches.value.length - 1
      : currentSearchIndex.value - 1;
  }

  searchPanelRef.value?.updateMatchInfo(currentSearchIndex.value, searchMatches.value.length);
  scrollToMatch(currentSearchIndex.value, true);
};

const scrollToMatch = (index: number, shouldFocusEditor: boolean = false) => {
  if (!editor.value || index < 0 || index >= searchMatches.value.length) return;

  const match = searchMatches.value[index];
  editor.value.commands.setTextSelection({ from: match.from, to: match.to });

  // 只有在明确需要时才聚焦编辑器（如点击上一项/下一项）
  // 输入搜索时保留焦点在搜索框
  if (shouldFocusEditor) {
    editor.value.commands.focus();
  }

  // 使用 coordsAtPos 计算滚动位置，不依赖 DOM 选区（未聚焦时选区可能在搜索框）
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (!editor.value) return;

      const { view } = editor.value;
      const scrollContainer = view.dom as HTMLElement;
      const coords = view.coordsAtPos(match.from);
      const containerRect = scrollContainer.getBoundingClientRect();
      const relativeTop = coords.top - containerRect.top + scrollContainer.scrollTop;
      const isVisible =
        coords.top >= containerRect.top && coords.bottom <= containerRect.bottom;

      if (!isVisible) {
        scrollContainer.scrollTo({
          top: Math.max(0, relativeTop - 100),
          behavior: 'smooth'
        });
      }
    });
  });
};

const clearSearchHighlights = () => {
  searchMatches.value = [];
  currentSearchIndex.value = -1;
  searchPanelRef.value?.updateMatchInfo(-1, 0);
  editor.value?.commands.blur();
};

// 处理反向链接导航
const handleBacklinkNavigate = (fragmentId: number | string, searchTitle: string) => {
  emits('backlink-navigate', fragmentId, searchTitle);
};

// 更新反向链接计数
const updateBacklinkCount = async () => {
  if (!props.currentTitle) {
    backlinkCount.value = 0;
    return;
  }
  
  try {
    const { getBacklinkStats } = await import('@/utils/wikilink-updater');
    const stats = await getBacklinkStats(props.currentTitle, props.currentFragmentId);
    backlinkCount.value = stats.count;
  } catch (error) {
    console.error('Failed to update backlink count:', error);
    backlinkCount.value = 0;
  }
};

// 监听标题变化，更新反向链接计数
watch(() => props.currentTitle, () => {
  updateBacklinkCount();
}, { immediate: true });

// 提取标题
const extractHeadings = () => {
  if (!editor.value) {
    headings.value = [];
    return;
  }
  
  const newHeadings: Array<{ level: number; text: string; pos: number }> = [];
  
  editor.value.state.doc.descendants((node, pos) => {
    if (node.type.name === 'heading') {
      newHeadings.push({
        level: node.attrs.level,
        text: node.textContent,
        pos: pos
      });
    }
  });
  
  headings.value = newHeadings;
};

// 计算可视区域内的标题
const updateVisibleHeading = () => {
  // 源码模式使用专门的函数
  if (viewMode.value === 'source') {
    updateVisibleHeadingInSource();
    return;
  }
  
  if (!editor.value || headings.value.length === 0) {
    visibleHeadingIndex.value = -1;
    return;
  }
  
  const scrollContainer = editor.value.view.dom as HTMLElement;
  if (!scrollContainer) {
    visibleHeadingIndex.value = -1;
    return;
  }
  
  const scrollTop = scrollContainer.scrollTop;
  const viewportHeight = scrollContainer.clientHeight;
  const viewportCenter = scrollTop + viewportHeight * 0.2;
  
  const allHeadingElements = scrollContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const headingElementMap = new Map<number, HTMLElement>();
  
  allHeadingElements.forEach((el: Element) => {
    const headingEl = el as HTMLElement;
    const text = headingEl.textContent?.trim() || '';
    
    const matchIndex = headings.value.findIndex((h, idx) => {
      if (headingElementMap.has(idx)) return false;
      return h.text === text;
    });
    
    if (matchIndex >= 0) {
      headingElementMap.set(matchIndex, headingEl);
    }
  });
  
  let closestIndex = -1;
  let closestDistance = Infinity;
  
  headings.value.forEach((_heading, index) => {
    const element = headingElementMap.get(index);
    
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      const elementTop = elementRect.top - containerRect.top + scrollTop;
      
      if (elementTop <= viewportCenter) {
        const distance = viewportCenter - elementTop;
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    }
  });
  
  visibleHeadingIndex.value = closestIndex;
};

// 设置滚动监听器
let scrollCleanup: (() => void) | null = null;

const setupScrollListener = () => {
  if (!editor.value) return;
  
  if (scrollCleanup) {
    scrollCleanup();
  }
  
  const scrollContainer = editor.value.view.dom as HTMLElement;
  if (!scrollContainer) return;
  
  const debouncedUpdate = debounce(updateVisibleHeading, 100);
  const debouncedEmitScroll = debounce(() => {
    const top = scrollContainer.scrollTop;
    emits('scroll-position', top);
  }, 400);
  scrollContainer.addEventListener('scroll', debouncedUpdate);
  scrollContainer.addEventListener('scroll', debouncedEmitScroll);
  updateVisibleHeading();

  scrollCleanup = () => {
    scrollContainer.removeEventListener('scroll', debouncedUpdate);
    scrollContainer.removeEventListener('scroll', debouncedEmitScroll);
  };
};

const cleanupScrollListener = () => {
  if (scrollCleanup) {
    scrollCleanup();
    scrollCleanup = null;
  }
  cleanupSourceScrollListener();
};

// 跳转到标题
const jumpToHeading = (pos: number) => {
  if (viewMode.value === 'source') {
    // 源码模式：跳转到指定行号
    if (sourceEditorRef.value) {
      sourceEditorRef.value.scrollToLine(pos);
    }
    return;
  }
  
  if (!editor.value) return;
  
  try {
    const scrollContainer = editor.value.view.dom as HTMLElement;
    const allHeadingElements = scrollContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    const targetHeading = headings.value.find(h => h.pos === pos);
    if (!targetHeading) {
      console.warn('Target heading not found for pos:', pos);
      return;
    }
    
    let targetElement: HTMLElement | null = null;
    allHeadingElements.forEach((el: Element) => {
      const headingEl = el as HTMLElement;
      const text = headingEl.textContent?.trim() || '';
      if (text === targetHeading.text && !targetElement) {
        targetElement = headingEl;
      }
    });
    
    if (targetElement) {
      let elementTop = 0;
      let currentElement: HTMLElement | null = targetElement;
      
      while (currentElement && currentElement !== scrollContainer) {
        elementTop += currentElement.offsetTop;
        currentElement = currentElement.offsetParent as HTMLElement | null;
        if (currentElement === scrollContainer) break;
      }
      
      const targetScroll = Math.max(0, elementTop - HEADING_SCROLL_OFFSET);
      scrollContainer.scrollTop = targetScroll;
    } else {
      console.warn('Target element not found in DOM');
    }
  } catch (error) {
    console.error('Failed to scroll to heading:', error);
  }
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
  // 如果是内部更新触发的，跳过以防止循环更新
  if (isInternalUpdate.value) {
    return;
  }
  
  // 如果内容相同，跳过
  if (lastEmittedContent.value === newContent) {
    return;
  }
  
  try {
    if (editor.value && editor.value.getHTML() !== newContent) {
      // 使用 emitUpdate: false 避免触发循环更新（尤其是初始化加载时）
      editor.value.commands.setContent(newContent, { emitUpdate: false });
      lastEmittedContent.value = newContent;
      const text = editor.value.getText();
      updateStats(text);
    }
  } catch (error) {
    handleEditorError(error, 'TipTap content update');
  }
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
  /** 获取当前编辑器内容区域滚动位置（用于会话恢复） */
  getScrollPosition: (): number => {
    if (!editor.value) return 0;
    const scrollContainer = editor.value.view.dom as HTMLElement;
    return scrollContainer?.scrollTop ?? 0;
  },
  /** 设置编辑器内容区域滚动位置（用于会话恢复） */
  setScrollPosition: (scrollTop: number) => {
    if (!editor.value) return;
    nextTick(() => {
      const scrollContainer = editor.value?.view.dom as HTMLElement;
      if (scrollContainer) {
        scrollContainer.scrollTop = Math.max(0, scrollTop);
      }
    });
  },
  scrollToWikilink: (searchTitle: string) => {
    if (!editor.value) return;
    
    nextTick(() => {
      try {
        const scrollContainer = editor.value!.view.dom as HTMLElement;
        let targetElement: HTMLElement | null = null;
        let highlightRange: Range | null = null;
        
        const wikilinkElements = scrollContainer.querySelectorAll('.wikilink-decoration');
        for (const element of wikilinkElements) {
          const cleanText = (element.textContent || '').replace(/\[\[|\]\]/g, '').trim();
          if (cleanText === searchTitle) {
            targetElement = element as HTMLElement;
            break;
          }
        }
        
        if (!targetElement) {
          const walker = document.createTreeWalker(scrollContainer, NodeFilter.SHOW_TEXT, null);
          let node: Node | null;
          
          while ((node = walker.nextNode())) {
            const textContent = node.textContent || '';
            const index = textContent.indexOf(searchTitle);
            
            if (index !== -1) {
              const parentElement = node.parentElement;
              if (!parentElement) continue;
              
              let parent: HTMLElement | null = parentElement;
              let isInWikilink = false;
              
              while (parent && parent !== scrollContainer) {
                if (parent.classList.contains('wikilink-decoration')) {
                  isInWikilink = true;
                  break;
                }
                parent = parent.parentElement;
              }
              
              if (!isInWikilink) {
                targetElement = parentElement;
                try {
                  const range = document.createRange();
                  range.setStart(node, index);
                  range.setEnd(node, index + searchTitle.length);
                  if (range.getClientRects().length > 0) {
                    highlightRange = range;
                  }
                } catch (error) {
                  // Ignore range creation errors
                }
                break;
              }
            }
          }
        }
        
        if (!targetElement) return;
        
        const targetRect = targetElement.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        
        let elementOffsetTop = 0;
        let currentElement: HTMLElement | null = targetElement;
        while (currentElement && currentElement !== scrollContainer) {
          elementOffsetTop += currentElement.offsetTop;
          currentElement = currentElement.offsetParent as HTMLElement | null;
          if (currentElement === scrollContainer) break;
        }
        
        const viewportHeight = containerRect.height;
        const elementHeight = targetRect.height;
        const targetPositionInViewport = viewportHeight / 2;
        
        let isInCodeBlock = false;
        let checkElement: HTMLElement | null = targetElement;
        while (checkElement && checkElement !== scrollContainer) {
          if (checkElement.tagName === 'PRE' || 
              checkElement.classList.contains('code-block-wrapper') ||
              checkElement.classList.contains('hljs')) {
            isInCodeBlock = true;
            break;
          }
          checkElement = checkElement.parentElement;
        }
        
        const scrollAdjustment = isInCodeBlock ? 580 : -80;
        const newScrollTop = elementOffsetTop - targetPositionInViewport + (elementHeight / 2) + scrollAdjustment;
        scrollContainer.scrollTop = Math.max(0, newScrollTop);
        
        setTimeout(() => {
          const createHighlight = (rect: DOMRect) => {
            const overlay = document.createElement('div');
            overlay.style.cssText = `
              position: fixed;
              left: ${rect.left}px;
              top: ${rect.top}px;
              width: ${rect.width}px;
              height: ${rect.height}px;
              background-color: rgba(255, 235, 59, 0.3);
              border-radius: 2px;
              pointer-events: none;
              z-index: 9999;
              animation: highlight-pulse 1.5s ease-out;
            `;
            
            if (!document.getElementById('highlight-animation-style')) {
              const style = document.createElement('style');
              style.id = 'highlight-animation-style';
              style.textContent = `
                @keyframes highlight-pulse {
                  0% { background-color: rgba(255, 235, 59, 0.6); box-shadow: 0 0 0 0 rgba(255, 235, 59, 0.4); }
                  50% { background-color: rgba(255, 235, 59, 0.4); box-shadow: 0 0 0 4px rgba(255, 235, 59, 0.2); }
                  100% { background-color: rgba(255, 235, 59, 0); box-shadow: 0 0 0 0 rgba(255, 235, 59, 0); }
                }
              `;
              document.head.appendChild(style);
            }
            
            document.body.appendChild(overlay);
            setTimeout(() => overlay.remove(), 2000);
          };
          
          if (highlightRange) {
            Array.from<DOMRect>(highlightRange.getClientRects()).forEach(createHighlight);
          } else if (targetElement) {
            createHighlight(targetElement.getBoundingClientRect());
          }
        }, 200);
      } catch (error) {
        console.error('Failed to scroll to wikilink:', error);
      }
    });
  }
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
