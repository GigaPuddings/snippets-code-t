import { expect, it } from 'vitest';
import { forceParsing } from '@codemirror/language';
import type { TransactionSpec } from '@codemirror/state';
import type { EditorView } from '@codemirror/view';
import { createDocumentState, extractHeadings } from './document';
import { stickyHeadingRanges } from './stickyHeadings';

function headingRanges(content: string) {
  let state = createDocumentState(content);
  // Initial parsing has a time budget and can yield under parallel test load.
  // Finish the real parser before testing the complete heading list.
  const parsed = forceParsing(
    {
      get state() {
        return state;
      },
      dispatch(spec: TransactionSpec) {
        state = state.update(spec).state;
      }
    } as EditorView,
    state.doc.length,
    1000
  );
  if (!parsed)
    throw new Error('Markdown heading fixture did not finish parsing');
  return stickyHeadingRanges(state, extractHeadings(state));
}

it('uses real Markdown headings, retaining duplicates and the entire Setext range', () => {
  const content =
    '# Same\n\n```md\n# pretend\n```\n\nSame\n====\n\n#\n\n## ###\n\n## Last ##';
  const ranges = headingRanges(content);
  expect(ranges.map((heading) => heading.text)).toEqual([
    'Same',
    'Same',
    'Last'
  ]);
  expect(ranges[1].to).toBe(content.indexOf('====') + 4);
  expect(ranges[0].pos).not.toBe(ranges[1].pos);
});
