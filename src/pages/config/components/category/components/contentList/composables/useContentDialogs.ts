/**
 * ContentDialogs Composable
 * 管理内容列表相关的对话框状态和操作
 */

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useConfigurationStore } from '@/store';
import { 
  addFragment, 
  deleteFragment, 
  editFragment, 
  getCategories, 
  getFragmentList, 
  getUncategorizedId 
} from '@/api/fragment';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import { ElMessage } from 'element-plus';
import { getBacklinkStats, updateBacklinks } from '@/utils/wikilink-updater';

/**
 * 为内容列表添加分类名称
 * @param contents - 内容列表
 * @param categories - 分类列表
 * @returns 添加了分类名称的内容列表
 */
function addCategoryNames(contents: ContentType[], categories: Array<{ id: number | string; name: string }>): ContentType[] {
  return contents.map(content => {
    if (content.category_id && !content.category_name) {
      const category = categories.find(cat => cat.id === content.category_id);
      if (category) {
        return {
          ...content,
          category_name: category.name
        };
      }
    }
    return content;
  });
}

/**
 * useContentDialogs 返回值接口
 */
export interface UseContentDialogsReturn {
  /** 显示类型选择器 */
  showTypeSelector: Ref<boolean>;
  /** 显示删除对话框 */
  showDeleteDialog: Ref<boolean>;
  /** 显示分类更改对话框 */
  showCategoryDialog: Ref<boolean>;
  /** 显示反向链接更新对话框 */
  showBacklinkUpdateDialog: Ref<boolean>;
  /** 删除目标 */
  deleteTarget: Ref<ContentType | null>;
  /** 更改分类目标 */
  changeCategoryTarget: Ref<ContentType | null>;
  /** 选中的分类 ID */
  selectedCategoryId: Ref<number>;
  /** 未分类 ID */
  uncategorizedId: Ref<number | null>;
  /** 反向链接统计信息 */
  backlinkStats: Ref<{ count: number; fragments: Array<{ id: number; title: string; occurrences: number }> } | null>;
  /** 处理添加内容 */
  handleAddContent: () => void;
  /** 处理类型确认 */
  handleTypeConfirm: (type: 'code' | 'note') => Promise<void>;
  /** 处理类型取消 */
  handleTypeCancel: () => void;
  /** 处理删除 */
  handleDelete: (content: ContentType) => Promise<void>;
  /** 确认删除 */
  confirmDelete: () => Promise<void>;
  /** 确认删除并更新反向链接 */
  confirmDeleteWithBacklinks: (shouldUpdate: boolean) => Promise<void>;
  /** 处理更改分类 */
  handleChangeCategory: (content: ContentType) => Promise<void>;
  /** 确认更改分类 */
  confirmCategoryChange: (selectedValue: string | number) => Promise<void>;
}

/**
 * 内容对话框管理 Composable
 * 
 * @returns UseContentDialogsReturn
 * 
 * @example
 * ```typescript
 * const {
 *   showTypeSelector,
 *   handleAddContent,
 *   handleDelete
 * } = useContentDialogs();
 * ```
 */
