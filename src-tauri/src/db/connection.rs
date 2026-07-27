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
        let app = APP
            .get()
            .ok_or_else(|| rusqlite::Error::InvalidPath("APP 未初始化".into()))?;
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
        // 锁等待超时：缓解并发读写时偶发卡顿（单位：毫秒）
        let _ = conn.execute("PRAGMA busy_timeout=800", []);

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
    let recommended_path = json_config::get_default_data_dir(&app_handle);

    // 检查路径来源
    let path_config = json_config::read_path_config(&app_handle);
    let configured_path = path_config
        .data_dir
        .as_deref()
        .filter(|path| !path.trim().is_empty());
    let source = if configured_path
        .is_some_and(|path| !same_data_dir(std::path::Path::new(path), &recommended_path))
    {
        "custom" // 用户自定义
    } else {
        "default" // 默认位置
    };

    serde_json::json!({
        "path": data_dir.to_str().unwrap_or(""),
        "dbPath": db_path.to_str().unwrap_or(""),
        "source": source,
        "recommendedPath": recommended_path.to_str().unwrap_or("")
    })
}

fn backup_database_to_path(target_path: &std::path::Path) -> Result<(), String> {
    let source = DbConnectionManager::get().map_err(|e| format!("打开源数据库失败: {}", e))?;
    let mut target = rusqlite::Connection::open(target_path)
        .map_err(|e| format!("创建备份数据库失败: {}", e))?;
    let backup = rusqlite::backup::Backup::new(&source, &mut target)
        .map_err(|e| format!("初始化数据库备份失败: {}", e))?;
    backup
        .run_to_completion(64, std::time::Duration::from_millis(20), None)
        .map_err(|e| format!("备份数据库失败: {}", e))
}

fn restore_database_from_path(source_path: &std::path::Path) -> Result<(), String> {
    let source = rusqlite::Connection::open(source_path)
        .map_err(|e| format!("打开备份数据库失败: {}", e))?;
    let mut target =
        DbConnectionManager::get().map_err(|e| format!("打开目标数据库失败: {}", e))?;
    let backup = rusqlite::backup::Backup::new(&source, &mut target)
        .map_err(|e| format!("初始化数据库恢复失败: {}", e))?;
    backup
        .run_to_completion(64, std::time::Duration::from_millis(20), None)
        .map_err(|e| format!("恢复数据库失败: {}", e))
}

#[tauri::command]
pub async fn backup_database(app_handle: tauri::AppHandle, format: String) -> Result<(), String> {
    let source_path = get_database_path(&app_handle);

    // 使用对话框选择保存位置
    let file_path = app_handle
        .dialog()
        .file()
        .set_title("选择备份保存位置")
        .set_file_name(format!(
            "snippets_backup_{}.db",
            generate_backup_suffix(&format)
        ))
        .blocking_save_file();

    match file_path {
        Some(path) => {
            // 将FilePath转换为PathBuf
            let target_path = PathBuf::from(path.as_path().unwrap());
            if target_path == source_path {
                return Err("备份目标不能与当前数据库相同".to_string());
            }

            // snippets.db 使用 WAL；直接复制主文件可能漏掉尚未 checkpoint 的事务。
            // SQLite Online Backup API 会从一致性快照生成可独立恢复的目标数据库。
            backup_database_to_path(&target_path)?;
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
            if source_path_buf == target_path {
                return Err("恢复来源不能与当前数据库相同".to_string());
            }

            // 验证文件是否为有效的 SQLite 数据库
            let mut file =
                fs::File::open(&source_path_buf).map_err(|e| format!("打开文件失败: {}", e))?;
            let mut header = [0u8; 16];
            file.read_exact(&mut header)
                .map_err(|e| format!("读取文件失败: {}", e))?;

            if &header != b"SQLite format 3\0" {
                return Err("选择的文件不是有效的 SQLite 数据库".to_string());
            }

            // 当前数据库也可能处于 WAL 模式；通过 Backup API 写入现有连接，
            // 避免直接替换主文件后与旧 WAL/SHM 状态不一致。
            restore_database_from_path(&source_path_buf)?;

            // 重启应用以加载新数据库
            app_handle.restart();
            #[allow(unreachable_code)]
            Ok(())
        }
        None => Err("Restore cancelled".to_string()),
    }
}

