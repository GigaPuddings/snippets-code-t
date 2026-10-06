<template>
  <main class="content-list-container">
    <Teleport v-if="sidebarMode !== 'folders'" to="#category-side-results">
      <DeletedNotesView v-if="route.query.view === 'trash'" />
      <div v-else class="left-panel__content">
        <ContentListView
          :contents="contents"
          @delete="handleDelete"
          @toggle-favorite="handleToggleFavorite"
          @change-category="handleChangeCategory"
          @convert-type="handleConvertType"
        />
      </div>
    </Teleport>

    <div class="right-panel">
      <router-view v-if="route.query.view !== 'trash' || route.params.id" />
      <div
        v-else
        class="flex h-full items-center justify-center text-sm text-content"
      >
        {{ t('nav.recentlyDeleted') }}
      </div>
    </div>

    <!-- Delete Confirmation Dialog -->
    <ConfirmDialog
      v-model="showDeleteDialog"
      :title="$t('common.warning')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      type="danger"
      @confirm="confirmDelete"
    >
      <div>
        {{ $t('contentItem.deleteConfirm', { name: deleteTarget?.title }) }}
      </div>
    </ConfirmDialog>

    <!-- Backlink Update Dialog (for deletion) -->
    <BacklinkUpdateDialog
      v-model="showBacklinkUpdateDialog"
      :title="$t('backlinks.deleteWithBacklinks')"
      :fragment-title="deleteTarget?.title || ''"
      :backlink-count="backlinkStats?.count || 0"
      :backlink-fragments="backlinkStats?.fragments || []"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      @confirm="confirmDeleteWithBacklinks"
    />

    <!-- Change Category Dialog -->
    <SelectConfirmDialog
      v-model="showCategoryDialog"
      :title="$t('contentItem.changeCategory')"
      :options="categoryOptions"
      :default-value="selectedCategoryId"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      @confirm="confirmCategoryChange"
    />

    <!-- Fragment Type Conversion Dialog -->
    <ConfirmDialog
      v-model="showTypeConversionDialog"
      :title="$t('category.convertConfirmTitle')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      type="warning"
      @confirm="confirmTypeConversion"
    >
      <div>
        {{
          $t(
            typeConversionTargetType === 'note'
              ? 'category.convertToNoteConfirm'
              : 'category.convertToCodeConfirm'
          )
        }}
      </div>
    </ConfirmDialog>
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { useI18n } from 'vue-i18n';
import type { Ref } from 'vue';
import {
  ConfirmDialog,
  SelectConfirmDialog,
  BacklinkUpdateDialog
} from '@/components/UI';
import ContentListView from './components/ContentListView.vue';
import DeletedNotesView from './components/DeletedNotesView.vue';
import { useContentList } from './composables/useContentList';
import { useContentDialogs } from './composables/useContentDialogs';
import { rebuildSearchIndex } from '@/api/markdown';
import { getDebouncedHandler } from '@/utils/debounced-handler';

/**
 * 分类选项接口
 */
interface CategoryOption {
  /** 分类名称 */
  label: string;
  /** 分类 ID */
  value: number;
}

const route = useRoute();
const router = useRouter();
const store = useConfigurationStore();
const sidebarMode = inject<Ref<string>>('categorySidebarMode', ref('folders'));
const { t } = useI18n();

defineOptions({
  name: 'ContentList'
});

// 使用内容列表 Composable
const {
  contents,
  queryFragments,
  toggleContentFavorite: handleToggleFavorite
} = useContentList();

// 使用对话框 Composable
const {
  showDeleteDialog,
  showCategoryDialog,
  showBacklinkUpdateDialog,
  showTypeConversionDialog,
  deleteTarget,
  typeConversionTargetType,
  selectedCategoryId,
  backlinkStats,
  handleTypeConfirm,
  handleDelete,
  confirmDelete,
  confirmDeleteWithBacklinks,
  handleChangeCategory,
  confirmCategoryChange,
  handleConvertType,
  confirmTypeConversion
} = useContentDialogs();

// 分类选项（包括"未分类"）
const categoryOptions = computed<CategoryOption[]>(() => {
  return [
    { label: t('contentItem.uncategorized'), value: 0 },
    // 过滤掉系统分类（如"未分类"），只显示用户创建的分类
    ...store.categories
      .filter((category) => !category.isSystem)
      .map((category) => ({
        label: category.name,
        value: category.id as number
      }))
  ];
});

// 防抖处理器：防止短时间内多次刷新
const refreshHandler = getDebouncedHandler('contentList-refresh', 200);

// 监听数据刷新事件（Git Pull 完成后的无感刷新）
const handleRefreshData = async (event: Event) => {
  const customEvent = event as CustomEvent;

  if (customEvent.detail?.source === 'favorite-change') {
    await queryFragments(route.params.cid as string | undefined);
    return;
  }

  // 使用防抖处理，避免重复刷新
  await refreshHandler.handle(async () => {
    try {
      // 重新加载当前分类的文件列表
      const categoryId = route.params.cid as string | undefined;

      // 处理批量文件变更事件
      if (customEvent.detail?.source === 'files-changed-batch') {
        // 先重建搜索索引，等待完成后再刷新列表
        try {
          await rebuildSearchIndex();
        } catch (err) {
          console.error('[ContentList] 重建搜索索引失败:', err);
        }
      }

      await queryFragments(categoryId);
    } catch (error) {
      console.error('[ContentList] 数据刷新失败:', error);
    }
  });
};

// 防抖处理器：防止短时间内多次刷新
const dirsChangeHandler = getDebouncedHandler('contentList-dirs-change', 200);

// 监听目录变更事件（外部编辑器创建/删除/重命名文件夹）
const handleDirsChanged = async (_event: Event) => {
  // 使用防抖处理
  await dirsChangeHandler.handle(async () => {
    const categoryId = route.params.cid as string | undefined;
    await queryFragments(categoryId);
  });
};

onMounted(() => {
  // 监听数据刷新事件
  window.addEventListener('refresh-data', handleRefreshData);
  // 监听目录变更事件（外部编辑器创建/删除/重命名文件夹）
  window.addEventListener('refresh-categories', handleDirsChanged);
  window.addEventListener('sidebar-content-action', handleSidebarContentAction);
});

onUnmounted(() => {
  // 清理事件监听器
  window.removeEventListener('refresh-data', handleRefreshData);
  window.removeEventListener('refresh-categories', handleDirsChanged);
  window.removeEventListener(
    'sidebar-content-action',
    handleSidebarContentAction
  );
});

function handleSidebarContentAction(event: Event): void {
  const { action, content, targetType } = (
    event as CustomEvent<{
      action: string;
      content: ContentType;
      targetType?: 'code' | 'note';
    }>
  ).detail;
  if (action === 'delete') handleDelete(content);
  else if (action === 'toggle-favorite') void handleToggleFavorite(content);
  else if (action === 'change-category') handleChangeCategory(content);
  else if (action === 'convert-type' && targetType)
    handleConvertType(content, targetType);
}

watch(
  () => route.query.create,
  async (value) => {
    if (value !== 'note' && value !== 'code') return;
    const query = { ...route.query };
    delete query.create;
    await router.replace({ path: route.path, query });
    await handleTypeConfirm(value);
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
.content-list-container {
  @apply h-full w-full min-w-0 max-w-full overflow-hidden text-xs;
}

.left-panel__content {
  @apply flex-1 flex flex-col overflow-hidden min-w-0;
}

.right-panel {
  @apply h-full w-full min-w-0 max-w-full overflow-hidden bg-panel dark:bg-panel;
}
</style>
