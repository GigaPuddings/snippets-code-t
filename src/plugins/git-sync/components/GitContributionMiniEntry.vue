<template>
  <div
    v-if="visible"
    ref="rootRef"
    class="git-contribution-mini"
    :class="`git-contribution-mini--${syncState}`"
    @keydown="handleKeydown"
  >
    <el-tooltip
      effect="light"
      :content="$t('settings.gitSync.contribution.title')"
      placement="bottom"
    >
      <button
        class="git-contribution-mini__button"
        type="button"
        :aria-label="$t('settings.gitSync.contribution.title')"
        :aria-expanded="isPanelOpen"
        @click="togglePanel"
      >
        <span class="git-contribution-mini__visual">
          <Loading
            v-if="isLoading && !contributionActivity"
            class="git-contribution-mini__loading"
            theme="outline"
            size="14"
            :strokeWidth="3"
          />
          <span v-else class="git-contribution-mini__spark" aria-hidden="true">
            <i
              v-for="day in miniDays"
              :key="day.date"
              class="git-contribution-mini__day"
              :class="getDayClass(day)"
            />
          </span>
        </span>
      </button>
    </el-tooltip>

    <transition name="git-contribution-mini-pop">
      <section
        v-if="isPanelOpen && contributionActivity"
        class="git-contribution-mini__panel"
        :style="panelStyle"
        @mousedown.stop
      >
        <header class="git-contribution-mini__panel-head">
          <div class="git-contribution-mini__panel-copy">
            <div class="git-contribution-mini__panel-title">
              {{ $t('settings.gitSync.contribution.title') }}
            </div>
            <div class="git-contribution-mini__panel-desc">
              {{ $t('settings.gitSync.contribution.desc') }}
            </div>
          </div>
          <el-tooltip
            effect="light"
            :content="$t('settings.gitSync.title')"
            placement="top"
          >
            <button
              class="git-contribution-mini__settings"
              type="button"
              @click.stop="goToGitSettings"
            >
              <SettingTwo theme="outline" size="15" :strokeWidth="3" />
            </button>
          </el-tooltip>
        </header>

        <div
          class="git-contribution-mini__board"
          :aria-label="$t('settings.gitSync.contribution.title')"
        >
          <div
            class="git-contribution-mini__weeks"
            :style="{ gridTemplateColumns: `repeat(${panelWeeks.length}, 8px)` }"
          >
            <div
              v-for="(week, weekIndex) in panelWeeks"
              :key="weekIndex"
              class="git-contribution-mini__week"
            >
              <i
                v-for="(day, dayIndex) in week"
                :key="day?.date || `empty-${weekIndex}-${dayIndex}`"
                class="git-contribution-mini__day git-contribution-mini__day--panel"
                :class="getDayClass(day)"
                :title="day ? getDayTitle(day) : ''"
              />
            </div>
          </div>
        </div>

        <footer class="git-contribution-mini__footer">
          <span class="git-contribution-mini__legend">
            {{ $t('settings.gitSync.contribution.less') }}
            <i
              v-for="level in [0, 1, 2, 3, 4]"
              :key="level"
              class="git-contribution-mini__day git-contribution-mini__day--legend"
              :class="`git-contribution-mini__day--level-${level}`"
            />
            {{ $t('settings.gitSync.contribution.more') }}
          </span>
        </footer>
      </section>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { listen, type UnlistenFn } from '@tauri-apps/api/event';
import { Loading, SettingTwo } from '@icon-park/vue-next';
import { usePluginStore } from '@/store/plugins';
import { getGitContributionActivity } from '@/plugins/git-sync/api';
import type {
  GitContributionActivity,
  GitContributionDay
} from '@/plugins/git-sync/api';
import { useGitStatus } from '@/plugins/git-sync/useGitStatus';

type ContributionCell = GitContributionDay | null;

const router = useRouter();
const pluginStore = usePluginStore();
const { t } = useI18n();
const {
  gitSettings,
  syncState,
  refreshSettings,
  refreshStatus
} = useGitStatus();

const rootRef = ref<HTMLElement | null>(null);
const contributionActivity = ref<GitContributionActivity | null>(null);
const isLoading = ref(false);
const isPanelOpen = ref(false);
const panelStyle = ref<Record<string, string>>({});
let unlistenSyncComplete: UnlistenFn | null = null;
let unlistenWorkspaceChanged: UnlistenFn | null = null;
let refreshTimer: number | null = null;
let isDisposed = false;

