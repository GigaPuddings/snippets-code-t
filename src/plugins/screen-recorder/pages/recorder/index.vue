<template>
  <div class="screen-recorder">
    <div
      class="recorder-shell"
      :class="{
        recording: status === 'recording',
        paused: status === 'paused',
        editing: status === 'editing',
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

      <header
        ref="titleBarRef"
        class="title-bar"
        @mouseenter="focusRecorderWindow"
        @mousedown="startDrag"
      >
        <span class="window-title">
          {{ $t('screenRecorder.title') }}
        </span>
        <div
          v-if="showTopControlStrip && status !== 'editing'"
          class="top-control-strip"
          @mouseenter="focusRecorderWindow"
          @mousedown.stop
        >
          <span
            v-if="status === 'recording' || status === 'paused'"
            class="time"
          >
            {{ timeText }}
          </span>
          <span v-else-if="status === 'exporting'" class="save-status">
            {{ exportProgressPercent }}%
          </span>
          <span v-else-if="status === 'completed'" class="save-status">
            {{
              result?.hasAudio
                ? $t('screenRecorder.savedWithAudio')
                : $t('screenRecorder.savedWithoutAudio')
            }}
          </span>
          <span v-else class="save-status">
            {{ captureSize.width }}×{{ captureSize.height }}
          </span>

          <template v-if="status === 'recording' || status === 'paused'">
            <button
              class="control-button"
              :title="
                status === 'paused' ? shortcutResumeTitle : shortcutPauseTitle
              "
              @click="status === 'paused' ? handleResume() : handlePause()"
            >
              <span class="button-label">
                {{
                  status === 'paused'
                    ? $t('screenRecorder.resume')
                    : $t('screenRecorder.pause')
                }}
              </span>
            </button>
            <button
              class="control-button danger"
              :title="shortcutStopTitle"
              @click="handleStop"
            >
              <span class="button-label">{{ $t('screenRecorder.stop') }}</span>
            </button>
          </template>

          <template v-else-if="status === 'exporting'">
            <button
              class="control-button danger"
              :title="$t('screenRecorder.cancelExport')"
              @click="handleCancelExport"
            >
              <span class="button-label">
                {{ $t('screenRecorder.cancel') }}
              </span>
            </button>
          </template>

          <template v-else-if="status === 'completed' && result">
            <button
              class="control-button"
              :title="$t('screenRecorder.openFile')"
              @click="handleOpenFile"
            >
              <span class="button-label">{{ $t('screenRecorder.open') }}</span>
            </button>
            <button
              class="control-button"
              :title="$t('screenRecorder.recordAgain')"
              @click="handleRecordAgain"
            >
              <span class="button-label">{{ $t('screenRecorder.again') }}</span>
            </button>
          </template>

          <button
            v-else
            class="record-button"
            :disabled="
              ffmpegStatus?.available === false ||
              captureSize.width < MIN_CAPTURE_SIZE ||
              captureSize.height < MIN_CAPTURE_SIZE
            "
            :title="shortcutStartTitle"
            @click="handleStart"
          >
            <span class="record-dot"></span>
            <span class="record-label">{{ $t('screenRecorder.start') }}</span>
          </button>
        </div>
        <div class="window-actions" @mousedown.stop>
          <button
            class="title-button title-button--window"
            :title="$t('screenRecorder.minimize')"
            @click="handleMinimize"
          >
            <Minus
              class="title-icon"
              theme="outline"
              size="20"
              :strokeWidth="3"
              strokeLinecap="butt"
            />
          </button>
          <button
            class="title-button title-button--close"
            :title="$t('common.close')"
            @click="handleClose"
          >
            <CloseSmall
              class="title-icon"
              theme="outline"
              size="18"
              :strokeWidth="3"
              strokeLinecap="butt"
            />
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

      <footer
        ref="controlStripRef"
        class="control-strip"
        :class="{ editing: status === 'editing' }"
        @mouseenter="focusRecorderWindow"
      >
        <div
          v-if="status !== 'editing'"
          class="control-group control-group--tools"
        >
          <div class="tool-pill">
            <button
              v-if="status === 'ready' || status === 'completed'"
              class="icon-control snap-control"
              :title="$t('screenRecorder.snapToWindow')"
              :aria-label="$t('screenRecorder.snapToWindow')"
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
              :class="{
                active: isMeterActive && audioLevel > 0.03,
                'audio-on': audioEnabled,
                metering: isMeterActive && !audioMeterUnavailable,
                muted: !audioEnabled || audioMeterUnavailable
              }"
              :title="audioTitle"
              :aria-label="$t('screenRecorder.audioStatus')"
              :aria-pressed="settings.audio && settings.format === 'mp4'"
              :disabled="isBusy || settings.format === 'gif'"
              @click="toggleAudio"
            >
              <span class="audio-bars" :style="audioBarsStyle">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </button>

            <button
              class="icon-control cursor-control"
              :class="{ active: settings.showCursor }"
              :title="cursorTitle"
              :aria-label="$t('screenRecorder.showCursor')"
              :aria-pressed="settings.showCursor"
              :disabled="isBusy"
              @click="toggleCursor"
            >
              <Mouse
                theme="outline"
                size="17"
                :strokeWidth="3"
                strokeLinecap="butt"
              />
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

          <select
            v-model="settings.format"
            class="format-select optional-format"
            :disabled="isBusy"
          >
            <option value="mp4">MP4</option>
            <option value="gif">GIF</option>
          </select>

          <select
            v-model="settings.quality"
            class="quality-select optional-quality"
            :disabled="isBusy"
          >
            <option value="high">{{ $t('screenRecorder.qualityHigh') }}</option>
            <option value="standard">
              {{ $t('screenRecorder.qualityStandard') }}
            </option>
            <option value="small">
              {{ $t('screenRecorder.qualitySmall') }}
            </option>
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
            <button
              class="control-button"
              :title="
                status === 'paused' ? shortcutResumeTitle : shortcutPauseTitle
              "
              @click="status === 'paused' ? handleResume() : handlePause()"
            >
              <span class="button-label">
                {{
                  status === 'paused'
                    ? $t('screenRecorder.resume')
                    : $t('screenRecorder.pause')
                }}
              </span>
            </button>
            <button
              class="control-button danger"
              :title="shortcutStopTitle"
              @click="handleStop"
            >
              <span class="button-label">{{ $t('screenRecorder.stop') }}</span>
            </button>
          </template>

          <template v-else-if="status === 'editing'">
            <button
              class="control-button"
              type="button"
              @click="handleDiscardClip"
            >
              <span class="button-label">
                {{ $t('screenRecorder.discardClip') }}
              </span>
            </button>
            <span
              class="clip-current-time"
              :title="$t('screenRecorder.previewCurrentTime')"
            >
              {{ clipCurrentTimeText }}
            </span>
            <div class="clip-output-actions">
              <button
                class="control-button clip-copy-button"
                type="button"
                @click="handleCopyClip"
              >
                <span class="button-label">
                  {{ $t('screenRecorder.copyClip') }}
                </span>
              </button>
              <button
                class="record-button clip-export-button"
                type="button"
                @click="handleExportClip"
              >
                <span class="record-label">
                  {{ $t('screenRecorder.exportClip') }}
                </span>
              </button>
            </div>
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
            <button
              class="control-button danger"
              :title="$t('screenRecorder.cancelExport')"
              @click="handleCancelExport"
            >
              <span class="button-label">
                {{ $t('screenRecorder.cancel') }}
              </span>
            </button>
          </template>

          <template v-else-if="status === 'completed' && result">
            <span class="save-status optional-save-status" :title="result.path">
              {{
                result.hasAudio
                  ? $t('screenRecorder.savedWithAudio')
                  : $t('screenRecorder.savedWithoutAudio')
              }}
            </span>
            <button
              class="control-button"
              :title="$t('screenRecorder.openFile')"
              @click="handleOpenFile"
            >
              <span class="button-label">{{ $t('screenRecorder.open') }}</span>
            </button>
            <button
              class="control-button"
              :title="$t('screenRecorder.openFolder')"
              @click="handleRevealFile"
            >
              <span class="button-label">
                {{ $t('screenRecorder.folder') }}
              </span>
            </button>
            <button
              class="control-button"
              :title="$t('screenRecorder.recordAgain')"
              @click="handleRecordAgain"
            >
              <span class="button-label">{{ $t('screenRecorder.again') }}</span>
            </button>
          </template>

          <button
            v-else
            class="record-button"
            :disabled="
              ffmpegStatus?.available === false ||
              captureSize.width < MIN_CAPTURE_SIZE ||
              captureSize.height < MIN_CAPTURE_SIZE
            "
            :title="shortcutStartTitle"
            @click="handleStart"
          >
            <span class="record-dot"></span>
            <span class="record-label">{{ $t('screenRecorder.start') }}</span>
          </button>
        </div>
      </footer>

      <RecordingClipEditor
        v-if="status === 'editing'"
        :preview="clipPreview"
        :loading="clipPreviewLoading"
        :duration-ms="elapsedMs"
        :start-ms="trimStartMs"
        :end-ms="trimEndMs"
        @update:start-ms="trimStartMs = $event"
        @update:end-ms="trimEndMs = $event"
        @preview-time-change="previewTimeMs = $event"
      />
    </div>

    <p v-if="ffmpegStatus && !ffmpegStatus.available" class="warning">
      {{ ffmpegStatus.message || $t('screenRecorder.ffmpegMissing') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  getCurrentWindow,
  LogicalSize,
  monitorFromPoint,
  PhysicalPosition,
  PhysicalSize
} from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { CloseSmall, Minus, Mouse, Radar } from '@icon-park/vue-next';
import modal from '@/utils/modal';
import { logger } from '@/utils/logger';
import {
  closeRecorderWindow,
  copyRecordingFileToClipboard,
  pickTargetWindow,
  setRecorderCaptureExcluded,
  setRecorderOverlayWindowRegion,
  setRecorderPassthroughRegion
} from './core/recordingApi';
import { useRecordingSession } from './core/useRecordingSession';
import RecordingClipEditor from './components/RecordingClipEditor.vue';
import type {
  RecordingClipPreview,
  RecordingExportProgress,
  RecordingRegion,
  RecorderSnapRegion
} from './core/types';

type ResizeDirection =
  | 'East'
  | 'North'
  | 'NorthEast'
  | 'NorthWest'
  | 'South'
  | 'SouthEast'
  | 'SouthWest'
  | 'West';
type AudioLevelEvent = { level?: number };
type PhysicalFrame = { x: number; y: number; width: number; height: number };
type ExportProgressEvent = RecordingExportProgress;
type PassthroughFrame = { x: number; y: number; width: number; height: number };
type RecorderShortcutAction = 'start' | 'pause' | 'stop';

const LOG_PREFIX = '[screen-recorder]';
const CONTROL_SHORTCUTS = {
  start: 'R',
  pause: 'P',
  stop: 'S'
} as const;
const { t } = useI18n();
const appWindow = getCurrentWindow();
const captureHoleRef = ref<HTMLElement | null>(null);
const titleBarRef = ref<HTMLElement | null>(null);
const controlStripRef = ref<HTMLElement | null>(null);
const captureSize = ref({ width: 0, height: 0 });
const isSnapAligned = ref(false);
const isSnapFullscreen = ref(false);
const isBottomEdgeSnapped = ref(false);
const fullscreenCaptureRegion = ref<RecordingRegion | null>(null);
const audioLevel = ref(0);
const audioMeterUnavailable = ref(false);
const exportProgress = ref<ExportProgressEvent | null>(null);
let resizeObserver: ResizeObserver | null = null;
let unlistenMoved: UnlistenFn | null = null;
let unlistenResized: UnlistenFn | null = null;
let unlistenAudioLevel: UnlistenFn | null = null;
let unlistenExportProgress: UnlistenFn | null = null;
let metricsRefreshFrame: number | null = null;
let windowEdgeRefreshFrame: number | null = null;
let metricsRefreshInFlight: Promise<void> | null = null;
let pendingPassthroughRegion: PassthroughFrame | null = null;
let lastPassthroughRegion: PassthroughFrame | null = null;
let fullscreenRestoreFrame: PhysicalFrame | null = null;
let fullscreenRestoreInFlight: Promise<void> | null = null;
let clipEditorRestoreFrame: PhysicalFrame | null = null;
let clipEditorResizeInFlight: Promise<void> | null = null;

const MIN_CAPTURE_SIZE = 80;
const MIN_WINDOW_WIDTH = 400;
const MIN_WINDOW_HEIGHT = 240;
const MIN_EDITOR_WINDOW_HEIGHT = 360;
const EDITOR_WINDOW_WIDTH = 720;
const EDITOR_WINDOW_MAX_HEIGHT = 480;
const EDITOR_WINDOW_MARGIN = 24;
const MIN_SNAPPED_WINDOW_WIDTH = 260;
const MIN_SNAPPED_WINDOW_HEIGHT = 140;
const FULLSCREEN_CONTROL_WIDTH = 720;
const FULLSCREEN_CONTROL_HEIGHT = 56;
const FULLSCREEN_CONTROL_MARGIN = 12;
const SNAP_MAX_CORRECTION_PASSES = 3;
const SNAP_RESIDUAL_TOLERANCE = 2;
const SNAP_EDGE_RESIDUAL_TOLERANCE = 0;
const SNAP_TARGET_RIGHT_TRIM = 15;
const SNAP_TARGET_BOTTOM_TRIM = 10;
const CAPTURE_METRIC_TOLERANCE = 2;
const BOTTOM_CONTROL_FALLBACK_PADDING = 8;

const resizeHandles: Array<{ className: string; direction: ResizeDirection }> =
  [
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
  clipPreview,
  clipPreviewLoading,
  trimStartMs,
  trimEndMs,
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
const previewTimeMs = ref(0);

const isBusy = computed(
  () =>
    status.value === 'recording' ||
    status.value === 'paused' ||
    status.value === 'editing' ||
    status.value === 'exporting'
);
const audioEnabled = computed(
  () => settings.value.audio && settings.value.format === 'mp4'
);
const isMeterActive = computed(
  () => audioEnabled.value && status.value === 'recording'
);
const audioBarsStyle = computed<Record<string, string>>(() => {
  const level =
    isMeterActive.value && !audioMeterUnavailable.value ? audioLevel.value : 0;
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
    return t('screenRecorder.gifAudioUnsupported');
  }
  if (audioMeterUnavailable.value && settings.value.audio) {
    return t('screenRecorder.audioMeterUnavailable');
  }
  if (result.value?.audioDevice) {
    return t('screenRecorder.audioRecorded', {
      device: result.value.audioDevice
    });
  }
  if (result.value && !result.value.hasAudio) {
    return t('screenRecorder.audioDeviceMissing');
  }
  if (
    ffmpegStatus.value?.available &&
    !ffmpegStatus.value.systemAudioAvailable
  ) {
    const devices =
      ffmpegStatus.value.audioDevices?.join(', ') || t('screenRecorder.none');
    return settings.value.audio
      ? t('screenRecorder.systemAudioUnavailable', { devices })
      : t('screenRecorder.audioDisabled');
  }
  return settings.value.audio
    ? t('screenRecorder.audioEnabled')
    : t('screenRecorder.audioDisabled');
});

const cursorTitle = computed(() =>
  settings.value.showCursor
    ? String(t('screenRecorder.showCursorOn'))
    : String(t('screenRecorder.showCursorOff'))
);
const shortcutStartTitle = computed(
  () => `${t('screenRecorder.start')} (${CONTROL_SHORTCUTS.start})`
);
const shortcutPauseTitle = computed(
  () => `${t('screenRecorder.pause')} (${CONTROL_SHORTCUTS.pause})`
);
const shortcutResumeTitle = computed(
  () => `${t('screenRecorder.resume')} (${CONTROL_SHORTCUTS.pause})`
);
const shortcutStopTitle = computed(
  () => `${t('screenRecorder.stop')} (${CONTROL_SHORTCUTS.stop})`
);
const showTopControlStrip = computed(
  () => isBottomEdgeSnapped.value && !isSnapFullscreen.value
);

const exportProgressPercent = computed(() => {
  const progress = exportProgress.value?.progress ?? 0.03;
  return Math.max(1, Math.min(100, Math.round(progress * 100)));
});

const exportProgressText = computed(() => {
  const progress = exportProgress.value;
  if (!progress) {
    return t('screenRecorder.exporting');
  }
  if (progress.totalFrames && progress.stage === 'frames') {
    return `${progress.message}`;
  }
  return progress.message || t('screenRecorder.exporting');
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
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
});

const clipCurrentTimeText = computed(() => {
  const totalTenths = Math.max(0, Math.round(previewTimeMs.value / 100));
  const minutes = Math.floor(totalTenths / 600);
  const seconds = Math.floor((totalTenths % 600) / 10);
  const tenths = totalTenths % 10;
  return `${minutes}:${String(seconds).padStart(2, '0')}.${tenths}`;
});

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

const runAction = async (action: () => Promise<void>) => {
  try {
    await action();
  } catch (error: unknown) {
    console.error(`${LOG_PREFIX} action failed`, error);
    logger.error(`${LOG_PREFIX} action failed`, error);
    if (!isClosing.value) {
      modal.msg(getErrorMessage(error), 'error');
    }
  }
};

const toEvenPhysicalSize = (value: number): number =>
  Math.max(2, Math.floor(Math.round(value) / 2) * 2);

const toPhysicalSize = (value: number): number =>
  Math.max(1, Math.round(value));

const normalizeRecordingRegion = (
  region: RecordingRegion,
  screenX: number,
  screenY: number,
  physicalWidth: number,
  physicalHeight: number
): RecordingRegion => ({
  ...region,
  x: region.x + (screenX - region.screenX) / region.scale,
  y: region.y + (screenY - region.screenY) / region.scale,
  width: physicalWidth / region.scale,
  height: physicalHeight / region.scale,
  screenX,
  screenY,
  physicalWidth,
  physicalHeight
});

const clampRecordingRegionToMonitor = async (
  region: RecordingRegion
): Promise<RecordingRegion> => {
  const centerX = region.screenX + Math.round(region.physicalWidth / 2);
  const centerY = region.screenY + Math.round(region.physicalHeight / 2);
  const monitor =
    (await monitorFromPoint(region.screenX, region.screenY)) ||
    (await monitorFromPoint(centerX, centerY));
  if (!monitor) {
    return normalizeRecordingRegion(
      region,
      region.screenX,
      region.screenY,
      toEvenPhysicalSize(region.physicalWidth),
      toEvenPhysicalSize(region.physicalHeight)
    );
  }

  const monitorLeft = monitor.position.x;
  const monitorTop = monitor.position.y;
  const monitorRight = monitorLeft + monitor.size.width;
  const monitorBottom = monitorTop + monitor.size.height;
  const regionRight = region.screenX + region.physicalWidth;
  const regionBottom = region.screenY + region.physicalHeight;
  const screenX = Math.max(region.screenX, monitorLeft);
  const screenY = Math.max(region.screenY, monitorTop);
  const right = Math.min(regionRight, monitorRight);
  const bottom = Math.min(regionBottom, monitorBottom);
  const physicalWidth = toEvenPhysicalSize(right - screenX);
  const physicalHeight = toEvenPhysicalSize(bottom - screenY);

  if (physicalWidth < MIN_CAPTURE_SIZE || physicalHeight < MIN_CAPTURE_SIZE) {
    throw new Error(t('screenRecorder.recordingAreaOutOfBounds'));
  }

  return normalizeRecordingRegion(
    region,
    screenX,
    screenY,
    physicalWidth,
    physicalHeight
  );
};

const isNearlySamePhysicalValue = (left: number, right: number): boolean =>
  Math.abs(left - right) <= CAPTURE_METRIC_TOLERANCE;

const samePassthroughRegion = (
  left: PassthroughFrame | null,
  right: PassthroughFrame | null
): boolean => {
  if (left === right) return true;
  if (!left || !right) return false;
  return (
    isNearlySamePhysicalValue(left.x, right.x) &&
    isNearlySamePhysicalValue(left.y, right.y) &&
    isNearlySamePhysicalValue(left.width, right.width) &&
    isNearlySamePhysicalValue(left.height, right.height)
  );
};

const setPassthroughRegionIfChanged = async (
  region: PassthroughFrame | null
) => {
  if (samePassthroughRegion(lastPassthroughRegion, region)) return;
  lastPassthroughRegion = region ? { ...region } : null;
  await setRecorderPassthroughRegion(region).catch(() => undefined);
};

const getCaptureRegion = async (): Promise<RecordingRegion> => {
  if (isSnapFullscreen.value && fullscreenCaptureRegion.value) {
    return { ...fullscreenCaptureRegion.value };
  }

  const hole = captureHoleRef.value;
  if (!hole) {
    throw new Error(t('screenRecorder.viewportNotReady'));
  }

  const rect = hole.getBoundingClientRect();
  const scale = await appWindow.scaleFactor();
  const innerPosition = await appWindow.innerPosition();
  const physicalWidth = toPhysicalSize(rect.width * scale);
  const physicalHeight = toPhysicalSize(rect.height * scale);

  if (physicalWidth < MIN_CAPTURE_SIZE || physicalHeight < MIN_CAPTURE_SIZE) {
    throw new Error(t('screenRecorder.recordingAreaTooSmall'));
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
  return region;
};

const getRecordingRegion = async (): Promise<RecordingRegion> => {
  const region = await getCaptureRegion();
  return clampRecordingRegionToMonitor(region);
};

const refreshCaptureMetricsNow = async () => {
  try {
    const region = await getCaptureRegion();
    if (
      !isNearlySamePhysicalValue(
        captureSize.value.width,
        region.physicalWidth
      ) ||
      !isNearlySamePhysicalValue(
        captureSize.value.height,
        region.physicalHeight
      )
    ) {
      captureSize.value = {
        width: region.physicalWidth,
        height: region.physicalHeight
      };
    }
    if (status.value === 'editing') {
      await setPassthroughRegionIfChanged(null);
      return;
    }
    if (isSnapFullscreen.value) {
      await setPassthroughRegionIfChanged(null);
      return;
    }
    await setPassthroughRegionIfChanged({
      x: Math.round(region.x * region.scale),
      y: Math.round(region.y * region.scale),
      width: region.physicalWidth,
      height: region.physicalHeight
    });
  } catch {
    if (captureSize.value.width !== 0 || captureSize.value.height !== 0) {
      captureSize.value = { width: 0, height: 0 };
    }
    await setPassthroughRegionIfChanged(null);
  }
};

const refreshCaptureMetrics = async () => {
  if (metricsRefreshInFlight) {
    return metricsRefreshInFlight;
  }
  metricsRefreshInFlight = refreshCaptureMetricsNow().finally(() => {
    metricsRefreshInFlight = null;
    if (pendingPassthroughRegion) {
      const pending = pendingPassthroughRegion;
      pendingPassthroughRegion = null;
      void setPassthroughRegionIfChanged(pending);
    }
  });
  return metricsRefreshInFlight;
};

const scheduleCaptureMetricsRefresh = () => {
  if (metricsRefreshFrame !== null) return;
  metricsRefreshFrame = requestAnimationFrame(() => {
    metricsRefreshFrame = null;
    void refreshCaptureMetrics();
  });
};

const scheduleCaptureMetricsRefreshForWindowEvent = () => {
  if (isSnapAligned.value) return;
  scheduleCaptureMetricsRefresh();
};

const resetPassthroughCache = () => {
  pendingPassthroughRegion = null;
  lastPassthroughRegion = null;
};

const clearPassthrough = async () => {
  resetPassthroughCache();
  await setRecorderPassthroughRegion(null).catch(() => undefined);
  await setRecorderOverlayWindowRegion(null).catch(() => undefined);
};

const resetSnapAlignment = () => {
  isSnapAligned.value = false;
  isSnapFullscreen.value = false;
  isBottomEdgeSnapped.value = false;
  fullscreenCaptureRegion.value = null;
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

const monitorToFrame = (
  monitor: Awaited<ReturnType<typeof monitorFromPoint>>
): PhysicalFrame | null =>
  monitor
    ? {
        x: monitor.position.x,
        y: monitor.position.y,
        width: monitor.size.width,
        height: monitor.size.height
      }
    : null;

const getBottomEdgeTolerance = (scale: number): number => {
  const controlsHeight =
    controlStripRef.value?.getBoundingClientRect().height ?? 42;
  return Math.max(
    8,
    Math.round((controlsHeight + BOTTOM_CONTROL_FALLBACK_PADDING) * scale)
  );
};

const isFrameTouchingMonitorBottom = (
  frame: PhysicalFrame,
  monitorFrame: PhysicalFrame | null,
  scale: number
): boolean => {
  if (!monitorFrame) return false;
  return (
    frame.y + frame.height >=
    monitorFrame.y + monitorFrame.height - getBottomEdgeTolerance(scale)
  );
};

const refreshBottomEdgeState = async () => {
  try {
    const frame = await getOuterFrame();
    const centerX = frame.x + Math.round(frame.width / 2);
    const centerY = frame.y + Math.round(frame.height / 2);
    const monitor =
      (await monitorFromPoint(centerX, centerY)) ||
      (await monitorFromPoint(frame.x, frame.y));
    const scale = monitor?.scaleFactor || (await appWindow.scaleFactor());
    isBottomEdgeSnapped.value = isFrameTouchingMonitorBottom(
      frame,
      monitorToFrame(monitor),
      scale
    );
  } catch {
    isBottomEdgeSnapped.value = false;
  }
};

const scheduleBottomEdgeStateRefresh = () => {
  if (windowEdgeRefreshFrame !== null) return;
  windowEdgeRefreshFrame = requestAnimationFrame(() => {
    windowEdgeRefreshFrame = null;
    void refreshBottomEdgeState();
  });
};

const scheduleWindowResizeRefreshForWindowEvent = () => {
  scheduleBottomEdgeStateRefresh();
  scheduleCaptureMetricsRefreshForWindowEvent();
};

const refreshOverlayWindowRegion = async () => {
  await setRecorderOverlayWindowRegion(null).catch(() => undefined);
};

const clampFrameToMonitor = (
  frame: PhysicalFrame,
  monitorFrame: PhysicalFrame
): PhysicalFrame => {
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

const isTargetFullscreenLike = (
  target: RecorderSnapRegion,
  monitorFrame: PhysicalFrame | null,
  scale: number
): boolean => {
  if (!monitorFrame) return false;
  if (isTargetCoveringMonitor(target, monitorFrame, scale)) return true;

  const tolerance = Math.max(8, Math.round(12 * scale));
  const targetRight = target.screenX + target.physicalWidth;
  const targetBottom = target.screenY + target.physicalHeight;
  const monitorRight = monitorFrame.x + monitorFrame.width;
  const monitorBottom = monitorFrame.y + monitorFrame.height;
  const touchesLeft = target.screenX <= monitorFrame.x + tolerance;
  const touchesTop = target.screenY <= monitorFrame.y + tolerance;
  const touchesRight = targetRight >= monitorRight - tolerance;
  const touchesBottom = targetBottom >= monitorBottom - tolerance;
  const widthCoverage = target.physicalWidth / monitorFrame.width;
  const heightCoverage = target.physicalHeight / monitorFrame.height;

  return (
    touchesLeft &&
    touchesTop &&
    touchesRight &&
    (touchesBottom || heightCoverage >= 0.88) &&
    widthCoverage >= 0.94
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
    target.screenX + target.physicalWidth >=
      monitorFrame.x + monitorFrame.width - tolerance ||
    target.screenY + target.physicalHeight >=
      monitorFrame.y + monitorFrame.height - tolerance
  );
};

const isTargetTouchingMonitorBottom = (
  target: RecorderSnapRegion,
  monitorFrame: PhysicalFrame | null,
  scale: number
): boolean => {
  if (!monitorFrame) return false;
  return (
    target.screenY + target.physicalHeight >=
    monitorFrame.y + monitorFrame.height - getBottomEdgeTolerance(scale)
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
    physicalHeight: Math.max(
      MIN_CAPTURE_SIZE,
      target.physicalHeight - heightTrim
    )
  };
};

const setOuterFrame = async (frame: PhysicalFrame) => {
  await appWindow.setSize(
    new PhysicalSize(Math.round(frame.width), Math.round(frame.height))
  );
  await appWindow.setPosition(
    new PhysicalPosition(Math.round(frame.x), Math.round(frame.y))
  );
  await waitForWindowLayout();
};

const fitClipEditorWindow = async (preview: RecordingClipPreview) => {
  if (clipEditorResizeInFlight) {
    await clipEditorResizeInFlight;
    return;
  }

  clipEditorResizeInFlight = (async () => {
    if (fullscreenRestoreInFlight) {
      await fullscreenRestoreInFlight;
    } else if (isSnapFullscreen.value || fullscreenCaptureRegion.value) {
      await restoreFullscreenCaptureLayout();
    }
    if (status.value !== 'editing') return;

    const currentFrame = await getOuterFrame();
    if (!clipEditorRestoreFrame) {
      clipEditorRestoreFrame = currentFrame;
    }
    const centerX = currentFrame.x + Math.round(currentFrame.width / 2);
    const centerY = currentFrame.y + Math.round(currentFrame.height / 2);
    const monitor =
      (await monitorFromPoint(centerX, centerY)) ||
      (await monitorFromPoint(currentFrame.x, currentFrame.y));
    const scale = monitor?.scaleFactor || (await appWindow.scaleFactor());
    const monitorFrame = monitorToFrame(monitor);
    if (!monitorFrame) return;

    const margin = Math.round(EDITOR_WINDOW_MARGIN * scale);
    const availableLogicalWidth = Math.max(
      MIN_WINDOW_WIDTH,
      (monitorFrame.width - margin * 2) / scale
    );
    const availableLogicalHeight = Math.max(
      MIN_EDITOR_WINDOW_HEIGHT,
      (monitorFrame.height - margin * 2) / scale
    );
    const logicalWidth = Math.min(EDITOR_WINDOW_WIDTH, availableLogicalWidth);
    const aspectRatio = Math.max(
      0.5,
      Math.min(3.2, preview.width / Math.max(1, preview.height))
    );
    const desiredPreviewHeight = logicalWidth / aspectRatio;
    const logicalHeight = Math.min(
      availableLogicalHeight,
      Math.max(
        MIN_EDITOR_WINDOW_HEIGHT,
        Math.min(EDITOR_WINDOW_MAX_HEIGHT, desiredPreviewHeight + 74)
      )
    );
    const width = Math.round(logicalWidth * scale);
    const height = Math.round(logicalHeight * scale);

    await appWindow
      .setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_EDITOR_WINDOW_HEIGHT))
      .catch(() => undefined);
    await setOuterFrame({
      x: monitorFrame.x + Math.round((monitorFrame.width - width) / 2),
      y: monitorFrame.y + Math.round((monitorFrame.height - height) / 2),
      width,
      height
    });
    await raiseRecorderWindow();
    await forceTransparentRepaint();
    await refreshCaptureMetrics();
    await appWindow.setFocus().catch(() => undefined);
  })().finally(() => {
    clipEditorResizeInFlight = null;
  });

  await clipEditorResizeInFlight;
};

const restoreClipEditorWindow = async () => {
  if (clipEditorResizeInFlight) {
    await clipEditorResizeInFlight;
  }
  const restoreFrame = clipEditorRestoreFrame;
  clipEditorRestoreFrame = null;
  await appWindow
    .setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT))
    .catch(() => undefined);
  if (restoreFrame) {
    await setOuterFrame(restoreFrame);
  }
  await forceTransparentRepaint();
  await refreshCaptureMetrics();
};

