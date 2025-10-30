import { useConfigurationStore } from '@/store';
import Database from '@tauri-apps/plugin-sql';

const store = useConfigurationStore();
let dbInstance: Database | null = null;

export const getDb = async () => {
  if (!dbInstance) {
    dbInstance = await Database.load(`sqlite:${store.dbPath}`);
    // 创建表结构
    await dbInstance.execute(`
      -- 设置数据库优化参数
      PRAGMA journal_mode=WAL;
      PRAGMA synchronous=NORMAL;
      PRAGMA cache_size=5000;
      PRAGMA temp_store=memory;

      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name TEXT NOT NULL,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS contents (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        category_id INTEGER,
        created_at TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS search_history (
        id TEXT PRIMARY KEY,
        usage_count INTEGER NOT NULL DEFAULT 1,
        last_used_at TEXT NOT NULL
      );

      -- 创建索引优化查询性能
      CREATE INDEX IF NOT EXISTS idx_contents_category ON contents(category_id);
      CREATE INDEX IF NOT EXISTS idx_contents_created ON contents(created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_contents_title ON contents(title);
      CREATE INDEX IF NOT EXISTS idx_categories_created ON categories(created_at DESC);
    `);
  }
  return dbInstance;
};

export * from './search';
