<template>
  <div class="category-header-list">
    <div class="category-header-title">{{ $t('category.folders') }}</div>
    <div class="category-header-action">
      <el-tooltip :content="$t('category.newFolder')" placement="bottom">
        <FolderPlus
          class="category-header-action-item-icon"
          theme="outline"
          size="16"
          :strokeWidth="3"
          @click="handleAdd"
        />
      </el-tooltip>
      <el-tooltip
        :content="sortOrder === 'asc' ? $t('category.ascending') : $t('category.descending')"
        placement="bottom"
      >
        <component
          class="category-header-action-item-icon"
          :is="sortOrder === 'asc' ? SortAmountUp : SortAmountDown"
          @click="handleSort"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SortAmountUp, SortAmountDown, FolderPlus } from '@icon-park/vue-next';

/**
 * CategoryHeader 组件 Props
 */
interface CategoryHeaderProps {
  /** 排序方式：'asc' 升序 | 'desc' 降序 */
  sortOrder: 'asc' | 'desc';
}

/**
 * CategoryHeader 组件 Emits
 */
interface CategoryHeaderEmits {
  /** 点击排序按钮时触发 */
  (e: 'sort'): void;
  /** 点击添加分类按钮时触发 */
  (e: 'add'): void;
}

defineOptions({
  name: 'CategoryHeader'
});

const props = defineProps<CategoryHeaderProps>();
const emit = defineEmits<CategoryHeaderEmits>();

const handleSort = () => {
  emit('sort');
};

const handleAdd = () => {
  emit('add');
};
</script>

<style scoped lang="scss">
.category-header-list {
  @apply flex justify-between items-center mt-2;

  .category-header-title {
    @apply px-1 opacity-90 text-content text-xs select-none;
  }

  .category-header-action {
    @apply flex items-center;

    .category-header-action-item-icon {
      @apply p-1 rounded-md cursor-pointer text-content hover:bg-hover dark:hover:bg-hover;
    }
  }
}
</style>
