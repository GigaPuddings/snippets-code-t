<template>
  <div v-if="categories.length > 0" ref="listRef" class="category-list">
    <CategoryItem
      v-for="item in categories"
      :key="item.id"
      :category="item"
      :reveal-active-content="String(item.id) === String(activeCategoryId)"
      v-memo="[item.id, item.name, editCategoryId, activeCategoryId]"
      @move-content="$emit('move-content', $event, item.id)"
      @select-category="$emit('select-category', $event)"
      @create-content="
        $emit('create-content', { type: $event, categoryId: item.id })
      "
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
  activeCategoryId?: string | number;
}

defineOptions({
  name: 'CategoryListView'
});

const props = defineProps<CategoryListViewProps>();
defineEmits<{
  (e: 'move-content', content: ContentType, categoryId: string | number): void;
  (e: 'select-category', category: CategoryType): void;
  (
    e: 'create-content',
    target: { type: 'note' | 'code'; categoryId: string | number }
  ): void;
}>();
const route = useRoute();
const listRef = ref<HTMLDivElement | null>(null);

const activeCategoryIndex = computed(() => {
  const cid =
    route.params.cid && route.params.cid !== '0'
      ? route.params.cid
      : props.activeCategoryId;
  const normalizedCid = Array.isArray(cid) ? cid[0] : cid;
  if (
    normalizedCid === undefined ||
    normalizedCid === null ||
    normalizedCid === ''
  )
    return -1;
  return props.categories.findIndex(
    (category) => String(category.id) === String(normalizedCid)
  );
});

watch(
  activeCategoryIndex,
  async (index) => {
    const resolvedIndex = Number(index);
    if (!Number.isFinite(resolvedIndex) || resolvedIndex < 0) {
      return;
    }

    await nextTick();

    const container = listRef.value;
    const activeEl = container?.children[resolvedIndex]?.querySelector(
      '.category-item-title .link'
    ) as HTMLElement | null;
    if (!container) {
      return;
    }

    if (activeEl) {
      const scrollContainer =
        container.closest('.category-page__browse') ??
        container.parentElement ??
        container;
      const containerRect = scrollContainer.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      const visible =
        itemRect.top >= containerRect.top &&
        itemRect.bottom <= containerRect.bottom;
      if (visible) {
        return;
      }
      activeEl.scrollIntoView({ block: 'center' });
      return;
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.category-list {
  @apply min-h-0;
}

.category-empty {
  @apply flex justify-center h-full mt-6;

  .category-empty-text {
    @apply opacity-90 text-content text-xs select-none;
  }
}
</style>
