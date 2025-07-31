use crate::db;
use crate::window::create_notification_window;
use crate::APP;
use chrono::{DateTime, Datelike as _, Duration, Local, NaiveDate, NaiveTime, TimeZone, Timelike as _};
use log::info;
use serde::{Deserialize, Serialize};
use std::sync::atomic::{AtomicBool, Ordering};
use std::thread;
use std::time::Duration as StdDuration;
use tauri_plugin_notification::NotificationExt;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub enum AlarmType {
    Daily,
    Weekly,
    SpecificDate,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AlarmCard {
    pub id: String,
    pub time: String,
    pub title: String,
    pub weekdays: Vec<String>,
    pub reminder_time: String,
    pub is_active: bool,
    pub created_at: DateTime<Local>,
    pub updated_at: DateTime<Local>,
    pub time_left: String,
    pub alarm_type: AlarmType,
    pub specific_dates: Option<Vec<String>>,
}

static SERVICE_RUNNING: AtomicBool = AtomicBool::new(false);
fn should_start_service() -> bool {
    if let Ok(cards) = db::get_all_alarm_cards() {
        let now = Local::now();
        let current_weekday = now.format("%a").to_string();

        cards.iter().any(|card| {
            if !card.is_active {
                return false;
            }
            
            match card.alarm_type {
                AlarmType::Daily => {
                    if let Ok(alarm_time) = NaiveTime::parse_from_str(&card.time, "%H:%M") {
                        let current_time = now.time();
                        // 每天都要检查，如果今天时间还没到就需要启动服务
                        return alarm_time > current_time;
                    }
                    false
                },
                AlarmType::Weekly => {
                    // 检查是否是今天需要提醒的事项
                    if card.weekdays.is_empty() || card.weekdays.contains(&current_weekday) {
                        if let Ok(alarm_time) = NaiveTime::parse_from_str(&card.time, "%H:%M") {
                            let current_time = now.time();
                            // 如果代办提醒时间还没到，就需要启动服务
                            return alarm_time > current_time;
                        }
                    }
                    false
                },
                AlarmType::SpecificDate => {
                    if let Some(dates) = &card.specific_dates {
                        for date_str in dates {
                            if let Ok(target_date) = NaiveDate::parse_from_str(date_str, "%Y-%m-%d") {
                                if let Ok(alarm_time) = NaiveTime::parse_from_str(&card.time, "%H:%M") {
                                    let target_datetime = target_date.and_time(alarm_time);
                                    if let Some(target) = Local.from_local_datetime(&target_datetime).single() {
                                        // 如果任何一个指定日期时间还没到，就需要启动服务
                                        if target > now {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    false
                }
            }
        })
    } else {
        false
    }
}

impl AlarmCard {
    fn format_duration(diff: Duration) -> String {
        let total_seconds = diff.num_seconds();
        if total_seconds <= 0 {
            return "已过期".to_string();
        }

        let total_minutes = (total_seconds as f64 / 60.0).ceil() as i64;
        let days = total_minutes / (24 * 60);
        let remaining_minutes = total_minutes % (24 * 60);
        let hours = remaining_minutes / 60;
        let minutes = remaining_minutes % 60;

        if days > 7 {
            format!("{} 周后", (days as f64 / 7.0).ceil() as i64)
        } else if days > 0 {
            format!("{} 天后", days)
        } else if hours > 0 {
            if minutes > 0 {
                format!("{} 小时 {} 分钟后", hours, minutes)
            } else {
                format!("{} 小时后", hours)
            }
        } else if minutes > 0 {
            format!("{} 分钟后", minutes)
        } else {
            "不到 1 分钟".to_string()
        }
    }
    pub fn calculate_time_left(&self) -> String {
        let now = Local::now();
        let alarm_time = match NaiveTime::parse_from_str(&self.time, "%H:%M") {
            Ok(time) => time,
            Err(_) => return "时间格式错误".to_string(),
        };
        
        match self.alarm_type {
            AlarmType::Daily => {
                let now_time = now.time();
                let diff = if alarm_time > now_time {
                    alarm_time.signed_duration_since(now_time)
                } else {
                    alarm_time.signed_duration_since(now_time) + Duration::hours(24)
                };

                Self::format_duration(diff)
            },
            AlarmType::SpecificDate => {
                if let Some(dates) = &self.specific_dates {
                    if dates.is_empty() {
                        return "未设置日期".to_string();
                    }
                    
                    // 找到最近的未过期日期
                    let mut nearest_duration = None;
                    
                    for date_str in dates {
                        if let Ok(target_date) = NaiveDate::parse_from_str(date_str, "%Y-%m-%d") {
                            let target_datetime = target_date.and_time(alarm_time);
                            if let Some(target) = Local.from_local_datetime(&target_datetime).single() {
                                let diff = target.signed_duration_since(now);
                                if diff.num_seconds() > 0 {
                                    if nearest_duration.is_none() || diff < nearest_duration.unwrap() {
                                        nearest_duration = Some(diff);
                                    }
                                }
                            }
                        }
                    }
                    
                    if let Some(duration) = nearest_duration {
                        Self::format_duration(duration)
                    } else {
                        // 如果所有日期都已过期，显示最晚的过期时间
                        let mut latest_expired = None;
                        for date_str in dates {
                            if let Ok(target_date) = NaiveDate::parse_from_str(date_str, "%Y-%m-%d") {
                                let target_datetime = target_date.and_time(alarm_time);
                                if let Some(target) = Local.from_local_datetime(&target_datetime).single() {
                                    if latest_expired.is_none() || target > latest_expired.unwrap() {
                                        latest_expired = Some(target);
                                    }
                                }
                            }
                        }
                        "已过期".to_string()
                    }
                } else {
                    "未设置日期".to_string()
                }
            },
            AlarmType::Weekly => {
                let current_weekday = now.format("%a").to_string();
                let now_time = now.time();

                                    if !self.weekdays.is_empty() {
                        if self.weekdays.contains(&current_weekday) {
                            if alarm_time > now_time {
                            let diff = alarm_time.signed_duration_since(now_time);
                            return Self::format_duration(diff);
                        }
                    }

                    let mut days_until_next = 7;
                    let current_day = now.weekday().num_days_from_monday();

                    for weekday in &self.weekdays {
                        let target_day = match weekday.as_str() {
                            "Mon" => 0,
                            "Tue" => 1,
                            "Wed" => 2,
                            "Thu" => 3,
                            "Fri" => 4,
                            "Sat" => 5,
                            "Sun" => 6,
                            _ => continue,
                        };

                        let mut days = target_day as i32 - current_day as i32;
                        if days <= 0 {
                            days += 7;
                        }
                        if days == 7 && alarm_time > now_time {
                            days = 0;
                        }
                        days_until_next = days_until_next.min(days);
                    }

                    let target_time = now + Duration::days(days_until_next as i64);
                    let target_datetime = target_time.date_naive().and_time(alarm_time);
                    let diff = target_datetime.signed_duration_since(now.naive_local());

                    Self::format_duration(diff)
                } else {
                    "未设置星期".to_string()
                }
            }
        }
    }
}

// 添加星期转换函数
fn convert_weekday(day: &str) -> &str {
    match day {
        "一" => "Mon",
        "二" => "Tue",
        "三" => "Wed",
        "四" => "Thu",
        "五" => "Fri",
        "六" => "Sat",
        "日" => "Sun",
        _ => day,
    }
}

// 修改 add_alarm_card 函数
#[tauri::command]
pub fn add_alarm_card(mut card: AlarmCard) -> Result<AlarmCard, String> {
    // 转换星期格式
    card.weekdays = card
        .weekdays
        .iter()
        .map(|day| convert_weekday(day).to_string())
        .collect();

    let new_card = AlarmCard {
        id: uuid::Uuid::new_v4().to_string(),
        created_at: Local::now(),
        updated_at: Local::now(),
        time_left: String::new(),
        ..card
    };

    if let Err(e) = db::add_or_update_alarm_card(&new_card) {
        return Err(e.to_string());
    }

    // 在新线程中检查和启动服务
    if let Some(app) = APP.get() {
        let app_handle = app.clone();
        thread::spawn(move || {
            if !SERVICE_RUNNING.load(Ordering::SeqCst) && should_start_service() {
                start_alarm_service(app_handle);
            }
        });
    }

    Ok(new_card)
}

// 修改 update_alarm_card 函数
#[tauri::command]
pub fn update_alarm_card(mut card: AlarmCard) -> Result<AlarmCard, String> {
    // 转换星期格式
    card.weekdays = card
        .weekdays
        .iter()
        .map(|day| convert_weekday(day).to_string())
        .collect();

    if let Ok(cards) = db::get_all_alarm_cards() {
        if let Some(index) = cards.iter().position(|c| c.id == card.id) {
            let updated_card = AlarmCard {
                updated_at: Local::now(),
                created_at: cards[index].created_at, // Preserve original creation time
                ..card
            };
            if let Err(e) = db::add_or_update_alarm_card(&updated_card) {
                return Err(e.to_string());
            }

            // 在新线程中检查和启动服务
            if let Some(app) = APP.get() {
                let app_handle = app.clone();
                thread::spawn(move || {
                    if !SERVICE_RUNNING.load(Ordering::SeqCst) && should_start_service() {
                        start_alarm_service(app_handle);
                    }
                });
            }

            Ok(updated_card)
        } else {
            Err("Alarm card not found".to_string())
        }
    } else {
        Err("Failed to get alarm cards from db".to_string())
    }
}

// 修改 get_alarm_cards 函数，添加反向转换
fn convert_weekday_back(day: &str) -> &str {
    match day {
        "Mon" => "一",
        "Tue" => "二",
        "Wed" => "三",
        "Thu" => "四",
        "Fri" => "五",
        "Sat" => "六",
        "Sun" => "日",
        _ => day,
    }
}

#[tauri::command]
pub fn get_alarm_cards() -> Vec<AlarmCard> {
    if let Ok(cards) = db::get_all_alarm_cards() {
        cards
            .into_iter()
            .map(|mut card| {
                card.time_left = card.calculate_time_left();
                // 转换星期格式回中文
                card.weekdays = card
                    .weekdays
                    .iter()
                    .map(|day| convert_weekday_back(day).to_string())
                    .collect();
                card
            })
            .collect()
    } else {
        Vec::new()
    }
}

#[tauri::command]
pub fn delete_alarm_card(id: String) -> Result<(), String> {
    if let Err(e) = db::delete_alarm_card_from_db(&id) {
        return Err(e.to_string());
    }

    // 在新线程中检查是否需要继续运行服务
    if let Some(_app) = APP.get() {
        thread::spawn(move || {
            // 如果服务正在运行，且没有需要提醒的事项，则停止服务
            if SERVICE_RUNNING.load(Ordering::SeqCst) && !should_start_service() {
                info!("删除后没有需要提醒的事项，停止服务");
                SERVICE_RUNNING.store(false, Ordering::SeqCst);
            }
        });
    }

    Ok(())
}

#[tauri::command]
pub fn toggle_alarm_card(id: String) -> Result<AlarmCard, String> {
    if let Ok(cards) = db::get_all_alarm_cards() {
        if let Some(index) = cards.iter().position(|c| c.id == id) {
            let mut card = cards[index].clone();
            card.is_active = !card.is_active;
            card.updated_at = Local::now();

            if let Err(e) = db::add_or_update_alarm_card(&card) {
                return Err(e.to_string());
            }

            // 在新线程中检查是否需要继续运行服务
            if let Some(app) = APP.get() {
                let app_handle = app.clone();
                thread::spawn(move || {
                    if !card.is_active {
                        // 如果是禁用代办提醒，检查是否需要停止服务
                        if SERVICE_RUNNING.load(Ordering::SeqCst) && !should_start_service() {
                            info!("禁用后没有需要提醒的事项，停止服务");
                            SERVICE_RUNNING.store(false, Ordering::SeqCst);
                        }
                    } else {
                        // 如果是启用代办提醒，检查是否需要启动服务
                        if !SERVICE_RUNNING.load(Ordering::SeqCst) && should_start_service() {
                            start_alarm_service(app_handle);
                        }
                    }
                });
            }
            Ok(card)
        } else {
            Err("Alarm card not found".to_string())
        }
    } else {
        Err("Failed to get alarm cards from db".to_string())
    }
}

// 检查代办提醒并发送通知
pub fn check_alarms(_app_handle: tauri::AppHandle) {
    if let Ok(cards) = db::get_all_alarm_cards() {
        let now = Local::now();
        let current_time = now.time().with_nanosecond(0).unwrap();
        let current_weekday = now.format("%a").to_string();
        let current_date = now.date_naive();
        // info!("当前时间: {} - {}", current_weekday, current_time);

        // 先处理当前需要触发的提醒
        let mut has_current_alarms = false;
        for card in cards.iter() {
            if !card.is_active {
                continue;
            }

            let alarm_time = NaiveTime::parse_from_str(&card.time, "%H:%M").unwrap();
            let current_minutes = current_time.hour() * 60 + current_time.minute();
            let alarm_minutes = alarm_time.hour() * 60 + alarm_time.minute();

            let should_trigger = match card.alarm_type {
                AlarmType::Daily => {
                    // 每天提醒，只要时间匹配就触发
                    current_minutes == alarm_minutes
                },
                AlarmType::Weekly => {
                    // 每周指定星期提醒
                    if !card.weekdays.is_empty() && !card.weekdays.contains(&current_weekday) {
                        false
                    } else {
                        current_minutes == alarm_minutes
                    }
                },
                AlarmType::SpecificDate => {
                    // 指定日期提醒
                    if let Some(dates) = &card.specific_dates {
                        dates.iter().any(|date_str| {
                            if let Ok(target_date) = NaiveDate::parse_from_str(date_str, "%Y-%m-%d") {
                                target_date == current_date && current_minutes == alarm_minutes
                            } else {
                                false
                            }
                        })
                    } else {
                        false
                    }
                }
            };

            if should_trigger {
                has_current_alarms = true;
                info!("代办提醒触发 - {} at {}", card.title, now);

                let card_clone = card.clone();

                // 在新线程中处理通知，避免阻塞主线程
                thread::spawn(move || {
                    let reminder_time = card_clone.reminder_time.parse::<i64>().ok();
                    // 创建通知窗口
                    create_notification_window(&card_clone.title, reminder_time);

                    // 对于指定日期提醒，触发后移除当天的日期
                    if matches!(card_clone.alarm_type, AlarmType::SpecificDate) {
                        let mut updated_card = card_clone.clone();
                        let current_date = Local::now().date_naive().format("%Y-%m-%d").to_string();
                        
                        if let Some(ref mut dates) = updated_card.specific_dates {
                            // 移除今天的日期
                            dates.retain(|date| date != &current_date);
                            
                            // 如果没有剩余日期，则禁用提醒
                            if dates.is_empty() {
                                updated_card.is_active = false;
                            }
                        }
                        
                        updated_card.updated_at = Local::now();
                        let _ = db::add_or_update_alarm_card(&updated_card);
                    }

                    // 在处理完当前提醒后，再检查是否还有其他提醒
                    if !should_start_service() {
                        info!("没有剩余的提醒任务，停止服务");
                        SERVICE_RUNNING.store(false, Ordering::SeqCst);
                    } else {
                        info!("有剩余的提醒任务，继续服务");
                    }
                });
            }
        }

        // 只在没有当前触发的提醒时才检查是否还有后续提醒
        if !has_current_alarms {
            // 如果没有剩余提醒，停止服务
            if !should_start_service() {
                info!("没有剩余的提醒任务，停止服务");
                SERVICE_RUNNING.store(false, Ordering::SeqCst);
                return;
            }
        }
    }
}

// 启动代办提醒检查服务
pub fn start_alarm_service(app_handle: tauri::AppHandle) {
    // 检查服务是否已经在运行
    if SERVICE_RUNNING.load(Ordering::SeqCst) {
        info!("服务已在运行中");
        return;
    }

    // 首先检查是否需要启动服务
    if !should_start_service() {
        info!("没有需要提醒的事项，不启动服务");
        return;
    }

    info!("启动代办事项提醒检查服务");

    // 设置服务运行标志
    SERVICE_RUNNING.store(true, Ordering::SeqCst);

    // 计算到下一分钟的等待时间
    let now = Local::now();
    let next_minute = (now + Duration::minutes(1))
        .with_second(0)
        .unwrap()
        .with_nanosecond(0)
        .unwrap();
    let wait_duration = next_minute.signed_duration_since(now);

    info!(
        "同步到整分 - 当前: {}, 下一分钟: {}, 等待: {}秒",
        now,
        next_minute,
        wait_duration.num_seconds()
    );

    let handle = app_handle.clone();
    thread::spawn(move || {
        thread::sleep(StdDuration::from_secs(
            wait_duration.num_seconds() as u64 + 1,
        ));
        info!("开始定时检查代办事项提醒");

        while SERVICE_RUNNING.load(Ordering::SeqCst) {
            check_alarms(handle.clone());
            thread::sleep(StdDuration::from_secs(60));
        }
        info!("提醒服务已停止");
    });
}

#[tauri::command]
pub fn remind_notification_window(title: String, reminder_time: String) {
    info!("稍后提醒: {} - {} 分钟后", title, reminder_time);
    let reminder_minutes = reminder_time.parse::<i64>().unwrap();
    let handle_reminder = APP.get().unwrap();

    thread::spawn(move || {
        thread::sleep(StdDuration::from_secs((reminder_minutes * 60) as u64));
        handle_reminder
            .notification()
            .builder()
            .title("稍后提醒")
            .body(&title)
            .show()
            .unwrap();
        info!(
            "稍后提醒完成, 时间: {}",
            Local::now().format("%Y-%m-%d %H:%M:%S")
        );
    });
}
