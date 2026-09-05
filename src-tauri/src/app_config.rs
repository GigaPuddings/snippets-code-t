//! Compatibility facade for application configuration and plugin management.
//!
//! Configuration models and persistence stay independent from plugin services.
//! Package paths and manifests feed storage, runtime, backend, resource, and
//! installation modules.
//!
//! Command modules use glob re-exports because Tauri generates command-name and
//! IPC wrapper macros that must remain reachable through the original
//! `app_config` path.

mod backend;
mod commands;
mod download;
mod installation;
mod integrity;
mod model;
mod package_paths;
mod packages;
mod persistence;
mod plugin_manifest;
mod progress;
mod resources;
mod runtime;
mod storage;

pub use backend::*;
pub use commands::*;
pub use download::*;
pub use installation::*;
#[allow(unused_imports)]
pub use model::{
    AppConfig, EditorSettings, GitSettings, PluginRuntimeState, PluginStates, QuickSearchSettings,
};
pub use package_paths::*;
pub use packages::*;
pub use persistence::AppConfigManager;
pub use progress::*;
pub use resources::*;
pub use runtime::*;
pub use storage::*;
