import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { nextTick, ref, watch } from 'vue';
import { parse } from 'vue/compiler-sfc';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { forceParsing } from '@codemirror/language';
import type { TransactionSpec } from '@codemirror/state';
import type { EditorView } from '@codemirror/view';
import { createDocumentState, extractHeadings } from './document';
import {
  createStickyHeadingTracker,
  readEditorStickyHeading,
  readReadingStickyHeading,
  stickyHeadingRanges
} from './stickyHeadings';

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

class ScrollHost extends EventTarget {
  scrollTop = 100;
  clientTop = 2;
  top = 40;
  nodes: Array<{
    textContent: string;
    getBoundingClientRect: () => { bottom: number };
  }> = [];
  getBoundingClientRect = vi.fn(() => ({ top: this.top }));
  querySelectorAll = vi.fn(() => this.nodes);
  asElement() {
    return this as unknown as HTMLElement;
  }
}

function editorFixture() {
  const host = new ScrollHost();
  let documentTop = -160;
  const ranges = headingRanges('# First\n\nbody\n\n## Second\n\nbody');
  const bottoms = new Map(
    ranges.map((heading, index) => [heading.to, 180 + index * 100])
  );
  const measures: Array<{
    read: () => string | null;
    write: (value: string | null) => void;
  }> = [];
  const editor = {
    scrollDOM: host.asElement(),
    contentDOM: new ScrollHost().asElement(),
    get documentTop() {
      return documentTop;
    },
    lineBlockAt: vi.fn((pos: number) => ({ bottom: bottoms.get(pos) ?? 9999 })),
    requestMeasure: vi.fn((request) => measures.push(request))
  } as unknown as EditorView;
  return {
    host,
    ranges,
    editor,
    measures,
    moveDocument(top: number) {
      documentTop = top;
    },
    flushMeasure() {
      const pending = measures.splice(0);
      for (const request of pending) request.write(request.read());
    }
  };
}

afterEach(() => vi.unstubAllGlobals());

describe('sticky heading layout', () => {
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

  it('waits until the full heading line block has left the bordered viewport, without visible DOM', () => {
    const fixture = editorFixture();
    fixture.moveDocument(-137);
    expect(readEditorStickyHeading(fixture.editor, fixture.ranges)).toBeNull();
    fixture.moveDocument(-138);
    expect(readEditorStickyHeading(fixture.editor, fixture.ranges)).toBe(
      'First'
    );
    fixture.moveDocument(-238);
    expect(readEditorStickyHeading(fixture.editor, fixture.ranges)).toBe(
      'Second'
    );
    expect(fixture.host.querySelectorAll).not.toHaveBeenCalled();
  });

  it('restores the earlier heading when scrolling up and clears at the top without measuring', () => {
    const fixture = editorFixture();
    fixture.moveDocument(-260);
    expect(readEditorStickyHeading(fixture.editor, fixture.ranges)).toBe(
      'Second'
    );
    fixture.moveDocument(-160);
    expect(readEditorStickyHeading(fixture.editor, fixture.ranges)).toBe(
      'First'
    );
    fixture.host.scrollTop = 0;
    vi.mocked(fixture.editor.lineBlockAt).mockClear();
    expect(readEditorStickyHeading(fixture.editor, fixture.ranges)).toBeNull();
    expect(fixture.editor.lineBlockAt).not.toHaveBeenCalled();
  });

  it('uses the bottom of a multiline Setext heading, including its underline', () => {
    const fixture = editorFixture();
    const ranges = headingRanges('First line\nsecond line\n===');
    vi.mocked(fixture.editor.lineBlockAt).mockImplementation(
      (pos) =>
        ({ bottom: pos === ranges[0].to ? 205 : 10 }) as ReturnType<
          EditorView['lineBlockAt']
        >
    );
    expect(readEditorStickyHeading(fixture.editor, ranges)).toBeNull();
    fixture.moveDocument(-163);
    expect(readEditorStickyHeading(fixture.editor, ranges)).toBe(
      'First line\nsecond line'
    );
  });

  it('reads actual rendered heading text even when HTML headings differ from the Markdown outline', () => {
    const host = new ScrollHost();
    let lastBottom = 43;
    host.nodes = [
      {
        textContent: 'HTML heading',
        getBoundingClientRect: () => ({ bottom: 10 })
      },
      {
        textContent: 'Repeated',
        getBoundingClientRect: () => ({ bottom: 20 })
      },
      { textContent: '  ', getBoundingClientRect: () => ({ bottom: 21 }) },
      {
        textContent: ' Rendered title ',
        getBoundingClientRect: () => ({ bottom: lastBottom })
      }
    ];
    expect(readReadingStickyHeading(host.asElement())).toBe('Repeated');
    lastBottom = 42;
    expect(readReadingStickyHeading(host.asElement())).toBe('Rendered title');
    host.scrollTop = 0;
    host.querySelectorAll.mockClear();
    expect(readReadingStickyHeading(host.asElement())).toBeNull();
    expect(host.querySelectorAll).not.toHaveBeenCalled();
  });

  it('finds a heading in a large virtualized document with logarithmic layout reads', () => {
    const fixture = editorFixture();
    const ranges = Array.from({ length: 4096 }, (_, index) => ({
      text: String(index),
      pos: index * 10,
      to: index * 10 + 5
    }));
    vi.mocked(fixture.editor.lineBlockAt).mockImplementation(
      (pos) => ({ bottom: pos }) as ReturnType<EditorView['lineBlockAt']>
    );
    fixture.moveDocument(-20000);
    expect(readEditorStickyHeading(fixture.editor, ranges)).toBe('2003');
    expect(fixture.editor.lineBlockAt).toHaveBeenCalledTimes(12);
  });
});

