<template>
  <main class="category-container">
    <Splitter
      animate-collapse
      :model-value="layoutStore.effectiveCategoryPanelWidth"
      :default-size="CATEGORY_PANEL_DEFAULT_WIDTH"
      :min-size="CATEGORY_PANEL_MIN_WIDTH"
      :max-size="CATEGORY_PANEL_MAX_WIDTH"
      :min-second-size="360"
      :first-collapsed="
        layoutStore.effectiveCategoryCollapsed || isSettingsRoute
      "
      :label="t('nav.resizeSidebar')"
      @resize-end="layoutStore.setCategoryPanelWidth"
    >
      <template #first>
        <section class="category-page">
          <div v-if="!isSettingsRoute" class="category-page__content">
            <div
              class="flex h-12 shrink-0 items-center justify-between gap-1 pl-4 pr-3"
            >
              <strong
                class="min-w-0 truncate text-ui-title font-semibold tracking-[-0.4px] text-[var(--workspace-nav-heading)]"
              >
                snippets-code
              </strong>
              <div class="flex shrink-0 items-center gap-1">
                <el-tooltip
                  v-if="canQuickSearch"
                  effect="light"
                  placement="bottom-end"
                  :show-after="350"
                >
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
                    <Search width="16" height="16" />
                    <kbd class="font-ui text-ui-caption text-content">
                      Ctrl K
                    </kbd>
                  </button>
                </el-tooltip>
                <GitContributionMiniEntry />
              </div>
            </div>
            <ContentCreateControl
              :folder="creationFolderName"
              @create="createContent"
            />
            <QuickNav :active-view="sidebarMode" @open="sidebarMode = $event" />
            <CategoryHeader
              :sort-order="categorySort"
              :has-folders="
                sidebarMode === 'tags'
                  ? tagNames.size > 0
                  : categories.length > 0
              "
              :has-expanded="
                sidebarMode === 'tags' ? hasExpandedTags : hasExpandedFolders
              "
              :tag-tree="sidebarMode === 'tags'"
              :saving-order="savingOrder"
              @toggle-groups="
                sidebarMode === 'tags' ? toggleTags() : toggleFolders()
              "
              :view-label="
                sidebarMode === 'folders' ? undefined : sidebarViewLabel
              "
              @sort="handleSort"
              @add="openAddCategoryDialog"
              @back="showFolders"
            />
            <div
              class="category-page__browse"
              ref="browseRef"
              :class="{
                'ui-sidebar-scroll': sidebarMode === 'folders',
                'category-page__browse--results': sidebarMode !== 'folders'
              }"
            >
              <div v-if="sidebarMode === 'folders'" class="category-page__list">
                <CategoryListView
                  :key="categories[0]?.workspaceRoot"
                  :categories="categories"
                  :expanded-ids="expandedIds"
                  :saving-order="savingOrder"
                  :content-busy="contentBusy"
                  @set-expanded="setFolderExpanded"
                  @swap-folders="swapFolders"
                  :active-category-id="selectedContentCategoryId"
                  @move-content="handleMoveContent"
                  @select-category="selectFolder"
                  @create-content="
                    createContent($event.type, $event.categoryId)
                  "
                />
              </div>
              <div
                ref="sidebarResults"
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
                <ContentItem
                  v-for="item in recentDocuments"
                  :key="String(item.id)"
                  :content="item"
                  :category-id="item.category_id ?? ''"
                  @delete="dispatchContentAction('delete', item)"
                  @change-category="
                    dispatchContentAction('change-category', item)
                  "
                  @convert-type="
                    (_, targetType) =>
                      dispatchContentAction('convert-type', item, targetType)
                  "
                />
              </details>
            </div>
            <div class="shrink-0 px-2 pb-2 pt-1">
              <CategorySyncStatus />
            </div>
          </div>
        </section>
      </template>

      <template #second>
        <section class="content-page">
          <div class="h-full min-h-0 overflow-hidden">
            <router-view />
          </div>
        </section>
      </template>
    </Splitter>

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
import {
  CATEGORY_PANEL_DEFAULT_WIDTH,
  CATEGORY_PANEL_MIN_WIDTH,
  CATEGORY_PANEL_MAX_WIDTH
} from '@/store/layout';
import Splitter from '@/components/Splitter/index.vue';
import ContentItem from '@/components/ContentItem/index.vue';
import {
  contentEditorKey,
  type ContentEditor
} from '@/components/ContentItem/contentEditor';
import { useCategoryManagement } from './composables/useCategoryManagement';
import CategoryHeader from './components/CategoryHeader.vue';
import CategoryListView from './components/CategoryListView.vue';
import CategorySyncStatus from './components/CategorySyncStatus.vue';
import ContentCreateControl from './components/ContentCreateControl.vue';
import GitContributionMiniEntry from '@/plugins/git-sync/components/GitContributionMiniEntry.vue';
import { PromptDialog } from '@/components/UI';
import {
  addCategory,
  getCategories,
  getFragmentList,
  moveFragmentToCategory
} from '@/api/fragment';
import modal from '@/utils/modal';
import { parseTags } from '@/utils/fragment';
import { requestOpenFragmentCategoryMove } from '@/utils/fragmentCategoryMove';
import { setMarkdownFileOrder, getWorkspaceRoot } from '@/api/markdown';
import {
  orderDroppedFragment,
  type FragmentDropPosition
} from '@/utils/fragmentDragDrop';
import { useConfigQuickSearch } from '@/composables/useConfigQuickSearch';
import { getConfigTabLabelKey } from '@/plugins/navigation';
import Search from '~icons/lucide/search';

