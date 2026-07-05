<template>
  <main class="editor-container" :class="{ 'dark-theme': props.dark }" :style="editorContainerStyle">
    <!-- 主编辑区域（左侧） -->
    <div class="editor-main">
      <!-- 富文本编辑器视图 -->
      <div
        ref="editorContentRef"
        v-show="viewMode === 'preview' || viewMode === 'reading'"
        class="editor-content"
        :style="props.codeStyle"
        @contextmenu="handleContextMenu"
      >
        <div
          v-if="props.showLineNumbers"
          ref="previewLineNumbersRef"
          class="preview-line-numbers"
          :style="{ minHeight: previewLineNumbersMinHeight }"
          aria-hidden="true"
        >
          <span v-for="line in previewLineCount" :key="line">{{ line }}</span>
        </div>
        <editor-content class="editor-content-body" :editor="editor" />
      </div>
      
      <!-- 源码编辑器视图 -->
      <SourceEditor
        ref="sourceEditorRef"
        v-show="viewMode === 'source'"
        :content="sourceContent"
        :dark="props.dark"
        :show-line-numbers="props.showLineNumbers"
        :line-height="props.lineHeight"
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
import { sanitizeHtml } from '@/utils/html-sanitize';
import { createEditorExtensions } from './config/extensions';
import { getWorkspaceRoot } from '@/api/markdown';
import TipTapContextMenu from './TipTapContextMenu.vue';
import EditorStatusBar from './components/EditorStatusBar.vue';
import OutlinePanel from './components/OutlinePanel.vue';
import EditorActions from './components/EditorActions.vue';
import SourceEditor from './components/SourceEditor.vue';
import BacklinkPanel from './components/BacklinkPanel.vue';
import { useEditorBacklinks } from './composables/useEditorBacklinks';
import { useEditorContextMenu } from './composables/useEditorContextMenu';
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
  showLineNumbers?: boolean;
  lineHeight?: number;
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
  showLineNumbers: true,
  lineHeight: 1.6,
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
const editorContentRef = ref<HTMLDivElement | null>(null);
const wordCount = ref(0);
const charCount = ref(0);
const sourceContent = ref('');
const workspaceRoot = ref<string>('');
const previewLineCount = ref(1);
const previewLineNumbersMinHeight = ref('100%');
let previewResizeObserver: ResizeObserver | null = null;
const editorContainerStyle = computed(() => ({
  '--editor-line-height-value': String(props.lineHeight)
}) as CSSProperties);

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

const {
  handleContextMenu,
  handleSourceContextMenu
} = useEditorContextMenu({
  isEnabled: () => props.showContextMenu,
  getContextMenu: () => contextMenuRef.value
});

function getEditorScrollContainer(view: EditorView): HTMLElement {
  const editorElement = view.dom as HTMLElement;
  const contentElement = editorElement.closest('.editor-content') as HTMLElement | null;

  if (contentElement && contentElement.scrollHeight > contentElement.clientHeight) {
    return contentElement;
  }

  if (editorElement.scrollHeight > editorElement.clientHeight) {
    return editorElement;
  }

  return contentElement || editorElement;
}

function scrollEditorSelectionIntoView(view: EditorView): void {
  requestAnimationFrame(() => {
    try {
      const position = view.state.selection.head;
      const coords = view.coordsAtPos(position);
      const container = getEditorScrollContainer(view);
      const containerRect = container.getBoundingClientRect();
      const padding = 42;

      // 当 coords 为 (0,0) 时，说明位置对应的 DOM 节点尚未渲染（如 NodeView 还在挂载中），
      // 此时坐标无效，跳过滚动避免误判导致页面跳动
      if (coords.top === 0 && coords.bottom === 0) {
        return;
      }

      if (coords.bottom > containerRect.bottom - padding) {
        container.scrollTop += coords.bottom - containerRect.bottom + padding;
      } else if (coords.top < containerRect.top + padding) {
        container.scrollTop -= containerRect.top + padding - coords.top;
      }
    } catch (error) {
      console.debug('[TipTapEditor] scroll selection into view skipped:', error);
    }
  });
}

