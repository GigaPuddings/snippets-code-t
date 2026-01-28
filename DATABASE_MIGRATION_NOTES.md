# 数据库迁移说明

## 版本信息
- **迁移日期**: 2026-01-27
- **迁移内容**: 为 `categories` 表添加 `is_system` 字段

## 迁移详情

### 1. 新增字段
在 `categories` 表中添加了 `is_system` 字段：
```sql
ALTER TABLE categories ADD COLUMN is_system INTEGER DEFAULT 0
```

### 2. 字段说明
- **字段名**: `is_system`
- **类型**: `INTEGER`
- **默认值**: `0`
- **用途**: 标识系统分类（如"未分类"）
  - `0`: 普通用户分类
  - `1`: 系统分类

### 3. 数据迁移
迁移函数会自动：
1. 检查 `is_system` 字段是否已存在
2. 如果不存在，添加该字段
3. 将所有名为"未分类"的分类标记为系统分类：
   ```sql
   UPDATE categories SET is_system = 1 WHERE name = '未分类'
   ```

## 影响范围

### 前端变更
1. **分类列表查询**: `get_categories` 现在过滤掉系统分类（`WHERE is_system = 0`）
2. **未分类标识**: 前端使用 `0` 作为"未分类"的特殊标识符
3. **分类选择器**: 自动映射实际"未分类"ID 和前端标识 `0`

### 后端变更
1. **新增 API**: `get_uncategorized_id()` - 获取"未分类"的实际 ID
2. **创建分类**: 创建"未分类"时自动设置 `is_system = 1`
3. **查询过滤**: `get_categories` 自动过滤系统分类

## GitHub 同步兼容性

### 同步到 GitHub
- 新数据库结构会被完整备份
- 包含 `is_system` 字段

### 从 GitHub 恢复
恢复过程会自动执行迁移：
1. 恢复数据到本地数据库
2. 调用 `migrate_category_system_field()` 迁移函数
3. 自动添加 `is_system` 字段（如果不存在）
4. 自动标记"未分类"为系统分类

### 向后兼容
- **旧版本备份 → 新版本**: ✅ 自动迁移，添加 `is_system` 字段
- **新版本备份 → 旧版本**: ⚠️ 旧版本会忽略 `is_system` 字段，但不影响基本功能

## 迁移函数

### 位置
`src-tauri/src/db/init.rs`

### 函数签名
```rust
pub fn migrate_category_system_field(conn: &rusqlite::Connection) -> Result<(), rusqlite::Error>
```

### 调用时机
1. **应用启动**: `init_db()` 中自动调用
2. **GitHub 恢复**: `restore_from_github()` 中自动调用

## 测试建议

### 测试场景
1. ✅ 新安装应用 - 验证 `is_system` 字段正确创建
2. ✅ 从旧版本升级 - 验证迁移函数正确执行
3. ✅ GitHub 同步 - 验证备份包含新字段
4. ✅ GitHub 恢复 - 验证恢复后自动迁移
5. ✅ 分类操作 - 验证"未分类"不出现在用户分类列表

### 验证 SQL
```sql
-- 检查字段是否存在
PRAGMA table_info(categories);

-- 检查"未分类"是否被标记为系统分类
SELECT id, name, is_system FROM categories WHERE name = '未分类';

-- 检查用户分类列表（应该不包含"未分类"）
SELECT id, name FROM categories WHERE is_system = 0;
```

## 回滚方案

如果需要回滚到旧版本：
```sql
-- 删除 is_system 字段（SQLite 不支持 DROP COLUMN，需要重建表）
-- 或者简单地忽略该字段，旧版本会自动忽略未知字段
```

## 注意事项

1. **不要手动修改 `is_system` 字段**: 系统分类由代码自动管理
2. **不要删除"未分类"分类**: 它是系统必需的分类
3. **GitHub 同步**: 确保在恢复后重启应用，让迁移生效

## 相关文件

- `src-tauri/src/db/init.rs` - 迁移函数定义
- `src-tauri/src/db/fragment.rs` - 分类相关 API
- `src-tauri/src/github_sync.rs` - GitHub 同步逻辑
- `src/components/ContentItem/index.vue` - 前端分类选择器
- `src/components/QuickNav/index.vue` - 快捷导航组件
