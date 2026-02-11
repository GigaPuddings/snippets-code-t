import { invoke } from '@tauri-apps/api/core';
import { parseFragment } from '@/utils/fragment';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import { isCategory, isContentType } from '@/utils/type-guards';
import type { Category, FragmentMetadata } from '@/types/database';
import type { ContentType } from '@/types/models';

/**
 * 片段类型
 */
type FragmentType = 'code' | 'note';

/**
 * 内容格式
 */
type ContentFormat = 'plain' | 'markdown' | 'html';

// ============= 分类相关 API =============

/**
 * 获取所有分类
 * @param sort - 排序方式
 * @returns 分类列表
 * 
 * @example
 * ```typescript
 * const categories = await getCategories('desc');
 * ```
 */
export async function getCategories(sort: 'asc' | 'desc' = 'desc'): Promise<Category[]> {
  try {
    const result = await invoke<unknown[]>('get_categories', { sort });
    if (!Array.isArray(result)) {
      throw new Error('Invalid response: expected array');
    }
    return result.filter(isCategory);
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
    const result = await invoke<number | null>('get_uncategorized_id');
    return result;
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
    const result = await invoke<number>('add_category', { name });
    if (typeof result !== 'number') {
      throw new Error('Invalid response: expected number');
    }
    return result;
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
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    await invoke('edit_category', { id: numId, name });
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
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    await invoke('delete_category', { id: numId });
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
 * @param categoryId - 分类 ID（可选）
 * @param searchVal - 搜索关键词（可选）
 * @returns 片段列表
 * 
 * @example
 * ```typescript
 * const fragments = await getFragmentList(1, 'react');
 * ```
 */
export async function getFragmentList(
  categoryId?: string | number,
  searchVal = ''
): Promise<ContentType[]> {
  try {
    const numCategoryId = categoryId !== undefined 
      ? (typeof categoryId === 'string' ? parseInt(categoryId, 10) : categoryId)
      : null;
    
    const fragments = await invoke<unknown[]>('get_fragment_list', { 
      categoryId: numCategoryId,
      searchVal: searchVal || null
    });
    
    if (!Array.isArray(fragments)) {
      throw new Error('Invalid response: expected array');
    }
    
    // Parse each fragment to ensure all fields are present with defaults
    return fragments.map(parseFragment).filter(isContentType);
  } catch (error) {
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
  /** 分类 ID */
  categoryId?: number;
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
 * @returns 新片段的 ID
 * 
 * @example
 * ```typescript
 * const fragmentId = await addFragment({
 *   categoryId: 1,
 *   fragmentType: 'code',
 *   format: 'plain',
 *   tags: ['javascript', 'react']
 * });
 * ```
 */
export async function addFragment(params?: AddFragmentParams): Promise<number> {
  try {
    // Serialize metadata to JSON string if provided
    const metadataStr = params?.metadata ? JSON.stringify(params.metadata) : null;
    
    // Serialize tags to comma-separated string if provided
    const tagsStr = params?.tags ? params.tags.join(',') : null;
    
    const invokeParams = {
      categoryId: params?.categoryId ?? null,
      fragmentType: params?.fragmentType ?? null,
      format: params?.format ?? null,
      metadata: metadataStr,
      tags: tagsStr,
    };
    
    const result = await invoke<number>('add_fragment', invokeParams);
    if (typeof result !== 'number') {
      throw new Error('Invalid response: expected number');
    }
    return result;
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
 * 删除片段
 * @param id - 片段 ID
 * 
 * @example
 * ```typescript
 * await deleteFragment(1);
 * ```
 */
export async function deleteFragment(id: number): Promise<void> {
  try {
    await invoke('delete_fragment', { id });
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
 * 
 * @example
 * ```typescript
 * await editFragment({
 *   id: 1,
 *   title: 'React Hook',
 *   content: 'const [state, setState] = useState()',
 *   category_id: 1,
 *   fragmentType: 'code',
 *   format: 'plain',
 *   tags: ['react', 'hooks']
 * });
 * ```
 */
export async function editFragment(params: EditFragmentParams): Promise<void> {
  try {
    const numId = typeof params.id === 'string' ? parseInt(params.id, 10) : params.id;
    const numCategoryId = params.category_id !== null && params.category_id !== undefined
      ? (typeof params.category_id === 'string' ? parseInt(params.category_id, 10) : params.category_id)
      : null;
    
    // Serialize metadata to JSON string if provided
    const metadataStr = params.metadata ? JSON.stringify(params.metadata) : null;
    
    // Serialize tags to comma-separated string if provided
    const tagsStr = params.tags ? params.tags.join(',') : null;
    
    // Backend expects a single 'params' object with snake_case field names matching EditFragmentParams struct
    const backendParams = {
      id: numId,
      title: params.title,
      content: params.content,
      category_id: numCategoryId,  // snake_case to match Rust struct
      fragment_type: params.fragmentType ?? null,  // snake_case to match Rust struct
      format: params.format ?? null,
      metadata: metadataStr,
      tags: tagsStr,
    };
    
    await invoke('edit_fragment', { params: backendParams });
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'editFragment',
      details: params,
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 获取单个片段内容
 * @param id - 片段 ID
 * @returns 片段内容，如果不存在则返回 null
 * 
 * @example
 * ```typescript
 * const fragment = await getFragmentContent(1);
 * ```
 */
export async function getFragmentContent(id: number): Promise<ContentType | null> {
  try {
    const result = await invoke<unknown | null>('get_fragment_content', { id });
    
    // Parse fragment to ensure all fields are present with defaults
    return result ? parseFragment(result) : null;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.API_ERROR,
      operation: 'getFragmentContent',
      details: { id },
      timestamp: new Date()
    });
    throw error;
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
    const fragments = await invoke<unknown[]>('search_fragment_content', { keyword });
    
    if (!Array.isArray(fragments)) {
      throw new Error('Invalid response: expected array');
    }
    
    // Parse each fragment to ensure all fields are present with defaults
    return fragments.map(parseFragment).filter(isContentType);
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
