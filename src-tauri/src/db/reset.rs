use crate::db::DbConnectionManager;

fn table_exists(
    transaction: &rusqlite::Transaction<'_>,
    table_name: &str,
) -> Result<bool, rusqlite::Error> {
    transaction.query_row(
        "SELECT EXISTS(
             SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?1
         )",
        [table_name],
        |row| row.get(0),
    )
}

pub fn reset_rebuildable_indexes(
    reset_apps: bool,
    reset_bookmarks: bool,
    reset_desktop_files: bool,
) -> Result<(), rusqlite::Error> {
    let mut connection = DbConnectionManager::get_search()?;
    let transaction = connection.transaction()?;

    if reset_apps && table_exists(&transaction, "apps")? {
        transaction.execute("DELETE FROM apps WHERE source_kind = 'scanner'", [])?;
        transaction.execute("DELETE FROM index_meta WHERE source = 'apps'", [])?;
    }
    if reset_bookmarks && table_exists(&transaction, "bookmarks")? {
        transaction.execute("DELETE FROM bookmarks WHERE source_kind = 'scanner'", [])?;
        transaction.execute("DELETE FROM index_meta WHERE source = 'bookmarks'", [])?;
    }
    if reset_desktop_files && table_exists(&transaction, "desktop_file_cache")? {
        transaction.execute("DELETE FROM desktop_file_cache", [])?;
        transaction.execute("DELETE FROM index_meta WHERE source = 'desktop-files'", [])?;
    }

    transaction.commit()
}
