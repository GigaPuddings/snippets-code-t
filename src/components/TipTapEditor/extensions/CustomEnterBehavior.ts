/**
 * 自定义键盘行为
 * Enter：代码块内换行；Tab / Shift+Tab：与 VS Code 类似，多选时在各行行首统一缩进/反缩进
 */
import { Extension } from '@tiptap/core';
import { TextSelection } from '@tiptap/pm/state';
import { Fragment } from '@tiptap/pm/model';
import type { ResolvedPos } from '@tiptap/pm/model';
import type { Editor } from '@tiptap/core';

const INDENT = '  ';

function findCodeBlockDepth($pos: ResolvedPos): number {
  for (let d = $pos.depth; d > 0; d--) {
    if ($pos.node(d).type.name === 'codeBlock') return d;
  }
  return -1;
}

/** 文档位置 → 相对代码块文本起始的字符偏移 */
function posToOffset(contentStart: number, pos: number): number {
  return Math.max(0, pos - contentStart);
}

/** 偏移所在的行号（0-based） */
function offsetToLineIndex(text: string, offset: number): number {
  const slice = text.slice(0, Math.min(offset, text.length));
  return slice.split('\n').length - 1;
}

/**
 * 将 [lo, hi) 选区映射到「参与缩进的行」：与 VS Code 一致，跨行选区对涉及的所有整行生效
 */
function getIndentLineRange(text: string, lo: number, hi: number, empty: boolean): { startLine: number; endLine: number } {
  if (empty) {
    const line = offsetToLineIndex(text, lo);
    return { startLine: line, endLine: line };
  }
  const startLine = offsetToLineIndex(text, lo);
  const lastChar = hi > lo ? hi - 1 : lo;
  const endLine = offsetToLineIndex(text, lastChar);
  return { startLine, endLine };
}

/** 行首在全文中的字符偏移 */
function lineStartOffset(lines: string[], lineIndex: number): number {
  if (lineIndex === 0) return 0;
  let o = 0;
  for (let i = 0; i < lineIndex; i++) {
    o += lines[i].length + 1;
  }
  return o;
}

/** 缩进后映射原偏移（用于恢复选区） */
function mapOffsetAfterIndent(off: number, startLine: number, endLine: number, text: string): number {
  const line = offsetToLineIndex(text, Math.min(off, text.length));
  if (line < startLine) return off;
  if (line > endLine) return off + INDENT.length * (endLine - startLine + 1);
  return off + INDENT.length * (line - startLine + 1);
}

/** 反缩进后映射字符偏移（恢复选区） */
function mapOffsetAfterDedent(
  off: number,
  startLine: number,
  endLine: number,
  oldLines: string[],
  removedPerLine: number[],
  newLines: string[]
): number {
  const text = oldLines.join('\n');
  const L = offsetToLineIndex(text, Math.min(off, text.length));
  const totalRemoved = () => {
    let s = 0;
    for (let i = startLine; i <= endLine; i++) s += removedPerLine[i] ?? 0;
    return s;
  };
  if (L < startLine) return off;
  if (L > endLine) return off - totalRemoved();
  const ls = lineStartOffset(oldLines, L);
  const col = off - ls;
  const rm = removedPerLine[L] ?? 0;
  const newLs = lineStartOffset(newLines, L);
  const newCol = col <= rm ? 0 : col - rm;
  return newLs + newCol;
}

/** 延迟滚动到光标位置，避免 DOM 未渲染完成时坐标不准确导致跳动 */
function delayedScrollIntoView(editor: Editor): void {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      editor.chain().scrollIntoView().run();
    });
  });
}

