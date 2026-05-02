<template>
  <div class="content-list-view">
    <!-- Tag filter indicator -->
    <div v-if="tagFilter && !isTagInFilter" class="tag-filter-indicator">
      <span class="filter-label">{{ $t('tags.filterByTag') }}:</span>
      <el-tag
        closable
        @close="$emit('clear-tag-filter')"
        class="filter-tag"
      >
        {{ tagFilter }}
      </el-tag>
    </div>
    
    <div class="content-list">
      <RecycleScroller
        v-if="contents.length > 0"
        ref="scrollerRef"
        :items="contents"
        :item-size="69"
        :buffer="200"
        key-field="id"
        v-slot="{ item }"
      >
        <ContentItem
          :content="item"
          @delete="$emit('delete', item)"
          @changeCategory="$emit('change-category', item)"
        />
      </RecycleScroller>
      <div v-else class="content-empty">
        <div class="content-empty-text">{{ $t('category.noContent') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import ContentItem from '@/components/ContentItem/index.vue';
import { useRoute } from 'vue-router';

/**
 * 组件 Props 接口
 */
interface ContentListViewProps {
  /** 内容列表 */
  contents: ContentType[];
  /** 标签筛选 */
  tagFilter: string | null;
  /** 合并的筛选条件 */
  combinedFilter: SearchFilter;
}

/**
 * 组件 Emits 接口
 */
interface ContentListViewEmits {
  /** 删除内容 */
  (e: 'delete', content: ContentType): void;
  /** 更改分类 */
  (e: 'change-category', content: ContentType): void;
  /** 清除标签筛选 */
  (e: 'clear-tag-filter'): void;
}

const props = defineProps<ContentListViewProps>();
defineEmits<ContentListViewEmits>();

const route = useRoute();
const scrollerRef = ref<InstanceType<typeof RecycleScroller> | null>(null);

/**
 * 检查标签是否在筛选条件中
 */
const isTagInFilter = computed<boolean>(() => {
  if (!props.tagFilter) return false;
  return props.combinedFilter.tags?.includes(props.tagFilter) ?? false;
});

const activeContentIndex = computed(() => {
  const routeId = route.params.id as string | undefined;
  if (!routeId) return -1;
  const normalizedRouteId = decodeURIComponent(routeId).replace(/\\/g, '/');
  return props.contents.findIndex((content) => String(content.id).replace(/\\/g, '/') === normalizedRouteId);
});

const ITEM_SIZE = 70;

const isIndexVisibleInScroller = (index: number, container: HTMLElement) => {
  const scrollTop = container.scrollTop;
  const viewportTop = scrollTop;
  const viewportBottom = scrollTop + container.clientHeight;
  const itemTop = index * ITEM_SIZE;
  const itemBottom = itemTop + ITEM_SIZE;
  return itemTop >= viewportTop && itemBottom <= viewportBottom;
};

watch(
  () => [activeContentIndex.value, props.contents.length],
  async ([index]) => {
    if (index < 0) return;
    await nextTick();

    const scroller = scrollerRef.value as any;
    const container = document.querySelector('.content-list-view .content-scroller') as HTMLElement | null;

    if (container && isIndexVisibleInScroller(index, container)) {
      return;
    }

    if (scroller?.scrollToItem) {
      scroller.scrollToItem(index);
      return;
    }

    if (container) {
      container.scrollTop = Math.max(0, index * ITEM_SIZE - Math.floor(container.clientHeight / 2) + Math.floor(ITEM_SIZE / 2));
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.content-list-view {
  @apply h-full;
}

.tag-filter-indicator {
  @apply flex items-center gap-2 px-2 py-2 border-b border-panel;
  
  .filter-label {
    @apply text-xs text-content;
  }
  
  .filter-tag {
    @apply text-xs;
  }
}

.content-list {
  @apply overflow-auto;
  height: calc(100vh - 82px);

  .content-empty {
    @apply flex justify-center h-full pt-6;

    .content-empty-text {
      @apply opacity-90 text-content text-xs select-none;
    }
  }
}
</style>
