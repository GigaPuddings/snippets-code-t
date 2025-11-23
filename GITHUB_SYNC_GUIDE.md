# GitHub 数据同步功能使用指南

## 📖 功能概述

GitHub 数据同步功能允许您将 Snippets Code 的所有数据（代码片段、书签、应用、待办事项等）安全地备份到 GitHub 私有仓库，实现多设备数据同步。

## 🔐 安全特性

- **AES-256-GCM 加密**：所有数据在上传前都会使用军用级加密算法加密
- **私有仓库**：数据存储在您的 GitHub 私有仓库中，只有您能访问
- **Token 安全**：使用 GitHub Personal Access Token 认证，不需要密码

## 🚀 快速开始

### 1. 生成 GitHub Personal Access Token

1. 访问 [GitHub Token 设置页面](https://github.com/settings/tokens/new?description=snippets-code-backup&scopes=repo)
2. 或手动创建：
   - 打开 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - 点击 "Generate new token (classic)"
   - 填写 Token 名称：`snippets-code-backup`
   - 勾选权限：`repo` (完整仓库权限)
   - 点击 "Generate token"
   - **重要**：复制生成的 Token（只会显示一次）

### 2. 连接 GitHub

1. 打开 Snippets Code 应用
2. 点击标题栏右上角的 **用户图标** 进入个人中心
3. 在登录表单中：
   - 粘贴您的 GitHub Token
   - （可选）自定义仓库名称（默认：snippets-code-backup）
   - 点击 "连接"
4. 验证成功后，您的 GitHub 头像和用户名将显示出来

### 3. 首次同步数据

1. 在个人中心页面，点击 **"上传到 GitHub"** 按钮
2. 等待同步完成（通常几秒钟）
3. 同步成功后，可以访问您的 GitHub 仓库查看加密的备份文件

## 📦 数据同步内容

### 包含的数据
- ✅ 代码片段（categories + contents）
- ✅ 书签（bookmarks）
- ✅ 应用快捷方式（apps）
- ✅ 待办提醒（alarm_cards）
- ✅ 搜索引擎配置（search_engines）

### 不包含的数据
- ❌ 图标缓存（icon_cache）- 可重新获取
- ❌ 搜索历史（search_history）- 本地统计数据

## 🔄 使用场景

### 场景 1：备份数据
定期点击"上传到 GitHub"按钮，将最新数据备份到云端。

### 场景 2：新设备同步
1. 在新设备上安装 Snippets Code
2. 进入个人中心，使用相同的 GitHub Token 登录
3. 点击 **"从 GitHub 恢复"** 按钮
4. 应用将自动重启并加载云端数据

### 场景 3：数据恢复
如果本地数据损坏或误删除：
1. 进入个人中心
2. 点击"从 GitHub 恢复"
3. 确认覆盖本地数据
4. 等待恢复完成

## ⚙️ 高级设置

### 自动同步选项

#### 退出时自动备份
- 启用后，每次关闭应用时自动上传数据到 GitHub
- 适合经常修改数据的用户

#### 启动时自动恢复
- 启用后，应用启动时检测云端更新
- 如果云端数据较新，会提示是否恢复
- 适合多设备使用的用户

## 🔍 常见问题

### Q: Token 过期了怎么办？
A: GitHub Token 默认没有过期时间。如果设置了过期时间，过期后需要重新生成并在个人中心更新。

### Q: 可以在多台设备上同时使用吗？
A: 可以！建议启用"退出时自动备份"，确保每台设备的数据都能同步到云端。

### Q: 数据会被泄露吗？
A: 不会。所有数据都使用 AES-256-GCM 加密，加密密钥从您的 GitHub Token 派生，只有拥有 Token 的人才能解密。

### Q: 仓库是公开的吗？
A: 不是。应用会自动创建私有仓库，只有您能访问。

### Q: 同步失败怎么办？
A: 可能的原因：
1. 网络连接问题 - 检查网络连接
2. Token 权限不足 - 确保勾选了 `repo` 权限
3. Token 已被撤销 - 重新生成 Token

### Q: 可以手动查看备份文件吗？
A: 可以访问 `https://github.com/YOUR_USERNAME/snippets-code-backup` 查看。但文件是加密的，需要使用应用才能解密恢复。

## 🛡️ 安全建议

1. **妥善保管 Token**：Token 等同于密码，不要分享给他人
2. **定期备份**：重要数据修改后及时同步
3. **及时更新**：如果 Token 泄露，立即在 GitHub 上撤销并重新生成
4. **多重保护**：GitHub 账号建议启用两步验证

## 🐛 故障排除

### 同步失败
```
错误：Token 验证失败
解决：检查 Token 是否正确，是否有 repo 权限
```

```
错误：网络请求失败
解决：检查网络连接，尝试使用代理
```

### 恢复失败
```
错误：文件不存在或下载失败
解决：确保已经至少同步过一次数据
```

```
错误：解密失败
解决：确保使用的是同一个 Token
```

## 📞 技术支持

如遇到问题，请访问：
- GitHub Issues: [项目地址](https://github.com/GigaPuddings/snippets-code-t)
- 邮件支持：[在此填写您的联系方式]

---

**享受跨设备的无缝数据同步体验！** 🎉
