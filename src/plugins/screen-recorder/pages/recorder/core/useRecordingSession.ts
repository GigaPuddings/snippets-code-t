import { computed, onUnmounted, ref } from 'vue';
import type {
  FfmpegStatus,
  RecordingExportResult,
  RecordingRegion,
  RecordingSettings,
  RecordingStatus
} from './types';
import {
  cancelRecording,
  exportRecording,
  getFfmpegStatus,
  pauseRecording,
  resumeRecording,
  startRecording,
  stopRecording
} from './recordingApi';

const defaultSettings = (): RecordingSettings => ({
  format: 'mp4',
  fps: 30,
  quality: 'standard',
  savePath: ''
});

export function useRecordingSession() {
  const status = ref<RecordingStatus>('selecting');
  const settings = ref<RecordingSettings>(defaultSettings());
  const ffmpegStatus = ref<FfmpegStatus | null>(null);
  const result = ref<RecordingExportResult | null>(null);
  const errorMessage = ref('');
  const startedAt = ref<number | null>(null);
  const accumulatedMs = ref(0);
  const ticker = ref<number | null>(null);

  const elapsedMs = computed(() => {
    if (status.value !== 'recording' || startedAt.value === null) {
      return accumulatedMs.value;
    }
    return accumulatedMs.value + Date.now() - startedAt.value;
  });

  const clearTicker = () => {
    if (ticker.value !== null) {
      window.clearInterval(ticker.value);
      ticker.value = null;
    }
  };

  const beginTicker = () => {
    clearTicker();
    ticker.value = window.setInterval(() => {
      accumulatedMs.value = elapsedMs.value;
      startedAt.value = Date.now();
    }, 500);
  };

  const refreshFfmpegStatus = async () => {
    ffmpegStatus.value = await getFfmpegStatus();
    return ffmpegStatus.value;
  };

  const begin = async (region: RecordingRegion) => {
    errorMessage.value = '';
    result.value = null;
    const ffmpeg = ffmpegStatus.value ?? await refreshFfmpegStatus();
    if (!ffmpeg.available) {
      throw new Error(ffmpeg.message || 'FFmpeg unavailable');
    }
    await startRecording(region, settings.value);
    status.value = 'recording';
    accumulatedMs.value = 0;
    startedAt.value = Date.now();
    beginTicker();
  };

  const pause = async () => {
    if (status.value !== 'recording') return;
    accumulatedMs.value = elapsedMs.value;
    startedAt.value = null;
    clearTicker();
    await pauseRecording();
    status.value = 'paused';
  };

  const resume = async (region: RecordingRegion) => {
    if (status.value !== 'paused') return;
    await resumeRecording(region, settings.value);
    status.value = 'recording';
    startedAt.value = Date.now();
    beginTicker();
  };

  const stop = async () => {
    if (status.value !== 'recording' && status.value !== 'paused') return;
    accumulatedMs.value = elapsedMs.value;
    startedAt.value = null;
    clearTicker();
    await stopRecording();
    status.value = 'exporting';
  };

  const exportFile = async () => {
    status.value = 'exporting';
    result.value = await exportRecording(settings.value);
    status.value = 'completed';
    return result.value;
  };

  const cancel = async () => {
    clearTicker();
    await cancelRecording();
    status.value = 'selecting';
    startedAt.value = null;
    accumulatedMs.value = 0;
    result.value = null;
  };

  const reset = () => {
    status.value = 'selecting';
    startedAt.value = null;
    accumulatedMs.value = 0;
    result.value = null;
    errorMessage.value = '';
    settings.value = defaultSettings();
  };

  onUnmounted(() => {
    clearTicker();
  });

  return {
    status,
    settings,
    ffmpegStatus,
    result,
    errorMessage,
    elapsedMs,
    refreshFfmpegStatus,
    begin,
    pause,
    resume,
    stop,
    exportFile,
    cancel,
    reset
  };
}
