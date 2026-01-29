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
                  <RecycleScroller
                    v-if="availableTags.length > 10"
                    class="tags-scroller"
                    :items="tagItems"
                    :item-size="32"
                    :buffer="100"
                    key-field="tag"
                    v-slot="{ item }"
                  >
                    <el-checkbox
                      :model-value="selectedTags.includes(item.tag)"
                      :value="item.tag"
                      class="tag-checkbox"
                      @change="handleTagToggle(item.tag, $event)"
                    >
                      {{ item.tag }}
                    </el-checkbox>
                  </RecycleScroller>
                  <el-checkbox-group v-else v-model="selectedTags" size="small">
                    <el-checkbox
                      v-for="tag in availableTags"
                      :key="tag"
                      :value="tag"
                      class="tag-checkbox"
                    >
                      {{ tag }}
                    </el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>

              <div class="filter-section">
                <div class="section-title">{{ $t('search.sortBy') }}</div>
                <div class="sort-controls">
                  <el-select v-model="sortOption" size="small" class="sort-select-full">
                    <el-option :label="$t('search.defaultSort')" value="" />
                    <el-option :label="$t('search.createdDesc')" value="created-desc" />
                    <el-option :label="$t('search.createdAsc')" value="created-asc" />
                    <el-option :label="$t('search.updatedDesc')" value="updated-desc" />
                    <el-option :label="$t('search.updatedAsc')" value="updated-asc" />
                  </el-select>
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
import { Close } from '@icon-park/vue-next';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

interface Props {
  visible: boolean;
  filter: SearchFilter;
  availableTags: string[];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:filter': [filter: SearchFilter];
  'close': [];
}>();

// 本地筛选条件
const localFilter = ref<SearchFilter>({ ...props.filter });
const selectedTags = ref<string[]>(props.filter.tags || []);

// 排序选项（合并排序字段和顺序）
const sortOption = ref<string>('');

// 将标签数组转换为对象数组（用于虚拟滚动）
const tagItems = computed(() => {
  return props.availableTags.map(tag => ({ tag }));
});

// 初始化排序选项
if (props.filter.sortBy && props.filter.sortOrder) {
  sortOption.value = `${props.filter.sortBy}-${props.filter.sortOrder}`;
}

// 监听外部 filter 变化
watch(() => props.filter, (newFilter) => {
  localFilter.value = { ...newFilter };
  selectedTags.value = newFilter.tags || [];
  
  if (newFilter.sortBy && newFilter.sortOrder) {
    sortOption.value = `${newFilter.sortBy}-${newFilter.sortOrder}`;
  } else {
    sortOption.value = '';
  }
}, { deep: true });

// 监听标签选择变化
watch(selectedTags, (newTags) => {
  localFilter.value.tags = newTags.length > 0 ? newTags : undefined;
});

// 监听排序选项变化
watch(sortOption, (option) => {
  if (option) {
    const [sortBy, sortOrder] = option.split('-');
    localFilter.value.sortBy = sortBy as 'created' | 'updated';
    localFilter.value.sortOrder = sortOrder as 'asc' | 'desc';
  } else {
    localFilter.value.sortBy = undefined;
    localFilter.value.sortOrder = undefined;
  }
});

// 处理标签切换（用于虚拟滚动）
function handleTagToggle(tag: string, checked: any) {
  const isChecked = Boolean(checked);
  if (isChecked) {
    if (!selectedTags.value.includes(tag)) {
      selectedTags.value.push(tag);
    }
  } else {
    const index = selectedTags.value.indexOf(tag);
    if (index > -1) {
      selectedTags.value.splice(index, 1);
    }
  }
}

// 关闭面板
function handleClose() {
  emit('close');
}

// 应用筛选
function handleApply() {
  emit('update:filter', { ...localFilter.value });
  emit('close');
}

// 重置筛选
function handleReset() {
  localFilter.value = { type: 'all' };
  selectedTags.value = [];
  sortOption.value = '';
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
  @apply flex-1 overflow-y-auto px-4 py-3;
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
}

.tags-container {
  @apply max-h-48 overflow-hidden;
  
  .tags-scroller {
    height: 192px; // max-h-48 = 12rem = 192px
    
    :deep(.vue-recycle-scroller__item-view) {
      padding-right: 8px;
    }
  }
  
  // 非虚拟滚动时的样式
  .el-checkbox-group {
    @apply max-h-48 overflow-y-auto pr-2 block;
  }
  
  // 自定义滚动条
  :deep(.vue-recycle-scroller__item-wrapper),
  .el-checkbox-group {
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
  
  .tag-checkbox {
    @apply block mb-2;
    
    &:last-child {
      @apply mb-0;
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
