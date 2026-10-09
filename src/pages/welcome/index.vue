<template>
  <main class="h-full min-h-0 overflow-y-auto bg-[var(--settings-surface)]">
    <div class="mx-auto max-w-3xl px-8 py-8 [@media(max-width:800px)]:px-5">
      <header class="mb-6">
        <p class="mb-2 text-ui-caption text-content">
          {{ t('nav.workspace') }}
        </p>
        <h1
          class="text-[26px] font-semibold leading-8 text-[var(--workspace-nav-heading)]"
        >
          {{ t('workspaceStart.title') }}
        </h1>
        <p class="mt-2 max-w-xl text-ui leading-6 text-content">
          {{ t('workspaceStart.description') }}
        </p>
      </header>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
        <button
          v-for="action in actions"
          :key="action.id"
          type="button"
          class="ui-card ui-card--soft flex flex-col items-start gap-2 rounded-ui-lg p-4 text-ui text-ui-main"
          @click="action.run()"
        >
          <component :is="action.icon" width="22" height="22" />
          <strong class="font-medium">{{ action.label }}</strong>
          <span class="text-ui-caption text-content">
            {{ action.description }}
          </span>
        </button>
      </div>
      <section class="mt-7" :aria-label="t('workspaceStart.recent')">
        <header class="mb-2 flex items-center gap-3">
          <h2 class="text-ui font-medium text-[var(--workspace-nav-heading)]">
            {{ t('workspaceStart.recent') }}
          </h2>
        </header>
        <p v-if="loading" class="py-6 text-ui text-content" role="status">
          {{ t('common.loading') }}
        </p>
        <div
          v-else-if="loadError"
          class="rounded-xl bg-[var(--workspace-nav-bg)] p-4 text-ui text-content"
          role="alert"
        >
          <p>{{ t('workspaceStart.loadFailed') }}</p>
          <CustomButton class="mt-3" @click="loadRecent">
            {{ t('workbenchHome.refresh') }}
          </CustomButton>
        </div>
        <ul v-else-if="recentItems.length" class="space-y-1">
          <li v-for="item in recentItems" :key="item.id">
            <button
              type="button"
              class="ui-list-action flex min-h-12 w-full items-center gap-3 px-3 py-2 text-ui"
              @click="router.push(item.path)"
            >
              <component
                :is="item.type === 'note' ? Notebook : FileCodeOne"
                width="18"
                height="18"
                class="shrink-0"
              />
              <span class="min-w-0 flex-1">
                <span class="block truncate" :title="item.title">
                  {{ item.title }}
                </span>
                <span class="block truncate text-ui-caption text-content">
                  {{ item.categoryName || t('nav.uncategorized') }}
                </span>
              </span>
              <ArrowRight
                width="16"
                height="16"
                class="shrink-0 text-content"
              />
            </button>
          </li>
        </ul>
        <p
          v-else
          class="rounded-xl bg-[var(--workspace-nav-bg)] p-4 text-ui leading-6 text-content"
        >
          {{ t('workspaceStart.noRecent') }}
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import ArrowRight from '~icons/lucide/arrow-right';
import EditTwo from '~icons/lucide/square-pen';
import FileCodeOne from '~icons/lucide/file-code';
import Notebook from '~icons/lucide/notebook';
import Search from '~icons/lucide/search';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useConfigQuickSearch } from '@/composables/useConfigQuickSearch';
import { getAllFiles } from '@/api/markdown';
import {
  buildWorkbenchRecentItems,
  type WorkbenchRecentItem
} from '@/workbench/viewModel';
import { CustomButton } from '@/components/UI';

const { t } = useI18n();
const router = useRouter();
const { open: openSearch } = useConfigQuickSearch();
const loading = ref(true);
const loadError = ref(false);
const recentItems = ref<WorkbenchRecentItem[]>([]);
let loadGeneration = 0;
let disposed = false;
const create = (type: 'note' | 'code') =>
  router.push({
    path: '/config/category/contentList',
    query: { create: type }
  });
const actions = computed(() => [
  {
    id: 'note',
    icon: EditTwo,
    label: t('nav.newNote'),
    description: t('workspaceStart.noteDescription'),
    run: () => create('note')
  },
  {
    id: 'code',
    icon: FileCodeOne,
    label: t('fragmentType.newSnippet'),
    description: t('workspaceStart.codeDescription'),
    run: () => create('code')
  },
  {
    id: 'search',
    icon: Search,
    label: t('titlebar.quickSearch'),
    description: t('workspaceStart.searchDescription'),
    run: openSearch
  }
]);
const loadRecent = async () => {
  const generation = ++loadGeneration;
  loading.value = true;
  loadError.value = false;
  try {
    const files = await getAllFiles();
    if (!disposed && generation === loadGeneration)
      recentItems.value = buildWorkbenchRecentItems(files, 4);
  } catch {
    if (!disposed && generation === loadGeneration) loadError.value = true;
  } finally {
    if (!disposed && generation === loadGeneration) loading.value = false;
  }
};
const refreshRecent = () => void loadRecent();
onMounted(() => {
  void loadRecent();
  window.addEventListener('refresh-data', refreshRecent);
});
onBeforeUnmount(() => {
  disposed = true;
  window.removeEventListener('refresh-data', refreshRecent);
});
</script>
