export const FRAGMENT_DRAG_MIME = 'application/x-snippets-code-fragment';

export interface FragmentDragPayload {
  id: string | number;
  title: string;
  categoryId?: string | number;
}

let activeFragmentDrag: FragmentDragPayload | null = null;

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
  activeFragmentDrag = payload;
}

export function getActiveFragmentDrag(): FragmentDragPayload | null {
  return activeFragmentDrag;
}
