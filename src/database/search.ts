import { getDb } from '@/database/index.ts';

// 检索内容
export function searchContent(keyword: string): Promise<ContentType[]> {
  return new Promise((resolve) => {
    const db = getDb();
    db.then((db) => {
      db.select(
        `
          select * from contents
          where title like $1

          union

          select c.* FROM contents c
          join categories cat on c.category_id = cat.id
          where cat.name like $1

          union

          select * from contents
          where content like $1
        `,
        [`%${keyword}%`]
      ).then((res) => {
        resolve(res as ContentType[]);
      });
    });
  });
}
