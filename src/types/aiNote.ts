/** Stable note identity; paths are relative to the originating workspace. */
export interface NoteReference {
  documentId?: string;
  filePath: string;
  title: string;
}

/** Attribution for a saved AI reply. Unknown legacy fields remain inert. */
export interface AiNoteSource {
  version: 1;
  conversationId: string;
  messageId: string;
  generatedAt: string;
  modelName?: string;
  question: string;
  [legacyField: string]: unknown;
}

export interface SavedNoteReference extends NoteReference {
  workspaceRoot: string;
}