const store = useConfigurationStore();
const layoutStore = useLayoutStore();
const route = useRoute();
const router = useRouter();
const isSettingsRoute = computed(() => route.name === 'Settings');
type SidebarMode = 'folders' | 'all' | 'uncategorized' | 'tags' | 'trash';
const sidebarMode = ref<SidebarMode>('folders');
provide(contentEditorKey, shallowRef<ContentEditor | null>(null));
provide('categorySidebarMode', sidebarMode);
const expandedTags = ref(new Set<string>());
provide('categoryExpandedTags', expandedTags);
const tagNames = computed(
  () => new Set(store.contents.flatMap((item) => parseTags(item.tags) ?? []))
);
const hasExpandedTags = computed(() =>
  [...expandedTags.value].some((tag) => tagNames.value.has(tag))
);
function toggleTags(): void {
  expandedTags.value = hasExpandedTags.value
    ? new Set()
    : new Set(tagNames.value);
}
const sidebarResults = shallowRef<HTMLElement | null>(null);
provide('categorySidebarTarget', sidebarResults);
const sidebarViewLabel = computed(() => {
  const labels = {
    all: 'nav.allSnippets',
    uncategorized: 'nav.uncategorized',
    tags: 'tags.tags',
    trash: 'nav.recentlyDeleted'
  } as const;
  return sidebarMode.value === 'folders'
    ? t('category.folders')
    : t(labels[sidebarMode.value]);
});
watch(
  [() => route.query.view, () => route.params.cid],
  ([view, cid]) => {
    if (view === 'trash' || view === 'tags') sidebarMode.value = view;
    else if (cid === '0') sidebarMode.value = 'uncategorized';
    else if (
      cid ||
      sidebarMode.value === 'trash' ||
      sidebarMode.value === 'tags'
    )
      sidebarMode.value = 'folders';
  },
  { immediate: true }
);
const { t } = useI18n();
const { open: openConfigQuickSearch } = useConfigQuickSearch();
const canQuickSearch = computed(
  () => getConfigTabLabelKey(route.path) === 'nav.workspace'
);
const recentDocuments = ref<ContentType[]>([]);
const selectedContentId = computed(() =>
  route.params.id ? String(route.params.id).replace(/\\/g, '/') : ''
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
const dispatchContentAction = (
  action: string,
  content: ContentType,
  targetType?: 'code' | 'note'
): void => {
  window.dispatchEvent(
    new CustomEvent('sidebar-content-action', {
      detail: { action, content, targetType }
    })
  );
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
  void router.replace({
    path: route.path,
    query: { ...route.query, create: type, createIn: String(cid ?? '') }
  });
};
const showFolders = () => {
  sidebarMode.value = 'folders';
  if (route.query.view === 'trash' || route.query.view === 'tags') {
    const query = { ...route.query };
    delete query.view;
    void router.replace({ path: route.path, query });
  }
};

defineOptions({
  name: 'Category'
});

// 使用分类管理 Composable
const {
  categories,
  categorySort,
  loadCategories,
  handleSort,
  savingOrder,
  swapFolders
} = useCategoryManagement();

const expandedIds = ref(new Set<string>());
const hasExpandedFolders = computed(() =>
  categories.value.some((folder) => expandedIds.value.has(String(folder.id)))
);
function setFolderExpanded(id: string, expanded: boolean): void {
  if (expanded) expandedIds.value.add(id);
  else expandedIds.value.delete(id);
}
function toggleFolders(): void {
  expandedIds.value = hasExpandedFolders.value
    ? new Set()
    : new Set(categories.value.map((folder) => String(folder.id)));
}
watch(
  () => categories.value[0]?.workspaceRoot,
  () => expandedIds.value.clear()
);
watch(categories, (folders) => {
  const visible = new Set(folders.map((folder) => String(folder.id)));
  for (const id of expandedIds.value)
    if (!visible.has(id)) expandedIds.value.delete(id);
});

const showAddCategoryDialog = ref(false);
const browseRef = ref<HTMLElement | null>(null);
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
    await nextTick();
    browseRef.value?.scrollTo({ top: 0 });
    modal.success(t('category.createSuccess'));
  } catch (error) {
    console.error('[Category] 创建分类失败:', error);
    modal.error(t('category.createFailed'));
  }
};

