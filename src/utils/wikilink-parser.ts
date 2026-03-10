/**
 * Wikilink Parser Utility
 * 解析和处理 [[笔记标题]] 格式的双向链接
 */

/**
 * Wikilink 匹配结果
 */
export interface WikilinkMatch {
  /** 完整匹配文本（包括 [[ ]]） */
  fullMatch: string;
  /** 笔记标题 */
  title: string;
  /** 匹配的起始位置 */
  startIndex: number;
  /** 匹配的结束位置 */
  endIndex: number;
}

/**
 * Wikilink 正则表达式
 * 匹配 [[笔记标题]] 格式
 */
const WIKILINK_REGEX = /\[\[([^\]]+)\]\]/g;

/**
 * 解析文本中的所有 wikilinks
 * @param text 要解析的文本
 * @returns Wikilink 匹配结果数组
 */
export function parseWikilinks(text: string): WikilinkMatch[] {
  const matches: WikilinkMatch[] = [];
  let match: RegExpExecArray | null;

  // 重置正则表达式的 lastIndex
  WIKILINK_REGEX.lastIndex = 0;

  while ((match = WIKILINK_REGEX.exec(text)) !== null) {
    matches.push({
      fullMatch: match[0],
      title: match[1].trim(),
      startIndex: match.index,
      endIndex: match.index + match[0].length
    });
  }

  return matches;
}

/**
 * 检查文本是否包含 wikilinks
 * @param text 要检查的文本
 * @returns 是否包含 wikilinks
 */
export function hasWikilinks(text: string): boolean {
  WIKILINK_REGEX.lastIndex = 0;
  return WIKILINK_REGEX.test(text);
}

/**
 * 提取文本中的所有笔记标题
 * @param text 要解析的文本
 * @returns 唯一的笔记标题数组
 */
export function extractWikilinkTitles(text: string): string[] {
  const matches = parseWikilinks(text);
  const titles = matches.map(m => m.title);
  return Array.from(new Set(titles));
}

/**
 * 替换文本中的 wikilink 标题
 * @param text 原始文本
 * @param oldTitle 旧标题
 * @param newTitle 新标题
 * @returns 替换后的文本
 */
export function replaceWikilinkTitle(
  text: string,
  oldTitle: string,
  newTitle: string
): string {
  const regex = new RegExp(`\\[\\[${escapeRegex(oldTitle)}\\]\\]`, 'g');
  return text.replace(regex, `[[${newTitle}]]`);
}

/**
 * 转义正则表达式特殊字符
 * @param str 要转义的字符串
 * @returns 转义后的字符串
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 将 wikilink 转换为 HTML 链接
 * @param text 包含 wikilinks 的文本
 * @param onLinkClick 链接点击回调
 * @param existingTitles 存在的笔记标题集合（用于判断断链）
 * @returns 转换后的 HTML
 */
export function renderWikilinksToHtml(
  text: string,
  onLinkClick?: (title: string) => void,
  existingTitles?: Set<string>
): string {
  return text.replace(WIKILINK_REGEX, (_match, title) => {
    const trimmedTitle = title.trim();
    const exists = existingTitles ? existingTitles.has(trimmedTitle) : true;
    const className = exists ? 'wikilink' : 'wikilink wikilink-broken';
    const dataAttr = onLinkClick ? `data-wikilink="${escapeHtml(trimmedTitle)}"` : '';
    
    return `<a href="#" class="${className}" ${dataAttr}>${escapeHtml(trimmedTitle)}</a>`;
  });
}

/**
 * 转义 HTML 特殊字符
 * @param str 要转义的字符串
 * @returns 转义后的字符串
 */
function escapeHtml(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * 为 wikilink 元素添加点击事件监听器
 * @param container 容器元素
 * @param onLinkClick 链接点击回调
 */
export function attachWikilinkListeners(
  container: HTMLElement,
  onLinkClick: (title: string) => void
): void {
  container.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('wikilink')) {
      event.preventDefault();
      const title = target.getAttribute('data-wikilink');
      if (title) {
        onLinkClick(title);
      }
    }
  });
}
