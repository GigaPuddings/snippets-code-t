<template>
  <main class="category-container" :style="gridStyle">
    <section class="category-page" :class="{ 'category-page--collapsed': layoutStore.effectiveCategoryCollapsed }">
      <!-- 折叠态不显示边条/箭头；展开态仅显示内容，无折叠把手 -->
      <div v-if="!layoutStore.effectiveCategoryCollapsed" class="category-page__content">
        <QuickNav />
        <CategoryHeader
          :sort-order="categorySort"
          @sort="handleSort"
          @add="openAddCategoryDialog"
        />
        <CategoryListView
          :categories="categories"
          :edit-category-id="store.editCategoryId"
        />
      </div>
    </section>

    <section class="content-page">
      <router-view />
    </section>

    <PromptDialog
      v-model="showAddCategoryDialog"
      :title="$t('category.newFolder')"
      :message="$t('category.newFolder')"
      :placeholder="$t('category.newFolder')"
      :initial-value="newCategoryName"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      :required="true"
      :max-length="60"
      :validator="validateCategoryName"
      @confirm="handleConfirmAddCategory"
      @cancel="showAddCategoryDialog = false"
    />
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useConfigurationStore, useLayoutStore } from '@/store';
import { useCategoryManagement } from './composables/useCategoryManagement';
import CategoryHeader from './components/CategoryHeader.vue';
import CategoryListView from './components/CategoryListView.vue';
import { PromptDialog } from '@/components/UI';
import { addCategory, getCategories } from '@/api/fragment';
import modal from '@/utils/modal';

const store = useConfigurationStore();
const layoutStore = useLayoutStore();
const route = useRoute();
const { t } = useI18n();

const gridStyle = computed(() => ({
  gridTemplateColumns: layoutStore.effectiveCategoryCollapsed ? '0px 1fr' : '160px 1fr'
}));

defineOptions({
  name: 'Category'
});



// 使用分类管理 Composable
const {
  categories,
  categorySort,
  loadCategories,
  handleSort,
} = useCategoryManagement();

const showAddCategoryDialog = ref(false);
const newCategoryName = ref('');

const openAddCategoryDialog = () => {
  newCategoryName.value = '';
  showAddCategoryDialog.value = true;
};

const invalidCategoryChars = /[\\/:*?"<>|]/;

const validateCategoryName = (value: string) => {
  if (!value.trim()) {
    return { valid: false, message: t('category.emptyName') };
  }
  if (invalidCategoryChars.test(value)) {
    return { valid: false, message: t('category.invalidNameChars') };
  }
  if (store.categories.some(c => c.name.toLowerCase() === value.trim().toLowerCase())) {
    return { valid: false, message: t('category.duplicateName') };
  }
  return { valid: true };
};

const handleConfirmAddCategory = async (value: string) => {
  const name = value.trim();

  try {
    await addCategory(name);
    store.categories = await getCategories(store.categorySort);
    showAddCategoryDialog.value = false;
    modal.success(t('category.createSuccess'));
  } catch (error) {
    console.error('[Category] 创建分类失败:', error);
    modal.error(t('category.createFailed'));
  }
};

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
  transition: grid-template-columns 0.2s ease;

  .category-page {
    @apply relative bg-panel dark:bg-panel border dark:border-panel text-sm text-slate-700 rounded-md overflow-hidden flex;
    transition: min-width 0.2s ease;

    &.category-page--collapsed {
      @apply p-0 border-r border-panel;
    }
  }

  .category-page__content {
    @apply flex-1 flex flex-col overflow-hidden px-2 min-w-0;
  }

  .content-page {
    @apply overflow-hidden min-w-0;
  }
}
</style>
