import { EditorView, WidgetType } from '@codemirror/view';
import { undo, redo, isolateHistory } from '@codemirror/commands';
import { wrapSelection } from './document';
import { markdownClipboardText } from './clipboard';
import {
  parseTable,
  serializeTable,
  resizeTable,
  tableCellRanges,
  escapeTableCell
} from './blocks';
import { renderNoteMarkdown } from '@/utils/markdown';
import type { PreviewOptions, PreviewTarget } from './preview';

const controllers = new WeakMap<HTMLElement, TableController>();

export function tableCellAt(
  target: PreviewTarget,
  position: number,
  rows = tableCellRanges(target.source, target.prefix)
) {
  const offset = position - target.from;
  let result = { row: 0, column: 0 };
  rows.forEach((cells, row) =>
    cells.forEach((cell, column) => {
      if (cell.from <= offset) result = { row, column };
    })
  );
  return result;
}

export function focusTableCell(
  view: EditorView,
  target: PreviewTarget,
  row: number,
  column: number,
  offset = 0
) {
  const element = Array.from(
    view.dom.querySelectorAll<HTMLElement>('.md-preview-table')
  ).find((element) => Number(element.dataset.sourceFrom) === target.from);
  if (element) controllers.get(element)?.focus(row, column, offset);
}

/** A cell edits its Markdown slice directly. There is no second document model,
 * delayed save, or private undo stack; IME commits enter the same CM history. */