const createFullscreenRecordingRegion = (
  target: RecorderSnapRegion,
  monitorFrame: PhysicalFrame,
  scale: number
): RecordingRegion => {
  const screenX = Math.max(target.screenX, monitorFrame.x);
  const screenY = Math.max(target.screenY, monitorFrame.y);
  const right = Math.min(
    target.screenX + target.physicalWidth,
    monitorFrame.x + monitorFrame.width
  );
  const bottom = Math.min(
    target.screenY + target.physicalHeight,
    monitorFrame.y + monitorFrame.height
  );
  const physicalWidth = toEvenPhysicalSize(right - screenX);
  const physicalHeight = toEvenPhysicalSize(bottom - screenY);

  return {
    x: screenX / scale,
    y: screenY / scale,
    width: physicalWidth / scale,
    height: physicalHeight / scale,
    screenX,
    screenY,
    physicalWidth,
    physicalHeight,
    scale
  };
};

const enterFullscreenCaptureLayout = async (
  target: RecorderSnapRegion,
  monitorFrame: PhysicalFrame,
  scale: number
) => {
  if (!fullscreenRestoreFrame) {
    fullscreenRestoreFrame = await getOuterFrame();
  }

  fullscreenCaptureRegion.value = createFullscreenRecordingRegion(
    target,
    monitorFrame,
    scale
  );
  isSnapAligned.value = true;
  isSnapFullscreen.value = true;
  isBottomEdgeSnapped.value = false;
  resetPassthroughCache();

  await setRecorderOverlayWindowRegion(null).catch(() => undefined);
  await setRecorderPassthroughRegion(null).catch(() => undefined);
  await appWindow
    .setMinSize(
      new LogicalSize(MIN_SNAPPED_WINDOW_WIDTH, FULLSCREEN_CONTROL_HEIGHT)
    )
    .catch(() => undefined);
  await nextTick();
  await waitForWindowLayout();

  const margin = Math.round(FULLSCREEN_CONTROL_MARGIN * scale);
  const width = Math.min(
    Math.max(
      Math.round(MIN_SNAPPED_WINDOW_WIDTH * scale),
      Math.round(FULLSCREEN_CONTROL_WIDTH * scale)
    ),
    Math.max(1, monitorFrame.width - margin * 2)
  );
  const height = Math.min(
    Math.round(FULLSCREEN_CONTROL_HEIGHT * scale),
    monitorFrame.height
  );
  await setOuterFrame({
    x: monitorFrame.x + Math.round((monitorFrame.width - width) / 2),
    y: monitorFrame.y + monitorFrame.height - height - margin,
    width,
    height
  });
  await raiseRecorderWindow();
  await forceTransparentRepaint();
  await refreshCaptureMetrics();
  await appWindow.setFocus().catch(() => undefined);
};

