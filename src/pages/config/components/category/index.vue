<template>
  <main class="category-container">
    <section class="category-page">
      <QuickNav />
      
      <!-- 分类头部 -->
      <CategoryHeader
        :sort-order="categorySort"
        @sort="handleSort"
        @add="handleAddCategory"
      />
      
      <!-- 分类列表 -->
      <CategoryListView
        :categories="categories"
        :edit-category-id="store.editCategoryId"
      />
    </section>
    
    <section class="content-page">
      <router-view />
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { useCategoryManagement } from './composables/useCategoryManagement';
import CategoryHeader from './components/CategoryHeader.vue';
import CategoryListView from './components/CategoryListView.vue';

const store = useConfigurationStore();
const route = useRoute();

defineOptions({
  name: 'Category'
});

// 添加生命周期日志
onMounted(() => {
  console.log('[Category] 组件挂载');
});

onBeforeUnmount(() => {
  console.log('[Category] 组件卸载');
});

// 监听路由变化
watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    console.log('[Category] 路由变化:', { from: oldPath, to: newPath });
  }
);

// 使用分类管理 Composable
const {
  categories,
  categorySort,
  loadCategories,
  handleSort,
  handleAddCategory
} = useCategoryManagement();

// 初始化加载数据
onMounted(async () => {
  await loadCategories();
});

// 监听路由变化，清除编辑状态
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      store.editCategoryId = '';
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.category-container {
  @apply w-full h-full overflow-hidden;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 160px 1fr;

  .category-page {
    @apply relative bg-panel dark:bg-panel border dark:border-panel px-2 text-sm text-slate-700 rounded-md;
  }

  .content-page {
    @apply overflow-hidden;
  }
}
</style>
