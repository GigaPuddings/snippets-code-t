<template>
  <main ref="containerRef">
    <slot></slot>
    <Teleport to="body">
      <Transition name="context-menu-fade">
        <ContextMenuSurface
          v-if="showMenu"
          ref="menuSurface"
          class="sidebar-context-menu z-50"
          :style="{ left: x + 'px', top: y + 'px' }"
        >
          <ContextMenuItem
            v-for="item in props.menu"
            :key="item.type"
            as="div"
            :danger="item.type === 'delete'"
            @click="handleClick(item)"
          >
            <component :is="item.icon" aria-hidden="true" />
            <span>{{ item.label }}</span>
          </ContextMenuItem>
        </ContextMenuSurface>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import useContextMenu from '@/hooks/useContextMenu';
import ContextMenuSurface from '@/components/UI/ContextMenuSurface.vue';
import ContextMenuItem from '@/components/UI/ContextMenuItem.vue';

interface MenuItem {
  label: string;
  type: string;
  icon: Component;
}

defineOptions({ name: 'ContextMenu' });

const props = defineProps<{ menu: MenuItem[] }>();
const emit = defineEmits<{ select: [item: MenuItem] }>();

const containerRef = ref<HTMLDivElement | null>(null);
const menuSurface = ref<InstanceType<typeof ContextMenuSurface> | null>(null);
const { showMenu, x, y, menuRef, closeMenu } = useContextMenu(containerRef);

watchEffect(() => {
  menuRef.value = menuSurface.value?.element ?? null;
});

function handleClick(item: MenuItem): void {
  closeMenu();
  emit('select', item);
}
</script>

<style scoped>
.context-menu-fade-enter-active,
.context-menu-fade-leave-active {
  @apply transition-opacity duration-150;
}

.context-menu-fade-enter-from,
.context-menu-fade-leave-to {
  @apply opacity-0;
}

.context-menu-fade-leave-active {
  @apply pointer-events-none;
}
</style>
