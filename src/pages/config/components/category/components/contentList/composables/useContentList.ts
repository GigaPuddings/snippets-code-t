/**
 * ContentList Composable
 * 管理内容列表的数据获取、筛选和状态
 */

import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { getFragmentList } from '@/api/fragment';
import { parseSearchText } from '@/utils/searchParser';
import { applyFilter, applySorting } from '@/utils/filterEngine';
import { debounce } from '@/utils';

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
  queryFragments: (cid?: string, search?: string) => Promise<void>;
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
    
    // 如果 searchFilter 有 type，且 panelFilter 的 type 是默认值 'all'，则使用 searchFilter 的 type
    if (searchFilter.value.type && panelFilter.value.type === 'all') {
      filter.type = searchFilter.value.type;
    }
    
    // 处理标签合并
    if (panelFilter.value.tags && panelFilter.value.tags.length > 0) {
      filter.tags = [...panelFilter.value.tags];
    } else if (tagFilter.value) {
      filter.tags = [tagFilter.value];
    } else if (searchFilter.value.tags) {
      filter.tags = [...searchFilter.value.tags];
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
    // 统一使用前端过滤器处理所有情况
    // 后端搜索只负责文本搜索，前端负责语法过滤（type:, tag:, created:, updated:）
    const result = applyFilter(store.contents, combinedFilter.value);
    
    // 应用排序（如果有指定排序方式）
    if (combinedFilter.value.sortBy) {
      return applySorting(
        result,
        combinedFilter.value.sortBy,
        combinedFilter.value.sortOrder || 'desc'
      );
    }
    
    // 默认排序：按更新时间降序（最新的在前面）
    return applySorting(result, 'updated', 'desc');
  });

  /**
   * 查询片段列表
   * 后端现在直接返回包含 categoryId 和 categoryName 的数据
   */
  const queryFragments = async (cid?: string, search?: string): Promise<void> => {
    // 避免重复加载
    if (isLoadingFragments.value) {
      return;
    }
    
    isLoadingFragments.value = true;
    try {
      let categoryId: number | undefined;
      
      if (!cid) {
        // 没有 cid，获取所有文件
        categoryId = undefined;
      } else {
        // 使用数字 ID
        categoryId = Number(cid);
      }
      
      // 使用传入的搜索文本，如果没有则使用当前的 searchText
      const searchQuery = search !== undefined ? search : searchText.value;
      
      const result = await getFragmentList(categoryId, searchQuery);
      
      // 直接使用后端返回的数据，无需额外处理
      store.contents = result as ContentType[];
    } catch (error) {
      // Error already handled by API layer
    } finally {
      isLoadingFragments.value = false;
    }
  };

  /**
   * 防抖版本的查询函数，用于搜索文本变化时
   */
  const debouncedQueryFragments = debounce((cid: string | undefined, search: string) => {
    queryFragments(cid, search);
  }, 300);

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
      
      // 当 cid 改变时，或首次加载时（oldCid === undefined），都重新加载列表数据
      // 不区分是否在内容页：在内容页刷新时也必须加载列表，否则会显示「暂无片段内容」
      if (newCid !== oldCid || oldCid === undefined) {
        const parsedFilter = parseSearchText(searchText.value);
        const textQuery = parsedFilter.text || '';
        queryFragments(newCid as string, textQuery);
      }
    },
    { immediate: true }
  );

  // 监听搜索文本变化
  watch(searchText, (newSearchText) => {
    const cid = route.params.cid as string | undefined;
    
    // 解析搜索文本，提取纯文本部分（去除语法前缀）
    const parsedFilter = parseSearchText(newSearchText);
    const textQuery = parsedFilter.text || '';
    
    // 使用防抖版本的查询函数
    // 如果有文本搜索，传递给后端；否则传递空字符串加载所有文件
    debouncedQueryFragments(cid, textQuery);
  });

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
