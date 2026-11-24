<template>
  <div
    class="ui-sidebar-scroll min-h-0 flex-1 overflow-y-auto pt-1 [--app-ui-row-height:1.75rem]"
  >
    <p v-if="!groups.length" class="px-3 py-1 text-ui-caption text-content">
      {{ $t('tags.noTags') }}
    </p>
    <div v-for="group in groups" :key="group.tag">
      <div
        v-if="editingTag === group.tag"
        class="mb-ui-row-gap flex h-ui-row items-center gap-1 pl-12 pr-2"
      >
        <input
          :ref="focusRenameInput"
          v-model="draftTag"
          class="h-6 min-w-0 flex-1 select-text rounded border border-active bg-panel px-1 text-panel outline-none"
          :aria-label="t('tags.renameTag')"
          :readonly="moving"
          @keydown="handleRenameKey"
        />
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small shrink-0"
          :aria-label="t('common.confirm')"
          :title="t('common.confirm')"
          :disabled="moving"
          @click="confirmRename"
        >
          <Check class="size-4" />
        </button>
        <button
          type="button"
          class="ui-icon-button ui-icon-button--small shrink-0"
          :aria-label="t('common.cancel')"
          :title="t('common.cancel')"
          :disabled="moving"
          @click="editingTag = null"
        >
          <X class="size-4" />
        </button>
      </div>
      <ContextMenu
        v-else
        :menu="tagMenu"
        @select="handleTagMenu(group, $event.type)"
      >
        <button
          type="button"
          class="ui-menu-item mb-ui-row-gap h-ui-row w-full gap-1.5 px-2 text-left"
          :class="{
            'bg-search-active ring-1 ring-inset ring-active':
              targetTag === group.tag
          }"
          :aria-expanded="expanded.has(group.tag)"
          :aria-label="
            t('tags.groupLabel', {
              tag: group.tag,
              count: group.contents.length
            })
          "
          :title="group.tag"
          @click="toggleGroup(group.tag)"
          @dragover="handleDragOver($event, group.tag)"
          @dragleave="handleDragLeave($event, group.tag)"
          @drop="handleDrop($event, group.tag)"
        >
          <ChevronRight
            class="pointer-events-none size-3 shrink-0 text-ui-muted transition-transform"
            :class="{ 'rotate-90': expanded.has(group.tag) }"
            aria-hidden="true"
          />
          <Tag
            class="pointer-events-none size-4 shrink-0 text-ui-muted"
            aria-hidden="true"
          />
          <span class="pointer-events-none min-w-0 flex-1 truncate">
            {{ group.tag }}
          </span>
          <span
            class="pointer-events-none shrink-0 text-ui-caption tabular-nums text-ui-muted"
            aria-hidden="true"
          >
            {{ group.contents.length }}
          </span>
        </button>
      </ContextMenu>
      <div
        v-if="expanded.has(group.tag)"
        class="ml-10"
        role="group"
        :aria-label="group.tag"
      >
        <ContentItem
          v-for="item in group.contents"
          :key="item.id"
          :content="item"
          :source-tag="group.tag"
          @remove-tag="requestContentRemoval(group.tag, $event)"
        />
      </div>
    </div>
    <ConfirmDialog
      v-model="showRemovalDialog"
      type="danger"
      :title="t('tags.removeTag')"
      :message="removalMessage"
      :confirm-text="t('tags.remove')"
      :cancel-text="t('common.cancel')"
      :loading="moving"
      :show-cancel-button="!moving"
      :show-close="!moving"
      :close-on-press-escape="!moving"
      @confirm="confirmRemoval"
    />
  </div>
</template>

<script setup lang="ts">
import Check from '~icons/lucide/check';
import ChevronRight from '~icons/lucide/chevron-right';
import Copy from '~icons/lucide/copy';
import Edit from '~icons/lucide/square-pen';
import Tag from '~icons/lucide/tag';
import Trash from '~icons/lucide/trash-2';
import X from '~icons/lucide/x';
import { useI18n } from 'vue-i18n';
import ContentItem from '@/components/ContentItem/index.vue';
import { ConfirmDialog } from '@/components/UI';
import modal from '@/utils/modal';
import {
  FRAGMENT_DRAG_MIME,
  getActiveFragmentDrag,
  hasFragmentDragType,
  normalizeFragmentDragId,
  parseFragmentDragPayload,
  type FragmentDragPayload
} from '@/utils/fragmentDragDrop';
import type { TagGroup } from '../composables/useContentList';

const props = defineProps<{
  groups: TagGroup[];
  moving: boolean;
  changeTags: (
    ids: ContentType['id'][],
    source: string,
    target: string | null
  ) => Promise<boolean>;
}>();
const emit = defineEmits<{
  'move-tag': [contentId: ContentType['id'], source: string, target: string];
}>();

const { t } = useI18n();
const expanded = defineModel<Set<string>>('expanded', { required: true });
const targetTag = ref<string | null>(null);
const editingTag = ref<string | null>(null);
const draftTag = ref('');
let focusedRenameInput: HTMLInputElement | null = null;
const showRemovalDialog = ref(false);
const removalTarget = shallowRef<{ tag: string; content?: ContentType } | null>(
  null
);
const tagMenu = computed(() => [
  { label: t('tags.renameTag'), type: 'rename', icon: Edit },
  { label: t('tags.copyTagName'), type: 'copyTagName', icon: Copy },
  {
    label: t('tags.removeTag'),
    type: 'removeTag',
    icon: Trash,
    separatorBefore: true,
    danger: true
  }
]);
const contentsFor = (tag: string): ContentType[] =>
  props.groups.find((group) => group.tag === tag)?.contents ?? [];

