<template>
  <main class="editor-container" :class="{ 'dark-theme': props.dark }">
    <div
      ref="editorContainerRef"
      :style="codeStyle"
      class="editor-content"
      @contextmenu="handleContextMenu"
    ></div>
    
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

    <CodeContextMenu
      ref="contextMenuRef"
      :dark="props.dark"
      :can-edit="!props.disabled"
      :can-format="canFormatCode"
      :has-selection="hasCodeSelection"
      @action="handleContextMenuAction"
    />
    
    <div
      class="editor-status"
      :style="resolvedStatusBackground ? { background: resolvedStatusBackground } : undefined"
    >
      <div class="editor-status-left">
        <div class="editor-status-item">
          <span class="editor-status-text">{{ lines }} {{ $t('codeEditor.lines') }}</span>
        </div>
        <div class="editor-status-item">
          <span class="editor-status-text">{{ length }} {{ $t('codeEditor.chars') }}</span>
        </div>
      </div>
      <div class="editor-status-right">
        <div class="editor-status-item">
          <span class="editor-status-text">{{ detectedLanguage }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { vue } from '@codemirror/lang-vue';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { java } from '@codemirror/lang-java';
import { EditorView, ViewUpdate, keymap, lineNumbers } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import { Compartment, EditorState } from '@codemirror/state';
import {
  history,
  historyKeymap,
  defaultKeymap,
  indentWithTab,
  redo,
  undo
} from '@codemirror/commands';
import type { Extension } from '@codemirror/state';
import type { CreateThemeOptions } from '@uiw/codemirror-themes';
import { SearchPanel } from '@/components/UI';
import modal from '@/utils/modal';
import { useI18n } from 'vue-i18n';
import CodeContextMenu from './components/CodeContextMenu.vue';
import { formatIncompleteJavaScript } from './utils/formatIncompleteCode';

interface Props {
  codeStyle?: CSSProperties;
  dark?: boolean;
  background?: string;
  gutterBackground?: string;
  statusBackground?: string;
  code?: string;
  placeholder?: string;
  autofocus?: boolean;
  disabled?: boolean;
  indentWithTab?: boolean;
  tabSize?: number;
  autoDestroy?: boolean;
}

defineOptions({
  name: 'CodeMirrorEditor'
});

const props = withDefaults(defineProps<Props>(), {
  codeStyle: () => ({}),
  dark: false,
  background: '',
  gutterBackground: '',
  statusBackground: '',
  code: '',
  placeholder: 'Code goes here...',
  autofocus: false,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  autoDestroy: true
});

const { t: translate } = useI18n();

const resolvedBackground = computed(() => {
  if (props.background?.trim()) return props.background.trim();
  return props.dark ? '#1a1a1a' : '#fbfcff';
});

const resolvedGutterBackground = computed(() => {
  if (props.gutterBackground?.trim()) return props.gutterBackground.trim();
  return resolvedBackground.value;
});

const resolvedStatusBackground = computed(() => {
  if (props.statusBackground?.trim()) return props.statusBackground.trim();
  return '';
});

// 计算自定义主题
const customTheme = computed(() => {
  const settings: CreateThemeOptions['settings'] = props.dark
    ? {
        background: resolvedBackground.value,
        foreground: '#CECFD0',
        caret: '#faf7f5',
        selection: '#727377',
        gutterBackground: resolvedGutterBackground.value,
        gutterForeground: '#7F8C98'
      }
    : {
        background: resolvedBackground.value,
        foreground: '#3D3D3D',
        caret: '#000000',
        selection: '#BBDFFF',
        gutterBackground: resolvedGutterBackground.value,
        gutterForeground: '#707F8D'
      };

  const styles: CreateThemeOptions['styles'] = props.dark
    ? [
        { tag: [t.comment, t.quote], color: '#7F8C98' },
        { tag: [t.keyword], color: '#FF7AB2', fontWeight: 'bold' },
        { tag: [t.string, t.meta], color: '#FF8170' },
        { tag: [t.variableName], color: '#ACF2E4' },
        { tag: [t.function(t.variableName)], color: '#82AAFF' },
        { tag: [t.number], color: '#F78C6C' },
        { tag: [t.bool], color: '#FF9CAC' },
        { tag: [t.null], color: '#FF9CAC' },
        { tag: [t.propertyName], color: '#B2CCD6' },
        { tag: [t.definition(t.propertyName)], color: '#82AAFF' },
        { tag: [t.className], color: '#FFCB6B' },
        { tag: [t.typeName], color: '#FFCB6B' }
      ]
    : [
        { tag: [t.comment, t.quote], color: '#707F8D' },
        { tag: [t.keyword], color: '#aa0d91', fontWeight: 'bold' },
        { tag: [t.string, t.meta], color: '#D23423' },
        { tag: [t.variableName], color: '#23575C' },
        { tag: [t.function(t.variableName)], color: '#4B69C6' },
        { tag: [t.number], color: '#1C00CF' },
        { tag: [t.bool], color: '#aa0d91' },
        { tag: [t.null], color: '#aa0d91' },
        { tag: [t.propertyName], color: '#5C2699' },
        { tag: [t.definition(t.propertyName)], color: '#4B69C6' },
        { tag: [t.className], color: '#3A1D72' },
        { tag: [t.typeName], color: '#3A1D72' }
      ];

  const theme = createTheme({
    theme: props.dark ? 'dark' : 'light',
    settings,
    styles
  });

  return [
    theme,
    EditorView.theme({
      '&': {
        height: '100%',
        fontSize: '14px'
      },
      '.cm-content': {
        caretColor: settings.caret || '#000000',
        fontFamily: 'monospace'
      },
      '.cm-cursor': {
        borderLeftColor: settings.caret || '#000000'
      },
      '&.cm-focused .cm-selectionBackground, .cm-selectionBackground': {
        backgroundColor: (settings.selection || '#BBDFFF') + '!important'
      },
      '.cm-activeLine': {
        backgroundColor: 'transparent'
      }
    })
  ];
});

// 添加状态变量
const lines = ref(1);
const length = ref(0);
const showSearch = ref(false);
const searchPanelRef = ref<InstanceType<typeof SearchPanel> | null>(null);
const searchMatches = ref<Array<{ from: number; to: number }>>([]);
const hasCodeSelection = ref(false);
const languageCompartment = new Compartment();
const tabSizeCompartment = new Compartment();
const keymapCompartment = new Compartment();

// 更新状态栏信息
function updateStatusInfo(state: EditorState) {
  lines.value = state.doc.lines;
  length.value = state.doc.length;
}

// 添加语言检测函数
const detectLanguage = (code: string): string => {
  // 检查文件头部特征
  const firstLine = code.trim().split('\n')[0].trim();

  // 检查 Vue 单文件组件
  if (
    firstLine.startsWith('<template') ||
    firstLine.includes('setup lang="ts"') ||
    firstLine.includes('setup lang="js"')
  ) {
    return 'vue';
  }

  // 检查 HTML
  if (
    firstLine.startsWith('<!DOCTYPE') ||
    firstLine.startsWith('<html') ||
    /<\w+>/.test(firstLine)
  ) {
    return 'html';
  }

  // 检查 CSS/SCSS/LESS
  if (
    firstLine.includes('@import') ||
    firstLine.includes('@media') ||
    /[\.\#][a-zA-Z][\w\-]*\s*\{/.test(code)
  ) {
    return 'css';
  }

  // 检查 JSON
  if (
    (firstLine.startsWith('{') && code.trim().endsWith('}')) ||
    (firstLine.startsWith('[') && code.trim().endsWith(']'))
  ) {
    try {
      JSON.parse(code);
      return 'json';
    } catch {}
  }

  // 检查 Java
  if (
    code.includes('public class') ||
    code.includes('private class') ||
    code.includes('protected class') ||
    code.includes('package ')
  ) {
    return 'java';
  }

  // 检查 TypeScript。保留对不完整片段的常见语法识别，避免仅因
  // 片段缺少外层上下文而降级成普通 JavaScript 解析。
  if (
    code.includes(': string') ||
    code.includes(': number') ||
    code.includes(': boolean') ||
    code.includes('interface ') ||
    code.includes('type ') ||
    code.includes('namespace ') ||
    /\b(?:enum|declare|implements|readonly|abstract)\b/.test(code) ||
    /\bimport\s+type\b/.test(code) ||
    /\b(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*:\s*[A-Za-z_$][\w$<[{|&]*/.test(code) ||
    /\(\s*[A-Za-z_$][\w$]*\s*:\s*[A-Za-z_$][\w$<[{|&]*/.test(code)
  ) {
    return 'typescript';
  }

  // 默认返回 JavaScript
  return 'javascript';
};

// 添加响应式的语言类型
const detectedLanguage = computed(() => detectLanguage(props.code));

type PrettierParser = 'babel' | 'typescript' | 'vue' | 'html' | 'css' | 'json-stringify';

function getPrettierParser(language: string): PrettierParser | null {
  switch (language) {
    case 'javascript':
      return 'babel';
    case 'typescript':
      return 'typescript';
    case 'vue':
      return 'vue';
    case 'html':
      return 'html';
    case 'css':
      return 'css';
    case 'json':
      return 'json-stringify';
    default:
      return null;
  }
}

const canFormatCode = computed(() => getPrettierParser(detectedLanguage.value) !== null);

// TypeScript 语法是 JavaScript 的超集。对未闭合的片段使用它可以保留
// JS、TS 与 JSX 的词法高亮，并依赖 Lezer 的错误恢复继续解析后续内容。
const getLanguageExtension = (language: string): Extension => {
  switch (language) {
    case 'vue':
      return vue();
    case 'javascript':
    case 'js':
    case 'typescript':
    case 'ts':
      return javascript({ typescript: true, jsx: true });
    case 'html':
      return html();
    case 'css':
    case 'scss':
    case 'less':
      return css();
    case 'json':
      return json();
    case 'java':
      return java();
    default:
      return javascript({ typescript: true, jsx: true });
  }
};

// 计算Codemirror扩展
const getExtensions = (): Extension[] => {
  const extensions = [
    lineNumbers(),
    EditorView.lineWrapping,
    customTheme.value,
    languageCompartment.of(getLanguageExtension(detectedLanguage.value)),
    history(),
    keymapCompartment.of(keymap.of([
      ...defaultKeymap,
      ...historyKeymap,
      ...(props.indentWithTab ? [indentWithTab] : [])
    ])),
    tabSizeCompartment.of(EditorState.tabSize.of(props.tabSize)),
    EditorView.editable.of(!props.disabled),
    EditorState.phrases.of({
      placeholder: props.placeholder
    }),
    EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged) {
        const doc = update.state.doc;
        const value = doc.toString();
        updateStatusInfo(update.state);
        emits('change', value, update);
        emits('update:code', value);
      }
      if (update.focusChanged) {
        if (update.view.hasFocus) {
          emits('focus', update);
        } else {
          emits('blur', update);
        }
      }
      if (update.selectionSet) {
        hasCodeSelection.value = !update.state.selection.main.empty;
      }
    })
  ];
  
  return extensions;
};

const editorViewRef = ref<EditorView>();
const editorContainerRef = ref<HTMLElement>();
const contextMenuRef = ref<InstanceType<typeof CodeContextMenu> | null>(null);

onMounted(() => {
  if (editorContainerRef.value) {
    nextTick(() => {
      const state = EditorState.create({
        doc: props.code,
        extensions: getExtensions()
      });

      const view = new EditorView({
        state,
        parent: editorContainerRef.value
      });

      editorViewRef.value = view;
      emits('ready', view);
      updateStatusInfo(state);
      hasCodeSelection.value = !state.selection.main.empty;

      if (props.autofocus) {
        view.focus();
      }
      
      // 添加键盘事件监听器
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
          e.preventDefault();
          e.stopPropagation();
          openSearch();
        }

        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'f') {
          e.preventDefault();
          void formatCode();
        }
      };
      
      view.dom.addEventListener('keydown', handleKeyDown, true);
    });
  }
});

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
  if (!editorViewRef.value || !query) {
    clearSearchHighlights();
    return;
  }

  const view = editorViewRef.value;
  const text = view.state.doc.toString();
  const matches: Array<{ from: number; to: number }> = [];
  
  const flags = matchCase ? 'g' : 'gi';
  const searchRegex = new RegExp(
    query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    flags
  );
  
  let match;
  while ((match = searchRegex.exec(text)) !== null) {
    matches.push({
      from: match.index,
      to: match.index + match[0].length
    });
  }
  
  searchMatches.value = matches;
  searchPanelRef.value?.updateMatchInfo(
    matches.length > 0 ? 0 : -1,
    matches.length
  );
  
  if (matches.length > 0) {
    scrollToMatch(0);
  }
};

const findNext = () => {
  if (searchMatches.value.length === 0) return;
  
  const currentIndex = getCurrentMatchIndex();
  const nextIndex = (currentIndex + 1) % searchMatches.value.length;
  searchPanelRef.value?.updateMatchInfo(nextIndex, searchMatches.value.length);
  scrollToMatch(nextIndex);
};

const findPrevious = () => {
  if (searchMatches.value.length === 0) return;
  
  const currentIndex = getCurrentMatchIndex();
  const prevIndex = currentIndex <= 0 
    ? searchMatches.value.length - 1 
    : currentIndex - 1;
  searchPanelRef.value?.updateMatchInfo(prevIndex, searchMatches.value.length);
  scrollToMatch(prevIndex);
};

const getCurrentMatchIndex = (): number => {
  if (!editorViewRef.value || searchMatches.value.length === 0) return -1;
  
  const selection = editorViewRef.value.state.selection.main;
  const index = searchMatches.value.findIndex(
    match => match.from === selection.from && match.to === selection.to
  );
  return index >= 0 ? index : 0;
};

const scrollToMatch = (index: number) => {
  if (!editorViewRef.value || index < 0 || index >= searchMatches.value.length) return;
  
  const view = editorViewRef.value;
  const match = searchMatches.value[index];
  
  view.dispatch({
    selection: { anchor: match.from, head: match.to },
    scrollIntoView: true
  });
  view.focus();
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const scrollContainer = view.dom as HTMLElement;
      const coords = view.coordsAtPos(match.from);
      
      if (coords) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const relativeTop = coords.top - containerRect.top + scrollContainer.scrollTop;
        const targetScroll = relativeTop - 100;
        
        scrollContainer.scrollTo({
          top: Math.max(0, targetScroll),
          behavior: 'smooth'
        });
      }
    });
  });
};

