import type { ContentType } from '@/types/models';

export const FRAGMENT_CATEGORY_MOVE_REQUEST_EVENT =
  'fragment-category-move-request';

export interface FragmentCategoryMoveRequestDetail {
  id: string | number;
  categoryId: string | number;
  handled: boolean;
  resolve: (content: ContentType | null) => void;
  reject: (error: unknown) => void;
}

/**
 * 请求当前打开的内容页先保存编辑器草稿，再移动文件。
 * 目标未在编辑器中打开时返回 null，由调用方直接移动磁盘文件。
 */
export function requestOpenFragmentCategoryMove(
  id: string | number,
  categoryId: string | number
): Promise<ContentType | null> {
  return new Promise((resolve, reject) => {
    const detail: FragmentCategoryMoveRequestDetail = {
      id,
      categoryId,
      handled: false,
      resolve,
      reject
    };

    window.dispatchEvent(
      new CustomEvent<FragmentCategoryMoveRequestDetail>(
        FRAGMENT_CATEGORY_MOVE_REQUEST_EVENT,
        { detail }
      )
    );

    if (!detail.handled) resolve(null);
  });
}
