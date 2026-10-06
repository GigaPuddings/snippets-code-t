<template>
  <main class="category-container" :style="gridStyle">
    <section
      class="category-page"
      :class="{
        'category-page--collapsed':
          layoutStore.effectiveCategoryCollapsed || isSettingsRoute
      }"
    >
      <!-- 折叠态不显示边条/箭头；展开态仅显示内容，无折叠把手 -->
      <div
        v-if="!layoutStore.effectiveCategoryCollapsed && !isSettingsRoute"
        class="category-page__content"
      >
        <div
          class="flex h-12 shrink-0 items-center justify-between gap-1 pl-4 pr-3"
        >
          <strong
            class="min-w-0 truncate text-ui-title font-semibold tracking-[-0.4px] text-[var(--workspace-nav-heading)]"
          >
            snippets-code
          </strong>
          <div class="flex shrink-0 items-center gap-1">
            <el-tooltip effect="light" placement="bottom-end" :show-after="350">
              <template #content>
                <div class="max-w-64 font-ui">
                  <div class="text-ui font-medium">
                    {{ t('titlebar.quickSearch') }} · Ctrl K
                  </div>
                  <div class="mt-1 text-ui-caption text-content">
                    {{ t('titlebar.quickSearchPlaceholder') }}
                  </div>
                </div>
              </template>
              <button
                type="button"
                class="ui-action gap-1 px-1.5"
                :aria-label="`${t('titlebar.quickSearch')} (Ctrl K)`"
                aria-keyshortcuts="Control+K Meta+K"
                @click="openConfigQuickSearch"
              >
                <Search theme="outline" size="16" />
                <kbd class="font-ui text-ui-caption text-content">Ctrl K</kbd>
              </button>
            </el-tooltip>
            <GitContributionMiniEntry />
          </div>
        </div>
        <div class="mx-2 mb-2 flex shrink-0 items-center gap-0.5">
          <button
            type="button"
            class="ui-action min-w-0 flex-1 justify-start gap-2 px-3 font-normal"
            :title="t('fragmentType.createIn', { folder: creationFolderName })"
            @click="createContent('note')"
          >
            <EditTwo theme="outline" size="16" class="shrink-0" />
            <span class="shrink-0">{{ t('nav.newNote') }}</span>
            <span
              class="ml-auto max-w-24 truncate text-ui-caption text-content"
            >
              {{ creationFolderName }}
            </span>
          </button>
          <el-dropdown trigger="click" @command="createContent($event)">
            <button
              type="button"
              class="ui-icon-button"
              :aria-label="t('fragmentType.selectType')"
            >
              <Down theme="outline" size="14" />
            </button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="note" :icon="Notebook">
                  {{ t('nav.newNote') }}
                </el-dropdown-item>
                <el-dropdown-item command="code" :icon="FileCodeOne">
                  {{ t('fragmentType.newSnippet') }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <QuickNav
          :active-view="sidebarMode"
          :favorite-count="store.favoriteCount"
          @open="sidebarMode = $event"
        />
        <CategoryHeader
          :sort-order="categorySort"
          :view-label="sidebarMode === 'folders' ? undefined : sidebarViewLabel"
          @sort="handleSort"
          @add="openAddCategoryDialog"
          @back="showFolders"
        />
        <div
          class="category-page__browse"
          :class="{
            'category-page__browse--results': sidebarMode !== 'folders'
          }"
        >
          <div v-if="sidebarMode === 'folders'" class="category-page__list">
            <CategoryListView
              :categories="categories"
              :edit-category-id="store.editCategoryId"
              :active-category-id="selectedContentCategoryId"
              @move-content="handleMoveContent"
              @select-category="selectFolder"
              @create-content="createContent($event.type, $event.categoryId)"
            />
          </div>
          <div
            id="category-side-results"
            class="min-h-0 flex-1 overflow-hidden px-2"
            :class="sidebarMode === 'folders' ? 'hidden' : 'flex flex-col'"
          ></div>
          <details
            v-if="sidebarMode === 'folders'"
            open
            class="recent-documents px-2 pb-3 pt-2"
          >
            <summary
              class="ui-section-heading mb-1 cursor-pointer list-none px-3"
            >
              {{ t('nav.recentDocuments') }}
            </summary>
            <router-link
              v-for="item in recentDocuments"
              :key="String(item.id)"
              :to="`/config/category/contentList/content/${encodeURIComponent(String(item.id))}`"
              class="ui-menu-item mb-ui-row-gap h-ui-row px-3"
              :class="{
                active:
                  selectedContentId === String(item.id).replace(/\\/g, '/')
              }"
              :title="item.title"
            >
              <component
                :is="item.type === 'note' ? Notebook : FileCodeOne"
                theme="outline"
                size="16"
                class="shrink-0"
              />
              <span class="min-w-0 flex-1 truncate">{{ item.title }}</span>
              <Star
                v-if="item.favorite"
                theme="filled"
                size="13"
                class="shrink-0 text-[var(--workspace-nav-muted)]"
                :title="t('nav.favorited')"
                :aria-label="t('nav.favorited')"
              />
            </router-link>
          </details>
        </div>
        <div class="shrink-0 px-2 pb-2 pt-1">
          <CategorySyncStatus />
        </div>
      </div>
    </section>

    <section class="content-page">
      <div class="h-full min-h-0 overflow-hidden">
        <router-view />
      </div>
    </section>

    <PromptDialog
      v-model="showAddCategoryDialog"
      :title="$t('category.newFolder')"
      :message="$t('category.newFolder')"
      :placeholder="$t('category.newFolder')"
      :initial-value="newCategoryName"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      :required="true"
      :max-length="60"
      :validator="validateCategoryName"
      @confirm="handleConfirmAddCategory"
      @cancel="showAddCategoryDialog = false"
    />
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useConfigurationStore, useLayoutStore } from '@/store';
import { useCategoryManagement } from './composables/useCategoryManagement';
import CategoryHeader from './components/CategoryHeader.vue';
import CategoryListView from './components/CategoryListView.vue';
import CategorySyncStatus from './components/CategorySyncStatus.vue';
import GitContributionMiniEntry from '@/plugins/git-sync/components/GitContributionMiniEntry.vue';
import { PromptDialog } from '@/components/UI';
import {
  addCategory,
  getCategories,
  getFragmentList,
  moveFragmentToCategory
} from '@/api/fragment';
import modal from '@/utils/modal';
import { requestOpenFragmentCategoryMove } from '@/utils/fragmentCategoryMove';
import { useConfigQuickSearch } from '@/composables/useConfigQuickSearch';
import {
  Down,
  EditTwo,
  FileCodeOne,
  Notebook,
  Search,
  Star
} from '@icon-park/vue-next';

