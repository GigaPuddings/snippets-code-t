import type { InjectionKey, ShallowRef } from 'vue';

/** Route sidebar edits through the loaded document's save lifecycle. */
export interface ContentEditor {
  id: ContentType['id'];
  title: string;
  workspaceRoot: string;
  rename: (title: string) => void;
  changeTag: (source: string, target: string | null) => Promise<void>;
}

export const contentEditorKey: InjectionKey<ShallowRef<ContentEditor | null>> =
  Symbol('contentEditor');
