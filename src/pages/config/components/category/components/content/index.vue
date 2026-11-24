<template>
  <main
    class="content-container transparent-input"
    :class="{ 'content-container--note': currentEditorType === 'note' }"
  >
    <div class="content-header">
      <div class="content-title">
        <ContentHeaderActions
          v-if="state.currentContent"
          :folder="contentFolder"
          :title="draftTitle"
          :context-heading="contextHeading"
          :updated-at="formatUpdatedAt(state.currentContent.updated_at)"
          :is-note="currentEditorType === 'note'"
          :is-reading="editorViewMode === 'reading'"
          :is-outline-visible="isOutlineVisible"
          :loading="state.isLoading"
          :initializing="state.isInitializing"
          @reading-mode="toggleToReadingMode"
          @editing-mode="toggleToEditingMode"
          @command="handleContentMenuCommand"
        />
      </div>

      <!-- 标签输入 -->
      <div v-if="hasContentTags" class="content-tags">
        <div class="content-tags-input">
          <TagInput
            :key="state.currentContent?.id"
            v-model:adding="isAddingTag"
            :model-value="state.tags"
            :existing-tags="allTags"
            @update:model-value="handleTagsChange"
          />
        </div>
      </div>
      <div
        v-if="saveIssue || draftStorageError"
        role="alert"
        class="mt-2 flex flex-wrap items-center gap-2 rounded-lg border border-panel-border bg-panel-bg px-3 py-2 text-panel-text"
      >
        <span class="min-w-0 flex-1">
          {{
            t(
              draftStorageError
                ? 'category.draftStorageFailed'
                : saveIssue === 'conflict'
                  ? 'category.saveConflict'
                  : saveIssue === 'recovered'
                    ? 'category.draftRecovered'
                    : 'category.saveRetryHint'
            )
          }}
        </span>
        <CustomButton
          size="small"
          :disabled="state.isLoading"
          @click="retryProtectedSave"
        >
          {{ t('common.save') }}
        </CustomButton>
        <CustomButton
          size="small"
          :disabled="state.isLoading"
          @click="saveDraftCopy"
        >
          {{ t('category.saveDraftCopy') }}
        </CustomButton>
        <CustomButton
          size="small"
          :disabled="state.isLoading"
          @click="showReloadConfirmation = true"
        >
          {{ t('category.reloadDisk') }}
        </CustomButton>
      </div>
    </div>

    <ConfirmDialog
      v-model="showReloadConfirmation"
      :title="t('common.warning')"
      :confirm-text="t('category.reloadDisk')"
      :cancel-text="t('common.cancel')"
      @confirm="reloadDiskVersion"
    >
      <p>{{ t('category.reloadDiskConfirm') }}</p>
    </ConfirmDialog>

    <!-- 创建新笔记确认对话框 -->
    <ConfirmDialog
      v-model="showCreateNoteDialog"
      :title="$t('common.tip')"
      :confirm-text="$t('common.create')"
      :cancel-text="$t('common.cancel')"
      @confirm="confirmCreateNote"
    >
      <div>
        {{ t('category.createNoteConfirm', { name: pendingNoteName }) }}
      </div>
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

    <!-- 反向链接更新对话框 -->
    <BacklinkUpdateDialog
      v-model="showBacklinkDialog"
      :fragment-title="backlinkUpdateData?.oldTitle || ''"
      :new-fragment-title="backlinkUpdateData?.newTitle || ''"
      :backlink-count="backlinkStats?.count || 0"
      :backlink-fragments="backlinkStats?.fragments || []"
      @confirm="handleBacklinkUpdateConfirm"
      @cancel="handleBacklinkUpdateCancel"
    />

    <AiAssistDialog
      v-model="showAiAssist"
      :content="state.editorContent"
      :title="draftTitle"
      :tags="state.tags"
      :fragment-type="currentEditorType ?? 'code'"
      :workspace-root="workspaceRoot"
      :note-file-path="String(state.currentContent?.id ?? '')"
      @apply-content="applyAiContent"
      @apply-title="applyTitle"
      @apply-tags="applyAiTags"
    />

    <AiAssistDialog
      v-model="showSelectionAiAssist"
      :content="aiSelection.text"
      :title="draftTitle"
      :tags="state.tags"
      :fragment-type="aiSelection.type"
      :workspace-root="workspaceRoot"
      :note-file-path="String(state.currentContent?.id ?? '')"
      selection-mode
      auto-run
      @apply-selection="replaceAiSelection"
    />

    <AiSelectionToolbar
      :visible="aiSelection.visible"
      :position="aiSelection.position"
      @rewrite="openSelectionRewrite"
      @dismiss="hideAiSelection"
    />

    <!-- 编辑器错误提示 -->
    <div v-if="state.editorError" class="editor-error">
      <span class="error-icon">⚠</span>
      <span>{{ state.editorError }}</span>
      <CustomButton size="small" @click="retryLoadEditor">
        {{ t('category.retry') }}
      </CustomButton>
    </div>

    <div v-else class="editor-stage" :aria-busy="showEditorLoading">
      <EditorLoadingOverlay :show="showEditorLoading" />

      <div
        class="editor-surface"
        :class="{ 'editor-surface--loading': showEditorLoading }"
        @scroll.capture.passive="handleEditorScroll"
      >
        <ScrollEdgeMask
          v-if="hasContentTags && editorScrolled && !showEditorLoading"
          class="editor-top-scroll-mask"
        />
        <!-- CodeMirror 代码编辑器 (type === 'code') -->
        <div
          v-if="currentEditorType === 'code'"
          class="editor-host"
          :class="{ 'editor-host--loading': showEditorLoading }"
          @mouseup="captureAiSelection"
          @keyup="captureAiSelection"
        >
          <CodeMirrorEditor
            ref="codeMirrorEditorRef"
            :key="'code-editor'"
            :code="state.editorContent"
            :current-fragment-id="state.currentContent?.id"
            :codeStyle="{ height: '100%' }"
            background="var(--editor-surface-bg)"
            gutter-background="var(--editor-surface-bg)"
            status-background="var(--statusbar-bg)"
            :dark="isDark"
            @update:code="handleEditorChange"
            @ready="handleEditorReady"
          />
        </div>

        <!-- Markdown 笔记编辑器 (type === 'note') -->
        <div
          v-else-if="currentEditorType === 'note'"
          class="editor-host"
          :class="{ 'editor-host--loading': showEditorLoading }"
          @mouseup="captureAiSelection"
          @keyup="captureAiSelection"
        >
          <MarkdownEditor
            ref="noteEditorRef"
            :key="'note-editor'"
            :content="state.editorContent"
            :codeStyle="{ height: '100%' }"
            :show-view-toggle="true"
            :show-editor-actions="false"
            :current-title="state.title"
            :current-fragment-id="state.currentContent?.id"
            :line-height="store.editorLineHeight"
            :sticky-headings="stickyHeadingEnabled"
            :document-properties="noteProperties"
            :dark="isDark"
            @update:content="handleEditorChange"
            @ready="handleEditorReady"
            @wikilink-click="handleWikilinkClick"
            @view-mode-change="handleViewModeChange"
            @outline-toggle="handleOutlineToggle"
            @backlink-navigate="handleBacklinkNavigate"
            @sticky-heading-change="setContextHeading"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useContentHeading } from './useContentHeading';
