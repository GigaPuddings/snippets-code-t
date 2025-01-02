import { invoke } from "@tauri-apps/api/core";

export default function useSetIgnoreCursorEvents(el: HTMLElement) {
  let isInside = false;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const currentIsInside = 
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;


      // invoke('ignore_cursor_events', { 
      //   ignore: !currentIsInside,
      //   rect: [rect.left, rect.right, rect.top, rect.bottom]
      // });

    if (currentIsInside !== isInside) {
      isInside = currentIsInside;
      invoke('ignore_cursor_events', { 
        ignore: !isInside,
        rect: [rect.left, rect.right, rect.top, rect.bottom]
      });
    }
  };

  // 只监听全局鼠标移动
  window.addEventListener('mousemove', handleMouseMove);

  // 确保组件卸载时清理事件监听
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });
}