const clearSearchHighlights = () => {
  searchMatches.value = [];
  searchPanelRef.value?.updateMatchInfo(0, 0);
  
  if (editorViewRef.value) {
    editorViewRef.value.dispatch({
      selection: { anchor: editorViewRef.value.state.selection.main.head }
    });
  }
};

function handleContextMenu(event: MouseEvent): void {
  event.preventDefault();
  contextMenuRef.value?.show(event);
}

function replaceSelection(text: string): void {
  const view = editorViewRef.value;
  if (!view || props.disabled) return;

  const selection = view.state.selection.main;
  view.dispatch({
    changes: { from: selection.from, to: selection.to, insert: text },
    selection: { anchor: selection.from + text.length }
  });
  view.focus();
}

function replaceDocument(view: EditorView, content: string): void {
  const selection = view.state.selection.main;
  view.dispatch({
    changes: { from: 0, to: view.state.doc.length, insert: content },
    selection: {
      anchor: Math.min(selection.anchor, content.length),
      head: Math.min(selection.head, content.length)
    }
  });
  view.focus();
}

async function writeToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    modal.msg(`${translate('codeEditor.clipboardFailed')}: ${error instanceof Error ? error.message : String(error)}`, 'error');
    return false;
  }
}

async function readFromClipboard(): Promise<string | null> {
  try {
    return await navigator.clipboard.readText();
  } catch (error) {
    modal.msg(`${translate('codeEditor.clipboardFailed')}: ${error instanceof Error ? error.message : String(error)}`, 'error');
    return null;
  }
}

