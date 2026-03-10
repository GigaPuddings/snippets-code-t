import { Mark, mergeAttributes } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';

export interface WikilinkOptions {
  HTMLAttributes: Record<string, unknown>;
  onLinkClick?: (noteName: string) => void;
}

export const Wikilink = Mark.create<WikilinkOptions>({
  name: 'wikilink',

  priority: 1000,

  keepOnSplit: false,

  addOptions() {
    return {
      HTMLAttributes: {
        class: 'wikilink'
      },
      onLinkClick: undefined
    };
  },

  addAttributes() {
    return {
      noteName: {
        default: null,
        parseHTML: (element: Element) => element.getAttribute('data-note-name'),
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes.noteName) {
            return {};
          }
          return {
            'data-note-name': attributes.noteName
          };
        }
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-note-name]',
        getAttrs: (element: Element | string) => {
          if (typeof element === 'string') return false;
          const noteName = element.getAttribute('data-note-name');
          return noteName ? { noteName } : false;
        }
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'span',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: 'wikilink'
      }),
      0
    ];
  },

  // @ts-expect-error - Custom commands for wikilink, type is complex
  addCommands() {
    const self = this;
    return {
      setWikilink:
        (noteName: string) =>
        // @ts-expect-error - TipTap commands type is complex, this is a known pattern in the codebase
        ({ commands }) => {
          return commands.setMark(self.name, { noteName });
        },
      toggleWikilink:
        (noteName: string) =>
        // @ts-expect-error - TipTap commands type is complex
        ({ commands }) => {
          return commands.toggleMark(self.name, { noteName });
        },
      unsetWikilink:
        () =>
        // @ts-expect-error - TipTap commands type is complex
        ({ commands }) => {
          return commands.unsetMark(self.name);
        }
    };
  },

  addProseMirrorPlugins() {
    const { onLinkClick } = this.options;

    // 缓存装饰器，只在文档内容变化时重新计算
    let cachedDecorations: DecorationSet | null = null;
    let lastDocVersion = -1;

    // 预编译正则表达式，提升性能
    const wikilinkRegex = /\[\[([^\]]+)\]\]/g;

    return [
      new Plugin({
        key: new PluginKey('wikilink'),
        appendTransaction: (transactions, _oldState, _newState) => {
          // 检查是否有文档内容变化
          const docChanged = transactions.some(tr => tr.docChanged);
          if (docChanged) {
            // 文档变化时清除缓存，强制重新计算
            cachedDecorations = null;
          }
          return undefined;
        },
        props: {
          decorations: (state): DecorationSet => {
            const currentVersion = state.doc.content.size;

            // 如果选区变化但文档未变，可以复用缓存（仅调整光标位置相关的部分）
            // 但为了简化逻辑，这里仍然重新计算，因为现代浏览器性能足够
            // 只有在大文档场景下才考虑更复杂的缓存策略
            if (cachedDecorations && lastDocVersion === currentVersion) {
              return cachedDecorations;
            }

            const decorations: ReturnType<typeof Decoration.inline>[] = [];
            const doc = state.doc;
            const selection = state.selection;
            const isFocused = state.selection.from !== state.selection.to ||
                            document.activeElement?.classList.contains('ProseMirror');

            doc.descendants((node, pos) => {
              if (!node.isText) {
                return;
              }

              // 检查节点是否有 code mark（在反引号内）
              const hasCodeMark = node.marks.some((mark) => mark.type.name === 'code');
              if (hasCodeMark) {
                return;
              }

              const text = node.text || '';
              let match: RegExpExecArray | null;

              wikilinkRegex.lastIndex = 0;

              while ((match = wikilinkRegex.exec(text)) !== null) {
                const noteName = match[1];
                const from = pos + match.index;
                const to = from + match[0].length;

                const cursorInside = selection.from >= from && selection.from <= to;

                const baseDecorationSpec = {
                  class: 'wikilink-decoration',
                  'data-note-name': noteName,
                  style: 'cursor: pointer;'
                };

                const hiddenBracketSpec = {
                  class: 'wikilink-bracket-hidden'
                };

                if (!isFocused || !cursorInside) {
                  decorations.push(
                    Decoration.inline(from, from + 2, hiddenBracketSpec)
                  );

                  decorations.push(
                    Decoration.inline(from + 2, to - 2, baseDecorationSpec)
                  );

                  decorations.push(
                    Decoration.inline(to - 2, to, hiddenBracketSpec)
                  );
                } else {
                  decorations.push(
                    Decoration.inline(from, to, baseDecorationSpec)
                  );
                }
              }
            });

            cachedDecorations = DecorationSet.create(doc, decorations);
            lastDocVersion = currentVersion;

            return cachedDecorations;
          },
          handleClick: (_view, _pos, event: MouseEvent): boolean => {
            const target = event.target as HTMLElement;

            const wikilinkElement = target.classList.contains('wikilink-decoration')
              ? target
              : target.closest('.wikilink-decoration');

            if (wikilinkElement) {
              const noteName = (wikilinkElement as HTMLElement).getAttribute('data-note-name');
              if (noteName && onLinkClick) {
                event.preventDefault();
                event.stopPropagation();
                onLinkClick(noteName);
                return true;
              }
            }

            return false;
          },
          handleDOMEvents: {
            click: (_view, event: MouseEvent): boolean => {
              const target = event.target as HTMLElement;

              const wikilinkElement = target.classList.contains('wikilink-decoration')
                ? target
                : target.closest('.wikilink-decoration');

              if (wikilinkElement) {
                const noteName = (wikilinkElement as HTMLElement).getAttribute('data-note-name');
                if (noteName && onLinkClick) {
                  event.preventDefault();
                  event.stopPropagation();
                  onLinkClick(noteName);
                  return true;
                }
              }

              return false;
            }
          }
        }
      })
    ];
  }
});
