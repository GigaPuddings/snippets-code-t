<template>
  <div class="screen-recorder">
    <div
      class="recorder-shell"
      :class="{
        recording: status === 'recording',
        paused: status === 'paused',
        'snap-aligned': isSnapAligned,
        'snap-fullscreen': isSnapFullscreen
      }"
    >
      <span
        v-for="handle in resizeHandles"
        :key="handle.className"
        class="resize-zone"
        :class="handle.className"
        @mousedown.prevent="startResize(handle.direction)"
      ></span>

      <header ref="titleBarRef" class="title-bar" @mousedown="startDrag">
        <span class="window-title">{{ $t('screenRecorder.title') || '区域录制' }}</span>
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
          <span class="viewport-border top"></span>
          <span class="viewport-border right"></span>
          <span class="viewport-border bottom"></span>
          <span class="viewport-border left"></span>
        </div>
      </main>

      <footer ref="controlStripRef" class="control-strip">
        <div class="control-group control-group--tools">
          <div class="tool-pill">
            <button
              v-if="status === 'ready' || status === 'completed'"
              class="icon-control snap-control"
              title="拖到目标窗口并松开以对齐"
              aria-label="对齐目标窗口"
              @mousedown.prevent="handleSnapToWindow"
            >
              <Radar
                theme="outline"
                size="18"
                :strokeWidth="3"
                strokeLinecap="butt"
              />
            </button>

            <button
              class="audio-meter"
              :class="{ active: isMeterActive && audioLevel > 0.03, metering: isMeterActive && !audioMeterUnavailable, muted: !isMeterActive || audioMeterUnavailable }"
              :title="audioTitle"
              aria-label="系统声音录制状态"
              :disabled="status === 'exporting' || settings.format === 'gif'"
            >
              <span class="audio-bars" :style="audioBarsStyle">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </button>
          </div>

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
              <span class="button-label">{{ status === 'paused' ? $t('screenRecorder.resume') : $t('screenRecorder.pause') }}</span>
            </button>
            <button class="control-button danger" @click="handleStop">
              <span class="button-label">{{ $t('screenRecorder.stop') }}</span>
            </button>
          </template>

          <template v-else-if="status === 'exporting'">
            <div class="export-progress" :title="exportProgressTitle">
              <div class="export-progress__meta">
                <span>{{ exportProgressText }}</span>
                <strong>{{ exportProgressPercent }}%</strong>
              </div>
              <div class="export-progress__track">
                <span :style="{ width: `${exportProgressPercent}%` }"></span>
              </div>
            </div>
            <button class="control-button danger" title="取消导出" @click="handleCancelExport">
              <span class="button-label">取消</span>
            </button>
          </template>

          <template v-else-if="status === 'completed' && result">
            <span class="save-status optional-save-status" :title="result.path">
              {{ result.hasAudio ? '已保存·有声' : '已保存·无声' }}
            </span>
            <button class="control-button" title="打开文件" @click="handleOpenFile">
              <span class="button-label">打开</span>
            </button>
            <button class="control-button" title="打开所在文件夹" @click="handleRevealFile">
              <span class="button-label">文件夹</span>
            </button>
            <button class="control-button" title="重新录制" @click="handleRecordAgain">
              <span class="button-label">重录</span>
            </button>
          </template>

          <button
            v-else
            class="record-button"
            :disabled="ffmpegStatus?.available === false || captureSize.width < MIN_CAPTURE_SIZE || captureSize.height < MIN_CAPTURE_SIZE"
            @click="handleStart"
          >
            <span class="record-dot"></span>
            <span class="record-label">{{ $t('screenRecorder.start') }}</span>
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
  PhysicalPosition,
  PhysicalSize
} from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { CloseSmall, Minus, Radar } from '@icon-park/vue-next';
import modal from '@/utils/modal';
import {
  closeRecorderWindow,
  pickTargetWindow,
  setRecorderCaptureExcluded,
  setRecorderOverlayWindowRegion,
  setRecorderPassthroughRegion
} from './core/recordingApi';
import { useRecordingSession } from './core/useRecordingSession';
import type { RecordingExportProgress, RecordingRegion, RecorderSnapRegion } from './core/types';

