use super::*;
use tauri::{AppHandle, Manager};

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct BackupLocation {
    root: String,
    workspace: String,
    app_data: String,
    recovery: String,
}

fn location(root: &Path) -> BackupLocation {
    BackupLocation {
        root: root.to_string_lossy().into_owned(),
        workspace: root.join("workspace").to_string_lossy().into_owned(),
        app_data: root.join("app-data").to_string_lossy().into_owned(),
        recovery: root.join("recovery").to_string_lossy().into_owned(),
    }
}

fn current_roots(app: &AppHandle) -> Result<(Option<PathBuf>, PathBuf, PathBuf), String> {
    let workspace = crate::json_config::get_workspace_root(app)?;
    let data = crate::json_config::get_data_dir(app);
    let platform = app.path().app_data_dir().map_err(|e| e.to_string())?;
    Ok((workspace, data, platform))
}

#[tauri::command]
pub async fn create_full_backup(
    app_handle: AppHandle,
    destination: String,
    frontend_state: String,
) -> Result<BackupLocation, String> {
    let (workspace, data, platform) = current_roots(&app_handle)?;
    let workspace = workspace.ok_or("Set a workspace before backing up")?;
    tauri::async_runtime::spawn_blocking(move || {
        let destination = PathBuf::from(destination);
        separate_destination(&destination, &[&platform])?;
        let trash = platform.join("deleted-notes");
        create_backup(
            &workspace,
            &data,
            trash.exists().then_some(trash.as_path()),
            &destination,
            &frontend_state,
        )?;
        Ok(location(&destination))
    })
    .await
    .map_err(|e| e.to_string())?
}

#[tauri::command]
pub async fn restore_full_backup(
    app_handle: AppHandle,
    source: String,
    destination: String,
) -> Result<BackupLocation, String> {
    let (workspace, data, platform) = current_roots(&app_handle)?;
    tauri::async_runtime::spawn_blocking(move || {
        let destination = PathBuf::from(destination);
        let mut protected = vec![data.as_path(), platform.as_path()];
        if let Some(workspace) = workspace.as_deref() {
            protected.push(workspace);
        }
        restore_backup(Path::new(&source), &destination, &protected)?;
        Ok(location(&destination))
    })
    .await
    .map_err(|e| e.to_string())?
}

// Only the explicit UI activation action updates the startup pointer. Neither
// backup nor restore changes active data or copies anything into the old data.
#[tauri::command]
pub async fn activate_restored_backup(app_handle: AppHandle, root: String) -> Result<(), String> {
    let (workspace, data, platform) = current_roots(&app_handle)?;
    tauri::async_runtime::spawn_blocking(move || {
        let root = checked_path(Path::new(&root))?;
        let mut protected_roots = vec![data.as_path(), platform.as_path()];
        if let Some(workspace) = workspace.as_deref() {
            protected_roots.push(workspace);
        }
        for protected in protected_roots {
            let protected = checked_path(protected)?;
            if root.starts_with(&protected) || protected.starts_with(&root) {
                return Err("Recovery must remain separate from active data".into());
            }
        }
        verify(&root, "snippets-restored")?;
        crate::json_config::write_path_config(
            &app_handle,
            &crate::json_config::PathConfig {
                data_dir: Some(display_path(&root.join("app-data"))),
            },
        )?;
        app_handle.restart();
    })
    .await
    .map_err(|e| e.to_string())?
}
