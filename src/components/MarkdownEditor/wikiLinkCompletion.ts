import { syntaxTree } from '@codemirror/language';
import {
  Prec,
  StateEffect,
  StateField,
  type EditorState,
  type Extension
} from '@codemirror/state';
import {
  Decoration,
  EditorView,
  keymap,
  showTooltip,
  ViewPlugin,
  type TooltipView,
  type ViewUpdate
} from '@codemirror/view';
import type { SyntaxNode } from '@lezer/common';
import {
  matchWikiLinkTitles,
  wikiLinkTitleKey,
  type WikiLinkTarget
} from '@/utils/wikilink-titles';
import { editorComposing, trackEditorComposition } from './composition';

export type WikiLinkCatalog =
  | { status: 'loading' | 'error' }
  | { status: 'ready'; titles: ReadonlyMap<string, WikiLinkTarget> };

export const wikiLinkCatalogChanged = StateEffect.define<WikiLinkCatalog>();
const focusChanged = StateEffect.define<boolean>();
const selectOption = StateEffect.define<number>();
const dismissPicker = StateEffect.define<null>();
const outsideWikiLink = new Set([
  'InlineCode',
  'CodeBlock',
  'FencedCode',
  'Link',
  'Image',
  'HTMLBlock',
  'HTMLTag',
  'Autolink'
]);

interface WikiLinkRange {
  from: number;
  to: number;
  query: string;
  closed?: boolean;
}

export function wikiLinkAtCursor(state: EditorState): WikiLinkRange | null {
  const { empty, head } = state.selection.main;
  if (!empty) return null;
  const line = state.doc.lineAt(head);
  const before = line.text.slice(0, head - line.from);
  const opening = before.lastIndexOf('[[');
  if (opening < 0) return null;
  const query = before.slice(opening + 2);
  const tree = syntaxTree(state);
  if (query.endsWith(']]')) {
    const link = tree.resolveInner(head, -1);
    return link.name === 'WikiLink' && link.to === head
      ? {
          from: link.from,
          to: head,
          query: state.sliceDoc(link.from + 2, head - 2),
          closed: true
        }
      : null;
  }
  if (query.includes(']')) return null;
  const escapes = /\\+$/.exec(before.slice(0, opening))?.[0].length ?? 0;
  if (escapes % 2) return null;
  const from = line.from + opening;
  for (
    let node: SyntaxNode | null = tree.resolveInner(from + 1);
    node;
    node = node.parent
  ) {
    if (outsideWikiLink.has(node.name)) return null;
  }
  const after = line.text.slice(head - line.from);
  const closing = /^[^[\]]*\]\]/.exec(after)?.[0];
  return {
    from,
    to: head + (closing?.length ?? Number(after.startsWith(']'))),
    query
  };
}

interface Picker {
  range: WikiLinkRange;
  options: WikiLinkTarget[];
  active: number;
  status: WikiLinkCatalog['status'];
}

interface CompletionOptions {
  id: string;
  catalog: () => WikiLinkCatalog;
  text: (status: 'loading' | 'error' | 'missing' | 'empty' | 'label') => string;
}

