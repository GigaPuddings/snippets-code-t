<template>
  <section
    class="flex h-full min-w-0 flex-col overflow-hidden bg-panel text-panel"
  >
    <div v-if="error" class="mb-4 text-sm text-red-600" role="alert">
      {{ error }}
    </div>
    <div v-if="loading" class="text-sm text-content">
      {{ t('nav.loadingTrash') }}
    </div>
    <div v-else-if="!notes.length" class="text-sm text-content">
      {{ t('nav.deletedEmpty') }}
    </div>
    <div v-else class="min-h-0 overflow-y-auto">
      <div
        v-for="note in notes"
        :key="note.id"
        class="flex items-center gap-2 border-b border-panel py-2"
      >
        <FileText theme="outline" :size="16" class="shrink-0 text-content" />
        <div class="min-w-0 flex-1">
          <div class="truncate text-sm font-medium">{{ note.title }}</div>
        </div>
        <button
          type="button"
          class="shrink-0 rounded-lg border border-panel px-1.5 py-1 text-xs hover:bg-hover disabled:opacity-50"
          :disabled="restoringId === note.id"
          @click="restore(note.id)"
        >
          {{ t('nav.restore') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import {
  getDeletedNotes,
  restoreDeletedNote,
  type DeletedNote
} from '@/api/markdown';

defineOptions({ name: 'DeletedNotesView' });
const { t } = useI18n();
const router = useRouter();
const notes = ref<DeletedNote[]>([]);
const loading = ref(true);
const error = ref('');
const restoringId = ref('');

const load = async () => {
  loading.value = true;
  error.value = '';
  try {
    notes.value = await getDeletedNotes();
  } catch (cause) {
    error.value = String(cause);
  } finally {
    loading.value = false;
  }
};

const restore = async (id: string) => {
  restoringId.value = id;
  error.value = '';
  try {
    const path = await restoreDeletedNote(id);
    window.dispatchEvent(
      new CustomEvent('refresh-data', { detail: { source: 'restore-note' } })
    );
    await router.push(
      `/config/category/contentList/content/${encodeURIComponent(path)}`
    );
  } catch (cause) {
    error.value = String(cause);
  } finally {
    restoringId.value = '';
  }
};

onMounted(() => void load());
</script>
