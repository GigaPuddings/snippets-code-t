import TurndownService from 'turndown';
import { marked } from 'marked';

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
  },
  renderer(token: any) {
    // 保持原始的 [[笔记名称]] 格式，让 TipTap 的装饰器插件来处理
    return `[[${token.text}]]`;
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
  },
  renderer(token: any) {
    const items = token.items.map((item: any) => {
      return `<li class="task-item"><label><input type="checkbox" ${item.checked ? 'checked' : ''}><div>${item.text}</div></label></li>`;
    }).join('');
    return `<ul class="task-list">${items}</ul>`;
  }
};

// 注册扩展
marked.use({ extensions: [wikilinkExtension, taskListExtension] });

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

// Markdown 转 HTML
export function markdownToHtml(markdown: string): string {
  return marked.parse(markdown) as string;
}

// HTML 转 Markdown
export function htmlToMarkdown(html: string, turndownService: TurndownService): string {
  return turndownService.turndown(html);
}
