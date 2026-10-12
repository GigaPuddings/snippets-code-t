<template>
  <main class="plugin-config-page todo-container">
    <header class="plugin-config-header">
      <div class="flex min-w-0 items-center gap-2">
        <h1 class="plugin-config-title">{{ $t('plugins.todo.name') }}</h1>
        <span class="plugin-config-count">{{ alarmCards.length }}</span>
      </div>
      <div class="flex shrink-0 items-center gap-2">
        <el-tooltip
          effect="light"
          :content="isEdit ? $t('local.done') : $t('local.edit')"
          placement="bottom"
        >
          <CustomButton
            unstyled
            class="ui-icon-button ui-action--muted"
            :aria-label="isEdit ? $t('local.done') : $t('local.edit')"
            :aria-pressed="isEdit"
            :icon="isEdit ? CheckSmall : Write"
            :disabled="alarmCards.length === 0 || saveBusy || deleteBusy"
            @click="handleEdit"
          />
        </el-tooltip>
        <el-tooltip
          effect="light"
          :content="$t('local.add')"
          placement="bottom"
        >
          <CustomButton
            :icon="Plus"
            :disabled="isEdit || saveBusy"
            @click="addAlarmCard"
          >
            {{ $t('alarm.addAlarm') }}
          </CustomButton>
        </el-tooltip>
      </div>
    </header>

    <section
      v-if="loadError"
      class="mb-3 flex items-center justify-between gap-3 rounded-ui border border-ui p-3 text-ui-muted"
      role="alert"
    >
      <span class="min-w-0 truncate" :title="loadError">
        {{ $t('alarm.loadFailed') }}
      </span>
      <CustomButton :loading="loading" @click="fetchAlarmCards">
        {{ $t('alarm.retry') }}
      </CustomButton>
    </section>
    <div class="plugin-config-toolbar">
      <el-segmented
        v-model="statusFilter"
        :options="statusOptions"
        :aria-label="$t('alarm.filterLabel')"
      />
      <div class="flex items-center gap-2 text-ui-caption text-ui-muted">
        <component
          :is="soundEnabled ? Volume2 : VolumeX"
          width="16"
          height="16"
          aria-hidden="true"
        />
        <span id="todo-sound-label">{{ $t('alarm.sound') }}</span>
        <CustomSwitch
          :model-value="soundEnabled"
          :disabled="!soundReady || soundBusy"
          aria-labelledby="todo-sound-label"
          @change="changeSound"
        />
        <CustomButton
          unstyled
          class="ui-icon-button ui-action--muted"
          :icon="Play"
          :disabled="
            !soundReady || !soundEnabled || soundBusy || soundPreviewing
          "
          :title="$t('alarm.previewSound')"
          :aria-label="$t('alarm.previewSound')"
          @click="previewSound"
        />
      </div>
    </div>
    <div
      v-if="soundError"
      class="mb-3 flex items-center justify-between gap-3 text-ui-caption text-ui-muted"
      role="alert"
      :title="soundError"
    >
      <span>{{ $t('alarm.soundUnavailable') }}</span>
      <CustomButton
        :disabled="soundBusy"
        size="small"
        @click="reloadSoundSettings"
      >
        {{ $t('alarm.retry') }}
      </CustomButton>
    </div>
    <section
      v-if="alarmCards.length > 0"
      class="min-h-0 flex-1 overflow-y-auto"
      :aria-busy="loading"
    >
      <div
        v-if="visibleCards.length"
        class="grid gap-3 pb-3 [grid-template-columns:repeat(auto-fill,minmax(min(100%,224px),320px))]"
      >
        <article
          v-for="item in visibleCards"
          :key="item.id"
          class="ui-card relative overflow-hidden"
          :class="{ 'text-ui-muted': !item.is_active }"
        >
          <button
            type="button"
            class="block w-full rounded-ui p-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            :disabled="isEdit"
            :aria-label="`${$t('alarm.editAlarm')}: ${item.title}`"
            @click="editAlarmCard(item)"
          >
            <h2
              class="mb-3 min-h-5 pr-14 text-ui font-medium line-clamp-2"
              :title="item.title"
            >
              {{ item.title }}
            </h2>
            <div class="mb-2 flex flex-wrap items-baseline gap-2">
              <span
                class="text-[28px] font-semibold leading-none tabular-nums"
                :class="item.is_active ? 'text-ui-heading' : 'text-ui-muted'"
              >
                {{ item.time }}
              </span>
              <span
                class="inline-flex items-center gap-1 rounded-ui bg-ui-card-hover px-2 py-1 text-ui-caption"
                :class="
                  reminderStatus(item).includes('urgent')
                    ? 'text-primary'
                    : 'text-ui-muted'
                "
              >
                <CheckSmall
                  v-if="reminderCompleted(item)"
                  width="13"
                  height="13"
                />
                <Remind v-else width="13" height="13" />
                {{ reminderCountdown(item, t) }}
              </span>
            </div>
            <p
              class="m-0 truncate text-ui-caption text-ui-muted"
              :title="reminderSchedule(item, t)"
            >
              {{ reminderSchedule(item, t) }}
            </p>
          </button>
          <div class="absolute right-3 top-3">
            <CustomButton
              v-if="isEdit"
              unstyled
              class="ui-icon-button ui-action--muted text-[var(--el-color-danger)]"
              :icon="Delete"
              :disabled="deleteBusy"
              :aria-label="`${$t('local.delete')}: ${item.title}`"
              @click="deleteAlarmCard(item)"
            />
            <CustomButton
              v-else-if="reminderCompleted(item)"
              unstyled
              class="ui-icon-button ui-action--muted"
              :icon="Write"
              :title="$t('alarm.reschedule')"
              :aria-label="$t('alarm.reschedule')"
              @click="editAlarmCard(item)"
            />
            <CustomSwitch
              v-else
              :model-value="item.is_active"
              :disabled="pendingToggles.has(item.id) || saveBusy"
              :aria-label="`${$t('alarm.enabled')}: ${item.title}`"
              @change="toggleAlarmCard(item)"
            />
          </div>
        </article>
      </div>
      <div
        v-else
        class="flex h-full min-h-40 flex-col items-center justify-center gap-3 text-ui-muted"
      >
        <Remind width="24" height="24" aria-hidden="true" />
        <p>{{ $t('alarm.noMatchingReminders') }}</p>
        <CustomButton @click="statusFilter = 'all'">
          {{ $t('alarm.showAll') }}
        </CustomButton>
      </div>
    </section>
    <section
      v-else
      class="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-4 pb-10 text-center"
    >
      <div
        class="mb-1 flex h-12 w-12 items-center justify-center rounded-ui-lg bg-ui-card text-ui-muted"
        aria-hidden="true"
      >
        <remind width="24" height="24" />
      </div>
      <h2 class="m-0 text-base font-medium text-ui-heading">
        {{
          $t(
            loading
              ? 'common.loading'
              : loadError
                ? 'alarm.loadFailed'
                : 'alarm.noAlarms'
          )
        }}
      </h2>
      <p
        v-if="!loading && !loadError"
        class="m-0 max-w-sm text-ui text-ui-muted"
      >
        {{ $t('alarm.noAlarmsDesc') }}
      </p>
      <CustomButton
        v-if="!loading && !loadError"
        class="mt-2"
        :icon="Plus"
        @click="addAlarmCard"
      >
        {{ $t('alarm.addAlarm') }}
      </CustomButton>
    </section>

    <alarm-edit-dialog
      ref="alarmEditDialogRef"
      :edit-data="currentEditCard"
      :save="handleAlarmSubmit"
      @delete="deleteAlarmCard"
    />

    <!-- 删除确认对话框 -->
    <ConfirmDialog
      v-model="showDeleteDialog"
      :title="$t('common.warning')"
      :confirm-text="$t('common.confirm')"
      :cancel-text="$t('common.cancel')"
      type="danger"
      :loading="deleteBusy"
      @confirm="confirmDelete"
    >
      <div>
        {{ $t('alarm.deleteConfirm', { name: deleteTarget?.title || '' }) }}
      </div>
    </ConfirmDialog>
  </main>
