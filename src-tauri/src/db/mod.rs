pub mod migrate;

// use serde::{Deserialize, Serialize};
// use tauri::State;

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

// // 搜索内容
// #[tauri::command]
// pub async fn search_contents(search_word: &str, pool: State<'_, sqlx::SqlitePool>) -> Result<Vec<Content>, String> {
//     let sql = r#"
//         SELECT * FROM contents
//         WHERE title LIKE ?1
//         UNION
//         SELECT c.* FROM contents c
//         JOIN categories cat ON c.category_id = cat.id
//         WHERE cat.name LIKE ?1
//         UNION
//         SELECT * FROM contents
//         WHERE content LIKE ?1
//     "#;

//     let search_pattern = format!("%{}%", search_word);
//     sqlx::query_as::<_, Content>(sql)
//         .bind(&search_pattern)
//         .fetch_all(&*pool)
//         .await
//         .map_err(|e| e.to_string())
// }

// // 查询所有分类
// #[tauri::command]
// pub async fn get_categories(file_sort: Option<&str>, pool: State<'_, sqlx::SqlitePool>) -> Result<Vec<Category>, String> {
//     let sql = match file_sort {
//         Some("asc") => "SELECT * FROM categories ORDER BY created_at ASC",
//         Some("desc") => "SELECT * FROM categories ORDER BY created_at DESC",
//         _ => "SELECT * FROM categories ORDER BY id DESC"
//     };

//     sqlx::query_as::<_, Category>(sql)
//         .fetch_all(&*pool)
//         .await
//         .map_err(|e| e.to_string())
// }

// // 查询分类下的片段
// #[tauri::command]
// pub async fn get_contents(
//     category_id: Option<i64>,
//     search_word: Option<String>,
//     pool: State<'_, sqlx::SqlitePool>
// ) -> Result<Vec<ContentWithCategory>, String> {
//     let mut sql = r#"
//         SELECT
//             contents.*,
//             categories.name as category_name
//         FROM contents
//         LEFT JOIN categories ON contents.category_id = categories.id
//     "#.to_string();

//     if let Some(search_word) = search_word {
//         sql.push_str(" WHERE contents.title LIKE ?");
//         let search_pattern = format!("%{}%", search_word);
//         sqlx::query_as::<_, ContentWithCategory>(&sql)
//             .bind(search_pattern)
//             .fetch_all(&*pool)
//             .await
//             .map_err(|e| e.to_string())
//     } else if let Some(category_id) = category_id {
//         sql.push_str(" WHERE contents.category_id = ?");
//         sqlx::query_as::<_, ContentWithCategory>(&sql)
//             .bind(category_id)
//             .fetch_all(&*pool)
//             .await
//             .map_err(|e| e.to_string())
//     } else {
//         sql.push_str(" ORDER BY contents.id DESC");
//         sqlx::query_as::<_, ContentWithCategory>(&sql)
//             .fetch_all(&*pool)
//             .await
//             .map_err(|e| e.to_string())
//     }
// }

// // 新增分类
// #[tauri::command]
// pub async fn create_category(name: String, pool: State<'_, sqlx::SqlitePool>) -> Result<i64, String> {
//     let result = sqlx::query!(
//         "INSERT INTO categories (name, created_at) VALUES (?, datetime('now', 'localtime'))",
//         name
//     )
//     .execute(&*pool)
//     .await
//     .map_err(|e| e.to_string())?;

//     Ok(result.last_insert_rowid())
// }

// // 修改分类
// #[tauri::command]
// pub async fn update_category(id: i64, name: String, pool: State<'_, sqlx::SqlitePool>) -> Result<(), String> {
//     sqlx::query!("UPDATE categories SET name = ? WHERE id = ?", name, id)
//         .execute(&*pool)
//         .await
//         .map_err(|e| e.to_string())?;
//     Ok(())
// }

// // 删除分类
// #[tauri::command]
// pub async fn delete_category(id: i64, pool: State<'_, sqlx::SqlitePool>) -> Result<(), String> {
//     let mut tx = pool.begin().await.map_err(|e| e.to_string())?;

//     // 删除分类下的所有内容
//     sqlx::query!("DELETE FROM contents WHERE category_id = ?", id)
//         .execute(&mut *tx)
//         .await
//         .map_err(|e| e.to_string())?;

//     // 删除分类
//     sqlx::query!("DELETE FROM categories WHERE id = ?", id)
//         .execute(&mut *tx)
//         .await
//         .map_err(|e| e.to_string())?;

//     tx.commit().await.map_err(|e| e.to_string())?;
//     Ok(())
// }

// // 新增片段
// #[tauri::command]
// pub async fn create_content(
//     title: String,
//     content: String,
//     category_id: Option<i64>,
//     pool: State<'_, sqlx::SqlitePool>
// ) -> Result<i64, String> {
//     let result = sqlx::query!(
//         "INSERT INTO contents (title, content, category_id, created_at) VALUES (?, ?, ?, datetime('now', 'localtime'))",
//         title,
//         content,
//         category_id
//     )
//     .execute(&*pool)
//     .await
//     .map_err(|e| e.to_string())?;

//     Ok(result.last_insert_rowid())
// }

// // 修改片段
// #[tauri::command]
// pub async fn update_content(
//     id: i64,
//     title: String,
//     content: String,
//     category_id: Option<i64>,
//     pool: State<'_, sqlx::SqlitePool>
// ) -> Result<(), String> {
//     sqlx::query!(
//         "UPDATE contents SET title = ?, content = ?, category_id = ? WHERE id = ?",
//         title,
//         content,
//         category_id,
//         id
//     )
//     .execute(&*pool)
//     .await
//     .map_err(|e| e.to_string())?;
//     Ok(())
// }

// // 删除片段
// #[tauri::command]
// pub async fn delete_content(id: i64, pool: State<'_, sqlx::SqlitePool>) -> Result<(), String> {
//     sqlx::query!("DELETE FROM contents WHERE id = ?", id)
//         .execute(&*pool)
//         .await
//         .map_err(|e| e.to_string())?;
//     Ok(())
// }
