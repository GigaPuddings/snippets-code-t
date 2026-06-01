<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :width="width"
    :close-on-click-modal="closeOnClickModal"
    :draggable="draggable"
    :center="center"
    :show-close="showClose"
    :close-on-press-escape="closeOnPressEscape"
    :append-to-body="appendToBody"
    :align-center="alignCenter"
    :custom-class="dialogClass"
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
            <CustomButton @click="handleCancel">{{ cancelText }}</CustomButton>
            <CustomButton type="primary" :loading="loading" @click="handleConfirm">
              {{ confirmText }}
            </CustomButton>
          </div>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import CustomButton from './CustomButton.vue';

interface Props {
  modelValue?: boolean;
  title?: string;
  width?: string | number;
  closeOnClickModal?: boolean;
  draggable?: boolean;
  center?: boolean;
  showClose?: boolean;
  closeOnPressEscape?: boolean;
  appendToBody?: boolean;
  alignCenter?: boolean;
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
  closeOnPressEscape: true,
  appendToBody: true,
  alignCenter: true,
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
const dialogClass = computed(() => ['app-dialog', props.customClass].filter(Boolean).join(' '));

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
  color: var(--dialog-text);
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