class TableController {
  table = document.createElement('table');
  input: HTMLTextAreaElement | null = null;
  row = 0;
  column = 0;
  composing = false;
  committing = false;
  editRange: { from: number; to: number } | null = null;
  widths: number[] = [];
  cleanupResize?: () => void;
  private parsed?: {
    source: string;
    prefix?: string;
    model: ReturnType<typeof parseTable>;
    ranges: ReturnType<typeof tableCellRanges>;
  };
  constructor(
    readonly dom: HTMLElement,
    public target: PreviewTarget,
    readonly view: EditorView,
    public options: PreviewOptions
  ) {
    dom.className = 'md-preview-widget md-preview-table md-rendered';
    dom.contentEditable = 'false';
    dom.append(this.table);
    dom.addEventListener('mousedown', (event) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a'
      );
      if (link && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        options.onLink(
          link.dataset.noteName || link.getAttribute('href') || '',
          Boolean(link.dataset.noteName)
        );
        return;
      }
      const cell = (event.target as HTMLElement).closest<HTMLTableCellElement>(
        'th,td'
      );
      if (!cell || event.target === this.input || view.state.readOnly) return;
      event.preventDefault();
      const row = (cell.parentElement as HTMLTableRowElement).rowIndex;
      const point = document.caretRangeFromPoint(event.clientX, event.clientY);
      const range = document.createRange();
      let offset: number | undefined;
      const value = this.snapshot().model?.rows[row]?.[cell.cellIndex];
      if (
        point &&
        cell.contains(point.startContainer) &&
        value === cell.textContent?.trim()
      ) {
        range.selectNodeContents(cell);
        range.setEnd(point.startContainer, point.startOffset);
        offset = range.toString().length;
      }
      this.focus(row, cell.cellIndex, offset);
    });
    dom.addEventListener('click', (event) => {
      if ((event.target as HTMLElement).closest('a')) event.preventDefault();
    });
    dom.addEventListener('contextmenu', (event) => {
      const cell = (event.target as HTMLElement).closest<HTMLTableCellElement>(
        'th,td'
      );
      if (cell && event.target !== this.input && !view.state.readOnly)
        this.focus(
          (cell.parentElement as HTMLTableRowElement).rowIndex,
          cell.cellIndex
        );
    });
    dom.addEventListener('keydown', (event) => {
      if (
        event.target instanceof HTMLTableCellElement &&
        ['Enter', 'F2'].includes(event.key)
      ) {
        event.preventDefault();
        const cell = event.target;
        this.focus(
          (cell.parentElement as HTMLTableRowElement).rowIndex,
          cell.cellIndex
        );
      }
    });
    this.update(target, options);
  }
  current() {
    return (
      this.view.state.doc.sliceString(this.target.from, this.target.to) ===
      this.target.source
    );
  }
  private snapshot() {
    const { source, prefix } = this.target;
    if (this.parsed?.source !== source || this.parsed.prefix !== prefix)
      this.parsed = {
        source,
        prefix,
        model: parseTable(source, prefix),
        ranges: tableCellRanges(source, prefix)
      };
    return this.parsed;
  }
  ranges() {
    return this.snapshot().ranges;
  }
  update(target: PreviewTarget, options: PreviewOptions) {
    const hadFocus = this.input === document.activeElement;
    const imagePathsChanged =
      this.options.workspaceRoot !== options.workspaceRoot ||
      this.options.noteFilePath !== options.noteFilePath;
    this.target = target;
    this.options = options;
    this.dom.dataset.sourceFrom = String(target.from);
    this.dom.style.marginInlineStart = target.prefix
      ? `${target.prefix.length * 0.5}em`
      : '';
    const model = this.snapshot().model;
    if (!model) return;
    const active = this.view.state.selection.main;
    if (hadFocus && !this.committing && !this.composing) {
      const cell = tableCellAt(target, active.head, this.ranges());
      this.row = cell.row;
      this.column = cell.column;
    }
    const shapeChanged =
      this.table.rows.length !== model.rows.length ||
      this.table.rows[0]?.cells.length !== model.alignments.length;
    if (shapeChanged) {
      this.input = null;
      this.table.replaceChildren();
      const head = this.table.createTHead(),
        body = this.table.createTBody();
      model.rows.forEach((row, index) => {
        const tr = (index ? body : head).insertRow();
        row.forEach(() =>
          tr.append(document.createElement(index ? 'td' : 'th'))
        );
      });
    }
    model.rows.forEach((row, rowIndex) =>
      row.forEach((value, column) => {
        const cell = this.table.rows[rowIndex].cells[column];
        cell.tabIndex = this.view.state.readOnly ? -1 : 0;
        cell.style.textAlign = model.alignments[column] || 'left';
        cell.style.width = this.widths[column]
          ? `${this.widths[column]}px`
          : '';
        if (this.input?.parentElement === cell) {
          this.input.readOnly = this.view.state.readOnly;
          this.input.setAttribute(
            'aria-label',
            options.tableCellLabel?.(rowIndex + 1, column + 1) ||
              `${rowIndex + 1}, ${column + 1}`
          );
          if (!this.composing && !this.committing && this.input.value !== value)
            this.input.value = value;
        } else if (cell.dataset.markdown !== value || imagePathsChanged) {
          cell.innerHTML = renderNoteMarkdown(
            value,
            options.workspaceRoot,
            options.noteFilePath || ''
          );
          if (!value) cell.append(document.createElement('br'));
          if (column < row.length - 1) this.addResizeHandle(cell, column);
          cell.dataset.markdown = value;
        }
      })
    );
    if (hadFocus) {
      if (
        !this.input ||
        this.input.parentElement !==
          this.table.rows[this.row]?.cells[this.column]
      )
        this.mountInput();
      const range = this.committing
        ? this.editRange
        : this.ranges()[this.row]?.[this.column];
      if (!this.committing && !this.composing && range) this.editRange = range;
      if (range && this.input && !this.composing) {
        const start = this.target.from + range.from;
        this.input.setSelectionRange(
          Math.max(0, active.from - start),
          Math.max(0, active.to - start)
        );
      }
    }
    this.resizeInput();
    this.view.requestMeasure();
  }
  addResizeHandle(cell: HTMLTableCellElement, column: number) {
    const handle = document.createElement('span');
    handle.className = 'md-table-resize-handle';
    handle.addEventListener('mousedown', (event) => {
      if (this.view.state.readOnly) return;
      event.preventDefault();
      event.stopPropagation();
      const start = event.clientX;
      const widths = Array.from(
        this.table.rows[0].cells,
        (cell) => cell.getBoundingClientRect().width
      );
      const move = (event: MouseEvent) => {
        const difference = Math.max(
          48 - widths[column],
          Math.min(widths[column + 1] - 48, event.clientX - start)
        );
        this.widths = widths.map(
          (width, index) =>
            width +
            (index === column
              ? difference
              : index === column + 1
                ? -difference
                : 0)
        );
        Array.from(this.table.rows).forEach((row) =>
          Array.from(row.cells).forEach(
            (cell, index) => (cell.style.width = `${this.widths[index]}px`)
          )
        );
        this.resizeInput();
        this.view.requestMeasure();
      };
      const up = () => {
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', up);
      };
      this.cleanupResize?.();
      this.cleanupResize = up;
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up, { once: true });
    });
    cell.append(handle);
  }
  focus(row: number, column: number, offset = 0) {
    if (this.view.state.readOnly || !this.current()) return;
    const range = this.ranges()[row]?.[column];
    if (!range) {
      const table = this.snapshot().model;
      if (!table?.rows[row] || column >= table.alignments.length) return;
      const source = serializeTable(table, this.target.prefix);
      const position = tableCellRanges(source, this.target.prefix)[row][column]
        .from;
      this.view.dispatch({
        changes: { from: this.target.from, to: this.target.to, insert: source },
        selection: { anchor: this.target.from + position },
        userEvent: 'input'
      });
      this.focus(row, column, offset);
      return;
    }
    if (this.row !== row || this.column !== column || !this.input) {
      this.input?.remove();
      this.input = null;
      this.row = row;
      this.column = column;
      this.update(this.target, this.options);
      this.mountInput();
    }
    this.input?.focus({ preventScroll: true });
    this.input?.setSelectionRange(offset, offset);
    this.syncSelection(true);
    this.dom.scrollIntoView({ block: 'nearest' });
  }
  mountInput() {
    const model = this.snapshot().model;
    const cell = this.table.rows[this.row]?.cells[this.column];
    if (!cell || !model) return;
    const input = document.createElement('textarea');
    this.input = input;
    input.className = 'md-table-cell-input';
    input.rows = 1;
    input.setAttribute(
      'aria-label',
      this.options.tableCellLabel?.(this.row + 1, this.column + 1) ||
        `${this.row + 1}, ${this.column + 1}`
    );
    input.value = model.rows[this.row][this.column];
    this.editRange = this.ranges()[this.row]?.[this.column] || null;
    delete cell.dataset.markdown;
    cell.replaceChildren(input);
    input.addEventListener('input', () => {
      if (!this.composing) this.commit();
    });
    input.addEventListener('compositionstart', () => {
      this.composing = true;
    });
    input.addEventListener('compositionend', () => {
      this.composing = false;
      this.commit();
    });
    input.addEventListener('select', () => this.syncSelection());
    input.addEventListener('click', () => this.syncSelection());
    input.addEventListener('keyup', () => this.syncSelection());
    input.addEventListener('blur', () =>
      queueMicrotask(() => {
        if (
          this.input !== input ||
          !this.dom.isConnected ||
          document.activeElement === input ||
          this.composing
        )
          return;
        this.input = null;
        this.update(this.target, this.options);
      })
    );
    input.addEventListener('keydown', (event) => this.keydown(event));
    input.addEventListener('paste', (event) => {
      if (!event.clipboardData || this.view.state.readOnly) return;
      const plain = event.clipboardData.getData('text/plain');
      const text = plain.includes('\t')
        ? plain
        : markdownClipboardText(event.clipboardData);
      if (!text) return;
      event.preventDefault();
      const pastedTable = parseTable(text);
      if (plain.includes('\t') || pastedTable) {
        const pasted =
          pastedTable?.rows ||
          plain
            .replace(/\r/g, '')
            .replace(/\n$/, '')
            .split('\n')
            .map((row) => row.split('\t').map(escapeTableCell));
        const table = this.snapshot().model!;
        const resized = resizeTable(
          table,
          Math.max(table.rows.length, this.row + pasted.length),
          Math.max(
            table.alignments.length,
            this.column + Math.max(...pasted.map((row) => row.length))
          )
        );
        pasted.forEach((row, index) =>
          row.forEach(
            (value, column) =>
              (resized.rows[this.row + index][this.column + column] = value)
          )
        );
        const source = serializeTable(resized, this.target.prefix);
        const position = tableCellRanges(source, this.target.prefix)[this.row][
          this.column
        ].from;
        this.view.dispatch({
          changes: {
            from: this.target.from,
            to: this.target.to,
            insert: source
          },
          selection: { anchor: this.target.from + position },
          annotations: isolateHistory.of('full'),
          userEvent: 'input.paste'
        });
      } else {
        input.setRangeText(
          escapeTableCell(text),
          input.selectionStart,
          input.selectionEnd,
          'end'
        );
        this.commit('input.paste');
      }
    });
    input.focus({ preventScroll: true });
    this.resizeInput();
  }
  resizeInput() {
    if (!this.input) return;
    this.input.style.height = '0';
    this.input.style.height = `${this.input.scrollHeight}px`;
  }
  syncSelection(isolate = false) {
    const input = this.input,
      range = this.editRange;
    if (!input || !range || this.composing || !this.current()) return;
    const anchor = this.target.from + range.from + input.selectionStart;
    const head = this.target.from + range.from + input.selectionEnd;
    if (
      anchor === this.view.state.selection.main.from &&
      head === this.view.state.selection.main.to
    )
      return;
    this.view.dispatch({
      selection: { anchor, head },
      ...(isolate ? { annotations: isolateHistory.of('full') } : {})
    });
  }
  commit(userEvent = 'input.type') {
    const input = this.input,
      range = this.editRange;
    if (!input || !range || !this.current() || this.view.state.readOnly) return;
    const start = escapeTableCell(
      input.value.slice(0, input.selectionStart)
    ).length;
    const end = escapeTableCell(
      input.value.slice(0, input.selectionEnd)
    ).length;
    const value = escapeTableCell(input.value);
    const from = this.target.from + range.from;
    this.committing = true;
    this.editRange = { from: range.from, to: range.from + value.length };
    input.value = value;
    input.setSelectionRange(start, end);
    try {
      this.view.dispatch({
        changes: { from, to: this.target.from + range.to, insert: value },
        selection: { anchor: from + start, head: from + end },
        userEvent
      });
    } finally {
      this.committing = false;
    }
  }
  exit() {
    const after = this.target.to;
    const suffix = this.view.state.doc.sliceString(after);
    const prefix = this.target.prefix || '';
    const insert = suffix.startsWith('\n\n' + prefix) ? '' : '\n\n' + prefix;
    this.input?.blur();
    this.input?.remove();
    this.input = null;
    this.view.dispatch({
      ...(insert ? { changes: { from: after, insert } } : {}),
      selection: { anchor: after + 2 + prefix.length },
      scrollIntoView: true,
      userEvent: 'input'
    });
    this.view.focus();
  }
  keydown(event: KeyboardEvent) {
    if (this.view.state.readOnly) return;
    if (event.isComposing || this.composing) return;
    const modifier = event.ctrlKey || event.metaKey;
    const input = this.input!;
    if (modifier && ['z', 'y', 'b', 'i'].includes(event.key.toLowerCase())) {
      event.preventDefault();
      this.syncSelection();
      if (['z', 'y'].includes(event.key.toLowerCase())) {
        (event.shiftKey || event.key.toLowerCase() === 'y' ? redo : undo)(
          this.view
        );
      } else
        wrapSelection(this.view, event.key.toLowerCase() === 'b' ? '**' : '*');
      this.input?.focus({ preventScroll: true });
    } else if (event.key === 'Tab') {
      event.preventDefault();
      const columns = this.table.rows[0].cells.length;
      const index =
        this.row * columns + this.column + (event.shiftKey ? -1 : 1);
      if (index < 0) return;
      if (index >= this.table.rows.length * columns)
        this.options.onTableCommand?.('addRowAfter');
      this.focus(Math.floor(index / columns), index % columns);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (modifier) this.options.onTableCommand?.('addRowAfter');
      else if (
        !event.shiftKey &&
        this.row === this.table.rows.length - 1 &&
        this.column === this.table.rows[0].cells.length - 1 &&
        input.selectionEnd === input.value.length
      )
        this.exit();
      else {
        input.setRangeText(
          '<br>',
          input.selectionStart,
          input.selectionEnd,
          'end'
        );
        this.commit();
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.exit();
    } else if (
      (event.key === 'ArrowUp' && input.selectionStart === 0 && this.row > 0) ||
      (event.key === 'ArrowDown' &&
        input.selectionEnd === input.value.length &&
        this.row < this.table.rows.length - 1)
    ) {
      event.preventDefault();
      this.focus(this.row + (event.key === 'ArrowUp' ? -1 : 1), this.column);
    }
  }
}

export class TableWidget extends WidgetType {
  constructor(
    readonly target: PreviewTarget,
    readonly options: PreviewOptions,
    readonly readOnly = false
  ) {
    super();
  }
  eq(other: TableWidget) {
    return (
      this.target.from === other.target.from &&
      this.target.source === other.target.source &&
      this.readOnly === other.readOnly &&
      this.options === other.options
    );
  }
  toDOM(view: EditorView) {
    const dom = document.createElement('div');
    controllers.set(
      dom,
      new TableController(dom, this.target, view, this.options)
    );
    return dom;
  }
  updateDOM(dom: HTMLElement) {
    controllers.get(dom)?.update(this.target, this.options);
    return true;
  }
  ignoreEvent() {
    return true;
  }
  destroy(dom: HTMLElement) {
    controllers.get(dom)?.cleanupResize?.();
    controllers.delete(dom);
  }
}
