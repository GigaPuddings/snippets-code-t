import { dayjs } from 'element-plus';

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
) {
  let timeout: any = null;
  let lastArgs: Parameters<T> | null = null;

  const debounced = function (this: any, ...args: Parameters<T>) {
    lastArgs = args;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      if (lastArgs) {
        func.apply(this, lastArgs);
        lastArgs = null;
        timeout = null;
      }
    }, wait);
  };

  // 取消防抖
  debounced.cancel = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
      lastArgs = null;
    }
  };

  return debounced;
}

// 随机生成uuid
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const random = (Math.random() * 16) | 0;
    const value = c === 'x' ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
}

// 日期格式化
export function formatDate(date: any) {
  // 判断当前时间是否与内容创建时间在同一天
  const isSameDay = dayjs().isSame(dayjs(date), 'day');
  // 今天，显示 AM/PM 格式 , 非当天，显示普通日期
  return isSameDay
    ? dayjs(date).format('h:mm a')
    : dayjs(date).format('YY/M/D');
}

// 计算字符串相似度 (0-1 之间)
export function calculateSimilarity(str: string, query: string): number {
  // 完全匹配
  if (str === query) return 1;

  // 开头匹配
  if (str.startsWith(query)) return 0.8;

  // 包含匹配
  if (str.includes(query)) return 0.6;

  // 编辑距离计算模糊匹配
  const distance = levenshteinDistance(str, query);
  const maxLength = Math.max(str.length, query.length);
  const similarity = 1 - distance / maxLength;

  return similarity > 0.3 ? similarity : 0; // 设置最小相似度阈值
}

// Levenshtein 距离算法实现模糊匹配
function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;
  const dp: number[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1
        );
      }
    }
  }
  return dp[m][n];
}
