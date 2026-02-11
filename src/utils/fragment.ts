/**
 * 片段工具函数
 * 用于解析和转换片段数据
 */

import type { ContentType } from '@/types/models';
import { ErrorHandler, ErrorType } from './error-handler';

/**
 * 解析来自 API 的片段数据，确保所有字段都存在并具有正确的默认值
 * 
 * @param fragment - 来自 API 的原始片段数据
 * @returns 解析后的 ContentType，包含所有必需字段
 * 
 * @example
 * ```typescript
 * const rawData = await invoke('get_fragment', { id: 1 });
 * const fragment = parseFragment(rawData);
 * ```
 */
export function parseFragment(fragment: unknown): ContentType {
  try {
    // 验证数据
    if (!fragment || typeof fragment !== 'object') {
      throw new Error('Invalid fragment data: not an object');
    }

    const data = fragment as Record<string, unknown>;

    // 验证 summarize 字段是否为有效值
    const validSummarizeTypes = ['text', 'app', 'bookmark', 'search', 'code', 'note'];
    const summarize = typeof data.summarize === 'string' && validSummarizeTypes.includes(data.summarize)
      ? (data.summarize as 'text' | 'app' | 'bookmark' | 'search' | 'code' | 'note')
      : undefined;

    return {
      id: typeof data.id === 'number' || typeof data.id === 'string' ? data.id : 0,
      title: typeof data.title === 'string' ? data.title : '',
      content: typeof data.content === 'string' ? data.content : '',
      // 处理 'type' 和 'fragment_type' 两种字段名
      type: (data.type || data.fragment_type || 'code') as ContentType['type'],
      format: (data.format || 'plain') as 'plain' | 'markdown' | 'html',
      metadata: parseMetadata(data.metadata),
      tags: parseTags(data.tags),
      // 确保 category_id 始终是有效的数字或 undefined
      category_id: data.category_id !== undefined && data.category_id !== null 
        ? (typeof data.category_id === 'string' ? parseInt(data.category_id, 10) : Number(data.category_id))
        : undefined,
      created_at: typeof data.created_at === 'string' ? data.created_at : undefined,
      updated_at: typeof data.updated_at === 'string' ? data.updated_at : undefined,
      usage_count: typeof data.usage_count === 'number' ? data.usage_count : undefined,
      icon: typeof data.icon === 'string' ? data.icon : undefined,
      summarize,
    };
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.VALIDATION_ERROR,
      operation: 'parseFragment',
      details: { fragment },
      timestamp: new Date()
    });
    
    // 返回默认值
    return {
      id: 0,
      title: '',
      content: '',
      type: 'code'
    };
  }
}

/**
 * 解析元数据字段（字符串或对象）
 * 
 * @param metadata - 元数据（JSON 字符串或对象）
 * @returns 解析后的元数据对象或 undefined
 * 
 * @example
 * ```typescript
 * const metadata = parseMetadata('{"language":"typescript"}');
 * // 返回: { language: 'typescript' }
 * ```
 */
export function parseMetadata(metadata: unknown): Record<string, unknown> | undefined {
  if (!metadata) return undefined;
  
  // 如果已经是对象，直接返回
  if (typeof metadata === 'object' && !Array.isArray(metadata)) {
    return metadata as Record<string, unknown>;
  }
  
  // 如果是字符串，尝试解析为 JSON
  if (typeof metadata === 'string') {
    try {
      const parsed = JSON.parse(metadata);
      return typeof parsed === 'object' ? parsed : undefined;
    } catch (error) {
      ErrorHandler.log(error, {
        type: ErrorType.VALIDATION_ERROR,
        operation: 'parseMetadata',
        details: { metadata },
        timestamp: new Date()
      });
      return undefined;
    }
  }
  
  return undefined;
}

/**
 * 解析标签字段（逗号分隔的字符串或数组）
 * 
 * @param tags - 标签（逗号分隔的字符串或数组）
 * @returns 标签字符串数组或 undefined
 * 
 * @example
 * ```typescript
 * const tags1 = parseTags('javascript, typescript, vue');
 * // 返回: ['javascript', 'typescript', 'vue']
 * 
 * const tags2 = parseTags(['javascript', 'typescript']);
 * // 返回: ['javascript', 'typescript']
 * ```
 */
export function parseTags(tags: unknown): string[] | undefined {
  if (!tags) return undefined;
  
  // 如果已经是数组，过滤并返回
  if (Array.isArray(tags)) {
    const filtered = tags
      .filter(t => t && typeof t === 'string' && t.trim().length > 0)
      .map(t => t.trim());
    return filtered.length > 0 ? filtered : undefined;
  }
  
  // 如果是字符串，按逗号分割、修剪并过滤
  if (typeof tags === 'string') {
    const filtered = tags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);
    return filtered.length > 0 ? filtered : undefined;
  }
  
  return undefined;
}

/**
 * 将代码内容转换为笔记格式（包装在代码块中）
 * 
 * @param content - 要转换的代码内容
 * @param language - 可选的语言标识符，用于语法高亮
 * @returns Markdown 格式的代码块内容
 * 
 * @example
 * ```typescript
 * const markdown = convertCodeToNote('console.log("hello")', 'javascript');
 * // 返回: "```javascript\nconsole.log(\"hello\")\n```"
 * ```
 */
export function convertCodeToNote(content: string, language?: string): string {
  const lang = language || '';
  return `\`\`\`${lang}\n${content}\n\`\`\``;
}

/**
 * 将笔记内容（HTML）转换为纯文本代码格式
 * 从 HTML 中提取文本内容，移除所有标记
 * 
 * @param htmlContent - 来自 TipTap 编辑器的 HTML 内容
 * @returns 纯文本内容
 * 
 * @example
 * ```typescript
 * const code = convertNoteToCode('<p>Hello <strong>World</strong></p>');
 * // 返回: "Hello World"
 * ```
 */
export function convertNoteToCode(htmlContent: string): string {
  try {
    // 创建临时 DOM 元素来解析 HTML
    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;
    
    // 提取纯文本（优先使用 textContent，fallback 到 innerText）
    const plainText = temp.textContent || temp.innerText || '';
    
    // 返回修剪后的文本
    return plainText.trim();
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.UNKNOWN_ERROR,
      operation: 'convertNoteToCode',
      details: { htmlContent },
      timestamp: new Date()
    });
    return '';
  }
}