fn copy_data_directory(source: &std::path::Path, target: &std::path::Path) -> Result<(), String> {
    fs::create_dir_all(target)
        .map_err(|e| format!("创建迁移目录失败 {}: {}", target.display(), e))?;
    for entry in
        fs::read_dir(source).map_err(|e| format!("读取数据目录失败 {}: {}", source.display(), e))?
    {
        let entry = entry.map_err(|e| format!("读取数据目录条目失败: {}", e))?;
        let source_path = entry.path();
        let name = entry.file_name();
        let name_text = name.to_string_lossy();
        if matches!(
            name_text.as_ref(),
            "snippets.db" | "snippets.db-wal" | "snippets.db-shm" | "path.json"
        ) {
            continue;
        }
        let target_path = target.join(&name);
        let file_type = entry
            .file_type()
            .map_err(|e| format!("读取数据条目类型失败 {}: {}", source_path.display(), e))?;
        if file_type.is_symlink() {
            log::warn!("跳过数据目录中的符号链接: {}", source_path.display());
        } else if file_type.is_dir() {
            copy_data_directory(&source_path, &target_path)?;
        } else if file_type.is_file() {
            fs::copy(&source_path, &target_path).map_err(|e| {
                format!(
                    "复制数据文件失败 {} -> {}: {}",
                    source_path.display(),
                    target_path.display(),
                    e
                )
            })?;
        }
    }
    Ok(())
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
            let old_data_dir = json_config::get_data_dir(&app_handle);
            if new_data_dir == old_data_dir {
                return Ok(new_data_dir.to_string_lossy().to_string());
            }
            if new_data_dir.starts_with(&old_data_dir) || old_data_dir.starts_with(&new_data_dir) {
                return Err("新旧数据目录不能互相嵌套".to_string());
            }
            if new_data_dir.exists()
                && fs::read_dir(&new_data_dir)
                    .map_err(|e| format!("读取目标数据目录失败: {}", e))?
                    .next()
                    .is_some()
            {
                return Err(format!(
                    "目标数据目录非空，请选择其他位置: {}",
                    new_data_dir.display()
                ));
            }
            if new_data_dir.exists() {
                fs::remove_dir(&new_data_dir).map_err(|e| format!("准备空目标目录失败: {}", e))?;
            }

            let staging_dir =
                folder_pathbuf.join(format!(".snippets-code-migration-{}", uuid::Uuid::new_v4()));
            let migration_result = (|| -> Result<(), String> {
                copy_data_directory(&old_data_dir, &staging_dir)?;
                backup_database_to_path(&staging_dir.join("snippets.db"))?;
                fs::rename(&staging_dir, &new_data_dir).map_err(|e| {
                    format!(
                        "提交数据目录迁移失败 {} -> {}: {}",
                        staging_dir.display(),
                        new_data_dir.display(),
                        e
                    )
                })
            })();
            if let Err(error) = migration_result {
                if staging_dir.exists() {
                    let _ = fs::remove_dir_all(&staging_dir);
                }
                return Err(error);
            }

            // 保存新路径到 path.json
            let path_config = json_config::PathConfig {
                data_dir: Some(new_data_dir.to_str().unwrap().to_string()),
            };
            if let Err(error) = json_config::write_path_config(&app_handle, &path_config) {
                // 指针提交失败时回滚本次精确创建的副本，旧数据根未被修改。
                if new_data_dir.exists() {
                    let _ = fs::remove_dir_all(&new_data_dir);
                }
                return Err(error);
            }

            // 旧目录作为可回滚副本保留；切换指针成功后重启。
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
    let setup_completed =
        json_config::get_app_config_value(app_handle, "setup_completed").unwrap_or(false);
    if !setup_completed {
        return false;
    }

    has_valid_workspace_root(app_handle)
}

fn has_valid_workspace_root(app_handle: &tauri::AppHandle) -> bool {
    match json_config::get_workspace_root(app_handle) {
        Ok(Some(workspace_root)) => workspace_root.exists() && workspace_root.is_dir(),
        Ok(None) => false,
        Err(error) => {
            log::warn!("首次设置状态检查失败: {}", error);
            false
        }
    }
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
    // 从首次启动的最小托盘切换到完整托盘时，必须连事件处理器一起重建。
    let _ = crate::tray::recreate_tray_as_full(&app_handle);
}

// ============= 进度窗口显示标记 =============

