import { computed, ref, watch, type Ref } from 'vue';
import type { ChatDisplayMessage } from './types';

const MESSAGE_PAGE_SIZE = 20;

/** Bound initial DOM/Markdown work while retaining the complete persisted history. */
export function useChatMessageWindow(
  all: Ref<ChatDisplayMessage[]>,
  historyId: Ref<string>
) {
  const count = ref(MESSAGE_PAGE_SIZE);
  watch(
    historyId,
    () => {
      count.value = MESSAGE_PAGE_SIZE;
    },
    { flush: 'sync' }
  );
  const earlierCount = computed(() =>
    Math.max(0, all.value.length - count.value)
  );
  const messages = computed(() => all.value.slice(earlierCount.value));
  const showEarlier = (): void => {
    count.value = Math.min(all.value.length, count.value + MESSAGE_PAGE_SIZE);
  };
  return { messages, earlierCount, showEarlier };
}
