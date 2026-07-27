!macro NSIS_HOOK_PREUNINSTALL
  ${If} $DeleteAppDataCheckboxState = 1
  ${AndIf} $UpdateMode <> 1
    ; Tauri 会在主卸载流程中删除 ${MANUPRODUCTKEY}，先复制用户确认的目标。
    ReadRegStr $0 HKCU "${MANUPRODUCTKEY}" "SnippetsCodeDataDir"
    WriteRegStr HKCU "Software\snippets-code\uninstall-cleanup" "SnippetsCodeDataDir" "$0"
    ReadRegStr $0 HKCU "${MANUPRODUCTKEY}" "SnippetsCodePluginDir"
    WriteRegStr HKCU "Software\snippets-code\uninstall-cleanup" "SnippetsCodePluginDir" "$0"
    ReadRegStr $0 HKCU "${MANUPRODUCTKEY}" "SnippetsCodeWorkspaceDir"
    WriteRegStr HKCU "Software\snippets-code\uninstall-cleanup" "SnippetsCodeWorkspaceDir" "$0"
  ${EndIf}
!macroend

!macro CleanupRecordedDirectory VALUE_NAME
  ReadRegStr $0 HKCU "Software\snippets-code\uninstall-cleanup" "${VALUE_NAME}"
  ${If} $0 != ""
    ; 不允许根目录成为递归删除目标；Rust 记录时与这里均做一次保护。
    ${GetRoot} "$0" $1
    ${If} $0 != $1
      RmDir /r "$0"
    ${EndIf}
  ${EndIf}
!macroend

!macro NSIS_HOOK_POSTUNINSTALL
  ${If} $DeleteAppDataCheckboxState = 1
  ${AndIf} $UpdateMode <> 1
    ; 插件目录可能位于数据目录外；数据目录也可能位于旧版安装目录中。
    !insertmacro CleanupRecordedDirectory "SnippetsCodePluginDir"
    !insertmacro CleanupRecordedDirectory "SnippetsCodeDataDir"
    ; 工作区仅在用户勾选了明确标注“不可恢复”的复选框时删除。
    !insertmacro CleanupRecordedDirectory "SnippetsCodeWorkspaceDir"
    DeleteRegKey HKCU "Software\snippets-code\uninstall-cleanup"
  ${EndIf}
!macroend
