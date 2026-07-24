import TurndownService from 'turndown';
import { marked } from 'marked';
import { convertFileSrc } from '@tauri-apps/api/core';
import { sanitizeHtml } from '@/utils/html-sanitize';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttribute(value: string): string {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function escapeHtmlLikeMarkdownText(value: string): string {
  return value.replace(
    /<(?=\/?[A-Za-z][A-Za-z0-9-]*(?:\s[^<>\n]*)?\/?>)/g,
    '\\<'
  );
}

function isLocalPathLink(url: string): boolean {
  const value = url.trim();
  if (!value) return false;

  return (
    value.startsWith('file://') ||
    /^[a-zA-Z]:[\\/]/.test(value) ||
    value.startsWith('/') ||
    value.startsWith('./') ||
    value.startsWith('../') ||
    /^[\w.-]+[\\/][\w./\\-]+/.test(value)
  );
}

function getCodeFence(code: string): string {
  const longestFence = Math.max(2, ...Array.from(code.matchAll(/`{3,}/g), match => match[0].length));
  return '`'.repeat(longestFence + 1);
}

const CODE_LINE_CONTAINER_TAGS = new Set(['DIV', 'P']);

function getCodeTextContent(node: Node): string {
  if (node.nodeType === 3) {
    return node.nodeValue || '';
  }

  if (node.nodeName === 'BR') {
    return '\n';
  }

  let content = '';
  node.childNodes.forEach((child) => {
    const childContent = getCodeTextContent(child);
    content += childContent;

    const childElement = child.nodeType === 1 ? (child as Element) : null;
    const isLineContainer =
      CODE_LINE_CONTAINER_TAGS.has(child.nodeName) ||
      childElement?.classList.contains('line');

    if (
      isLineContainer &&
      child.nextSibling &&
      childContent &&
      !content.endsWith('\n')
    ) {
      content += '\n';
    }
  });

  return content;
}

function getCodeBlockLanguage(pre: Element, code: Element): string {
  for (const element of [code, pre]) {
    const attributeLanguage =
      element.getAttribute('data-language') ||
      element.getAttribute('data-lang') ||
      element.getAttribute('lang');
    if (attributeLanguage?.trim()) {
      return attributeLanguage.trim().match(/[A-Za-z0-9_+#.-]+/)?.[0] || '';
    }

    const classLanguage = element.className.match(/(?:^|\s)(?:language-|lang-)([^\s]+)/i)?.[1];
    if (classLanguage) {
      return classLanguage;
    }
  }

  return '';
}

function hasMeaningfulCodeContent(code: string): boolean {
  return code.replace(/[\s\u00a0\u200b-\u200d\u2060\ufeff]/g, '').length > 0;
}

function escapeMarkdownTableCell(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, '<br>');
}

function tableAlignmentSeparator(value: unknown): string {
  if (value === 'left') return ':---';
  if (value === 'center') return ':---:';
  if (value === 'right') return '---:';
  return '---';
}

function normalizeLooseInlineMarkdown(value: string): string {
  const normalized = value
    .replace(/\*\*\s+([^*\n][^*\n]*?)\s*\*\*/g, '**$1**')
    .replace(/__\s+([^_\n][^_\n]*?)\s*__/g, '__$1__')
    // 本地模型常将“**标签:**”写成“**标签: **”。结尾分隔符前的空格会
    // 让 CommonMark 将整段当作普通文本，因此在进入解析器前收敛该写法。
    .replace(/\*\*([^\s*\n](?:[^*\n]*?[^\s*\n])?)\s+\*\*/g, '**$1**')
    .replace(/__([^\s_\n](?:[^_\n]*?[^\s_\n])?)\s+__/g, '__$1__');

  return normalized;
}

// CommonMark 的右侧重边距（right-flanking）判定：当 `**` 前面是 Unicode 标点
// （如中文全角右括号“）”、句号“。”等）、后面紧跟非标点非空白字符时，
// `**` 无法被识别为结束分隔符，导致加粗语法失效。
// 在标点与 `**` 之间插入零宽空格（\u200B），使 `**` 的前一个字符变为非标点，
// 从而满足右侧重边距条件。零宽空格在 marked 解析后会被移除。
function fixPunctuationBeforeStrong(markdown: string): string {
  return markdown
    .replace(/([\p{P}])\*\*(?=[^\s\p{P}])/gu, '$1\u200B**')
    .replace(/([\p{P}])__(?=[^\s\p{P}])/gu, '$1\u200B__');
}

function normalizeMarkdownBeforeParse(markdown: string): string {
  return fixPunctuationBeforeStrong(
    normalizeLooseInlineMarkdown(markdown)
  );
}

const ESCAPED_HTML_TAG_RE = /\\<\/?[A-Za-z][A-Za-z0-9-]*(?:\s[^<>\n]*)?\/?>/;
const UNSUPPORTED_EDITOR_HTML_TAG_RE = /<\/?(?:input|select|option|textarea)\b/i;

/**
 * 当剪贴板纯文本明确使用 Markdown 反斜杠保留 HTML 标签示例时，富 HTML
 * 可能已经把这些示例错误序列化成真实 DOM。此时纯文本才是无损来源。
 */
export function shouldPreferMarkdownClipboardText(
  text: string,
  html: string
): boolean {
  return Boolean(
    text.trim() &&
    html.trim() &&
    (ESCAPED_HTML_TAG_RE.test(text) || UNSUPPORTED_EDITOR_HTML_TAG_RE.test(text))
  );
}

/**
 * 修复本地模型常见的简历/说明类排版：标签与正文或下一个标签被压到同一行。
 * 仅用于 AI 输出；不会改写用户正常编辑或粘贴的 Markdown。
 */
export function normalizeAiMarkdown(markdown: string): string {
  const label = '\\*\\*[^*\\r\\n]*?[：:]\\s*\\*\\*';
  return markdown
    .replace(/\r\n/g, '\n')
    // “**描述:**正文” → 标签与正文分行。
    .replace(new RegExp(`(${label})(?=[^\\n])`, 'g'), '$1\n')
    // “……。（技术栈） **关键技术:**” → 下一个结构化标签另起段。
    .replace(new RegExp(`([。！？；;）)])\\s*(${label})`, 'g'), '$1\n\n$2')
    .trimEnd();
}

/**
 * 将文本转换为锚点 ID 格式
 * @param text - 标题文本
 * @returns 锚点 ID
 * @example
 * textToAnchorId('TypeScript 规范') // 'typescript-规范'
 * textToAnchorId('1.2 代码风格') // '12-代码风格'
 */
function textToAnchorId(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // 空格转连字符
    .replace(/[^\w\u4e00-\u9fa5-]/g, ''); // 移除特殊字符，保留字母、数字、中文、连字符
}

// 配置 marked 解析器
marked.setOptions({
  breaks: true,
  gfm: true // GitHub Flavored Markdown，支持任务列表
});

// 添加任务列表扩展到 marked
const taskListExtension = {
  name: 'taskList',
  level: 'block' as const,
  start(src: string) {
    const match = src.match(/^ {0,3}[-*+]\s+\[[ xX]\]\s+/);
    return match ? match.index : undefined;
  },
  tokenizer(src: string) {
    // 匹配连续的 GFM 任务列表项：- [ ]、* [x]、+ [X]
    const rule = /^((?: {0,3}[-*+]\s+\[[ xX]\]\s+[^\n]*(?:\n|$))+)/;
    const match = rule.exec(src);
    
    if (match) {
      const items: Array<{ checked: boolean; text: string }> = [];
      const raw = match[0];

      for (const line of raw.split('\n')) {
        const itemMatch = /^ {0,3}[-*+]\s+\[([ xX])\]\s+(.*)$/.exec(line);
        if (itemMatch) {
          const text = itemMatch[2].trim();
          items.push({
            checked: itemMatch[1].toLowerCase() === 'x',
            text: text
          });
        }
      }
      
      if (items.length > 0) {
        return {
          type: 'taskList',
          raw: raw,
          items: items
        };
      }
    }
    
    return undefined;
  },
  renderer(token: any) {
    // 生成 TipTap 兼容的 HTML 结构
    let html = '<ul data-type="taskList">\n';
    token.items.forEach((item: { checked: boolean; text: string }) => {
      const checked = item.checked ? ' data-checked="true"' : ' data-checked="false"';
      const checkedAttr = item.checked ? ' checked' : '';
      
      // 将文本解析为 HTML（处理行内代码、加粗等）
      const parsedParagraph = marked.parse(item.text) as string;
      
      // 提取 <p> 标签内的内容
      let innerContent = parsedParagraph;
      const pMatch = parsedParagraph.match(/<p>(.*?)<\/p>/s);
      if (pMatch) {
        innerContent = pMatch[1];
      } else {
        innerContent = parsedParagraph.replace(/\n/g, '').trim();
      }
      
      // 使用 TipTap TaskItem 期望的结构：
      // <li><label><input></label><div><p>内容</p></div></li>
      html += `<li data-type="taskItem"${checked}><label><input type="checkbox"${checkedAttr}></label><div><p>${innerContent}</p></div></li>\n`;
    });
    html += '</ul>\n';
    
    return html;
  }
};

// 添加 Wikilink 扩展到 marked
const wikilinkExtension = {
  name: 'wikilink',
  level: 'inline' as const,
  start(src: string) {
    return src.indexOf('[[');
  },
  tokenizer(src: string) {
    const rule = /^\[\[([^\]]+)\]\]/;
    const match = rule.exec(src);
    if (match) {
      return {
        type: 'wikilink',
        raw: match[0],
        text: match[1]
      };
    }
    return undefined;
  },
  renderer(token: any) {
    // 保持原始的 [[笔记名称]] 格式，让 TipTap 的装饰器插件来处理
    return `[[${escapeHtml(token.text)}]]`;
  }
};

// 添加 Markdown 链接扩展
// 策略：
// 1. 有效外部链接 → 转换为 <a>，让 TipTap 富文本视图可直接预览
// 2. 锚点/项目内路径链接 → 转换为 <a>，支持复制代码片段中的文件路径展示
// 3. 无效链接（空URL、中文等） → 保持 Markdown 格式 [文本](url)，显示为纯文本
const markdownLinkExtension = {
  name: 'markdownLink',
  level: 'inline' as const,
  start(src: string) {
    return src.indexOf('[');
  },
  tokenizer(src: string) {
    // 匹配 [文本](url) 格式，但不匹配 [[wikilink]]
    const rule = /^\[([^\]]+)\]\(([^)]*)\)/;
    const match = rule.exec(src);
    if (match && !src.startsWith('[[')) {
      const text = match[1];
      const url = match[2].trim();
      
      // 拦截所有链接，在 renderer 中决定如何处理
      return {
        type: 'markdownLink',
        raw: match[0],
        text: text,
        url: url
      };
    }
    return undefined;
  },
  renderer(token: any) {
    const url = token.url;
    const text = token.text;
    
    // 判断是否是有效的外部链接
    const isValidExternalLink = url && (
      url.startsWith('http://') || 
      url.startsWith('https://') || 
      url.startsWith('www.') ||
      /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(url)
    );
    
    // 判断是否是锚点链接
    const isAnchorLink = url && url.startsWith('#');
    const isLocalLink = url && isLocalPathLink(url);
    
    if (isAnchorLink) {
      // 锚点链接：转换为 <a> 标签，支持文档内跳转
      return `<a href="${escapeAttribute(url)}">${escapeHtml(text)}</a>`;
    } else if (isLocalLink) {
      // 项目内/本地文件路径：只展示链接文本，避免粘贴后把绝对路径暴露到正文里
      const href = isLocalPathLink(text) ? text : url;
      return `<a href="${escapeAttribute(href)}">${escapeHtml(text)}</a>`;
    } else if (isValidExternalLink) {
      // 扩展的 renderer 返回的 Markdown 不会再经过 marked 的二次解析，
      // 因此必须在这里输出 HTML，避免富文本视图把链接原样显示为文本。
      const href = url.startsWith('www.') ? `https://${url}` : url;
      return `<a href="${escapeAttribute(href)}">${escapeHtml(text)}</a>`;
    } else {
      // 无效链接（空URL、中文、相对路径等）：显示为纯文本
      // 对方括号和圆括号进行 HTML 实体转义，防止被 TipTap 重新解析为链接
      const escapedText = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      const escapedUrl = url
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      
      return `<span class="invalid-link-text">&#91;${escapedText}&#93;&#40;${escapedUrl}&#41;</span>`;
    }
  }
};

// marked 对中文紧邻强调标记（如 新增**知识库问答**模式、**描述:**）解析不稳定。
// 必须在 Markdown 完成段落/换行解析之后修复，不能用 inline extension：
// 后者会让 marked 丢掉该 token 后的软换行。
// 除了 <p> 之外，还需处理 <li>、<h1>–<h6>、<blockquote>、<td>、<th> 等块级元素，
// 因为 marked 在这些元素中同样可能留下未解析的 **...** 字面量。
function renderUnparsedLabelStrong(html: string): string {
  return html.replace(
    /<(p|li|h[1-6]|blockquote|td|th)>([\s\S]*?)<\/\1>/g,
    (_match, tag: string, content: string) => {
      const fixedContent = content
        .replace(
          /\*\*([^*<\r\n]*?[^\s*<\r\n])\s*\*\*/g,
          (_m, label: string) => `<strong>${escapeHtml(label.trim())}</strong>`
        )
        .replace(
          /__([^_<\r\n]*?[^\s_<\r\n])\s*__/g,
          (_m, label: string) => `<strong>${escapeHtml(label.trim())}</strong>`
        );

      // 结构化处理仅用于段落（AI 输出的标签+正文混合场景），
      // 避免在列表项、标题等元素中产生意外的标签拆分。
      if (tag === 'p') {
        const structuredContent = fixedContent
          .replace(/([。！？；;）)])(<strong>[^<]*?[：:]<\/strong>)/g, '$1</p><p>$2')
          .replace(/(<strong>[^<]*?[：:]<\/strong>)(?=[^<\r\n])/g, '$1<br>');
        return `<p>${structuredContent}</p>`;
      }

      return `<${tag}>${fixedContent}</${tag}>`;
    }
  );
}

// 添加图片属性扩展到 marked
const imageWithAttributesExtension = {
  name: 'imageWithAttributes',
  level: 'inline' as const,
  start(src: string) {
    return src.indexOf('![');
  },
  tokenizer(src: string) {
    // 匹配 ![alt](url|width) 或 ![alt](url)
    const rule = /^!\[([^\]]*)\]\(([^)|]+)(?:\|(\d+))?\)/;
    const match = rule.exec(src);
    if (match) {
      return {
        type: 'imageWithAttributes',
        raw: match[0],
        alt: match[1],
        url: match[2],
        width: match[3] || null
      };
    }
    return undefined;
  },
  renderer(token: any) {
    const alt = token.alt || '';
    const url = token.url || '';
    const width = token.width;
    
    let attrString = '';
    if (width) {
      attrString = ` width="${width}"`;
    }
    
    return `<img src="${escapeAttribute(url)}" alt="${escapeAttribute(alt)}"${attrString}>`;
  }
};

