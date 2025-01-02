<template>
  <main class="category-container">
    <div class="category-page">
      <QuickNav />
      <div class="category-header-list">
        <div class="category-header-title">文件夹</div>
        <div class="category-header-action">
          <el-tooltip content="新建" placement="bottom" :show-arrow="false">
            <FolderPlus class="category-header-action-item-icon" theme='outline' size='16' :strokeWidth="3"
              @click="handleAddCategory" />
          </el-tooltip>
          <el-tooltip :content="store.categorySort === 'asc' ? '升序' : '降序'" placement="bottom" :show-arrow="false">
            <component class="category-header-action-item-icon" :is="store.categorySort === 'asc' ? SortAmountUp : SortAmountDown"
              @click="handleSort" />
          </el-tooltip>
        </div>
      </div>
      <div class="category-list">
        <CategoryItem 
            v-for="item in store.categories" 
            :key="item.id" 
            :category="item"
            v-memo="[item.id, item.name, store.editCategoryId]"
          />
      </div>
    </div>
    <div class="content-page">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import { SortAmountUp, SortAmountDown, FolderPlus } from '@icon-park/vue-next'
import { useConfigurationStore } from '@/store'
import { getCategories, addCategory } from '@/database/category'
// import { useCategory } from '@/hooks/useCategory'
import { useRoute } from 'vue-router'
// const { getCategories, addCategory } = useCategory()
const store = useConfigurationStore()
const route = useRoute()

defineOptions({
  name: 'Category'
})

onMounted(() => {
  console.log('Category mounted')
  console.log('route', route);
  
})

const handleSort = async () => {
  store.categorySort = store.categorySort === 'asc' ? 'desc' : 'asc'
  store.categories = await getCategories(store.categorySort)
}

const handleAddCategory = async () => {
  const id = await addCategory()
  store.categories = await getCategories(store.categorySort)
  store.editCategoryId = id.toString()
}


watch(() => route.params.id, (newId) => {
  if (newId) {
    store.editCategoryId = ''
  }
}, { immediate: true })

onMounted(async () => {
  if (store.categories.length === 0) {
    store.categories = await getCategories(store.categorySort)
  }
})
</script>

<style scoped lang="scss">
.category-container {
  @apply bg-gray-100 dark:bg-[#22282c] w-screen h-screen overflow-hidden;
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-template-rows: 1fr;

  .category-page {
    @apply border-r dark:border-r-[#000] px-2 text-sm text-slate-700;

    .category-header-list {
      @apply flex justify-between items-center mt-2;

      .category-header-title {
        @apply px-1 opacity-90 text-gray-400 text-xs;
      }

      .category-header-action {
        @apply flex items-center;

        .category-header-action-item-icon {
          @apply p-1 rounded-md cursor-pointer text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800;
        }
      }
    }

    .category-list {
      height: calc(100vh - 120px);
      overflow: hidden;
    }
  }

  .content-page {
    @apply bg-gray-100 dark:bg-[#22282c] overflow-y-auto;
  }
}
</style>
