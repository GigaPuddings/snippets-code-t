; ============================================================
; 自定义数据目录选择功能
; Tauri 2.0 NSIS 安装器钩子脚本
; ============================================================

!include "nsDialogs.nsh"
!include "LogicLib.nsh"

; 定义变量
Var DataDirDialog
Var DataDirLabel
Var DataDirTextBox
Var DataDirBrowseBtn
Var DataDirPath
Var DefaultDataDir

; 注册表键名（与 Rust 代码 connection.rs 保持一致）
!define DATA_DIR_REG_KEY "Software\snippets-code"
!define DATA_DIR_REG_VALUE "DataDirectory"

; ============= 自定义页面函数 =============

; 数据目录选择页面创建
Function PageDataDir
    ; 设置默认数据目录
    StrCpy $DefaultDataDir "$APPDATA\com.snippets-code.app"
    
    ; 检查注册表是否已有保存的路径（升级安装时保留原设置）
    ReadRegStr $DataDirPath HKCU "${DATA_DIR_REG_KEY}" "${DATA_DIR_REG_VALUE}"
    ${If} $DataDirPath == ""
        StrCpy $DataDirPath $DefaultDataDir
    ${EndIf}
    
    ; 创建对话框
    nsDialogs::Create 1018
    Pop $DataDirDialog
    ${If} $DataDirDialog == error
        Abort
    ${EndIf}
    
    ; 标题标签
    ${NSD_CreateLabel} 0 0 100% 20u "请选择用户数据存储位置（包含数据库、配置文件等）："
    Pop $DataDirLabel
    
    ; 路径输入框
    ${NSD_CreateText} 0 25u 83% 12u "$DataDirPath"
    Pop $DataDirTextBox
    
    ; 浏览按钮
    ${NSD_CreateButton} 85% 24u 15% 14u "浏览..."
    Pop $DataDirBrowseBtn
    ${NSD_OnClick} $DataDirBrowseBtn OnBrowseDataDir
    
    ; 默认路径说明
    ${NSD_CreateLabel} 0 45u 100% 12u "默认位置: $DefaultDataDir"
    Pop $0
    
    ; 使用默认位置按钮
    ${NSD_CreateButton} 0 62u 25% 14u "使用默认位置"
    Pop $0
    ${NSD_OnClick} $0 OnUseDefaultDir
    
    ; 提示信息
    ${NSD_CreateLabel} 0 85u 100% 24u "提示：$\n- 建议选择非系统盘位置，以便数据备份和迁移$\n- 升级安装时会自动保留您之前的设置"
    Pop $0
    
    nsDialogs::Show
FunctionEnd

; 浏览按钮事件
Function OnBrowseDataDir
    nsDialogs::SelectFolderDialog "选择数据存储目录" $DataDirPath
    Pop $0
    ${If} $0 != error
        StrCpy $DataDirPath $0
        ${NSD_SetText} $DataDirTextBox $DataDirPath
    ${EndIf}
FunctionEnd

; 使用默认位置按钮事件
Function OnUseDefaultDir
    StrCpy $DataDirPath $DefaultDataDir
    ${NSD_SetText} $DataDirTextBox $DataDirPath
FunctionEnd

; 页面离开验证
Function PageDataDirLeave
    ${NSD_GetText} $DataDirTextBox $DataDirPath
    
    ; 验证路径不为空
    ${If} $DataDirPath == ""
        MessageBox MB_OK|MB_ICONEXCLAMATION "请选择有效的数据存储位置！"
        Abort
    ${EndIf}
FunctionEnd

; ============= NSIS 钩子宏定义 =============

; 在安装目录选择页面之后插入自定义数据目录页面
!macro NSIS_HOOK_PREINSTALL
    Page custom PageDataDir PageDataDirLeave
!macroend

; 安装完成后写入注册表
!macro NSIS_HOOK_POSTINSTALL
    ; 创建数据目录（如果不存在）
    CreateDirectory "$DataDirPath"
    
    ; 写入注册表，供应用程序读取
    WriteRegStr HKCU "${DATA_DIR_REG_KEY}" "${DATA_DIR_REG_VALUE}" "$DataDirPath"
!macroend

; 卸载时清理注册表
!macro NSIS_HOOK_POSTUNINSTALL
    DeleteRegKey HKCU "${DATA_DIR_REG_KEY}"
!macroend