const MARKDOWN_SYNTAX_RE =
  /(^#{1,6}\s+\S|^ {0,3}(?:[-*+]|\d+\.|\d+[\u3001\uff0e]\s*)\s*\S|^ {0,3}[-*+]\s+\[[ xX]\]\s+\S|^ {0,3}>\s+\S|^```|^ {0,3}\|.+\|$|\*\*[^*\n]+\*\*|__[^_\n]+__|~~[^~\n]+~~|`[^`\n]+`|!\[[^\]]*\]\([^)]+\)|\[[^\]]+\]\([^)]+\))/m;
const ORDERED_LIST_RE = /^ {0,3}\d+(?:\.|\u3001|\uff0e)\s*\S/gm;
const MARKDOWN_LINK_TEXT_RE = /((?:[\w.-]+\/)+)?\[([^\]\n]+)\]\(([^)\n]+)\)/g;
const PROJECT_FILE_PATH_RE =
  /\b(?:src|src-tauri|docs|scripts|tests?|packages?)\/[^\s()[\]{}<>，。；：、]+?\.[A-Za-z0-9]{1,10}\b/g;
const RICH_HTML_RE =
  /<\/?(?:h[1-6]|ul|ol|li|blockquote|pre|code|strong|b|em|i|del|s|table|thead|tbody|tr|td|th|a|img)\b/i;

function clipboardHasRichHtml(html: string): boolean {
  return RICH_HTML_RE.test(html);
}

function getMarkdownClipboardText(data: DataTransfer | null): string {
  if (!data) return '';
  const explicitMarkdown = data.getData('text/markdown');
  if (explicitMarkdown.trim()) {
    return explicitMarkdown;
  }
  return data.getData('text/plain') || '';
}

function shouldParseClipboardAsMarkdown(text: string, html: string): boolean {
  if (!text.trim()) return false;
  if (clipboardHasRichHtml(html)) return false;
  return MARKDOWN_SYNTAX_RE.test(text) || text.includes('\n');
}

function extractClipboardHtmlFragment(html: string): string {
  const fragmentMatch = html.match(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/i);
  return fragmentMatch ? fragmentMatch[1] : html;
}

function normalizeSlashPath(value: string): string {
  return value.trim().replace(/\\/g, '/');
}

function safeDecodeUri(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function looksLikeProjectPath(value: string): boolean {
  const normalized = normalizeSlashPath(value);
  return (
    /^[\w.-]+\/[\w./-]+$/.test(normalized) ||
    normalized.startsWith('./') ||
    normalized.startsWith('../')
  );
}

function isLocalPathHref(value: string): boolean {
  const normalized = safeDecodeUri(normalizeSlashPath(value));
  return (
    normalized.startsWith('file://') ||
    /^[a-zA-Z]:\//.test(normalized) ||
    normalized.startsWith('/') ||
    normalized.startsWith('./') ||
    normalized.startsWith('../') ||
    looksLikeProjectPath(normalized)
  );
}

function isExternalHref(value: string): boolean {
  const normalized = value.trim();
  return (
    normalized.startsWith('http://') ||
    normalized.startsWith('https://') ||
    normalized.startsWith('www.') ||
    /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(normalized)
  );
}

function normalizeLocalHref(href: string): string {
  let normalized = safeDecodeUri(normalizeSlashPath(href));
  normalized = normalized.replace(/^file:\/\/\/?/i, '');
  return normalized.replace(/^\/([a-zA-Z]:\/)/, '$1');
}

function normalizePastedLinks(fragment: DocumentFragment): void {
  fragment.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href') || '';
    const label = normalizeSlashPath(anchor.textContent || '');

    if (!label) return;

    if (looksLikeProjectPath(label) || isLocalPathHref(href)) {
      anchor.setAttribute('href', looksLikeProjectPath(label) ? label : normalizeLocalHref(href));
      anchor.removeAttribute('target');
      anchor.removeAttribute('rel');
    }
  });
}

function shouldRenderMarkdownLink(label: string, href: string): boolean {
  return looksLikeProjectPath(label) || isLocalPathHref(href) || isExternalHref(href) || href.trim().startsWith('#');
}

function getRenderableMarkdownHref(label: string, href: string): string {
  if (looksLikeProjectPath(label)) return label;
  if (isLocalPathHref(href)) return normalizeLocalHref(href);
  return href.trim();
}