const store = useConfigurationStore();
const layoutStore = useLayoutStore();
const route = useRoute();
const router = useRouter();
const isSettingsRoute = computed(() => route.name === 'Settings');
type SidebarMode = 'folders' | 'all' | 'uncategorized' | 'favorites' | 'trash';
const sidebarMode = ref<SidebarMode>('folders');
provide('categorySidebarMode', sidebarMode);
const sidebarViewLabel = computed(() => {
  const labels = {
    all: 'nav.allSnippets',
    uncategorized: 'nav.uncategorized',
    favorites: 'nav.favorites',
    trash: 'nav.recentlyDeleted'
  } as const;
  return sidebarMode.value === 'folders'
    ? t('category.folders')
    : t(labels[sidebarMode.value]);
});
watch(
  [() => route.query.view, () => route.params.cid],
  ([view, cid]) => {
    if (view === 'trash' || view === 'favorites') sidebarMode.value = view;
    else if (cid === '0') sidebarMode.value = 'uncategorized';
    else if (cid || sidebarMode.value === 'trash')
      sidebarMode.value = 'folders';
  },
  { immediate: true }
);
const { t } = useI18n();
const { open: openConfigQuickSearch } = useConfigQuickSearch();
const recentDocuments = ref<ContentType[]>([]);
const selectedContentId = computed(() =>
  route.params.id
    ? decodeURIComponent(String(route.params.id)).replace(/\\/g, '/')
    : ''
);
const lastOpenedFolder = ref<{ id: string; contentId: string } | null>(null);
watch(
  [selectedContentId, () => route.params.cid],
  ([contentId, cid]) => {
    if (contentId && cid && cid !== '0') {
      lastOpenedFolder.value = { id: String(cid), contentId };
    }
  },
  { immediate: true }
);
const selectedContentCategoryId = computed(() => {
  const content = store.contents.find(
    (item) => String(item.id).replace(/\\/g, '/') === selectedContentId.value
  );
  if (content?.category_id && Number(content.category_id) > 0) {
    return content.category_id;
  }
  const folderPath = `/${selectedContentId.value
    .slice(0, selectedContentId.value.lastIndexOf('/') + 1)
    .replace(/^\/+/, '')}`.toLowerCase();
  const pathCategory = store.categories
    .filter((category) =>
      folderPath.includes(
        `/${category.name.replace(/\\/g, '/').toLowerCase()}/`
      )
    )
    .sort((a, b) => b.name.length - a.name.length)[0];
  if (pathCategory) return pathCategory.id;
  return lastOpenedFolder.value?.contentId === selectedContentId.value
    ? lastOpenedFolder.value.id
    : undefined;
});
const loadRecentDocuments = async () => {
  try {
    const files = await getFragmentList();
    recentDocuments.value = files
      .sort((a, b) =>
        String(b.updated_at ?? '').localeCompare(String(a.updated_at ?? ''))
      )
      .slice(0, 5);
  } catch {
    recentDocuments.value = [];
  }
};
const creationFolderName = computed(() => {
  const category = store.categories.find(
    (item) => String(item.id) === String(route.params.cid)
  );
  return sidebarMode.value === 'folders' && category
    ? category.name
    : t('nav.uncategorized');
});
const contentSuffix = () =>
  route.params.id
    ? `/content/${encodeURIComponent(String(route.params.id))}`
    : '';
