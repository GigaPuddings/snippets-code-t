import { ref, onMounted, onUnmounted, type Ref } from 'vue';
import {
  FRAGMENT_DRAG_MIME,
  getActiveFragmentDrag,
  hasFragmentDragType,
  parseFragmentDragPayload,
  type FragmentDropPosition
} from '@/utils/fragmentDragDrop';

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
  const targetId = ref('');
  const placement = ref<'swap' | 'before' | 'after' | 'end'>('end');
  const clear = (): void => {
    targetId.value = '';
  };
  const accepts = (event: DragEvent): boolean =>
    !busy() &&
    Boolean(
      event.dataTransfer && hasFragmentDragType(event.dataTransfer.types)
    );

  const dragOver = (event: DragEvent, content?: ContentType): void => {
    if (!accepts(event)) return;
    const source = getActiveFragmentDrag();
    if (content && String(source?.id) === String(content.id)) {
      event.stopPropagation();
      clear();
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    targetId.value = content ? String(content.id) : 'end';
    const sameFolder = String(source?.categoryId) === String(category().id);
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    placement.value = !content
      ? 'end'
      : sameFolder
        ? 'swap'
        : event.clientY > rect.top + rect.height / 2
          ? 'after'
          : 'before';
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
  };

  const drop = (event: DragEvent, content?: ContentType): void => {
    if (!accepts(event)) return;
    event.preventDefault();
    event.stopPropagation();
    const source = parseFragmentDragPayload(
      event.dataTransfer?.getData(FRAGMENT_DRAG_MIME) || ''
    );
    const destination = category();
    const after = placement.value === 'after';
    clear();
    if (
      !source ||
      !destination.workspaceRoot ||
      String(source.id) === String(content?.id)
    )
      return;
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
        targetId: content ? String(content.id) : undefined,
        after
      }
    );
  };

  const dragLeave = (event: DragEvent): void => {
    if (
      !(event.relatedTarget instanceof Node) ||
      !(event.currentTarget as HTMLElement).contains(event.relatedTarget)
    )
      clear();
  };
  onMounted(() => window.addEventListener('dragend', clear));
  onUnmounted(() => window.removeEventListener('dragend', clear));
  return { targetId, placement, dragOver, dragLeave, drop };
}
