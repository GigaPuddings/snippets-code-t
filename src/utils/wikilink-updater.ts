/**
 * Wikilink 反向链接更新工具
 * 
 * 当修改片段/笔记标题时，自动更新所有引用了该标题的内部链接
 * 自动重命名功能
 */

import { getFragmentList, editFragment, type EditFragmentParams } from '@/api/fragment';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';
import type { ContentType } from '@/types/models';

/**
 * 在文本中查找所有 Wikilink（兼容 Markdown 和 HTML 两种格式）
 * - Markdown 格式：[[笔记标题]]
 * - HTML 格式：<span data-note-name="笔记标题">...</span>
 * @param content - 文本内容（Markdown 或 HTML）
 * @returns Wikilink 列表（去重）
 */
function findWikilinks(content: string): string[] {
  const wikilinks: Set<string> = new Set();

  // Markdown 格式：[[笔记标题]]
  const markdownRegex = /\[\[([^\]]+)\]\]/g;
  let match: RegExpExecArray | null;
  while ((match = markdownRegex.exec(content)) !== null) {
    wikilinks.add(match[1].trim());
  }

  // HTML 格式：data-note-name="笔记标题"（兼容旧格式）
  const htmlRegex = /data-note-name="([^"]+)"/g;
  while ((match = htmlRegex.exec(content)) !== null) {
    wikilinks.add(match[1].trim());
  }

  return Array.from(wikilinks);
}

/**
 * 将 Markdown 源文本转换为可用于提及检测的纯文本：
 * 1. 移除围栏式代码块（``` ... ```）
 * 2. 移除行内代码（`...`），但保留其后的文本
 * 3. 移除纯词典/术语定义行：该行的"值"部分仅有待检测的标题（如 `refactor : 重构`）
 *    这类行不是真正的笔记引用，而是术语解释
 * 4. 移除其余 Markdown 语法（标题标记、加粗斜体、列表符号等），得到纯文本
 */
