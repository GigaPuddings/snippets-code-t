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

    <EditorStatusBar
      :word-count="0"
      :line-count="lines"
      :char-count="length"
      :language="detectedLanguage"
      view-mode="source"
      :show-view-toggle="false"
      :dark="props.dark"
      :style="
        resolvedStatusBackground
          ? { '--editor-status-surface': resolvedStatusBackground }
          : undefined
      "
    />
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
import { Annotation, Compartment, EditorState, Text } from '@codemirror/state';
import { SearchQuery } from '@codemirror/search';
import { documentLineSeparator } from './lineEndings';
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
import { createPairedBraceEnterEdit } from '@/utils/pairedBraceEnter';
import {
  detectCodeLanguage,
  formatCodeText,
  getPrettierParser
} from '@/utils/codeFormatter';
import modal from '@/utils/modal';
import { useI18n } from 'vue-i18n';
import CodeContextMenu from './components/CodeContextMenu.vue';
import EditorStatusBar from '@/components/UI/EditorStatusBar.vue';

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
  currentFragmentId?: string | number;
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
  autoDestroy: true,
  currentFragmentId: undefined
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
        fontSize: 'var(--markdown-code-size)'
      },
      '.cm-content': {
        caretColor: settings.caret || '#000000',
        paddingTop: 'var(--editor-content-padding-top)',
        paddingBottom: 'var(--editor-content-padding-bottom)'
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
let searchQuery = new SearchQuery({ search: '' });
let searchMatches: Array<{ from: number; to: number }> = [];
const externalCodeUpdate = Annotation.define<boolean>();
let documentRevision = 0;
const hasCodeSelection = ref(false);
const languageCompartment = new Compartment();
const tabSizeCompartment = new Compartment();
const keymapCompartment = new Compartment();
const themeCompartment = new Compartment();
const lineSeparatorCompartment = new Compartment();

// 更新状态栏信息
function updateStatusInfo(state: EditorState) {
  lines.value = state.doc.lines;
  length.value = state.doc.length;
}

// 添加语言检测函数
// 添加响应式的语言类型
const detectedLanguage = computed(() => detectCodeLanguage(props.code));

const canFormatCode = computed(
  () => getPrettierParser(detectedLanguage.value) !== null
);

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

const createEditorKeymap = (
  indentWithTabEnabled: boolean,
  tabSize: number
): Extension => {
  const indentText = ' '.repeat(Math.max(1, tabSize));

  return keymap.of([
    {
      key: 'Enter',
      run: (view: EditorView) => {
        const selection = view.state.selection.main;
        if (!selection.empty) return false;

        const pairedBraceEdit = createPairedBraceEnterEdit(
          view.state.doc.toString(),
          selection.from,
          indentText
        );

        if (!pairedBraceEdit) return false;

        view.dispatch({
          changes: {
            from: selection.from,
            to: selection.to,
            insert: pairedBraceEdit.insert
          },
          selection: { anchor: selection.from + pairedBraceEdit.cursorOffset },
          scrollIntoView: true,
          userEvent: 'input'
        });
        return true;
      }
    },
    ...defaultKeymap,
    ...historyKeymap,
    ...(indentWithTabEnabled ? [indentWithTab] : [])
  ]);
};

// 计算Codemirror扩展
const getExtensions = (): Extension[] => {
  const extensions = [
    lineSeparatorCompartment.of(
      EditorState.lineSeparator.of(documentLineSeparator(props.code))
    ),
    lineNumbers(),
    EditorView.lineWrapping,
    themeCompartment.of(customTheme.value),
    languageCompartment.of(getLanguageExtension(detectedLanguage.value)),
    history(),
    keymapCompartment.of(
      createEditorKeymap(props.indentWithTab, props.tabSize)
    ),
    tabSizeCompartment.of(EditorState.tabSize.of(props.tabSize)),
    EditorView.editable.of(!props.disabled),
    EditorState.phrases.of({
      placeholder: props.placeholder
    }),
    EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged) {
        documentRevision++;
        updateStatusInfo(update.state);
        updateSearchMatches(update.state);
        if (
          update.transactions.some(
            (transaction) =>
              transaction.docChanged &&
              !transaction.annotation(externalCodeUpdate)
          )
        ) {
          const value = update.state.sliceDoc();
          emits('change', value, update);
          emits('update:code', value);
        }
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

const editorViewRef = shallowRef<EditorView>();
const editorContainerRef = ref<HTMLElement>();
const contextMenuRef = ref<InstanceType<typeof CodeContextMenu> | null>(null);

onMounted(() => {
  if (editorContainerRef.value) {
    nextTick(() => {
      if (!editorContainerRef.value) return;
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

        if (
          (e.ctrlKey || e.metaKey) &&
          e.shiftKey &&
          e.key.toLowerCase() === 'f'
        ) {
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
  searchQuery = new SearchQuery({ search: '' });
  const view = editorViewRef.value;
  if (!view) return;
  updateSearchMatches(view.state);
  view.dispatch({ selection: { anchor: view.state.selection.main.head } });
};

const handleSearch = (query: string, matchCase: boolean) => {
  const view = editorViewRef.value;
  if (!view) return;
  searchQuery = new SearchQuery({
    search: query,
    caseSensitive: matchCase,
    literal: true
  });
  updateSearchMatches(view.state);
  scrollToMatch(0);
};

function updateSearchMatches(state: EditorState): void {
  searchMatches = [];
  if (searchQuery.valid) {
    const cursor = searchQuery.getCursor(state);
    for (let match = cursor.next(); !match.done; match = cursor.next()) {
      searchMatches.push(match.value);
    }
  }
  searchPanelRef.value?.updateMatchInfo(
    getCurrentMatchIndex(state),
    searchMatches.length
  );
}

const findNext = () => {
  const view = editorViewRef.value;
  if (!view || !searchMatches.length) return;
  scrollToMatch((getCurrentMatchIndex(view.state) + 1) % searchMatches.length);
};

const findPrevious = () => {
  const view = editorViewRef.value;
  if (!view || !searchMatches.length) return;
  const index = getCurrentMatchIndex(view.state);
  scrollToMatch(index <= 0 ? searchMatches.length - 1 : index - 1);
};

function getCurrentMatchIndex(state: EditorState): number {
  const selection = state.selection.main;
  return searchMatches.findIndex(
    (match) => match.from === selection.from && match.to === selection.to
  );
}

const scrollToMatch = (index: number) => {
  const view = editorViewRef.value;
  const match = searchMatches[index];
  if (!view || !match) return;
  view.dispatch({
    selection: { anchor: match.from, head: match.to },
    effects: EditorView.scrollIntoView(match.from, { y: 'center' })
  });
  searchPanelRef.value?.updateMatchInfo(index, searchMatches.length);
  view.focus();
};

function handleContextMenu(event: MouseEvent): void {
  event.preventDefault();
  contextMenuRef.value?.show(event);
}

function captureDocumentCheck(view: EditorView): () => boolean {
  const fragmentId = props.currentFragmentId;
  const revision = documentRevision;
  return () =>
    editorViewRef.value === view &&
    props.currentFragmentId === fragmentId &&
    documentRevision === revision &&
    !props.disabled;
}

function replaceDocument(view: EditorView, content: string): void {
  const selection = view.state.selection.main;
  const insert = Text.of(content.split(/\r\n?|\n/));
  view.dispatch({
    changes: { from: 0, to: view.state.doc.length, insert },
    selection: {
      anchor: Math.min(selection.anchor, insert.length),
      head: Math.min(selection.head, insert.length)
    }
  });
  view.focus();
}

async function writeToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    modal.msg(
      `${translate('codeEditor.clipboardFailed')}: ${error instanceof Error ? error.message : String(error)}`,
      'error'
    );
    return false;
  }
}

async function readFromClipboard(): Promise<string | null> {
  try {
    return await navigator.clipboard.readText();
  } catch (error) {
    modal.msg(
      `${translate('codeEditor.clipboardFailed')}: ${error instanceof Error ? error.message : String(error)}`,
      'error'
    );
    return null;
  }
}

async function formatCode(): Promise<void> {
  const view = editorViewRef.value;
  if (!view || props.disabled) return;

  const code = view.state.doc.toString();
  const isCurrent = captureDocumentCheck(view);
  const language = detectCodeLanguage(code);
  if (!getPrettierParser(language)) {
    modal.msg(translate('codeEditor.formatUnsupported'), 'warning');
    return;
  }

  try {
    const result = await formatCodeText(code, {
      language,
      tabSize: props.tabSize
    });
    await nextTick();
    if (!isCurrent() || result.formatted === code) return;
    replaceDocument(view, result.formatted);
  } catch (error) {
    if (!isCurrent()) return;
    modal.msg(
      `${translate('codeEditor.formatFailed')}: ${error instanceof Error ? error.message : String(error)}`,
      'error'
    );
  }
}

async function editFromClipboard(
  view: EditorView,
  action: 'cut' | 'paste'
): Promise<void> {
  if (props.disabled) return;
  const isCurrent = captureDocumentCheck(view);
  const selection = view.state.selection;
  let text: string | null = '';
  if (action === 'cut') {
    const selected = getSelection();
    if (!selected || !(await writeToClipboard(selected))) return;
  } else {
    text = await readFromClipboard();
  }

  await nextTick();
  if (text === null || !isCurrent() || !view.state.selection.eq(selection))
    return;
  const insert = Text.of(text.split(/\r\n?|\n/));
  view.dispatch(view.state.replaceSelection(insert));
  view.focus();
}

async function handleContextMenuAction(
  action:
    | 'format'
    | 'undo'
    | 'redo'
    | 'cut'
    | 'copy'
    | 'paste'
    | 'copyAll'
    | 'selectAll'
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
    case 'cut':
    case 'paste':
      await editFromClipboard(view, action);
      return;
    case 'selectAll':
      view.dispatch({ selection: { anchor: 0, head: view.state.doc.length } });
      view.focus();
  }
}

// Reset history even if two fragments have identical text. Loading a fragment
// must not emit an edit for the newly opened fragment.
watch(
  [() => props.code, () => props.currentFragmentId],
  ([code, fragmentId], [, oldFragmentId]) => {
    const view = editorViewRef.value;
    if (!view) return;

    if (fragmentId !== oldFragmentId) {
      documentRevision++;
      const state = EditorState.create({
        doc: code,
        extensions: getExtensions()
      });
      view.setState(state);
      view.scrollDOM.scrollTop = 0;
      view.scrollDOM.scrollLeft = 0;
      hasCodeSelection.value = false;
      contextMenuRef.value?.hide();
      updateStatusInfo(state);
      updateSearchMatches(state);
      return;
    }

    if (code !== view.state.sliceDoc()) {
      const separator = documentLineSeparator(code);
      view.dispatch({
        effects: lineSeparatorCompartment.reconfigure(
          EditorState.lineSeparator.of(separator)
        ),
        changes: {
          from: 0,
          to: view.state.doc.length,
          insert: Text.of(code.split(separator))
        },
        annotations: externalCodeUpdate.of(true)
      });
    }
  }
);

// 代码片段在同一编辑器实例中切换时，必须同步替换解析器；只更新状态栏
// 的语言名称不足以让 CodeMirror 重新进行词法高亮。
watch(detectedLanguage, (language) => {
  editorViewRef.value?.dispatch({
    effects: languageCompartment.reconfigure(getLanguageExtension(language))
  });
});

watch(customTheme, (theme) => {
  editorViewRef.value?.dispatch({
    effects: themeCompartment.reconfigure(theme)
  });
});

watch(
  () => props.tabSize,
  (tabSize) => {
    editorViewRef.value?.dispatch({
      effects: [
        tabSizeCompartment.reconfigure(EditorState.tabSize.of(tabSize)),
        keymapCompartment.reconfigure(
          createEditorKeymap(props.indentWithTab, tabSize)
        )
      ]
    });
  }
);

watch(
  () => props.indentWithTab,
  (enabled) => {
    editorViewRef.value?.dispatch({
      effects: keymapCompartment.reconfigure(
        createEditorKeymap(enabled, props.tabSize)
      )
    });
  }
);

onBeforeUnmount(() => {
  if (props.autoDestroy) editorViewRef.value?.destroy();
  editorViewRef.value = undefined;
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
}

.editor-content {
  @apply flex-1 overflow-hidden;

  height: 0;
  min-height: 0;
}

:deep(.cm-editor) {
  @apply outline-none h-full;

  .cm-scroller {
    @apply overflow-auto font-mono;

    line-height: var(--markdown-code-line-height);
  }

  .cm-gutterElement {
    @apply flex items-center justify-center;

    padding-right: 8px;
    padding-left: 0;
    font-size: var(--app-ui-caption-size);
  }

  &.cm-focused {
    @apply outline-none;
  }

  .cm-gutters {
    padding-left: var(--editor-content-padding-inline);
    border: 0;
  }

  &.cm-focused .cm-cursor {
    @apply border-l-2;
  }

  .cm-line {
    padding: 0 var(--editor-content-padding-inline) 0 12px;
  }
}
</style>
