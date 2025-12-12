use crate::config::{get_value, set_value, DB_PATH_KEY};
use crate::APP;
use std::fs;
use std::io::Read;
use std::path::PathBuf;
use tauri::Manager;
use tauri_plugin_dialog::DialogExt;
use winreg::enums::*;
use winreg::RegKey;

// ============= 数据库连接管理器 =============

/// 数据库连接管理器 - 统一管理数据库连接并设置优化参数
pub struct DbConnectionManager;

impl DbConnectionManager {
    /// 获取数据库连接并统一设置优化参数
    pub fn get() -> Result<rusqlite::Connection, rusqlite::Error> {
        let app = APP.get().unwrap();
        let db_path = get_database_path(app);
        let conn = rusqlite::Connection::open(db_path)?;
        
        // 统一设置数据库优化参数
        // WAL模式：提升并发性能（持久化配置，只需设置一次但重复设置无害）
        let _ = conn.execute("PRAGMA journal_mode=WAL", []);
        // 降低磁盘同步频率：提升写入性能
        let _ = conn.execute("PRAGMA synchronous=NORMAL", []);
        // 增加缓存大小：提升查询性能
        let _ = conn.execute("PRAGMA cache_size=10000", []);
        // 临时数据存储在内存中：提升临时表性能
        let _ = conn.execute("PRAGMA temp_store=memory", []);
        
        Ok(conn)
    }
}

// ============= 数据库路径管理 =============

/// 注册表键名（与 installer.nsh 保持一致）
const REG_KEY: &str = "Software\\snippets-code";
const REG_VALUE: &str = "DataDirectory";

/// 从注册表读取安装时设置的数据目录
fn get_data_dir_from_registry() -> Option<PathBuf> {
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    if let Ok(key) = hkcu.open_subkey(REG_KEY) {
        if let Ok(path_str) = key.get_value::<String, _>(REG_VALUE) {
            if !path_str.is_empty() {
                return Some(PathBuf::from(path_str));
            }
        }
    }
    None
}

/// 获取数据库路径（自动创建父目录）
/// 优先级：1. 运行时自定义路径 > 2. 安装时注册表路径 > 3. 默认 app_data_dir
pub fn get_database_path(app_handle: &tauri::AppHandle) -> PathBuf {
    // 1. 优先使用运行时自定义路径（用户在设置中修改的）
    if let Some(custom_path) = get_value(app_handle, DB_PATH_KEY) {
        if let Some(path_str) = custom_path.as_str() {
            let path = PathBuf::from(path_str);
            // 确保父目录存在
            if let Some(parent) = path.parent() {
                if !parent.exists() {
                    let _ = std::fs::create_dir_all(parent);
                }
            }
            return path;
        }
    }
    
    // 2. 尝试读取安装时设置的注册表路径
    if let Some(reg_data_dir) = get_data_dir_from_registry() {
        let db_path = reg_data_dir.join("snippets.db");
        // 确保目录存在
        if !reg_data_dir.exists() {
            let _ = std::fs::create_dir_all(&reg_data_dir);
        }
        return db_path;
    }
    
    // 3. 默认使用 app_data_dir
    let default_path = app_handle
        .path()
        .app_data_dir()
        .unwrap()
        .join("snippets.db");
    
    // 确保父目录存在
    if let Some(parent) = default_path.parent() {
        if !parent.exists() {
            let _ = std::fs::create_dir_all(parent);
        }
    }
    
    default_path
}

/// 获取数据库路径字符串
pub fn get_database_path_str(app_handle: &tauri::AppHandle) -> String {
    get_database_path(app_handle).to_str().unwrap().to_string()
}

// ============= Tauri 命令函数 =============

#[tauri::command]
pub fn get_db_path() -> String {
    let app = APP.get().unwrap();
    get_database_path_str(app)
}

