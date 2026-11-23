use super::{AlarmCard, AlarmType};
use chrono::{DateTime, Datelike, Duration, Local, NaiveDate, NaiveTime, TimeZone};

pub(super) const WEEKDAYS: [&str; 7] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

pub(super) fn normalize_weekday(day: &str) -> Option<&'static str> {
    match day {
        "一" | "Mon" => Some("Mon"),
        "二" | "Tue" => Some("Tue"),
        "三" | "Wed" => Some("Wed"),
        "四" | "Thu" => Some("Thu"),
        "五" | "Fri" => Some("Fri"),
        "六" | "Sat" => Some("Sat"),
        "日" | "Sun" => Some("Sun"),
        _ => None,
    }
}

fn at(date: NaiveDate, time: NaiveTime) -> Option<DateTime<Local>> {
    Local.from_local_datetime(&date.and_time(time)).earliest()
}

fn matches_date(card: &AlarmCard, date: NaiveDate) -> bool {
    match card.alarm_type {
        AlarmType::Daily => true,
        AlarmType::Weekly => card.weekdays.iter().any(|day| {
            normalize_weekday(day) == Some(WEEKDAYS[date.weekday().num_days_from_monday() as usize])
        }),
        AlarmType::SpecificDate => card.specific_dates.as_ref().is_some_and(|dates| {
            dates
                .iter()
                .any(|value| NaiveDate::parse_from_str(value, "%Y-%m-%d").ok() == Some(date))
        }),
    }
}

pub(super) fn due_today(card: &AlarmCard, now: DateTime<Local>) -> Option<DateTime<Local>> {
    if !card.is_active || !matches_date(card, now.date_naive()) {
        return None;
    }
    let due = at(
        now.date_naive(),
        NaiveTime::parse_from_str(&card.time, "%H:%M").ok()?,
    )?;
    // Editing or enabling a reminder after its time schedules its next occurrence.
    (due <= now && due >= card.updated_at).then_some(due)
}

pub(super) fn next_alarm(card: &AlarmCard, now: DateTime<Local>) -> Option<DateTime<Local>> {
    if !card.is_active {
        return None;
    }
    let time = NaiveTime::parse_from_str(&card.time, "%H:%M").ok()?;
    if matches!(card.alarm_type, AlarmType::SpecificDate) {
        return card
            .specific_dates
            .as_ref()?
            .iter()
            .filter_map(|value| at(NaiveDate::parse_from_str(value, "%Y-%m-%d").ok()?, time))
            .filter(|due| *due > now)
            .min();
    }
    (0..=7)
        .filter_map(|offset| {
            let date = now
                .date_naive()
                .checked_add_signed(Duration::days(offset))?;
            matches_date(card, date).then(|| at(date, time)).flatten()
        })
        .find(|due| *due > now)
}

pub(super) fn snooze_minutes(value: &str) -> Result<i64, String> {
    value
        .parse::<i64>()
        .ok()
        .filter(|minutes| (1..=1440).contains(minutes))
        .ok_or_else(|| "稍后提醒时间必须为 1–1440 分钟".into())
}

pub(super) fn validate(
    card: &mut AlarmCard,
    now: DateTime<Local>,
    existing: Option<&AlarmCard>,
) -> Result<(), String> {
    card.title = card.title.trim().to_string();
    if card.title.is_empty() || card.title.chars().count() > 200 {
        return Err("提醒标题必须为 1–200 个字符".into());
    }
    let time = NaiveTime::parse_from_str(&card.time, "%H:%M")
        .map_err(|_| "提醒时间必须为 HH:mm 格式".to_string())?;
    card.time = time.format("%H:%M").to_string();
    snooze_minutes(&card.reminder_time)?;
    card.weekdays = card
        .weekdays
        .iter()
        .map(|day| {
            normalize_weekday(day)
                .map(str::to_string)
                .ok_or_else(|| "提醒星期无效".to_string())
        })
        .collect::<Result<Vec<_>, _>>()?;
    card.weekdays.sort();
    card.weekdays.dedup();
    match card.alarm_type {
        AlarmType::Weekly if card.weekdays.is_empty() => {
            return Err("每周提醒请至少选择一个星期".into())
        }
        AlarmType::SpecificDate => {
            let dates = card
                .specific_dates
                .as_mut()
                .filter(|dates| !dates.is_empty())
                .ok_or_else(|| "指定日期提醒请至少选择一个日期".to_string())?;
            for value in dates.iter_mut() {
                let date = NaiveDate::parse_from_str(value, "%Y-%m-%d")
                    .map_err(|_| "提醒日期格式无效".to_string())?;
                let unchanged = existing.is_some_and(|old| {
                    old.time == card.time
                        && old
                            .specific_dates
                            .as_ref()
                            .is_some_and(|dates| dates.contains(value))
                });
                if !unchanged && at(date, time).is_none_or(|due| due <= now) {
                    return Err("指定日期提醒必须晚于当前时间".into());
                }
                *value = date.to_string();
            }
            dates.sort();
            dates.dedup();
        }
        _ => {
            card.specific_dates = None;
        }
    }
    Ok(())
}
