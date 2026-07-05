import * as markdownApi from '@/api/markdown';
import { logger } from '@/utils/logger';

/**
 * 笔记工具执行器
 *
 * 将 AI 模型输出的 tool_call 映射到现有的 Markdown API，
 * 执行读取、搜索、创建、编辑、删除等操作并返回 JSON 字符串结果。
 */
export async function executeNoteTool(
  name: string,
  args: Record<string, unknown>
): Promise<string> {
  try {
    switch (name) {
      case 'search_notes': {
        const query = args.query as string;
        let files = await markdownApi.searchMarkdownFiles(query);
        if (args.category) {
          const cat = args.category as string;
          files = files.filter((f) => f.categoryName === cat);
        }
        const results = files.slice(0, 10).map((f) => ({
          title: f.title,
          category: f.categoryName,
          filePath: f.filePath,
          tags: f.tags,
          type: f.type,
          preview: (f.content || '').slice(0, 200),
          modified: f.modified
        }));
        return JSON.stringify({ results, total: files.length });
      }

      case 'read_note': {
        const title = args.title as string;
        const existing = await markdownApi.findFileByTitle(title);
        if (!existing) {
          return JSON.stringify({ error: `Note not found: ${title}` });
        }
        const file = await markdownApi.readMarkdownFile(existing.filePath);
        return JSON.stringify({
          title: file.title,
          content: file.content,
          category: file.categoryName,
          tags: file.tags,
          type: file.type,
          filePath: file.filePath,
          created: file.created,
          modified: file.modified
        });
      }

      case 'list_categories': {
        const categories = await markdownApi.getCategories();
        return JSON.stringify({
          categories: categories.map((c) => ({
            id: c.id,
            name: c.name,
            isSystem: c.isSystem
          }))
        });
      }

      case 'list_notes_by_category': {
        const categoryName = args.category as string;
        const categories = await markdownApi.getCategories();
        const cat = categories.find((c) => c.name === categoryName);
        if (!cat) {
          return JSON.stringify({ error: `Category not found: ${categoryName}` });
        }
        const files = await markdownApi.getFilesByCategory(cat.id);
        return JSON.stringify({
          category: categoryName,
          notes: files.map((f) => ({
            title: f.title,
            tags: f.tags,
            type: f.type,
            modified: f.modified,
            filePath: f.filePath
          }))
        });
      }

      case 'create_note': {
        const title = args.title as string;
        const content = args.content as string;
        const filePath = await markdownApi.createMarkdownFile(
          (args.category as string) || null,
          {
            title,
            content,
            type: (args.type as 'note' | 'code') || 'note',
            tags: (args.tags as string[]) || [],
            favorite: false
          }
        );
        return JSON.stringify({ success: true, filePath, title });
      }

      case 'edit_note': {
        const title = args.title as string;
        const content = args.content as string;
        const existing = await markdownApi.findFileByTitle(title);
        if (!existing) {
          return JSON.stringify({ error: `Note not found: ${title}` });
        }
        const newPath = await markdownApi.updateMarkdownFile(
          existing.filePath,
          content,
          {
            title: (args.newTitle as string) || existing.title,
            tags: (args.tags as string[]) || existing.tags
          }
        );
        return JSON.stringify({
          success: true,
          filePath: newPath || existing.filePath,
          title: (args.newTitle as string) || title
        });
      }

      case 'delete_note': {
        const title = args.title as string;
        const existing = await markdownApi.findFileByTitle(title);
        if (!existing) {
          return JSON.stringify({ error: `Note not found: ${title}` });
        }
        await markdownApi.deleteMarkdownFile(existing.filePath);
        return JSON.stringify({ success: true, title });
      }

      default:
        return JSON.stringify({ error: `Unknown tool: ${name}` });
    }
  } catch (error) {
    logger.error('[NoteToolExecutor] Tool execution failed:', { name, args, error });
    const message = error instanceof Error ? error.message : String(error);
    return JSON.stringify({ error: `Tool execution failed: ${message}` });
  }
}