function trackerFixture() {
  const editor = editorFixture();
  const reading = new ScrollHost();
  reading.nodes = [
    { textContent: 'Reading', getBoundingClientRect: () => ({ bottom: 10 }) }
  ];
  const frames = new Map<number, FrameRequestCallback>();
  let nextFrame = 0;
  vi.stubGlobal(
    'requestAnimationFrame',
    vi.fn((callback) => {
      frames.set(++nextFrame, callback);
      return nextFrame;
    })
  );
  vi.stubGlobal(
    'cancelAnimationFrame',
    vi.fn((id) => frames.delete(id))
  );
  const windowTarget = new EventTarget();
  vi.stubGlobal('window', windowTarget);
  const disconnect = vi.fn();
  const observe = vi.fn();
  let resize: (() => void) | undefined;
  vi.stubGlobal(
    'ResizeObserver',
    class {
      constructor(callback: () => void) {
        resize = callback;
      }
      observe = observe;
      disconnect = disconnect;
    }
  );
  const onChange = vi.fn();
  let mode: 'preview' | 'source' | 'reading' = 'preview';
  const tracker = createStickyHeadingTracker({
    editor: () => editor.editor,
    readingHost: () => reading.asElement(),
    mode: () => mode,
    headings: () => editor.ranges,
    onChange
  });
  return {
    ...editor,
    tracker,
    reading,
    frames,
    onChange,
    disconnect,
    observe,
    windowTarget,
    setMode(value: typeof mode) {
      mode = value;
    },
    resize() {
      resize?.();
    },
    flushFrame() {
      const pending = [...frames.values()];
      frames.clear();
      pending.forEach((callback) => callback(0));
    }
  };
}

