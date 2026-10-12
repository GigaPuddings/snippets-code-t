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

#[cfg(test)]
mod tests {
    use super::*;
    use crate::plugins::todo::AlarmType;
    use chrono::TimeZone;

    #[test]
    fn pending_snoozes_and_delivery_records_survive_reopening_storage() {
        struct TempDb(std::path::PathBuf);
        impl Drop for TempDb {
            fn drop(&mut self) {
                let _ = std::fs::remove_file(&self.0);
            }
        }
        let file = TempDb(
            std::env::temp_dir().join(format!("todo-persistence-{}.db", uuid::Uuid::new_v4())),
        );
        let (_, card) = fixture();
        let mut conn = Connection::open(&file.0).unwrap();
        crate::db::init::create_alarm_cards_table(&conn).unwrap();
        super::super::save_on(&mut conn, &card).unwrap();
        assert!(claim_on(&conn, &card, 100).unwrap());
        queue_on(
            &conn,
            &SnoozedAlarm {
                id: "request".into(),
                alarm_id: Some(card.id.clone()),
                title: "Test".into(),
                due_at: 150,
            },
        )
        .unwrap();
        drop(conn);
        let conn = Connection::open(&file.0).unwrap();
        crate::db::init::create_alarm_cards_table(&conn).unwrap();
        assert!(!claim_on(&conn, &card, 100).unwrap());
        assert_eq!(
            conn.query_row(
                "SELECT due_at FROM alarm_snoozes WHERE id = 'request'",
                [],
                |row| row.get::<_, i64>(0)
            )
            .unwrap(),
            150
        );
    }
    fn fixture() -> (Connection, AlarmCard) {
        let mut conn = Connection::open_in_memory().unwrap();
        crate::db::init::create_alarm_cards_table(&conn).unwrap();
        let now = Local.with_ymd_and_hms(2026, 10, 12, 8, 0, 0).unwrap();
        let card = AlarmCard {
            id: "alarm".into(),
            time: "09:00".into(),
            title: "Test".into(),
            weekdays: vec![],
            reminder_time: "5".into(),
            is_active: true,
            created_at: now,
            updated_at: now,
            time_left: String::new(),
            next_alarm_at: None,
            alarm_type: AlarmType::Daily,
            specific_dates: None,
        };
        super::super::save_on(&mut conn, &card).unwrap();
        (conn, card)
    }
    #[test]
    fn occurrences_are_claimed_once_and_stale_edits_cannot_fire() {
        let (conn, card) = fixture();
        assert!(claim_on(&conn, &card, 100).unwrap());
        assert!(!claim_on(&conn, &card, 100).unwrap());
        assert!(!claim_on(&conn, &card, 99).unwrap());
        assert!(claim_on(&conn, &card, 101).unwrap());
        conn.execute("UPDATE alarm_cards SET updated_at = 'changed'", [])
            .unwrap();
        assert!(!claim_on(&conn, &card, 102).unwrap());
    }
    #[test]
    fn snoozes_are_idempotent_and_deleted_with_their_reminder() {
        let (mut conn, _) = fixture();
        let alarm = SnoozedAlarm {
            id: "request".into(),
            alarm_id: Some("alarm".into()),
            title: "Test".into(),
            due_at: 100,
        };
        queue_on(&conn, &alarm).unwrap();
        queue_on(&conn, &alarm).unwrap();
        let count: i64 = conn
            .query_row("SELECT count(*) FROM alarm_snoozes", [], |row| row.get(0))
            .unwrap();
        assert_eq!(count, 1);
        super::super::delete_on(&mut conn, "alarm").unwrap();
        let count: i64 = conn
            .query_row("SELECT count(*) FROM alarm_snoozes", [], |row| row.get(0))
            .unwrap();
        assert_eq!(count, 0);
    }

    #[test]
    fn updating_cards_preserves_firings_and_pausing_cancels_pending_snoozes() {
        let (mut conn, mut card) = fixture();
        assert!(claim_on(&conn, &card, 100).unwrap());
        queue_on(
            &conn,
            &SnoozedAlarm {
                id: "request".into(),
                alarm_id: Some(card.id.clone()),
                title: "Test".into(),
                due_at: 110,
            },
        )
        .unwrap();
        card.title = "Renamed".into();
        super::super::save_on(&mut conn, &card).unwrap();
        assert!(!claim_on(&conn, &card, 100).unwrap());
        card.is_active = false;
        super::super::save_on(&mut conn, &card).unwrap();
        assert_eq!(
            conn.query_row("SELECT count(*) FROM alarm_snoozes", [], |row| row
                .get::<_, i64>(0))
                .unwrap(),
            0
        );
        assert!(queue_on(
            &conn,
            &SnoozedAlarm {
                id: "new".into(),
                alarm_id: Some(card.id),
                title: "Test".into(),
                due_at: 120
            }
        )
        .is_err());
    }

    #[test]
    fn midnight_polling_keeps_just_due_snoozes_but_discards_old_backlog() {
        let (conn, card) = fixture();
        let now = Local.with_ymd_and_hms(2026, 10, 13, 0, 0, 5).unwrap();
        for (id, due) in [
            ("recent", now.timestamp() - 10),
            ("old", now.timestamp() - 3600),
        ] {
            queue_on(
                &conn,
                &SnoozedAlarm {
                    id: id.into(),
                    alarm_id: Some(card.id.clone()),
                    title: "Test".into(),
                    due_at: due,
                },
            )
            .unwrap();
        }
        let ready = due_snoozes_on(&conn, now).unwrap();
        assert_eq!(ready.len(), 1);
        assert_eq!(ready[0].id, "recent");
    }
}
