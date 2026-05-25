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
          <button class="title-button title-button--window" title="最小化" @click="handleMinimize">
            <Minus class="title-icon" theme="outline" size="20" :strokeWidth="3" strokeLinecap="butt" />
          </button>
          <button class="title-button title-button--close" title="关闭" @click="handleClose">
            <CloseSmall class="title-icon" theme="outline" size="18" :strokeWidth="3" strokeLinecap="butt" />
          </button>
        </div>
      </header>

      <main class="capture-viewport">
        <span class="viewport-mask top"></span>
        <span class="viewport-mask right"></span>
        <span class="viewport-mask bottom"></span>
        <span class="viewport-mask left"></span>
        <div class="capture-frame">
          <div ref="captureHoleRef" class="capture-hole"></div>
          <div v-if="previewUrl" class="result-preview">
            <video
              v-if="result?.format === 'mp4'"
              :src="previewUrl"
              controls
              playsinline
              preload="metadata"
            ></video>
            <img v-else :src="previewUrl" alt="">
          </div>
          <span class="viewport-border top"></span>
          <span class="viewport-border right"></span>
          <span class="viewport-border bottom"></span>
          <span class="viewport-border left"></span>
        </div>
      </main>

      <footer class="control-strip">
        <div class="control-group control-group--tools">
          <button
            v-if="status === 'ready' || status === 'completed'"
            class="icon-control snap-control"
            title="拖到目标窗口并松开以对齐"
            @mousedown.prevent="handleSnapToWindow"
          >
            ◎
          </button>

          <button
            class="audio-meter"
            :class="{ active: audioEnabled && audioLevel > 0.03, metering: audioEnabled && !audioMeterUnavailable, muted: !audioEnabled || audioMeterUnavailable }"
            :title="audioTitle"
            :disabled="status === 'exporting' || settings.format === 'gif'"
            @click="toggleAudio"
          >
            <span class="audio-bars" :style="audioBarsStyle">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </button>

          <label class="select-field">
            <select v-model="settings.fps" :disabled="isBusy">
              <option :value="15">15</option>
              <option :value="24">24</option>
              <option :value="30">30</option>
              <option :value="60">60</option>
            </select>
            <span class="unit">fps</span>
          </label>

          <select v-model="settings.format" class="format-select optional-format" :disabled="isBusy">
            <option value="mp4">MP4</option>
            <option value="gif">GIF</option>
          </select>

          <select v-model="settings.quality" class="quality-select optional-quality" :disabled="isBusy">
            <option value="high">{{ $t('screenRecorder.qualityHigh') }}</option>
            <option value="standard">{{ $t('screenRecorder.qualityStandard') }}</option>
            <option value="small">{{ $t('screenRecorder.qualitySmall') }}</option>
          </select>

          <div class="dimension-group optional-size">
            <label class="dimension">
              <input :value="captureSize.width" readonly />
            </label>
            <span class="multiply">×</span>
            <label class="dimension">
              <input :value="captureSize.height" readonly />
            </label>
            <span class="unit">px</span>
          </div>
        </div>

        <div class="control-group control-group--actions">
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
            <span class="save-status optional-save-status" :title="result.path">
              {{ result.hasAudio ? '已保存·有声' : '已保存·无声' }}
            </span>
            <button class="control-button" title="打开文件" @click="handleOpenFile">打开</button>
            <button class="control-button" title="打开所在文件夹" @click="handleRevealFile">文件夹</button>
            <button class="control-button" title="重新录制" @click="handleRecordAgain">重录</button>
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
        </div>
      </footer>
    </div>

    <p v-if="ffmpegStatus && !ffmpegStatus.available" class="warning">
      {{ ffmpegStatus.message || $t('screenRecorder.ffmpegMissing') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import {
  getCurrentWindow,
  LogicalSize,
  monitorFromPoint,
  PhysicalPosition
} from '@tauri-apps/api/window';
import { convertFileSrc, invoke } from '@tauri-apps/api/core';
import type { UnlistenFn } from '@tauri-apps/api/event';
import { CloseSmall, Minus } from '@icon-park/vue-next';
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
const audioLevel = ref(0);
const audioMeterUnavailable = ref(false);
let resizeObserver: ResizeObserver | null = null;
let unlistenMoved: UnlistenFn | null = null;
let audioStream: MediaStream | null = null;
let audioContext: AudioContext | null = null;
let audioAnalyser: AnalyserNode | null = null;
let audioData: Uint8Array | null = null;
let audioFrame = 0;

const MIN_CAPTURE_SIZE = 80;
const DEFAULT_WINDOW_WIDTH = 468;
const DEFAULT_WINDOW_HEIGHT = 300;
const MIN_WINDOW_WIDTH = 420;
const MIN_WINDOW_HEIGHT = 260;
const TITLE_BAR_HEIGHT = 40;
const CONTROL_STRIP_HEIGHT = 58;
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
const audioEnabled = computed(() => settings.value.audio && settings.value.format === 'mp4');
const previewUrl = computed(() => (
  status.value === 'completed' && result.value?.path
    ? convertFileSrc(result.value.path)
    : ''
));
const audioBarsStyle = computed<Record<string, string>>(() => {
  const level = audioEnabled.value && !audioMeterUnavailable.value ? audioLevel.value : 0;
  const scale = (base: number, weight: number) =>
    Math.max(0.18, Math.min(1, base + level * weight)).toFixed(3);

  return {
    '--bar-1': scale(0.28, 0.64),
    '--bar-2': scale(0.42, 0.78),
    '--bar-3': scale(0.34, 0.94),
    '--bar-4': scale(0.22, 0.72)
  };
});

const audioTitle = computed(() => {
  if (settings.value.format === 'gif') {
    return 'GIF 不支持音频';
  }
  if (audioMeterUnavailable.value && settings.value.audio) {
    return '音频已开启，但无法读取实时音量；请检查系统录音权限或输入设备';
  }
  if (result.value?.audioDevice) {
    return `已录制音频：${result.value.audioDevice}`;
  }
  if (result.value && !result.value.hasAudio) {
    return '未检测到可用音频设备，导出视频无声音';
  }
  if (ffmpegStatus.value?.available && !ffmpegStatus.value.systemAudioAvailable) {
    const devices = ffmpegStatus.value.audioDevices?.join('、') || '无';
    return settings.value.audio
      ? `未发现系统声音/立体声混音设备；当前可用音频设备：${devices}`
      : '录制音频已关闭';
  }
  return settings.value.audio
    ? '录制音频已开启。系统声音需要启用“立体声混音/Loopback”等设备'
    : '录制音频已关闭';
});

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

const clearPassthrough = async () => {
  await setRecorderPassthroughRegion(null).catch(() => undefined);
};

const scheduleMetricsRefresh = () => {
  window.setTimeout(() => {
    void refreshCaptureMetrics();
  }, 120);
};

const stopAudioMeter = async () => {
  if (audioFrame) {
    cancelAnimationFrame(audioFrame);
    audioFrame = 0;
  }
  audioAnalyser = null;
  audioData = null;
  audioStream?.getTracks().forEach((track) => track.stop());
  audioStream = null;
  if (audioContext) {
    await audioContext.close().catch(() => undefined);
    audioContext = null;
  }
  audioLevel.value = 0;
};

const sampleAudioMeter = () => {
  if (!audioAnalyser || !audioData) {
    audioFrame = 0;
    return;
  }

  audioAnalyser.getByteTimeDomainData(audioData);
  let sum = 0;
  for (const sample of audioData) {
    const value = (sample - 128) / 128;
    sum += value * value;
  }
  const rms = Math.sqrt(sum / audioData.length);
  const normalized = Math.min(1, rms * 8);
  audioLevel.value = audioLevel.value * 0.68 + normalized * 0.32;
  audioFrame = requestAnimationFrame(sampleAudioMeter);
};

const startAudioMeter = async () => {
  if (!audioEnabled.value || audioStream || audioFrame) return;
  if (!navigator.mediaDevices?.getUserMedia) {
    audioMeterUnavailable.value = true;
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      },
      video: false
    });
    audioStream = stream;
    audioContext = new AudioContext();
    audioAnalyser = audioContext.createAnalyser();
    audioAnalyser.fftSize = 512;
    audioAnalyser.smoothingTimeConstant = 0.75;
    audioData = new Uint8Array(audioAnalyser.fftSize);
    audioContext.createMediaStreamSource(stream).connect(audioAnalyser);
    await audioContext.resume().catch(() => undefined);
    audioMeterUnavailable.value = false;
    sampleAudioMeter();
  } catch {
    audioMeterUnavailable.value = true;
    await stopAudioMeter();
  }
};

