<template>
  <main class="content-list-container">
    <Splitter default-size="25%" min-size="25%" max-size="40%">
      <template #first>
        <div class="left-panel transparent-input">
          <!-- Search Bar Component -->
          <ContentSearchBar
            v-model:searchText="searchText"
            :show-filter-panel="showFilterPanel"
            :has-active-filters="hasActiveFilters"
            :active-filter-count="activeFilterCount"
            @toggle-filter="toggleFilterPanel"
            @add-content="handleAddContent"
          />
          
          <!-- List View Component -->
          <ContentListView
            :contents="filteredContents"
            :tag-filter="tagFilter"
            :combined-filter="combinedFilter"
            @delete="handleDelete"
            @change-category="handleChangeCategory"
            @clear-tag-filter="handleClearTagFilter"
          />
        </div>
      </template>
      
      <template #second>
        <div class="right-panel">
          <router-view />
        </div>
      </template>
    </Splitter>

    <!-- Fragment Type Selector Modal -->
    <FragmentTypeSelector
      v-if="showTypeSelector"
      @confirm="handleTypeConfirm"
      @cancel="handleTypeCancel"
    />
    
    <!-- Filter Panel (Floating) -->
    <FilterPanel
      :visible="showFilterPanel"
      :filter="panelFilter"
      :available-tags="availableTags"
      @update:filter="handleFilterUpdate"
      @reset="handleFilterReset"
      @close="showFilterPanel = false"
    />

    <!-- Delete Confirmation Dialog -->
    <ConfirmDialog
      v-model="showDeleteDialog"
      :title="$t('common.warning')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      type="danger"
      @confirm="confirmDelete"
    >
      <div>{{ $t('contentItem.deleteConfirm', { name: deleteTarget?.title }) }}</div>
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
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { useI18n } from 'vue-i18n';
import Splitter from '@/components/Splitter/index.vue';
import FragmentTypeSelector from '@/components/FragmentTypeSelector/index.vue';
import FilterPanel from './FilterPanel.vue';
import { ConfirmDialog, SelectConfirmDialog, BacklinkUpdateDialog } from '@/components/UI';
import ContentSearchBar from './components/ContentSearchBar.vue';
import ContentListView from './components/ContentListView.vue';
import { useContentList } from './composables/useContentList';
import { useContentDialogs } from './composables/useContentDialogs';
import { rebuildSearchIndex } from '@/api/markdown';
import { logger } from '@/utils/logger';

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
const { t } = useI18n();

defineOptions({
  name: 'ContentList'
});



// 使用内容列表 Composable
const {
  searchText,
  panelFilter,
  tagFilter,
  combinedFilter,
  activeFilterCount,
  hasActiveFilters,
  availableTags,
  filteredContents,
  queryFragments,
  updateFilter,
  clearTagFilter
} = useContentList();

// 使用对话框 Composable
const {
  showTypeSelector,
  showDeleteDialog,
  showCategoryDialog,
  showBacklinkUpdateDialog,
  deleteTarget,
  selectedCategoryId,
  backlinkStats,
  handleAddContent,
  handleTypeConfirm,
  handleTypeCancel,
  handleDelete,
  confirmDelete,
  confirmDeleteWithBacklinks,
  handleChangeCategory,
  confirmCategoryChange
} = useContentDialogs();

const showFilterPanel = ref<boolean>(false);

/**
 * 切换筛选面板显示状态
 */
function toggleFilterPanel(): void {
  if (!showFilterPanel.value) {
    const currentFilter: SearchFilter = { 
      type: panelFilter.value.type || 'all',
      sortBy: panelFilter.value.sortBy,
      sortOrder: panelFilter.value.sortOrder
    };
    
    if (tagFilter.value) {
      currentFilter.tags = [tagFilter.value];
    } else if (panelFilter.value.tags) {
      currentFilter.tags = [...panelFilter.value.tags];
    }
    
    panelFilter.value = currentFilter;
  }
  
  showFilterPanel.value = !showFilterPanel.value;
}

/**
 * 处理筛选面板更新
 * @param filter - 新的筛选条件
 */
function handleFilterUpdate(filter: SearchFilter): void {
  updateFilter(filter);
  
  if (!filter.tags || filter.tags.length === 0) {
    if (route.query.tag) {
      const { tag, ...restQuery } = route.query;
      router.replace({
        path: route.path,
        query: restQuery
      });
    }
  } else {
    if (route.query.tag && !filter.tags.includes(route.query.tag as string)) {
      const { tag, ...restQuery } = route.query;
      router.replace({
        path: route.path,
        query: restQuery
      });
    }
  }
}

/**
 * 处理清除标签筛选
 */
function handleClearTagFilter(): void {
  clearTagFilter();
  router.replace({
    path: `/config/category/contentList/${route.params.cid || 0}`,
    query: {}
  });
}

