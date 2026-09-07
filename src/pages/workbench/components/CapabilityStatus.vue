<template>
  <section class="workbench-capabilities">
    <header class="workbench-capabilities__heading">
      <div>
        <ChartHistogram theme="outline" size="20" />
        <h2>{{ t('workbenchHome.systemStatus') }}</h2>
      </div>
      <button type="button" @click="emit('manage')">
        {{ t('workbenchHome.manage') }}
        <ArrowRight theme="outline" size="14" />
      </button>
    </header>

    <div class="workbench-capabilities__list">
      <button
        v-for="layer in layers"
        :key="layer.id"
        type="button"
        @click="layer.actions[0] && emit('navigateAction', layer.actions[0])"
      >
        <component
          :is="layer.icon"
          class="workbench-capabilities__icon"
          theme="outline"
          size="20"
        />
        <span class="workbench-capabilities__name">{{ layer.label }}</span>
        <span class="workbench-capabilities__status">
          <i :class="`workbench-capabilities__dot--${layer.status}`"></i>
          {{ t(`workbenchHome.status.${layer.status}`) }}
        </span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, ChartHistogram } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { WorkbenchAction, WorkbenchLayer } from '@/workbench/viewModel';

defineProps<{
  layers: WorkbenchLayer[];
}>();

const emit = defineEmits<{
  manage: [];
  navigateAction: [action: WorkbenchAction];
}>();

const { t } = useI18n();
</script>

<style scoped lang="scss">
.workbench-capabilities {
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

.workbench-capabilities__heading {
  display: flex;
  flex: none;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  padding: 0 14px;
  border-bottom: 1px solid var(--wb-card-border);

  div,
  button {
    display: flex;
    align-items: center;
  }

  div {
    gap: 9px;
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
    gap: 3px;
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

.workbench-capabilities__list {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;

  > button {
    display: grid;
    flex: 1;
    grid-template-columns: 28px minmax(0, 1fr) auto;
    gap: 10px;
    align-items: center;
    min-width: 0;
    min-height: 47px;
    padding: 7px 14px;
    color: var(--wb-text);
    text-align: left;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--wb-card-border);
    transition: background-color 160ms ease;

    &:last-child {
      border-bottom: 0;
    }

    &:hover,
    &:focus-visible {
      background: var(--wb-hover);
      outline: none;
    }
  }
}

.workbench-capabilities__icon {
  color: var(--wb-muted);
}

.workbench-capabilities__name {
  overflow: hidden;
  font-size: 13px;
  line-height: 1.35;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.workbench-capabilities__status {
  display: flex;
  gap: 7px;
  align-items: center;
  font-size: 11px;
  line-height: 1.3;
  color: var(--wb-muted);
  white-space: nowrap;

  i {
    flex: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
}

.workbench-capabilities__dot--ready {
  background: var(--wb-success);
}

.workbench-capabilities__dot--attention {
  background: var(--wb-warning);
}

.workbench-capabilities__dot--inactive {
  background: var(--wb-muted-soft);
}

@media (height <= 800px) {
  .workbench-capabilities__heading {
    min-height: 40px;
    padding-inline: 11px;

    h2 {
      font-size: 15px;
    }
  }

  .workbench-capabilities__list > button {
    grid-template-columns: 24px minmax(0, 1fr) auto;
    gap: 8px;
    min-height: 43px;
    padding: 5px 11px;
  }
}
</style>
