import type { EditorState } from '@codemirror/state';
import type { EditorView } from '@codemirror/view';
import { syntaxTree } from '@codemirror/language';
import type { ViewMode } from './document';

interface OutlineHeading {
  text: string;
  pos: number;
}
export interface StickyHeading extends OutlineHeading {
  to: number;
}

/** Keep outline positions, adding the end of wrapped and Setext headings. */
export function stickyHeadingRanges(
  state: EditorState,
  headings: readonly OutlineHeading[]
): StickyHeading[] {
  return headings.flatMap((heading) => {
    let node = syntaxTree(state).resolveInner(heading.pos, 1);
    while (!/^(ATX|Setext)Heading[1-6]$/.test(node.name)) {
      if (!node.parent) return [];
      node = node.parent;
    }
    const text = node.name.startsWith('ATX')
      ? state.doc
          .sliceString(node.from, node.to)
          .replace(/[ \t]+#+[ \t]*$/, '')
          .replace(/^#{1,6}(?:[ \t]+|$)/, '')
          .trim()
      : heading.text.trim();
    return text ? [{ text, pos: heading.pos, to: node.to }] : [];
  });
}

function lastHiddenIndex(
  length: number,
  bottom: (index: number) => number,
  viewportTop: number
): number {
  let left = 0;
  let right = length;
  while (left < right) {
    const middle = (left + right) >>> 1;
    if (bottom(middle) <= viewportTop) left = middle + 1;
    else right = middle;
  }
  return left - 1;
}

export function readEditorStickyHeading(
  view: Pick<EditorView, 'scrollDOM' | 'documentTop' | 'lineBlockAt'>,
  headings: readonly StickyHeading[]
): string | null {
  if (view.scrollDOM.scrollTop <= 0 || !headings.length) return null;
  const viewportTop =
    view.scrollDOM.getBoundingClientRect().top + view.scrollDOM.clientTop;
  const documentTop = view.documentTop;
  // lineBlockAt also works outside the rendered viewport. Its bottom covers
  // every wrapped line; the final Setext line includes the underline in source.
  const index = lastHiddenIndex(
    headings.length,
    (index) => documentTop + view.lineBlockAt(headings[index].to).bottom,
    viewportTop
  );
  return headings[index]?.text ?? null;
}

export function readReadingStickyHeading(host: HTMLElement): string | null {
  if (host.scrollTop <= 0) return null;
  const viewportTop = host.getBoundingClientRect().top + host.clientTop;
  const headings = host.querySelectorAll<HTMLElement>('h1,h2,h3,h4,h5,h6');
  let index = lastHiddenIndex(
    headings.length,
    (index) => headings[index].getBoundingClientRect().bottom,
    viewportTop
  );
  // Rendered HTML can contain extra headings, and inline Markdown is rendered
  // differently. Read each heading's own text instead of matching outline IDs.
  while (index >= 0) {
    const text = headings[index--].textContent?.trim();
    if (text) return text;
  }
  return null;
}

interface TrackerOptions {
  editor: () => EditorView | undefined;
  readingHost: () => HTMLElement | undefined;
  mode: () => ViewMode;
  headings: () => readonly StickyHeading[];
  onChange: (heading: string | null) => void;
}
interface StickyHeadingTracker {
  setEnabled: (value: boolean) => void;
  schedule: () => void;
  connect: () => void;
  reset: () => void;
  dispose: () => void;
}

export function createStickyHeadingTracker(
  options: TrackerOptions
): StickyHeadingTracker {
  let enabled = false;
  let disposed = false;
  let heading: string | null = null;
  let frame: number | undefined;
  let generation = 0;
  let root: HTMLElement | undefined;
  let observer: ResizeObserver | undefined;
  const measureKey = {};

  function publish(value: string | null): void {
    if (value === heading) return;
    heading = value;
    options.onChange(value);
  }
  function cancelPending(): void {
    generation++;
    if (frame !== undefined) cancelAnimationFrame(frame);
    frame = undefined;
  }
  function disconnect(): void {
    root?.removeEventListener('load', schedule, true);
    root?.removeEventListener('error', schedule, true);
    window.removeEventListener('resize', schedule);
    observer?.disconnect();
    observer = undefined;
    root = undefined;
  }
  function schedule(): void {
    if (!enabled || disposed || frame !== undefined) return;
    const currentGeneration = generation;
    frame = requestAnimationFrame(() => {
      frame = undefined;
      if (!enabled || disposed || generation !== currentGeneration) return;
      if (options.mode() === 'reading') {
        const host = options.readingHost();
        publish(host ? readReadingStickyHeading(host) : null);
        return;
      }
      const editor = options.editor();
      if (!editor) return;
      const current = (): boolean =>
        enabled &&
        !disposed &&
        generation === currentGeneration &&
        options.editor() === editor &&
        options.mode() !== 'reading';
      editor.requestMeasure({
        key: measureKey,
        read: () =>
          current()
            ? readEditorStickyHeading(editor, options.headings())
            : null,
        write: (value) => {
          if (current()) publish(value);
        }
      });
    });
  }
  function connect(): void {
    cancelPending();
    disconnect();
    if (!enabled || disposed) return;
    const editor = options.editor();
    root =
      options.mode() === 'reading' ? options.readingHost() : editor?.scrollDOM;
    root?.addEventListener('load', schedule, true);
    root?.addEventListener('error', schedule, true);
    window.addEventListener('resize', schedule);
    if (root && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(schedule);
      observer.observe(root);
      if (options.mode() !== 'reading' && editor)
        observer.observe(editor.contentDOM);
    }
    schedule();
  }
  function reset(): void {
    cancelPending();
    disconnect();
    publish(null);
  }
  function setEnabled(value: boolean): void {
    if (disposed || enabled === value) return;
    enabled = value;
    if (enabled) connect();
    else reset();
  }
  function dispose(): void {
    disposed = true;
    enabled = false;
    reset();
  }
  return { setEnabled, schedule, connect, reset, dispose };
}
