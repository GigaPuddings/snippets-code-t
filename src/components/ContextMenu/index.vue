<template>
  <main ref="containerRef">
    <slot></slot>
    <Teleport to="body">
      <Transition
        @before-enter="handleBeforeEnter"
        @enter="handleEnter"
        @after-enter="handleAfterEnter"
      >
        <div
          v-if="showMenu"
          ref="menuElementRef"
          class="context-menu"
          :style="{ left: x + 'px', top: y + 'px' }"
        >
          <div class="menu-list">
            <!-- 添加菜单的点击事件 -->
            <div
              class="menu-item"
              v-for="item in props.menu"
              :key="item.label"
              @click="handleClick(item)"
            >
              <component
                class="menu-item-icon"
                :is="item.icon"
                theme="outline"
                size="18"
                :strokeWidth="3"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              />
              <div class="menu-item-label">{{ item.label }}</div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import useContextMenu from '@/hooks/useContextMenu';
import { ref, watchEffect, nextTick, watch } from 'vue';

interface MenuItem {
  label: string;
  type: string;
  icon: Component;
}

defineOptions({
  name: 'ContextMenu'
});

const props = defineProps<{
  menu: MenuItem[];
}>();

const containerRef = ref<HTMLDivElement | null>(null);
const menuElementRef = ref<HTMLDivElement | null>(null);

const emit = defineEmits(['select']);

const {
  showMenu,
  x,
  y,
  menuRef: contextMenuRef
} = useContextMenu(containerRef);

// 将菜单元素引用传递给contextMenuRef
watchEffect(() => {
  if (menuElementRef.value) {
    contextMenuRef.value = menuElementRef.value;
  }
});

// 监听菜单显示状态，当显示时进行位置调整
watch(
  () => showMenu.value,
  async (newVal) => {
    if (newVal && menuElementRef.value) {
      // 等待DOM更新
      await nextTick();
      // 手动调整菜单位置
      adjustMenuPosition();
    }
  }
);

const PADDING = 8;

// 手动调整菜单位置，保证不超出视口且留出边距
function adjustMenuPosition() {
  if (!menuElementRef.value) return;

  const menu = menuElementRef.value;
  const menuWidth = menu.offsetWidth;
  const menuHeight = menu.offsetHeight;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (x.value < PADDING) x.value = PADDING;
  if (x.value + menuWidth > viewportWidth - PADDING) {
    x.value = viewportWidth - menuWidth - PADDING;
  }
  if (y.value < PADDING) y.value = PADDING;
  if (y.value + menuHeight > viewportHeight - PADDING) {
    y.value = viewportHeight - menuHeight - PADDING;
  }
}

// 菜单的点击事件
function handleClick(item: any) {
  // 选中菜单后关闭菜单
  showMenu.value = false;
  // 并返回选中的菜单
  emit('select', item);
}

function handleBeforeEnter(el: Element) {
  (el as HTMLElement).style.height = '0px';
}

function handleEnter(el: Element) {
  (el as HTMLElement).style.height = 'auto';
  const h = (el as HTMLElement).clientHeight;
  (el as HTMLElement).style.height = '0px';
  requestAnimationFrame(() => {
    (el as HTMLElement).style.height = h + 'px';
    (el as HTMLElement).style.transition = '.5s';
  });
}

function handleAfterEnter(el: Element) {
  (el as HTMLElement).style.transition = 'none';

  // 确保在动画完成后再次调整菜单位置
  adjustMenuPosition();
}
</script>

<style scoped>
.context-menu {
  @apply fixed z-50 bg-panel dark:bg-content  text-panel dark:text-panel rounded-md shadow-md overflow-hidden transition-all duration-300;
}

.menu-list {
  @apply p-2;
}

.menu-item {
  @apply flex items-center gap-2 py-1 px-2 cursor-pointer rounded-md text-sm text-panel dark:text-panel transition-all duration-300 whitespace-nowrap;
}

.menu-item-icon {
  @apply text-panel dark:text-panel;
}

.menu-item-label {
  @apply truncate;
}

.menu-item:hover {
  @apply bg-hover dark:bg-panel;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
