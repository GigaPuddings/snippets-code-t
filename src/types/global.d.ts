declare global {
  // 搜索结果的类型
  type TabType = 'text' | 'app' | 'bookmark';

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
    summarize: TabType;
    category_id?: number;
    created_at?: string;
    category_name?: string;
  };

  // 状态类型
  interface StoreState {
    data: ContentType[];
    id: string | number;
    apps: ContentType[];
    bookmarks: ContentType[];
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
}

export {};
