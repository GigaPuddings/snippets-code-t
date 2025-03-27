use crate::config::{get_value, set_value, ALARM_CARDS_KEY};
use crate::window::create_notification_window;
use crate::APP;
use chrono::{DateTime, Datelike as _, Duration, Local, NaiveTime, Timelike as _};
use lazy_static::lazy_static;
use log::info;
use serde::{Deserialize, Serialize};
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Mutex;
use std::thread;
use std::time::Duration as StdDuration;
use tauri_plugin_notification::NotificationExt;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AlarmCard {
    id: String,
    time: String,
    title: String,
    weekdays: Vec<String>,
    reminder_time: String,
    is_active: bool,
    created_at: DateTime<Local>,
    updated_at: DateTime<Local>,
    time_left: String,
}

// 保存代办事项提醒列表到 store
fn save_alarm_cards(cards: &Vec<AlarmCard>) {
    if let Some(app) = APP.get() {
        set_value(app, ALARM_CARDS_KEY, cards);
    }
}

// 从 store 加载代办事项提醒列表
fn load_alarm_cards() -> Vec<AlarmCard> {
    if let Some(app) = APP.get() {
        if let Some(value) = get_value(app, ALARM_CARDS_KEY) {
            return serde_json::from_value(value).unwrap_or_default();
        }
    }
    Vec::new()
}

// 初始化 ALARM_CARDS
lazy_static! {
    static ref ALARM_CARDS: Mutex<Vec<AlarmCard>> = Mutex::new(load_alarm_cards());
}

// 添加一个静态变量来跟踪服务是否已启动
static SERVICE_RUNNING: AtomicBool = AtomicBool::new(false);

// 添加一个新的函数来检查是否需要启动定时服务
fn should_start_service() -> bool {
    let cards = ALARM_CARDS.lock().unwrap();
    let now = Local::now();
    let current_weekday = now.format("%a").to_string();

    cards.iter().any(|card| {
        if !card.is_active {
            return false;
        }
        // 检查是否是今天需要提醒的事项
        if card.weekdays.is_empty() || card.weekdays.contains(&current_weekday) {
            let alarm_time = NaiveTime::parse_from_str(&card.time, "%H:%M").unwrap();
            let current_time = now.time();
            // 如果代办提醒时间还没到，就需要启动服务
            alarm_time > current_time
        } else {
            false
        }
    })
}

