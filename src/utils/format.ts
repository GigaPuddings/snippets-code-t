/**
 * 格式化工具函数：用于数字、字节和百分比的格式化
 */

/**
 * 将字节数格式化为人类可读的字符串
 * 
 * @param bytes - 字节数
 * @param decimals - 小数位数（默认：2）
 * @returns 格式化后的字符串（如 "1.5 MB"）
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * 格式化百分比用于进度显示
 * 
 * @param percentage - 百分比值（0-100）
 * @param showPercent - 是否显示 % 符号（默认：true）
 * @returns 格式化后的百分比字符串
 */
export function formatPercentage(percentage: number, showPercent: boolean = true): string {
  const value = Math.round(percentage);
  return showPercent ? `${value}%` : `${value}`;
}
