import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useConfigurationStore } from '@/store';
import { getCategories } from '@/api/fragment';
import { setCategoryOrder } from '@/api/markdown';
import { useI18n } from 'vue-i18n';
import modal from '@/utils/modal';

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
  const { t } = useI18n();
  const savingOrder = ref(false);
  const categories = computed(() =>
    store.categories
      .filter((item) => !item.isSystem)
      .sort((a, b) => {
        // Fresh folders share rank -1. Stable IDs put the newest of these first.
        if (a.order === -1 && b.order === -1)
          return Math.abs(Number(b.id)) - Math.abs(Number(a.id));
        return (
          (a.order ?? Number.MAX_SAFE_INTEGER) -
          (b.order ?? Number.MAX_SAFE_INTEGER)
        );
      })
  );

  /**
   * 获取分类列表
   */
  const queryCategories = async (): Promise<CategoryType[]> => {
    const res = await getCategories(store.categorySort);
    return res;
  };

  /**
   * 加载分类数据
   * @param force - 是否强制重新加载（用于数据刷新场景）
   */
  const loadCategories = async (force = false): Promise<void> => {
    // 只在分类列表为空时加载，或者强制刷新时重新加载
    if (store.categories.length === 0 || force) {
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
  const saveOrder = async (ordered: CategoryType[]): Promise<boolean> => {
    const root = ordered[0]?.workspaceRoot;
    if (
      savingOrder.value ||
      !root ||
      ordered.some((item) => item.workspaceRoot !== root)
    )
      return false;
    savingOrder.value = true;
    try {
      await setCategoryOrder(
        root,
        ordered.map((item) => item.name)
      );
      await loadCategories(true);
      return true;
    } catch (error) {
      console.error('Failed to save folder order', error);
      modal.error(t('category.orderFailed'));
      return false;
    } finally {
      savingOrder.value = false;
    }
  };

  const handleSort = async (): Promise<void> => {
    const direction = store.categorySort === 'asc' ? 'desc' : 'asc';
    const ordered = [...categories.value].sort((a, b) =>
      direction === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    if (await saveOrder(ordered)) store.categorySort = direction;
  };

  const swapFolders = (sourceId: string, targetId: string): void => {
    const ordered = [...categories.value];
    const from = ordered.findIndex((item) => String(item.id) === sourceId);
    const to = ordered.findIndex((item) => String(item.id) === targetId);
    if (from < 0 || to < 0 || from === to) return;
    [ordered[from], ordered[to]] = [ordered[to], ordered[from]];
    void saveOrder(ordered);
  };

  /**
   * 添加新分类（延迟创建）
   *
   * 工作流程：
   * 1. 创建临时分类项（ID 为负数，表示未保存）
   * 2. 显示输入框让用户编辑
   * 3. 用户确认后才调用后端创建文件夹
   * 4. 用户取消则删除临时分类项
   */
  const handleAddCategory = async (): Promise<void> => {
    // 生成临时 ID（使用负数表示未保存）
    const tempId = -Date.now();

    // 创建临时分类项
    const tempCategory: CategoryType = {
      id: tempId,
      name: 'New Category',
      created_at: new Date().toISOString(),
      isSystem: false,
      order: -1
    };

    // 添加到分类列表
    store.categories.unshift(tempCategory);

    // 设置为编辑状态
    store.editCategoryId = tempId.toString();

    // 导航到该分类（使用临时 ID）
    const targetPath = `/config/category/contentList/${tempId}`;
    router.replace(targetPath);
  };

  return {
    // 状态
    // 过滤掉系统分类（如"未分类"），只显示用户创建的分类
    categories,
    savingOrder,
    swapFolders,
    isLoading,
    categorySort: computed(() => store.categorySort),

    // 方法
    loadCategories,
    handleSort,
    handleAddCategory,
    queryCategories
  };
}
