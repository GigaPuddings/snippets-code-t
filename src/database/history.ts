import { getDb } from './index';

export interface SearchHistoryItem {
  id: string;
  usage_count: number;
  last_used_at: string;
}

/**
 * 添加或更新搜索历史记录
 * @param item
 */
export async function addSearchHistory(item: ContentType) {
  if (!item || !item.id) return;
  const db = await getDb();
  const now = new Date().toISOString();
  await db.execute(
    `
    INSERT INTO search_history (id, usage_count, last_used_at)
    VALUES ($1, 1, $2)
    ON CONFLICT(id) DO UPDATE SET
    usage_count = usage_count + 1,
    last_used_at = $2;
    `,
    [item.id, now]
  );
}

/**
 * 获取所有搜索历史记录
 * @returns
 */
export async function getSearchHistory(): Promise<SearchHistoryItem[]> {
  try {
    const db = await getDb();
    const result = await db.select<SearchHistoryItem[]>(
      'SELECT * FROM search_history'
    );
    return result;
  } catch (error) {
    console.error('获取搜索历史失败:', error);
    return [];
  }
}
