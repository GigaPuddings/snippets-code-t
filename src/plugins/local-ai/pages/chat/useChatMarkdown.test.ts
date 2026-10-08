import { afterEach, describe, expect, it, vi } from 'vitest';
import { marked } from 'marked';
import type { ChatMessage } from './types';
import { useChatMarkdown } from './useChatMarkdown';

vi.mock('vue-i18n', () => ({ useI18n: () => ({ t: (key: string) => key }) }));
vi.mock('@/utils/modal', () => ({ default: { msg: vi.fn() } }));
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

const reply = (index: number, content = `# Reply ${index}`): ChatMessage => ({
  id: String(index),
  role: 'assistant',
  content,
  createdAt: '2026-10-08'
});

describe('AI chat Markdown rendering cache', () => {
  it('reuses replies when switching back to two conversations with over 24 sections', () => {
    const parse = vi.spyOn(marked, 'parse');
    const renderer = useChatMarkdown();
    const messages = Array.from({ length: 40 }, (_, i) => reply(i));
    const initial = messages.map((message) =>
      renderer.renderMessageMarkdown(message, 'answer')
    );
    const restored = messages.map((message) =>
      renderer.renderMessageMarkdown(message, 'answer')
    );
    expect(restored).toEqual(initial);
    expect(parse).toHaveBeenCalledTimes(40);
  });
  it('retains recently used HTML, invalidates edited replies and clears on disposal', () => {
    const parse = vi.spyOn(marked, 'parse');
    const renderer = useChatMarkdown();
    for (let i = 0; i < 64; i++)
      renderer.renderMessageMarkdown(reply(i), 'answer');
    renderer.renderMessageMarkdown(reply(0), 'answer');
    renderer.renderMessageMarkdown(reply(64), 'answer');
    renderer.renderMessageMarkdown(reply(0), 'answer');
    expect(parse).toHaveBeenCalledTimes(65);
    renderer.renderMessageMarkdown(reply(1), 'answer');
    expect(parse).toHaveBeenCalledTimes(66);
    expect(
      renderer.renderMessageMarkdown(reply(0, 'Edited answer'), 'answer')
    ).toContain('Edited answer');
    renderer.clearMarkdownState();
    renderer.renderMessageMarkdown(reply(0), 'answer');
    expect(parse).toHaveBeenCalledTimes(68);
  });
  it('bounds cache memory even when fewer than 64 replies are very large', () => {
    const parse = vi.spyOn(marked, 'parse');
    const renderer = useChatMarkdown();
    const messages = Array.from({ length: 12 }, (_, i) =>
      reply(i, `Reply ${i} ` + 'x'.repeat(100_000))
    );
    for (const message of messages)
      renderer.renderMessageMarkdown(message, 'answer');
    renderer.renderMessageMarkdown(messages.at(-1)!, 'answer');
    expect(parse).toHaveBeenCalledTimes(12);
    renderer.renderMessageMarkdown(messages[0], 'answer');
    expect(parse).toHaveBeenCalledTimes(13);
  });
  it('copies the displayed code after other histories evict its cached HTML', async () => {
    const renderer = useChatMarkdown();
    const html = renderer.renderMessageMarkdown(
      reply(0, '```ts\nconst value = "<x>";\n```'),
      'answer'
    );
    expect(html).toContain('code-copy-btn');
    expect(html).toContain('&lt;x&gt;');
    for (let i = 1; i < 80; i++)
      renderer.renderMessageMarkdown(reply(i), 'answer');
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal('navigator', { clipboard: { writeText } });
    const code = { textContent: 'const value = "<x>";\n' };
    const shell = { querySelector: () => code };
    const button = { closest: () => shell };
    const target = { closest: () => button };
    await renderer.handleMarkdownClick({ target } as unknown as MouseEvent);
    expect(writeText).toHaveBeenCalledWith('const value = "<x>";\n');
  });
  it('throttles streamed Markdown and renders the complete reply when it ends', () => {
    const parse = vi.spyOn(marked, 'parse');
    vi.spyOn(Date, 'now').mockReturnValue(1000);
    const renderer = useChatMarkdown();
    const message = { ...reply(0, 'First'), streaming: true };
    expect(renderer.renderMessageMarkdown(message, 'answer')).toContain(
      'First'
    );
    message.content += ' second';
    expect(renderer.renderMessageMarkdown(message, 'answer')).not.toContain(
      'second'
    );
    expect(parse).toHaveBeenCalledTimes(1);
    message.streaming = false;
    expect(renderer.renderMessageMarkdown(message, 'answer')).toContain(
      'First second'
    );
  });
});
