declare global {
  // 分类类型
  type CategoryType = {
    id: string | number;
    name: string;
    created_at?: string;
  };

  // 内容类型
  interface ContentType {
    id: string | number;
    title: string;
    content: string;
    summarize: SummarizeType;
    icon?: string;
    score?: number;
    category_id?: number;
    category_name?: string;
    created_at?: string;
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
    dbPath: string | null;
    dbBackup: string;
    theme: 'light' | 'dark' | 'auto';
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
    specific_date?: string | null;
  }
}

export {};
