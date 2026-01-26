<template>
  <div class="fragment-type-selector-overlay" @click="handleCancel">
    <div class="fragment-type-selector" @click.stop>
      <h3 class="selector-title">{{ t('fragmentType.selectType') }}</h3>
      
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

      <div class="selector-actions">
        <button class="btn-cancel" @click="handleCancel">
          {{ t('common.cancel') }}
        </button>
        <button class="btn-confirm" @click="handleConfirm">
          {{ t('common.confirm') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
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
.fragment-type-selector-overlay {
  @apply fixed inset-0 flex items-center justify-center z-50;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fragment-type-selector {
  @apply bg-white rounded-xl shadow-2xl p-8 mx-4;
  max-width: 600px;
  width: 100%;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.selector-title {
  @apply text-2xl font-semibold text-gray-900 mb-8 text-center;
}

.type-options {
  @apply grid grid-cols-2 gap-4 mb-8;
}

.type-option {
  @apply relative flex flex-col items-center p-6 rounded-xl cursor-pointer transition-all duration-200;
  border: 2px solid #e5e7eb;
  background: #ffffff;
  
  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
    transform: translateY(-2px);
  }
  
  &:focus {
    @apply outline-none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &.selected {
    border-color: #3b82f6;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%);
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.2);
  }
}

.type-icon {
  @apply mb-4;
  color: #6b7280;
  transition: all 0.2s ease;
  
  .selected & {
    color: #3b82f6;
    transform: scale(1.05);
  }
}

.type-info {
  @apply text-center;
}

.type-name {
  @apply text-lg font-semibold text-gray-900 mb-2;
}

.type-desc {
  @apply text-sm text-gray-500 leading-relaxed;
}

.check-icon {
  @apply absolute top-3 right-3;
  color: #3b82f6;
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

.btn-cancel,
.btn-confirm {
  @apply px-6 py-2.5 rounded-lg font-medium transition-all duration-200;
  
  &:active {
    transform: scale(0.98);
  }
}

.btn-cancel {
  @apply bg-gray-100 text-gray-700;
  
  &:hover {
    @apply bg-gray-200;
  }
}

.btn-confirm {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  @apply text-white shadow-md;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    transform: translateY(-1px);
  }
}

// 暗色模式
:global(.dark) {
  .fragment-type-selector {
    @apply bg-[#1e1e1e];
  }
  
  .selector-title {
    @apply text-gray-100;
  }
  
  .type-option {
    border-color: #374151;
    background: #262626;
    
    &:hover {
      border-color: #3b82f6;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
    }
    
    &.selected {
      border-color: #3b82f6;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%);
      box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
    }
  }
  
  .type-icon {
    color: #9ca3af;
    
    .selected & {
      color: #60a5fa;
    }
  }
  
  .type-name {
    @apply text-gray-100;
  }
  
  .type-desc {
    @apply text-gray-400;
  }
  
  .check-icon {
    color: #60a5fa;
  }
  
  .btn-cancel {
    @apply bg-[#2a2a2a] text-gray-300;
    
    &:hover {
      @apply bg-[#333333];
    }
  }
  
  .btn-confirm {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    
    &:hover {
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
    }
  }
}
</style>
