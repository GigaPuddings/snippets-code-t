import { beforeEach, describe, expect, it, vi } from 'vitest';
import { effectScope, ref } from 'vue';
import type { MarkdownFile } from '@/types/models';
import type { ChatHistoryView, ChatMessage } from './types';

const mocks = vi.hoisted(() => ({
  create: vi.fn(),
  list: vi.fn(),
  root: vi.fn(),
  read: vi.fn(),
  push: vi.fn(),
  msg: vi.fn()
}));
vi.mock('@/api/markdown', () => ({
  createMarkdownFile: mocks.create,
  getAllFiles: mocks.list,
  getWorkspaceRoot: mocks.root,
  readMarkdownFile: mocks.read
}));
vi.mock('vue-router', () => ({ useRouter: () => ({ push: mocks.push }) }));
vi.mock('vue-i18n', () => ({ useI18n: () => ({ t: (key: string) => key }) }));
vi.mock('@/utils/modal', () => ({ default: { msg: mocks.msg } }));
import { useChatSavedNotes } from './useChatSavedNotes';

const file: MarkdownFile = {
  id: '/vault/Docs/one.md',
  documentId: 'note-uuid',
  filePath: '/vault/Docs/one.md',
  title: 'One',
  content: 'Original text',
  categoryId: 3,
  categoryName: 'Docs',
  tags: [],
  created: '2026-01-01',
  modified: '2026-01-01',
  type: 'note',
  favorite: false
};
const savedReference = {
  documentId: file.documentId,
  filePath: 'Docs/one.md',
  title: file.title,
  workspaceRoot: '/vault'
};
function setup() {
  const assistant: ChatMessage = {
    id: 'answer',
    role: 'assistant',
    content: '## Answer\n\n```ts\n42;\n```',
    createdAt: '2026-01-01',
    parentId: 'question',
    modelName: 'Test model'
  };
  const history = ref<ChatHistoryView | null>({
    id: 'chat',
    title: 'Chat',
    createdAt: '2026-01-01',
    updatedAt: '2026-01-01',
    updatedAtLabel: '',
    currentNodeId: 'answer',
    messages: [
      {
        id: 'root',
        role: 'system',
        type: 'root',
        content: '',
        createdAt: '',
        childIds: ['question']
      },
      {
        id: 'question',
        role: 'user',
        content: 'Question',
        createdAt: '',
        parentId: 'root',
        childIds: ['answer']
      },
      assistant
    ]
  });
  const persist = vi.fn().mockResolvedValue(undefined);
  return {
    assistant,
    history,
    persist,
    savedNotes: useChatSavedNotes({
      history,
      persist,
      answer: (message) => message.content
    })
  };
}
beforeEach(() => {
  vi.clearAllMocks();
  mocks.root.mockResolvedValue('/vault');
  mocks.list.mockResolvedValue([file]);
  mocks.read.mockResolvedValue(file);
  mocks.create.mockResolvedValue(file.filePath);
  mocks.push.mockResolvedValue(undefined);
});
describe('AI reply saving and saved note reconciliation', () => {
  it('does not scan notes for a conversation without saved replies', async () => {
    const { savedNotes } = setup();
    await savedNotes.syncSavedNotes();
    expect(mocks.root).not.toHaveBeenCalled();
    expect(mocks.list).not.toHaveBeenCalled();
    expect(mocks.read).not.toHaveBeenCalled();
  });
  it('rejects incomplete, empty, failed and non-assistant replies', async () => {
    const { assistant, savedNotes } = setup();
    assistant.streaming = true;
    await savedNotes.saveReply(assistant);
    assistant.streaming = false;
    assistant.error = 'Generation failed';
    await savedNotes.saveReply(assistant);
    assistant.error = '';
    assistant.content = '  ';
    await savedNotes.saveReply(assistant);
    assistant.content = 'User text';
    assistant.role = 'user';
    await savedNotes.saveReply(assistant);
    expect(mocks.create).not.toHaveBeenCalled();
    expect(mocks.root).not.toHaveBeenCalled();
    expect(savedNotes.savingIds.value.size).toBe(0);
  });
  it('releases the saving lock on failure and allows an explicit retry', async () => {
    const { assistant, persist, savedNotes } = setup();
    mocks.create.mockRejectedValueOnce(new Error('Disk full'));
    await savedNotes.saveReply(assistant);
    expect(assistant.savedNote).toBeUndefined();
    expect(persist).not.toHaveBeenCalled();
    expect(savedNotes.savingIds.value.size).toBe(0);
    expect(mocks.msg).toHaveBeenCalledWith('Disk full', 'error');
    await savedNotes.saveReply(assistant);
    expect(assistant.savedNote?.documentId).toBe(file.documentId);
    expect(persist).toHaveBeenCalledOnce();
  });
  it('persists the originating chat when the user switches chats during saving', async () => {
    const { assistant, history, persist, savedNotes } = setup();
    const original = history.value;
    let finishSave!: (path: string) => void;
    mocks.create.mockReturnValueOnce(
      new Promise<string>((resolve) => {
        finishSave = resolve;
      })
    );
    const pending = savedNotes.saveReply(assistant);
    await vi.waitFor(() => expect(mocks.create).toHaveBeenCalledOnce());
    history.value = { ...history.value!, id: 'other-chat', messages: [] };
    finishSave(file.filePath);
    await pending;
    expect(persist).toHaveBeenCalledWith(original);
    expect(history.value.messages).toEqual([]);
    expect(assistant.savedNote?.documentId).toBe(file.documentId);
  });
  it('saves through the existing note API, records provenance, and opens instead of resaving', async () => {
    const { assistant, persist, savedNotes } = setup();
    await savedNotes.saveReply(assistant);
    expect(mocks.create).toHaveBeenCalledWith(
      'localAi.savedNotes.inbox',
      expect.objectContaining({
        type: 'note',
        content: expect.stringContaining('```ts\n42;\n```'),
        aiSource: expect.objectContaining({
          conversationId: 'chat',
          messageId: 'answer',
          modelName: 'Test model',
          question: 'Question'
        })
      }),
      { expectedWorkspaceRoot: '/vault' }
    );
    expect(persist).toHaveBeenCalledOnce();
    await savedNotes.saveReply(assistant);
    expect(mocks.create).toHaveBeenCalledOnce();
    expect(mocks.push).toHaveBeenCalledWith(
      expect.objectContaining({
        path: expect.stringContaining(encodeURIComponent(file.filePath))
      })
    );
  });
  it('prevents concurrent saves and resets a missing note before an explicit resave', async () => {
    const { assistant, persist, savedNotes } = setup();
    await Promise.all([
      savedNotes.saveReply(assistant),
      savedNotes.saveReply(assistant)
    ]);
    expect(mocks.create).toHaveBeenCalledOnce();
    mocks.list.mockResolvedValue([]);
    await savedNotes.saveReply(assistant);
    expect(mocks.create).toHaveBeenCalledOnce();
    expect(assistant.savedNote).toBeUndefined();
    expect(persist).toHaveBeenCalledTimes(2);
    expect(mocks.msg).toHaveBeenCalledWith(
      'localAi.savedNotes.savedNoteMissing',
      'error'
    );
    await savedNotes.saveReply(assistant);
    expect(mocks.create).toHaveBeenCalledTimes(2);
    expect(assistant.savedNote?.documentId).toBe(file.documentId);
  });
  it('clears deleted saved references in one persisted update without recreating notes', async () => {
    const { assistant, history, persist, savedNotes } = setup();
    assistant.savedNote = { ...savedReference };
    history.value!.messages.push({
      ...assistant,
      id: 'second-answer',
      savedNote: { ...savedReference, documentId: 'another-uuid' }
    });
    mocks.list.mockResolvedValue([]);
    await savedNotes.syncSavedNotes();
    expect(assistant.savedNote).toBeUndefined();
    expect(history.value!.messages.at(-1)?.savedNote).toBeUndefined();
    expect(persist).toHaveBeenCalledOnce();
    expect(mocks.create).not.toHaveBeenCalled();
    expect(mocks.push).not.toHaveBeenCalled();
    expect(mocks.msg).not.toHaveBeenCalled();
    await savedNotes.syncSavedNotes();
    expect(mocks.list).toHaveBeenCalledOnce();
    expect(persist).toHaveBeenCalledOnce();
  });
  it('keeps saved state after moving or renaming the same UUID and opens the current path', async () => {
    const { assistant, persist, savedNotes } = setup();
    assistant.savedNote = { ...savedReference };
    const moved = {
      ...file,
      filePath: '/vault/Other/renamed.md',
      title: 'Renamed'
    };
    mocks.list.mockResolvedValue([moved]);
    await savedNotes.syncSavedNotes();
    expect(assistant.savedNote).toEqual({
      ...savedReference,
      filePath: 'Other/renamed.md',
      title: 'Renamed'
    });
    expect(persist).toHaveBeenCalledOnce();
    await savedNotes.saveReply(assistant);
    expect(mocks.push).toHaveBeenCalledWith(
      expect.objectContaining({
        path: expect.stringContaining(encodeURIComponent(moved.filePath))
      })
    );
    expect(mocks.create).not.toHaveBeenCalled();
  });
  it('does not attach a replacement file at the deleted note path', async () => {
    const { assistant, savedNotes } = setup();
    assistant.savedNote = { ...savedReference };
    mocks.list.mockResolvedValue([{ ...file, documentId: 'replacement' }]);
    await savedNotes.syncSavedNotes();
    expect(assistant.savedNote).toBeUndefined();
  });
  it('keeps references when another workspace is active or listing fails', async () => {
    const { assistant, persist, savedNotes } = setup();
    assistant.savedNote = { ...savedReference };
    mocks.root.mockResolvedValue('/other');
    await savedNotes.syncSavedNotes();
    expect(mocks.list).not.toHaveBeenCalled();
    expect(assistant.savedNote).toEqual(savedReference);
    mocks.root.mockResolvedValue('/vault');
    mocks.list.mockRejectedValueOnce(new Error('Unable to read workspace'));
    await expect(savedNotes.syncSavedNotes()).rejects.toThrow(
      'Unable to read workspace'
    );
    expect(assistant.savedNote).toEqual(savedReference);
    expect(persist).not.toHaveBeenCalled();
  });
  it('does not clear a reference if the workspace changes during a scan or open', async () => {
    const { assistant, persist, savedNotes } = setup();
    assistant.savedNote = { ...savedReference };
    mocks.list.mockResolvedValue([]);
    mocks.root.mockResolvedValueOnce('/vault').mockResolvedValue('/other');
    await expect(savedNotes.syncSavedNotes()).rejects.toThrow(
      'workspaceChanged'
    );
    expect(assistant.savedNote).toEqual(savedReference);
    mocks.root
      .mockResolvedValueOnce('/vault')
      .mockResolvedValueOnce('/vault')
      .mockResolvedValue('/other');
    await savedNotes.saveReply(assistant);
    expect(assistant.savedNote).toEqual(savedReference);
    expect(persist).not.toHaveBeenCalled();
  });
  it('discards an older scan result after a newer scan completes', async () => {
    const { assistant, persist, savedNotes } = setup();
    assistant.savedNote = { ...savedReference };
    let finishScan!: (files: MarkdownFile[]) => void;
    mocks.list.mockReturnValueOnce(
      new Promise<MarkdownFile[]>((resolve) => (finishScan = resolve))
    );
    const oldScan = savedNotes.syncSavedNotes();
    await vi.waitFor(() => expect(mocks.list).toHaveBeenCalledOnce());
    await savedNotes.syncSavedNotes();
    finishScan([]);
    await oldScan;
    expect(assistant.savedNote).toEqual(savedReference);
    expect(persist).not.toHaveBeenCalled();
  });
  it('does not apply a pending scan to a replaced history or reference', async () => {
    const { assistant, history, persist, savedNotes } = setup();
    assistant.savedNote = { ...savedReference };
    let finishScan!: (files: MarkdownFile[]) => void;
    mocks.list.mockReturnValueOnce(
      new Promise<MarkdownFile[]>((resolve) => (finishScan = resolve))
    );
    const oldScan = savedNotes.syncSavedNotes();
    await vi.waitFor(() => expect(mocks.list).toHaveBeenCalledOnce());
    assistant.savedNote = { ...savedReference, documentId: 'new-save-uuid' };
    finishScan([]);
    await oldScan;
    expect(assistant.savedNote.documentId).toBe('new-save-uuid');
    mocks.list.mockReturnValueOnce(
      new Promise<MarkdownFile[]>((resolve) => (finishScan = resolve))
    );
    const historyScan = savedNotes.syncSavedNotes();
    await vi.waitFor(() => expect(mocks.list).toHaveBeenCalledTimes(2));
    history.value = { ...history.value!, messages: [] };
    finishScan([]);
    await historyScan;
    expect(assistant.savedNote.documentId).toBe('new-save-uuid');
    expect(persist).not.toHaveBeenCalled();
  });
  it('invalidates pending scans when the chat scope is disposed', async () => {
    const scope = effectScope();
    const state = scope.run(setup);
    if (!state) throw new Error('Missing test scope');
    state.assistant.savedNote = { ...savedReference };
    let finishScan!: (files: MarkdownFile[]) => void;
    mocks.list.mockReturnValueOnce(
      new Promise<MarkdownFile[]>((resolve) => (finishScan = resolve))
    );
    const scan = state.savedNotes.syncSavedNotes();
    await vi.waitFor(() => expect(mocks.list).toHaveBeenCalledOnce());
    scope.stop();
    finishScan([]);
    await scan;
    expect(state.assistant.savedNote).toEqual(savedReference);
    expect(state.persist).not.toHaveBeenCalled();
  });
  it('skips in-flight saves and reconciles after saving completes', async () => {
    const { assistant, persist, savedNotes } = setup();
    let finishSave!: (path: string) => void;
    mocks.create.mockReturnValueOnce(
      new Promise<string>((resolve) => (finishSave = resolve))
    );
    const save = savedNotes.saveReply(assistant);
    await vi.waitFor(() => expect(mocks.create).toHaveBeenCalledOnce());
    await savedNotes.syncSavedNotes();
    expect(mocks.list).not.toHaveBeenCalled();
    finishSave(file.filePath);
    await save;
    mocks.list.mockResolvedValue([]);
    await savedNotes.syncSavedNotes();
    expect(assistant.savedNote).toBeUndefined();
    expect(persist).toHaveBeenCalledTimes(2);
  });
});
