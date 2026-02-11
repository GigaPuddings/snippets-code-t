<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="visible" class="filter-panel-overlay" @click="handleClose">
        <transition name="slide-fade">
          <div v-if="visible" class="filter-panel-popup" @click.stop>
            <div class="panel-header">
              <span class="panel-title">{{ $t('search.filterPanel') }}</span>
              <Close
                class="close-icon"
                theme="outline"
                size="18"
                :strokeWidth="2"
                @click="handleClose"
              />
            </div>

            <div class="panel-content">
              <div class="filter-section">
                <div class="section-title">{{ $t('contentItem.filterByType') }}</div>
                <el-radio-group v-model="localFilter.type" size="small" class="type-radio-group">
                  <el-radio-button value="all">{{ $t('search.allTypes') }}</el-radio-button>
                  <el-radio-button value="code">{{ $t('contentItem.codeSnippet') }}</el-radio-button>
                  <el-radio-button value="note">{{ $t('contentItem.note') }}</el-radio-button>
                </el-radio-group>
              </div>

              <div v-if="availableTags.length > 0" class="filter-section">
                <div class="section-title">{{ $t('tags.tags') }}</div>
                <div class="tags-container">
                  <div class="tags-list">
                    <div
                      v-for="tag in availableTags"
                      :key="tag"
                      class="tag-item"
                      :class="{ active: localSelectedTags.includes(tag) }"
                      @click="toggleTag(tag)"
                    >
                      <span class="tag-text">{{ tag }}</span>
                      <Check v-if="localSelectedTags.includes(tag)" theme="filled" size="14" class="tag-check" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="filter-section">
                <div class="section-title">{{ $t('search.sortBy') }}</div>
                <div class="sort-options">
                  <div
                    v-for="option in sortOptions"
                    :key="option.value"
                    class="sort-option"
                    :class="{ active: sortOption === option.value }"
                    @click="sortOption = option.value"
                  >
                    <div class="sort-option-content">
                      <component :is="option.icon" theme="outline" size="16" :strokeWidth="3" />
                      <span class="sort-option-label">{{ option.label }}</span>
                    </div>
                    <Check v-if="sortOption === option.value" theme="filled" size="14" class="sort-check" />
                  </div>
                </div>
              </div>
            </div>

            <div class="panel-footer">
              <el-button size="small" @click="handleReset">
                {{ $t('search.resetFilter') }}
              </el-button>
              <el-button type="primary" size="small" @click="handleApply">
                {{ $t('search.applyFilter') }}
              </el-button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { Close, Check, SortAmountDown, Time, Edit } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

/**
 * FilterPanel 组件的 Props 接口
 */
interface FilterPanelProps {
  /** 面板是否可见 */
  visible: boolean;
  /** 当前筛选条件 */
  filter: SearchFilter;
  /** 可用的标签列表 */
  availableTags: string[];
}

/**
 * FilterPanel 组件的 Emits 接口
 */
interface FilterPanelEmits {
  /** 更新筛选条件 */
  'update:filter': [filter: SearchFilter];
  /** 关闭面板 */
  'close': [];
  /** 重置所有筛选（包括搜索框） */
  'reset': [];
}

/**
 * 排序选项配置接口
 */
interface SortOption {
  /** 选项显示标签 */
  label: string;
  /** 选项值 */
  value: string;
  /** 选项图标组件 */
  icon: unknown;
}

const props = defineProps<FilterPanelProps>();
const emit = defineEmits<FilterPanelEmits>();

// 本地筛选条件
const localFilter = ref<SearchFilter>({ ...props.filter });
// 使用独立的本地标签数组，避免与外部状态混淆
const localSelectedTags = ref<string[]>([...(props.filter.tags || [])]);

// 排序选项（合并排序字段和顺序）
const sortOption = ref<string>('');

// 排序选项配置
const sortOptions = computed<SortOption[]>(() => [
  { label: t('search.defaultSort'), value: '', icon: SortAmountDown },
  { label: t('search.createdDesc'), value: 'created-desc', icon: Time },
  { label: t('search.createdAsc'), value: 'created-asc', icon: Time },
  { label: t('search.updatedDesc'), value: 'updated-desc', icon: Edit },
  { label: t('search.updatedAsc'), value: 'updated-asc', icon: Edit },
]);

// 初始化排序选项
if (props.filter.sortBy && props.filter.sortOrder) {
  sortOption.value = `${props.filter.sortBy}-${props.filter.sortOrder}`;
}

/**
 * 切换标签选择状态
 * @param tag - 要切换的标签
 */
function toggleTag(tag: string): void {
  const index = localSelectedTags.value.indexOf(tag);
  if (index > -1) {
    // 取消选中
    localSelectedTags.value.splice(index, 1);
  } else {
    // 选中
    localSelectedTags.value.push(tag);
  }
}

