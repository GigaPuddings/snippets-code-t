import { Editor } from '@tiptap/core';
import { describe, expect, it } from 'vitest';
import { MarkdownStarterKit } from './MarkdownStarterKit';

describe('MarkdownStarterKit inline mark boundaries', () => {
  it('leaves strike formatting when typing after its closing boundary', () => {
    const editor = new Editor({
      extensions: [MarkdownStarterKit],
      content: {
        type: 'doc',
        content: [
          {
            type: 'paragraph',
            content: [
              { type: 'text', text: '删除线', marks: [{ type: 'strike' }] }
            ]
          }
        ]
      }
    });

    editor.commands.setTextSelection(1 + '删除线'.length);
    editor.view.dispatch(editor.state.tr.insertText('正常文本'));

    expect(editor.getJSON().content?.[0].content).toEqual([
      { type: 'text', text: '删除线', marks: [{ type: 'strike' }] },
      { type: 'text', text: '正常文本' }
    ]);
    editor.destroy();
  });

  it.each(['strike', 'bold', 'italic', 'code'])(
    'starts plain text after a %s span and a paragraph break',
    (markName) => {
      const editor = new Editor({
        extensions: [MarkdownStarterKit],
        content: {
          type: 'doc',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '格式文本',
                  marks: [{ type: markName }]
                }
              ]
            }
          ]
        }
      });

      editor.commands.setTextSelection(1 + '格式文本'.length);
      editor.commands.splitBlock();
      editor.view.dispatch(editor.state.tr.insertText('普通文本'));

      const paragraphs = editor.getJSON().content ?? [];
      expect(paragraphs).toHaveLength(2);
      expect(paragraphs[0].content?.[0].marks?.[0].type).toBe(markName);
      expect(paragraphs[1].content?.[0]).toEqual({
        type: 'text',
        text: '普通文本'
      });
      editor.destroy();
    }
  );
});
