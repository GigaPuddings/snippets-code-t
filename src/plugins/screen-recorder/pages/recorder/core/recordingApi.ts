import { invoke } from '@tauri-apps/api/core';
import type {
  FfmpegStatus,
  RecordingExportResult,
  RecordingRegion,
  RecordingSettings,
  RecorderPassthroughRegion,
  RecorderSnapRegion
} from './types';

export const getFfmpegStatus = (): Promise<FfmpegStatus> =>
  invoke('screen_recorder_get_ffmpeg_status');

export const getRecorderBackground = (): Promise<string> =>
  invoke('screen_recorder_get_background');

export const getRecorderPreview = (): Promise<string> =>
  invoke('screen_recorder_get_preview');

export const clearRecorderBackground = (): Promise<void> =>
  invoke('screen_recorder_clear_background');

export const pickRecordingRegion = (): Promise<RecordingRegion> =>
  invoke('screen_recorder_pick_region');

export const setRecorderCaptureExcluded = (excluded: boolean): Promise<void> =>
  invoke('screen_recorder_set_capture_excluded', { excluded });

export const setRecorderPassthroughRegion = (
  region: RecorderPassthroughRegion | null
): Promise<void> =>
  invoke('screen_recorder_set_passthrough_region', { region });

export const pickTargetWindow = (): Promise<RecorderSnapRegion> =>
  invoke('screen_recorder_pick_target_window');

export const closeRecorderWindow = (): Promise<void> =>
  invoke('screen_recorder_close_window');

export const startRecording = (
  region: RecordingRegion,
  settings: RecordingSettings
): Promise<void> =>
  invoke('screen_recorder_start_recording', {
    region,
    fps: settings.fps,
    quality: settings.quality,
    audio: settings.format === 'mp4' && settings.audio
  });

export const pauseRecording = (): Promise<void> =>
  invoke('screen_recorder_pause_recording');

export const resumeRecording = (
  region: RecordingRegion,
  settings: RecordingSettings
): Promise<void> =>
  invoke('screen_recorder_resume_recording', {
    region,
    fps: settings.fps,
    quality: settings.quality,
    audio: settings.format === 'mp4' && settings.audio
  });

export const stopRecording = (): Promise<void> =>
  invoke('screen_recorder_stop_recording');

export const cancelRecording = (): Promise<void> =>
  invoke('screen_recorder_cancel_recording');

export const exportRecording = (
  settings: RecordingSettings
): Promise<RecordingExportResult> =>
  invoke('screen_recorder_export_recording', {
    format: settings.format,
    fps: settings.fps,
    quality: settings.quality,
    savePath: settings.savePath
  });
