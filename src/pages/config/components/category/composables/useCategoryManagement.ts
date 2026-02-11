import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { getCategories, addCategory } from '@/api/fragment';

/**
 * 分类管理 Composable
 * 
 * 提供分类的 CRUD 操作、排序、数据加载等功能
 * 
 * @example
 * ```ts
 * const {
 *   categories,
 *   isLoading,
 *   loadCategories,
 *   handleSort,
 *   handleAddCategory
 * } = useCategoryManagement();
 * 
 * // 加载分类
 * await loadCategories();
 * 
 * // 添加新分类
 * await handleAddCategory();
 * ```
 */
export function useCategoryManagement() {
  const store = useConfigurationStore();
  const router = useRouter();
  const isLoading = ref(false);

  /**
   * 获取分类列表
   */
  const queryCategories = async (): Promise<CategoryType[]> => {
    const res = await getCategories(store.categorySort);
    return res;
  };

  /**
   * 加载分类数据
   */
  const loadCategories = async (): Promise<void> => {
    // 只在分类列表为空时加载
    if (store.categories.length === 0) {
      isLoading.value = true;
      try {
        // 只获取分类，片段列表由 ContentList 根据 cid 加载
        store.categories = await queryCategories();
      } finally {
        isLoading.value = false;
      }
    }
  };

  /**
   * 切换排序方式
   */
  const handleSort = async (): Promise<void> => {
    store.categorySort = store.categorySort === 'asc' ? 'desc' : 'asc';
    store.categories = await getCategories(store.categorySort);
  };

  /**
   * 添加新分类
   */
  const handleAddCategory = async (): Promise<void> => {
    const category_id = await addCategory();
    store.categories = await queryCategories();
    store.editCategoryId = category_id.toString();
    router.replace(`/config/category/contentList/${category_id}`);
  };

  return {
    // 状态
    categories: computed(() => store.categories),
    isLoading,
    categorySort: computed(() => store.categorySort),
    
    // 方法
    loadCategories,
    handleSort,
    handleAddCategory,
    queryCategories
  };
}