const restoreFullscreenCaptureLayout = async () => {
  if (!isSnapFullscreen.value && !fullscreenCaptureRegion.value) return;
  if (fullscreenRestoreInFlight) {
    await fullscreenRestoreInFlight;
    return;
  }

  fullscreenRestoreInFlight = (async () => {
    const restoreFrame = fullscreenRestoreFrame;
    fullscreenRestoreFrame = null;
    resetSnapAlignment();
    await setRecorderCaptureExcluded(false).catch(() => undefined);
    await setRecorderOverlayWindowRegion(null).catch(() => undefined);
    await setRecorderPassthroughRegion(null).catch(() => undefined);
    await appWindow
      .setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT))
      .catch(() => undefined);
    await nextTick();
    await waitForWindowLayout();
    if (restoreFrame) {
      await setOuterFrame(restoreFrame);
    }
    await raiseRecorderWindow();
    await forceTransparentRepaint();
    await refreshCaptureMetrics();
    await appWindow.setFocus().catch(() => undefined);
  })().finally(() => {
    fullscreenRestoreInFlight = null;
  });

  await fullscreenRestoreInFlight;
};

const raiseRecorderWindow = async () => {
  await appWindow.setAlwaysOnTop(true).catch(() => undefined);
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
  const horizontalChrome = Math.max(
    0,
    currentFrame.width - actualRegion.physicalWidth
  );
  const verticalChrome = Math.max(
    0,
    currentFrame.height - actualRegion.physicalHeight
  );

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
    unlistenAudioLevel = await listen<AudioLevelEvent>(
      'screen_recorder_audio_level',
      (event) => {
        if (!isMeterActive.value) {
          audioLevel.value = 0;
          return;
        }
        const next = Math.max(
          0,
          Math.min(1, Number(event.payload?.level ?? 0))
        );
        audioLevel.value = audioLevel.value * 0.38 + next * 0.62;
      }
    );
    audioMeterUnavailable.value = false;
  } catch (error) {
    console.error(`${LOG_PREFIX} audio meter failed`, error);
    logger.warn(`${LOG_PREFIX} audio meter failed`, error);
    audioMeterUnavailable.value = true;
  }
};

