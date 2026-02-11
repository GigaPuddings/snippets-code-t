import TurndownService from 'turndown';
import { marked } from 'marked';

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
  gfm: true
});

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
    return `[[${token.text}]]`;
  }
};

// 添加 Markdown 链接扩展，只阻止外部链接转换为 <a> 标签，允许锚点链接正常转换
const markdownLinkExtension = {
  name: 'markdownLink',
  level: 'inline' as const,
  start(src: string) {
    return src.indexOf('[');
  },
  tokenizer(src: string) {
    // 匹配 [文本](url) 格式，但不匹配 [[wikilink]]
    const rule = /^\[([^\]]+)\]\(([^)]+)\)/;
    const match = rule.exec(src);
    if (match && !src.startsWith('[[')) {
      const url = match[2];
      // 只拦截非锚点链接（外部链接）
      if (!url.startsWith('#')) {
        return {
          type: 'markdownLink',
          raw: match[0],
          text: match[1],
          url: url
        };
      }
    }
    // 返回 undefined 让 marked 使用默认的链接处理（会转换为 <a> 标签）
    return undefined;
  },
  renderer(token: any) {
    // 保持原始的 [文本](url) 格式，让 TipTap 的装饰器插件来处理
    return `[${token.text}](${token.url})`;
  }
};

// 添加任务列表扩展到 marked
const taskListExtension = {
  name: 'taskList',
  level: 'block' as const,
  start(src: string) {
    return src.match(/^- \[[ x]\]/)?.index;
  },
  tokenizer(src: string) {
    const rule = /^(- \[([ x])\] .+(?:\n|$))+/;
    const match = rule.exec(src);
    if (match) {
      const items = match[0].split('\n').filter(line => line.trim());
      const tokens = items.map(item => {
        const checked = item.includes('[x]');
        const text = item.replace(/^- \[[ x]\] /, '');
        return { checked, text };
      });
      return {
        type: 'taskList',
        raw: match[0],
        items: tokens
      };
    }
    return undefined;
  },
  renderer(token: any) {
    const items = token.items.map((item: any) => {
      return `<li class="task-item"><label><input type="checkbox" ${item.checked ? 'checked' : ''}><div>${item.text}</div></label></li>`;
    }).join('');
    return `<ul class="task-list">${items}</ul>`;
  }
};

// 注册扩展
marked.use({ extensions: [wikilinkExtension, markdownLinkExtension, taskListExtension] });

