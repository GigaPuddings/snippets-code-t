use std::path::Path;

use log::{info, warn};

// ============= .gitignore 管理 =============

/// 检查 .gitignore 文件（仅检查，不自动创建或修改）
pub fn check_gitignore(workspace_root: &Path) -> Result<(), String> {
    let gitignore_path = workspace_root.join(".gitignore");

    if !gitignore_path.exists() {
        warn!("⚠️ [Git] .gitignore 文件不存在，建议手动创建");
        return Ok(());
    }

    // 读取内容检查是否包含关键规则
    let content = std::fs::read_to_string(&gitignore_path)
        .map_err(|e| format!("读取 .gitignore 失败: {}", e))?;

    let mut missing_rules = Vec::new();

    if !content.contains(".snippets-code/*") {
        missing_rules.push(".snippets-code/*");
    }
    if !content.contains("!.snippets-code/sync.json") {
        missing_rules.push("!.snippets-code/sync.json");
    }
    if !content.contains("*.db") {
        missing_rules.push("*.db");
    }
    if !content.contains("*.db-wal") {
        missing_rules.push("*.db-wal");
    }
    if !content.contains("*.db-shm") {
        missing_rules.push("*.db-shm");
    }
    if !content.contains("*.exe") {
        missing_rules.push("*.exe");
    }

    if !missing_rules.is_empty() {
        warn!("⚠️ [Git] .gitignore 中缺少以下规则: {:?}", missing_rules);
        warn!("⚠️ [Git] 建议手动添加这些规则以避免同步不必要的文件");
    }

    Ok(())
}

/// 默认 .gitignore 内容（工作区无此文件时自动创建）
const DEFAULT_GITIGNORE: &str = r#"# ================================
# Snippets Code 工作区 .gitignore
# Git 仅同步 Markdown、受管附件和显式放行的同步协议文件
# ================================

# ------------------------------
# Snippets Code 本机状态和派生数据
# ------------------------------
.snippets-code/*
!.snippets-code/sync.json

*.db
*.db-wal
*.db-shm
*.sqlite
*.sqlite3

# ------------------------------
# 临时文件和编辑器配置（可以忽略）
# ------------------------------
# 编辑器临时文件
*.swp
*.swo
*~

# VSCode
.vscode/
.idea/

# ------------------------------
# 操作系统临时文件（建议忽略）
# ------------------------------
.DS_Store
Thumbs.db
desktop.ini

# ------------------------------
# 备份文件（建议忽略）
# ------------------------------
*.bak
*.backup
*.old

# ------------------------------
# 构建产物（如果工作区包含前端项目）
# ------------------------------
node_modules/
dist/
target/

# ------------------------------
# 应用程序与安装包（勿提交到远程）
# ------------------------------
*.exe
*.msi
*.dmg
*.AppImage
uninstall.exe
"#;

const SYNC_GITIGNORE_RULES: &str = r#"

# Snippets Code 同步边界（由应用维护）
# 除 sync.json 外，.snippets-code 均是本机布局、缓存或运行状态。
.snippets-code/*
!.snippets-code/sync.json
"#;

/// 确保工作区存在正确的同步忽略规则。
///
/// 旧工作区已经存在 `.gitignore` 时只追加幂等规则，不覆盖用户自定义内容。
pub fn ensure_gitignore(workspace_root: &Path) -> Result<bool, String> {
    let gitignore_path = workspace_root.join(".gitignore");
    if gitignore_path.exists() {
        let content = std::fs::read_to_string(&gitignore_path)
            .map_err(|e| format!("读取 .gitignore 失败: {}", e))?;
        if content.contains(".snippets-code/*") && content.contains("!.snippets-code/sync.json") {
            return Ok(false);
        }
        let separator = if content.ends_with('\n') { "" } else { "\n" };
        std::fs::write(
            &gitignore_path,
            format!("{}{}{}", content, separator, SYNC_GITIGNORE_RULES),
        )
        .map_err(|e| format!("更新 .gitignore 失败: {}", e))?;
        info!("✅ [Git] 已补充同步边界 .gitignore 规则");
        return Ok(true);
    }
    std::fs::write(&gitignore_path, DEFAULT_GITIGNORE)
        .map_err(|e| format!("创建 .gitignore 失败: {}", e))?;
    info!("✅ [Git] 已自动创建 .gitignore");
    Ok(true)
}