const focusRecorderWindow = () => {
  void appWindow.setFocus().catch(() => undefined);
};

const startDrag = async (event: MouseEvent) => {
  if (event.button !== 0 || isBusy.value) return;
  resetSnapAlignment();
  await appWindow
    .setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT))
    .catch(() => undefined);
  await clearPassthrough();
  await appWindow.startDragging().catch((error: unknown) => {
    modal.msg(getErrorMessage(error), 'error');
  });
  scheduleMetricsRefresh();
  scheduleBottomEdgeStateRefresh();
};

const startResize = async (direction: ResizeDirection) => {
  if (isBusy.value) return;
  resetSnapAlignment();
  await appWindow
    .setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT))
    .catch(() => undefined);
  await clearPassthrough();
  await appWindow.startResizeDragging(direction).catch((error: unknown) => {
    modal.msg(getErrorMessage(error), 'error');
  });
  scheduleMetricsRefresh();
  scheduleBottomEdgeStateRefresh();
};

const handleStart = () =>
  runAction(async () => {
    exportProgress.value = null;
    await startAudioMeter();
    await setRecorderCaptureExcluded(true).catch(() => undefined);
    await refreshCaptureMetrics();
    await begin(await getRecordingRegion());
  });

const handlePause = () =>
  runAction(async () => {
    await pause();
  });

