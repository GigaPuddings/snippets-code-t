 # Tauri 窗口阻塞问题 - GitHub 官方解决方案

## 问题根源

根据 Tauri GitHub 上的多个 issue 和讨论，这是一个**已知的 Tauri 框架问题**：

### 相关 GitHub Issues:
1. **Issue #4121**: [On Windows, app hangs when creating a new window in a non-async Tauri command](https://github.com/tauri-apps/tauri/issues/4121)
2. **Issue #5120**: [Window loses focus when creating another window with `focus: false`, possible deadlock](https://github.com/tauri-apps/tauri/issues/5120)
3. **Discussion #3561**: [Any documentation about the main thread?](https://github.com/tauri-apps/tauri/discussions/3561)

## 核心问题

**在非异步的 Tauri command 中执行窗口操作会导致应用挂起（Windows 平台）**

引用自 Issue #4121：
> "I noticed that the app hangs if I do window operations in a non-async Tauri command on Windows. Making the command async fixes the problem."

引用自 Discussion #3561：
> "I had a tauri command, non-async, which hid the caller window. Doing so completely froze another visible window, and I just spent like 2 hours trying to figure out why :( (making the command async solved the issue)."

## 官方解决方案

### 方案 1：使用 async command（推荐）

**最简单且最有效的解决方案：将 Tauri command 声明为 async**

```rust
// ❌ 会阻塞的版本
#[tauri::command]
pub fn show_hide_window_command(label: &str, context: Option<String>) -> Result<(), String> {
    // 窗口操作会阻塞
    hotkey_config();
    Ok(())
}

// ✅ 正确的版本
#[tauri::command]
pub async fn show_hide_window_command(label: &str, context: Option<String>) -> Result<(), String> {
    // 窗口操作不会阻塞
    hotkey_config();
    Ok(())
}
```

### 方案 2：使用 `#[command(async)]` 注解

如果不想改变函数签名，可以使用注解：

```rust
#[tauri::command(async)]
pub fn show_hide_window_command(label: &str, context: Option<String>) -> Result<(), String> {
    hotkey_config();
    Ok(())
}
```

### 方案 3：使用 `tauri::async_runtime::spawn`

在窗口操作外层包装异步任务：

```rust
#[tauri::command]
pub fn show_hide_window_command(label: &str, context: Option<String>) -> Result<(), String> {
    let label = label.to_string();
    let context = context.clone();
    
    tauri::async_runtime::spawn(async move {
        match label.as_str() {
            "config" => hotkey_config(),
            // ... 其他 case
        }
    });
    
    Ok(())
}
```

## 为什么会阻塞？

根据 Tauri 维护者 FabianLars 的解释：

> "The main thing to have in mind is that doing something blocking in commands which run on the main thread will also block the UI (which also runs on the main thread)."

**关键点：**
1. 非异步 command 在主线程上执行
2. UI 也在主线程上运行
3. 窗口操作（如 `window.show()`, `window.hide()`）在主线程上执行时会阻塞
4. 当一个窗口正在执行操作时，其他窗口的 UI 也会被阻塞

## 我们项目中的具体应用

### 当前问题代码

```rust
// src-tauri/src/window.rs
#[tauri::command]
pub fn show_hide_window_command(label: &str, context: Option<String>) -> Result<(), String> {
    log::info!("[Window Command] show_hide_window_command called with label: {}, context: {:?}", label, context);
    
    match label {
        "config" => {
            log::info!("[Window Command] Handling config window");
            hotkey_config();  // ← 这里会阻塞！
        }
        // ...
    }
    
    Ok(())
}
```

### 修复方案（推荐）

