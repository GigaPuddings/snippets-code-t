declare global {
  type CategoryType = {
    id: string | number;
    name: string;
    created_at?: string;
  };
  type ContentType = {
    id: string | number;
    title: string;
    content: string;
    summarize?: 'app' | 'text' | 'bookmark';
    category_id?: number;
    created_at?: string;
    category_name?: string;
  };
  type AppInfo = {
    app_name: string;
    app_path: string;
  };

  interface StoreState {
    data: ContentType[];
    id: string | number;
    apps: ContentType[];
    bookmarks: ContentType[];
    categories: CategoryType[];
    contents: ContentType[];
    editCategoryId: string | number;
    categorySort: 'asc' | 'desc';
  }
}

export {};