const handleResume = () =>
  runAction(async () => {
    await resume(await getRecordingRegion());
  });

const handleStop = () =>
  runAction(async () => {
    exportProgress.value =
      settings.value.format === 'mp4'
        ? {
            stage: 'encode',
            message: t('screenRecorder.preparingMp4'),
            progress: 0.01,
            currentFrame: 0
          }
        : null;
    await stop();
    audioLevel.value = 0;
    await setRecorderCaptureExcluded(false).catch(() => undefined);
    await clearPassthrough();
    await refreshCaptureMetrics();
  });

const handleExportClip = () =>
  runAction(async () => {
    exportProgress.value = {
      stage: 'encode',
      message:
        settings.value.format === 'gif'
          ? t('screenRecorder.preparingGif')
          : t('screenRecorder.preparingMp4'),
      progress: 0.01,
      currentFrame: 0
    };
    await exportFile();
    await refreshCaptureMetrics();
  });

const handleCopyClip = () =>
  runAction(async () => {
    exportProgress.value = {
      stage: 'encode',
      message: t('screenRecorder.preparingGif'),
      progress: 0.01,
      currentFrame: 0
    };
    const exported = await exportFile();
    await copyRecordingFileToClipboard(exported.path);
    modal.msg(t('screenRecorder.copiedClip'), 'success');
    await refreshCaptureMetrics();
  });