export function useContentDialogs(): UseContentDialogsReturn {
  const route = useRoute();
  const router = useRouter();
  const store = useConfigurationStore();
  const { t } = useI18n();

  const showTypeSelector = ref<boolean>(false);
  const showDeleteDialog = ref<boolean>(false);
  const showCategoryDialog = ref<boolean>(false);
  const showBacklinkUpdateDialog = ref<boolean>(false);
  const deleteTarget = ref<ContentType | null>(null);
  const changeCategoryTarget = ref<ContentType | null>(null);
  const selectedCategoryId = ref<number>(0);
  const uncategorizedId = ref<number | null>(null);
  const backlinkStats = ref<{ count: number; fragments: Array<{ id: number; title: string; occurrences: number }> } | null>(null);

  /**
   * 处理添加内容按钮点击
   */
  const handleAddContent = (): void => {
    showTypeSelector.value = true;
  };

  /**
   * 处理类型确认
   * @param type - 片段类型（code 或 note）
   */
  const handleTypeConfirm = async (type: 'code' | 'note'): Promise<void> => {
    showTypeSelector.value = false;
    
    const cid = route.params.cid as string;
    
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
      
      const id = await addFragment({ 
        categoryId,
        fragmentType: type
      });

      // 刷新分类列表
      store.categories = await getCategories(store.categorySort);
      
      // 刷新内容列表
      let result: ContentType[];
      if (!cid) {
        result = await getFragmentList(undefined, '') as ContentType[];
      } else if (cid === '0') {
        const uncategorizedId = await getUncategorizedId();
        result = await getFragmentList(uncategorizedId ?? undefined, '') as ContentType[];
      } else {
        result = await getFragmentList(Number(cid), '') as ContentType[];
      }
      
      // 为内容添加分类名称
      store.contents = addCategoryNames(result, store.categories);
      
      // 导航到新片段
      const targetPath = cid 
        ? `/config/category/contentList/${cid}/content/${id}`
        : `/config/category/contentList/content/${id}`;
      router.replace(targetPath);
    } catch (error) {
      // Error already handled by API layer
    }
  };

  /**
   * 处理类型取消
   */
  const handleTypeCancel = (): void => {
    showTypeSelector.value = false;
  };

  /**
   * 处理删除内容
   * @param content - 要删除的内容
   */
  const handleDelete = async (content: ContentType): Promise<void> => {
    deleteTarget.value = content;
    
    // 检查是否存在反向链接
    try {
      const stats = await getBacklinkStats(content.title);
      backlinkStats.value = stats;
      
      if (stats.count > 0) {
        // 存在反向链接，显示反向链接更新对话框
        showBacklinkUpdateDialog.value = true;
      } else {
        // 不存在反向链接，直接显示删除确认对话框
        showDeleteDialog.value = true;
      }
    } catch (error) {
      console.error('Failed to check backlinks:', error);
      // 检查失败时，直接显示删除确认对话框
      showDeleteDialog.value = true;
    }
  };

  /**
   * 确认删除内容
   */
  const confirmDelete = async (): Promise<void> => {
    if (!deleteTarget.value) return;
    
    try {
      await deleteFragment(Number(deleteTarget.value.id));
      ElMessage.success(t('contentItem.deleteSuccess'));
      
      if (route.params.id) {
        const cid = route.params.cid;
        const targetPath = cid 
          ? `/config/category/contentList/${cid}`
          : '/config/category/contentList';
        router.push(targetPath);
      } else {
        const cid = route.params.cid as string | undefined;
        let categoryId: number | undefined;
        
        if (!cid) {
          categoryId = undefined;
        } else if (cid === '0') {
          const uncategorizedId = await getUncategorizedId();
          categoryId = uncategorizedId ?? undefined;
        } else {
          categoryId = Number(cid);
        }
        
        const result = await getFragmentList(categoryId) as ContentType[];
        // 为内容添加分类名称
        store.contents = addCategoryNames(result, store.categories);
      }
      
      showDeleteDialog.value = false;
      deleteTarget.value = null;
    } catch (error) {
      ErrorHandler.handle(
        error,
        {
          type: ErrorType.API_ERROR,
          operation: 'confirmDelete',
          timestamp: new Date()
        },
        {
          userMessage: t('contentItem.deleteFailed')
        }
      );
    }
  };

  /**
   * 确认删除并处理反向链接
   * @param shouldUpdate - 是否更新反向链接（删除链接）
   */
  const confirmDeleteWithBacklinks = async (shouldUpdate: boolean): Promise<void> => {
    if (!deleteTarget.value) return;
    
    showBacklinkUpdateDialog.value = false;
    
    try {
      if (shouldUpdate && backlinkStats.value && backlinkStats.value.count > 0) {
        // 更新所有反向链接，将 [[标题]] 替换为 标题（移除链接）
        const result = await updateBacklinks(deleteTarget.value.title, deleteTarget.value.title.replace(/\[\[|\]\]/g, ''));
        
        if (result.successCount > 0) {
          ElMessage.success(t('backlinks.updateSuccess', { count: result.successCount }));
        }
        
        if (result.failureCount > 0) {
          ElMessage.warning(t('backlinks.updatePartialFailed', { 
            success: result.successCount, 
            failed: result.failureCount 
          }));
        }
      }
      
      // 执行删除
      await deleteFragment(Number(deleteTarget.value.id));
      ElMessage.success(t('contentItem.deleteSuccess'));
      
      if (route.params.id) {
        const cid = route.params.cid;
        const targetPath = cid 
          ? `/config/category/contentList/${cid}`
          : '/config/category/contentList';
        router.push(targetPath);
      } else {
        const cid = route.params.cid as string | undefined;
        let categoryId: number | undefined;
        
        if (!cid) {
          categoryId = undefined;
        } else if (cid === '0') {
          const uncategorizedId = await getUncategorizedId();
          categoryId = uncategorizedId ?? undefined;
        } else {
          categoryId = Number(cid);
        }
        
        const result = await getFragmentList(categoryId) as ContentType[];
        // 为内容添加分类名称
        store.contents = addCategoryNames(result, store.categories);
      }
      
      deleteTarget.value = null;
      backlinkStats.value = null;
    } catch (error) {
      ErrorHandler.handle(
        error,
        {
          type: ErrorType.API_ERROR,
          operation: 'confirmDeleteWithBacklinks',
          timestamp: new Date()
        },
        {
          userMessage: t('contentItem.deleteFailed')
        }
      );
    }
  };

  /**
   * 处理更改分类
   * @param content - 要更改分类的内容
   */
  const handleChangeCategory = async (content: ContentType): Promise<void> => {
    changeCategoryTarget.value = content;
    
    try {
      uncategorizedId.value = await getUncategorizedId();
      selectedCategoryId.value = content.category_id === uncategorizedId.value ? 0 : content.category_id as number;
      showCategoryDialog.value = true;
    } catch (error) {
      ErrorHandler.handle(
        error,
        {
          type: ErrorType.API_ERROR,
          operation: 'handleChangeCategory',
          timestamp: new Date()
        },
        {
          userMessage: t('contentItem.changeCategoryFailed')
        }
      );
    }
  };

  /**
   * 确认更改分类
   * @param selectedValue - 选中的分类 ID
   */
  const confirmCategoryChange = async (selectedValue: string | number): Promise<void> => {
    if (!changeCategoryTarget.value) return;
    
    try {
      const actualCategoryId = selectedValue === 0 ? uncategorizedId.value : selectedValue;
      
      if (actualCategoryId !== changeCategoryTarget.value.category_id) {
        let params = Object.assign(changeCategoryTarget.value, { category_id: actualCategoryId });
        await editFragment(params);
        
        ElMessage.success(t('contentItem.changeCategorySuccess'));
        
        const targetCid = actualCategoryId === uncategorizedId.value ? '0' : actualCategoryId;
        router.replace(`/config/category/contentList/${targetCid}`);
      }
      
      showCategoryDialog.value = false;
      changeCategoryTarget.value = null;
    } catch (error) {
      ErrorHandler.handle(
        error,
        {
          type: ErrorType.API_ERROR,
          operation: 'confirmCategoryChange',
          timestamp: new Date()
        },
        {
          userMessage: t('contentItem.changeCategoryFailed')
        }
      );
    }
  };

  return {
    showTypeSelector,
    showDeleteDialog,
    showCategoryDialog,
    showBacklinkUpdateDialog,
    deleteTarget,
    changeCategoryTarget,
    selectedCategoryId,
    uncategorizedId,
    backlinkStats,
    handleAddContent,
    handleTypeConfirm,
    handleTypeCancel,
    handleDelete,
    confirmDelete,
    confirmDeleteWithBacklinks,
    handleChangeCategory,
    confirmCategoryChange
  };
}
