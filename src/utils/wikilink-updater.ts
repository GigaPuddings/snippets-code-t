/**
 * Wikilink 反向链接更新工具
 * 
 * 当修改片段/笔记标题时，自动更新所有引用了该标题的内部链接
 * 类似 Obsidian 的自动重命名功能
 */

import { getFragmentList, editFragment, type EditFragmentParams } from '@/api/fragment';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import type { ContentType } from '@/types/models';

/**
 * 在文本中查找所有 Wikilink
 * @param content - 文本内容
 * @returns Wikilink 列表
 */
function findWikilinks(content: string): string[] {
  const wikilinkRegex = /\[\[([^\]]+)\]\]/g;
  const wikilinks: string[] = [];
  let match;
  
  while ((match = wikilinkRegex.exec(content)) !== null) {
    wikilinks.push(match[1]);
  }
  
  return wikilinks;
}

/**
 * 替换文本中的 Wikilink
 * @param content - 文本内容
 * @param oldTitle - 旧标题
 * @param newTitle - 新标题
 * @returns 替换后的文本
 */
function replaceWikilinks(content: string, oldTitle: string, newTitle: string): string {
  // 使用全局替换，确保替换所有出现的位置
  const regex = new RegExp(`\\[\\[${escapeRegExp(oldTitle)}\\]\\]`, 'g');
  return content.replace(regex, `[[${newTitle}]]`);
}

/**
 * 转义正则表达式特殊字符
 * @param str - 字符串
 * @returns 转义后的字符串
 */
function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 查找引用了指定标题的所有片段
 * @param title - 标题
 * @returns 引用了该标题的片段列表
 */
