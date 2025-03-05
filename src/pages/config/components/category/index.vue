<template>
  <main class="category-container">
    <section class="category-page">
      <QuickNav />
      <div class="category-header-list">
        <div class="category-header-title">文件夹</div>
        <div class="category-header-action">
          <el-tooltip content="新建" placement="bottom">
            <FolderPlus
              class="category-header-action-item-icon"
              theme="outline"
              size="16"
              :strokeWidth="3"
              @click="handleAddCategory"
            />
          </el-tooltip>
          <el-tooltip
            :content="store.categorySort === 'asc' ? '升序' : '降序'"
            placement="bottom"
          >
            <component
              class="category-header-action-item-icon"
              :is="store.categorySort === 'asc' ? SortAmountUp : SortAmountDown"
              @click="handleSort"
            />
          </el-tooltip>
        </div>
      </div>
      <div v-if="store.categories.length > 0" class="category-list">
        <CategoryItem
          v-for="item in store.categories"
          :key="item.id"
          :category="item"
          v-memo="[item.id, item.name, store.editCategoryId]"
        />
      </div>
      <div v-else class="category-empty">
        <div class="category-empty-text">暂无文件夹</div>
      </div>
    </section>
    <section class="content-page">
      <router-view />
    </section>
  </main>
</template>

<script setup lang="ts">
import { SortAmountUp, SortAmountDown, FolderPlus } from '@icon-park/vue-next';
import { useConfigurationStore } from '@/store';
import { getCategories, addCategory } from '@/database/category';
import { getFragmentList } from '@/database/fragment';
import { useRoute, useRouter } from 'vue-router';
const store = useConfigurationStore();
const route = useRoute();
const router = useRouter();

defineOptions({
  name: 'Category',
  keepAlive: true
});

// 获取分类
const queryCategories = async () => {
  const res = await getCategories(store.categorySort);
  return res;
};

// 获取片段列表
const queryFragments = async () => {
  const result = await getFragmentList();
  return result;
};

onMounted(async () => {
  if (store.categories.length === 0 && store.contents.length === 0) {
    // 获取分类
    store.categories = await queryCategories();
    // 获取片段列表
    store.contents = await queryFragments();
  }
});

const handleSort = async () => {
  store.categorySort = store.categorySort === 'asc' ? 'desc' : 'asc';
  store.categories = await getCategories(store.categorySort);
};

const handleAddCategory = async () => {
  const category_id = await addCategory();
  store.categories = await queryCategories();
  store.editCategoryId = category_id.toString();
  router.replace(`/config/category/contentList/${category_id}`);
};

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      store.editCategoryId = '';
    }
  },
  { immediate: true }
);

onMounted(async () => {
  if (store.categories.length === 0) {
    store.categories = await getCategories(store.categorySort);
  }
});
</script>

<style scoped lang="scss">
.category-container {
  @apply w-full h-full overflow-hidden pb-4;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 160px 1fr;

  .category-page {
    @apply bg-panel dark:bg-panel px-2 text-sm text-slate-700 rounded-md;

    .category-header-list {
      @apply flex justify-between items-center mt-2;

      .category-header-title {
        @apply px-1 opacity-90 text-content text-xs select-none;
      }

      .category-header-action {
        @apply flex items-center;

        .category-header-action-item-icon {
          @apply p-1 rounded-md cursor-pointer text-content hover:bg-active dark:hover:bg-hover;
        }
      }
    }

    .category-empty {
      @apply flex justify-center items-center h-full;

      .category-empty-text {
        @apply text-gray-500;
      }
    }

    .category-list {
      @apply h-[calc(100vh-175px)] overflow-y-auto;
    }
  }

  .content-page {
    @apply overflow-hidden;
  }
}
</style>