/// 获取数据目录信息（用于设置界面显示）
#[tauri::command]
pub fn get_data_dir_info(app_handle: tauri::AppHandle) -> serde_json::Value {
    let db_path = get_database_path(&app_handle);
    let data_dir = db_path.parent().map(|p| p.to_str().unwrap_or("")).unwrap_or("");
    
    // 检查路径来源
    let source = if get_value(&app_handle, DB_PATH_KEY).is_some() {
        "runtime" // 运行时自定义
    } else if get_data_dir_from_registry().is_some() {
        "installer" // 安装时设置
    } else {
        "default" // 默认位置
    };
    
    serde_json::json!({
        "path": data_dir,
        "dbPath": db_path.to_str().unwrap_or(""),
        "source": source
    })
}

#[tauri::command]
pub async fn backup_database(app_handle: tauri::AppHandle, format: String) -> Result<(), String> {
    let source_path = get_database_path(&app_handle);
    
    // 使用对话框选择保存位置
    let file_path = app_handle
        .dialog()
        .file()
        .set_title("选择备份保存位置")
        .set_file_name(format!("snippets_backup_{}.db", generate_backup_suffix(&format)))
        .blocking_save_file();
    
    match file_path {
        Some(path) => {
            // 将FilePath转换为PathBuf
            let target_path = PathBuf::from(path.as_path().unwrap());
            fs::copy(&source_path, &target_path).map_err(|e| format!("备份失败: {}", e))?;
            Ok(())
        }
        None => Err("Backup cancelled".to_string()),
    }
}

#[tauri::command]
pub async fn restore_database(app_handle: tauri::AppHandle) -> Result<(), String> {
    let target_path = get_database_path(&app_handle);
    
    // 使用对话框选择要恢复的文件
    let file_path = app_handle
        .dialog()
        .file()
        .set_title("选择要恢复的数据库文件")
        .add_filter("Database", &["db"])
        .blocking_pick_file();
    
    match file_path {
        Some(path) => {
            // 将FilePath转换为PathBuf
            let source_path_buf = PathBuf::from(path.as_path().unwrap());
            
            // 验证文件是否为有效的 SQLite 数据库
            let mut file = fs::File::open(&source_path_buf).map_err(|e| format!("打开文件失败: {}", e))?;
            let mut header = [0u8; 16];
            file.read_exact(&mut header).map_err(|e| format!("读取文件失败: {}", e))?;
            
            if &header != b"SQLite format 3\0" {
                return Err("选择的文件不是有效的 SQLite 数据库".to_string());
            }
            
            fs::copy(&source_path_buf, &target_path).map_err(|e| format!("恢复失败: {}", e))?;
            
            // 重启应用以加载新数据库
            app_handle.restart();
        }
        None => Err("Restore cancelled".to_string()),
    }
}

#[tauri::command]
pub async fn set_custom_db_path(app_handle: tauri::AppHandle) -> Result<String, String> {
    use crate::config::set_value;
    
    // 使用对话框选择文件夹
    let folder_path = app_handle
        .dialog()
        .file()
        .set_title("选择数据库存储位置")
        .set_directory(std::env::current_dir().unwrap_or_default())
        .blocking_pick_folder();
    
    match folder_path {
        Some(path) => {
            // 将FilePath转换为PathBuf
            let folder_pathbuf = PathBuf::from(path.as_path().unwrap());
            let new_db_path = folder_pathbuf.join("snippets.db");
            let old_db_path = get_database_path(&app_handle);
            
            // 如果旧数据库存在，复制到新位置
            if old_db_path.exists() {
                fs::copy(&old_db_path, &new_db_path)
                    .map_err(|e| format!("迁移数据库失败: {}", e))?;
            }
            
            // 保存新路径到配置
            let new_path_str = new_db_path.to_str().unwrap().to_string();
            set_value(&app_handle, DB_PATH_KEY, new_path_str.clone());
            
            // 重启应用
            app_handle.restart();
        }
        None => Err("操作已取消".to_string()),
    }
}

// ============= 首次启动向导 =============

const SETUP_COMPLETED_KEY: &str = "setup_completed";

/// 检查是否已完成首次设置（内部调用）
pub fn is_setup_completed_internal(app_handle: &tauri::AppHandle) -> bool {
    get_value(app_handle, SETUP_COMPLETED_KEY)
        .and_then(|v| v.as_bool())
        .unwrap_or(false)
}

/// 检查是否已完成首次设置
#[tauri::command]
pub fn is_setup_completed(app_handle: tauri::AppHandle) -> bool {
    is_setup_completed_internal(&app_handle)
}

