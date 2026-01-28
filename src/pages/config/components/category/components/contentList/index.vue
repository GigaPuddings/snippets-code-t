<template>
  <main class="content-list-container">
    <Splitter default-size="25%" min-size="25%" max-size="40%">
      <template #first>
        <div class="left-panel transparent-input">
          <div class="content-search-wrapper">
            <div class="content-search">
              <el-input
                v-model="searchText"
                :placeholder="$t('category.searchPlaceholder')"
                @focus="showSyntaxHelper = true"
                @blur="handleSearchBlur"
              >
                <template #prefix>
                  <Search
                    class="mr-1 text-panel"
                    theme="outline"
                    size="15"
                    :strokeWidth="2"
                  />
                </template>
              </el-input>
              
              <el-tooltip effect="dark" :content="$t('search.filterPanel')" placement="bottom">
                <div class="filter-button-wrapper" @click="toggleFilterPanel">
                  <Filter
                    class="content-search-filter"
                    :class="{ 'filter-active': showFilterPanel || hasActiveFilters }"
                    theme="outline"
                    size="18"
                    :strokeWidth="2"
                  />
                  <span v-if="activeFilterCount > 0" class="filter-badge">{{ activeFilterCount }}</span>
                </div>
              </el-tooltip>
              <el-tooltip effect="dark" :content="$t('category.newSnippet')" placement="bottom">
                <Plus
                  class="content-search-add"
                  theme="outline"
                  size="18"
                  :strokeWidth="2"
                  @click="handleAddContent"
                />
              </el-tooltip>
            </div>
            
            <!-- Search Syntax Helper -->
            <SearchSyntaxHelper
              :visible="showSyntaxHelper"
              @insert="handleSyntaxInsert"
            />
          </div>
          
          <!-- Tag filter indicator (legacy, kept for route-based tag filtering) -->
          <div v-if="tagFilter && !combinedFilter.tags?.includes(tagFilter)" class="tag-filter-indicator">
            <span class="filter-label">{{ $t('tags.filterByTag') }}:</span>
            <el-tag
              closable
              @close="clearTagFilter"
              class="filter-tag"
            >
              {{ tagFilter }}
            </el-tag>
          </div>
          <div class="content-list">
            <RecycleScroller
              v-if="filteredContents.length > 0"
              class="content-scroller"
              :items="filteredContents"
              :item-size="70"
              :buffer="200"
              key-field="id"
              v-slot="{ item }"
            >
              <ContentItem
                :content="item"
              />
            </RecycleScroller>
            <div v-else class="content-empty">
              <div class="content-empty-text">{{ $t('category.noContent') }}</div>
            </div>
          </div>
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
      @close="showFilterPanel = false"
    />
  </main>
</template>

<script setup lang="ts">
import { Search, Plus, Filter } from '@icon-park/vue-next';
import { getFragmentList, addFragment, getCategories, getUncategorizedId } from '@/api/fragment';
import { useRoute, useRouter } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { onMounted, nextTick, computed } from 'vue';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import FragmentTypeSelector from '@/components/FragmentTypeSelector/index.vue';
import SearchSyntaxHelper from '@/components/SearchSyntaxHelper/index.vue';
import FilterPanel from './FilterPanel.vue';
import { parseSearchText } from '@/utils/searchParser';
import { applyFilter } from '@/utils/filterEngine';
import Splitter from '@/components/Splitter/index.vue';
import ContentItem from '@/components/ContentItem/index.vue';

const route = useRoute();
const router = useRouter();
const store = useConfigurationStore();
const searchText = ref('');
const showTypeSelector = ref(false);
const showFilterPanel = ref(false);
const showSyntaxHelper = ref(false);
const panelFilter = ref<SearchFilter>({ type: 'all' });
const tagFilter = ref<string | null>(null);

defineOptions({
  name: 'ContentList'
});

// 从搜索文本解析的筛选条件
const searchFilter = computed(() => parseSearchText(searchText.value));

// 合并所有筛选条件
const combinedFilter = computed(() => {
  const filter: SearchFilter = { ...searchFilter.value, ...panelFilter.value };
  
  // 合并标签（来自路由的标签筛选）
  if (tagFilter.value) {
    filter.tags = filter.tags || [];
    if (!filter.tags.includes(tagFilter.value)) {
      filter.tags.push(tagFilter.value);
    }
  }
  
  return filter;
});

