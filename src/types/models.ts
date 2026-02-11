/**
 * 核心数据模型类型定义
 */

/**
 * 内容类型（片段、应用、书签等的统一接口）
 * 用于搜索结果和列表展示
 */
export interface ContentType {
  /** 内容 ID */
  id: string | number;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 摘要类型（可选） */
  summarize?: 'text' | 'app' | 'bookmark' | 'search' | 'code' | 'note';
  /** 图标 */
  icon?: string;
  /** 评分 */
  score?: number;
  /** 片段类型（code 或 note） */
  type?: 'code' | 'note';
  /** 内容格式 */
  format?: 'plain' | 'markdown' | 'html';
  /** 所属分类 ID */
  category_id?: number | string;
  /** 所属分类名称 */
  category_name?: string;
  /** 标签数组 */
  tags?: string[] | null;
  /** 元数据 */
  metadata?: Record<string, unknown> | null;
  /** 创建时间 */
  created_at?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 使用次数 */
  usage_count?: number;
}

/**
 * 搜索模式类型
 */
export type SearchMode = 'search' | 'list' | 'tab';

/**
 * 搜索结果类型
 */
export interface SearchResult {
  /** 搜索结果列表 */
  items: ContentType[];
  /** 总数 */
  total: number;
  /** 搜索耗时（毫秒） */
  duration?: number;
}

/**
 * 编辑器模式
 */
export type EditorMode = 'wysiwyg' | 'source';

/**
 * 编辑器内容格式
 */
export type EditorFormat = 'plain' | 'markdown' | 'html';

/**
 * 翻译引擎类型
 */
export type TranslationEngine = 'google' | 'bing' | 'offline';

/**
 * 翻译请求参数
 */
export interface TranslationRequest {
  /** 要翻译的文本 */
  text: string;
  /** 源语言 */
  from?: string;
  /** 目标语言 */
  to: string;
  /** 翻译引擎 */
  engine?: TranslationEngine;
}

/**
 * 翻译结果
 */
export interface TranslationResult {
  /** 翻译后的文本 */
  translatedText: string;
  /** 源语言 */
  sourceLanguage?: string;
  /** 目标语言 */
  targetLanguage: string;
  /** 使用的翻译引擎 */
  engine: TranslationEngine;
}

/**
 * 截图标注类型
 */
export type AnnotationType = 'rectangle' | 'arrow' | 'pen' | 'mosaic' | 'text';

/**
 * 截图标注数据
 */
export interface AnnotationData {
  /** 标注类型 */
  type: AnnotationType;
  /** 标注 ID */
  id: string;
  /** 标注数据 */
  data: unknown;
}

/**
 * 主题模式
 */
export type ThemeMode = 'light' | 'dark' | 'auto';

/**
 * 语言类型
 */
export type Language = 'zh' | 'en';

/**
 * 同步状态
 */
export type SyncStatus = 'idle' | 'syncing' | 'success' | 'error';

/**
 * 同步结果
 */
export interface SyncResult {
  /** 同步状态 */
  status: SyncStatus;
  /** 同步消息 */
  message?: string;
  /** 同步时间 */
  timestamp: Date;
}