function hasMarkdownLinkText(text: string): boolean {
  MARKDOWN_LINK_TEXT_RE.lastIndex = 0;
  return MARKDOWN_LINK_TEXT_RE.test(text);
}

function replaceMarkdownLinksInTextNode(node: Text): void {
  const text = node.nodeValue || '';
  if (!hasMarkdownLinkText(text)) return;

  MARKDOWN_LINK_TEXT_RE.lastIndex = 0;
  const fragment = document.createDocumentFragment();
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = MARKDOWN_LINK_TEXT_RE.exec(text))) {
    const [raw, pathPrefix = '', linkText, href] = match;
    const label = normalizeSlashPath(`${pathPrefix}${linkText}`);

    if (!shouldRenderMarkdownLink(label, href)) {
      continue;
    }

    if (match.index > lastIndex) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
    }

    const anchor = document.createElement('a');
    anchor.setAttribute('href', getRenderableMarkdownHref(label, href));
    anchor.textContent = label;
    fragment.appendChild(anchor);
    lastIndex = match.index + raw.length;
  }

  if (lastIndex === 0) return;

  if (lastIndex < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
  }

  node.replaceWith(fragment);
}

function normalizeMarkdownLinksInTextNodes(fragment: DocumentFragment): void {
  const walker = document.createTreeWalker(fragment, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentNode instanceof Element ? node.parentNode : null;
      if (parent?.closest('a, code, pre')) return NodeFilter.FILTER_REJECT;
      return hasMarkdownLinkText(node.nodeValue || '')
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }

  nodes.forEach(replaceMarkdownLinksInTextNode);
}

function replaceElementTag(element: Element, tagName: string): HTMLElement {
  const replacement = document.createElement(tagName);

  Array.from(element.attributes).forEach((attr) => {
    replacement.setAttribute(attr.name, attr.value);
  });

  while (element.firstChild) {
    replacement.appendChild(element.firstChild);
  }

  element.replaceWith(replacement);
  return replacement;
}

function getDirectListItems(list: Element): Element[] {
  return Array.from(list.children).filter((child) => child.tagName === 'LI');
}

function isTaskListElement(list: Element): boolean {
  return (
    list.getAttribute('data-type') === 'taskList' ||
    list.classList.contains('task-list') ||
    list.querySelector('input[type="checkbox"]') !== null
  );
}

function isLikelyCodexOrderedList(list: Element): boolean {
  if (list.parentElement?.closest('ul, ol')) return false;
  if (isTaskListElement(list)) return false;

  const items = getDirectListItems(list);
  if (items.length < 2) return false;

  return items.every((item) => {
    const firstElement = Array.from(item.children).find((child) => {
      return (child.textContent || '').trim().length > 0;
    });
    const firstInnerElement = firstElement?.firstElementChild;
    return (
      firstElement?.tagName === 'STRONG' ||
      firstElement?.tagName === 'B' ||
      firstInnerElement?.tagName === 'STRONG' ||
      firstInnerElement?.tagName === 'B'
    );
  });
}

function normalizeOrderedLists(fragment: DocumentFragment, plainText: string): void {
  fragment.querySelectorAll('ul').forEach((list) => {
    const style = list.getAttribute('style') || '';
    const type = list.getAttribute('type') || '';
    const dataList = list.getAttribute('data-list') || list.getAttribute('data-list-type') || '';
    const className = list.className || '';
    const looksOrdered =
      /\blist-style(?:-type)?\s*:\s*(?:decimal|lower-alpha|upper-alpha|lower-roman|upper-roman)\b/i.test(style) ||
      type === '1' ||
      dataList.toLowerCase() === 'ordered' ||
      /\bordered\b/i.test(String(className));

    if (looksOrdered || isLikelyCodexOrderedList(list)) {
      replaceElementTag(list, 'ol');
    }
  });

  const orderedItemCount = plainText.match(ORDERED_LIST_RE)?.length || 0;
  if (orderedItemCount < 2) return;

  const targetList = Array.from(fragment.querySelectorAll('ul')).find((list) => {
    const itemCount = Array.from(list.children).filter((child) => child.tagName === 'LI').length;
    return itemCount === orderedItemCount;
  });

  if (targetList) {
    replaceElementTag(targetList, 'ol');
  }
}

