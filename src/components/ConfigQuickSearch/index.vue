<template>
  <teleport to="body">
    <transition name="config-search-fade">
      <div
        v-if="modelValue"
        class="config-search-overlay"
        @mousedown.self="close"
      >
        <section class="config-search-panel" @mousedown.stop>
          <div class="config-search-input-row">
            <Search class="config-search-icon" theme="outline" size="18" :strokeWidth="3" />
            <input
              ref="inputRef"
              v-model="searchText"
              class="config-search-input"
              :placeholder="$t('titlebar.quickSearchPlaceholder')"
              @keydown="handleKeydown"
            />
            <button
              v-if="searchText"
              class="config-search-clear"
              type="button"
              :aria-label="$t('common.clear')"
              @click="clearSearch"
            >
              <CloseSmall theme="outline" size="16" :strokeWidth="3" />
            </button>
            <span class="config-search-shortcut">Esc</span>
          </div>

          <div ref="bodyRef" class="config-search-body">
            <div v-if="!searchText.trim()" class="config-search-empty">
              <div class="config-search-empty-title">{{ $t('configSearch.emptyTitle') }}</div>
              <div class="config-search-empty-text">{{ $t('configSearch.emptyText') }}</div>
            </div>
            <div v-else-if="!visibleResults.length" class="config-search-empty">
              <div class="config-search-empty-title">{{ $t('search.noResults') }}</div>
              <div class="config-search-empty-text">{{ $t('search.suggestRelax') }}</div>
            </div>
            <div v-else class="config-search-results">
              <button
                v-for="(item, index) in visibleResults"
                :key="`${item.id}-${index}`"
                class="config-search-result"
                :class="{ active: index === activeIndex }"
                type="button"
                @mouseenter="activeIndex = index"
                @click="openResult(item)"
              >
                <span class="config-search-result-icon">{{ getResultGlyph(item) }}</span>
                <span class="config-search-result-main">
                  <span class="config-search-result-title" v-html="getDisplayTitle(item)"></span>
                  <span class="config-search-result-content" v-html="getDisplayContentHighlighted(item)"></span>
                </span>
                <span class="config-search-result-type">{{ getTypeLabelText(item) }}</span>
              </button>
            </div>
          </div>

          <div class="config-search-footer">
            <span>↑↓ {{ $t('configSearch.navigate') }}</span>
            <span>Enter {{ $t('configSearch.open') }}</span>
          </div>
        </section>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { CloseSmall, Search } from '@icon-park/vue-next';
import { invoke } from '@tauri-apps/api/core';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { getCategories } from '@/api/fragment';
import { useSearch } from '@/hooks/useSearch';
import { getRawSearchResultId, useSearchResultDisplay } from '@/pages/search/composables/useSearchResultDisplay';
import { useConfigurationStore } from '@/store';
import modal from '@/utils/modal';

defineOptions({
  name: 'ConfigQuickSearch'
});

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

type ConfigSearchResult = ContentType & {
  __configSearchKind?: 'folder';
};

const router = useRouter();
const { t } = useI18n();
const store = useConfigurationStore();
const inputRef = ref<HTMLInputElement | null>(null);
const bodyRef = ref<HTMLElement | null>(null);
const activeIndex = ref(0);
const categories = ref<CategoryType[]>([]);

const {
  searchText,
  searchResults,
  clearSearch,
  addSearchHistory
} = useSearch({
  debounceMs: 180,
  initialDeepSearch: true
});

const {
  getDisplayTitle,
  getDisplayContentHighlighted,
  getTypeLabel
} = useSearchResultDisplay(() => searchText.value, t);

const normalizedQuery = computed(() => searchText.value.trim().toLocaleLowerCase());

const folderResults = computed<ConfigSearchResult[]>(() => {
  const query = normalizedQuery.value;
  if (!query) return [];

  return categories.value
    .filter((category) => category.name.toLocaleLowerCase().includes(query))
    .map((category) => ({
      id: `folder:${category.id}`,
      title: category.name,
      content: t('configSearch.folderResultContent'),
      summarize: 'file',
      category_id: category.id,
      category_name: category.name,
      __configSearchKind: 'folder'
    }));
});

