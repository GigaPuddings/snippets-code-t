import { invoke } from '@tauri-apps/api/core';

export function useSetIgnoreCursorEvents(el: HTMLElement) {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const currentIsInside =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    invoke('ignore_cursor_events', {
      ignore: !currentIsInside,
      // 获取元素的坐标，并向上取整
      rect: [
        Math.ceil(rect.left),
        Math.ceil(rect.right),
        Math.ceil(rect.top),
        Math.ceil(rect.bottom)
      ]
    });
  };

  // 只监听全局鼠标移动
  window.addEventListener('mousemove', handleMouseMove);

  // 确保组件卸载时清理事件监听
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });
}
