import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';

/**
 * 右键菜单返回值接口
 */
export interface UseContextMenuReturn {
  /** 是否显示菜单 */
  showMenu: Ref<boolean>;
  /** 菜单 X 坐标 */
  x: Ref<number>;
  /** 菜单 Y 坐标 */
  y: Ref<number>;
  /** 菜单元素引用 */
  menuRef: Ref<HTMLElement | null>;
  /** 关闭菜单 */
  closeMenu: () => void;
}

/**
 * 右键菜单组合式函数
 * 提供右键菜单的显示、定位和关闭功能
 * 
 * @param containerRef - 容器元素引用
 * @returns 右键菜单相关的状态和方法
 * 
 * @example
 * ```typescript
 * const containerRef = ref<HTMLDivElement | null>(null);
 * const { showMenu, x, y, menuRef, closeMenu } = useContextMenu(containerRef);
 * ```
 */
export default function useContextMenu(
  containerRef: Ref<HTMLDivElement | null>
): UseContextMenuReturn {
  const showMenu = ref(false);
  const x = ref(0);
  const y = ref(0);
  const menuRef = ref<HTMLElement | null>(null);

  /**
   * 处理右键菜单事件
   * @param e - 鼠标事件
   */
  const handleContextMenu = (e: MouseEvent): void => {
    try {
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
    } catch (error) {
      ErrorHandler.handle(error, {
        type: ErrorType.UNKNOWN_ERROR,
        operation: 'handleContextMenu',
        details: { clientX: e.clientX, clientY: e.clientY },
        timestamp: new Date()
      });
    }
  };

  /**
   * 调整菜单位置，确保菜单不会超出视口
   */
  const adjustMenuPosition = (): void => {
    try {
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
    } catch (error) {
      ErrorHandler.log(error, {
        type: ErrorType.UNKNOWN_ERROR,
        operation: 'adjustMenuPosition',
        timestamp: new Date()
      });
    }
  };

  /**
   * 关闭菜单
   */
  const closeMenu = (): void => {
    showMenu.value = false;
  };

  onMounted(() => {
    try {
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
    } catch (error) {
      ErrorHandler.handle(error, {
        type: ErrorType.UNKNOWN_ERROR,
        operation: 'useContextMenu.onMounted',
        timestamp: new Date()
      });
    }
  });

  onUnmounted(() => {
    try {
      const div = containerRef.value;
      if (div) {
        div.removeEventListener('contextmenu', handleContextMenu);
        window.removeEventListener('click', closeMenu, true);
        window.removeEventListener('contextmenu', closeMenu, true);
        window.removeEventListener('scroll', closeMenu, true);
        window.removeEventListener('resize', adjustMenuPosition);
      }
    } catch (error) {
      ErrorHandler.log(error, {
        type: ErrorType.UNKNOWN_ERROR,
        operation: 'useContextMenu.onUnmounted',
        timestamp: new Date()
      });
    }
  });

  return {
    showMenu,
    x,
    y,
    menuRef,
    closeMenu
  };
}
