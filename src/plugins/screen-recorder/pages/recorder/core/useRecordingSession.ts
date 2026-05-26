import { onUnmounted, ref } from 'vue';
import type {
  FfmpegStatus,
  RecordingExportResult,
  RecordingRegion,
  RecordingSettings,
  RecordingStatus
} from './types';
import {
  cancelExportRecording,
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
  savePath: '',
  audio: true
});

const LOG_PREFIX = '[screen-recorder]';

export function useRecordingSession() {
  const status = ref<RecordingStatus>('selecting');
  const settings = ref<RecordingSettings>(defaultSettings());
  const ffmpegStatus = ref<FfmpegStatus | null>(null);
  const result = ref<RecordingExportResult | null>(null);
  const errorMessage = ref('');
  const startedAt = ref<number | null>(null);
  const accumulatedMs = ref(0);
  const elapsedMs = ref(0);
  const ticker = ref<number | null>(null);

  const refreshElapsedMs = () => {
    elapsedMs.value = status.value === 'recording' && startedAt.value !== null
      ? accumulatedMs.value + Date.now() - startedAt.value
      : accumulatedMs.value;
  };

  const clearTicker = () => {
    if (ticker.value !== null) {
      window.clearInterval(ticker.value);
      ticker.value = null;
    }
  };

  const beginTicker = () => {
    clearTicker();
    refreshElapsedMs();
    ticker.value = window.setInterval(() => {
      refreshElapsedMs();
    }, 250);
  };

  const refreshFfmpegStatus = async () => {
    console.info(`${LOG_PREFIX} refresh ffmpeg status`);
    ffmpegStatus.value = await getFfmpegStatus();
    console.info(`${LOG_PREFIX} ffmpeg status`, ffmpegStatus.value);
    return ffmpegStatus.value;
  };

  const begin = async (region: RecordingRegion) => {
    errorMessage.value = '';
    result.value = null;
    console.info(`${LOG_PREFIX} begin requested`, { region, settings: settings.value });
    const ffmpeg = ffmpegStatus.value ?? await refreshFfmpegStatus();
    if (!ffmpeg.available) {
      throw new Error(ffmpeg.message || 'FFmpeg unavailable');
    }
    await startRecording(region, settings.value);
    status.value = 'recording';
    accumulatedMs.value = 0;
    elapsedMs.value = 0;
    startedAt.value = Date.now();
    beginTicker();
    console.info(`${LOG_PREFIX} recording started`, { status: status.value });
  };

  const pause = async () => {
    if (status.value !== 'recording') return;
    console.info(`${LOG_PREFIX} pause requested`, { elapsedMs: elapsedMs.value });
    refreshElapsedMs();
    accumulatedMs.value = elapsedMs.value;
    startedAt.value = null;
    clearTicker();
    await pauseRecording();
    status.value = 'paused';
    console.info(`${LOG_PREFIX} recording paused`, { accumulatedMs: accumulatedMs.value });
  };

  const resume = async (region: RecordingRegion) => {
    if (status.value !== 'paused') return;
    console.info(`${LOG_PREFIX} resume requested`, { region, settings: settings.value });
    await resumeRecording(region, settings.value);
    status.value = 'recording';
    startedAt.value = Date.now();
    beginTicker();
    console.info(`${LOG_PREFIX} recording resumed`);
  };

  const stop = async () => {
    if (status.value !== 'recording' && status.value !== 'paused') return;
    console.info(`${LOG_PREFIX} stop requested`, { status: status.value, elapsedMs: elapsedMs.value });
    refreshElapsedMs();
    accumulatedMs.value = elapsedMs.value;
    startedAt.value = null;
    clearTicker();
    await stopRecording();
    status.value = 'exporting';
    console.info(`${LOG_PREFIX} recording stopped`, { accumulatedMs: accumulatedMs.value });
  };

  const exportFile = async () => {
    console.info(`${LOG_PREFIX} export requested`, { settings: settings.value });
    status.value = 'exporting';
    try {
      result.value = await exportRecording(settings.value);
      status.value = 'completed';
      console.info(`${LOG_PREFIX} export completed`, result.value);
      return result.value;
    } catch (error) {
      status.value = 'ready';
      result.value = null;
      throw error;
    }
  };

  const cancelExport = async () => {
    console.info(`${LOG_PREFIX} cancel export requested`, { status: status.value });
    await cancelExportRecording();
    status.value = 'ready';
    result.value = null;
  };

  const cancel = async () => {
    console.info(`${LOG_PREFIX} cancel requested`, { status: status.value, elapsedMs: elapsedMs.value });
    clearTicker();
    await cancelRecording();
    status.value = 'selecting';
    startedAt.value = null;
    accumulatedMs.value = 0;
    elapsedMs.value = 0;
    result.value = null;
    console.info(`${LOG_PREFIX} canceled`);
  };

  const reset = () => {
    console.info(`${LOG_PREFIX} reset session`);
    status.value = 'selecting';
    startedAt.value = null;
    accumulatedMs.value = 0;
    elapsedMs.value = 0;
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
    cancelExport,
    cancel,
    reset
  };
}
