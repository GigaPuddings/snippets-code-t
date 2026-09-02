<template>
  <div class="outline-sidebar" :class="{ dark: dark, 'is-visible': show }">
    <div class="outline-sidebar-header">
      <div class="outline-sidebar-actions">
        <!-- 搜索按钮 -->
        <button
          class="outline-action-btn"
          @click="toggleSearch"
          :title="$t('noteEditor.search')"
          :class="{ 'is-active': showSearch }"
        >
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path
              fill="currentColor"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </button>
        <!-- 折叠/展开切换按钮 -->
        <button
          class="outline-action-btn"
          @click="toggleCollapseAll"
          :title="
            isAllCollapsed
              ? $t('noteEditor.expandAll')
              : $t('noteEditor.collapseAll')
          "
        >
          <svg v-if="isAllCollapsed" viewBox="0 0 24 24" width="14" height="14">
            <path
              fill="currentColor"
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
          <svg v-else viewBox="0 0 24 24" width="14" height="14">
            <path
              fill="currentColor"
              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
            />
          </svg>
        </button>
        <!-- 定位当前章节按钮 -->
        <button
          class="outline-action-btn"
          @click="scrollToActive"
          :title="$t('noteEditor.scrollToActive')"
        >
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path
              fill="currentColor"
              d="M12,8L7,13L8.41,14.41L11,11.83V20H13V11.83L15.59,14.41L17,13L12,8M5,3H19A2,2 0 0,1 21,5V9H19V5H5V19H9V21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
            />
          </svg>
        </button>
        <button class="outline-sidebar-close" @click="handleClose">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path
              fill="currentColor"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- 搜索框 - 固定显示 -->
    <div v-show="showSearch" class="outline-search-box">
      <svg viewBox="0 0 24 24" width="14" height="14" class="search-icon">
        <path
          fill="currentColor"
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>
      <input
        ref="searchInputRef"
        v-model="searchQuery"
        type="text"
        class="search-input"
        :placeholder="$t('noteEditor.searchHeadings')"
        @input="handleSearch"
      />
      <button v-if="searchQuery" class="clear-search-btn" @click="clearSearch">
        <svg viewBox="0 0 24 24" width="14" height="14">
          <path
            fill="currentColor"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          />
        </svg>
      </button>
    </div>

    <div class="outline-sidebar-content" ref="contentRef">
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
          'is-h1': heading.level === 1,
          'is-h2': heading.level === 2,
          'is-h3': heading.level === 3,
          'is-h4': heading.level === 4,
          'is-h5': heading.level === 5,
          'is-h6': heading.level === 6,
          'is-active': activeHeadingIndex === heading.originalIndex,
          'is-collapsed': collapsedHeadings.has(heading.originalIndex),
          'is-hidden': isHiddenByCollapse(heading.originalIndex)
        }"
        :style="getItemStyle(heading)"
        @click="handleHeadingClick(heading.pos, heading.originalIndex)"
      >
        <!-- 折叠按钮 -->
        <button
          v-if="hasChildren(heading.originalIndex)"
          class="collapse-btn"
          @click.stop="toggleCollapse(heading.originalIndex)"
        >
          <svg viewBox="0 0 24 24" width="12" height="12" class="collapse-icon">
            <path
              fill="currentColor"
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
            />
          </svg>
        </button>
        <span v-else class="collapse-placeholder"></span>

        <!-- 标题文本 -->
        <span
          class="outline-sidebar-text"
          v-html="highlightText(heading.text)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  }
};

// 元素引用管理
const setItemRef = (el: any, index: number) => {
  if (el) itemRefs.value.set(index, el);
};

// 过滤和高亮
const filteredHeadings = computed(() => {
  const headingsWithIndex = props.headings.map((h, index) => ({
    ...h,
    originalIndex: index
  }));

  if (!searchQuery.value.trim()) {
    return headingsWithIndex;
  }

  const query = searchQuery.value.toLowerCase();
  return headingsWithIndex.filter((h) => h.text.toLowerCase().includes(query));
});

