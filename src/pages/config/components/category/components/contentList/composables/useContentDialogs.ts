/**
 * ContentDialogs Composable
 * 管理内容列表相关的对话框状态和操作
 */

import { inject, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useConfigurationStore, usePluginStore } from '@/store';
import {
  addFragment,
  deleteFragment,
  getCategories,
  getFragmentContent,
  getFragmentList,
  getFavoriteFragments,
  getUncategorizedId,
  convertFragmentType,
  moveFragmentToCategory
} from '@/api/fragment';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import modal from '@/utils/modal';
import { findBacklinks, updateBacklinks } from '@/utils/wikilink-updater';
import {
  convertFragmentContent,
  requestOpenFragmentTypeConversion,
  type FragmentType
} from '@/utils/fragmentTypeConversion';
import { requestOpenFragmentCategoryMove } from '@/utils/fragmentCategoryMove';

/**
 * 为内容列表添加分类名称
 * @param contents - 内容列表
 * @param categories - 分类列表
 * @returns 添加了分类名称的内容列表
 */
function addCategoryNames(
  contents: ContentType[],
  categories: Array<{ id: number | string; name: string }>
): ContentType[] {
  return contents.map((content) => {
    if (content.category_id && !content.category_name) {
      const category = categories.find((cat) => cat.id === content.category_id);
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
  /** 显示删除对话框 */
  showDeleteDialog: Ref<boolean>;
  /** 显示分类更改对话框 */
  showCategoryDialog: Ref<boolean>;
  /** 显示反向链接更新对话框 */
  showBacklinkUpdateDialog: Ref<boolean>;
  /** 显示类型转换确认对话框 */
  showTypeConversionDialog: Ref<boolean>;
  /** 删除目标 */
  deleteTarget: Ref<ContentType | null>;
  /** 更改分类目标 */
  changeCategoryTarget: Ref<ContentType | null>;
  /** 类型转换的目标类型 */
  typeConversionTargetType: Ref<FragmentType>;
  /** 选中的分类 ID */
  selectedCategoryId: Ref<number>;
  /** 未分类 ID */
  uncategorizedId: Ref<number | null>;
  /** 反向链接统计信息 */
  backlinkStats: Ref<{
    count: number;
    fragments: Array<{
      id: string | number;
      title: string;
      occurrences: number;
    }>;
  } | null>;
  /** 处理类型确认 */
  handleTypeConfirm: (type: 'code' | 'note') => Promise<void>;
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
  /** 直接移动到指定分类（右键对话框和拖拽共用） */
  moveContentToCategory: (
    content: ContentType,
    categoryId: string | number
  ) => Promise<void>;
  /** 处理类型转换 */
  handleConvertType: (content: ContentType, targetType: FragmentType) => void;
  /** 确认类型转换 */
  confirmTypeConversion: () => Promise<void>;
}

/**
 * 内容对话框管理 Composable
 *
 * @returns UseContentDialogsReturn
 *
 * @example
 * ```typescript
 * const { handleTypeConfirm, handleDelete } = useContentDialogs();
 * ```
 */
export function useContentDialogs(): UseContentDialogsReturn {
  const route = useRoute();
  const router = useRouter();
  const store = useConfigurationStore();
  const pluginStore = usePluginStore();
  const { t } = useI18n();

  const isCreating = ref(false);
  const sidebarMode = inject<Ref<string>>('categorySidebarMode', ref('all'));
  const captureCreation = () => ({
    cid: String(route.params.cid || ''),
    sourcePath: route.fullPath
  });
  const showDeleteDialog = ref<boolean>(false);
  const showCategoryDialog = ref<boolean>(false);
  const showBacklinkUpdateDialog = ref<boolean>(false);
  const showTypeConversionDialog = ref<boolean>(false);
  const deleteTarget = ref<ContentType | null>(null);
  const changeCategoryTarget = ref<ContentType | null>(null);
  const typeConversionTarget = ref<ContentType | null>(null);
  const typeConversionTargetType = ref<FragmentType>('note');
  const selectedCategoryId = ref<number>(0);
  const uncategorizedId = ref<number | null>(null);
  const backlinkStats = ref<{
    count: number;
    fragments: Array<{
      id: string | number;
      title: string;
      occurrences: number;
    }>;
  } | null>(null);

  /**
   * 处理类型确认
   * @param type - 片段类型（code 或 note）
   */
  const handleTypeConfirm = async (type: 'code' | 'note'): Promise<void> => {
    if (isCreating.value) return;
    const target = captureCreation();
    await handleCreateContentConfirm(type, target);
  };

  const handleCreateContentConfirm = async (
    type: 'code' | 'note',
    target: { cid: string; sourcePath: string }
  ): Promise<void> => {
    const normalizedTitle = 'New Fragment';
    const { cid } = target;
    isCreating.value = true;
    try {
      // Explicit folder targets must still exist; never silently fall back.
      if ((cid && cid !== '0') || store.categories.length === 0) {
        store.categories = await getCategories(store.categorySort);
      }

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
        const category = store.categories.find((c) => Number(c.id) === numCid);

        if (!category || !Number.isFinite(numCid) || numCid <= 0) {
          modal.error(t('fragmentType.creationFolderMissing'));
          return;
        }
        categoryId = numCid;
      }

      const filePath = await addFragment({
        categoryId,
        fragmentType: type,
        metadata: {
          title: normalizedTitle
        }
      });
      // Keep All / Uncategorized / folder context, and do not steal navigation
      // if the user has moved elsewhere while the disk write was pending.
      window.dispatchEvent(
        new CustomEvent('refresh-data', {
          detail: {
            source: 'fragment-create',
            activate: route.fullPath === target.sourcePath
          }
        })
      );
      if (route.fullPath !== target.sourcePath) return;
      const targetPath = `/config/category/contentList${cid ? `/${cid}` : ''}/content/${encodeURIComponent(filePath)}`;
      const category = store.categories.find(
        (item) => Number(item.id) === categoryId
      );
      const createdAt = new Date().toISOString();
      const optimisticContent: ContentType = {
        id: filePath,
        title: normalizedTitle,
        content: '',
        type,
        format: type === 'note' ? 'markdown' : 'plain',
        category_id: categoryId === '未分类' ? 0 : categoryId,
        category_name:
          category?.name || (categoryId === '未分类' ? '未分类' : undefined),
        tags: [],
        created_at: createdAt,
        updated_at: createdAt
      };
      store.contents = [
        optimisticContent,
        ...store.contents.filter((item) => item.id !== filePath)
      ];

      sidebarMode.value =
        cid === '0' ? 'uncategorized' : cid ? 'folders' : 'all';
      await router.replace(targetPath);

      // 文件系统列表刷新放到空闲阶段，避免它与标题首轮输入、编辑器初始化争用主线程。
      const refreshAfterCreate = async () => {
        if (route.path !== targetPath) return;
        try {
          store.categories = await getCategories(store.categorySort);
          const result = !cid
            ? ((await getFragmentList(undefined, '')) as ContentType[])
            : ((await getFragmentList(Number(cid), '')) as ContentType[]);
          if (route.path === targetPath) {
            store.contents = addCategoryNames(result, store.categories);
          }
        } catch (error) {
          console.warn(
            '[useContentDialogs] 新建后的列表刷新失败，将由文件监听器补充:',
            error
          );
        }
      };

      setTimeout(() => {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => void refreshAfterCreate(), {
            timeout: 5000
          });
        } else {
          void refreshAfterCreate();
        }
      }, 1200);
    } catch (error) {
      // Error already handled by API layer
    } finally {
      isCreating.value = false;
    }
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
        const wikilinkRegex = new RegExp(
          `\\[\\[${content.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\]\\]`,
          'gi'
        );

        const fragments = backlinks.map((fragment) => {
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

      const result = (
        route.query.view === 'favorites'
          ? await getFavoriteFragments()
          : await getFragmentList(categoryId, '')
      ) as ContentType[];
      // 为内容添加分类名称
      store.contents = addCategoryNames(result, store.categories);
      window.dispatchEvent(
        new CustomEvent('refresh-data', {
          detail: { source: 'delete-fragment' }
        })
      );

      // 如果当前正在查看被删除的片段，导航到列表页
      if (route.params.id) {
        const targetPath = cid
          ? `/config/category/contentList/${cid}`
          : '/config/category/contentList';
        router.push({ path: targetPath, query: route.query });
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
  const confirmDeleteWithBacklinks = async (
    shouldUpdate: boolean
  ): Promise<void> => {
    if (!deleteTarget.value) return;

    showBacklinkUpdateDialog.value = false;

    try {
      if (
        shouldUpdate &&
        backlinkStats.value &&
        backlinkStats.value.count > 0
      ) {
        // 更新所有反向链接，将 [[标题]] 替换为 标题（移除链接，保留文本）
        const updateResult = await updateBacklinks(
          deleteTarget.value.title,
          deleteTarget.value.title,
          false
        );

        // 执行删除 - 直接传递 ID（文件路径），不需要转换为数字
        await deleteFragment(deleteTarget.value.id);

        // 显示综合消息（右上角显示）
        if (updateResult.failureCount > 0) {
          modal.warning(
            t('backlinks.deleteWithPartialUpdate', {
              success: updateResult.successCount,
              failed: updateResult.failureCount
            }),
            'top-right'
          );
        } else {
          modal.success(
            t('backlinks.deleteWithUpdate', {
              count: updateResult.successCount
            }),
            'top-right'
          );
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

      const result = (
        route.query.view === 'favorites'
          ? await getFavoriteFragments()
          : await getFragmentList(categoryId, '')
      ) as ContentType[];
      // 为内容添加分类名称
      store.contents = addCategoryNames(result, store.categories);
      window.dispatchEvent(
        new CustomEvent('refresh-data', {
          detail: { source: 'delete-fragment' }
        })
      );

      // 如果当前正在查看被删除的片段，导航到列表页
      if (route.params.id) {
        const targetPath = cid
          ? `/config/category/contentList/${cid}`
          : '/config/category/contentList';
        router.push({ path: targetPath, query: route.query });
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
      selectedCategoryId.value =
        content.category_id === uncategorizedId.value
          ? 0
          : (content.category_id as number);
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
  const confirmCategoryChange = async (
    selectedValue: string | number
  ): Promise<void> => {
    if (!changeCategoryTarget.value) return;

    try {
      const actualCategoryId =
        Number(selectedValue) === 0 ? uncategorizedId.value : selectedValue;

      if (
        String(actualCategoryId) !==
        String(changeCategoryTarget.value.category_id)
      ) {
        await moveContentToCategory(changeCategoryTarget.value, selectedValue);

        modal.success(t('contentItem.changeCategorySuccess'));

        const targetCid =
          actualCategoryId === uncategorizedId.value ? '0' : actualCategoryId;
        router.replace({
          path: `/config/category/contentList/${targetCid}`,
          query: route.query
        });
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

  /**
   * 将片段移动到分类。移动完成后只更新列表缓存，不改写片段类型与正文元数据。
   */
  const moveContentToCategory = async (
    content: ContentType,
    categoryId: string | number
  ): Promise<void> => {
    const moved =
      (await requestOpenFragmentCategoryMove(content.id, categoryId)) ??
      (await moveFragmentToCategory(content.id, categoryId));
    const normalizedSourceId = String(content.id).replace(/\\/g, '/');
    const index = store.contents.findIndex(
      (item) => String(item.id).replace(/\\/g, '/') === normalizedSourceId
    );

    if (index !== -1) {
      store.contents[index] = {
        ...store.contents[index],
        ...moved
      };
    }
  };

  /**
   * 打开类型转换确认对话框
   */
  const handleConvertType = (
    content: ContentType,
    targetType: FragmentType
  ): void => {
    if ((content.type || 'code') === targetType) return;

    typeConversionTarget.value = content;
    typeConversionTargetType.value = targetType;
    showTypeConversionDialog.value = true;
  };

  /**
   * 确认转换类型。当前打开的内容由编辑器页面处理，以免覆盖尚未自动保存的正文；
   * 其他内容则读取磁盘中的最新版本后转换。
   */
  const confirmTypeConversion = async (): Promise<void> => {
    const target = typeConversionTarget.value;
    if (!target) return;

    const targetType = typeConversionTargetType.value;
    showTypeConversionDialog.value = false;

    try {
      let converted = await requestOpenFragmentTypeConversion(
        target.id,
        targetType
      );

      if (!converted) {
        const latest = await getFragmentContent(target.id);
        if (!latest) {
          throw new Error(`Fragment not found: ${target.id}`);
        }

        const language = latest.metadata?.language;
        const convertedContent = convertFragmentContent(
          latest.content,
          latest.type || 'code',
          targetType,
          typeof language === 'string' ? language : undefined
        );
        converted = await convertFragmentType(target.id, targetType, {
          content: convertedContent
        });
      }

      const normalizedTargetId = String(target.id).replace(/\\/g, '/');
      const index = store.contents.findIndex(
        (item) => String(item.id).replace(/\\/g, '/') === normalizedTargetId
      );

      if (index !== -1) {
        store.contents[index] = {
          ...store.contents[index],
          ...converted
        };
      }

      try {
        if (!pluginStore.initialized) {
          await pluginStore.initialize();
        }
        if (pluginStore.isEnabled('git-sync')) {
          const { notifyFileEdit } = await import('@/api/gitSync');
          await notifyFileEdit();
        }
      } catch (error) {
        console.debug('[useContentDialogs] 通知自动同步失败:', error);
      }

      modal.success(t('category.convertSuccess'));
    } catch (error) {
      ErrorHandler.handle(
        error,
        {
          type: ErrorType.API_ERROR,
          operation: 'confirmTypeConversion',
          details: { id: target.id, targetType },
          timestamp: new Date()
        },
        {
          userMessage: t('category.convertFailed')
        }
      );
    } finally {
      typeConversionTarget.value = null;
    }
  };

  return {
    showDeleteDialog,
    showCategoryDialog,
    showBacklinkUpdateDialog,
    showTypeConversionDialog,
    deleteTarget,
    changeCategoryTarget,
    typeConversionTargetType,
    selectedCategoryId,
    uncategorizedId,
    backlinkStats,
    handleTypeConfirm,
    handleDelete,
    confirmDelete,
    confirmDeleteWithBacklinks,
    handleChangeCategory,
    confirmCategoryChange,
    moveContentToCategory,
    handleConvertType,
    confirmTypeConversion
  };
}
