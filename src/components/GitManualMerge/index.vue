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
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { getConflictFileContent } from '@/api/git';
import type { ConflictFileContent } from '@/api/git';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { tags as lezerTags } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import { useConfigurationStore } from '@/store';

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
const configStore = useConfigurationStore();

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

// 跟随全局主题（与内容编辑页保持一致）
const isDarkMode = computed(() => {
  return configStore.theme === 'auto'
    ? document.documentElement.classList.contains('dark')
    : configStore.theme === 'dark';
});

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
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});

defineExpose({
  setLoading: (val: boolean) => {
    loading.value = val;
  }
});
</script>

<style scoped lang="scss">
.merge-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
}

.merge-dialog {
  display: flex;
  flex-direction: column;
  width: 94vw;
  height: 92vh;
  max-width: 1400px;
  border-radius: 10px;
  overflow: hidden;
  background: var(--categories-panel-bg);
  border: 1px solid var(--categories-border-color);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

// 顶栏
.merge-titlebar {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  background: var(--categories-content-bg);
  border-bottom: 1px solid var(--categories-border-color);
  flex-shrink: 0;
  gap: 12px;
  -webkit-app-region: no-drag;

  .titlebar-left {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;

    .titlebar-icon {
      font-size: 14px;
    }

    .titlebar-text {
      font-size: 12px;
      font-weight: 600;
      color: var(--categories-text-color);
    }
  }

  .titlebar-center {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .titlebar-close {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
    color: var(--categories-info-text-color);
    font-size: 18px;
    flex-shrink: 0;

    &:hover {
      background: rgba(255, 65, 54, 0.15);
      color: #ff4136;
    }
  }
}

// 文件 tabs
.file-tabs {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.file-tab {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border: none;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  color: var(--categories-info-text-color);
  font-size: 11px;
  white-space: nowrap;
  transition: all 0.15s;

  &:hover {
    background: var(--categories-panel-bg-hover);
  }

  &.active {
    background: var(--categories-panel-bg);
    color: var(--categories-text-color);
    font-weight: 500;
  }

  .tab-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--el-color-warning, #e6a23c);
    flex-shrink: 0;

    &.done {
      background: var(--el-color-success, #67c23a);
    }
  }
}

// 文件路径栏
.file-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: var(--categories-content-bg);
  border-bottom: 1px solid var(--categories-border-color);
  font-size: 12px;
  flex-shrink: 0;

  .breadcrumb-label {
    color: var(--categories-info-text-color);
    flex-shrink: 0;
  }

  .breadcrumb-path {
    color: var(--categories-text-color);
    font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
    word-break: break-all;
  }

  .breadcrumb-counter {
    margin-left: auto;
    padding: 1px 8px;
    border-radius: 10px;
    background: var(--categories-panel-bg-hover);
    color: var(--categories-info-text-color);
    font-size: 11px;
    flex-shrink: 0;
  }
}

// 对比主体
.diff-body {
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
}

.diff-pane {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  transition: box-shadow 0.2s;

  &.selected {
    box-shadow: inset 0 0 0 2px var(--el-color-primary, #5d6dfd);
  }
}

.pane-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  border-bottom: 1px solid var(--categories-border-color);
  flex-shrink: 0;
  gap: 8px;

  .incoming & {
    background: rgba(33, 150, 243, 0.06);
  }

  .current & {
    background: rgba(76, 175, 80, 0.06);
  }
}

:global(.dark) .pane-toolbar {
  .incoming & {
    background: rgba(33, 150, 243, 0.1);
  }

  .current & {
    background: rgba(76, 175, 80, 0.1);
  }
}

.toolbar-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--categories-text-color);

  .label-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;

    &.incoming-dot {
      background: #2196f3;
    }

    &.current-dot {
      background: #4caf50;
    }
  }

  .label-badge {
    padding: 1px 6px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.3px;
    text-transform: uppercase;

    .incoming & {
      background: rgba(33, 150, 243, 0.15);
      color: #2196f3;
    }

    .current & {
      background: rgba(76, 175, 80, 0.15);
      color: #4caf50;
    }
  }

  .edited-indicator {
    padding: 1px 6px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 500;
    background: rgba(230, 162, 60, 0.15);
    color: #e6a23c;
  }
}

// Accept 按钮
.accept-btn {
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &.incoming-btn {
    background: transparent;
    border-color: #2196f3;
    color: #2196f3;

    &:hover {
      background: #2196f3;
      color: #fff;
    }

    &.accepted {
      background: #2196f3;
      color: #fff;
      border-color: #2196f3;
    }
  }

  &.current-btn {
    background: transparent;
    border-color: #4caf50;
    color: #4caf50;

    &:hover {
      background: #4caf50;
      color: #fff;
    }

    &.accepted {
      background: #4caf50;
      color: #fff;
      border-color: #4caf50;
    }
  }
}

// 代码内容区
.pane-content {
  flex: 1;
  display: flex;
  overflow: auto;
  background: var(--categories-panel-bg);
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  position: relative;

  &:hover {
    scrollbar-color: rgba(128, 128, 128, 0.3) transparent;
  }

  &.has-diff {
    // 为差异标记留出空间
  }
}

