import { 
  getFragmentList as getFragmentListApi,
  addFragment as addFragmentApi,
  deleteFragment as deleteFragmentApi,
  editFragment as editFragmentApi,
  getFragmentContent as getFragmentContentApi
} from '@/api/fragment';

// 获取片段列表
export function getFragmentList(
  id?: string | number,
  searchVal: string = ''
): Promise<ContentType[]> {
  return getFragmentListApi(id, searchVal);
}

// 新增片段 没有categoryId时，默认新增到未分类
export function addFragment(
  categoryId: number,
  params?: {
    fragmentType?: FragmentType;
    format?: ContentFormat;
    metadata?: FragmentMetadata;
    tags?: string[];
  }
): Promise<number> {
  return addFragmentApi({
    categoryId,
    ...params
  });
}

// 删除片段
export function deleteFragment(id: number): Promise<void> {
  return deleteFragmentApi(id);
}

// 编辑片段
export function editFragment(params: any): Promise<void> {
  return editFragmentApi(params);
}

// 获取片段内容
export async function getFragmentContent(id: number): Promise<ContentType[]> {
  const result = await getFragmentContentApi(id);
  // 转换为数组格式以保持兼容性
  return result ? [result] : [];
}
