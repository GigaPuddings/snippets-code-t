import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import type { Category, FragmentMetadata } from '@/types/database';
import type { ContentType, MarkdownFile } from '@/types/models';
import * as markdownApi from './markdown';
import { logger } from '@/utils/logger';

/**
 * 片段类型
 */
type FragmentType = 'code' | 'note';

/**
 * 内容格式
 */
type ContentFormat = 'plain' | 'markdown' | 'html';

// ============= 格式转换辅助函数 =============

/**
 * 将 MarkdownFile 转换为 ContentType
 * 后端现在直接提供 categoryId 和 categoryName，无需前端计算
 */
function markdownFileToContentType(file: MarkdownFile): ContentType {
  const filePath = file.filePath || file.id || '';
  
  return {
    id: filePath,
    title: file.title,
    content: file.content,
    type: file.type as 'code' | 'note', // 后端返回的类型已经是 'code' 或 'note'
    format: 'markdown',
    category_id: file.categoryId || 0,
    category_name: file.categoryName || '未分类',
    tags: Array.isArray(file.tags) && file.tags.length > 0 ? file.tags : null,
    metadata: file.language ? { language: file.language } : null,
    created_at: file.created,
    updated_at: file.modified,
    usage_count: 0,
  };
}

// ============= 分类相关 API =============

/**
 * 获取所有分类
 * 后端现在直接返回 Category 对象数组，无需前端转换
 */
