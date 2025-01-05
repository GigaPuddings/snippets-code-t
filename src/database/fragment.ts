import { getDb } from './index.ts';

// 获取片段列表
export function getFragmentList(
  id?: number,
  searchVal: string = ''
): Promise<ContentType[]> {
  return new Promise((resolve) => {
    console.log('获取片段列表');

    const db = getDb();

    // 基础 SQL 查询语句，使用 JOIN 连接两个表
    let sql = `
      select contents.*, categories.name as category_name
      from contents
      left join categories on contents.category_id = categories.id
      where 1=1
    `;

    const params: any[] = [];

    // 如果提供了 category_id 则过滤某个分类下的内容
    if (id !== undefined) {
      sql += ` and contents.category_id = ?`;
      params.push(id);
    }

    // 如果用户提供了搜索关键词，则查询符合关键词的内容
    if (searchVal) {
      sql += ` and contents.title like ?`;
      params.push(`%${searchVal}%`);
    }

    // 最后按 ID 降序排列
    sql += ' order by contents.id desc';

    db.then((db) => {
      db.select(sql, params).then((res) => {
        resolve(res as ContentType[]);
      });
    });
  });
}

// 新增片段 没有categoryId时，默认新增到未分类
export function addFragment(categoryId: number): Promise<number> {
  return new Promise((resolve) => {
    console.log('新增片段');
    const db = getDb();
    db.then((db) => {
      db.execute(
        `insert into contents (title,content,category_id,created_at) values('未命名片段','',?,datetime('now', 'localtime'));`,
        [categoryId]
      ).then((res) => {
        resolve(res.lastInsertId!);
      });
    });
  });
}

// 删除片段
export function deleteFragment(id: number): Promise<void> {
  return new Promise((resolve) => {
    console.log('删除片段');
    const db = getDb();
    db.then((db) => {
      db.execute(`delete from contents where id = ?`, [id]).then(() => {
        resolve();
      });
    });
  });
}

// 编辑片段
export function editFragment(params: any): Promise<void> {
  return new Promise((resolve) => {
    console.log('编辑片段');
    const db = getDb();
    db.then((db) => {
      db.execute(
        `update contents set title= ?,content= ?,category_id= ? where id= ?`,
        [params.title, params.content, params.category_id, params.id]
      ).then(() => {
        resolve();
      });
    });
  });
}

// 获取片段内容
export function getFragmentContent(id: number): Promise<ContentType[]> {
  return new Promise((resolve) => {
    console.log('获取片段内容');
    const db = getDb();
    db.then((db) => {
      db.select(`select * from contents where id = ?`, [id]).then((res) => {
        resolve(res as ContentType[]);
      });
    });
  });
}
