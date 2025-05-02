import { onMounted, onUnmounted, ref } from 'vue';

export default function useContextMenu(
  containerRef: Ref<HTMLDivElement | null>
) {
  const showMenu = ref(false);
  const x = ref(0);
  const y = ref(0);
  const menuRef = ref<HTMLElement | null>(null);

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // 先设置临时位置
    x.value = e.clientX;
    y.value = e.clientY;

    // 显示菜单
    showMenu.value = true;

    // 等待DOM更新后调整位置
    setTimeout(() => {
      adjustMenuPosition();
    }, 0);
  };

  const adjustMenuPosition = () => {
    if (!menuRef.value) return;

    const menu = menuRef.value;
    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;

    // 获取视口宽高
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 检查并调整X坐标
    if (x.value + menuWidth > viewportWidth) {
      x.value = viewportWidth - menuWidth;
    }

    // 检查并调整Y坐标
    if (y.value + menuHeight > viewportHeight) {
      y.value = viewportHeight - menuHeight;
    }
  };

  const closeMenu = () => {
    showMenu.value = false;
  };

  onMounted(() => {
    const div = containerRef.value;
    if (div) {
      div.addEventListener('contextmenu', handleContextMenu);
      window.addEventListener('click', closeMenu, true);
      window.addEventListener('contextmenu', closeMenu, true);
      // 添加滚动时关闭菜单
      window.addEventListener('scroll', closeMenu, true);
      // 添加窗口大小变化时调整菜单位置
      window.addEventListener('resize', adjustMenuPosition);
    }
  });

  onUnmounted(() => {
    const div = containerRef.value;
    if (div) {
      div.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', closeMenu, true);
      window.removeEventListener('contextmenu', closeMenu, true);
      window.removeEventListener('scroll', closeMenu, true);
      window.removeEventListener('resize', adjustMenuPosition);
    }
  });

  return {
    showMenu,
    x,
    y,
    menuRef
  };
}
