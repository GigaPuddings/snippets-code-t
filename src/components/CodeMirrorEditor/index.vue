<template>
  <main class="editor-container" :class="{ 'dark-theme': props.dark }">
    <div
      ref="editorContainerRef"
      :style="codeStyle"
      class="editor-content"
    ></div>
    <div class="editor-status">
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
import { EditorView, ViewUpdate, keymap } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import { EditorState } from '@codemirror/state';
import {
  history,
  historyKeymap,
  defaultKeymap,
  indentWithTab
} from '@codemirror/commands';
import type { Extension } from '@codemirror/state';
import type { CreateThemeOptions } from '@uiw/codemirror-themes';

interface Props {
  codeStyle?: CSSProperties;
  dark?: boolean;
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
  code: '',
  placeholder: 'Code goes here...',
  autofocus: false,
  disabled: false,
  indentWithTab: true,
  tabSize: 2,
  autoDestroy: true
});

// 计算自定义主题
const customTheme = computed(() => {
  const settings: CreateThemeOptions['settings'] = props.dark
    ? {
        background: '#1a1a1a',
        foreground: '#CECFD0',
        caret: '#faf7f5',
        selection: '#727377',
        gutterBackground: '#282d32',
        gutterForeground: '#7F8C98'
      }
    : {
        background: '#ffffff',
        foreground: '#3D3D3D',
        caret: '#000000',
        selection: '#BBDFFF',
        gutterBackground: '#ffffff',
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

  // 检查 TypeScript
  if (
    code.includes(': string') ||
    code.includes(': number') ||
    code.includes(': boolean') ||
    code.includes('interface ') ||
    code.includes('type ') ||
    code.includes('namespace ')
  ) {
    return 'typescript';
  }

  // 默认返回 JavaScript
  return 'javascript';
};

// 添加响应式的语言类型
const detectedLanguage = computed(() => detectLanguage(props.code));

// 修改语言支持函数
const getLanguageExtension = (code: string) => {
  const language = detectLanguage(code);
  switch (language) {
    case 'vue':
      return vue();
    case 'javascript':
    case 'js':
      return javascript();
    case 'typescript':
    case 'ts':
      return javascript({ typescript: true });
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
      return javascript();
  }
};

// 计算Codemirror扩展
const extensions = computed((): Extension[] => {
  const baseExtensions: Extension[] = [
    EditorView.lineWrapping,
    customTheme.value,
    getLanguageExtension(props.code),
    history(),
    keymap.of([
      ...defaultKeymap,
      ...historyKeymap,
      ...(props.indentWithTab ? [indentWithTab] : [])
    ]),
    EditorState.tabSize.of(props.tabSize),
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
    })
  ];

  return baseExtensions;
});

const editorViewRef = ref<EditorView>();
const editorContainerRef = ref<HTMLElement>();

onMounted(() => {
  if (editorContainerRef.value) {
    nextTick(() => {
      const state = EditorState.create({
        doc: props.code,
        extensions: extensions.value
      });

      const view = new EditorView({
        state,
        parent: editorContainerRef.value
      });

      editorViewRef.value = view;
      emits('ready', view);
      updateStatusInfo(state);

      if (props.autofocus) {
        view.focus();
      }
    });
  }
});

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

  &.dark-theme {
    .editor-status {
      @apply bg-[#1a1a1a] border-[#2a2a2a] text-[#9ca3af];
    }
  }
}

.editor-content {
  @apply flex-1 overflow-auto;
  min-height: 0;
}

.editor-status {
  @apply h-6 px-2 bg-panel border-t flex items-center justify-between text-sm text-content;
  flex-shrink: 0;
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
