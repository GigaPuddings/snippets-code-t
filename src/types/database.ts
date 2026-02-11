/**
 * 数据库模型类型定义
 */

/**
 * 片段类型（代码片段或笔记）
 */
export interface Fragment {
  /** 片段 ID */
  id: number;
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 类型：代码或笔记 */
  type: 'code' | 'note';
  /** 格式：纯文本、Markdown 或 HTML */
  format: 'plain' | 'markdown' | 'html';
  /** 所属分类 ID */
  category_id: number;
  /** 标签（逗号分隔） */
  tags?: string;
  /** 元数据（JSON 字符串） */
  metadata?: string;
  /** 创建时间 */
  created_at: string;
  /** 更新时间 */
  updated_at?: string;
}

/**
 * 片段元数据接口
 */
export interface FragmentMetadata {
  /** 编程语言（用于代码片段） */
  language?: string;
  /** 其他自定义字段 */
  [key: string]: unknown;
}

/**
 * 分类接口
 */
export interface Category {
  /** 分类 ID */
  id: number;
  /** 分类名称 */
  name: string;
  /** 创建时间 */
  created_at: string;
  /** 是否为系统分类 */
  is_system: boolean;
  /** 父分类 ID */
  parent_id?: number;
  /** 排序顺序 */
  order?: number;
}

/**
 * 应用接口
 */
export interface App {
  /** 应用 ID */
  id: number;
  /** 应用名称 */
  title: string;
  /** 应用路径或命令 */
  content: string;
  /** 应用图标（base64 或路径） */
  icon?: string;
  /** 使用次数 */
  usage_count: number;
  /** 创建时间 */
  created_at?: string;
}

/**
 * 书签接口
 */
export interface Bookmark {
  /** 书签 ID */
  id: number;
  /** 书签标题 */
  title: string;
  /** 书签 URL */
  content: string;
  /** 网站图标 */
  icon?: string;
  /** 使用次数 */
  usage_count: number;
  /** 创建时间 */
  created_at?: string;
}

/**
 * 提醒卡片接口
 */
export interface AlarmCard {
  /** 提醒 ID */
  id: number;
  /** 提醒时间 */
  time: string;
  /** 提醒标题 */
  title: string;
  /** 星期几（用于每周提醒） */
  weekdays?: string;
  /** 提醒类型：每日、每周或指定日期 */
  alarm_type: 'daily' | 'weekly' | 'specific';
  /** 指定日期（用于特定日期提醒） */
  specific_dates?: string;
  /** 创建时间 */
  created_at?: string;
}

/**
 * 搜索引擎配置接口
 */
export interface SearchEngine {
  /** 搜索引擎 ID */
  id: number;
  /** 搜索引擎名称 */
  name: string;
  /** 关键词（用于快速搜索） */
  keyword: string;
  /** 搜索 URL 模板 */
  url: string;
  /** 搜索引擎图标 */
  icon?: string;
  /** 是否启用 */
  enabled: boolean;
  /** 排序顺序 */
  order?: number;
}

/**
 * 搜索历史项接口
 */
export interface SearchHistoryItem {
  /** 搜索历史 ID */
  id: string;
  /** 使用次数 */
  usage_count: number;
  /** 最后使用时间 */
  last_used_at: string;
}

/**
 * 应用设置接口
 */
export interface AppSettings {
  /** 语言设置 */
  language: 'zh' | 'en';
  /** 主题设置 */
  theme: 'light' | 'dark' | 'auto';
  /** 快捷键配置 */
  hotkeys: HotkeyConfig;
  /** 失焦自动隐藏 */
  autoHideOnBlur: boolean;
  /** 其他设置 */
  [key: string]: unknown;
}

/**
 * 快捷键配置接口
 */
export interface HotkeyConfig {
  /** 搜索快捷键 */
  search: string;
  /** 翻译快捷键 */
  translate: string;
  /** 截图快捷键 */
  screenshot: string;
  /** 其他快捷键 */
  [key: string]: string;
}

/**
 * 用户设置接口
 */
export interface UserSettings {
  /** GitHub Personal Access Token */
  githubToken?: string;
  /** GitHub 仓库名称 */
  githubRepo?: string;
  /** 自动同步配置 */
  autoSync?: {
    /** 启动时恢复 */
    onStartup: boolean;
    /** 退出时备份 */
    onExit: boolean;
  };
}
