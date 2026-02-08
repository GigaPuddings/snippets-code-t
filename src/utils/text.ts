/**
 * 文本处理工具函数：用于格式化、转义和文本操作
 */

/**
 * 从 HTML 内容中提取纯文本
 * 
 * @param html - HTML 字符串
 * @returns 不含 HTML 标签的纯文本
 */
export function extractPlainText(html: string): string {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

/**
 * HTML 转义，防止 XSS 攻击
 * 
 * @param text - 要转义的文本
 * @returns HTML 转义后的文本
 */
export function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * 使用模糊搜索高亮匹配的文本
 * 
 * @param text - 要高亮的文本
 * @param query - 搜索查询词
 * @returns 带高亮标记的 HTML 字符串
 */
export function highlightText(text: string, query?: string): string {
  if (!text || !query?.trim()) {
    return escapeHtml(text || '');
  }
  
  const queryLower = query.trim().toLowerCase();
  
  // 模糊匹配：将查询拆分为字符，按顺序匹配
  let result = '';
  let textIndex = 0;
  let queryIndex = 0;
  const textLower = text.toLowerCase();
  
  while (textIndex < text.length) {
    if (queryIndex < queryLower.length && textLower[textIndex] === queryLower[queryIndex]) {
      // 字符匹配，添加高亮
      result += `<span class="highlight">${escapeHtml(text[textIndex])}</span>`;
      queryIndex++;
    } else {
      result += escapeHtml(text[textIndex]);
    }
    textIndex++;
  }
  
  return result;
}

/**
 * 处理文本用于翻译，将驼峰命名转换为空格分隔
 * 
 * @param text - 要处理的文本
 * @returns 带空格的处理后文本
 */
export function processTextForTranslation(text: string): string {
  // 处理驼峰命名：insertCamelCase => insert Camel Case
  return (
    text
      // 在大写字母前添加空格
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // 处理连续大写字母
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
  );
}

/**
 * 检测语言类型（简单的中英文检测）
 * 
 * @param text - 要检测的文本
 * @returns 语言代码：'zh'（中文）、'en'（英文）或 'unknown'（未知）
 */
export function detectLanguage(text: string): 'zh' | 'en' | 'unknown' {
  if (!text) return 'unknown';
  
  // 统计中文字符
  const chineseChars = text.match(/[\u4e00-\u9fa5]/g);
  const chineseCount = chineseChars ? chineseChars.length : 0;
  
  // 统计英文字母
  const englishChars = text.match(/[a-zA-Z]/g);
  const englishCount = englishChars ? englishChars.length : 0;
  
  // 根据字符数量判断语言
  if (chineseCount > englishCount) {
    return 'zh';
  } else if (englishCount > chineseCount) {
    return 'en';
  }
  
  return 'unknown';
}
