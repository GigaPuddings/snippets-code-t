import { getCurrentScope, onScopeDispose, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import {
  createMarkdownFile,
  getAllFiles,
  getWorkspaceRoot,
  readMarkdownFile
} from '@/api/markdown';
import type { MarkdownFile } from '@/types/models';
import modal from '@/utils/modal';
import { getPathToNode } from './messageTree';
import type { ChatHistoryView, ChatMessage } from './types';
import { noteReference, resolveNote, savedAnswerContent } from './savedReply';

export function useChatSavedNotes(options: {
  history: Ref<ChatHistoryView | null>;
  persist: (history: ChatHistoryView) => Promise<void>;
  answer: (message: ChatMessage) => string;
}) {
  const { t } = useI18n();
  const router = useRouter();
  const savingIds = ref(new Set<string>());
  let savedNoteRequest = 0;
  if (getCurrentScope())
    onScopeDispose(() => {
      savedNoteRequest++;
    });
  const errorText = (error: unknown) => {
    const value = error instanceof Error ? error.message : String(error);
    return value.startsWith('savedNotes.') ? t(`localAi.${value}`) : value;
  };
  const assertRoot = async (expected: string) => {
    if ((await getWorkspaceRoot()) !== expected)
      throw new Error('savedNotes.workspaceChanged');
  };
  const navigateToNote = async (file: MarkdownFile) => {
    await router.push({
      path: `/config/category/contentList/${file.categoryId}/content/${encodeURIComponent(file.filePath)}`
    });
  };
  const syncSavedNotes = async (): Promise<void> => {
    const request = ++savedNoteRequest;
    const history = options.history.value;
    const references = history?.messages.flatMap((message) =>
      message.role === 'assistant' &&
      message.savedNote &&
      !savingIds.value.has(message.id)
        ? [{ message, reference: message.savedNote }]
        : []
    );
    if (!history || !references?.length) return;
    const workspaceRoot = await getWorkspaceRoot();
    if (request !== savedNoteRequest || options.history.value !== history)
      return;
    const current = references.filter(
      ({ reference }) => reference.workspaceRoot === workspaceRoot
    );
    if (!current.length) return;
    const files = await getAllFiles({ includeContent: false });
    await assertRoot(workspaceRoot);
    if (request !== savedNoteRequest || options.history.value !== history)
      return;

    let changed = false;
    for (const { message, reference } of current) {
      // A scan started before a save, history reload or branch deletion must
      // not overwrite the newer message state.
      if (
        message.savedNote !== reference ||
        savingIds.value.has(message.id) ||
        !history.messages.includes(message)
      )
        continue;
      const file = resolveNote(files, reference);
      if (!file || file.type !== 'note') {
        delete message.savedNote;
        changed = true;
        continue;
      }
      const next = { ...noteReference(workspaceRoot, file), workspaceRoot };
      if (
        next.documentId !== reference.documentId ||
        next.filePath !== reference.filePath ||
        next.title !== reference.title
      ) {
        message.savedNote = next;
        changed = true;
      }
    }
    if (changed) await options.persist(history);
  };
  const saveReply = async (message: ChatMessage) => {
    const history = options.history.value;
    const answer = options.answer(message);
    if (
      !history ||
      message.role !== 'assistant' ||
      message.streaming ||
      message.error ||
      !answer.trim() ||
      savingIds.value.has(message.id)
    )
      return;
    savingIds.value = new Set([...savingIds.value, message.id]);
    try {
      const workspaceRoot = await getWorkspaceRoot();
      if (message.savedNote) {
        const reference = message.savedNote;
        await assertRoot(reference.workspaceRoot);
        const file = resolveNote(
          await getAllFiles({ includeContent: false }),
          reference
        );
        await assertRoot(workspaceRoot);
        if (!file || file.type !== 'note') {
          delete message.savedNote;
          await options.persist(history);
          throw new Error('savedNotes.savedNoteMissing');
        }
        await navigateToNote(file);
        return;
      }
      const question =
        getPathToNode(history.messages, message.id)
          .slice()
          .reverse()
          .find((item) => item.role === 'user')?.content ?? '';
      const title =
        (question.trim() || history.title).split('\n')[0].slice(0, 64) ||
        t('localAi.savedNotes.savedReply');
      const aiSource = {
        version: 1 as const,
        conversationId: history.id,
        messageId: message.id,
        generatedAt: message.createdAt,
        modelName: message.modelName,
        question
      };
      const filePath = await createMarkdownFile(
        t('localAi.savedNotes.inbox'),
        {
          title,
          type: 'note',
          tags: ['AI'],
          aiSource,
          content: savedAnswerContent(
            answer,
            t('localAi.savedNotes.attribution', {
              model: message.modelName || t('localAi.savedNotes.unknownModel'),
              date: new Date(message.createdAt).toLocaleString()
            }),
            question
          )
        },
        { expectedWorkspaceRoot: workspaceRoot }
      );
      const file = await readMarkdownFile(filePath, {
        expectedWorkspaceRoot: workspaceRoot
      });
      message.savedNote = {
        ...noteReference(workspaceRoot, file),
        workspaceRoot
      };
      await options.persist(history);
      modal.msg(
        t('localAi.savedNotes.saved', {
          folder: t('localAi.savedNotes.inbox')
        }),
        'success'
      );
    } catch (error) {
      modal.msg(errorText(error), 'error');
    } finally {
      const next = new Set(savingIds.value);
      next.delete(message.id);
      savingIds.value = next;
    }
  };
  return { savingIds, syncSavedNotes, saveReply };
}
