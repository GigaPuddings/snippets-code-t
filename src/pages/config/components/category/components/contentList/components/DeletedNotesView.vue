<template>
  <Teleport v-if="sidebarTarget" :to="sidebarTarget">
    <section
      class="flex h-full min-h-0 flex-col text-ui-main"
      :aria-label="t('nav.recentlyDeleted')"
    >
      <p class="shrink-0 px-3 pb-2 text-ui-caption text-ui-muted">
        {{ t('nav.trashRetention') }}
      </p>
      <p
        v-if="loading"
        class="px-3 py-2 text-ui-caption text-ui-muted"
        role="status"
      >
        {{ t('nav.loadingTrash') }}
      </p>
      <p
        v-else-if="!notes.length"
        class="px-3 py-2 text-ui-caption text-ui-muted"
      >
        {{ t('nav.deletedEmpty') }}
      </p>
      <ul v-else class="min-h-0 flex-1 overflow-y-auto pb-2">
        <li
          v-for="note in notes"
          :key="note.id"
          class="group relative mb-ui-row-gap rounded-ui hover:bg-ui-hover"
          :class="{ 'bg-ui-selected': selectedId === note.id }"
        >
          <button
            type="button"
            class="flex w-full min-w-0 flex-col gap-0.5 rounded-ui py-2 pl-3 pr-20 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--el-color-primary)]"
            :aria-pressed="selectedId === note.id"
            @click="selectedId = note.id"
          >
            <span
              class="block w-full truncate text-ui font-medium"
              :title="note.title"
            >
              {{ note.title }}
            </span>
            <span
              class="text-ui-caption text-ui-muted"
              :title="expirationTitle(note)"
            >
              {{ expirationLabel(note) }}
            </span>
          </button>
          <div
            class="pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 gap-1 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"
          >
            <CustomButton
              unstyled
              class="ui-icon-button ui-icon-button--small ui-action--muted"
              :title="t('nav.restore')"
              :aria-label="t('nav.restoreNamed', { name: note.title })"
              :disabled="
                Boolean(restoringId || deletingId) ||
                remainingTrashDays(note.expiresAt, now) === 0
              "
              :aria-busy="restoringId === note.id"
              @click="restore(note.id)"
            >
              <RotateCcw
                width="16"
                height="16"
                :class="{ 'animate-spin': restoringId === note.id }"
                aria-hidden="true"
              />
            </CustomButton>
            <CustomButton
              unstyled
              class="ui-icon-button ui-icon-button--small ui-action--muted hover:text-[var(--el-color-danger)]"
              :title="t('nav.trashDeleteNow')"
              :aria-label="t('nav.trashDeleteNamed', { name: note.title })"
              :disabled="Boolean(restoringId || deletingId)"
              @click="requestDelete(note)"
            >
              <Trash2 width="16" height="16" aria-hidden="true" />
            </CustomButton>
          </div>
        </li>
      </ul>
    </section>
  </Teleport>

  <section
    class="flex h-full min-w-0 flex-col overflow-hidden bg-content text-ui-main"
    :aria-label="t('nav.trashPreview')"
  >
    <header
      class="shrink-0 border-b border-[var(--workspace-nav-border)] px-6 py-4"
    >
      <div
        class="mb-3 flex items-center justify-between gap-3 text-ui-caption text-ui-muted"
      >
        <span>
          {{ t('nav.recentlyDeleted') }}
          <span v-if="!loading" class="ml-2 tabular-nums">
            {{ t('nav.trashCount', { count: notes.length }, notes.length) }}
          </span>
        </span>
        <div v-if="selectedNote" class="flex items-center gap-1">
          <CustomButton
            unstyled
            class="ui-icon-button ui-icon-button--small ui-action--muted"
            :title="t('nav.restore')"
            :aria-label="t('nav.restoreNamed', { name: selectedNote.title })"
            :disabled="
              Boolean(restoringId || deletingId) ||
              remainingTrashDays(selectedNote.expiresAt, now) === 0
            "
            @click="restore(selectedNote.id)"
          >
            <RotateCcw width="16" height="16" aria-hidden="true" />
          </CustomButton>
          <CustomButton
            unstyled
            class="ui-icon-button ui-icon-button--small ui-action--muted hover:text-[var(--el-color-danger)]"
            :title="t('nav.trashDeleteNow')"
            :aria-label="
              t('nav.trashDeleteNamed', { name: selectedNote.title })
            "
            :disabled="Boolean(restoringId || deletingId)"
            @click="requestDelete(selectedNote)"
          >
            <Trash2 width="16" height="16" aria-hidden="true" />
          </CustomButton>
        </div>
      </div>
      <h1
        class="truncate text-ui-title font-semibold text-ui-heading"
        :title="selectedNote?.title"
      >
        {{ selectedNote?.title || t('nav.recentlyDeleted') }}
      </h1>
      <p
        v-if="selectedNote"
        class="mt-1 truncate text-ui-caption text-ui-muted"
        :title="t('nav.trashOriginalPath', { path: selectedNote.originalPath })"
      >
        {{ selectedNote.originalPath }}
      </p>
      <p v-else class="mt-1 text-ui-caption text-ui-muted">
        {{ t('nav.trashRetention') }}
      </p>
    </header>

    <div
      v-if="error"
      class="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--workspace-nav-border)] px-6 py-3 text-ui-caption"
      role="alert"
    >
      <span class="min-w-0 break-words text-[var(--el-color-danger)]">
        {{ error }}
      </span>
      <CustomButton size="small" @click="refresh">
        {{ t('common.retry') }}
      </CustomButton>
    </div>
    <template v-if="selectedNote">
      <div
        class="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 px-6 py-3 text-ui-caption text-ui-muted"
      >
        <span>
          {{
            t('nav.trashDeletedAt', {
              date: formatDate(selectedNote.deletedAt)
            })
          }}
        </span>
        <span
          class="rounded-ui bg-ui-card-soft px-2 py-0.5"
          :title="expirationTitle(selectedNote)"
        >
          {{ expirationLabel(selectedNote) }}
        </span>
        <span>{{ t('nav.trashReadOnly') }}</span>
      </div>
      <p
        v-if="previewLoading"
        class="px-6 py-4 text-ui-caption text-ui-muted"
        role="status"
      >
        {{ t('nav.trashLoadingPreview') }}
      </p>
      <div
        v-else-if="previewError"
        class="flex items-center justify-between gap-3 px-6 py-4 text-ui-caption text-ui-muted"
        role="alert"
      >
        <span class="min-w-0 break-words">{{ previewError }}</span>
        <CustomButton size="small" @click="retryPreview">
          {{ t('common.retry') }}
        </CustomButton>
      </div>
      <article
        v-else-if="preview"
        class="min-h-0 flex-1 overflow-auto px-6 pb-8"
      >
        <CodeMirrorEditor
          v-if="preview.type === 'code'"
          :key="selectedId"
          :code="preview.content"
          :dark="store.effectiveDark"
          :disabled="true"
          :code-style="{ height: '100%' }"
          background="var(--categories-content-bg)"
          status-background="var(--categories-content-bg)"
          class="h-full"
        />
        <MarkdownPreview
          v-else
          :content="preview.content"
          :note-file-path="selectedNote.originalPath"
          :dark="store.effectiveDark"
          :line-height="store.editorLineHeight"
        />
      </article>
    </template>
    <div
      v-else
      class="flex min-h-0 flex-1 items-center justify-center px-6 text-ui text-ui-muted"
      role="status"
    >
      {{ t(loading ? 'nav.loadingTrash' : 'nav.deletedEmpty') }}
    </div>
  </section>
  <ConfirmDialog
    v-model="showDeleteDialog"
    :title="t('nav.trashDeleteTitle')"
    :message="t('nav.trashDeleteConfirm', { name: deleteTarget?.title ?? '' })"
    :confirm-text="t('nav.trashDeleteTitle')"
    :cancel-text="t('common.cancel')"
    :loading="Boolean(deletingId)"
    :show-close="!deletingId"
    :show-cancel-button="!deletingId"
    :close-on-press-escape="!deletingId"
    type="danger"
    @confirm="confirmPermanentDelete"
  >
    <p>
      {{ t('nav.trashDeleteConfirm', { name: deleteTarget?.title ?? '' }) }}
    </p>
    <p
      v-if="deleteError"
      class="mt-3 break-words text-[var(--el-color-danger)]"
      role="alert"
    >
      {{ deleteError }}
    </p>
  </ConfirmDialog>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import RotateCcw from '~icons/lucide/rotate-ccw';
