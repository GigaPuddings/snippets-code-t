<template>
  <CommonDialog
    v-model="visible"
    :title="title"
    :width="width"
    :center="center"
    :show-close="showClose"
  >
    <div class="select-confirm-content">
      <div class="mb-4">{{ message }}</div>
      <el-select
        v-model="selectedValue"
        class="w-full"
        :placeholder="selectPlaceholder"
      >
        <el-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
    </div>

    <template #footer>
      <div class="select-confirm-footer">
        <CustomButton
          type="default"
          @click="handleCancel"
        >
          {{ cancelText }}
        </CustomButton>
        <CustomButton
          type="primary"
          :loading="loading"
          @click="handleConfirm"
        >
          {{ confirmText }}
        </CustomButton>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import CommonDialog from './CommonDialog.vue';
import CustomButton from './CustomButton.vue';

interface SelectOption {
  label: string;
  value: string | number;
}

interface Props {
  modelValue?: boolean;
  title?: string;
  message?: string;
  options?: SelectOption[];
  defaultValue?: string | number;
  selectPlaceholder?: string;
  width?: string;
  center?: boolean;
  showClose?: boolean;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '提示',
  message: '',
  options: () => [],
  defaultValue: '',
  selectPlaceholder: '请选择',
  width: '420px',
  center: false,
  showClose: true,
  confirmText: '确定',
  cancelText: '取消',
  loading: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm', value: string | number): void;
  (e: 'cancel'): void;
}>();

const visible = ref(props.modelValue);
const selectedValue = ref(props.defaultValue);

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val;
    if (val) {
      selectedValue.value = props.defaultValue;
    }
  }
);

watch(visible, (val) => {
  emit('update:modelValue', val);
});

const handleConfirm = () => {
  emit('confirm', selectedValue.value);
};

const handleCancel = () => {
  visible.value = false;
  emit('cancel');
};

defineExpose({
  open: () => {
    visible.value = true;
    selectedValue.value = props.defaultValue;
  },
  close: () => {
    visible.value = false;
  }
});
</script>

<style scoped lang="scss">
.select-confirm-content {
  @apply py-0 text-sm;
  color: var(--el-text-color-regular);
  
  .mb-4 {
    @apply mb-2;
  }
}

.select-confirm-footer {
  @apply flex justify-end gap-2;
}

// 优化暗色模式
:global(.dark) {
  .select-confirm-content {
    color: var(--el-text-color-regular);
  }
}
</style>
