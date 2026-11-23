<template>
  <teleport to="body">
    <ContextMenuSurface
      v-if="visible"
      ref="menuRef"
      class="z-[9999]"
      :style="menuStyle"
      @contextmenu.prevent
      @mousedown.stop
    >
      <ContextMenuItem
        :disabled="!canFormat"
        shortcut="Ctrl+Shift+F"
        @click="run('format')"
      >
        <span>{{ $t('codeEditor.formatCode') }}</span>
      </ContextMenuItem>
      <ContextMenuItem
        :disabled="!canEdit"
        shortcut="Ctrl+Z"
        @click="run('undo')"
      >
        <span>{{ $t('codeEditor.undo') }}</span>
      </ContextMenuItem>
      <ContextMenuItem
        :disabled="!canEdit"
        shortcut="Ctrl+Y"
        @click="run('redo')"
      >
        <span>{{ $t('codeEditor.redo') }}</span>
      </ContextMenuItem>

      <div class="context-menu-divider" role="separator"></div>

      <ContextMenuItem
        :disabled="!canEdit || !hasSelection"
        shortcut="Ctrl+X"
        @click="run('cut')"
      >
        <span>{{ $t('contextMenu.cut') }}</span>
      </ContextMenuItem>
      <ContextMenuItem
        :disabled="!hasSelection"
        shortcut="Ctrl+C"
        @click="run('copy')"
      >
        <span>{{ $t('contextMenu.copy') }}</span>
      </ContextMenuItem>
      <ContextMenuItem
        :disabled="!canEdit"
        shortcut="Ctrl+V"
        @click="run('paste')"
      >
        <span>{{ $t('contextMenu.paste') }}</span>
      </ContextMenuItem>
      <ContextMenuItem @click="run('copyAll')">
        <span>{{ $t('codeEditor.copyAll') }}</span>
      </ContextMenuItem>
      <ContextMenuItem shortcut="Ctrl+A" @click="run('selectAll')">
        <span>{{ $t('contextMenu.selectAll') }}</span>
      </ContextMenuItem>
    </ContextMenuSurface>
  </teleport>
</template>

<script setup lang="ts">
import ContextMenuSurface from '@/components/UI/ContextMenuSurface.vue';
import ContextMenuItem from '@/components/UI/ContextMenuItem.vue';

type MenuAction =
  | 'format'
  | 'undo'
  | 'redo'
  | 'cut'
  | 'copy'
  | 'paste'
  | 'copyAll'
  | 'selectAll';

interface Props {
  canEdit?: boolean;
  canFormat?: boolean;
  hasSelection?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  canEdit: true,
  canFormat: true,
  hasSelection: false
});

const emit = defineEmits<{
  action: [action: MenuAction];
}>();

const visible = ref(false);
const menuRef = ref<InstanceType<typeof ContextMenuSurface> | null>(null);
const position = ref({ x: 0, y: 0 });

const menuStyle = computed(() => ({
  left: `${position.value.x}px`,
  top: `${position.value.y}px`
}));

function show(event: MouseEvent): void {
  event.preventDefault();
  position.value = { x: event.clientX, y: event.clientY };
  visible.value = true;

  nextTick(() => {
    const menu = menuRef.value?.element;
    if (!menu) return;

    const rect = menu.getBoundingClientRect();
    position.value = {
      x: Math.max(
        8,
        Math.min(position.value.x, window.innerWidth - rect.width - 8)
      ),
      y: Math.max(
        8,
        Math.min(position.value.y, window.innerHeight - rect.height - 8)
      )
    };
  });
}

function hide(): void {
  visible.value = false;
}

function run(action: MenuAction): void {
  const disabled =
    (action === 'format' && !props.canFormat) ||
    ((action === 'undo' || action === 'redo' || action === 'paste') &&
      !props.canEdit) ||
    (action === 'cut' && (!props.canEdit || !props.hasSelection)) ||
    (action === 'copy' && !props.hasSelection);
  if (disabled) return;

  emit('action', action);
  hide();
}

function handleOutsidePointer(event: PointerEvent): void {
  if (
    visible.value &&
    !menuRef.value?.element?.contains(event.target as Node)
  ) {
    hide();
  }
}

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') hide();
}

onMounted(() => {
  document.addEventListener('pointerdown', handleOutsidePointer);
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleOutsidePointer);
  document.removeEventListener('keydown', handleKeydown);
});

defineExpose({ show, hide });
</script>