const canLoadActivity = computed(() => (
  pluginStore.isInstalled('git-sync') &&
  pluginStore.isEnabled('git-sync') &&
  gitSettings.value?.enabled === true
));

const visible = computed(() => (
  canLoadActivity.value &&
  (isLoading.value || contributionActivity.value !== null)
));

const miniDays = computed(() => (
  contributionActivity.value?.days.slice(-12) ?? []
));

const panelWeeks = computed<ContributionCell[][]>(() => {
  const days = contributionActivity.value?.days.slice(-84) ?? [];
  if (!days.length) return [];

  const firstDate = parseContributionDate(days[0].date);
  const cells: ContributionCell[] = [
    ...Array.from({ length: firstDate.getDay() }, () => null),
    ...days
  ];
  const trailingCount = cells.length % 7 === 0 ? 0 : 7 - (cells.length % 7);
  cells.push(...Array.from({ length: trailingCount }, () => null));

  const weeks: ContributionCell[][] = [];
  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7));
  }
  return weeks;
});

watch(canLoadActivity, (enabled) => {
  if (enabled) {
    scheduleActivityRefresh();
    return;
  }

  contributionActivity.value = null;
  isPanelOpen.value = false;
});

async function initializeActivity(): Promise<void> {
  await pluginStore.initialize();
  await refreshSettings();

  if (!canLoadActivity.value) return;

  await Promise.all([
    refreshStatus(),
    loadActivity()
  ]);
}

async function loadActivity(): Promise<void> {
  if (!canLoadActivity.value) return;

  isLoading.value = true;
  try {
    const activity = await getGitContributionActivity();
    contributionActivity.value = activity;
  } catch {
    contributionActivity.value = null;
    isPanelOpen.value = false;
  } finally {
    isLoading.value = false;
  }
}

function scheduleActivityRefresh(): void {
  if (refreshTimer !== null) {
    window.clearTimeout(refreshTimer);
  }

  refreshTimer = window.setTimeout(() => {
    refreshTimer = null;
    void loadActivity();
  }, 300);
}

function togglePanel(): void {
  isPanelOpen.value = !isPanelOpen.value;
  if (isPanelOpen.value) {
    updatePanelPosition();
  }
}

function handleKeydown(event: KeyboardEvent): void {
  if (event.key !== 'Escape' || !isPanelOpen.value) return;

  event.stopPropagation();
  isPanelOpen.value = false;
}

function handleDocumentKeydown(event: KeyboardEvent): void {
  if (event.key !== 'Escape' || !isPanelOpen.value) return;

  event.preventDefault();
  event.stopPropagation();
  isPanelOpen.value = false;
}

function handleDocumentMouseDown(event: MouseEvent): void {
  if (!isPanelOpen.value) return;
  const target = event.target;
  if (target instanceof Node && rootRef.value?.contains(target)) return;

  isPanelOpen.value = false;
}

function updatePanelPosition(): void {
  const wrapper = rootRef.value?.closest('.content-search-wrapper');
  if (!(wrapper instanceof HTMLElement)) return;

  const rect = wrapper.getBoundingClientRect();
  panelStyle.value = {
    left: `${rect.left}px`,
    top: `${rect.bottom + 4}px`,
    width: `${rect.width}px`
  };
}

function goToGitSettings(): void {
  isPanelOpen.value = false;
  void router.push({
    path: '/config/category/settings',
    query: { tab: 'gitSync' }
  });
}

