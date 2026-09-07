<template>
  <section class="workbench-quick-actions">
    <header class="workbench-section-heading">
      <AllApplication theme="outline" size="20" />
      <h2>{{ t('workbenchHome.quickActions') }}</h2>
    </header>

    <div class="workbench-quick-actions__grid">
      <button
        v-for="action in actions"
        :key="action.id"
        type="button"
        @click="emit('navigate', action.path)"
      >
        <component
          :is="action.icon"
          class="workbench-quick-actions__icon"
          theme="outline"
          size="24"
        />
        <span>
          <strong>{{ t(action.labelKey) }}</strong>
          <small>{{ quickActionDescription(action.id) }}</small>
        </span>
        <RightSmall
          class="workbench-quick-actions__chevron"
          theme="outline"
          size="16"
        />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AllApplication, RightSmall } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { ConfigNavigationTab } from '@/plugins/navigation';

defineProps<{
  actions: ConfigNavigationTab[];
}>();

const emit = defineEmits<{
  navigate: [path: string];
}>();

const { t } = useI18n();

const quickActionDescription = (id: string): string =>
  t(`workbenchHome.quickActionDescriptions.${id}`);
</script>

<style scoped lang="scss">
.workbench-section-heading {
  display: flex;
  gap: 9px;
  align-items: center;
  min-height: 36px;
  padding: 0 2px 8px;
  color: var(--wb-primary);

  h2 {
    margin: 0;
    font-size: 17px;
    font-weight: 650;
    line-height: 1.3;
    color: var(--wb-text);
  }
}

.workbench-quick-actions__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  > button {
    display: grid;
    grid-template-columns: 30px minmax(0, 1fr) 14px;
    gap: 9px;
    align-items: center;
    min-width: 0;
    min-height: 70px;
    padding: 9px 10px;
    color: var(--wb-text);
    text-align: left;
    background: var(--wb-card-bg);
    border: 1px solid var(--wb-card-border);
    border-radius: 10px;
    box-shadow: var(--wb-shadow);
    transition:
      transform 160ms ease,
      background-color 160ms ease,
      border-color 160ms ease;

    &:hover,
    &:focus-visible {
      background: var(--wb-card-bg-strong);
      border-color: var(--wb-card-border-hover);
      outline: none;
      transform: translateY(-1px);
    }
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  strong,
  small {
    overflow: hidden;
    line-height: 1.3;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    font-size: 14px;
    font-weight: 580;
  }

  small {
    font-size: 11px;
    color: var(--wb-muted);
  }
}

.workbench-quick-actions__icon {
  color: var(--wb-primary);
}

.workbench-quick-actions__chevron {
  color: var(--wb-muted-soft);
}

@media (width <= 1080px) {
  .workbench-quick-actions__grid > button {
    grid-template-columns: 26px minmax(0, 1fr) 12px;
    gap: 7px;
    padding-inline: 8px;
  }
}

@media (height <= 800px) {
  .workbench-section-heading {
    min-height: 30px;
    padding-bottom: 5px;

    h2 {
      font-size: 15px;
    }
  }

  .workbench-quick-actions__grid {
    gap: 6px;

    > button {
      grid-template-columns: 24px minmax(0, 1fr) 12px;
      gap: 7px;
      min-height: 57px;
      padding: 6px 8px;
    }

    strong {
      font-size: 13px;
    }

    small {
      font-size: 10px;
    }
  }
}
</style>