// 计算激活的筛选条件数量
const activeFilterCount = computed(() => {
  const filter = combinedFilter.value;
  let count = 0;
  
  if (filter.text) count++;
  if (filter.type && filter.type !== 'all') count++;
  if (filter.tags && filter.tags.length > 0) count += filter.tags.length;
  if (filter.createdPreset || filter.createdAfter || filter.createdBefore) count++;
  if (filter.updatedPreset || filter.updatedAfter || filter.updatedBefore) count++;
  if (filter.sortBy) count++;
  
  return count;
});

// 是否有激活的筛选条件
const hasActiveFilters = computed(() => activeFilterCount.value > 0);

// 提取所有可用标签
const availableTags = computed(() => {
  const tagSet = new Set<string>();
  store.contents.forEach(content => {
    if (content.tags && Array.isArray(content.tags)) {
      content.tags.forEach(tag => tagSet.add(tag));
    }
  });
  return Array.from(tagSet).sort();
});

// 应用筛选后的内容列表
const filteredContents = computed(() => {
  return applyFilter(store.contents, combinedFilter.value);
});

// 切换筛选面板
function toggleFilterPanel() {
  showFilterPanel.value = !showFilterPanel.value;
}

// 处理筛选面板更新
function handleFilterUpdate(filter: SearchFilter) {
  panelFilter.value = { ...filter };
}

// 处理搜索框失焦
function handleSearchBlur() {
  // 延迟隐藏，以便点击语法项时能够触发
  setTimeout(() => {
    showSyntaxHelper.value = false;
  }, 200);
}

// 处理语法插入
function handleSyntaxInsert(syntax: string) {
  // 如果搜索框已有内容，添加空格
  if (searchText.value && !searchText.value.endsWith(' ')) {
    searchText.value += ' ';
  }
  searchText.value += syntax;
  showSyntaxHelper.value = false;
}

// 查询片段列表
const queryFragments = async (cid?: string) => {
  try {
    let categoryId: number | undefined;
    
    if (!cid) {
      // 没有 cid，查询所有片段
      categoryId = undefined;
    } else if (cid === '0') {
      // cid 为 "0"，查询未分类片段（需要获取实际的未分类 ID）
      const uncategorizedId = await getUncategorizedId();
      categoryId = uncategorizedId ?? undefined;
    } else {
      // 普通分类 ID
      categoryId = Number(cid);
    }
    
    // 不传递 searchText 到后端，在前端进行筛选
    const result = await getFragmentList(
      categoryId,
      '' // 始终传递空字符串，在前端进行筛选
    );
    store.contents = result as ContentType[];
  } catch (error) {
    // Error already handled by API layer
  }
};

// 监听路由参数变化，在 cid 变化或首次加载时获取列表
watch(
  () => route.params.cid,
  (newCid, oldCid) => {
    // 检查是否有标签筛选
    const tag = route.query.tag as string | undefined;
    tagFilter.value = tag || null;
    
    // 当 cid 变化时，或者首次加载时（oldCid 为 undefined），重新获取列表
    if (newCid !== oldCid) {
      queryFragments(newCid as string);
    }
  },
  { immediate: true }
);

// 监听标签筛选变化
watch(
  () => route.query.tag,
  (newTag) => {
    tagFilter.value = (newTag as string) || null;
  }
);

// 移除 handleSearch，因为搜索现在在前端进行
// const handleSearch = debounce(() => {
//   const cid = route.params.cid as string;
//   queryFragments(cid);
// }, 500);

const handleAddContent = () => {
  // Show the type selector modal
  showTypeSelector.value = true;
};