function normalizePastedRichHtml(html: string, plainText: string): string {
  const template = document.createElement('template');
  template.innerHTML = extractClipboardHtmlFragment(html);

  normalizePastedLinks(template.content);
  normalizeMarkdownLinksInTextNodes(template.content);
  normalizeOrderedLists(template.content, plainText);

  return sanitizeHtml(template.innerHTML);
}

function linkProjectFilePathsInEditor(): void {
  const instance = editor.value;
  if (!instance) return;

  const { state, view } = instance;
  const linkMark = state.schema.marks.link;
  if (!linkMark) return;

  let tr = state.tr;
  let changed = false;

  state.doc.descendants((node, pos) => {
    if (!node.isText || !node.text) return;
    if (node.marks.some((mark) => mark.type.name === 'code' || mark.type.name === 'link')) return;

    PROJECT_FILE_PATH_RE.lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = PROJECT_FILE_PATH_RE.exec(node.text))) {
      const href = match[0];
      tr = tr.addMark(pos + match.index, pos + match.index + href.length, linkMark.create({ href }));
      changed = true;
    }
  });

  if (changed) {
    view.dispatch(tr);
  }
}

function updatePreviewLineNumbers(): void {
  if (!props.showLineNumbers) return;

  nextTick(() => {
    const editorContentElement = editorContentRef.value;
    if (!editorContentElement || editorContentElement.offsetParent === null) return;

    const editorElement = editor.value?.view.dom as HTMLElement | undefined;
    if (!editorElement) {
      previewLineCount.value = 1;
      previewLineNumbersMinHeight.value = '100%';
      return;
    }

    const computedStyle = window.getComputedStyle(editorElement);
    const fontSize = parseFloat(computedStyle.fontSize) || 14;
    const lineHeight = parseFloat(computedStyle.lineHeight) || fontSize * 1.6;
    const renderedHeight = Math.max(
      editorElement.scrollHeight,
      editorElement.offsetHeight,
      editorContentElement.clientHeight
    );
    const nextLineCount = Math.max(1, Math.ceil(renderedHeight / lineHeight));
    previewLineCount.value = nextLineCount;

    previewLineNumbersMinHeight.value = `${Math.ceil(Math.max(
      editorContentElement.clientHeight,
      renderedHeight
    ))}px`;
  });
}

