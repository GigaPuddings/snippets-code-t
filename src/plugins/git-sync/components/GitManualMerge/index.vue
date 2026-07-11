<template>
  <teleport to="body">
    <transition name="merge-fade">
      <div v-if="visible" class="merge-overlay" @click.self="handleClose">
        <div class="merge-dialog">
          <!-- 顶栏 -->
          <div class="merge-titlebar">
            <div class="titlebar-left">
              <span class="titlebar-icon">⚡</span>
              <span class="titlebar-text">{{ $t('settings.gitSync.mergeTitle') }}</span>
            </div>
            <div class="titlebar-center">
              <div class="file-tabs">
                <button
                  v-for="(file, idx) in conflictFiles"
                  :key="file"
                  class="file-tab"
                  :class="{ active: currentIndex === idx, resolved: selections[idx] }"
                  @click="currentIndex = idx"
                  :title="file"
                >
                  <span class="tab-dot" :class="{ done: selections[idx] }"></span>
                  <span class="tab-name">{{ getFileName(file) }}</span>
                </button>
              </div>
            </div>
            <button class="titlebar-close" @click="handleClose">
              <span>×</span>
            </button>
          </div>

          <!-- 文件路径栏 -->
          <div class="file-breadcrumb">
            <span class="breadcrumb-label">{{ $t('settings.gitSync.conflictFile') }}:</span>
            <span class="breadcrumb-path">{{ currentFile }}</span>
            <span class="breadcrumb-counter">{{ currentIndex + 1 }} / {{ conflictFiles.length }}</span>
          </div>

          <!-- 对比主体 -->
          <div class="diff-body">
            <!-- 远程 (Incoming) -->
            <div class="diff-pane incoming" :class="{ selected: selections[currentIndex] === 'remote' }">
              <div class="pane-toolbar">
                <div class="toolbar-label">
                  <span class="label-dot incoming-dot"></span>
                  <span>{{ $t('settings.gitSync.remoteVersion') }}</span>
                  <span class="label-badge">Incoming</span>
                </div>
                <div class="toolbar-actions">
                  <button
                    class="sync-scroll-btn"
                    :class="{ active: syncScrollEnabled }"
                    @click="toggleSyncScroll"
                    :title="syncScrollEnabled ? $t('settings.gitSync.syncScrollOn') : $t('settings.gitSync.syncScrollOff')"
                  >
                    <span class="sync-icon">{{ syncScrollEnabled ? '⤳' : '⇥' }}</span>
                  </button>
                  <button
                    class="accept-btn incoming-btn"
                    :class="{ accepted: selections[currentIndex] === 'remote' }"
                    @click="selectRemote"
                  >
                    <template v-if="selections[currentIndex] === 'remote'">
                      ✓ {{ $t('settings.gitSync.accepted') }}
                    </template>
                    <template v-else>
                      {{ $t('settings.gitSync.acceptIncoming') }}
                    </template>
                  </button>
                </div>
              </div>
              <div
                ref="remotePaneRef"
                class="pane-content"
                :class="{ 'has-diff': remoteDiffLines.size > 0 }"
              >
                <div ref="remoteEditorRef" class="code-editor-container"></div>
                <!-- 差异标记 -->
                <div v-if="remoteDiffLines.size > 0" class="diff-markers">
                  <span
                    v-for="line in Array.from(remoteDiffLines)"
                    :key="line"
                    class="diff-line-marker remote"
                    :style="{ top: `${(line - 1) * 20 + 8}px` }"
                    :title="$t('settings.gitSync.lineChanged')"
                  ></span>
                </div>
              </div>
            </div>

            <!-- 分隔条 -->
            <div class="diff-gutter">
              <div class="gutter-line"></div>
            </div>

            <!-- 本地 (Current) -->
            <div class="diff-pane current" :class="{ selected: selections[currentIndex] === 'local' }">
              <div class="pane-toolbar">
                <div class="toolbar-label">
                  <span class="label-dot current-dot"></span>
                  <span>{{ $t('settings.gitSync.localVersion') }}</span>
                  <span class="label-badge">Current</span>
                  <span v-if="isLocalEdited" class="edited-indicator">{{ $t('settings.gitSync.edited') }}</span>
                </div>
                <button
                  class="accept-btn current-btn"
                  :class="{ accepted: selections[currentIndex] === 'local' }"
                  @click="selectLocal"
                >
                  <template v-if="selections[currentIndex] === 'local'">
                    ✓ {{ $t('settings.gitSync.accepted') }}
                  </template>
                  <template v-else>
                    {{ $t('settings.gitSync.acceptCurrent') }}
                  </template>
                </button>
              </div>
              <div
                ref="localPaneRef"
                class="pane-content editable"
                :class="{ 'has-diff': localDiffLines.size > 0 }"
              >
                <div ref="localEditorRef" class="code-editor-container"></div>
                <!-- 差异标记 -->
                <div v-if="localDiffLines.size > 0" class="diff-markers">
                  <span
                    v-for="line in Array.from(localDiffLines)"
                    :key="line"
                    class="diff-line-marker local"
                    :style="{ top: `${(line - 1) * 20 + 8}px` }"
                    :title="$t('settings.gitSync.lineChanged')"
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <!-- 底栏 -->
          <div class="merge-statusbar">
            <div class="statusbar-left">
              <button class="status-btn" @click="handleBack" :title="$t('settings.gitSync.backToConflictDialog')">
                ← {{ $t('settings.gitSync.backToConflictDialog') }}
              </button>
              <div class="nav-group">
                <button class="nav-btn" @click="previousFile" :disabled="currentIndex === 0">
                  ‹ {{ $t('settings.gitSync.prev') }}
                </button>
                <button class="nav-btn" @click="nextFile" :disabled="currentIndex === conflictFiles.length - 1">
                  {{ $t('settings.gitSync.next') }} ›
                </button>
              </div>
              <span class="resolve-progress">
                {{ resolvedCount }}/{{ conflictFiles.length }} {{ $t('settings.gitSync.resolved') }}
              </span>
              <!-- 进度条 -->
              <div v-if="loading || currentOperation" class="progress-container">
                <div class="progress-bar">
                  <div 
                    class="progress-fill" 
                    :style="{ width: operationProgress + '%' }"
                    :class="{ 'progress-loading': currentOperation === 'loading', 'progress-merging': currentOperation === 'merging' }"
                  ></div>
                </div>
                <span class="progress-text">{{ operationMessage }}</span>
              </div>
              <!-- 批量操作按钮 -->
              <div class="batch-actions">
                <button class="batch-btn" @click="acceptAllRemote" :title="$t('settings.gitSync.acceptAllRemote')">
                  {{ $t('settings.gitSync.acceptAllRemote') }}
                </button>
                <button class="batch-btn" @click="acceptAllLocal" :title="$t('settings.gitSync.acceptAllLocal')">
                  {{ $t('settings.gitSync.acceptAllLocal') }}
                </button>
              </div>
            </div>
            <div class="statusbar-right">
              <!-- 快捷键提示 -->
              <div class="shortcut-hints">
                <span class="hint-item"><kbd>Ctrl</kbd>+<kbd>1</kbd> {{ $t('settings.gitSync.acceptCurrent') }}</span>
                <span class="hint-item"><kbd>Ctrl</kbd>+<kbd>2</kbd> {{ $t('settings.gitSync.acceptIncoming') }}</span>
              </div>
              <button class="status-btn cancel-btn" @click="handleCancel">
                {{ $t('common.cancel') }}
              </button>
              <button
                class="status-btn primary-btn"
                @click="completeMerge"
                :disabled="!allFilesResolved || loading"
                :class="{ loading }"
              >
                <span v-if="loading" class="btn-spinner"></span>
                {{ $t('settings.gitSync.completeMerge') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { getConflictFileContent } from '@/plugins/git-sync/api';
import type { ConflictFileContent } from '@/plugins/git-sync/api';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { tags as lezerTags } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';

interface Props {
  modelValue: boolean;
  conflictFiles: string[];
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'complete', selections: Record<number, 'remote' | 'local'>, editedContents: Record<number, string>): void;
  (e: 'cancel'): void;
  (e: 'back'): void;
  (e: 'escape'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { t } = useI18n();

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});

const currentIndex = ref(0);
const selections = ref<Record<number, 'remote' | 'local'>>({});
const editedContents = ref<Record<number, string>>({});
const originalLocalContents = ref<Record<number, string>>({});
const loading = ref(false);

// 进度相关状态
const currentOperation = ref<'loading' | 'merging' | 'complete' | ''>('');
const operationProgress = ref(0);
const operationMessage = ref('');

// 同步滚动相关
const syncScrollEnabled = ref(true);
const remotePaneRef = ref<HTMLElement | null>(null);
const localPaneRef = ref<HTMLElement | null>(null);
const isRemoteScrolling = ref(false);
const isLocalScrolling = ref(false);

// CodeMirror 相关
const remoteEditorRef = ref<HTMLElement | null>(null);
const localEditorRef = ref<HTMLElement | null>(null);
let remoteEditorView: EditorView | null = null;
let localEditorView: EditorView | null = null;

// 内容与差异数据
const remoteContent = ref('');
const localContent = ref('');

// 差异行标记
const remoteDiffLines = ref<Set<number>>(new Set());
const localDiffLines = ref<Set<number>>(new Set());

// CodeMirror 主题：从 CSS 变量读取颜色，保证与当前主题一致
const getTheme = (isDark: boolean) => {
  const rootStyle = getComputedStyle(document.documentElement);

  const background =
    rootStyle.getPropertyValue('--categories-panel-bg').trim() ||
    (isDark ? '#1e1e1e' : '#ffffff');
  const foreground =
    rootStyle.getPropertyValue('--categories-text-color').trim() ||
    (isDark ? '#d4d4d4' : '#000000');
  const selection =
    rootStyle.getPropertyValue('--editor-selection-bg').trim() ||
    (isDark ? '#264f78' : '#add6ff');
  const caret = isDark ? '#aeafad' : '#000000';

  return createTheme({
    theme: isDark ? 'dark' : 'light',
    settings: {
      background,
      foreground,
      caret,
      selection,
    },
    styles: [
      { tag: lezerTags.comment, color: '#6a9955' },
      { tag: lezerTags.keyword, color: '#569cd6' },
      { tag: lezerTags.string, color: '#ce9178' },
    ],
  });
};

const currentFile = computed(() => props.conflictFiles[currentIndex.value]);

const allFilesResolved = computed(() => {
  return props.conflictFiles.every((_, index) => selections.value[index]);
});

const resolvedCount = computed(() => {
  return props.conflictFiles.filter((_, index) => selections.value[index]).length;
});

const isLocalEdited = computed(() => {
  const original = originalLocalContents.value[currentIndex.value];
  const current = localEditorView ? localEditorView.state.doc.toString() : localContent.value;
  return original && current !== original;
});

const readCurrentDarkMode = () => (
  document.documentElement.classList.contains('dark') ||
  document.documentElement.classList.contains('dark-theme') ||
  document.body.classList.contains('dark') ||
  document.body.classList.contains('dark-theme')
);

// 跟随全局主题（与内容编辑页保持一致）
const isDarkMode = ref(readCurrentDarkMode());
let themeObserver: MutationObserver | null = null;

function getFileName(filePath: string) {
  return filePath.split('/').pop() || filePath;
}

// 删除未使用的函数

// 简单的行级差异计算
function computeDiffLines(oldContent: string, newContent: string) {
  const oldLines = oldContent.split('\n');
  const newLines = newContent.split('\n');
  const oldSet = new Set<number>();
  const newSet = new Set<number>();

  // 简单的行比较
  const maxLen = Math.max(oldLines.length, newLines.length);
  for (let i = 0; i < maxLen; i++) {
    const oldLine = oldLines[i];
    const newLine = newLines[i];
    
    if (oldLine !== newLine) {
      if (i < oldLines.length) oldSet.add(i + 1);
      if (i < newLines.length) newSet.add(i + 1);
    }
  }

  return { oldSet, newSet };
}

// 创建 CodeMirror 编辑器
function createEditor(container: HTMLElement | null, content: string, readOnly: boolean, isRemote: boolean) {
  if (!container) return null;

  const extensions = [
    lineNumbers(),
    history(),
    keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
    getTheme(isDarkMode.value),
    EditorView.lineWrapping,
    EditorState.readOnly.of(readOnly),
    EditorView.updateListener.of((update) => {
      if (!readOnly && update.docChanged) {
        const newContent = update.state.doc.toString();
        if (isRemote) {
          remoteContent.value = newContent;
        } else {
          localContent.value = newContent;
          // 标记为已编辑
          editedContents.value[currentIndex.value] = newContent;
        }
        // 重新计算差异
        updateDiff();
      }
    })
  ];

  const state = EditorState.create({
    doc: content,
    extensions
  });

  const view = new EditorView({
    state,
    parent: container
  });

  // 监听 CodeMirror 内部滚动（.cm-scroller），实现按比例同步
  const onScroll = (event: Event) => {
    handleEditorScroll(isRemote, event);
  };
  view.scrollDOM.addEventListener('scroll', onScroll);

  return view;
}

// 同步滚动处理：基于 CodeMirror .cm-scroller（scrollDOM）按比例同步
function handleEditorScroll(isRemoteSource: boolean, event: Event) {
  if (!syncScrollEnabled.value) return;

  const source = event.target as HTMLElement | null;
  if (!source) return;

  const sourceScrollableHeight = source.scrollHeight - source.clientHeight;
  const verticalRatio =
    sourceScrollableHeight > 0 ? source.scrollTop / sourceScrollableHeight : 0;

  if (isRemoteSource) {
    if (isLocalScrolling.value) return;
    isRemoteScrolling.value = true;

    if (localEditorView) {
      const target = localEditorView.scrollDOM;
      const targetScrollableHeight = target.scrollHeight - target.clientHeight;
      target.scrollTop = verticalRatio * (targetScrollableHeight > 0 ? targetScrollableHeight : 0);
      target.scrollLeft = source.scrollLeft;
    }

    requestAnimationFrame(() => {
      isRemoteScrolling.value = false;
    });
  } else {
    if (isRemoteScrolling.value) return;
    isLocalScrolling.value = true;

    if (remoteEditorView) {
      const target = remoteEditorView.scrollDOM;
      const targetScrollableHeight = target.scrollHeight - target.clientHeight;
      target.scrollTop = verticalRatio * (targetScrollableHeight > 0 ? targetScrollableHeight : 0);
      target.scrollLeft = source.scrollLeft;
    }

    requestAnimationFrame(() => {
      isLocalScrolling.value = false;
    });
  }
}

// 切换同步滚动
function toggleSyncScroll() {
  syncScrollEnabled.value = !syncScrollEnabled.value;
}

// 更新差异显示
function updateDiff() {
  const remote = remoteContent.value;
  const local = localEditorView ? localEditorView.state.doc.toString() : localContent.value;
  const { oldSet, newSet } = computeDiffLines(remote, local);
  remoteDiffLines.value = oldSet;
  localDiffLines.value = newSet;
}

// 初始化编辑器
function initEditors(remote: string, local: string) {
  // 清理旧编辑器
  if (remoteEditorView) {
    remoteEditorView.destroy();
    remoteEditorView = null;
  }
  if (localEditorView) {
    localEditorView.destroy();
    localEditorView = null;
  }

  // 创建新编辑器
  nextTick(() => {
    remoteEditorView = createEditor(remoteEditorRef.value, remote, true, true);
    localEditorView = createEditor(localEditorRef.value, local, false, false);
    updateDiff();
  });
}

async function loadFileContents() {
  try {
    loading.value = true;
    currentOperation.value = 'loading';
    operationProgress.value = 30;
    operationMessage.value = t('settings.gitSync.loadingFile');
    
    const content: ConflictFileContent = await getConflictFileContent(currentFile.value);

    remoteContent.value = content.remote_content;
    
    if (!originalLocalContents.value[currentIndex.value]) {
      originalLocalContents.value[currentIndex.value] = content.local_content;
    }

    const localValue = editedContents.value[currentIndex.value] || content.local_content;
    localContent.value = localValue;

    operationProgress.value = 80;
    operationMessage.value = t('settings.gitSync.initEditor');
    
    // 初始化编辑器
    initEditors(content.remote_content, localValue);
    
    operationProgress.value = 100;
    currentOperation.value = 'complete';
  } catch (error) {
    console.error('加载文件内容失败:', error);
    remoteContent.value = '加载失败';
    localContent.value = '加载失败';
  } finally {
    loading.value = false;
  }
}

// 键盘快捷键
function handleKeydown(e: KeyboardEvent) {
  // 只在对话框可见时处理键盘快捷键
  if (!visible.value) return;

  // Ctrl+1 或 ←: 接受本地版本
  if ((e.ctrlKey && e.key === '1') || (e.key === 'ArrowLeft' && !e.ctrlKey)) {
    e.preventDefault();
    selectLocal();
  }
  // Ctrl+2 或 →: 接受远程版本
  else if ((e.ctrlKey && e.key === '2') || (e.key === 'ArrowRight' && !e.ctrlKey)) {
    e.preventDefault();
    selectRemote();
  }
  // Ctrl+Enter: 完成合并
  else if (e.ctrlKey && e.key === 'Enter') {
    e.preventDefault();
    if (allFilesResolved.value && !loading.value) {
      completeMerge();
    }
  }
  // Escape: 直接关闭（不触发取消确认）
  else if (e.key === 'Escape') {
    e.preventDefault();
    handleClose();
  }
  // Ctrl+← / Ctrl+→: 切换文件
  else if (e.ctrlKey && e.key === 'ArrowLeft') {
    e.preventDefault();
    previousFile();
  }
  else if (e.ctrlKey && e.key === 'ArrowRight') {
    e.preventDefault();
    nextFile();
  }
}

function selectRemote() {
  selections.value[currentIndex.value] = 'remote';
}

function selectLocal() {
  selections.value[currentIndex.value] = 'local';
}

function acceptAllRemote() {
  props.conflictFiles.forEach((_, idx) => {
    selections.value[idx] = 'remote';
  });
}

function acceptAllLocal() {
  props.conflictFiles.forEach((_, idx) => {
    selections.value[idx] = 'local';
  });
}

function previousFile() {
  if (currentIndex.value > 0) currentIndex.value--;
}

function nextFile() {
  if (currentIndex.value < props.conflictFiles.length - 1) currentIndex.value++;
}

function completeMerge() {
  // 确保本地编辑器内容已保存
  if (localEditorView && selections.value[currentIndex.value] === 'local') {
    editedContents.value[currentIndex.value] = localEditorView.state.doc.toString();
  }
  
  const finalContents = { ...editedContents.value };
  for (let i = 0; i < props.conflictFiles.length; i++) {
    if (selections.value[i] === 'local' && !finalContents[i]) {
      finalContents[i] = originalLocalContents.value[i] || '';
    }
  }
  
  // 设置进度状态
  loading.value = true;
  currentOperation.value = 'merging';
  operationProgress.value = 0;
  operationMessage.value = t('settings.gitSync.mergingProgress', { 
    current: 1, 
    total: props.conflictFiles.length 
  });
  
  // 模拟进度更新
  let progress = 0;
  const interval = setInterval(() => {
    progress += 20;
    operationProgress.value = Math.min(progress, 90);
    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 100);
  
  emit('complete', selections.value, finalContents);
}

function handleBack() {
  visible.value = false;
  emit('back');
}

function handleCancel() {
  visible.value = false;
  emit('cancel');
}

function handleClose() {
  visible.value = false;
  emit('escape');
}

// 监听对话框打开
watch(visible, (val) => {
  if (val && props.conflictFiles.length > 0) {
    currentIndex.value = 0;
    selections.value = {};
    editedContents.value = {};
    originalLocalContents.value = {};
    loadFileContents();
  }
});

// 监听文件切换
watch(currentIndex, () => {
  loadFileContents();
});

// 监听主题变化
watch(isDarkMode, () => {
  if (remoteEditorView && localEditorView) {
    initEditors(remoteContent.value, localContent.value);
  }
});

// 组件卸载时清理
onUnmounted(() => {
  if (remoteEditorView) {
    remoteEditorView.destroy();
  }
  if (localEditorView) {
    localEditorView.destroy();
  }
});

// 生命周期
onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  themeObserver = new MutationObserver(() => {
    isDarkMode.value = readCurrentDarkMode();
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });
  themeObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  });
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  themeObserver?.disconnect();
  themeObserver = null;
});

