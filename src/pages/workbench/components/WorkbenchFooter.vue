<template>
  <footer class="workbench-footer">
    <div class="workbench-footer__inner">
      <div class="workbench-footer__status">
        <span class="workbench-footer__ready">
          <i></i>
          {{ t('workbenchHome.footer.workspaceReady') }}
        </span>
        <span class="workbench-footer__divider" aria-hidden="true"></span>
        <span>
          {{ t('workbenchHome.footer.recentCount', { count: recentCount }) }}
        </span>
      </div>
      <div class="workbench-footer__message">
        <Lightning theme="outline" size="14" />
        {{ t('workbenchHome.footer.tagline') }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Lightning } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';

defineProps<{
  recentCount: number;
}>();

const { t } = useI18n();
</script>

<style scoped lang="scss">
.workbench-footer {
  flex: none;
  width: 100%;
  height: 32px;
  font-size: 11px;
  color: var(--wb-muted);
  background: rgb(255 255 255 / 35%);
  border-top: 1px solid var(--wb-card-border);
}

:global(.dark .workbench-footer) {
  background: rgb(20 22 26 / 22%);
}

.workbench-footer__inner {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  height: 100%;
  padding: 0 clamp(24px, 3vw, 48px);
  margin: 0 auto;
}

.workbench-footer__status,
.workbench-footer__ready,
.workbench-footer__message {
  display: flex;
  align-items: center;
  min-width: 0;
}

.workbench-footer__status {
  gap: 12px;
}

.workbench-footer__ready {
  gap: 7px;
}

.workbench-footer__ready i {
  flex: none;
  width: 8px;
  height: 8px;
  background: var(--wb-success);
  border-radius: 50%;
}

.workbench-footer__divider {
  width: 1px;
  height: 13px;
  background: var(--wb-card-border);
}

.workbench-footer__message {
  gap: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (width <= 1080px) {
  .workbench-footer__inner {
    padding-inline: 22px;
  }
}

@media (width <= 760px) {
  .workbench-footer__message {
    display: none;
  }
}
</style>
