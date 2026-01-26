# GitHub 数据同步数据库迁移修复

## 问题描述

在新增笔记相关功能后，数据库 `contents` 表增加了以下新字段：
- `type`: 片段类型 (code/note)
- `format`: 内容格式 (plain/markdown/html)
- `metadata`: 元数据 JSON
- `tags`: 标签列表

当用户从 GitHub 恢复旧版本的数据库时，由于旧数据库缺少这些字段，会导致：
1. 数据恢复失败
2. 应用崩溃
3. 数据不一致

## 根本原因

`restore_from_github` 函数在恢复数据时：
1. 直接将旧数据库的表数据复制到本地
2. 没有检查源表和目标表的字段差异
3. 没有执行数据库迁移来添加缺失的字段

## 解决方案

### 1. 改进数据恢复逻辑 (`src-tauri/src/github_sync.rs`)

**修改前：**
- 直接复制源表的所有列到目标表
- 如果列不匹配会导致插入失败

**修改后：**
- 获取源表和目标表的列信息
- 只复制两个表都存在的公共列
- 避免因列不匹配导致的错误

```rust
// 获取源表的列信息
let source_columns: Vec<String> = { /* ... */ };

// 获取目标表的列信息
let target_columns: Vec<String> = { /* ... */ };

// 只选择源表和目标表都存在的列
let common_columns: Vec<String> = source_columns
    .iter()
    .filter(|col| target_columns.contains(col))
    .cloned()
    .collect();
```

### 2. 添加数据库迁移步骤

在恢复数据后、重启应用前，执行数据库迁移：

```rust
// 执行数据库迁移，确保所有新字段都被添加
emit_progress(85, "执行数据库迁移...");
crate::db::migrate_fragment_type_support(&target_conn)
    .map_err(|e| format!("数据库迁移失败: {}", e))?;
```

### 3. 改进迁移函数 (`src-tauri/src/db/init.rs`)

**修改前：**
- 直接执行 ALTER TABLE，如果字段已存在会报错
- 使用 `let _ = ` 忽略所有错误

**修改后：**
- 先检查字段是否存在
- 只添加不存在的字段
- 更安全、更健壮

```rust
// 检查字段是否已存在的辅助函数
let column_exists = |column_name: &str| -> bool {
    let mut stmt = match conn.prepare("PRAGMA table_info(contents)") {
        Ok(s) => s,
        Err(_) => return false,
    };
    
    let columns: Vec<String> = match stmt.query_map([], |row| row.get::<_, String>(1)) {
        Ok(rows) => rows.filter_map(|r| r.ok()).collect(),
        Err(_) => return false,
    };
    
    columns.contains(&column_name.to_string())
};

// 只在字段不存在时添加
if !column_exists("type") {
    let _ = conn.execute(
        "ALTER TABLE contents ADD COLUMN type TEXT NOT NULL DEFAULT 'code'",
        []
    );
}
```

### 4. 导出迁移函数 (`src-tauri/src/db/mod.rs`)

将 `migrate_fragment_type_support` 函数导出，使其可以在其他模块中调用：

```rust
pub use init::migrate_fragment_type_support;
```

## 恢复流程

**修复后的完整流程：**

1. 下载加密的数据库文件 (0-30%)
2. 解密数据 (60%)
3. 保存临时文件 (70%)
4. 恢复数据库 (80%)
   - 检查源表是否存在
   - 获取源表和目标表的列信息
   - 只复制公共列的数据
   - 清空目标表并插入数据
5. **执行数据库迁移 (85%)** ← 新增步骤
   - 检查并添加缺失的字段
   - 创建必要的索引
6. 应用自启动设置 (90%)
7. 重启应用 (100%)

## 测试场景

### 场景 1：从旧版本恢复
- 旧数据库：只有基础字段 (id, title, content, category_id, created_at)
- 恢复后：自动添加新字段 (type, format, metadata, tags)
- 结果：✅ 成功恢复，所有数据完整

### 场景 2：从新版本恢复
- 新数据库：包含所有字段
- 恢复后：检测到字段已存在，跳过添加
- 结果：✅ 成功恢复，无重复操作

### 场景 3：部分字段存在
- 数据库：有 type 和 format，缺少 metadata 和 tags
- 恢复后：只添加缺失的字段
- 结果：✅ 成功恢复，增量更新

## 优势

1. **向后兼容**：可以安全地恢复旧版本的数据库
2. **向前兼容**：可以处理新版本的数据库
3. **健壮性**：检查字段存在性，避免重复添加
4. **安全性**：只复制公共列，避免数据不匹配
5. **用户体验**：显示迁移进度，用户了解恢复状态

## 相关文件

- `src-tauri/src/github_sync.rs`: GitHub 同步功能
- `src-tauri/src/db/init.rs`: 数据库初始化和迁移
- `src-tauri/src/db/mod.rs`: 数据库模块导出
- `src-tauri/src/db/fragment.rs`: 片段数据操作

## 注意事项

1. 迁移函数是幂等的，可以多次执行而不会出错
2. 使用 `IF NOT EXISTS` 确保索引不会重复创建
3. 默认值确保旧数据在新字段上有合理的值
4. 迁移在事务外执行，每个 ALTER TABLE 是独立的操作

## 未来改进

1. 考虑添加版本号管理，记录数据库 schema 版本
2. 实现更完善的迁移历史记录
3. 添加迁移回滚机制
4. 支持更复杂的数据转换逻辑
