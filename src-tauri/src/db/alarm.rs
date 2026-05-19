use crate::db::DbConnectionManager;
use crate::plugins::todo::AlarmCard;
use chrono::{DateTime, Local};

// ============= 提醒卡片相关数据库操作 =============

fn parse_alarm_datetime(id: &str, field: &str, value: String) -> DateTime<Local> {
    match DateTime::parse_from_rfc3339(&value) {
        Ok(datetime) => datetime.with_timezone(&Local),
        Err(error) => {
            log::warn!(
                "[Todo] 提醒 {} 的 {} 时间解析失败，已使用当前时间兜底: {} ({})",
                id,
                field,
                value,
                error
            );
            Local::now()
        }
    }
}

// 获取所有提醒卡片
pub fn get_all_alarm_cards() -> Result<Vec<AlarmCard>, rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let mut stmt = conn.prepare("SELECT id, time, title, weekdays, reminder_time, is_active, created_at, updated_at, alarm_type, specific_dates FROM alarm_cards")?;
    let card_iter = stmt.query_map([], |row| {
        let id: String = row.get(0)?;
        let weekdays_str: String = row.get(3)?;
        let alarm_type_str: Option<String> = row.get(8).ok();
        let alarm_type = match alarm_type_str.as_deref() {
            Some("Daily") => crate::plugins::todo::AlarmType::Daily,
            Some("SpecificDate") => crate::plugins::todo::AlarmType::SpecificDate,
            _ => crate::plugins::todo::AlarmType::Weekly, // 默认为每周
        };
        let weekdays = match serde_json::from_str(&weekdays_str) {
            Ok(weekdays) => weekdays,
            Err(error) => {
                log::warn!(
                    "[Todo] 提醒 {} 的 weekdays 解析失败，已按空列表处理: {} ({})",
                    id,
                    weekdays_str,
                    error
                );
                Vec::new()
            }
        };
        let created_at = parse_alarm_datetime(&id, "created_at", row.get(6)?);
        let updated_at = parse_alarm_datetime(&id, "updated_at", row.get(7)?);
        Ok(AlarmCard {
            id,
            time: row.get(1)?,
            title: row.get(2)?,
            weekdays,
            reminder_time: row.get(4)?,
            is_active: row.get(5)?,
            created_at,
            updated_at,
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

// 添加或更新提醒卡片
pub fn add_or_update_alarm_card(card: &AlarmCard) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    let weekdays_str = serde_json::to_string(&card.weekdays).unwrap_or_else(|error| {
        log::warn!(
            "[Todo] 提醒 {} 的 weekdays 序列化失败，已按空列表保存: {}",
            card.id,
            error
        );
        "[]".to_string()
    });
    let alarm_type_str = match card.alarm_type {
        crate::plugins::todo::AlarmType::Daily => "Daily",
        crate::plugins::todo::AlarmType::Weekly => "Weekly",
        crate::plugins::todo::AlarmType::SpecificDate => "SpecificDate",
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

// 删除提醒卡片
pub fn delete_alarm_card_by_id(id: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(
        "DELETE FROM alarm_cards WHERE id = ?1",
        rusqlite::params![id],
    )?;
    Ok(())
}

// 切换提醒卡片的激活状态
#[allow(dead_code)]
pub fn toggle_alarm_card_active(id: &str) -> Result<(), rusqlite::Error> {
    let conn = DbConnectionManager::get()?;
    conn.execute(
        "UPDATE alarm_cards SET is_active = NOT is_active WHERE id = ?1",
        rusqlite::params![id],
    )?;
    Ok(())
}
