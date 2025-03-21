declare global {
  // 分类类型
  type CategoryType = {
    id: string | number;
    name: string;
    created_at?: string;
  };

  // 内容类型
  type ContentType = {
    id: string | number;
    title: string;
    content: string;
    summarize: SummarizeType;
    category_id?: number;
    created_at?: string;
    category_name?: string;
    icon?: string;
  };

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
    dbPath: string;
    dbBackup: string;
    theme: 'light' | 'dark' | 'auto';
    autoStart: boolean;
  }

  // 添加搜索引擎配置类型
  interface SearchEngineConfig {
    id: string;
    keyword: string; // 搜索引擎关键词
    icon: string;
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
  }
}

export {};
