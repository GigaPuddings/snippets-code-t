import { describe, expect, it } from 'vitest';
import {
  countOrderedPromptItems,
  hasRequiredEnhancedPromptLanguage,
  normalizeEnhancedPrompt
} from './promptEnhancement';

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

  it('preserves useful plain-text structure and technical identifiers', () => {
    const response = `最终提示词：目标：修复 input_padding 问题。

约束：保持 max-height 为 160px，不修改 llama-server。`;

    expect(normalizeEnhancedPrompt(response)).toBe(
      '目标：修复 input_padding 问题。\n\n约束：保持 max-height 为 160px，不修改 llama-server。'
    );
  });
});

describe('ordered prompt preservation', () => {
  it('counts top-level ordered tasks in the source prompt', () => {
    expect(
      countOrderedPromptItems('1、第一项\n2. 第二项\n3) 第三项\n普通补充说明')
    ).toBe(3);
  });

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

describe('enhanced prompt language', () => {
  it('requires Chinese output when the source prompt contains Chinese', () => {
    expect(
      hasRequiredEnhancedPromptLanguage(
        '请修复聊天页面的输入框。',
        'Fix the chat input.'
      )
    ).toBe(false);
    expect(
      hasRequiredEnhancedPromptLanguage(
        '请修复聊天页面的输入框。',
        '请修复聊天页面的输入框，并保持 160px 高度上限。'
      )
    ).toBe(true);
    expect(
      hasRequiredEnhancedPromptLanguage(
        'Fix the chat input.',
        'Fix the chat input.'
      )
    ).toBe(true);
  });
});
