<template>
  <div class="content-list-view">
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
          @toggle-favorite="$emit('toggle-favorite', item)"
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
}

/**
 * 组件 Emits 接口
 */
interface ContentListViewEmits {
  /** 删除内容 */
  (e: 'delete', content: ContentType): void;
  (e: 'toggle-favorite', content: ContentType): void;
  /** 更改分类 */
  (e: 'change-category', content: ContentType): void;
  /** 转换内容类型 */
  (e: 'convert-type', content: ContentType, targetType: 'code' | 'note'): void;
}

const props = defineProps<ContentListViewProps>();
const emit = defineEmits<ContentListViewEmits>();

const route = useRoute();
const scrollerRef = ref<RecycleScrollerInstance | null>(null);
// Rows include the 32px body and a 2px gap.
const ITEM_SIZE = 34;

function handleConvertType(
  content: ContentType,
  targetType: 'code' | 'note'
): void {
  emit('convert-type', content, targetType);
}

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
