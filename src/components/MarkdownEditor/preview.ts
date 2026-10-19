import {
  StateField,
  type EditorState,
  type Extension,
  type Range
} from '@codemirror/state';
import {
  Decoration,
  EditorView,
  WidgetType,
  type DecorationSet
} from '@codemirror/view';
import { ensureSyntaxTree, syntaxTree } from '@codemirror/language';
import { highlightTree, type Highlighter } from '@lezer/highlight';
import type { SyntaxNode } from '@lezer/common';
import { createDocumentState } from './document';
import { renderNoteMarkdown } from '@/utils/markdown';
import { restoreDeletedAttachment } from '@/plugins/attachments/api';
import { TableWidget } from './table';

export interface PreviewTarget {
  kind: 'image' | 'table';
  from: number;
  to: number;
  source: string;
  prefix?: string;
}

export function previewTarget(
  state: EditorState,
  kind: PreviewTarget['kind'],
  from: number,
  to: number
): PreviewTarget {
  return {
    kind,
    from,
    to,
    source: state.doc.sliceString(from, to),
    ...(kind === 'table'
      ? { prefix: state.doc.sliceString(state.doc.lineAt(from).from, from) }
      : {})
  };
}

export interface PreviewOptions {
  workspaceRoot: string;
  noteFilePath?: string;
  onImage: (target: PreviewTarget, event: MouseEvent) => void;
  onLink: (href: string, wiki: boolean) => void;
  tableCellLabel?: (row: number, column: number) => string;
  onTableCommand?: (command: string) => void;
  imageScale: number;
  responsiveImages: boolean;
  showImagePath: boolean;
  onCodeLanguage?: (target: CodeTarget) => void;
  onCopyCode?: (code: string) => void;
  codeLanguageLabel: string;
  copyCodeLabel: string;
  plainTextLabel: string;
}

export interface CodeTarget {
  from: number;
  to: number;
  source: string;
}