async function formatCode(): Promise<void> {
  const view = editorViewRef.value;
  if (!view || props.disabled) return;

  const code = view.state.doc.toString();
  const parser = getPrettierParser(detectLanguage(code));
  if (!parser) {
    modal.msg(translate('codeEditor.formatUnsupported'), 'warning');
    return;
  }

  try {
    const [prettier, babel, estree, typescript, html, postcss] = await Promise.all([
      import('prettier/standalone'),
      import('prettier/plugins/babel'),
      import('prettier/plugins/estree'),
      import('prettier/plugins/typescript'),
      import('prettier/plugins/html'),
      import('prettier/plugins/postcss')
    ]);
    const formatted = await prettier.format(code, {
      parser,
      plugins: [babel.default, estree.default, typescript.default, html.default, postcss.default],
      tabWidth: props.tabSize,
      useTabs: false,
      singleQuote: true
    });

    if (formatted === code) return;

    replaceDocument(view, formatted);
  } catch (error) {
    if (parser === 'babel' || parser === 'typescript') {
      const fallbackFormatted = formatIncompleteJavaScript(code, props.tabSize);
      if (fallbackFormatted !== code) {
        replaceDocument(view, fallbackFormatted);
      }
      return;
    }

    modal.msg(`${translate('codeEditor.formatFailed')}: ${error instanceof Error ? error.message : String(error)}`, 'error');
  }
}

