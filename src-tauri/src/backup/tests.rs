use super::*;
use rusqlite::Connection;
use std::fs;
use std::path::PathBuf;

struct Fixture {
    root: PathBuf,
    workspace: PathBuf,
    data: PathBuf,
    db: Connection,
}
impl Fixture {
    fn new() -> Self {
        let root =
            std::env::temp_dir().join(format!("snippets-backup-test-{}", uuid::Uuid::new_v4()));
        let workspace = root.join("workspace");
        let data = root.join("data");
        fs::create_dir_all(workspace.join("assets/note")).unwrap();
        fs::create_dir_all(workspace.join("empty-category")).unwrap();
        fs::create_dir_all(workspace.join(".snippets-code")).unwrap();
        fs::create_dir_all(data.join(".snippets-code")).unwrap();
        fs::create_dir_all(data.join("state/plugins/todo")).unwrap();
        fs::create_dir_all(data.join("packages/plugins/large-model")).unwrap();
        fs::write(
            workspace.join("note.md"),
            b"---\r\ntitle: Note\r\n---\r\nbody  \r\n",
        )
        .unwrap();
        fs::write(workspace.join("assets/note/image.bin"), [0, 1, 255, 10]).unwrap();
        fs::write(
            workspace.join(".snippets-code/cache.json"),
            br#"{"categories":{"Notes":{"order":2,"color":"blue"}}}"#,
        )
        .unwrap();
        fs::write(workspace.join(".snippets-code/workspace.json"), br#"{"main":{},"settings":{"sync_enabled":true,"attachment":{"path_template":"assets/${noteFileName}/"}}}"#).unwrap();
        fs::write(data.join(".snippets-code/app.json"), br#"{"language":"en-US","workspace_root":"C:/old-workspace","plugin_install_dir":"C:/outside","plugins":{"todo":{"enabled":true}},"git":{"auto_sync":true}}"#).unwrap();
        fs::write(
            data.join("state/plugins/todo/data.json"),
            br#"{"tasks":["remember me"]}"#,
        )
        .unwrap();
        fs::write(
            data.join("packages/plugins/large-model/model.bin"),
            "excluded",
        )
        .unwrap();
        fs::write(data.join("search.db"), "derived").unwrap();
        let db = Connection::open(data.join("core.db")).unwrap();
        db.execute_batch("PRAGMA journal_mode=WAL; PRAGMA wal_autocheckpoint=0; CREATE TABLE user_data(value TEXT); INSERT INTO user_data VALUES ('committed in WAL');").unwrap();
        Self {
            root,
            workspace,
            data,
            db,
        }
    }
    fn backup(&self) -> PathBuf {
        let path = self.root.join("backup");
        create_backup(
            &self.workspace,
            &self.data,
            None,
            &path,
            r#"{"layout":"{}","editor-draft:v1:example":"draft"}"#,
        )
        .unwrap();
        path
    }
}
impl Drop for Fixture {
    fn drop(&mut self) {
        // Close the held WAL writer before removing the fixture on Windows.
        let old = std::mem::replace(&mut self.db, Connection::open_in_memory().unwrap());
        drop(old);
        let _ = fs::remove_dir_all(&self.root);
    }
}

#[test]
fn round_trip_keeps_wal_content_attachments_user_state_and_empty_categories() {
    let fixture = Fixture::new();
    assert!(fixture.data.join("core.db-wal").exists());
    let backup = fixture.backup();
    let restored = fixture.root.join("restored");
    restore_backup(&backup, &restored, &[&fixture.workspace, &fixture.data]).unwrap();
    assert_eq!(
        fs::read(restored.join("workspace/note.md")).unwrap(),
        b"---\r\ntitle: Note\r\n---\r\nbody  \r\n"
    );
    assert_eq!(
        fs::read(restored.join("workspace/assets/note/image.bin")).unwrap(),
        [0, 1, 255, 10]
    );
    assert!(restored.join("workspace/empty-category").is_dir());
    assert!(restored
        .join("workspace/.snippets-code/cache.json")
        .is_file());
    assert!(restored
        .join("app-data/state/plugins/todo/data.json")
        .is_file());
    assert!(restored.join("recovery/frontend-state.json").is_file());
    assert!(!restored.join("app-data/search.db").exists());
    assert!(!restored.join("app-data/packages").exists());
    let db = Connection::open(restored.join("app-data/core.db")).unwrap();
    assert_eq!(
        db.query_row("SELECT value FROM user_data", [], |row| row
            .get::<_, String>(0))
            .unwrap(),
        "committed in WAL"
    );
    let config: serde_json::Value = serde_json::from_slice(
        &fs::read(restored.join("app-data/.snippets-code/app.json")).unwrap(),
    )
    .unwrap();
    assert_eq!(
        config["workspace_root"],
        restored.join("workspace").to_string_lossy().as_ref()
    );
    assert_eq!(config["plugin_install_dir"], serde_json::Value::Null);
    assert_eq!(config["plugins"]["todo"]["enabled"], false);
    assert_eq!(config["language"], "en-US");
    assert_eq!(
        fs::read(fixture.workspace.join("note.md")).unwrap(),
        fs::read(backup.join("workspace/note.md")).unwrap()
    );
    assert!(fixture.data.join(".snippets-code/app.json").is_file());
}

#[test]
fn refuses_existing_and_nested_destinations_without_changing_them() {
    let fixture = Fixture::new();
    let backup = fixture.backup();
    let existing = fixture.root.join("existing");
    fs::create_dir(&existing).unwrap();
    fs::write(existing.join("keep"), "original").unwrap();
    assert!(restore_backup(&backup, &existing, &[]).is_err());
    assert_eq!(
        fs::read_to_string(existing.join("keep")).unwrap(),
        "original"
    );
    for target in [
        fixture.workspace.join("nested"),
        fixture.data.join("nested"),
        backup.join("nested"),
    ] {
        assert!(restore_backup(&backup, &target, &[&fixture.workspace, &fixture.data]).is_err());
        assert!(!target.exists());
    }
    assert!(create_backup(
        &fixture.workspace,
        &fixture.data,
        None,
        &fixture.workspace.join("backup"),
        "{}"
    )
    .is_err());
}

#[test]
fn overlapping_restore_reports_both_paths_without_creating_the_target() {
    let fixture = Fixture::new();
    let backup = fixture.backup();
    let target = backup.join("new-recovery");
    let error = restore_backup(&backup, &target, &[]).unwrap_err();
    let details: serde_json::Value = serde_json::from_str(
        error
            .strip_prefix("BACKUP_DESTINATION_OVERLAP: ")
            .expect("structured overlap error"),
    )
    .unwrap();
    assert_eq!(details["destination"], target.to_string_lossy().as_ref());
    assert_eq!(details["protectedPath"], backup.to_string_lossy().as_ref());
    assert!(!target.exists());
    verify(&backup, "snippets-backup").unwrap();
}

#[test]
fn refuses_corrupt_or_unlisted_payload_and_leaves_no_partial_restore() {
    let fixture = Fixture::new();
    let backup = fixture.backup();
    let restored = fixture.root.join("restored");
    fs::write(backup.join("workspace/note.md"), "corruption").unwrap();
    assert!(restore_backup(&backup, &restored, &[]).is_err());
    assert!(!restored.exists());
    fs::copy(
        fixture.workspace.join("note.md"),
        backup.join("workspace/note.md"),
    )
    .unwrap();
    fs::write(backup.join("workspace/unlisted.md"), "unlisted").unwrap();
    assert!(restore_backup(&backup, &restored, &[]).is_err());
    assert!(!restored.exists());
}

#[test]
fn rejects_manifest_traversal_and_unsupported_version() {
    let fixture = Fixture::new();
    let backup = fixture.backup();
    let manifest_path = backup.join("manifest.json");
    let original = fs::read(&manifest_path).unwrap();
    for path in [
        "../escaped",
        "workspace/../../escaped",
        "workspace/C:/escaped",
        "workspace/..\\escaped",
        "/absolute",
        "workspace/CON",
        "workspace/alias.",
    ] {
        let mut manifest: serde_json::Value = serde_json::from_slice(&original).unwrap();
        manifest["entries"][0]["path"] = path.into();
        fs::write(&manifest_path, serde_json::to_vec(&manifest).unwrap()).unwrap();
        assert!(
            restore_backup(&backup, &fixture.root.join("restored"), &[]).is_err(),
            "{path}"
        );
        assert!(!fixture.root.join("restored").exists());
    }
    let mut manifest: serde_json::Value = serde_json::from_slice(&original).unwrap();
    manifest["version"] = 999.into();
    fs::write(&manifest_path, serde_json::to_vec(&manifest).unwrap()).unwrap();
    assert!(restore_backup(&backup, &fixture.root.join("restored"), &[]).is_err());
}

#[cfg(windows)]
#[test]
fn rejects_reparse_point_sources_and_destination_ancestors() {
    use std::process::Command;
    let fixture = Fixture::new();
    let linked = fixture.workspace.join("linked");
    let status = Command::new("cmd")
        .args(["/c", "mklink", "/J"])
        .arg(&linked)
        .arg(&fixture.data)
        .output()
        .unwrap();
    assert!(
        status.status.success(),
        "{}",
        String::from_utf8_lossy(&status.stderr)
    );
    let destination = fixture.root.join("backup");
    assert!(create_backup(&fixture.workspace, &fixture.data, None, &destination, "{}").is_err());
    assert!(!destination.exists());
    fs::remove_dir(&linked).unwrap();
    let backup = fixture.backup();
    let alias = fixture.root.join("alias");
    let status = Command::new("cmd")
        .args(["/c", "mklink", "/J"])
        .arg(&alias)
        .arg(&fixture.workspace)
        .output()
        .unwrap();
    assert!(status.status.success());
    assert!(restore_backup(&backup, &alias.join("restored"), &[]).is_err());
    assert!(!fixture.workspace.join("restored").exists());
    fs::remove_dir(alias).unwrap();
}

#[test]
fn deleted_notes_and_raw_drafts_are_recovery_only_and_sync_is_disabled() {
    let fixture = Fixture::new();
    fixture.db.execute_batch("CREATE TABLE user_settings (github_token TEXT, auto_restore_on_start INTEGER); INSERT INTO user_settings VALUES ('secret', 1);").unwrap();
    let trash = fixture.root.join("deleted-notes/old-workspace/123");
    fs::create_dir_all(&trash).unwrap();
    fs::write(trash.join("note.md"), b"deleted  \r\n").unwrap();
    let draft_key = r#"editor-draft:v1:["C:/old-workspace","note.md"]"#;
    let draft =
        r#"{"title":"unsaved","content":"draft  \r\n","tags":[],"contentRevision":"old-revision"}"#;
    let frontend = serde_json::json!({draft_key: draft});
    let backup = fixture.root.join("backup");
    create_backup(
        &fixture.workspace,
        &fixture.data,
        Some(&fixture.root.join("deleted-notes")),
        &backup,
        &frontend.to_string(),
    )
    .unwrap();
    let restored = fixture.root.join("restored");
    restore_backup(&backup, &restored, &[]).unwrap();
    assert_eq!(
        fs::read(restored.join("recovery/deleted-notes/old-workspace/123/note.md")).unwrap(),
        b"deleted  \r\n"
    );
    assert!(!restored.join("app-data/deleted-notes").exists());
    let raw: serde_json::Value =
        serde_json::from_slice(&fs::read(restored.join("recovery/frontend-state.json")).unwrap())
            .unwrap();
    assert_eq!(raw[draft_key], draft);
    let app: serde_json::Value = serde_json::from_slice(
        &fs::read(restored.join("app-data/.snippets-code/app.json")).unwrap(),
    )
    .unwrap();
    assert_eq!(app["git"]["enabled"], false);
    assert_eq!(app["git"]["auto_sync"], false);
    assert_eq!(app["git"]["pull_on_start"], false);
    assert_eq!(app["plugins"]["todo"]["enabled"], false);
    let workspace: serde_json::Value = serde_json::from_slice(
        &fs::read(restored.join("workspace/.snippets-code/workspace.json")).unwrap(),
    )
    .unwrap();
    assert_eq!(workspace["settings"]["sync_enabled"], false);
    assert!(restored.join("recovery/original-app.json").exists());
    assert!(restored.join("recovery/original-workspace.json").exists());
    let db = Connection::open(restored.join("app-data/core.db")).unwrap();
    assert_eq!(
        db.query_row("SELECT count(*) FROM user_settings", [], |r| r
            .get::<_, i64>(0))
            .unwrap(),
        0
    );
    assert_eq!(
        fixture
            .db
            .query_row("SELECT count(*) FROM user_settings", [], |r| r
                .get::<_, i64>(0))
            .unwrap(),
        1
    );
}

#[test]
fn recovery_works_when_the_previous_workspace_and_its_parent_have_been_lost() {
    let fixture = Fixture::new();
    let backup = fixture.backup();
    let lost = fixture.root.join("removed-parent/removed-workspace");
    restore_backup(&backup, &fixture.root.join("restored"), &[&lost]).unwrap();
    assert!(!lost.exists());
}

#[test]
fn duplicate_paths_and_missing_payload_are_rejected() {
    let fixture = Fixture::new();
    let backup = fixture.backup();
    let path = backup.join("manifest.json");
    let original = fs::read(&path).unwrap();
    let mut manifest: serde_json::Value = serde_json::from_slice(&original).unwrap();
    let duplicate = manifest["entries"][0].clone();
    manifest["entries"].as_array_mut().unwrap().push(duplicate);
    fs::write(&path, serde_json::to_vec(&manifest).unwrap()).unwrap();
    assert!(restore_backup(&backup, &fixture.root.join("restored"), &[]).is_err());
    fs::write(&path, original).unwrap();
    fs::remove_file(backup.join("workspace/note.md")).unwrap();
    assert!(restore_backup(&backup, &fixture.root.join("restored"), &[]).is_err());
    assert!(!fixture.root.join("restored").exists());
}

#[test]
fn a_valid_checksum_manifest_cannot_restore_reinstallable_plugin_code() {
    let fixture = Fixture::new();
    let backup = fixture.backup();
    fs::create_dir_all(backup.join("app-data/packages/plugins/unsafe")).unwrap();
    fs::write(
        backup.join("app-data/packages/plugins/unsafe/runtime.js"),
        "code",
    )
    .unwrap();
    write_manifest(&backup, "snippets-backup").unwrap();
    assert!(restore_backup(&backup, &fixture.root.join("restored"), &[]).is_err());
    assert!(!fixture.root.join("restored").exists());
}

#[test]
fn interrupted_internal_save_temporaries_are_not_exported_as_user_attachments() {
    let fixture = Fixture::new();
    let name = format!(".markdown-{}.tmp", uuid::Uuid::new_v4());
    fs::write(fixture.workspace.join(&name), "unfinished staged save").unwrap();
    fs::write(fixture.workspace.join("attachment.tmp"), "user attachment").unwrap();
    let backup = fixture.backup();
    assert!(!backup.join("workspace").join(name).exists());
    assert_eq!(
        fs::read_to_string(backup.join("workspace/attachment.tmp")).unwrap(),
        "user attachment"
    );
}
