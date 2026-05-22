import { describe, expect, it, vi } from 'vitest';
import { resolveTemplateInputs } from './templateInputResolver';

describe('resolveTemplateInputs', () => {
  it('prompts for input variables and processes defaults', async () => {
    const prompt = vi.fn((label: string, defaultValue: string) => `${label}:${defaultValue}`);

    const result = await resolveTemplateInputs(
      'export function use{{input:Name:Modal}}() {}',
      { prompt }
    );

    expect(prompt).toHaveBeenCalledWith('Name', 'Modal');
    expect(result?.content).toBe('export function useName:Modal() {}');
    expect(result?.hasInputVariables).toBe(true);
  });

  it('returns null when user cancels an input prompt', async () => {
    const result = await resolveTemplateInputs(
      'const name = "{{input:Name}}"',
      { prompt: () => null }
    );

    expect(result).toBeNull();
  });

  it('reads clipboard only when clipboard variable is used', async () => {
    const clipboard = { readText: vi.fn(async () => 'from clipboard') };

    const result = await resolveTemplateInputs(
      'const value = "{{clipboard}}"',
      { clipboard }
    );

    expect(clipboard.readText).toHaveBeenCalledTimes(1);
    expect(result?.content).toBe('const value = "from clipboard"');
  });

  it('falls back to empty clipboard content when reading fails', async () => {
    const clipboard = {
      readText: vi.fn(async () => {
        throw new Error('denied');
      })
    };

    const result = await resolveTemplateInputs(
      'const value = "{{clipboard}}"',
      { clipboard }
    );

    expect(result?.content).toBe('const value = ""');
  });
});
