<template>
  <main
    class="markdown-editor relative flex h-full min-h-0 min-w-0 overflow-clip rounded-b-[var(--workspace-panel-radius)]"
    :class="{ 'dark-theme': dark }"
    :style="{ ...codeStyle, '--markdown-line-height': String(lineHeight) }"
  >
    <div class="relative flex min-h-0 min-w-0 flex-1 flex-col">
      <div
        v-show="viewMode !== 'reading'"
        ref="host"
        class="md-editing min-h-0 flex-1 overflow-hidden"
        :class="{ 'md-source': viewMode === 'source' }"
        @contextmenu="openContextMenu"
      ></div>
      <MarkdownPreview
        v-if="viewMode === 'reading'"
        ref="readingPreview"
        class="md-reading min-h-0 flex-1 overflow-auto"
        :content="source"
        :workspace-root="workspaceRoot"
        :note-file-path="String(currentFragmentId ?? '')"
        :attachment-config="attachmentConfig"
        :dark="dark"
        :line-height="lineHeight"
        @wikilink-click="emit('wikilink-click', $event)"
        @scroll.passive="emitScroll"
      />
      <TableToolbar
        :info="viewMode === 'preview' && !disabled ? tableToolbarInfo : null"
        :view="view"
        :dark="dark"
        @command="tableCommand"
        @resize="resizeActiveTable"
      />
      <SearchPanel
        ref="searchPanel"
        :show="showSearch"
        :dark="dark"
        @close="closeSearch"
        @search="handleSearch"
        @next="searchNext"
        @previous="searchPrevious"
      />
      <EditorActions
        v-if="showEditorActions"
        :view-mode="viewMode"
        @outline-click="toggleOutline"
        @reading-mode-click="setViewMode('reading')"
        @editing-mode-click="setViewMode('preview')"
      />
      <EditorStatusBar
        :word-count="wordCount"
        :char-count="source.length"
        :view-mode="viewMode"
        :show-view-toggle="showViewToggle"
        :show-backlink-button="!!currentTitle"
        :backlink-count="backlinkCount"
        :document-properties="documentProperties"
        :dark="dark"
        @view-mode-change="setViewMode"
        @toggle-backlinks="toggleBacklinks"
      />
    </div>
    <OutlinePanel
      :inert="!showOutline"
      :aria-hidden="!showOutline"
      :show="showOutline"
      :headings="headings"
      :dark="dark"
      :current-pos="cursor"
      :visible-heading-index="visibleHeadingIndex"
      @close="toggleOutline"
      @heading-click="scrollToPosition"
      @update-visible-heading="updateVisibleHeading"
    />
    <BacklinkPanel
      :show="showBacklinks"
      :dark="dark"
      :current-title="currentTitle"
      :current-fragment-id="currentFragmentId"
      @close="closeBacklinks"
      @navigate="handleBacklinkNavigate"
    />
    <EditorContextMenu
      ref="contextMenu"
      :commands="menuCommands"
      :is-active="isActive"
      :dark="dark"
      :view-mode="viewMode"
      :image="imageMenu ? { scale: imageScale, allImages } : undefined"
      @request-insert-table="openTableInsert"
      @image-scale="applyImageScale"
      @image-scope-change="allImages = $event"
      @image-action="handleImageAction"
    />
    <TableSizeDialog
      v-model="tableDialog"
      :mode="tableDialogMode"
      :initial-rows="tableRows"
      :initial-columns="tableColumns"
      @confirm="applyTableSize"
    />
    <PromptDialog
      v-model="imageDialog"
      :title="t('settings.attachment.imageScale')"
      :message="t('settings.attachment.imageScaleRange')"
      :initial-value="String(imageScale)"
      :max-length="3"
      :validator="validateImageScale"
      width="420px"
      @confirm="applyImageScale(Number($event))"
    />
    <PromptDialog
      v-model="codeLanguageDialog"
      :title="t('codeBlock.editLanguageTitle')"
      :placeholder="t('codeBlock.editLanguagePlaceholder')"
      :initial-value="codeLanguage"
      :max-length="32"
      :validator="validateCodeLanguage"
      @confirm="applyCodeLanguage"
    />
  </main>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  Compartment,
  EditorState,
  Text,
  type Extension
} from '@codemirror/state';
import {
  EditorView,
  Decoration,
  ViewPlugin,
  type ViewUpdate,
  keymap,
  drawSelection,
  dropCursor,
  placeholder as editorPlaceholder
} from '@codemirror/view';
import {
  history,
  historyKeymap,
  defaultKeymap,
  indentMore,
  indentLess,
  redo,
  isolateHistory
} from '@codemirror/commands';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import {
  syntaxHighlighting,
  defaultHighlightStyle,
  bracketMatching,
  syntaxTree
} from '@codemirror/language';
import {
  search,
  SearchQuery,
  setSearchQuery,
  findNext,
  findPrevious,
  getSearchQuery
} from '@codemirror/search';
import { PromptDialog, SearchPanel } from '@/components/UI';
import EditorContextMenu from '@/components/UI/EditorContextMenu.vue';
import type { EditorMenuCommands } from '@/components/UI/editorMenu';
import EditorStatusBar from '@/components/UI/EditorStatusBar.vue';
import EditorActions from './components/EditorActions.vue';
import OutlinePanel from './components/OutlinePanel.vue';
import BacklinkPanel from './components/BacklinkPanel.vue';
import TableSizeDialog from './components/TableSizeDialog.vue';
import TableToolbar from './TableToolbar.vue';
import MarkdownPreview from '@/components/MarkdownPreview/index.vue';
import { focusTableCell, tableCellAt } from './table';
import { useEditorBacklinks } from './useEditorBacklinks';
import {
  createStickyHeadingTracker,
  stickyHeadingRanges
} from './stickyHeadings';
import { resolveImageFilePath } from './imagePath';
import { renderNoteMarkdown } from '@/utils/markdown';
import { markdownClipboardText } from './clipboard';
import { getWorkspaceRoot } from '@/api/markdown';
import {
  DEFAULT_ATTACHMENT_CONFIG,
  getAttachmentConfig,
  ATTACHMENT_CONFIG_UPDATED_EVENT
} from '@/plugins/attachments/api';
import { uploadImage } from '@/plugins/attachments/image-upload';
import { formatCodeText } from '@/utils/codeFormatter';
import { createPairedBraceEnterEdit } from '@/utils/pairedBraceEnter';
import modal from '@/utils/modal';
import {
  ancestorAt,
  clearSelectionFormatting,
  createDocumentState,
  extractHeadings,
  insertFencedCodeBlock,
  insertMarkdownNewline,
  prefixSelection,
  selectionIsCurrent,
  wrapSelection,
  type DocumentSelection,
  type ViewMode
} from './document';
import {
  livePreview,
  previewTarget,
  previewTargets,
  type PreviewTarget,
  type CodeTarget
} from './preview';
import {
  createTable,
  imageMarkdown,
  parseTable,
  resizeTable,
  scaleImageSource,
  serializeTable,
  tableCellRanges,
  alignTable,
  type MarkdownTable
} from './blocks';

