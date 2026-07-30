<template>
  <section
    class="clip-editor"
    :aria-label="$t('screenRecorder.trimHint')"
    @mousedown.stop
  >
    <video
      v-if="previewVideoSrc && !videoFailed"
      ref="videoRef"
      class="clip-preview-surface"
      :src="previewVideoSrc"
      :poster="currentThumbnail?.image"
      preload="auto"
      muted
      playsinline
      @loadedmetadata="handleVideoReady"
      @play="handleVideoPlay"
      @pause="handleVideoPause"
      @ended="handleVideoEnded"
      @error="handleVideoError"
    ></video>
    <img
      v-else-if="currentThumbnail"
      class="clip-preview-surface"
      :src="currentThumbnail.image"
      :alt="$t('screenRecorder.trimPreview')"
      draggable="false"
    />

    <div class="timeline-row">
      <button
        class="preview-toggle"
        type="button"
        :disabled="!canPreview"
        :title="
          playing
            ? $t('screenRecorder.pausePreview')
            : $t('screenRecorder.playPreview')
        "
        :aria-label="
          playing
            ? $t('screenRecorder.pausePreview')
            : $t('screenRecorder.playPreview')
        "
        @click="togglePlayback"
      >
        {{ playing ? 'Ⅱ' : '▶' }}
      </button>

      <div
        ref="timelineRef"
        class="timeline"
        @pointerdown="handleTrackPointerDown"
      >
        <div class="timeline-thumbnails">
          <img
            v-for="(thumbnail, index) in preview?.thumbnails || []"
            :key="`${thumbnail.timeMs}-${index}`"
            :src="thumbnail.image"
            alt=""
            draggable="false"
          />
          <span
            v-if="!preview?.thumbnails.length"
            class="timeline-placeholder"
            :class="{ loading }"
          ></span>
        </div>
        <span
          class="timeline-shade left"
          :style="{ width: `${startPercent}%` }"
        ></span>
        <span
          class="timeline-shade right"
          :style="{ width: `${100 - endPercent}%` }"
        ></span>
        <span
          class="timeline-selection"
          :style="{ left: `${startPercent}%`, right: `${100 - endPercent}%` }"
        ></span>
        <button
          class="trim-handle start"
          type="button"
          :style="{ left: `${startPercent}%` }"
          :aria-label="$t('screenRecorder.trimStart')"
          @pointerdown.stop.prevent="startDragging('start', $event)"
        ></button>
        <button
          class="trim-handle end"
          type="button"
          :style="{ left: `${endPercent}%` }"
          :aria-label="$t('screenRecorder.trimEnd')"
          @pointerdown.stop.prevent="startDragging('end', $event)"
        ></button>
        <span
          class="timeline-playhead"
          :style="{ left: `${playheadPercent}%` }"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { convertFileSrc } from '@tauri-apps/api/core';
import { computed, nextTick, onUnmounted, ref, watch } from 'vue';
import type { RecordingClipPreview } from '../core/types';

const props = defineProps<{
  preview: RecordingClipPreview | null;
  loading: boolean;
  durationMs: number;
  startMs: number;
  endMs: number;
}>();

const emit = defineEmits<{
  'update:startMs': [value: number];
  'update:endMs': [value: number];
  'preview-time-change': [value: number];
}>();

const timelineRef = ref<HTMLElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);
const dragging = ref<'start' | 'end' | null>(null);
const playing = ref(false);
const videoReady = ref(false);
const videoFailed = ref(false);
const playheadMs = ref(0);
let playbackFrame: number | null = null;
let lastEmittedTenth = -1;

const safeDuration = computed(() => Math.max(1, props.durationMs));
const minimumRangeMs = computed(() => Math.min(100, safeDuration.value));
const startPercent = computed(() => (props.startMs / safeDuration.value) * 100);
const endPercent = computed(() => (props.endMs / safeDuration.value) * 100);
const playheadPercent = computed(
  () => (playheadMs.value / safeDuration.value) * 100
);
const currentThumbnail = computed(() => {
  const thumbnails = props.preview?.thumbnails || [];
  if (!thumbnails.length) return null;
  return thumbnails.reduce((closest, thumbnail) =>
    Math.abs(thumbnail.timeMs - playheadMs.value) <
    Math.abs(closest.timeMs - playheadMs.value)
      ? thumbnail
      : closest
  );
});
const previewVideoSrc = computed(() => {
  const path = props.preview?.videoPath;
  if (!path) return '';
  return convertFileSrc(path);
});
const canPreview = computed(
  () => Boolean(previewVideoSrc.value) && videoReady.value && !videoFailed.value
);