defineExpose({
  setLoading: (val: boolean) => {
    loading.value = val;
  }
});
</script>

<style scoped lang="scss">
.merge-overlay {
  @apply fixed inset-0 z-[2000] flex items-center justify-center;
  background: var(--dialog-overlay);
  backdrop-filter: blur(3px);
}

.merge-dialog {
  @apply flex flex-col w-[94vw] h-[92vh] max-w-[1400px] rounded-xl overflow-hidden;
  background: var(--dialog-bg);
  border: 1px solid var(--dialog-border);
  box-shadow: var(--dialog-shadow);
}

// 顶栏
.merge-titlebar {
  @apply flex items-center h-10 px-3 shrink-0 gap-3;
  background: var(--dialog-header-bg);
  border-bottom: 1px solid var(--dialog-border);
  -webkit-app-region: no-drag;

  .titlebar-left {
    @apply flex items-center gap-1.5 shrink-0;

    .titlebar-icon {
      @apply text-sm;
    }

    .titlebar-text {
      @apply text-xs font-semibold text-panel;
    }
  }

  .titlebar-center {
    @apply flex-1 min-w-0 overflow-hidden;
  }

  .titlebar-close {
    @apply w-7 h-7 flex items-center justify-center border-none bg-transparent rounded cursor-pointer text-content text-lg shrink-0;

    &:hover {
      background: rgb(255 65 54 / 15%);
      @apply text-red-500;
    }
  }
}

