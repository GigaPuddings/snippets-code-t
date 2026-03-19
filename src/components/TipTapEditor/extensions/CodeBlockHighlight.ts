/**
 * 代码块语法高亮扩展
 * 通过 ProseMirror Decoration 在可编辑代码块内高亮关键词（预览/阅览均生效）
 */
import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';
import type { Node as PMNode } from '@tiptap/pm/model';
import CodeBlockHighlightComponent from './CodeBlockHighlightComponent.vue';

const codeBlockSyntaxKey = new PluginKey<DecorationSet>('codeBlockSyntaxHighlight');

/** Markdown 围栏语言别名 → 内部语言 key */
const LANG_ALIASES: Record<string, string> = {
  js: 'javascript',
  jsx: 'javascript',
  mjs: 'javascript',
  cjs: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  py: 'python',
  rb: 'ruby',
  rs: 'rust',
  sh: 'bash',
  shell: 'bash',
  zsh: 'bash',
  yml: 'yaml',
  md: 'markdown',
  docker: 'dockerfile',
};

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** 解析用于高亮的语言 key（含别名与空语言时的自动检测） */
export function resolveCodeBlockLang(languageAttr: string | null | undefined, code: string): string {
  const raw = (languageAttr ?? '').trim().toLowerCase();
  if (raw) {
    return LANG_ALIASES[raw] || raw;
  }
  return detectLanguage(code) || 'plaintext';
}

function buildCodeBlockSyntaxDecorations(doc: PMNode): DecorationSet {
  const decorations: Decoration[] = [];
  doc.descendants((node, pos) => {
    if (node.type.name !== 'codeBlock') return;
    const text = node.textContent;
    if (!text) return;
    const lang = resolveCodeBlockLang(node.attrs.language as string | null, text);
    const keywords = languageKeywords[lang];
    const start = pos + 1;

    // 1. 字符串高亮（双引号、单引号、模板字符串）
    const stringPatterns = [
      /"(?:[^"\\]|\\.)*"/g,
      /'(?:[^'\\]|\\.)*'/g,
      /`(?:[^`\\]|\\.)*`/g,
    ];
    for (const pat of stringPatterns) {
      let m: RegExpExecArray | null;
      while ((m = pat.exec(text)) !== null) {
        decorations.push(
          Decoration.inline(start + m.index, start + m.index + m[0].length, {
            class: 'hljs-string',
          })
        );
      }
    }

    // 2. 数字高亮
    const numberPattern = /\b\d+\.?\d*\b/g;
    let m: RegExpExecArray | null;
    while ((m = numberPattern.exec(text)) !== null) {
      decorations.push(
        Decoration.inline(start + m.index, start + m.index + m[0].length, {
          class: 'hljs-number',
        })
      );
    }

    // 3. 注释高亮（行注释 //、块注释 /* */、#）
    const commentPatterns = [
      /\/\/.*$/gm,
      /\/\*[\s\S]*?\*\//g,
      /#.*$/gm,
    ];
    for (const pat of commentPatterns) {
      let m: RegExpExecArray | null;
      while ((m = pat.exec(text)) !== null) {
        decorations.push(
          Decoration.inline(start + m.index, start + m.index + m[0].length, {
            class: 'hljs-comment',
          })
        );
      }
    }

    // 4. 关键词高亮
    if (keywords?.length) {
      const sorted = [...keywords].sort((a, b) => b.length - a.length);
      const pattern = new RegExp(`\\b(${sorted.map(escapeRegExp).join('|')})\\b`, 'g');
      let m: RegExpExecArray | null;
      while ((m = pattern.exec(text)) !== null) {
        const before = text[m.index - 1];
        const isInString = before === '"' || before === "'" || before === '`';
        const isInComment = before === '/' && text[m.index - 2] === '/';
        if (!isInString && !isInComment) {
          decorations.push(
            Decoration.inline(start + m.index, start + m.index + m[0].length, {
              class: 'hljs-keyword',
            })
          );
        }
      }
    }
  });
  return DecorationSet.create(doc, decorations);
}

export interface CodeBlockHighlightOptions {
  languageClassPrefix: string;
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    codeBlock: {
      setCodeBlock: (attributes?: { language: string }) => ReturnType;
      toggleCodeBlock: (attributes?: { language: string }) => ReturnType;
    };
  }
}

