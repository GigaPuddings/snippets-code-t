import { readonly, ref, type Ref } from 'vue';
import { parseSearchText } from '@/utils/searchParser';

const visible = ref(false);
const pendingContentSearch = ref<{ path: string; text: string } | null>(null);

export interface ConfigQuickSearchController {
  visible: Readonly<Ref<boolean>>;
  open: () => void;
  close: () => void;
  setVisible: (value: boolean) => void;
  pendingContentSearch: Readonly<Ref<{ path: string; text: string } | null>>;
  requestContentSearch: (path: string, query: string) => void;
  clearContentSearch: () => void;
}

export const useConfigQuickSearch = (): ConfigQuickSearchController => ({
  visible: readonly(visible),
  pendingContentSearch: readonly(pendingContentSearch),
  requestContentSearch: (path, query) => {
    const text = parseSearchText(query).text?.trim();
    pendingContentSearch.value = text ? { path, text } : null;
  },
  clearContentSearch: () => {
    pendingContentSearch.value = null;
  },
  open: (): void => {
    visible.value = true;
  },
  close: (): void => {
    visible.value = false;
  },
  setVisible: (value): void => {
    visible.value = value;
  }
});