const selectFolder = (category: CategoryType) => {
  sidebarMode.value = 'folders';
  void router.replace(
    `/config/category/contentList/${category.id}${contentSuffix()}`
  );
};
const createContent = (type: 'note' | 'code', categoryId?: string | number) => {
  const cid =
    categoryId ??
    (sidebarMode.value === 'folders' || sidebarMode.value === 'uncategorized'
      ? route.params.cid
      : undefined);
  if (cid && String(cid) !== '0') sidebarMode.value = 'folders';
  else if (sidebarMode.value !== 'uncategorized') sidebarMode.value = 'all';
  void router.push({
    path: `/config/category/contentList${cid !== undefined && cid !== '' ? `/${cid}` : ''}${contentSuffix()}`,
    query: { create: type }
  });
};
const showFolders = () => {
  sidebarMode.value = 'folders';
  if (route.query.view === 'trash' || route.query.view === 'favorites') {
    const query = { ...route.query };
    delete query.view;
    void router.replace({ path: route.path, query });
  }
};

const gridStyle = computed(() => ({
  gridTemplateColumns:
    layoutStore.effectiveCategoryCollapsed || isSettingsRoute.value
      ? '0px 1fr'
      : 'var(--workspace-sidebar-width) minmax(0, 1fr)'
}));

defineOptions({
  name: 'Category'
});

// 使用分类管理 Composable
const { categories, categorySort, loadCategories, handleSort } =
  useCategoryManagement();

const showAddCategoryDialog = ref(false);
const newCategoryName = ref('');

const openAddCategoryDialog = () => {
  newCategoryName.value = '';
  showAddCategoryDialog.value = true;
};

