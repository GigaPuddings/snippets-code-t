use crate::json_config;
use crate::APP;
use std::fs;
use std::io::Read;
use std::path::PathBuf;
use tauri::Manager;
use tauri_plugin_dialog::DialogExt;

// ============= 数据库连接管理器 =============

// 数据库连接管理器 - 统一管理数据库连接并设置优化参数
pub struct DbConnectionManager;

impl DbConnectionManager {
    // 获取数据库连接并统一设置优化参数
    pub fn get() -> Result<rusqlite::Connection, rusqlite::Error> {
        let app = APP.get().ok_or_else(|| {
            rusqlite::Error::InvalidPath("APP 未初始化".into())
        })?;
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

// 获取数据库路径（使用 JSON 配置系统）
pub fn get_database_path(app_handle: &tauri::AppHandle) -> PathBuf {
    json_config::get_data_dir(app_handle).join("snippets.db")
}

// 获取数据库路径字符串
pub fn get_database_path_str(app_handle: &tauri::AppHandle) -> String {
    get_database_path(app_handle).to_str().unwrap().to_string()
}

// ============= Tauri 命令函数 =============

#[tauri::command]
pub fn get_db_path() -> String {
    match APP.get() {
        Some(app) => get_database_path_str(app),
        None => String::new(),
    }
}

// 获取数据目录信息（用于设置界面显示）
#[tauri::command]
pub fn get_data_dir_info(app_handle: tauri::AppHandle) -> serde_json::Value {
    let data_dir = json_config::get_data_dir(&app_handle);
    let db_path = data_dir.join("snippets.db");
    
    // 检查路径来源
    let path_config = json_config::read_path_config(&app_handle);
    let source = if path_config.data_dir.is_some() {
        "custom" // 用户自定义
    } else {
        "default" // 默认位置
    };
    
    serde_json::json!({
        "path": data_dir.to_str().unwrap_or(""),
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
            #[allow(unreachable_code)]
            Ok(())
        }
        None => Err("Restore cancelled".to_string()),
    }
}

#[tauri::command]
pub async fn set_custom_db_path(app_handle: tauri::AppHandle) -> Result<String, String> {
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
            let new_data_dir = folder_pathbuf.join("snippets-code");
            let new_db_path = new_data_dir.join("snippets.db");
            let old_db_path = get_database_path(&app_handle);
            
            // 确保新目录存在
            if !new_data_dir.exists() {
                fs::create_dir_all(&new_data_dir)
                    .map_err(|e| format!("创建目录失败: {}", e))?;
            }
            
            // 如果旧数据库存在，复制到新位置
            if old_db_path.exists() {
                fs::copy(&old_db_path, &new_db_path)
                    .map_err(|e| format!("迁移数据库失败: {}", e))?;
            }
            
            // 保存新路径到 path.json
            let path_config = json_config::PathConfig {
                data_dir: Some(new_data_dir.to_str().unwrap().to_string()),
            };
            json_config::write_path_config(&app_handle, &path_config)?;
            
            // 重启应用
            app_handle.restart();
            #[allow(unreachable_code)]
            Ok(new_data_dir.to_str().unwrap().to_string())
        }
        None => Err("操作已取消".to_string()),
    }
}

// ============= 首次启动向导 =============

// 检查是否已完成首次设置（内部调用）
pub fn is_setup_completed_internal(app_handle: &tauri::AppHandle) -> bool {
    // 检查 app.json 是否存在
    let app_config_path = json_config::get_app_config_file(app_handle);
    if !app_config_path.exists() {
        return false;
    }
    
    // 读取 setup_completed 配置
    json_config::get_app_config_value(app_handle, "setup_completed").unwrap_or(false)
}

// 检查是否已完成首次设置
#[tauri::command]
pub fn is_setup_completed(app_handle: tauri::AppHandle) -> bool {
    is_setup_completed_internal(&app_handle)
}

// 标记首次设置已完成
#[tauri::command]
pub fn set_setup_completed(app_handle: tauri::AppHandle) {
    let _ = json_config::set_app_config_value(&app_handle, "setup_completed", true);
    // 重建托盘菜单（完整菜单）
    let _ = crate::tray::recreate_tray_menu(&app_handle);
}

// ============= 进度窗口显示标记 =============

// 设置重启后显示进度窗口标记
pub fn set_show_progress_on_restart(app_handle: &tauri::AppHandle) {
    let _ = json_config::set_app_config_value(app_handle, "show_progress_on_restart", true);
}

