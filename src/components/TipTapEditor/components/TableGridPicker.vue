<template>
  <div
    class="table-grid-picker"
    role="dialog"
    :aria-label="t('contextMenu.resizeTable')"
    @mouseleave="resetPreview"
    @keydown.esc="emit('close')"
  >
    <div
      class="table-grid-picker__matrix"
      :style="{ gridTemplateColumns: `repeat(${gridColumns}, 13px)` }"
      @mouseleave="resetPreview"
    >
      <button
        v-for="cell in cells"
        :key="`${cell.column}-${cell.row}`"
        type="button"
        class="table-grid-picker__cell"
        :class="{
          active: cell.column <= previewColumns && cell.row <= previewRows,
          header: cell.row === 1
        }"
        :aria-label="`${cell.column} × ${cell.row}`"
        @mouseenter="setPreview(cell.column, cell.row)"
        @focus="setPreview(cell.column, cell.row)"
        @click="selectSize(cell.column, cell.row)"
      ></button>
    </div>

    <div class="table-grid-picker__manual">
      <input
        v-model.number="manualColumns"
        type="number"
        min="1"
        max="20"
        :aria-label="t('contextMenu.tableColumns')"
        @keydown.enter.prevent="submitManual"
      />
      <span>×</span>
      <input
        v-model.number="manualRows"
        type="number"
        min="1"
        max="100"
        :aria-label="t('contextMenu.tableRows')"
        @keydown.enter.prevent="submitManual"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

interface Props {
  rows: number;
  columns: number;
  gridRows?: number;
  gridColumns?: number;
}

const props = withDefaults(defineProps<Props>(), {
  gridRows: 10,
  gridColumns: 6
});

const emit = defineEmits<{
  select: [size: { rows: number; columns: number }];
  close: [];
}>();

const { t } = useI18n();
const previewRows = ref(props.rows);
const previewColumns = ref(props.columns);
const manualRows = ref(props.rows);
const manualColumns = ref(props.columns);
const cells = computed(() => Array.from(
  { length: props.gridRows * props.gridColumns },
  (_, index) => ({
    row: Math.floor(index / props.gridColumns) + 1,
    column: (index % props.gridColumns) + 1
  })
));

watch(
  () => [props.rows, props.columns] as const,
  ([rows, columns]) => {
    previewRows.value = rows;
    previewColumns.value = columns;
    manualRows.value = rows;
    manualColumns.value = columns;
  }
);

const normalizeSize = (rows: number, columns: number) => ({
  rows: Math.min(100, Math.max(1, Math.trunc(Number(rows) || 1))),
  columns: Math.min(20, Math.max(1, Math.trunc(Number(columns) || 1)))
});

const setPreview = (columns: number, rows: number) => {
  previewColumns.value = columns;
  previewRows.value = rows;
  manualColumns.value = columns;
  manualRows.value = rows;
};

const resetPreview = () => {
  previewColumns.value = props.columns;
  previewRows.value = props.rows;
  manualColumns.value = props.columns;
  manualRows.value = props.rows;
};

const selectSize = (columns: number, rows: number) => {
  emit('select', normalizeSize(rows, columns));
};

const submitManual = () => {
  const size = normalizeSize(manualRows.value, manualColumns.value);
  manualRows.value = size.rows;
  manualColumns.value = size.columns;
  emit('select', size);
};
</script>

<style scoped lang="scss">
.table-grid-picker {
  @apply absolute left-0 top-8 z-20 rounded border;
  width: 136px;
  padding: 18px 10px 10px;
  color: var(--panel-text);
  background: var(--panel-bg);
  border-color: var(--panel-border);
  box-shadow: 0 5px 14px rgb(15 23 42 / 14%), 0 1px 4px rgb(15 23 42 / 8%);
}

.table-grid-picker::before {
  @apply absolute -top-1 left-3 h-2 w-2 rotate-45 border-l border-t;
  content: '';
  background: var(--panel-bg);
  border-color: var(--panel-border);
}

.table-grid-picker__matrix {
  @apply grid justify-center gap-0.5;
}

.table-grid-picker__cell {
  @apply h-[13px] w-[13px] border p-0;
  background: transparent;
  border-color: var(--panel-border);

  &.header {
    background: color-mix(in srgb, var(--panel-text-secondary) 22%, transparent);
  }

  &.active {
    background: color-mix(in srgb, var(--panel-text-secondary) 62%, var(--panel-bg));
    border-color: color-mix(in srgb, var(--panel-text-secondary) 72%, var(--panel-border));
  }

  &.header.active {
    background: color-mix(in srgb, var(--panel-text) 76%, var(--panel-bg));
    border-color: color-mix(in srgb, var(--panel-text) 76%, var(--panel-border));
  }

  &:focus-visible {
    @apply outline-none ring-1 ring-primary;
  }
}

.table-grid-picker__manual {
  @apply mt-2.5 flex items-center justify-center gap-1 border-t pt-2.5 text-sm;
  border-color: var(--panel-border);

  input {
    @apply h-6 w-7 rounded-sm border bg-transparent px-0.5 text-center text-xs outline-none;
    color: var(--panel-text);
    border-color: var(--panel-border);
    appearance: textfield;

    &:focus {
      border-color: var(--el-color-primary);
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
    }
  }

  span {
    color: var(--panel-text-secondary);
  }
}
</style>