describe('sticky heading scheduling and lifecycle', () => {
  it('remeasures reading headings after delayed initial settings resize cached images without load or resize events', async () => {
    const fixture = trackerFixture();
    let imageHeight = 30;
    fixture.reading.nodes = [
      {
        textContent: 'Earlier section',
        getBoundingClientRect: () => ({ bottom: 10 })
      },
      {
        textContent: 'Later section',
        getBoundingClientRect: () => ({ bottom: imageHeight })
      }
    ];
    fixture.setMode('reading');
    fixture.tracker.setEnabled(true);
    fixture.flushFrame();
    expect(fixture.onChange).toHaveBeenLastCalledWith('Later section');

    const attachmentConfig = ref({ defaultImageScalePercent: 50 });
    const stop = watch(attachmentConfig, (config) => {
      imageHeight = config.defaultImageScalePercent;
    });
    const { descriptor } = parse(
      readFileSync(new URL('./index.vue', import.meta.url), 'utf8')
    );
    if (!descriptor.scriptSetup)
      throw new Error('Missing MarkdownEditor script');
    const ast = ts.createSourceFile(
      'editor.ts',
      descriptor.scriptSetup.content,
      ts.ScriptTarget.Latest,
      true
    );
    const match: { callback?: ts.Expression } = {};
    const visit = (node: ts.Node): void => {
      if (
        ts.isCallExpression(node) &&
        ts.isPropertyAccessExpression(node.expression) &&
        node.expression.name.text === 'then' &&
        ts.isCallExpression(node.expression.expression) &&
        ts.isPropertyAccessExpression(node.expression.expression.expression) &&
        node.expression.expression.expression.name.text === 'all' &&
        node.expression.expression.expression.expression.getText(ast) ===
          'Promise'
      )
        match.callback = node.arguments[0];
      ts.forEachChild(node, visit);
    };
    ts.forEachChild(ast, visit);
    if (!match.callback)
      throw new Error('Missing initial editor settings callback');
    const callbackCode = ts.transpileModule(
      `(${match.callback.getText(ast)})`,
      {
        compilerOptions: { target: ts.ScriptTarget.ES2022 }
      }
    ).outputText;
    const applyInitialSettings = runInNewContext(callbackCode, {
      disposed: false,
      workspaceRoot: ref(''),
      attachmentConfig,
      reconfigurePreview: vi.fn(),
      stickyHeadingTracker: fixture.tracker,
      nextTick
    });
    let resolveSettings!: (
      result: [string, { defaultImageScalePercent: number }]
    ) => void;
    const settings = new Promise<
      [string, { defaultImageScalePercent: number }]
    >((resolve) => {
      resolveSettings = resolve;
    }).then(applyInitialSettings);
    try {
      resolveSettings(['C:/Notes', { defaultImageScalePercent: 75 }]);
      await settings;
      await nextTick();
      fixture.flushFrame();
      expect(imageHeight).toBe(75);
      expect(fixture.onChange).toHaveBeenLastCalledWith('Earlier section');
    } finally {
      stop();
      fixture.tracker.dispose();
    }
  });

  it('clears an emitted heading when the document changes, then derives only the replacement content', () => {
    const fixture = trackerFixture();
    fixture.tracker.setEnabled(true);
    fixture.flushFrame();
    fixture.flushMeasure();
    expect(fixture.onChange).toHaveBeenLastCalledWith('First');
    fixture.tracker.reset();
    expect(fixture.onChange).toHaveBeenLastCalledWith(null);
    fixture.ranges.splice(
      0,
      fixture.ranges.length,
      ...headingRanges('# New document')
    );
    vi.mocked(fixture.editor.lineBlockAt).mockReturnValue({
      bottom: 100
    } as ReturnType<EditorView['lineBlockAt']>);
    fixture.tracker.connect();
    fixture.flushFrame();
    fixture.flushMeasure();
    expect(fixture.onChange.mock.calls).toEqual([
      ['First'],
      [null],
      ['New document']
    ]);
    fixture.tracker.reset();
    fixture.ranges.splice(0);
    fixture.tracker.connect();
    fixture.flushFrame();
    fixture.flushMeasure();
    expect(fixture.onChange).toHaveBeenLastCalledWith(null);
  });

  it('does no extra layout work while disabled and merges updates into one measurement', () => {
    const fixture = trackerFixture();
    fixture.tracker.schedule();
    expect(fixture.frames.size).toBe(0);
    expect(fixture.observe).not.toHaveBeenCalled();
    fixture.tracker.setEnabled(true);
    fixture.tracker.schedule();
    fixture.tracker.schedule();
    expect(fixture.frames.size).toBe(1);
    fixture.flushFrame();
    expect(fixture.editor.requestMeasure).toHaveBeenCalledTimes(1);
    fixture.flushMeasure();
    expect(fixture.onChange.mock.calls).toEqual([['First']]);
    fixture.tracker.schedule();
    fixture.flushFrame();
    fixture.flushMeasure();
    expect(fixture.onChange).toHaveBeenCalledTimes(1);
  });

  it.each(['source', 'reading'] as const)(
    'clears the previous mode and measures %s after reconnecting',
    (mode) => {
      const fixture = trackerFixture();
      fixture.tracker.setEnabled(true);
      fixture.flushFrame();
      fixture.flushMeasure();
      fixture.tracker.reset();
      expect(fixture.onChange).toHaveBeenLastCalledWith(null);
      fixture.setMode(mode);
      fixture.tracker.connect();
      fixture.flushFrame();
      fixture.flushMeasure();
      expect(fixture.onChange).toHaveBeenLastCalledWith(
        mode === 'reading' ? 'Reading' : 'First'
      );
    }
  );

  it('discards queued editor measurements after a document switch or disabling', () => {
    const fixture = trackerFixture();
    fixture.tracker.setEnabled(true);
    fixture.flushFrame();
    fixture.tracker.reset();
    fixture.ranges.splice(0);
    fixture.flushMeasure();
    expect(fixture.onChange).not.toHaveBeenCalled();
    fixture.tracker.connect();
    fixture.flushFrame();
    fixture.tracker.setEnabled(false);
    fixture.flushMeasure();
    expect(fixture.onChange).not.toHaveBeenCalled();
    expect(fixture.disconnect).toHaveBeenCalled();
    fixture.host.dispatchEvent(new Event('load'));
    fixture.windowTarget.dispatchEvent(new Event('resize'));
    expect(fixture.frames.size).toBe(0);
  });

  it('recomputes after image load, root resize and window resize; disables and disposes cleanly', () => {
    const fixture = trackerFixture();
    fixture.tracker.setEnabled(true);
    fixture.flushFrame();
    fixture.flushMeasure();
    fixture.moveDocument(-260);
    fixture.host.dispatchEvent(new Event('load'));
    fixture.resize();
    fixture.windowTarget.dispatchEvent(new Event('resize'));
    expect(fixture.frames.size).toBe(1);
    fixture.flushFrame();
    fixture.flushMeasure();
    expect(fixture.onChange).toHaveBeenLastCalledWith('Second');
    fixture.tracker.setEnabled(false);
    expect(fixture.onChange).toHaveBeenLastCalledWith(null);
    fixture.tracker.setEnabled(true);
    expect(fixture.frames.size).toBe(1);
    fixture.tracker.dispose();
    expect(fixture.frames.size).toBe(0);
    fixture.host.dispatchEvent(new Event('load'));
    fixture.resize();
    fixture.tracker.schedule();
    fixture.tracker.setEnabled(true);
    expect(fixture.frames.size).toBe(0);
  });
});
