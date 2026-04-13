<template>
  <CommonDialog
    v-model="visible"
    :title="computedTitle"
    :width="width"
    :show-close="showClose"
    :close-on-click-modal="false"
  >
    <div class="prompt-body">
      <div v-if="message" class="prompt-message">{{ message }}</div>
      <el-input
        ref="inputRef"
        v-model="inputValue"
        :placeholder="placeholder"
        clearable
        @keyup.enter="handleConfirm"
      />
      <div v-if="errorMessage" class="prompt-error">{{ errorMessage }}</div>
    </div>

    <template #footer>
      <div class="prompt-footer">
        <el-button @click="handleCancel">{{ computedCancelText }}</el-button>
        <el-button type="primary" @click="handleConfirm">{{ computedConfirmText }}</el-button>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import CommonDialog from './CommonDialog.vue';

interface PromptValidationResult {
  valid: boolean;
  message?: string;
}

interface Props {
  modelValue?: boolean;
  title?: string;
  message?: string;
  width?: string;
  placeholder?: string;
  initialValue?: string;
  confirmText?: string;
  cancelText?: string;
  showClose?: boolean;
  trimOnConfirm?: boolean;
  required?: boolean;
  maxLength?: number;
  validator?: (value: string) => PromptValidationResult;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '',
  message: '',
  width: '420px',
  placeholder: '',
  initialValue: '',
  confirmText: '',
  cancelText: '',
  showClose: true,
  trimOnConfirm: true,
  required: false,
  maxLength: 0,
  validator: undefined,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm', value: string): void;
  (e: 'cancel'): void;
}>();

const { t } = useI18n();

const visible = ref(props.modelValue);
const inputValue = ref(props.initialValue);
const inputRef = ref<any>(null);
const errorMessage = ref('');

const computedTitle = computed(() => props.title || t('common.inputTitle'));
const computedConfirmText = computed(() => props.confirmText || t('common.confirm'));
const computedCancelText = computed(() => props.cancelText || t('common.cancel'));

watch(
  () => props.modelValue,
  val => {
    visible.value = val;
    if (val) {
      inputValue.value = props.initialValue || '';
      errorMessage.value = '';
      nextTick(() => {
        inputRef.value?.focus?.();
      });
    }
  }
);

watch(
  () => props.initialValue,
  val => {
    if (!visible.value) inputValue.value = val || '';
  }
);

watch(visible, val => {
  emit('update:modelValue', val);
});

const handleConfirm = () => {
  const value = props.trimOnConfirm ? inputValue.value.trim() : inputValue.value;

  if (props.required && !value) {
    errorMessage.value = t('common.requiredField');
    return;
  }

  if (props.maxLength && props.maxLength > 0 && value.length > props.maxLength) {
    errorMessage.value = t('common.maxLengthExceeded', { max: props.maxLength });
    return;
  }

  if (props.validator) {
    const result = props.validator(value);
    if (!result.valid) {
      errorMessage.value = result.message || t('common.invalidInput');
      return;
    }
  }

  errorMessage.value = '';
  emit('confirm', value);
};

const handleCancel = () => {
  errorMessage.value = '';
  visible.value = false;
  emit('cancel');
};
</script>

<style scoped lang="scss">
.prompt-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.prompt-message {
  font-size: 13px;
  color: var(--categories-info-text-color);
}

.prompt-error {
  @apply text-xs;
  color: var(--el-color-danger);
}

.prompt-footer {
  @apply flex justify-end gap-2;
}
</style>
