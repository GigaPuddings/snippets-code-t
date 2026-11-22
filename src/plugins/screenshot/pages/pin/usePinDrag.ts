import { ref } from 'vue';
import {
  cursorPosition,
  PhysicalPosition,
  type Window
} from '@tauri-apps/api/window';
import { logger } from '@/utils/logger';

type PinWindow = Pick<Window, 'setPosition'>;

interface PinDrag {
  pointerId: number;
  target: HTMLElement;
  pinWindow: PinWindow;
  grabX: number;
  grabY: number;
  lastPosition?: PhysicalPosition;
}

export function usePinDrag(getWindow: () => PinWindow | null) {
  const isPinDragging = ref(false);
  let drag: PinDrag | null = null;
  let frame: number | null = null;
  let moving = false;
  let moveRequested = false;

  const endPinDrag = (event?: PointerEvent): void => {
    if (!drag || (event && event.pointerId !== drag.pointerId)) return;

    const { target, pointerId } = drag;
    drag = null;
    isPinDragging.value = false;
    moveRequested = false;
    if (frame !== null) {
      cancelAnimationFrame(frame);
      frame = null;
    }
    if (target.hasPointerCapture(pointerId)) {
      target.releasePointerCapture(pointerId);
    }
  };

  const scheduleMove = (): void => {
    if (moving || frame !== null) return;

    frame = requestAnimationFrame(async () => {
      frame = null;
      const currentDrag = drag;
      if (!currentDrag) return;
      moving = true;
      moveRequested = false;

      try {
        // Use desktop pixels for the cursor and logical pixels for the grab point.
        const cursor = await cursorPosition();
        if (drag !== currentDrag) return;

        const scale = window.devicePixelRatio;
        const x = Math.round(cursor.x - currentDrag.grabX * scale);
        const y = Math.round(cursor.y - currentDrag.grabY * scale);
        if (
          currentDrag.lastPosition?.x === x &&
          currentDrag.lastPosition.y === y
        )
          return;

        const position = new PhysicalPosition(x, y);
        await currentDrag.pinWindow.setPosition(position);
        currentDrag.lastPosition = position;
      } catch (error) {
        if (drag === currentDrag) endPinDrag();
        logger.error('[PIN窗口] 拖拽窗口失败', error);
      } finally {
        moving = false;
        if (moveRequested) scheduleMove();
      }
    });
  };

  const startPinDrag = (event: PointerEvent): void => {
    if (
      drag ||
      event.button !== 0 ||
      !event.isPrimary ||
      event.pointerType !== 'mouse'
    )
      return;

    const pinWindow = getWindow();
    if (!pinWindow) return;

    const target = event.currentTarget as HTMLElement;
    target.setPointerCapture(event.pointerId);
    event.preventDefault();
    drag = {
      pointerId: event.pointerId,
      target,
      pinWindow,
      grabX: event.clientX,
      grabY: event.clientY
    };
    isPinDragging.value = true;
  };

  const movePinDrag = (event: PointerEvent): void => {
    if (drag?.pointerId !== event.pointerId) return;
    if ((event.buttons & 1) === 0) {
      endPinDrag(event);
      return;
    }

    moveRequested = true;
    scheduleMove();
  };

  return { isPinDragging, startPinDrag, movePinDrag, endPinDrag };
}
