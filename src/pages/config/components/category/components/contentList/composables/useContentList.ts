/**
 * ContentList Composable
 * 管理内容列表的数据获取、筛选和状态
 */

import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { getFragmentList, getUncategorizedId } from '@/api/fragment';
import { parseSearchText } from '@/utils/searchParser';
import { applyFilter } from '@/utils/filterEngine';

/**
 * useContentList 返回值接口
 */
export interface UseContentListReturn {
  /** 搜索文本 */
  searchText: Ref<string>;
  /** 面板筛选条件 */
  panelFilter: Ref<SearchFilter>;
  /** 标签筛选 */
  tagFilter: Ref<string | null>;
  /** 合并后的筛选条件 */
  combinedFilter: ComputedRef<SearchFilter>;
  /** 激活的筛选条件数量 */
  activeFilterCount: ComputedRef<number>;
  /** 是否有激活的筛选条件 */
  hasActiveFilters: ComputedRef<boolean>;
  /** 可用标签列表 */
  availableTags: ComputedRef<string[]>;
  /** 筛选后的内容列表 */
  filteredContents: ComputedRef<ContentType[]>;
  /** 查询片段列表 */
  queryFragments: (cid?: string) => Promise<void>;
  /** 更新筛选条件 */
  updateFilter: (filter: SearchFilter) => void;
  /** 清除标签筛选 */
  clearTagFilter: () => void;
}

/**
 * 内容列表管理 Composable
 * 
 * @returns UseContentListReturn
 * 
 * @example
 * ```typescript
 * const {
 *   searchText,
 *   filteredContents,
 *   queryFragments
 * } = useContentList();
 * ```
 */
export function useContentList(): UseContentListReturn {
  const route = useRoute();
  const store = useConfigurationStore();
  
  const searchText = ref<string>('');
  const panelFilter = ref<SearchFilter>({ type: 'all' });
  const tagFilter = ref<string | null>(null);
  const isLoadingFragments = ref<boolean>(false);

  // 从搜索文本解析的筛选条件
  const searchFilter = computed<SearchFilter>(() => parseSearchText(searchText.value));

  // 合并所有筛选条件
  const combinedFilter = computed<SearchFilter>(() => {
    const filter: SearchFilter = { 
      ...searchFilter.value, 
      ...panelFilter.value 
    };
    
    // 处理标签合并
    if (panelFilter.value.tags && panelFilter.value.tags.length > 0) {
      filter.tags = [...panelFilter.value.tags];
    } else if (tagFilter.value) {
      filter.tags = [tagFilter.value];
    }
    
    return filter;
  });

  // 计算激活的筛选条件数量
  const activeFilterCount = computed<number>(() => {
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
  const hasActiveFilters = computed<boolean>(() => activeFilterCount.value > 0);

  // 提取所有可用标签
  const availableTags = computed<string[]>(() => {
    const tagSet = new Set<string>();
    store.contents.forEach((content: ContentType) => {
      if (content.tags && Array.isArray(content.tags)) {
        content.tags.forEach((tag: string) => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  });

  // 应用筛选后的内容列表
  const filteredContents = computed<ContentType[]>(() => {
    return applyFilter(store.contents, combinedFilter.value);
  });

  /**
   * 查询片段列表
   * @param cid - 分类 ID（可选）
   */
  const queryFragments = async (cid?: string): Promise<void> => {
    // 避免重复加载
    if (isLoadingFragments.value) {
      return;
    }
    
    isLoadingFragments.value = true;
    try {
      let categoryId: number | undefined;
      
      if (!cid) {
        categoryId = undefined;
      } else if (cid === '0') {
        const uncategorizedId = await getUncategorizedId();
        categoryId = uncategorizedId ?? undefined;
      } else {
        categoryId = Number(cid);
      }
      
      const result = await getFragmentList(categoryId, '');
      
      // 为每个内容项添加 category_name
      const contentsWithCategoryName = (result as ContentType[]).map(content => {
        if (content.category_id && !content.category_name) {
          // 从 store.categories 中查找对应的分类名称
          const category = store.categories.find(cat => cat.id === content.category_id);
          if (category) {
            return {
              ...content,
              category_name: category.name
            };
          }
        }
        return content;
      });
      
      store.contents = contentsWithCategoryName;
    } catch (error) {
      console.error('[useContentList] 片段列表加载失败:', error);
      // Error already handled by API layer
    } finally {
      isLoadingFragments.value = false;
    }
  };

  /**
   * 更新筛选条件
   * @param filter - 新的筛选条件
   */
  const updateFilter = (filter: SearchFilter): void => {
    panelFilter.value = { ...filter };
    
    if (!filter.tags || filter.tags.length === 0) {
      tagFilter.value = null;
    }
  };

  /**
   * 清除标签筛选
   */
  const clearTagFilter = (): void => {
    tagFilter.value = null;
  };

  // 监听路由参数变化
  watch(
    () => route.params.cid,
    (newCid, oldCid) => {
      const tag = route.query.tag as string | undefined;
      tagFilter.value = tag || null;
      
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

  return {
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
  };
}
