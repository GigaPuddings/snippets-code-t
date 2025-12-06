// 数据库模块 - 统一管理所有数据库相关操作
mod connection;
mod entity;
mod fragment;
mod apps;
mod bookmarks;
mod search_engines;
mod alarm;
mod search_history;
mod icon_cache;
mod init;

// 重新导出连接管理器
pub use connection::DbConnectionManager;

// 重新导出初始化函数
pub use init::{init_db, init_db_async};

// 重新导出片段相关函数
pub use fragment::{get_categories, add_category, edit_category, delete_category};
pub use fragment::{get_fragment_list, add_fragment, delete_fragment, edit_fragment, get_fragment_content, search_fragment_content};

// 重新导出应用相关函数
pub use apps::{insert_apps, get_all_apps, update_app_icon, clear_apps, count_apps};
pub use apps::{add_app, update_app, delete_app, get_apps};

// 重新导出书签相关函数
pub use bookmarks::{insert_bookmarks, get_all_bookmarks, update_bookmark_icon, clear_bookmarks, count_bookmarks};
pub use bookmarks::{add_bookmark, update_bookmark, delete_bookmark, get_bookmarks};

// 重新导出搜索引擎相关函数
pub use search_engines::{get_all_search_engines, replace_all_search_engines};

// 重新导出提醒卡片相关函数
pub use alarm::{get_all_alarm_cards, add_or_update_alarm_card, delete_alarm_card_by_id};

// 重新导出搜索历史相关函数
pub use search_history::cleanup_old_search_history;

// 重新导出图标缓存相关函数
pub use icon_cache::{cleanup_old_icon_cache, load_all_icon_cache, insert_icon_to_cache};

// 重新导出命令函数
pub use connection::{get_db_path, get_data_dir_info, backup_database, restore_database, set_custom_db_path, optimize_database};
pub use connection::{is_setup_completed, is_setup_completed_internal, set_setup_completed, set_data_dir_from_setup};
pub use search_history::{add_search_history, get_search_history};
