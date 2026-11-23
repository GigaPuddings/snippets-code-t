import { expect, it, vi } from 'vitest';
import { savedAnswerContent } from './savedReply';
import { splitReasoning } from './useChatMarkdown';

vi.mock('@/utils/modal', () => ({ default: { msg: vi.fn() } }));

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
