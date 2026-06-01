import { describe, expect, it } from 'vitest';
import { stringifyDiagnosticValue } from './developer-diagnostics';

describe('stringifyDiagnosticValue', () => {
  it('preserves nested error details', () => {
    const value = stringifyDiagnosticValue({
      command: 'screen_recorder_start',
      error: new Error('capture failed')
    });

    expect(value).toContain('"message": "capture failed"');
    expect(value).toContain('"stack":');
  });

  it('handles circular references and bigint values', () => {
    const value: { count: bigint; self?: unknown } = { count: 12n };
    value.self = value;

    expect(stringifyDiagnosticValue(value)).toBe(`{
  "count": "12",
  "self": "[Circular]"
}`);
  });
});
