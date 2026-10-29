export interface EditorDraft {
  title: string;
  content: string;
  tags: string[];
  contentRevision?: string;
}

type DraftStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;

export function applySavedAttachmentRenames(
  content: string,
  renames: ReadonlyArray<{ from: string; to: string }> = []
): string {
  for (const { from, to } of renames) {
    if (from && from !== to) content = content.split(from).join(to);
  }
  return content;
}

export function createEditorDraftStore(storage: DraftStorage) {
  const key = (workspace: string, path: string) =>
    `editor-draft:v1:${JSON.stringify([workspace, path])}`;
  const read = (workspace: string, path: string): EditorDraft | null => {
    const raw = storage.getItem(key(workspace, path));
    if (!raw) return null;
    const value = JSON.parse(raw) as EditorDraft;
    if (
      typeof value.title !== 'string' ||
      typeof value.content !== 'string' ||
      !Array.isArray(value.tags) ||
      !value.tags.every((tag) => typeof tag === 'string') ||
      (value.contentRevision !== undefined &&
        typeof value.contentRevision !== 'string')
    ) {
      throw new Error('Invalid recovery draft');
    }
    return value;
  };
  const write = (workspace: string, path: string, draft: EditorDraft) =>
    storage.setItem(key(workspace, path), JSON.stringify(draft));
  const remove = (workspace: string, path: string) =>
    storage.removeItem(key(workspace, path));
  const sameFields = (a: EditorDraft, b: EditorDraft) =>
    a.title === b.title &&
    a.content === b.content &&
    JSON.stringify(a.tags) === JSON.stringify(b.tags);
  return {
    read,
    write,
    remove,
    record(
      workspace: string,
      path: string,
      draft: EditorDraft,
      baseline: EditorDraft,
      preserveClean = false
    ) {
      if (preserveClean || !sameFields(draft, baseline)) {
        write(workspace, path, draft);
      } else {
        remove(workspace, path);
      }
    },
    acknowledge(
      workspace: string,
      path: string,
      saved: EditorDraft,
      revision: string,
      newPath = path,
      attachmentRenames: ReadonlyArray<{ from: string; to: string }> = []
    ) {
      const current = read(workspace, path);
      if (!current) return;
      if (
        current.title === saved.title &&
        current.content === saved.content &&
        JSON.stringify(current.tags) === JSON.stringify(saved.tags)
      ) {
        remove(workspace, path);
      } else {
        // Write first: a full disk/quota must not destroy the only draft.
        write(workspace, newPath, {
          ...current,
          content: applySavedAttachmentRenames(
            current.content,
            attachmentRenames
          ),
          contentRevision: revision
        });
        if (newPath !== path) remove(workspace, path);
      }
    }
  };
}