export function wikiLinkCompletion(options: CompletionOptions): Extension {
  const catalog = StateField.define<WikiLinkCatalog>({
    create: options.catalog,
    update(value, transaction) {
      return (
        transaction.effects.find((effect) => effect.is(wikiLinkCatalogChanged))
          ?.value ?? value
      );
    }
  });
  const input = StateField.define<{
    focused: boolean;
    dismissed: boolean;
    picker: Picker | null;
  }>({
    create: () => ({ focused: false, dismissed: false, picker: null }),
    update(previous, transaction) {
      let { focused, dismissed } = previous;
      if (transaction.docChanged || transaction.selection) dismissed = false;
      for (const effect of transaction.effects) {
        if (effect.is(focusChanged)) {
          focused = effect.value;
          dismissed = false;
        }
        if (effect.is(dismissPicker)) dismissed = true;
      }

      const state = transaction.state;
      const currentCatalog = state.field(catalog);
      const composing = state.field(editorComposing);
      let range =
        focused && !dismissed && !state.readOnly && !composing
          ? wikiLinkAtCursor(state)
          : null;
      if (
        range?.closed &&
        (currentCatalog.status !== 'ready' ||
          currentCatalog.titles.has(wikiLinkTitleKey(range.query)))
      )
        range = null;
      if (!range)
        return previous.picker ||
          focused !== previous.focused ||
          dismissed !== previous.dismissed
          ? { focused, dismissed, picker: null }
          : previous;

      const existing = previous.picker;
      const active = transaction.effects.find((effect) =>
        effect.is(selectOption)
      )?.value;
      if (
        existing &&
        range.from === existing.range.from &&
        range.to === existing.range.to &&
        range.query === existing.range.query &&
        range.closed === existing.range.closed &&
        currentCatalog === transaction.startState.field(catalog, false)
      ) {
        return active === undefined
          ? previous
          : { focused, dismissed, picker: { ...existing, active } };
      }
      const candidates =
        currentCatalog.status === 'ready' && !range.closed
          ? matchWikiLinkTitles(currentCatalog.titles, range.query)
          : [];
      return {
        focused,
        dismissed,
        picker: {
          range,
          options: candidates,
          active: 0,
          status: currentCatalog.status
        }
      };
    }
  });

  const choose = (view: EditorView, index: number): boolean => {
    const picker = view.state.field(input).picker;
    const target = picker?.options[index];
    if (!picker || !target || view.compositionStarted || view.state.readOnly)
      return false;
    const { from, to } = picker.range;
    const insert = `[[${target.title}]]`;
    view.dispatch({
      changes: { from, to, insert },
      selection: { anchor: from + insert.length },
      userEvent: 'input.complete',
      scrollIntoView: true
    });
    return true;
  };

  const move = (view: EditorView, direction: number): boolean => {
    if (view.compositionStarted) return false;
    const picker = view.state.field(input).picker;
    const count = picker?.options.length ?? 0;
    if (!picker || !count) return false;
    const index = (picker.active + direction + count) % count;
    view.dispatch({ effects: selectOption.of(index) });
    return true;
  };

  const popup = (view: EditorView): TooltipView => {
    const document = view.dom.ownerDocument;
    const dom = document.createElement('div');
    dom.className = 'context-menu-surface wiki-link-picker';
    dom.addEventListener('mousedown', (event) => {
      if ((event.target as Element).closest('[role="option"]'))
        event.preventDefault();
    });
    let current: Picker | null = null;
    const render = (): void => {
      const picker = view.state.field(input).picker;
      if (!picker || picker === current) return;
      current = picker;
      dom.replaceChildren();
      if (!picker.options.length) {
        const message = document.createElement('div');
        const state =
          picker.status !== 'ready'
            ? picker.status
            : picker.range.query.trim()
              ? 'missing'
              : 'empty';
        message.className = `wiki-link-picker-message${state === 'missing' ? ' wiki-link-picker-message--missing' : ''}`;
        message.setAttribute('role', 'status');
        message.textContent = options.text(state);
        dom.append(message);
        return;
      }
      const list = document.createElement('div');
      list.id = options.id;
      list.className = 'context-menu-list';
      list.setAttribute('role', 'listbox');
      list.setAttribute('aria-label', options.text('label'));
      picker.options.forEach((candidate, index) => {
        const row = document.createElement('div');
        row.id = `${options.id}-${index}`;
        row.className = 'context-menu-item';
        row.classList.toggle('is-active', index === picker.active);
        row.setAttribute('role', 'option');
        row.setAttribute('aria-selected', String(index === picker.active));
        row.title = candidate.folder
          ? `${candidate.title} · ${candidate.folder}`
          : candidate.title;
        const title = document.createElement('span');
        title.className = 'wiki-link-picker-title';
        title.textContent = candidate.title;
        row.append(title);
        if (candidate.folder) {
          const folder = document.createElement('span');
          folder.className = 'wiki-link-picker-folder';
          folder.textContent = candidate.folder;
          row.append(folder);
        }
        row.addEventListener('pointermove', () => {
          const active = view.state.field(input).picker?.active;
          if (active !== undefined && active !== index)
            view.dispatch({ effects: selectOption.of(index) });
        });
        row.addEventListener('click', () => choose(view, index));
        list.append(row);
      });
      dom.append(list);
      const activeRow = list.children[picker.active] as HTMLElement;
      if (activeRow.offsetTop + activeRow.offsetHeight > dom.clientHeight)
        dom.scrollTop =
          activeRow.offsetTop + activeRow.offsetHeight - dom.clientHeight;
    };
    render();
    return { dom, offset: { x: 0, y: 5 }, update: render };
  };

  const missingLinks = ViewPlugin.fromClass(
    class {
      decorations;

      constructor(view: EditorView) {
        this.decorations = this.build(view);
      }

      update(update: ViewUpdate): void {
        if (update.state.field(editorComposing)) {
          this.decorations = this.decorations.map(update.changes);
          return;
        }
        if (
          update.docChanged ||
          update.viewportChanged ||
          update.startState.field(editorComposing) ||
          update.startState.field(catalog) !== update.state.field(catalog) ||
          update.startState.field(input) !== update.state.field(input) ||
          syntaxTree(update.startState) !== syntaxTree(update.state)
        )
          this.decorations = this.build(update.view);
      }

      private build({
        state,
        viewport
      }: EditorView): ReturnType<typeof Decoration.set> {
        const currentCatalog = state.field(catalog);
        if (currentCatalog.status !== 'ready') return Decoration.none;
        const missing = Decoration.mark({
          class: 'md-wikilink-missing',
          attributes: { title: options.text('missing') }
        });
        const ranges = [];
        const picker = state.field(input).picker;
        const missingInput =
          picker?.range.query.trim() && !picker.options.length;
        if (picker && missingInput)
          ranges.push(
            missing.range(picker.range.from, state.selection.main.head)
          );
        syntaxTree(state).iterate({
          from: viewport.from,
          to: viewport.to,
          enter({ name, from, to }) {
            if (name !== 'WikiLink') return;
            const title = state.sliceDoc(from + 2, to - 2);
            if (
              !currentCatalog.titles.has(wikiLinkTitleKey(title)) &&
              !(missingInput && from === picker?.range.from)
            )
              ranges.push(missing.range(from, to));
          }
        });
        return Decoration.set(ranges, true);
      }
    },
    { decorations: (value) => value.decorations }
  );

  return [
    trackEditorComposition,
    catalog,
    input,
    missingLinks,
    EditorView.focusChangeEffect.of((_state, focused) =>
      focusChanged.of(focused)
    ),
    showTooltip.compute([input, 'selection'], (state) =>
      state.field(input).picker
        ? { pos: state.selection.main.head, create: popup }
        : null
    ),
    EditorView.contentAttributes.compute(
      [input],
      (state): Record<string, string> => {
        const picker = state.field(input).picker;
        return picker?.options.length
          ? {
              'aria-autocomplete': 'list',
              'aria-controls': options.id,
              'aria-activedescendant': `${options.id}-${picker.active}`
            }
          : {};
      }
    ),
    Prec.high(
      keymap.of([
        { key: 'ArrowDown', run: (view) => move(view, 1) },
        { key: 'ArrowUp', run: (view) => move(view, -1) },
        {
          key: 'Enter',
          run: (view) =>
            choose(view, view.state.field(input).picker?.active ?? -1)
        },
        {
          key: 'Tab',
          run: (view) =>
            choose(view, view.state.field(input).picker?.active ?? -1)
        },
        {
          key: 'Escape',
          run: (view) => {
            if (!view.state.field(input).picker || view.compositionStarted)
              return false;
            view.dispatch({ effects: dismissPicker.of(null) });
            return true;
          }
        }
      ])
    )
  ];
}
