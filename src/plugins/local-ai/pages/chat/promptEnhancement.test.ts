import { describe, expect, it } from 'vitest';
import { normalizeEnhancedPrompt } from './promptEnhancement';

describe('normalizeEnhancedPrompt', () => {
  it('removes reasoning, Markdown syntax, labels, and trailing commentary', () => {
    const response = `
<think>分析原始请求并修正术语。</think>
\`\`\`markdown
# 优化后的提示词
- 使用 **llama-server** 构建本地推理服务。
- 返回 [JSON](https://www.json.org/) 数据，并保留 \`request_id\` 字段。
- 保持输入框简洁，并修正 llama-sever 为 llama-server。
\`\`\`

优化说明：
修正了服务名称并补充了输出格式。
`;

    expect(normalizeEnhancedPrompt(response)).toBe(
      [
        '使用 llama-server 构建本地推理服务。',
        '返回 JSON 数据，并保留 request_id 字段。',
        '保持输入框简洁，使用 llama-server。'
      ].join('\n')
    );
  });

  it('converts Markdown tables and numbered lists to direct plain text', () => {
    const response = `
Here is the improved prompt:
1. Preserve the **Vue 3** implementation.
2. Use \`ResizeObserver\` when content changes.

| Term | Required value |
| --- | --- |
| Framework | Tauri 2 |

This version is clearer and ready to use.
`;

    expect(normalizeEnhancedPrompt(response)).toBe(
      [
        'Preserve the Vue 3 implementation.',
        'Use ResizeObserver when content changes.',
        '',
        'Term；Required value',
        'Framework；Tauri 2'
      ].join('\n')
    );
  });

  it('preserves useful plain-text structure and technical identifiers', () => {
    const response = `最终提示词：目标：修复 input_padding 问题。

约束：保持 max-height 为 160px，不修改 llama-server。`;

    expect(normalizeEnhancedPrompt(response)).toBe(
      '目标：修复 input_padding 问题。\n\n约束：保持 max-height 为 160px，不修改 llama-server。'
    );
  });
});