function markdownToSearchableText(content: string, titleToExclude?: string): string {
  // 1. 移除围栏式代码块
  let text = content.replace(/```[\s\S]*?```/g, '');

  // 2. 移除 YAML frontmatter（保险起见）
  text = text.replace(/^---[\s\S]*?---\s*\n/, '');

  // 3. 过滤"词典定义"行：格式为「任意文字 : <title>」或「任意文字 - <title>」
  //    其中 title 就是我们要检测的标题，且该标题是行末唯一的内容
  if (titleToExclude) {
    const escaped = escapeRegExp(titleToExclude);
    // 匹配：行中出现 `: title` 或 `- title` 且 title 后面没有其他实质文字
    text = text.replace(
      new RegExp(`^[^\n]*?[:\\-]\\s*${escaped}\\s*$`, 'gm'),
      ''
    );
  }

  // 4. 移除行内代码（`` `...` ``）
  text = text.replace(/`[^`\n]+`/g, '');

  // 5. 移除 Markdown 语法标记，只保留可读文本
  text = text
    .replace(/^#{1,6}\s+/gm, '')          // 标题 ## 前缀
    .replace(/\*\*([^*\n]+)\*\*/g, '$1')  // 加粗
    .replace(/\*([^*\n]+)\*/g, '$1')      // 斜体
    .replace(/~~([^~\n]+)~~/g, '$1')      // 删除线
    .replace(/^[\s]*[-*+]\s+/gm, '')      // 无序列表符号
    .replace(/^[\s]*\d+\.\s+/gm, '')      // 有序列表符号
    .replace(/<[^>]+>/g, '');             // HTML 标签

  return text;
}

/**
 * 检查内容中是否存在指定标题的 Wikilink（Markdown 或 HTML 格式）
 */
function hasWikilinkFor(content: string, title: string): boolean {
  if (content.includes(`[[${title}]]`)) return true;
  if (content.includes(`data-note-name="${title}"`)) return true;
  return false;
}

/**
 * 移除内容中指定标题的所有 Wikilink（Markdown 和 HTML 格式）
 */
function removeWikilinksFor(content: string, title: string): string {
  const escaped = escapeRegExp(title);
  let result = content.replace(new RegExp(`\\[\\[${escaped}\\]\\]`, 'g'), '');
  result = result.replace(
    new RegExp(`<[^>]*data-note-name="${escaped}"[^>]*>[^<]*<\\/[^>]+>`, 'g'),
    ''
  );
  return result;
}

/** 判断字符是否为 CJK 汉字（覆盖基本汉字区及扩展区） */
function isCJKChar(ch: string): boolean {
  if (!ch) return false;
  const cp = ch.codePointAt(0)!;
  return (cp >= 0x4e00 && cp <= 0x9fff)   // CJK 基本汉字
    || (cp >= 0x3400 && cp <= 0x4dbf)      // CJK 扩展 A
    || (cp >= 0x20000 && cp <= 0x2a6df);   // CJK 扩展 B
}

/**
 * 检查内容（已去除代码块和 wikilink）中是否包含对指定标题的真正"提及"。
 *
 * 对于全部由 CJK 汉字组成的标题（如"重构"），额外进行词语边界检查：
 * 若匹配位置的**紧前字符**或**紧后字符**也是 CJK 汉字，则说明该匹配
 * 是更长复合词的一部分（如"重构前"、"重构笔记"），不算独立提及。
 *
 * 对于非纯 CJK 标题，仍使用简单的 includes 检查。
 */
function containsPlainMention(content: string, title: string): boolean {
  if (!content.includes(title)) return false;

  // 判断标题是否为纯 CJK（至少含一个汉字且全为汉字/字母数字混合时也按此处理）
  const hasCJK = /[\u4e00-\u9fff]/.test(title);
  if (!hasCJK) {
    // 非 CJK 标题直接匹配
    return true;
  }

  // 对 CJK 标题逐个匹配，检查词语边界
  let searchFrom = 0;
  while (true) {
    const idx = content.indexOf(title, searchFrom);
    if (idx === -1) break;

    const prevChar = idx > 0 ? content[idx - 1] : '';
    const nextChar = idx + title.length < content.length ? content[idx + title.length] : '';

    // 前后字符均不是 CJK → 这是独立出现的标题，视为有效提及
    if (!isCJKChar(prevChar) && !isCJKChar(nextChar)) {
      return true;
    }

    searchFrom = idx + 1;
  }

  return false;
}

/**
 * 替换文本中的 Wikilink
 * @param content - 文本内容
 * @param oldTitle - 旧标题
 * @param newTitle - 新标题
 * @param keepBrackets - 是否保留方括号（默认true）
 * @returns 替换后的文本
 */
function replaceWikilinks(content: string, oldTitle: string, newTitle: string, keepBrackets: boolean = true): string {
  // 使用全局替换，确保替换所有出现的位置
  const regex = new RegExp(`\\[\\[${escapeRegExp(oldTitle)}\\]\\]`, 'g');
  const replacement = keepBrackets ? `[[${newTitle}]]` : newTitle;
  return content.replace(regex, replacement);
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
  updatedIds: (number | string)[];
  /** 失败的片段信息 */
  failures: Array<{ id: number | string; title: string; error: string }>;
}

/**
 * 更新所有引用了旧标题的片段
 * @param oldTitle - 旧标题
 * @param newTitle - 新标题
 * @param keepBrackets - 是否保留方括号（默认true，设为false时移除链接）
 * @returns 更新结果
 * 
 * @example
 * ```typescript
 * // 重命名链接
 * const result = await updateBacklinks('旧笔记名', '新笔记名');
 * 
 * // 删除链接，保留文本
 * const result = await updateBacklinks('笔记名', '笔记名', false);
 * ```
 */
export async function updateBacklinks(
  oldTitle: string,
  newTitle: string,
  keepBrackets: boolean = true
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
        const updatedContent = replaceWikilinks(fragment.content || '', oldTitle, newTitle, keepBrackets);
        
        // 构建更新参数（保持原始 ID，不转换）
        const params: EditFragmentParams = {
          id: fragment.id, // 保持原始 ID（文件路径）
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
        result.updatedIds.push(fragment.id);
      } catch (error) {
        result.failureCount++;
        result.failures.push({
          id: fragment.id,
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
  excludeFragmentId?: number | string
): Promise<{
  count: number;
  fragments: Array<{ id: number | string; title: string; occurrences: number }>;
}> {
  try {
    // 获取链接引用
    const backlinks = await findBacklinks(title);
    
    // 过滤并映射片段
    const fragments = backlinks
      .filter(fragment => {
        // 比较 ID 时，将两者都转换为字符串进行比较
        return excludeFragmentId === undefined || String(fragment.id) !== String(excludeFragmentId);
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
      
      // 排除当前片段自己
      if (fragment.title === title) {
        return false;
      }
      
      // 如果内容中存在该标题的 wikilink（Markdown 或 HTML 格式），
      // 说明已经是"链接引用"，只在移除 wikilink 后检查是否还有独立的纯文本提及
      if (hasWikilinkFor(content, title)) {
        const contentWithoutWikilinks = removeWikilinksFor(content, title);
        const searchText = markdownToSearchableText(contentWithoutWikilinks, title);
        return containsPlainMention(searchText, title);
      }
      
      // 没有 wikilink——转为可搜索纯文本后，检查是否有独立的纯文本提及
      // markdownToSearchableText 会：
      //   1. 去除代码块和行内代码
      //   2. 过滤「xxx : <title>」这类词典定义行（如 `refactor : 重构`）
      //   3. 去除 Markdown 语法标记，得到纯文字
      const searchText = markdownToSearchableText(content, title);
      return containsPlainMention(searchText, title);
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