// 监听面板显示状态，重新同步标签选择
watch(() => props.visible, (visible: boolean) => {
  if (visible) {
    // 面板打开时，完全重置本地状态为外部传入的状态
    localFilter.value = { ...props.filter };
    localSelectedTags.value = [...(props.filter.tags || [])];
    
    if (props.filter.sortBy && props.filter.sortOrder) {
      sortOption.value = `${props.filter.sortBy}-${props.filter.sortOrder}`;
    } else {
      sortOption.value = '';
    }
  }
});

// 监听标签选择变化，更新 localFilter
watch(localSelectedTags, (newTags: string[]) => {
  localFilter.value.tags = newTags.length > 0 ? [...newTags] : undefined;
}, { deep: true });

// 监听排序选项变化
watch(sortOption, (option: string) => {
  if (option) {
    const [sortBy, sortOrder] = option.split('-');
    localFilter.value.sortBy = sortBy as 'created' | 'updated';
    localFilter.value.sortOrder = sortOrder as 'asc' | 'desc';
  } else {
    localFilter.value.sortBy = undefined;
    localFilter.value.sortOrder = undefined;
  }
});

/**
 * 关闭筛选面板
 */
function handleClose(): void {
  emit('close');
}

/**
 * 应用筛选条件
 */
function handleApply(): void {
  // 创建一个新的筛选对象，确保标签数组是新的引用
  const newFilter: SearchFilter = {
    ...localFilter.value,
    tags: localSelectedTags.value.length > 0 ? [...localSelectedTags.value] : undefined
  };
  emit('update:filter', newFilter);
  emit('close');
}

/**
 * 重置筛选条件
 */
function handleReset(): void {
  localFilter.value = { type: 'all' };
  localSelectedTags.value = [];
  sortOption.value = '';
  
  // 通知父组件重置所有筛选（包括搜索框）
  emit('reset');
  emit('update:filter', { type: 'all' });
}
</script>

<style scoped lang="scss">
// 遮罩层
.filter-panel-overlay {
  @apply fixed inset-0 z-50 flex items-center justify-center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}

// 悬浮面板
.filter-panel-popup {
  @apply bg-panel rounded-lg shadow-2xl w-full max-w-md mx-4;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

// 面板头部
.panel-header {
  @apply flex items-center justify-between px-4 py-3 border-b border-panel;
  
  .panel-title {
    @apply text-sm font-medium text-content;
  }
  
  .close-icon {
    @apply text-panel cursor-pointer hover:text-content transition-colors;
  }
}

// 面板内容
.panel-content {
  @apply px-4 py-3;
  overflow-y: visible;
  flex-shrink: 1;
  min-height: 0;
}

.filter-section {
  @apply mb-3;
  
  &:last-of-type {
    @apply mb-0;
  }
  
  .section-title {
    @apply text-xs font-medium text-content mb-2;
  }
  
  .type-radio-group {
    @apply w-full;
    
    :deep(.el-radio-button) {
      flex: 1;
      
      .el-radio-button__inner {
        @apply w-full;
      }
    }
  }
  
  .date-range-controls {
    @apply w-full;
    
    .date-range-picker {
      @apply w-full;
      
      :deep(.el-range-input) {
        font-size: 12px;
      }
    }
  }
  
  .sort-controls {
    @apply w-full;
    
    .sort-select-full {
      @apply w-full;
    }
  }
  
  .sort-options {
    @apply flex flex-col gap-2;
    
    .sort-option {
      @apply flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all;
      @apply bg-transparent hover:bg-hover border border-transparent;
      
      &.active {
        @apply bg-active border-blue-500;
        
        .sort-option-content {
          @apply text-white;
        }
        
        .sort-option-check {
          @apply text-white;
        }
      }
      
      .sort-option-content {
        @apply flex items-center gap-2 text-content;
        
        .sort-option-label {
          @apply text-xs;
        }
      }
      
      .sort-check {
        @apply text-white;
      }
    }
  }
}

.tags-container {
  @apply flex flex-col gap-2 max-h-20 overflow-auto;
  
  .tags-list {
    @apply grid grid-cols-2 gap-2;
  }
  
  .tag-item {
    @apply min-h-9 flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all bg-transparent hover:bg-hover border border-transparent;
    
    &.active {
      @apply bg-active border-blue-500;
      
      .tag-text {
        @apply text-white;
      }
      
      .tag-check {
        @apply text-white;
      }
    }
    
    .tag-text {
      @apply text-xs text-content truncate flex-1;
    }
    
    .tag-check {
      @apply text-blue-500 flex-shrink-0 ml-2;
    }
  }
  
  // 自定义滚动条
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    @apply bg-transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    @apply bg-panel rounded-full;
    
    &:hover {
      @apply bg-hover;
    }
  }
}

// 面板底部
.panel-footer {
  @apply flex justify-end gap-2 px-4 py-3 border-t border-panel;
}

// 淡入淡出动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// 滑动淡入动画
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