// 文件 tabs
.file-tabs {
  @apply flex gap-0.5 overflow-x-auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    @apply hidden;
  }
}

.file-tab {
  @apply flex items-center gap-[5px] py-1 px-2.5 border-none bg-transparent rounded cursor-pointer text-content text-[11px] whitespace-nowrap;
  transition: all 0.15s;

  &:hover {
    @apply bg-hover;
  }

  &.active {
    @apply bg-panel text-panel font-medium;
  }

  .tab-dot {
    @apply w-1.5 h-1.5 rounded-full shrink-0;
    background: var(--el-color-warning, #e6a23c);

    &.done {
      background: var(--el-color-success, #67c23a);
    }
  }
}

// 文件路径栏
.file-breadcrumb {
  @apply flex items-center gap-2 py-1.5 px-4 text-xs shrink-0;
  background: var(--categories-content-bg);
  border-bottom: 1px solid var(--categories-border-color);

  .breadcrumb-label {
    @apply text-content shrink-0;
  }

  .breadcrumb-path {
    @apply text-panel;
    font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
    word-break: break-all;
  }

  .breadcrumb-counter {
    @apply ml-auto py-px px-2 rounded-[10px] bg-hover text-content text-[11px] shrink-0;
  }
}

// 对比主体
.diff-body {
  @apply flex-1 flex min-h-0 overflow-hidden;
}

.diff-pane {
  @apply flex-1 flex flex-col min-w-0;
  transition: box-shadow 0.2s;

  &.selected {
    box-shadow: inset 0 0 0 2px var(--el-color-primary);
  }
}

.pane-toolbar {
  @apply flex items-center justify-between py-1.5 px-3 shrink-0 gap-2;
  border-bottom: 1px solid var(--categories-border-color);

  .incoming & {
    background: rgb(33 150 243 / 6%);
  }

  .current & {
    background: rgb(76 175 80 / 6%);
  }
}

:global(.dark) .pane-toolbar {
  .incoming & {
    background: rgb(33 150 243 / 10%);
  }

  .current & {
    background: rgb(76 175 80 / 10%);
  }
}

.toolbar-label {
  @apply flex items-center gap-1.5 text-xs font-semibold text-panel;

  .label-dot {
    @apply w-2 h-2 rounded-full;

    &.incoming-dot {
      @apply bg-blue-500;
    }

    &.current-dot {
      @apply bg-green-500;
    }
  }

  .label-badge {
    @apply py-px px-1.5 rounded-[3px] text-[10px] font-medium tracking-[0.3px] uppercase;

    .incoming & {
      background: rgb(33 150 243 / 15%);
      @apply text-blue-500;
    }

    .current & {
      background: rgb(76 175 80 / 15%);
      @apply text-green-500;
    }
  }

  .edited-indicator {
    @apply py-px px-1.5 rounded-[3px] text-[10px] font-medium;
    background: rgb(230 162 60 / 15%);
    @apply text-amber-500;
  }
}

// Accept 按钮
.accept-btn {
  @apply py-1 px-3 rounded border border-transparent text-[11px] font-medium cursor-pointer whitespace-nowrap;
  transition: all 0.15s;

  &.incoming-btn {
    @apply bg-transparent text-blue-500;
    border-color: #2196f3;

    &:hover {
      @apply bg-blue-500 text-white;
    }

    &.accepted {
      @apply bg-blue-500 text-white;
      border-color: #2196f3;
    }
  }

  &.current-btn {
    @apply bg-transparent text-green-500;
    border-color: #4caf50;

    &:hover {
      @apply bg-green-500 text-white;
    }

    &.accepted {
      @apply bg-green-500 text-white;
      border-color: #4caf50;
    }
  }
}

// 代码内容区
.pane-content {
  @apply flex-1 flex overflow-auto relative;
  background: var(--categories-panel-bg);
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &:hover {
    scrollbar-color: rgb(128 128 128 / 30%) transparent;
  }
}

.line-numbers {
  @apply flex flex-col py-2 min-w-[40px] text-right select-none shrink-0;
  background: var(--categories-content-bg);
  border-right: 1px solid var(--categories-border-color);

  span {
    @apply px-2 text-xs leading-5 text-content;
    font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
    opacity: 0.5;
  }
}

.code-block {
  @apply flex-1 m-0 py-2 px-3 text-[13px] leading-5 text-panel bg-transparent;
  font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
  white-space: pre-wrap;
  word-break: break-word;

  code {
    font-family: inherit;
  }
}

.code-editor {
  @apply flex-1 m-0 py-2 px-3 text-[13px] leading-5 text-panel bg-transparent border-none outline-none resize-none w-full min-h-full;
  font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
  white-space: pre-wrap;
  word-break: break-word;

  &:focus {
    background: rgb(93 109 253 / 3%);
  }
}

// 分隔条
.diff-gutter {
  @apply w-1.5 flex items-center justify-center shrink-0;
  background: var(--categories-content-bg);

  .gutter-line {
    @apply w-px h-full;
    background: var(--categories-border-color);
  }
}

// 底栏
.merge-statusbar {
  @apply flex items-center justify-between py-2 px-3 shrink-0 gap-3;
  background: var(--dialog-footer-bg);
  border-top: 1px solid var(--dialog-border);
}

.statusbar-left,
.statusbar-right {
  @apply flex items-center gap-1.5;
}

.resolve-progress {
  @apply text-[11px] text-content px-2;
}

// 进度条容器
.progress-container {
  @apply flex items-center gap-2 px-2;
}

.progress-bar {
  @apply w-[100px] h-1.5 rounded-[3px] overflow-hidden;
  background: var(--categories-border-color);
}

.progress-fill {
  @apply h-full rounded-[3px];
  transition: width 0.3s ease;
  background: var(--el-color-primary);

  &.progress-loading {
    background: linear-gradient(90deg, #5d6dfd 0%, #8b9fff 50%, #5d6dfd 100%);
    background-size: 200% 100%;
    animation: progress-loading 1.5s ease infinite;
  }

  &.progress-merging {
    background: linear-gradient(90deg, #67c23a 0%, #85ce61 50%, #67c23a 100%);
    background-size: 200% 100%;
    animation: progress-loading 1s ease infinite;
  }
}

@keyframes progress-loading {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.progress-text {
  @apply text-[11px] text-content whitespace-nowrap;
}

.nav-group {
  @apply flex gap-0.5 border border-panel rounded-[5px] overflow-hidden;
}

.nav-btn {
  @apply py-1 px-2.5 border-none bg-transparent text-panel text-xs cursor-pointer;
  transition: background 0.12s;

  &:hover:not(:disabled) {
    @apply bg-hover;
  }

  &:disabled {
    @apply opacity-35 cursor-not-allowed;
  }

  &:first-child {
    @apply border-r border-panel;
  }
}

.status-btn {
  @apply py-[5px] px-3.5 rounded-[5px] border border-panel bg-panel text-panel text-xs cursor-pointer whitespace-nowrap;
  transition: all 0.12s;

  &:hover {
    @apply bg-hover;
  }

  &.cancel-btn:hover {
    @apply border-red-500 text-red-500;
  }

  &.primary-btn {
    @apply text-white;
    background: var(--el-color-primary);
    border-color: var(--el-color-primary);

    &:hover {
      background: var(--el-button-hover-bg-color, #4a5bef);
    }

    &:disabled {
      @apply opacity-50 cursor-not-allowed;
    }

    &.loading {
      @apply pointer-events-none;
    }
  }
}

.btn-spinner {
  @apply inline-block w-3 h-3 rounded-full mr-1 align-middle;
  border: 2px solid rgb(255 255 255 / 30%);
  border-top-color: #fff;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// 工具栏操作按钮
.toolbar-actions {
  @apply flex items-center gap-2;
}

.sync-scroll-btn {
  @apply w-7 h-7 flex items-center justify-center border border-panel bg-transparent rounded cursor-pointer;
  transition: all 0.15s;

  &:hover {
    @apply bg-hover;
  }

  &.active {
    background: rgb(93 109 253 / 15%);
    @apply border-active text-primary;
  }

  .sync-icon {
    @apply text-sm;
  }
}

// CodeMirror 编辑器容器
.code-editor-container {
  @apply flex-1 overflow-auto;

  :deep(.cm-editor) {
    @apply h-full text-[13px];
    font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;

    .cm-content {
      @apply py-2;
    }

    .cm-line {
      @apply px-3;
    }

    .cm-gutters {
      background: var(--categories-content-bg);
      border-right: 1px solid var(--categories-border-color);
    }

    .cm-lineNumbers .cm-gutterElement {
      @apply px-2 min-w-[35px] text-content;
      opacity: 0.6;
    }
  }
}

// 差异标记
.diff-markers {
  @apply absolute left-0 top-0 bottom-0 w-1 pointer-events-none;
}

.diff-line-marker {
  @apply absolute left-0 w-1 h-5 pointer-events-none;

  &.remote {
    background: rgb(33 150 243 / 30%);
  }

  &.local {
    background: rgb(76 175 80 / 30%);
  }
}

// 批量操作按钮
.batch-actions {
  @apply flex gap-1 ml-2;
}

.batch-btn {
  @apply py-[3px] px-2 border border-panel bg-transparent rounded text-[11px] text-content cursor-pointer;
  transition: all 0.15s;

  &:hover {
    @apply bg-hover text-panel;
  }
}

// 快捷键提示
.shortcut-hints {
  @apply flex gap-3 mr-3 text-[11px] text-content;

  .hint-item {
    @apply flex items-center gap-0.5;

    kbd {
      @apply py-px px-1 border border-panel rounded-[3px] text-[10px];
      background: var(--categories-content-bg);
      font-family: inherit;
    }
  }
}

// 过渡动画
.merge-fade-enter-active {
  transition: opacity 0.2s ease;

  .merge-dialog {
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
}

.merge-fade-leave-active {
  transition: opacity 0.15s ease;

  .merge-dialog {
    transition: transform 0.15s ease, opacity 0.15s ease;
  }
}

.merge-fade-enter-from {
  opacity: 0;

  .merge-dialog {
    transform: scale(0.96) translateY(10px);
    opacity: 0;
  }
}

.merge-fade-leave-to {
  opacity: 0;

  .merge-dialog {
    transform: scale(0.98);
    opacity: 0;
  }
}
</style>
