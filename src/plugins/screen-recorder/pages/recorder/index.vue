<template>
  <div class="screen-recorder">
    <div class="recorder-shell" :class="{ recording: status === 'recording', paused: status === 'paused' }">
      <span
        v-for="handle in resizeHandles"
        :key="handle.className"
        class="resize-zone"
        :class="handle.className"
        @mousedown.prevent="startResize(handle.direction)"
      ></span>

      <header class="title-bar" @mousedown="startDrag">
        <span class="window-title">{{ $t('screenRecorder.title') || '自定义录屏' }}</span>
        <div class="window-actions" @mousedown.stop>
          <button class="title-button" title="最小化" @click="handleMinimize">_</button>
          <button class="title-button close" title="关闭" @click="handleClose">×</button>
        </div>
      </header>

      <main class="capture-viewport">
        <span class="viewport-mask top"></span>
        <span class="viewport-mask right"></span>
        <span class="viewport-mask bottom"></span>
        <span class="viewport-mask left"></span>
        <div class="capture-frame">
          <div ref="captureHoleRef" class="capture-hole"></div>
          <span class="viewport-border top"></span>
          <span class="viewport-border right"></span>
          <span class="viewport-border bottom"></span>
          <span class="viewport-border left"></span>
        </div>
      </main>

      <footer class="control-strip">
        <span class="status-dot" :class="{ active: status === 'recording', paused: status === 'paused' }"></span>
        <select v-model="settings.fps" :disabled="isBusy">
          <option :value="15">15</option>
          <option :value="24">24</option>
          <option :value="30">30</option>
          <option :value="60">60</option>
        </select>
        <span class="unit">fps</span>

        <select v-model="settings.format" :disabled="isBusy">
          <option value="mp4">MP4</option>
          <option value="gif">GIF</option>
        </select>

        <label class="dimension">
          <input :value="captureSize.width" readonly />
        </label>
        <span class="multiply">×</span>
        <label class="dimension">
          <input :value="captureSize.height" readonly />
        </label>
        <span class="unit">px</span>

        <button
          v-if="status === 'ready' || status === 'completed'"
          class="icon-control"
          title="拖到目标窗口并松开以对齐"
          @mousedown.prevent="handleSnapToWindow"
        >
          ◎
        </button>

        <template v-if="status === 'recording' || status === 'paused'">
          <span class="time">{{ timeText }}</span>
          <button class="control-button" @click="status === 'paused' ? handleResume() : handlePause()">
            {{ status === 'paused' ? $t('screenRecorder.resume') : $t('screenRecorder.pause') }}
          </button>
          <button class="control-button danger" @click="handleStop">{{ $t('screenRecorder.stop') }}</button>
        </template>

        <template v-else-if="status === 'exporting'">
          <span class="save-status">{{ $t('screenRecorder.exporting') || '正在导出...' }}</span>
        </template>

        <template v-else-if="status === 'completed' && result">
          <span class="save-status" :title="result.path">{{ $t('screenRecorder.exportDone') || '已保存' }}</span>
          <button class="control-button" @click="handleOpenFile">{{ $t('screenRecorder.openFile') || '打开' }}</button>
          <button class="control-button" @click="handleRevealFile">{{ $t('screenRecorder.openFolder') || '定位' }}</button>
          <button class="control-button" @click="handleRecordAgain">{{ $t('screenRecorder.recordAgain') || '重录' }}</button>
        </template>

        <button
          v-else
          class="record-button"
          :disabled="ffmpegStatus?.available === false || captureSize.width < MIN_CAPTURE_SIZE || captureSize.height < MIN_CAPTURE_SIZE"
          @click="handleStart"
        >
          <span></span>
          {{ $t('screenRecorder.start') }}
        </button>
      </footer>
    </div>

    <p v-if="ffmpegStatus && !ffmpegStatus.available" class="warning">
      {{ ffmpegStatus.message || $t('screenRecorder.ffmpegMissing') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';
import {
  getCurrentWindow,
  LogicalSize,
  monitorFromPoint,
  PhysicalPosition
} from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import type { UnlistenFn } from '@tauri-apps/api/event';
import modal from '@/utils/modal';
import {
  closeRecorderWindow,
  pickTargetWindow,
  setRecorderCaptureExcluded,
  setRecorderPassthroughRegion
} from './core/recordingApi';
import { useRecordingSession } from './core/useRecordingSession';
import type { RecordingRegion, RecorderSnapRegion } from './core/types';

type ResizeDirection = 'East' | 'North' | 'NorthEast' | 'NorthWest' | 'South' | 'SouthEast' | 'SouthWest' | 'West';

const appWindow = getCurrentWindow();
const captureHoleRef = ref<HTMLElement | null>(null);
const captureSize = ref({ width: 0, height: 0 });
let resizeObserver: ResizeObserver | null = null;
let unlistenMoved: UnlistenFn | null = null;

const MIN_CAPTURE_SIZE = 80;
const DEFAULT_WINDOW_WIDTH = 468;
const DEFAULT_WINDOW_HEIGHT = 300;
const MIN_WINDOW_WIDTH = 360;
const MIN_WINDOW_HEIGHT = 260;
const TITLE_BAR_HEIGHT = 38;
const CONTROL_STRIP_HEIGHT = 56;
const FRAME_INSET = 8;
const BORDER_INSET = 1;

const resizeHandles: Array<{ className: string; direction: ResizeDirection }> = [
  { className: 'n', direction: 'North' },
  { className: 'ne', direction: 'NorthEast' },
  { className: 'e', direction: 'East' },
  { className: 'se', direction: 'SouthEast' },
  { className: 's', direction: 'South' },
  { className: 'sw', direction: 'SouthWest' },
  { className: 'w', direction: 'West' },
  { className: 'nw', direction: 'NorthWest' }
];

const {
  status,
  settings,
  ffmpegStatus,
  result,
  elapsedMs,
  refreshFfmpegStatus,
  begin,
  pause,
  resume,
  stop,
  exportFile,
  cancel,
  reset
} = useRecordingSession();

const isBusy = computed(() => status.value === 'recording' || status.value === 'paused' || status.value === 'exporting');

const timeText = computed(() => {
  const totalSeconds = Math.floor(elapsedMs.value / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
});

const runAction = async (action: () => Promise<void>) => {
  try {
    await action();
  } catch (error: any) {
    modal.msg(error?.message || String(error), 'error');
  }
};

const toEvenPhysicalSize = (value: number): number =>
  Math.max(2, Math.floor(Math.round(value) / 2) * 2);

const getCaptureRegion = async (): Promise<RecordingRegion> => {
  const hole = captureHoleRef.value;
  if (!hole) {
    throw new Error('录制视口尚未准备好');
  }

  const rect = hole.getBoundingClientRect();
  const scale = await appWindow.scaleFactor();
  const innerPosition = await appWindow.innerPosition();
  const physicalWidth = toEvenPhysicalSize(rect.width * scale);
  const physicalHeight = toEvenPhysicalSize(rect.height * scale);

  if (physicalWidth < MIN_CAPTURE_SIZE || physicalHeight < MIN_CAPTURE_SIZE) {
    throw new Error('录制区域太小，请放大录制窗口');
  }

  return {
    x: rect.left,
    y: rect.top,
    width: physicalWidth / scale,
    height: physicalHeight / scale,
    screenX: Math.round(innerPosition.x + rect.left * scale),
    screenY: Math.round(innerPosition.y + rect.top * scale),
    physicalWidth,
    physicalHeight,
    scale
  };
};

const refreshCaptureMetrics = async () => {
  try {
    const region = await getCaptureRegion();
    captureSize.value = {
      width: region.physicalWidth,
      height: region.physicalHeight
    };
    await setRecorderPassthroughRegion({
      x: Math.round(region.x * region.scale),
      y: Math.round(region.y * region.scale),
      width: region.physicalWidth,
      height: region.physicalHeight
    }).catch(() => undefined);
  } catch {
    captureSize.value = { width: 0, height: 0 };
    await setRecorderPassthroughRegion(null).catch(() => undefined);
  }
};

const startDrag = async (event: MouseEvent) => {
  if (event.button !== 0 || isBusy.value) return;
  await appWindow.startDragging();
};

const startResize = async (direction: ResizeDirection) => {
  if (isBusy.value) return;
  await appWindow.startResizeDragging(direction);
};

const handleStart = () => runAction(async () => {
  await setRecorderCaptureExcluded(true).catch(() => undefined);
  await refreshCaptureMetrics();
  await begin(await getCaptureRegion());
});

const handlePause = () => runAction(pause);

const handleResume = () => runAction(async () => {
  await resume(await getCaptureRegion());
});

const handleStop = () => runAction(async () => {
  await stop();
  await exportFile();
});

const handleRecordAgain = () => {
  reset();
  status.value = 'ready';
  result.value = null;
  void appWindow.setSize(new LogicalSize(DEFAULT_WINDOW_WIDTH, DEFAULT_WINDOW_HEIGHT));
  void nextTick(refreshCaptureMetrics);
};

const fitRecorderToWindow = async (target: RecorderSnapRegion) => {
  const monitor = await monitorFromPoint(target.screenX, target.screenY);
  const scale = monitor?.scaleFactor || await appWindow.scaleFactor();
  const width = Math.max(
    MIN_WINDOW_WIDTH,
    target.physicalWidth / scale + FRAME_INSET * 2 + BORDER_INSET * 2
  );
  const height = Math.max(
    MIN_WINDOW_HEIGHT,
    target.physicalHeight / scale + TITLE_BAR_HEIGHT + CONTROL_STRIP_HEIGHT + FRAME_INSET * 2 + BORDER_INSET * 2
  );

  await appWindow.setPosition(new PhysicalPosition(
    Math.round(target.screenX - (FRAME_INSET + BORDER_INSET) * scale),
    Math.round(target.screenY - (TITLE_BAR_HEIGHT + FRAME_INSET + BORDER_INSET) * scale)
  ));
  await appWindow.setSize(new LogicalSize(Math.round(width), Math.round(height)));
  await nextTick();
  await refreshCaptureMetrics();
};

const handleSnapToWindow = () => runAction(async () => {
  const target = await pickTargetWindow();
  await fitRecorderToWindow(target);
});

const handleMinimize = async () => {
  await appWindow.minimize();
};

const handleClose = async () => {
  try {
    await cancel();
    await setRecorderPassthroughRegion(null).catch(() => undefined);
    await setRecorderCaptureExcluded(false).catch(() => undefined);
  } catch {
    // Ignore close cleanup failures; backend also cleans stale sessions on next start.
  }
  await closeRecorderWindow();
};

const handleOpenFile = async () => {
  if (!result.value) return;
  await invoke('open_file_with_default_app', { filePath: result.value.path });
};

const handleRevealFile = async () => {
  if (!result.value) return;
  await invoke('show_file_in_folder', { filePath: result.value.path });
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    void handleClose();
  }
};

onMounted(async () => {
  status.value = 'ready';
  await appWindow.setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT)).catch(() => undefined);
  await setRecorderCaptureExcluded(true).catch(() => undefined);
  await appWindow.emit('screen_recorder_ready');
  await refreshFfmpegStatus().catch(() => undefined);
  await nextTick();
  await refreshCaptureMetrics();

  if (captureHoleRef.value) {
    resizeObserver = new ResizeObserver(() => {
      void refreshCaptureMetrics();
    });
    resizeObserver.observe(captureHoleRef.value);
  }
  unlistenMoved = await appWindow.onMoved(() => {
    void refreshCaptureMetrics();
  }).catch(() => null);

  window.addEventListener('resize', refreshCaptureMetrics);
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  unlistenMoved?.();
  window.removeEventListener('resize', refreshCaptureMetrics);
  window.removeEventListener('keydown', handleKeydown);
  void setRecorderPassthroughRegion(null).catch(() => undefined);
  void setRecorderCaptureExcluded(false).catch(() => undefined);
});
</script>

