import { invoke } from '@tauri-apps/api/core';

const ESCAPE_CLOSE_WINDOW_LABELS = new Set(['main', 'config', 'dark_mode']);

export function shouldCloseWindowOnEscape(label: string): boolean {
  return ESCAPE_CLOSE_WINDOW_LABELS.has(label);
}

export async function closeWindowByLabel(label: string): Promise<void> {
  await invoke('show_hide_window_command', { label: label === 'main' ? 'search' : label });
}
