import { invoke } from '@tauri-apps/api/core';

export async function openFileWithDefaultApp(filePath: string): Promise<void> {
  await invoke('open_file_with_default_app', { filePath });
}

export async function revealFileInFolder(filePath: string): Promise<void> {
  await invoke('show_file_in_folder', { filePath });
}

export async function openFileWithOtherWays(filePath: string): Promise<void> {
  await invoke('open_path', { pathStr: filePath });
}
