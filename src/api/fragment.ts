import { invoke } from '@tauri-apps/api/core';

// ============= 分类相关 API =============

/**
 * 获取所有分类
 * @param sort 排序方式 'asc' | 'desc'
 */
export async function getCategories(sort: 'asc' | 'desc' = 'desc'): Promise<CategoryType[]> {
  return invoke('get_categories', { sort });
}

/**
 * 添加分类
 * @param name 分类名称
 * @returns 新分类的ID
 */
export async function addCategory(name?: string): Promise<number> {
  return invoke('add_category', { name });
}

/**
 * 编辑分类
 * @param id 分类ID
 * @param name 新的分类名称
 */
export async function editCategory(id: number | string, name: string): Promise<void> {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id;
  return invoke('edit_category', { id: numId, name });
}

/**
 * 删除分类（同时删除该分类下的所有片段）
 * @param id 分类ID
 */
export async function deleteCategory(id: number | string): Promise<void> {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id;
  return invoke('delete_category', { id: numId });
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
  const numCategoryId = categoryId !== undefined 
    ? (typeof categoryId === 'string' ? parseInt(categoryId, 10) : categoryId)
    : null;
  
  return invoke('get_fragment_list', { 
    categoryId: numCategoryId,
    searchVal: searchVal || null
  });
}

/**
 * 添加片段
 * @param categoryId 分类ID
 * @returns 新片段的ID
 */
export async function addFragment(categoryId?: number): Promise<number> {
  return invoke('add_fragment', { categoryId: categoryId ?? null });
}

/**
 * 删除片段
 * @param id 片段ID
 */
export async function deleteFragment(id: number): Promise<void> {
  return invoke('delete_fragment', { id });
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
}): Promise<void> {
  const numId = typeof params.id === 'string' ? parseInt(params.id, 10) : params.id;
  const numCategoryId = typeof params.category_id === 'string' ? parseInt(params.category_id, 10) : params.category_id;
  
  return invoke('edit_fragment', {
    id: numId,
    title: params.title,
    content: params.content,
    categoryId: numCategoryId
  });
}

/**
 * 获取单个片段内容
 * @param id 片段ID
 */
export async function getFragmentContent(id: number): Promise<ContentType | null> {
  const result = await invoke<ContentType | null>('get_fragment_content', { id });
  return result;
}

/**
 * 搜索片段内容
 * @param keyword 搜索关键词
 * @returns 匹配的片段列表
 */
export async function searchFragmentContent(keyword: string): Promise<ContentType[]> {
  return invoke('search_fragment_content', { keyword });
}