.line-numbers {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  min-width: 40px;
  text-align: right;
  user-select: none;
  flex-shrink: 0;
  background: var(--categories-content-bg);
  border-right: 1px solid var(--categories-border-color);

  span {
    padding: 0 8px;
    font-size: 12px;
    line-height: 20px;
    font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
    color: var(--categories-info-text-color);
    opacity: 0.5;
  }
}

.code-block {
  flex: 1;
  margin: 0;
  padding: 8px 12px;
  font-size: 13px;
  line-height: 20px;
  font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--categories-text-color);
  background: transparent;

  code {
    font-family: inherit;
  }
}

.code-editor {
  flex: 1;
  margin: 0;
  padding: 8px 12px;
  font-size: 13px;
  line-height: 20px;
  font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--categories-text-color);
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  min-height: 100%;

  &:focus {
    background: rgba(93, 109, 253, 0.03);
  }
}

// 分隔条
.diff-gutter {
  width: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--categories-content-bg);
  flex-shrink: 0;

  .gutter-line {
    width: 1px;
    height: 100%;
    background: var(--categories-border-color);
  }
}

// 底栏
.merge-statusbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: var(--categories-content-bg);
  border-top: 1px solid var(--categories-border-color);
  flex-shrink: 0;
  gap: 12px;
}

.statusbar-left,
.statusbar-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.resolve-progress {
  font-size: 11px;
  color: var(--categories-info-text-color);
  padding: 0 8px;
}

// 进度条容器
.progress-container {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
}

.progress-bar {
  width: 100px;
  height: 6px;
  background: var(--categories-border-color);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s ease;
  background: var(--el-color-primary, #5d6dfd);

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
  font-size: 11px;
  color: var(--categories-info-text-color);
  white-space: nowrap;
}

.nav-group {
  display: flex;
  gap: 2px;
  border: 1px solid var(--categories-border-color);
  border-radius: 5px;
  overflow: hidden;
}

.nav-btn {
  padding: 4px 10px;
  border: none;
  background: transparent;
  color: var(--categories-text-color);
  font-size: 12px;
  cursor: pointer;
  transition: background 0.12s;

  &:hover:not(:disabled) {
    background: var(--categories-panel-bg-hover);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &:first-child {
    border-right: 1px solid var(--categories-border-color);
  }
}

.status-btn {
  padding: 5px 14px;
  border-radius: 5px;
  border: 1px solid var(--categories-border-color);
  background: var(--categories-panel-bg);
  color: var(--categories-text-color);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.12s;
  white-space: nowrap;

  &:hover {
    background: var(--categories-panel-bg-hover);
  }

  &.cancel-btn:hover {
    border-color: #f56c6c;
    color: #f56c6c;
  }

  &.primary-btn {
    background: var(--el-color-primary, #5d6dfd);
    border-color: var(--el-color-primary, #5d6dfd);
    color: #fff;

    &:hover {
      background: var(--el-button-hover-bg-color, #4a5bef);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.loading {
      pointer-events: none;
    }
  }
}

.btn-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-right: 4px;
  vertical-align: middle;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// 工具栏操作按钮
.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sync-scroll-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--categories-border-color);
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: var(--categories-panel-bg-hover);
  }

  &.active {
    background: rgba(93, 109, 253, 0.15);
    border-color: var(--el-color-primary, #5d6dfd);
    color: var(--el-color-primary, #5d6dfd);
  }

  .sync-icon {
    font-size: 14px;
  }
}

// CodeMirror 编辑器容器
.code-editor-container {
  flex: 1;
  overflow: auto;

  :deep(.cm-editor) {
    height: 100%;
    font-size: 13px;
    font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', monospace;

    .cm-content {
      padding: 8px 0;
    }

    .cm-line {
      padding: 0 12px;
    }

    .cm-gutters {
      background: var(--categories-content-bg);
      border-right: 1px solid var(--categories-border-color);
    }

    .cm-lineNumbers .cm-gutterElement {
      padding: 0 8px;
      min-width: 35px;
      color: var(--categories-info-text-color);
      opacity: 0.6;
    }
  }
}

// 差异标记
.diff-markers {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  pointer-events: none;
}

.diff-line-marker {
  position: absolute;
  left: 0;
  width: 4px;
  height: 20px;
  pointer-events: none;

  &.remote {
    background: rgba(33, 150, 243, 0.3);
  }

  &.local {
    background: rgba(76, 175, 80, 0.3);
  }
}

// 批量操作按钮
.batch-actions {
  display: flex;
  gap: 4px;
  margin-left: 8px;
}

.batch-btn {
  padding: 3px 8px;
  border: 1px solid var(--categories-border-color);
  background: transparent;
  border-radius: 4px;
  font-size: 11px;
  color: var(--categories-info-text-color);
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: var(--categories-panel-bg-hover);
    color: var(--categories-text-color);
  }
}

// 快捷键提示
.shortcut-hints {
  display: flex;
  gap: 12px;
  margin-right: 12px;
  font-size: 11px;
  color: var(--categories-info-text-color);

  .hint-item {
    display: flex;
    align-items: center;
    gap: 2px;

    kbd {
      padding: 1px 4px;
      border: 1px solid var(--categories-border-color);
      border-radius: 3px;
      background: var(--categories-content-bg);
      font-size: 10px;
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
