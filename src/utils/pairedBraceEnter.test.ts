import { describe, expect, it } from 'vitest';
import { createPairedBraceEnterEdit } from './pairedBraceEnter';

describe('createPairedBraceEnterEdit', () => {
  it('creates an indented blank line between paired braces', () => {
    expect(createPairedBraceEnterEdit('{}', 1, '  ')).toEqual({
      insert: '\n  \n',
      cursorOffset: 3
    });
  });

  it('keeps the closing brace aligned with the current line indentation', () => {
    expect(createPairedBraceEnterEdit('  {}', 3, '  ')).toEqual({
      insert: '\n    \n  ',
      cursorOffset: 5
    });
  });

  it('does not handle Enter outside a brace pair', () => {
    expect(createPairedBraceEnterEdit('const value = 1;', 8, '  ')).toBeNull();
  });

  it('continues with one more indent after an opening brace', () => {
    const code = '  switch(action) {';
    expect(createPairedBraceEnterEdit(code, code.length, '  ')).toEqual({
      insert: '\n    ',
      cursorOffset: 5
    });
  });

  it('creates an indented blank line between paired html tags', () => {
    const code = '<div></div>';
    expect(createPairedBraceEnterEdit(code, 5, '  ')).toEqual({
      insert: '\n  \n',
      cursorOffset: 3
    });
  });

  it('continues with one more indent after an opening html tag', () => {
    const code = '  <section className="panel">';
    expect(createPairedBraceEnterEdit(code, code.length, '  ')).toEqual({
      insert: '\n    ',
      cursorOffset: 5
    });
  });

  it('keeps jsx closing tags aligned with the opening tag', () => {
    const code = '  <Counter></Counter>';
    expect(createPairedBraceEnterEdit(code, 11, '  ')).toEqual({
      insert: '\n    \n  ',
      cursorOffset: 5
    });
  });
});