type ResizeDirection = 'East' | 'North' | 'NorthEast' | 'NorthWest' | 'South' | 'SouthEast' | 'SouthWest' | 'West';
type AudioLevelEvent = { level?: number };
type PhysicalFrame = { x: number; y: number; width: number; height: number };
type ExportProgressEvent = RecordingExportProgress;

const LOG_PREFIX = '[screen-recorder]';
const appWindow = getCurrentWindow();
const captureHoleRef = ref<HTMLElement | null>(null);
const titleBarRef = ref<HTMLElement | null>(null);
const controlStripRef = ref<HTMLElement | null>(null);
const captureSize = ref({ width: 0, height: 0 });
const isSnapAligned = ref(false);
const isSnapFullscreen = ref(false);
const audioLevel = ref(0);
const audioMeterUnavailable = ref(false);
const exportProgress = ref<ExportProgressEvent | null>(null);
let resizeObserver: ResizeObserver | null = null;
let unlistenMoved: UnlistenFn | null = null;
let unlistenAudioLevel: UnlistenFn | null = null;
let unlistenExportProgress: UnlistenFn | null = null;

const MIN_CAPTURE_SIZE = 80;
const MIN_WINDOW_WIDTH = 420;
const MIN_WINDOW_HEIGHT = 260;
const MIN_SNAPPED_WINDOW_WIDTH = 260;
const MIN_SNAPPED_WINDOW_HEIGHT = 140;
const SNAP_MAX_CORRECTION_PASSES = 8;
const SNAP_RESIDUAL_TOLERANCE = 1;
const SNAP_EDGE_RESIDUAL_TOLERANCE = 0;
const SNAP_TARGET_RIGHT_TRIM = 15;
const SNAP_TARGET_BOTTOM_TRIM = 10;

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
  cancelExport,
  cancel,
  reset
} = useRecordingSession();

const isClosing = ref(false);

const isBusy = computed(() => status.value === 'recording' || status.value === 'paused' || status.value === 'exporting');
const audioEnabled = computed(() => settings.value.audio && settings.value.format === 'mp4');
const isMeterActive = computed(() => audioEnabled.value && status.value === 'recording');
const audioBarsStyle = computed<Record<string, string>>(() => {
  const level = isMeterActive.value && !audioMeterUnavailable.value ? audioLevel.value : 0;
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
    return '音频已开启；实时音量动画不可用不影响导出系统声音';
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
      ? `未发现系统声音/立体声混音设备；不会自动录制麦克风。当前可用音频设备：${devices}`
      : '录制音频已关闭';
  }
  return settings.value.audio
    ? '录制音频已开启。系统声音将通过 WASAPI Loopback 捕获'
    : '录制音频已关闭';
});

const exportProgressPercent = computed(() => {
  const progress = exportProgress.value?.progress ?? 0.03;
  return Math.max(1, Math.min(100, Math.round(progress * 100)));
});

const exportProgressText = computed(() => {
  const progress = exportProgress.value;
  if (!progress) {
    return '正在导出...';
  }
  if (progress.totalFrames && progress.stage === 'frames') {
    return `${progress.message}`;
  }
  return progress.message || '正在导出...';
});

const exportProgressTitle = computed(() => {
  const progress = exportProgress.value;
  if (!progress?.totalFrames) {
    return exportProgressText.value;
  }
  return `${exportProgressText.value} (${progress.currentFrame}/${progress.totalFrames})`;
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
    console.error(`${LOG_PREFIX} action failed`, error);
    if (!isClosing.value) {
      modal.msg(error?.message || String(error), 'error');
    }
  }
};

const toEvenPhysicalSize = (value: number): number =>
  Math.max(2, Math.floor(Math.round(value) / 2) * 2);

const toPhysicalSize = (value: number): number =>
  Math.max(1, Math.round(value));

