import { computed, ref, watch, type Ref } from 'vue';

/** Display-only context; never becomes the filename draft or save payload. */
export function useContentHeading(
  enabled: Ref<boolean>,
  documentKey: Ref<string>
) {
  const heading = ref<string | null>(null);
  const titleFocused = ref(false);
  const showHeading = computed(
    () => enabled.value && !titleFocused.value && heading.value !== null
  );
  const clearHeading = () => {
    heading.value = null;
  };
  const setHeading = (value: string | null) => {
    heading.value = enabled.value ? value?.trim() || null : null;
  };
  watch([enabled, documentKey], clearHeading, { flush: 'sync' });
  return { heading, titleFocused, showHeading, setHeading, clearHeading };
}
