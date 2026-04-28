<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :width="width"
    :close-on-click-modal="closeOnClickModal"
    :draggable="draggable"
    :center="center"
    :show-close="showClose"
    :custom-class="customClass"
    @close="handleClose"
  >
    <template v-if="$slots.header" #header>
      <slot name="header"></slot>
    </template>

    <slot></slot>

    <template v-if="$slots.footer || showDefaultFooter" #footer>
      <slot name="footer">
        <div class="dialog-footer-default">
          <div class="footer-left">
            <slot name="footer-left"></slot>
          </div>
          <div class="footer-right">
            <el-button @click="handleCancel">{{ cancelText }}</el-button>
            <el-button type="primary" :loading="loading" @click="handleConfirm">
              {{ confirmText }}
            </el-button>
          </div>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">

interface Props {
  modelValue?: boolean;
  title?: string;
  width?: string | number;
  closeOnClickModal?: boolean;
  draggable?: boolean;
  center?: boolean;
  showClose?: boolean;
  showDefaultFooter?: boolean;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  customClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '',
  width: '540px',
  closeOnClickModal: false,
  draggable: true,
  center: false,
  showClose: true,
  showDefaultFooter: false,
  confirmText: '确定',
  cancelText: '取消',
  loading: false,
  customClass: ''
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm'): void;
  (e: 'cancel'): void;
  (e: 'close'): void;
}>();

const visible = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val;
  }
);

watch(visible, (val) => {
  emit('update:modelValue', val);
});

const handleClose = () => {
  emit('close');
};

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
:deep(.el-dialog) {
  border-radius: 10px;
  border: 1px solid var(--categories-border-color);
  background: var(--categories-panel-bg);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

:deep(.el-dialog__header) {
  margin: 0;
  padding: 14px 16px;
  border-bottom: 1px solid var(--categories-border-color);
  background: var(--categories-content-bg);
}

:deep(.el-dialog__title) {
  font-size: 14px;
  font-weight: 600;
  color: var(--categories-text-color);
}

:deep(.el-dialog__body) {
  padding: 16px;
  color: var(--categories-text-color);
}

:deep(.el-dialog__footer) {
  padding: 12px 16px;
  border-top: 1px solid var(--categories-border-color);
  background: var(--categories-content-bg);
}

.dialog-footer-default {
  @apply flex justify-between items-center;

  .footer-left {
    @apply flex items-center;
  }

  .footer-right {
    @apply flex items-center gap-2;
  }
}
</style>
