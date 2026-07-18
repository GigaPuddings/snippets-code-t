import type { Editor } from '@tiptap/core';

export const EDITOR_SELECTION_LAYOUT_EVENT = 'tiptap-selection-layout';

export interface EditorSelectionLayoutDetail {
  allowScrollUp: boolean;
  targetElement: HTMLElement | null;
}

export interface EditorSelectionLayoutOptions {
  allowScrollUp?: boolean;
  shouldScroll?: () => boolean;
  targetElement?: () => HTMLElement | null;
}

/**
 * Vue NodeView 通常在 ProseMirror 更新选区之后才完成实际布局。
 * 延迟两帧通知编辑器重新按带安全边距的规则显示当前光标。
 */
export function requestSelectionScrollAfterLayout(
  editor: Editor,
  options: EditorSelectionLayoutOptions = {}
): void {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (editor.isDestroyed || !editor.view.dom.isConnected) return;
      if (options.shouldScroll && !options.shouldScroll()) return;

      const targetElement = options.targetElement?.() ?? null;
      if (targetElement && !targetElement.isConnected) return;

      editor.view.dom.dispatchEvent(
        new CustomEvent<EditorSelectionLayoutDetail>(
          EDITOR_SELECTION_LAYOUT_EVENT,
          {
            detail: {
              allowScrollUp: options.allowScrollUp ?? true,
              targetElement
            }
          }
        )
      );
    });
  });
}
