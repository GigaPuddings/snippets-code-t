/**
 * 自定义回车键行为
 * 让 Enter 键创建新块而不是软换行
 * 这样可以让 Markdown 输入规则在每一行都正常工作
 */
import { Extension } from '@tiptap/core';

export const CustomEnterBehavior = Extension.create({
  name: 'customEnterBehavior',

  addKeyboardShortcuts() {
    return {
      // Enter 键：始终创建新块
      'Enter': () => {
        return this.editor.commands.splitBlock();
      },
      // Shift+Enter: 创建软换行（保留原有行为）
      'Shift-Enter': () => {
        return this.editor.commands.setHardBreak();
      }
    };
  }
});