const removalMessage = computed(() => {
  const target = removalTarget.value;
  if (!target) return '';
  return target.content
    ? t('tags.removeContentConfirm', {
        tag: target.tag,
        title: target.content.title
      })
    : t('tags.removeGroupConfirm', {
        tag: target.tag,
        count: contentsFor(target.tag).length
      });
});
watch(showRemovalDialog, (visible) => {
  if (!visible) removalTarget.value = null;
});
watch([() => props.groups, () => props.moving], () => {
  const tag = editingTag.value;
  if (!props.moving && tag && !contentsFor(tag).length) editingTag.value = null;
});
watch(
  getActiveFragmentDrag,
  () => {
    targetTag.value = null;
  },
  { flush: 'sync' }
);

function focusRenameInput(element: unknown): void {
  if (element === focusedRenameInput || !(element instanceof HTMLInputElement))
    return;
  focusedRenameInput = element;
  void nextTick(() => {
    if (element.isConnected && document.activeElement !== element) {
      element.focus();
      element.select();
    }
  });
}

async function handleTagMenu(group: TagGroup, action: string): Promise<void> {
  if (props.moving || showRemovalDialog.value) return;
  if (action === 'rename') {
    draftTag.value = group.tag;
    editingTag.value = group.tag;
  } else if (action === 'copyTagName') {
    try {
      await navigator.clipboard.writeText(group.tag);
      modal.success(t('content.copySuccess'));
    } catch {
      modal.error(t('content.copyFailed'));
    }
  } else if (action === 'removeTag' && group.contents.length) {
    removalTarget.value = { tag: group.tag };
    showRemovalDialog.value = true;
  }
}

async function confirmRename(): Promise<void> {
  const source = editingTag.value;
  if (props.moving || !source) return;
  const target = draftTag.value.trim();
  if (target === source) {
    editingTag.value = null;
    return;
  }
  if (!target || target.includes(',')) {
    modal.warning(t(!target ? 'tags.emptyTag' : 'tags.noComma'));
    return;
  }

  const wasExpanded = expanded.value.has(source);
  const ids = contentsFor(source).map((content) => content.id);
  if (await props.changeTags(ids, source, target)) {
    editingTag.value = null;
    expanded.value.delete(source);
    if (wasExpanded) expanded.value.add(target);
  }
}

function handleRenameKey(event: KeyboardEvent): void {
  if (props.moving || event.isComposing) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    event.stopPropagation();
    editingTag.value = null;
  } else if (event.key === 'Enter') {
    event.preventDefault();
    void confirmRename();
  }
}

function requestContentRemoval(tag: string, content: ContentType): void {
  if (props.moving || showRemovalDialog.value) return;
  removalTarget.value = { tag, content };
  showRemovalDialog.value = true;
}

async function confirmRemoval(): Promise<void> {
  const target = removalTarget.value;
  if (props.moving || !target) return;
  const ids = target.content
    ? [target.content.id]
    : contentsFor(target.tag).map((content) => content.id);
  if (!(await props.changeTags(ids, target.tag, null))) return;
  if (!contentsFor(target.tag).length) expanded.value.delete(target.tag);
  showRemovalDialog.value = false;
}

function toggleGroup(tag: string): void {
  if (!expanded.value.delete(tag)) expanded.value.add(tag);
}

function canDrop(drag: FragmentDragPayload | null, target: string): boolean {
  if (props.moving || !drag?.sourceTag || drag.sourceTag === target)
    return false;
  const source = props.groups.find((group) => group.tag === drag.sourceTag);
  return Boolean(
    source?.contents.some(
      (item) =>
        normalizeFragmentDragId(item.id) === normalizeFragmentDragId(drag.id)
    )
  );
}

function handleDragOver(event: DragEvent, target: string): void {
  const transfer = event.dataTransfer;
  if (!transfer || !hasFragmentDragType(transfer.types)) return;
  if (!canDrop(getActiveFragmentDrag(), target)) {
    targetTag.value = null;
    transfer.dropEffect = 'none';
    return;
  }
  event.preventDefault();
  transfer.dropEffect = 'move';
  targetTag.value = target;
}

function handleDragLeave(event: DragEvent, target: string): void {
  if (targetTag.value !== target) return;
  const next = event.relatedTarget;
  if (
    next instanceof Node &&
    (event.currentTarget as HTMLElement).contains(next)
  )
    return;
  targetTag.value = null;
}

function handleDrop(event: DragEvent, target: string): void {
  targetTag.value = null;
  const transfer = event.dataTransfer;
  const active = getActiveFragmentDrag();
  if (!transfer || !active?.sourceTag || !hasFragmentDragType(transfer.types))
    return;
  event.preventDefault();
  const drag = parseFragmentDragPayload(transfer.getData(FRAGMENT_DRAG_MIME));
  if (
    !drag ||
    drag.id !== active.id ||
    drag.sourceTag !== active.sourceTag ||
    !canDrop(active, target)
  )
    return;
  expanded.value.add(target);
  emit('move-tag', active.id, active.sourceTag, target);
}
</script>
