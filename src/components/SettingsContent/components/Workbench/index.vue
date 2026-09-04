<template>
  <div class="settings-panel">
    <div class="panel-header workbench-header">
      <h3 class="panel-title">{{ t('settings.workbench.title') }}</h3>
      <CustomButton size="small" plain :loading="loading" @click="refresh">
        {{ t('settings.workbench.refresh') }}
      </CustomButton>
    </div>

    <main class="panel-content workbench-content">
      <p v-if="loadError" class="workbench-alert">{{ loadError }}</p>

      <section class="workbench-metrics">
        <article
          v-for="metric in metrics"
          :key="metric.id"
          class="workbench-metric"
        >
          <span>{{ metric.label }}</span>
          <strong>{{ metric.value }}</strong>
          <small>{{ metric.meta }}</small>
        </article>
      </section>

      <section class="workbench-layers">
        <article v-for="layer in layers" :key="layer.id" class="layer-card">
          <div class="layer-card__header">
            <div class="layer-card__title">
              <component
                :is="layer.icon"
                theme="outline"
                size="18"
                :strokeWidth="3"
              />
              <strong>{{ layer.label }}</strong>
            </div>
            <span class="status-chip" :class="statusChipClass(layer.status)">
              {{ statusLabel(layer.status) }}
            </span>
          </div>

          <dl class="layer-card__stats">
            <div v-for="stat in layer.stats" :key="stat.label">
              <dt>{{ stat.label }}</dt>
              <dd :title="String(stat.value)">{{ stat.value }}</dd>
            </div>
          </dl>

          <div class="layer-card__actions">
            <CustomButton
              v-for="action in layer.actions"
              :key="action.label"
              size="small"
              plain
              @click="navigateTo(action)"
            >
              {{ action.label }}
            </CustomButton>
          </div>
        </article>
      </section>

      <section class="workbench-capabilities">
        <div class="workbench-section-title">
          {{ t('settings.workbench.capabilityTitle') }}
        </div>
        <div class="capability-grid">
          <article
            v-for="capability in capabilities"
            :key="capability.id"
            class="capability-row"
          >
            <div>
              <strong>{{ capability.label }}</strong>
              <small>{{ capability.meta }}</small>
            </div>
            <span
              class="status-chip"
              :class="statusChipClass(capability.status)"
            >
              {{ statusLabel(capability.status) }}
            </span>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { CustomButton } from '@/components/UI';
import { useWorkbenchOverview } from '@/workbench/useWorkbenchOverview';

defineOptions({ name: 'WorkbenchSettings' });

const { t } = useI18n();
const {
  loading,
  loadError,
  metrics,
  layers,
  capabilities,
  refresh,
  navigateTo,
  statusLabel,
  statusChipClass
} = useWorkbenchOverview();
</script>

<style scoped lang="scss" src="./workbench.scss"></style>
