import { invoke } from '@tauri-apps/api/core';
import type {
  FfmpegStatus,
  RecordingExportResult,
  RecordingRegion,
  RecordingSettings,
  RecorderPassthroughRegion,
  RecorderSnapRegion
} from './types';

const LOG_PREFIX = '[screen-recorder]';

const summarizePayload = (payload?: Record<string, unknown>) => {
  if (!payload) return undefined;
  return JSON.parse(JSON.stringify(payload));
};

const invokeWithLog = async <T>(
  command: string,
  payload?: Record<string, unknown>
): Promise<T> => {
  const started = performance.now();
  const summary = summarizePayload(payload);
  console.info(`${LOG_PREFIX} invoke:start ${command}`, summary ?? '');
  try {
    const result = await invoke<T>(command, payload);
    console.info(`${LOG_PREFIX} invoke:success ${command}`, {
      elapsedMs: Math.round(performance.now() - started),
      result
    });
    return result;
  } catch (error) {
    console.error(`${LOG_PREFIX} invoke:error ${command}`, {
      elapsedMs: Math.round(performance.now() - started),
      error
    });
    throw error;
  }
};

export const getFfmpegStatus = (): Promise<FfmpegStatus> =>
  invokeWithLog('screen_recorder_get_ffmpeg_status');

export const getRecorderBackground = (): Promise<string> =>
  invokeWithLog('screen_recorder_get_background');

export const getRecorderPreview = (): Promise<string> =>
  invokeWithLog('screen_recorder_get_preview');

export const clearRecorderBackground = (): Promise<void> =>
  invokeWithLog('screen_recorder_clear_background');

export const pickRecordingRegion = (): Promise<RecordingRegion> =>
  invokeWithLog('screen_recorder_pick_region');

export const setRecorderCaptureExcluded = (excluded: boolean): Promise<void> =>
  invokeWithLog('screen_recorder_set_capture_excluded', { excluded });

export const setRecorderPassthroughRegion = (
  region: RecorderPassthroughRegion | null
): Promise<void> =>
  invokeWithLog('screen_recorder_set_passthrough_region', { region });

export const pickTargetWindow = (): Promise<RecorderSnapRegion> =>
  invokeWithLog('screen_recorder_pick_target_window');

export const closeRecorderWindow = (): Promise<void> =>
  invokeWithLog('screen_recorder_close_window');

export const startRecording = (
  region: RecordingRegion,
  settings: RecordingSettings
): Promise<void> =>
  invokeWithLog('screen_recorder_start_recording', {
    region,
    fps: settings.fps,
    quality: settings.quality,
    audio: settings.format === 'mp4'
  });

export const pauseRecording = (): Promise<void> =>
  invokeWithLog('screen_recorder_pause_recording');

export const resumeRecording = (
  region: RecordingRegion,
  settings: RecordingSettings
): Promise<void> =>
  invokeWithLog('screen_recorder_resume_recording', {
    region,
    fps: settings.fps,
    quality: settings.quality,
    audio: settings.format === 'mp4'
  });

export const stopRecording = (): Promise<void> =>
  invokeWithLog('screen_recorder_stop_recording');

export const cancelRecording = (): Promise<void> =>
  invokeWithLog('screen_recorder_cancel_recording');

export const cancelExportRecording = (): Promise<void> =>
  invokeWithLog('screen_recorder_cancel_export');

export const exportRecording = (
  settings: RecordingSettings
): Promise<RecordingExportResult> =>
  invokeWithLog('screen_recorder_export_recording', {
    format: settings.format,
    fps: settings.fps,
    quality: settings.quality,
    savePath: settings.savePath
  });
