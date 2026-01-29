<template>
  <CommonDialog
    v-model="visible"
    :title="title"
    :width="width"
    :center="center"
    :show-close="showClose"
    :custom-class="dialogClass"
  >
    <div class="confirm-content">
      <slot>{{ message }}</slot>
    </div>

    <template #footer>
      <div class="confirm-footer">
        <CustomButton
          v-if="showCancelButton"
          type="default"
          @click="handleCancel"
        >
          {{ cancelText }}
        </CustomButton>
        <CustomButton
          :type="confirmButtonType"
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
import { ref, watch, computed } from 'vue';
import CommonDialog from './CommonDialog.vue';
import CustomButton from './CustomButton.vue';

interface Props {
  modelValue?: boolean;
  title?: string;
  message?: string;
  width?: string;
  center?: boolean;
  showClose?: boolean;
  showCancelButton?: boolean;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  type?: 'info' | 'warning' | 'danger' | 'success';
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '提示',
  message: '',
  width: '420px',
  center: false,
  showClose: true,
  showCancelButton: true,
  confirmText: '确定',
  cancelText: '取消',
  loading: false,
  type: 'info'
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}>();

const visible = ref(props.modelValue);

// 根据类型设置对话框样式类
const dialogClass = computed(() => {
  const classes = ['confirm-dialog'];
  if (props.type === 'warning') {
    classes.push('warning-dialog');
  } else if (props.type === 'danger') {
    classes.push('delete-dialog');
  }
  return classes.join(' ');
});

// 根据类型设置确认按钮类型
const confirmButtonType = computed(() => {
  if (props.type === 'danger') return 'danger';
  if (props.type === 'warning') return 'warning';
  return 'primary';
});

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val;
  }
);

watch(visible, (val) => {
  emit('update:modelValue', val);
});

const handleConfirm = () => {
  emit('confirm');
};

const handleCancel = () => {
  visible.value = false;
  emit('cancel');
};

defineExpose({
  open: () => {
    visible.value = true;
  },
  close: () => {
    visible.value = false;
  }
});
</script>

<style scoped lang="scss">
.confirm-content {
  @apply py-0 px-0 text-sm leading-relaxed;
  color: var(--el-text-color-regular);
  
  :deep(div) {
    @apply text-sm;
  }
}

.confirm-footer {
  @apply flex justify-end gap-2;
}

// 优化暗色模式
:global(.dark) {
  .confirm-content {
    color: var(--el-text-color-regular);
  }
}
</style>