/** 处理缩进的核心逻辑（普通文本 + 代码块） */
function handleIndent(editor: Editor): boolean {
  const state = editor.state;
  const { from, to } = state.selection;
  const $from = state.doc.resolve(from);
  const d = findCodeBlockDepth($from);

  if (d < 0) {
    // 普通文本中的 Tab 缩进
    if (from === to) {
      return editor.commands.insertContent(INDENT);
    }
    // 多行选区缩进
    const { doc } = state;
    const indentActions: Array<{ pos: number; text: string }> = [];

    doc.nodesBetween(from, to, (node, pos) => {
      if (node.isText) {
        const beforePos = doc.resolve(pos);
        const isLineStart =
          beforePos.parentOffset === 0 ||
          (pos > 1 && doc.textBetween(pos - 1, pos) === '\n');

        if (isLineStart && pos >= from) {
          indentActions.push({ pos, text: INDENT });
        }
      } else if (node.type.name === 'hardBreak') {
        const nextPos = pos + node.nodeSize;
        if (nextPos < to) {
          indentActions.push({ pos: nextPos, text: INDENT });
        }
      }
      return true;
    });

    if (!indentActions.some(a => a.pos >= from && a.pos <= from + 1)) {
      indentActions.unshift({ pos: from, text: INDENT });
    }

    if (indentActions.length > 0) {
      const tr = state.tr;
      for (let i = indentActions.length - 1; i >= 0; i--) {
        const action = indentActions[i];
        if (action.pos >= from && action.pos <= to) {
          tr.insertText(action.text, action.pos);
        }
      }
      const totalInserted = indentActions.length * INDENT.length;
      tr.setSelection(TextSelection.create(tr.doc, from, to + totalInserted));
      editor.view.dispatch(tr);
      delayedScrollIntoView(editor);
    }

    return true;
  }

  // 代码块内的缩进逻辑
  const block = $from.node(d);
  const blockPos = $from.before(d);
  const contentStart = blockPos + 1;
  const contentEnd = blockPos + block.nodeSize - 1;
  const text = block.textContent;
  const empty = from === to;
  const lo = posToOffset(contentStart, Math.min(from, to));
  const hi = posToOffset(contentStart, Math.max(from, to));
  const { startLine, endLine } = getIndentLineRange(text, lo, hi, empty);

  if (empty && startLine === endLine) {
    return editor.commands.insertContent(INDENT);
  }

  const lines = text.split('\n');
  const newLines = lines.map((line, i) =>
    i >= startLine && i <= endLine ? INDENT + line : line
  );
  const newText = newLines.join('\n');

  const schema = state.schema;
  const tr = state.tr.replaceWith(
    contentStart,
    contentEnd + 1,
    Fragment.from(schema.text(newText))
  );

  const na = mapOffsetAfterIndent(lo, startLine, endLine, text);
  const nb = mapOffsetAfterIndent(hi, startLine, endLine, text);
  const newFrom = contentStart + na;
  const newTo = contentStart + nb;
  tr.setSelection(TextSelection.create(tr.doc, newFrom, newTo));
  editor.view.dispatch(tr);
  delayedScrollIntoView(editor);

  return true;
}

/** 处理反缩进的核心逻辑（普通文本 + 代码块） */
function handleDedent(editor: Editor): boolean {
  const state = editor.state;
  const { from, to } = state.selection;
  const $from = state.doc.resolve(from);
  const d = findCodeBlockDepth($from);

  if (d < 0) {
    // 普通文本中的 Shift-Tab 反缩进
    if (from === to) {
      const doc = state.doc;
      const textBefore = doc.textBetween(Math.max(0, from - INDENT.length), from);
      if (textBefore.endsWith(INDENT)) {
        return editor.chain().focus().deleteRange({ from: from - INDENT.length, to: from }).run();
      }
      if (textBefore.endsWith(' ') || textBefore.endsWith('\t')) {
        return editor.chain().focus().deleteRange({ from: from - 1, to: from }).run();
      }
      return true;
    }

    // 多行选区反缩进
    const { doc } = state;
    const dedentActions: Array<{ from: number; to: number }> = [];

    doc.nodesBetween(from, to, (node, pos) => {
      if (node.isText && pos >= from) {
        const text = node.textContent;
        let removeLen = 0;
        if (text.startsWith(INDENT)) {
          removeLen = INDENT.length;
        } else if (text.startsWith('\t')) {
          removeLen = 1;
        } else if (text.startsWith(' ')) {
          removeLen = 1;
        }
        if (removeLen > 0) {
          dedentActions.push({ from: pos, to: pos + removeLen });
        }
      } else if (node.type.name === 'hardBreak') {
        const nextPos = pos + node.nodeSize;
        if (nextPos < to) {
          const afterNode = doc.nodeAt(nextPos);
          if (afterNode?.isText) {
            const afterText = afterNode.textContent;
            let removeLen = 0;
            if (afterText.startsWith(INDENT)) {
              removeLen = INDENT.length;
            } else if (afterText.startsWith('\t') || afterText.startsWith(' ')) {
              removeLen = 1;
            }
            if (removeLen > 0) {
              dedentActions.push({ from: nextPos, to: nextPos + removeLen });
            }
          }
        }
      }
      return true;
    });

    const firstNode = doc.nodeAt(from);
    if (firstNode?.isText) {
      const firstText = firstNode.textContent;
      const offsetInNode = from - ($from.before($from.depth) + 1);
      const textFromOffset = firstText.slice(offsetInNode);
      let removeLen = 0;
      if (textFromOffset.startsWith(INDENT)) {
        removeLen = INDENT.length;
      } else if (textFromOffset.startsWith('\t') || textFromOffset.startsWith(' ')) {
        removeLen = 1;
      }
      if (removeLen > 0 && !dedentActions.some(a => a.from === from)) {
        dedentActions.unshift({ from, to: from + removeLen });
      }
    }

    if (dedentActions.length > 0) {
      const tr = state.tr;
      for (let i = dedentActions.length - 1; i >= 0; i--) {
        const action = dedentActions[i];
        tr.delete(action.from, action.to);
      }
      const totalRemoved = dedentActions.reduce((sum, a) => sum + (a.to - a.from), 0);
      tr.setSelection(TextSelection.create(tr.doc, from, to - totalRemoved));
      editor.view.dispatch(tr);
      delayedScrollIntoView(editor);
    }

    return true;
  }

  // 代码块内的反缩进逻辑
  const block = $from.node(d);
  const blockPos = $from.before(d);
  const contentStart = blockPos + 1;
  const contentEnd = blockPos + block.nodeSize - 1;
  const text = block.textContent;
  const empty = from === to;
  const lo = posToOffset(contentStart, Math.min(from, to));
  const hi = posToOffset(contentStart, Math.max(from, to));
  const { startLine, endLine } = getIndentLineRange(text, lo, hi, empty);

  const lines = text.split('\n');
  const removedPerLine: number[] = [];
  let changed = false;
  const newLines = lines.map((line, i) => {
    if (i < startLine || i > endLine) {
      removedPerLine[i] = 0;
      return line;
    }
    if (line.startsWith(INDENT)) {
      removedPerLine[i] = INDENT.length;
      changed = true;
      return line.slice(INDENT.length);
    }
    if (line.startsWith('\t')) {
      removedPerLine[i] = 1;
      changed = true;
      return line.slice(1);
    }
    if (line.startsWith(' ')) {
      removedPerLine[i] = 1;
      changed = true;
      return line.slice(1);
    }
    removedPerLine[i] = 0;
    return line;
  });

  if (!changed) return true;

  const newText = newLines.join('\n');
  const schema = state.schema;
  const tr = state.tr.replaceWith(
    contentStart,
    contentEnd + 1,
    Fragment.from(schema.text(newText))
  );

  const na = mapOffsetAfterDedent(lo, startLine, endLine, lines, removedPerLine, newLines);
  const nb = mapOffsetAfterDedent(hi, startLine, endLine, lines, removedPerLine, newLines);
  const newFrom = contentStart + Math.max(0, na);
  const newTo = contentStart + Math.max(0, nb);
  tr.setSelection(TextSelection.create(tr.doc, newFrom, newTo));
  editor.view.dispatch(tr);
  delayedScrollIntoView(editor);

  return true;
}