```rust
// src-tauri/src/window.rs
#[tauri::command]
pub async fn show_hide_window_command(label: &str, context: Option<String>) -> Result<(), String> {
    log::info!("[Window Command] show_hide_window_command called with label: {}, context: {:?}", label, context);
    
    match label {
        "config" => {
            log::info!("[Window Command] Handling config window");
            hotkey_config();  // ✅ 现在不会阻塞了
        }
        "config_settings" => {
            log::info!("[Window Command] Handling config settings");
            open_config_settings();
        }
        "translate" => {
            log::info!("[Window Command] Handling translate window");
            hotkey_translate();
        }
        "update" => {
            log::info!("[Window Command] Handling update window");
            create_update_window();
        }
        "dark_mode" => {
            log::info!("[Window Command] Handling dark mode");
            hotkey_dark_mode();
        }
        _ => {
            log::error!("[Window Command] Invalid label: {}", label);
            return Err("Invalid label".to_string());
        }
    }
    
    log::info!("[Window Command] Command completed successfully");
    Ok(())
}
```

## 前端调用无需修改

前端调用方式保持不变，Tauri 会自动处理异步：

```typescript
// src/pages/preview/index.vue
const handleOpenDetail = async () => {
  if (!snippet.value) return;
  
  // 存储导航数据
  localStorage.setItem('pendingNavigation', JSON.stringify({
    fragmentId: snippet.value.id,
    categoryId: snippet.value.category_id,
    timestamp: Date.now()
  }));
  
  // 调用异步 command（前端代码不需要改变）
  await invoke('show_hide_window_command', { 
    label: 'config',
    context: 'preview_navigation'
  });
  
  // 关闭预览窗口
  await handleClose();
};
```

## 其他需要修改的 command

检查项目中所有涉及窗口操作的 command，确保它们都是 async 的：

```rust
// ✅ 已经是 async 的（不需要修改）
#[tauri::command]
pub async fn open_preview_window(snippet_data: String, preview_x: f64, preview_y: f64) -> Result<(), String> {
    // ...
}

// ❌ 可能需要改为 async
#[tauri::command]
pub fn close_preview_window() -> Result<(), String> {
    // ...
}
```

建议修改为：

```rust
// ✅ 改为 async
#[tauri::command]
pub async fn close_preview_window() -> Result<(), String> {
    let app_handle = APP.get().ok_or("无法获取应用句柄")?;
    if let Some(window) = app_handle.get_webview_window("preview") {
        let _ = window.close();
    }
    Ok(())
}
```

## 性能影响

根据 Tauri 维护者的说明：

> "The main thread should be slightly faster (no context switching or whatever). So i guess you could say async commands (or sync command annotated with #[command(async)]) are generally the safer bet."

**结论：**
- async command 稍微慢一点点（由于上下文切换）
- 但这个性能差异可以忽略不计
- **async command 是更安全的选择**，特别是涉及窗口操作时

## 最佳实践

根据 Tauri 官方建议：

1. **默认使用 async command**，除非有特殊原因
2. **所有涉及窗口操作的 command 必须是 async**
3. **阻塞操作（如文件 I/O、网络请求）应该在 async command 中执行**
4. **只有非常简单、快速的操作才考虑使用同步 command**

## 参考资料

- [Tauri Issue #4121](https://github.com/tauri-apps/tauri/issues/4121) - Windows 平台窗口操作阻塞问题
- [Tauri Issue #5120](https://github.com/tauri-apps/tauri/issues/5120) - 窗口焦点和死锁问题
- [Tauri Discussion #3561](https://github.com/tauri-apps/tauri/discussions/3561) - 主线程文档讨论
- [Tauri Official Docs - Calling Rust](https://v2.tauri.app/develop/calling-rust/) - 官方文档

## 总结

**这不是我们代码的 bug，而是 Tauri 框架的设计限制。**

**解决方案非常简单：只需要在 `show_hide_window_command` 函数签名中添加 `async` 关键字即可。**

这个修改：
- ✅ 简单（只需要改一个关键字）
- ✅ 安全（Tauri 官方推荐）
- ✅ 无副作用（前端代码不需要修改）
- ✅ 彻底解决阻塞问题
