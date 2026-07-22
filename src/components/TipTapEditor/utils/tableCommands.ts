import type { Editor } from '@tiptap/core';
import { Fragment, type Node as ProseMirrorNode, type ResolvedPos } from '@tiptap/pm/model';
import { TextSelection } from '@tiptap/pm/state';

export interface TableInfo {
  table: ProseMirrorNode;
  tablePos: number;
  rows: number;
  columns: number;
  rowIndex: number;
  columnIndex: number;
}

const findAncestorDepth = ($pos: ResolvedPos, names: string[]): number => {
  for (let depth = $pos.depth; depth > 0; depth--) {
    if (names.includes($pos.node(depth).type.name)) return depth;
  }
  return -1;
};

export function getCurrentTableInfo(editor: Editor): TableInfo | null {
  const { $from } = editor.state.selection;
  const tableDepth = findAncestorDepth($from, ['table']);
  const rowDepth = findAncestorDepth($from, ['tableRow']);
  const cellDepth = findAncestorDepth($from, ['tableCell', 'tableHeader']);

  if (tableDepth < 0 || rowDepth < 0 || cellDepth < 0) return null;

  const table = $from.node(tableDepth);
  let columns = 0;
  table.forEach(row => {
    columns = Math.max(columns, row.childCount);
  });

  return {
    table,
    tablePos: $from.before(tableDepth),
    rows: table.childCount,
    columns,
    rowIndex: $from.index(tableDepth),
    columnIndex: $from.index(rowDepth)
  };
}

const createEmptyCell = (template: ProseMirrorNode): ProseMirrorNode => {
  const cell = template.type.createAndFill(template.attrs);
  if (cell) return cell;

  const paragraph = template.type.schema.nodes.paragraph?.create();
  return template.type.create(template.attrs, paragraph ? Fragment.from(paragraph) : undefined);
};

const positionInCell = (tablePos: number, table: ProseMirrorNode, rowIndex: number, columnIndex: number) => {
  let rowPos = tablePos + 1;
  for (let index = 0; index < rowIndex; index++) {
    rowPos += table.child(index).nodeSize;
  }

  const row = table.child(rowIndex);
  let cellPos = rowPos + 1;
  for (let index = 0; index < columnIndex; index++) {
    cellPos += row.child(index).nodeSize;
  }

  return cellPos + 1;
};

/** 调整当前表格尺寸，保留左上区域的已有内容，并从右侧/底部增删。 */
export function resizeCurrentTable(editor: Editor, requestedRows: number, requestedColumns: number): boolean {
  const info = getCurrentTableInfo(editor);
  const rows = Math.max(1, Math.trunc(requestedRows));
  const columns = Math.max(1, Math.trunc(requestedColumns));
  if (!info || (rows === info.rows && columns === info.columns)) return Boolean(info);

  const sourceRows = Array.from({ length: info.table.childCount }, (_, index) => info.table.child(index));
  const rowTemplate = sourceRows[0];
  if (!rowTemplate || rowTemplate.childCount === 0) return false;

  const resizedRows: ProseMirrorNode[] = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const sourceRow = sourceRows[Math.min(rowIndex, sourceRows.length - 1)];
    const isNewRow = rowIndex >= sourceRows.length;
    const cells: ProseMirrorNode[] = [];

    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const existingCell = !isNewRow && columnIndex < sourceRow.childCount
        ? sourceRow.child(columnIndex)
        : null;
      const template = isNewRow
        ? sourceRows[sourceRows.length - 1].child(Math.min(columnIndex, sourceRows[sourceRows.length - 1].childCount - 1))
        : sourceRow.child(Math.min(columnIndex, sourceRow.childCount - 1));
      cells.push(existingCell ?? createEmptyCell(template));
    }

    resizedRows.push(sourceRow.type.create(sourceRow.attrs, Fragment.fromArray(cells), sourceRow.marks));
  }

  const resizedTable = info.table.type.create(
    info.table.attrs,
    Fragment.fromArray(resizedRows),
    info.table.marks
  );
  const tr = editor.state.tr.replaceWith(
    info.tablePos,
    info.tablePos + info.table.nodeSize,
    resizedTable
  );
  const rowIndex = Math.min(info.rowIndex, rows - 1);
  const columnIndex = Math.min(info.columnIndex, columns - 1);
  const selectionPos = positionInCell(info.tablePos, resizedTable, rowIndex, columnIndex);
  tr.setSelection(TextSelection.near(tr.doc.resolve(selectionPos)));
  editor.view.dispatch(tr.scrollIntoView());
  editor.commands.focus();
  return true;
}

/** Markdown 表格按列保存对齐方式，因此同步更新当前列的表头与所有正文单元格。 */
export function setCurrentTableColumnAlignment(
  editor: Editor,
  alignment: 'left' | 'center' | 'right'
): boolean {
  const info = getCurrentTableInfo(editor);
  if (!info) return false;

  const rows: ProseMirrorNode[] = [];
  info.table.forEach(row => {
    const cells: ProseMirrorNode[] = [];
    row.forEach((cell, _offset, columnIndex) => {
      cells.push(columnIndex === info.columnIndex
        ? cell.type.create({ ...cell.attrs, textAlign: alignment }, cell.content, cell.marks)
        : cell);
    });
    rows.push(row.type.create(row.attrs, Fragment.fromArray(cells), row.marks));
  });

  const alignedTable = info.table.type.create(
    info.table.attrs,
    Fragment.fromArray(rows),
    info.table.marks
  );
  const tr = editor.state.tr.replaceWith(
    info.tablePos,
    info.tablePos + info.table.nodeSize,
    alignedTable
  );
  const selectionPos = positionInCell(
    info.tablePos,
    alignedTable,
    info.rowIndex,
    info.columnIndex
  );
  tr.setSelection(TextSelection.near(tr.doc.resolve(selectionPos)));
  editor.view.dispatch(tr.scrollIntoView());
  editor.commands.focus();
  return true;
}

export function createTableMarkdown(rows: number, columns: number): string {
  const rowCount = Math.max(1, Math.trunc(rows));
  const columnCount = Math.max(1, Math.trunc(columns));
  const emptyRow = `| ${Array(columnCount).fill('').join(' | ')} |`;
  const separator = `| ${Array(columnCount).fill('---').join(' | ')} |`;
  const body = Array.from({ length: Math.max(0, rowCount - 1) }, () => emptyRow);
  return [emptyRow, separator, ...body].join('\n');
}
