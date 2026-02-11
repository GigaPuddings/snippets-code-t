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
import { computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
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

// 添加生命周期日志
onMounted(() => {
  console.log('[ContentList] 组件挂载, cid:', route.params.cid);
});

onBeforeUnmount(() => {
  console.log('[ContentList] 组件卸载');
});

// 监听路由参数变化
watch(
  () => route.params.cid,
  (newCid, oldCid) => {
    console.log('[ContentList] cid 参数变化:', { from: oldCid, to: newCid });
  }
);

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
    ...store.categories.map((category) => ({
      label: category.name,
      value: category.id as number
    }))
  ];
});

onMounted(() => {
  // 组件挂载时不执行任何滚动操作
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
