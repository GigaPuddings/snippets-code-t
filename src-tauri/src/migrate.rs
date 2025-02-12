// use tauri_plugin_sql::{Migration, MigrationKind};

// pub fn get_migrate() -> Vec<Migration> {
//     let migrations = vec![
//         // Define your migrations here
//         Migration {
//             version: 1,
//             description: "create_categories_table",
//             sql: "CREATE TABLE IF NOT EXISTS categories (
//                 id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//                 name TEXT NOT NULL,
//                 created_at TEXT NOT NULL
//             );",
//             kind: MigrationKind::Up,
//         },
//         Migration {
//             version: 2,
//             description: "create_contents_table",
//             sql: "CREATE TABLE IF NOT EXISTS contents (
//                 id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
//                 title TEXT NOT NULL,
//                 content TEXT NOT NULL,
//                 category_id INTEGER,
//                 created_at TEXT NOT NULL
//             );",
//             kind: MigrationKind::Up,
//         },
//     ];
//     migrations
// }
