import { open } from '@tauri-apps/plugin-dialog';

export function appendSetupAppFolder(
  path: string,
  defaultPath: string
): string {
  if (!path || path === defaultPath) return path;

  const lowerPath = path.toLowerCase();
  if (
    lowerPath.endsWith('snippets-code') ||
    lowerPath.endsWith('snippets code') ||
    lowerPath.includes('com.snippets-code.app')
  ) {
    return path;
  }
  return path.replace(/[\\/]+$/, '') + '\\snippets-code';
}

export async function pickSetupDirectory(
  title: string,
  errorMessage: string
): Promise<string | null> {
  try {
    return await open({ directory: true, title });
  } catch (error) {
    console.error(errorMessage, error);
    return null;
  }
}
