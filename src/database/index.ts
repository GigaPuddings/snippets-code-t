import { useConfigurationStore } from '@/store';
import Database from '@tauri-apps/plugin-sql';

const store = useConfigurationStore();
let dbInstance: Database | null = null;

export const getDb = async () => {
  if (!dbInstance) {
    dbInstance = await Database.load(`sqlite:${store.dbPath}`);
    // 创建表结构
    await dbInstance.execute(`
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
    `);
  }
  return dbInstance;
};

export * from './search';
