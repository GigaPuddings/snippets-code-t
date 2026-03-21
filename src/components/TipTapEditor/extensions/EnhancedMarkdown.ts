/**
 * 增强的 Markdown 输入规则
 * 用于支持行内代码、代码块和各种 Markdown 语法指令的快捷输入
 */
import { logger } from '@/utils/logger';
import { Extension } from '@tiptap/core';
import { markInputRule, nodeInputRule, textblockTypeInputRule, wrappingInputRule } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';

// 调试日志开关
const DEBUG = true;

const log = (message: string, ...args: unknown[]) => {
  if (DEBUG) {
    logger.debug(`[EnhancedMarkdown] ${message}`, ...args);
  }
};

export const EnhancedMarkdown = Extension.create({
  name: 'enhancedMarkdown',

  addInputRules() {
    return [
      // ==================== 标题规则 ====================
      // ATX 标题：在行首输入 # - ###### 后跟空格或文字时自动转换
      textblockTypeInputRule({
        find: /^(#{1})\s+(.*)$/,
        type: this.editor.schema.nodes.heading,
        getAttributes: () => ({ level: 1 }),
      }),
      textblockTypeInputRule({
        find: /^(#{2})\s+(.*)$/,
        type: this.editor.schema.nodes.heading,
        getAttributes: () => ({ level: 2 }),
      }),
      textblockTypeInputRule({
        find: /^(#{3})\s+(.*)$/,
        type: this.editor.schema.nodes.heading,
        getAttributes: () => ({ level: 3 }),
      }),
      textblockTypeInputRule({
        find: /^(#{4})\s+(.*)$/,
        type: this.editor.schema.nodes.heading,
        getAttributes: () => ({ level: 4 }),
      }),
      textblockTypeInputRule({
        find: /^(#{5})\s+(.*)$/,
        type: this.editor.schema.nodes.heading,
        getAttributes: () => ({ level: 5 }),
      }),
      textblockTypeInputRule({
        find: /^(#{6})\s+(.*)$/,
        type: this.editor.schema.nodes.heading,
        getAttributes: () => ({ level: 6 }),
      }),

      // ==================== 引用块规则 ====================
      // 仅在用户输入 "> " 后触发（避免输入单个 ">" 就触发并导致 setBlockType 报错）
      wrappingInputRule({
        find: /^>\s$/,
        type: this.editor.schema.nodes.blockquote,
      }),

      // ==================== 任务列表规则 ====================
      // 注意：不要求 - 后面必须有空格，这样 -[ 也能触发（避免被无序列表抢走）
      wrappingInputRule({
        // 支持 -[x]、- [x]、-[]、- [] 等格式
        find: /^-\s*\[x\]\s*/i,
        type: this.editor.schema.nodes.taskList,
      }),
      wrappingInputRule({
        // 支持 -[ ]、- [ ]、-[ ]、- [ ] 等格式
        find: /^-\s*\[\s?\]\s*/,
        type: this.editor.schema.nodes.taskList,
      }),

      // ==================== 无序列表规则 ====================
      // 使用 negative lookahead 排除 -[ 和 - [ 的情况（留给任务列表）
      wrappingInputRule({
        find: /^(?![-*]\s*\[)[-*+]\s$/,
        type: this.editor.schema.nodes.bulletList,
      }),

      // ==================== 有序列表规则 ====================
      wrappingInputRule({
        // 必须输入到空格才触发
        find: /^\d+\.\s$/,
        type: this.editor.schema.nodes.orderedList,
      }),

      // ==================== 水平线规则 ====================
      // 支持 ---、----、***、___ 等（3 个及以上）
      // 不要求必须有结尾空格，只要连续 3 个或以上即可
      nodeInputRule({
        find: /^(-{3,}|\*{3,}|_{3,})$/,
        type: this.editor.schema.nodes.horizontalRule,
      }),

      // ==================== 行内 Mark 规则 ====================
      // 加粗：**text** 或 __text__
      markInputRule({
        find: /(\*\*|__)([^*]+)\1$/,
        type: this.editor.schema.marks.bold,
      }),
      // 斜体：*text* 或 _text_（但不匹配 ** 或 __）
      markInputRule({
        find: /(?<!\*)\*(?!\*)([^*]+)\*(?!\*)|(?<!_)_(?!_)([^_]+)_(?!_)$/,
        type: this.editor.schema.marks.italic,
      }),
      // 删除线：~~text~~
      markInputRule({
        find: /~~([^~]+)~~$/,
        type: this.editor.schema.marks.strike,
      }),
      // 行内代码：`text`
      markInputRule({
        find: /`([^`]+)`$/,
        type: this.editor.schema.marks.code,
      }),

      // ==================== 代码块规则 ====================
      textblockTypeInputRule({
        find: /^```([a-zA-Z0-9]*)$/,
        type: this.editor.schema.nodes.codeBlock,
        getAttributes: (match) => ({
          language: match[1] || '',
        }),
      }),
      textblockTypeInputRule({
        find: /(?<=[\s\S])```([a-zA-Z0-9]*)$/,
        type: this.editor.schema.nodes.codeBlock,
        getAttributes: (match) => ({
          language: match[1] || '',
        }),
      }),
    ];
  },

  addProseMirrorPlugins() {
    return [
      // ==================== 换行后 Markdown 转换处理 ====================
      // 处理用户按 Enter 后在新行输入 Markdown 语法的情况
      new Plugin({
        key: new PluginKey('newlineMarkdownHandler'),
        props: {
          handleTextInput: (view, from, _to, text) => {
            // 只处理单字符输入
            if (text.length !== 1) {
              return false;
            }

            const { state } = view;
            const { doc } = state;

            // 检查光标前是否是换行符
            if (from <= 0) {
              return false;
            }

            const charBefore = doc.textBetween(from - 1, from, '\n', '\n');
            if (charBefore !== '\n') {
              return false;
            }

            // 获取当前行的开始位置
            const $from = state.selection.$from;
            const lineStart = $from.start();
            const textInLine = doc.textBetween(lineStart, from, '\n', '\n');

            // 检查是否是空行（只有换行符）
            if (textInLine.trim() !== '') {
              return false;
            }

            // 检查输入的字符是否是 Markdown 触发字符
            const markdownTriggers: Record<string, string> = {
              '#': 'heading',
              '>': 'blockquote',
              '-': 'bulletList',
              '*': 'bulletList',
              '+': 'bulletList',
              '`': 'codeBlock',
              '1': 'orderedList',
            };

            const expectedNext = markdownTriggers[text];
            if (!expectedNext) {
              return false;
            }

            log('换行后 Markdown 处理: 检测到行首 Markdown 触发', { text, textInLine, expectedNext });

            // 不阻止输入，让输入规则自然触发
            return false;
          },
        },
      }),

      // ==================== 键盘输入监听（调试用）================
      new Plugin({
        key: new PluginKey('markdownInputLogger'),
        props: {
          handleTextInput: (_view, _from, _to, text) => {
            log('handleTextInput: 监听文本输入', { text });
            return false;
          },
        },
      }),

      // ==================== 行内代码处理 ====================
      new Plugin({
        key: new PluginKey('inlineCodeHandler'),
        props: {
          handleTextInput: (view, from, to, text) => {
            if (text !== '`') {
              return false;
            }

            const { state } = view;
            const { doc, tr } = state;
            const textBefore = doc.textBetween(Math.max(0, from - 100), from, '\n', '\n');
            const lastBacktickIndex = textBefore.lastIndexOf('`');
            log('行内代码处理: 检测到反引号输入', { textBefore, lastBacktickIndex });

            if (lastBacktickIndex !== -1) {
              const backtickPos = from - (textBefore.length - lastBacktickIndex);
              const codeText = doc.textBetween(backtickPos + 1, from, '\n', '\n');

              if (codeText && !codeText.includes('\n') && codeText.trim()) {
                tr.delete(backtickPos, to);
                tr.insertText(codeText, backtickPos);
                tr.addMark(backtickPos, backtickPos + codeText.length, state.schema.marks.code.create());
                view.dispatch(tr);
                log('行内代码处理: 成功转换为行内代码', { codeText });
                return true;
              }
            }

            return false;
          },
        },
      }),

      // ==================== 代码块结束处理 ====================
      new Plugin({
        key: new PluginKey('codeBlockExit'),
        props: {
          handleTextInput: (view, from, to, text) => {
            if (text !== '`') {
              return false;
            }

            const { state } = view;
            const { $from } = state.selection;

            if ($from.parent.type.name !== 'codeBlock') {
              return false;
            }

            const { doc, tr } = state;
            const textBefore = doc.textBetween(Math.max(0, from - 4), from, '\n', '\n');
            log('代码块退出处理: 检测到反引号', { textBefore });

            if (textBefore.endsWith('```')) {
              tr.delete(from - 3, to);
              tr.split(from - 3);
              view.dispatch(tr);
              log('代码块退出处理: 成功退出代码块');
              return true;
            }

            return false;
          },
        },
      }),

      // ==================== 标题结尾自动退出 ====================
      new Plugin({
        key: new PluginKey('headingExit'),
        props: {
          handleKeyDown: (view, event) => {
            if (event.key !== 'Enter') {
              return false;
            }

            const { state } = view;
            const { $from } = state.selection;

            if ($from.parent.type.name !== 'heading') {
              return false;
            }

            const headingNode = $from.parent;
            const isAtEnd = $from.parentOffset === headingNode.content.size;
            log('标题退出处理: 检测到 Enter 键', { headingLevel: headingNode.attrs.level, isAtEnd });

            if (isAtEnd) {
              const { tr } = state;
              tr.split($from.pos + headingNode.nodeSize);
              view.dispatch(tr);
              log('标题退出处理: 成功退出标题');
              return true;
            }

            return false;
          },
        },
      }),

      // ==================== 引用块退出处理 ====================
      // 注意：Tiptap/ProseMirror 原生支持用方向键退出块级元素，
      // 不需要额外处理。如果需要自定义退出逻辑，请使用 editor.chain().focus().lift() 等命令
      // 这里暂时注释掉自定义退出处理，避免破坏文档结构
      /*
      new Plugin({
        key: new PluginKey('blockquoteExit'),
        props: {
          handleKeyDown: (view, event) => {
            if (event.key !== 'Enter') {
              return false;
            }

            const { state } = view;
            const { $from } = state.selection;

            // 检查当前节点是否在 blockquote 内（向上遍历祖先）
            let isInBlockquote = false;
            for (let d = $from.depth; d > 0; d--) {
              const node = $from.node(d);
              if (node.type.name === 'blockquote') {
                isInBlockquote = true;
                break;
              }
            }
            if (!isInBlockquote) {
              return false;
            }

            // 使用 editor 命令退出 blockquote
            const { tr } = state;
            // 删除 blockquote 的 ">" 标记（如果当前 paragraph 为空）
            if ($from.parent.content.size === 0) {
              const blockStart = $from.start();
              tr.delete(blockStart, blockStart + 1);
            }
            view.dispatch(tr);
            return true;
          },
        },
      }),
      */

      // ==================== 列表退出处理 ====================
      // 同上，暂时注释掉，使用原生方向键退出
      /*
      new Plugin({
        key: new PluginKey('listExit'),
        props: {
          handleKeyDown: (view, event) => {
            if (event.key !== 'Enter') {
              return false;
            }

            const { state } = view;
            const { $from } = state.selection;

            // 检查当前节点是否在 listItem 内
            let isInListItem = false;
            for (let d = $from.depth; d > 0; d--) {
              const node = $from.node(d);
              if (node.type.name === 'listItem') {
                isInListItem = true;
                break;
              }
            }
            if (!isInListItem) {
              return false;
            }

            // 如果当前 paragraph 为空，删除列表标记
            if ($from.parent.content.size === 0) {
              const { tr } = state;
              const listItemStart = $from.before($from.depth);
              tr.delete(listItemStart, listItemStart + 2); // 删除 "- "
              view.dispatch(tr);
            }
            return true;
          },
        },
      }),
      */
    ];
  },
});