interface Props {
  content?: string;
  currentFragmentId?: number | string;
  currentTitle?: string;
  dark?: boolean;
  codeStyle?: CSSProperties;
  lineHeight?: number;
  disabled?: boolean;
  autofocus?: boolean;
  placeholder?: string;
  showViewToggle?: boolean;
  showEditorActions?: boolean;
  stickyHeadings?: boolean;
  documentProperties?: Array<{ label: string; value: string }>;
}
const props = withDefaults(defineProps<Props>(), {
  content: '',
  currentTitle: '',
  dark: false,
  codeStyle: () => ({}),
  lineHeight: 1.6,
  disabled: false,
  autofocus: false,
  placeholder: '',
  showViewToggle: true,
  showEditorActions: true,
  stickyHeadings: false
});
const emit = defineEmits<{
  'update:content': [value: string];
  ready: [];
  'wikilink-click': [title: string];
  'view-mode-change': [mode: ViewMode];
  'outline-toggle': [visible: boolean];
  'backlink-navigate': [id: string | number, title: string];
  'scroll-position': [top: number];
  'sticky-heading-change': [heading: string | null];
}>();
const { t, locale } = useI18n();
const host = ref<HTMLElement>();
const readingPreview = ref<InstanceType<typeof MarkdownPreview>>();
const readingHost = computed(() => readingPreview.value?.getElement());
const source = ref(props.content);
const viewMode = ref<ViewMode>('preview');
const workspaceRoot = ref('');
const showOutline = ref(false);
const cursor = ref(0);
const headings = shallowRef<
  Array<{ level: number; text: string; pos: number }>
>([]);
const visibleHeadingIndex = ref(-1);
const attachmentConfig = ref({ ...DEFAULT_ATTACHMENT_CONFIG });
const searchPanel = ref<InstanceType<typeof SearchPanel>>();
const showSearch = ref(false);
const contextMenu = ref<InstanceType<typeof EditorContextMenu>>();
let view: EditorView | undefined;
let documentId = String(props.currentFragmentId ?? '');
let revision = 0;
let disposed = false;
const stickyRanges = computed(() =>
  props.stickyHeadings && view
    ? stickyHeadingRanges(view.state, headings.value)
    : []
);
const stickyHeadingTracker = createStickyHeadingTracker({
  editor: () => view,
  readingHost: () => readingHost.value,
  mode: () => viewMode.value,
  headings: () => stickyRanges.value,
  onChange: (heading) => emit('sticky-heading-change', heading)
});
const modeCompartment = new Compartment();
const editableCompartment = new Compartment();
const themeCompartment = new Compartment();
const pendingUploads = new Set<{ documentId: string; position: number }>();
const wordCount = computed(
  () => (source.value.match(/[\u4e00-\u9fa5]|[a-zA-Z0-9]+/g) || []).length
);
const {
  showBacklinks,
  backlinkCount,
  toggleBacklinks,
  closeBacklinks,
  handleBacklinkNavigate
} = useEditorBacklinks({
  currentTitle: toRef(props, 'currentTitle'),
  currentFragmentId: toRef(props, 'currentFragmentId'),
  emitNavigate: (id, title) => emit('backlink-navigate', id, title)
});

const tableDialog = ref(false);
const tableDialogMode = ref<'insert' | 'resize'>('insert');
const tableRows = ref(4);
const tableColumns = ref(3);
const activeTable = shallowRef<PreviewTarget | null>(null);
const activeTableModel = computed(() => {
  const target = activeTable.value;
  return target ? parseTable(target.source, target.prefix) : null;
});
const tableToolbarInfo = computed(() => {
  const target = activeTable.value;
  if (!target) return null;
  const table = activeTableModel.value;
  if (!table) return null;
  const cell = tableCellAt(target, cursor.value);
  const alignments = table.alignments.map((alignment) => alignment || 'left');
  return {
    from: target.from,
    rows: table.rows.length,
    columns: table.alignments.length,
    alignment: alignments[cell.column],
    tableAlignment: alignments.every((alignment) => alignment === alignments[0])
      ? alignments[0]
      : null
  };
});
const imageDialog = ref(false);
const imageMenu = ref(false);
const imageScale = ref(100);
const allImages = ref(false);
const codeLanguageDialog = ref(false);
const codeLanguage = ref('');
let codeTarget: (CodeTarget & { documentId: string; revision: number }) | null =
  null;
