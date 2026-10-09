<template>
  <CommonDialog
    :model-value="true"
    :title="t('fragmentType.selectType')"
    width="600px"
    :close-on-click-modal="true"
    @close="handleCancel"
  >
    <p
      v-if="folderName"
      class="mb-4 flex items-center gap-2 text-ui text-content"
    >
      <FolderClose width="16" height="16" class="shrink-0" />
      <span class="truncate" :title="folderName">
        {{ t('fragmentType.createIn', { folder: folderName }) }}
      </span>
    </p>
    <div class="type-options">
      <div
        class="type-option"
        :class="{ selected: selectedType === 'code' }"
        @click="selectType('code')"
        tabindex="0"
        @keydown.enter="selectType('code')"
        @keydown.space.prevent="selectType('code')"
        ref="codeOption"
      >
        <div class="type-icon">
          <UiCode width="40" height="40" />
        </div>
        <div class="type-info">
          <div class="type-name">{{ t('fragmentType.codeSnippet') }}</div>
          <div class="type-desc">{{ t('fragmentType.codeSnippetDesc') }}</div>
        </div>
        <div class="check-icon" v-if="selectedType === 'code'">
          <UiCheck width="20" height="20" />
        </div>
      </div>

      <div
        class="type-option"
        :class="{ selected: selectedType === 'note' }"
        @click="selectType('note')"
        tabindex="0"
        @keydown.enter="selectType('note')"
        @keydown.space.prevent="selectType('note')"
      >
        <div class="type-icon">
          <UiFileText width="40" height="40" />
        </div>
        <div class="type-info">
          <div class="type-name">{{ t('fragmentType.note') }}</div>
          <div class="type-desc">{{ t('fragmentType.noteDesc') }}</div>
        </div>
        <div class="check-icon" v-if="selectedType === 'note'">
          <UiCheck width="20" height="20" />
        </div>
      </div>
    </div>

    <template #footer>
      <div class="selector-actions">
        <CustomButton @click="handleCancel">
          {{ t('common.cancel') }}
        </CustomButton>
        <CustomButton type="primary" :disabled="busy" @click="handleConfirm">
          {{ t('common.confirm') }}
        </CustomButton>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import UiCheck from '~icons/lucide/check';
import UiFileText from '~icons/lucide/notebook';
import UiCode from '~icons/lucide/file-code';
import { CommonDialog, CustomButton } from '@/components/UI';
import { useI18n } from 'vue-i18n';
import FolderClose from '~icons/lucide/folder';

const props = defineProps<{ folderName?: string; busy?: boolean }>();

const { t } = useI18n();

const emit = defineEmits<{
  (e: 'confirm', type: 'code' | 'note'): void;
  (e: 'cancel'): void;
}>();

const selectedType = ref<'code' | 'note'>('code');
const codeOption = ref<HTMLElement | null>(null);

const selectType = (type: 'code' | 'note') => {
  selectedType.value = type;
};

const handleConfirm = () => {
  if (props.busy) return;
  emit('confirm', selectedType.value);
};

const handleCancel = () => {
  emit('cancel');
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    handleCancel();
  } else if (e.key === 'Tab') {
    // Tab navigation is handled by native browser behavior with tabindex
  }
};

onMounted(() => {
  // Focus on the first option when mounted
  if (codeOption.value) {
    codeOption.value.focus();
  }

  // Add keyboard event listener
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped lang="scss">
.type-options {
  @apply grid grid-cols-2 gap-4;
}

.type-option {
  @apply relative flex flex-col items-center p-6 rounded-xl cursor-pointer transition-all duration-200;

  background: var(--panel-bg);
  border: 2px solid var(--panel-border);

  &:hover {
    background: var(--panel-hover-bg);
    border-color: var(--el-color-primary);
  }

  &:focus {
    @apply outline-none;

    border-color: var(--el-color-primary);
    box-shadow: 0 0 0 3px rgba(var(--el-color-primary), 0.1);
  }

  &.selected {
    background: var(--panel-hover-bg);
    border-color: var(--el-color-primary);
  }
}

.type-icon {
  @apply mb-4;

  color: var(--panel-text-secondary);
  transition: all 0.2s ease;

  .selected & {
    color: var(--el-color-primary);
    transform: scale(1.05);
  }
}

.type-info {
  @apply text-center;
}

.type-name {
  @apply text-lg font-semibold text-panel mb-2;
}

.type-desc {
  @apply text-sm text-panel-text-secondary leading-relaxed;
}

.check-icon {
  @apply absolute top-3 right-3;

  color: var(--el-color-primary);
  animation: checkIn 0.3s ease-out;
}

@keyframes checkIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.selector-actions {
  @apply flex justify-end gap-3;
}
</style>
