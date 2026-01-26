/**
 * 搜索语法解析器
 * 支持类似 GitHub/Notion 的搜索语法
 */

// 搜索语法正则表达式
const SYNTAX_PATTERNS = {
  type: /type:(code|note)/gi,
  tag: /tag:([^\s]+)/gi,
  created: /created:(today|week|month|[<>]?\d{4}-\d{2}-\d{2})/gi,
  updated: /updated:(today|week|month|[<>]?\d{4}-\d{2}-\d{2})/gi,
};

/**
 * 获取日期范围
 */
export function getDateRange(preset: 'today' | 'week' | 'month'): { start: Date; end: Date } {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  switch (preset) {
    case 'today':
      return {
        start: today,
        end: new Date(today.getTime() + 24 * 60 * 60 * 1000 - 1)
      };
    
    case 'week':
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - today.getDay());
      return {
        start: weekStart,
        end: new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000 - 1)
      };
    
    case 'month':
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
      const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59);
      return {
        start: monthStart,
        end: monthEnd
      };
  }
}

/**
 * 解析日期字符串
 */
function parseDate(dateStr: string): { after?: Date; before?: Date; preset?: 'today' | 'week' | 'month' } {
  // 检查是否是预设值
  if (dateStr === 'today' || dateStr === 'week' || dateStr === 'month') {
    return { preset: dateStr };
  }
  
  // 检查是否是相对日期
  if (dateStr.startsWith('>')) {
    const date = new Date(dateStr.substring(1));
    if (!isNaN(date.getTime())) {
      return { after: date };
    }
  } else if (dateStr.startsWith('<')) {
    const date = new Date(dateStr.substring(1));
    if (!isNaN(date.getTime())) {
      return { before: date };
    }
  } else {
    // 绝对日期
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
      // 设置为当天的开始和结束
      const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const end = new Date(start.getTime() + 24 * 60 * 60 * 1000 - 1);
      return { after: start, before: end };
    }
  }
  
  return {};
}

/**
 * 解析搜索文本，提取搜索语法和纯文本
 */
export function parseSearchText(searchText: string): SearchFilter {
  if (!searchText || searchText.trim() === '') {
    return {};
  }
  
  const filter: SearchFilter = {};
  let remainingText = searchText;
  
  // 解析类型筛选
  const typeMatches = Array.from(searchText.matchAll(SYNTAX_PATTERNS.type));
  if (typeMatches.length > 0) {
    const lastMatch = typeMatches[typeMatches.length - 1];
    filter.type = lastMatch[1].toLowerCase() as 'code' | 'note';
    // 移除匹配的文本
    remainingText = remainingText.replace(SYNTAX_PATTERNS.type, '');
  }
  
  // 解析标签筛选
  const tagMatches = Array.from(searchText.matchAll(SYNTAX_PATTERNS.tag));
  if (tagMatches.length > 0) {
    filter.tags = tagMatches.map(match => match[1]);
    // 移除匹配的文本
    remainingText = remainingText.replace(SYNTAX_PATTERNS.tag, '');
  }
  
  // 解析创建日期筛选
  const createdMatches = Array.from(searchText.matchAll(SYNTAX_PATTERNS.created));
  if (createdMatches.length > 0) {
    const lastMatch = createdMatches[createdMatches.length - 1];
    const dateInfo = parseDate(lastMatch[1]);
    if (dateInfo.preset) {
      filter.createdPreset = dateInfo.preset;
    } else {
      if (dateInfo.after) filter.createdAfter = dateInfo.after;
      if (dateInfo.before) filter.createdBefore = dateInfo.before;
    }
    // 移除匹配的文本
    remainingText = remainingText.replace(SYNTAX_PATTERNS.created, '');
  }
  
  // 解析更新日期筛选
  const updatedMatches = Array.from(searchText.matchAll(SYNTAX_PATTERNS.updated));
  if (updatedMatches.length > 0) {
    const lastMatch = updatedMatches[updatedMatches.length - 1];
    const dateInfo = parseDate(lastMatch[1]);
    if (dateInfo.preset) {
      filter.updatedPreset = dateInfo.preset;
    } else {
      if (dateInfo.after) filter.updatedAfter = dateInfo.after;
      if (dateInfo.before) filter.updatedBefore = dateInfo.before;
    }
    // 移除匹配的文本
    remainingText = remainingText.replace(SYNTAX_PATTERNS.updated, '');
  }
  
  // 提取剩余的纯文本
  const text = remainingText.trim();
  if (text) {
    filter.text = text;
  }
  
  return filter;
}

/**
 * 将 SearchFilter 对象转换回搜索文本
 */
export function filterToSearchText(filter: SearchFilter): string {
  const parts: string[] = [];
  
  // 添加文本
  if (filter.text) {
    parts.push(filter.text);
  }
  
  // 添加类型
  if (filter.type && filter.type !== 'all') {
    parts.push(`type:${filter.type}`);
  }
  
  // 添加标签
  if (filter.tags && filter.tags.length > 0) {
    filter.tags.forEach(tag => {
      parts.push(`tag:${tag}`);
    });
  }
  
  // 添加创建日期
  if (filter.createdPreset) {
    parts.push(`created:${filter.createdPreset}`);
  } else if (filter.createdAfter || filter.createdBefore) {
    if (filter.createdAfter && filter.createdBefore) {
      // 如果是同一天，只显示日期
      const start = filter.createdAfter;
      const end = filter.createdBefore;
      if (start.toDateString() === end.toDateString()) {
        parts.push(`created:${formatDate(start)}`);
      } else {
        parts.push(`created:>${formatDate(start)}`);
        parts.push(`created:<${formatDate(end)}`);
      }
    } else if (filter.createdAfter) {
      parts.push(`created:>${formatDate(filter.createdAfter)}`);
    } else if (filter.createdBefore) {
      parts.push(`created:<${formatDate(filter.createdBefore)}`);
    }
  }
  
  // 添加更新日期
  if (filter.updatedPreset) {
    parts.push(`updated:${filter.updatedPreset}`);
  } else if (filter.updatedAfter || filter.updatedBefore) {
    if (filter.updatedAfter && filter.updatedBefore) {
      const start = filter.updatedAfter;
      const end = filter.updatedBefore;
      if (start.toDateString() === end.toDateString()) {
        parts.push(`updated:${formatDate(start)}`);
      } else {
        parts.push(`updated:>${formatDate(start)}`);
        parts.push(`updated:<${formatDate(end)}`);
      }
    } else if (filter.updatedAfter) {
      parts.push(`updated:>${formatDate(filter.updatedAfter)}`);
    } else if (filter.updatedBefore) {
      parts.push(`updated:<${formatDate(filter.updatedBefore)}`);
    }
  }
  
  return parts.join(' ');
}

/**
 * 格式化日期为 YYYY-MM-DD
 */
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 验证搜索语法是否有效
 */
export function validateSearchSyntax(searchText: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // 验证日期格式
  const datePattern = /\d{4}-\d{2}-\d{2}/g;
  const dateMatches = searchText.match(datePattern);
  if (dateMatches) {
    dateMatches.forEach(dateStr => {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        errors.push(`Invalid date format: ${dateStr}`);
      }
    });
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}