const seekVideo = (value: number) => {
  const video = videoRef.value;
  if (!video || !Number.isFinite(video.duration)) return;
  const durationMs = video.duration * 1000;
  video.currentTime = Math.max(0, Math.min(durationMs, value)) / 1000;
};

const updatePlayhead = (value: number, force = false, seek = false) => {
  playheadMs.value = Math.max(
    props.startMs,
    Math.min(props.endMs, Math.round(value))
  );
  if (seek) {
    seekVideo(playheadMs.value);
  }
  const tenth = Math.round(playheadMs.value / 100);
  if (force || tenth !== lastEmittedTenth) {
    lastEmittedTenth = tenth;
    emit('preview-time-change', playheadMs.value);
  }
};

const updateFromPointer = (clientX: number) => {
  const rect = timelineRef.value?.getBoundingClientRect();
  if (!rect || !dragging.value) return;
  const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  const value = Math.round(ratio * safeDuration.value);
  if (dragging.value === 'start') {
    const next = Math.max(
      0,
      Math.min(value, props.endMs - minimumRangeMs.value)
    );
    emit('update:startMs', next);
    updatePlayhead(next, true, true);
    return;
  }
  const next = Math.min(
    safeDuration.value,
    Math.max(value, props.startMs + minimumRangeMs.value)
  );
  emit('update:endMs', next);
  if (playheadMs.value > next) {
    updatePlayhead(next, true, true);
  }
};

const handlePointerMove = (event: PointerEvent) =>
  updateFromPointer(event.clientX);

const stopDragging = () => {
  dragging.value = null;
  window.removeEventListener('pointermove', handlePointerMove);
  window.removeEventListener('pointerup', stopDragging);
};

const startDragging = (handle: 'start' | 'end', event: PointerEvent) => {
  stopPlayback();
  dragging.value = handle;
  window.addEventListener('pointermove', handlePointerMove);
  window.addEventListener('pointerup', stopDragging, { once: true });
  updateFromPointer(event.clientX);
};

const handleTrackPointerDown = (event: PointerEvent) => {
  const rect = timelineRef.value?.getBoundingClientRect();
  if (!rect) return;
  const value = ((event.clientX - rect.left) / rect.width) * safeDuration.value;
  const startDistance = Math.abs(value - props.startMs);
  const endDistance = Math.abs(value - props.endMs);
  startDragging(startDistance <= endDistance ? 'start' : 'end', event);
};

function stopPlayback(pauseVideo = true) {
  playing.value = false;
  if (playbackFrame !== null) {
    cancelAnimationFrame(playbackFrame);
    playbackFrame = null;
  }
  if (pauseVideo && videoRef.value && !videoRef.value.paused) {
    videoRef.value.pause();
  }
}

const playbackTick = () => {
  const video = videoRef.value;
  if (!playing.value || !video) return;
  const currentMs = video.currentTime * 1000;
  if (currentMs >= props.endMs - 12) {
    seekVideo(props.startMs);
    updatePlayhead(props.startMs);
  } else {
    updatePlayhead(currentMs);
  }
  playbackFrame = requestAnimationFrame(playbackTick);
};

const togglePlayback = async () => {
  if (playing.value) {
    stopPlayback();
    return;
  }
  const video = videoRef.value;
  if (!video || !canPreview.value) return;
  if (playheadMs.value < props.startMs || playheadMs.value >= props.endMs) {
    updatePlayhead(props.startMs, true, true);
  }
  try {
    await video.play();
  } catch {
    stopPlayback(false);
  }
};

const handleVideoReady = () => {
  videoReady.value = true;
  videoFailed.value = false;
  updatePlayhead(props.startMs, true, true);
};