const handleDiscardClip = () =>
  runAction(async () => {
    const previousSettings = { ...settings.value };
    await cancel();
    settings.value = previousSettings;
    status.value = 'ready';
    exportProgress.value = null;
    await appWindow
      .setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT))
      .catch(() => undefined);
    await restoreClipEditorWindow();
    await refreshCaptureMetrics();
    await startAudioMeter();
  });

const handleCancelExport = () =>
  runAction(async () => {
    await cancelExport();
    exportProgress.value = null;
    await setRecorderCaptureExcluded(false).catch(() => undefined);
    await restoreClipEditorWindow();
    await refreshCaptureMetrics();
  });

const handleRecordAgain = () =>
  runAction(async () => {
    const previousSettings = { ...settings.value };
    await clearPassthrough();
    reset();
    settings.value = previousSettings;
    status.value = 'ready';
    result.value = null;
    exportProgress.value = null;
    await setRecorderCaptureExcluded(false).catch(() => undefined);
    await restoreClipEditorWindow();
    await nextTick();
    await refreshCaptureMetrics();
    await startAudioMeter();
  });

const handleRecorderShortcut = (action: RecorderShortcutAction) => {
  if (status.value === 'exporting') return;

  if (action === 'start') {
    if (status.value === 'ready') {
      void handleStart();
    } else if (status.value === 'completed') {
      handleRecordAgain();
    }
    return;
  }

  if (action === 'pause') {
    if (status.value === 'recording') {
      void handlePause();
    } else if (status.value === 'paused') {
      void handleResume();
    }
    return;
  }

  if (
    action === 'stop' &&
    (status.value === 'recording' || status.value === 'paused')
  ) {
    void handleStop();
  }
};

const fitRecorderToWindow = async (target: RecorderSnapRegion) => {
  const monitor = await monitorFromPoint(target.screenX, target.screenY);
  const scale = monitor?.scaleFactor || (await appWindow.scaleFactor());
  const monitorRect = monitor
    ? {
        x: monitor.position.x,
        y: monitor.position.y,
        width: monitor.size.width,
        height: monitor.size.height
      }
    : null;
  const isMonitorCoveringTarget = isTargetCoveringMonitor(
    target,
    monitorRect,
    scale
  );
  const isFullscreenTarget = isTargetFullscreenLike(target, monitorRect, scale);
  const isMonitorEdgeTarget = isTargetTouchingMonitorEdge(
    target,
    monitorRect,
    scale
  );

  if (isFullscreenTarget && monitorRect) {
    await enterFullscreenCaptureLayout(target, monitorRect, scale);
    return;
  }

  if (isSnapFullscreen.value || fullscreenCaptureRegion.value) {
    await restoreFullscreenCaptureLayout();
  }

  isBottomEdgeSnapped.value = isTargetTouchingMonitorBottom(
    target,
    monitorRect,
    scale
  );
  isSnapAligned.value = true;
  isSnapFullscreen.value = false;
  await nextTick();
  await waitForWindowLayout();

  await appWindow
    .setMinSize(
      isMonitorEdgeTarget
        ? new LogicalSize(MIN_SNAPPED_WINDOW_WIDTH, MIN_SNAPPED_WINDOW_HEIGHT)
        : new LogicalSize(MIN_SNAPPED_WINDOW_WIDTH, MIN_WINDOW_HEIGHT)
    )
    .catch(() => undefined);

  const minPhysicalWidth = Math.round(MIN_SNAPPED_WINDOW_WIDTH * scale);
  const minPhysicalHeight = Math.round(
    (isMonitorEdgeTarget ? MIN_SNAPPED_WINDOW_HEIGHT : MIN_WINDOW_HEIGHT) *
      scale
  );
  const snapTarget = trimSnappedTarget(target, scale, !isMonitorCoveringTarget);

  const initialFrame =
    isMonitorEdgeTarget && monitorRect
      ? {
          x: Math.max(monitorRect.x, snapTarget.screenX),
          y: Math.max(monitorRect.y, snapTarget.screenY),
          width: Math.max(
            minPhysicalWidth,
            Math.min(snapTarget.physicalWidth, monitorRect.width)
          ),
          height: Math.max(
            minPhysicalHeight,
            Math.min(snapTarget.physicalHeight, monitorRect.height)
          )
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
    await raiseRecorderWindow();
    await nextTick();
    await refreshOverlayWindowRegion();

    if (isMonitorEdgeTarget) {
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
        height: Math.max(
          minPhysicalHeight,
          currentFrame.height + residual.height
        )
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
  } catch (error) {
    console.error(`${LOG_PREFIX} snap correction failed`, error);
    logger.warn(`${LOG_PREFIX} snap correction failed`, error);
  } finally {
    await raiseRecorderWindow();
    await pulseWindowPassthrough();
    await refreshBottomEdgeState();
    await refreshCaptureMetrics();
    await refreshOverlayWindowRegion();
    await forceTransparentRepaint();
    await appWindow.setFocus().catch(() => undefined);
  }
};

const handleSnapToWindow = () =>
  runAction(async () => {
    await clearPassthrough();
    const target = await pickTargetWindow();
    await fitRecorderToWindow(target);
  });

const toggleAudio = () => {
  if (isBusy.value || settings.value.format === 'gif') return;
  settings.value.audio = !settings.value.audio;
};

const toggleCursor = () => {
  if (isBusy.value) return;
  settings.value.showCursor = !settings.value.showCursor;
};

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
  if (event.repeat) return;
  if (event.ctrlKey || event.metaKey || event.altKey) return;

  const key = event.key.toLowerCase();
  if (key === 'r') {
    event.preventDefault();
    event.stopPropagation();
    handleRecorderShortcut('start');
    return;
  }
  if (key === 'p') {
    event.preventDefault();
    event.stopPropagation();
    handleRecorderShortcut('pause');
    return;
  }
  if (key === 's') {
    event.preventDefault();
    event.stopPropagation();
    handleRecorderShortcut('stop');
    return;
  }

  if (event.key === 'Escape') {
    event.preventDefault();
    void handleClose();
  }
};

