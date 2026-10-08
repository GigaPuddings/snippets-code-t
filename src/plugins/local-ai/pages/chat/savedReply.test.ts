import { describe, expect, it, vi } from 'vitest';
import type { MarkdownFile } from '@/types/models';
import {
  noteReference,
  relativeNotePath,
  resolveNote,
  savedAnswerContent
} from './savedReply';
import { splitReasoning } from './useChatMarkdown';

vi.mock('@/utils/modal', () => ({ default: { msg: vi.fn() } }));

const note = {
  documentId: 'note-uuid',
  filePath: '/vault/Inbox/answer.md',
  title: 'Answer'
} as MarkdownFile;

describe('saved reply identity and Markdown', () => {
  it('uses portable workspace-relative paths and rejects escaping paths', () => {
    expect(relativeNotePath('C:\\Notes', 'c:\\Notes\\Inbox\\reply.md')).toBe(
      'Inbox/reply.md'
    );
    expect(() => relativeNotePath('/vault', '/vault-other/reply.md')).toThrow();
    expect(() => relativeNotePath('/vault', '/vault/../outside.md')).toThrow();
    expect(noteReference('/vault', note)).toEqual({
      documentId: 'note-uuid',
      filePath: 'Inbox/answer.md',
      title: 'Answer'
    });
  });

  it('follows UUIDs after a move and never resolves a replacement at the old path', () => {
    const reference = noteReference('/vault', note);
    const moved = { ...note, filePath: '/vault/Docs/moved.md' };
    const replacement = { ...note, documentId: 'replacement' };
    expect(resolveNote([replacement, moved], reference)).toBe(moved);
    expect(resolveNote([replacement], reference)).toBeUndefined();
    expect(
      resolveNote([note], { filePath: 'Inbox/answer.md', title: 'Legacy note' })
    ).toBe(note);
  });

  it('preserves code fences, tables, lists and quotes without saving reasoning', () => {
    const answer =
      '# Answer\n\n1. Step\n\n```ts\nimport vue from "vue";\n\nexport default { plugins: [vue()] };\n```\n\n| A | B |\n| --- | --- |\n| 1 | 2 |\n\n> Original quotation';
    const finalAnswer = splitReasoning(
      `<think>Private reasoning</think>\n\n${answer}`
    ).answer;
    const saved = savedAnswerContent(
      finalAnswer,
      'AI generated\nTest model',
      'Question\nsecond line'
    );
    expect(saved).toBe(
      `${answer}\n\n---\n\n> AI generated Test model\n\n> Question\n> second line`
    );
    expect(saved).not.toContain('Private reasoning');
    expect(savedAnswerContent(answer, 'Attribution', '')).toBe(
      `${answer}\n\n---\n\n> Attribution`
    );
  });
});