function validateCodeLanguage(value: string) {
  return /^[a-zA-Z0-9#+._-]*$/.test(value)
    ? { valid: true }
    : { valid: false, message: t('codeBlock.invalidLanguage') };
}
function openCodeLanguage(target: CodeTarget) {
  codeTarget = { ...target, documentId, revision };
  codeLanguage.value =
    target.source.replace(/^[ \t]*(?:`{3,}|~{3,})[ \t]*/, '').split('\n')[0] ||
    '';
  codeLanguageDialog.value = true;
}
function applyCodeLanguage(language: string) {
  if (
    !view ||
    !codeTarget ||
    view.state.readOnly ||
    codeTarget.documentId !== documentId ||
    codeTarget.revision !== revision
  )
    return;
  const line = view.state.doc.lineAt(codeTarget.from);
  const prefix = /^(\s*(?:`{3,}|~{3,}))/.exec(line.text)?.[1];
  if (!prefix) return;
  view.dispatch({
    changes: { from: line.from, to: line.to, insert: prefix + language },
    userEvent: 'input'
  });
  codeLanguageDialog.value = false;
}
async function copyCode(code: string) {
  try {
    await navigator.clipboard.writeText(code);
    modal.success(t('content.copySuccess'));
  } catch {
    modal.error(t('content.copyFailed'));
  }
}
let dialogTarget:
  | (PreviewTarget & { documentId: string; revision: number })
  | null = null;

function openImage(target: PreviewTarget, event: MouseEvent) {
  if (!view || view.state.readOnly) return;
  dialogTarget = { ...target, documentId, revision };
  imageScale.value =
    Number(/data-image-scale=["'](\d+)/.exec(target.source)?.[1]) ||
    attachmentConfig.value.defaultImageScalePercent;
  allImages.value = false;
  imageMenu.value = true;
  contextMenu.value?.show(event);
}
function previewExtension(): Extension {
  return viewMode.value === 'preview'
    ? livePreview({
        workspaceRoot: workspaceRoot.value,
        noteFilePath: documentId,
        onImage: openImage,
        onLink: openLink,
        tableCellLabel: (row, column) =>
          t('contextMenu.tableCell', { row, column }),
        onTableCommand: tableCommand,
        imageScale: attachmentConfig.value.defaultImageScalePercent,
        responsiveImages: attachmentConfig.value.responsiveImages,
        showImagePath: attachmentConfig.value.showImagePath,
        onCodeLanguage: openCodeLanguage,
        onCopyCode: copyCode,
        codeLanguageLabel: t('codeBlock.editLanguageTitle'),
        copyCodeLabel: t('common.copy'),
        plainTextLabel: t('codeBlock.plainText')
      })
    : [];
}
function reconfigurePreview() {
  view?.dispatch({ effects: modeCompartment.reconfigure(previewExtension()) });
}
watch(locale, reconfigurePreview);
function getMarkdown() {
  return source.value;
}
function getSelection(): DocumentSelection | null {
  if (!view || viewMode.value === 'reading') return null;
  const { from, to } = view.state.selection.main;
  return {
    from,
    to,
    text: view.state.sliceDoc(from, to),
    documentId,
    revision
  };
}
function replaceSelection(
  value: string,
  selection?: DocumentSelection
): boolean {
  if (!view || view.state.readOnly) return false;
  const target = selection || getSelection();
  if (!target || !selectionIsCurrent(target, documentId, revision))
    return false;
  view.dispatch({
    changes: { from: target.from, to: target.to, insert: value },
    selection: { anchor: target.from + view.state.toText(value).length },
    scrollIntoView: true,
    annotations: isolateHistory.of('full'),
    userEvent: 'input'
  });
  view.focus();
  return true;
}
function replaceDocument(content: string): boolean {
  if (!view || view.state.readOnly) return false;
  if (content === source.value) return true;
  return replaceSelection(content, {
    from: 0,
    to: view.state.doc.length,
    text: source.value,
    documentId,
    revision
  });
}
function updateDerivedState(update?: ViewUpdate) {
  if (!view) return;
  if (
    !update ||
    update.docChanged ||
    syntaxTree(update.startState) !== syntaxTree(update.state)
  )
    headings.value = extractHeadings(view.state);
  cursor.value = view.state.selection.main.head;
  const node = ancestorAt(view.state, ['Table']);
  const previous = activeTable.value;
  if (!node) activeTable.value = null;
  else if (
    !update ||
    !previous ||
    previous.from !== node.from ||
    previous.to !== node.to ||
    update?.docChanged
  )
    activeTable.value = previewTarget(view.state, 'table', node.from, node.to);
  updateSearchCount();
}
function extensions(): Extension[] {
  return [
    history(),
    drawSelection(),
    dropCursor(),
    bracketMatching(),
    EditorView.lineWrapping,
    editorPlaceholder(props.placeholder),
    search(),
    ViewPlugin.define(
      (editor) => ({
        decorations: searchHighlights(editor),
        update(update: ViewUpdate) {
          if (
            update.docChanged ||
            update.selectionSet ||
            update.viewportChanged ||
            getSearchQuery(update.startState) !== getSearchQuery(update.state)
          )
            this.decorations = searchHighlights(update.view);
        }
      }),
      { decorations: (plugin) => plugin.decorations }
    ),
    themeCompartment.of([
      EditorView.theme({}, { dark: props.dark }),
      syntaxHighlighting(
        props.dark ? oneDarkHighlightStyle : defaultHighlightStyle
      )
    ]),
    modeCompartment.of(previewExtension()),
    editableCompartment.of([
      EditorState.readOnly.of(props.disabled || viewMode.value === 'reading'),
      EditorView.editable.of(!props.disabled && viewMode.value !== 'reading')
    ]),
    keymap.of([
      { key: 'Mod-Shift-z', run: redo },
      {
        key: 'Mod-f',
        run: () => {
          openSearch();
          return true;
        }
      },
      {
        key: 'Escape',
        run: () => {
          if (!showSearch.value) return false;
          closeSearch();
          return true;
        }
      },
      {
        key: 'Mod-b',
        run: () => {
          menuCommands.toggleBold();
          return true;
        }
      },
      {
        key: 'Mod-i',
        run: () => {
          menuCommands.toggleItalic();
          return true;
        }
      },
      {
        key: 'Enter',
        run: (editor) => {
          if (editor.state.readOnly) return false;
          if (viewMode.value === 'preview' && activeTable.value) {
            const target = activeTable.value;
            const cell = tableCellAt(target, editor.state.selection.main.head);
            focusTableCell(editor, target, cell.row, cell.column);
            return true;
          }
          const selection = editor.state.selection.main;
          const edit =
            selection.empty &&
            ancestorAt(editor.state, ['FencedCode', 'CodeBlock'])
              ? createPairedBraceEnterEdit(
                  editor.state.doc.toString(),
                  selection.from,
                  '  '
                )
              : null;
          if (edit) {
            editor.dispatch({
              changes: {
                from: selection.from,
                insert: Text.of(edit.insert.split('\n'))
              },
              selection: { anchor: selection.from + edit.cursorOffset },
              scrollIntoView: true,
              userEvent: 'input'
            });
            return true;
          }
          return insertMarkdownNewline(editor);
        }
      },
      {
        key: 'Shift-Enter',
        run: (editor) => {
          if (editor.state.readOnly) return false;
          editor.dispatch({
            ...editor.state.replaceSelection(
              Text.of([
                ancestorAt(editor.state, ['FencedCode', 'CodeBlock'])
                  ? ''
                  : '\\',
                ''
              ])
            ),
            scrollIntoView: true,
            userEvent: 'input'
          });
          return true;
        }
      },
      {
        key: 'Mod-Enter',
        run: (editor) => {
          const code = ancestorAt(editor.state, ['FencedCode']);
          if (editor.state.readOnly) return false;
          if (!code) {
            if (!activeTable.value) return false;
            tableCommand('addRowAfter');
            return true;
          }
          const end = code.to;
          editor.dispatch({
            changes: { from: end, insert: Text.of(['', '', '']) },
            selection: { anchor: end + 2 },
            scrollIntoView: true
          });
          return true;
        }
      },
      {
        key: 'Mod-a',
        run: (editor) => {
          const code = ancestorAt(editor.state, ['FencedCode', 'CodeBlock']);
          if (!code) return false;
          const body = code.getChild('CodeText');
          const from = body?.from ?? editor.state.doc.lineAt(code.from).to;
          editor.dispatch({
            selection: { anchor: from, head: body?.to ?? from }
          });
          return true;
        }
      },
      {
        key: 'Mod-Shift-a',
        run: (editor) => {
          if (!ancestorAt(editor.state, ['FencedCode', 'CodeBlock']))
            return false;
          const line = editor.state.doc.lineAt(
            editor.state.selection.main.head
          );
          editor.dispatch({ selection: { anchor: line.from, head: line.to } });
          return true;
        }
      },
      {
        key: 'Tab',
        run: (editor) => {
          if (editor.state.readOnly) return false;
          if (viewMode.value === 'preview' && activeTable.value) {
            const cell = tableCellAt(
              activeTable.value,
              editor.state.selection.main.head
            );
            focusTableCell(editor, activeTable.value, cell.row, cell.column);
            return true;
          }
          if (!editor.state.selection.main.empty) return indentMore(editor);
          editor.dispatch(editor.state.replaceSelection('  '));
          return true;
        }
      },
      {
        key: 'Shift-Tab',
        run: (editor) => {
          if (editor.state.readOnly) return false;
          const { from, empty } = editor.state.selection.main;
          if (!empty) return indentLess(editor);
          const line = editor.state.doc.lineAt(from);
          const spaces = /(?: {1,2}|\t)$/.exec(
            editor.state.sliceDoc(line.from, from)
          );
          if (spaces)
            editor.dispatch({
              changes: { from: from - spaces[0].length, to: from },
              selection: { anchor: from - spaces[0].length },
              userEvent: 'input'
            });
          return true;
        }
      },
      ...defaultKeymap,
      ...historyKeymap
    ]),
    EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        contextMenu.value?.hide();
        imageDialog.value = false;
        for (const upload of pendingUploads)
          upload.position = update.changes.mapPos(upload.position, 1);
        revision++;
        source.value = update.state.sliceDoc();
        emit('update:content', source.value);
      }
      if (
        update.docChanged ||
        update.selectionSet ||
        syntaxTree(update.startState) !== syntaxTree(update.state) ||
        getSearchQuery(update.startState) !== getSearchQuery(update.state)
      )
        updateDerivedState(update);
      if (
        update.docChanged ||
        update.geometryChanged ||
        syntaxTree(update.startState) !== syntaxTree(update.state)
      )
        stickyHeadingTracker.schedule();
      if (
        update.selectionSet &&
        update.state.selection.main.empty &&
        viewMode.value === 'preview' &&
        activeTable.value &&
        document.activeElement === update.view.contentDOM
      ) {
        const target = activeTable.value;
        const cell = tableCellAt(target, update.state.selection.main.head);
        const range = tableCellRanges(target.source, target.prefix)[cell.row]?.[
          cell.column
        ];
        queueMicrotask(() => {
          if (
            view?.state === update.state &&
            range &&
            document.activeElement === view.contentDOM
          )
            focusTableCell(
              view,
              target,
              cell.row,
              cell.column,
              Math.max(
                0,
                update.state.selection.main.head - target.from - range.from
              )
            );
        });
      }
    }),
    EditorView.domEventHandlers({
      scroll: () => {
        emitScroll();
        return false;
      },
      paste: (event, editor) => {
        if (editor.state.readOnly) return false;
        const data = event.clipboardData;
        const files = Array.from(data?.files || []).filter((file) =>
          file.type.startsWith('image/')
        );
        if (files.length) {
          event.preventDefault();
          void insertImages(files);
          return true;
        }
        if (!data) return false;
        try {
          const value = markdownClipboardText(
            data,
            Boolean(ancestorAt(editor.state, ['FencedCode', 'CodeBlock']))
          );
          if (value) {
            event.preventDefault();
            replaceSelection(value);
            return true;
          }
        } catch (error) {
          console.warn('[MarkdownEditor] Rich clipboard fallback:', error);
        }
        return false;
      },
      drop: (event, editor) => {
        const files = Array.from(event.dataTransfer?.files || []).filter(
          (file) => file.type.startsWith('image/')
        );
        if (!files.length || editor.state.readOnly) return false;
        event.preventDefault();
        const position = editor.posAtCoords({
          x: event.clientX,
          y: event.clientY
        });
        if (position !== null)
          editor.dispatch({ selection: { anchor: position } });
        void insertImages(files);
        return true;
      }
    })
  ];
}
function loadDocument(content: string, id: string) {
  if (!view) return;
  stickyHeadingTracker.reset();
  documentId = id;
  revision++;
  source.value = content;
  pendingUploads.clear();
  imageDialog.value = false;
  imageMenu.value = false;
  contextMenu.value?.hide();
  tableDialog.value = false;
  dialogTarget = null;
  view.setState(createDocumentState(content, extensions()));
  view.scrollDOM.scrollTop = 0;
  updateDerivedState();
  nextTick(() => {
    if (!disposed) stickyHeadingTracker.connect();
  });
}
function setMarkdown(content: string) {
  if (content !== source.value) loadDocument(content, documentId);
}
function setViewMode(mode: ViewMode) {
  if (!view || mode === viewMode.value) return;
  stickyHeadingTracker.reset();
  contextMenu.value?.hide();
  imageDialog.value = false;
  const scrollTop = getScrollPosition();
  viewMode.value = mode;
  view.dispatch({
    effects: [
      modeCompartment.reconfigure(previewExtension()),
      editableCompartment.reconfigure([
        EditorState.readOnly.of(props.disabled || mode === 'reading'),
        EditorView.editable.of(!props.disabled && mode !== 'reading')
      ])
    ]
  });
  emit('view-mode-change', mode);
  nextTick(() => {
    if (disposed) return;
    setScrollPosition(scrollTop);
    stickyHeadingTracker.connect();
    view?.requestMeasure();
    if (view && mode === 'preview' && activeTable.value) {
      const target = activeTable.value;
      const cell = tableCellAt(target, view.state.selection.main.head);
      const range = tableCellRanges(target.source, target.prefix)[cell.row]?.[
        cell.column
      ];
      if (range)
        focusTableCell(
          view,
          target,
          cell.row,
          cell.column,
          Math.max(0, view.state.selection.main.head - target.from - range.from)
        );
    }
  });
}
function toggleOutline() {
  showOutline.value = !showOutline.value;
  emit('outline-toggle', showOutline.value);
}
function scrollToPosition(position: number) {
  if (!view) return;
  if (viewMode.value === 'reading') {
    const index = headings.value.findIndex(
      (heading) => heading.pos === position
    );
    const element = readingHost.value?.querySelectorAll('h1,h2,h3,h4,h5,h6')[
      index
    ] as HTMLElement | undefined;
    element?.scrollIntoView({ block: 'start' });
    return;
  }
  view.dispatch({
    selection: {
      anchor: Math.max(0, Math.min(position, view.state.doc.length))
    },
    effects: EditorView.scrollIntoView(position, { y: 'start' })
  });
  view.focus();
}
function getScrollPosition() {
  return (
    (viewMode.value === 'reading' ? readingHost.value : view?.scrollDOM)
      ?.scrollTop || 0
  );
}
function setScrollPosition(top: number) {
  const element =
    viewMode.value === 'reading' ? readingHost.value : view?.scrollDOM;
  if (element) element.scrollTop = top;
  stickyHeadingTracker.schedule();
}
function emitScroll() {
  emit('scroll-position', getScrollPosition());
  updateVisibleHeading();
  stickyHeadingTracker.schedule();
}
function updateVisibleHeading() {
  if (!view || viewMode.value === 'reading') return;
  const rect = view.scrollDOM.getBoundingClientRect();
  const pos =
    view.posAtCoords({ x: rect.left + 30, y: rect.top + 20 }) ?? cursor.value;
  visibleHeadingIndex.value = -1;
  for (let index = headings.value.length - 1; index >= 0; index--) {
    if (headings.value[index].pos <= pos) {
      visibleHeadingIndex.value = index;
      break;
    }
  }
}
function scrollToWikilink(title: string) {
  if (!view) return;
  let position = -1;
  syntaxTree(view.state).iterate({
    enter(node) {
      if (
        node.name === 'WikiLink' &&
        view!.state.doc.sliceString(node.from + 2, node.to - 2) === title &&
        position < 0
      )
        position = node.from;
    }
  });
  if (position >= 0) {
    if (viewMode.value === 'reading') setViewMode('preview');
    scrollToPosition(position);
  }
}
async function openLink(href: string, wiki: boolean) {
  if (wiki) {
    emit('wikilink-click', href);
    return;
  }
  if (href.startsWith('#')) {
    let title: string;
    try {
      title = decodeURIComponent(href.slice(1));
    } catch {
      title = href.slice(1);
    }
    const heading = headings.value.find(
      (item) =>
        item.text === title ||
        item.text.toLowerCase().replace(/\s+/g, '-') === title
    );
    if (heading) scrollToPosition(heading.pos);
    return;
  }
  if (!/^https?:\/\//i.test(href)) return;
  const { openUrl } = await import('@tauri-apps/plugin-opener');
  await openUrl(href).catch((error) => modal.error(String(error)));
}
function openSearch() {
  if (viewMode.value === 'reading') setViewMode('preview');
  showSearch.value = true;
  nextTick(() => searchPanel.value?.focus());
}
function searchHighlights(editor: EditorView) {
  const query = getSearchQuery(editor.state);
  if (!query.valid) return Decoration.none;
  const ranges = [];
  for (const { from, to } of editor.visibleRanges) {
    const cursor = query.getCursor(editor.state, from, to);
    for (let match = cursor.next(); !match.done; match = cursor.next()) {
      const selected = editor.state.selection.ranges.some(
        (range) =>
          range.from === match.value.from && range.to === match.value.to
      );
      ranges.push(
        Decoration.mark({
          class: selected
            ? 'cm-searchMatch cm-searchMatch-selected'
            : 'cm-searchMatch'
        }).range(match.value.from, match.value.to)
      );
    }
  }
  return Decoration.set(ranges, true);
}
function closeSearch() {
  showSearch.value = false;
  view?.dispatch({
    effects: setSearchQuery.of(new SearchQuery({ search: '' }))
  });
  view?.focus();
}
function handleSearch(text: string, matchCase: boolean) {
  view?.dispatch({
    effects: setSearchQuery.of(
      new SearchQuery({ search: text, caseSensitive: matchCase, literal: true })
    )
  });
}
let searchDocument: EditorState['doc'] | undefined;
let searchQuery: SearchQuery | undefined;
let searchPositions: number[] = [];
function updateSearchCount() {
  if (!view) return;
  const query = getSearchQuery(view.state);
  if (searchDocument !== view.state.doc || searchQuery !== query) {
    searchDocument = view.state.doc;
    searchQuery = query;
    searchPositions = [];
    if (query.valid) {
      const matches = query.getCursor(view.state);
      for (let result = matches.next(); !result.done; result = matches.next())
        searchPositions.push(result.value.from);
    }
  }
  // Cursor navigation only searches cached positions; it never scans the text.
  let first = 0,
    last = searchPositions.length;
  while (first < last) {
    const middle = (first + last) >>> 1;
    if (searchPositions[middle] <= view.state.selection.main.from)
      first = middle + 1;
    else last = middle;
  }
  searchPanel.value?.updateMatchInfo(first - 1, searchPositions.length);
}
function searchNext() {
  if (view) findNext(view);
}
function searchPrevious() {
  if (view) findPrevious(view);
}
function isActive(name: string, attrs?: Record<string, unknown>) {
  if (!view) return false;
  const names: Record<string, string[]> = {
    bold: ['StrongEmphasis'],
    italic: ['Emphasis'],
    strike: ['Strikethrough'],
    code: ['InlineCode'],
    codeBlock: ['FencedCode', 'CodeBlock'],
    bulletList: ['BulletList'],
    orderedList: ['OrderedList'],
    taskList: ['Task'],
    blockquote: ['Blockquote'],
    paragraph: ['Paragraph'],
    heading: [`ATXHeading${attrs?.level}`, `SetextHeading${attrs?.level}`]
  };
  return Boolean(ancestorAt(view.state, names[name] || []));
}
function openContextMenu(event: MouseEvent) {
  imageMenu.value = false;
  if (
    view &&
    !view.state.readOnly &&
    !(event.target as HTMLElement).closest('.md-preview-table')
  ) {
    const position = view.posAtCoords({ x: event.clientX, y: event.clientY });
    const { from, to, empty } = view.state.selection.main;
    if (position !== null && (empty || position < from || position > to))
      view.dispatch({ selection: { anchor: position } });
  }
  contextMenu.value?.show(event);
}
const wrap = (before: string, after = before) => {
  if (view) wrapSelection(view, before, after);
};
const prefix = (value: string) => {
  if (view) prefixSelection(view, value);
};
async function pasteText() {
  const selection = getSelection();
  try {
    const value = await navigator.clipboard.readText();
    if (selection) replaceSelection(value, selection);
  } catch (error) {
    modal.error(String(error));
  }
}
async function formatCurrentCode() {
  if (!view || view.state.readOnly) return;
  const node = ancestorAt(view.state, ['FencedCode']);
  const code = node?.getChild('CodeText');
  if (!code) return;
  const selection = {
    from: code.from,
    to: code.to,
    text: view.state.sliceDoc(code.from, code.to),
    documentId,
    revision
  };
  const languageNode = node?.getChild('CodeInfo');
  const language = languageNode
    ? view.state.doc.sliceString(languageNode.from, languageNode.to)
    : null;
  try {
    const result = await formatCodeText(selection.text, {
      language,
      tabSize: 2
    });
    if (result.supported)
      replaceSelection(result.formatted.replace(/\n$/, ''), selection);
    else modal.warning(t('codeEditor.formatUnsupported'));
  } catch (error) {
    modal.error(String(error));
  }
}
const menuCommands: EditorMenuCommands = {
  toggleBold: () => wrap('**'),
  toggleItalic: () => wrap('*'),
  toggleStrike: () => wrap('~~'),
  toggleCode: () => wrap('`'),
  clearFormat: () => {
    if (view) clearSelectionFormatting(view);
  },
  toggleBulletList: () => prefix('- '),
  toggleOrderedList: () => prefix('1. '),
  toggleTaskList: () => prefix('- [ ] '),
  setHeading: (level) => prefix('#'.repeat(level) + ' '),
  setParagraph: () => prefix(''),
  toggleBlockquote: () => prefix('> '),
  insertCodeBlock: () => {
    if (view) insertFencedCodeBlock(view);
  },
  formatCodeBlock: formatCurrentCode,
  insertHorizontalRule: () => {
    replaceSelection('\n\n---\n\n');
  },
  handleAddLink: () => wrap('[[', ']]'),
  handleAddExternalLink: () => {
    const selection = getSelection();
    if (!selection) return;
    if (replaceSelection(`[${selection.text}]()`, selection))
      view?.dispatch({
        selection: {
          anchor:
            selection.from + (selection.text ? selection.text.length + 3 : 1)
        }
      });
  },
  handlePaste: pasteText,
  handlePasteAsPlainText: pasteText,
  handleSelectAll: () => {
    if (view) {
      view.dispatch({ selection: { anchor: 0, head: view.state.doc.length } });
      view.focus();
    }
  }
};
function openTableInsert() {
  dialogTarget = null;
  tableDialogMode.value = 'insert';
  tableRows.value = 4;
  tableColumns.value = 3;
  tableDialog.value = true;
}
function targetIsCurrent() {
  return (
    dialogTarget &&
    dialogTarget.documentId === documentId &&
    dialogTarget.revision === revision
  );
}
function applyTableSize(size: { rows: number; columns: number }) {
  if (tableDialogMode.value === 'insert') {
    const selection = getSelection();
    if (!selection) return;
    const content = createTable(size.rows, size.columns);
    if (replaceSelection('\n\n' + content + '\n\n')) {
      const target: PreviewTarget = {
        kind: 'table',
        from: selection.from + 2,
        to: selection.from + 2 + content.length,
        source: content
      };
      if (viewMode.value === 'preview')
        nextTick(() => view && focusTableCell(view, target, 0, 0));
    }
    return;
  }
  if (!targetIsCurrent() || !dialogTarget) return;
  const table = parseTable(dialogTarget.source, dialogTarget.prefix);
  if (table)
    replaceTable(dialogTarget, resizeTable(table, size.rows, size.columns));
}
function resizeActiveTable(size: { rows: number; columns: number }) {
  const target = activeTable.value;
  if (!target || !view || view.state.readOnly) return;
  const table = parseTable(target.source, target.prefix);
  if (table) replaceTable(target, resizeTable(table, size.rows, size.columns));
}
function replaceTable(
  target: PreviewTarget,
  table: MarkdownTable,
  row?: number,
  column?: number
) {
  if (
    !view ||
    view.state.readOnly ||
    view.state.doc.sliceString(target.from, target.to) !== target.source
  )
    return;
  const restoreFocus =
    !view.dom.contains(document.activeElement) ||
    !(document.activeElement instanceof HTMLTextAreaElement);
  const current = tableCellAt(target, view.state.selection.main.head);
  row = Math.min(row ?? current.row, table.rows.length - 1);
  column = Math.min(column ?? current.column, table.alignments.length - 1);
  const content = serializeTable(table, target.prefix);
  const position = tableCellRanges(content, target.prefix)[row][column].from;
  view.dispatch({
    changes: { from: target.from, to: target.to, insert: content },
    selection: { anchor: target.from + position },
    annotations: isolateHistory.of('full'),
    userEvent: 'input'
  });
  if (viewMode.value === 'preview' && restoreFocus) {
    const next = {
      ...target,
      source: content,
      to: target.from + content.length
    };
    nextTick(() => view && focusTableCell(view, next, row!, column!));
  }
}
function replaceTarget(target: PreviewTarget, content: string) {
  if (
    !view ||
    view.state.readOnly ||
    view.state.doc.sliceString(target.from, target.to) !== target.source
  )
    return;
  view.dispatch({
    changes: { from: target.from, to: target.to, insert: content },
    selection: { anchor: Math.min(target.from, view.state.doc.length) },
    userEvent: 'input'
  });
}
function tableCommand(command: string) {
  const target = activeTable.value;
  if (!target || !view || view.state.readOnly) return;
  const table = parseTable(target.source, target.prefix);
  if (!table) return;
  const { row: rowIndex, column: columnIndex } = tableCellAt(
    target,
    view.state.selection.main.head
  );
  let nextRow = rowIndex,
    nextColumn = columnIndex;
  if (command === 'resizeTable') {
    dialogTarget = { ...target, documentId, revision };
    tableDialogMode.value = 'resize';
    tableRows.value = table.rows.length;
    tableColumns.value = table.rows[0]?.length || 1;
    tableDialog.value = true;
    return;
  }
  if (command === 'deleteTable') {
    replaceTarget(target, '');
    return;
  }
  if (command === 'addRowBefore' || command === 'addRowAfter') {
    nextRow = Math.max(1, rowIndex + (command === 'addRowAfter' ? 1 : 0));
    table.rows.splice(nextRow, 0, Array(table.rows[0].length).fill(''));
  }
  if (command === 'deleteRow') {
    if (table.rows.length <= 1) {
      replaceTarget(target, '');
      return;
    }
    table.rows.splice(rowIndex, 1);
  }
  if (command === 'addColumnBefore' || command === 'addColumnAfter') {
    const index = columnIndex + (command === 'addColumnAfter' ? 1 : 0);
    nextColumn = index;
    table.rows.forEach((row) => row.splice(index, 0, ''));
    table.alignments.splice(index, 0, null);
  }
  if (command === 'deleteColumn') {
    if (table.rows[0].length <= 1) {
      replaceTarget(target, '');
      return;
    }
    table.rows.forEach((row) => row.splice(columnIndex, 1));
    table.alignments.splice(columnIndex, 1);
  }
  const alignment = /^align(Table)?(Left|Center|Right)$/.exec(command);
  if (alignment) {
    const aligned = alignTable(
      table,
      alignment[2].toLowerCase() as 'left' | 'center' | 'right',
      alignment[1] ? undefined : columnIndex
    );
    const delimiter = serializeTable(aligned, target.prefix).split('\n')[1];
    const line = view.state.doc.line(
      view.state.doc.lineAt(target.from).number + 1
    );
    const cell = tableCellRanges(target.source, target.prefix)[rowIndex]?.[
      columnIndex
    ];
    const offset = cell
      ? Math.max(0, view.state.selection.main.head - target.from - cell.from)
      : 0;
    // Changing just the delimiter preserves cell text, whitespace and cursor
    // mapping through undo/redo; replacing the table maps redo to its end.
    if (line.text !== delimiter)
      view.dispatch({
        changes: { from: line.from, to: line.to, insert: delimiter },
        annotations: isolateHistory.of('full'),
        userEvent: 'input'
      });
    if (
      viewMode.value === 'preview' &&
      !(document.activeElement instanceof HTMLTextAreaElement)
    ) {
      const next = activeTable.value;
      if (next)
        nextTick(
          () =>
            view && focusTableCell(view, next, rowIndex, columnIndex, offset)
        );
    }
    return;
  }
  replaceTable(target, table, nextRow, nextColumn);
}
function validateImageScale(value: string) {
  const scale = Number(value);
  return /^\d+$/.test(value) && scale >= 25 && scale <= 200
    ? { valid: true }
    : { valid: false, message: t('settings.attachment.imageScaleRange') };
}
function handleImageAction(action: 'custom' | 'location' | 'delete') {
  if (!targetIsCurrent()) return;
  if (action === 'custom') imageDialog.value = true;
  else if (action === 'location') void openImageLocation();
  else deleteImage();
}
function applyImageScale(scale: number) {
  if (
    !view ||
    view.state.readOnly ||
    !targetIsCurrent() ||
    !dialogTarget ||
    !Number.isInteger(scale) ||
    scale < 25 ||
    scale > 200
  )
    return;
  const targets = allImages.value
    ? previewTargets(view.state).filter((target) => target.kind === 'image')
    : [dialogTarget];
  const changes = targets
    .map((target) => ({
      from: target.from,
      to: target.to,
      insert: scaleImageSource(target.source, scale)
    }))
    .filter(
      (change) =>
        view!.state.doc.sliceString(change.from, change.to) !== change.insert
    );
  if (changes.length)
    view.dispatch({
      changes,
      annotations: isolateHistory.of('full'),
      userEvent: 'input'
    });
  imageScale.value = scale;
  imageDialog.value = false;
}
function deleteImage() {
  if (targetIsCurrent() && dialogTarget) replaceTarget(dialogTarget, '');
  imageDialog.value = false;
}
async function openImageLocation() {
  if (!targetIsCurrent() || !dialogTarget) return;
  const container = document.createElement('div');
  container.innerHTML = renderNoteMarkdown(
    dialogTarget.source,
    workspaceRoot.value,
    documentId
  );
  const image = container.querySelector('img');
  const path = resolveImageFilePath(
    image?.getAttribute('src'),
    image?.dataset.originalPath,
    workspaceRoot.value
  );
  try {
    if (!path)
      throw new Error(t('settings.attachment.openImageLocationFailed'));
    const { revealItemInDir } = await import('@tauri-apps/plugin-opener');
    await revealItemInDir(path);
  } catch {
    modal.error(t('settings.attachment.openImageLocationFailed'));
  }
}
async function insertImages(files: File[]) {
  if (!view || !props.currentFragmentId) return;
  const upload = { documentId, position: view.state.selection.main.to };
  pendingUploads.add(upload);
  try {
    const results = await Promise.all(
      files.map((file) => uploadImage(file, upload.documentId))
    );
    if (
      disposed ||
      !view ||
      view.state.readOnly ||
      !pendingUploads.has(upload) ||
      documentId !== upload.documentId
    )
      return;
    const markdown = results
      .map((result, index) =>
        imageMarkdown(
          result.relativePath,
          files[index].name,
          attachmentConfig.value.defaultImageScalePercent
        )
      )
      .join('\n\n');
    view.dispatch({
      changes: { from: upload.position, insert: '\n\n' + markdown + '\n\n' },
      scrollIntoView: true,
      userEvent: 'input'
    });
  } catch (error) {
    modal.error(String(error));
  } finally {
    pendingUploads.delete(upload);
  }
}
function onAttachmentConfig(event: Event) {
  attachmentConfig.value = {
    ...DEFAULT_ATTACHMENT_CONFIG,
    ...(event as CustomEvent).detail
  };
  reconfigurePreview();
  nextTick(stickyHeadingTracker.schedule);
}
watch(
  () => props.stickyHeadings,
  (enabled) => stickyHeadingTracker.setEnabled(enabled)
);
watch(
  [() => props.lineHeight, () => props.codeStyle, () => props.dark],
  () => nextTick(stickyHeadingTracker.schedule),
  { deep: true, flush: 'post' }
);
watch(
  () => [props.currentFragmentId, props.content] as const,
  ([id, content]) => {
    if (view && (String(id ?? '') !== documentId || content !== source.value))
      loadDocument(content, String(id ?? ''));
  }
);
watch(
  () => props.dark,
  () =>
    view?.dispatch({
      effects: themeCompartment.reconfigure([
        EditorView.theme({}, { dark: props.dark }),
        syntaxHighlighting(
          props.dark ? oneDarkHighlightStyle : defaultHighlightStyle
        )
      ])
    })
);
watch(
  () => props.disabled,
  () => {
    contextMenu.value?.hide();
    imageDialog.value = false;
    view?.dispatch({
      effects: editableCompartment.reconfigure([
        EditorState.readOnly.of(props.disabled || viewMode.value === 'reading'),
        EditorView.editable.of(!props.disabled && viewMode.value !== 'reading')
      ])
    });
  }
);
onMounted(() => {
  view = new EditorView({
    parent: host.value,
    state: createDocumentState(props.content, extensions())
  });
  updateDerivedState();
  stickyHeadingTracker.setEnabled(props.stickyHeadings);
  emit('ready');
  if (props.autofocus) view.focus();
  window.addEventListener(ATTACHMENT_CONFIG_UPDATED_EVENT, onAttachmentConfig);
  void Promise.all([
    getWorkspaceRoot().catch(() => ''),
    getAttachmentConfig().catch(() => DEFAULT_ATTACHMENT_CONFIG)
  ]).then(([root, config]) => {
    if (disposed) return;
    workspaceRoot.value = root;
    attachmentConfig.value = config;
    reconfigurePreview();
    nextTick(stickyHeadingTracker.schedule);
  });
});
onBeforeUnmount(() => {
  disposed = true;
  stickyHeadingTracker.dispose();
  pendingUploads.clear();
  window.removeEventListener(
    ATTACHMENT_CONFIG_UPDATED_EVENT,
    onAttachmentConfig
  );
  view?.destroy();
  view = undefined;
});
defineExpose({
  getView: () => view,
  getMarkdown,
  setMarkdown,
  getSelection,
  replaceSelection,
  replaceDocument,
  getViewMode: () => viewMode.value,
  setViewMode,
  toggleOutline,
  toggleBacklinks,
  openSearch,
  getScrollPosition,
  setScrollPosition,
  scrollToWikilink
});
</script>

<style lang="scss">
.markdown-editor {
  color: var(--markdown-text);
  background: var(--editor-surface-bg);

  .cm-editor {
    height: 100%;
    background: transparent;
  }

  .cm-editor .cm-scroller {
    overflow: auto;
    font-family: var(--app-document-font-family);
    font-size: var(--markdown-body-size);
    line-height: var(--markdown-line-height);
  }

  .cm-editor .cm-content,
  .md-reading {
    width: min(100%, 1080px);
    padding: var(--editor-content-padding-top)
      var(--editor-content-padding-inline) var(--editor-content-padding-bottom);
    margin-inline: auto;
  }

  .cm-editor .cm-content {
    flex-grow: 0;
    // Keep the text inset outside the selection rectangle's coordinate box.
    width: calc(100% - 2 * var(--editor-content-padding-inline));
    min-height: 100%;
    padding-inline: 0;
    caret-color: var(--markdown-text);
  }

  .cm-editor .cm-line {
    padding: 0;
  }

  .cm-focused {
    outline: none;
  }

  .cm-cursor {
    border-left-color: var(--markdown-text);
  }

  .cm-selectionBackground,
  .cm-focused .cm-selectionBackground {
    background: var(--el-color-primary-light-7) !important;
  }

  .cm-searchMatch {
    background: var(--el-color-warning-light-7);
  }

  .cm-searchMatch-selected {
    background: var(--el-color-warning-light-5);
  }

  .md-source .cm-scroller,
  .md-code-line,
  .md-inline-code {
    font-family: var(--app-code-font-family, monospace);
  }

  // CodeMirror measures each line's border box. External margins are excluded
  // from its height map and make mouse coordinates drift after every heading.
  .cm-editor .cm-line.md-heading {
    margin: 0;
    font-weight: var(--markdown-heading-weight);
    line-height: 1.5;
    color: var(--markdown-heading);
  }

  .md-heading-1 {
    font-size: var(--markdown-h1-size);
  }

  .md-heading-2 {
    font-size: var(--markdown-h2-size);
  }

  .md-heading-3 {
    font-size: var(--markdown-h3-size);
  }

  .md-heading-4,
  .md-heading-5,
  .md-heading-6 {
    font-size: var(--markdown-body-size);
  }

  .md-heading-6 {
    color: var(--markdown-muted);
  }

  .cm-line.md-empty-line {
    line-height: var(--md-empty-height);
  }

  .cm-line.md-heading-underline {
    font-size: 0;
    line-height: 0;
  }

  .md-heading span {
    color: inherit;
    text-decoration: none;
  }

  .md-strong {
    font-weight: var(--markdown-heading-weight);
  }

  .md-emphasis {
    font-style: italic;
  }

  .md-strike {
    text-decoration: line-through;
  }

  .cm-editor .cm-line.md-code-line {
    position: relative;
    padding-inline: 12px;
    font-size: var(--markdown-code-size);
    line-height: var(--markdown-code-line-height);
    border-inline: 1px solid var(--code-block-border);
  }

  .cm-editor .cm-line.md-code-line::before {
    position: absolute;
    inset: 0;
    // CodeMirror draws selection at -2; keep the code surface below it.
    z-index: -3;
    pointer-events: none;
    content: '';
    background: var(--code-block-bg);
    border-radius: inherit;
  }

  .cm-editor .cm-line.md-code-first {
    padding-top: 12px;
    border-top: 1px solid var(--code-block-border);
    border-radius: var(--app-ui-radius-lg) var(--app-ui-radius-lg) 0 0;
  }

  .cm-editor .cm-line.md-code-last {
    padding-bottom: 12px;
    border-bottom: 1px solid var(--code-block-border);
    border-radius: 0 0 var(--app-ui-radius-lg) var(--app-ui-radius-lg);
  }

  .cm-editor .cm-line.md-code-fence {
    font-size: 0;
    line-height: 0;
  }

  .md-code-toolbar {
    @apply absolute right-2 top-2 z-10 flex items-center gap-1 rounded border px-2 text-xs;

    height: 26px;
    font-family: var(--app-ui-font-family);
    line-height: 1;
    color: var(--markdown-muted);
    background: var(--code-block-toolbar-bg);
    border-color: var(--code-block-toolbar-border);
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .md-code-hover .md-code-toolbar,
  .md-code-toolbar:focus-within {
    opacity: 1;
  }

  .md-code-toolbar button {
    @apply px-1;

    cursor: pointer;
  }

  .md-code-toolbar button:hover {
    color: var(--el-color-primary);
  }

  .cm-editor .cm-line.md-list-line {
    --md-list-padding: calc(var(--md-list-depth) * var(--markdown-list-indent));

    padding-left: var(--md-list-padding);
    text-indent: calc(var(--md-list-hang) * -1 * var(--markdown-list-indent));
  }

  .md-list-marker-preview {
    display: inline-block;
    width: var(--markdown-list-indent);
    padding-right: 6px;
    text-align: right;
    text-indent: 0;
  }

  .md-inline-code {
    padding: 2px 4px;
    font-size: 0.9em;
    color: var(--markdown-inline-code-text);
    background: var(--markdown-inline-code-bg);
    border-radius: var(--app-ui-radius);
  }

  .md-list-marker {
    color: var(--markdown-muted);
  }

  .md-link {
    color: var(--search-result-accent);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: color-mix(
      in srgb,
      var(--search-result-accent) 38%,
      transparent
    );
    text-underline-offset: 3px;
    cursor: pointer;
  }

  .md-link:hover {
    color: var(--el-color-primary);
    text-decoration-color: currentcolor;
  }

  .md-wikilink {
    @apply bg-purple-600/10 text-purple-600 dark:text-purple-400;

    padding: 2px 4px;
    font-weight: 500;
    text-decoration: none;
    border-radius: 3px;
  }

  .cm-editor .cm-line.md-quote-line {
    padding-left: var(--markdown-block-gap);
    color: var(--markdown-muted);
    border-left: 3px solid var(--markdown-quote-border);
  }

  .cm-editor .cm-line.md-list-line.md-quote-line {
    padding-left: calc(var(--md-list-padding) + var(--markdown-block-gap));
  }

  .md-horizontal-rule {
    display: inline-block;
    width: 100%;
    height: 1px;
    margin: 0;
    overflow: hidden;
    vertical-align: middle;
    background: var(--markdown-heading-border);
  }

  .md-task-checkbox {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    vertical-align: middle;
    accent-color: var(--el-color-primary);
  }

  .md-preview-widget {
    position: relative;
    display: inline-block;
    max-width: 100%;
    vertical-align: top;
  }

  .md-preview-table {
    display: block;
    margin: 0.85em 0 1.15em;
    overflow-x: auto;
    white-space: normal;

    table {
      margin: 0;
    }

    th,
    td {
      position: relative;
      min-width: 48px;
      overflow-wrap: anywhere;
      cursor: text;

      &:focus-visible {
        outline: 1px solid var(--el-color-primary);
        outline-offset: -1px;
      }
    }
  }

  .md-table-cell-input {
    display: block;
    width: 100%;
    min-height: 1.5em;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font: inherit;
    line-height: inherit;
    color: inherit;
    text-align: inherit;
    resize: none;
    background: transparent;
    border: 0;
    outline: none;
  }

  .md-preview-table td:has(.md-table-cell-input:focus),
  .md-preview-table th:has(.md-table-cell-input:focus) {
    box-shadow: inset 0 0 0 1px var(--el-color-primary);
  }

  .md-table-resize-handle {
    position: absolute;
    top: 0;
    right: -3px;
    z-index: 1;
    width: 6px;
    height: 100%;
    cursor: col-resize;

    &:hover {
      background: var(--el-color-primary-light-7);
    }
  }

  .md-preview-image img {
    max-width: 100%;
    height: auto;
  }

  .md-preview-image p {
    display: inline;
    margin: 0;
  }

  .md-image-path {
    display: block;
    font-size: var(--app-ui-font-size-caption);
    color: var(--markdown-muted);
    overflow-wrap: anywhere;
  }
}
</style>