// 语言关键词映射表
const languageKeywords: Record<string, string[]> = {
  javascript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'class', 'extends', 'import', 'export', 'default', 'from', 'async', 'await', 'typeof', 'instanceof', 'in', 'of', 'null', 'undefined', 'true', 'false', 'void'],
  typescript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 'new', 'this', 'class', 'extends', 'import', 'export', 'default', 'from', 'async', 'await', 'typeof', 'instanceof', 'in', 'of', 'null', 'undefined', 'true', 'false', 'void', 'interface', 'type', 'enum', 'namespace', 'module', 'declare', 'abstract', 'implements', 'private', 'public', 'protected', 'readonly', 'static', 'as', 'keyof', 'infer', 'never', 'unknown', 'any'],
  python: ['def', 'class', 'return', 'if', 'elif', 'else', 'for', 'while', 'try', 'except', 'finally', 'with', 'as', 'import', 'from', 'pass', 'break', 'continue', 'raise', 'yield', 'lambda', 'and', 'or', 'not', 'in', 'is', 'True', 'False', 'None', 'global', 'nonlocal', 'assert', 'del', 'async', 'await'],
  java: ['public', 'private', 'protected', 'static', 'final', 'abstract', 'class', 'interface', 'extends', 'implements', 'new', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 'throws', 'import', 'package', 'this', 'super', 'void', 'int', 'long', 'double', 'float', 'boolean', 'char', 'byte', 'short', 'String', 'true', 'false', 'null', 'instanceof', 'synchronized', 'volatile', 'transient', 'native', 'enum'],
  c: ['int', 'long', 'double', 'float', 'char', 'void', 'signed', 'unsigned', 'const', 'static', 'extern', 'register', 'volatile', 'auto', 'struct', 'union', 'enum', 'typedef', 'sizeof', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'return', 'goto', 'NULL', 'true', 'false', 'include', 'define', 'ifdef', 'ifndef', 'endif', 'pragma'],
  cpp: ['int', 'long', 'double', 'float', 'char', 'void', 'bool', 'auto', 'const', 'static', 'extern', 'volatile', 'register', 'signed', 'unsigned', 'struct', 'union', 'enum', 'class', 'typedef', 'namespace', 'using', 'template', 'typename', 'public', 'private', 'protected', 'virtual', 'override', 'final', 'new', 'delete', 'this', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'return', 'goto', 'try', 'catch', 'throw', 'nullptr', 'true', 'false', 'include', 'define', 'pragma', 'std', 'cout', 'cin', 'endl', 'string', 'vector', 'map', 'set'],
  csharp: ['public', 'private', 'protected', 'internal', 'static', 'sealed', 'abstract', 'class', 'interface', 'struct', 'enum', 'delegate', 'event', 'new', 'this', 'base', 'if', 'else', 'for', 'foreach', 'while', 'do', 'switch', 'case', 'break', 'continue', 'return', 'goto', 'try', 'catch', 'finally', 'throw', 'using', 'namespace', 'import', 'async', 'await', 'void', 'int', 'long', 'double', 'float', 'decimal', 'bool', 'char', 'string', 'byte', 'true', 'false', 'null', 'var', 'dynamic', 'readonly', 'const', 'ref', 'out', 'in', 'params', 'nameof', 'typeof', 'is', 'as', 'null', 'true', 'false'],
  go: ['package', 'import', 'func', 'return', 'var', 'const', 'type', 'struct', 'interface', 'map', 'chan', 'if', 'else', 'for', 'range', 'switch', 'case', 'default', 'break', 'continue', 'goto', 'fallthrough', 'defer', 'go', 'select', 'true', 'false', 'nil', 'iota', 'make', 'new', 'append', 'len', 'cap', 'copy', 'delete', 'panic', 'recover'],
  rust: ['fn', 'let', 'mut', 'const', 'static', 'struct', 'enum', 'impl', 'trait', 'type', 'where', 'pub', 'mod', 'use', 'self', 'super', 'crate', 'if', 'else', 'match', 'for', 'while', 'loop', 'break', 'continue', 'return', 'as', 'in', 'ref', 'move', 'async', 'await', 'dyn', 'unsafe', 'true', 'false', 'Some', 'None', 'Ok', 'Err', 'Self', 'Box', 'Vec', 'String', 'Option', 'Result'],
  php: ['php', 'echo', 'print', 'function', 'class', 'interface', 'trait', 'extends', 'implements', 'new', 'return', 'if', 'else', 'elseif', 'for', 'foreach', 'while', 'do', 'switch', 'case', 'default', 'break', 'continue', 'try', 'catch', 'finally', 'throw', 'use', 'namespace', 'import', 'require', 'include', 'require_once', 'include_once', 'true', 'false', 'null', 'var', 'const', 'static', 'public', 'private', 'protected', 'final', 'abstract', 'global', 'array', 'list', 'empty', 'isset', 'unset', 'die', 'exit'],
  html: ['html', 'head', 'body', 'div', 'span', 'p', 'a', 'img', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'form', 'input', 'button', 'select', 'option', 'textarea', 'label', 'script', 'style', 'link', 'meta', 'title', 'header', 'footer', 'nav', 'section', 'article', 'aside', 'main', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'hr', 'strong', 'em', 'iframe', 'canvas', 'svg', 'path', 'class', 'id', 'src', 'href', 'alt', 'style', 'type', 'name', 'value', 'placeholder', 'disabled', 'readonly', 'required', 'checked', 'selected'],
  css: ['color', 'background', 'background-color', 'font', 'font-size', 'font-family', 'font-weight', 'text-align', 'margin', 'padding', 'border', 'width', 'height', 'display', 'position', 'top', 'left', 'right', 'bottom', 'float', 'clear', 'overflow', 'z-index', 'flex', 'grid', 'box-shadow', 'opacity', 'transform', 'transition', 'animation', 'cursor', 'visibility', 'line-height', 'letter-spacing', 'word-spacing', 'text-decoration', 'vertical-align', 'justify-content', 'align-items', 'flex-direction', 'flex-wrap', 'gap', 'important'],
  json: [],
  sql: ['SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'DROP', 'ALTER', 'TABLE', 'INDEX', 'VIEW', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'ON', 'AND', 'OR', 'NOT', 'IN', 'LIKE', 'BETWEEN', 'IS', 'NULL', 'TRUE', 'FALSE', 'AS', 'ORDER', 'BY', 'GROUP', 'HAVING', 'LIMIT', 'OFFSET', 'UNION', 'ALL', 'DISTINCT', 'COUNT', 'SUM', 'AVG', 'MAX', 'MIN', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'CONSTRAINT', 'DEFAULT', 'AUTO_INCREMENT', 'CASCADE', 'VALUES', 'SET', 'INTO', 'EXISTS', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'COMMIT', 'ROLLBACK', 'TRANSACTION', 'GRANT', 'REVOKE', 'TRIGGER', 'PROCEDURE', 'FUNCTION'],
  bash: ['#!/bin/bash', 'echo', 'read', 'if', 'then', 'else', 'elif', 'fi', 'for', 'while', 'do', 'done', 'case', 'esac', 'function', 'return', 'exit', 'break', 'continue', 'export', 'source', 'alias', 'unset', 'set', 'local', 'shift', 'trap', 'exec', 'test', 'true', 'false', 'cd', 'pwd', 'ls', 'cp', 'mv', 'rm', 'mkdir', 'rmdir', 'touch', 'cat', 'grep', 'sed', 'awk', 'find', 'xargs', 'sort', 'uniq', 'head', 'tail', 'cut', 'wc', 'chmod', 'chown', 'sudo', 'su', 'curl', 'wget', 'npm', 'yarn', 'node', 'git'],
  vue: ['template', 'script', 'style', 'export', 'default', 'import', 'from', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'extends', 'new', 'this', 'async', 'await', 'ref', 'reactive', 'computed', 'watch', 'watchEffect', 'onMounted', 'onUpdated', 'onUnmounted', 'onBeforeMount', 'onBeforeUpdate', 'onBeforeUnmount', 'provide', 'inject', 'defineProps', 'defineEmits', 'defineExpose', 'v-if', 'v-else', 'v-else-if', 'v-for', 'v-on', 'v-bind', 'v-model', 'v-show', 'v-text', 'v-html', 'v-once', 'v-pre', 'v-cloak'],
};

