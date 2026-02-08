/**
 * URL 工具函数：用于检测和规范化 URL
 */

/**
 * 检测字符串是否为有效的 URL
 * 
 * @param text - 要检测的文本
 * @returns 如果文本匹配 URL 模式则返回 true
 */
export function isURL(text: string): boolean {
  const trimmed = text.trim();
  
  // 检测常见的 URL 模式
  const urlPatterns = [
    /^https?:\/\//i,                    // http:// 或 https://
    /^www\./i,                          // www. 开头
    /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/,    // 域名格式（如 github.com）
    /^localhost(:\d+)?/i,               // localhost
    /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d+)?/ // IP 地址
  ];
  
  return urlPatterns.some(pattern => pattern.test(trimmed));
}

/**
 * 规范化 URL，如果缺少协议则自动添加
 * 
 * @param text - 要规范化的 URL 文本
 * @returns 带协议的规范化 URL
 */
export function normalizeURL(text: string): string {
  const trimmed = text.trim();
  
  // 如果已经有协议，直接返回
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  
  // 添加 https:// 前缀
  return `https://${trimmed}`;
}