// 设置重启后显示进度窗口标记，并记录本次重置类型
pub fn set_show_progress_on_restart_with_kind(app_handle: &tauri::AppHandle, reset_kind: &str) {
    let _ = json_config::set_app_config_value(app_handle, "show_progress_on_restart", true);
    let _ = json_config::set_app_config_value(app_handle, "show_progress_reset_kind", reset_kind);
}

// 读取进度窗口标记与重置类型，但不清除，便于各插件按需消费自己的重置任务。
pub fn peek_show_progress_kind(app_handle: &tauri::AppHandle) -> Option<String> {
    let should_show: bool =
        json_config::get_app_config_value(app_handle, "show_progress_on_restart").unwrap_or(false);

    if !should_show {
        return None;
    }

    let reset_kind: String =
        json_config::get_app_config_value(app_handle, "show_progress_reset_kind")
            .unwrap_or_else(|| "all".to_string());

    Some(reset_kind)
}

// 消费进度窗口标记与重置类型（读取后清除）
pub fn consume_show_progress_kind(app_handle: &tauri::AppHandle) -> Option<String> {
    let reset_kind = peek_show_progress_kind(app_handle)?;

    // 清除标记
    let _ = json_config::set_app_config_value(app_handle, "show_progress_on_restart", false);
    let _ = json_config::set_app_config_value(app_handle, "show_progress_reset_kind", "");

    Some(reset_kind)
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

// 路径不存在时仍需要按 Windows 路径语义比较，供设置向导判断默认目录。
fn comparable_path(path: &std::path::Path) -> String {
    fs::canonicalize(path)
        .unwrap_or_else(|_| path.to_path_buf())
        .to_string_lossy()
        .replace('/', "\\")
        .trim_end_matches('\\')
        .to_lowercase()
}

fn same_data_dir(left: &std::path::Path, right: &std::path::Path) -> bool {
    comparable_path(left) == comparable_path(right)
}

// 从设置向导保存数据目录
#[tauri::command]
pub fn set_data_dir_from_setup(
    app_handle: tauri::AppHandle,
    path: String,
) -> Result<String, String> {
    let mut data_dir = PathBuf::from(&path);

    log::info!("📁 设置向导：设置数据目录");

    // 默认数据目录就是当前应用安装目录。
    let default_data_dir = json_config::get_default_data_dir(&app_handle);
    let mut is_default_path = same_data_dir(&data_dir, &default_data_dir);

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
        is_default_path = same_data_dir(&data_dir, &default_data_dir);
    }

    // 确保新目录存在
    if !data_dir.exists() {
        std::fs::create_dir_all(&data_dir)
            .map_err(|e| format!("创建目录失败: {}。请检查是否有权限或选择其他位置", e))?;
    }

    // 验证目录写入权限
    verify_write_permission(&data_dir)?;

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

    // 在新的数据目录创建默认的 app.json，并同步刷新内存中的 AppConfigManager。
    // setup 期间 path.json 会先切换目录；如果继续使用旧 manager，后续
    // setup_completed / workspace_root / index preferences 可能被写入旧 app.json，
    // 生产环境重启后就会读不到完成状态，表现为 setup 关闭后无法正常启动。
    log::info!("📝 在新数据目录创建 .snippets-code/app.json");
    let mut app_config_manager = crate::app_config::AppConfigManager::new(&data_dir)?;
    let mut app_config = app_config_manager.get_config().clone();
    app_config.setup_completed = false;
    app_config.workspace_root = None;
    app_config.show_progress_on_restart = Some(false);
    app_config.show_progress_reset_kind = Some(String::new());
    app_config.setup_restart_pending = Some(false);
    app_config.update_restart_pending = Some(false);
    app_config_manager.update_config(app_config);
    app_config_manager.save()?;

    if let Some(config_state) = app_handle
        .try_state::<std::sync::Arc<std::sync::RwLock<crate::app_config::AppConfigManager>>>()
    {
        let mut manager = config_state
            .write()
            .map_err(|e| format!("刷新应用配置状态失败: {}", e))?;
        *manager = app_config_manager;
    } else {
        app_handle.manage(std::sync::Arc::new(std::sync::RwLock::new(
            app_config_manager,
        )));
    }

    crate::app_config::ensure_enabled_plugin_storage(&app_handle);
    crate::uninstall::record_data_dir(&data_dir);

    log::info!("✅ 数据目录设置完成");
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
