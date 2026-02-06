<template>
  <div class="tag-input-container">
    <div class="tag-list">
      <span
        v-for="(tag, index) in modelValue"
        :key="index"
        class="tag-item"
      >
        <span class="tag-text">{{ tag }}</span>
        <button class="tag-close" @click="handleRemoveTag(index)">
          <svg viewBox="0 0 24 24" width="12" height="12">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>
      </span>
      
      <input
        v-if="showInput"
        ref="inputRef"
        v-model="inputValue"
        type="text"
        autocomplete="off"
        :placeholder="$t('tags.inputPlaceholder')"
        class="tag-input"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputBlur"
        @keyup.esc="handleInputCancel"
      />
      
      <button
        v-else
        class="add-tag-btn"
        @click="showInputField"
      >
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span>{{ $t('tags.addTag') }}</span>
      </button>
    </div>
    
    <!-- 标签建议列表 -->
    <div v-if="showInput && filteredSuggestions.length > 0" class="tag-suggestions">
      <div
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        class="suggestion-item"
        @click="selectSuggestion(suggestion)"
      >
        {{ suggestion }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';

const { t } = useI18n();

interface Props {
  modelValue: string[];
  existingTags?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  existingTags: () => []
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
}>();

const inputValue = ref('');
const showInput = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);
const isSelectingSuggestion = ref(false);

// 过滤建议标签
const filteredSuggestions = computed(() => {
  if (!inputValue.value.trim()) {
    return props.existingTags.filter(tag => !props.modelValue.includes(tag)).slice(0, 5);
  }
  
  return props.existingTags
    .filter(tag => 
      tag.toLowerCase().includes(inputValue.value.toLowerCase()) &&
      !props.modelValue.includes(tag)
    )
    .slice(0, 5);
});

// 显示输入框
const showInputField = () => {
  showInput.value = true;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

// 验证标签
const validateTag = (tag: string): boolean => {
  const trimmedTag = tag.trim();
  
  if (!trimmedTag) {
    ElMessage.warning(t('tags.emptyTag'));
    return false;
  }
  
  if (trimmedTag.includes(',')) {
    ElMessage.warning(t('tags.noComma'));
    return false;
  }
  
  if (props.modelValue.includes(trimmedTag)) {
    ElMessage.warning(t('tags.duplicateTag'));
    return false;
  }
  
  return true;
};

// 确认输入
const handleInputConfirm = () => {
  const tag = inputValue.value.trim();
  
  if (tag && validateTag(tag)) {
    const newTags = [...props.modelValue, tag];
    emit('update:modelValue', newTags);
  }
  
  inputValue.value = '';
  showInput.value = false;
};

// 处理输入框失焦
const handleInputBlur = () => {
  // 如果正在选择建议，不处理失焦
  if (isSelectingSuggestion.value) {
    return;
  }
  
  // 延迟执行，给点击建议项留出时间
  setTimeout(() => {
    if (!isSelectingSuggestion.value) {
      handleInputConfirm();
    }
  }, 200);
};

// 取消输入
const handleInputCancel = () => {
  inputValue.value = '';
  showInput.value = false;
};

// 移除标签
const handleRemoveTag = (index: number) => {
  const newTags = props.modelValue.filter((_, i) => i !== index);
  emit('update:modelValue', newTags);
};

// 选择建议标签
const selectSuggestion = (tag: string) => {
  isSelectingSuggestion.value = true;
  
  if (validateTag(tag)) {
    const newTags = [...props.modelValue, tag];
    emit('update:modelValue', newTags);
  }
  
  inputValue.value = '';
  showInput.value = false;
  
  nextTick(() => {
    isSelectingSuggestion.value = false;
  });
};
</script>

<style scoped lang="scss">
.tag-input-container {
  @apply w-full relative;
  
  .tag-list {
    @apply flex flex-wrap gap-1.5 items-center;
  }
  
  .tag-item {
    @apply inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs;
    background-color: rgba(0, 0, 0, 0.05);
    color: #666;
    transition: all 0.15s ease;
    border: 1px solid transparent;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      border-color: rgba(0, 0, 0, 0.1);
      
      .tag-close {
        opacity: 1;
      }
    }
    
    .tag-text {
      @apply select-none;
      line-height: 1.4;
    }
    
    .tag-close {
      @apply flex items-center justify-center w-4 h-4 rounded cursor-pointer;
      opacity: 0.6;
      transition: all 0.15s ease;
      color: #999;
      
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: #666;
      }
    }
  }
  
  .tag-input {
    @apply px-2 py-1 text-xs rounded outline-none;
    width: 120px;
    height: 24px;
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #333;
    transition: all 0.15s ease;
    
    &:focus {
      background-color: #fff;
      border-color: #4a9eff;
      box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.1);
    }
    
    &::placeholder {
      color: #999;
    }
  }
  
  .add-tag-btn {
    @apply inline-flex items-center gap-1 px-2 py-1 rounded text-xs cursor-pointer;
    height: 24px;
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px dashed rgba(0, 0, 0, 0.15);
    color: #999;
    transition: all 0.15s ease;
    
    &:hover {
      border-color: rgba(0, 0, 0, 0.25);
      color: #666;
    }
    
    svg {
      flex-shrink: 0;
    }
  }
  
  .tag-suggestions {
    @apply absolute left-0 mt-1 bg-white rounded shadow-lg border border-gray-200 z-50;
    min-width: 150px;
    max-height: 200px;
    overflow-y: auto;
    
    .suggestion-item {
      @apply px-3 py-1.5 text-xs cursor-pointer;
      color: #666;
      transition: all 0.1s ease;
      
      &:hover {
        background-color: rgba(74, 158, 255, 0.08);
        color: #4a9eff;
      }
      
      &:first-child {
        @apply rounded-t;
      }
      
      &:last-child {
        @apply rounded-b;
      }
    }
  }
}

// 暗色模式
// :global(.dark) {
//   .tag-item {
//     background-color: rgba(255, 255, 255, 0.15);
//     color: #d1d5db;
//     border-color: rgba(255, 255, 255, 0.1);
    
//     &:hover {
//       background-color: rgba(255, 255, 255, 0.2);
//       border-color: rgba(255, 255, 255, 0.25);
//     }
    
//     .tag-close {
//       color: #9ca3af;
      
//       &:hover {
//         background-color: rgba(255, 255, 255, 0.2);
//         color: #d1d5db;
//       }
//     }
//   }
  
//   .tag-input {
//     background-color: rgba(255, 255, 255, 0.08);
//     border-color: rgba(255, 255, 255, 0.2);
//     color: #d1d5db;
    
//     &:focus {
//       background-color: rgba(255, 255, 255, 0.12);
//       border-color: #4a9eff;
//       box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
//     }
    
//     &::placeholder {
//       color: #6b7280;
//     }
//   }
  
//   .add-tag-btn {
//     border-color: rgba(255, 255, 255, 0.2);
//     color: #9ca3af;
    
//     &:hover {
//       background-color: rgba(255, 255, 255, 0.08);
//       border-color: rgba(255, 255, 255, 0.3);
//       color: #d1d5db;
//     }
//   }
  
//   .tag-suggestions {
//     @apply bg-[#1e1e1e] border-[#2a2a2a];
    
//     .suggestion-item {
//       color: #9ca3af;
      
//       &:hover {
//         background-color: rgba(74, 158, 255, 0.2);
//         color: #60a5fa;
//       }
//     }
//   }
// }
</style>
