; ============================================================
; Tauri 2.0 NSIS 安装器钩子脚本
; 注意：Tauri 的 NSIS 钩子不支持自定义页面
; 数据目录选择功能改为应用内首次启动向导实现
; ============================================================

; 注册表键名（与 Rust 代码 connection.rs 保持一致）
!define DATA_DIR_REG_KEY "Software\snippets-code"
!define DATA_DIR_REG_VALUE "DataDirectory"

; ============= NSIS 钩子宏定义 =============

; 安装前（无操作）
!macro NSIS_HOOK_PREINSTALL
    ; Tauri NSIS 钩子在 Section 内执行，不支持 Page 命令
!macroend

; 安装完成后：设置默认数据目录到注册表
!macro NSIS_HOOK_POSTINSTALL
    ; 检查注册表是否已有设置（升级时保留）
    ReadRegStr $0 HKCU "${DATA_DIR_REG_KEY}" "${DATA_DIR_REG_VALUE}"
    StrCmp $0 "" 0 +2
        ; 如果没有设置，写入默认路径
        WriteRegStr HKCU "${DATA_DIR_REG_KEY}" "${DATA_DIR_REG_VALUE}" "$APPDATA\com.snippets-code.app"
!macroend

; 卸载时清理注册表
!macro NSIS_HOOK_POSTUNINSTALL
    DeleteRegKey HKCU "${DATA_DIR_REG_KEY}"
!macroend
