// Markdown 文件系统模块
// 负责将数据库数据迁移到 Markdown 文件

pub mod metadata;
pub mod migration;
pub mod workspace;
pub mod file_ops;
pub mod file_system_manager;
pub mod watcher;
pub mod index_optimized;  // 优化的搜索索引
pub mod commands;
pub mod cache_manager;
pub mod workspace_manager;

pub use metadata::*;
pub use migration::{migrate_to_markdown, migrate_to_markdown_from_file};
pub use watcher::FileWatcher;
// 使用优化版本的索引管理器
pub use index_optimized::OptimizedIndexManager as IndexManager;
// 搜索命令在 index_optimized.rs 中定义，通过 commands 模块导出
pub use commands::*;
pub use cache_manager::CacheManager;
pub use workspace_manager::WorkspaceManager;
