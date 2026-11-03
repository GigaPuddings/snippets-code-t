<template>
  <div
    v-if="categories.length > 0"
    ref="listRef"
    class="category-list"
    @dragstart="startFolderDrag"
    @dragover="overFolder"
    @dragleave="leaveFolder"
    @drop="dropFolder"
    @dragend="clearDrag"
  >
    <CategoryItem
      v-for="item in categories"
      :key="item.id"
      :category="item"
      :content-busy="contentBusy"
      :expanded="expandedIds.has(String(item.id))"
      :folder-drop-target="targetId === String(item.id)"
      @update:expanded="$emit('set-expanded', String(item.id), $event)"
      :reveal-active-content="String(item.id) === String(activeCategoryId)"
      @move-content="
        (content, categoryId, position) =>
          $emit('move-content', content, categoryId, position)
      "
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
import type { FragmentDropPosition } from '@/utils/fragmentDragDrop';
import { useRoute } from 'vue-router';

/**
 * CategoryListView 组件 Props
 */
interface CategoryListViewProps {
  /** 分类列表 */
  categories: CategoryType[];
  activeCategoryId?: string | number;
  expandedIds: Set<string>;
  savingOrder: boolean;
  contentBusy?: boolean;
}

defineOptions({
  name: 'CategoryListView'
});

const props = defineProps<CategoryListViewProps>();
const emit = defineEmits<{
  (e: 'set-expanded', id: string, expanded: boolean): void;
  (e: 'swap-folders', from: string, to: string): void;
  (
    e: 'move-content',
    content: ContentType,
    categoryId: string | number,
    position?: FragmentDropPosition
  ): void;
  (e: 'select-category', category: CategoryType): void;
  (
    e: 'create-content',
    target: { type: 'note' | 'code'; categoryId: string | number }
  ): void;
}>();
const route = useRoute();
const listRef = ref<HTMLDivElement | null>(null);
const folderMime = 'application/x-snippets-code-sidebar-folder';
const sourceId = ref('');
const targetId = ref('');
const folderRow = (target: EventTarget | null): HTMLElement | null =>
  target instanceof Element
    ? target.closest<HTMLElement>('[data-folder-id]')
    : null;

function clearDrag(): void {
  sourceId.value = '';
  targetId.value = '';
}
function startFolderDrag(event: DragEvent): void {
  const row = folderRow(event.target);
  const id = row?.dataset.folderId;
  if (!id || !event.dataTransfer) return;
  if (props.savingOrder) {
    event.preventDefault();
    return;
  }
  sourceId.value = id;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData(folderMime, id);
  event.dataTransfer.setData('text/plain', row.textContent?.trim() || id);
}
function overFolder(event: DragEvent): void {
  if (!sourceId.value || !event.dataTransfer) return;
  const id = folderRow(event.target)?.dataset.folderId;
  targetId.value = id && id !== sourceId.value ? id : '';
  if (targetId.value) event.preventDefault();
  event.dataTransfer.dropEffect = targetId.value ? 'move' : 'none';
}
function leaveFolder(event: DragEvent): void {
  if (folderRow(event.relatedTarget)?.dataset.folderId !== targetId.value)
    targetId.value = '';
}
function dropFolder(event: DragEvent): void {
  if (!sourceId.value) return;
  const from = sourceId.value;
  const to = folderRow(event.target)?.dataset.folderId;
  clearDrag();
  if (!to || from === to || event.dataTransfer?.getData(folderMime) !== from)
    return;
  event.preventDefault();
  emit('swap-folders', from, to);
}

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
