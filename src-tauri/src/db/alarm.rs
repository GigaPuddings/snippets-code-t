use crate::alarm::AlarmCard;
use crate::db::DbConnectionManager;

// ============= 提醒卡片相关数据库操作 =============

/// 获取所有提醒卡片
pub fn get_all_alarm_cards() -> Result<Vec<AlarmCard>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let mut stmt = conn.prepare("SELECT id, time, title, weekdays, reminder_time, is_active, created_at, updated_at, alarm_type, specific_dates FROM alarm_cards")?;
    let card_iter = stmt.query_map([], |row| {
        let weekdays_str: String = row.get(3)?;
        let alarm_type_str: Option<String> = row.get(8).ok();
        let alarm_type = match alarm_type_str.as_deref() {
            Some("Daily") => crate::alarm::AlarmType::Daily,
            Some("SpecificDate") => crate::alarm::AlarmType::SpecificDate,
            _ => crate::alarm::AlarmType::Weekly, // 默认为每周
        };
        Ok(AlarmCard {
            id: row.get(0)?,
            time: row.get(1)?,
            title: row.get(2)?,
            weekdays: serde_json::from_str(&weekdays_str).unwrap_or_default(),
            reminder_time: row.get(4)?,
            is_active: row.get(5)?,
            created_at: row.get::<_, String>(6)?.parse().unwrap(),
            updated_at: row.get::<_, String>(7)?.parse().unwrap(),
            time_left: "".to_string(), // This is a calculated field
            alarm_type,
            specific_dates: {
                let dates_str: Option<String> = row.get(9).ok();
                dates_str.and_then(|s| {
                    if s.is_empty() {
                        None
                    } else {
                        Some(s.split(',').map(|s| s.trim().to_string()).collect())
                    }
                })
            },
        })
    })?;

    let mut cards = Vec::new();
    for card in card_iter {
        cards.push(card?);
    }
    Ok(cards)
}

/// 添加或更新提醒卡片
pub fn add_or_update_alarm_card(card: &AlarmCard) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let weekdays_str = serde_json::to_string(&card.weekdays).unwrap_or_default();
    let alarm_type_str = match card.alarm_type {
        crate::alarm::AlarmType::Daily => "Daily",
        crate::alarm::AlarmType::Weekly => "Weekly",
        crate::alarm::AlarmType::SpecificDate => "SpecificDate",
    };

    conn.execute(
        "INSERT OR REPLACE INTO alarm_cards (id, time, title, weekdays, reminder_time, is_active, created_at, updated_at, alarm_type, specific_dates) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10)",
        rusqlite::params![
            card.id,
            card.time,
            card.title,
            weekdays_str,
            card.reminder_time,
            card.is_active,
            card.created_at.to_rfc3339(),
            card.updated_at.to_rfc3339(),
            alarm_type_str,
            card.specific_dates.as_ref().map(|dates| dates.join(",")),
        ],
    )?;
    Ok(())
}

/// 删除提醒卡片
pub fn delete_alarm_card_by_id(id: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(
        "DELETE FROM alarm_cards WHERE id = ?1",
        rusqlite::params![id],
    )?;
    Ok(())
}

/// 切换提醒卡片的激活状态
#[allow(dead_code)]
pub fn toggle_alarm_card_active(id: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(
        "UPDATE alarm_cards SET is_active = NOT is_active WHERE id = ?1",
        rusqlite::params![id],
    )?;
    Ok(())
}
