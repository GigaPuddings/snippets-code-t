<template>
  <div v-if="blocks" class="message-content markdown-body">
    <div
      v-for="(html, index) in blocks"
      :key="index"
      class="contents"
      v-html="html"
    ></div>
  </div>
  <div
    v-else
    class="message-content markdown-body"
    v-html="renderComplete(source)"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { createStreamingMarkdownRenderer } from './streamingMarkdown';

const props = defineProps<{
  source: string;
  streaming?: boolean;
  renderComplete: (source: string) => string;
}>();
let renderLive: ReturnType<typeof createStreamingMarkdownRenderer> | undefined;
const blocks = computed(() => {
  if (!props.streaming) {
    renderLive = undefined;
    return null;
  }
  renderLive ??= createStreamingMarkdownRenderer();
  return renderLive(props.source);
});
</script>