function refreshPreviewResizeObserver(): void {
  previewResizeObserver?.disconnect();
  previewResizeObserver = null;

  if (typeof ResizeObserver === 'undefined') return;

  previewResizeObserver = new ResizeObserver(updatePreviewLineNumbers);

  if (editorContentRef.value) {
    previewResizeObserver.observe(editorContentRef.value);
  }

  const editorElement = editor.value?.view.dom as HTMLElement | undefined;
  if (editorElement) {
    previewResizeObserver.observe(editorElement);
  }
}

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
      scrollEditorSelectionIntoView(editor.view);
      updatePreviewLineNumbers();
    } catch (error) {
      handleEditorError(error, 'TipTap onUpdate');
    }
  },
  onSelectionUpdate: ({ editor }) => {
    setCurrentCursorPos(editor.state.selection.from);
    scrollEditorSelectionIntoView(editor.view);
  },
  onFocus: () => emits('focus'),
  onBlur: () => emits('blur'),
  onCreate: ({ editor }) => {
    try {
      const text = editor.getText();
      updateStats(text);
      emits('ready', editor);
      setCurrentCursorPos(editor.state.selection.from);
      updatePreviewLineNumbers();
      
      const editorElement = editor.view.dom;
      setupAnchorClickInterceptor(editorElement);
      nextTick(refreshPreviewResizeObserver);
      
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
      const html = event.clipboardData?.getData('text/html') || '';
      const text = getMarkdownClipboardText(event.clipboardData ?? null);
      if (!text) return false;

      if (clipboardHasRichHtml(html)) {
        try {
          const normalizedHtml = normalizePastedRichHtml(html, text);
          if (normalizedHtml.trim()) {
            event.preventDefault();
            editor.value?.commands.insertContent(normalizedHtml);
            linkProjectFilePathsInEditor();
            return true;
          }
        } catch (error) {
          console.error('Failed to normalize pasted rich HTML:', error);
        }
      }

      if (shouldParseClipboardAsMarkdown(text, html)) {
        try {
          const parsedHtml = markdownToHtml(text, workspaceRoot.value);
          event.preventDefault();
          if (editor.value) {
            editor.value.commands.insertContent(parsedHtml);
            linkProjectFilePathsInEditor();
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

// 监听内容变化
watch(() => props.content, (newContent) => {
  editorPersistenceBridge.syncIncomingContent(newContent, editor.value);
  updatePreviewLineNumbers();
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

watch(viewMode, () => {
  updatePreviewLineNumbers();
});

watch(() => props.showLineNumbers, (showLineNumbers) => {
  if (showLineNumbers) {
    nextTick(() => {
      refreshPreviewResizeObserver();
      updatePreviewLineNumbers();
    });
  } else {
    previewResizeObserver?.disconnect();
    previewResizeObserver = null;
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
  window.addEventListener('resize', updatePreviewLineNumbers);

  nextTick(() => {
    refreshPreviewResizeObserver();
    updatePreviewLineNumbers();
  });
});

// 清理
onBeforeUnmount(() => {
  try {
    document.removeEventListener('keydown', handleKeyDown, true);
    window.removeEventListener('resize', updatePreviewLineNumbers);
    previewResizeObserver?.disconnect();
    previewResizeObserver = null;
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
  --editor-line-number-width: 44px;
  --editor-line-number-padding-x: 8px;
  --editor-line-height: var(--editor-line-height-value, 1.6);
  background-color: var(--editor-bg);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.editor-main {
  @apply flex-1 flex flex-col overflow-hidden;
  transition: width 0.3s ease;
}

.editor-content {
  @apply flex-1 overflow-auto cursor-text;
  display: flex;
  min-height: 0;
  background-color: var(--editor-bg);
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
    border-color: var(--editor-border) !important;
    background: var(--editor-bg) !important;
    box-shadow: none;
  }
}

.preview-line-numbers {
  @apply flex-none select-none border-r py-3 text-right font-mono text-sm;
  align-self: flex-start;
  box-sizing: border-box;
  width: var(--editor-line-number-width);
  min-width: var(--editor-line-number-width);
  padding-left: var(--editor-line-number-padding-x);
  padding-right: var(--editor-line-number-padding-x);
  line-height: var(--editor-line-height);
  color: var(--editor-text-secondary);
  background-color: var(--statusbar-bg);
  border-color: var(--editor-border);
  opacity: 0.78;

  span {
    @apply block;
    height: calc(var(--editor-line-height) * 1em);
  }
}

.editor-content-body {
  @apply flex-1;
  min-width: 0;
  min-height: 100%;
}

:deep(.tiptap-editor) {
  @apply outline-none;
  overflow-y: visible;
  min-height: 100%;
  height: auto;
  padding: 10px 14px 40px;
  width: 100%;
  max-width: none;
  margin: 0;
  font-size: 14px;
  line-height: var(--editor-line-height);
  white-space: pre-wrap;
  color: var(--editor-text);
  background-color: var(--editor-bg);
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
      color: var(--editor-text);
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
    @apply font-bold mb-3 mt-5;
    font-size: 1.55em;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  h2 {
    @apply font-bold mb-2.5 mt-5;
    font-size: 1.35em;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  h3 {
    @apply font-bold mb-2 mt-4;
    font-size: 1.2em;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  h4 {
    @apply font-bold mb-2 mt-4;
    font-size: 1.08em;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  h5 {
    @apply font-bold mb-2 mt-3;
    font-size: 1em;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  h6 {
    @apply font-bold mb-2 mt-3;
    font-size: 0.95em;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  p {
    line-height: var(--editor-line-height);
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
    @apply rounded text-sm font-mono;
    background-color: var(--editor-hover-bg);
    color: var(--editor-text);
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
      line-height: var(--editor-line-height);
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
      line-height: var(--editor-line-height);
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
        line-height: var(--editor-line-height);
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
        line-height: var(--editor-line-height);

        > p {
          margin-bottom: 0;
          line-height: var(--editor-line-height);
        }
      }
    }
  }

  blockquote {
    @apply border-l-4 border-panel pl-4 italic text-panel-text-secondary mb-5;
    line-height: var(--editor-line-height);
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
