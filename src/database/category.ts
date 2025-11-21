import { getCategories as getCategoriesApi, editCategory as editCategoryApi, addCategory as addCategoryApi, deleteCategory as deleteCategoryApi } from '@/api/fragment';

// 获取所有分类
export function getCategories(
  fileSort: 'asc' | 'desc'
): Promise<CategoryType[]> {
  return getCategoriesApi(fileSort);
}

// 修改分类
export function editCategory(id: number | string, name: string): Promise<void> {
  return editCategoryApi(id, name);
}

// 新增分类
export function addCategory(): Promise<number> {
  return addCategoryApi();
}

// 删除分类
export function deleteCategory(id: number | string): Promise<void> {
  return deleteCategoryApi(id);
}
