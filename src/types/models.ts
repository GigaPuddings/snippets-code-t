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
  /** 文件路径（桌面文件等） */
  file_path?: string;
  /** 摘要类型（可选） */
  summarize?: 'text' | 'app' | 'bookmark' | 'search' | 'code' | 'note' | 'file';
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

/**
 * Markdown 文件元数据
 */
export interface MarkdownFile {
  /** 唯一标识符 */
  id: string;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 所属分类 ID（后端提供） */
  categoryId: number;
  /** 所属分类名称（后端提供） */
  categoryName: string;
  /** 标签列表 */
  tags: string[];
  /** 创建时间 (ISO 8601) */
  created: string;
  /** 修改时间 (ISO 8601) */
  modified: string;
  /** 类型：code 或 note（与数据库保持一致） */
  type: 'code' | 'note';
  /** 编程语言（用于代码片段） */
  language?: string;
  /** 是否收藏 */
  favorite: boolean;
  /** 文件路径 */
  filePath: string;
}

/**
 * 迁移配置
 */
export interface MigrationConfig {
  /** 工作区根目录 */
  workspaceRoot: string;
  /** 是否备份数据库 */
  backupDatabase: boolean;
  /** 备份文件路径 */
  backupPath?: string;
}

/**
 * 迁移进度信息
 */
export interface MigrationProgress {
  /** 当前步骤 */
  step: string;
  /** 已处理数量 */
  processed: number;
  /** 总数量 */
  total: number;
  /** 当前文件名 */
  currentFile?: string;
}

/**
 * 迁移结果
 */
export interface MigrationResult {
  /** 是否成功 */
  success: boolean;
  /** 成功数量 */
  successCount: number;
  /** 失败数量 */
  failedCount: number;
  /** 错误信息 */
  errors: string[];
  /** 工作区路径 */
  workspacePath: string;
}

/**
 * 附件配置
 */
export interface AttachmentConfig {
  /** 附件路径模板 */
  pathTemplate: string;
  /** 文件名生成格式 */
  filenameFormat: 'snippets-code' | 'simple' | 'uuid';
}

/**
 * 附件信息
 */
export interface AttachmentInfo {
  /** 原始文件名 */
  originalName: string;
  /** 生成的文件名 */
  generatedName: string;
  /** 相对路径 */
  relativePath: string;
  /** 绝对路径 */
  absolutePath: string;
  /** 文件大小（字节） */
  size: number;
  /** MIME 类型 */
  mimeType: string;
}

/**
 * 应用配置
 */
export interface AppConfig {
  version: string;
  theme: string;
  language: string;
  autoStart: boolean;
  autoUpdateCheck: boolean;
  autoHideOnBlur: boolean;
  git: GitSettings;
}

/**
 * Git 同步设置
 */
export interface GitSettings {
  enabled: boolean;
  auto_sync: boolean;
  auto_sync_delay: number;
  pull_on_start: boolean;
  user_name: string;
  user_email: string;
  remote_url: string;
  token: string;
  last_sync_time?: string;
}

/**
 * Git 配置
 */
export interface GitConfig {
  user_name: string;
  user_email: string;
  remote_url: string;
  token: string;
}

/**
 * Pull 结果
 */
export interface PullResult {
  success: boolean;
  files_updated: number;
  has_conflicts: boolean;
  conflict_files: string[];
  message: string;
  untracked_files?: string[];
}

/**
 * Push 结果
 */
export interface PushResult {
  success: boolean;
  filesPushed: number;
  commitHash: string;
  message: string;
}

/**
 * Git 状态
 */
export interface GitStatus {
  isRepo: boolean;
  hasRemote: boolean;
  hasChanges: boolean;
  changedFiles: string[];
  branch: string;
}

/**
 * 冲突解决策略
 */
export type ConflictStrategy = 'KeepLocal' | 'KeepRemote';