function parseContributionDate(date: string): Date {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function getLevel(count: number): number {
  if (count <= 0) return 0;
  const maxCount = contributionActivity.value?.max_count || 0;
  if (maxCount <= 1) return 2;
  return Math.min(4, Math.max(1, Math.ceil((count / maxCount) * 4)));
}

function getDayClass(day: ContributionCell): string {
  if (!day) return 'git-contribution-mini__day--empty';
  return `git-contribution-mini__day--level-${getLevel(day.count)}`;
}

function getDayTitle(day: GitContributionDay): string {
  return t('settings.gitSync.contribution.dayTitle', {
    date: day.date,
    count: day.count
  });
}

onMounted(async () => {
  isDisposed = false;
  document.addEventListener('keydown', handleDocumentKeydown, true);
  document.addEventListener('mousedown', handleDocumentMouseDown);
  window.addEventListener('resize', updatePanelPosition);

  void listen('git-sync-complete', () => {
    scheduleActivityRefresh();
  }).then((unlisten) => {
    if (isDisposed) {
      unlisten();
      return;
    }
    unlistenSyncComplete = unlisten;
  });

  void listen('git-workspace-changed', () => {
    scheduleActivityRefresh();
  }).then((unlisten) => {
    if (isDisposed) {
      unlisten();
      return;
    }
    unlistenWorkspaceChanged = unlisten;
  });

  await initializeActivity();
});

onUnmounted(() => {
  isDisposed = true;
  document.removeEventListener('keydown', handleDocumentKeydown, true);
  document.removeEventListener('mousedown', handleDocumentMouseDown);
  window.removeEventListener('resize', updatePanelPosition);
  unlistenSyncComplete?.();
  unlistenWorkspaceChanged?.();

  if (refreshTimer !== null) {
    window.clearTimeout(refreshTimer);
  }
});
</script>

<style scoped lang="scss">
.git-contribution-mini {
  position: relative;
  z-index: 8;
  flex-shrink: 0;
}

.git-contribution-mini__button {
  display: inline-flex;
  width: 32px;
  height: 30px;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--categories-text-color);
  cursor: pointer;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: none;
  transition: background 0.16s ease, border-color 0.16s ease;

  &:hover,
  &:focus-visible {
    background: var(--categories-panel-bg-hover);
    border-color: rgba(var(--categories-border-color-rgb), 0.65);
  }
}

.git-contribution-mini__loading {
  color: #30a14e;
  animation: git-contribution-mini-spin 0.8s linear infinite;
}

.git-contribution-mini__visual {
  display: inline-flex;
  width: 22px;
  height: 16px;
  align-items: center;
  justify-content: center;
}

.git-contribution-mini__panel-copy {
  min-width: 0;
}

.git-contribution-mini__panel-title {
  overflow: hidden;
  color: var(--categories-text-color);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.git-contribution-mini__panel-desc {
  overflow: hidden;
  color: var(--categories-info-text-color);
  font-size: 10px;
  line-height: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.git-contribution-mini__spark {
  display: grid;
  grid-template-columns: repeat(4, 4px);
  gap: 2px;
}

.git-contribution-mini__day {
  display: inline-block;
  width: 4px;
  height: 4px;
  background: rgba(var(--categories-border-color-rgb), 0.36);
  border-radius: 1px;
}

.git-contribution-mini__day--panel,
.git-contribution-mini__day--legend {
  width: 8px;
  height: 8px;
  border: 1px solid rgba(var(--categories-border-color-rgb), 0.5);
}

.git-contribution-mini__day--empty {
  visibility: hidden;
}

.git-contribution-mini__day--level-0 {
  background: rgba(var(--categories-border-color-rgb), 0.3);
}

.git-contribution-mini__day--level-1 {
  background: #9be9a8;
  border-color: #7bd68a;
}

.git-contribution-mini__day--level-2 {
  background: #40c463;
  border-color: #35a954;
}

.git-contribution-mini__day--level-3 {
  background: #30a14e;
  border-color: #268441;
}

.git-contribution-mini__day--level-4 {
  background: #216e39;
  border-color: #1d5f32;
}

.git-contribution-mini__panel {
  position: fixed;
  box-sizing: border-box;
  z-index: 20;
  padding: 12px;
  background: var(--categories-content-bg);
  border: 1px solid var(--categories-border-color);
  border-radius: 8px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
}

.git-contribution-mini__panel-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.git-contribution-mini__settings {
  display: inline-flex;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: var(--categories-info-text-color);
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--categories-border-color);
  border-radius: 6px;

  &:hover,
  &:focus-visible {
    color: var(--el-color-primary);
    background: rgba(var(--el-color-primary-rgb), 0.08);
    border-color: rgba(var(--el-color-primary-rgb), 0.3);
  }
}

.git-contribution-mini__board {
  max-width: 100%;
  margin-top: 12px;
  overflow-x: auto;
}

.git-contribution-mini__weeks {
  display: grid;
  width: max-content;
  gap: 3px;
}

.git-contribution-mini__week {
  display: grid;
  grid-template-rows: repeat(7, 8px);
  gap: 3px;
}

.git-contribution-mini__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  color: var(--categories-info-text-color);
  font-size: 10px;
  line-height: 14px;
}

.git-contribution-mini__legend {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 3px;
}

.git-contribution-mini-pop-enter-active,
.git-contribution-mini-pop-leave-active {
  transition: opacity 0.14s ease, transform 0.14s ease;
}

.git-contribution-mini-pop-enter-from,
.git-contribution-mini-pop-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}

@keyframes git-contribution-mini-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
