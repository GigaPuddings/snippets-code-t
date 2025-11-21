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
      rect: [
        Math.ceil(rect.left),
        Math.ceil(rect.right),
        Math.ceil(rect.top),
        Math.ceil(rect.bottom)
      ]
    });
  };

  window.addEventListener('mousemove', handleMouseMove);

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });
}