// 注册扩展。TipTap 不支持 Markdown 中直接嵌入的表单控件；把这些 raw HTML
// 输出成可见文本，避免 textarea 等元素破坏随后生成的文档结构。任务列表的
// checkbox 由 taskListExtension 直接生成，不会经过此 renderer。
marked.use({
  extensions: [taskListExtension, wikilinkExtension, markdownLinkExtension, imageWithAttributesExtension],
  renderer: {
    html(token) {
      return UNSUPPORTED_EDITOR_HTML_TAG_RE.test(token.text)
        ? escapeHtml(token.text)
        : false;
    }
  }
});

// 创建 Turndown service
export function createTurndownService(): TurndownService {
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*',
    strongDelimiter: '**',
    linkStyle: 'inlined',
    fence: '```'
  });

  // Turndown 不会转义文本节点里的 `<tag>`，因此来源 HTML 中的
  // `&lt;textarea&gt;` 会先变回 `<textarea>`，再被 marked 当成真实 HTML。
  // 这不仅会吞掉标签文本，textarea 等 raw-text 元素还会把后续生成的 HTML
  // 全部变成纯文本。这里只扩展普通文本节点的转义；Turndown 会跳过代码节点，
  // 所以代码块和行内代码中的 HTML 示例仍保持原样。
  const escapeMarkdownText = turndownService.escape.bind(turndownService);
  turndownService.escape = (value: string): string => {
    return escapeHtmlLikeMarkdownText(escapeMarkdownText(value));
  };

  // TipTap/Vue NodeView 的渲染 DOM 会包含代码语言按钮、复制按钮和高亮辅助节点。
  // 它们只属于编辑器界面，二次复制或 HTML 持久化时不能进入笔记正文。
  turndownService.addRule('editorPresentationElements', {
    filter: (node) => {
      const element = node as Element;
      return (
        node.nodeName === 'BUTTON' ||
        node.nodeName === 'SVG' ||
        element.hasAttribute('hidden') ||
        element.getAttribute('aria-hidden') === 'true' ||
        element.classList.contains('code-toolbar') ||
        element.classList.contains('image-controls') ||
        element.classList.contains('resize-handle') ||
        element.classList.contains('image-context-menu') ||
        element.classList.contains('ProseMirror-separator') ||
        element.classList.contains('ProseMirror-trailingBreak')
      );
    },
    replacement: () => ''
  });

  // 添加任务列表规则 - 识别 TipTap 的任务列表结构
  turndownService.addRule('taskListItem', {
    filter: (node) => {
      // 检查是否是包含 checkbox 的列表项
      if (node.nodeName === 'LI') {
        const hasCheckbox = node.querySelector('input[type="checkbox"]');
        const hasTaskListClass = node.parentNode?.nodeName === 'UL' &&
                                 (node.parentNode as Element).classList.contains('task-list');
        const hasTaskItemClass = (node as Element).classList.contains('task-item');
        
        // 如果有 checkbox 或者有任务列表相关的类，就认为是任务列表项
        return !!(hasCheckbox || hasTaskListClass || hasTaskItemClass);
      }
      return false;
    },
    replacement: (content, node) => {
      const element = node as HTMLElement;
      const checkbox = element.querySelector('input[type="checkbox"]');
      
      if (checkbox) {
        const isChecked = (checkbox as HTMLInputElement).checked;
        const prefix = isChecked ? '- [x] ' : '- [ ] ';
        
        // 提取 div 中的文本内容（跳过 label 和 input）
        const div = element.querySelector('div');
        let textContent = '';
        if (div) {
          // 使用 innerHTML 而不是 textContent，保留内部的 HTML 结构
          textContent = div.innerHTML.trim();
          // 将 HTML 转回 Markdown
          textContent = turndownService.turndown(textContent);
        } else {
          // 如果没有 div，尝试从 <p> 标签提取
          const p = element.querySelector('p');
          if (p) {
            textContent = turndownService.turndown(p.innerHTML);
          } else {
            // 最后尝试提取整个 li 的内容
            textContent = content.trim();
          }
        }
        
        return prefix + textContent + '\n';
      }
      
      // 如果没有 checkbox，使用默认处理
      return '- ' + content + '\n';
    }
  });

  // 添加任务列表容器规则
  turndownService.addRule('taskList', {
    filter: (node) => {
      return node.nodeName === 'UL' && (node as Element).classList.contains('task-list');
    },
    replacement: (content) => {
      return '\n' + content + '\n';
    }
  });

  // 统一处理各种网页复制出来的代码块。部分 Markdown 渲染器会在真正代码块前
  // 额外复制一个空 <pre>，直接交给 TipTap 会渲染成多个空代码块。
  turndownService.addRule('codeBlock', {
    filter: (node) => {
      return node.nodeName === 'PRE';
    },
    replacement: (_content, node) => {
      const preElement = node as Element;
      const codeElements = preElement.querySelectorAll('code');
      const sourceElement = codeElements.length === 1 ? codeElements[0] : preElement;
      const clonedCode = sourceElement.cloneNode(true) as Element;

      clonedCode
        .querySelectorAll('.ProseMirror-trailingBreak, button, [aria-hidden="true"], [hidden]')
        .forEach(element => element.remove());

      const code = getCodeTextContent(clonedCode)
        .replace(/\r\n?/g, '\n')
        .replace(/\n+$/, '');
      if (!hasMeaningfulCodeContent(code)) {
        return '';
      }

      const language = getCodeBlockLanguage(preElement, sourceElement);
      const fence = getCodeFence(code);
      return '\n' + fence + language + '\n' + code + '\n' + fence + '\n';
    }
  });

  // 添加表格规则
  turndownService.addRule('table', {
    filter: 'table',
    replacement: (_content, node) => {
      const table = node as HTMLTableElement;
      const rows: string[] = [];
      
      // 处理表头
      const thead = table.querySelector('thead');
      if (thead) {
        const headerRow = thead.querySelector('tr');
        if (headerRow) {
          const headers: string[] = [];
          const separators: string[] = [];
          
          Array.from(headerRow.querySelectorAll('th, td')).forEach((cell) => {
            const cellContent = turndownService.turndown((cell as HTMLElement).innerHTML).trim();
            headers.push(escapeMarkdownTableCell(cellContent));
            separators.push(tableAlignmentSeparator((cell as HTMLElement).getAttribute('align')));
          });
          
          if (headers.length > 0) {
            rows.push('| ' + headers.join(' | ') + ' |');
            rows.push('| ' + separators.join(' | ') + ' |');
          }
        }
      }
      
      // 处理表体
      const tbody = table.querySelector('tbody') || table;
      const bodyRows = tbody.querySelectorAll('tr');
      
      Array.from(bodyRows).forEach((row) => {
        // 跳过已经在 thead 中处理的行
        if (thead && thead.contains(row)) return;
        
        const cells: string[] = [];
        Array.from(row.querySelectorAll('th, td')).forEach((cell) => {
          const cellContent = turndownService.turndown((cell as HTMLElement).innerHTML).trim();
          cells.push(escapeMarkdownTableCell(cellContent));
        });
        
        if (cells.length > 0) {
          rows.push('| ' + cells.join(' | ') + ' |');
        }
      });
      
      return '\n' + rows.join('\n') + '\n\n';
    }
  });
  
  // 添加图片规则 - 保留原始相对路径
  turndownService.addRule('image', {
    filter: 'img',
    replacement: (_content, node) => {
      const element = node as HTMLElement;
      if (element.classList.contains('ProseMirror-separator')) return '';

      const alt = element.getAttribute('alt') || '';
      const originalPath = element.getAttribute('data-original-path');
      const imageScale = element.getAttribute('data-image-scale');
      const width = element.getAttribute('width');
      const source = originalPath || element.getAttribute('src') || '';
      if (!source.trim()) return '';

      if (imageScale) {
        return `<img src="${escapeAttribute(source)}" alt="${escapeAttribute(alt)}" data-image-scale="${escapeAttribute(imageScale)}">`;
      }

      if (width) {
        return `<img src="${escapeAttribute(source)}" alt="${escapeAttribute(alt)}" width="${escapeAttribute(width)}">`;
      }
      
      // 如果有原始路径，使用原始路径
      if (originalPath) {
        return `![${alt}](${originalPath})`;
      }
      
      // 否则使用 src（可能是 Tauri URL，需要转换回相对路径）
      const src = element.getAttribute('src') || '';
      return `![${alt}](${src})`;
    }
  });
  
  return turndownService;
}

