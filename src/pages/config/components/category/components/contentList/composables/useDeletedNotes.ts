import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
  getDeletedNotes,
  readDeletedNote,
  restoreDeletedNote,
  permanentlyDeleteNote,
  type DeletedNote,
  type DeletedNoteContent
} from '@/api/markdown';

export function remainingTrashDays(
  expiresAt: string | undefined,
  now: number
): number | null {
  const deadline = Date.parse(expiresAt ?? '');
  return Number.isFinite(deadline)
    ? Math.max(0, Math.ceil((deadline - now) / 86_400_000))
    : null;
}

export function useDeletedNotes() {
  const router = useRouter();
  const notes = ref<DeletedNote[]>([]);
  const selectedId = ref('');
  const selectedNote = computed(() =>
    notes.value.find((note) => note.id === selectedId.value)
  );
  const loading = ref(true);
  const error = ref('');
  const restoringId = ref('');
  const deletingId = ref('');
  const deleteTarget = ref<DeletedNote>();
  const showDeleteDialog = ref(false);
  const deleteError = ref('');
  const preview = ref<DeletedNoteContent>();
  const previewLoading = ref(false);
  const previewError = ref('');
  const previewRevision = ref(0);
  const now = ref(Date.now());
  let disposed = false;
  let revision = 0;
  let timer: ReturnType<typeof setInterval> | undefined;

  async function load(): Promise<void> {
    const request = ++revision;
    try {
      const entries = await getDeletedNotes();
      if (disposed || request !== revision) return;
      notes.value = entries;
      now.value = Date.now();
      error.value = '';
      if (!entries.some((note) => note.id === selectedId.value)) {
        selectedId.value = entries[0]?.id ?? '';
      }
    } catch (cause) {
      if (!disposed && request === revision) error.value = String(cause);
    } finally {
      if (!disposed && request === revision) loading.value = false;
    }
  }

  watch([selectedId, previewRevision], async ([id], _, onCleanup) => {
    let cancelled = false;
    onCleanup(() => {
      cancelled = true;
    });
    preview.value = undefined;
    previewError.value = '';
    previewLoading.value = Boolean(id);
    if (!id) return;
    try {
      const content = await readDeletedNote(id);
      if (!cancelled) preview.value = content;
    } catch (cause) {
      if (!cancelled) previewError.value = String(cause);
    } finally {
      if (!cancelled) previewLoading.value = false;
    }
  });

  async function restore(id: string): Promise<void> {
    if (restoringId.value || deletingId.value) return;
    restoringId.value = id;
    error.value = '';
    try {
      const path = await restoreDeletedNote(id);
      if (disposed) return;
      window.dispatchEvent(
        new CustomEvent('refresh-data', { detail: { source: 'restore-note' } })
      );
      await router.push(
        `/config/category/contentList/content/${encodeURIComponent(path)}`
      );
    } catch (cause) {
      if (!disposed) error.value = String(cause);
    } finally {
      if (!disposed) restoringId.value = '';
    }
  }

  function requestDelete(note: DeletedNote): void {
    if (restoringId.value || deletingId.value) return;
    deleteTarget.value = { ...note };
    deleteError.value = '';
    showDeleteDialog.value = true;
  }

  watch(
    showDeleteDialog,
    (visible) => {
      if (!visible && !deletingId.value) {
        deleteTarget.value = undefined;
        deleteError.value = '';
      }
    },
    { flush: 'sync' }
  );

  async function confirmPermanentDelete(): Promise<void> {
    const target = deleteTarget.value;
    if (
      !showDeleteDialog.value ||
      !target ||
      restoringId.value ||
      deletingId.value
    )
      return;
    deletingId.value = target.id;
    deleteError.value = '';
    ++revision;
    try {
      await permanentlyDeleteNote(target.id);
      if (disposed) return;
      const index = notes.value.findIndex((note) => note.id === target.id);
      notes.value = notes.value.filter((note) => note.id !== target.id);
      if (selectedId.value === target.id) {
        selectedId.value =
          notes.value[Math.min(Math.max(index, 0), notes.value.length - 1)]
            ?.id ?? '';
      }
      showDeleteDialog.value = false;
      deleteTarget.value = undefined;
      window.dispatchEvent(
        new CustomEvent('refresh-data', {
          detail: { source: 'permanently-delete-note' }
        })
      );
    } catch (cause) {
      if (!disposed) deleteError.value = String(cause);
    } finally {
      if (!disposed) deletingId.value = '';
    }
  }

  function refresh(): void {
    now.value = Date.now();
    void load();
  }
  function retryPreview(): void {
    previewRevision.value++;
  }
  onMounted(() => {
    refresh();
    timer = setInterval(refresh, 60_000);
    window.addEventListener('focus', refresh);
    window.addEventListener('refresh-data', refresh);
  });
  onBeforeUnmount(() => {
    disposed = true;
    clearInterval(timer);
    window.removeEventListener('focus', refresh);
    window.removeEventListener('refresh-data', refresh);
  });

  return {
    notes,
    selectedId,
    selectedNote,
    loading,
    error,
    restoringId,
    deletingId,
    deleteTarget,
    showDeleteDialog,
    deleteError,
    requestDelete,
    confirmPermanentDelete,
    preview,
    previewLoading,
    previewError,
    retryPreview,
    now,
    restore,
    refresh
  };
}
