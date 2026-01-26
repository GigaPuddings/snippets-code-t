// @ts-nocheck
import { Mark, mergeAttributes } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';

export interface WikilinkOptions {
  HTMLAttributes: Record<string, any>;
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
        parseHTML: (element) => element.getAttribute('data-note-name'),
        renderHTML: (attributes) => {
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
        getAttrs: (element) => {
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

  addCommands() {
    return {
      setWikilink:
        (noteName: string) =>
        ({ commands }) => {
          return commands.setMark(this.name, { noteName });
        },
      toggleWikilink:
        (noteName: string) =>
        ({ commands }) => {
          return commands.toggleMark(this.name, { noteName });
        },
      unsetWikilink:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        }
    };
  },

  addProseMirrorPlugins() {
    const { onLinkClick } = this.options;

    return [
      new Plugin({
        key: new PluginKey('wikilink'),
        props: {
          decorations: (state) => {
            const decorations: any[] = [];
            const doc = state.doc;

            // 正则表达式匹配 [[笔记名称]]
            const wikilinkRegex = /\[\[([^\]]+)\]\]/g;

            doc.descendants((node, pos) => {
              if (!node.isText) {
                return;
              }

              const text = node.text || '';
              let match;

              // 重置正则表达式的 lastIndex
              wikilinkRegex.lastIndex = 0;

              while ((match = wikilinkRegex.exec(text)) !== null) {
                const noteName = match[1];
                const from = pos + match.index;
                const to = from + match[0].length;

                decorations.push(
                  Decoration.inline(from, to, {
                    class: 'wikilink-decoration',
                    'data-note-name': noteName,
                    style: 'cursor: pointer;'
                  })
                );
              }
            });

            return DecorationSet.create(doc, decorations);
          },
          handleClick: (view, pos, event) => {
            const target = event.target as HTMLElement;
            
            // 检查是否点击了 wikilink 或其父元素
            const wikilinkElement = target.classList.contains('wikilink-decoration') 
              ? target 
              : target.closest('.wikilink-decoration');
            
            if (wikilinkElement) {
              const noteName = wikilinkElement.getAttribute('data-note-name');
              if (noteName && onLinkClick) {
                event.preventDefault();
                event.stopPropagation();
                onLinkClick(noteName);
                return true;
              }
            }

            return false;
          },
          // 添加 handleDOMEvents 以确保在所有模式下都能捕获点击
          handleDOMEvents: {
            click: (view, event) => {
              const target = event.target as HTMLElement;
              
              // 检查是否点击了 wikilink
              const wikilinkElement = target.classList.contains('wikilink-decoration') 
                ? target 
                : target.closest('.wikilink-decoration');
              
              if (wikilinkElement) {
                const noteName = wikilinkElement.getAttribute('data-note-name');
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
