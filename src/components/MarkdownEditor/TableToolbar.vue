<template>
  <Teleport to="body">
    <div
      v-if="info"
      ref="host"
      class="md-table-toolbar fixed z-[3001] flex items-start justify-between"
      :class="{ 'dark-theme': dark }"
      :style="position"
      @mousedown="preserveFocus"
    >
      <div class="relative flex">
        <button
          type="button"
          :title="t('contextMenu.resizeTable')"
          :aria-label="t('contextMenu.resizeTable')"
          @click="
            grid = !grid;
            more = false;
          "
        >
          <UiTable2 />
        </button>
        <TableGridPicker
          v-if="grid"
          :rows="info.rows"
          :columns="info.columns"
          @select="resize"
          @close="grid = false"
        />
        <el-dropdown trigger="click" @command="setAlignmentScope">
          <button
            type="button"
            class="md-table-scope"
            :title="scopeTitle"
            :aria-label="scopeTitle"
          >
            <component
              :is="alignmentScope === 'table' ? UiTable : UiColumns3"
              aria-hidden="true"
            />
          </button>
          <template #dropdown>
            <el-dropdown-menu @mousedown.prevent>
              <el-dropdown-item command="column">
                {{ t('contextMenu.alignCurrentColumn') }}
              </el-dropdown-item>
              <el-dropdown-item command="table">
                {{ t('contextMenu.alignEntireTable') }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <button
          v-for="alignment in alignments"
          :key="alignment.value"
          type="button"
          :title="alignmentLabel(alignment.command)"
          :aria-label="alignmentLabel(alignment.command)"
          :aria-pressed="selectedAlignment === alignment.value"
          :class="{ active: selectedAlignment === alignment.value }"
          @click="
            run(
              alignmentScope === 'table'
                ? alignment.command.replace('align', 'alignTable')
                : alignment.command
            )
          "
        >
          <component :is="alignment.icon" />
        </button>
      </div>
      <div class="relative ml-auto flex">
        <button
          type="button"
          :title="t('contextMenu.moreTableActions')"
          :aria-label="t('contextMenu.moreTableActions')"
          @click="
            more = !more;
            grid = false;
          "
        >
          <UiEllipsisVertical />
        </button>
        <button
          type="button"
          :title="t('contextMenu.deleteTable')"
          :aria-label="t('contextMenu.deleteTable')"
          @click="run('deleteTable')"
        >
          <UiTrash2 />
        </button>
        <div
          v-if="more"
          class="absolute right-0 top-8 w-52 rounded-md border border-panel bg-panel py-1 shadow-lg"
        >
          <button
            v-for="command in commands"
            :key="command"
            type="button"
            class="menu-action"
            @click="run(command)"
          >
            {{ t(`contextMenu.${command}`) }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import UiAlignLeft from '~icons/lucide/align-left';
import UiAlignCenter from '~icons/lucide/align-center';
import UiAlignRight from '~icons/lucide/align-right';
import UiTable2 from '~icons/lucide/table-2';
import UiEllipsisVertical from '~icons/lucide/ellipsis-vertical';
import UiTrash2 from '~icons/lucide/trash-2';
import UiColumns3 from '~icons/lucide/columns-3';
import UiTable from '~icons/lucide/table';
import TableGridPicker from './components/TableGridPicker.vue';
import type { EditorView } from '@codemirror/view';
const props = defineProps<{
  info: {
    from: number;
    rows: number;
    columns: number;
    alignment: string;
    tableAlignment: string | null;
  } | null;
  view?: EditorView;
  dark?: boolean;
}>();
const emit = defineEmits<{
  command: [command: string];
  resize: [size: { rows: number; columns: number }];
}>();
const { t } = useI18n();
const host = ref<HTMLElement>();
const grid = ref(false),
  more = ref(false);
const alignmentScope = ref<'column' | 'table'>('column');
const scopeLabel = computed(() =>
  t(
    alignmentScope.value === 'table'
      ? 'contextMenu.alignEntireTable'
      : 'contextMenu.alignCurrentColumn'
  )
);
const scopeTitle = computed(() =>
  t('contextMenu.tableAlignmentAction', {
    scope: t('contextMenu.tableAlignmentScope'),
    alignment: scopeLabel.value
  })
);
const selectedAlignment = computed(() =>
  alignmentScope.value === 'table'
    ? props.info?.tableAlignment
    : props.info?.alignment
);
function setAlignmentScope(scope: 'column' | 'table') {
  alignmentScope.value = scope;
  grid.value = more.value = false;
}
function alignmentLabel(command: string) {
  return t('contextMenu.tableAlignmentAction', {
    scope: scopeLabel.value,
    alignment: t(`contextMenu.${command}`)
  });
}
const position = ref({
  left: '0px',
  top: '0px',
  width: '0px',
  visibility: 'hidden' as 'visible' | 'hidden'
});
const alignments = [
  { value: 'left', command: 'alignLeft', icon: markRaw(UiAlignLeft) },
  { value: 'center', command: 'alignCenter', icon: markRaw(UiAlignCenter) },
  { value: 'right', command: 'alignRight', icon: markRaw(UiAlignRight) }
];
const commands = [
  'addRowBefore',
  'addRowAfter',
  'deleteRow',
  'addColumnBefore',
  'addColumnAfter',
  'deleteColumn'
];
function run(command: string) {
  grid.value = more.value = false;
  emit('command', command);
}
function resize(size: { rows: number; columns: number }) {
  grid.value = false;
  emit('resize', size);
}
function preserveFocus(event: MouseEvent) {
  if (!(event.target instanceof HTMLInputElement)) event.preventDefault();
}
function updatePosition() {
  const table = Array.from(
    props.view?.dom.querySelectorAll<HTMLElement>('.md-preview-table') || []
  )
    .find((table) => Number(table.dataset.sourceFrom) === props.info?.from)
    ?.querySelector('table');
  const rect = table?.getBoundingClientRect();
  const editor = props.view?.scrollDOM.getBoundingClientRect();
  if (
    !rect ||
    !editor ||
    rect.bottom < editor.top ||
    rect.top > editor.bottom
  ) {
    position.value.visibility = 'hidden';
    return;
  }
  const width = Math.min(rect.width, innerWidth - 16);
  position.value = {
    left: `${Math.max(8, Math.min(rect.left, innerWidth - width - 8))}px`,
    top: `${Math.max(editor.top + 2, rect.top - 30)}px`,
    width: `${width}px`,
    visibility: 'visible'
  };
}
function outside(event: MouseEvent) {
  if (!host.value?.contains(event.target as Node))
    grid.value = more.value = false;
}
watch(
  () => props.info,
  () => {
    grid.value = more.value = false;
    nextTick(updatePosition);
  }
);
onMounted(() => {
  window.addEventListener('resize', updatePosition);
  window.addEventListener('scroll', updatePosition, true);
  document.addEventListener('mousedown', outside);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', updatePosition);
  window.removeEventListener('scroll', updatePosition, true);
  document.removeEventListener('mousedown', outside);
});
</script>
<style scoped lang="scss">
.md-table-toolbar {
  color: var(--editor-text);

  button:not(.menu-action) {
    @apply flex h-7 w-7 items-center justify-center rounded-sm border border-transparent bg-panel transition-colors;

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

  .menu-action {
    @apply block w-full border-0 bg-transparent px-4 py-2 text-left text-sm;

    &:hover {
      background: var(--panel-hover-bg);
    }
  }
}
</style>