const visibleResults = computed<ConfigSearchResult[]>(() => [
  ...folderResults.value,
  ...(searchResults.value as ConfigSearchResult[])
]);

watch(
  () => props.modelValue,
  async (visible) => {
    if (visible) {
      activeIndex.value = 0;
      await loadCategories();
      await nextTick();
      inputRef.value?.focus();
      inputRef.value?.select();
      scrollActiveIntoView();
    }
  }
);

watch(visibleResults, () => {
  activeIndex.value = 0;
  scrollActiveIntoView();
});

function close(): void {
  emit('update:modelValue', false);
}

async function loadCategories(): Promise<void> {
  try {
    if (!store.categories.length) {
      store.categories = await getCategories(store.categorySort);
    }

    categories.value = store.categories;
  } catch (error) {
    console.error('[ConfigQuickSearch] load categories failed:', error);
    categories.value = store.categories;
  }
}

function scrollActiveIntoView(): void {
  nextTick(() => {
    if (activeIndex.value === 0 && bodyRef.value) {
      bodyRef.value.scrollTop = 0;
      return;
    }

    if (activeIndex.value === visibleResults.value.length - 1 && bodyRef.value) {
      bodyRef.value.scrollTop = bodyRef.value.scrollHeight;
      return;
    }

    const activeElement = bodyRef.value?.querySelector('.config-search-result.active') as HTMLElement | null;
    activeElement?.scrollIntoView({ block: 'nearest' });
  });
}

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    event.preventDefault();
    close();
    return;
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    const total = visibleResults.value.length;
    if (total === 0) return;
    activeIndex.value = (activeIndex.value + 1) % total;
    scrollActiveIntoView();
    return;
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault();
    const total = visibleResults.value.length;
    if (total === 0) return;
    activeIndex.value = (activeIndex.value - 1 + total) % total;
    scrollActiveIntoView();
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    const selected = visibleResults.value[activeIndex.value];
    if (selected) {
      openResult(selected);
    }
  }
}

function isFolderResult(item: ConfigSearchResult): boolean {
  return item.__configSearchKind === 'folder';
}

function getResultGlyph(item: ConfigSearchResult): string {
  if (isFolderResult(item)) return 'DIR';
  if (item.summarize === 'app') return 'A';
  if (item.summarize === 'bookmark' || item.summarize === 'search') return '↗';
  if (item.summarize === 'file') return 'F';
  if (item.summarize === 'tool') return '#';
  if (item.type === 'note' || item.summarize === 'note') return 'N';
  return '</>';
}

function getTypeLabelText(item: ConfigSearchResult): string {
  if (isFolderResult(item)) return t('category.folders');
  return getTypeLabel(item);
}

function getNavigationId(item: ConfigSearchResult): string {
  const rawId = getRawSearchResultId(item);
  return rawId.replace(/\\/g, '/');
}

async function openConfigContent(item: ConfigSearchResult): Promise<void> {
  const rawId = getNavigationId(item);
  const categoryId = item.category_id;
  const encodedId = encodeURIComponent(rawId);
  const path =
    categoryId !== undefined && categoryId !== null && categoryId !== ''
      ? `/config/category/contentList/${categoryId}/content/${encodedId}`
      : `/config/category/contentList/content/${encodedId}`;

  await router.replace(path);
}

async function openFolderResult(item: ConfigSearchResult): Promise<void> {
  await router.replace(`/config/category/contentList/${item.category_id}`);
}

async function openResult(item: ConfigSearchResult): Promise<void> {
  try {
    if (isFolderResult(item)) {
      await openFolderResult(item);
      close();
      return;
    }

    await addSearchHistory(getRawSearchResultId(item));

    if (item.summarize === 'code' || item.summarize === 'note' || item.type === 'code' || item.type === 'note') {
      await openConfigContent(item);
      close();
      return;
    }

    if (item.summarize === 'app') {
      await invoke('open_app_command', { appPath: item.content });
      close();
      return;
    }

    if (item.summarize === 'bookmark' || item.summarize === 'search' || item.summarize === 'file') {
      await invoke('open_url', { url: item.content });
      close();
      return;
    }

    if (item.summarize === 'tool') {
      await navigator.clipboard.writeText(item.content);
      modal.success(t('searchResult.copySuccess'));
      close();
    }
  } catch (error) {
    console.error('[ConfigQuickSearch] open result failed:', error);
    modal.error(t('common.operationFailed'));
  }
}
</script>