/** Reuse the editing parser and palette without mounting another editor. */
export function highlightCodeElement(
  element: HTMLElement,
  highlighter: Highlighter
) {
  const code = element.textContent || '';
  const language =
    /(?:^|\s)language-([^\s]+)/.exec(element.className)?.[1] || '';
  let fenceLength = 3;
  for (const match of code.matchAll(/`+/g))
    fenceLength = Math.max(fenceLength, match[0].length + 1);
  const fence = '`'.repeat(fenceLength);
  const prefix = fence + language + '\n';
  const state = createDocumentState(prefix + code + '\n' + fence);
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

class CodeToolbar extends WidgetType {
  constructor(
    readonly target: CodeTarget,
    readonly options: PreviewOptions
  ) {
    super();
  }
  eq(other: CodeToolbar) {
    return (
      this.target.from === other.target.from &&
      this.target.source === other.target.source &&
      this.options === other.options
    );
  }
  toDOM(view: EditorView) {
    const toolbar = document.createElement('span');
    toolbar.className = 'md-code-toolbar';
    const language = document.createElement('button');
    language.type = 'button';
    language.textContent =
      this.target.source
        .replace(/^[ \t]*(?:`{3,}|~{3,})[ \t]*/, '')
        .split('\n')[0] || this.options.plainTextLabel;
    language.title = this.options.codeLanguageLabel;
    language.setAttribute('aria-label', language.title);
    language.addEventListener('click', () => {
      if (!view.state.readOnly) this.options.onCodeLanguage?.(this.target);
    });
    const copy = document.createElement('button');
    copy.type = 'button';
    copy.textContent = this.options.copyCodeLabel;
    copy.addEventListener('click', () => {
      const lines = this.target.source.split('\n');
      lines.shift();
      if (/^\s*(?:`{3,}|~{3,})\s*$/.test(lines.at(-1) || '')) lines.pop();
      this.options.onCopyCode?.(lines.join('\n'));
    });
    toolbar.append(language, copy);
    return toolbar;
  }
  ignoreEvent() {
    return true;
  }
}

class ListMarker extends WidgetType {
  constructor(readonly text: string) {
    super();
  }
  eq(other: ListMarker) {
    return this.text === other.text;
  }
  toDOM() {
    const marker = document.createElement('span');
    marker.className = 'md-list-marker md-list-marker-preview';
    marker.textContent = this.text;
    return marker;
  }
}

export function configurePreviewImage(
  image: HTMLImageElement,
  options: Pick<PreviewOptions, 'imageScale' | 'responsiveImages'>,
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
  image.addEventListener(
    'error',
    async () => {
      const match = (image.dataset.originalPath || '')
        .replace(/\\/g, '/')
        .match(/(?:^|\/)\.?assets\/([^/]+)\/(?:.*\/)?([^/]+)$/);
      if (!match) return;
      try {
        if (
          (await restoreDeletedAttachment(match[1], match[2])) &&
          image.isConnected
        ) {
          const url = new URL(image.src);
          url.searchParams.set('t', String(Date.now()));
          image.src = url.toString();
        }
      } catch {
        /* Keep the missing image's alt text. */
      }
    },
    { once: true }
  );
}

export function sourceRangeIsActive(
  state: EditorState,
  from: number,
  to: number
) {
  return state.selection.ranges.some((range) => {
    const first = state.doc.lineAt(range.from);
    const last = state.doc.lineAt(range.to);
    return first.from <= to && last.to >= from;
  });
}

export function previewTargets(state: EditorState): PreviewTarget[] {
  const targets: PreviewTarget[] = [];
  syntaxTree(state).iterate({
    enter(node) {
      const source = state.doc.sliceString(node.from, node.to);
      if (node.name === 'Table') {
        targets.push(previewTarget(state, 'table', node.from, node.to));
      }
      if (
        node.name === 'Image' ||
        (['HTMLBlock', 'HTMLTag'].includes(node.name) &&
          /^<img\b[^>]*>\s*$/i.test(source))
      ) {
        targets.push({ kind: 'image', from: node.from, to: node.to, source });
        return false;
      }
      return undefined;
    }
  });
  return targets;
}

class TaskWidget extends WidgetType {
  constructor(
    readonly from: number,
    readonly checked: boolean
  ) {
    super();
  }
  eq(other: TaskWidget) {
    return this.from === other.from && this.checked === other.checked;
  }
  toDOM(view: EditorView) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = this.checked;
    checkbox.className = 'md-task-checkbox';
    checkbox.setAttribute(
      'aria-label',
      view.state.doc
        .lineAt(this.from)
        .text.replace(/^\s*[-+*]\s+\[[ xX]\]\s*/, '')
    );
    checkbox.addEventListener('change', () => {
      if (view.state.readOnly) {
        checkbox.checked = this.checked;
        return;
      }
      const marker = view.state.doc.sliceString(this.from, this.from + 3);
      if (!/^\[[ xX]\]$/.test(marker)) return;
      view.dispatch({
        changes: {
          from: this.from + 1,
          to: this.from + 2,
          insert: checkbox.checked ? 'x' : ' '
        },
        userEvent: 'input'
      });
    });
    return checkbox;
  }
  ignoreEvent() {
    return true;
  }
}

class ImageWidget extends WidgetType {
  constructor(
    readonly target: PreviewTarget,
    readonly options: PreviewOptions
  ) {
    super();
  }
  eq(other: ImageWidget) {
    return (
      this.target.source === other.target.source &&
      this.target.from === other.target.from &&
      this.target.prefix === other.target.prefix &&
      this.options === other.options
    );
  }
  toDOM(view: EditorView) {
    const wrapper = document.createElement('span');
    wrapper.className = 'md-preview-widget md-preview-image';
    wrapper.dataset.sourceFrom = String(this.target.from);
    const content = document.createElement('span');
    content.className = 'md-rendered';
    // Shared renderer sanitizes HTML; original Markdown remains in EditorState.
    content.innerHTML = renderNoteMarkdown(
      this.target.source,
      this.options.workspaceRoot,
      this.options.noteFilePath || ''
    );
    wrapper.append(content);
    const reveal = () => {
      view.dispatch({
        selection: { anchor: this.target.from },
        scrollIntoView: true
      });
      view.focus();
    };
    content.addEventListener('click', reveal);
    content.addEventListener('keydown', (event) => {
      if ((event as KeyboardEvent).key === 'Enter') reveal();
    });
    content.tabIndex = 0;
    wrapper.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!view.state.readOnly) this.options.onImage(this.target, event);
    });
    const image = content.querySelector('img');
    if (image) {
      configurePreviewImage(image, this.options, () => view.requestMeasure());
      if (this.options.showImagePath) {
        const path = document.createElement('span');
        path.className = 'md-image-path';
        path.textContent =
          image.dataset.originalPath || image.getAttribute('src');
        wrapper.prepend(path);
      }
    }
    return wrapper;
  }
  ignoreEvent() {
    return true;
  }
}