/// 标记首次设置已完成
#[tauri::command]
pub fn set_setup_completed(app_handle: tauri::AppHandle) {
    set_value(&app_handle, SETUP_COMPLETED_KEY, true);
}

// ============= 进度窗口显示标记 =============

const SHOW_PROGRESS_KEY: &str = "show_progress_on_restart";

/// 设置重启后显示进度窗口标记
pub fn set_show_progress_on_restart(app_handle: &tauri::AppHandle) {
    set_value(app_handle, SHOW_PROGRESS_KEY, true);
}

/// 消费进度窗口标记（读取后清除）
pub fn consume_show_progress_flag(app_handle: &tauri::AppHandle) -> bool {
    let should_show = get_value(app_handle, SHOW_PROGRESS_KEY)
        .and_then(|v| v.as_bool())
        .unwrap_or(false);
    
    if should_show {
        // 清除标记
        set_value(app_handle, SHOW_PROGRESS_KEY, false);
    }
    
    should_show
}

/// 从设置向导保存数据目录
#[tauri::command]
pub fn set_data_dir_from_setup(app_handle: tauri::AppHandle, path: String) -> Result<String, String> {
    let mut data_dir = PathBuf::from(&path);
    
    // 获取应用默认数据目录
    let default_data_dir = app_handle
        .path()
        .app_data_dir()
        .map_err(|e| format!("获取默认数据目录失败: {}", e))?;
    
    // 检查是否是应用默认数据目录或其子目录
    let is_default_path = data_dir.starts_with(&default_data_dir);
    
    // 如果不是默认路径，自动添加 snippets-code 子文件夹
    if !is_default_path {
        // 检查路径是否已经以 snippets-code 结尾
        let ends_with_app_folder = data_dir
            .file_name()
            .map(|name| name.to_string_lossy().to_lowercase())
            .map(|name| name == "snippets-code" || name == "snippets code")
            .unwrap_or(false);
        
        if !ends_with_app_folder {
            data_dir = data_dir.join("snippets-code");
        }
        
        // 删除旧的默认目录（首次安装向导时没有数据）
        if default_data_dir.exists() {
            log::info!("删除旧的默认数据目录: {:?}", default_data_dir);
            let _ = std::fs::remove_dir_all(&default_data_dir);
        }
    }
    
    // 确保新目录存在
    if !data_dir.exists() {
        std::fs::create_dir_all(&data_dir)
            .map_err(|e| format!("创建目录失败: {}", e))?;
    }
    
    let final_path = data_dir.to_str().unwrap().to_string();
    let db_path = data_dir.join("snippets.db");
    let db_path_str = db_path.to_str().unwrap().to_string();
    
    // 保存到配置
    set_value(&app_handle, DB_PATH_KEY, db_path_str);
    
    // 同时更新注册表（Windows）
    #[cfg(target_os = "windows")]
    {
        let hkcu = RegKey::predef(HKEY_CURRENT_USER);
        if let Ok((key, _)) = hkcu.create_subkey(REG_KEY) {
            let _ = key.set_value(REG_VALUE, &final_path);
        }
    }
    
    // 返回实际使用的路径
    Ok(final_path)
}

// ============= 辅助函数 =============

fn generate_backup_suffix(format: &str) -> String {
    use chrono::Local;
    
    let now = Local::now();
    match format {
        "A" => now.format("%Y%m%d").to_string(),
        "B" => now.format("%H%M%S").to_string(),
        "C" => now.format("%Y%m%d_%H%M%S").to_string(),
        _ => now.format("%Y%m%d_%H%M%S").to_string(),
    }
}

// ============= 数据库优化 =============

/// 优化数据库（VACUUM 和 ANALYZE）
pub fn optimize_database() -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    
    // log::info!("开始优化数据库...");
    
    // 收集统计信息以优化查询计划
    conn.execute("ANALYZE", [])?;
    
    // 如果数据库空间浪费较多，执行 VACUUM
    // 注意：VACUUM 可能耗时较长，建议在后台执行
    // conn.execute("VACUUM", [])?;
    
    // log::info!("数据库优化完成");
    Ok(())
}