onMounted(async () => {
  logger.info(`${LOG_PREFIX} frontend mounted`);
  status.value = 'ready';
  await appWindow
    .setMinSize(new LogicalSize(MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT))
    .catch(() => undefined);
  await setRecorderCaptureExcluded(false).catch(() => undefined);
  await refreshFfmpegStatus().catch(() => undefined);
  await nextTick();
  await refreshCaptureMetrics();
  await refreshBottomEdgeState();
  await startAudioMeter();
  await nextTick();
  unlistenExportProgress = await listen<ExportProgressEvent>(
    'screen_recorder_export_progress',
    (event) => {
      exportProgress.value = event.payload;
    }
  ).catch(() => null);
  await appWindow.emit('screen_recorder_ready');
  logger.info(`${LOG_PREFIX} frontend ready emitted`);

  if (captureHoleRef.value) {
    resizeObserver = new ResizeObserver(() => {
      scheduleCaptureMetricsRefreshForWindowEvent();
    });
    resizeObserver.observe(captureHoleRef.value);
  }
  unlistenMoved = await appWindow
    .onMoved(() => {
      scheduleBottomEdgeStateRefresh();
      scheduleCaptureMetricsRefreshForWindowEvent();
    })
    .catch(() => null);
  unlistenResized = await appWindow
    .onResized(() => {
      scheduleBottomEdgeStateRefresh();
      scheduleCaptureMetricsRefreshForWindowEvent();
    })
    .catch(() => null);

  window.addEventListener('resize', scheduleWindowResizeRefreshForWindowEvent);
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
  if (nextStatus === 'editing') {
    void clearPassthrough();
  }
  if (
    isSnapFullscreen.value &&
    (nextStatus === 'editing' ||
      nextStatus === 'exporting' ||
      nextStatus === 'completed')
  ) {
    void restoreFullscreenCaptureLayout();
  }
});

watch(clipPreview, (preview) => {
  if (preview && status.value === 'editing') {
    void fitClipEditorWindow(preview);
  }
});

