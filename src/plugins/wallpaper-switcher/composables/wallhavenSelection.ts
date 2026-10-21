import type { WallhavenFilters } from '../api';

type SelectionPatch = Pick<
  WallhavenFilters,
  'categories' | 'nature' | 'asianWomen' | 'selection'
>;

export function filtersForWallhavenSelection(
  filters: WallhavenFilters,
  selection: string
): SelectionPatch | null {
  if (!/^[01]{4}$/.test(selection) || selection === '0000') return null;
  const explicitCategories = selection.slice(0, 3);
  const nature = selection[3] === '1';
  // Nature alone uses the existing General + Anime scope without selecting
  // those two buttons. Explicit combinations keep their own visible selection.
  const categories = explicitCategories === '000' ? '110' : explicitCategories;
  return {
    selection,
    categories,
    nature,
    asianWomen: filters.asianWomen && categories === '001' && !nature
  };
}

export function getWallhavenSelection(filters: WallhavenFilters): string {
  const saved = filters.selection
    ? filtersForWallhavenSelection(filters, filters.selection)
    : null;
  if (
    saved &&
    saved.categories === filters.categories &&
    saved.nature === Boolean(filters.nature)
  )
    return filters.selection!;
  if (filters.nature && filters.categories === '110') return '0001';
  return `${filters.categories}${filters.nature ? '1' : '0'}`;
}

export function selectWallhavenType(
  filters: WallhavenFilters,
  index: number,
  additive = false
): SelectionPatch | null {
  if (!Number.isInteger(index) || index < 0 || index > 3) return null;
  const current = getWallhavenSelection(filters);
  const selected = (additive ? current : '0000').split('');
  selected[index] = selected[index] === '1' ? '0' : '1';
  const selection = selected.join('');
  if (selection === current) return null;
  return filtersForWallhavenSelection(filters, selection);
}
