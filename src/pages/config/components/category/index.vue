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
import { onMounted, onUnmounted, watch } from 'vue';
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



// 使用分类管理 Composable
const {
  categories,
  categorySort,
  loadCategories,
  handleSort,
  handleAddCategory
} = useCategoryManagement();

// 监听数据刷新事件（Git Pull 完成后的无感刷新）
const handleRefreshData = (event: Event) => {
  const customEvent = event as CustomEvent;
  console.log('[Category] 收到数据刷新事件:', customEvent.detail);
  loadCategories(true);
};

// 监听目录变更事件（外部编辑器创建/删除/重命名文件夹）
const handleDirsChanged = (event: Event) => {
  const customEvent = event as CustomEvent<{
    source: string;
    created: string[];
    deleted: string[];
    renamed: Array<{ from: string; to: string }>;
  }>;
  const { created, deleted, renamed } = customEvent.detail;
  console.log(
    `[Category] dirs-changed-batch: +${created.length} -${deleted.length} r${renamed?.length ?? 0}，重新加载分类列表`
  );
  loadCategories(true);
};

// 初始化加载数据
onMounted(async () => {
  await loadCategories();

  window.addEventListener('refresh-data', handleRefreshData);
  window.addEventListener('refresh-categories', handleDirsChanged);
});

// 清理事件监听器
onUnmounted(() => {
  window.removeEventListener('refresh-data', handleRefreshData);
  window.removeEventListener('refresh-categories', handleDirsChanged);
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
