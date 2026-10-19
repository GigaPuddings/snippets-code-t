export interface EditorMenuCommands {
  toggleBold: () => void;
  toggleItalic: () => void;
  toggleStrike: () => void;
  toggleCode: () => void;
  clearFormat: () => void;
  toggleBulletList: () => void;
  toggleOrderedList: () => void;
  toggleTaskList: () => void;
  setHeading: (level: 1 | 2 | 3 | 4 | 5 | 6) => void;
  setParagraph: () => void;
  toggleBlockquote: () => void;
  insertCodeBlock: () => void;
  formatCodeBlock: () => void | Promise<void>;
  insertHorizontalRule: () => void;
  handleAddLink: () => void;
  handleAddExternalLink: () => void;
  handlePaste: () => void | Promise<void>;
  handlePasteAsPlainText: () => void | Promise<void>;
  handleSelectAll: () => void;
}