async function handleContextMenuAction(
  action: 'format' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'copyAll' | 'selectAll'
): Promise<void> {
  const view = editorViewRef.value;
  if (!view) return;

  switch (action) {
    case 'format':
      await formatCode();
      return;
    case 'undo':
      if (!props.disabled) undo(view);
      return;
    case 'redo':
      if (!props.disabled) redo(view);
      return;
    case 'copy':
      await writeToClipboard(getSelection());
      return;
    case 'copyAll':
      await writeToClipboard(view.state.doc.toString());
      return;
    case 'cut': {
      const selectedCode = getSelection();
      if (selectedCode && await writeToClipboard(selectedCode)) {
        replaceSelection('');
      }
      return;
    }
    case 'paste': {
      const text = await readFromClipboard();
      if (text !== null) replaceSelection(text);
      return;
    }
    case 'selectAll':
      view.dispatch({ selection: { anchor: 0, head: view.state.doc.length } });
      view.focus();
  }
}

// 监听代码变化
watchEffect(() => {
  const view = editorViewRef.value;
  if (view && props.code !== view.state.doc.toString()) {
    view.dispatch({
      changes: {
        from: 0,
        to: view.state.doc.length,
        insert: props.code
      }
    });
  }
});

// 代码片段在同一编辑器实例中切换时，必须同步替换解析器；只更新状态栏
// 的语言名称不足以让 CodeMirror 重新进行词法高亮。
watch(detectedLanguage, (language) => {
  editorViewRef.value?.dispatch({
    effects: languageCompartment.reconfigure(getLanguageExtension(language))
  });
});

