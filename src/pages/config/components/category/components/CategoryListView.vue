<template>
  <div v-if="categories.length > 0" ref="listRef" class="category-list">
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
import { useRoute } from 'vue-router';

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

const props = defineProps<CategoryListViewProps>();
const route = useRoute();
const listRef = ref<HTMLDivElement | null>(null);

const activeCategoryIndex = computed(() => {
  const cid = route.params.cid;
  const normalizedCid = Array.isArray(cid) ? cid[0] : cid;
  if (normalizedCid === undefined || normalizedCid === null || normalizedCid === '') return -1;
  return props.categories.findIndex((category) => String(category.id) === String(normalizedCid));
});

const isIndexVisible = (index: number, container: HTMLElement) => {
  const itemHeight = container.scrollHeight / Math.max(props.categories.length, 1);
  const top = container.scrollTop;
  const bottom = top + container.clientHeight;
  const itemTop = index * itemHeight;
  const itemBottom = itemTop + itemHeight;
  return itemTop >= top && itemBottom <= bottom;
};

watch(
  activeCategoryIndex,
  async (index) => {
    const resolvedIndex = Number(index);
    if (!Number.isFinite(resolvedIndex) || resolvedIndex < 0) {
      return;
    }

    await nextTick();

    const container = listRef.value;
    const activeEl = container?.querySelector('.link.active') as HTMLElement | null;
    if (!container) {
      return;
    }

    if (activeEl) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      const visible = itemRect.top >= containerRect.top && itemRect.bottom <= containerRect.bottom;
      if (visible) {
        return;
      }
      activeEl.scrollIntoView({ block: 'center' });
      return;
    }

    const visibleByIndex = isIndexVisible(resolvedIndex, container);

    if (!visibleByIndex) {
      const averageItemHeight = container.scrollHeight / Math.max(props.categories.length, 1);
      const targetScrollTop = Math.max(0, resolvedIndex * averageItemHeight - Math.floor(container.clientHeight / 2) + Math.floor(averageItemHeight / 2));
      container.scrollTop = targetScrollTop;
    }
  },
  { immediate: true }
);
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
