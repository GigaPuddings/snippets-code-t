import { describe, expect, it } from 'vitest';
import { Compartment, EditorState } from '@codemirror/state';
import { documentLineSeparator } from './lineEndings';

describe('code document line endings', () => {
  it('preserves CRLF, trailing spaces and the final newline when editing', () => {
    const original = 'first\r\nsecond  \r\n';
    const state = EditorState.create({
      doc: original,
      extensions: [
        EditorState.lineSeparator.of(documentLineSeparator(original))
      ]
    });
    const edited = state.update({ changes: { from: 0, insert: 'x' } }).state;
    expect(edited.sliceDoc()).toBe('xfirst\r\nsecond  \r\n');
  });
  it('switches newline policy when reusing the editor for another document', () => {
    const separator = new Compartment();
    let state = EditorState.create({
      doc: 'a\r\nb',
      extensions: [
        separator.of(
          EditorState.lineSeparator.of(documentLineSeparator('a\r\nb'))
        )
      ]
    });
    state = state.update({
      effects: separator.reconfigure(
        EditorState.lineSeparator.of(documentLineSeparator('a\nb'))
      )
    }).state;
    state = state.update({
      changes: { from: 0, to: state.doc.length, insert: 'a\nb' }
    }).state;
    expect(
      state.update({ changes: { from: 0, insert: 'x' } }).state.sliceDoc()
    ).toBe('xa\nb');
  });
});
