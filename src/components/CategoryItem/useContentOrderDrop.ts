import { onMounted, onUnmounted, shallowRef, watch, type Ref } from 'vue';
import {
  FRAGMENT_DRAG_MIME,
  getActiveFragmentDrag,
  hasFragmentDragType,
  normalizeFragmentDragId,
  parseFragmentDragPayload,
  type FragmentDragPayload,
  type FragmentDropPosition
} from '@/utils/fragmentDragDrop';

type DropTarget =
  | { id: string; placement: 'swap' | 'before' | 'after' }
  | { id?: undefined; placement: 'empty' };

function boundsAtPointer(
  element: Element,
  { clientX, clientY }: DragEvent
): DOMRect | null {
  const rect = element.getBoundingClientRect();
  return clientX >= rect.left &&
    clientX < rect.right &&
    clientY >= rect.top &&
    clientY < rect.bottom
    ? rect
    : null;
}

function hitTest(
  event: DragEvent,
  source: FragmentDragPayload | null,
  sameFolder: boolean
): DropTarget | null {
  const list = event.currentTarget;
  const element = event.target;
  if (!(list instanceof HTMLElement) || !(element instanceof Element))
    return null;

  const empty = element.closest('[data-empty-drop-target]');
  if (empty?.parentElement === list)
    return !sameFolder && boundsAtPointer(empty, event)
      ? { placement: 'empty' }
      : null;

  const row = element.closest<HTMLElement>('[data-content-id]');
  const id = row?.dataset.contentId;
  const sourceId = source && normalizeFragmentDragId(source.id);
  const bounds = row?.parentElement === list && boundsAtPointer(row, event);
  if (bounds && id) {
    if (normalizeFragmentDragId(id) === sourceId) return null;
    const placement = sameFolder
      ? 'swap'
      : event.clientY < (bounds.top + bounds.bottom) / 2
        ? 'before'
        : 'after';
    return { id, placement };
  }

  // Resolve only gaps bounded by two rows. List padding is not an append zone.
  let previous: { id: string; bounds: DOMRect } | undefined;
  for (const child of list.children) {
    if (!(child instanceof HTMLElement) || !child.dataset.contentId) continue;
    const nextId = child.dataset.contentId;
    const below = child.getBoundingClientRect();
    if (event.clientY < below.top) {
      if (!previous) return null;
      const above = previous.bounds;
      if (
        event.clientY >= above.bottom &&
        event.clientX >= Math.max(above.left, below.left) &&
        event.clientX < Math.min(above.right, below.right) &&
        normalizeFragmentDragId(nextId) !== sourceId &&
        normalizeFragmentDragId(previous.id) !== sourceId
      ) {
        return { id: nextId, placement: 'before' };
      }
      return null;
    }
    previous = { id: nextId, bounds: below };
  }
  return null;
}

export function useContentOrderDrop(
  category: () => CategoryType,
  contents: Ref<ContentType[]>,
  busy: () => boolean,
  move: (
    content: ContentType,
    categoryId: string | number,
    position: FragmentDropPosition
  ) => void
) {
  const target = shallowRef<DropTarget | null>(null);
  const clear = (): void => {
    target.value = null;
  };
  const accepts = (data: DataTransfer | null): data is DataTransfer =>
    Boolean(data && hasFragmentDragType(data.types));
  const resolve = (
    event: DragEvent,
    source: FragmentDragPayload | null
  ): DropTarget | null => {
    const destination = category();
    if (busy() || !destination.workspaceRoot) return null;
    return hitTest(
      event,
      source,
      String(source?.categoryId) === String(destination.id)
    );
  };

  const dragOver = (event: DragEvent): void => {
    const data = event.dataTransfer;
    if (!accepts(data)) return;
    const next = resolve(event, getActiveFragmentDrag());
    if (!next) {
      data.dropEffect = 'none';
      clear();
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    data.dropEffect = 'move';
    if (
      target.value?.id !== next.id ||
      target.value?.placement !== next.placement
    )
      target.value = next;
  };

  const drop = (event: DragEvent): void => {
    clear();
    const data = event.dataTransfer;
    if (!accepts(data)) return;
    const source = parseFragmentDragPayload(data.getData(FRAGMENT_DRAG_MIME));
    const destination = category();
    const position = source && resolve(event, source);
    if (!source || !position || !destination.workspaceRoot) return;
    event.preventDefault();
    event.stopPropagation();
    move(
      {
        id: source.id,
        title: source.title,
        content: '',
        category_id: source.categoryId
      },
      destination.id,
      {
        workspaceRoot: destination.workspaceRoot,
        paths: contents.value.map((item) => String(item.id)),
        targetId: position.id,
        swap: position.placement === 'swap',
        after: position.placement === 'after'
      }
    );
  };

  const dragLeave = (event: DragEvent): void => {
    const list = event.currentTarget as HTMLElement;
    // Chromium can omit relatedTarget when crossing descendants of the list.
    const next =
      event.relatedTarget instanceof Node
        ? event.relatedTarget
        : list.ownerDocument.elementFromPoint(event.clientX, event.clientY);
    if (!list.contains(next)) clear();
  };
  watch([busy, getActiveFragmentDrag, () => category().workspaceRoot], clear, {
    flush: 'sync'
  });
  onMounted(() => {
    window.addEventListener('dragend', clear);
    window.addEventListener('drop', clear, true);
  });
  onUnmounted(() => {
    window.removeEventListener('dragend', clear);
    window.removeEventListener('drop', clear, true);
  });
  return { target, dragOver, dragLeave, drop };
}
