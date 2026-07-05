import type { LocalAiTool } from '@/api/localAi';

/**
 * AI 可调用的笔记工具定义
 *
 * 工具参数使用 JSON Schema 描述，llama-server 会通过 chat template
 * 将这些定义注入模型上下文，模型可选择调用。
 */
export const NOTE_TOOLS: LocalAiTool[] = [
  {
    type: 'function',
    function: {
      name: 'search_notes',
      description:
        'Search notes and code snippets in the workspace by keyword. Returns a list of matching notes with title, category, tags, and a short preview.',
      parameters: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Search keywords to match note titles and content.'
          },
          category: {
            type: 'string',
            description: 'Optional: limit results to a specific category name.'
          }
        },
        required: ['query']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'read_note',
      description:
        'Read the full content of a note by its title. Use this when you need to see the complete content of a specific note.',
      parameters: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'The title of the note to read.'
          }
        },
        required: ['title']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'list_categories',
      description: 'List all note categories (folders) in the workspace.',
      parameters: {
        type: 'object',
        properties: {}
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'list_notes_by_category',
      description:
        'List all notes in a specific category. Returns titles, tags, type, and modification date.',
      parameters: {
        type: 'object',
        properties: {
          category: {
            type: 'string',
            description: 'The category name to list notes from.'
          }
        },
        required: ['category']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'create_note',
      description:
        'Create a new note in the workspace. The note will be saved as a Markdown file.',
      parameters: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'The title of the new note.'
          },
          content: {
            type: 'string',
            description: 'The content of the note in Markdown format.'
          },
          category: {
            type: 'string',
            description: 'Optional: category name. Defaults to uncategorized.'
          },
          tags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Optional: list of tags for the note.'
          },
          type: {
            type: 'string',
            enum: ['note', 'code'],
            description: 'Optional: note type. Defaults to "note".'
          }
        },
        required: ['title', 'content']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'edit_note',
      description:
        'Edit an existing note by title. You must provide the full new content. Optionally rename the note or update tags.',
      parameters: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'The current title of the note to edit.'
          },
          content: {
            type: 'string',
            description: 'The new full content of the note in Markdown format.'
          },
          newTitle: {
            type: 'string',
            description: 'Optional: new title if you want to rename the note.'
          },
          tags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Optional: new list of tags to replace existing ones.'
          }
        },
        required: ['title', 'content']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'delete_note',
      description:
        'Delete a note by title. This operation cannot be undone. Use with caution.',
      parameters: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'The title of the note to delete.'
          }
        },
        required: ['title']
      }
    }
  }
];

/** 写操作工具名称集合，这些操作需要用户确认 */
export const WRITE_TOOL_NAMES = new Set([
  'create_note',
  'edit_note',
  'delete_note'
]);

/** 判断工具是否为写操作 */
export function isWriteTool(name: string): boolean {
  return WRITE_TOOL_NAMES.has(name);
}
