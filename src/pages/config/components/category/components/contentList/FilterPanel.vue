<template>
  <CommonDialog
    :model-value="visible"
    :title="$t('search.filterPanel')"
    width="420px"
    top="6vh"
    custom-class="filter-panel-dialog"
    @update:model-value="val => !val && handleClose()"
  >
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

    <template #footer>
      <div class="panel-footer">
        <el-button size="small" @click="handleReset">
          {{ $t('search.resetFilter') }}
        </el-button>
        <el-button type="primary" size="small" @click="handleApply">
          {{ $t('search.applyFilter') }}
        </el-button>
      </div>
    </template>
  </CommonDialog>
</template>

<script setup lang="ts">
import { Check, SortAmountDown, Time, Edit } from '@icon-park/vue-next';
import { CommonDialog } from '@/components/UI';
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
.panel-content {
  max-height: min(56vh, 420px);
  overflow-y: auto;
  padding-right: 2px;
}

.filter-section {
  @apply mb-4;

  &:last-of-type {
    @apply mb-0;
  }

  .section-title {
    @apply text-xs font-medium mb-2;
    color: var(--dialog-text-secondary);
  }

  .type-radio-group {
    @apply w-full;

    :deep(.el-radio-button) {
      flex: 1;

      .el-radio-button__inner {
        @apply w-full;
        height: 30px;
        padding: 0 10px;
        border-color: var(--dialog-border);
        background: var(--panel-bg);
        color: var(--dialog-text-secondary);
        font-size: 12px;
        line-height: 28px;
        box-shadow: none;
        transition: background-color 0.16s ease, border-color 0.16s ease, color 0.16s ease;
      }

      &.is-active .el-radio-button__inner {
        border-color: var(--search-result-accent);
        background: var(--search-result-accent);
        color: #fff;
      }

      &:not(.is-active) .el-radio-button__inner:hover {
        background: var(--panel-hover-bg);
        color: var(--dialog-text);
      }
    }
  }

  .sort-options {
    @apply flex flex-col gap-1;

    .sort-option {
      @apply flex items-center justify-between cursor-pointer transition-all;
      min-height: 34px;
      padding: 7px 9px;
      border: 1px solid transparent;
      border-radius: 7px;
      background: transparent;

      &:hover {
        border-color: var(--dialog-border);
        background: var(--panel-hover-bg);
      }

      &.active {
        border-color: var(--search-result-active-border);
        background: var(--search-result-active);

        .sort-option-content {
          color: var(--dialog-text);
        }

        .sort-option-check {
          color: var(--search-result-accent);
        }
      }

      .sort-option-content {
        @apply flex items-center gap-2;
        color: var(--dialog-text-secondary);

        .sort-option-label {
          @apply text-xs;
        }
      }

      .sort-check {
        color: var(--search-result-accent);
      }
    }
  }
}

.tags-container {
  @apply flex flex-col gap-2 overflow-auto;
  max-height: 104px;

  .tags-list {
    @apply grid grid-cols-2 gap-1.5;
  }

  .tag-item {
    @apply flex items-center justify-between cursor-pointer transition-all;
    min-height: 31px;
    padding: 6px 9px;
    border: 1px solid var(--dialog-border);
    border-radius: 7px;
    background: var(--search-soft-bg);

    &:hover {
      border-color: var(--search-result-active-border);
      background: var(--panel-hover-bg);
    }

    &.active {
      border-color: var(--search-result-active-border);
      background: var(--search-result-active);

      .tag-text {
        color: var(--dialog-text);
        font-weight: 600;
      }

      .tag-check {
        color: var(--search-result-accent);
      }
    }

    .tag-text {
      @apply text-xs truncate flex-1;
      color: var(--dialog-text);
    }

    .tag-check {
      @apply flex-shrink-0 ml-2;
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  &::-webkit-scrollbar-thumb {
    @apply rounded-full;
    background: var(--dialog-border);

    &:hover {
      background: var(--dialog-text-secondary);
    }
  }
}

.panel-footer {
  @apply flex justify-end gap-2;

  :deep(.el-button) {
    height: 30px;
    padding: 0 13px;
    border-radius: 7px;
    font-size: 12px;
  }
}

:global(.filter-panel-dialog.el-dialog) {
  max-width: calc(100vw - 32px);
}

:global(.filter-panel-dialog.el-dialog .el-dialog__body) {
  padding: 14px 18px !important;
}

:global(.filter-panel-dialog.el-dialog .el-dialog__footer) {
  padding: 10px 18px !important;
}
</style>