import { useEditorLoading } from './useEditorLoading';
import { contentEditorKey } from '@/components/ContentItem/contentEditor';
import { useContentSearchNavigation } from './useContentSearchNavigation';
import ContentHeaderActions from './components/ContentHeaderActions.vue';
import EditorLoadingOverlay from './components/EditorLoadingOverlay.vue';
import { useConfigurationStore, usePluginStore } from '@/store';
import {
  getFragmentContent,
  editFragment,
  addFragment,
  getFragmentList,
  convertFragmentType,
  moveFragmentToCategory
} from '@/api/fragment';
import { searchMarkdownFiles, createMarkdownFile } from '@/api/markdown';
import { debounce } from '@/utils';
import { logger } from '@/utils/logger';
import { parseFragment, parseTags, replaceFragmentTag } from '@/utils/fragment';
import {
  handleSaveError,
  handleLoadError,
  handleEditorError
} from '@/utils/error-handler';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';
import { getConfigContentPath } from '@/utils/config-navigation';
import {
  openFileWithOtherWays,
  resolveWorkspaceFilePath
} from '@/utils/file-system';
import '@/styles/menus.scss';
import TagInput from '@/components/TagInput/index.vue';
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import {
  applySavedAttachmentRenames,
  createEditorDraftStore,
  type EditorDraft
} from '@/utils/editorDrafts';
import { ConfirmDialog, CustomButton, ScrollEdgeMask } from '@/components/UI';
import { findBacklinks, getBacklinkStats } from '@/utils/wikilink-updater';
import BacklinkUpdateDialog from '@/components/UI/BacklinkUpdateDialog.vue';
import AiAssistDialog from '@/components/AiAssistDialog/index.vue';
import AiSelectionToolbar from '@/components/AiSelectionToolbar/index.vue';
import {
  htmlToMarkdown,
  createTurndownService,
  normalizeAiMarkdown
} from '@/utils/markdown';
import type { DocumentSelection } from '@/components/MarkdownEditor/document';
import { getWorkspaceRoot } from '@/api/markdown';
import {
  convertFragmentContent,
  FRAGMENT_TYPE_CONVERSION_REQUEST_EVENT,
  type FragmentTypeConversionRequestDetail
} from '@/utils/fragmentTypeConversion';
import {
  FRAGMENT_CATEGORY_MOVE_REQUEST_EVENT,
  type FragmentCategoryMoveRequestDetail
} from '@/utils/fragmentCategoryMove';

type GitSyncApi = typeof import('@/api/gitSync');

let gitSyncApiPromise: Promise<GitSyncApi> | null = null;

const loadGitSyncApi = async (): Promise<GitSyncApi> => {
  gitSyncApiPromise ??= import('@/api/gitSync');
  return gitSyncApiPromise;
};

const { t } = useI18n();
const formatUpdatedAt = (value?: string): string => {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
};

// 组件状态集中管理
const state = reactive({
  title: '',
  editorContent: '',
  currentContent: null as ContentType | null,
  isLoading: false,
  isInitializing: true,
  contentChanged: false,
  isEditorLoading: false,
  isEditorReady: false,
  editorError: null as string | null,
  lastSavedAt: null as Date | null,
  autoSaveEnabled: true,
  tags: [] as string[],
  editorLoadRetries: 0,
  // 保存基线：用于避免等价值内容误触发保存
  lastSavedContentHash: ''
});

const draftTitle = ref('');
const isAddingTag = ref(false);
const titleDirty = ref(false);
let contentLoadGeneration = 0;
const {
  beginEditorLoading,
  finishEditorLoadingAfterPaint,
  failEditorLoading,
  cancelEditorReadyTransition
} = useEditorLoading(state);

// 笔记按需加载，代码片段继续使用独立的代码编辑器。
const MarkdownEditor = defineAsyncComponent({
  loader: () => import('@/components/MarkdownEditor/index.vue'),
  loadingComponent: undefined,
  errorComponent: undefined,
  delay: 100,
  timeout: 10000,
  onError(error, retry, fail) {
    console.error('Failed to load Markdown editor:', error);
    handleEditorError(error, 'Markdown lazy loading');

    // 提供重试机会
    if (state.editorLoadRetries < 3) {
      state.editorLoadRetries++;
      setTimeout(() => retry(), 1000);
    } else {
      state.editorError = t('category.loadFailed');
      failEditorLoading();
      fail();
    }
  }
});

const showAiAssist = ref(false);
const showSelectionAiAssist = ref(false);
let noteAiSelection: DocumentSelection | null = null;
const codeMirrorEditorRef = ref<any>(null);
const aiSelection = reactive({
  text: '',
  type: 'code' as 'note' | 'code',
  from: 0,
  to: 0,
  visible: false,
  position: { x: 0, y: 0, bottom: 0 }
});

// 工作区根目录
const workspaceRoot = ref<string>('');
const draftStore = createEditorDraftStore(localStorage);
const saveIssue = ref<'conflict' | 'recovered' | 'failed' | null>(null);
const draftStorageError = ref(false);
const showReloadConfirmation = ref(false);
let pendingSave: Promise<boolean | undefined> | null = null;

const currentDraft = (): EditorDraft => ({
  title: draftTitle.value,
  content: state.editorContent,
  tags: [...state.tags],
  contentRevision: state.currentContent?.contentRevision
});
const persistDraft = (): boolean => {
  if (!state.currentContent || state.isInitializing || !workspaceRoot.value)
    return true;
  try {
    const draft = currentDraft();
    draftStore.record(
      workspaceRoot.value,
      String(state.currentContent.id),
      draft,
      {
        title: state.currentContent.title,
        content: state.currentContent.content,
        tags: [...(state.currentContent.tags || [])]
      },
      Boolean(pendingSave || saveIssue.value)
    );
    draftStorageError.value = false;
    return true;
  } catch (error) {
    console.error('[Content] Recovery draft could not be persisted', error);
    draftStorageError.value = true;
    return false;
  }
};
const restoreDraft = () => {
  saveIssue.value = null;
  if (!state.currentContent) return;
  try {
    const draft = draftStore.read(
      workspaceRoot.value,
      String(state.currentContent.id)
    );
    if (!draft) return;
    state.editorContent = draft.content;
    state.title = draft.title;
    draftTitle.value = draft.title;
    state.tags = [...draft.tags];
    state.currentContent.contentRevision = draft.contentRevision;
    state.contentChanged = true;
    titleDirty.value = draft.title !== originalTitle.value;
    saveIssue.value = 'recovered';
  } catch (error) {
    console.error('[Content] Recovery draft could not be read', error);
    draftStorageError.value = true;
    saveIssue.value = 'failed';
  }
};
const recordSaveFailure = (error: unknown) => {
  saveIssue.value = String(error).includes('MARKDOWN_SAVE_CONFLICT')
    ? 'conflict'
    : 'failed';
  persistDraft();
};
watch(
  () => [draftTitle.value, state.editorContent, [...state.tags]],
  () => {
    persistDraft();
  },
  { flush: 'sync' }
);

const route = useRoute();
const router = useRouter();
const store = useConfigurationStore();
const pluginStore = usePluginStore();
const isDark = computed(() => store.effectiveDark);
const showEditorLoading = computed(() => {
  if (!route.params.id || state.editorError) return false;
  return state.isEditorLoading || !state.isEditorReady;
});
const hasContentTags = computed(
  () => !!state.currentContent && (state.tags.length > 0 || isAddingTag.value)
);

const notifyFileEditIfGitSyncEnabled = async () => {
  if (!pluginStore.initialized) {
    await pluginStore.initialize();
  }

  if (!pluginStore.isEnabled('git-sync')) {
    return;
  }

  const { notifyFileEdit } = await loadGitSyncApi();
  await notifyFileEdit();
};

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
      content.tags.forEach((tag) => tagsSet.add(tag));
    }
  });
  return Array.from(tagsSet);
});

