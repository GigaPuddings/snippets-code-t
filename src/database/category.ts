import { getDb } from '@/database/index';

// 获取所有分类
export function getCategories(
  fileSort: 'asc' | 'desc'
): Promise<CategoryType[]> {
  return new Promise((resolve) => {
    const db = getDb();
    let sql = `
      select * from categories
    `;
    if (fileSort === 'asc' || fileSort === 'desc') {
      sql += ` order by created_at ${fileSort}`;
    }
    db.then((db) => {
      db.select(sql, []).then((res) => {
        resolve(res as CategoryType[]);
      });
    });
  });
}

// 修改分类
export function editCategory(id: number | string, name: string): Promise<void> {
  return new Promise((resolve) => {
    const db = getDb();
    db.then((db) => {
      db.execute(`update categories set name = ? where id = ?`, [
        name,
        id
      ]).then(() => {
        resolve();
      });
    });
  });
}

// 新增分类
export function addCategory(): Promise<number> {
  return new Promise((resolve) => {
    const db = getDb();
    db.then((db) => {
      db.execute(
        `insert into categories (name, created_at) values ('未命名', datetime('now', 'localtime'))`,
        []
      ).then((res) => {
        resolve(res.lastInsertId as number);
      });
    });
  });
}

// 删除分类
export function deleteCategory(id: number | string): Promise<void> {
  return new Promise((resolve) => {
    const db = getDb();
    db.then((db) => {
      db.execute(`delete from categories where id = ?`, [id]).then(() => {
        db.execute(`delete from contents where category_id = ?`, [id]).then(
          () => {
            resolve();
          }
        );
      });
    });
  });
}
