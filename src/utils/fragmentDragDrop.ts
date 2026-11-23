import { shallowRef } from 'vue';

export const FRAGMENT_DRAG_MIME = 'application/x-snippets-code-fragment';

export interface FragmentDragPayload {
  id: string | number;
  title: string;
  categoryId?: string | number;
  sourceTag?: string;
}

export interface FragmentDropPosition {
  workspaceRoot: string;
  paths: string[];
  targetId?: string;
  swap: boolean;
  after?: boolean;
}

export function normalizeFragmentDragId(id: string | number): string {
  return String(id).replace(/\\/g, '/');
}

/** Row swaps preserve intervening positions. Insertions remove the source first. */
export function orderDroppedFragment(
  paths: string[],
  sourceId: string,
  targetId: string | undefined,
  swap: boolean,
  after = false
): string[] {
  const sourcePath = normalizeFragmentDragId(sourceId);
  const targetPath =
    targetId === undefined ? undefined : normalizeFragmentDragId(targetId);
  const source = paths.findIndex(
    (path) => normalizeFragmentDragId(path) === sourcePath
  );
  const target =
    targetId === undefined
      ? -1
      : paths.findIndex((path) => normalizeFragmentDragId(path) === targetPath);
  if (swap && source < 0) throw new Error('Dragged note no longer exists');
  if (targetId !== undefined && target < 0)
    throw new Error('Drop target no longer exists');
  const ordered = [...paths];
  if (swap && source >= 0 && target >= 0) {
    [ordered[source], ordered[target]] = [ordered[target], ordered[source]];
    return ordered;
  }
  const remaining = ordered.filter(
    (path) => normalizeFragmentDragId(path) !== sourcePath
  );
  const insertion =
    targetId === undefined
      ? remaining.length
      : remaining.findIndex(
          (path) => normalizeFragmentDragId(path) === targetPath
        ) + Number(after);
  remaining.splice(insertion, 0, sourceId);
  return remaining;
}

const activeFragmentDrag = shallowRef<FragmentDragPayload | null>(null);

export function serializeFragmentDragPayload(
  payload: FragmentDragPayload
): string {
  return JSON.stringify(payload);
}

export function parseFragmentDragPayload(
  value: string
): FragmentDragPayload | null {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as Partial<FragmentDragPayload>;
    const id = parsed.id;
    if (
      (typeof id !== 'string' && typeof id !== 'number') ||
      typeof parsed.title !== 'string'
    ) {
      return null;
    }

    return {
      id,
      title: parsed.title,
      ...(parsed.categoryId !== undefined
        ? { categoryId: parsed.categoryId }
        : {}),
      ...(typeof parsed.sourceTag === 'string' && parsed.sourceTag
        ? { sourceTag: parsed.sourceTag }
        : {})
    };
  } catch {
    return null;
  }
}

export function hasFragmentDragType(
  types: readonly string[] | DOMStringList
): boolean {
  return Array.from(types).includes(FRAGMENT_DRAG_MIME);
}

export function setActiveFragmentDrag(
  payload: FragmentDragPayload | null
): void {
  activeFragmentDrag.value = payload;
}

export function getActiveFragmentDrag(): FragmentDragPayload | null {
  return activeFragmentDrag.value;
}