<style scoped lang="scss">
:global(html),
:global(body),
:global(#app) {
  background: transparent !important;
}

.screen-recorder {
  position: fixed;
  inset: 0;
  overflow: hidden;
  color: #20242c;
  background: transparent;
  user-select: none;
}

.recorder-shell {
  position: relative;
  display: grid;
  grid-template-rows: 38px minmax(120px, 1fr) 56px;
  width: 100vw;
  height: 100vh;
  border: 1px solid rgba(198, 205, 214, 0.95);
  box-sizing: border-box;
  box-shadow: 0 18px 38px rgba(20, 28, 39, 0.16);
}

.title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 0 14px;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid rgba(210, 216, 224, 0.92);
  cursor: move;
}

.window-title {
  overflow: hidden;
  font-size: 15px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.window-actions {
  display: flex;
  align-items: center;
  gap: 2px;
}

.title-button {
  width: 32px;
  height: 28px;
  color: #2c333d;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 17px;
  line-height: 1;

  &:hover {
    background: rgba(30, 37, 48, 0.08);
  }

  &.close:hover {
    color: #fff;
    background: #d92d20;
  }
}

.capture-viewport {
  position: relative;
  min-width: 0;
  min-height: 0;
  background: transparent;
}

.viewport-mask {
  position: absolute;
  z-index: 1;
  background: rgba(248, 250, 252, 0.88);
  pointer-events: auto;

  &.top,
  &.bottom {
    left: 0;
    right: 0;
    height: 8px;
  }

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
  }

  &.left,
  &.right {
    top: 8px;
    bottom: 8px;
    width: 8px;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}

.capture-frame {
  position: absolute;
  inset: 8px;
  z-index: 2;
  background: transparent;
}

.capture-hole {
  position: absolute;
  inset: 1px;
  background: transparent;
}

.viewport-border {
  position: absolute;
  z-index: 3;
  pointer-events: none;
  background: rgba(185, 194, 206, 0.98);

  &.top,
  &.bottom {
    left: 0;
    right: 0;
    height: 1px;
  }

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
  }

  &.left,
  &.right {
    top: 0;
    bottom: 0;
    width: 1px;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}

.control-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-width: 0;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.98);
  border-top: 1px solid rgba(210, 216, 224, 0.92);
  box-sizing: border-box;
}