const highlightText = (text: string) => {
  if (!searchQuery.value.trim()) return text;

  const regex = new RegExp(`(${searchQuery.value})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
};

// 样式和层级
const getItemStyle = (heading: any) => ({
  paddingLeft: `${(heading.level - 1) * 20 + 8}px`
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
    const targetIndex = props.visibleHeadingIndex ?? activeHeadingIndex.value;
    if (targetIndex < 0) return;

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
watch(() => props.currentPos, updateActiveHeading, { immediate: true });

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
  @apply bg-panel;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: auto;
  overflow: hidden;
  pointer-events: none;
  border-left: 0 solid transparent;
  box-shadow: -12px 0 24px rgb(15 23 42 / 8%);
  opacity: 0;
  transition:
    transform 0.22s ease,
    opacity 0.18s ease;
  transform: translateX(100%);

  &.is-visible {
    pointer-events: auto;
    border-left: 1px solid var(--panel-border);
    opacity: 1;
    transform: translateX(0);
  }

  &.dark {
    background-color: var(--panel-bg);
    box-shadow: -12px 0 24px rgb(0 0 0 / 24%);

    &.is-visible {
      border-color: var(--panel-border);
    }
  }
}

.outline-sidebar-header {
  @apply flex items-center justify-between px-3 py-2;

  flex-shrink: 0;
  border-bottom: 1px solid var(--panel-border);
}

.outline-sidebar-actions {
  @apply flex items-center gap-1 w-full justify-end;
}

.outline-action-btn {
  @apply w-7 h-7 flex items-center justify-center rounded cursor-pointer;

  color: var(--panel-text-secondary);
  transition: all 0.15s ease;

  &:hover {
    color: var(--panel-text);
    background-color: var(--panel-hover-bg);
  }

  &.is-active {
    color: var(--el-color-primary);
    background-color: var(--categories-bg-tab-active);
  }

  svg {
    @apply text-current;
  }
}

.outline-sidebar-close {
  @apply w-7 h-7 flex items-center justify-center rounded cursor-pointer;

  color: var(--panel-text-secondary);
  transition: background-color 0.15s ease;

  &:hover {
    color: var(--panel-text);
    background-color: var(--panel-hover-bg);
  }

  svg {
    @apply text-current;
  }
}

.outline-search-box {
  @apply flex items-center px-3 py-2 gap-2;

  flex-shrink: 0;
  border-bottom: 1px solid var(--panel-border);
}

.search-icon {
  @apply flex-shrink-0;

  color: var(--panel-text-secondary);
}

.search-input {
  @apply flex-1 bg-transparent border-none outline-none text-sm;

  color: var(--panel-text);

  &::placeholder {
    color: var(--panel-text-secondary);
  }
}

.clear-search-btn {
  @apply w-5 h-5 flex items-center justify-center rounded cursor-pointer flex-shrink-0;

  color: var(--panel-text-secondary);
  transition: background-color 0.15s ease;

  &:hover {
    color: var(--panel-text);
    background-color: var(--panel-hover-bg);
  }
}

.outline-sidebar-content {
  @apply overflow-y-auto flex-1 py-2 px-2;

  padding-bottom: 48px; /* 为底部状态栏留出空间 */

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--editor-scrollbar-thumb);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 5px;

    &:hover {
      background-color: rgb(0 0 0 / 25%);
    }
  }

  .dark & {
    &::-webkit-scrollbar-thumb {
      background-color: var(--editor-scrollbar-thumb);

      &:hover {
        background-color: rgb(255 255 255 / 25%);
      }
    }
  }
}

.outline-sidebar-empty {
  @apply text-sm text-panel-text-secondary text-center py-8 px-4;
}

.outline-sidebar-item {
  @apply flex items-center text-sm py-1 px-2 cursor-pointer relative;

  min-height: 24px;
  margin: 1px 0;
  line-height: 1.4;
  color: #666;
  pointer-events: auto;
  border-radius: 4px;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    background-color: var(--categories-panel-bg-hover);

    .outline-sidebar-text {
      color: var(--el-color-primary);
    }
  }

  &.is-active {
    background-color: var(--categories-bg-tab-active);

    .outline-sidebar-text {
      font-weight: 600;
      color: var(--el-color-primary);
    }
  }

  &.is-h1 {
    margin-top: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #333;
  }

  &.is-h2 {
    margin-top: 4px;
    font-size: 12.5px;
    font-weight: 500;
    color: #444;
  }

  &.is-h3 {
    font-size: 12px;
    font-weight: 400;
    color: #555;
  }

  &.is-h4 {
    font-size: 11.5px;
    font-weight: 400;
    color: #666;
  }

  &.is-h5 {
    font-size: 11px;
    font-weight: 400;
    color: #777;
  }

  &.is-h6 {
    font-size: 10.5px;
    font-weight: 400;
    color: #888;
  }

  &.is-hidden {
    display: none;
  }

  .dark & {
    color: #999;

    &.is-h1 {
      color: #ccc;
    }

    &.is-h2 {
      color: #bbb;
    }

    &.is-h3 {
      color: #aaa;
    }

    &.is-h4 {
      color: #999;
    }

    &.is-h5 {
      color: #888;
    }

    &.is-h6 {
      color: #777;
    }

    &:hover {
      background-color: var(--categories-panel-bg-hover);

      .outline-sidebar-text {
        color: var(--el-color-primary);
      }
    }

    &.is-active {
      background-color: var(--categories-bg-tab-active);

      .outline-sidebar-text {
        color: var(--el-color-primary);
      }
    }
  }
}

.collapse-btn {
  @apply flex items-center justify-center w-4 h-4 mr-1 flex-shrink-0;

  position: relative;
  z-index: 1;
  color: #999;
  background-color: transparent;
  transition:
    background-color 0.15s ease,
    transform 0.15s ease;

  &:hover {
    color: #666;
    background-color: rgb(0 0 0 / 8%);
    border-radius: 2px;
  }

  .dark & {
    color: #8a8a8a;

    &:hover {
      color: #b3b3b3;
      background-color: rgb(255 255 255 / 12%);
    }
  }

  .collapse-icon {
    transition: transform 0.15s ease;
  }
}

.outline-sidebar-item.is-collapsed .collapse-btn .collapse-icon {
  transform: rotate(0deg);
}

.outline-sidebar-item:not(.is-collapsed) .collapse-btn .collapse-icon {
  transform: rotate(90deg);
}

.collapse-placeholder {
  @apply w-4 h-4 mr-1 flex-shrink-0;
}

.outline-sidebar-text {
  @apply flex-1 truncate;

  position: relative;
  z-index: 0;
  pointer-events: none;
  transition: color 0.2s ease;

  :deep(.search-highlight) {
    padding: 1px 3px;
    font-weight: 500;
    color: #000;
    background-color: #ffeb3b;
    border-radius: 2px;

    .dark & {
      color: #000;
      background-color: #ffc107;
    }
  }
}
</style>
