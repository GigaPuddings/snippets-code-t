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

  it('converts Markdown tables while retaining numbered task boundaries', () => {
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
        '1、Preserve the Vue 3 implementation.',
        '2、Use ResizeObserver when content changes.',
        '',
        'Term；Required value',
        'Framework；Tauri 2'
      ].join('\n')
    );
  });
});

describe('ordered prompt preservation', () => {
  it('preserves ordered task boundaries while removing Markdown syntax', () => {
    const response = `
1. **重新设计**搜索检索样式，解决当前界面不够美观的问题。
2) 移除重置过程中的右下角弹框，仅在完成时显示系统通知。
3、修复 config 窗口最小化后无法从托盘菜单重新显示的问题。
`;

    expect(normalizeEnhancedPrompt(response)).toBe(
      [
        '1、重新设计搜索检索样式，解决当前界面不够美观的问题。',
        '2、移除重置过程中的右下角弹框，仅在完成时显示系统通知。',
        '3、修复 config 窗口最小化后无法从托盘菜单重新显示的问题。'
      ].join('\n')
    );
  });
});