const startDrag = async (event: MouseEvent) => {
  if (event.button !== 0 || isBusy.value) return;
  await clearPassthrough();
  await appWindow.startDragging().catch((error: any) => {
    modal.msg(error?.message || String(error), 'error');
  });
  scheduleMetricsRefresh();
};

const startResize = async (direction: ResizeDirection) => {
  if (isBusy.value) return;
  await clearPassthrough();
  await appWindow.startResizeDragging(direction).catch((error: any) => {
    modal.msg(error?.message || String(error), 'error');
  });
  scheduleMetricsRefresh();
};

const handleStart = () => runAction(async () => {
  await startAudioMeter();
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
  await clearPassthrough();
  await setRecorderCaptureExcluded(false).catch(() => undefined);
});

const handleRecordAgain = () => {
  void clearPassthrough();
  reset();
  status.value = 'ready';
  result.value = null;
  void setRecorderCaptureExcluded(true).catch(() => undefined);
  void appWindow.setSize(new LogicalSize(DEFAULT_WINDOW_WIDTH, DEFAULT_WINDOW_HEIGHT));
  void nextTick(refreshCaptureMetrics);
  void startAudioMeter();
};

const toggleAudio = () => {
  if (isBusy.value || settings.value.format === 'gif') return;
  settings.value.audio = !settings.value.audio;
  if (settings.value.audio) {
    void startAudioMeter();
  } else {
    void stopAudioMeter();
  }
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
  await clearPassthrough();
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
  await startAudioMeter();

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

watch(audioEnabled, (enabled) => {
  if (enabled) {
    void startAudioMeter();
  } else {
    void stopAudioMeter();
  }
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  unlistenMoved?.();
  window.removeEventListener('resize', refreshCaptureMetrics);
  window.removeEventListener('keydown', handleKeydown);
  void setRecorderPassthroughRegion(null).catch(() => undefined);
  void setRecorderCaptureExcluded(false).catch(() => undefined);
  void stopAudioMeter();
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
  grid-template-rows: 40px minmax(120px, 1fr) minmax(58px, auto);
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
  height: 40px;
  padding: 0 8px 0 14px;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid rgba(210, 216, 224, 0.92);
  border-radius: 6px 6px 0 0;
  cursor: move;
}

.window-title {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  font-size: 15px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.window-actions {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 6px;
  margin-left: 10px;
}

.title-button {
  width: 34px;
  height: 32px;
  color: rgba(32, 36, 44, 0.86);
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition:
    background-color 0.16s ease,
    color 0.16s ease;

  &:hover {
    color: #5d6dfd;
    background: rgba(93, 109, 253, 0.08);
  }

  &--close:hover {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.1);
  }
}

.title-icon {
  display: block;
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

.result-preview {
  position: absolute;
  inset: 1px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0f172a;
  pointer-events: auto;

  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #0f172a;
  }
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
  container-type: inline-size;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(72px, auto);
  align-items: center;
  gap: 8px;
  min-width: 0;
  min-height: 58px;
  overflow: hidden;
  padding: 8px clamp(10px, 2cqw, 16px);
  background: rgba(255, 255, 255, 0.98);
  border-top: 1px solid rgba(210, 216, 224, 0.92);
  box-sizing: border-box;
}

.control-group {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: clamp(5px, 1.3cqw, 12px);
}

.control-group--tools {
  flex: 1 1 auto;
  width: 100%;
  overflow: visible;
}

.control-group--actions {
  flex: 1 1 auto;
  justify-content: flex-end;
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
  width: 54px;
  padding: 0 4px;
}

.quality-select {
  width: 76px;
}

.select-field,
.dimension-group {
  display: inline-flex;
  flex: 0 1 auto;
  align-items: center;
  gap: 5px;
  min-width: 0;
}

.dimension input {
  width: 58px;
  padding: 0 6px;
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
  max-width: 96px;
  color: #334155;
  text-overflow: ellipsis;
}

.record-button,
.control-button,
.icon-control,
.audio-meter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-width: 0;
  padding: 0 7px;
  color: #20242c;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;

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

.snap-control {
  font-size: 18px;
}

.audio-meter {
  width: 38px;
  min-width: 38px;
  padding: 0;
  color: #64748b;
  border: 1px solid rgba(191, 199, 210, 0.78);
  background: rgba(248, 250, 252, 0.85);

  &.active {
    color: #16a34a;
    border-color: rgba(22, 163, 74, 0.36);
    background: rgba(240, 253, 244, 0.92);
  }

  &.metering:not(.active) {
    color: #475569;
  }

  &.muted {
    opacity: 0.55;
  }
}

.audio-bars {
  display: inline-flex;
  align-items: end;
  gap: 3px;
  height: 16px;

  i {
    display: block;
    width: 4px;
    height: 16px;
    background: currentcolor;
    border-radius: 999px;
    transform: scaleY(var(--bar-1, 0.25));
    transform-origin: bottom;
    transition: transform 80ms linear;
  }

  i:nth-child(2) {
    transform: scaleY(var(--bar-2, 0.4));
  }

  i:nth-child(3) {
    transform: scaleY(var(--bar-3, 0.35));
  }

  i:nth-child(4) {
    transform: scaleY(var(--bar-4, 0.22));
  }
}

.record-button {
  flex: 1 1 82px;
  min-width: 72px;
  max-width: 150px;
}

.control-button {
  min-width: 42px;
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

@container (max-width: 560px) {
  .optional-size {
    display: none;
  }

  .optional-save-status {
    display: none;
  }
}

@container (max-width: 460px) {
  .optional-quality,
  .optional-format {
    display: none;
  }

  .record-button {
    min-width: 64px;
  }
}

@container (max-width: 390px) {
  .unit {
    display: none;
  }

  .control-group {
    gap: 4px;
  }
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
