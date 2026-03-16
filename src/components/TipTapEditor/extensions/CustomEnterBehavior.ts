/**
 * 自定义回车键行为
 * 让 Enter 键创建软换行（<br>）而不是新段落
 */
import { Extension } from '@tiptap/core';

export const CustomEnterBehavior = Extension.create({
  name: 'customEnterBehavior',
  
  addKeyboardShortcuts() {
    return {
      // Enter 键根据上下文决定行为
      'Enter': () => {
        const { state } = this.editor;
        const { $from } = state.selection;
        const parent = $from.parent;
        const textBefore = parent.textBetween(0, $from.parentOffset, '\n', '\n').trim();
        const isHeading = parent.type.name === 'heading';
        const isCodeFence = /^```[a-zA-Z]*$/.test(textBefore);

        if (isHeading || isCodeFence) {
          return this.editor.commands.splitBlock();
        }

        return this.editor.commands.setHardBreak();
      },
      // Shift+Enter: 始终创建新段落
      'Shift-Enter': () => {
        return this.editor.commands.splitBlock();
      }
    };
  }
});