const normalizeFragmentId = (id: string) => id.replace(/^markdown:/i, '');
const normalizePathForCompare = (id: string | number) =>
  String(id).replace(/\\/g, '/');

const removeMissingContentFromList = (id: string | number): void => {
  const normalizedId = normalizePathForCompare(id);
  store.contents = store.contents.filter(
    (content: ContentType) =>
      normalizePathForCompare(content.id) !== normalizedId
  );
};

const resetMissingContentState = (id: string | number, notify = true): void => {
  removeMissingContentFromList(id);
  state.currentContent = null;
  state.title = '';
  draftTitle.value = '';
  titleDirty.value = false;
  state.tags = [];
  isAddingTag.value = false;
  state.editorContent = '';
  state.contentChanged = false;
  state.lastSavedAt = null;
  state.lastSavedContentHash = '';
  state.editorError = null;

  if (notify) {
    modal.warning(t('category.missingFileRemoved'), 'top-right');
  }
};

const goBackToContentList = async (): Promise<void> => {
  const currentCid = route.params.cid as string | undefined;
  await router.replace({
    path: currentCid
      ? `/config/category/contentList/${currentCid}`
      : '/config/category/contentList'
  });
};

const getContentMetadata = (): FragmentMetadata => {
  const metadata = { ...(state.currentContent?.metadata || {}) };
  delete metadata.language;
  delete metadata.framework;
  delete metadata.kind;
  return metadata;
};

defineOptions({
  name: 'Content'
});

const contentFolder = computed(() => {
  const content = state.currentContent;
  const folder = store.categories.find(
    (category) =>
      !category.isSystem && String(category.id) === String(content?.category_id)
  );
  const id = folder?.id ?? content?.category_id ?? 0;
  return {
    name: folder?.name || content?.category_name || t('nav.uncategorized'),
    path: `/config/category/contentList/${encodeURIComponent(String(id))}`
  };
});

const noteProperties = computed(() => {
  const content = state.currentContent;
  if (!content) return [];
  const values: Record<string, string | undefined> = {
    title: state.title,
    type: t(
      content.type === 'note' ? 'fragmentType.note' : 'fragmentType.codeSnippet'
    ),
    folder: contentFolder.value.name,
    tags: state.tags.length ? state.tags.join(', ') : undefined,
    created: content.created_at
      ? formatUpdatedAt(content.created_at)
      : undefined,
    modified: content.updated_at
      ? formatUpdatedAt(content.updated_at)
      : undefined,
    language: content.metadata?.language as string | undefined,
    framework: content.metadata?.framework as string | undefined,
    kind: content.metadata?.kind as string | undefined
  };
  return Object.entries(values)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([key, value]) => ({
      label: t(`noteEditor.propertyLabels.${key}`),
      value
    }));
});

// 计算当前应该显示的编辑器类型
const currentEditorType = computed(() => {
  if (!state.currentContent) return 'code';

  // 使用 parseFragment 确保类型字段存在
  const parsed = parseFragment(state.currentContent);
  return parsed.type;
});

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

const hasUnsavedChanges = () => state.contentChanged || titleDirty.value;

// Markdown 编辑器引用
const noteEditorRef = ref<any>(null);

const finishMountedEditorLoading = () => {
  const hasMountedEditor =
    currentEditorType.value === 'note'
      ? Boolean(noteEditorRef.value?.getView?.())
      : Boolean(codeMirrorEditorRef.value?.getView?.());

  if (hasMountedEditor) {
    finishEditorLoadingAfterPaint();
  }
};

useContentSearchNavigation(
  computed(() => route.path),
  computed(
    () => state.isEditorReady && !state.isInitializing && !state.editorError
  ),
  computed(() =>
    currentEditorType.value === 'note'
      ? noteEditorRef.value
      : codeMirrorEditorRef.value
  )
);

const handleEditorReady = () => {
  finishEditorLoadingAfterPaint();
};

// 重试加载编辑器
const retryLoadEditor = () => {
  state.editorError = null;
  state.editorLoadRetries = 0;
  beginEditorLoading();

  nextTick(() => {
    finishMountedEditorLoading();
  });
};

const stickyHeadingEnabled = computed(
  () => store.editorStickyHeadings && currentEditorType.value === 'note'
);
const {
  heading: contextHeading,
  setHeading: setContextHeading,
  clearHeading: clearContextHeading
} = useContentHeading(
  stickyHeadingEnabled,
  computed(() => `${workspaceRoot.value}/${state.currentContent?.id ?? ''}`)
);

// 编辑器视图模式状态
const editorViewMode = ref<'reading' | 'preview' | 'source'>('preview');
const isOutlineVisible = ref(false);

// 处理视图模式变化
const handleViewModeChange = (mode: 'reading' | 'preview' | 'source') => {
  clearContextHeading();
  editorViewMode.value = mode;
};

const editorScrolled = ref(false);

const getEditorScrollElement = (): HTMLElement | undefined =>
  currentEditorType.value === 'note'
    ? noteEditorRef.value?.getScrollElement()
    : codeMirrorEditorRef.value?.getView()?.scrollDOM;

const syncEditorScroll = (element = getEditorScrollElement()) => {
  editorScrolled.value = (element?.scrollTop ?? 0) > 0;
};

const handleEditorScroll = (event: Event) => {
  const element = getEditorScrollElement();
  if (event.target === element) syncEditorScroll(element);
};

watch(
  [
    () => state.currentContent?.id,
    showEditorLoading,
    editorViewMode,
    noteEditorRef,
    codeMirrorEditorRef
  ],
  () => syncEditorScroll(),
  { flush: 'post' }
);

// 处理大纲切换
const handleOutlineToggle = (show: boolean) => {
  isOutlineVisible.value = show;
};

// 切换到阅读模式
const toggleToReadingMode = () => {
  if (noteEditorRef.value) {
    noteEditorRef.value.setViewMode('reading');
  }
};

// 切换到编辑模式
const toggleToEditingMode = () => {
  if (noteEditorRef.value) {
    noteEditorRef.value.setViewMode('preview');
  }
};

// 切换大纲
const toggleOutline = () => {
  if (noteEditorRef.value) {
    noteEditorRef.value.toggleOutline();
  }
};

const copyNoteLink = async () => {
  if (!state.currentContent || !state.title) return;
  try {
    await navigator.clipboard.writeText(`[[${state.title}]]`);
    modal.success(t('content.copySuccess'));
  } catch (error) {
    logger.error('[Content] Copy note link failed:', error);
    modal.error(t('content.copyFailed'));
  }
};

