<template>
  <aside
    class="outline-sidebar"
    :class="{ dark, 'is-visible': show }"
    :aria-label="$t('noteEditor.outline')"
    :aria-hidden="!show"
    :inert="!show"
    @keydown.esc.stop="handleClose"
  >
    <header class="flex h-11 shrink-0 items-center justify-between gap-2 px-3">
      <div class="flex min-w-0 items-center gap-2">
        <h3 class="m-0 truncate text-ui font-semibold text-ui-heading">
          {{ $t('noteEditor.outline') }}
        </h3>
        <span
          class="text-ui-caption tabular-nums text-ui-muted"
          aria-hidden="true"
        >
          {{ headings.length }}
        </span>
      </div>
      <div class="flex shrink-0 items-center gap-0.5">
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small ui-action--muted"
          @click="toggleSearch"
          :title="$t('noteEditor.search')"
          :aria-label="$t('noteEditor.search')"
          :aria-pressed="showSearch"
        >
          <UiSearch width="16" height="16" />
        </button>
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small ui-action--muted"
          @click="toggleCollapseAll"
          :title="
            isAllCollapsed
              ? $t('noteEditor.expandAll')
              : $t('noteEditor.collapseAll')
          "
          :aria-label="
            isAllCollapsed
              ? $t('noteEditor.expandAll')
              : $t('noteEditor.collapseAll')
          "
          :disabled="!headings.some((_, index) => hasChildren(index))"
        >
          <UiChevronDown v-if="isAllCollapsed" width="14" height="14" />
          <UiChevronUp v-else width="14" height="14" />
        </button>
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small ui-action--muted"
          @click="scrollToActive"
          :title="$t('noteEditor.scrollToActive')"
          :aria-label="$t('noteEditor.scrollToActive')"
          :disabled="!headings.length"
        >
          <UiArrowUpToLine width="14" height="14" />
        </button>
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small ui-action--muted"
          :title="$t('common.close')"
          :aria-label="$t('common.close')"
          @click="handleClose"
        >
          <UiX width="16" height="16" />
        </button>
      </div>
    </header>

    <div
      v-show="showSearch"
      class="mx-3 mb-2 flex h-8 shrink-0 items-center gap-2 rounded-ui bg-ui-hover px-2 text-ui-muted focus-within:ring-1 focus-within:ring-[var(--workspace-nav-border)]"
    >
      <UiSearch width="14" height="14" class="shrink-0" />
      <input
        ref="searchInputRef"
        v-model="searchQuery"
        type="text"
        class="min-w-0 flex-1 border-0 bg-transparent text-ui-caption text-ui-main outline-none placeholder:text-ui-muted"
        :placeholder="$t('noteEditor.searchHeadings')"
        :aria-label="$t('noteEditor.searchHeadings')"
        @input="handleSearch"
        @keydown.esc.stop="toggleSearch"
      />
      <button
        v-if="searchQuery"
        type="button"
        class="ui-icon-button h-ui-control-sm w-ui-control-sm ui-action--muted"
        :aria-label="$t('common.clear')"
        @click="clearSearch"
      >
        <UiX width="14" height="14" />
      </button>
    </div>

    <nav
      ref="contentRef"
      class="outline-sidebar-content min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-1.5 pb-2"
      :aria-label="$t('noteEditor.outline')"
    >
      <div
        v-if="filteredHeadings.length === 0 && headings.length === 0"
        class="outline-sidebar-empty"
      >
        {{ $t('noteEditor.noHeadings') }}
      </div>
      <div
        v-else-if="filteredHeadings.length === 0 && searchQuery"
        class="outline-sidebar-empty"
      >
        {{ $t('noteEditor.noSearchResults') }}
      </div>
      <div
        v-for="heading in filteredHeadings"
        :key="heading.originalIndex"
        :ref="(el) => setItemRef(el, heading.originalIndex)"
        class="outline-sidebar-item"
        :class="{
          'font-medium': heading.depth === 0,
          'is-active': activeHeadingIndex === heading.originalIndex,
          'is-hidden': isHiddenByCollapse(heading.originalIndex)
        }"
        :style="{ paddingLeft: `${heading.depth * 12 + 6}px` }"
      >
        <!-- 折叠按钮 -->
        <button
          v-if="hasChildren(heading.originalIndex)"
          type="button"
          class="ui-icon-button ui-action--muted size-5 rounded shrink-0"
          :aria-label="heading.text"
          :aria-expanded="!collapsedHeadings.has(heading.originalIndex)"
          @click.stop="toggleCollapse(heading.originalIndex)"
        >
          <UiChevronRight
            width="12"
            height="12"
            class="transition-transform"
            :class="{
              'rotate-90': !collapsedHeadings.has(heading.originalIndex)
            }"
          />
        </button>
        <span v-else class="size-5 shrink-0" aria-hidden="true"></span>

        <!-- 标题文本 -->
        <button
          type="button"
          class="outline-sidebar-text min-w-0 flex-1 truncate rounded border-0 bg-transparent py-1.5 pr-2 text-left text-ui-caption text-inherit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
          :title="heading.text"
          :aria-current="
            activeHeadingIndex === heading.originalIndex
              ? 'location'
              : undefined
          "
          @click="handleHeadingClick(heading.pos, heading.originalIndex)"
          v-html="highlightText(heading.text, searchQuery)"
        ></button>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import UiChevronRight from '~icons/lucide/chevron-right';
