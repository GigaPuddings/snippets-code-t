/**
 * ContentDialogs Composable
 * 管理内容列表相关的对话框状态和操作
 */

import { ref, nextTick } from 'vue';
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
import modal from '@/utils/modal';
import { findBacklinks, updateBacklinks } from '@/utils/wikilink-updater';

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
  backlinkStats: Ref<{ count: number; fragments: Array<{ id: string | number; title: string; occurrences: number }> } | null>;
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
  const backlinkStats = ref<{ count: number; fragments: Array<{ id: string | number; title: string; occurrences: number }> } | null>(null);

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
        // 先刷新分类列表，确保使用最新的分类信息
        store.categories = await getCategories(store.categorySort);

        let categoryId: number | string | undefined;

        if (!cid) {
          // 在"所有片段"视图中创建，默认放入"未分类"
          categoryId = '未分类';
        } else if (cid === '0') {
          // 在"未分类"视图中创建
          categoryId = '未分类';
        } else {
          // 从最新的分类列表中查找对应的分类
          const numCid = Number(cid);
          const category = store.categories.find(c => c.id === numCid);

          if (category) {
            categoryId = category.id;
          } else {
            categoryId = '未分类';
          }
        }

        const filePath = await addFragment({ 
          categoryId,
          fragmentType: type
        });

        // 再次刷新分类列表（以防创建文件时创建了新分类）
        store.categories = await getCategories(store.categorySort);

        // 刷新内容列表
        let result: ContentType[];
        if (!cid) {
          result = await getFragmentList(undefined, '') as ContentType[];
        } else {
          // 将 cid 转换为数字（包括 '0' 表示"未分类"）
          result = await getFragmentList(Number(cid), '') as ContentType[];
        }

        // 为内容添加分类名称
        store.contents = addCategoryNames(result, store.categories);

        // 等待下一个 tick 确保 store 更新已经传播到所有组件
        await nextTick();

        // 导航到新片段（使用文件路径，并添加 rename=true 参数以自动聚焦标题）
        // 如果没有 cid，使用 categoryId 作为 cid（确保路由参数正确）
        const routeCid = cid || (categoryId === '未分类' ? '0' : categoryId);
        const targetPath = `/config/category/contentList/${routeCid}/content/${encodeURIComponent(filePath)}`;

        router.replace({
          path: targetPath,
          query: { rename: 'true' }
        });
      } catch (error) {
        // Error already handled by API layer
      }
    }

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
    
    // 检查是否存在反向链接（只检查 wikilink，不包括未链接提及）
    try {
      // 直接使用 findBacklinks 而不是 getBacklinkStats
      // 因为删除时我们只关心真正的 wikilink 引用
      const backlinks = await findBacklinks(content.title);
      
      if (backlinks.length > 0) {
        // 存在反向链接，构建统计信息并显示对话框
        const wikilinkRegex = new RegExp(`\\[\\[${content.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\]\\]`, 'gi');
        
        const fragments = backlinks.map(fragment => {
          const matches = (fragment.content || '').match(wikilinkRegex);
          const occurrences = matches ? matches.length : 0;
          
          return {
            id: fragment.id, // 保持原始 ID（文件路径）
            title: fragment.title,
            occurrences
          };
        });
        
        backlinkStats.value = {
          count: backlinks.length,
          fragments
        };
        
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
      // 直接传递 ID（文件路径），不需要转换为数字
      await deleteFragment(deleteTarget.value.id);
      modal.success(t('contentItem.deleteSuccess'));
      
      // 先刷新内容列表
      const cid = route.params.cid as string | undefined;
      let categoryId: number | undefined;
      
      if (!cid) {
        categoryId = undefined;
      } else {
        // 将 cid 转换为数字（包括 '0' 表示"未分类"）
        categoryId = Number(cid);
      }
      
      const result = await getFragmentList(categoryId, '') as ContentType[];
      // 为内容添加分类名称
      store.contents = addCategoryNames(result, store.categories);
      
      // 如果当前正在查看被删除的片段，导航到列表页
      if (route.params.id) {
        const targetPath = cid 
          ? `/config/category/contentList/${cid}`
          : '/config/category/contentList';
        router.push(targetPath);
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
        // 更新所有反向链接，将 [[标题]] 替换为 标题（移除链接，保留文本）
        const updateResult = await updateBacklinks(deleteTarget.value.title, deleteTarget.value.title, false);
        
        // 执行删除 - 直接传递 ID（文件路径），不需要转换为数字
        await deleteFragment(deleteTarget.value.id);
        
        // 显示综合消息（右上角显示，类似 Obsidian）
        if (updateResult.failureCount > 0) {
          modal.warning(t('backlinks.deleteWithPartialUpdate', { 
            success: updateResult.successCount, 
            failed: updateResult.failureCount 
          }), 'top-right');
        } else {
          modal.success(t('backlinks.deleteWithUpdate', { count: updateResult.successCount }), 'top-right');
        }
      } else {
        // 仅删除片段，不更新反向链接
        await deleteFragment(deleteTarget.value.id);
        modal.success(t('contentItem.deleteSuccess'));
      }
      
      // 先刷新内容列表
      const cid = route.params.cid as string | undefined;
      let categoryId: number | undefined;
      
      if (!cid) {
        categoryId = undefined;
      } else {
        // 将 cid 转换为数字（包括 '0' 表示"未分类"）
        categoryId = Number(cid);
      }
      
      const result = await getFragmentList(categoryId, '') as ContentType[];
      // 为内容添加分类名称
      store.contents = addCategoryNames(result, store.categories);
      
      // 如果当前正在查看被删除的片段，导航到列表页
      if (route.params.id) {
        const targetPath = cid 
          ? `/config/category/contentList/${cid}`
          : '/config/category/contentList';
        router.push(targetPath);
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
        
        modal.success(t('contentItem.changeCategorySuccess'));
        
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