function childMarks(node: SyntaxNode, names: string[]) {
  const children: SyntaxNode[] = [];
  for (let child = node.firstChild; child; child = child.nextSibling) {
    if (names.includes(child.name)) children.push(child);
  }
  return children;
}

export function livePreview(options: PreviewOptions): Extension {
  const build = (state: EditorState): DecorationSet => {
    const ranges: Range<Decoration>[] = [];
    const codeLines = new Set<number>();
    const headingLines = new Set<number>();
    const listLines = new Set<number>();
    const orderedNumbers = new Map<number, number>();
    const activeQuotes: Array<{ from: number; to: number; line: number }> = [];
    const hide = (from: number, to: number) => {
      if (to > from) ranges.push(Decoration.replace({}).range(from, to));
    };
    const hideListIndent = (to: number) => {
      const line = state.doc.lineAt(to);
      const prefix = state.doc.sliceString(line.from, to);
      // Quote marks have their own decorations; only replace the list indent.
      const quote = /^(?:[ \t]*>[ \t]?)+/.exec(prefix)?.[0].length || 0;
      hide(line.from + quote, to);
    };
    syntaxTree(state).iterate({
      enter(ref) {
        const { node, from, to, name } = ref;
        const active = sourceRangeIsActive(state, from, to);
        const source = state.doc.sliceString(from, to);
        if (name === 'OrderedList') {
          const mark = node.getChild('ListItem')?.getChild('ListMark');
          orderedNumbers.set(
            from,
            mark ? Number(state.doc.sliceString(mark.from, mark.to - 1)) : 1
          );
        }
        if (
          name === 'Table' ||
          name === 'Image' ||
          (['HTMLBlock', 'HTMLTag'].includes(name) &&
            /^<img\b[^>]*>\s*$/i.test(source))
        ) {
          if (!active || name === 'Table') {
            const kind = name === 'Table' ? 'table' : 'image';
            ranges.push(
              Decoration.replace({
                widget:
                  kind === 'table'
                    ? new TableWidget(
                        previewTarget(state, kind, from, to),
                        options,
                        state.readOnly
                      )
                    : new ImageWidget(
                        previewTarget(state, kind, from, to),
                        options
                      ),
                block: kind === 'table'
              }).range(
                kind === 'table' ? state.doc.lineAt(from).from : from,
                to
              )
            );
          }
          return false;
        }
        if (/^(ATX|Setext)Heading[1-6]$/.test(name)) {
          const first = state.doc.lineAt(from),
            last = state.doc.lineAt(to);
          for (let number = first.number; number <= last.number; number++)
            headingLines.add(number);
          ranges.push(
            Decoration.line({
              class: `md-heading md-heading-${name.at(-1)}`,
              attributes: {
                style: `padding-top:${first.number > 1 && state.doc.line(first.number - 1).text.trim() ? 'var(--markdown-heading-gap)' : '0'};padding-bottom:${last.number < state.doc.lines && state.doc.line(last.number + 1).text.trim() ? 'var(--markdown-heading-bottom-gap)' : '0'}`
              }
            }).range(first.from)
          );
          if (name.startsWith('Setext') && !active)
            ranges.push(
              Decoration.line({ class: 'md-heading-underline' }).range(
                last.from
              )
            );
          if (!active)
            for (const mark of childMarks(node, ['HeaderMark'])) {
              hide(
                mark.from,
                mark.to +
                  (state.doc.sliceString(mark.to, mark.to + 1) === ' ' ? 1 : 0)
              );
            }
        }
        if (name === 'FencedCode' || name === 'CodeBlock') {
          const first = state.doc.lineAt(from),
            last = state.doc.lineAt(to);
          const marks = childMarks(node, ['CodeMark']);
          for (let line = first.number; line <= last.number; line++) {
            codeLines.add(line);
            const fence =
              !active &&
              marks.some((mark) => state.doc.lineAt(mark.from).number === line);
            ranges.push(
              Decoration.line({
                class: `md-code-line${line === first.number ? ' md-code-first' : ''}${line === last.number ? ' md-code-last' : ''}${fence ? ' md-code-fence' : ''}`,
                attributes: { 'data-code-from': String(first.from) }
              }).range(state.doc.line(line).from)
            );
            if (fence) hide(state.doc.line(line).from, state.doc.line(line).to);
          }
          if (name === 'FencedCode')
            ranges.push(
              Decoration.widget({
                widget: new CodeToolbar({ from, to, source }, options),
                side: -1
              }).range(first.from)
            );
          return false;
        }
        const inlineClass: Record<string, string> = {
          StrongEmphasis: 'md-strong',
          Emphasis: 'md-emphasis',
          Strikethrough: 'md-strike',
          InlineCode: 'md-inline-code'
        };
        if (inlineClass[name]) {
          ranges.push(
            Decoration.mark({ class: inlineClass[name] }).range(from, to)
          );
          if (!active)
            for (const mark of childMarks(node, [
              'EmphasisMark',
              'StrikethroughMark',
              'CodeMark'
            ]))
              hide(mark.from, mark.to);
          if (name === 'InlineCode') return false;
        }
        if (name === 'WikiLink') {
          const title = source.slice(2, -2);
          ranges.push(
            Decoration.mark({
              class: 'md-link md-wikilink',
              attributes: { 'data-wikilink': title }
            }).range(from, to)
          );
          if (!active) {
            hide(from, from + 2);
            hide(to - 2, to);
          }
          return false;
        }
        if (name === 'Link') {
          const url = node.getChild('URL');
          if (url) {
            ranges.push(
              Decoration.mark({
                class: 'md-link',
                attributes: {
                  'data-href': state.doc.sliceString(url.from, url.to)
                }
              }).range(from, to)
            );
            if (!active) {
              const marks = childMarks(node, ['LinkMark']);
              if (marks.length >= 3) {
                hide(marks[0].from, marks[0].to);
                hide(marks[1].from, to);
              }
            }
          }
        }
        if (name === 'TaskMarker' && !active)
          ranges.push(
            Decoration.replace({
              widget: new TaskWidget(from, /x/i.test(source))
            }).range(
              from,
              to + (state.doc.sliceString(to, to + 1) === ' ' ? 1 : 0)
            )
          );
        if (name === 'QuoteMark') {
          const line = state.doc.lineAt(from);
          const quote = node.parent;
          ranges.push(
            Decoration.line({
              class: 'md-quote-line',
              attributes: {
                style: `padding-top:${quote && state.doc.lineAt(quote.from).number === line.number ? '4px' : '0'};padding-bottom:${quote && state.doc.lineAt(quote.to).number === line.number ? '4px' : '0'}`
              }
            }).range(line.from)
          );
          if (!active)
            hide(
              from,
              to + (state.doc.sliceString(to, to + 1) === ' ' ? 1 : 0)
            );
          else activeQuotes.push({ from, to, line: line.number });
        }
        if (name === 'ListItem') {
          let depth = 0;
          for (let parent = node.parent; parent; parent = parent.parent)
            if (parent.name === 'ListItem') depth++;
          const mark = node.getChild('ListMark');
          if (mark) {
            const ordered = node.parent?.name === 'OrderedList';
            const ordinal = ordered
              ? (orderedNumbers.get(node.parent!.from) ?? 1)
              : 0;
            if (ordered) orderedNumbers.set(node.parent!.from, ordinal + 1);
            const first = state.doc.lineAt(from);
            const task = /^\s*[-+*]\s+\[[ xX]\]/.test(first.text);
            const previous =
              node.prevSibling?.name === 'ListItem' ? node.prevSibling : null;
            const sameListKind =
              previous &&
              /^\s*[-+*]\s+\[[ xX]\]/.test(
                state.doc.lineAt(previous.from).text
              ) === task;
            const paragraphs = new Set([first.number]);
            for (
              let child = node.firstChild;
              child;
              child = child.nextSibling
            ) {
              if (child.name !== 'Paragraph') continue;
              for (
                let number = state.doc.lineAt(child.from).number;
                number <= state.doc.lineAt(child.to).number;
                number++
              )
                paragraphs.add(number);
            }
            for (const number of paragraphs) {
              if (listLines.has(number)) continue;
              listLines.add(number);
              ranges.push(
                Decoration.line({
                  class: 'md-list-line',
                  attributes: {
                    style: `--md-list-depth:${depth + (task ? 0 : 1)};--md-list-hang:${number === first.number && !task ? 1 : 0};padding-top:${number === first.number ? (sameListKind ? 'var(--markdown-list-item-gap)' : depth > 0 ? 'var(--markdown-heading-bottom-gap)' : '0') : '0'}`
                  }
                }).range(state.doc.line(number).from)
              );
              const line = state.doc.line(number);
              const lineActive = sourceRangeIsActive(state, line.from, line.to);
              if (number === first.number) {
                if (!task || !lineActive) {
                  const end =
                    mark.to +
                    (/^[ \t]*/.exec(
                      state.doc.sliceString(mark.to, line.to)
                    )?.[0].length || 0);
                  hideListIndent(mark.from);
                  hide(mark.to, end);
                  if (lineActive)
                    ranges.push(
                      Decoration.mark({
                        class: 'md-list-marker md-list-marker-preview'
                      }).range(mark.from, mark.to)
                    );
                  else {
                    ranges.push(
                      Decoration.replace({
                        widget: task
                          ? undefined
                          : new ListMarker(
                              /^[-+*]$/.test(
                                state.doc.sliceString(mark.from, mark.to)
                              )
                                ? '•'
                                : `${ordinal}.`
                            )
                      }).range(mark.from, mark.to)
                    );
                  }
                }
              } else {
                const prefix = state.doc.sliceString(line.from, line.to);
                const indent =
                  /^(?:[ \t]*>[ \t]?)*[ \t]*/.exec(prefix)?.[0].length || 0;
                hideListIndent(line.from + indent);
              }
            }
          }
        }
        if (name === 'HorizontalRule' && !active)
          ranges.push(
            Decoration.mark({ class: 'md-horizontal-rule' }).range(from, to)
          );
        return undefined;
      }
    });
    for (const quote of activeQuotes) {
      if (listLines.has(quote.line))
        hide(
          quote.from,
          quote.to +
            (state.doc.sliceString(quote.to, quote.to + 1) === ' ' ? 1 : 0)
        );
    }
    for (let number = 1; number <= state.doc.lines; number++) {
      const line = state.doc.line(number);
      if (line.text || codeLines.has(number)) continue;
      ranges.push(
        Decoration.line({
          class: 'md-empty-line',
          attributes: {
            style: `--md-empty-height:${headingLines.has(number + 1) ? 'var(--markdown-heading-gap)' : headingLines.has(number - 1) ? 'var(--markdown-heading-bottom-gap)' : 'var(--markdown-block-gap)'}`
          }
        }).range(line.from)
      );
    }
    return Decoration.set(ranges, true);
  };
  return [
    StateField.define<DecorationSet>({
      create: build,
      update(value, transaction) {
        if (
          transaction.docChanged ||
          transaction.startState.readOnly !== transaction.state.readOnly ||
          syntaxTree(transaction.startState) !== syntaxTree(transaction.state)
        )
          return build(transaction.state);
        if (!transaction.selection) return value;
        const previous = transaction.startState.selection.ranges;
        const next = transaction.state.selection.ranges;
        const sameLines =
          previous.length === next.length &&
          previous.every(
            (range, index) =>
              transaction.state.doc.lineAt(range.from).number ===
                transaction.state.doc.lineAt(next[index].from).number &&
              transaction.state.doc.lineAt(range.to).number ===
                transaction.state.doc.lineAt(next[index].to).number
          );
        return sameLines ? value : build(transaction.state);
      },
      provide: (field) => EditorView.decorations.from(field)
    }),
    EditorView.domEventHandlers({
      mouseover(event, view) {
        const line = (event.target as HTMLElement).closest<HTMLElement>(
          '.md-code-line'
        );
        const first = line
          ? view.contentDOM.querySelector<HTMLElement>(
              `.md-code-first[data-code-from="${line.dataset.codeFrom}"]`
            )
          : null;
        view.contentDOM
          .querySelectorAll('.md-code-hover')
          .forEach((element) => {
            if (element !== first) element.classList.remove('md-code-hover');
          });
        first?.classList.add('md-code-hover');
        return false;
      },
      click(event) {
        const element = (event.target as HTMLElement).closest<HTMLElement>(
          '[data-wikilink], [data-href]'
        );
        if (!element || !(event.ctrlKey || event.metaKey)) return false;
        event.preventDefault();
        options.onLink(
          element.dataset.wikilink || element.dataset.href || '',
          Boolean(element.dataset.wikilink)
        );
        return true;
      }
    })
  ];
}