.status-dot {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  border: 1px solid #8d96a3;
  border-radius: 50%;

  &.active {
    background: #b52b27;
    border-color: #b52b27;
  }

  &.paused {
    background: #d89113;
    border-color: #d89113;
  }
}

select,
input,
button {
  height: 30px;
  box-sizing: border-box;
  font: inherit;
}

select,
input {
  color: #1f2733;
  background: #fff;
  border: 1px solid #bfc7d2;
  border-radius: 2px;
  outline: none;
}

select {
  width: 58px;
  padding: 0 4px;
}

.dimension input {
  width: 64px;
  padding: 0 8px;
  text-align: center;
}

.unit,
.multiply,
.time,
.save-status {
  color: #252b35;
  font-size: 13px;
  white-space: nowrap;
}

.time {
  min-width: 44px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  text-align: center;
}

.save-status {
  overflow: hidden;
  max-width: 120px;
  color: #334155;
  text-overflow: ellipsis;
}

.record-button,
.control-button,
.icon-control {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-width: 56px;
  padding: 0 9px;
  color: #20242c;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(30, 37, 48, 0.08);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.icon-control {
  min-width: 30px;
  width: 30px;
  padding: 0;
  font-size: 20px;
  line-height: 1;
}

.record-button span {
  width: 16px;
  height: 16px;
  background: #b52b27;
  border-radius: 50%;
}

