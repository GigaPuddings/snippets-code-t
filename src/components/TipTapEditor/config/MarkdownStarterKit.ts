import type { AnyExtension } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

export const MarkdownStarterKit = StarterKit.extend({
  addExtensions() {
    const parent = (this as unknown as { parent?: () => AnyExtension[] })
      .parent;
    return (parent?.() ?? []).map((extension: AnyExtension) => {
      if (
        extension.name === 'bold' ||
        extension.name === 'italic' ||
        extension.name === 'strike' ||
        extension.name === 'code'
      ) {
        return extension.extend({
          inclusive: false,
          exitable: true,
          keepOnSplit: false
        });
      }
      return extension;
    });
  }
});
