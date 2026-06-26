// Markdown 文件系统模块

pub mod cache_manager;
pub mod commands;
pub mod file_ops;
pub mod file_system_manager;
pub mod index_optimized; // 优化的搜索索引
pub mod metadata;
pub mod watcher;
pub mod workspace;
pub mod workspace_manager;

pub use metadata::*;
pub use watcher::FileWatcher;
// 使用优化版本的索引管理器
pub use index_optimized::OptimizedIndexManager as IndexManager;
// 搜索命令在 index_optimized.rs 中定义，通过 commands 模块导出
pub use cache_manager::CacheManager;
pub use commands::*;
pub use workspace_manager::WorkspaceManager;