.control-button.danger {
  color: #b42318;
}

.warning {
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: 62px;
  margin: 0;
  padding: 8px 10px;
  color: #8a2d0b;
  background: rgba(255, 247, 237, 0.96);
  border: 1px solid rgba(253, 186, 116, 0.8);
  border-radius: 4px;
  font-size: 12px;
}

.resize-zone {
  position: absolute;
  z-index: 10;
  display: block;
}

.resize-zone.n,
.resize-zone.s {
  left: 8px;
  right: 8px;
  height: 8px;
  cursor: ns-resize;
}

.resize-zone.n {
  top: 0;
}

.resize-zone.s {
  bottom: 0;
}

.resize-zone.e,
.resize-zone.w {
  top: 8px;
  bottom: 8px;
  width: 8px;
  cursor: ew-resize;
}

.resize-zone.e {
  right: 0;
}

.resize-zone.w {
  left: 0;
}

.resize-zone.ne,
.resize-zone.nw,
.resize-zone.se,
.resize-zone.sw {
  width: 14px;
  height: 14px;
}

.resize-zone.ne,
.resize-zone.sw {
  cursor: nesw-resize;
}

.resize-zone.nw,
.resize-zone.se {
  cursor: nwse-resize;
}

.resize-zone.ne {
  top: 0;
  right: 0;
}

.resize-zone.nw {
  top: 0;
  left: 0;
}

.resize-zone.se {
  right: 0;
  bottom: 0;
}

.resize-zone.sw {
  left: 0;
  bottom: 0;
}
</style>