const handleVideoPlay = () => {
  playing.value = true;
  if (playbackFrame === null) {
    playbackFrame = requestAnimationFrame(playbackTick);
  }
};

const handleVideoPause = () => {
  stopPlayback(false);
};

const handleVideoEnded = () => {
  stopPlayback(false);
  updatePlayhead(props.startMs, true, true);
};

const handleVideoError = () => {
  videoFailed.value = true;
  videoReady.value = false;
  stopPlayback(false);
};

watch(
  () => [props.startMs, props.endMs],
  ([start, end]) => {
    if (playheadMs.value < start || playheadMs.value > end) {
      updatePlayhead(start, true, true);
      return;
    }
    updatePlayhead(playheadMs.value, true, true);
  },
  { immediate: true }
);

watch(previewVideoSrc, async () => {
  stopPlayback();
  videoReady.value = false;
  videoFailed.value = false;
  playheadMs.value = props.startMs;
  await nextTick();
  videoRef.value?.load();
});

onUnmounted(() => {
  stopDragging();
  stopPlayback();
});
</script>

<style scoped lang="scss">
.clip-editor {
  @apply pointer-events-none absolute z-50 mx-auto;

  right: clamp(12px, 2.5vw, 28px);
  bottom: calc(var(--recorder-footer-height, 40px) + clamp(8px, 1.8vh, 16px));
  left: clamp(12px, 2.5vw, 28px);
  width: min(calc(100vw - clamp(24px, 5vw, 56px)), 960px);
}

.clip-preview-surface {
  position: fixed;
  inset: var(--recorder-title-height, 34px) 7px
    var(--recorder-footer-height, 40px);
  z-index: -1;
  width: calc(100vw - 14px);
  height: calc(
    100vh - var(--recorder-title-height, 34px) - var(
        --recorder-footer-height,
        40px
      )
  );
  pointer-events: none;
  object-fit: contain;
  background: rgb(0 0 0);
}

.timeline-row {
  display: grid;
  grid-template-columns: clamp(32px, 5.5vw, 40px) minmax(0, 1fr);
  gap: clamp(6px, 1.2vw, 10px);
  align-items: center;
}

.preview-toggle {
  @apply pointer-events-auto grid place-items-center justify-self-center rounded-full border border-white/25 bg-black/65 p-0 leading-none text-white shadow-lg backdrop-blur transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-40;

  width: clamp(30px, 5.5vh, 38px);
  height: clamp(30px, 5.5vh, 38px);
  font-size: clamp(10px, 1.8vh, 13px);
}

.timeline {
  @apply pointer-events-auto relative cursor-pointer select-none overflow-hidden rounded-md bg-recorder-soft shadow-lg ring-1 ring-black/10;

  height: clamp(42px, 8vh, 64px);
  touch-action: none;
}

.timeline-thumbnails {
  @apply absolute inset-0 flex;
}

.timeline-thumbnails img,
.timeline-placeholder {
  @apply h-full min-w-0 flex-1 object-cover;
}

.timeline-placeholder {
  background: linear-gradient(
      110deg,
      transparent 22%,
      rgb(255 255 255 / 32%) 44%,
      transparent 66%
    ),
    var(--recorder-soft);
  background-size: 220% 100%;
}

.timeline-placeholder.loading {
  animation: timeline-loading 1.1s linear infinite;
}

.timeline-shade {
  @apply pointer-events-none absolute bottom-0 top-0 z-10 bg-black/60;
}

.timeline-shade.left {
  left: 0;
}

.timeline-shade.right {
  right: 0;
}

.timeline-selection {
  @apply pointer-events-none absolute bottom-0 top-0 z-20 border-y-[3px] border-[var(--recorder-amber)];
}

.trim-handle {
  @apply absolute bottom-0 top-0 z-30 -translate-x-1/2 cursor-ew-resize border-0 bg-recorder-amber;

  width: clamp(8px, 1.4vw, 12px);
}

.trim-handle::after {
  content: '';

  @apply absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/45;
}

.timeline-playhead {
  @apply pointer-events-none absolute bottom-1 top-1 z-40 w-px -translate-x-1/2 bg-white shadow;
}

@keyframes timeline-loading {
  to {
    background-position: -220% 0;
  }
}
</style>