</template>

<script setup lang="ts">
import Write from '~icons/lucide/square-pen';
import Plus from '~icons/lucide/plus';
import CheckSmall from '~icons/lucide/check';
import Delete from '~icons/lucide/trash-2';
import Remind from '~icons/lucide/bell';
import Volume2 from '~icons/lucide/volume-2';
import VolumeX from '~icons/lucide/volume-x';
import Play from '~icons/lucide/play';
import { useI18n } from 'vue-i18n';
import AlarmEditDialog from './components/AlarmEditDialog.vue';
import { invoke } from '@tauri-apps/api/core';
import { ConfirmDialog, CustomButton, CustomSwitch } from '@/components/UI';
import modal from '@/utils/modal';
import {
  reminderCompleted,
  reminderSchedule,
  reminderStatus,
  reminderCountdown
} from '../../reminders';
import { useReminderSound } from './useReminderSound';
import { useReminderList } from './useReminderList';

const { t } = useI18n();

const { alarmCards, loading, loadError, fetchAlarmCards } = useReminderList();
const showDeleteDialog = ref(false);
const deleteTarget = ref<AlarmCard | null>(null);
const saveBusy = ref(false);
const deleteBusy = ref(false);
const pendingToggles = ref(new Set<string>());
const isEdit = ref(false);
const {
  enabled: soundEnabled,
  ready: soundReady,
  busy: soundBusy,
  previewing: soundPreviewing,
  error: soundError,
  load: reloadSoundSettings,
  change: changeSound,
  preview: previewSound
} = useReminderSound();
const statusFilter = ref<'all' | 'active' | 'paused' | 'completed'>('all');
const statusOptions = computed(() => [
  { label: t('alarm.showAll'), value: 'all' },
  { label: t('alarm.active'), value: 'active' },
  { label: t('alarm.paused'), value: 'paused' },
  { label: t('alarm.completed'), value: 'completed' }
]);
const visibleCards = computed(() =>
  alarmCards.value.filter((card) => {
    const completed = reminderCompleted(card);
    switch (statusFilter.value) {
      case 'active':
        return card.is_active;
      case 'paused':
        return !card.is_active && !completed;
      case 'completed':
        return completed;
      default:
        return true;
    }
  })
);
const currentEditCard = ref<AlarmCard | null>(null);
const alarmEditDialogRef = ref<InstanceType<typeof AlarmEditDialog> | null>(
  null
);
watch(
  () => alarmCards.value.length,
  (count) => {
    if (!count) isEdit.value = false;
  }
);
const handleEdit = (): void => {
  if (alarmCards.value.length === 0) return;
  isEdit.value = !isEdit.value;
};