/**
 * 将 Markdown 转换为 HTML，并为标题添加 ID 属性
 * @param markdown - Markdown 文本
 * @param workspaceRoot - 工作区根目录（可选，用于转换图片路径）
 * @returns HTML 字符串
 * @example
 * markdownToHtml('# 标题\n内容') // '<h1 id="标题">标题</h1>\n<p>内容</p>'
 */
export function markdownToHtml(markdown: string, workspaceRoot?: string): string {
  const normalizedMarkdown = normalizeMarkdownBeforeParse(markdown);
  // 先用 marked 解析 Markdown。breaks 必须在每次调用中明确指定：
  // marked 的全局配置可能被其他扩展覆盖，导致 AI 输出的单换行被折叠。
  const parsedHtml = marked.parse(normalizedMarkdown, { breaks: true, gfm: true }) as string;
  // 移除预处理阶段插入的零宽空格（marked 解析完成后不再需要），
  // 否则会干扰 renderUnparsedLabelStrong 中的正则匹配。
  const cleanedHtml = parsedHtml.replace(/\u200B/g, '');
  const html = sanitizeHtml(renderUnparsedLabelStrong(cleanedHtml));
  
  let processedHtml = html;
  
  // 如果提供了工作区根目录，处理图片路径
  if (workspaceRoot) {
    // 在 HTML 中查找图片标签，转换相对路径（包括 Markdown 和 HTML 格式的图片）
    processedHtml = html.replace(
      /<img([^>]*?)src="(\.\.\/[^"]+)"([^>]*?)>/g,
      (_match, before, src, after) => {
        // 解码 URL 编码的路径（marked 可能会对中文路径进行编码）
        const decodedSrc = decodeURIComponent(src);
        // 提取相对路径（去掉 ../ 前缀）
        const relativePath = decodedSrc.substring(3); // 去掉 "../"
        // 构建绝对路径（Windows 使用反斜杠）
        const absolutePath = `${workspaceRoot}\\${relativePath.replace(/\//g, '\\')}`;
        // 使用 Tauri 的 convertFileSrc 转换为可访问的 URL
        const tauriUrl = convertFileSrc(absolutePath);
        // 保存原始相对路径到 data 属性（如果还没有）
        const hasOriginalPath = (before + after).includes('data-original-path');
        const originalPathAttr = hasOriginalPath ? '' : ` data-original-path="${escapeAttribute(decodedSrc)}"`;
        return `<img${before}src="${escapeAttribute(tauriUrl)}"${originalPathAttr}${after}>`;
      }
    );
  }
  
  // 为标题添加 ID 属性，以支持锚点链接跳转
  processedHtml = processedHtml.replace(
    /<h([1-6])>(.+?)<\/h\1>/g,
    (_match, level, text) => {
      // 提取纯文本（移除 HTML 标签）
      const plainText = text.replace(/<[^>]+>/g, '');
      const id = textToAnchorId(plainText);
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );
  
  return sanitizeHtml(processedHtml);
}

