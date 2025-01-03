interface ContentType {
  id: string | number;
  title: string;
  content: string;
  type?: 'app' | 'text' | 'bookmark';
  category_id?: number;
  created_at?: string;
  category_name?: string;
}

interface AppInfo {
  app_name: string;
  app_path: string;
}

interface BookmarkInfo {
  title: string;
  url: string;
}

interface ConfigurationStore {
  id: string;
  data: ContentType[];
  apps: ContentType[];
  bookmarks: ContentType[];
  contents: ContentType[];
  categories: CategoryType[];
  editCategoryId: string;
  categorySort: 'asc' | 'desc';
}
