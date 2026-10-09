<template>
  <teleport to="body">
    <div
      v-if="visible"
      ref="controlsRef"
      class="table-controls"
      :class="{ 'dark-theme': dark }"
      :style="controlsStyle"
      @mousedown="handleControlsMouseDown"
    >
      <div class="table-controls__group">
        <button
          type="button"
          class="table-controls__button"
          :class="{ active: gridPickerVisible }"
          :title="t('contextMenu.resizeTable')"
          @click="toggleGridPicker"
        >
          <UiTable2 aria-hidden="true" />
        </button>
        <TableGridPicker
          v-if="gridPickerVisible && tableInfo"
          :rows="tableInfo.rows"
          :columns="tableInfo.columns"
          @select="selectGridSize"
          @close="gridPickerVisible = false"
        />
        <button
          v-for="alignment in alignments"
          :key="alignment.value"
          type="button"
          class="table-controls__button"
          :class="{ active: currentAlignment === alignment.value }"
          :title="t(alignment.label)"
          @click="setAlignment(alignment.value)"
        >
          <component :is="alignment.icon" aria-hidden="true" />
        </button>
      </div>

      <div class="table-controls__group table-controls__group--right">
        <button
          type="button"
          class="table-controls__button"
          :class="{ active: moreVisible }"
          :title="t('contextMenu.moreTableActions')"
          @click="toggleMoreMenu"
        >
          <UiEllipsisVertical aria-hidden="true" />
        </button>
        <button
          type="button"
          class="table-controls__button table-controls__button--danger"
          :title="t('contextMenu.deleteTable')"
          @click="deleteTable"
        >
          <UiTrash2 aria-hidden="true" />
        </button>

        <div v-if="moreVisible" class="table-controls__menu">
          <button type="button" @click="runTableCommand('addRowBefore')">
            {{ t('contextMenu.addRowBefore') }}
          </button>
          <button type="button" @click="runTableCommand('addRowAfter')">
            {{ t('contextMenu.addRowAfter') }}
            <span>Ctrl+Enter</span>
          </button>
          <button type="button" @click="runTableCommand('deleteRow')">
            {{ t('contextMenu.deleteRow') }}
          </button>
          <div class="table-controls__divider"></div>
          <button type="button" @click="runTableCommand('addColumnBefore')">
            {{ t('contextMenu.addColumnBefore') }}
          </button>
          <button type="button" @click="runTableCommand('addColumnAfter')">
            {{ t('contextMenu.addColumnAfter') }}
          </button>
          <button type="button" @click="runTableCommand('deleteColumn')">
            {{ t('contextMenu.deleteColumn') }}
          </button>
          <div class="table-controls__divider"></div>
          <button type="button" class="danger" @click="deleteTable">
            {{ t('contextMenu.deleteTable') }}
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import UiAlignRight from '~icons/lucide/align-right';
import UiAlignCenter from '~icons/lucide/align-center';
import UiAlignLeft from '~icons/lucide/align-left';
import UiTrash2 from '~icons/lucide/trash-2';
import UiEllipsisVertical from '~icons/lucide/ellipsis-vertical';
import UiTable2 from '~icons/lucide/table-2';
import type { Editor } from '@tiptap/core';
import { useI18n } from 'vue-i18n';
import TableGridPicker from './TableGridPicker.vue';
import {
  getCurrentTableInfo,
  setCurrentTableColumnAlignment,
  type TableInfo
} from '../utils/tableCommands';

type TableCommand =
  | 'addRowBefore'
  | 'addRowAfter'
  | 'deleteRow'
  | 'addColumnBefore'
  | 'addColumnAfter'
  | 'deleteColumn';
type Alignment = 'left' | 'center' | 'right';

interface Props {
  editor: Editor | null;
  enabled?: boolean;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  editor: null,
  enabled: true,
  dark: false
});

const emit = defineEmits<{
  resize: [info: TableInfo, size: { rows: number; columns: number }];
}>();

const { t } = useI18n();
const controlsRef = ref<HTMLElement | null>(null);
const visible = ref(false);
const moreVisible = ref(false);
const gridPickerVisible = ref(false);
const tableInfo = ref<TableInfo | null>(null);
const position = ref({ left: 0, top: 0, width: 0 });
let frameId: number | null = null;
let boundEditor: Editor | null = null;

const alignments = [
  {
    value: 'left' as const,
    label: 'contextMenu.alignLeft',
    icon: markRaw(UiAlignLeft)
  },
  {
    value: 'center' as const,
    label: 'contextMenu.alignCenter',
    icon: markRaw(UiAlignCenter)
  },
  {
    value: 'right' as const,
    label: 'contextMenu.alignRight',
    icon: markRaw(UiAlignRight)
  }
];

const controlsStyle = computed(() => ({
  left: `${position.value.left}px`,
  top: `${position.value.top}px`,
  width: `${position.value.width}px`
}));

const currentAlignment = computed<Alignment>(() => {
  if (!props.editor) return 'left';
  const attrs = props.editor.getAttributes('tableCell');
  const headerAttrs = props.editor.getAttributes('tableHeader');
  const value = attrs.textAlign ?? headerAttrs.textAlign;
  return value === 'center' || value === 'right' ? value : 'left';
});