const getCaptureRegion = async (): Promise<RecordingRegion> => {
  const hole = captureHoleRef.value;
  if (!hole) {
    throw new Error('录制视口尚未准备好');
  }

  const rect = hole.getBoundingClientRect();
  const scale = await appWindow.scaleFactor();
  const innerPosition = await appWindow.innerPosition();
  const physicalWidth = toPhysicalSize(rect.width * scale);
  const physicalHeight = toPhysicalSize(rect.height * scale);

  if (physicalWidth < MIN_CAPTURE_SIZE || physicalHeight < MIN_CAPTURE_SIZE) {
    throw new Error('录制区域太小，请放大录制窗口');
  }

  const region = {
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
  console.info(`${LOG_PREFIX} capture region`, {
    ...region,
    logicalSize: `${region.width}x${region.height}`,
    physicalSize: `${region.physicalWidth}x${region.physicalHeight}`
  });
  return region;
};

const getRecordingRegion = async (): Promise<RecordingRegion> => {
  const region = await getCaptureRegion();
  const physicalWidth = toEvenPhysicalSize(region.physicalWidth);
  const physicalHeight = toEvenPhysicalSize(region.physicalHeight);
  return {
    ...region,
    width: physicalWidth / region.scale,
    height: physicalHeight / region.scale,
    physicalWidth,
    physicalHeight
  };
};

const refreshCaptureMetrics = async () => {
  try {
    const region = await getCaptureRegion();
    captureSize.value = {
      width: region.physicalWidth,
      height: region.physicalHeight
    };
    if (isSnapFullscreen.value) {
      const titleHeight = titleBarRef.value?.getBoundingClientRect().height ?? 0;
      const controlsHeight = controlStripRef.value?.getBoundingClientRect().height ?? 0;
      await setRecorderPassthroughRegion({
        x: Math.round(region.x * region.scale),
        y: Math.round((region.y + titleHeight) * region.scale),
        width: region.physicalWidth,
        height: Math.max(
          1,
          region.physicalHeight - Math.round((titleHeight + controlsHeight) * region.scale)
        )
      }).catch(() => undefined);
      return;
    }
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
  await setRecorderOverlayWindowRegion(null).catch(() => undefined);
};

const resetSnapAlignment = () => {
  isSnapAligned.value = false;
  isSnapFullscreen.value = false;
};

const scheduleMetricsRefresh = () => {
  window.setTimeout(() => {
    void refreshCaptureMetrics();
  }, 120);
};

const waitForWindowLayout = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

const forceTransparentRepaint = async () => {
  document.documentElement.classList.add('screen-recorder-repaint');
  await waitForWindowLayout();
  document.documentElement.classList.remove('screen-recorder-repaint');
  await waitForWindowLayout();
};

const pulseWindowPassthrough = async () => {
  await setRecorderPassthroughRegion(null).catch(() => undefined);
  await appWindow.setIgnoreCursorEvents(true).catch(() => undefined);
  await waitForWindowLayout();
  await appWindow.setIgnoreCursorEvents(false).catch(() => undefined);
  await refreshCaptureMetrics();
};

const getOuterFrame = async (): Promise<PhysicalFrame> => {
  const [position, size] = await Promise.all([
    appWindow.outerPosition(),
    appWindow.outerSize()
  ]);
  return {
    x: position.x,
    y: position.y,
    width: size.width,
    height: size.height
  };
};

const refreshOverlayWindowRegion = async () => {
  if (!isSnapFullscreen.value) {
    await setRecorderOverlayWindowRegion(null).catch(() => undefined);
    return;
  }

  const frame = await getOuterFrame();
  const scale = await appWindow.scaleFactor();
  const titleHeight = titleBarRef.value?.getBoundingClientRect().height ?? 0;
  const controlsHeight = controlStripRef.value?.getBoundingClientRect().height ?? 0;
  await setRecorderOverlayWindowRegion({
    width: frame.width,
    height: frame.height,
    topHeight: Math.round(titleHeight * scale),
    bottomHeight: Math.round(controlsHeight * scale)
  }).catch(() => undefined);
};

const clampFrameToMonitor = (frame: PhysicalFrame, monitorFrame: PhysicalFrame): PhysicalFrame => {
  const width = Math.min(frame.width, monitorFrame.width);
  const height = Math.min(frame.height, monitorFrame.height);
  const maxX = monitorFrame.x + monitorFrame.width - width;
  const maxY = monitorFrame.y + monitorFrame.height - height;
  return {
    x: Math.min(Math.max(frame.x, monitorFrame.x), maxX),
    y: Math.min(Math.max(frame.y, monitorFrame.y), maxY),
    width,
    height
  };
};

const isTargetCoveringMonitor = (
  target: RecorderSnapRegion,
  monitorFrame: PhysicalFrame | null,
  scale: number
): boolean => {
  if (!monitorFrame) return false;
  const tolerance = Math.max(8, Math.round(8 * scale));
  const monitorRight = monitorFrame.x + monitorFrame.width;
  const monitorBottom = monitorFrame.y + monitorFrame.height;
  const targetRight = target.screenX + target.physicalWidth;
  const targetBottom = target.screenY + target.physicalHeight;
  return (
    target.screenX <= monitorFrame.x + tolerance &&
    target.screenY <= monitorFrame.y + tolerance &&
    targetRight >= monitorRight - tolerance &&
    targetBottom >= monitorBottom - tolerance
  );
};

const isTargetTouchingMonitorEdge = (
  target: RecorderSnapRegion,
  monitorFrame: PhysicalFrame | null,
  scale: number
): boolean => {
  if (!monitorFrame) return false;
  const tolerance = Math.max(8, Math.round(8 * scale));
  return (
    target.screenX <= monitorFrame.x + tolerance ||
    target.screenY <= monitorFrame.y + tolerance ||
    target.screenX + target.physicalWidth >= monitorFrame.x + monitorFrame.width - tolerance ||
    target.screenY + target.physicalHeight >= monitorFrame.y + monitorFrame.height - tolerance
  );
};

const trimSnappedTarget = (
  target: RecorderSnapRegion,
  scale: number,
  shouldTrim: boolean
): RecorderSnapRegion => {
  if (!shouldTrim) return target;
  const widthTrim = Math.round(SNAP_TARGET_RIGHT_TRIM * scale);
  const heightTrim = Math.round(SNAP_TARGET_BOTTOM_TRIM * scale);
  return {
    ...target,
    physicalWidth: Math.max(MIN_CAPTURE_SIZE, target.physicalWidth - widthTrim),
    physicalHeight: Math.max(MIN_CAPTURE_SIZE, target.physicalHeight - heightTrim)
  };
};

const setOuterFrame = async (frame: PhysicalFrame) => {
  await appWindow.setSize(new PhysicalSize(Math.round(frame.width), Math.round(frame.height)));
  await appWindow.setPosition(new PhysicalPosition(Math.round(frame.x), Math.round(frame.y)));
  await waitForWindowLayout();
};

const getSnapLayout = async () => {
  const [actualRegion, currentFrame] = await Promise.all([
    getCaptureRegion(),
    getOuterFrame()
  ]);
  return { actualRegion, currentFrame };
};

const getSnappedWrapFrameForTarget = async (
  target: RecorderSnapRegion,
  minPhysicalWidth: number,
  minPhysicalHeight: number
): Promise<PhysicalFrame> => {
  const { actualRegion, currentFrame } = await getSnapLayout();
  const leftInset = actualRegion.screenX - currentFrame.x;
  const topInset = actualRegion.screenY - currentFrame.y;
  const horizontalChrome = Math.max(0, currentFrame.width - actualRegion.physicalWidth);
  const verticalChrome = Math.max(0, currentFrame.height - actualRegion.physicalHeight);

  return {
    x: target.screenX - leftInset,
    y: target.screenY - topInset,
    width: Math.max(minPhysicalWidth, target.physicalWidth + horizontalChrome),
    height: Math.max(minPhysicalHeight, target.physicalHeight + verticalChrome)
  };
};

const stopAudioMeter = async () => {
  unlistenAudioLevel?.();
  unlistenAudioLevel = null;
  audioLevel.value = 0;
};

const startAudioMeter = async () => {
  if (!audioEnabled.value || unlistenAudioLevel) return;
  try {
    console.info(`${LOG_PREFIX} backend audio meter listening`);
    unlistenAudioLevel = await listen<AudioLevelEvent>('screen_recorder_audio_level', (event) => {
      if (!isMeterActive.value) {
        audioLevel.value = 0;
        return;
      }
      const next = Math.max(0, Math.min(1, Number(event.payload?.level ?? 0)));
      audioLevel.value = audioLevel.value * 0.38 + next * 0.62;
    });
    audioMeterUnavailable.value = false;
  } catch (error) {
    console.error(`${LOG_PREFIX} audio meter failed`, error);
    audioMeterUnavailable.value = true;
  }
};

const startDrag = async (event: MouseEvent) => {
  if (event.button !== 0 || isBusy.value) return;
  resetSnapAlignment();
  await appWindow.setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT)).catch(() => undefined);
  await clearPassthrough();
  await appWindow.startDragging().catch((error: any) => {
    modal.msg(error?.message || String(error), 'error');
  });
  scheduleMetricsRefresh();
};