/**
 * 将 HTML 中笔记内的相对图片路径解析为 Tauri 可访问的 URL（用于预览窗口）
 * @param html - 笔记 HTML 内容
 * @param workspaceRoot - 工作区根目录
 * @param noteFilePath - 笔记文件绝对路径（用于解析相对路径）
 * @returns 替换 img src 后的 HTML
 */
export function resolvePreviewImageUrls(
  html: string,
  _workspaceRoot: string,
  noteFilePath: string
): string {
  const noteDir = noteFilePath.replace(/\\/g, '/').replace(/\/[^/]*$/, '');

  const isAbsoluteUrl = (src: string): boolean => {
    const s = src.trim();
    return (
      s.startsWith('http://') ||
      s.startsWith('https://') ||
      s.startsWith('blob:') ||
      s.startsWith('data:') ||
      s.startsWith('file://') ||
      s.startsWith('markdown:') ||
      /^https?:\/\/asset\.localhost\//.test(s) ||
      /^[a-zA-Z]:[\\/]/.test(s) ||
      s.startsWith('/')
    );
  };

  const resolveRelativePath = (baseDir: string, relativePath: string): string => {
    const base = baseDir.split('/').filter(Boolean);
    const rel = relativePath.replace(/\\/g, '/').split('/').filter((x) => x && x !== '.');
    for (const p of rel) {
      if (p === '..') base.pop();
      else base.push(p);
    }
    return base.join('\\');
  };

  return html.replace(
    /<img([^>]*?)src="([^"]+)"([^>]*?)>/g,
    (match, before, src, after) => {
      const decodedSrc = decodeURIComponent(src);
      if (isAbsoluteUrl(decodedSrc)) return match;

      const relativePath =
        decodedSrc.startsWith('../') || decodedSrc.startsWith('./')
          ? decodedSrc
          : './' + decodedSrc;
      const absolutePath = resolveRelativePath(noteDir, relativePath);
      const tauriUrl = convertFileSrc(absolutePath);
      const hasOriginal = (before + after).includes('data-original-path');
      const originalAttr = hasOriginal ? '' : ` data-original-path="${decodedSrc}"`;
      return `<img${before}src="${tauriUrl}"${originalAttr}${after}>`;
    }
  );
}

