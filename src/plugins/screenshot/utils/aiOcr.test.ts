import { describe, expect, it } from 'vitest';
import { parseAiOcrResponse } from './aiOcr';

describe('AI OCR response parsing', () => {
  it('normalizes fenced JSON into structured sections', () => {
    const result = parseAiOcrResponse(`\`\`\`json
{"text":"文字识别结果\\n\\n支持一键复制","sections":[{"type":"title","text":"文字识别结果"},{"type":"paragraph","text":"支持一键复制"}]}
\`\`\``);

    expect(result.sections).toEqual([
      { type: 'title', text: '文字识别结果' },
      { type: 'paragraph', text: '支持一键复制' }
    ]);
  });

  it('falls back to readable paragraphs for a plain-text model response', () => {
    const result = parseAiOcrResponse('主标题\n\n第一段正文。\n\n第二段正文。');

    expect(result.text).toContain('第一段正文');
    expect(result.sections).toHaveLength(3);
    expect(result.sections[0].type).toBe('title');
  });
});
