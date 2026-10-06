/** Shared contracts used by the editor context menu. */
/**
 * 视图模式类型
 */
export type ViewMode = 'reading' | 'preview' | 'source';

/**
 * SourceEditor 暴露的方法
 */
export interface SourceEditorExpose {
  /** 获取 textarea 元素 */
  getTextarea: () => HTMLTextAreaElement | null;
  /** 聚焦源码编辑器 */
  focus: () => void;
  /** 全选源码内容 */
  selectAll: () => void;
  /** 滚动到指定行 */
  scrollToLine: (lineNumber: number) => void;
  /** 在当前光标位置插入文本 */
  insertText: (text: string) => void;
  /** 用 Markdown 标记包裹当前选区 */
  wrapSelection: (before: string, after: string) => void;
  /** 为当前行或选区每一行添加前缀 */
  insertLinePrefix: (prefix: string) => void;
}
