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
    Link.configure({
      openOnClick: true,
      HTMLAttributes: {
        class: 'editor-link',
        target: '_blank',
        rel: 'noopener noreferrer'
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
