import { dayjs } from 'element-plus'

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(  
  func: T,  
  wait: number  
): (...args: Parameters<T>) => void {  
  let timeout: any = null; // 使用 NodeJS.Timeout 类型（如果你在 Node.js 环境中）---这里使用any会更方便  
  return function(this: any, ...args: Parameters<T>) {  
    clearTimeout(timeout!); // 使用非空断言操作符（!）因为我们已经初始化了 timeout  
    timeout = setTimeout(() => {  
      func.apply(this, args);  
    }, wait);  
  };  
}

// 随机生成uuid
export function uuid() : string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var random = Math.random() * 16 | 0;
    var value = (c === 'x' ? random : (random & 0x3 | 0x8));
    return value.toString(16);
  });
}

// 日期格式化
export function formatDate(date: any) {
  // 判断当前时间是否与内容创建时间在同一天
  const isSameDay = dayjs().isSame(dayjs(date), 'day')
  // 今天，显示 AM/PM 格式 , 非当天，显示普通日期
  return isSameDay ? dayjs(date).format('h:mm a') : dayjs(date).format('YY/M/D')
}

