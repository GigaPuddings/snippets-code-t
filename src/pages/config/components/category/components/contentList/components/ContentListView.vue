<template>
  <div class="content-list-view">
    <!-- Tag filter indicator -->
    <div v-if="tagFilter && !isTagInFilter" class="tag-filter-indicator">
      <span class="filter-label">{{ $t('tags.filterByTag') }}:</span>
      <el-tag closable @close="$emit('clear-tag-filter')" class="filter-tag">
        {{ tagFilter }}
      </el-tag>
    </div>

    <div class="content-list">
      <RecycleScroller
        v-if="contents.length > 0"
        ref="scrollerRef"
        class="content-scroller"
        :items="contents"
        :item-size="ITEM_SIZE"
        :buffer="200"
        key-field="id"
        v-slot="{ item }"
      >
        <ContentItem
          :content="item"
          @delete="$emit('delete', item)"
          @change-category="$emit('change-category', item)"
          @convert-type="handleConvertType"
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
import {
  refreshRecycleScroller,
  type RecycleScrollerInstance
} from '@/utils/recycleScroller';

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
  /** 转换内容类型 */
  (e: 'convert-type', content: ContentType, targetType: 'code' | 'note'): void;
  /** 清除标签筛选 */
  (e: 'clear-tag-filter'): void;
}

const props = defineProps<ContentListViewProps>();
const emit = defineEmits<ContentListViewEmits>();

const route = useRoute();
const scrollerRef = ref<RecycleScrollerInstance | null>(null);
// 单元格包含卡片本体与条目间留白，避免虚拟列表把相邻卡片贴在一起。
const ITEM_SIZE = 66;

function handleConvertType(
  content: ContentType,
  targetType: 'code' | 'note'
): void {
  emit('convert-type', content, targetType);
}

/**
 * 检查标签是否在筛选条件中
 */
const isTagInFilter = computed<boolean>(() => {
  if (!props.tagFilter) return false;
  return props.combinedFilter.tags?.includes(props.tagFilter) ?? false;
});

const activeContentId = computed(() => {
  const id = route.params.id;
  const routeId = Array.isArray(id) ? id[0] : id;
  if (!routeId) return -1;
  const normalizedRouteId = decodeURIComponent(routeId).replace(/\\/g, '/');
  return normalizedRouteId;
});

const activeContentIndex = computed(() => {
  const normalizedRouteId = activeContentId.value;
  if (normalizedRouteId === -1) return -1;
  return props.contents.findIndex(
    (content) => String(content.id).replace(/\\/g, '/') === normalizedRouteId
  );
});

const isIndexVisibleInScroller = (index: number, container: HTMLElement) => {
  const scrollTop = container.scrollTop;
  const viewportTop = scrollTop;
  const viewportBottom = scrollTop + container.clientHeight;
  const itemTop = index * ITEM_SIZE;
  const itemBottom = itemTop + ITEM_SIZE;
  return itemTop >= viewportTop && itemBottom <= viewportBottom;
};

function getScrollerElement(): HTMLElement | null {
  const scroller = scrollerRef.value;
  return scroller?.$el ?? null;
}

function scrollActiveContentIntoView(index: number): void {
  refreshRecycleScroller(scrollerRef.value);

  requestAnimationFrame(() => {
    const scroller = scrollerRef.value;
    const container = getScrollerElement();

    if (container && isIndexVisibleInScroller(index, container)) {
      return;
    }

    if (scroller?.scrollToItem) {
      scroller.scrollToItem(index);
      refreshRecycleScroller(scroller);
      return;
    }

    if (container) {
      container.scrollTop = Math.max(
        0,
        index * ITEM_SIZE -
          Math.floor(container.clientHeight / 2) +
          Math.floor(ITEM_SIZE / 2)
      );
      refreshRecycleScroller(scroller);
    }
  });
}

watch(
  [() => props.contents, activeContentId],
  async (): Promise<void> => {
    await nextTick();
    refreshRecycleScroller(scrollerRef.value);

    const index = activeContentIndex.value;
    if (index >= 0) {
      scrollActiveContentIntoView(index);
    }
  },
  { immediate: true, flush: 'post' }
);
</script>

<style scoped lang="scss">
.content-list-view {
  @apply h-full flex flex-col min-h-0;
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
  @apply flex-1 min-h-0 overflow-hidden pt-2;

  .content-scroller {
    height: 100%;
  }

  .content-empty {
    @apply flex justify-center h-full pt-6;

    .content-empty-text {
      @apply opacity-90 text-content text-xs select-none;
    }
  }
}
</style>