const startResize = async (direction: ResizeDirection) => {
  if (isBusy.value) return;
  resetSnapAlignment();
  await appWindow.setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT)).catch(() => undefined);
  await clearPassthrough();
  await appWindow.startResizeDragging(direction).catch((error: any) => {
    modal.msg(error?.message || String(error), 'error');
  });
  scheduleMetricsRefresh();
};

const handleStart = () => runAction(async () => {
  console.info(`${LOG_PREFIX} handle start`);
  exportProgress.value = null;
  await startAudioMeter();
  await setRecorderCaptureExcluded(true).catch(() => undefined);
  await refreshCaptureMetrics();
  await begin(await getRecordingRegion());
});

const handlePause = () => runAction(async () => {
  console.info(`${LOG_PREFIX} handle pause`);
  await pause();
});

const handleResume = () => runAction(async () => {
  console.info(`${LOG_PREFIX} handle resume`);
  await resume(await getRecordingRegion());
});

const handleStop = () => runAction(async () => {
  console.info(`${LOG_PREFIX} handle stop/export`);
  exportProgress.value = {
    stage: 'encode',
    message: settings.value.format === 'gif' ? '准备生成 GIF 帧' : '准备导出 MP4',
    progress: 0.01,
    currentFrame: 0
  };
  await stop();
  audioLevel.value = 0;
  await exportFile();
  await refreshCaptureMetrics();
  await setRecorderCaptureExcluded(false).catch(() => undefined);
});

