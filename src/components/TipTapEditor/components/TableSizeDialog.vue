<template>
  <CommonDialog
    :model-value="modelValue"
    :title="dialogTitle"
    width="460px"
    :show-default-footer="true"
    :confirm-text="t('common.confirm')"
    :cancel-text="t('common.cancel')"
    custom-class="table-size-dialog"
    @update:model-value="emit('update:modelValue', $event)"
    @confirm="handleConfirm"
    @cancel="emit('update:modelValue', false)"
  >
    <div class="grid grid-cols-2 gap-6 py-3">
      <label class="flex items-center gap-3">
        <span class="w-10 flex-none text-sm text-panel-text-secondary">
          {{ t('contextMenu.tableColumns') }}
        </span>
        <el-input-number
          v-model="columns"
          :min="1"
          :max="20"
          controls-position="right"
          class="min-w-0 flex-1"
        />
      </label>
      <label class="flex items-center gap-3">
        <span class="w-10 flex-none text-sm text-panel-text-secondary">
          {{ t('contextMenu.tableRows') }}
        </span>
        <el-input-number
          v-model="rows"
          :min="1"
          :max="100"
          controls-position="right"
          class="min-w-0 flex-1"
        />
      </label>
    </div>
  </CommonDialog>
</template>

<script setup lang="ts">
import { CommonDialog } from '@/components/UI';
import { useI18n } from 'vue-i18n';

interface Props {
  modelValue: boolean;
  mode: 'insert' | 'resize';
  initialRows?: number;
  initialColumns?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initialRows: 4,
  initialColumns: 3
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  confirm: [size: { rows: number; columns: number }];
}>();

const { t } = useI18n();
const rows = ref(props.initialRows);
const columns = ref(props.initialColumns);
const dialogTitle = computed(() => t(
  props.mode === 'insert' ? 'contextMenu.insertTableTitle' : 'contextMenu.resizeTable'
));

watch(
  () => [props.modelValue, props.initialRows, props.initialColumns] as const,
  ([visible, nextRows, nextColumns]) => {
    if (!visible) return;
    rows.value = Math.max(1, nextRows);
    columns.value = Math.max(1, nextColumns);
  },
  { immediate: true }
);

const handleConfirm = () => {
  emit('confirm', {
    rows: Math.max(1, Math.trunc(rows.value)),
    columns: Math.max(1, Math.trunc(columns.value))
  });
  emit('update:modelValue', false);
};
</script>

<style scoped lang="scss">
:deep(.table-size-dialog .el-input-number) {
  width: 100%;
}
</style>