import Trash2 from '~icons/lucide/trash-2';
import { ConfirmDialog, CustomButton } from '@/components/UI';
import MarkdownPreview from '@/components/MarkdownPreview/index.vue';
import CodeMirrorEditor from '@/components/CodeMirrorEditor/index.vue';
import { useConfigurationStore } from '@/store';
import type { DeletedNote } from '@/api/markdown';
import {
  remainingTrashDays,
  useDeletedNotes
} from '../composables/useDeletedNotes';

defineOptions({ name: 'DeletedNotesView' });
defineProps<{ sidebarTarget: HTMLElement | null }>();
const { t, locale } = useI18n();
const store = useConfigurationStore();
const {
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
} = useDeletedNotes();
const dateFormatter = computed(
  () =>
    new Intl.DateTimeFormat(locale.value, {
      dateStyle: 'medium',
      timeStyle: 'short'
    })
);

function formatDate(value: string): string {
  const date = new Date(value);
  return Number.isFinite(date.getTime())
    ? dateFormatter.value.format(date)
    : t('nav.trashUnknownDate');
}
function expirationLabel(note: DeletedNote): string {
  const days = remainingTrashDays(note.expiresAt, now.value);
  return days === null
    ? t('nav.trashUnknownExpiration')
    : days === 0
      ? t('nav.trashExpired')
      : t('nav.trashDaysRemaining', { days }, days);
}
function expirationTitle(note: DeletedNote): string {
  return note.expiresAt
    ? t('nav.trashExpiresAt', { date: formatDate(note.expiresAt) })
    : t('nav.trashUnknownExpiration');
}
</script>