const handleCancelExport = () => runAction(async () => {
  console.info(`${LOG_PREFIX} handle cancel export`);
  await cancelExport();
  exportProgress.value = null;
  await refreshCaptureMetrics();
});

const handleRecordAgain = () => {
  const previousSettings = { ...settings.value };
  void clearPassthrough();
  reset();
  settings.value = previousSettings;
  status.value = 'ready';
  result.value = null;
  exportProgress.value = null;
  void setRecorderCaptureExcluded(true).catch(() => undefined);
  void nextTick(refreshCaptureMetrics);
  void startAudioMeter();
};

const fitRecorderToWindow = async (target: RecorderSnapRegion) => {
  const monitor = await monitorFromPoint(target.screenX, target.screenY);
  const scale = monitor?.scaleFactor || await appWindow.scaleFactor();
  const monitorRect = monitor
    ? {
        x: monitor.position.x,
        y: monitor.position.y,
        width: monitor.size.width,
        height: monitor.size.height
      }
    : null;
  const isMonitorCoveringTarget = isTargetCoveringMonitor(target, monitorRect, scale);
  const isMonitorEdgeTarget = isTargetTouchingMonitorEdge(target, monitorRect, scale);
  isSnapAligned.value = true;
  isSnapFullscreen.value = isMonitorEdgeTarget;
  await nextTick();
  await waitForWindowLayout();

  await appWindow.setMinSize(
    isMonitorEdgeTarget
      ? new LogicalSize(MIN_SNAPPED_WINDOW_WIDTH, MIN_SNAPPED_WINDOW_HEIGHT)
      : new LogicalSize(MIN_SNAPPED_WINDOW_WIDTH, MIN_WINDOW_HEIGHT)
  ).catch(() => undefined);

  const minPhysicalWidth = Math.round(MIN_SNAPPED_WINDOW_WIDTH * scale);
  const minPhysicalHeight = Math.round(
    (isMonitorEdgeTarget ? MIN_SNAPPED_WINDOW_HEIGHT : MIN_WINDOW_HEIGHT) * scale
  );
  const snapTarget = trimSnappedTarget(target, scale, !isMonitorCoveringTarget);

  const initialFrame = isMonitorEdgeTarget && monitorRect
    ? {
        x: Math.max(monitorRect.x, snapTarget.screenX),
        y: Math.max(monitorRect.y, snapTarget.screenY),
        width: Math.max(minPhysicalWidth, Math.min(snapTarget.physicalWidth, monitorRect.width)),
        height: Math.max(minPhysicalHeight, Math.min(snapTarget.physicalHeight, monitorRect.height))
      }
    : await getSnappedWrapFrameForTarget(
      snapTarget,
      minPhysicalWidth,
      minPhysicalHeight
    );
  try {
    await setOuterFrame(
      monitorRect && isMonitorEdgeTarget
        ? clampFrameToMonitor(initialFrame, monitorRect)
        : initialFrame
    );
    await nextTick();
    await refreshOverlayWindowRegion();

    if (isMonitorEdgeTarget) {
      const { actualRegion } = await getSnapLayout();
      console.info(`${LOG_PREFIX} snap edge result`, {
        target,
        snapTarget,
        actualRegion,
        monitorCovering: isMonitorCoveringTarget,
        monitorEdge: isMonitorEdgeTarget
      });
      return;
    }

    const correctCaptureToTarget = async (): Promise<boolean> => {
      const { actualRegion, currentFrame } = await getSnapLayout();
      const residual = {
        x: snapTarget.screenX - actualRegion.screenX,
        y: snapTarget.screenY - actualRegion.screenY,
        width: snapTarget.physicalWidth - actualRegion.physicalWidth,
        height: snapTarget.physicalHeight - actualRegion.physicalHeight
      };
      if (
        Math.abs(residual.x) <= SNAP_EDGE_RESIDUAL_TOLERANCE &&
        Math.abs(residual.y) <= SNAP_EDGE_RESIDUAL_TOLERANCE &&
        Math.abs(residual.width) <= SNAP_RESIDUAL_TOLERANCE &&
        Math.abs(residual.height) <= SNAP_RESIDUAL_TOLERANCE
      ) {
        return true;
      }

      const correctedFrame = {
        x: currentFrame.x + residual.x,
        y: currentFrame.y + residual.y,
        width: Math.max(minPhysicalWidth, currentFrame.width + residual.width),
        height: Math.max(minPhysicalHeight, currentFrame.height + residual.height)
      };
      await setOuterFrame(
        monitorRect && isMonitorEdgeTarget
          ? clampFrameToMonitor(correctedFrame, monitorRect)
          : correctedFrame
      );
      return false;
    };

    for (let pass = 0; pass < SNAP_MAX_CORRECTION_PASSES; pass += 1) {
      const settled = await correctCaptureToTarget();
      if (settled) {
        break;
      }
    }

    const { actualRegion } = await getSnapLayout();
    console.info(`${LOG_PREFIX} snap result`, {
      target,
      snapTarget,
      actualRegion,
      residual: {
        left: actualRegion.screenX - snapTarget.screenX,
        top: actualRegion.screenY - snapTarget.screenY,
        right:
          actualRegion.screenX +
          actualRegion.physicalWidth -
          (snapTarget.screenX + snapTarget.physicalWidth),
        bottom:
          actualRegion.screenY +
          actualRegion.physicalHeight -
          (snapTarget.screenY + snapTarget.physicalHeight)
      },
      monitorCovering: isMonitorCoveringTarget
    });
  } catch (error) {
    console.warn(`${LOG_PREFIX} snap correction skipped`, error);
  } finally {
    await pulseWindowPassthrough();
    await refreshCaptureMetrics();
    await refreshOverlayWindowRegion();
    await forceTransparentRepaint();
    await appWindow.setFocus().catch(() => undefined);
  }
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
  isClosing.value = true;
  try {
    if (status.value === 'exporting') {
      await cancelExport().catch(() => undefined);
    } else {
      await cancel();
    }
    await setRecorderPassthroughRegion(null).catch(() => undefined);
    await setRecorderCaptureExcluded(false).catch(() => undefined);
  } catch {
    // Ignore close cleanup failures; backend also cleans stale sessions on next start.
  }
  await closeRecorderWindow();
};

