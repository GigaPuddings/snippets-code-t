import { invoke } from '@tauri-apps/api/core';
import { onUnmounted } from 'vue';
import { ErrorHandler, ErrorType } from '@/utils/error-handler';

/**
 * 设置忽略光标事件组合式函数
 * 用于实现窗口的鼠标穿透效果，当鼠标不在指定元素内时，窗口会忽略鼠标事件
 * 
 * @param el - 要监听的 HTML 元素
 * 
 * @example
 * ```typescript
 * const searchBoxEl = document.querySelector('.search-box') as HTMLElement;
 * useSetIgnoreCursorEvents(searchBoxEl);
 * ```
 */
export function useSetIgnoreCursorEvents(el: HTMLElement): void {
  /**
   * 处理鼠标移动事件
   * @param e - 鼠标事件
   */
  const handleMouseMove = (e: MouseEvent): void => {
    try {
      const rect = el.getBoundingClientRect();
      const currentIsInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      invoke('ignore_cursor_events', {
        ignore: !currentIsInside,
        rect: [
          Math.ceil(rect.left),
          Math.ceil(rect.right),
          Math.ceil(rect.top),
          Math.ceil(rect.bottom)
        ]
      }).catch((error) => {
        ErrorHandler.log(error, {
          type: ErrorType.TAURI_COMMAND_ERROR,
          operation: 'ignore_cursor_events',
          details: { ignore: !currentIsInside },
          timestamp: new Date()
        });
      });
    } catch (error) {
      ErrorHandler.log(error, {
        type: ErrorType.UNKNOWN_ERROR,
        operation: 'handleMouseMove',
        timestamp: new Date()
      });
    }
  };

  window.addEventListener('mousemove', handleMouseMove);

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });
}
