<template>
  <div class="mx-2 mb-2 flex shrink-0 items-center gap-0.5">
    <button
      type="button"
      class="ui-action min-w-0 flex-1 justify-start gap-2 px-3 font-normal"
      :title="t('fragmentType.createIn', { folder })"
      @click="createSelected"
    >
      <component
        :is="selectedType === 'note' ? EditTwo : FileCodeOne"
        class="size-4 shrink-0"
        aria-hidden="true"
      />
      <span class="shrink-0">{{ t(labels[selectedType]) }}</span>
      <span class="ml-auto max-w-24 truncate text-ui-caption text-content">
        {{ folder }}
      </span>
    </button>

    <div ref="picker" class="relative" @focusout="handleFocusOut">
      <button
        ref="trigger"
        type="button"
        class="ui-icon-button"
        :title="t('fragmentType.selectType')"
        :aria-label="t('fragmentType.selectType')"
        aria-haspopup="menu"
        :aria-expanded="open"
        :aria-controls="open ? menuId : undefined"
        @click="open ? closeMenu() : openMenu()"
        @keydown.down.prevent="openMenu()"
        @keydown.up.prevent="openMenu()"
        @keydown.esc.stop="closeMenu()"
      >
        <Down class="size-3.5" aria-hidden="true" />
      </button>

      <ContextMenuSurface
        v-if="open"
        :id="menuId"
        ref="menu"
        class="creation-type-menu"
        :aria-label="t('fragmentType.selectType')"
        @keydown="handleMenuKey"
      >
        <ContextMenuItem
          v-for="type in types"
          :key="type"
          role="menuitemradio"
          tabindex="-1"
          :active="selectedType === type"
          :aria-checked="selectedType === type"
          @click="selectType(type)"
        >
          <component
            :is="type === 'note' ? Notebook : FileCodeOne"
            aria-hidden="true"
          />
          <span>{{ t(labels[type]) }}</span>
          <Check
            v-if="selectedType === type"
            class="context-menu-check"
            aria-hidden="true"
          />
        </ContextMenuItem>
      </ContextMenuSurface>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue';
import { useI18n } from 'vue-i18n';
import ContextMenuSurface from '@/components/UI/ContextMenuSurface.vue';
import ContextMenuItem from '@/components/UI/ContextMenuItem.vue';
import type { FragmentType } from '@/utils/fragmentTypeConversion';
import Down from '~icons/lucide/chevron-down';
import EditTwo from '~icons/lucide/square-pen';
import FileCodeOne from '~icons/lucide/file-code';
import Notebook from '~icons/lucide/notebook';
import Check from '~icons/lucide/check';

defineProps<{ folder: string }>();
const emit = defineEmits<{ create: [type: FragmentType] }>();
const { t } = useI18n();
const types = ['note', 'code'] as const;
const labels = { note: 'nav.newNote', code: 'fragmentType.newSnippet' };
const selectedType = ref<FragmentType>('note');
const open = ref(false);
const menuId = useId();
const picker = ref<HTMLElement | null>(null);
const trigger = ref<HTMLButtonElement | null>(null);
const menu = ref<InstanceType<typeof ContextMenuSurface> | null>(null);

async function openMenu(): Promise<void> {
  if (open.value) return;
  open.value = true;
  await nextTick();
  menu.value?.element
    ?.querySelector<HTMLElement>('[aria-checked="true"]')
    ?.focus();
}

function closeMenu(restoreFocus = false): void {
  open.value = false;
  if (restoreFocus) trigger.value?.focus();
}

function selectType(type: FragmentType): void {
  selectedType.value = type;
  closeMenu(true);
}

function createSelected(): void {
  closeMenu();
  emit('create', selectedType.value);
}

function handleFocusOut(event: FocusEvent): void {
  if (
    !(event.relatedTarget instanceof Node) ||
    !picker.value?.contains(event.relatedTarget)
  )
    closeMenu();
}

function handleMenuKey(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    event.preventDefault();
    event.stopPropagation();
    closeMenu(true);
    return;
  }
  const items = Array.from(
    menu.value?.element?.querySelectorAll<HTMLButtonElement>(
      '[role="menuitemradio"]'
    ) ?? []
  );
  const current = items.findIndex((item) => item === document.activeElement);
  let index: number;
  switch (event.key) {
    case 'ArrowUp':
      index = (current - 1 + items.length) % items.length;
      break;
    case 'ArrowDown':
      index = (current + 1) % items.length;
      break;
    case 'Home':
      index = 0;
      break;
    case 'End':
      index = items.length - 1;
      break;
    default:
      return;
  }
  event.preventDefault();
  items[index]?.focus();
}

watch(open, (visible, _, onCleanup) => {
  if (!visible) return;
  const closeOnOutsidePointer = (event: PointerEvent): void => {
    if (event.target instanceof Node && !picker.value?.contains(event.target))
      closeMenu();
  };
  document.addEventListener('pointerdown', closeOnOutsidePointer, true);
  onCleanup(() =>
    document.removeEventListener('pointerdown', closeOnOutsidePointer, true)
  );
});
</script>

<style scoped lang="scss">
.creation-type-menu {
  @apply absolute right-0 top-full z-30 mt-1;
}
</style>
