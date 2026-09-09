<template>
  <header
    class="group/hero grid h-full min-w-0 grid-cols-[minmax(300px,1fr)_minmax(300px,390px)_minmax(132px,172px)] items-center gap-3 [@media(max-width:1120px)]:grid-cols-[minmax(290px,1fr)_300px_132px] [@media(max-width:900px)]:grid-cols-[minmax(280px,1fr)_280px]"
  >
    <div class="min-w-0">
      <div class="flex min-w-0 items-center gap-2">
        <p
          class="m-0 text-sm font-medium leading-[1.35] text-workbench-primary [@media(max-height:800px)]:text-xs"
        >
          {{ t('workbenchHome.eyebrow') }}
        </p>
        <button
          type="button"
          class="inline-flex size-[26px] items-center justify-center rounded-md border-0 bg-transparent p-0 text-workbench-muted opacity-0 transition-[color,opacity,background-color] duration-[160ms] hover:bg-workbench-hover hover:text-workbench-primary hover:opacity-100 focus-visible:bg-workbench-hover focus-visible:text-workbench-primary focus-visible:opacity-100 focus-visible:outline-none group-hover/hero:opacity-[0.72]"
          :title="t('workbenchHome.refresh')"
          :aria-label="t('workbenchHome.refresh')"
          @click="emit('refresh')"
        >
          <Refresh
            theme="outline"
            size="15"
            :class="{ 'animate-spin [animation-duration:800ms]': loading }"
          />
        </button>
      </div>
      <h1
        class="mb-0 mt-[3px] truncate text-[32px] font-[680] leading-[1.16] text-workbench-text [@media(max-height:800px)]:mt-px [@media(max-height:800px)]:text-[28px]"
      >
        {{ t('workbenchHome.title') }}
      </h1>
      <button
        type="button"
        class="mt-[7px] flex min-w-0 max-w-[min(100%,540px)] items-center gap-[3px] border-0 bg-transparent p-0 text-left text-[13px] leading-[1.35] text-workbench-muted transition-colors duration-[160ms] hover:text-workbench-primary focus-visible:text-workbench-primary focus-visible:outline-none [@media(max-height:800px)]:mt-[3px] [@media(max-height:800px)]:text-xs"
        :title="workspaceRoot"
        @click="emit('openWorkspace')"
      >
        <span class="truncate">
          {{ workspaceRoot || t('workbenchHome.workspaceNotSet') }}
        </span>
        <RightSmall theme="outline" size="15" />
      </button>
    </div>

    <div
      class="pointer-events-none relative self-stretch overflow-visible"
      aria-hidden="true"
    >
      <img
        :src="heroImage"
        alt=""
        class="absolute right-[10px] top-1/2 h-[142px] w-[430px] max-w-none -translate-y-1/2 object-cover object-right opacity-[0.88] [filter:contrast(1.04)] [mask-image:radial-gradient(ellipse_68%_72%_at_62%_50%,#000_34%,rgb(0_0_0/84%)_52%,transparent_100%)] [mix-blend-mode:multiply] dark:opacity-[0.54] dark:[filter:invert(1)_hue-rotate(180deg)_brightness(1.65)_saturate(1.2)] dark:[mask-image:radial-gradient(ellipse_55%_62%_at_68%_50%,#000_25%,rgb(0_0_0/82%)_38%,transparent_72%)] dark:[mix-blend-mode:screen] [@media(max-height:800px)]:!w-[340px] [@media(max-height:800px)]:h-[104px] [@media(max-width:1120px)]:right-0 [@media(max-width:1120px)]:w-[370px]"
      />
    </div>

    <div
      class="flex min-w-0 flex-col items-start text-workbench-muted [@media(max-width:900px)]:hidden"
    >
      <strong class="text-[13px] font-[550] leading-normal">
        {{ t('workbenchHome.heroTagline') }}
      </strong>
      <span class="mt-px text-xs leading-[1.45]">
        {{ t('workbenchHome.heroSubtitle') }}
      </span>
      <i
        class="mt-[7px] h-0.5 w-[34px] rounded-sm bg-workbench-primary [@media(max-height:800px)]:mt-1"
      ></i>
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