import UiX from '~icons/lucide/x';
import UiSearch from '~icons/lucide/search';
import UiArrowUpToLine from '~icons/lucide/arrow-up-to-line';
import UiChevronUp from '~icons/lucide/chevron-up';
import UiChevronDown from '~icons/lucide/chevron-down';
import type { ComponentPublicInstance } from 'vue';
import { highlightText } from '@/utils/text';
interface Heading {
  level: number;
  text: string;
  pos: number;
}

interface Props {
  show: boolean;
  headings: Heading[];
  dark?: boolean;
  currentPos?: number;
  visibleHeadingIndex?: number;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  close: [];
  'heading-click': [pos: number];
  'update-visible-heading': [];
}>();

// 状态管理
const searchQuery = ref('');
const showSearch = ref(false);
const searchInputRef = ref<HTMLInputElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const itemRefs = ref<Map<number, HTMLElement>>(new Map());
const collapsedHeadings = ref<Set<number>>(new Set());
const isAllCollapsed = ref(false);
const activeHeadingIndex = ref<number>(-1);

// 搜索功能
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  if (showSearch.value) {
    nextTick(() => searchInputRef.value?.focus());
  } else {
    searchQuery.value = '';
  }
};

const clearSearch = () => {
  searchQuery.value = '';
};

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    collapsedHeadings.value.clear();
    isAllCollapsed.value = false;
  }
};

// 元素引用管理
const setItemRef = (
  el: Element | ComponentPublicInstance | null,
  index: number
) => {
  if (el instanceof HTMLElement) itemRefs.value.set(index, el);
  else itemRefs.value.delete(index);
};

// 过滤和高亮
const outlineHeadings = computed(() => {
  const ancestors: number[] = [];
  return props.headings.map((heading, originalIndex) => {
    while (
      ancestors.length &&
      ancestors[ancestors.length - 1] >= heading.level
    ) {
      ancestors.pop();
    }
    const depth = ancestors.length;
    ancestors.push(heading.level);
    return { ...heading, originalIndex, depth };
  });
});

const filteredHeadings = computed(() => {
  if (!searchQuery.value.trim()) {
    return outlineHeadings.value;
  }

  const query = searchQuery.value.trim().toLowerCase();
  return outlineHeadings.value.filter((h) =>
    h.text.toLowerCase().includes(query)
  );
});

const hasChildren = (index: number) => {
  if (index >= props.headings.length - 1) return false;
  return props.headings[index + 1].level > props.headings[index].level;
};

// 折叠逻辑
const isHiddenByCollapse = (index: number) => {
  if (searchQuery.value.trim()) return false;

  let checkLevel = props.headings[index].level;

  for (let i = index - 1; i >= 0; i--) {
    const ancestorLevel = props.headings[i].level;

    if (ancestorLevel < checkLevel) {
      if (collapsedHeadings.value.has(i)) return true;
      checkLevel = ancestorLevel;
      if (checkLevel === 1) break;
    }
  }

  return false;
};