<style scoped lang="scss">
.config-search-overlay {
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 82px;
  background: rgb(15 23 42 / 18%);
}

.config-search-panel {
  width: min(760px, calc(100vw - 64px));
  overflow: hidden;
  background: var(--search-bg-color);
  border: 1px solid var(--search-border-color);
  border-radius: 10px;
  box-shadow: 0 24px 70px rgb(15 23 42 / 22%), 0 8px 22px rgb(15 23 42 / 10%);
}

.config-search-input-row {
  display: flex;
  height: 54px;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  border-bottom: 1px solid var(--search-border-color);
}

.config-search-icon {
  flex-shrink: 0;
  color: var(--search-info-text-color);
}

.config-search-input {
  flex: 1;
  min-width: 0;
  color: var(--search-text-color);
  font-size: 16px;
  background: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: var(--search-placeholder);
  }
}

.config-search-clear {
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  color: var(--search-info-text-color);
  cursor: pointer;
  background: transparent;
  border: 0;
  border-radius: 6px;

  &:hover {
    color: var(--search-text-color);
    background: var(--search-result-hover);
  }
}

.config-search-shortcut {
  flex-shrink: 0;
  padding: 2px 6px;
  color: var(--search-info-text-color);
  font-size: 11px;
  font-weight: 700;
  background: var(--search-soft-bg);
  border: 1px solid var(--search-border-color);
  border-radius: 6px;
}

.config-search-body {
  min-height: 276px;
  max-height: 452px;
  overflow-y: auto;
  padding: 8px;
}

.config-search-empty {
  display: flex;
  min-height: 260px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.config-search-empty-title {
  color: var(--search-text-color);
  font-size: 14px;
  font-weight: 700;
}

.config-search-empty-text {
  max-width: 360px;
  margin-top: 8px;
  color: var(--search-info-text-color);
  font-size: 12px;
  line-height: 20px;
}

.config-search-results {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.config-search-result {
  position: relative;
  display: grid;
  min-height: 54px;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  color: var(--search-text-color);
  text-align: left;
  cursor: pointer;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;

  &:hover,
  &.active {
    background: var(--search-result-active);
    border-color: var(--search-result-active-border);
  }

  &.active::before {
    position: absolute;
    top: 9px;
    bottom: 9px;
    left: 0;
    width: 3px;
    content: '';
    background: var(--search-result-accent);
    border-radius: 0 999px 999px 0;
  }
}

.config-search-result-icon {
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  color: var(--search-result-accent);
  font-size: 11px;
  font-weight: 800;
  background: var(--search-card-bg);
  border: 1px solid var(--search-border-color);
  border-radius: 8px;
}

.config-search-result-main {
  min-width: 0;
}

.config-search-result-title {
  display: block;
  overflow: hidden;
  color: var(--search-text-color);
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.config-search-result-content {
  display: block;
  overflow: hidden;
  margin-top: 3px;
  color: var(--search-info-text-color);
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.config-search-result-type {
  flex-shrink: 0;
  padding: 2px 7px;
  color: var(--search-info-text-color);
  font-size: 11px;
  background: var(--search-card-bg);
  border: 1px solid var(--search-border-color);
  border-radius: 999px;
}

.config-search-footer {
  display: flex;
  height: 34px;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
  padding: 0 12px;
  color: var(--search-info-text-color);
  font-size: 11px;
  border-top: 1px solid var(--search-border-color);
}

.config-search-fade-enter-active,
.config-search-fade-leave-active {
  transition: opacity 0.16s ease;

  .config-search-panel {
    transition: transform 0.16s ease, opacity 0.16s ease;
  }
}

.config-search-fade-enter-from,
.config-search-fade-leave-to {
  opacity: 0;

  .config-search-panel {
    opacity: 0;
    transform: translateY(-8px) scale(0.985);
  }
}

:deep(.highlight) {
  color: var(--search-result-accent);
  font-weight: 700;
  background: rgb(95 116 243 / 12%);
  border-radius: 3px;
}
</style>
