/**
 * 模板变量解析器
 * 支持的变量：
 * - {{date}} / {{date:YYYY-MM-DD}} - 当前日期
 * - {{time}} / {{time:HH:mm:ss}} - 当前时间
 * - {{datetime}} - 日期时间
 * - {{timestamp}} - Unix 时间戳
 * - {{clipboard}} - 剪贴板内容
 * - {{input:变量名}} - 用户输入变量
 * - {{input:变量名:默认值}} - 带默认值的用户输入
 * - {{cursor}} / $0 - 光标位置标记（复制后可定位）
 * - {{uuid}} - 生成 UUID
 * - {{random:min:max}} - 随机数
 */

export interface TemplateVariable {
  name: string;
  type: 'date' | 'time' | 'datetime' | 'timestamp' | 'clipboard' | 'input' | 'cursor' | 'uuid' | 'random';
  format?: string;
  defaultValue?: string;
  label?: string;
  min?: number;
  max?: number;
}

export interface ParseResult {
  content: string;
  variables: TemplateVariable[];
  hasInputVariables: boolean;
  cursorPosition?: number;
}

// 匹配模板变量的正则表达式
const TEMPLATE_REGEX = /\{\{([^}]+)\}\}|\$0/g;

/**
 * 解析模板内容，提取所有变量
 * @param template 模板字符串
 */
export function parseTemplate(template: string): TemplateVariable[] {
  const variables: TemplateVariable[] = [];
  const seen = new Set<string>();
  let match;

  while ((match = TEMPLATE_REGEX.exec(template)) !== null) {
    const fullMatch = match[0];
    const content = match[1] || '';

    // 处理 $0 光标标记
    if (fullMatch === '$0') {
      if (!seen.has('cursor')) {
        variables.push({ name: 'cursor', type: 'cursor' });
        seen.add('cursor');
      }
      continue;
    }

    const parts = content.split(':');
    const type = parts[0].toLowerCase();

    switch (type) {
      case 'date':
        if (!seen.has('date')) {
          variables.push({
            name: 'date',
            type: 'date',
            format: parts[1] || 'YYYY-MM-DD'
          });
          seen.add('date');
        }
        break;

      case 'time':
        if (!seen.has('time')) {
          variables.push({
            name: 'time',
            type: 'time',
            format: parts[1] || 'HH:mm:ss'
          });
          seen.add('time');
        }
        break;

      case 'datetime':
        if (!seen.has('datetime')) {
          variables.push({
            name: 'datetime',
            type: 'datetime',
            format: parts[1] || 'YYYY-MM-DD HH:mm:ss'
          });
          seen.add('datetime');
        }
        break;

      case 'timestamp':
        if (!seen.has('timestamp')) {
          variables.push({ name: 'timestamp', type: 'timestamp' });
          seen.add('timestamp');
        }
        break;

      case 'clipboard':
        if (!seen.has('clipboard')) {
          variables.push({ name: 'clipboard', type: 'clipboard' });
          seen.add('clipboard');
        }
        break;

      case 'cursor':
        if (!seen.has('cursor')) {
          variables.push({ name: 'cursor', type: 'cursor' });
          seen.add('cursor');
        }
        break;

      case 'uuid':
        if (!seen.has('uuid')) {
          variables.push({ name: 'uuid', type: 'uuid' });
          seen.add('uuid');
        }
        break;

      case 'random':
        if (!seen.has('random')) {
          variables.push({
            name: 'random',
            type: 'random',
            min: parseInt(parts[1]) || 0,
            max: parseInt(parts[2]) || 100
          });
          seen.add('random');
        }
        break;

      case 'input':
        const label = parts[1] || '输入';
        const key = `input:${label}`;
        if (!seen.has(key)) {
          variables.push({
            name: key,
            type: 'input',
            label: label,
            defaultValue: parts[2] || ''
          });
          seen.add(key);
        }
        break;
    }
  }

  return variables;
}

/**
 * 格式化日期
 * @param date 日期对象
 * @param format 格式字符串
 */
function formatDate(date: Date, format: string): string {
  const pad = (n: number) => n.toString().padStart(2, '0');
  
  const replacements: Record<string, string> = {
    'YYYY': date.getFullYear().toString(),
    'YY': date.getFullYear().toString().slice(-2),
    'MM': pad(date.getMonth() + 1),
    'M': (date.getMonth() + 1).toString(),
    'DD': pad(date.getDate()),
    'D': date.getDate().toString(),
    'HH': pad(date.getHours()),
    'H': date.getHours().toString(),
    'mm': pad(date.getMinutes()),
    'm': date.getMinutes().toString(),
    'ss': pad(date.getSeconds()),
    's': date.getSeconds().toString()
  };

  let result = format;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(new RegExp(key, 'g'), value);
  }
  return result;
}

/**
 * 生成 UUID
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * 生成随机数
 */
function generateRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 处理模板变量替换
 * @param template 模板字符串
 * @param inputValues 用户输入值（键为 input:变量名）
 * @param clipboardContent 剪贴板内容
 */
