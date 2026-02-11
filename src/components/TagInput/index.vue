<template>
  <div class="tag-input-container">
    <div class="tag-list">
      <span
        v-for="(tag, index) in modelValue"
        :key="index"
        class="tag-item"
        @dblclick="handleEditTag(index)"
      >
        <!-- 编辑模式 -->
        <input
          v-if="editingIndex === index"
          ref="editInputRef"
          v-model="editingValue"
          type="text"
          class="tag-edit-input"
          @keyup.enter="handleEditConfirm"
          @blur="handleEditBlur"
          @keyup.esc="handleEditCancel"
        />
        <!-- 显示模式 -->
        <template v-else>
          <span class="tag-text">{{ tag }}</span>
          <button class="tag-close" @click="handleRemoveTag(index)">
            <svg viewBox="0 0 24 24" width="12" height="12">
              <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </template>
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
        @mousedown.prevent="selectSuggestion(suggestion)"
      >
        {{ suggestion }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';

const { t } = useI18n();

/**
 * 组件 Props 接口
 */
interface TagInputProps {
  /** 标签列表（v-model） */
  modelValue: string[];
  /** 已存在的标签（用于建议） */
  existingTags?: string[];
}

/**
 * 组件 Emits 接口
 */
interface TagInputEmits {
  /** 更新标签列表 */
  (e: 'update:modelValue', value: string[]): void;
}

const props = withDefaults(defineProps<TagInputProps>(), {
  existingTags: () => []
});

const emit = defineEmits<TagInputEmits>();

const inputValue: Ref<string> = ref('');
const showInput: Ref<boolean> = ref(false);
const inputRef: Ref<HTMLInputElement | null> = ref(null);

// 编辑标签相关状态
const editingIndex: Ref<number> = ref(-1);
const editingValue: Ref<string> = ref('');
const editInputRef: Ref<HTMLInputElement | null> = ref(null);

// 过滤建议标签
const filteredSuggestions = computed<string[]>(() => {
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

/**
 * 显示输入框
 */
const showInputField = (): void => {
  showInput.value = true;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

/**
 * 验证标签
 * @param tag - 要验证的标签
 * @returns 是否有效
 */
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

/**
 * 确认输入
 */
const handleInputConfirm = (): void => {
  try {
    const tag = inputValue.value.trim();
    
    if (tag && validateTag(tag)) {
      const newTags = [...props.modelValue, tag];
      emit('update:modelValue', newTags);
    }
    
    inputValue.value = '';
    showInput.value = false;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.UNKNOWN_ERROR,
      operation: 'TagInput.handleInputConfirm',
      details: { tag: inputValue.value },
      timestamp: new Date()
    });
  }
};

/**
 * 处理输入框失焦
 */
const handleInputBlur = (): void => {
  // 延迟执行，给 mousedown 事件留出时间
  setTimeout(() => {
    handleInputConfirm();
  }, 150);
};

/**
 * 取消输入
 */
const handleInputCancel = (): void => {
  inputValue.value = '';
  showInput.value = false;
};

/**
 * 移除标签
 * @param index - 标签索引
 */
const handleRemoveTag = (index: number): void => {
  try {
    const newTags = props.modelValue.filter((_, i) => i !== index);
    emit('update:modelValue', newTags);
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.UNKNOWN_ERROR,
      operation: 'TagInput.handleRemoveTag',
      details: { index },
      timestamp: new Date()
    });
  }
};

/**
 * 开始编辑标签
 * @param index - 标签索引
 */
const handleEditTag = (index: number): void => {
  editingIndex.value = index;
  editingValue.value = props.modelValue[index];
  nextTick(() => {
    editInputRef.value?.focus();
    editInputRef.value?.select();
  });
};

/**
 * 确认编辑标签
 */
const handleEditConfirm = (): void => {
  try {
    const newTag = editingValue.value.trim();
    
    if (!newTag) {
      ElMessage.warning(t('tags.emptyTag'));
      return;
    }
    
    if (newTag.includes(',')) {
      ElMessage.warning(t('tags.noComma'));
      return;
    }
    
    // 检查是否与其他标签重复（排除当前编辑的标签）
    const isDuplicate = props.modelValue.some((tag, idx) => 
      idx !== editingIndex.value && tag === newTag
    );
    
    if (isDuplicate) {
      ElMessage.warning(t('tags.duplicateTag'));
      return;
    }
    
    // 更新标签
    const newTags = [...props.modelValue];
    newTags[editingIndex.value] = newTag;
    emit('update:modelValue', newTags);
    
    // 重置编辑状态
    editingIndex.value = -1;
    editingValue.value = '';
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.UNKNOWN_ERROR,
      operation: 'TagInput.handleEditConfirm',
      details: { tag: editingValue.value },
      timestamp: new Date()
    });
  }
};

/**
 * 取消编辑标签
 */
const handleEditCancel = (): void => {
  editingIndex.value = -1;
  editingValue.value = '';
};

/**
 * 处理编辑输入框失焦
 */
const handleEditBlur = (): void => {
  // 延迟执行，避免与其他操作冲突
  setTimeout(() => {
    if (editingIndex.value !== -1) {
      handleEditConfirm();
    }
  }, 150);
};

/**
 * 选择建议标签
 * @param tag - 标签名称
 */
const selectSuggestion = (tag: string): void => {
  try {
    if (validateTag(tag)) {
      const newTags = [...props.modelValue, tag];
      emit('update:modelValue', newTags);
    }
    
    inputValue.value = '';
    showInput.value = false;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.UNKNOWN_ERROR,
      operation: 'TagInput.selectSuggestion',
      details: { tag },
      timestamp: new Date()
    });
  }
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
    white-space: nowrap;
    
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
      white-space: nowrap;
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
        text-decoration-style: dashed;
      }
    }
    
    .tag-edit-input {
      @apply px-1 py-0 text-xs rounded outline-none;
      width: 80px;
      height: 20px;
      background-color: #fff;
      border: 1px solid #4a9eff;
      color: #333;
      box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.1);
    }
    
    .tag-close {
      @apply flex items-center justify-center w-4 h-4 rounded cursor-pointer;
      opacity: 0.6;
      transition: all 0.15s ease;
      color: #999;
      flex-shrink: 0;
      
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