const toggleCollapse = (index: number) => {
  if (collapsedHeadings.value.has(index)) {
    collapsedHeadings.value.delete(index);
    isAllCollapsed.value = false;
  } else {
    collapsedHeadings.value.add(index);

    const allCollapsible = props.headings.filter((_, idx) => hasChildren(idx));
    const allCollapsedCount = allCollapsible.filter((_, idx) => {
      const actualIndex = props.headings.indexOf(allCollapsible[idx]);
      return collapsedHeadings.value.has(actualIndex);
    }).length;
    isAllCollapsed.value = allCollapsedCount === allCollapsible.length;
  }

  collapsedHeadings.value = new Set(collapsedHeadings.value);
};

const toggleCollapseAll = () => {
  if (isAllCollapsed.value) {
    collapsedHeadings.value.clear();
    isAllCollapsed.value = false;
  } else {
    const indices = new Set<number>();
    props.headings.forEach((_, index) => {
      if (hasChildren(index)) indices.add(index);
    });
    collapsedHeadings.value = indices;
    isAllCollapsed.value = true;
  }
};

// 滚动和导航
const scrollToActive = () => {
  emits('update-visible-heading');

  nextTick(() => {
    const targetIndex =
      props.visibleHeadingIndex != null && props.visibleHeadingIndex >= 0
        ? props.visibleHeadingIndex
        : activeHeadingIndex.value;
    if (targetIndex < 0 || targetIndex >= props.headings.length) return;

    // 展开所有父级
    for (let i = targetIndex - 1; i >= 0; i--) {
      if (props.headings[i].level < props.headings[targetIndex].level) {
        collapsedHeadings.value.delete(i);
      }
    }

    nextTick(() => {
      setTimeout(() => {
        const element = itemRefs.value.get(targetIndex);
        if (element && contentRef.value) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
          activeHeadingIndex.value = targetIndex;
        }
      }, 50);
    });
  });
};

const updateActiveHeading = () => {
  if (
    props.visibleHeadingIndex != null &&
    props.visibleHeadingIndex >= 0 &&
    props.visibleHeadingIndex < props.headings.length
  ) {
    activeHeadingIndex.value = props.visibleHeadingIndex;
    return;
  }
  if (props.currentPos === undefined || props.headings.length === 0) {
    activeHeadingIndex.value = -1;
    return;
  }

  let activeIndex = -1;
  for (let i = 0; i < props.headings.length; i++) {
    if (props.headings[i].pos <= props.currentPos) {
      activeIndex = i;
    } else {
      break;
    }
  }

  activeHeadingIndex.value = activeIndex;
};

const handleClose = () => emits('close');

const handleHeadingClick = (pos: number, index: number) => {
  activeHeadingIndex.value = index;
  emits('heading-click', pos);
};

// 监听器
watch(
  () => [props.currentPos, props.visibleHeadingIndex],
  updateActiveHeading,
  { immediate: true }
);

watch(
  () => props.headings,
  () => {
    updateActiveHeading();
    itemRefs.value.clear();
  },
  { deep: true }
);

watch(
  () => props.show,
  (newShow) => {
    if (newShow) nextTick(updateActiveHeading);
  }
);
</script>

<style lang="scss" scoped>
.outline-sidebar {
  @apply invisible pointer-events-none absolute right-2 top-2 z-30 flex w-[280px] max-w-[calc(100%-16px)] min-h-0 translate-x-2 flex-col overflow-hidden rounded-ui-lg border border-solid border-[var(--workspace-nav-border)] bg-[var(--settings-surface)] font-ui text-ui text-ui-main opacity-0;

  bottom: calc(
    var(--app-ui-icon-control-sm-height) + var(--editor-status-gap) + 8px
  );
  box-shadow: var(--toast-shadow);
  transition:
    transform 0.18s ease,
    opacity 0.18s ease,
    visibility 0.18s ease;

  &.is-visible {
    @apply visible pointer-events-auto translate-x-0 opacity-100;
  }
}

.outline-sidebar-empty {
  @apply px-4 py-8 text-center text-ui-caption text-ui-muted;
}

.outline-sidebar-item {
  @apply relative my-0.5 flex min-h-7 items-center gap-0.5 rounded-ui text-ui-main transition-colors hover:bg-ui-hover;

  &.is-active {
    @apply bg-ui-selected text-ui-heading;

    .outline-sidebar-text {
      @apply font-semibold;
    }
  }

  &.is-hidden {
    @apply hidden;
  }
}

.outline-sidebar-text :deep(.highlight) {
  @apply rounded-sm bg-[var(--search-highlight-bg)] font-semibold text-[var(--search-highlight-text)];
}
</style>