export const CustomEnterBehavior = Extension.create({
  name: 'customEnterBehavior',

  addKeyboardShortcuts() {
    return {
      'Enter': () => {
        const { $from } = this.editor.state.selection;
        const d = findCodeBlockDepth($from);
        if (d >= 0) {
          return this.editor.commands.insertContent('\n');
        }
        if ($from.parent.type.name === 'heading') {
          return this.editor
            .chain()
            .splitBlock({ keepMarks: false })
            .setParagraph()
            .run();
        }
        return false;
      },
      'Shift-Enter': () => {
        return this.editor.commands.setHardBreak();
      },

      'Tab': () => {
        return handleIndent(this.editor);
      },

      'Shift-Tab': () => {
        return handleDedent(this.editor);
      },

      'Mod-a': () => {
        const { $from } = this.editor.state.selection;
        const d = findCodeBlockDepth($from);
        if (d < 0) return false;
        const block = $from.node(d);
        const blockPos = $from.before(d);
        const contentStart = blockPos + 1;
        const contentEnd = blockPos + block.nodeSize - 1;
        if (contentStart >= contentEnd + 1) return true;
        const tr = this.editor.state.tr.setSelection(
          TextSelection.create(this.editor.state.doc, contentStart, contentEnd + 1)
        );
        this.editor.view.dispatch(tr);
        return true;
      },

      'Mod-Shift-a': () => {
        const sel = this.editor.state.selection;
        const $from = sel.$from;
        const d = findCodeBlockDepth($from);
        if (d < 0) return false;
        const text = $from.node(d).textContent;
        const blockPos = $from.before(d);
        const contentStart = blockPos + 1;
        const rel = sel.from - contentStart;
        const lineStart = text.lastIndexOf('\n', Math.max(0, rel - 1)) + 1;
        const nl = text.indexOf('\n', rel);
        const lineEndExclusive = nl === -1 ? text.length : nl;
        const fromPos = contentStart + lineStart;
        const toPos = contentStart + lineEndExclusive;
        const tr = this.editor.state.tr.setSelection(
          TextSelection.create(this.editor.state.doc, fromPos, toPos)
        );
        this.editor.view.dispatch(tr);
        return true;
      },
    };
  },
});
