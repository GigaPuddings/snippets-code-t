declare global {
  // 分类类型
  type CategoryType = {
    id: string | number;
    name: string;
    created_at?: string;
  };

  // 片段类型枚举
  type FragmentType = 'code' | 'note';
  
  // 内容格式枚举
  type ContentFormat = 'plain' | 'markdown' | 'html';
  
  // 片段元数据接口
  interface FragmentMetadata {
    // 代码片段元数据
    language?: string;
    theme?: string;
    
    // 笔记元数据
    wordCount?: number;
    lastCursorPosition?: number;
    
    // 通用元数据
    createdAt?: string;
    updatedAt?: string;
    
    // 允许扩展
    [key: string]: any;
  }

  // 内容类型
  interface ContentType {
    id: string | number;
    title: string;
    content: string;
    summarize: SummarizeType;
    icon?: string;
    score?: number;
    category_id?: string | number;
    category_name?: string;
    created_at?: string;
    updated_at?: string;
    
    // 新增字段 - 可选，因为会有默认值
    type?: FragmentType;
    format?: ContentFormat;
    metadata?: FragmentMetadata | null;
    tags?: string[] | null;
  }

  interface SearchHistoryItem {
    id: string;
    usage_count: number;
    last_used_at: string;
  }

  // 状态类型
  interface StoreState {
    data: ContentType[];
    id: string | number;
    categories: CategoryType[];
    contents: ContentType[];
    editCategoryId: string | number;
    categorySort: 'asc' | 'desc';
    searchHotkey: string;
    configHotkey: string;
    translateHotkey: string;
    selectionTranslateHotkey: string;
    screenshotHotkey: string;
    darkModeHotkey: string;
    dbPath: string | null;
    dbBackup: string;
    theme: 'light' | 'dark' | 'auto';
    language: 'zh-CN' | 'en-US';
    autoStart: boolean;
    autoUpdateCheck: boolean;
    autoHideOnBlur: boolean;
  }

  // 添加搜索引擎配置类型
  interface SearchEngineConfig {
    id: string;
    keyword: string; // 搜索引擎关键词
    icon: string | undefined;
    name: string;
    url: string;
    enabled: boolean;
  }

  // 在适当的位置添加 'search' 类型
  type SummarizeType = 'text' | 'app' | 'bookmark' | 'search';

  // 代办提醒类型
  interface AlarmCard {
    id: string;
    time: string;
    title: string;
    weekdays: string[];
    reminder_time: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    time_left: string;
    alarm_type: 'Daily' | 'Weekly' | 'SpecificDate';
    specific_dates?: string[] | null;
  }

  // 搜索筛选条件接口
  interface SearchFilter {
    // 文本搜索
    text?: string;
    
    // 类型筛选
    type?: 'code' | 'note' | 'all';
    
    // 标签筛选
    tags?: string[];
    
    // 日期筛选 - 创建日期
    createdAfter?: Date;
    createdBefore?: Date;
    createdPreset?: 'today' | 'week' | 'month';
    
    // 日期筛选 - 更新日期
    updatedAfter?: Date;
    updatedBefore?: Date;
    updatedPreset?: 'today' | 'week' | 'month';
    
    // 排序
    sortBy?: 'created' | 'updated' | 'title';
    sortOrder?: 'asc' | 'desc';
  }

  // 筛选条件标签接口
  interface FilterTag {
    id: string;
    type: 'text' | 'type' | 'tag' | 'created' | 'updated' | 'sort';
    label: string;
    value: any;
  }
}

export {};