export async function findBacklinks(title: string): Promise<ContentType[]> {
  try {
    // 获取所有片段
    const allFragments = await getFragmentList();
    
    // 过滤出包含该标题的 Wikilink 的片段
    const backlinks = allFragments.filter(fragment => {
      const wikilinks = findWikilinks(fragment.content || '');
      return wikilinks.includes(title);
    });
    
    return backlinks;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.DATABASE_ERROR,
      operation: 'findBacklinks',
      details: { title },
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 更新反向链接结果
 */
export interface UpdateBacklinksResult {
  /** 成功更新的片段数量 */
  successCount: number;
  /** 失败的片段数量 */
  failureCount: number;
  /** 更新的片段 ID 列表 */
  updatedIds: number[];
  /** 失败的片段信息 */
  failures: Array<{ id: number; title: string; error: string }>;
}

/**
 * 更新所有引用了旧标题的片段
 * @param oldTitle - 旧标题
 * @param newTitle - 新标题
 * @returns 更新结果
 * 
 * @example
 * ```typescript
 * const result = await updateBacklinks('旧笔记名', '新笔记名');
 * console.log(`成功更新 ${result.successCount} 个片段`);
 * ```
 */
export async function updateBacklinks(
  oldTitle: string,
  newTitle: string
): Promise<UpdateBacklinksResult> {
  const result: UpdateBacklinksResult = {
    successCount: 0,
    failureCount: 0,
    updatedIds: [],
    failures: []
  };
  
  try {
    // 查找所有引用了旧标题的片段
    const backlinks = await findBacklinks(oldTitle);
    
    if (backlinks.length === 0) {
      return result;
    }
    
    // 更新每个片段
    for (const fragment of backlinks) {
      try {
        // 替换内容中的 Wikilink
        const updatedContent = replaceWikilinks(fragment.content || '', oldTitle, newTitle);
        
        // 确保 ID 是数字类型
        const fragmentId = typeof fragment.id === 'string' ? parseInt(fragment.id, 10) : fragment.id;
        
        // 构建更新参数
        const params: EditFragmentParams = {
          id: fragmentId,
          title: fragment.title,
          content: updatedContent,
          category_id: fragment.category_id ?? null,
          fragmentType: fragment.type,
          format: fragment.format,
          metadata: fragment.metadata ?? null,
          tags: fragment.tags ?? null
        };
        
        // 更新片段
        await editFragment(params);
        
        result.successCount++;
        result.updatedIds.push(fragmentId);
      } catch (error) {
        result.failureCount++;
        const fragmentId = typeof fragment.id === 'string' ? parseInt(fragment.id, 10) : fragment.id;
        result.failures.push({
          id: fragmentId,
          title: fragment.title,
          error: error instanceof Error ? error.message : String(error)
        });
        
        ErrorHandler.handle(error, {
          type: ErrorType.DATABASE_ERROR,
          operation: 'updateBacklinks',
          details: { fragmentId: fragment.id, oldTitle, newTitle },
          timestamp: new Date()
        });
      }
    }
    
    return result;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.DATABASE_ERROR,
      operation: 'updateBacklinks',
      details: { oldTitle, newTitle },
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 检查标题是否被其他片段引用
 * @param title - 标题
 * @returns 是否被引用
 */
export async function isTitleReferenced(title: string): Promise<boolean> {
  try {
    const backlinks = await findBacklinks(title);
    return backlinks.length > 0;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.DATABASE_ERROR,
      operation: 'isTitleReferenced',
      details: { title },
      timestamp: new Date()
    });
    return false;
  }
}

/**
 * 获取反向链接统计信息
 * @param title - 标题
 * @param excludeFragmentId - 要排除的片段ID（通常是当前片段）
 * @returns 统计信息（包含链接引用和未链接提及的总数）
 */
export async function getBacklinkStats(
  title: string,
  excludeFragmentId?: number
): Promise<{
  count: number;
  fragments: Array<{ id: number; title: string; occurrences: number }>;
}> {
  try {
    // 获取链接引用
    const backlinks = await findBacklinks(title);
    
    // 过滤并映射片段
    const fragments = backlinks
      .filter(fragment => {
        const fragmentId = typeof fragment.id === 'string' ? parseInt(fragment.id, 10) : fragment.id;
        return excludeFragmentId === undefined || fragmentId !== excludeFragmentId;
      })
      .map(fragment => {
        const wikilinks = findWikilinks(fragment.content || '');
        const occurrences = wikilinks.filter(link => link === title).length;
        const fragmentId = typeof fragment.id === 'string' ? parseInt(fragment.id, 10) : fragment.id;
        
        return {
          id: fragmentId,
          title: fragment.title,
          occurrences
        };
      });
    
    // 获取未链接的提及
    const mentions = await findUnlinkedMentions(title);
    
    // 过滤未链接提及
    const filteredMentions = mentions.filter(fragment => {
      const fragmentId = typeof fragment.id === 'string' ? parseInt(fragment.id, 10) : fragment.id;
      return excludeFragmentId === undefined || fragmentId !== excludeFragmentId;
    });
    
    // 返回总数：链接引用 + 未链接提及（排除当前片段后）
    return {
      count: fragments.length + filteredMentions.length,
      fragments
    };
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.DATABASE_ERROR,
      operation: 'getBacklinkStats',
      details: { title },
      timestamp: new Date()
    });
    throw error;
  }
}

/**
 * 查找未链接的提及（提到标题但未创建 wikilink）
 * @param title - 标题
 * @returns 提及了该标题但未创建链接的片段列表
 */
export async function findUnlinkedMentions(title: string): Promise<ContentType[]> {
  try {
    // 获取所有片段
    const allFragments = await getFragmentList();
    
    // 过滤出提及了标题但未创建 wikilink 的片段
    const mentions = allFragments.filter(fragment => {
      const content = fragment.content || '';
      
      // 先检查是否包含该标题文本
      const titleRegex = new RegExp(escapeRegExp(title), 'i');
      if (!titleRegex.test(content)) {
        return false;
      }
      
      // 计算标题出现的总次数
      const allMatches = content.match(new RegExp(escapeRegExp(title), 'gi'));
      const totalCount = allMatches ? allMatches.length : 0;
      
      // 计算 wikilink 中的出现次数
      const wikilinkMatches = content.match(new RegExp(`\\[\\[${escapeRegExp(title)}\\]\\]`, 'gi'));
      const wikilinkCount = wikilinkMatches ? wikilinkMatches.length : 0;
      
      // 如果总次数大于 wikilink 次数，说明有未链接的提及
      return totalCount > wikilinkCount;
    });
    
    return mentions;
  } catch (error) {
    ErrorHandler.handle(error, {
      type: ErrorType.DATABASE_ERROR,
      operation: 'findUnlinkedMentions',
      details: { title },
      timestamp: new Date()
    });
    throw error;
  }
}
