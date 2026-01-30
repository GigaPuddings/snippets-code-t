import { Node, mergeAttributes } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import CodeBlockComponent from './CodeBlockComponent.vue';

export interface CodeBlockOptions {
  languageClassPrefix: string;
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    codeBlock: {
      setCodeBlock: (attributes?: { language: string }) => ReturnType;
      toggleCodeBlock: (attributes?: { language: string }) => ReturnType;
    };
  }
}

export const CodeBlockLowlight = Node.create<CodeBlockOptions>({
  name: 'codeBlock',

  addOptions() {
    return {
      languageClassPrefix: 'language-',
      HTMLAttributes: {},
    };
  },

  content: 'text*',

  marks: '',

  group: 'block',

  code: true,

  defining: true,

  addAttributes() {
    return {
      language: {
        default: null,
        parseHTML: element => {
          const { languageClassPrefix } = this.options;
          const classNames = [...(element.firstElementChild?.classList || [])];
          const languages = classNames
            .filter(className => className.startsWith(languageClassPrefix))
            .map(className => className.replace(languageClassPrefix, ''));
          const language = languages[0];

          if (!language) {
            return null;
          }

          return language;
        },
        rendered: false,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'pre',
        preserveWhitespace: 'full',
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      'pre',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      [
        'code',
        {
          class: node.attrs.language
            ? this.options.languageClassPrefix + node.attrs.language
            : null,
        },
        0,
      ],
    ];
  },

  addCommands() {
    return {
      setCodeBlock:
        attributes => ({ commands }) => {
          return commands.setNode(this.name, attributes);
        },
      toggleCodeBlock:
        attributes => ({ commands }) => {
          return commands.toggleNode(this.name, 'paragraph', attributes);
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Alt-c': () => this.editor.commands.toggleCodeBlock(),

      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty, $anchor } = this.editor.state.selection;
        const isAtStart = $anchor.pos === 1;

        if (!empty || $anchor.parent.type.name !== this.name) {
          return false;
        }

        if (isAtStart || !$anchor.parent.textContent.length) {
          return this.editor.commands.clearNodes();
        }

        return false;
      },

      // exit node on triple enter
      Enter: ({ editor }) => {
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;

        if (!empty || $from.parent.type !== this.type) {
          return false;
        }

        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;

        if (!isAtEnd) {
          return false;
        }

        return editor
          .chain()
          .command(({ tr }) => {
            tr.delete($from.pos, $from.pos + 1);
            return true;
          })
          .exitCode()
          .run();
      },

      // exit node on arrow down
      ArrowDown: ({ editor }) => {
        const { state } = editor;
        const { selection, doc } = state;
        const { $from, empty } = selection;

        if (!empty || $from.parent.type !== this.type) {
          return false;
        }

        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;

        if (!isAtEnd) {
          return false;
        }

        const after = $from.after();

        if (after === undefined) {
          return false;
        }

        const nodeAfter = doc.nodeAt(after);

        if (nodeAfter) {
          return false;
        }

        return editor.commands.exitCode();
      },
    };
  },

  addNodeView() {
    return VueNodeViewRenderer(CodeBlockComponent);
  },
});