const addAlarmCard = async (): Promise<void> => {
  if (isEdit.value || saveBusy.value || deleteBusy.value) return;
  currentEditCard.value = null;
  await nextTick();
  alarmEditDialogRef.value?.open();
};

const editAlarmCard = async (item: AlarmCard): Promise<void> => {
  if (isEdit.value || saveBusy.value || deleteBusy.value) return;
  currentEditCard.value = item;
  await nextTick();
  alarmEditDialogRef.value?.open();
};

const handleAlarmSubmit = async (
  formData: Partial<AlarmCard>
): Promise<void> => {
  if (saveBusy.value) return;
  saveBusy.value = true;
  try {
    if (currentEditCard.value) {
      await invoke('update_alarm_card', {
        card: { ...currentEditCard.value, ...formData }
      });
    } else {
      await invoke('add_alarm_card', { card: formData });
    }
    await fetchAlarmCards();
  } finally {
    saveBusy.value = false;
  }
};

const deleteAlarmCard = (item: AlarmCard): void => {
  if (deleteBusy.value) return;
  deleteTarget.value = item;
  showDeleteDialog.value = true;
};

const confirmDelete = async (): Promise<void> => {
  if (!deleteTarget.value || deleteBusy.value) return;
  deleteBusy.value = true;

  try {
    await invoke('delete_alarm_card', { id: deleteTarget.value.id });
    modal.success(t('alarm.deleteSuccess'));
    await fetchAlarmCards();
    showDeleteDialog.value = false;
    deleteTarget.value = null;
    alarmEditDialogRef.value?.close();
  } catch (error) {
    console.error('Failed to delete alarm card:', error);
    modal.error(`${t('alarm.deleteFailed')}: ${String(error)}`);
  } finally {
    deleteBusy.value = false;
  }
};

const toggleAlarmCard = async (item: AlarmCard): Promise<void> => {
  if (pendingToggles.value.has(item.id)) return;
  pendingToggles.value.add(item.id);
  try {
    await invoke('toggle_alarm_card', { id: item.id });
    await fetchAlarmCards();
  } catch (error) {
    modal.error(`${t('alarm.toggleFailed')}: ${String(error)}`);
  } finally {
    pendingToggles.value.delete(item.id);
  }
};

const closePageDialogs = (): void => {
  showDeleteDialog.value = false;
  deleteTarget.value = null;
  currentEditCard.value = null;
  alarmEditDialogRef.value?.close?.();
};
onDeactivated(closePageDialogs);
onUnmounted(closePageDialogs);
</script>
