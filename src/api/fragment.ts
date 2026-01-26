import { invoke } from '@tauri-apps/api/core';
import { parseFragment } from '@/utils/fragment';
import { handleApiError } from '@/utils/errorHandler';

// ============= 分类相关 API =============

/**
 * 获取所有分类
 * @param sort 排序方式 'asc' | 'desc'
 */
export async function getCategories(sort: 'asc' | 'desc' = 'desc'): Promise<CategoryType[]> {
  try {
    return await invoke('get_categories', { sort });
  } catch (error) {
    handleApiError(error, 'getCategories');
    throw error;
  }
}

/**
 * 添加分类
 * @param name 分类名称
 * @returns 新分类的ID
 */
export async function addCategory(name?: string): Promise<number> {
  try {
    return await invoke('add_category', { name });
  } catch (error) {
    handleApiError(error, 'addCategory');
    throw error;
  }
}

/**
 * 编辑分类
 * @param id 分类ID
 * @param name 新的分类名称
 */
export async function editCategory(id: number | string, name: string): Promise<void> {
  try {
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    return await invoke('edit_category', { id: numId, name });
  } catch (error) {
    handleApiError(error, 'editCategory');
    throw error;
  }
}

/**
 * 删除分类（同时删除该分类下的所有片段）
 * @param id 分类ID
 */
export async function deleteCategory(id: number | string): Promise<void> {
  try {
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    return await invoke('delete_category', { id: numId });
  } catch (error) {
    handleApiError(error, 'deleteCategory');
    throw error;
  }
}

// ============= 片段相关 API =============

/**
 * 获取片段列表
 * @param categoryId 分类ID（可选）
 * @param searchVal 搜索关键词（可选）
 */
export async function getFragmentList(
  categoryId?: string | number,
  searchVal: string = ''
): Promise<ContentType[]> {
  try {
    const numCategoryId = categoryId !== undefined 
      ? (typeof categoryId === 'string' ? parseInt(categoryId, 10) : categoryId)
      : null;
    
    const fragments = await invoke<any[]>('get_fragment_list', { 
      categoryId: numCategoryId,
      searchVal: searchVal || null
    });
    
    // Parse each fragment to ensure all fields are present with defaults
    return fragments.map(parseFragment);
  } catch (error) {
    handleApiError(error, 'getFragmentList');
    throw error;
  }
}

/**
 * 添加片段
 * @param params 片段参数
 * @returns 新片段的ID
 */
export async function addFragment(params?: {
  categoryId?: number;
  fragmentType?: FragmentType;
  format?: ContentFormat;
  metadata?: FragmentMetadata;
  tags?: string[];
}): Promise<number> {
  try {
    // Serialize metadata to JSON string if provided
    const metadataStr = params?.metadata ? JSON.stringify(params.metadata) : null;
    
    // Serialize tags to comma-separated string if provided
    const tagsStr = params?.tags ? params.tags.join(',') : null;
    
    return await invoke('add_fragment', {
      categoryId: params?.categoryId ?? null,
      fragmentType: params?.fragmentType ?? null,
      format: params?.format ?? null,
      metadata: metadataStr,
      tags: tagsStr,
    });
  } catch (error) {
    handleApiError(error, 'addFragment');
    throw error;
  }
}

/**
 * 删除片段
 * @param id 片段ID
 */
export async function deleteFragment(id: number): Promise<void> {
  try {
    return await invoke('delete_fragment', { id });
  } catch (error) {
    handleApiError(error, 'deleteFragment');
    throw error;
  }
}

/**
 * 编辑片段
 * @param params 片段参数
 */
export async function editFragment(params: {
  id: number | string;
  title: string;
  content: string;
  category_id: number | string;
  fragmentType?: FragmentType;
  format?: ContentFormat;
  metadata?: FragmentMetadata | null;
  tags?: string[] | null;
}): Promise<void> {
  try {
    const numId = typeof params.id === 'string' ? parseInt(params.id, 10) : params.id;
    const numCategoryId = typeof params.category_id === 'string' ? parseInt(params.category_id, 10) : params.category_id;
    
    // Serialize metadata to JSON string if provided
    const metadataStr = params.metadata ? JSON.stringify(params.metadata) : null;
    
    // Serialize tags to comma-separated string if provided
    const tagsStr = params.tags ? params.tags.join(',') : null;
    
    return await invoke('edit_fragment', {
      id: numId,
      title: params.title,
      content: params.content,
      categoryId: numCategoryId,
      fragmentType: params.fragmentType ?? null,
      format: params.format ?? null,
      metadata: metadataStr,
      tags: tagsStr,
    });
  } catch (error) {
    handleApiError(error, 'editFragment');
    throw error;
  }
}

/**
 * 获取单个片段内容
 * @param id 片段ID
 */
export async function getFragmentContent(id: number): Promise<ContentType | null> {
  try {
    const result = await invoke<any | null>('get_fragment_content', { id });
    
    // Parse fragment to ensure all fields are present with defaults
    return result ? parseFragment(result) : null;
  } catch (error) {
    handleApiError(error, 'getFragmentContent');
    throw error;
  }
}

/**
 * 搜索片段内容
 * @param keyword 搜索关键词
 * @returns 匹配的片段列表
 */
export async function searchFragmentContent(keyword: string): Promise<ContentType[]> {
  try {
    const fragments = await invoke<any[]>('search_fragment_content', { keyword });
    
    // Parse each fragment to ensure all fields are present with defaults
    return fragments.map(parseFragment);
  } catch (error) {
    handleApiError(error, 'searchFragmentContent');
    throw error;
  }
}
