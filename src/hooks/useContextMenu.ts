import { onMounted, onUnmounted, ref } from "vue";

export default function useContextMenu(containerRef: Ref<HTMLDivElement | null>) {
  const showMenu = ref(false);
  const x = ref(0);
  const y = ref(0);

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    x.value = e.clientX;
    y.value = e.clientY;

    showMenu.value = true;
  };

  const closeMenu = () => {
    showMenu.value = false;
  };

  onMounted(() => {
    const div = containerRef.value;
    if (div) {
      div.addEventListener("contextmenu", handleContextMenu);
      window.addEventListener("click", closeMenu, true);
      window.addEventListener("contextmenu", closeMenu, true);
      // 添加滚动时关闭菜单
      window.addEventListener("scroll", closeMenu, true);
    }
  });

  onUnmounted(() => {
    const div = containerRef.value;
    if (div) {
      div.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("click", closeMenu, true);
      window.removeEventListener("contextmenu", closeMenu, true);
      window.removeEventListener("scroll", closeMenu, true);
    }
  });

  return {
    showMenu,
    x,
    y,
  };
}
