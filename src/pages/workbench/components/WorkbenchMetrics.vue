<template>
  <section class="workbench-metrics" :aria-label="t('workbenchHome.metrics')">
    <button
      v-for="metric in metrics"
      :key="metric.id"
      type="button"
      class="workbench-metric"
      :class="`workbench-metric--${metric.id}`"
      @click="emit('select', metric.id)"
    >
      <span class="workbench-metric__icon" aria-hidden="true">
        <component
          :is="metricVisuals[metric.id]?.icon || FileText"
          theme="outline"
          size="29"
          :stroke-width="3"
        />
      </span>
      <span class="workbench-metric__copy">
        <span class="workbench-metric__label">{{ metric.label }}</span>
        <span class="workbench-metric__value-row">
          <strong>{{ metric.value }}</strong>
          <small>{{ metric.meta }}</small>
        </span>
      </span>
      <RightSmall class="workbench-metric__chevron" theme="outline" size="18" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { Brain, Cube, FileText, RightSmall, Search } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import type { Component } from 'vue';
import type { WorkbenchMetric } from '@/workbench/viewModel';

defineProps<{
  metrics: WorkbenchMetric[];
}>();

const emit = defineEmits<{
  select: [metricId: string];
}>();

const { t } = useI18n();

const metricVisuals: Record<string, { icon: Component }> = {
  content: { icon: FileText },
  plugins: { icon: Cube },
  search: { icon: Search },
  ai: { icon: Brain }
};
</script>

<style scoped lang="scss">
.workbench-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  min-width: 0;
  height: 100%;
}

.workbench-metric {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr) 18px;
  gap: 12px;
  align-items: center;
  min-width: 0;
  height: 100%;
  padding: 12px 14px;
  color: var(--wb-text);
  text-align: left;
  background: var(--wb-card-bg);
  border: 1px solid var(--wb-card-border);
  border-radius: 12px;
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

.workbench-metric__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  color: #397bf6;
  background: rgb(57 123 246 / 9%);
  border-radius: 12px;
}

.workbench-metric--plugins .workbench-metric__icon {
  color: #19b968;
  background: rgb(25 185 104 / 9%);
}

.workbench-metric--search .workbench-metric__icon {
  color: #8055ef;
  background: rgb(128 85 239 / 9%);
}

.workbench-metric--ai .workbench-metric__icon {
  color: #f28b16;
  background: rgb(242 139 22 / 10%);
}

.workbench-metric__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.workbench-metric__label {
  overflow: hidden;
  font-size: 13px;
  line-height: 1.35;
  color: var(--wb-muted);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.workbench-metric__value-row {
  display: flex;
  gap: 9px;
  align-items: baseline;
  min-width: 0;
  margin-top: 3px;

  strong {
    flex: none;
    font-size: 29px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    line-height: 1.05;
  }

  small {
    overflow: hidden;
    font-size: 12px;
    line-height: 1.3;
    color: var(--wb-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.workbench-metric__chevron {
  color: var(--wb-muted-soft);
  transition: color 160ms ease;
}

.workbench-metric:hover .workbench-metric__chevron,
.workbench-metric:focus-visible .workbench-metric__chevron {
  color: var(--wb-primary);
}

@media (width <= 1180px) {
  .workbench-metrics {
    gap: 9px;
  }

  .workbench-metric {
    grid-template-columns: 48px minmax(0, 1fr) 14px;
    gap: 9px;
    padding-inline: 10px;
  }

  .workbench-metric__icon {
    width: 48px;
    height: 48px;
  }

  .workbench-metric__value-row {
    gap: 6px;

    strong {
      font-size: 26px;
    }
  }
}

@media (width <= 900px) {
  .workbench-metric {
    grid-template-columns: minmax(0, 1fr) 12px;
  }

  .workbench-metric__icon {
    display: none;
  }
}

@media (height <= 800px) {
  .workbench-metric {
    grid-template-columns: 44px minmax(0, 1fr) 12px;
    gap: 8px;
    padding: 8px 10px;
  }

  .workbench-metric__icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
  }

  .workbench-metric__label {
    font-size: 12px;
  }

  .workbench-metric__value-row {
    margin-top: 1px;

    strong {
      font-size: 24px;
    }

    small {
      font-size: 11px;
    }
  }
}
</style>