const invalidCategoryChars = /[\\/:*?"<>|]/;

const validateCategoryName = (value: string) => {
  if (!value.trim()) {
    return { valid: false, message: t('category.emptyName') };
  }
  if (invalidCategoryChars.test(value)) {
    return { valid: false, message: t('category.invalidNameChars') };
  }
  if (
    store.categories.some(
      (c) => c.name.toLowerCase() === value.trim().toLowerCase()
    )
  ) {
    return { valid: false, message: t('category.duplicateName') };
  }
  return { valid: true };
};

const handleConfirmAddCategory = async (value: string) => {
  const name = value.trim();

  try {
    await addCategory(name);
    store.categories = await getCategories(store.categorySort);
    showAddCategoryDialog.value = false;
    modal.success(t('category.createSuccess'));
  } catch (error) {
    console.error('[Category] 创建分类失败:', error);
    modal.error(t('category.createFailed'));
  }
};

const handleMoveContent = async (
  content: ContentType,
  categoryId: string | number
): Promise<void> => {
  try {
    const moved =
      (await requestOpenFragmentCategoryMove(content.id, categoryId)) ??
      (await moveFragmentToCategory(content.id, categoryId));
    const sourceId = String(content.id).replace(/\\/g, '/');
    const index = store.contents.findIndex(
      (item) => String(item.id).replace(/\\/g, '/') === sourceId
    );

    if (index !== -1) {
      store.contents[index] = {
        ...store.contents[index],
        ...moved
      };
    }

    window.dispatchEvent(
      new CustomEvent('refresh-data', {
        detail: { source: 'fragment-category-move' }
      })
    );
    modal.success(t('contentItem.changeCategorySuccess'));
  } catch (error) {
    console.error('[Category] 拖拽修改分类失败:', error);
    modal.error(t('contentItem.changeCategoryFailed'));
  }
};

// 监听数据刷新事件（Git Pull 完成后的无感刷新）
const handleRefreshData = (event: Event) => {
  const customEvent = event as CustomEvent;
  console.log('[Category] 收到数据刷新事件:', customEvent.detail);
  loadCategories(true);
  void loadRecentDocuments();
};

// 监听目录变更事件（外部编辑器创建/删除/重命名文件夹）
const handleDirsChanged = (event: Event) => {
  const customEvent = event as CustomEvent<{
    source: string;
    created: string[];
    deleted: string[];
    renamed: Array<{ from: string; to: string }>;
  }>;
  const { created, deleted, renamed } = customEvent.detail;
  console.log(
    `[Category] dirs-changed-batch: +${created.length} -${deleted.length} r${renamed?.length ?? 0}，重新加载分类列表`
  );
  loadCategories(true);
};

// 初始化加载数据
onMounted(async () => {
  await loadCategories();
  await loadRecentDocuments();

  window.addEventListener('refresh-data', handleRefreshData);
  window.addEventListener('refresh-categories', handleDirsChanged);
});

// 清理事件监听器
onUnmounted(() => {
  window.removeEventListener('refresh-data', handleRefreshData);
  window.removeEventListener('refresh-categories', handleDirsChanged);
});

// 监听路由变化，清除编辑状态
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      store.editCategoryId = '';
    }
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.category-container {
  @apply w-full h-full overflow-hidden;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: var(--workspace-sidebar-width) minmax(0, 1fr);
  transition: grid-template-columns 0.2s ease;

  .category-page {
    @apply relative bg-panel text-ui overflow-hidden flex;

    --categories-panel-bg: var(--workspace-nav-bg);
    --categories-panel-bg-hover: var(--workspace-nav-selected);
    --categories-bg-tab-active: var(--workspace-nav-selected);
    --categories-text-color: var(--workspace-nav-heading);
    --categories-info-text-color: var(--workspace-nav-muted);
    --categories-border-color: var(--workspace-nav-border);
    --search-result-active: var(--workspace-nav-selected);
    --search-result-accent: var(--workspace-nav-accent);

    color: var(--workspace-nav-text);
    transition: min-width 0.2s ease;

    &.category-page--collapsed {
      @apply p-0;
    }
  }

  .category-page__content {
    @apply flex-1 flex flex-col overflow-hidden min-w-0;
  }

  .category-page__browse {
    @apply flex-1 min-h-0 overflow-y-auto;

    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    &:hover {
      scrollbar-color: var(--app-scrollbar-thumb) transparent;
    }

    &--results {
      @apply flex flex-col overflow-hidden;
    }
  }

  .category-page__list {
    @apply px-2 pt-1;
  }

  .content-page {
    @apply overflow-hidden min-w-0;

    // The editor retains its existing typography while the application UI changes.
    font-family: var(--app-document-font-family);
    font-size: 16px;
  }
}

.recent-documents {
  @apply shrink-0;
}
</style>