const handleTypeConfirm = async (type: 'code' | 'note') => {
  // Hide the type selector
  showTypeSelector.value = false;
  
  const cid = route.params.cid as string;
  
  try {
    let categoryId: number | undefined;
    
    if (!cid) {
      // 没有 cid，使用未分类
      categoryId = undefined;
    } else if (cid === '0') {
      // cid 为 "0"，获取实际的未分类 ID
      const uncategorizedId = await getUncategorizedId();
      categoryId = uncategorizedId ?? undefined;
    } else {
      // 普通分类 ID
      categoryId = Number(cid);
    }
    
    // Create fragment with the selected type
    const id = await addFragment({ 
      categoryId,
      fragmentType: type
    });

    // 刷新分类列表（可能创建了新的"未分类"分类）
    store.categories = await getCategories(store.categorySort);
    
    // Clear search box
    searchText.value = '';
    
    // Refresh content list based on current view
    if (!cid) {
      // 在"所有片段"视图中，刷新所有片段
      store.contents = await getFragmentList(undefined, '');
    } else if (cid === '0') {
      // 在"未分类"视图中，刷新未分类片段
      const uncategorizedId = await getUncategorizedId();
      store.contents = await getFragmentList(uncategorizedId ?? undefined, '');
    } else {
      // 在特定分类视图中，刷新该分类的片段
      store.contents = await getFragmentList(Number(cid), '');
    }
    
    // Navigate to the new fragment, preserving the current view context
    const targetPath = cid 
      ? `/config/category/contentList/${cid}/content/${id}`
      : `/config/category/contentList/content/${id}`;
    router.replace(targetPath);
  } catch (error) {
    // Error already handled by API layer
  }
};

const handleTypeCancel = () => {
  // Hide the type selector without creating a fragment
  showTypeSelector.value = false;
};

const clearTagFilter = () => {
  tagFilter.value = null;
  router.replace({
    path: `/config/category/contentList/${route.params.cid || 0}`,
    query: {}
  });
};

// 监听 store 中的内容变化，用于更新列表
watch(
  () => store.contents,
  () => {},
  { deep: true }
);

onMounted(() => {
  const scrollY = route.query.scrollY; // 从路由查询参数中获取scrollY
  if (scrollY) {
    nextTick(() => {
      // 确保所有 DOM 更新完成
      const contentScroller = document.querySelector('.content-scroller .vue-recycle-scroller__item-view');
      if (contentScroller) {
        contentScroller.scrollTop = Number(scrollY); // 设置滚动位置
      }
    });
  }
});
</script>

<style scoped lang="scss">
.content-list-container {
  @apply h-full text-xs;
}

.left-panel {
  @apply h-full bg-panel dark:bg-panel border dark:border-panel rounded-md px-2 overflow-hidden;

  .content-search-wrapper {
    @apply relative;
  }

  .content-search {
    @apply border-b border-panel flex justify-between items-center h-[40px] gap-2;

    .dropdown-trigger {
      @apply inline-block;
    }

    .filter-button-wrapper {
      @apply relative cursor-pointer;
      
      .content-search-filter {
        @apply rounded-md p-1 text-panel hover:text-white dark:text-panel hover:bg-active dark:hover:bg-hover transition-colors;

        &.filter-active {
          @apply text-blue-500 dark:text-blue-400;
        }
      }
      
      .filter-badge {
        @apply absolute -top-1 -right-1;
        @apply bg-blue-500 text-white;
        @apply text-xs font-medium;
        @apply rounded-full;
        @apply flex items-center justify-center;
        min-width: 16px;
        height: 16px;
        padding: 0 4px;
        font-size: 10px;
        line-height: 1;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    .content-search-add {
      @apply cursor-pointer rounded-md p-1 mr-2 text-panel hover:text-white dark:text-panel hover:bg-active dark:hover:bg-hover;
    }
  }
  
  .tag-filter-indicator {
    @apply flex items-center gap-2 px-2 py-2 border-b border-panel;
    
    .filter-label {
      @apply text-xs text-content;
    }
    
    .filter-tag {
      @apply text-xs;
    }
  }

  .content-list {
    @apply overflow-hidden;
    height: calc(100vh - 82px);

    .content-scroller {
      @apply h-full p-2;
    }

    .content-empty {
      @apply flex justify-center h-full pt-6;

      .content-empty-text {
        @apply opacity-90 text-content text-xs select-none;
      }
    }
  }
}

.right-panel {
  @apply h-full bg-panel dark:bg-panel border dark:border-panel rounded-md overflow-hidden;
}
</style>
