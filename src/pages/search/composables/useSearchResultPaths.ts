import type { ContentType } from '@/types/models';

export function toDisplayText(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

export function isShellAppsFolderPath(value: string): boolean {
  return value.toLowerCase().startsWith('shell:appsfolder\\');
}

export function getSearchResultDisplayPath(item: ContentType | null | undefined): string {
  if (!item) return '';
  return (
    toDisplayText(item.file_path) ||
    toDisplayText(item.metadata?.file_path) ||
    toDisplayText(item.metadata?.display_path) ||
    toDisplayText(item.content)
  );
}

export function getSearchResultLaunchPath(item: ContentType | null | undefined): string {
  if (!item) return '';
  return toDisplayText(item.metadata?.launch_path) || getSearchResultDisplayPath(item);
}