/**
 * 处理筛选面板重置
 */
function handleFilterReset(): void {
  // 清空搜索框文本
  searchText.value = '';
  // 清除标签筛选
  clearTagFilter();
  // 清除路由查询参数
  router.replace({
    path: route.path,
    query: {}
  });
}

// 分类选项（包括"未分类"）
const categoryOptions = computed<CategoryOption[]>(() => {
  return [
    { label: t('contentItem.uncategorized'), value: 0 },
    // 过滤掉系统分类（如"未分类"），只显示用户创建的分类
    ...store.categories
      .filter(category => !category.isSystem)
      .map((category) => ({
        label: category.name,
        value: category.id as number
      }))
  ];
});

// 监听数据刷新事件（Git Pull 完成后的无感刷新）
const handleRefreshData = async (event: Event) => {
  const customEvent = event as CustomEvent;
  logger.info('[ContentList] 🔔 收到数据刷新事件:', customEvent.detail);
  
  try {
    // 重新加载当前分类的文件列表
    const categoryId = route.params.cid as string;
    logger.info('[ContentList] 🔄 开始重新加载分类数据, categoryId:', categoryId);
    
    // 保存当前的搜索文本，以便刷新后恢复
    const currentSearchText = searchText.value;
    logger.info('[ContentList] 💾 保存当前搜索状态:', currentSearchText);
    
    // git-pull 事件：后端会发送 files-changed-batch，此处做兜底全量刷新
    if (customEvent.detail?.source === 'git-pull') {
      logger.info('[ContentList] 📥 Git Pull 事件，执行兜底刷新');
      await queryFragments(categoryId, currentSearchText);
      logger.info('[ContentList] ✅ Git Pull 兜底刷新完成');
      return;
    }
    
    // 处理批量文件变更事件
    if (customEvent.detail?.source === 'files-changed-batch') {
      const { created, modified, deleted, renamed } = customEvent.detail;
      console.log(`[ContentList] 📦 批量文件变更: ${created?.length || 0} 创建, ${modified?.length || 0} 修改, ${deleted?.length || 0} 删除, ${renamed?.length || 0} 重命名`);
      
      // 先重建搜索索引，等待完成后再刷新列表
      console.log('[ContentList] 🔄 开始重建搜索索引');
      try {
        await rebuildSearchIndex();
        console.log('[ContentList] ✅ 搜索索引重建完成');
      } catch (err) {
        console.error('[ContentList] ❌ 重建搜索索引失败:', err);
      }
      
      // 刷新列表（保持搜索状态）
      await queryFragments(categoryId, currentSearchText);
      console.log('[ContentList] ✅ 批量数据刷新完成（保持搜索状态）');
      return;
    }
    
    // 其他事件：正常刷新列表（保持搜索状态）
    await queryFragments(categoryId, currentSearchText);
    console.log('[ContentList] ✅ 数据刷新完成（保持搜索状态）');
  } catch (error) {
    console.error('[ContentList] ❌ 数据刷新失败:', error);
  }
};

// 监听目录变更事件（外部编辑器创建/删除/重命名文件夹）
const handleDirsChanged = async (event: Event) => {
  const customEvent = event as CustomEvent<{
    source: string;
    created: string[];
    deleted: string[];
    renamed: Array<{ from: string; to: string }>;
  }>;
  const { created, deleted, renamed } = customEvent.detail;
  console.log(
    `[ContentList] dirs-changed-batch: +${created.length} -${deleted.length} r${renamed?.length ?? 0}，重新加载内容列表`
  );
  
  // 重新加载当前分类的内容列表
  const categoryId = route.params.cid as string;
  const currentSearchText = searchText.value;
  await queryFragments(categoryId, currentSearchText);
};

onMounted(() => {
  // 组件挂载时不执行任何滚动操作
  logger.info('[ContentList] 🎬 组件已挂载，开始监听 refresh-data 事件');
  
  // 监听数据刷新事件
  window.addEventListener('refresh-data', handleRefreshData);
  // 监听目录变更事件（外部编辑器创建/删除/重命名文件夹）
  window.addEventListener('refresh-categories', handleDirsChanged);
  logger.info('[ContentList] ✅ refresh-data 事件监听器已设置');
});

onUnmounted(() => {
  // 清理事件监听器
  logger.info('[ContentList] 🛑 组件卸载，清理事件监听器');
  window.removeEventListener('refresh-data', handleRefreshData);
  window.removeEventListener('refresh-categories', handleDirsChanged);
});
</script>

<style scoped lang="scss">
.content-list-container {
  @apply h-full text-xs;
}

.left-panel {
  @apply h-full bg-panel dark:bg-panel border dark:border-panel rounded-md px-2 overflow-hidden;
}

.right-panel {
  @apply h-full bg-panel dark:bg-panel border dark:border-panel rounded-md overflow-hidden;
}
</style>