// 消费进度窗口标记（读取后清除）
pub fn consume_show_progress_flag(app_handle: &tauri::AppHandle) -> bool {
    let should_show: bool = json_config::get_app_config_value(app_handle, "show_progress_on_restart")
        .unwrap_or(false);
    
    if should_show {
        // 清除标记
        let _ = json_config::set_app_config_value(app_handle, "show_progress_on_restart", false);
    }
    
    should_show
}

// 验证目录是否有写入权限
fn verify_write_permission(dir: &std::path::Path) -> Result<(), String> {
    // 创建一个临时测试文件来验证写入权限
    let test_file = dir.join(".write_test_snippets");
    
    // 尝试创建并写入测试文件
    match fs::File::create(&test_file) {
        Ok(mut file) => {
            use std::io::Write;
            // 尝试写入一些数据
            if let Err(e) = file.write_all(b"test") {
                let _ = fs::remove_file(&test_file);
                return Err(format!("目录没有写入权限: {}", e));
            }
            // 清理测试文件
            let _ = fs::remove_file(&test_file);
            Ok(())
        }
        Err(e) => {
            // 检查是否是权限问题
            if e.kind() == std::io::ErrorKind::PermissionDenied {
                Err("目录没有写入权限，请选择其他位置或以管理员身份运行".to_string())
            } else {
                Err(format!("无法验证目录权限: {}", e))
            }
        }
    }
}

// 检查路径是否在受保护的系统目录中
fn is_protected_path(path: &std::path::Path) -> bool {
    let path_str = path.to_string_lossy().to_lowercase();
    
    // 只拦截直接选择这些系统目录本身，不拦截其子目录
    // 例如：拦截 "C:\Windows" 但允许 "C:\Windows\MyApp"（虽然写入权限测试会失败）
    let protected_dirs = [
        "c:\\program files",
        "c:\\program files (x86)",
        "d:\\program files",
        "d:\\program files (x86)",
        "e:\\program files",
        "e:\\program files (x86)",
        "f:\\program files",
        "f:\\program files (x86)",
        "c:\\windows",
        "c:\\programdata",
    ];
    
    // 检查是否完全匹配这些目录（不包括子目录）
    for protected in &protected_dirs {
        // 完全匹配或者后面只跟着路径分隔符
        if path_str == *protected || path_str == format!("{}\\", protected) {
            return true;
        }
    }
    
    false
}

// 从设置向导保存数据目录
#[tauri::command]
pub fn set_data_dir_from_setup(app_handle: tauri::AppHandle, path: String) -> Result<String, String> {
    let mut data_dir = PathBuf::from(&path);
    
    log::info!("📁 设置向导：设置数据目录 = {}", path);
    
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
    }
    
    // 检查是否在受保护的系统目录中
    if is_protected_path(&data_dir) {
        return Err("不能选择系统保护目录（如 Program Files），请选择其他位置".to_string());
    }
    
    // 确保新目录存在
    if !data_dir.exists() {
        std::fs::create_dir_all(&data_dir)
            .map_err(|e| format!("创建目录失败: {}。请检查是否有权限或选择其他位置", e))?;
    }
    
    // 验证目录写入权限
    verify_write_permission(&data_dir)?;
    
    // 如果不是默认路径，删除旧的默认目录
    if !is_default_path && default_data_dir.exists() {
        log::info!("删除旧的默认数据目录: {:?}", default_data_dir);
        let _ = std::fs::remove_dir_all(&default_data_dir);
    }
    
    let final_path = data_dir.to_str().unwrap().to_string();
    
    // 保存到 path.json
    let path_config = json_config::PathConfig {
        data_dir: if is_default_path {
            None // 默认路径不需要保存
        } else {
            Some(final_path.clone())
        },
    };
    log::info!("💾 保存数据目录到 path.json");
    json_config::write_path_config(&app_handle, &path_config)?;
    
    // 初始化数据库（创建所有表）
    use crate::db::init_db;
    init_db().map_err(|e| format!("初始化数据库失败: {}", e))?;
    
    // 在新的数据目录创建默认的 app.json
    log::info!("📝 在新数据目录创建 .snippets-code/app.json");
    let default_app_config = json_config::AppConfig::default();
    json_config::write_app_config(&app_handle, &default_app_config)?;
    
    log::info!("✅ 数据目录设置完成: {}", final_path);
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

// 优化数据库（VACUUM 和 ANALYZE）
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

// 优化数据库（Tauri 命令）
#[tauri::command]
pub fn optimize_database_cmd() -> Result<String, String> {
    log::info!("🔧 开始优化数据库...");

    match optimize_database() {
        Ok(_) => {
            log::info!("✅ 数据库优化完成");
            Ok("数据库优化完成".to_string())
        }
        Err(e) => {
            log::error!("❌ 数据库优化失败: {}", e);
            Err(format!("数据库优化失败: {}", e))
        }
    }
}