const handleOpenFile = async () => {
  if (!result.value) return;
  await refreshCaptureMetrics();
  await invoke('open_file_with_default_app', { filePath: result.value.path });
};

const handleRevealFile = async () => {
  if (!result.value) return;
  await refreshCaptureMetrics();
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
  await refreshFfmpegStatus().catch(() => undefined);
  await nextTick();
  await refreshCaptureMetrics();
  await startAudioMeter();
  await nextTick();
  await appWindow.emit('screen_recorder_ready');
  unlistenExportProgress = await listen<ExportProgressEvent>('screen_recorder_export_progress', (event) => {
    exportProgress.value = event.payload;
  }).catch(() => null);

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

watch(status, (nextStatus) => {
  if (nextStatus !== 'recording') {
    audioLevel.value = 0;
  }
  if (nextStatus !== 'exporting') {
    exportProgress.value = null;
  }
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  unlistenMoved?.();
  unlistenExportProgress?.();
  window.removeEventListener('resize', refreshCaptureMetrics);
  window.removeEventListener('keydown', handleKeydown);
  void setRecorderPassthroughRegion(null).catch(() => undefined);
  void setRecorderOverlayWindowRegion(null).catch(() => undefined);
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

:global(html.screen-recorder-repaint) {
  opacity: 0.9999;
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
  grid-template-rows: 38px minmax(120px, 1fr) minmax(60px, auto);
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
  height: 38px;
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
  font-size: 14px;
  font-weight: 650;
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
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(6px, 1.8cqw, 16px);
  min-width: 0;
  min-height: 60px;
  overflow: hidden;
  padding: 10px clamp(8px, 2cqw, 16px);
  background: rgba(255, 255, 255, 0.98);
  border-top: 1px solid rgba(210, 216, 224, 0.92);
  box-sizing: border-box;
}

.recorder-shell.snap-aligned {
  grid-template-rows: 38px minmax(80px, 1fr) minmax(46px, auto);

  .viewport-mask {
    pointer-events: none;
  }

  .control-strip {
    min-height: 46px;
    gap: 6px;
    padding: 6px 8px;
    grid-template-columns: minmax(0, 1fr);
  }

  .control-group {
    flex-wrap: wrap;
    gap: 6px;
  }

  .control-group--actions {
    justify-content: flex-start;
  }

  .optional-save-status {
    display: none;
  }

  select,
  input,
  button {
    height: 30px;
  }

  select {
    width: 56px;
    padding: 0 6px;
  }

  .record-button {
    min-width: 88px;
    height: 32px;
    padding: 0 10px;
  }

  .control-button {
    min-width: 42px;
    max-width: 56px;
    padding: 0 8px;
  }

  .dimension input {
    width: 54px;
  }

  .quality-select {
    width: 76px;
  }
}

.recorder-shell.snap-fullscreen {
  display: block;

  .title-bar {
    position: absolute;
    inset: 0 0 auto;
    z-index: 6;
    border-radius: 0;
  }

  .capture-viewport {
    position: absolute;
    inset: 0;
  }

  .capture-frame,
  .capture-hole {
    inset: 0;
  }

  .viewport-mask,
  .viewport-border {
    display: none;
  }

  .control-strip {
    position: absolute;
    inset: auto 0 0;
    z-index: 6;
    grid-template-columns: minmax(0, 1fr) auto;
  }
}

.control-group {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: clamp(7px, 1.4cqw, 14px);
}

.control-group--tools {
  flex: 1 1 auto;
  width: 100%;
  overflow: hidden;
}

.control-group--actions {
  flex: 0 0 auto;
  justify-content: flex-end;
  overflow: hidden;
}

select,
input,
button {
  height: 32px;
  box-sizing: border-box;
  font: inherit;
}

select,
input {
  color: #1f2733;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(188, 198, 211, 0.82);
  border-radius: 6px;
  outline: none;
}

select {
  width: 62px;
  padding: 0 8px;
}

.quality-select {
  width: 88px;
}

.select-field,
.dimension-group {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.select-field {
  padding: 3px 8px 3px 3px;
  background: rgba(246, 248, 251, 0.92);
  border: 1px solid rgba(214, 220, 229, 0.86);
  border-radius: 8px;
}

.dimension input {
  width: 62px;
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

.export-progress {
  display: grid;
  flex: 0 1 180px;
  width: min(34cqw, 220px);
  min-width: 126px;
  gap: 5px;
}

.export-progress__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
  color: #334155;
  font-size: 12px;
  line-height: 1;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    flex: 0 0 auto;
    color: #b42318;
    font-size: 12px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }
}

.export-progress__track {
  position: relative;
  height: 5px;
  overflow: hidden;
  background: rgba(226, 232, 240, 0.92);
  border-radius: 999px;

  span {
    position: absolute;
    inset: 0 auto 0 0;
    min-width: 5px;
    background: linear-gradient(90deg, #ef4444, #b42318);
    border-radius: inherit;
    transition: width 160ms ease;
  }
}

.record-button,
.control-button,
.icon-control,
.audio-meter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 0;
  padding: 0 10px;
  color: #20242c;
  background: rgba(246, 248, 251, 0.92);
  border: 1px solid rgba(214, 220, 229, 0.86);
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background: rgba(239, 243, 248, 0.98);
    border-color: rgba(171, 183, 199, 0.92);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.tool-pill {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  overflow: hidden;
  background: rgba(246, 248, 251, 0.92);
  border: 1px solid rgba(214, 220, 229, 0.86);
  border-radius: 9px;
}

.icon-control {
  min-width: 34px;
  width: 34px;
  padding: 0;
  line-height: 1;
  background: transparent;
  border: 0;
  border-radius: 0;
}

.snap-control {
  border-right: 1px solid rgba(214, 220, 229, 0.86);
}

.audio-meter {
  width: 42px;
  min-width: 42px;
  padding: 0;
  color: #64748b;
  background: transparent;
  border: 0;
  border-radius: 0;

  &.active {
    color: #16a34a;
    background: rgba(236, 253, 245, 0.86);
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
  flex: 0 0 auto;
  min-width: 104px;
  max-width: 168px;
  height: 36px;
  padding: 0 14px;
  color: #fff;
  background: #b42318;
  border-color: rgba(180, 35, 24, 0.85);

  &:hover {
    background: #a11f16;
    border-color: #a11f16;
  }
}

.control-button {
  flex: 0 0 auto;
  min-width: 48px;
  max-width: 76px;
}

.button-label,
.record-label {
  overflow: hidden;
  text-overflow: ellipsis;
}

.record-dot {
  flex: 0 0 auto;
  width: 11px;
  height: 11px;
  background: currentcolor;
  border-radius: 50%;
}

.control-button.danger {
  color: #b42318;
}

@container (max-width: 720px) {
  .optional-size {
    display: none;
  }
}

@container (max-width: 680px) {
  .recorder-shell.snap-aligned {
    .optional-size {
      display: none;
    }
  }
}

@container (max-width: 620px) {
  .optional-save-status {
    display: none;
  }

  .optional-quality {
    display: none;
  }
}

@container (max-width: 560px) {
  .recorder-shell.snap-aligned {
    .optional-quality {
      display: none;
    }
  }
}

@container (max-width: 520px) {
  .optional-format {
    display: none;
  }

  .control-group {
    gap: 6px;
  }

  .select-field {
    padding-right: 6px;
  }

  select {
    width: 56px;
    padding: 0 6px;
  }

  .record-button {
    min-width: 88px;
    padding: 0 10px;
  }

  .export-progress {
    width: min(42cqw, 160px);
    min-width: 104px;
  }
}

@container (max-width: 420px) {
  .recorder-shell.snap-aligned {
    .optional-format,
    .unit {
      display: none;
    }
  }
}

@container (max-width: 450px) {
  .unit {
    display: none;
  }

  .control-group {
    gap: 4px;
  }

  .tool-pill {
    max-width: 72px;
  }

  .control-button {
    min-width: 42px;
    max-width: 56px;
    padding: 0 8px;
  }

  .export-progress__meta span {
    max-width: 82px;
  }
}

@container (max-width: 410px) {
  .record-label {
    display: none;
  }

  .record-button {
    width: 40px;
    min-width: 40px;
    padding: 0;
  }

  .control-button {
    min-width: 38px;
    max-width: 48px;
    padding: 0 6px;
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
