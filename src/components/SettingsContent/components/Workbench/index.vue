<template>
  <div class="settings-panel workbench-settings">
    <header class="panel-header">
      <div
        class="workbench-column flex flex-wrap items-center justify-between gap-2"
      >
        <h2 class="panel-title">{{ t('settings.workbench.title') }}</h2>
        <button
          type="button"
          class="ui-action refresh-action"
          :disabled="loading"
          :aria-busy="loading"
          @click="refresh"
        >
          <RefreshCw
            class="size-3.5"
            :class="{ 'motion-safe:animate-spin': loading }"
            aria-hidden="true"
          />
          {{ t('settings.workbench.refresh') }}
        </button>
      </div>
    </header>

    <main class="panel-content workbench-column grid gap-settings-group">
      <p
        v-if="loadError"
        role="alert"
        class="flex items-start gap-2 rounded-ui bg-[var(--el-color-warning-light-9)] px-3 py-2 text-ui-caption text-chat-warning"
      >
        <CircleAlert class="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        <span class="min-w-0 [overflow-wrap:anywhere]">{{ loadError }}</span>
      </p>

      <dl
        class="metric-strip"
        :aria-label="t('workbenchHome.metrics')"
        :aria-busy="loading"
      >
        <div
          v-for="metric in metrics"
          :key="metric.id"
          class="min-w-0 px-4 py-3.5"
        >
          <dt class="text-ui font-medium text-ui-main">
            {{ metric.label }}
          </dt>
          <dd class="mt-1 flex items-center justify-between gap-2">
            <strong
              class="text-[1.75rem] font-medium leading-tight tabular-nums tracking-tight text-ui-heading"
            >
              {{ metric.value ?? '—' }}
            </strong>
            <ContentTrend v-if="metric.trend?.length" :counts="metric.trend" />
          </dd>
          <dd
            class="mt-1 flex flex-wrap gap-x-1 text-ui-caption text-[color:var(--workbench-muted)]"
          >
            <span>
              {{
                metric.value === null && loading
                  ? t('common.loading')
                  : metric.meta
              }}
            </span>
            <span
              v-if="metric.detail"
              :class="{ 'text-chat-warning': metric.tone === 'warning' }"
            >
              <span aria-hidden="true">·</span>
              {{ metric.detail }}
            </span>
          </dd>
        </div>
      </dl>

      <section aria-labelledby="workbench-services">
        <h3 id="workbench-services" class="settings-group-title">
          {{ t('settings.workbench.servicesTitle') }}
        </h3>
        <ul class="service-list">
          <li v-for="layer in layers" :key="layer.id" class="service-row">
            <span class="service-icon">
              <component
                :is="layer.icon"
                class="size-[1.125rem]"
                aria-hidden="true"
              />
            </span>
            <div class="service-info min-w-0">
              <h4 class="m-0 text-ui font-medium leading-snug text-ui-heading">
                {{ t(`settings.workbench.serviceNames.${layer.id}`) }}
              </h4>
              <dl class="service-stats">
                <div
                  v-for="stat in layer.stats"
                  :key="stat.label"
                  class="inline-flex min-w-0 max-w-full items-baseline gap-1"
                >
                  <dt class="shrink-0">{{ stat.label }}</dt>
                  <dd
                    class="truncate tabular-nums text-ui-main"
                    :title="String(stat.value)"
                  >
                    {{ stat.value }}
                  </dd>
                </div>
              </dl>
            </div>
            <div class="service-actions">
              <button
                v-for="action in layer.actions"
                :key="action.label"
                type="button"
                class="ui-action service-action"
                @click="navigateTo(action)"
              >
                {{ action.label }}
              </button>
            </div>
            <span
              class="service-status status-chip"
              :class="statusChipClass(layer.status)"
            >
              {{ statusLabel(layer.status) }}
            </span>
          </li>
        </ul>
      </section>

      <section aria-labelledby="workbench-capabilities">
        <h3 id="workbench-capabilities" class="settings-group-title">
          {{ t('settings.workbench.capabilityTitle') }}
        </h3>
        <ul class="capability-list">
          <li
            v-for="capability in capabilities"
            :key="capability.id"
            class="flex min-w-0 items-baseline justify-between gap-2 border-b border-ui py-2.5"
          >
            <span class="min-w-0 text-ui text-ui-main [overflow-wrap:anywhere]">
              {{ capability.label }}
            </span>
            <span
              class="status-chip"
              :class="statusChipClass(capability.status)"
            >
              {{ capability.meta }}
            </span>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import CircleAlert from '~icons/lucide/circle-alert';
import RefreshCw from '~icons/lucide/refresh-cw';
import ContentTrend from '@/workbench/components/ContentTrend.vue';
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
