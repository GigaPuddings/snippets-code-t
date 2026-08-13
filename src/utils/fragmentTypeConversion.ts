import type { ContentType } from '@/types/models';
import {
  convertCodeToNote,
  convertNoteHtmlToCode
} from '@/utils/fragmentConversionCore';
import { markdownToHtml } from '@/components/TipTapEditor/utils/markdown';

export type FragmentType = NonNullable<ContentType['type']>;

export const FRAGMENT_TYPE_CONVERSION_REQUEST_EVENT =
  'fragment-type-conversion-request';

export interface FragmentTypeConversionRequestDetail {
  id: string | number;
  targetType: FragmentType;
  handled: boolean;
  resolve: (content: ContentType) => void;
  reject: (error: unknown) => void;
}

/**
 * 按现有产品规则转换正文：片段转笔记时包装为代码块，笔记转片段时去除格式。
 */
export function convertFragmentContent(
  content: string,
  sourceType: FragmentType,
  targetType: FragmentType,
  language?: string
): string {
  if (sourceType === targetType) return content;

  if (targetType === 'note') {
    return convertCodeToNote(content, language);
  }

  const html = content.trimStart().startsWith('<')
    ? content
    : markdownToHtml(content);
  return convertNoteHtmlToCode(html);
}

/**
 * 请求当前打开的内容页使用编辑器中的最新正文执行类型转换。
 * 未打开目标内容时返回 null，由列表页改为转换磁盘中的内容。
 */
export function requestOpenFragmentTypeConversion(
  id: string | number,
  targetType: FragmentType
): Promise<ContentType | null> {
  return new Promise((resolve, reject) => {
    const detail: FragmentTypeConversionRequestDetail = {
      id,
      targetType,
      handled: false,
      resolve,
      reject
    };

    window.dispatchEvent(
      new CustomEvent<FragmentTypeConversionRequestDetail>(
        FRAGMENT_TYPE_CONVERSION_REQUEST_EVENT,
        { detail }
      )
    );

    if (!detail.handled) {
      resolve(null);
    }
  });
}
