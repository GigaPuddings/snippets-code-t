import TurndownService from 'turndown';
import { marked } from 'marked';
import { convertFileSrc } from '@tauri-apps/api/core';

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
    const match = src.match(/^- \[([ x])\]/);
    return match ? match.index : undefined;
  },
  tokenizer(src: string) {
    // 匹配连续的任务列表项（支持换行或不换行）
    const rule = /^(- \[([ x])\] [^\n]*(?:\n- \[([ x])\] [^\n]*)*)/;
    const match = rule.exec(src);
    
    if (match) {
      const items: Array<{ checked: boolean; text: string }> = [];
      const raw = match[0];
      
      // 使用更灵活的分割方式：按 "- [" 分割，然后重新组合
      const parts = raw.split(/(?=- \[)/);
      
      for (const part of parts) {
        const trimmedPart = part.trim();
        if (!trimmedPart) continue;
        
        const itemMatch = /^- \[([ x])\] (.+?)(?=- \[|$)/s.exec(trimmedPart);
        if (itemMatch) {
          const text = itemMatch[2].trim();
          items.push({
            checked: itemMatch[1] === 'x',
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
    return `[[${token.text}]]`;
  }
};

// 添加 Markdown 链接扩展
// 策略：
// 1. 有效外部链接 → 保持 Markdown 格式 [文本](url)，由装饰器处理
// 2. 锚点链接 → 转换为 <a href="#anchor">，支持文档内跳转
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
    
    if (isAnchorLink) {
      // 锚点链接：转换为 <a> 标签，支持文档内跳转
      return `<a href="${url}">${text}</a>`;
    } else if (isValidExternalLink) {
      // 有效外部链接：保持 Markdown 格式，让装饰器处理
      return `[${text}](${url})`;
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
    
    return `<img src="${url}" alt="${alt}"${attrString}>`;
  }
};

// 注册扩展
marked.use({ extensions: [taskListExtension, wikilinkExtension, markdownLinkExtension, imageWithAttributesExtension] });

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

  // 添加代码块规则 - 移除 ProseMirror-trailingBreak 和末尾多余的换行
  turndownService.addRule('codeBlock', {
    filter: (node) => {
      return node.nodeName === 'PRE' && node.querySelector('code') !== null;
    },
    replacement: (_content, node) => {
      const codeElement = (node as Element).querySelector('code');
      if (!codeElement) return '';
      
      // 获取语言
      const className = codeElement.className || '';
      const languageMatch = className.match(/language-(\S+)/);
      const language = languageMatch ? languageMatch[1] : '';
      
      // 获取代码内容，移除 ProseMirror-trailingBreak 元素
      let code = '';
      const clonedCode = codeElement.cloneNode(true) as HTMLElement;
      
      // 移除所有 ProseMirror-trailingBreak 元素
      const trailingBreaks = clonedCode.querySelectorAll('.ProseMirror-trailingBreak');
      trailingBreaks.forEach(br => br.remove());
      
      // 获取文本内容
      code = clonedCode.textContent || '';
      
      // 移除末尾的换行符（但保留代码内部的换行）
      code = code.replace(/\n+$/, '');
      
      // 返回 Markdown 格式的代码块
      return '\n```' + language + '\n' + code + '\n```\n';
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
          
          headerRow.querySelectorAll('th, td').forEach((cell) => {
            const cellContent = turndownService.turndown((cell as HTMLElement).innerHTML).trim();
            headers.push(cellContent);
            separators.push('---');
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
      
      bodyRows.forEach((row) => {
        // 跳过已经在 thead 中处理的行
        if (thead && thead.contains(row)) return;
        
        const cells: string[] = [];
        row.querySelectorAll('th, td').forEach((cell) => {
          const cellContent = turndownService.turndown((cell as HTMLElement).innerHTML).trim();
          cells.push(cellContent);
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
      const alt = element.getAttribute('alt') || '';
      const originalPath = element.getAttribute('data-original-path');
      
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
  // 先用 marked 解析 Markdown
  const html = marked.parse(markdown) as string;
  
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
        const originalPathAttr = hasOriginalPath ? '' : ` data-original-path="${decodedSrc}"`;
        return `<img${before}src="${tauriUrl}"${originalPathAttr}${after}>`;
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
  
  return processedHtml;
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
      /^https:\/\/asset\.localhost\//.test(s)
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
  
  // 11. 格式化：确保标题后有空行
  markdown = markdown.replace(/(^#{1,6}\s+.+)(\n)(?![\n#])/gm, '$1\n\n');
  
  // 12. 移除多余的空行（超过2个连续换行）
  markdown = markdown.replace(/\n{3,}/g, '\n\n');
  
  // 13. 确保文档开头没有多余空行
  markdown = markdown.replace(/^\n+/, '');
  
  // 14. 确保文档末尾只有一个换行
  markdown = markdown.replace(/\n+$/, '\n');
  
  return markdown;
}

// TipTap JSON 转 Markdown
export function jsonToMarkdown(json: any): string {
  if (!json || !json.content) {
    return '';
  }
  
  const processNode = (node: any): string => {
    const type = node.type;
    
    // 处理文本节点
    if (type === 'text') {
      let text = node.text || '';
      
      // 处理文本标记（加粗、斜体、代码、删除线、超链接等）
      if (node.marks && Array.isArray(node.marks)) {
        let linkHref: string | null = null;
        const otherMarks: any[] = [];

        node.marks.forEach((mark: any) => {
          if (mark.type === 'link') {
            // 记录链接地址，稍后统一包裹，避免与其它样式嵌套顺序问题
            linkHref = mark.attrs?.href || '';
          } else {
            otherMarks.push(mark);
          }
        });

        // 先应用除 link 之外的标记
        otherMarks.forEach((mark: any) => {
          if (mark.type === 'bold') {
            text = `**${text}**`;
          } else if (mark.type === 'italic') {
            text = `*${text}*`;
          } else if (mark.type === 'code') {
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
        const content = item.content ? item.content.map(processNode).join('').trim() : '';
        return `${index++}. ${content}\n`;
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
      const content = node.content ? node.content.map(processNode).join('') : '';
      // 移除内容末尾的所有换行符，避免多余空行
      const trimmedContent = content.replace(/\n+$/, '');
      return '```' + language + '\n' + trimmedContent + '\n```\n\n';
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
        return content;
      });
      
      // 生成表格行
      let row = '| ' + cellContents.join(' | ') + ' |\n';
      
      // 如果是表头行，添加分隔线
      if (isHeaderRow) {
        const separator = '| ' + cellContents.map(() => '---').join(' | ') + ' |\n';
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