impl AlarmCard {
    pub fn calculate_time_left(&self) -> String {
        let now = Local::now();
        let current_weekday = now.format("%a").to_string();
        let alarm_time = NaiveTime::parse_from_str(&self.time, "%H:%M").unwrap();
        let now_time = now.time();

        // 如果设置了特定星期
        if !self.weekdays.is_empty() {
            // 如果今天是指定的星期之一
            if self.weekdays.contains(&current_weekday) {
                // 如果今天的代办提醒时间还没到
                if alarm_time > now_time {
                    let diff = alarm_time.signed_duration_since(now_time);
                    // 向上取整到分钟
                    let total_minutes = (diff.num_seconds() as f64 / 60.0).ceil() as i64;
                    let hours = total_minutes / 60;
                    let minutes = total_minutes % 60;
                    if hours > 0 {
                        return format!("{} 小时 {} 分钟后", hours, minutes);
                    } else {
                        return format!("{} 分钟后", minutes);
                    }
                }
            }

            // 计算到下一个指定星期的时间
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
                // 如果是今天且时间还没到，不需要等到下周
                if days == 7 && alarm_time > now_time {
                    days = 0;
                }
                days_until_next = days_until_next.min(days);
            }

            // 计算具体时间差
            let target_time = now + Duration::days(days_until_next as i64);
            let target_datetime = target_time.date_naive().and_time(alarm_time);
            let diff = target_datetime.signed_duration_since(now.naive_local());

            // 向上取整到分钟
            let total_minutes = (diff.num_seconds() as f64 / 60.0).ceil() as i64;
            let days = total_minutes / (24 * 60);
            let remaining_minutes = total_minutes % (24 * 60);
            let hours = remaining_minutes / 60;
            let minutes = remaining_minutes % 60;

            if days > 0 {
                format!("{} 天后", days)
            } else {
                if hours > 0 {
                    format!("{} 小时 {} 分钟后", hours, minutes)
                } else {
                    format!("{} 分钟后", minutes)
                }
            }
        } else {
            // 没有设置特定星期的情况
            let diff = if alarm_time > now_time {
                alarm_time.signed_duration_since(now_time)
            } else {
                // 如果今天的时间已过，计算到明天的时间
                alarm_time.signed_duration_since(now_time) + Duration::hours(24)
            };

            // 向上取整到分钟
            let total_minutes = (diff.num_seconds() as f64 / 60.0).ceil() as i64;
            let hours = total_minutes / 60;
            let minutes = total_minutes % 60;
            if hours > 0 {
                format!("{} 小时 {} 分钟后", hours, minutes)
            } else {
                format!("{} 分钟后", minutes)
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

    let mut cards = ALARM_CARDS.lock().unwrap();
    let new_card = AlarmCard {
        id: uuid::Uuid::new_v4().to_string(),
        created_at: Local::now(),
        updated_at: Local::now(),
        ..card
    };
    cards.push(new_card.clone());
    save_alarm_cards(&cards);

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

    let mut cards = ALARM_CARDS.lock().unwrap();
    if let Some(index) = cards.iter().position(|c| c.id == card.id) {
        let updated_card = AlarmCard {
            updated_at: Local::now(),
            ..card
        };
        cards[index] = updated_card.clone();
        save_alarm_cards(&cards);

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
    let cards = ALARM_CARDS.lock().unwrap();
    cards
        .iter()
        .map(|card| {
            let mut card = card.clone();
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
}

#[tauri::command]
pub fn delete_alarm_card(id: String) -> Result<(), String> {
    let mut cards = ALARM_CARDS.lock().unwrap();
    if let Some(index) = cards.iter().position(|c| c.id == id) {
        cards.remove(index);
        save_alarm_cards(&cards); // 保存到文件

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
    } else {
        Err("Alarm card not found".to_string())
    }
}

#[tauri::command]
pub fn toggle_alarm_card(id: String) -> Result<AlarmCard, String> {
    let mut cards = ALARM_CARDS.lock().unwrap();
    if let Some(index) = cards.iter().position(|c| c.id == id) {
        let mut card = cards[index].clone();
        card.is_active = !card.is_active;
        cards[index] = card.clone();
        save_alarm_cards(&cards);

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
}

// 检查代办提醒并发送通知
pub fn check_alarms(_app_handle: tauri::AppHandle) {
    let cards = ALARM_CARDS.lock().unwrap();
    let now = Local::now();
    let current_time = now.time().with_nanosecond(0).unwrap();
    let current_weekday = now.format("%a").to_string();
    // info!("当前时间: {} - {}", current_weekday, current_time);

    // 先处理当前需要触发的提醒
    let mut has_current_alarms = false;
    for card in cards.iter() {
        if !card.is_active {
            continue;
        }

        // 首先检查是否是指定的星期
        if !card.weekdays.is_empty() && !card.weekdays.contains(&current_weekday) {
            continue;
        }

        let alarm_time = NaiveTime::parse_from_str(&card.time, "%H:%M").unwrap();
        let current_minutes = current_time.hour() * 60 + current_time.minute();
        let alarm_minutes = alarm_time.hour() * 60 + alarm_time.minute();

        if current_minutes == alarm_minutes {
            has_current_alarms = true;
            info!("代办提醒触发 - {} at {}", card.title, now);

            let card = card.clone();

            // 在新线程中处理通知，避免阻塞主线程
            thread::spawn(move || {
                let reminder_time = card.reminder_time.parse::<i64>().ok();
                // 创建通知窗口
                create_notification_window(&card.title, reminder_time);

                // 在处理完当前提醒后，再检查是否还有其他提醒
                let cards = ALARM_CARDS.lock().unwrap();
                let now = Local::now();
                let current_time = now.time();
                let current_weekday = now.format("%a").to_string();

                let has_remaining_alarms = cards.iter().any(|card| {
                    if !card.is_active {
                        return false;
                    }
                    if !card.weekdays.is_empty() && !card.weekdays.contains(&current_weekday) {
                        return false;
                    }
                    let alarm_time = NaiveTime::parse_from_str(&card.time, "%H:%M").unwrap();
                    alarm_time > current_time
                });

                if !has_remaining_alarms {
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
        // 检查是否还有今天需要执行的提醒
        let has_remaining_alarms = cards.iter().any(|card| {
            if !card.is_active {
                return false;
            }
            if !card.weekdays.is_empty() && !card.weekdays.contains(&current_weekday) {
                return false;
            }
            let alarm_time = NaiveTime::parse_from_str(&card.time, "%H:%M").unwrap();
            let current_minutes = current_time.hour() * 60 + current_time.minute();
            let alarm_minutes = alarm_time.hour() * 60 + alarm_time.minute();
            alarm_minutes > current_minutes
        });

        // 如果没有剩余提醒，停止服务
        if !has_remaining_alarms {
            info!("没有剩余的提醒任务，停止服务");
            SERVICE_RUNNING.store(false, Ordering::SeqCst);
            return;
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