watch(showTopControlStrip, async () => {
  await nextTick();
  await refreshCaptureMetrics();
  await refreshOverlayWindowRegion();
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  unlistenMoved?.();
  unlistenResized?.();
  unlistenExportProgress?.();
  window.removeEventListener(
    'resize',
    scheduleWindowResizeRefreshForWindowEvent
  );
  window.removeEventListener('keydown', handleKeydown);
  resetPassthroughCache();
  if (windowEdgeRefreshFrame !== null) {
    cancelAnimationFrame(windowEdgeRefreshFrame);
    windowEdgeRefreshFrame = null;
  }
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
  @apply fixed inset-0 overflow-hidden select-none text-recorder bg-transparent;
}

.recorder-shell {
  @apply relative grid w-screen h-screen border border-recorder box-border;

  --recorder-title-height: 34px;
  --recorder-footer-height: 46px;

  grid-template-rows:
    var(--recorder-title-height) minmax(110px, 1fr)
    minmax(var(--recorder-footer-height), auto);
  box-shadow: var(--dialog-shadow);
}

.recorder-shell.editing {
  --recorder-title-height: clamp(34px, 8vh, 40px);
  --recorder-footer-height: clamp(42px, 9vh, 48px);

  grid-template-rows:
    var(--recorder-title-height) minmax(110px, 1fr)
    var(--recorder-footer-height);
  background: transparent;

  .window-title {
    font-size: clamp(13px, 2.5vh, 15px);
  }

  .title-button {
    width: clamp(30px, 6.5vh, 36px);
    height: clamp(28px, 6vh, 32px);
  }

  .title-icon {
    width: clamp(18px, 4vh, 22px);
    height: clamp(18px, 4vh, 22px);
  }
}

.title-bar {
  @apply flex items-center justify-between py-0 pl-3 pr-1.5 bg-recorder-bg border-b border-recorder rounded-t-md cursor-move;

  height: var(--recorder-title-height);
}

.window-title {
  @apply flex-1 min-w-0 overflow-hidden text-[13px] font-[650] text-ellipsis whitespace-nowrap;
}

.window-actions {
  @apply flex h-full items-center gap-1 ml-2;
}

.title-button {
  @apply w-[30px] h-7 text-recorder-muted bg-transparent border-0 rounded cursor-pointer inline-flex items-center justify-center leading-none;

  transition:
    background-color 0.16s ease,
    color 0.16s ease;

  &:hover {
    @apply text-recorder-accent;

    background: color-mix(in srgb, var(--recorder-accent) 12%, transparent);
  }

  &--close:hover {
    @apply text-red-500;

    background: rgb(239 68 68 / 10%);
  }
}

.title-icon {
  @apply block;
}

.capture-viewport {
  @apply relative min-w-0 min-h-0 bg-transparent;
}

.viewport-mask {
  @apply absolute z-[1] pointer-events-auto;

  background: color-mix(in srgb, var(--panel-bg) 78%, transparent);

  &.top,
  &.bottom {
    right: 0;
    left: 0;
    height: 6px;
  }

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
  }

  &.left,
  &.right {
    top: 6px;
    bottom: 6px;
    width: 6px;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}

.capture-frame {
  @apply absolute inset-1.5 z-[2] bg-transparent;
}

.capture-hole {
  @apply absolute inset-px bg-transparent;
}

.viewport-border {
  @apply absolute z-[3] pointer-events-none bg-recorder-border;

  &.top,
  &.bottom {
    right: 0;
    left: 0;
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
  @apply flex items-center justify-between gap-2 min-w-0 min-h-[46px] overflow-hidden py-1.5 px-2 bg-recorder-bg border-t border-recorder box-border;

  container-type: inline-size;
}

.control-strip.editing {
  @apply overflow-visible px-2 py-1;

  height: var(--recorder-footer-height);
  min-height: var(--recorder-footer-height);

  .control-group--actions {
    display: grid;
    grid-template-columns: minmax(104px, 1fr) auto minmax(210px, 1fr);
    gap: clamp(8px, 2vw, 16px);
    width: 100%;
  }

  .control-button,
  .record-button {
    max-width: none;
    height: clamp(30px, 6.5vh, 34px);
    padding: 0 clamp(10px, 1.8vw, 14px);
    font-size: clamp(11px, 2.2vh, 13px);
  }

  .clip-export-button {
    min-width: clamp(84px, 12vw, 104px);
  }

  > .control-group--actions > .control-button:first-child {
    justify-self: start;
    min-width: clamp(96px, 14vw, 124px);
  }

  .clip-output-actions {
    @apply flex items-center justify-end gap-2;

    justify-self: end;
  }

  .clip-copy-button {
    min-width: clamp(104px, 16vw, 136px);
  }

  .clip-current-time {
    @apply justify-self-center font-semibold leading-none tabular-nums text-recorder;

    font-size: clamp(11px, 2.2vh, 13px);
  }
}

.top-control-strip {
  @apply flex flex-initial items-center justify-end gap-1.5 min-w-0 h-full ml-2 overflow-hidden;

  max-width: min(58vw, 360px);

  .save-status {
    max-width: 110px;
  }

  .record-button {
    min-width: 88px;
    height: 28px;
    padding: 0 10px;
  }

  .control-button {
    min-width: 42px;
    max-width: 56px;
    height: 28px;
    padding: 0 8px;
  }
}

.recorder-shell.snap-aligned {
  grid-template-rows: 34px minmax(80px, 1fr) 42px;

  .viewport-mask {
    pointer-events: none;
  }

  .control-strip {
    gap: 6px;
    height: 42px;
    min-height: 42px;
    padding: 5px 7px;
  }

  .control-group {
    gap: 6px;
  }

  .control-group--actions {
    justify-content: flex-end;
  }

  .optional-save-status {
    display: none;
  }

  select,
  input,
  button {
    height: 28px;
  }

  select {
    width: 56px;
    padding: 0 6px;
  }

  .record-button {
    min-width: 88px;
    height: 30px;
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
    width: 72px;
  }
}

.recorder-shell.editing.snap-aligned {
  grid-template-rows:
    var(--recorder-title-height) minmax(80px, 1fr)
    var(--recorder-footer-height);

  .control-strip {
    height: var(--recorder-footer-height);
    min-height: var(--recorder-footer-height);
    padding: 4px 8px;
  }

  .control-group--actions {
    justify-content: stretch;
  }
}

.recorder-shell.snap-fullscreen {
  display: block;
  border: 0;
  box-shadow: none;

  .title-bar,
  .capture-viewport,
  .resize-zone {
    display: none;
  }

  .control-strip {
    position: absolute;
    inset: 0;
    z-index: 6;
    width: 100%;
    height: 100%;
    min-height: 56px;
    padding: 10px 12px;
    border: 1px solid var(--recorder-border);
    border-radius: 12px;
    box-shadow: var(--dialog-shadow);
  }
}

@container (max-width: 360px) {
  .recorder-shell.snap-aligned {
    .control-strip,
    .control-group {
      flex-wrap: wrap;
    }

    .control-group--actions {
      justify-content: flex-start;
    }
  }
}

.control-group {
  display: flex;
  gap: clamp(5px, 1.1cqw, 8px);
  align-items: center;
  min-width: 0;
}

.control-group--tools {
  flex: 1 1 auto;
  width: auto;
  overflow: hidden;
}

.control-group--actions {
  flex: 0 0 auto;
  justify-content: flex-end;
  overflow: hidden;

  .control-button {
    min-width: 56px;
    max-width: none;
    padding: 0 12px;
  }
}

select,
input,
button {
  @apply h-7 box-border;

  font: inherit;
}

select,
input {
  @apply text-recorder bg-recorder-input border border-recorder rounded-[5px] outline-none;
}

select {
  width: 58px;
  padding: 0 6px;
  font-size: 12px;
}

.quality-select {
  width: 80px;
}

.select-field,
.dimension-group {
  @apply inline-flex flex-none items-center gap-1.5 min-w-0;
}

.select-field {
  @apply gap-1 py-0.5 px-1.5 pl-0.5 bg-recorder-soft border border-recorder rounded-md;
}

.dimension input {
  width: 54px;
  padding: 0 5px;
  text-align: center;
}

.unit,
.multiply,
.time,
.save-status {
  @apply text-recorder text-xs whitespace-nowrap;
}

.time {
  @apply min-w-[44px] font-semibold text-center;

  font-variant-numeric: tabular-nums;
}

.save-status {
  @apply overflow-hidden max-w-[96px] text-recorder-muted text-ellipsis;
}

.export-progress {
  display: grid;
  flex: 0 1 180px;
  gap: 5px;
  width: min(34cqw, 220px);
  min-width: 126px;
}

.export-progress__meta {
  @apply flex items-center justify-between gap-2 min-w-0 text-recorder-muted text-xs leading-none;

  span {
    @apply overflow-hidden text-ellipsis whitespace-nowrap;
  }

  strong {
    @apply flex-none text-recorder-red text-xs font-bold;

    font-variant-numeric: tabular-nums;
  }
}

.export-progress__track {
  @apply relative h-[5px] overflow-hidden bg-recorder-soft rounded-full;

  span {
    @apply absolute top-0 right-auto bottom-0 left-0 min-w-[5px] rounded-[inherit];

    background: linear-gradient(90deg, #ef4444, var(--recorder-red));
    transition: width 160ms ease;
  }
}

.record-button,
.control-button,
.icon-control,
.audio-meter {
  @apply inline-flex items-center justify-center gap-1.5 min-w-0 px-2 text-recorder bg-recorder-soft border border-recorder rounded-md cursor-pointer overflow-hidden whitespace-nowrap;

  &:hover {
    @apply bg-panel-hover-bg;

    border-color: color-mix(
      in srgb,
      var(--recorder-accent) 38%,
      var(--recorder-border)
    );
  }

  &:disabled {
    @apply cursor-not-allowed opacity-50;
  }
}

.tool-pill {
  @apply inline-flex flex-none items-center overflow-hidden bg-recorder-soft border border-recorder rounded-[7px];
}

.icon-control {
  @apply min-w-[30px] w-[30px] p-0 leading-none bg-transparent border-0 rounded-none;
}

.snap-control {
  @apply border-r border-recorder;
}

.audio-meter {
  @apply w-[34px] min-w-[34px] p-0 text-recorder-muted bg-transparent border-0 rounded-none;

  &.audio-on,
  &.active {
    @apply text-recorder-green;

    background: color-mix(in srgb, var(--recorder-green) 14%, transparent);
  }

  &.metering:not(.active) {
    @apply text-recorder;
  }

  &.muted {
    @apply opacity-[0.55];
  }
}

.cursor-control {
  @apply border-l border-recorder;

  &.active {
    @apply text-recorder-accent;

    background: color-mix(in srgb, var(--recorder-accent) 13%, transparent);
  }
}

.audio-bars {
  display: inline-flex;
  gap: 2px;
  align-items: end;
  height: 14px;

  i {
    display: block;
    width: 3px;
    height: 14px;
    background: currentcolor;
    border-radius: 999px;
    transition: transform 80ms linear;
    transform: scaleY(var(--bar-1, 0.25));
    transform-origin: bottom;
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
  @apply flex-none min-w-[96px] max-w-[150px] h-8 px-3 text-white bg-recorder-red;

  border-color: color-mix(in srgb, var(--recorder-red) 85%, transparent);

  &:hover {
    background: var(--recorder-red-hover);
    border-color: var(--recorder-red-hover);
  }
}

.control-button {
  @apply flex-none min-w-[44px] max-w-[70px];
}

.button-label,
.record-label {
  @apply overflow-hidden text-ellipsis;
}

.record-dot {
  @apply flex-none w-[9px] h-[9px] rounded-full;

  background: currentcolor;
}

.control-button.danger {
  @apply text-recorder-red;
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

  .cursor-control {
    display: none;
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
  .optional-format {
    display: none;
  }

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
  @apply fixed left-3 right-3 bottom-[54px] m-0 py-2 px-2.5 rounded text-xs;

  color: #b45309;
  background: color-mix(in srgb, #f59e0b 13%, var(--panel-bg));
  border: 1px solid color-mix(in srgb, #f59e0b 38%, var(--panel-border));
}

.resize-zone {
  @apply absolute z-[10] block;
}

.resize-zone.n,
.resize-zone.s {
  right: 8px;
  left: 8px;
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
  bottom: 0;
  left: 0;
}
</style>
