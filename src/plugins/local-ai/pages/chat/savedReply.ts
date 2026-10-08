import type { MarkdownFile } from '@/types/models';
import type { NoteReference } from '@/types/aiNote';

export function relativeNotePath(root: string, path: string): string {
  const normalizedRoot = root.replace(/\\/g, '/').replace(/\/$/, '');
  const normalizedPath = path.replace(/\\/g, '/');
  if (
    !normalizedPath.toLowerCase().startsWith(`${normalizedRoot.toLowerCase()}/`)
  ) {
    throw new Error('Note is outside the selected workspace');
  }
  const relative = normalizedPath.slice(normalizedRoot.length + 1);
  if (relative.split('/').some((part) => part === '..' || part === '.')) {
    throw new Error('Invalid workspace note path');
  }
  return relative;
}

export function noteReference(root: string, file: MarkdownFile): NoteReference {
  return {
    documentId: file.documentId,
    filePath: relativeNotePath(root, file.filePath),
    title: file.title
  };
}

export function resolveNote(
  notes: MarkdownFile[],
  reference: NoteReference
): MarkdownFile | undefined {
  // A deleted UUID must never silently resolve to a different file at the old path.
  return reference.documentId
    ? notes.find((note) => note.documentId === reference.documentId)
    : notes.find((note) =>
        note.filePath.replace(/\\/g, '/').endsWith(`/${reference.filePath}`)
      );
}

export function savedAnswerContent(
  answer: string,
  attribution: string,
  question: string
): string {
  const lines = [
    answer.trim(),
    '',
    '---',
    '',
    `> ${attribution.replace(/\r?\n/g, ' ')}`
  ];
  if (question.trim())
    lines.push('', `> ${question.replace(/\r?\n/g, '\n> ')}`);
  return lines.join('\n');
}
