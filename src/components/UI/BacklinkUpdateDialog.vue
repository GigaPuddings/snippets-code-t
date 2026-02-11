<template>
  <teleport to="body">
    <div v-if="modelValue" class="dialog-overlay" @click="handleCancel">
      <div class="dialog-container" @click.stop>
        <div class="dialog-header">
          <h3 class="dialog-title">{{ title || $t('dialog.updateBacklinks.title') }}</h3>
          <button class="close-btn" @click="handleCancel">
            <span>×</span>
          </button>
        </div>
        
        <div class="dialog-content">
          <!-- 重命名场景 -->
          <p v-if="!isDeleteMode" class="message">
            {{ $t('dialog.updateBacklinks.message', { oldTitle: fragmentTitle, newTitle: newFragmentTitle, count: backlinkCount }) }}
          </p>
          
          <!-- 删除场景 -->
          <div v-else>
            <p class="message">
              {{ $t('backlinks.deleteMessage', { title: fragmentTitle, count: backlinkCount }) }}
            </p>
            <div class="delete-options">
              <p class="options-title">{{ $t('backlinks.deleteOptions') }}</p>
              <label class="option-item">
                <input type="radio" v-model="deleteOption" value="deleteOnly" />
                <span>{{ $t('backlinks.deleteOnly') }}</span>
              </label>
              <label class="option-item">
                <input type="radio" v-model="deleteOption" value="deleteAndRemoveLinks" />
                <span>{{ $t('backlinks.deleteAndRemoveLinks') }}</span>
              </label>
            </div>
          </div>
          
          <div v-if="backlinkFragments.length > 0" class="backlink-list">
            <p class="list-title">{{ $t('dialog.updateBacklinks.affectedFragments') }}</p>
            <ul class="backlink-items">
              <li v-for="fragment in backlinkFragments" :key="fragment.id" class="backlink-item">
                <span class="fragment-title">{{ fragment.title }}</span>
                <span class="occurrence-count">({{ fragment.occurrences }} {{ $t('dialog.updateBacklinks.occurrences') }})</span>
              </li>
            </ul>
          </div>
          
          <div v-if="updating" class="progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
            </div>
            <p class="progress-text">{{ $t('dialog.updateBacklinks.updating') }} {{ progress }}%</p>
          </div>
          
          <div v-if="result" class="result">
            <p v-if="result.successCount > 0" class="success">
              ✓ {{ $t('dialog.updateBacklinks.successCount', { count: result.successCount }) }}
            </p>
            <p v-if="result.failureCount > 0" class="error">
              ✗ {{ $t('dialog.updateBacklinks.failureCount', { count: result.failureCount }) }}
            </p>
          </div>
        </div>
        
        <div class="dialog-footer">
          <button 
            v-if="!updating && !result" 
            class="btn btn-secondary" 
            @click="handleCancel"
          >
            {{ cancelText || $t('common.cancel') }}
          </button>
          <button 
            v-if="!updating && !result" 
            class="btn btn-primary" 
            @click="handleConfirm"
          >
            {{ confirmText || $t('dialog.updateBacklinks.confirm') }}
          </button>
          <button 
            v-if="result" 
            class="btn btn-primary" 
            @click="handleClose"
          >
            {{ $t('common.close') }}
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { updateBacklinks, type UpdateBacklinksResult } from '@/utils/wikilink-updater';

interface Props {
  modelValue: boolean;
  title?: string;
  fragmentTitle: string;
  newFragmentTitle?: string;
  backlinkCount: number;
  backlinkFragments: Array<{ id: number; title: string; occurrences: number }>;
  confirmText?: string;
  cancelText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  newFragmentTitle: '',
  confirmText: '',
  cancelText: ''
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  confirm: [shouldUpdate: boolean];
  cancel: [];
}>();

const updating = ref(false);
const progress = ref(0);
const result = ref<UpdateBacklinksResult | null>(null);
const deleteOption = ref<'deleteOnly' | 'deleteAndRemoveLinks'>('deleteOnly');

// 判断是否为删除模式（没有 newFragmentTitle 表示删除）
const isDeleteMode = computed(() => !props.newFragmentTitle);

// 当对话框显示时重置状态
watch(() => props.modelValue, (visible) => {
  if (visible) {
    result.value = null;
    progress.value = 0;
    deleteOption.value = 'deleteOnly';
  }
});