const updatePosition = () => {
  const editor = props.editor;
  const info = editor && props.enabled ? getCurrentTableInfo(editor) : null;
  tableInfo.value = info;
  visible.value = Boolean(info);
  if (!editor || !info) {
    moreVisible.value = false;
    gridPickerVisible.value = false;
    return;
  }

  const nodeDom = editor.view.nodeDOM(info.tablePos);
  const element =
    nodeDom instanceof HTMLElement ? nodeDom : nodeDom?.parentElement;
  const table =
    element instanceof HTMLTableElement
      ? element
      : element?.querySelector('table');
  if (!table) {
    visible.value = false;
    return;
  }

  const rect = table.getBoundingClientRect();
  const padding = 8;
  const width = Math.max(
    180,
    Math.min(rect.width, window.innerWidth - padding * 2)
  );
  const left = Math.min(
    Math.max(padding, rect.left),
    window.innerWidth - width - padding
  );
  const toolbarHeight = 28;
  const top =
    rect.top - toolbarHeight - 2 >= padding
      ? rect.top - toolbarHeight - 2
      : Math.min(window.innerHeight - toolbarHeight - padding, rect.top + 6);
  position.value = { left, top, width };
};

const scheduleUpdate = () => {
  if (frameId !== null) cancelAnimationFrame(frameId);
  frameId = requestAnimationFrame(() => {
    frameId = null;
    updatePosition();
  });
};

const bindEditor = (editor: Editor | null) => {
  if (boundEditor) {
    boundEditor.off('selectionUpdate', scheduleUpdate);
    boundEditor.off('transaction', scheduleUpdate);
  }
  boundEditor = editor;
  if (boundEditor) {
    boundEditor.on('selectionUpdate', scheduleUpdate);
    boundEditor.on('transaction', scheduleUpdate);
  }
  scheduleUpdate();
};

watch(() => props.editor, bindEditor, { immediate: true });
watch(() => props.enabled, scheduleUpdate);

const toggleGridPicker = () => {
  gridPickerVisible.value = !gridPickerVisible.value;
  moreVisible.value = false;
};

const toggleMoreMenu = () => {
  moreVisible.value = !moreVisible.value;
  gridPickerVisible.value = false;
};

const selectGridSize = (size: { rows: number; columns: number }) => {
  if (tableInfo.value) emit('resize', tableInfo.value, size);
  gridPickerVisible.value = false;
};

const setAlignment = (alignment: Alignment) => {
  if (props.editor) setCurrentTableColumnAlignment(props.editor, alignment);
  moreVisible.value = false;
  gridPickerVisible.value = false;
  scheduleUpdate();
};

const runTableCommand = (command: TableCommand) => {
  const editor = props.editor;
  if (!editor) return;
  editor.chain().focus()[command]().run();
  moreVisible.value = false;
  gridPickerVisible.value = false;
  scheduleUpdate();
};

const deleteTable = () => {
  props.editor?.chain().focus().deleteTable().run();
  moreVisible.value = false;
  gridPickerVisible.value = false;
  visible.value = false;
};

const handleDocumentPointerDown = (event: MouseEvent) => {
  if (!controlsRef.value?.contains(event.target as Node)) {
    moreVisible.value = false;
    gridPickerVisible.value = false;
  }
};

const handleControlsMouseDown = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('input')) event.preventDefault();
};

onMounted(() => {
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('scroll', scheduleUpdate, true);
  document.addEventListener('mousedown', handleDocumentPointerDown);
});

onBeforeUnmount(() => {
  bindEditor(null);
  if (frameId !== null) cancelAnimationFrame(frameId);
  window.removeEventListener('resize', scheduleUpdate);
  window.removeEventListener('scroll', scheduleUpdate, true);
  document.removeEventListener('mousedown', handleDocumentPointerDown);
});
</script>

<style scoped lang="scss">
.table-controls {
  @apply fixed z-[3001] flex items-start justify-between pointer-events-none;
}

.table-controls__group {
  @apply relative flex items-center overflow-visible pointer-events-auto;

  height: 28px;
  color: var(--editor-text);
}

.table-controls__group--right {
  @apply ml-auto;
}

.table-controls__button {
  @apply flex h-7 w-7 items-center justify-center rounded-sm border border-transparent bg-transparent transition-colors;

  color: var(--editor-text-secondary);

  svg {
    @apply h-4 w-4;
  }

  &:hover,
  &.active {
    color: var(--el-color-primary);
    background: var(--panel-hover-bg);
    border-color: var(--panel-border);
  }
}

.table-controls__button--danger:hover {
  color: var(--el-color-danger);
}

.table-controls__menu {
  @apply absolute right-0 top-8 z-10 w-52 overflow-hidden rounded-md border py-1 shadow-lg;

  color: var(--editor-text);
  background: var(--panel-bg);
  border-color: var(--panel-border);

  button {
    @apply flex w-full items-center justify-between border-0 bg-transparent px-4 py-2 text-left text-sm;

    &:hover {
      background: var(--panel-hover-bg);
    }

    &.danger {
      color: var(--el-color-danger);
    }

    span {
      @apply ml-4 text-xs opacity-60;
    }
  }
}

.table-controls__divider {
  @apply my-1 border-t;

  border-color: var(--panel-border);
}
</style>
