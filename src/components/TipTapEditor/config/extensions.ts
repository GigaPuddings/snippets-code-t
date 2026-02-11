import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Typography from '@tiptap/extension-typography';
import { Wikilink } from '../extensions/Wikilink';
import { EnhancedMarkdown } from '../extensions/EnhancedMarkdown';
import { CodeBlockLowlight } from '../extensions/CodeBlockLowlight';
import { MarkdownLinkHandler } from '../extensions/MarkdownLinkHandler';

export function createEditorExtensions(onWikilinkClick: (noteName: string) => void) {
  return [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3, 4, 5, 6]
      },
      // 禁用 StarterKit 自带的 codeBlock，使用自定义的
      codeBlock: false,
      // 禁用 StarterKit 自带的扩展,使用自定义配置
      link: false  // 禁用默认的 Link,使用下面自定义的
    }),
    CodeBlockLowlight.configure({
      languageClassPrefix: 'language-',
      HTMLAttributes: {
        class: 'code-block'
      }
    }),
    Typography,
    EnhancedMarkdown,
    MarkdownLinkHandler,
    Link.extend({
      addAttributes() {
        return {
          ...this.parent?.(),
          'data-original-url': {
            default: null,
            parseHTML: (element: HTMLElement) => element.getAttribute('data-original-url'),
            renderHTML: (attributes: Record<string, unknown>) => {
              if (!attributes['data-original-url']) {
                return {};
              }
              return {
                'data-original-url': attributes['data-original-url']
              };
            }
          }
        };
      }
    }).configure({
      openOnClick: false,  // 禁用默认的点击打开行为，我们自己处理
      HTMLAttributes: {
        class: 'editor-link',
        rel: 'noopener noreferrer'
        // 移除 target="_blank"，避免打开两个标签
      },
      validate: (href: string) => {
        // 允许锚点链接（目录链接）
        if (href.startsWith('#')) return true;
        
        // 如果已经有协议，验证是否为 http/https
        if (href.includes('://')) {
          return /^https?:\/\//.test(href);
        }
        
        // 如果没有协议，认为是有效的（会在后续自动补全）
        return true;
      }
    }),
    Wikilink.configure({
      HTMLAttributes: {
        class: 'wikilink'
      },
      onLinkClick: onWikilinkClick
    }),
    Table.configure({
      resizable: true,
      HTMLAttributes: {
        class: 'editor-table'
      }
    }),
    TableRow,
    TableHeader,
    TableCell,
    TaskList.configure({
      HTMLAttributes: {
        class: 'task-list'
      }
    }),
    TaskItem.configure({
      nested: true,
      HTMLAttributes: {
        class: 'task-item'
      }
    })
  ];
}