const handleConfirm = async () => {
  if (isDeleteMode.value) {
    // 删除模式：根据用户选择决定是否更新反向链接
    const shouldUpdate = deleteOption.value === 'deleteAndRemoveLinks';
    emit('confirm', shouldUpdate);
    emit('update:modelValue', false);
  } else {
    // 重命名模式：执行反向链接更新
    updating.value = true;
    progress.value = 0;
    
    try {
      // 模拟进度更新
      const progressInterval = setInterval(() => {
        if (progress.value < 90) {
          progress.value += 10;
        }
      }, 100);
      
      // 执行更新
      const updateResult = await updateBacklinks(props.fragmentTitle, props.newFragmentTitle);
      
      clearInterval(progressInterval);
      progress.value = 100;
      result.value = updateResult;
      
      emit('confirm', true);
    } catch (error) {
      console.error('Failed to update backlinks:', error);
    } finally {
      updating.value = false;
    }
  }
};

const handleCancel = () => {
  if (!updating.value) {
    emit('cancel');
    emit('update:modelValue', false);
  }
};

const handleClose = () => {
  emit('update:modelValue', false);
};
</script>

<script lang="ts">
export default {
  name: 'BacklinkUpdateDialog'
};
</script>

<style scoped lang="scss">
.dialog-overlay {
  @apply fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50;
}

.dialog-container {
  @apply bg-white rounded-lg shadow-xl max-w-md w-full mx-4;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.dialog-header {
  @apply flex items-center justify-between p-4 border-b;
  flex-shrink: 0;
}

.dialog-title {
  @apply text-lg font-semibold;
}

.close-btn {
  @apply text-gray-400 hover:text-gray-600 text-2xl leading-none;
  
  span {
    @apply block;
  }
}

.dialog-content {
  @apply p-4 flex-1 max-h-96;;
}

.message {
  @apply text-gray-700 mb-4;
}

.delete-options {
  @apply mt-4 mb-4 p-3 bg-gray-50 rounded;
}

.options-title {
  @apply text-sm font-semibold text-gray-600 mb-2;
}

.option-item {
  @apply flex items-center gap-2 py-1 cursor-pointer;
  
  input[type="radio"] {
    @apply cursor-pointer;
  }
  
  span {
    @apply text-sm text-gray-700;
  }
}

.backlink-list {
  @apply mt-4 mb-4;
}

.list-title {
  @apply text-sm font-semibold text-gray-600 mb-2;
}

.backlink-items {
  @apply max-h-32 overflow-auto;
}

.backlink-item {
  @apply flex items-center justify-between py-2 px-3 bg-gray-50 rounded mb-2;
}

.fragment-title {
  @apply text-sm text-gray-800;
}

.occurrence-count {
  @apply text-xs text-gray-500;
}

.progress {
  @apply mt-4;
}

.progress-bar {
  @apply w-full h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress-fill {
  @apply h-full bg-blue-600 transition-all duration-300;
}

.progress-text {
  @apply text-sm text-gray-600 mt-2 text-center;
}

.result {
  @apply mt-4;
}

.success {
  @apply text-green-600 text-sm;
}

.error {
  @apply text-red-600 text-sm mt-1;
}

.dialog-footer {
  @apply flex items-center justify-end gap-2 p-4 border-t;
  flex-shrink: 0;
}

.btn {
  @apply px-4 py-2 rounded transition-colors;
}

.btn-secondary {
  @apply bg-gray-200 hover:bg-gray-300 text-gray-800;
}

.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white;
}

/* 暗色主题 */
.dark {
  .dialog-container {
    @apply bg-gray-800;
  }
  
  .dialog-title {
    @apply text-gray-100;
  }
  
  .close-btn {
    @apply text-gray-400 hover:text-gray-200;
  }
  
  .message {
    @apply text-gray-300;
  }
  
  .delete-options {
    @apply bg-gray-700;
  }
  
  .options-title {
    @apply text-gray-400;
  }
  
  .option-item span {
    @apply text-gray-300;
  }
  
  .list-title {
    @apply text-gray-400;
  }
  
  .backlink-item {
    @apply bg-gray-700;
  }
  
  .fragment-title {
    @apply text-gray-200;
  }
  
  .occurrence-count {
    @apply text-gray-400;
  }
  
  .progress-bar {
    @apply bg-gray-700;
  }
  
  .progress-text {
    @apply text-gray-400;
  }
  
  .btn-secondary {
    @apply bg-gray-700 hover:bg-gray-600 text-gray-200;
  }
}
</style>
