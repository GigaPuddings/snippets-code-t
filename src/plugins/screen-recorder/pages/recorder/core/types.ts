export type RecordingFormat = 'mp4' | 'gif';
export type RecordingQuality = 'high' | 'standard' | 'small';
export type RecordingStatus = 'selecting' | 'ready' | 'recording' | 'paused' | 'exporting' | 'completed';

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
}

export interface FfmpegStatus {
  available: boolean;
  path?: string;
  source?: string;
  searchedPaths: string[];
  message?: string;
}

export interface RecordingExportResult {
  path: string;
  sizeBytes: number;
  width: number;
  height: number;
  format: RecordingFormat;
}
