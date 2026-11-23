use super::AlarmCard;
use crate::db::DbConnectionManager;
use chrono::{DateTime, Local};
use rusqlite::{params, Connection};

#[derive(Clone, Debug)]
pub struct SnoozedAlarm {
    pub id: String,
    pub alarm_id: Option<String>,
    pub title: String,
    pub due_at: i64,
}

pub fn claim_alarm_occurrence(card: &AlarmCard, due: DateTime<Local>) -> rusqlite::Result<bool> {
    claim_on(&DbConnectionManager::get_core()?, card, due.timestamp())
}

fn claim_on(conn: &Connection, card: &AlarmCard, due: i64) -> rusqlite::Result<bool> {
    Ok(conn.execute(
        "INSERT INTO alarm_firings (alarm_id, occurrence_at)
         SELECT ?1, ?2 WHERE EXISTS (SELECT 1 FROM alarm_cards
           WHERE id = ?1 AND is_active = 1 AND updated_at = ?3)
         ON CONFLICT(alarm_id) DO UPDATE SET occurrence_at = excluded.occurrence_at
         WHERE alarm_firings.occurrence_at < excluded.occurrence_at",
        params![card.id, due, card.updated_at.to_rfc3339()],
    )? > 0)
}

pub fn release_alarm_occurrence(card: &AlarmCard, due: DateTime<Local>) -> rusqlite::Result<()> {
    DbConnectionManager::get_core()?.execute(
        "DELETE FROM alarm_firings WHERE alarm_id = ?1 AND occurrence_at = ?2",
        params![card.id, due.timestamp()],
    )?;
    Ok(())
}

pub fn finish_specific_occurrence(card: &AlarmCard, due: DateTime<Local>) -> rusqlite::Result<()> {
    let remaining: Vec<_> = card
        .specific_dates
        .as_ref()
        .into_iter()
        .flatten()
        .filter(|value| {
            chrono::NaiveDate::parse_from_str(value, "%Y-%m-%d")
                .is_ok_and(|value| value > due.date_naive())
        })
        .cloned()
        .collect();
    DbConnectionManager::get_core()?.execute(
        "UPDATE alarm_cards SET specific_dates = ?1, is_active = ?2, updated_at = ?3
         WHERE id = ?4 AND updated_at = ?5",
        params![
            remaining.join(","),
            !remaining.is_empty(),
            Local::now().to_rfc3339(),
            card.id,
            card.updated_at.to_rfc3339()
        ],
    )?;
    Ok(())
}

pub fn queue_snooze(alarm: &SnoozedAlarm) -> rusqlite::Result<()> {
    queue_on(&DbConnectionManager::get_core()?, alarm)
}

fn queue_on(conn: &Connection, alarm: &SnoozedAlarm) -> rusqlite::Result<()> {
    let changed = conn.execute(
        "INSERT INTO alarm_snoozes (id, alarm_id, title, due_at)
        SELECT ?1, ?2, ?3, ?4 WHERE ?2 IS NULL OR EXISTS (
            SELECT 1 FROM alarm_cards WHERE id = ?2 AND (is_active = 1 OR
            (alarm_type = 'SpecificDate' AND COALESCE(specific_dates, '') = '')))
        ON CONFLICT(id) DO NOTHING",
        params![alarm.id, alarm.alarm_id, alarm.title, alarm.due_at],
    )?;
    if changed == 0
        && !conn.query_row(
            "SELECT EXISTS(SELECT 1 FROM alarm_snoozes WHERE id = ?1)",
            [&alarm.id],
            |row| row.get::<_, bool>(0),
        )?
    {
        return Err(rusqlite::Error::QueryReturnedNoRows);
    }
    Ok(())
}

pub fn due_snoozes(now: DateTime<Local>) -> rusqlite::Result<Vec<SnoozedAlarm>> {
    let conn = DbConnectionManager::get_core()?;
    due_snoozes_on(&conn, now)
}

fn due_snoozes_on(conn: &Connection, now: DateTime<Local>) -> rusqlite::Result<Vec<SnoozedAlarm>> {
    let start = now
        .date_naive()
        .and_hms_opt(0, 0, 0)
        .and_then(|value| value.and_local_timezone(Local).earliest())
        .map(|value| value.timestamp())
        .unwrap_or(now.timestamp());
    // A normal polling interval can cross midnight just after a snooze is due.
    let cutoff = start.min(now.timestamp().saturating_sub(300));
    conn.execute(
        "DELETE FROM alarm_snoozes WHERE due_at < ?1 OR
        (alarm_id IS NOT NULL AND NOT EXISTS(SELECT 1 FROM alarm_cards WHERE id = alarm_id))",
        [cutoff],
    )?;
    let mut stmt = conn.prepare(
        "SELECT id, alarm_id, title, due_at FROM alarm_snoozes
        WHERE due_at <= ?1 ORDER BY due_at",
    )?;
    let rows = stmt.query_map([now.timestamp()], |row| {
        Ok(SnoozedAlarm {
            id: row.get(0)?,
            alarm_id: row.get(1)?,
            title: row.get(2)?,
            due_at: row.get(3)?,
        })
    })?;
    rows.collect()
}

pub fn take_snooze(id: &str) -> rusqlite::Result<bool> {
    Ok(
        DbConnectionManager::get_core()?
            .execute("DELETE FROM alarm_snoozes WHERE id = ?1", [id])?
            > 0,
    )
}

pub fn has_snoozes() -> rusqlite::Result<bool> {
    DbConnectionManager::get_core()?.query_row(
        "SELECT EXISTS(SELECT 1 FROM alarm_snoozes)",
        [],
        |row| row.get(0),
    )
}

pub fn clear_snoozes() -> rusqlite::Result<()> {
    DbConnectionManager::get_core()?.execute("DELETE FROM alarm_snoozes", [])?;
    Ok(())
}
