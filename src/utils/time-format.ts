/**
 * Time Formatting Utilities
 * 时间格式化工具
 */

/**
 * 将 ISO 8601 时间戳转换为相对时间
 * @param isoTimestamp ISO 8601 格式的时间戳
 * @returns 人类可读的相对时间（例如："2 小时前"）
 */
export function formatRelativeTime(isoTimestamp: string): string {
  const now = new Date();
  const timestamp = new Date(isoTimestamp);
  const diffMs = now.getTime() - timestamp.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSeconds < 60) {
    return '刚刚';
  } else if (diffMinutes < 60) {
    return `${diffMinutes} 分钟前`;
  } else if (diffHours < 24) {
    return `${diffHours} 小时前`;
  } else if (diffDays < 7) {
    return `${diffDays} 天前`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks} 周前`;
  } else if (diffMonths < 12) {
    return `${diffMonths} 个月前`;
  } else {
    return `${diffYears} 年前`;
  }
}

/**
 * 将 ISO 8601 时间戳转换为完整的日期时间字符串
 * @param isoTimestamp ISO 8601 格式的时间戳
 * @returns 格式化的日期时间字符串（例如："2024-02-21 15:30:00"）
 */
export function formatFullDateTime(isoTimestamp: string): string {
  const date = new Date(isoTimestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * 将 ISO 8601 时间戳转换为日期字符串
 * @param isoTimestamp ISO 8601 格式的时间戳
 * @returns 格式化的日期字符串（例如："2024-02-21"）
 */
export function formatDate(isoTimestamp: string): string {
  const date = new Date(isoTimestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

/**
 * 将 ISO 8601 时间戳转换为时间字符串
 * @param isoTimestamp ISO 8601 格式的时间戳
 * @returns 格式化的时间字符串（例如："15:30:00"）
 */
export function formatTime(isoTimestamp: string): string {
  const date = new Date(isoTimestamp);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * 比较两个 ISO 8601 时间戳
 * @param a 第一个时间戳
 * @param b 第二个时间戳
 * @returns 负数表示 a < b，0 表示 a = b，正数表示 a > b
 */
export function compareTimestamps(a: string, b: string): number {
  const dateA = new Date(a);
  const dateB = new Date(b);
  return dateA.getTime() - dateB.getTime();
}