// 自动语言检测函数
function detectLanguage(code: string): string | null {
  const trimmed = code.trim();

  // 检查是否已有语言标记
  const firstLine = trimmed.split('\n')[0];
  if (firstLine.match(/^(javascript|typescript|python|java|c|c\+\+|c#|csharp|go|rust|php|ruby|swift|html|css|scss|json|xml|sql|bash|shell|vue|jsx|tsx)/i)) {
    const lang = firstLine.toLowerCase().trim();
    if (lang.startsWith('c++') || lang.startsWith('cpp')) return 'cpp';
    if (lang.startsWith('c#') || lang.startsWith('csharp')) return 'csharp';
    return lang.split(' ')[0];
  }

  // 基于代码特征检测
  const patterns: [RegExp, string][] = [
    // TypeScript
    [/:\s*(string|number|boolean|any|void|never|unknown|interface|type|enum)\s*[;=)]/i, 'typescript'],
    [/<\w+(\s*,\s*\w+)*>/, 'typescript'],
    [/as\s+\w+/, 'typescript'],
    [/import\s+.*\s+from\s+['"].*['"]/i, 'typescript'],
    [/export\s+(default\s+)?(interface|type|class)/i, 'typescript'],

    // JavaScript
    [/^(const|let|var)\s+\w+\s*=/m, 'javascript'],
    [/function\s+\w+\s*\(/m, 'javascript'],
    [/=>\s*[{(]/m, 'javascript'],
    [/import\s+.*\s+from\s+['"].*['"]/m, 'javascript'],
    [/export\s+(default\s+)?(function|const|class)/m, 'javascript'],
    [/async\s+(function|\()/m, 'javascript'],
    [/await\s+/m, 'javascript'],

    // Python
    [/^(def|class|import|from)\s+/m, 'python'],
    [/^@\w+\s*$/m, 'python'],
    [/:\s*$/m, 'python'],
    [/^\s*if\s+__name__\s*==\s*['"]__main__['"]/m, 'python'],

    // Java
    [/^(public|private|protected)\s+(static\s+)?(class|interface|enum)/m, 'java'],
    [/^(import|package)\s+[\w.]+;/m, 'java'],
    [/System\.out\.print/m, 'java'],
    [/@Override|@Autowired|@Component/m, 'java'],

    // C
    [/^#include\s*<\w+\.h>/m, 'c'],
    [/^#define\s+/m, 'c'],
    [/printf\s*\(/m, 'c'],
    [/scanf\s*\(/m, 'c'],
    [/^int\s+main\s*\(/m, 'c'],

    // C++
    [/^#include\s*<iostream>/m, 'cpp'],
    [/^#include\s*<vector>/m, 'cpp'],
    [/^#include\s*<string>/m, 'cpp'],
    [/std::/m, 'cpp'],
    [/cout\s*<</m, 'cpp'],
    [/cin\s*>>/m, 'cpp'],
    [/namespace\s+std/m, 'cpp'],
    [/template\s*</m, 'cpp'],

    // C#
    [/^using\s+System;/m, 'csharp'],
    [/^namespace\s+[\w.]+/m, 'csharp'],
    [/Console\.Write/m, 'csharp'],
    [/@Override|\[.*\]/m, 'csharp'],
    [/async\s+Task/m, 'csharp'],

    // Go
    [/^package\s+\w+/m, 'go'],
    [/^import\s+\(/m, 'go'],
    [/func\s+\w+\s*\(/m, 'go'],
    [/fmt\.\w+/m, 'go'],
    [/^package\s+main/m, 'go'],
    [/:=/, 'go'],

    // Rust
    [/^use\s+\w+::/m, 'rust'],
    [/^fn\s+\w+\s*\(/m, 'rust'],
    [/^let\s+mut\s+/m, 'rust'],
    [/^impl\s+[\w.]+/m, 'rust'],
    [/println!\s*\(/m, 'rust'],
    [/->\s*\w+/m, 'rust'],
    [/<\w+>\s*(where|{)/m, 'rust'],

    // PHP
    [/<\?php/m, 'php'],
    [/\$\w+\s*=/m, 'php'],
    [/->\w+\s*\(/m, 'php'],
    [/function\s+\w+\s*\(/m, 'php'],
    [/echo\s+/m, 'php'],
    [/->/m, 'php'],

    // HTML
    [/^<!DOCTYPE\s+html>/i, 'html'],
    [/^<html/i, 'html'],
    [/^<\w+\s+[^>]*>/m, 'html'],
    [/^<\/\w+>/m, 'html'],
    [/<\w+\s+[^>]*class\s*=/m, 'html'],
    [/<\w+\s+[^>]*id\s*=/m, 'html'],

    // CSS/SCSS
    [/^\.[\w-]+\s*\{/m, 'css'],
    [/^#[\w-]+\s*\{/m, 'css'],
    [/^@media\s+/m, 'css'],
    [/^@import\s+/m, 'css'],
    [/^@keyframes\s+/m, 'css'],
    [/:\s*(px|em|rem|%|vh|vw|deg)s?;$/m, 'css'],

    // JSON
    [/^\s*\{[\s\S]*"[\w]+"\s*:/m, 'json'],
    [/^\s*\[[\s\S]*\{/m, 'json'],

    // SQL
    [/^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP)\s+/im, 'sql'],
    [/^(FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER)\s+/im, 'sql'],
    [/^(GROUP|ORDER|HAVING|LIMIT)\s+BY/im, 'sql'],

    // Bash/Shell
    [/^#!/m, 'bash'],
    [/^echo\s+/m, 'bash'],
    [/\$\{?\w+\}?/m, 'bash'],
    [/if\s+\[\s+/m, 'bash'],
    [/\$\(.*\)/m, 'bash'],
  ];

  for (const [pattern, lang] of patterns) {
    if (pattern.test(trimmed)) {
      return lang;
    }
  }

  return null;
}

// 简单的高亮函数（导出给导出 HTML 等场景）
function highlightCode(code: string, language: string | null): string {
  const lang = resolveCodeBlockLang(language, code);
  const keywords = languageKeywords[lang] || [];

  let result = code;

  // 转义 HTML 特殊字符
  result = result
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (keywords.length > 0) {
    // 高亮字符串（双引号）
    result = result.replace(/(["'`])(?:(?!\1)[^\\]|\\.)*\1/g, '<span class="hljs-string">$&</span>');

    // 高亮注释（行注释）
    result = result.replace(/(\/\/.*$)/gm, '<span class="hljs-comment">$1</span>');

    // 高亮注释（块注释）
    result = result.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="hljs-comment">$1</span>');

    // 高亮数字
    result = result.replace(/\b(\d+\.?\d*)\b/g, '<span class="hljs-number">$1</span>');

    // 高亮关键词
    const keywordPattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    result = result.replace(keywordPattern, '<span class="hljs-keyword">$1</span>');
  }

  return result;
}

export const CodeBlockHighlight = Node.create<CodeBlockHighlightOptions>({
  name: 'codeBlock',

  addOptions() {
    return {
      languageClassPrefix: 'language-',
      HTMLAttributes: {},
    };
  },

  content: 'text*',

  marks: '',

  group: 'block',

  code: true,

  defining: true,

  addAttributes() {
    return {
      language: {
        default: null,
        parseHTML: element => {
          const { languageClassPrefix } = this.options;
          const classNames = [...(element.firstElementChild?.classList || [])];
          const languages = classNames
            .filter(className => className.startsWith(languageClassPrefix))
            .map(className => className.replace(languageClassPrefix, ''));
          const language = languages[0];

          if (!language) {
            return null;
          }

          return language;
        },
        rendered: false,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'pre',
        preserveWhitespace: 'full',
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      'pre',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      [
        'code',
        {
          class: node.attrs.language
            ? this.options.languageClassPrefix + node.attrs.language
            : null,
          'data-language': node.attrs.language || 'plaintext',
        },
        0,
      ],
    ];
  },

  addCommands() {
    return {
      setCodeBlock:
        attributes => ({ commands }) => {
          return commands.setNode(this.name, attributes);
        },
      toggleCodeBlock:
        attributes => ({ commands }) => {
          return commands.toggleNode(this.name, 'paragraph', attributes);
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Alt-c': () => this.editor.commands.toggleCodeBlock(),

      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty, $anchor } = this.editor.state.selection;
        const isAtStart = $anchor.pos === 1;

        if (!empty || $anchor.parent.type.name !== this.name) {
          return false;
        }

        if (isAtStart || !$anchor.parent.textContent.length) {
          return this.editor.commands.clearNodes();
        }

        return false;
      },

      // exit node on triple enter
      Enter: ({ editor }) => {
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;

        if (!empty || $from.parent.type !== this.type) {
          return false;
        }

        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;

        if (!isAtEnd) {
          return false;
        }

        return editor
          .chain()
          .command(({ tr }) => {
            tr.delete($from.pos, $from.pos + 1);
            return true;
          })
          .exitCode()
          .run();
      },

      // exit node on arrow down
      ArrowDown: ({ editor }) => {
        const { state } = editor;
        const { selection, doc } = state;
        const { $from, empty } = selection;

        if (!empty || $from.parent.type !== this.type) {
          return false;
        }

        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;

        if (!isAtEnd) {
          return false;
        }

        const after = $from.after();

        if (after === undefined) {
          return false;
        }

        const nodeAfter = doc.nodeAt(after);

        if (nodeAfter) {
          return false;
        }

        return editor.commands.exitCode();
      },
    };
  },

  addNodeView() {
    return VueNodeViewRenderer(CodeBlockHighlightComponent);
  },

  addProseMirrorPlugins() {
    return [
      new Plugin<DecorationSet>({
        key: codeBlockSyntaxKey,
        state: {
          init(_, { doc }) {
            return buildCodeBlockSyntaxDecorations(doc);
          },
          apply(tr, oldDeco) {
            if (!tr.docChanged) return oldDeco;
            return buildCodeBlockSyntaxDecorations(tr.doc);
          },
        },
        props: {
          decorations(state) {
            return codeBlockSyntaxKey.getState(state) ?? DecorationSet.empty;
          },
        },
      }),
    ];
  },
});

// 导出工具函数供外部使用
export { detectLanguage, highlightCode };