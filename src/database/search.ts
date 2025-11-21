import { searchFragmentContent } from '@/api/fragment';

// 检索内容
export function searchContent(keyword: string): Promise<ContentType[]> {
  return searchFragmentContent(keyword);
}
