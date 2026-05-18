// 数据库模块 - 统一管理所有数据库相关操作
mod connection;
mod entity;
// mod fragment; // 已迁移到基于文件系统的 Markdown 存储
mod alarm;
mod apps;
mod bookmarks;
mod desktop_files;
mod icon_cache;
mod init;
mod search_engines;
mod search_history;
mod settings;

// 重新导出连接管理器
pub use connection::DbConnectionManager;

// 重新导出初始化函数
pub use init::init_db;
pub use init::{clear_plugin_storage, ensure_plugin_storage, migrate_remove_fragment_tables};

// 注意：片段相关函数已迁移到基于文件系统的 Markdown 存储
// 请使用 markdown 模块中的相关函数
// pub use fragment::{get_categories, add_category, edit_category, delete_category, get_uncategorized_id};
// pub use fragment::{get_fragment_list, add_fragment, delete_fragment, edit_fragment, get_fragment_content, search_fragment_content};

// 重新导出应用相关函数
pub use apps::{add_app, delete_app, get_apps, update_app};
pub use apps::{
    clear_apps, count_apps, get_all_apps, insert_apps, update_app_icon, update_app_icon_silent,
};

// 重新导出书签相关函数
pub use bookmarks::{add_bookmark, delete_bookmark, get_bookmarks, update_bookmark};
pub use bookmarks::{
    clear_bookmarks, count_bookmarks, get_all_bookmarks, insert_bookmarks, update_bookmark_icon,
    update_bookmark_icon_silent,
};

// 重新导出搜索引擎相关函数
pub use search_engines::{get_all_search_engines, replace_all_search_engines};

// 重新导出提醒卡片相关函数
pub use alarm::{add_or_update_alarm_card, delete_alarm_card_by_id, get_all_alarm_cards};

// 重新导出搜索历史相关函数
// pub use search_history::cleanup_old_search_history;

// 重新导出图标缓存相关函数
pub use desktop_files::{
    clear_desktop_file_cache, delete_desktop_file_cache_by_ids, load_all_desktop_file_cache,
    upsert_desktop_file_cache, DesktopFileCacheRecord,
};
pub use icon_cache::{
    delete_icon_from_cache, get_icon_from_cache, insert_icon_to_cache, load_all_icon_cache,
};

// 重新导出命令函数
pub use connection::{
    backup_database, get_data_dir_info, get_db_path, optimize_database, optimize_database_cmd,
    restore_database, set_custom_db_path,
};
pub use connection::{consume_show_progress_kind, set_show_progress_on_restart_with_kind};
pub use connection::{
    is_setup_completed, is_setup_completed_internal, set_data_dir_from_setup, set_setup_completed,
};
pub use search_history::{add_search_history, get_search_history};

// 重新导出应用设置相关函数
pub use settings::{get_auto_hide_on_blur, set_auto_hide_on_blur, set_auto_start_setting};
