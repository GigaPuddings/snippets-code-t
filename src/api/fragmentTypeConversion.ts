import type { FragmentMetadata } from '@/types/database';
import type { MarkdownFile } from '@/types/models';

export type FragmentType = 'code' | 'note';

export interface ConvertFragmentTypeUpdates {
  content?: string;
  title?: string;
  tags?: string[] | null;
  metadata?: FragmentMetadata | null;
}

export function buildFragmentTypeConversionUpdate(
  currentFile: MarkdownFile,
  targetType: FragmentType,
  updates: ConvertFragmentTypeUpdates = {}
): { content: string; metadata: Partial<MarkdownFile> } {
  return {
    content: updates.content ?? currentFile.content,
    metadata: {
      title: updates.title ?? currentFile.title,
      tags: updates.tags ?? currentFile.tags,
      type: targetType,
      language:
        (updates.metadata?.language as string | undefined) ??
        currentFile.language,
      framework:
        (updates.metadata?.framework as string | undefined) ??
        currentFile.framework,
      kind: (updates.metadata?.kind as string | undefined) ?? currentFile.kind,
      favorite: currentFile.favorite
    }
  };
}
