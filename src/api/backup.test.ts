import { describe, expect, it, vi } from 'vitest';
import { collectBackupFrontendState } from './backup';
vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn() }));

describe('frontend recovery export', () => {
  it('preserves draft identity, exact raw body and revision without rebasing', () => {
    const key = `editor-draft:v1:${JSON.stringify(['C:/old', 'note.md'])}`;
    const raw = JSON.stringify({
      title: 'Draft',
      content: 'body  \r\n',
      tags: [],
      contentRevision: 'old-revision'
    });
    const values = new Map([
      [key, raw],
      ['layout', '{"width":220}'],
      ['pendingNavigation', 'old path']
    ]);
    const storage = {
      length: values.size,
      key: (i: number) => [...values.keys()][i],
      getItem: (name: string) => values.get(name) ?? null
    } as Storage;
    const result = JSON.parse(collectBackupFrontendState(storage));
    expect(result[key]).toBe(raw);
    expect(result.layout).toBe('{"width":220}');
    expect(result.pendingNavigation).toBeUndefined();
    expect([...values.keys()][0]).toBe(key);
  });
});

it('omits diagnostic cache from the recovery export', () => {
  const values = new Map([
    ['snippets-code:frontend-diagnostics', '["log"]'],
    ['configuration', '{}']
  ]);
  const storage = {
    length: values.size,
    key: (i: number) => [...values.keys()][i],
    getItem: (name: string) => values.get(name) ?? null
  } as Storage;
  expect(JSON.parse(collectBackupFrontendState(storage))).toEqual({
    configuration: '{}'
  });
});
