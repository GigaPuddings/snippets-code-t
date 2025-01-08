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