const contentBusy = ref(false);
const handleMoveContent = async (
  content: ContentType,
  categoryId: string | number,
  position?: FragmentDropPosition
): Promise<void> => {
  if (contentBusy.value) return;
  contentBusy.value = true;
  let movedToFolder = false;
  try {
    if (position && (await getWorkspaceRoot()) !== position.workspaceRoot)
      throw new Error('Workspace changed');
    const sameFolder = String(content.category_id) === String(categoryId);
    if (sameFolder && position) {
      await setMarkdownFileOrder(
        position.workspaceRoot,
        categoryId,
        orderDroppedFragment(
          position.paths,
          String(content.id),
          position.targetId,
          position.swap,
          position.after
        )
      );
      modal.success(t('contentItem.orderSuccess'));
      return;
    }
    const moved =
      (await requestOpenFragmentCategoryMove(content.id, categoryId)) ??
      (await moveFragmentToCategory(content.id, categoryId));
    movedToFolder = true;
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

    if (position) {
      await setMarkdownFileOrder(
        position.workspaceRoot,
        categoryId,
        orderDroppedFragment(
          position.paths,
          String(moved.id),
          position.targetId,
          false,
          position.after
        )
      );
    }
    modal.success(t('contentItem.changeCategorySuccess'));
  } catch (error) {
    console.error('[Category] 拖拽修改分类失败:', error);
    modal.error(
      t(
        movedToFolder
          ? 'contentItem.moveOrderFailed'
          : position
            ? 'contentItem.orderFailed'
            : 'contentItem.changeCategoryFailed'
      )
    );
  } finally {
    contentBusy.value = false;
    window.dispatchEvent(
      new CustomEvent('refresh-data', {
        detail: { source: 'fragment-category-move' }
      })
    );
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
  const { created = [], deleted = [], renamed } = customEvent.detail;
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

  .category-page {
    @apply relative h-full bg-panel text-ui overflow-hidden flex;

    --categories-panel-bg: var(--workspace-nav-bg);
    --categories-panel-bg-hover: var(--workspace-nav-selected);
    --categories-bg-tab-active: var(--workspace-nav-selected);
    --categories-text-color: var(--workspace-nav-heading);
    --categories-info-text-color: var(--workspace-nav-muted);
    --categories-border-color: var(--workspace-nav-border);
    --search-result-active: var(--workspace-nav-selected);
    --search-result-accent: var(--workspace-nav-accent);

    color: var(--workspace-nav-text);
  }

  .category-page__content {
    @apply flex-1 flex flex-col overflow-hidden min-w-0;
  }

  .category-page__browse {
    @apply flex-1 min-h-0 overflow-y-auto;

    &--results {
      @apply flex flex-col overflow-hidden;
    }
  }

  .category-page__list {
    @apply px-2 pt-1;
  }

  .content-page {
    @apply h-full overflow-hidden min-w-0;

    // Document typography is shared with AI replies through Markdown tokens.
    font-family: var(--app-document-font-family);
    font-size: var(--markdown-body-size);
  }
}

.recent-documents {
  @apply shrink-0;
}
</style>
