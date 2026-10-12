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

#[cfg(test)]
mod tests {
    use super::*;
    pub(super) fn card() -> AlarmCard {
        let now = Local.with_ymd_and_hms(2026, 10, 12, 8, 0, 0).unwrap();
        AlarmCard {
            id: "alarm".into(),
            time: "09:00".into(),
            title: "Test".into(),
            weekdays: vec!["Mon".into()],
            reminder_time: "5".into(),
            is_active: true,
            created_at: now,
            updated_at: now,
            time_left: String::new(),
            next_alarm_at: None,
            alarm_type: AlarmType::Weekly,
            specific_dates: None,
        }
    }
    #[test]
    fn late_checks_catch_today_but_not_yesterday_or_newly_edited_times() {
        let mut card = card();
        let now = Local.with_ymd_and_hms(2026, 10, 12, 11, 0, 0).unwrap();
        assert_eq!(
            due_today(&card, now).unwrap().format("%H:%M").to_string(),
            "09:00"
        );
        assert!(due_today(&card, now - Duration::days(1)).is_none());
        card.updated_at = now;
        assert!(due_today(&card, now).is_none());
    }
    #[test]
    fn empty_weekdays_never_fire_and_next_date_agrees_with_countdown() {
        let mut card = card();
        card.weekdays.clear();
        assert!(due_today(&card, card.created_at + Duration::hours(2)).is_none());
        assert!(next_alarm(&card, card.created_at).is_none());
        card.alarm_type = AlarmType::SpecificDate;
        card.specific_dates = Some(vec!["2026-10-13".into(), "2026-10-14".into()]);
        assert_eq!(
            next_alarm(&card, card.created_at)
                .unwrap()
                .date_naive()
                .to_string(),
            "2026-10-13"
        );
    }
    #[test]
    fn validates_legacy_weekdays_dates_and_untrusted_snooze_values() {
        let mut card = card();
        card.weekdays = vec!["一".into(), "Mon".into()];
        let now = card.created_at;
        validate(&mut card, now, None).unwrap();
        assert_eq!(card.weekdays, ["Mon"]);
        for value in ["-1", "0", "1441", "9223372036854775807", "bad"] {
            assert!(snooze_minutes(value).is_err());
        }
        card.alarm_type = AlarmType::SpecificDate;
        card.specific_dates = Some(vec!["2026-10-11".into()]);
        assert!(validate(&mut card, now, None).is_err());
        card.title = " ".into();
        assert!(validate(&mut card, now, None).is_err());
    }

    #[test]
    fn editing_old_dates_preserves_existing_content_but_cannot_add_new_past_dates() {
        let mut existing = card();
        existing.alarm_type = AlarmType::SpecificDate;
        existing.specific_dates = Some(vec!["2026-10-11".into(), "2026-10-13".into()]);
        let mut edited = existing.clone();
        edited.title = "Updated title".into();
        validate(&mut edited, existing.created_at, Some(&existing)).unwrap();
        edited
            .specific_dates
            .as_mut()
            .unwrap()
            .push("2026-10-10".into());
        assert!(validate(&mut edited, existing.created_at, Some(&existing)).is_err());
    }

    #[test]
    fn canonical_storage_keeps_legacy_weekday_response_format() {
        let value = serde_json::to_value(card()).unwrap();
        assert_eq!(value["weekdays"], serde_json::json!(["一"]));
    }
}
