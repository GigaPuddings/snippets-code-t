<template>
  <teleport to="body">
    <div
      v-if="visible"
      ref="menuRef"
      class="code-context-menu"
      :class="{ 'dark-theme': dark }"
      :style="menuStyle"
      role="menu"
      @contextmenu.prevent
      @mousedown.stop
    >
      <button class="menu-item" :disabled="!canFormat" role="menuitem" @click="run('format')">
        <span>{{ $t('codeEditor.formatCode') }}</span>
        <kbd>Ctrl+Shift+F</kbd>
      </button>
      <button class="menu-item" :disabled="!canEdit" role="menuitem" @click="run('undo')">
        <span>{{ $t('codeEditor.undo') }}</span>
        <kbd>Ctrl+Z</kbd>
      </button>
      <button class="menu-item" :disabled="!canEdit" role="menuitem" @click="run('redo')">
        <span>{{ $t('codeEditor.redo') }}</span>
        <kbd>Ctrl+Y</kbd>
      </button>

      <div class="menu-divider"></div>

      <button class="menu-item" :disabled="!canEdit || !hasSelection" role="menuitem" @click="run('cut')">
        <span>{{ $t('contextMenu.cut') }}</span>
        <kbd>Ctrl+X</kbd>
      </button>
      <button class="menu-item" :disabled="!hasSelection" role="menuitem" @click="run('copy')">
        <span>{{ $t('contextMenu.copy') }}</span>
        <kbd>Ctrl+C</kbd>
      </button>
      <button class="menu-item" :disabled="!canEdit" role="menuitem" @click="run('paste')">
        <span>{{ $t('contextMenu.paste') }}</span>
        <kbd>Ctrl+V</kbd>
      </button>
      <button class="menu-item" role="menuitem" @click="run('copyAll')">
        <span>{{ $t('codeEditor.copyAll') }}</span>
      </button>
      <button class="menu-item" role="menuitem" @click="run('selectAll')">
        <span>{{ $t('contextMenu.selectAll') }}</span>
        <kbd>Ctrl+A</kbd>
      </button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
type MenuAction = 'format' | 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'copyAll' | 'selectAll';

interface Props {
  dark?: boolean;
  canEdit?: boolean;
  canFormat?: boolean;
  hasSelection?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false,
  canEdit: true,
  canFormat: true,
  hasSelection: false
});

const emit = defineEmits<{
  action: [action: MenuAction];
}>();

const visible = ref(false);
const menuRef = ref<HTMLElement | null>(null);
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
    const menu = menuRef.value;
    if (!menu) return;

    const rect = menu.getBoundingClientRect();
    position.value = {
      x: Math.max(8, Math.min(position.value.x, window.innerWidth - rect.width - 8)),
      y: Math.max(8, Math.min(position.value.y, window.innerHeight - rect.height - 8))
    };
  });
}

function hide(): void {
  visible.value = false;
}

function run(action: MenuAction): void {
  const disabled = (
    (action === 'format' && !props.canFormat)
    || ((action === 'undo' || action === 'redo' || action === 'paste') && !props.canEdit)
    || ((action === 'cut') && (!props.canEdit || !props.hasSelection))
    || (action === 'copy' && !props.hasSelection)
  );
  if (disabled) return;

  emit('action', action);
  hide();
}

function handleOutsidePointer(event: PointerEvent): void {
  if (visible.value && !menuRef.value?.contains(event.target as Node)) {
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

<style lang="scss" scoped>
.code-context-menu {
  @apply fixed z-[9999] min-w-[188px] rounded-lg border p-1 select-none;
  background-color: var(--panel-bg);
  border-color: var(--panel-border);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);

  &.dark-theme {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.3);
  }
}

.menu-item {
  @apply flex w-full items-center gap-4 rounded-md px-2.5 py-1.5 text-left text-sm;
  color: var(--panel-text);

  &:not(:disabled):hover {
    background-color: var(--editor-hover-bg);
  }

  &:disabled {
    @apply cursor-not-allowed opacity-45;
  }

  span {
    @apply flex-1 whitespace-nowrap;
  }

  kbd {
    @apply text-[10px];
    color: var(--panel-text-secondary);
    font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
  }
}

.menu-divider {
  @apply my-1 h-px;
  background-color: var(--panel-border);
}
</style>