// 创建 Turndown service
export function createTurndownService(): TurndownService {
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*',
    strongDelimiter: '**',
    linkStyle: 'inlined'
  });

  // 完全禁用转义，保持 Markdown 原样
  turndownService.escape = (text: string) => text;

  // Rule for anchor links - 解码 URL 编码的锚点链接
  // 确保源码模式下锚点链接显示为可读格式，而不是 URL 编码的乱码
  turndownService.addRule('anchorLink', {
    filter: (node) => {
      if (node.nodeName !== 'A') return false;
      const href = (node as HTMLElement).getAttribute('href');
      return href ? href.startsWith('#') : false;
    },
    replacement: (content, node) => {
      const href = (node as HTMLElement).getAttribute('href');
      if (!href) return content;
      
      // 解码 URL 编码的锚点 ID，使其在源码模式下可读
      // 例如：#%E4%B8%AD%E6%96%87 -> #中文
      const decodedHref = decodeURIComponent(href);
      return `[${content}](${decodedHref})`;
    }
  });

  // Rule for external links - 保留 [文本](url) 格式
  // 优先级高于默认的链接规则
  turndownService.addRule('externalLink', {
    filter: (node) => {
      if (node.nodeName !== 'A') return false;
      const href = (node as HTMLElement).getAttribute('href');
      // 只处理非锚点链接
      return href ? !href.startsWith('#') : false;
    },
    replacement: (content, node) => {
      const href = (node as HTMLElement).getAttribute('href');
      if (!href) return content;
      
      // 移除自动添加的 https:// 协议（如果原始 URL 没有协议）
      const originalUrl = (node as HTMLElement).getAttribute('data-original-url') || href;
      let cleanUrl = originalUrl;
      
      // 如果 href 有协议但 originalUrl 没有，使用 originalUrl
      if (href.includes('://') && !originalUrl.includes('://')) {
        cleanUrl = originalUrl;
      } else {
        cleanUrl = href;
      }
      
      return `[${content}](${cleanUrl})`;
    }
  });

  // Rule for Wikilinks - 保留 [[笔记名称]] 格式
  turndownService.addRule('wikilink', {
    filter: (node) => {
      return node.nodeName === 'SPAN' && node.classList.contains('wikilink-decoration');
    },
    replacement: (content, node) => {
      const noteName = (node as HTMLElement).getAttribute('data-note-name');
      return noteName ? `[[${noteName}]]` : content;
    }
  });

  // Rule for task lists - 保留 - [ ] 和 - [x] 格式
  turndownService.addRule('taskList', {
    filter: (node) => {
      return node.nodeName === 'LI' && 
             node.parentNode?.nodeName === 'UL' && 
             (node.parentNode as HTMLElement).classList.contains('task-list');
    },
    replacement: (content, node) => {
      const checkbox = (node as HTMLElement).querySelector('input[type="checkbox"]');
      if (checkbox) {
        const checked = (checkbox as HTMLInputElement).checked;
        const cleanContent = content.trim().replace(/\n/g, ' ');
        return `- [${checked ? 'x' : ' '}] ${cleanContent}\n`;
      }
      return `- ${content.trim()}\n`;
    }
  });

  // Rule for code blocks - 保留 ```language 格式
  turndownService.addRule('codeBlock', {
    filter: (node) => {
      return node.nodeName === 'PRE' && node.firstChild?.nodeName === 'CODE';
    },
    replacement: (content, node) => {
      const code = (node as HTMLElement).querySelector('code');
      const language = code?.className.match(/language-(\w+)/)?.[1] || '';
      const cleanContent = content.replace(/\n+$/, '');
      return `\n\`\`\`${language}\n${cleanContent}\n\`\`\`\n`;
    }
  });

  // Rule for inline code - 保留 `code` 格式
  turndownService.addRule('inlineCode', {
    filter: (node) => {
      return node.nodeName === 'CODE' && node.parentNode?.nodeName !== 'PRE';
    },
    replacement: (content) => {
      return `\`${content}\``;
    }
  });

  // Rule for paragraphs - 优化段落格式
  turndownService.addRule('paragraph', {
    filter: 'p',
    replacement: (content) => {
      const trimmed = content.trim();
      return trimmed ? `${trimmed}\n\n` : '';
    }
  });

  // Rule for headings - 确保标题格式正确
  turndownService.addRule('heading', {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    replacement: (content, node) => {
      const level = parseInt(node.nodeName.charAt(1));
      const hashes = '#'.repeat(level);
      return `${hashes} ${content.trim()}\n\n`;
    }
  });

  // Rule for blockquotes - 优化引用格式
  turndownService.addRule('blockquote', {
    filter: 'blockquote',
    replacement: (content) => {
      const lines = content.trim().split('\n');
      const quoted = lines.map(line => `> ${line}`).join('\n');
      return `${quoted}\n\n`;
    }
  });

  return turndownService;
}

/**
 * 将 Markdown 转换为 HTML，并为标题添加 ID 属性
 * @param markdown - Markdown 文本
 * @returns HTML 字符串
 * @example
 * markdownToHtml('# 标题\n内容') // '<h1 id="标题">标题</h1>\n<p>内容</p>'
 */
export function markdownToHtml(markdown: string): string {
  const html = marked.parse(markdown) as string;
  
  // 为标题添加 ID 属性，以支持锚点链接跳转
  const processedHtml = html.replace(
    /<h([1-6])>(.+?)<\/h\1>/g,
    (_match, level, text) => {
      // 提取纯文本（移除 HTML 标签）
      const plainText = text.replace(/<[^>]+>/g, '');
      const id = textToAnchorId(plainText);
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );
  
  // 注意：不再自动补全链接协议，因为 Markdown 链接现在保持原始格式
  // 由 MarkdownLinkHandler 装饰器插件来处理显示和跳转
  
  return processedHtml;
}

// HTML 转 Markdown
export function htmlToMarkdown(html: string, turndownService: TurndownService): string {
  return turndownService.turndown(html);
}