// 获取编辑器元数据
const getEditorMetadata = (): FragmentMetadata => {
  const metadata = getContentMetadata();

  if (currentEditorType.value === 'note' && noteEditorRef.value) {
    const editor = noteEditorRef.value.getView();
    if (editor) {
      // 获取字数统计
      const text = noteEditorRef.value.getMarkdown();
      const wordCount = text
        .trim()
        .split(/\s+/)
        .filter((word: string) => word.length > 0).length;

      // 获取光标位置
      const { from } = editor.state.selection.main;

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

// 两种编辑器均发出原始文本；Markdown 中的 HTML、空行与行尾空格也属于正文。
const serializeContent = (
  content: string,
  _format: ContentFormat,
  _editorType: 'code' | 'note'
): string => content;

// 处理标签变更
const handleTagsChange = (newTags: string[]) => {
  if (state.isInitializing) return;

  state.tags = newTags;
  state.contentChanged = true;
  debouncedSave();
};

interface ContentSaveOptions {
  updateRoute?: boolean;
  preserveFilename?: boolean;
}

// 保存内容的核心逻辑（提取公共部分）
const performSaveNow = async (
  data: Partial<ContentType> = {},
  options: ContentSaveOptions = {}
) => {
  if (!state.currentContent) return;

  const { updateRoute = true } = options;
  syncDraftTitleToState();

  // 检测标题是否改变
  const titleChanged = state.title !== originalTitle.value;
  const newTitle = state.title;
  const saveSnapshot = { ...state.currentContent };
  const savedTags = [...state.tags];

  // 序列化当前编辑器内容
  const editorType = currentEditorType.value || 'code';
  const serializedContent = serializeContent(
    state.editorContent,
    state.currentContent.format || 'plain',
    editorType
  );

  // 标题不能为空
  if (!state.title.trim()) {
    return;
  }

  // 双重比较：
  // 1) 与当前文档原始内容比较（防初始化抖动）
  // 2) 与最近一次成功保存的哈希比较（防重复保存）
  const originalContent = state.currentContent.content || '';
  const normalizedContentChanged =
    normalizeForDirtyCheck(serializedContent) !==
    normalizeForDirtyCheck(originalContent);

  const currentContentHash = computeContentHash(serializedContent);
  const hashChangedFromLastSaved =
    currentContentHash !== state.lastSavedContentHash;

  const contentChanged = normalizedContentChanged && hashChangedFromLastSaved;

  // 如果标题、正文、标签和元数据都没有变化，则跳过保存（不更新 modified 时间）
  if (!titleChanged && !contentChanged && !state.contentChanged) {
    logger.info('[performSave] 内容无变化，跳过保存');
    return;
  }

  // 获取编辑器元数据（仅在内容变化时更新）
  const metadata = getEditorMetadata();

  // Preserve existing attachment links until the protected save commits.
  const finalContent = serializedContent;
  const savedDraft = currentDraft();
  const saveWorkspace = workspaceRoot.value;
  persistDraft();

  // 准备更新参数（用于 store）
  const updateParams = {
    ...saveSnapshot,
    title: newTitle,
    content: finalContent,
    metadata,
    tags: savedTags,
    ...data,
    fragmentType: saveSnapshot.type || 'code'
  };

  // 准备 API 参数（category_id 转换为 null 而不是 undefined）
  const apiParams = {
    ...updateParams,
    preserveFilename: options.preserveFilename,
    category_id: saveSnapshot.category_id ?? null
  };

  if (!saveSnapshot.contentRevision)
    throw new Error('Missing document revision; reload or save a copy');
  const result = await editFragment(apiParams, {
    expectedRevision: saveSnapshot.contentRevision,
    expectedWorkspaceRoot: saveWorkspace
  });
  const newPath = result.newPath;
  const committedContent = result.content ?? finalContent;
  updateParams.content = committedContent;
  updateParams.contentRevision = result.contentRevision;
  try {
    draftStore.acknowledge(
      saveWorkspace,
      String(saveSnapshot.id),
      savedDraft,
      result.contentRevision,
      newPath || String(saveSnapshot.id),
      result.attachmentRenames
    );
  } catch (error) {
    draftStorageError.value = true;
    console.error('[Content] Draft acknowledgement failed', error);
  }
  saveIssue.value = null;

  // A completed save belongs to its original document, even if navigation
  // happened while IPC was pending.
  if (state.currentContent?.id !== saveSnapshot.id) {
    updateStore({ ...updateParams, ...(newPath ? { id: newPath } : {}) });
    return false;
  }

  // 如果文件被重命名，需要更新 store
  if (newPath && newPath !== state.currentContent.id) {
    // 更新 store 中的文件 ID（路径）
    const oldId = state.currentContent.id;
    const contentIndex = store.contents.findIndex((c) => c.id === oldId);
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
      const targetPath = getConfigContentPath(newPath, cid);

      // 使用 replace 更新路由，添加 skipReload 查询参数
      router.replace({
        path: targetPath,
        query: { ...route.query, skipReload: 'true' }
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

  // Update the document path/baseline before the synchronous draft watcher.
  // Rebase only attachment paths; text typed during IPC must survive.
  state.editorContent =
    state.editorContent === serializedContent
      ? committedContent
      : applySavedAttachmentRenames(
          state.editorContent,
          result.attachmentRenames
        );

  state.contentChanged =
    state.editorContent !== committedContent ||
    state.title !== newTitle ||
    JSON.stringify(state.tags) !== JSON.stringify(savedTags);
  state.lastSavedAt = new Date();
  state.lastSavedContentHash = computeContentHash(committedContent);

  // 更新原始标题
  originalTitle.value = newTitle;
  titleDirty.value = draftTitle.value.trim() !== newTitle;

  if (titleChanged) {
    window.dispatchEvent(
      new CustomEvent('refresh-data', {
        detail: { source: 'fragment-rename' }
      })
    );
  }

  // 通知自动同步管理器（如果启用）
  try {
    await notifyFileEditIfGitSyncEnabled();
  } catch (error) {
    // 静默失败，不影响保存流程
    console.debug('[performSave] 通知自动同步失败:', error);
  }
  return true;
};

// Serialize explicit saves and route saves against the latest committed baseline.
const performSave = async (
  data: Partial<ContentType> = {},
  options: ContentSaveOptions = {}
) => {
  while (pendingSave) await pendingSave;
  const operation = performSaveNow(data, options);
  pendingSave = operation;
  try {
    const saved = await operation;
    if (saved && pendingSave === operation) {
      pendingSave = null;
      // Programmatic attachment rewrites also trigger the draft watcher.
      // Clear a clean snapshot only after the committed baseline is installed.
      persistDraft();
    }
    return saved;
  } finally {
    if (pendingSave === operation) pendingSave = null;
  }
};
const retryProtectedSave = async () => {
  debouncedSave.cancel();
  try {
    await saveContent();
  } catch {
    /* The banner retains both versions. */
  }
};
const reloadDiskVersion = async () => {
  if (!state.currentContent || state.isLoading) return;
  debouncedSave.cancel();
  try {
    draftStore.remove(workspaceRoot.value, String(state.currentContent.id));
    saveIssue.value = null;
    await fetchContentById(String(state.currentContent.id));
  } catch (error) {
    recordSaveFailure(error);
  }
};
const saveDraftCopy = async () => {
  if (!state.currentContent || state.isLoading) return;
  state.isLoading = true;
  const snapshot = currentDraft();
  const originalId = String(state.currentContent.id);
  try {
    const path = await createMarkdownFile(
      state.currentContent.category_name || null,
      {
        title: snapshot.title.trim() || t('category.recoveredTitle'),
        content: snapshot.content,
        tags: snapshot.tags,
        type: state.currentContent.type || 'code',
        ...getEditorMetadata()
      },
      { expectedWorkspaceRoot: workspaceRoot.value }
    );
    if (
      snapshot.content !== state.editorContent ||
      snapshot.title !== draftTitle.value ||
      JSON.stringify(snapshot.tags) !== JSON.stringify(state.tags)
    ) {
      modal.success(t('category.copySavedNewerDraft'));
      return;
    }
    draftStore.remove(workspaceRoot.value, originalId);
    state.contentChanged = false;
    titleDirty.value = false;
    saveIssue.value = null;
    const cid = route.params.cid;
    await router.push(getConfigContentPath(path, cid));
    window.dispatchEvent(
      new CustomEvent('refresh-data', { detail: { source: 'draft-copy' } })
    );
  } catch (error) {
    recordSaveFailure(error);
    handleSaveError(error, 'saveDraftCopy');
  } finally {
    state.isLoading = false;
  }
};

// 保存内容的核心逻辑
const saveContent = async (data: Partial<ContentType> = {}) => {
  if (!state.currentContent || state.isLoading) return;
  let saved = false;
  try {
    state.isLoading = true;
    syncDraftTitleToState();

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

    saved = Boolean(await performSave(data));
  } catch (error) {
    console.error('[Content] 保存失败:', error);
    recordSaveFailure(error);
    handleSaveError(error, 'saveContent');
    throw error;
  } finally {
    state.isLoading = false;
    if (saved && state.contentChanged) debouncedSave();
  }
};

const handleContentMenuCommand = async (command: string) => {
  if (!state.currentContent) return;

  if (command === 'openWith' || command === 'delete') {
    if (state.isLoading || state.isInitializing) return;

    if (command === 'delete') {
      window.dispatchEvent(
        new CustomEvent('sidebar-content-action', {
          detail: { action: 'delete', content: state.currentContent }
        })
      );
      return;
    }

    const path = resolveWorkspaceFilePath(
      String(state.currentContent.id),
      workspaceRoot.value
    );
    if (!path) {
      modal.warning(t('workbenchHome.workspaceNotSet'));
      return;
    }

    try {
      await openFileWithOtherWays(path);
    } catch (error) {
      logger.error('[Content] Opening the app chooser failed:', error);
      modal.error(t('content.openWithFailed'));
    }
    return;
  }

  if (command === 'copyNoteLink' && currentEditorType.value === 'note') {
    await copyNoteLink();
    return;
  }

  if (command === 'outline' && currentEditorType.value === 'note') {
    toggleOutline();
    return;
  }
  if (command === 'addTag') {
    if (!state.isInitializing) isAddingTag.value = true;
    return;
  }
  if (command === 'aiAssist') {
    showAiAssist.value = true;
    return;
  }

  if (command === 'save') {
    if (state.isLoading) return;
    debouncedSave.cancel();
    try {
      await saveContent();
      if (!showBacklinkDialog.value) modal.success(t('category.saveSuccess'));
    } catch {
      // saveContent 已显示保存错误。
    }
    return;
  }

  if (command !== 'copyTitle' && command !== 'copyContent') return;
  try {
    await navigator.clipboard.writeText(
      command === 'copyTitle' ? draftTitle.value : state.editorContent
    );
    modal.success(t('content.copySuccess'));
  } catch (error) {
    logger.error('[Content] Copy from menu failed:', error);
    modal.error(t('content.copyFailed'));
  }
};

// 使用 debounce，保留 cancel 方法
const debouncedSave = debounce(() => {
  if (!saveIssue.value) void saveContent().catch(() => {});
}, 300);

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
const saveContentWithoutBacklinkCheck = async (
  data: Partial<ContentType> = {}
) => {
  if (!state.currentContent || state.isLoading) return;
  let saved = false;
  try {
    state.isLoading = true;
    syncDraftTitleToState();
    saved = Boolean(await performSave(data));
    modal.success(t('category.saveSuccess'));
  } catch (error) {
    console.error('[Content] 保存失败:', error);
    recordSaveFailure(error);
    handleSaveError(error, 'saveContent');
    throw error;
  } finally {
    state.isLoading = false;
    if (saved && state.contentChanged) debouncedSave();
  }
};

const handleContentChange = (value: string): void => {
  if (state.isInitializing || value === state.editorContent) return;
  state.editorContent = value;
  state.contentChanged = true;
  debouncedSave();
};

const syncDraftTitleToState = () => {
  if (state.isInitializing) return;
  const nextTitle = draftTitle.value.trim();
  if (!nextTitle) {
    rollbackTitleDraft();
    return;
  }
  if (nextTitle !== state.title) {
    state.title = nextTitle;
    draftTitle.value = nextTitle;
  }
};

const rollbackTitleDraft = () => {
  const fallback = (
    originalTitle.value ||
    state.currentContent?.title ||
    state.title ||
    'New Fragment'
  ).trim();
  const restored = fallback || 'New Fragment';
  draftTitle.value = restored;
  state.title = restored;
  titleDirty.value = false;
};

// 处理标题确认（失焦或回车后才同步列表与保存）
const commitTitleChange = () => {
  if (state.isInitializing) return;

  const nextTitle = draftTitle.value.trim();
  if (!nextTitle) {
    rollbackTitleDraft();
    return;
  }

  const original = originalTitle.value ?? state.currentContent?.title;
  draftTitle.value = nextTitle;
  titleDirty.value = nextTitle !== state.title;

  if (nextTitle !== original) {
    state.title = nextTitle;
    state.contentChanged = true;
    titleDirty.value = false;
    updateStore({ title: nextTitle });
    debouncedSave();
  } else {
    state.title = nextTitle;
    titleDirty.value = false;
    updateStore({ title: nextTitle });
  }
};

// Markdown 的行尾双空格与空行有语义，脏检查必须比较原文。
const normalizeForDirtyCheck = (content: string): string => {
  return content || '';
};

const computeContentHash = (content: string): string => {
  // 基于归一化内容的轻量哈希（djb2）
  const normalized = normalizeForDirtyCheck(content);
  let hash = 5381;
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash << 5) + hash + normalized.charCodeAt(i);
    hash |= 0;
  }
  return `${normalized.length}:${hash}`;
};

/**
 * 使用当前编辑器内的最新正文执行类型转换，并立即同步本页状态。
 */
const handleFragmentTypeConversionRequest = (event: Event): void => {
  const customEvent = event as CustomEvent<FragmentTypeConversionRequestDetail>;
  const detail = customEvent.detail;

  if (
    !state.currentContent ||
    normalizePathForCompare(state.currentContent.id) !==
      normalizePathForCompare(detail.id)
  ) {
    return;
  }

  const requestedContentId = state.currentContent.id;
  detail.handled = true;
  void (async () => {
    try {
      debouncedSave.cancel();

      // 等待已经开始的自动保存完成，避免旧类型在转换后被回写。
      const saveDeadline = Date.now() + 10_000;
      while (state.isLoading) {
        if (Date.now() > saveDeadline) {
          throw new Error('Timed out waiting for the current fragment to save');
        }
        await new Promise((resolve) => setTimeout(resolve, 20));
      }

      const currentContentId = state.currentContent?.id ?? requestedContentId;
      if (!state.currentContent?.contentRevision || saveIssue.value) {
        throw new Error('Resolve the recovery draft before converting');
      }
      commitTitleChange();
      debouncedSave.cancel();
      syncDraftTitleToState();
      persistDraft();
      const draftBeforeConversion = currentDraft();
      state.isLoading = true;
      state.isInitializing = true;
      beginEditorLoading();

      const sourceType = currentEditorType.value || 'code';
      const language = state.currentContent?.metadata?.language;
      const convertedContent = convertFragmentContent(
        state.editorContent,
        sourceType,
        detail.targetType,
        typeof language === 'string' ? language : undefined
      );
      const converted = await convertFragmentType(
        currentContentId,
        detail.targetType,
        {
          title: state.title,
          content: convertedContent,
          metadata: state.currentContent?.metadata,
          tags: state.tags
        },
        {
          expectedRevision: state.currentContent.contentRevision,
          expectedWorkspaceRoot: workspaceRoot.value
        }
      );
      draftStore.acknowledge(
        workspaceRoot.value,
        String(currentContentId),
        draftBeforeConversion,
        converted.contentRevision!,
        String(converted.id)
      );
      const newPath =
        normalizePathForCompare(converted.id) !==
        normalizePathForCompare(currentContentId)
          ? String(converted.id)
          : null;

      state.currentContent = {
        ...state.currentContent,
        ...converted,
        type: detail.targetType,
        format: detail.targetType === 'note' ? 'markdown' : 'plain'
      };
      state.editorContent = converted.content;
      state.contentChanged = false;
      state.lastSavedAt = new Date();
      state.lastSavedContentHash = computeContentHash(converted.content);
      originalTitle.value = converted.title;
      draftTitle.value = converted.title;
      titleDirty.value = false;

      const previousIndex = store.contents.findIndex(
        (item) =>
          normalizePathForCompare(item.id) ===
          normalizePathForCompare(currentContentId)
      );
      if (previousIndex !== -1) {
        store.contents[previousIndex] = {
          ...store.contents[previousIndex],
          ...state.currentContent
        };
      }

      if (newPath && newPath !== currentContentId) {
        const cid = route.params.cid as string | undefined;
        await router.replace({
          path: getConfigContentPath(newPath, cid),
          query: { ...route.query, skipReload: 'true' }
        });
      }

      try {
        await notifyFileEditIfGitSyncEnabled();
      } catch (error) {
        console.debug('[Content] 类型转换后通知自动同步失败:', error);
      }

      await nextTick();
      state.isInitializing = false;
      finishMountedEditorLoading();
      detail.resolve(state.currentContent);
    } catch (error) {
      recordSaveFailure(error);
      await nextTick();
      failEditorLoading();
      detail.reject(error);
    } finally {
      state.isLoading = false;
      state.isInitializing = false;
    }
  })();
};

const handleFragmentCategoryMoveRequest = (event: Event): void => {
  const detail = (event as CustomEvent<FragmentCategoryMoveRequestDetail>)
    .detail;
  if (
    !state.currentContent ||
    normalizePathForCompare(state.currentContent.id) !==
      normalizePathForCompare(detail.id)
  ) {
    return;
  }

  detail.handled = true;
  void (async () => {
    try {
      debouncedSave.cancel();

      const saveDeadline = Date.now() + 10_000;
      while (state.isLoading) {
        if (Date.now() > saveDeadline) {
          throw new Error('Timed out waiting for the current fragment to save');
        }
        await new Promise((resolve) => setTimeout(resolve, 20));
      }

      commitTitleChange();
      debouncedSave.cancel();
      syncDraftTitleToState();
      if (hasUnsavedChanges()) {
        await performSave({}, { updateRoute: false });
      }

      if (!state.currentContent) {
        throw new Error(`Fragment not found: ${String(detail.id)}`);
      }

      const oldId = state.currentContent.id;
      const moved = await moveFragmentToCategory(oldId, detail.categoryId);
      state.currentContent = {
        ...state.currentContent,
        ...moved
      };

      const previousIndex = store.contents.findIndex(
        (item) =>
          normalizePathForCompare(item.id) === normalizePathForCompare(oldId)
      );
      if (previousIndex !== -1) {
        store.contents[previousIndex] = {
          ...store.contents[previousIndex],
          ...moved
        };
      }

      await router.replace({
        path: getConfigContentPath(
          moved.id,
          moved.category_id ?? detail.categoryId
        ),
        query: { ...route.query, skipReload: 'true' }
      });

      try {
        await notifyFileEditIfGitSyncEnabled();
      } catch (error) {
        console.debug('[Content] 分类移动后通知自动同步失败:', error);
      }

      detail.resolve(moved);
    } catch (error) {
      detail.reject(error);
    }
  })();
};

const applyAiContent = (content: string) => {
  if (currentEditorType.value === 'note') {
    const markdown = normalizeAiMarkdown(content);
    noteEditorRef.value?.setViewMode('preview');
    if (!noteEditorRef.value?.replaceDocument(markdown)) {
      handleContentChange(markdown);
    }
    return;
  }
  handleContentChange(content);
};

const applyTitle = (title: string) => {
  draftTitle.value = title;
  titleDirty.value = title.trim() !== state.title.trim();
  commitTitleChange();
};

async function changeTag(source: string, target: string | null): Promise<void> {
  const id = state.currentContent?.id;
  const root = workspaceRoot.value;
  if (pendingSave) {
    await pendingSave;
    await nextTick();
  }
  const content = state.currentContent;
  if (
    !content ||
    content.id !== id ||
    workspaceRoot.value !== root ||
    state.isInitializing ||
    state.isLoading ||
    pendingSave ||
    saveIssue.value ||
    draftTitle.value.trim() !== originalTitle.value
  ) {
    throw new Error(t('tags.changeUnavailable'));
  }
  const tags = replaceFragmentTag(state.tags, source, target);
  if (!tags && !parseTags(content.tags)?.includes(source)) return;

  debouncedSave.cancel();
  const previousTags = state.tags;
  const previousBody = state.editorContent;
  const wasDirty = state.contentChanged;
  state.isLoading = true;
  state.tags = tags ?? [...previousTags];
  const changedTags = state.tags;
  state.contentChanged = true;
  let saved = false;
  try {
    saved = Boolean(await performSave({}, { preserveFilename: true }));
  } catch (error) {
    if (state.currentContent?.id === content.id) {
      if (state.tags === changedTags) {
        state.tags = previousTags;
        state.contentChanged = wasDirty || state.editorContent !== previousBody;
      }
      if (hasUnsavedChanges()) recordSaveFailure(error);
      else persistDraft();
    }
    throw error;
  } finally {
    state.isLoading = false;
    if (saved && state.contentChanged) debouncedSave();
  }
}

const activeEditor = inject(contentEditorKey, null);
watchEffect((onCleanup) => {
  if (
    !activeEditor ||
    state.isInitializing ||
    state.editorError ||
    !state.currentContent
  )
    return;
  activeEditor.value = {
    id: state.currentContent.id,
    title: draftTitle.value,
    workspaceRoot: workspaceRoot.value,
    rename: applyTitle,
    changeTag
  };
  onCleanup(() => {
    activeEditor.value = null;
  });
});

const applyAiTags = (tags: string[]) => {
  handleTagsChange(tags);
};

const hideAiSelection = () => {
  aiSelection.visible = false;
};

const captureAiSelection = () => {
  requestAnimationFrame(() => {
    const type = currentEditorType.value;
    if (type === 'code') {
      const view = codeMirrorEditorRef.value?.getView?.();
      const selection = view?.state.selection.main;
      if (!view || !selection || selection.empty) {
        hideAiSelection();
        return;
      }
      const coords =
        view.coordsAtPos(selection.to) ?? view.coordsAtPos(selection.from);
      aiSelection.text = view.state.sliceDoc(selection.from, selection.to);
      aiSelection.type = 'code';
      aiSelection.from = selection.from;
      aiSelection.to = selection.to;
      aiSelection.position = {
        x: coords?.right ?? window.innerWidth / 2,
        y: coords?.top ?? 72,
        bottom: coords?.bottom ?? 92
      };
      aiSelection.visible = Boolean(aiSelection.text.trim());
      return;
    }

    const editor = noteEditorRef.value?.getView?.();
    const selection =
      noteEditorRef.value?.getSelection?.() as DocumentSelection | null;
    if (
      !editor?.hasFocus ||
      editor.state.readOnly ||
      !selection ||
      selection.from === selection.to
    ) {
      hideAiSelection();
      return;
    }
    const rect =
      editor.coordsAtPos(selection.to) ?? editor.coordsAtPos(selection.from);
    if (!rect) {
      hideAiSelection();
      return;
    }
    noteAiSelection = selection;
    aiSelection.text = selection.text;
    aiSelection.type = 'note';
    aiSelection.from = selection.from;
    aiSelection.to = selection.to;
    aiSelection.position = {
      x: rect.right,
      y: rect.top,
      bottom: rect.bottom
    };
    aiSelection.visible = Boolean(aiSelection.text.trim());
  });
};

const openSelectionRewrite = () => {
  if (!aiSelection.text.trim()) return;
  aiSelection.visible = false;
  showSelectionAiAssist.value = true;
};

const replaceAiSelection = (value: string) => {
  if (!value.trim()) return;
  if (aiSelection.type === 'code') {
    const view = codeMirrorEditorRef.value?.getView?.();
    if (!view) return;
    const from = aiSelection.from;
    view.dispatch({
      changes: { from, to: aiSelection.to, insert: value },
      selection: { anchor: from + value.length }
    });
    view.focus();
  } else {
    if (
      !noteAiSelection ||
      !noteEditorRef.value?.replaceSelection(value, noteAiSelection)
    ) {
      modal.warning(t('noteEditor.selectionChanged'));
      return;
    }
  }
  hideAiSelection();
};

// 处理编辑器内容变更
const handleEditorChange = (value: string) => {
  if (state.isInitializing) return;
  // Undo can return to the saved text; compare against the current draft so it
  // also reaches the parent and does not get replaced by an outdated prop.
  handleContentChange(value);
};

// 处理 Wikilink 点击
const handleWikilinkClick = async (noteName: string) => {
  try {
    // 搜索匹配的 Markdown 文件（按标题搜索）
    const fragments = await searchMarkdownFiles(noteName);

    if (fragments.length > 0) {
      // 精确匹配标题（不区分大小写）
      const exactMatch = fragments.find(
        (f) => f.title.toLowerCase() === noteName.toLowerCase()
      );
      const targetFragment = exactMatch || fragments[0];

      // 如果有未保存的更改，先保存（取消防抖，避免 300ms 后重复保存）
      if (hasUnsavedChanges()) {
        debouncedSave.cancel();
        await saveContent();
      }

      // 构建正确的路由路径，保持当前的 cid 上下文
      const targetPath = getConfigContentPath(
        targetFragment.id,
        route.params.cid
      );

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
const handleBacklinkNavigate = async (
  fragmentId: number | string,
  searchTitle: string
) => {
  try {
    // 如果有未保存的更改，先保存（取消防抖，避免 300ms 后重复保存）
    if (hasUnsavedChanges()) {
      debouncedSave.cancel();
      await saveContent();
    }

    // 获取目标片段信息
    const targetFragment = await getFragmentContent(fragmentId);

    if (targetFragment) {
      // 构建目标路径（需要对文件路径进行 URL 编码），保持当前的 cid 上下文
      const targetPath = getConfigContentPath(fragmentId, route.params.cid);

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
            if (
              state.isEditorReady &&
              !state.isEditorLoading &&
              noteEditorRef.value &&
              currentEditorType.value === 'note'
            ) {
              resolve(true);
            } else if (attempts >= maxAttempts) {
              console.warn('[Content] 等待编辑器超时，状态:', {
                isEditorLoading: state.isEditorLoading,
                isEditorReady: state.isEditorReady,
                hasNoteEditorRef: !!noteEditorRef.value,
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
      if (editorReady && noteEditorRef.value && searchTitle) {
        noteEditorRef.value.scrollToWikilink(searchTitle);
      } else if (!editorReady) {
        console.warn('[Content] 编辑器未准备好，无法滚动');
      } else if (!searchTitle) {
        console.warn('[Content] 没有提供搜索标题');
      } else {
        console.warn(
          '[Content] 无法滚动到 wikilink，编辑器引用不存在或非笔记类型'
        );
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

    if (state.currentContent?.category_id !== undefined) {
      // 从当前内容获取分类ID
      currentCategoryId =
        typeof state.currentContent.category_id === 'number'
          ? state.currentContent.category_id
          : Number(state.currentContent.category_id);
    } else {
      // 默认为未分类（ID: 0）
      currentCategoryId = 0;
    }

    const newFragmentId = await addFragment({
      categoryId: currentCategoryId,
      fragmentType: 'note',
      metadata: {
        title: noteName
      }
    });

    // 刷新内容列表
    const result = await getFragmentList(currentCategoryId);
    store.contents = result;

    // 跳转到新笔记（保持当前的 cid 上下文）
    const currentCid = currentCategoryId;
    router.push({
      path: getConfigContentPath(newFragmentId, currentCid)
    });

    showCreateNoteDialog.value = false;
  } catch (error) {
    console.error('Failed to create note:', error);
    modal.error(t('content.createNoteFailed'));
  }
};

const loadContent = async (id: string, source: 'route' | 'reload') => {
  const loadGeneration = ++contentLoadGeneration;
  const reloading = source === 'reload';
  state.isInitializing = true;
  state.editorError = null;
  beginEditorLoading();

  try {
    const fragmentId = normalizeFragmentId(id);
    const result = await getFragmentContent(fragmentId);
    if (loadGeneration !== contentLoadGeneration) return;

    if (result) {
      const parsedContent = parseFragment(result);
      state.currentContent = parsedContent;
      state.title = parsedContent.title;
      draftTitle.value = parsedContent.title;
      titleDirty.value = false;
      state.tags = parsedContent.tags || [];
      originalTitle.value = parsedContent.title;
      state.editorContent = deserializeContent(
        parsedContent.content || '',
        parsedContent.format || 'plain'
      );
      state.contentChanged = false;
      state.lastSavedAt = null;
      state.lastSavedContentHash = computeContentHash(
        parsedContent.content || ''
      );
      restoreDraft();
    } else {
      resetMissingContentState(reloading ? id : fragmentId, !reloading);
      if (!reloading) {
        await goBackToContentList();
        return;
      }
    }

    await nextTick();
    if (
      reloading &&
      result &&
      currentEditorType.value === 'note' &&
      noteEditorRef.value
    ) {
      noteEditorRef.value.setMarkdown(state.editorContent);
    }
    finishMountedEditorLoading();
  } catch (error) {
    if (loadGeneration !== contentLoadGeneration) return;
    console.error('[Content] 内容加载失败:', error);
    handleLoadError(error, reloading ? 'fetchContentById' : 'fetchContent');
    state.editorError = t('category.loadFailed');
    failEditorLoading();
  } finally {
    if (loadGeneration === contentLoadGeneration) {
      nextTick(() => {
        state.isInitializing = false;
      });
    }
  }
};

const fetchContent = () => loadContent(route.params.id as string, 'route');
const fetchContentById = (id: string) => loadContent(id, 'reload');

// 反序列化内容（根据 format 字段）
const deserializeContent = (content: string, format: ContentFormat): string => {
  // 仅迁移明确标记为 HTML 的旧笔记，不能根据正文外观猜测格式。
  if (currentEditorType.value === 'note' && format === 'html') {
    try {
      return htmlToMarkdown(content, createTurndownService());
    } catch (error) {
      console.error('[Content] 旧版 HTML 转 Markdown 失败:', error);
      return content;
    }
  }

  // 代码片段保持原始纯文本格式
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
        const query = { ...route.query };
        delete query.skipReload;
        router.replace({
          path: route.path,
          query
        });
      });
      return;
    }

    if (newId && oldId !== undefined) {
      beginEditorLoading();
    }
    if (newId !== oldId) {
      isAddingTag.value = false;
      showAiAssist.value = false;
      showSelectionAiAssist.value = false;
      noteAiSelection = null;
      hideAiSelection();
    }

    // 加载新内容（但不在初始化时执行，由 onMounted 处理）
    if (newId && oldId !== undefined) {
      await fetchContent();
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
  titleDirty.value = false;
  draftTitle.value = state.title;
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

  // Local create/rename events refresh navigation lists. The editor already
  // owns its latest state and must not reload its body in response.
  if (source === 'fragment-create' || source === 'fragment-rename') return;

  if (source === 'closed-fragment-tags-changed') {
    const id = state.currentContent?.id;
    const changedIds: ContentType['id'][] = customEvent.detail.ids;
    if (
      id !== undefined &&
      changedIds.some(
        (changedId) =>
          normalizePathForCompare(id) === normalizePathForCompare(changedId)
      ) &&
      !pendingSave &&
      !hasUnsavedChanges()
    )
      await fetchContentById(String(id));
    return;
  }

  if (source === 'delete-fragment') {
    const deletedId = customEvent.detail.deletedId;
    if (
      state.currentContent &&
      deletedId &&
      getConfigContentPath(state.currentContent.id) ===
        getConfigContentPath(deletedId)
    ) {
      debouncedSave.cancel();
      persistDraft();
      state.currentContent = null;
      state.contentChanged = false;
      titleDirty.value = false;
    }
    return;
  }

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
    const modifiedFiles = modified || [];
    const createdFiles = created || [];
    const deletedFiles = deleted || [];
    console.log(
      '[Content] 📦 files-changed-batch, 当前文件:',
      currentFileId,
      '创建文件:',
      createdFiles,
      '修改文件:',
      modifiedFiles,
      '删除文件:',
      deletedFiles
    );

    const normalizedId = normalizePathForCompare(currentFileId);
    const matchesCurrentFile = (file: string) => {
      const normalizedFile = normalizePathForCompare(file);
      return (
        normalizedId.endsWith(normalizedFile) ||
        normalizedFile.endsWith(normalizedId)
      );
    };
    const isCurrentDeleted = deletedFiles.some(matchesCurrentFile);

    if (isCurrentDeleted) {
      // 当前打开的文件已被删除，导航回分类列表（欢迎页）
      console.log('[Content] ⚠️ 当前文件已被删除，导航回分类列表');
      if (!hasUnsavedChanges()) {
        await router.push('/config/category');
      }
      return;
    }

    shouldReload = modifiedFiles.some(matchesCurrentFile);
  } else if (
    source === 'force-pull' ||
    source === 'manual-merge' ||
    source === 'force-push'
  ) {
    shouldReload = true;
  }

  if (shouldReload) {
    if (hasUnsavedChanges()) {
      console.log(
        '[Content] ⚠️ 当前文件被外部修改，但存在未保存的本地更改，跳过重载'
      );
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
  console.log(
    `[Content] dirs-changed-batch: -${deleted.length}，检查当前内容是否受影响`
  );

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
    const absDeletedPath =
      deletedPath.startsWith('/') || deletedPath.match(/^[A-Za-z]:/)
        ? deletedPath.replace(/\\/g, '/')
        : `${wsRoot}/${deletedPath}`.replace(/\\/g, '/').replace(/\/+/g, '/');
    return (
      normalizedCurrentId === absDeletedPath ||
      normalizedCurrentId.startsWith(absDeletedPath + '/')
    );
  });

  if (isInDeletedDir) {
    console.log('[Content] ⚠️ 当前文件所在的目录被删除');
    if (hasUnsavedChanges()) {
      console.log('[Content] ⚠️ 存在未保存的更改，提示用户');
    } else {
      console.log('[Content] 🔄 当前文件所在的目录被删除，导航回分类列表');
      await router.push('/config/category');
    }
  }
};

// Route saves must complete before changing the current document.
const saveBeforeNavigation = async (to: {
  params: Record<string, unknown>;
  query: Record<string, unknown>;
}) => {
  if (!state.currentContent) return true;

  if (
    to.query.skipReload === 'true' &&
    String(to.params.id) === String(state.currentContent?.id)
  )
    return true;
  debouncedSave.cancel();
  try {
    if (pendingSave) await pendingSave;
    if (!hasUnsavedChanges()) return true;
    persistDraft();
    if (saveIssue.value) return false;
    await performSave({}, { updateRoute: false });
    return !hasUnsavedChanges();
  } catch (error) {
    recordSaveFailure(error);
    return false;
  }
};
onBeforeRouteLeave(saveBeforeNavigation);
onBeforeRouteUpdate((to, from) =>
  to.params.id === from.params.id ? true : saveBeforeNavigation(to)
);
onBeforeUnmount(() => {
  contentLoadGeneration++;
  cancelEditorReadyTransition();
  debouncedSave.cancel();
  persistDraft();
});

// 监听浏览器关闭/刷新事件
onMounted(async () => {
  // 注册清理函数（必须在 await 之前）
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    persistDraft();
    if (hasUnsavedChanges()) {
      e.preventDefault();
      e.returnValue = '';
    }
  };

  window.addEventListener('beforeunload', handleBeforeUnload);
  window.addEventListener('refresh-data', handleRefreshData);
  window.addEventListener('refresh-categories', handleDirsChanged);
  window.addEventListener(
    FRAGMENT_CATEGORY_MOVE_REQUEST_EVENT,
    handleFragmentCategoryMoveRequest
  );
  window.addEventListener(
    FRAGMENT_TYPE_CONVERSION_REQUEST_EVENT,
    handleFragmentTypeConversionRequest
  );

  onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    window.removeEventListener('refresh-data', handleRefreshData);
    window.removeEventListener('refresh-categories', handleDirsChanged);
    window.removeEventListener(
      FRAGMENT_CATEGORY_MOVE_REQUEST_EVENT,
      handleFragmentCategoryMoveRequest
    );
    window.removeEventListener(
      FRAGMENT_TYPE_CONVERSION_REQUEST_EVENT,
      handleFragmentTypeConversionRequest
    );
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
.content-container {
  @apply h-full w-full min-w-0 max-w-full overflow-hidden text-xs;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: minmax(0, 1fr);
  background: var(--editor-surface-bg);

  .content-header {
    @apply mx-auto min-w-0 w-full max-w-[1120px] overflow-hidden px-8 pt-0;

    .content-title {
      @apply flex flex-wrap items-center gap-0 min-h-10;

      min-width: 0;
    }

    .content-tags {
      @apply flex min-w-0 items-start gap-3 py-2;

      padding-right: var(--editor-content-padding-inline);
      padding-left: var(--editor-content-padding-inline);

      .content-tags-input {
        @apply min-w-0 flex-1;
      }
    }
  }
}

.editor-stage {
  @apply relative mx-auto h-full min-h-0 min-w-0 w-full max-w-[1120px] overflow-hidden px-8;

  background: var(--editor-surface-bg);
}

.content-container--note {
  .content-header {
    .content-tags {
      @apply border-0 py-1;
    }
  }

  .editor-stage:has(.backlink-sidebar.is-visible) {
    @apply max-w-none pr-0;
  }
}

.editor-surface {
  @apply relative h-full min-h-0 min-w-0 overflow-hidden;

  --editor-bg: var(--editor-surface-bg);
  --scroll-edge-surface: var(--editor-surface-bg);

  box-sizing: border-box;
  background: var(--editor-surface-bg);
  transition: background-color 0.2s ease;
}

.editor-surface--loading {
  pointer-events: none;
}

.editor-error {
  @apply flex flex-col items-center justify-center h-full gap-4 text-red-500;

  .error-icon {
    @apply text-5xl;
  }

  span {
    @apply text-base text-center px-4;
  }

  .custom-button {
    @apply mt-2;
  }
}

.editor-host {
  @apply h-full w-full min-h-0 min-w-0 max-w-full overflow-hidden;

  opacity: 1;
  transition: opacity 0.2s ease;
}

.editor-host--loading {
  pointer-events: none;
  opacity: 0;
}

.editor-surface :deep(.editor-container),
.editor-surface :deep(.editor-content) {
  background-color: var(--editor-surface-bg);
}

@media (prefers-reduced-motion: reduce) {
  .editor-host {
    transition-duration: 0.01ms;
  }
}
</style>
