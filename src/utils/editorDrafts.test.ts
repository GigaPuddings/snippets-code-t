import { describe, expect, it } from 'vitest';
import { createEditorDraftStore } from './editorDrafts';

const setup = () => {
  const values = new Map<string, string>();
  const storage = {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => {
      values.set(key, value);
    },
    removeItem: (key: string) => {
      values.delete(key);
    }
  };
  return { storage, drafts: createEditorDraftStore(storage) };
};
const draft = {
  title: 'Note',
  content: '\r\n  keep spaces  ',
  tags: ['daily'],
  contentRevision: 'r1'
};

describe('editor recovery drafts', () => {
  it('clears a reverted draft but never deletes an in-flight recovery snapshot', () => {
    const { drafts } = setup();
    drafts.write('ws', 'note.md', { ...draft, title: 'discarded title' });
    drafts.record('ws', 'note.md', draft, draft, true);
    expect(drafts.read('ws', 'note.md')).toEqual(draft);
    drafts.record('ws', 'note.md', draft, draft, false);
    expect(drafts.read('ws', 'note.md')).toBeNull();
  });
  it('survives remounts and isolates workspaces and document paths', () => {
    const { storage, drafts } = setup();
    drafts.write('workspace-a', 'note.md', draft);
    expect(
      createEditorDraftStore(storage).read('workspace-a', 'note.md')
    ).toEqual(draft);
    expect(drafts.read('workspace-b', 'note.md')).toBeNull();
    expect(drafts.read('workspace-a', 'other.md')).toBeNull();
  });

  it('only removes the exact draft acknowledged by a save', () => {
    const { drafts } = setup();
    drafts.write('ws', 'note.md', draft);
    drafts.acknowledge('ws', 'note.md', draft, 'r2');
    expect(drafts.read('ws', 'note.md')).toBeNull();
  });

  it('preserves edits made during save and rebases their revision after rename', () => {
    const { drafts } = setup();
    const newer = { ...draft, content: 'typed during IPC' };
    drafts.write('ws', 'note.md', newer);
    drafts.acknowledge('ws', 'note.md', draft, 'r2', 'renamed.md');
    expect(drafts.read('ws', 'note.md')).toBeNull();
    expect(drafts.read('ws', 'renamed.md')).toEqual({
      ...newer,
      contentRevision: 'r2'
    });
  });

  it('does not delete recoverable data when writing the renamed key fails', () => {
    const { storage, drafts } = setup();
    drafts.write('ws', 'note.md', { ...draft, content: 'newer' });
    storage.setItem = () => {
      throw new Error('quota');
    };
    expect(() =>
      drafts.acknowledge('ws', 'note.md', draft, 'r2', 'renamed.md')
    ).toThrow('quota');
    expect(drafts.read('ws', 'note.md')?.content).toBe('newer');
  });

  it('rebases attachment paths in edits typed while a rename was saving', () => {
    const { drafts } = setup();
    const saved = { ...draft, content: '![image](assets/原名/pixel.png)' };
    drafts.write('ws', '原名.md', {
      ...saved,
      content: saved.content + '\nnew text'
    });
    drafts.acknowledge('ws', '原名.md', saved, 'r2', '新名.md', [
      { from: 'assets/原名/', to: 'assets/新名/' }
    ]);
    expect(drafts.read('ws', '原名.md')).toBeNull();
    expect(drafts.read('ws', '新名.md')).toEqual({
      ...saved,
      content: '![image](assets/新名/pixel.png)\nnew text',
      contentRevision: 'r2'
    });
  });
});
