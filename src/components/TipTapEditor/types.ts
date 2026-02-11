/**
 * TipTapEditor 组件类型定义
 */

import type { CSSProperties } from 'vue';
import type { Editor } from '@tiptap/vue-3';

/**
 * 视图模式类型
 */
export type ViewMode = 'reading' | 'preview' | 'source';

/**
 * 标题信息接口
 */
export interface Heading {
  /** 标题级别 (1-6) */
  level: number;
  /** 标题文本内容 */
  text: string;
  /** 标题在文档中的位置 */
  pos: number;
}

/**
 * TipTapEditor 组件 Props
 */
export interface TipTapEditorProps {
  /** 代码块样式 */
  codeStyle?: CSSProperties;
  /** 是否为暗色模式 */
  dark?: boolean;
  /** 编辑器内容 (HTML) */
  content?: string;
  /** 占位符文本 */
  placeholder?: string;
  /** 是否自动聚焦 */
  autofocus?: boolean;
  /** 是否禁用编辑 */
  disabled?: boolean;
  /** 是否自动销毁编辑器 */
  autoDestroy?: boolean;
  /** 是否显示视图切换按钮 */
  showViewToggle?: boolean;
  /** 是否显示编辑器操作按钮 */
  showEditorActions?: boolean;
  /** 是否显示右键菜单 */
  showContextMenu?: boolean;
}

/**
 * TipTapEditor 组件 Emits
 */
export interface TipTapEditorEmits {
  /** 内容更新事件 */
  (e: 'update:content', value: string): void;
  /** 编辑器就绪事件 */
  (e: 'ready', payload: Editor): void;
  /** 内容变化事件 */
  (e: 'change', value: string): void;
  /** 获得焦点事件 */
  (e: 'focus'): void;
  /** 失去焦点事件 */
  (e: 'blur'): void;
  /** Wikilink 点击事件 */
  (e: 'wikilink-click', noteName: string): void;
  /** 视图模式变化事件 */
  (e: 'view-mode-change', mode: ViewMode): void;
  /** 大纲面板切换事件 */
  (e: 'outline-toggle', show: boolean): void;
}

/**
 * TipTapEditor 暴露的方法
 */
export interface TipTapEditorExpose {
  /** 获取编辑器实例 */
  getEditor: () => Editor | undefined;
  /** 获取 HTML 内容 */
  getHTML: () => string;
  /** 获取纯文本内容 */
  getText: () => string;
  /** 获取 JSON 格式内容 */
  getJSON: () => any;
  /** 设置视图模式 */
  setViewMode: (mode: ViewMode) => void;
  /** 切换大纲面板 */
  toggleOutline: () => void;
  /** 获取当前视图模式 */
  getViewMode: () => ViewMode;
}

/**
 * EditorActions 组件 Props
 */
export interface EditorActionsProps {
  /** 当前视图模式 */
  viewMode: ViewMode;
}

/**
 * EditorActions 组件 Emits
 */
export interface EditorActionsEmits {
  /** 大纲按钮点击事件 */
  (e: 'outline-click'): void;
  /** 阅读模式按钮点击事件 */
  (e: 'reading-mode-click'): void;
  /** 编辑模式按钮点击事件 */
  (e: 'editing-mode-click'): void;
}

/**
 * EditorStatusBar 组件 Props
 */
export interface EditorStatusBarProps {
  /** 词数统计 */
  wordCount: number;
  /** 字符数统计 */
  charCount: number;
  /** 当前视图模式 */
  viewMode: ViewMode;
  /** 是否显示视图切换按钮 */
  showViewToggle?: boolean;
}

/**
 * EditorStatusBar 组件 Emits
 */
export interface EditorStatusBarEmits {
  /** 视图模式变化事件 */
  (e: 'view-mode-change', mode: ViewMode): void;
}

/**
 * OutlinePanel 组件 Props
 */
export interface OutlinePanelProps {
  /** 是否显示大纲面板 */
  show: boolean;
  /** 标题列表 */
  headings: Heading[];
  /** 是否为暗色模式 */
  dark?: boolean;
  /** 当前光标位置 */
  currentPos?: number;
  /** 当前可见的标题索引 */
  visibleHeadingIndex?: number;
}

/**
 * OutlinePanel 组件 Emits
 */
export interface OutlinePanelEmits {
  /** 关闭大纲面板事件 */
  (e: 'close'): void;
  /** 标题点击事件 */
  (e: 'heading-click', pos: number): void;
  /** 更新可见标题事件 */
  (e: 'update-visible-heading'): void;
}

/**
 * SourceEditor 组件 Props
 */
export interface SourceEditorProps {
  /** Markdown 源码内容 */
  content: string;
  /** 是否为暗色模式 */
  dark?: boolean;
}

/**
 * SourceEditor 组件 Emits
 */
export interface SourceEditorEmits {
  /** 内容更新事件 */
  (e: 'update:content', value: string): void;
  /** 右键菜单事件 */
  (e: 'contextmenu', event: MouseEvent): void;
  /** 滚动事件 */
  (e: 'scroll'): void;
}

/**
 * SourceEditor 暴露的方法
 */
export interface SourceEditorExpose {
  /** 获取 textarea 元素 */
  getTextarea: () => HTMLTextAreaElement | null;
  /** 滚动到指定行 */
  scrollToLine: (lineNumber: number) => void;
}
