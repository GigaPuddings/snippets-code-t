import { invoke } from '@tauri-apps/api/core';
import Database from '@tauri-apps/plugin-sql';

let dbInstance: Database | null = null;
export const getDb = async () => {
  if (!dbInstance) {
    const dbPath = await invoke<string>('get_db_path');
    dbInstance = await Database.load(`sqlite:${dbPath}`);

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
    `);
  }
  return dbInstance;
};
