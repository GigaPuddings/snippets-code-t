<template>
  <div v-if="categories.length > 0" class="category-list">
    <CategoryItem
      v-for="item in categories"
      :key="item.id"
      :category="item"
      v-memo="[item.id, item.name, editCategoryId]"
    />
  </div>
  <div v-else class="category-empty">
    <div class="category-empty-text">{{ $t('nav.noFolders') }}</div>
  </div>
</template>

<script setup lang="ts">
import CategoryItem from '@/components/CategoryItem/index.vue';

/**
 * CategoryListView 组件 Props
 */
interface CategoryListViewProps {
  /** 分类列表 */
  categories: CategoryType[];
  /** 当前编辑的分类 ID */
  editCategoryId?: string | number;
}

defineOptions({
  name: 'CategoryListView'
});

defineProps<CategoryListViewProps>();
</script>

<style scoped lang="scss">
.category-list {
  @apply h-[calc(100vh-174px)] overflow-y-auto;
}

.category-empty {
  @apply flex justify-center h-full mt-6;

  .category-empty-text {
    @apply opacity-90 text-content text-xs select-none;
  }
}
</style>
