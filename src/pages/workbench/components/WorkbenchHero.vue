<template>
  <header class="workbench-hero">
    <div class="workbench-hero__copy">
      <div class="workbench-hero__eyebrow-row">
        <p class="workbench-hero__eyebrow">
          {{ t('workbenchHome.eyebrow') }}
        </p>
        <button
          type="button"
          class="workbench-hero__refresh"
          :title="t('workbenchHome.refresh')"
          :aria-label="t('workbenchHome.refresh')"
          @click="emit('refresh')"
        >
          <Refresh
            theme="outline"
            size="15"
            :class="{ 'workbench-hero__refresh-icon--loading': loading }"
          />
        </button>
      </div>
      <h1>{{ t('workbenchHome.title') }}</h1>
      <button
        type="button"
        class="workbench-hero__workspace"
        :title="workspaceRoot"
        @click="emit('openWorkspace')"
      >
        <span>
          {{ workspaceRoot || t('workbenchHome.workspaceNotSet') }}
        </span>
        <RightSmall theme="outline" size="15" />
      </button>
    </div>

    <div class="workbench-hero__visual" aria-hidden="true">
      <img :src="heroImage" alt="" />
    </div>

    <div class="workbench-hero__message">
      <strong>{{ t('workbenchHome.heroTagline') }}</strong>
      <span>{{ t('workbenchHome.heroSubtitle') }}</span>
      <i></i>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Refresh, RightSmall } from '@icon-park/vue-next';
import { useI18n } from 'vue-i18n';
import heroImage from '@/assets/workbench/workbench-code-hero.webp';

defineProps<{
  workspaceRoot: string;
  loading: boolean;
}>();

const emit = defineEmits<{
  refresh: [];
  openWorkspace: [];
}>();

const { t } = useI18n();
</script>

<style scoped lang="scss">
.workbench-hero {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(300px, 390px) minmax(
      132px,
      172px
    );
  gap: 12px;
  align-items: center;
  min-width: 0;
  height: 100%;
}

.workbench-hero__copy {
  min-width: 0;

  h1 {
    margin: 3px 0 0;
    overflow: hidden;
    font-size: 32px;
    font-weight: 680;
    line-height: 1.16;
    color: var(--wb-text);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.workbench-hero__eyebrow-row {
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: 0;
}

.workbench-hero__eyebrow {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.35;
  color: var(--wb-primary);
}

.workbench-hero__refresh {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  color: var(--wb-muted);
  background: transparent;
  border: 0;
  border-radius: 6px;
  opacity: 0;
  transition:
    color 160ms ease,
    opacity 160ms ease,
    background-color 160ms ease;

  &:hover,
  &:focus-visible {
    color: var(--wb-primary);
    background: var(--wb-hover);
    outline: none;
    opacity: 1;
  }
}

.workbench-hero:hover .workbench-hero__refresh {
  opacity: 0.72;
}

.workbench-hero__refresh-icon--loading {
  animation: workbench-refresh 0.8s linear infinite;
}

.workbench-hero__workspace {
  display: flex;
  gap: 3px;
  align-items: center;
  min-width: 0;
  max-width: min(100%, 540px);
  padding: 0;
  margin-top: 7px;
  font-size: 13px;
  line-height: 1.35;
  color: var(--wb-muted);
  text-align: left;
  background: transparent;
  border: 0;
  transition: color 160ms ease;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover,
  &:focus-visible {
    color: var(--wb-primary);
    outline: none;
  }
}

.workbench-hero__visual {
  position: relative;
  align-self: stretch;
  overflow: hidden;
  pointer-events: none;

  img {
    position: absolute;
    top: 50%;
    right: -12px;
    width: 430px;
    max-width: none;
    height: 142px;
    object-fit: cover;
    object-position: right center;
    mix-blend-mode: multiply;
    opacity: 0.82;
    mask-image: radial-gradient(
      ellipse 68% 72% at 62% 50%,
      #000 34%,
      rgb(0 0 0 / 84%) 52%,
      transparent 100%
    );
    transform: translateY(-50%);
  }
}

:global(.dark .workbench-hero__visual img) {
  filter: invert(1) hue-rotate(180deg) brightness(1.65) saturate(1.2);
  mix-blend-mode: screen;
  opacity: 0.54;
  mask-image: radial-gradient(
    ellipse 55% 62% at 68% 50%,
    #000 25%,
    rgb(0 0 0 / 82%) 38%,
    transparent 72%
  );
}

.workbench-hero__message {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  color: var(--wb-muted);

  strong {
    font-size: 13px;
    font-weight: 550;
    line-height: 1.5;
  }

  span {
    margin-top: 1px;
    font-size: 12px;
    line-height: 1.45;
  }

  i {
    width: 34px;
    height: 2px;
    margin-top: 7px;
    background: var(--wb-primary);
    border-radius: 2px;
  }
}

@keyframes workbench-refresh {
  to {
    transform: rotate(360deg);
  }
}

@media (width <= 1120px) {
  .workbench-hero {
    grid-template-columns: minmax(290px, 1fr) 300px 132px;
  }

  .workbench-hero__visual img {
    right: -22px;
    width: 370px;
  }
}

@media (width <= 900px) {
  .workbench-hero {
    grid-template-columns: minmax(280px, 1fr) 280px;
  }

  .workbench-hero__message {
    display: none;
  }
}

@media (height <= 800px) {
  .workbench-hero__copy h1 {
    margin-top: 1px;
    font-size: 28px;
  }

  .workbench-hero__eyebrow {
    font-size: 12px;
  }

  .workbench-hero__workspace {
    margin-top: 3px;
    font-size: 12px;
  }

  .workbench-hero__visual img {
    width: 340px;
    height: 104px;
  }

  .workbench-hero__message i {
    margin-top: 4px;
  }
}
</style>
