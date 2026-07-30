import { describe, expect, it } from 'vitest';
import {
  parseAiOcrLocationResponse,
  parseAiOcrResponse,
  shouldRetryAiOcrResult
} from './aiOcr';

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

  it('uses AI plain-text spacing to keep titles and list items separated', () => {
    const result = parseAiOcrResponse(
      [
        'Intelligent Document Parsing (LLM-Ready)',
        'Transforming messy visuals into structured data.',
        '',
        '• SOTA Document VLM: first paragraph.',
        '',
        '• Structure-Aware Conversion: second paragraph.'
      ].join('\n')
    );

    expect(result.sections).toEqual([
      { type: 'title', text: 'Intelligent Document Parsing (LLM-Ready)' },
      {
        type: 'paragraph',
        text: 'Transforming messy visuals into structured data.'
      },
      { type: 'list', text: '• SOTA Document VLM: first paragraph.' },
      {
        type: 'list',
        text: '• Structure-Aware Conversion: second paragraph.'
      }
    ]);
  });

  it('retries through AI when a response stops after one short heading block', () => {
    expect(
      shouldRetryAiOcrResult({
        text: 'Intelligent Document Parsing\n\nTransforming messy visuals',
        sections: [
          { type: 'title', text: 'Intelligent Document Parsing' },
          { type: 'paragraph', text: 'Transforming messy visuals' }
        ]
      })
    ).toBe(true);
    expect(
      shouldRetryAiOcrResult({
        text: 'Complete visual transcription '.repeat(20),
        sections: [
          { type: 'title', text: 'Title' },
          {
            type: 'paragraph',
            text: 'Complete visual transcription '.repeat(20)
          }
        ]
      })
    ).toBe(false);
  });

  it('keeps AI line text and normalizes AI coordinates for image selection', () => {
    const sections = [
      { type: 'title' as const, text: 'Document title' },
      { type: 'paragraph' as const, text: 'First line Second line' }
    ];
    const result = parseAiOcrLocationResponse(
      JSON.stringify({
        sections: [
          {
            index: 0,
            lines: [{ text: 'Document title', bbox: [0.1, 0.05, 0.5, 0.12] }]
          },
          {
            index: 1,
            lines: [
              { text: 'First line', bbox: [100, 180, 700, 240] },
              { text: 'Second line', bbox: [100, 250, 640, 310] }
            ]
          }
        ]
      }),
      sections
    );

    expect(result[0].lines?.[0].bbox).toEqual({
      x: 100,
      y: 50,
      width: 400,
      height: 70
    });
    expect(result[1].lines?.map((line) => line.text)).toEqual([
      'First line',
      'Second line'
    ]);
  });
});