export async function processTemplate(
  template: string,
  inputValues: Record<string, string> = {},
  clipboardContent?: string
): Promise<ParseResult> {
  const now = new Date();
  let result = template;
  let cursorPosition: number | undefined;
  const variables = parseTemplate(template);

  // 替换所有变量
  result = result.replace(TEMPLATE_REGEX, (match, content) => {
    // 处理 $0 光标标记
    if (match === '$0') {
      return ''; // 移除光标标记，后续计算位置
    }

    const parts = content.split(':');
    const type = parts[0].toLowerCase();

    switch (type) {
      case 'date':
        return formatDate(now, parts[1] || 'YYYY-MM-DD');

      case 'time':
        return formatDate(now, parts[1] || 'HH:mm:ss');

      case 'datetime':
        return formatDate(now, parts[1] || 'YYYY-MM-DD HH:mm:ss');

      case 'timestamp':
        return now.getTime().toString();

      case 'clipboard':
        return clipboardContent || '';

      case 'cursor':
        return ''; // 移除光标标记

      case 'uuid':
        return generateUUID();

      case 'random':
        const min = parseInt(parts[1]) || 0;
        const max = parseInt(parts[2]) || 100;
        return generateRandom(min, max).toString();

      case 'input':
        const label = parts[1] || '输入';
        const key = `input:${label}`;
        return inputValues[key] || parts[2] || '';

      default:
        return match;
    }
  });

  // 计算光标位置（在移除标记后的位置）
  const cursorMatch = template.match(/\{\{cursor\}\}|\$0/);
  if (cursorMatch && cursorMatch.index !== undefined) {
    // 计算在替换前的位置
    const beforeCursor = template.slice(0, cursorMatch.index);
    // 处理 beforeCursor 中的变量替换，计算最终位置
    const processedBefore = await processTemplateSync(beforeCursor, inputValues, clipboardContent);
    cursorPosition = processedBefore.length;
  }

  return {
    content: result,
    variables,
    hasInputVariables: variables.some(v => v.type === 'input'),
    cursorPosition
  };
}

/**
 * 同步处理模板（用于计算光标位置）
 */
function processTemplateSync(
  template: string,
  inputValues: Record<string, string> = {},
  clipboardContent?: string
): string {
  const now = new Date();

  return template.replace(TEMPLATE_REGEX, (match, content) => {
    if (match === '$0') return '';

    const parts = content.split(':');
    const type = parts[0].toLowerCase();

    switch (type) {
      case 'date':
        return formatDate(now, parts[1] || 'YYYY-MM-DD');
      case 'time':
        return formatDate(now, parts[1] || 'HH:mm:ss');
      case 'datetime':
        return formatDate(now, parts[1] || 'YYYY-MM-DD HH:mm:ss');
      case 'timestamp':
        return now.getTime().toString();
      case 'clipboard':
        return clipboardContent || '';
      case 'cursor':
        return '';
      case 'uuid':
        return generateUUID();
      case 'random':
        const min = parseInt(parts[1]) || 0;
        const max = parseInt(parts[2]) || 100;
        return generateRandom(min, max).toString();
      case 'input':
        const label = parts[1] || '输入';
        const key = `input:${label}`;
        return inputValues[key] || parts[2] || '';
      default:
        return match;
    }
  });
}

/**
 * 检查模板是否包含需要用户输入的变量
 * @param template 模板字符串
 */
export function hasInputVariables(template: string): boolean {
  const variables = parseTemplate(template);
  return variables.some(v => v.type === 'input');
}

/**
 * 获取模板中的输入变量列表
 * @param template 模板字符串
 */
export function getInputVariables(template: string): TemplateVariable[] {
  return parseTemplate(template).filter(v => v.type === 'input');
}

/**
 * 预览模板（不替换输入变量）
 * @param template 模板字符串
 */
export function previewTemplate(template: string): string {
  const now = new Date();

  return template.replace(TEMPLATE_REGEX, (match, content) => {
    if (match === '$0') return '|'; // 用 | 显示光标位置

    const parts = content.split(':');
    const type = parts[0].toLowerCase();

    switch (type) {
      case 'date':
        return formatDate(now, parts[1] || 'YYYY-MM-DD');
      case 'time':
        return formatDate(now, parts[1] || 'HH:mm:ss');
      case 'datetime':
        return formatDate(now, parts[1] || 'YYYY-MM-DD HH:mm:ss');
      case 'timestamp':
        return now.getTime().toString();
      case 'clipboard':
        return '[剪贴板]';
      case 'cursor':
        return '|';
      case 'uuid':
        return '[UUID]';
      case 'random':
        return '[随机数]';
      case 'input':
        const label = parts[1] || '输入';
        const defaultVal = parts[2];
        return defaultVal ? `[${label}:${defaultVal}]` : `[${label}]`;
      default:
        return match;
    }
  });
}