// HTML 转 Markdown
export function htmlToMarkdown(html: string, turndownService: TurndownService): string {
  let markdown = turndownService.turndown(html);
  
  // 后处理：修复过度转义的 Markdown 语法字符
  // 注意：必须按照特定顺序处理，避免相互干扰
  
  // 1. 修复标题中的转义数字：### 1\. → ### 1.
  // 只处理标题中的情况，不影响列表
  markdown = markdown.replace(/^(#{1,6}\s+.*?)(\d+)\\\./gm, '$1$2.');
  
  // 2. 修复有序列表开头的转义：1\. → 1. (只在行首)
  markdown = markdown.replace(/^(\d+)\\\.\s/gm, '$1. ');
  
  // 3. 修复无序列表的多余空格：-   → - 
  markdown = markdown.replace(/^-\s{3,}/gm, '- ');
  
  // 4. 修复加粗：\*\* → ** (必须在斜体之前处理)
  markdown = markdown.replace(/\\\*\\\*/g, '**');
  
  // 5. 修复斜体：\* → * (在加粗处理后，单独的 \* 才是斜体)
  markdown = markdown.replace(/\\\*/g, '*');
  
  // 6. 修复行内代码：\` → `
  markdown = markdown.replace(/\\`/g, '`');
  
  // 7. 修复标题：\# → #
  markdown = markdown.replace(/\\#/g, '#');
  
  // 8. 修复下划线：\_ → _
  markdown = markdown.replace(/\\_/g, '_');
  
  // 9. 修复方括号：\[ 和 \] → [ 和 ]
  // 但要保留任务列表中的方括号
  markdown = markdown.replace(/\\\[(?![x ]?\\\])/g, '[');
  markdown = markdown.replace(/(?<!\\)\\\]/g, ']');
  
  // 10. 修复圆括号：\( 和 \) → ( 和 )
  markdown = markdown.replace(/\\\(/g, '(');
  markdown = markdown.replace(/\\\)/g, ')');
  
  // 11. 清理网页富文本列表缩进产生的“仅含空白字符”的空行。
  // 这类行不会被后面的连续换行规则识别，会在列表项内变成空段落。
  markdown = markdown.replace(/^[\t ]+$/gm, '');

  // 12. 格式化：确保标题后有空行
  markdown = markdown.replace(/(^#{1,6}\s+.+)(\n)(?![\n#])/gm, '$1\n\n');
  
  // 13. 移除多余的空行（超过2个连续换行）
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  
  // 14. 确保文档开头没有多余空行
  markdown = markdown.replace(/^\n+/, '');
  
  // 15. 确保文档末尾只有一个换行
  markdown = markdown.replace(/\n+$/, '\n');
  
  return markdown;
}

/**
 * 将来源网页的富文本剪贴板内容规范化为编辑器 HTML。
 * HTML -> Markdown -> HTML 的往返会去掉展示层包装节点，避免隐藏代码层、
 * 松散列表段落和复制按钮被 TipTap 当成正文节点。
 */
export function richHtmlToEditorHtml(html: string, workspaceRoot?: string): string {
  const markdown = htmlToMarkdown(html, createTurndownService());
  return markdown.trim() ? markdownToHtml(markdown, workspaceRoot) : '';
}

// TipTap JSON 转 Markdown
export function jsonToMarkdown(json: any): string {
  if (!json || !json.content) {
    return '';
  }

  const getPlainTextContent = (node: any): string => {
    if (node.type === 'text') return node.text || '';
    return node.content ? node.content.map(getPlainTextContent).join('') : '';
  };
  
  const processNode = (node: any): string => {
    const type = node.type;
    
    // 处理文本节点
    if (type === 'text') {
      const marks = Array.isArray(node.marks) ? node.marks : [];
      const hasInlineCode = marks.some((mark: any) => mark.type === 'code');
      let text = node.text || '';
      if (!hasInlineCode) {
        // ProseMirror 文本节点中的 `<input>` 是可见文本，不是 raw HTML。
        // 保存为 Markdown 时必须恢复反斜杠，否则重新打开会被当成 DOM 标签。
        text = escapeHtmlLikeMarkdownText(text);
      }
      
      // 处理文本标记（加粗、斜体、代码、删除线、超链接等）
      if (marks.length > 0) {
        let linkHref: string | null = null;
        const otherMarks: any[] = [];

        marks.forEach((mark: any) => {
          if (mark.type === 'link') {
            // 记录链接地址，稍后统一包裹，避免与其它样式嵌套顺序问题
            linkHref = mark.attrs?.href || '';
          } else {
            otherMarks.push(mark);
          }
        });

        const hasBold = otherMarks.some((mark: any) => mark.type === 'bold');
        const hasItalic = otherMarks.some((mark: any) => mark.type === 'italic');

        // 稳定组合加粗和斜体，避免 mark 数组顺序变化后生成相互交错的分隔符。
        if (hasBold && hasItalic) {
          text = `***${text}***`;
        } else if (hasBold) {
          text = `**${text}**`;
        } else if (hasItalic) {
          text = `*${text}*`;
        }

        otherMarks.forEach((mark: any) => {
          if (mark.type === 'code') {
            text = `\`${text}\``;
          } else if (mark.type === 'strike') {
            text = `~~${text}~~`;
          }
        });

        // 最后应用链接标记，确保整个内容都在链接内
        if (linkHref) {
          // 对于空 href，退化为普通文本，避免生成非法 Markdown
          const safeHref = String(linkHref).trim();
          if (safeHref.length > 0) {
            text = `[${text}](${safeHref})`;
          }
        }
      }
      
      return text;
    }
    
    // 处理段落
    if (type === 'paragraph') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return content + '\n\n';
    }
    
    // 处理标题
    if (type === 'heading') {
      const level = node.attrs?.level || 1;
      const content = node.content ? node.content.map(processNode).join('') : '';
      return '#'.repeat(level) + ' ' + content + '\n\n';
    }
    
    // 处理任务列表
    if (type === 'taskList') {
      const items = node.content ? node.content.map(processNode).join('') : '';
      return items;
    }
    
    // 处理任务列表项
    if (type === 'taskItem') {
      const checked = node.attrs?.checked || false;
      const prefix = checked ? '- [x] ' : '- [ ] ';
      const content = node.content ? node.content.map(processNode).join('').trim() : '';
      return prefix + content + '\n';
    }
    
    // 处理无序列表
    if (type === 'bulletList') {
      const items = node.content ? node.content.map(processNode).join('') : '';
      return items + '\n';
    }
    
    // 处理有序列表
    if (type === 'orderedList') {
      let index = node.attrs?.start || 1;
      const items = node.content ? node.content.map((item: any) => {
        const prefix = `${index++}. `;
        const indentation = ' '.repeat(prefix.length);
        const content = item.content
          ? item.content.map(processNode).join('').trim().replace(/\n{3,}/g, '\n\n')
          : '';
        const indentedContent = content.replace(/\n/g, `\n${indentation}`);
        return `${prefix}${indentedContent}\n`;
      }).join('') : '';
      return items + '\n';
    }
    
    // 处理列表项
    if (type === 'listItem') {
      const content = node.content ? node.content.map(processNode).join('').trim() : '';
      return '- ' + content + '\n';
    }
    
    // 处理代码块
    if (type === 'codeBlock') {
      const language = node.attrs?.language || '';
      const content = getPlainTextContent(node);
      // 移除内容末尾的所有换行符，避免多余空行
      const trimmedContent = content.replace(/\n+$/, '');
      const fence = getCodeFence(trimmedContent);
      return fence + language + '\n' + trimmedContent + '\n' + fence + '\n\n';
    }
    
    // 处理引用
    if (type === 'blockquote') {
      const content = node.content ? node.content.map(processNode).join('') : '';
      return content.split('\n').filter((line: string) => line.trim()).map((line: string) => '> ' + line).join('\n') + '\n\n';
    }
    
    // 处理水平线
    if (type === 'horizontalRule') {
      return '---\n\n';
    }
    
    // 处理硬换行
    if (type === 'hardBreak') {
      return '\n';
    }
    
    // 处理表格
    if (type === 'table') {
      const rows = node.content ? node.content.map(processNode).join('') : '';
      return '\n' + rows + '\n';
    }
    
    // 处理表格行
    if (type === 'tableRow') {
      const cells = node.content || [];
      const isHeaderRow = cells.some((cell: any) => cell.type === 'tableHeader');
      
      // 处理单元格内容
      const cellContents = cells.map((cell: any) => {
        const content = cell.content ? cell.content.map(processNode).join('').trim() : '';
        return escapeMarkdownTableCell(content);
      });
      
      // 生成表格行
      let row = '| ' + cellContents.join(' | ') + ' |\n';
      
      // 如果是表头行，添加分隔线
      if (isHeaderRow) {
        const separator = '| ' + cells
          .map((cell: any) => tableAlignmentSeparator(cell.attrs?.textAlign))
          .join(' | ') + ' |\n';
        row += separator;
      }
      
      return row;
    }
    
    // 处理表格单元格（普通单元格）
    if (type === 'tableCell') {
      const content = node.content ? node.content.map(processNode).join('').trim() : '';
      return content;
    }
    
    // 处理表格表头单元格
    if (type === 'tableHeader') {
      const content = node.content ? node.content.map(processNode).join('').trim() : '';
      return content;
    }
    
    // 处理图片（包括 image 和 localImage）
    if (type === 'image' || type === 'localImage') {
      const src = node.attrs?.src || '';
      const alt = node.attrs?.alt || '';
      const originalPath = node.attrs?.['data-original-path'];
      const width = node.attrs?.width;
      const imageScale = node.attrs?.['data-image-scale'];
      const source = originalPath || src;

      if (imageScale) {
        return `<img src="${escapeAttribute(source)}" alt="${escapeAttribute(alt)}" data-image-scale="${Math.round(Number(imageScale))}">`;
      }
      
      // 优先使用原始相对路径
      if (originalPath) {
        // 如果有宽度属性，使用 HTML 格式（兼容所有编辑器）
        if (width) {
          return `<img src="${originalPath}" alt="${alt}" width="${width}">`;
        }
        return `![${alt}](${originalPath})`;
      }
      
      // 如果没有原始路径，尝试从 src 中提取
      // 如果 src 是 Tauri URL，需要转换回相对路径
      if (src.startsWith('https://asset.localhost/') || src.startsWith('asset://') || src.startsWith('http://asset.localhost/')) {
        // 这种情况下，图片可能是新上传的，应该已经有 originalPath
        // 如果没有，就使用 src（虽然不理想）
        if (width) {
          return `<img src="${src}" alt="${alt}" width="${width}">`;
        }
        return `![${alt}](${src})`;
      }
      
      if (width) {
        return `![${alt}](${src}|${width})`;
      }
      return `![${alt}](${src})`;
    }
    
    // 默认处理：递归处理子节点
    if (node.content) {
      return node.content.map(processNode).join('');
    }
    
    return '';
  };
  
  let markdown = json.content.map(processNode).join('');
  
  // 清理多余的空行
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  markdown = markdown.replace(/^\n+/, '');
  markdown = markdown.replace(/\n+$/, '\n');
  
  return markdown;
}