watch(() => props.tabSize, (tabSize) => {
  editorViewRef.value?.dispatch({
    effects: tabSizeCompartment.reconfigure(EditorState.tabSize.of(tabSize))
  });
});

watch(() => props.indentWithTab, (enabled) => {
  editorViewRef.value?.dispatch({
    effects: keymapCompartment.reconfigure(keymap.of([
      ...defaultKeymap,
      ...historyKeymap,
      ...(enabled ? [indentWithTab] : [])
    ]))
  });
});

onBeforeUnmount(() => {
  if (props.autoDestroy && editorViewRef.value) {
    editorViewRef.value.destroy();
  }
});

const emits = defineEmits<{
  'update:code': [value: string];
  ready: [payload: any];
  change: [value: string, viewUpdate: any];
  focus: [viewUpdate: any];
  blur: [viewUpdate: any];
}>();

// 获取选中的文本
const getSelection = (): string => {
  if (!editorViewRef.value) return '';
  const state = editorViewRef.value.state;
  const selection = state.selection.main;
  if (selection.empty) return '';
  return state.sliceDoc(selection.from, selection.to);
};

// 暴露方法给父组件
defineExpose({
  getSelection,
  getView: () => editorViewRef.value
});
</script>

<style lang="scss" scoped>
.editor-container {
  @apply relative overflow-hidden flex flex-col;
  height: 100%;
  min-height: 0;

  &.dark-theme {
    .editor-status {
      @apply text-statusbar;

      background-color: var(--statusbar-bg);
      border-color: var(--statusbar-border);
    }
  }
}

.editor-content {
  @apply flex-1 overflow-auto;
  min-height: 0;
  height: 0;
}

.editor-status {
  @apply h-6 px-2 border-t flex items-center justify-between text-sm text-content;
  flex-shrink: 0;
  background-color: var(--statusbar-bg);
  border-color: var(--statusbar-border);
  color: var(--statusbar-text);
}

.editor-status-left {
  @apply flex items-center gap-3;
}

.editor-status-right {
  @apply flex items-center;
}

.editor-status-item {
  @apply flex items-center;
}

.editor-status-text {
  @apply text-xs opacity-70;
  font-weight: 400;
  text-transform: capitalize;
}

:deep(.cm-editor) {
  @apply outline-none border border-transparent h-full;

  .cm-gutterElement {
    @apply px-2 flex items-center justify-center;
  }

  &.cm-focused {
    @apply outline-none;
  }

  .cm-gutters {
    @apply border-r;
  }

  &.cm-focused .cm-cursor {
    @apply border-l-2;
  }

  .cm-line {
    @apply px-2;
  }
}
</style>