export async function getCategories(sort: 'asc' | 'desc' = 'desc'): Promise<Category[]> {
  try {
    const categories = await markdownApi.getCategories();
    
    // 排序
    if (sort === 'asc') {
      categories.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      categories.sort((a, b) => b.name.localeCompare(a.name));
    }
    
    return categories;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'getCategories',
      details: { sort },
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 获取"未分类"分类的 ID
 * @returns 未分类的分类 ID，如果不存在则返回 null
 */
export async function getUncategorizedId(): Promise<number | null> {
  try {
    const categories = await getCategories();
    const uncategorized = categories.find(c => c.name === '未分类');
    return uncategorized ? uncategorized.id : null;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'getUncategorizedId',
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 添加分类
 * @param name - 分类名称
 * @returns 新分类的 ID
 * 
 * @example
 * ```typescript
 * const categoryId = await addCategory('JavaScript');
 * ```
 */
export async function addCategory(name?: string): Promise<number> {
  try {
    const categoryName = name || 'New Category';
    
    await markdownApi.createCategory(categoryName);
    
    // 获取所有分类并找到新创建的分类的索引
    const categories = await getCategories();
    
    const newCategory = categories.find(c => c.name === categoryName);
    const categoryId = newCategory ? newCategory.id : categories.length;
    
    return categoryId;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'addCategory',
      details: { name },
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 编辑分类
 * @param id - 分类 ID
 * @param name - 新的分类名称
 * 
 * @example
 * ```typescript
 * await editCategory(1, 'TypeScript');
 * ```
 */
export async function editCategory(id: number | string, name: string): Promise<void> {
  try {
    // 获取所有分类，找到对应 ID 的分类名称
    const categories = await getCategories();
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    const oldCategory = categories.find(c => c.id === numId);
    
    if (!oldCategory) {
      throw new Error(`Category with id ${id} not found`);
    }
    
    // 重命名分类文件夹
    await markdownApi.renameCategory(oldCategory.name, name);
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'editCategory',
      details: { id, name },
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 删除分类（同时删除该分类下的所有片段）
 * @param id - 分类 ID
 * 
 * @example
 * ```typescript
 * await deleteCategory(1);
 * ```
 */
export async function deleteCategory(id: number | string): Promise<void> {
  try {
    // 获取所有分类，找到对应 ID 的分类名称
    const categories = await getCategories();
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    const category = categories.find(c => c.id === numId);
    
    if (!category) {
      throw new Error(`Category with id ${id} not found`);
    }
    
    // 获取该分类下的所有文件
    const files = await markdownApi.getFilesByCategory(numId);
    
    // 清理所有文件的附件，统计实际清理的数量
    let cleanedCount = 0;
    for (const file of files) {
      try {
        const hasAttachments = await markdownApi.cleanupAttachmentsOnDelete(file.title);
        if (hasAttachments) {
          cleanedCount++;
        }
      } catch (error) {
        console.error(`清理附件失败 (${file.title}):`, error);
        // 继续清理其他文件
      }
    }
    
    // 删除分类文件夹
    await markdownApi.deleteCategory(category.name);
    
    // 只有在实际清理了附件时才显示通知
    if (cleanedCount > 0) {
      const modalModule = await import('@/utils/modal');
      const i18nModule = await import('@/i18n');
      modalModule.default.success(
        i18nModule.default.global.t('settings.attachment.categoryCleanupSuccessMessage', { count: cleanedCount }),
        'top-right'
      );
    }
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'deleteCategory',
      details: { id },
      timestamp: new Date()
    });
    throw error;
  }
}

// ============= 片段相关 API =============

/**
 * 获取片段列表
 * 后端现在直接返回包含 categoryId 和 categoryName 的数据，无需前端转换
 */
export async function getFragmentList(
  categoryId?: string | number,
  searchVal = ''
): Promise<ContentType[]> {
  try {
    logger.info('[getFragmentList] 开始查询, categoryId:', categoryId, 'searchVal:', searchVal);
    
    let files: MarkdownFile[] = [];
    
    // 解析搜索文本，提取过滤条件
    const { parseSearchText } = await import('@/utils/searchParser');
    const searchFilter = parseSearchText(searchVal);
    const textQuery = searchFilter.text || '';
    
    logger.info('[getFragmentList] 解析后的过滤条件:', searchFilter);
    logger.info('[getFragmentList] 纯文本查询:', textQuery);
    
    if (textQuery) {
      // 如果有搜索关键词，使用搜索 API
      files = await markdownApi.searchMarkdownFiles(textQuery);
      logger.info('[getFragmentList] 搜索结果:', files.length, '个文件');
      
      // 如果指定了分类，过滤结果
      if (categoryId !== undefined && categoryId !== null) {
        const numId = typeof categoryId === 'string' ? parseInt(categoryId, 10) : categoryId;
        files = files.filter(file => file.categoryId === numId);
        logger.info('[getFragmentList] 分类过滤后:', files.length, '个文件');
      }
    } else if (categoryId !== undefined && categoryId !== null) {
      // 如果指定了分类但没有搜索关键词，获取该分类下的所有文件
      const numId = typeof categoryId === 'string' ? parseInt(categoryId, 10) : categoryId;
      files = await markdownApi.getFilesByCategory(numId);
      logger.info('[getFragmentList] 分类文件:', files.length, '个文件');
    } else {
      // 获取所有文件
      files = await markdownApi.getAllFiles();
      logger.info('[getFragmentList] 所有文件:', files.length, '个文件');
    }
    
    // 应用 type 过滤器
    if (searchFilter.type) {
      logger.info('[getFragmentList] 应用 type 过滤器:', searchFilter.type);
      logger.info('[getFragmentList] 过滤前文件类型:', files.map(f => f.type));
      files = files.filter(file => file.type === searchFilter.type);
      logger.info('[getFragmentList] type 过滤后:', files.length, '个文件');
    }
    
    logger.info('[getFragmentList] 最终返回:', files.length, '个文件');
    
    // 转换为 ContentType
    return files.map(file => markdownFileToContentType(file));
  } catch (error) {
    logger.error('[getFragmentList] 查询失败:', error);
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'getFragmentList',
      details: { categoryId, searchVal },
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 添加片段参数接口
 */
export interface AddFragmentParams {
  /** 分类 ID（可以是数字 ID 或字符串 "未分类"） */
  categoryId?: number | string;
  /** 片段类型 */
  fragmentType?: FragmentType;
  /** 内容格式 */
  format?: ContentFormat;
  /** 元数据 */
  metadata?: FragmentMetadata;
  /** 标签列表 */
  tags?: string[];
}

/**
 * 添加片段
 * @param params - 片段参数
 * @returns 新片段的文件路径
 * 
 * @example
 * ```typescript
 * const filePath = await addFragment({
 *   categoryId: 1,
 *   fragmentType: 'code',
 *   format: 'plain',
 *   tags: ['javascript', 'react']
 * });
 * ```
 */
export async function addFragment(params?: AddFragmentParams): Promise<string> {
  try {
    // 确定分类名称
    let categoryName: string | null = null;
    if (params?.categoryId !== undefined && params.categoryId !== null) {
      if (typeof params.categoryId === 'string') {
        // 直接使用字符串分类名（如 "未分类"）
        categoryName = params.categoryId;
      } else {
        // 根据数字 ID 查找分类名
        const categories = await getCategories();
        const category = categories.find(c => c.id === params.categoryId);
        if (category) {
          categoryName = category.name;
        }
      }
    }
    
    // 构建元数据
    const metadata: Partial<MarkdownFile> = {
      title: 'New Fragment',
      content: '',
      type: params?.fragmentType === 'note' ? 'note' : 'code', // 使用 'code' 而不是 'snippet'
      tags: params?.tags || [],
      language: params?.metadata?.language as string | undefined,
      favorite: false,
    };
    
    // 创建文件
    const filePath = await markdownApi.createMarkdownFile(categoryName, metadata);
    
    return filePath;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'addFragment',
      details: params,
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 检查 ID 是否为文件路径
 * @param id - ID（可能是数字或文件路径）
 * @returns 是否为文件路径
 */
function isFilePath(id: number | string): boolean {
  if (typeof id === 'number') return false;
  return id.includes('/') || id.includes('\\') || id.endsWith('.md');
}

/**
 * 删除片段
 * @param id - 片段 ID（文件路径或数字 ID）
 * 
 * @example
 * ```typescript
 * await deleteFragment(1);
 * ```
 */
export async function deleteFragment(id: number | string): Promise<void> {
  try {
    // 如果 ID 看起来像文件路径，直接使用
    if (isFilePath(id)) {
      const filePath = String(id);
      
      // 读取文件以获取标题（用于清理附件）
      try {
        const file = await markdownApi.readMarkdownFile(filePath);
        
        // 删除文件
        await markdownApi.deleteMarkdownFile(filePath);
        
        // 清理附件并显示通知
        try {
          const hasAttachments = await markdownApi.cleanupAttachmentsOnDelete(file.title);
          
          // 只有在实际删除了附件时才显示通知
          if (hasAttachments) {
            const modalModule = await import('@/utils/modal');
            const i18nModule = await import('@/i18n');
            modalModule.default.success(i18nModule.default.global.t('settings.attachment.cleanupSuccessMessage'), 'top-right');
          }
        } catch (cleanupError) {
          console.error('清理附件失败:', cleanupError);
          // 不阻止删除操作，只记录错误
        }
      } catch (error) {
        // 如果读取文件失败，仍然尝试删除文件
        await markdownApi.deleteMarkdownFile(filePath);
      }
    } else {
      // 否则，这可能是旧的数字 ID 或者是从 route.params 转换来的
      // 在新系统中，我们不应该收到纯数字 ID
      // 但为了向后兼容，我们尝试将其作为字符串处理
      throw new Error(`Invalid fragment ID: ${id}. Expected a file path.`);
    }
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'deleteFragment',
      details: { id },
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 编辑片段参数接口
 */
export interface EditFragmentParams {
  /** 片段 ID */
  id: number | string;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 分类 ID */
  category_id: number | string | null;
  /** 片段类型 */
  fragmentType?: FragmentType;
  /** 内容格式 */
  format?: ContentFormat;
  /** 元数据 */
  metadata?: FragmentMetadata | null;
  /** 标签列表 */
  tags?: string[] | null;
}

/**
 * 编辑片段
 * @param params - 片段参数
 * @returns 如果文件被重命名，返回新的文件路径；否则返回 null
 * 
 * @example
 * ```typescript
 * const newPath = await editFragment({
 *   id: 1,
 *   title: 'React Hook',
 *   content: 'const [state, setState] = useState()',
 *   category_id: 1,
 *   fragmentType: 'code',
 *   format: 'plain',
 *   tags: ['react', 'hooks']
 * });
 * if (newPath) {
 *   // 文件被重命名，需要更新路由
 * }
 * ```
 */
export async function editFragment(params: EditFragmentParams): Promise<string | null> {
  try {
    // ID 应该是文件路径
    const filePath = typeof params.id === 'string' ? params.id : String(params.id);
    
    // 读取当前文件以获取旧标题
    const currentFile = await markdownApi.readMarkdownFile(filePath);
    const oldTitle = currentFile.title;
    const titleChanged = params.title && params.title !== oldTitle;
    
    // 如果传递了分类 ID（包括 null 表示未分类），先移动文件
    let currentFilePath = filePath;
    if (params.category_id !== undefined) {
      // 获取所有分类
      const categories = await markdownApi.getCategories();
      
      // 处理 null 或 0 表示"未分类"
      const targetCategoryId = params.category_id === null ? 0 : params.category_id;
      const targetCategory = categories.find(c => c.id === targetCategoryId);
      
      if (targetCategory) {
        const targetCategoryName = targetCategory.name === '未分类' ? '' : targetCategory.name;
        
        // 移动文件到新分类
        const newPath = await markdownApi.moveMarkdownFile(
          filePath,
          targetCategoryName
        );
        currentFilePath = newPath;
      }
    }
    
    // 如果标题变更，同步附件
    let updatedContent = params.content;
    if (titleChanged) {
      updatedContent = await markdownApi.syncAttachmentsOnRename(
        oldTitle,
        params.title,
        params.content
      );
    }
    
    // 构建元数据更新
    const metadata: Partial<MarkdownFile> = {
      title: params.title,
      tags: params.tags || [],
      language: params.metadata?.language as string | undefined,
    };
    
    // 只有在明确传递了 fragmentType 时才更新类型
    if (params.fragmentType !== undefined) {
      metadata.type = params.fragmentType === 'note' ? 'note' : 'code';
    }
    
    // 更新文件内容和元数据（可能返回新路径）
    const newPath = await markdownApi.updateMarkdownFile(currentFilePath, updatedContent, metadata);
    
    return newPath;
  } catch (error) {
    // 不在此处处理，交由调用方（如 saveContent、useContentDialogs）统一展示，避免重复弹窗
    throw error;
  }
}

/**
 * 获取单个片段内容
 * @param id - 片段 ID（文件路径或数字 ID）
 * @returns 片段内容，如果不存在则返回 null
 * 
 * @example
 * ```typescript
 * const fragment = await getFragmentContent(1);
 * ```
 */
export async function getFragmentContent(id: number | string): Promise<ContentType | null> {
  try {
    // 处理 NaN 的情况（当组件调用 Number(filePath) 时）
    if (typeof id === 'number' && isNaN(id)) {
      return null;
    }
    
    // 如果 ID 看起来像文件路径，直接使用
    if (isFilePath(id)) {
      const file = await markdownApi.readMarkdownFile(String(id));
      return markdownFileToContentType(file);
    } else {
      // 否则，这可能是旧的数字 ID
      // 在新系统中，route.params.id 应该已经是文件路径
      return null;
    }
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'getFragmentContent',
      details: { id },
      timestamp: new Date()
    });
    return null;
  }
}

/**
 * 搜索片段内容
 * @param keyword - 搜索关键词
 * @returns 匹配的片段列表
 * 
 * @example
 * ```typescript
 * const results = await searchFragmentContent('react hooks');
 * ```
 */
export async function searchFragmentContent(keyword: string): Promise<ContentType[]> {
  try {
    const files = await markdownApi.searchMarkdownFiles(keyword);
    return files.map(file => markdownFileToContentType(file));
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'searchFragmentContent',
      details: { keyword },
      timestamp: new Date()
    });
    throw error;
  }
}
