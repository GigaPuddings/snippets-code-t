export type RecordingFormat = 'mp4' | 'gif';
export type RecordingQuality = 'high' | 'standard' | 'small';
export type RecordingStatus =
  | 'selecting'
  | 'ready'
  | 'recording'
  | 'paused'
  | 'exporting'
  | 'completed';

export interface RecordingRegion {
  x: number;
  y: number;
  width: number;
  height: number;
  screenX: number;
  screenY: number;
  physicalWidth: number;
  physicalHeight: number;
  scale: number;
}

export interface RecordingSettings {
  format: RecordingFormat;
  fps: 15 | 24 | 30 | 60;
  quality: RecordingQuality;
  savePath: string;
  audio: boolean;
  showCursor: boolean;
}

export interface FfmpegStatus {
  available: boolean;
  path?: string;
  source?: string;
  searchedPaths: string[];
  message?: string;
  audioDevices?: string[];
  systemAudioAvailable?: boolean;
}

export interface RecordingExportResult {
  path: string;
  sizeBytes: number;
  width: number;
  height: number;
  format: RecordingFormat;
  hasAudio?: boolean;
  audioDevice?: string;
  debugLogPath?: string;
}

export interface RecordingExportProgress {
  stage: 'frames' | 'palette' | 'encode' | 'done' | string;
  message: string;
  progress: number;
  currentFrame: number;
  totalFrames?: number;
}

export interface RecorderPassthroughRegion {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface RecorderOverlayWindowRegion {
  width: number;
  height: number;
  topHeight: number;
  bottomHeight: number;
}

export interface RecorderSnapRegion {
  screenX: number;
  screenY: number;
  physicalWidth: number;
  physicalHeight: number;
  title: string;
}
