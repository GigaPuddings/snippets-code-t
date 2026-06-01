<template>
  <CommonDialog
    :model-value="true"
    :title="t('fragmentType.selectType')"
    width="600px"
    :close-on-click-modal="true"
    @close="handleCancel"
  >
    <div class="type-options">
        <div
          class="type-option"
          :class="{ 'selected': selectedType === 'code' }"
          @click="selectType('code')"
          tabindex="0"
          @keydown.enter="selectType('code')"
          @keydown.space.prevent="selectType('code')"
          ref="codeOption"
        >
          <div class="type-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div class="type-info">
            <div class="type-name">{{ t('fragmentType.codeSnippet') }}</div>
            <div class="type-desc">{{ t('fragmentType.codeSnippetDesc') }}</div>
          </div>
          <div class="check-icon" v-if="selectedType === 'code'">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>

        <div
          class="type-option"
          :class="{ 'selected': selectedType === 'note' }"
          @click="selectType('note')"
          tabindex="0"
          @keydown.enter="selectType('note')"
          @keydown.space.prevent="selectType('note')"
        >
          <div class="type-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div class="type-info">
            <div class="type-name">{{ t('fragmentType.note') }}</div>
            <div class="type-desc">{{ t('fragmentType.noteDesc') }}</div>
          </div>
          <div class="check-icon" v-if="selectedType === 'note'">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
    </div>

    <template #footer>
      <div class="selector-actions">
        <CustomButton @click="handleCancel">
          {{ t('common.cancel') }}
        </CustomButton>
        <CustomButton type="primary" @click="handleConfirm">
          {{ t('common.confirm') }}
        </CustomButton>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import { CommonDialog, CustomButton } from '@/components/UI';
import { useI18n } from 'vue-i18n';

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
  border: 2px solid var(--panel-border);
  background: var(--panel-bg);

  &:hover {
    border-color: var(--el-color-primary);
    background: var(--panel-hover-bg);
  }

  &:focus {
    @apply outline-none;
    border-color: var(--el-color-primary);
    box-shadow: 0 0 0 3px rgba(var(--el-color-primary), 0.1);
  }

  &.selected {
    border-color: var(--el-color-primary);
    background: var(--panel-hover-bg);
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
