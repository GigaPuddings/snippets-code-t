// use serde::{Deserialize, Serialize};


// #[derive(Debug, Serialize, Deserialize)]
// pub struct Category {
//     pub id: i64,
//     pub name: String,
//     pub created_at: String,
// }

// #[derive(Debug, Serialize, Deserialize)]
// pub struct Content {
//     pub id: i64,
//     pub title: String,
//     pub content: String,
//     pub category_id: Option<i64>,
//     pub created_at: String,
// }

// #[derive(Debug, Serialize, Deserialize)]
// pub struct ContentWithCategory {
//     pub id: i64,
//     pub title: String,
//     pub content: String,
//     pub category_id: Option<i64>,
//     pub created_at: String,
//     pub category_name: Option<String>,
// }

// // 检索内容
// pub async fn search_contents(db, search_word: &str) -> Result<Vec<Content>, Box<dyn std::error::Error>> {
//     let mut sql = "
//         select * from contents
//         where title like ?1
        
//         union
        
//         select c.* from contents c
//         join categories cat on c.category_id = cat.id
//         where cat.name like ?1
        
//         union
        
//         select * from contents 
//         where content like ?1
//     ".to_string();
    
//     let search_word = format!("%{}%", search_word);
//     let contents = db.select(sql, &[search_word]).await?;

//     Ok(contents)
// }

// // 查询所有分类
// pub async fn get_categories(db, sort: Option<&str>) -> Result<Vec<Category>, Box<dyn std::error::Error>> {
//     let mut sql = "select * from categories".to_string();
//     if let Some(sort) = sort {
//         if sort == "asc" || sort == "desc" {
//             sql += &format!(" order by created_at {}", sort);
//         }
//     } else {
//         sql += " order by id desc";
//     }

//     let categories = db.select(sql, []).await?;

//     Ok(categories)
// }

// // 新增分类
// pub async fn create_category(db, name: &str) -> Result<i64, Box<dyn std::error::Error>> {
//     db.execute(
//         "insert into categories (name, created_at) values (?1, datetime('now', 'localtime'))",
//         [name],
//     )
//     .map_err(|e| {
//         println!("创建分类失败：{}", e);
//         e
//     })?;

//     Ok(db.last_insert_rowid())
// }

// // 修改分类
// pub async fn update_category(db, id: i64, name: &str) -> Result<usize, Box<dyn std::error::Error>> {
//     db.execute(
//         "update categories set name = ?1 where id = ?2",
//         [name, &id.to_string()],
//     )
// }

// // 删除分类
// pub async fn delete_category(db, id: i64) -> Result<usize, Box<dyn std::error::Error>> {
//     db.execute("delete from categories where id = ?1", [&id.to_string()])?;
//     db.execute(
//         "delete from contents where category_id = ?1",
//         [&id.to_string()],
//     )
// }

// // 查询分类下的片段
// pub async fn get_contents(
//     db,
//     category_id: Option<i64>,
//     search_word: Option<&str>,
// ) -> Result<Vec<ContentWithCategory>, Box<dyn std::error::Error>> {
//     let mut sql = "
//         select 
//             contents.id,
//             contents.title,
//             contents.content,
//             contents.category_id,
//             contents.created_at,
//             categories.name as category_name
//         from contents
//         left join categories on contents.category_id = categories.id
//     "
//     .to_string();

//     let mut params = Vec::new();

//     if let Some(search_word) = search_word {
//         sql += " where contents.title like ?";
//         params.push(format!("%{}%", search_word));
//         sql += " order by contents.id desc";
//     } else if let Some(category_id) = category_id {
//         sql += " where contents.category_id = ?";
//         params.push(category_id.to_string());
//     }

//     sql += " order by contents.id desc";

//     let contents = db.select(sql, params.as_slice()).await?;

//     Ok(contents)
// }

// // 新增片段
// pub async fn create_content(db, title: &str, category_id: i64) -> Result<i64, Box<dyn std::error::Error>> {
//     db.execute(
//         "insert into contents (title, content, category_id, created_at) values (?1, '', ?2, datetime('now', 'localtime'))",
//         [title, &category_id.to_string()],
//     )
//     .map_err(|e| {
//         println!("创建片段失败：{}", e);
//         e
//     })?;

//     Ok(db.last_insert_rowid())
// }

// // 修改片段
// pub async fn update_content(
//     db,
//     id: i64,
//     title: &str,
//     content: &str,
//     category_id: i64,
// ) -> Result<usize, Box<dyn std::error::Error>> {
//     db.execute(
//         "update contents set title = ?1, content = ?2, category_id = ?3 where id = ?4",
//         [title, content, &category_id.to_string(), &id.to_string()],
//     )
// }

// // 删除片段
// pub async fn delete_content(db, id: i64) -> Result<usize, Box<dyn std::error::Error>> {
//     db.execute("delete from contents where id = ?1", [&id.to_string()])
// }

// // 按关键字搜索片段
// pub async fn search_contents_by_keyword(db, keyword: &str) -> Result<Vec<ContentWithCategory>, Box<dyn std::error::Error>> {
//     get_contents(db, None, Some(keyword)).await
// }

// // 获取指定分类下的所有片段
// pub async fn get_contents_by_category(db, category_id: i64) -> Result<Vec<ContentWithCategory>, Box<dyn std::error::Error>> {
//     get_contents(db, Some(category_id), None).await
// }

// // 创建新片段并关联到分类
// pub async fn create_content_with_category(db, title: &str, category_id: i64) -> Result<i64, Box<dyn std::error::Error>> {
//     create_content(db, title, category_id).await
// } 
