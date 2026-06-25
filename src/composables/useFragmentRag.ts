import { ref } from 'vue';
import { searchMarkdownFiles } from '@/api/markdown';
import { logger } from '@/utils/logger';

export interface RagResult {
  /** 拼接好的上下文文本，可直接注入 AI 系统提示 */
  context: string;
  /** 命中的片段标题列表（用于 UI 展示引用来源） */
  sources: Array<{ title: string; category: string }>;
  /** 检索是否被截断 */
  truncated: boolean;
}

const MAX_CONTEXT_CHARS = 6000;
const MAX_RESULTS = 8;
const SNIPPET_CHARS = 800;

/**
 * 片段 RAG 检索 composable
 *
 * 基于已有的 Markdown 全文搜索基础设施，为本地 AI 聊天提供知识库上下文。
 * 流程：用户提问 → 关键词检索 → 截取片段 → 拼接为 system prompt 上下文。
 */
export function useFragmentRag() {
  const isSearching = ref(false);
  const lastQuery = ref('');
  const lastSources = ref<Array<{ title: string; category: string }>>([]);

  /**
   * 根据用户问题检索相关片段并构建上下文
   * @param query 用户问题
   * @returns RAG 检索结果
   */
  async function retrieveContext(query: string): Promise<RagResult> {
    if (!query.trim()) {
      return { context: '', sources: [], truncated: false };
    }

    isSearching.value = true;
    lastQuery.value = query;

    try {
      const files = await searchMarkdownFiles(query.trim());

      if (!files || files.length === 0) {
        logger.debug('[RAG] 未检索到相关片段');
        return { context: '', sources: [], truncated: false };
      }

      const sources: Array<{ title: string; category: string }> = [];
      const snippets: string[] = [];
      let totalChars = 0;
      let truncated = false;

      for (const file of files.slice(0, MAX_RESULTS)) {
        const title = file.title || '未命名';
        const category = file.categoryName || '未分类';
        const content = (file.content || '').trim();

        if (!content) continue;

        // 截取片段：优先包含查询关键词的段落
        const snippet = extractRelevantSnippet(content, query, SNIPPET_CHARS);

        if (totalChars + snippet.length > MAX_CONTEXT_CHARS) {
          truncated = true;
          break;
        }

        snippets.push(`### ${title}（${category}）\n${snippet}`);
        sources.push({ title, category });
        totalChars += snippet.length;
      }

      const context =
        snippets.length > 0
          ? `以下是从知识库中检索到的相关片段，请参考这些内容回答用户问题。如果片段中没有相关信息，请如实告知。\n\n${snippets.join('\n\n---\n\n')}`
          : '';

      lastSources.value = sources;
      logger.info('[RAG] 检索完成', { query, sources: sources.length, truncated });

      return { context, sources, truncated };
    } catch (error) {
      logger.error('[RAG] 检索失败:', error);
      return { context: '', sources: [], truncated: false };
    } finally {
      isSearching.value = false;
    }
  }

  return {
    isSearching,
    lastQuery,
    lastSources,
    retrieveContext
  };
}

/**
 * 从内容中提取与查询最相关的片段
 * 优先返回包含查询关键词的段落上下文
 */
function extractRelevantSnippet(content: string, query: string, maxChars: number): string {
  if (content.length <= maxChars) return content;

  // 尝试找到查询关键词在内容中的位置
  const keywords = query
    .split(/\s+/)
    .filter((kw) => kw.length >= 2)
    .map((kw) => kw.toLowerCase());

  let bestPos = 0;
  let bestScore = 0;

  const lowerContent = content.toLowerCase();
  for (const kw of keywords) {
    let idx = lowerContent.indexOf(kw);
    while (idx !== -1) {
      // 以关键词为中心，向前后扩展
      const start = Math.max(0, idx - Math.floor(maxChars / 3));
      const score = keywords.reduce(
        (s, k) => s + (lowerContent.slice(start, start + maxChars).includes(k) ? 1 : 0),
        0
      );
      if (score > bestScore) {
        bestScore = score;
        bestPos = start;
      }
      idx = lowerContent.indexOf(kw, idx + 1);
    }
  }

  const snippet = content.slice(bestPos, bestPos + maxChars);
  const prefix = bestPos > 0 ? '…' : '';
  const suffix = bestPos + maxChars < content.length ? '…' : '';
  return `${prefix}${snippet}${suffix}`;
}
