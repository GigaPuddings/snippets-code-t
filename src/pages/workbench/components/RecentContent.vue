<template>
  <section class="workbench-recent">
    <header class="workbench-recent__header">
      <div>
        <FileText theme="outline" size="20" />
        <h2>{{ t('workbenchHome.recent') }}</h2>
      </div>
      <button type="button" @click="emit('viewAll')">
        {{ t('workbenchHome.viewAll') }}
        <ArrowRight theme="outline" size="15" />
      </button>
    </header>

    <ul v-if="items.length" class="workbench-recent__list">
      <li v-for="item in items" :key="item.id">
        <button type="button" @click="emit('open', item.path)">
          <span class="workbench-recent__icon" aria-hidden="true">
            <FileCodeOne
              v-if="item.type === 'code'"
              theme="outline"
              size="18"
            />
            <FileText v-else theme="outline" size="18" />
          </span>
          <span class="workbench-recent__copy">
            <strong>{{ item.title }}</strong>
            <small>
              {{ item.categoryName || t('nav.uncategorized') }}
            </small>
          </span>
          <time :datetime="item.modified">
            {{ formatModified(item.modified) }}
          </time>
          <More class="workbench-recent__more" theme="outline" size="16" />
        </button>
      </li>
    </ul>

    <div v-else class="workbench-recent__empty">
      <FolderOpen theme="outline" size="25" />
      <strong>
        {{
          workspaceRoot
            ? t('workbenchHome.noRecent')
            : t('workbenchHome.workspaceNotSet')
        }}
      </strong>
      <button type="button" @click="emit('openEmpty')">
        {{ emptyActionLabel }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  FileCodeOne,
  FileText,
  FolderOpen,
  More
} from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { WorkbenchRecentItem } from '@/workbench/viewModel';

defineProps<{
  items: WorkbenchRecentItem[];
  workspaceRoot: string;
  emptyActionLabel: string;
}>();

const emit = defineEmits<{
  open: [path: string];
  openEmpty: [];
  viewAll: [];
}>();

const { t, locale } = useI18n();

const formatModified = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale.value, {
    month: 'short',
    day: 'numeric'
  }).format(date);
};
</script>

<style scoped lang="scss">
.workbench-recent {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  background: var(--wb-card-bg);
  border: 1px solid var(--wb-card-border);
  border-radius: 12px;
  box-shadow: var(--wb-shadow);
}

.workbench-recent__header {
  display: flex;
  flex: none;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  min-height: 52px;
  padding: 0 18px;
  border-bottom: 1px solid var(--wb-card-border);

  div,
  button {
    display: flex;
    align-items: center;
  }

  div {
    gap: 10px;
    min-width: 0;
    color: var(--wb-primary);
  }

  h2 {
    margin: 0;
    font-size: 17px;
    font-weight: 650;
    line-height: 1.3;
    color: var(--wb-text);
  }

  button {
    flex: none;
    gap: 4px;
    padding: 4px 0;
    font-size: 12px;
    color: var(--wb-primary);
    background: transparent;
    border: 0;
    transition: opacity 160ms ease;

    &:hover,
    &:focus-visible {
      outline: none;
      opacity: 0.72;
    }
  }
}

.workbench-recent__list {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    flex: 1;
    min-height: 54px;
    border-bottom: 1px solid var(--wb-card-border);

    &:last-child {
      border-bottom: 0;
    }
  }

  button {
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr) auto 24px;
    gap: 12px;
    align-items: center;
    width: 100%;
    min-width: 0;
    padding: 7px 14px;
    color: var(--wb-text);
    text-align: left;
    background: transparent;
    border: 0;
    transition: background-color 160ms ease;

    &:hover,
    &:focus-visible {
      background: var(--wb-hover);
      outline: none;
    }
  }
}

.workbench-recent__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  color: var(--wb-muted);
  background: rgb(95 116 243 / 5%);
  border-radius: 9px;
  transition:
    color 160ms ease,
    background-color 160ms ease;
}

.workbench-recent__list button:hover .workbench-recent__icon,
.workbench-recent__list button:focus-visible .workbench-recent__icon {
  color: var(--wb-primary);
  background: rgb(95 116 243 / 9%);
}

.workbench-recent__copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: flex-start;
  min-width: 0;

  strong {
    width: 100%;
    overflow: hidden;
    font-size: 14px;
    font-weight: 560;
    line-height: 1.3;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  small {
    display: block;
    max-width: 100%;
    padding: 1px 6px;
    overflow: hidden;
    font-size: 11px;
    line-height: 1.35;
    color: var(--wb-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
    background: rgb(116 129 151 / 8%);
    border-radius: 4px;
  }
}

.workbench-recent__list time {
  font-size: 12px;
  line-height: 1.3;
  color: var(--wb-muted);
  white-space: nowrap;
}

.workbench-recent__more {
  color: var(--wb-muted-soft);
}

.workbench-recent__empty {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0;
  color: var(--wb-muted);
  text-align: center;

  strong {
    margin-top: 9px;
    font-size: 14px;
    font-weight: 550;
    color: var(--wb-text);
  }

  button {
    padding: 6px 12px;
    margin-top: 12px;
    font-size: 12px;
    color: var(--wb-primary);
    background: transparent;
    border: 1px solid var(--wb-card-border);
    border-radius: 7px;

    &:hover,
    &:focus-visible {
      border-color: var(--wb-card-border-hover);
      outline: none;
    }
  }
}

@media (height <= 800px) {
  .workbench-recent__header {
    min-height: 42px;
    padding-inline: 14px;

    h2 {
      font-size: 15px;
    }
  }

  .workbench-recent__list {
    li {
      min-height: 46px;
    }

    button {
      grid-template-columns: 34px minmax(0, 1fr) auto 18px;
      gap: 9px;
      padding: 4px 11px;
    }
  }

  .workbench-recent__icon {
    width: 32px;
    height: 32px;
    border-radius: 7px;
  }

  .workbench-recent__copy {
    gap: 1px;

    strong {
      font-size: 13px;
    }

    small {
      padding-block: 0;
      font-size: 10px;
    }
  }

  .workbench-recent__list time {
    font-size: 11px;
  }
}
</style>
