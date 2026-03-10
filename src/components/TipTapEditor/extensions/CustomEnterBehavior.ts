/**
 * 自定义回车键行为
 * 让 Enter 键创建软换行（<br>）而不是新段落
 */
import { Extension } from '@tiptap/core';

export const CustomEnterBehavior = Extension.create({
  name: 'customEnterBehavior',
  
  addKeyboardShortcuts() {
    return {
      // Enter 键创建软换行（<br>）
      'Enter': () => {
        return this.editor.commands.setHardBreak();
      },
      // Shift+Enter 创建新段落
      'Shift-Enter': () => {
        return this.editor.commands.splitBlock();
      }
    };
  }
});
