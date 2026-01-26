/**
 * 增强的 Markdown 输入规则
 * 用于支持行内代码和代码块的快捷输入
 */
import { Extension } from '@tiptap/core';
import { textblockTypeInputRule } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';

export const EnhancedMarkdown = Extension.create({
  name: 'enhancedMarkdown',

  addInputRules() {
    return [
      // 代码块：```
      textblockTypeInputRule({
        find: /^```([a-z]*)[\s\n]$/,
        type: this.editor.schema.nodes.codeBlock,
        getAttributes: (match) => ({
          language: match[1],
        }),
      }),
    ];
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('inlineCodeHandler'),
        props: {
          handleTextInput: (view, from, to, text) => {
            // 只在输入反引号时处理
            if (text !== '`') {
              return false;
            }

            const { state } = view;
            const { doc, tr } = state;
            
            // 获取当前位置之前的文本
            const textBefore = doc.textBetween(Math.max(0, from - 100), from, '\n', '\n');
            
            // 查找最近的未配对的反引号
            const lastBacktickIndex = textBefore.lastIndexOf('`');
            
            if (lastBacktickIndex !== -1) {
              // 计算反引号的实际位置
              const backtickPos = from - (textBefore.length - lastBacktickIndex);
              
              // 获取两个反引号之间的文本
              const codeText = doc.textBetween(backtickPos + 1, from, '\n', '\n');
              
              // 检查是否是有效的行内代码（不包含换行，不为空）
              if (codeText && !codeText.includes('\n') && codeText.trim()) {
                // 删除第一个反引号到当前位置的文本
                tr.delete(backtickPos, to);
                
                // 插入带有 code mark 的文本
                tr.insertText(codeText, backtickPos);
                tr.addMark(backtickPos, backtickPos + codeText.length, state.schema.marks.code.create());
                
                view.dispatch(tr);
                return true;
              }
            }
            
            return false;
          },
        },
      }),
    ];
  },
});
