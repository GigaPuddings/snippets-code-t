import { EditorState } from '@codemirror/state';
import {
  ensureSyntaxTree,
  syntaxTree,
  type HighlightStyle
} from '@codemirror/language';
import { highlightTree } from '@lezer/highlight';
import { StyleModule } from 'style-mod';
import { markdownLanguageSupport } from '@/utils/markdown-language';
import { restoreDeletedAttachment } from '@/plugins/attachments/api';

/** Enhance visible code gradually without replacing nodes in a user's selection. */
export function observePreviewCodeBlocks(
  host: HTMLElement,
  highlight: (code: HTMLElement, pre: HTMLElement) => void
): () => void {
  const pending = new Set<HTMLElement>();
  let frame: number | undefined;
  let disposed = false;
  let observer: IntersectionObserver | undefined;
  const schedule = (): void => {
    if (!disposed && pending.size && frame === undefined)
      frame = requestAnimationFrame(flush);
  };
  const flush = (): void => {
    frame = undefined;
    if (disposed) return;
    const started = performance.now();
    const selection = host.ownerDocument.getSelection();
    let progressed = false;
    for (const pre of pending) {
      if (
        selection &&
        !selection.isCollapsed &&
        selection.containsNode(pre, true)
      )
        continue;
      pending.delete(pre);
      observer?.unobserve(pre);
      const code = pre.querySelector<HTMLElement>('code');
      if (pre.isConnected && code) highlight(code, pre);
      progressed = true;
      if (performance.now() - started >= 8) break;
    }
    if (progressed) schedule();
  };
  if (typeof IntersectionObserver !== 'undefined')
    observer = new IntersectionObserver(
      (entries) => {
        if (disposed) return;
        for (const entry of entries) {
          const pre = entry.target as HTMLElement;
          if (entry.isIntersecting) pending.add(pre);
          else pending.delete(pre);
        }
        schedule();
      },
      { rootMargin: '400px 0px' }
    );
  for (const pre of host.querySelectorAll<HTMLElement>('pre')) {
    if (observer) observer.observe(pre);
    else pending.add(pre);
  }
  host.ownerDocument.addEventListener('selectionchange', schedule);
  schedule();
  return () => {
    disposed = true;
    observer?.disconnect();
    if (frame !== undefined) cancelAnimationFrame(frame);
    pending.clear();
    host.ownerDocument.removeEventListener('selectionchange', schedule);
  };
}

/** Reuse the editing parser and palette without mounting another editor. */
export function highlightCodeElement(
  element: HTMLElement,
  highlighter: HighlightStyle
) {
  if (highlighter.module)
    StyleModule.mount(element.ownerDocument, highlighter.module);
  const code = element.textContent || '';
  const language =
    /(?:^|\s)language-([^\s]+)/.exec(element.className)?.[1] || '';
  let fenceLength = 3;
  for (const match of code.matchAll(/`+/g))
    fenceLength = Math.max(fenceLength, match[0].length + 1);
  const fence = '`'.repeat(fenceLength);
  const prefix = fence + language + '\n';
  const state = EditorState.create({
    doc: prefix + code + '\n' + fence,
    extensions: [markdownLanguageSupport()]
  });
  const tree =
    ensureSyntaxTree(state, state.doc.length, 50) || syntaxTree(state);
  const fragment = document.createDocumentFragment();
  let offset = prefix.length;
  highlightTree(
    tree,
    highlighter,
    (from, to, classes) => {
      fragment.append(
        document.createTextNode(
          code.slice(offset - prefix.length, from - prefix.length)
        )
      );
      const span = document.createElement('span');
      span.className = classes;
      span.textContent = code.slice(from - prefix.length, to - prefix.length);
      fragment.append(span);
      offset = to;
    },
    prefix.length,
    prefix.length + code.length
  );
  fragment.append(document.createTextNode(code.slice(offset - prefix.length)));
  element.replaceChildren(fragment);
}

export function configurePreviewImage(
  image: HTMLImageElement,
  options: { imageScale: number; responsiveImages: boolean },
  onMeasure: () => void = () => undefined
) {
  const measure = () => {
    const scale = Number(image.dataset.imageScale) || options.imageScale;
    const width =
      Number(image.getAttribute('width')) || (image.naturalWidth * scale) / 100;
    image.style.width = `${Math.max(1, width)}px`;
    image.style.maxWidth = options.responsiveImages ? '100%' : 'none';
    image.style.height = 'auto';
    onMeasure();
  };
  image.addEventListener('load', measure, { once: true });
  if (image.complete && image.naturalWidth) measure();
  let active = true;
  const restore = async () => {
    const match = (image.dataset.originalPath || '')
      .replace(/\\/g, '/')
      .match(/(?:^|\/)\.?assets\/([^/]+)\/(?:.*\/)?([^/]+)$/);
    if (!match) return;
    try {
      if (
        (await restoreDeletedAttachment(match[1], match[2])) &&
        active &&
        image.isConnected
      ) {
        const url = new URL(image.src);
        url.searchParams.set('t', String(Date.now()));
        image.src = url.toString();
      }
    } catch {
      /* Keep the missing image's alt text. */
    }
  };
  image.addEventListener('error', restore, { once: true });
  return () => {
    active = false;
    image.removeEventListener('load', measure);
    image.removeEventListener('error', restore);
  };
}
