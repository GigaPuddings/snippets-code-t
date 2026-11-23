<template>
  <CommonDialog
    v-model="visible"
    :title="computedTitle"
    :width="width"
    :show-close="showClose && !loading"
    :close-on-press-escape="!loading"
    :close-on-click-modal="false"
    @open-auto-focus="focusInput"
  >
    <div class="prompt-body">
      <div v-if="message" class="prompt-message">{{ message }}</div>
      <el-input
        ref="inputRef"
        v-model="inputValue"
        :placeholder="placeholder"
        :aria-label="placeholder || computedTitle"
        :disabled="loading"
        clearable
        @keydown.enter="handleEnter"
      />
      <div v-if="errorMessage" class="prompt-error">{{ errorMessage }}</div>
    </div>

    <template #footer>
      <div class="prompt-footer">
        <CustomButton :disabled="loading" @click="handleCancel">
          {{ computedCancelText }}
        </CustomButton>
        <CustomButton type="primary" :loading="loading" @click="handleConfirm">
          {{ computedConfirmText }}
        </CustomButton>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { InputInstance } from 'element-plus';
import CommonDialog from './CommonDialog.vue';
import CustomButton from './CustomButton.vue';

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
  selectOnOpen?: boolean;
  loading?: boolean;
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
  selectOnOpen: false,
  loading: false,
  maxLength: 0,
  validator: undefined
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm', value: string): void;
  (e: 'cancel'): void;
}>();

const { t } = useI18n();

const visible = ref(props.modelValue);
const inputValue = ref(props.initialValue);
const inputRef = ref<InputInstance | null>(null);
const errorMessage = ref('');

const computedTitle = computed(() => props.title || t('common.inputTitle'));
const computedConfirmText = computed(
  () => props.confirmText || t('common.confirm')
);
const computedCancelText = computed(
  () => props.cancelText || t('common.cancel')
);

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val;
    if (val) {
      inputValue.value = props.initialValue || '';
      errorMessage.value = '';
    }
  }
);

watch(
  () => props.initialValue,
  (val) => {
    if (!visible.value) inputValue.value = val || '';
  }
);

watch(visible, (val) => {
  emit('update:modelValue', val);
});

const handleConfirm = () => {
  if (props.loading) return;
  const value = props.trimOnConfirm
    ? inputValue.value.trim()
    : inputValue.value;

  if (props.required && !value) {
    errorMessage.value = t('common.requiredField');
    return;
  }

  if (
    props.maxLength &&
    props.maxLength > 0 &&
    value.length > props.maxLength
  ) {
    errorMessage.value = t('common.maxLengthExceeded', {
      max: props.maxLength
    });
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

function focusInput(): void {
  // Element Plus focuses the dialog container on the next tick.
  requestAnimationFrame(() => {
    if (!visible.value) return;
    inputRef.value?.focus();
    if (props.selectOnOpen) inputRef.value?.select();
  });
}

function handleEnter(event: Event): void {
  if (event instanceof KeyboardEvent && event.isComposing) return;
  event.preventDefault();
  handleConfirm();
}

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
