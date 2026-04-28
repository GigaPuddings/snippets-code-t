import { invoke } from '@tauri-apps/api/core';

export async function openFileWithDefaultApp(filePath: string): Promise<void> {
  await invoke('open_file_with_default_app', { filePath });
}

export async function showFileInFolder(filePath: string): Promise<void> {
  await invoke('show_file_in_folder', { filePath });
}
